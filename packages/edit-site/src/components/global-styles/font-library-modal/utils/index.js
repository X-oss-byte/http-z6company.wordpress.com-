/**
 * Internal dependencies
 */
import { FONT_WEIGHTS, FONT_STYLES } from './constants';

export function setUIValuesNeeded( font, extraValues = {} ) {
	if ( ! font.name && ( font.fontFamily || font.slug ) ) {
		font.name = font.fontFamily || font.slug;
	}
	return {
		...font,
		...extraValues,
	};
}

export function isUrlEncoded( url ) {
	if ( typeof url !== 'string' ) {
		return false;
	}
	return url !== decodeURIComponent( url );
}

export function getFontFaceVariantName( face ) {
	const weightName = FONT_WEIGHTS[ face.fontWeight ] || face.fontWeight;
	const styleName =
		face.fontStyle === 'normal'
			? ''
			: FONT_STYLES[ face.fontStyle ] || face.fontStyle;
	return `${ weightName } ${ styleName }`;
}

export function mergeFontFaces( existing = [], incoming = [] ) {
	const map = new Map();
	for ( const face of existing ) {
		map.set( `${ face.fontWeight }${ face.fontStyle }`, face );
	}
	for ( const face of incoming ) {
		// This will overwrite if the src already exists, keeping it unique.
		map.set( `${ face.fontWeight }${ face.fontStyle }`, face );
	}
	return Array.from( map.values() );
}

export function mergeFontFamilies( existing = [], incoming = [] ) {
	const map = new Map();
	// Add the existing array to the map.
	for ( const font of existing ) {
		map.set( font.slug, { ...font } );
	}
	// Add the incoming array to the map, overwriting existing values excepting fontFace that need to be merged.
	for ( const font of incoming ) {
		if ( map.has( font.slug ) ) {
			const { fontFace: incomingFontFaces, ...restIncoming } = font;
			const existingFont = map.get( font.slug );
			// Merge the fontFaces existing with the incoming fontFaces.
			const mergedFontFaces = mergeFontFaces(
				existingFont.fontFace,
				incomingFontFaces
			);
			// Except for the fontFace key all the other keys are overwritten with the incoming values.
			map.set( font.slug, {
				...restIncoming,
				fontFace: mergedFontFaces,
			} );
		} else {
			map.set( font.slug, { ...font } );
		}
	}
	return Array.from( map.values() );
}

/*
 * Loads the font face from a URL and adds it to the browser.
 * It also adds it to the iframe document.
 */
export async function loadFontFaceInBrowser( fontFace, source, addTo = 'all' ) {
	let dataSource;

	if ( typeof source === 'string' ) {
		dataSource = `url(${ source })`;
		// eslint-disable-next-line no-undef
	} else if ( source instanceof File ) {
		dataSource = await source.arrayBuffer();
	}

	// eslint-disable-next-line no-undef
	const newFont = new FontFace( fontFace.fontFamily, dataSource, {
		style: fontFace.fontStyle,
		weight: fontFace.fontWeight,
	} );

	const loadedFace = await newFont.load();

	if ( addTo === 'document' || addTo === 'all' ) {
		document.fonts.add( loadedFace );
	}

	if ( addTo === 'iframe' || addTo === 'all' ) {
		const iframeDocument = document.querySelector(
			'iframe[name="editor-canvas"]'
		).contentDocument;
		iframeDocument.fonts.add( loadedFace );
	}
}

export function getDisplaySrcFromFontFace( input, urlPrefix ) {
	let src;
	if ( Array.isArray( input ) ) {
		src = input[ 0 ];
	} else {
		src = input;
	}
	// If it is a theme font, we need to make the url absolute
	if ( src.startsWith( 'file:.' ) && urlPrefix ) {
		src = src.replace( 'file:.', urlPrefix );
	}
	if ( ! isUrlEncoded( src ) ) {
		src = encodeURI( src );
	}
	return src;
}

function findNearest( input, numbers ) {
	// If the numbers array is empty, return null
	if ( numbers.length === 0 ) {
		return null;
	}
	// Sort the array based on the absolute difference with the input
	numbers.sort( ( a, b ) => Math.abs( input - a ) - Math.abs( input - b ) );
	// Return the first element (which will be the nearest) from the sorted array
	return numbers[ 0 ];
}

function extractFontWeights( fontFaces ) {
	const result = [];

	fontFaces.forEach( ( face ) => {
		const weights = String( face.fontWeight ).split( ' ' );

		if ( weights.length === 2 ) {
			const start = parseInt( weights[ 0 ] );
			const end = parseInt( weights[ 1 ] );

			for ( let i = start; i <= end; i += 100 ) {
				result.push( i );
			}
		} else if ( weights.length === 1 ) {
			result.push( parseInt( weights[ 0 ] ) );
		}
	} );

	return result;
}

export function getPreviewStyle( family ) {
	const style = { fontFamily: family.fontFamily };

	if ( ! Array.isArray( family.fontFace ) ) {
		style.fontWeight = '400';
		style.fontStyle = 'normal';
	}

	if ( family.fontFace ) {
		//get all the font faces with normal style
		const normalFaces = family.fontFace.filter(
			( face ) => face.fontStyle.toLowerCase() === 'normal'
		);
		if ( normalFaces.length > 0 ) {
			style.fontStyle = 'normal';
			const normalWeights = extractFontWeights( normalFaces );
			const nearestWeight = findNearest( 400, normalWeights );
			style.fontWeight = String( nearestWeight ) || '400';
		} else {
			style.fontStyle =
				( family.fontFace.length && family.fontFace[ 0 ].fontStyle ) ||
				'normal';
			style.fontWeight =
				( family.fontFace.length &&
					String( family.fontFace[ 0 ].fontWeight ) ) ||
				'400';
		}
	}

	return style;
}

export function makeFormDataFromFontFamilies( fontFamilies ) {
	const formData = new FormData();
	const newFontFamilies = fontFamilies.map( ( family, familyIndex ) => {
		if ( family?.fontFace ) {
			family.fontFace = family.fontFace.map( ( face, faceIndex ) => {
				if ( face.file ) {
					// Slugified file name because the it might contain spaces or characters treated differently on the server.
					const fileId = `file-${ familyIndex }-${ faceIndex }`;
					// Add the files to the formData
					formData.append( fileId, face.file, face.file.name );
					// remove the file object from the face object the file is referenced by the uploadedFile key
					const { file, ...faceWithoutFileProperty } = face;
					const newFace = {
						...faceWithoutFileProperty,
						uploadedFile: fileId,
					};
					return newFace;
				}
				return face;
			} );
		}
		return family;
	} );
	formData.append( 'fontFamilies', JSON.stringify( newFontFamilies ) );
	return formData;
}
