(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9607],{"./node_modules/highlight-words-core/dist/index.js":function(module){module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape:autoEscape,caseSensitive:caseSensitive,sanitize:sanitize,searchWords:searchWords,textToHighlight:textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start:start,end:end,highlight:highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/NRFPH2ON.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Hz:function(){return useRadioProviderContext},Wh:function(){return useRadioContext},o:function(){return RadioScopedContextProvider}});var _5C7J4IAS_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/5C7J4IAS.js"),ctx=(0,__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/CFEUKV6C.js").re)([_5C7J4IAS_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_5C7J4IAS_js__WEBPACK_IMPORTED_MODULE_1__.al]),useRadioContext=ctx.useContext,useRadioProviderContext=(ctx.useScopedContext,ctx.useProviderContext),RadioScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OJDCQDIL.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Y:function(){return Radio}});var _NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/NRFPH2ON.js"),_54J7EHCU_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/54J7EHCU.js"),_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/CFEUKV6C.js"),_4LP74VAP_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4LP74VAP.js"),_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/J7Q2EO23.js"),_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/PNRLI7OV.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");var useRadio=(0,_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store:store,value:value,checked:checked}=_b,props=(0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","value","checked"]);const context=(0,_NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__.Wh)();store=store||context;const id=(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.Me)(props.id),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isChecked=(0,_4LP74VAP_js__WEBPACK_IMPORTED_MODULE_5__.Kw)(store,(state=>null!=checked?checked:function getIsChecked(value,storeValue){if(void 0!==storeValue)return null!=value&&null!=storeValue?storeValue===value:!!storeValue}(value,null==state?void 0:state.value)));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!id)return;if(!isChecked)return;(null==store?void 0:store.getState().activeId)===id||null==store||store.setActiveId(id)}),[store,isChecked,id]);const onChangeProp=props.onChange,nativeRadio=function isNativeRadio(tagName,type){return"input"===tagName&&(!type||"radio"===type)}((0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.O)(ref,props.as||"input"),props.type),onChange=(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(props.disabled)return event.preventDefault(),void event.stopPropagation();nativeRadio||(event.currentTarget.checked=!0),null==onChangeProp||onChangeProp(event),event.defaultPrevented||null==store||store.setValue(value)})),onClickProp=props.onClick,onClick=(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||nativeRadio||onChange(event)})),onFocusProp=props.onFocus,onFocus=(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(null==onFocusProp||onFocusProp(event),event.defaultPrevented)return;if(!nativeRadio)return;if(!store)return;const{moves:moves,activeId:activeId}=store.getState();moves&&(id&&activeId!==id||onChange(event))}));return props=(0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id:id,role:nativeRadio?void 0:"radio",type:nativeRadio?"radio":void 0,"aria-checked":isChecked},props),{ref:(0,_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_4__.qq)(ref,props.ref),onChange:onChange,onClick:onClick,onFocus:onFocus}),props=(0,_54J7EHCU_js__WEBPACK_IMPORTED_MODULE_6__.E)((0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store:store,clickOnEnter:!nativeRadio},props)),(0,_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({value:nativeRadio?value:void 0,checked:isChecked},props)})),Radio=(0,_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.W5)((props=>{const htmlProps=useRadio(props);return(0,_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.az)("input",htmlProps)}))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/XQCQJGZ3.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{s:function(){return useRadioStore}});var EZ23JQKA=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/EZ23JQKA.js"),_4LP74VAP=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4LP74VAP.js"),BL2LUIIN=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/BL2LUIIN.js"),DEGIJZ7N=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/DEGIJZ7N.js"),WVTCK5PV=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/WVTCK5PV.js"),PNRLI7OV=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/PNRLI7OV.js");function createRadioStore(_a={}){var _a2,props=(0,PNRLI7OV.S0)(_a,[]);const syncState=null==(_a2=props.store)?void 0:_a2.getState(),composite=(0,BL2LUIIN.t)((0,PNRLI7OV.EZ)((0,PNRLI7OV.ih)({},props),{focusLoop:(0,WVTCK5PV.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),initialState=(0,PNRLI7OV.EZ)((0,PNRLI7OV.ih)({},composite.getState()),{value:(0,WVTCK5PV.LS)(props.value,null==syncState?void 0:syncState.value,props.defaultValue,null)}),radio=(0,DEGIJZ7N.MT)(initialState,composite,props.store);return(0,PNRLI7OV.EZ)((0,PNRLI7OV.ih)((0,PNRLI7OV.ih)({},composite),radio),{setValue:value=>radio.setState("value",value)})}function useRadioStore(props={}){const[store,update]=(0,_4LP74VAP.oR)(createRadioStore,props);return function useRadioStoreProps(store,update,props){return store=(0,EZ23JQKA.b)(store,update,props),(0,_4LP74VAP.XS)(store,props,"value","setValue"),store}(store,update,props)}},"./packages/components/node_modules/@ariakit/react-core/esm/radio/radio-group.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return RadioGroup}});var _chunks_NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/NRFPH2ON.js"),_chunks_56TAEBRJ_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/56TAEBRJ.js"),_chunks_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/CFEUKV6C.js"),_chunks_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/J7Q2EO23.js"),_chunks_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/PNRLI7OV.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/WVTCK5PV.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useRadioGroup=(0,_chunks_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store:store}=_b,props=(0,_chunks_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__.Hz)();return store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1),props=(0,_chunks_J7Q2EO23_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_NRFPH2ON_js__WEBPACK_IMPORTED_MODULE_3__.o,{value:store,children:element})),[store]),props=(0,_chunks_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"radiogroup"},props),props=(0,_chunks_56TAEBRJ_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_PNRLI7OV_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store:store},props))})),RadioGroup=(0,_chunks_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.LM)((props=>{const htmlProps=useRadioGroup(props);return(0,_chunks_CFEUKV6C_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{YF:function(){return useFloating},x7:function(){return arrow}});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options:options,fn(state){const{element:element,padding:padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding:padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element,padding:padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement:placement="bottom",strategy:strategy="absolute",middleware:middleware=[],platform:platform,elements:{reference:externalReference,floating:externalFloating}={},transform:transform=!0,whileElementsMounted:whileElementsMounted,open:open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy:strategy,placement:placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement:placement,strategy:strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference:setReference,setFloating:setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update:update,refs:refs,elements:elements,floatingStyles:floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:function(){return LayoutGroup}});var react=__webpack_require__("./node_modules/react/index.js"),LayoutGroupContext=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");const DeprecatedLayoutGroupContext=(0,react.createContext)(null);var use_force_update=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/use-force-update.mjs");const notify=node=>!node.isLayoutDirty&&node.willUpdate(!1);function nodeGroup(){const nodes=new Set,subscriptions=new WeakMap,dirtyAll=()=>nodes.forEach(notify);return{add:node=>{nodes.add(node),subscriptions.set(node,node.addEventListener("willUpdate",dirtyAll))},remove:node=>{nodes.delete(node);const unsubscribe=subscriptions.get(node);unsubscribe&&(unsubscribe(),subscriptions.delete(node)),dirtyAll()},dirty:dirtyAll}}const shouldInheritGroup=inherit=>!0===inherit,LayoutGroup=({children:children,id:id,inherit:inherit=!0})=>{const layoutGroupContext=(0,react.useContext)(LayoutGroupContext.p),deprecatedLayoutGroupContext=(0,react.useContext)(DeprecatedLayoutGroupContext),[forceRender,key]=(0,use_force_update.N)(),context=(0,react.useRef)(null),upstreamId=layoutGroupContext.id||deprecatedLayoutGroupContext;null===context.current&&((inherit=>shouldInheritGroup(!0===inherit)||"id"===inherit)(inherit)&&upstreamId&&(id=id?upstreamId+"-"+id:upstreamId),context.current={id:id,group:shouldInheritGroup(inherit)&&layoutGroupContext.group||nodeGroup()});const memoizedContext=(0,react.useMemo)((()=>({...context.current,forceRender:forceRender})),[key]);return react.createElement(LayoutGroupContext.p.Provider,{value:memoizedContext},children)}},"./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return useReducedMotion}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs"),_state_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");function useReducedMotion(){!_state_mjs__WEBPACK_IMPORTED_MODULE_1__.O.current&&(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.A)();const[shouldReduceMotion]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_state_mjs__WEBPACK_IMPORTED_MODULE_1__.n.current);return shouldReduceMotion}},"./packages/components/node_modules/framer-motion/dist/es/utils/use-force-update.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{N:function(){return useForceUpdate}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useForceUpdate(){const isMounted=(0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(),[forcedRenderCount,setForcedRenderCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),forceRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}},"./packages/components/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{t:function(){return useIsMounted}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}}}]);