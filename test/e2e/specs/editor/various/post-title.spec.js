/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'Post title', () => {
	test.describe( 'HTML handling', () => {
		test( `should (visually) render any HTML in Post Editor's post title field when in Visual editing mode`, async ( {
			page,
			editor,
			admin,
			requestUtils,
		} ) => {
			const { id: postId } = await requestUtils.createPost( {
				title: 'I am <em>emphasis</em> I am <strong>bold</strong> I am <a href="#">anchor</a>',
				content: 'Hello world',
				status: 'publish',
			} );

			await admin.visitAdminPage(
				'post.php',
				`post=${ postId }&action=edit`
			);

			await page.evaluate( () => {
				window.wp.data
					.dispatch( 'core/preferences' )
					.set( 'core/edit-post', 'welcomeGuide', false );

				window.wp.data
					.dispatch( 'core/preferences' )
					.set( 'core/edit-post', 'fullscreenMode', false );
			}, false );

			const pageTitleField = editor.canvas.getByRole( 'textbox', {
				name: 'Add title',
			} );

			await expect( pageTitleField ).toHaveText(
				'I am emphasis I am bold I am anchor'
			);

			// Check the HTML elements have been **rendered** rather than
			// output in raw form.
			await expect( pageTitleField.locator( 'css=em' ) ).toHaveText(
				'emphasis'
			);

			await expect( pageTitleField.locator( 'css=strong' ) ).toHaveText(
				'bold'
			);

			await expect( pageTitleField.locator( 'css=a' ) ).toHaveText(
				'anchor'
			);
		} );

		test( `should show raw HTML in the post title field when in Code view mode `, async ( {
			page,
			editor,
			admin,
			requestUtils,
			pageUtils,
		} ) => {
			const { id: postId } = await requestUtils.createPost( {
				title: 'I am <em>emphasis</em> I am <strong>bold</strong> I am <a href="#">anchor</a>',
				content: 'Hello world',
				status: 'publish',
			} );

			await admin.visitAdminPage(
				'post.php',
				`post=${ postId }&action=edit`
			);

			await page.evaluate( () => {
				window.wp.data
					.dispatch( 'core/preferences' )
					.set( 'core/edit-post', 'welcomeGuide', false );

				window.wp.data
					.dispatch( 'core/preferences' )
					.set( 'core/edit-post', 'fullscreenMode', false );
			}, false );

			// switch Editor to code view mode
			// Open code editor
			await pageUtils.pressKeys( 'secondary+M' ); // Emulates CTRL+Shift+Alt + M => toggle code editor

			// Check we're in Code view mode.
			await expect(
				editor.canvas.getByRole( 'heading', {
					name: 'Editing code',
				} )
			).toBeVisible();

			const codeViewPageTitleField = editor.canvas.getByRole( 'textbox', {
				name: 'Add title',
			} );

			// Check that the pageTitleField has the raw HTML
			await expect( codeViewPageTitleField ).toHaveText(
				'I am <em>emphasis</em> I am <strong>bold</strong> I am <a href="#">anchor</a>'
			);
		} );

		test( 'should strip HTML tags when pasting string of HTML into the post title field in Visual mode', async ( {
			editor,
			admin,
			pageUtils,
		} ) => {
			await admin.createNewPost();

			const pageTitleField = editor.canvas.getByRole( 'textbox', {
				name: 'Add title',
			} );

			await expect( pageTitleField ).toBeFocused();

			pageUtils.setClipboardData( {
				html: 'I am <em>emphasis</em> I am <strong>bold</strong> I am <a href="#">anchor</a>',
			} );
			await pageUtils.pressKeys( 'primary+v' );

			await expect( pageTitleField ).toHaveText(
				'I am emphasis I am bold I am anchor'
			);

			// Check the HTML elements have been stripped and are not rendered.
			await expect( pageTitleField.locator( 'css=em' ) ).toBeHidden();

			await expect( pageTitleField.locator( 'css=strong' ) ).toBeHidden();

			await expect( pageTitleField.locator( 'css=a' ) ).toBeHidden();
		} );

		test( 'should retain HTML tags when pasting string of HTML into the post title field in Code view mode', async ( {
			editor,
			admin,
			pageUtils,
		} ) => {
			await admin.createNewPost();

			// switch Editor to code view mode
			// Open code editor
			await pageUtils.pressKeys( 'secondary+M' ); // Emulates CTRL+Shift+Alt + M => toggle code editor

			// Check we're in Code view mode.
			await expect(
				editor.canvas.getByRole( 'heading', {
					name: 'Editing code',
				} )
			).toBeVisible();

			const pageTitleField = editor.canvas.getByRole( 'textbox', {
				name: 'Add title',
			} );

			pageUtils.setClipboardData( {
				plainText: 'hello plain',
				html: 'hello html',
			} );

			// focus on the title field
			await pageTitleField.focus();

			await pageUtils.pressKeys( 'primary+v' );

			await expect( pageTitleField ).toHaveText(
				'I am <em>emphasis</em> I am <strong>bold</strong> I am <a href="#">anchor</a>'
			);
		} );

		test( 'should strip HTML tags from block contents when pasted text is transformed to blocks', async ( {
			editor,
			admin,
			pageUtils,
		} ) => {
			await admin.createNewPost();

			const pageTitleField = editor.canvas.getByRole( 'textbox', {
				name: 'Add title',
			} );

			await expect( pageTitleField ).toBeFocused();

			// This HTML will ultimately be parsed into two blocks
			// The first will have it's `content` attribute stripped of HTML
			// and used as the Page Title.
			// The second will be inserted into the post contents and will
			// retain its HTML.
			pageUtils.setClipboardData( {
				html: `
					<h2>I am heading block title with <strong> HTML tag</strong></h2>
					<p>And I am the rest of titles with <em>emphasis tag</em>!</p>
				`,
			} );
			await pageUtils.pressKeys( 'primary+v' );

			// Check the HTML elements have been stripped from the first block's
			// `content` attribute...
			await expect( pageTitleField ).toHaveText(
				'I am heading block title with HTML tag'
			);

			// ...and are not rendered.
			await expect( pageTitleField.locator( 'css=strong' ) ).toBeHidden();

			// Check the 2nd block ended up in the post contents and did not
			// have its HTML stripped out.
			await expect.poll( editor.getBlocks ).toMatchObject( [
				{
					name: 'core/paragraph',
					attributes: {
						content:
							'And I am the rest of titles with <em>emphasis tag</em>!',
					},
				},
			] );
		} );
	} );
} );