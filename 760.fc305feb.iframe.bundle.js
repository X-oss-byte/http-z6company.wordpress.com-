(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[760,8842,3678,4532],{"./node_modules/remove-accents/index.js":function(module){var characterMap={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ả":"A","Ạ":"A","Ẩ":"A","Ẫ":"A","Ậ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ẻ":"E","Ẽ":"E","Ẹ":"E","Ể":"E","Ễ":"E","Ệ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ỉ":"I","Ị":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ỏ":"O","Ọ":"O","Ổ":"O","Ỗ":"O","Ộ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ớ":"O","Ợ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ủ":"U","Ụ":"U","Ử":"U","Ữ":"U","Ự":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ả":"a","ạ":"a","ẩ":"a","ẫ":"a","ậ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ẻ":"e","ẽ":"e","ẹ":"e","ể":"e","ễ":"e","ệ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ỉ":"i","ị":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ỏ":"o","ọ":"o","ổ":"o","ỗ":"o","ộ":"o","ờ":"o","ở":"o","ỡ":"o","ớ":"o","ợ":"o","ù":"u","ú":"u","û":"u","ü":"u","ủ":"u","ụ":"u","ử":"u","ữ":"u","ự":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z","й":"и","Й":"И","ё":"е","Ё":"Е"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,"");function matcher(match){return characterMap[match]}var removeAccents=function(string){return string.replace(allAccents,matcher)};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents},"./node_modules/sprintf-js/src/sprintf.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var re={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};function sprintf(key){return function sprintf_format(parse_tree,argv){var arg,i,k,match,pad,pad_character,pad_length,is_positive,sign,cursor=1,tree_length=parse_tree.length,output="";for(i=0;i<tree_length;i++)if("string"==typeof parse_tree[i])output+=parse_tree[i];else if(Array.isArray(parse_tree[i])){if((match=parse_tree[i])[2])for(arg=argv[cursor],k=0;k<match[2].length;k++){if(!arg.hasOwnProperty(match[2][k]))throw new Error(sprintf('[sprintf] property "%s" does not exist',match[2][k]));arg=arg[match[2][k]]}else arg=match[1]?argv[match[1]]:argv[cursor++];if(re.not_type.test(match[8])&&re.not_primitive.test(match[8])&&arg instanceof Function&&(arg=arg()),re.numeric_arg.test(match[8])&&"number"!=typeof arg&&isNaN(arg))throw new TypeError(sprintf("[sprintf] expecting number but found %T",arg));switch(re.number.test(match[8])&&(is_positive=arg>=0),match[8]){case"b":arg=parseInt(arg,10).toString(2);break;case"c":arg=String.fromCharCode(parseInt(arg,10));break;case"d":case"i":arg=parseInt(arg,10);break;case"j":arg=JSON.stringify(arg,null,match[6]?parseInt(match[6]):0);break;case"e":arg=match[7]?parseFloat(arg).toExponential(match[7]):parseFloat(arg).toExponential();break;case"f":arg=match[7]?parseFloat(arg).toFixed(match[7]):parseFloat(arg);break;case"g":arg=match[7]?String(Number(arg.toPrecision(match[7]))):parseFloat(arg);break;case"o":arg=(parseInt(arg,10)>>>0).toString(8);break;case"s":arg=String(arg),arg=match[7]?arg.substring(0,match[7]):arg;break;case"t":arg=String(!!arg),arg=match[7]?arg.substring(0,match[7]):arg;break;case"T":arg=Object.prototype.toString.call(arg).slice(8,-1).toLowerCase(),arg=match[7]?arg.substring(0,match[7]):arg;break;case"u":arg=parseInt(arg,10)>>>0;break;case"v":arg=arg.valueOf(),arg=match[7]?arg.substring(0,match[7]):arg;break;case"x":arg=(parseInt(arg,10)>>>0).toString(16);break;case"X":arg=(parseInt(arg,10)>>>0).toString(16).toUpperCase()}re.json.test(match[8])?output+=arg:(!re.number.test(match[8])||is_positive&&!match[3]?sign="":(sign=is_positive?"+":"-",arg=arg.toString().replace(re.sign,"")),pad_character=match[4]?"0"===match[4]?"0":match[4].charAt(1):" ",pad_length=match[6]-(sign+arg).length,pad=match[6]&&pad_length>0?pad_character.repeat(pad_length):"",output+=match[5]?sign+arg+pad:"0"===pad_character?sign+pad+arg:pad+sign+arg)}return output}(function sprintf_parse(fmt){if(sprintf_cache[fmt])return sprintf_cache[fmt];var match,_fmt=fmt,parse_tree=[],arg_names=0;for(;_fmt;){if(null!==(match=re.text.exec(_fmt)))parse_tree.push(match[0]);else if(null!==(match=re.modulo.exec(_fmt)))parse_tree.push("%");else{if(null===(match=re.placeholder.exec(_fmt)))throw new SyntaxError("[sprintf] unexpected placeholder");if(match[2]){arg_names|=1;var field_list=[],replacement_field=match[2],field_match=[];if(null===(field_match=re.key.exec(replacement_field)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(field_list.push(field_match[1]);""!==(replacement_field=replacement_field.substring(field_match[0].length));)if(null!==(field_match=re.key_access.exec(replacement_field)))field_list.push(field_match[1]);else{if(null===(field_match=re.index_access.exec(replacement_field)))throw new SyntaxError("[sprintf] failed to parse named argument key");field_list.push(field_match[1])}match[2]=field_list}else arg_names|=2;if(3===arg_names)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");parse_tree.push(match)}_fmt=_fmt.substring(match[0].length)}return sprintf_cache[fmt]=parse_tree}(key),arguments)}function vsprintf(fmt,argv){return sprintf.apply(null,[fmt].concat(argv||[]))}var sprintf_cache=Object.create(null);exports.sprintf=sprintf,exports.vsprintf=vsprintf,"undefined"!=typeof window&&(window.sprintf=sprintf,window.vsprintf=vsprintf,void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return{sprintf:sprintf,vsprintf:vsprintf}}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}()},"./node_modules/tannin/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var PRECEDENCE,OPENERS,TERMINATORS,PATTERN;__webpack_require__.d(__webpack_exports__,{Z:function(){return Tannin}}),PRECEDENCE={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},OPENERS=["(","?"],TERMINATORS={")":["("],":":["?","?:"]},PATTERN=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var OPERATORS={"!":function(a){return!a},"*":function(a,b){return a*b},"/":function(a,b){return a/b},"%":function(a,b){return a%b},"+":function(a,b){return a+b},"-":function(a,b){return a-b},"<":function(a,b){return a<b},"<=":function(a,b){return a<=b},">":function(a,b){return a>b},">=":function(a,b){return a>=b},"==":function(a,b){return a===b},"!=":function(a,b){return a!==b},"&&":function(a,b){return a&&b},"||":function(a,b){return a||b},"?:":function(a,b,c){if(a)throw b;return c}};function compile(expression){var terms=function postfix(expression){for(var match,operator,term,element,terms=[],stack=[];match=expression.match(PATTERN);){for(operator=match[0],(term=expression.substr(0,match.index).trim())&&terms.push(term);element=stack.pop();){if(TERMINATORS[operator]){if(TERMINATORS[operator][0]===element){operator=TERMINATORS[operator][1]||operator;break}}else if(OPENERS.indexOf(element)>=0||PRECEDENCE[element]<PRECEDENCE[operator]){stack.push(element);break}terms.push(element)}TERMINATORS[operator]||stack.push(operator),expression=expression.substr(match.index+operator.length)}return(expression=expression.trim())&&terms.push(expression),terms.concat(stack.reverse())}(expression);return function(variables){return function evaluate(postfix,variables){var i,j,args,getOperatorResult,term,value,stack=[];for(i=0;i<postfix.length;i++){if(term=postfix[i],getOperatorResult=OPERATORS[term]){for(j=getOperatorResult.length,args=Array(j);j--;)args[j]=stack.pop();try{value=getOperatorResult.apply(null,args)}catch(earlyReturn){return earlyReturn}}else value=variables.hasOwnProperty(term)?variables[term]:+term;stack.push(value)}return stack[0]}(terms,variables)}}var DEFAULT_OPTIONS={contextDelimiter:"",onMissingKey:null};function Tannin(data,options){var key;for(key in this.data=data,this.pluralForms={},this.options={},DEFAULT_OPTIONS)this.options[key]=void 0!==options&&key in options?options[key]:DEFAULT_OPTIONS[key]}Tannin.prototype.getPluralForm=function(domain,n){var config,plural,pf,getPluralForm=this.pluralForms[domain];return getPluralForm||("function"!=typeof(pf=(config=this.data[domain][""])["Plural-Forms"]||config["plural-forms"]||config.plural_forms)&&(plural=function getPluralExpression(pf){var parts,i,part;for(parts=pf.split(";"),i=0;i<parts.length;i++)if(0===(part=parts[i].trim()).indexOf("plural="))return part.substr(7)}(config["Plural-Forms"]||config["plural-forms"]||config.plural_forms),pf=function pluralForms(expression){var evaluate=compile(expression);return function(n){return+evaluate({n:n})}}(plural)),getPluralForm=this.pluralForms[domain]=pf),getPluralForm(n)},Tannin.prototype.dcnpgettext=function(domain,context,singular,plural,n){var index,key,entry;return index=void 0===n?0:this.getPluralForm(domain,n),key=singular,context&&(key=context+this.options.contextDelimiter+singular),(entry=this.data[domain][key])&&entry[index]?entry[index]:(this.options.onMissingKey&&this.options.onMissingKey(singular,domain),0===index?singular:plural)}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/NRFPH2ON.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Hz:function(){return useRadioProviderContext},Wh:function(){return useRadioContext},o:function(){return RadioScopedContextProvider}});var _5C7J4IAS_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/5C7J4IAS.js"),ctx=(0,__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/CFEUKV6C.js").re)([_5C7J4IAS_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_5C7J4IAS_js__WEBPACK_IMPORTED_MODULE_1__.al]),useRadioContext=ctx.useContext,useRadioProviderContext=(ctx.useScopedContext,ctx.useProviderContext),RadioScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OJDCQDIL.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Y:function(){return Radio}});var _NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/NRFPH2ON.js"),_54J7EHCU_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/54J7EHCU.js"),_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/CFEUKV6C.js"),_4LP74VAP_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4LP74VAP.js"),_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/J7Q2EO23.js"),_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/PNRLI7OV.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");var useRadio=(0,_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store:store,value:value,checked:checked}=_b,props=(0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","value","checked"]);const context=(0,_NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__.Wh)();store=store||context;const id=(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.Me)(props.id),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isChecked=(0,_4LP74VAP_js__WEBPACK_IMPORTED_MODULE_5__.Kw)(store,(state=>null!=checked?checked:function getIsChecked(value,storeValue){if(void 0!==storeValue)return null!=value&&null!=storeValue?storeValue===value:!!storeValue}(value,null==state?void 0:state.value)));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!id)return;if(!isChecked)return;(null==store?void 0:store.getState().activeId)===id||null==store||store.setActiveId(id)}),[store,isChecked,id]);const onChangeProp=props.onChange,nativeRadio=function isNativeRadio(tagName,type){return"input"===tagName&&(!type||"radio"===type)}((0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.O)(ref,props.as||"input"),props.type),onChange=(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(props.disabled)return event.preventDefault(),void event.stopPropagation();nativeRadio||(event.currentTarget.checked=!0),null==onChangeProp||onChangeProp(event),event.defaultPrevented||null==store||store.setValue(value)})),onClickProp=props.onClick,onClick=(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||nativeRadio||onChange(event)})),onFocusProp=props.onFocus,onFocus=(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(null==onFocusProp||onFocusProp(event),event.defaultPrevented)return;if(!nativeRadio)return;if(!store)return;const{moves:moves,activeId:activeId}=store.getState();moves&&(id&&activeId!==id||onChange(event))}));return props=(0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id:id,role:nativeRadio?void 0:"radio",type:nativeRadio?"radio":void 0,"aria-checked":isChecked},props),{ref:(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.qq)(ref,props.ref),onChange:onChange,onClick:onClick,onFocus:onFocus}),props=(0,_54J7EHCU_js__WEBPACK_IMPORTED_MODULE_6__.E)((0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store:store,clickOnEnter:!nativeRadio},props)),(0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({value:nativeRadio?value:void 0,checked:isChecked},props)})),Radio=(0,_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.W5)((props=>{const htmlProps=useRadio(props);return(0,_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.az)("input",htmlProps)}))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/XQCQJGZ3.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{s:function(){return useRadioStore}});var EZ23JQKA=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/EZ23JQKA.js"),_4LP74VAP=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4LP74VAP.js"),BL2LUIIN=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/BL2LUIIN.js"),DEGIJZ7N=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/DEGIJZ7N.js"),WVTCK5PV=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/WVTCK5PV.js"),PNRLI7OV=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/PNRLI7OV.js");function createRadioStore(_a={}){var _a2,props=(0,PNRLI7OV.S0)(_a,[]);const syncState=null==(_a2=props.store)?void 0:_a2.getState(),composite=(0,BL2LUIIN.t)((0,PNRLI7OV.EZ)((0,PNRLI7OV.ih)({},props),{focusLoop:(0,WVTCK5PV.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),initialState=(0,PNRLI7OV.EZ)((0,PNRLI7OV.ih)({},composite.getState()),{value:(0,WVTCK5PV.LS)(props.value,null==syncState?void 0:syncState.value,props.defaultValue,null)}),radio=(0,DEGIJZ7N.MT)(initialState,composite,props.store);return(0,PNRLI7OV.EZ)((0,PNRLI7OV.ih)((0,PNRLI7OV.ih)({},composite),radio),{setValue:value=>radio.setState("value",value)})}function useRadioStore(props={}){const[store,update]=(0,_4LP74VAP.oR)(createRadioStore,props);return function useRadioStoreProps(store,update,props){return store=(0,EZ23JQKA.b)(store,update,props),(0,_4LP74VAP.XS)(store,props,"value","setValue"),store}(store,update,props)}},"./packages/components/node_modules/@ariakit/react-core/esm/radio/radio-group.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return RadioGroup}});var _chunks_NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/NRFPH2ON.js"),_chunks_56TAEBRJ_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/56TAEBRJ.js"),_chunks_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/CFEUKV6C.js"),_chunks_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/J7Q2EO23.js"),_chunks_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/PNRLI7OV.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/WVTCK5PV.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useRadioGroup=(0,_chunks_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store:store}=_b,props=(0,_chunks_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__.Hz)();return store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1),props=(0,_chunks_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__.o,{value:store,children:element})),[store]),props=(0,_chunks_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"radiogroup"},props),props=(0,_chunks_56TAEBRJ_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store:store},props))})),RadioGroup=(0,_chunks_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.LM)((props=>{const htmlProps=useRadioGroup(props);return(0,_chunks_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./packages/components/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:function(){return LayoutGroup}});var react=__webpack_require__("./node_modules/react/index.js"),LayoutGroupContext=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");const DeprecatedLayoutGroupContext=(0,react.createContext)(null);var use_force_update=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/use-force-update.mjs");const notify=node=>!node.isLayoutDirty&&node.willUpdate(!1);function nodeGroup(){const nodes=new Set,subscriptions=new WeakMap,dirtyAll=()=>nodes.forEach(notify);return{add:node=>{nodes.add(node),subscriptions.set(node,node.addEventListener("willUpdate",dirtyAll))},remove:node=>{nodes.delete(node);const unsubscribe=subscriptions.get(node);unsubscribe&&(unsubscribe(),subscriptions.delete(node)),dirtyAll()},dirty:dirtyAll}}const shouldInheritGroup=inherit=>!0===inherit,LayoutGroup=({children:children,id:id,inherit:inherit=!0})=>{const layoutGroupContext=(0,react.useContext)(LayoutGroupContext.p),deprecatedLayoutGroupContext=(0,react.useContext)(DeprecatedLayoutGroupContext),[forceRender,key]=(0,use_force_update.N)(),context=(0,react.useRef)(null),upstreamId=layoutGroupContext.id||deprecatedLayoutGroupContext;null===context.current&&((inherit=>shouldInheritGroup(!0===inherit)||"id"===inherit)(inherit)&&upstreamId&&(id=id?upstreamId+"-"+id:upstreamId),context.current={id:id,group:shouldInheritGroup(inherit)&&layoutGroupContext.group||nodeGroup()});const memoizedContext=(0,react.useMemo)((()=>({...context.current,forceRender:forceRender})),[key]);return react.createElement(LayoutGroupContext.p.Provider,{value:memoizedContext},children)}},"./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return useReducedMotion}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs"),_state_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");function useReducedMotion(){!_state_mjs__WEBPACK_IMPORTED_MODULE_1__.O.current&&(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.A)();const[shouldReduceMotion]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_state_mjs__WEBPACK_IMPORTED_MODULE_1__.n.current);return shouldReduceMotion}},"./packages/components/node_modules/framer-motion/dist/es/utils/use-force-update.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{N:function(){return useForceUpdate}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useForceUpdate(){const isMounted=(0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(),[forcedRenderCount,setForcedRenderCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),forceRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}},"./packages/components/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{t:function(){return useIsMounted}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}}}]);