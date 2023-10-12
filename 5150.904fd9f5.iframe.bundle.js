/*! For license information please see 5150.904fd9f5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[5150],{"./node_modules/downshift/dist/downshift.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{L7:function(){return useSelect}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/downshift/node_modules/react-is/index.js");function t(t){return null!=t&&"object"==typeof t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}var idCounter=0;function noop(){}function scrollIntoView(node,menuNode){if(node){var actions=function index_module(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentNode)===f){s.push(p);break}p===document.body&&n(p)&&!n(document.documentElement)||n(p,a)&&s.push(p)}for(var g=o.visualViewport?o.visualViewport.width:innerWidth,m=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,M=W.right,E=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?E:y+b/2,I="center"===u?V+H/2:"end"===u?M:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&E<=m&&M<=g&&y>=R&&E<=Y&&V>=L&&M<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),N=parseInt(S.borderTopWidth,10),q=parseInt(S.borderRightWidth,10),z=parseInt(S.borderBottomWidth,10),A=0,F=0,G="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-q:0,J="offsetHeight"in k?k.offsetHeight-k.clientHeight-N-z:0;if(f===k)A="start"===d?x:"end"===d?x-m:"nearest"===d?r(v,v+m,m,N,z,v+x,v+x+b,b):x-m/2,F="start"===u?I:"center"===u?I-g/2:"end"===u?I-g:r(w,w+g,g,j,q,w+I,w+I+H,H),A=Math.max(0,A+v),F=Math.max(0,F+w);else{A="start"===d?x-R-N:"end"===d?x-Y+z+J:"nearest"===d?r(R,Y,D,N,z+J,x,x+b,b):x-(R+D/2)+J/2,F="start"===u?I-L-j:"center"===u?I-(L+O/2)+G/2:"end"===u?I-X+q+G:r(L,X,O,j,q+G,I,I+H,H);var K=k.scrollLeft,P=k.scrollTop;x+=P-(A=Math.max(0,Math.min(P+A,k.scrollHeight-D+J))),I+=K-(F=Math.max(0,Math.min(K+F,k.scrollWidth-O+G)))}C.push({el:k,top:A,left:F})}return C}(node,{boundary:menuNode,block:"nearest",scrollMode:"if-needed"});actions.forEach((function(_ref){var el=_ref.el,top=_ref.top,left=_ref.left;el.scrollTop=top,el.scrollLeft=left}))}}function isOrContainsNode(parent,child){return parent===child||child instanceof Node&&parent.contains&&parent.contains(child)}function debounce(fn,time){var timeoutId;function cancel(){timeoutId&&clearTimeout(timeoutId)}function wrapper(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];cancel(),timeoutId=setTimeout((function(){timeoutId=null,fn.apply(void 0,args)}),time)}return wrapper.cancel=cancel,wrapper}function callAllEventHandlers(){for(var _len2=arguments.length,fns=new Array(_len2),_key2=0;_key2<_len2;_key2++)fns[_key2]=arguments[_key2];return function(event){for(var _len3=arguments.length,args=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++)args[_key3-1]=arguments[_key3];return fns.some((function(fn){return fn&&fn.apply(void 0,[event].concat(args)),event.preventDownshiftDefault||event.hasOwnProperty("nativeEvent")&&event.nativeEvent.preventDownshiftDefault}))}}function handleRefs(){for(var _len4=arguments.length,refs=new Array(_len4),_key4=0;_key4<_len4;_key4++)refs[_key4]=arguments[_key4];return function(node){refs.forEach((function(ref){"function"==typeof ref?ref(node):ref&&(ref.current=node)}))}}function generateId(){return String(idCounter++)}function getA11yStatusMessage(_ref2){var isOpen=_ref2.isOpen,resultCount=_ref2.resultCount,previousResultCount=_ref2.previousResultCount;return isOpen?resultCount?resultCount!==previousResultCount?resultCount+" result"+(1===resultCount?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function getState(state,props){return Object.keys(state).reduce((function(prevState,key){return prevState[key]=isControlledProp(props,key)?props[key]:state[key],prevState}),{})}function isControlledProp(props,key){return void 0!==props[key]}function normalizeArrowKey(event){var key=event.key,keyCode=event.keyCode;return keyCode>=37&&keyCode<=40&&0!==key.indexOf("Arrow")?"Arrow"+key:key}function getNextWrappingIndex(moveAmount,baseIndex,itemCount,getItemNodeFromIndex,circular){if(void 0===circular&&(circular=!0),0===itemCount)return-1;var itemsLastIndex=itemCount-1;("number"!=typeof baseIndex||baseIndex<0||baseIndex>=itemCount)&&(baseIndex=moveAmount>0?-1:itemsLastIndex+1);var newIndex=baseIndex+moveAmount;newIndex<0?newIndex=circular?itemsLastIndex:0:newIndex>itemsLastIndex&&(newIndex=circular?0:itemsLastIndex);var nonDisabledNewIndex=getNextNonDisabledIndex(moveAmount,newIndex,itemCount,getItemNodeFromIndex,circular);return-1===nonDisabledNewIndex?baseIndex>=itemCount?-1:baseIndex:nonDisabledNewIndex}function getNextNonDisabledIndex(moveAmount,baseIndex,itemCount,getItemNodeFromIndex,circular){var currentElementNode=getItemNodeFromIndex(baseIndex);if(!currentElementNode||!currentElementNode.hasAttribute("disabled"))return baseIndex;if(moveAmount>0){for(var index=baseIndex+1;index<itemCount;index++)if(!getItemNodeFromIndex(index).hasAttribute("disabled"))return index}else for(var _index=baseIndex-1;_index>=0;_index--)if(!getItemNodeFromIndex(_index).hasAttribute("disabled"))return _index;return circular?moveAmount>0?getNextNonDisabledIndex(1,0,itemCount,getItemNodeFromIndex,!1):getNextNonDisabledIndex(-1,itemCount-1,itemCount,getItemNodeFromIndex,!1):-1}function targetWithinDownshift(target,downshiftElements,document,checkActiveElement){return void 0===checkActiveElement&&(checkActiveElement=!0),downshiftElements.some((function(contextNode){return contextNode&&(isOrContainsNode(contextNode,target)||checkActiveElement&&isOrContainsNode(contextNode,document.activeElement))}))}var cleanupStatus=debounce((function(documentProp){getStatusDiv(documentProp).textContent=""}),500);function setStatus(status,documentProp){var div=getStatusDiv(documentProp);status&&(div.textContent=status,cleanupStatus(documentProp))}function getStatusDiv(documentProp){void 0===documentProp&&(documentProp=document);var statusDiv=documentProp.getElementById("a11y-status-message");return statusDiv||((statusDiv=documentProp.createElement("div")).setAttribute("id","a11y-status-message"),statusDiv.setAttribute("role","status"),statusDiv.setAttribute("aria-live","polite"),statusDiv.setAttribute("aria-relevant","additions text"),Object.assign(statusDiv.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),documentProp.body.appendChild(statusDiv),statusDiv)}var dropdownDefaultStateValues={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function callOnChangeProps(action,state,newState){var props=action.props,type=action.type,changes={};Object.keys(state).forEach((function(key){!function invokeOnChangeHandler(key,action,state,newState){var props=action.props,type=action.type,handler="on"+capitalizeString(key)+"Change";props[handler]&&void 0!==newState[key]&&newState[key]!==state[key]&&props[handler]((0,esm_extends.Z)({type:type},newState))}(key,action,state,newState),newState[key]!==state[key]&&(changes[key]=newState[key])})),props.onStateChange&&Object.keys(changes).length&&props.onStateChange((0,esm_extends.Z)({type:type},changes))}var updateA11yStatus=debounce((function(getA11yMessage,document){setStatus(getA11yMessage(),document)}),200),useIsomorphicLayoutEffect="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?react.useLayoutEffect:react.useEffect;function useElementIds(_ref){var _ref$id=_ref.id,id=void 0===_ref$id?"downshift-"+generateId():_ref$id,labelId=_ref.labelId,menuId=_ref.menuId,getItemId=_ref.getItemId,toggleButtonId=_ref.toggleButtonId,inputId=_ref.inputId;return(0,react.useRef)({labelId:labelId||id+"-label",menuId:menuId||id+"-menu",getItemId:getItemId||function(index){return id+"-item-"+index},toggleButtonId:toggleButtonId||id+"-toggle-button",inputId:inputId||id+"-input"}).current}function getItemIndex(index,item,items){return void 0!==index?index:0===items.length?-1:items.indexOf(item)}function isAcceptedCharacterKey(key){return/^\S{1}$/.test(key)}function capitalizeString(string){return""+string.slice(0,1).toUpperCase()+string.slice(1)}function useLatestRef(val){var ref=(0,react.useRef)(val);return ref.current=val,ref}function useEnhancedReducer(reducer,initialState,props){var prevStateRef=(0,react.useRef)(),actionRef=(0,react.useRef)(),enhancedReducer=(0,react.useCallback)((function(state,action){actionRef.current=action,state=getState(state,action.props);var changes=reducer(state,action);return action.props.stateReducer(state,(0,esm_extends.Z)({},action,{changes:changes}))}),[reducer]),_useReducer=(0,react.useReducer)(enhancedReducer,initialState),state=_useReducer[0],dispatch=_useReducer[1],propsRef=useLatestRef(props),dispatchWithProps=(0,react.useCallback)((function(action){return dispatch((0,esm_extends.Z)({props:propsRef.current},action))}),[propsRef]),action=actionRef.current;return(0,react.useEffect)((function(){action&&prevStateRef.current&&prevStateRef.current!==state&&callOnChangeProps(action,getState(prevStateRef.current,action.props),state),prevStateRef.current=state}),[state,props,action]),[state,dispatchWithProps]}function useControlledReducer(reducer,initialState,props){var _useEnhancedReducer=useEnhancedReducer(reducer,initialState,props),state=_useEnhancedReducer[0],dispatch=_useEnhancedReducer[1];return[getState(state,props),dispatch]}var defaultProps={itemToString:function itemToString(item){return item?String(item):""},stateReducer:function stateReducer(s,a){return a.changes},getA11ySelectionMessage:function getA11ySelectionMessage(selectionParameters){var selectedItem=selectionParameters.selectedItem,itemToStringLocal=selectionParameters.itemToString;return selectedItem?itemToStringLocal(selectedItem)+" has been selected.":""},scrollIntoView:scrollIntoView,circularNavigation:!1,environment:"undefined"==typeof window?{}:window};function getDefaultValue(props,propKey,defaultStateValues){void 0===defaultStateValues&&(defaultStateValues=dropdownDefaultStateValues);var defaultPropKey="default"+capitalizeString(propKey);return defaultPropKey in props?props[defaultPropKey]:defaultStateValues[propKey]}function getInitialValue(props,propKey,defaultStateValues){if(void 0===defaultStateValues&&(defaultStateValues=dropdownDefaultStateValues),propKey in props)return props[propKey];var initialPropKey="initial"+capitalizeString(propKey);return initialPropKey in props?props[initialPropKey]:getDefaultValue(props,propKey,defaultStateValues)}function getInitialState(props){var selectedItem=getInitialValue(props,"selectedItem"),isOpen=getInitialValue(props,"isOpen"),highlightedIndex=getInitialValue(props,"highlightedIndex"),inputValue=getInitialValue(props,"inputValue");return{highlightedIndex:highlightedIndex<0&&selectedItem&&isOpen?props.items.indexOf(selectedItem):highlightedIndex,isOpen:isOpen,selectedItem:selectedItem,inputValue:inputValue}}function getHighlightedIndexOnOpen(props,state,offset,getItemNodeFromIndex){var items=props.items,initialHighlightedIndex=props.initialHighlightedIndex,defaultHighlightedIndex=props.defaultHighlightedIndex,selectedItem=state.selectedItem,highlightedIndex=state.highlightedIndex;return 0===items.length?-1:void 0!==initialHighlightedIndex&&highlightedIndex===initialHighlightedIndex?initialHighlightedIndex:void 0!==defaultHighlightedIndex?defaultHighlightedIndex:selectedItem?0===offset?items.indexOf(selectedItem):getNextWrappingIndex(offset,items.indexOf(selectedItem),items.length,getItemNodeFromIndex,!1):0===offset?-1:offset<0?items.length-1:0}function useMouseAndTouchTracker(isOpen,downshiftElementRefs,environment,handleBlur){var mouseAndTouchTrackersRef=(0,react.useRef)({isMouseDown:!1,isTouchMove:!1});return(0,react.useEffect)((function(){var onMouseDown=function onMouseDown(){mouseAndTouchTrackersRef.current.isMouseDown=!0},onMouseUp=function onMouseUp(event){mouseAndTouchTrackersRef.current.isMouseDown=!1,isOpen&&!targetWithinDownshift(event.target,downshiftElementRefs.map((function(ref){return ref.current})),environment.document)&&handleBlur()},onTouchStart=function onTouchStart(){mouseAndTouchTrackersRef.current.isTouchMove=!1},onTouchMove=function onTouchMove(){mouseAndTouchTrackersRef.current.isTouchMove=!0},onTouchEnd=function onTouchEnd(event){!isOpen||mouseAndTouchTrackersRef.current.isTouchMove||targetWithinDownshift(event.target,downshiftElementRefs.map((function(ref){return ref.current})),environment.document,!1)||handleBlur()};return environment.addEventListener("mousedown",onMouseDown),environment.addEventListener("mouseup",onMouseUp),environment.addEventListener("touchstart",onTouchStart),environment.addEventListener("touchmove",onTouchMove),environment.addEventListener("touchend",onTouchEnd),function cleanup(){environment.removeEventListener("mousedown",onMouseDown),environment.removeEventListener("mouseup",onMouseUp),environment.removeEventListener("touchstart",onTouchStart),environment.removeEventListener("touchmove",onTouchMove),environment.removeEventListener("touchend",onTouchEnd)}}),[isOpen,environment]),mouseAndTouchTrackersRef}var useGetterPropsCalledChecker=function useGetterPropsCalledChecker(){return noop};function useA11yMessageSetter(getA11yMessage,dependencyArray,_ref2){var isInitialMount=_ref2.isInitialMount,highlightedIndex=_ref2.highlightedIndex,items=_ref2.items,environment=_ref2.environment,rest=objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref2,["isInitialMount","highlightedIndex","items","environment"]);(0,react.useEffect)((function(){isInitialMount||updateA11yStatus((function(){return getA11yMessage((0,esm_extends.Z)({highlightedIndex:highlightedIndex,highlightedItem:items[highlightedIndex],resultCount:items.length},rest))}),environment.document)}),dependencyArray)}function useScrollIntoView(_ref3){var highlightedIndex=_ref3.highlightedIndex,isOpen=_ref3.isOpen,itemRefs=_ref3.itemRefs,getItemNodeFromIndex=_ref3.getItemNodeFromIndex,menuElement=_ref3.menuElement,scrollIntoViewProp=_ref3.scrollIntoView,shouldScrollRef=(0,react.useRef)(!0);return useIsomorphicLayoutEffect((function(){highlightedIndex<0||!isOpen||!Object.keys(itemRefs.current).length||(!1===shouldScrollRef.current?shouldScrollRef.current=!0:scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex),menuElement))}),[highlightedIndex]),shouldScrollRef}var useControlPropsValidator=noop;function downshiftCommonReducer(state,action,stateChangeTypes){var changes,type=action.type,props=action.props;switch(type){case stateChangeTypes.ItemMouseMove:changes={highlightedIndex:action.index};break;case stateChangeTypes.MenuMouseLeave:changes={highlightedIndex:-1};break;case stateChangeTypes.ToggleButtonClick:case stateChangeTypes.FunctionToggleMenu:changes={isOpen:!state.isOpen,highlightedIndex:state.isOpen?-1:getHighlightedIndexOnOpen(props,state,0)};break;case stateChangeTypes.FunctionOpenMenu:changes={isOpen:!0,highlightedIndex:getHighlightedIndexOnOpen(props,state,0)};break;case stateChangeTypes.FunctionCloseMenu:changes={isOpen:!1};break;case stateChangeTypes.FunctionSetHighlightedIndex:changes={highlightedIndex:action.highlightedIndex};break;case stateChangeTypes.FunctionSetInputValue:changes={inputValue:action.inputValue};break;case stateChangeTypes.FunctionReset:changes={highlightedIndex:getDefaultValue(props,"highlightedIndex"),isOpen:getDefaultValue(props,"isOpen"),selectedItem:getDefaultValue(props,"selectedItem"),inputValue:getDefaultValue(props,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return(0,esm_extends.Z)({},state,changes)}function getItemIndexByCharacterKey(keysSoFar,highlightedIndex,items,itemToString,getItemNodeFromIndex){for(var lowerCasedKeysSoFar=keysSoFar.toLowerCase(),index=0;index<items.length;index++){var offsetIndex=(index+highlightedIndex+1)%items.length;if(itemToString(items[offsetIndex]).toLowerCase().startsWith(lowerCasedKeysSoFar)){var element=getItemNodeFromIndex(offsetIndex);if(!element||!element.hasAttribute("disabled"))return offsetIndex}}return highlightedIndex}prop_types_default().array.isRequired,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().bool,prop_types_default().number,prop_types_default().number,prop_types_default().number,prop_types_default().bool,prop_types_default().bool,prop_types_default().bool,prop_types_default().any,prop_types_default().any,prop_types_default().any,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().func,prop_types_default().string,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().shape({addEventListener:prop_types_default().func,removeEventListener:prop_types_default().func,document:prop_types_default().shape({getElementById:prop_types_default().func,activeElement:prop_types_default().any,body:prop_types_default().any})});var defaultProps$1=(0,esm_extends.Z)({},defaultProps,{getA11yStatusMessage:function getA11yStatusMessage$1(_ref){var isOpen=_ref.isOpen,resultCount=_ref.resultCount,previousResultCount=_ref.previousResultCount;return isOpen?resultCount?resultCount!==previousResultCount?resultCount+" result"+(1===resultCount?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}}),validatePropTypes=noop;var MenuKeyDownArrowDown=0,MenuKeyDownArrowUp=1,MenuKeyDownEscape=2,MenuKeyDownHome=3,MenuKeyDownEnd=4,MenuKeyDownEnter=5,MenuKeyDownSpaceButton=6,MenuKeyDownCharacter=7,MenuBlur=8,MenuMouseLeave=9,ItemMouseMove=10,ItemClick=11,ToggleButtonClick=12,ToggleButtonKeyDownArrowDown=13,ToggleButtonKeyDownArrowUp=14,ToggleButtonKeyDownCharacter=15,FunctionToggleMenu=16,FunctionOpenMenu=17,FunctionCloseMenu=18,FunctionSetHighlightedIndex=19,FunctionSelectItem=20,FunctionSetInputValue=21,FunctionReset=22,stateChangeTypes$1=Object.freeze({__proto__:null,MenuKeyDownArrowDown:MenuKeyDownArrowDown,MenuKeyDownArrowUp:MenuKeyDownArrowUp,MenuKeyDownEscape:MenuKeyDownEscape,MenuKeyDownHome:MenuKeyDownHome,MenuKeyDownEnd:MenuKeyDownEnd,MenuKeyDownEnter:MenuKeyDownEnter,MenuKeyDownSpaceButton:MenuKeyDownSpaceButton,MenuKeyDownCharacter:MenuKeyDownCharacter,MenuBlur:MenuBlur,MenuMouseLeave:MenuMouseLeave,ItemMouseMove:ItemMouseMove,ItemClick:ItemClick,ToggleButtonClick:ToggleButtonClick,ToggleButtonKeyDownArrowDown:ToggleButtonKeyDownArrowDown,ToggleButtonKeyDownArrowUp:ToggleButtonKeyDownArrowUp,ToggleButtonKeyDownCharacter:ToggleButtonKeyDownCharacter,FunctionToggleMenu:FunctionToggleMenu,FunctionOpenMenu:FunctionOpenMenu,FunctionCloseMenu:FunctionCloseMenu,FunctionSetHighlightedIndex:FunctionSetHighlightedIndex,FunctionSelectItem:FunctionSelectItem,FunctionSetInputValue:FunctionSetInputValue,FunctionReset:FunctionReset});function downshiftSelectReducer(state,action){var changes,type=action.type,props=action.props,shiftKey=action.shiftKey;switch(type){case ItemClick:changes={isOpen:getDefaultValue(props,"isOpen"),highlightedIndex:getDefaultValue(props,"highlightedIndex"),selectedItem:props.items[action.index]};break;case ToggleButtonKeyDownCharacter:var lowercasedKey=action.key,inputValue=""+state.inputValue+lowercasedKey,itemIndex=getItemIndexByCharacterKey(inputValue,state.selectedItem?props.items.indexOf(state.selectedItem):-1,props.items,props.itemToString,action.getItemNodeFromIndex);changes=(0,esm_extends.Z)({inputValue:inputValue},itemIndex>=0&&{selectedItem:props.items[itemIndex]});break;case ToggleButtonKeyDownArrowDown:changes={highlightedIndex:getHighlightedIndexOnOpen(props,state,1,action.getItemNodeFromIndex),isOpen:!0};break;case ToggleButtonKeyDownArrowUp:changes={highlightedIndex:getHighlightedIndexOnOpen(props,state,-1,action.getItemNodeFromIndex),isOpen:!0};break;case MenuKeyDownEnter:case MenuKeyDownSpaceButton:changes=(0,esm_extends.Z)({isOpen:getDefaultValue(props,"isOpen"),highlightedIndex:getDefaultValue(props,"highlightedIndex")},state.highlightedIndex>=0&&{selectedItem:props.items[state.highlightedIndex]});break;case MenuKeyDownHome:changes={highlightedIndex:getNextNonDisabledIndex(1,0,props.items.length,action.getItemNodeFromIndex,!1)};break;case MenuKeyDownEnd:changes={highlightedIndex:getNextNonDisabledIndex(-1,props.items.length-1,props.items.length,action.getItemNodeFromIndex,!1)};break;case MenuKeyDownEscape:case MenuBlur:changes={isOpen:!1,highlightedIndex:-1};break;case MenuKeyDownCharacter:var _lowercasedKey=action.key,_inputValue=""+state.inputValue+_lowercasedKey,highlightedIndex=getItemIndexByCharacterKey(_inputValue,state.highlightedIndex,props.items,props.itemToString,action.getItemNodeFromIndex);changes=(0,esm_extends.Z)({inputValue:_inputValue},highlightedIndex>=0&&{highlightedIndex:highlightedIndex});break;case MenuKeyDownArrowDown:changes={highlightedIndex:getNextWrappingIndex(shiftKey?5:1,state.highlightedIndex,props.items.length,action.getItemNodeFromIndex,props.circularNavigation)};break;case MenuKeyDownArrowUp:changes={highlightedIndex:getNextWrappingIndex(shiftKey?-5:-1,state.highlightedIndex,props.items.length,action.getItemNodeFromIndex,props.circularNavigation)};break;case FunctionSelectItem:changes={selectedItem:action.selectedItem};break;default:return downshiftCommonReducer(state,action,stateChangeTypes$1)}return(0,esm_extends.Z)({},state,changes)}function useSelect(userProps){void 0===userProps&&(userProps={}),validatePropTypes(userProps,useSelect);var props=(0,esm_extends.Z)({},defaultProps$1,userProps),items=props.items,scrollIntoView=props.scrollIntoView,environment=props.environment,initialIsOpen=props.initialIsOpen,defaultIsOpen=props.defaultIsOpen,itemToString=props.itemToString,getA11ySelectionMessage=props.getA11ySelectionMessage,getA11yStatusMessage=props.getA11yStatusMessage,_useControlledReducer=useControlledReducer(downshiftSelectReducer,getInitialState(props),props),state=_useControlledReducer[0],dispatch=_useControlledReducer[1],isOpen=state.isOpen,highlightedIndex=state.highlightedIndex,selectedItem=state.selectedItem,inputValue=state.inputValue,toggleButtonRef=(0,react.useRef)(null),menuRef=(0,react.useRef)(null),itemRefs=(0,react.useRef)({}),shouldBlurRef=(0,react.useRef)(!0),clearTimeoutRef=(0,react.useRef)(null),elementIds=useElementIds(props),previousResultCountRef=(0,react.useRef)(),isInitialMountRef=(0,react.useRef)(!0),latest=useLatestRef({state:state,props:props}),getItemNodeFromIndex=(0,react.useCallback)((function(index){return itemRefs.current[elementIds.getItemId(index)]}),[elementIds]);useA11yMessageSetter(getA11yStatusMessage,[isOpen,highlightedIndex,inputValue,items],(0,esm_extends.Z)({isInitialMount:isInitialMountRef.current,previousResultCount:previousResultCountRef.current,items:items,environment:environment,itemToString:itemToString},state)),useA11yMessageSetter(getA11ySelectionMessage,[selectedItem],(0,esm_extends.Z)({isInitialMount:isInitialMountRef.current,previousResultCount:previousResultCountRef.current,items:items,environment:environment,itemToString:itemToString},state));var shouldScrollRef=useScrollIntoView({menuElement:menuRef.current,highlightedIndex:highlightedIndex,isOpen:isOpen,itemRefs:itemRefs,scrollIntoView:scrollIntoView,getItemNodeFromIndex:getItemNodeFromIndex});(0,react.useEffect)((function(){isInitialMountRef.current&&(clearTimeoutRef.current=debounce((function(outerDispatch){outerDispatch({type:FunctionSetInputValue,inputValue:""})}),500)),inputValue&&clearTimeoutRef.current(dispatch)}),[dispatch,inputValue]),useControlPropsValidator({isInitialMount:isInitialMountRef.current,props:props,state:state}),(0,react.useEffect)((function(){isInitialMountRef.current?(initialIsOpen||defaultIsOpen||isOpen)&&menuRef.current&&menuRef.current.focus():isOpen?menuRef.current&&menuRef.current.focus():environment.document.activeElement===menuRef.current&&toggleButtonRef.current&&(shouldBlurRef.current=!1,toggleButtonRef.current.focus())}),[isOpen]),(0,react.useEffect)((function(){isInitialMountRef.current||(previousResultCountRef.current=items.length)}));var mouseAndTouchTrackersRef=useMouseAndTouchTracker(isOpen,[menuRef,toggleButtonRef],environment,(function(){dispatch({type:MenuBlur})})),setGetterPropCallInfo=useGetterPropsCalledChecker("getMenuProps","getToggleButtonProps");(0,react.useEffect)((function(){isInitialMountRef.current=!1}),[]),(0,react.useEffect)((function(){isOpen||(itemRefs.current={})}),[isOpen]);var toggleButtonKeyDownHandlers=(0,react.useMemo)((function(){return{ArrowDown:function ArrowDown(event){event.preventDefault(),dispatch({type:ToggleButtonKeyDownArrowDown,getItemNodeFromIndex:getItemNodeFromIndex,shiftKey:event.shiftKey})},ArrowUp:function ArrowUp(event){event.preventDefault(),dispatch({type:ToggleButtonKeyDownArrowUp,getItemNodeFromIndex:getItemNodeFromIndex,shiftKey:event.shiftKey})}}}),[dispatch,getItemNodeFromIndex]),menuKeyDownHandlers=(0,react.useMemo)((function(){return{ArrowDown:function ArrowDown(event){event.preventDefault(),dispatch({type:MenuKeyDownArrowDown,getItemNodeFromIndex:getItemNodeFromIndex,shiftKey:event.shiftKey})},ArrowUp:function ArrowUp(event){event.preventDefault(),dispatch({type:MenuKeyDownArrowUp,getItemNodeFromIndex:getItemNodeFromIndex,shiftKey:event.shiftKey})},Home:function Home(event){event.preventDefault(),dispatch({type:MenuKeyDownHome,getItemNodeFromIndex:getItemNodeFromIndex})},End:function End(event){event.preventDefault(),dispatch({type:MenuKeyDownEnd,getItemNodeFromIndex:getItemNodeFromIndex})},Escape:function Escape(){dispatch({type:MenuKeyDownEscape})},Enter:function Enter(event){event.preventDefault(),dispatch({type:MenuKeyDownEnter})}," ":function _(event){event.preventDefault(),dispatch({type:MenuKeyDownSpaceButton})}}}),[dispatch,getItemNodeFromIndex]),toggleMenu=(0,react.useCallback)((function(){dispatch({type:FunctionToggleMenu})}),[dispatch]),closeMenu=(0,react.useCallback)((function(){dispatch({type:FunctionCloseMenu})}),[dispatch]),openMenu=(0,react.useCallback)((function(){dispatch({type:FunctionOpenMenu})}),[dispatch]),setHighlightedIndex=(0,react.useCallback)((function(newHighlightedIndex){dispatch({type:FunctionSetHighlightedIndex,highlightedIndex:newHighlightedIndex})}),[dispatch]),selectItem=(0,react.useCallback)((function(newSelectedItem){dispatch({type:FunctionSelectItem,selectedItem:newSelectedItem})}),[dispatch]),reset=(0,react.useCallback)((function(){dispatch({type:FunctionReset})}),[dispatch]),setInputValue=(0,react.useCallback)((function(newInputValue){dispatch({type:FunctionSetInputValue,inputValue:newInputValue})}),[dispatch]),getLabelProps=(0,react.useCallback)((function(labelProps){return(0,esm_extends.Z)({id:elementIds.labelId,htmlFor:elementIds.toggleButtonId},labelProps)}),[elementIds]),getMenuProps=(0,react.useCallback)((function(_temp,_temp2){var _extends2,_ref=void 0===_temp?{}:_temp,onMouseLeave=_ref.onMouseLeave,_ref$refKey=_ref.refKey,refKey=void 0===_ref$refKey?"ref":_ref$refKey,onKeyDown=_ref.onKeyDown,onBlur=_ref.onBlur,ref=_ref.ref,rest=objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref,["onMouseLeave","refKey","onKeyDown","onBlur","ref"]),_ref2$suppressRefErro=(void 0===_temp2?{}:_temp2).suppressRefError,suppressRefError=void 0!==_ref2$suppressRefErro&&_ref2$suppressRefErro,latestState=latest.current.state;return setGetterPropCallInfo("getMenuProps",suppressRefError,refKey,menuRef),(0,esm_extends.Z)(((_extends2={})[refKey]=handleRefs(ref,(function(menuNode){menuRef.current=menuNode})),_extends2.id=elementIds.menuId,_extends2.role="listbox",_extends2["aria-labelledby"]=elementIds.labelId,_extends2.tabIndex=-1,_extends2),latestState.isOpen&&latestState.highlightedIndex>-1&&{"aria-activedescendant":elementIds.getItemId(latestState.highlightedIndex)},{onMouseLeave:callAllEventHandlers(onMouseLeave,(function menuHandleMouseLeave(){dispatch({type:MenuMouseLeave})})),onKeyDown:callAllEventHandlers(onKeyDown,(function menuHandleKeyDown(event){var key=normalizeArrowKey(event);key&&menuKeyDownHandlers[key]?menuKeyDownHandlers[key](event):isAcceptedCharacterKey(key)&&dispatch({type:MenuKeyDownCharacter,key:key,getItemNodeFromIndex:getItemNodeFromIndex})})),onBlur:callAllEventHandlers(onBlur,(function menuHandleBlur(){!1!==shouldBlurRef.current?!mouseAndTouchTrackersRef.current.isMouseDown&&dispatch({type:MenuBlur}):shouldBlurRef.current=!0}))},rest)}),[dispatch,latest,menuKeyDownHandlers,mouseAndTouchTrackersRef,setGetterPropCallInfo,elementIds,getItemNodeFromIndex]);return{getToggleButtonProps:(0,react.useCallback)((function(_temp3,_temp4){var _extends3,_ref3=void 0===_temp3?{}:_temp3,onClick=_ref3.onClick,onKeyDown=_ref3.onKeyDown,_ref3$refKey=_ref3.refKey,refKey=void 0===_ref3$refKey?"ref":_ref3$refKey,ref=_ref3.ref,rest=objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref3,["onClick","onKeyDown","refKey","ref"]),_ref4$suppressRefErro=(void 0===_temp4?{}:_temp4).suppressRefError,suppressRefError=void 0!==_ref4$suppressRefErro&&_ref4$suppressRefErro,toggleProps=(0,esm_extends.Z)(((_extends3={})[refKey]=handleRefs(ref,(function(toggleButtonNode){toggleButtonRef.current=toggleButtonNode})),_extends3.id=elementIds.toggleButtonId,_extends3["aria-haspopup"]="listbox",_extends3["aria-expanded"]=latest.current.state.isOpen,_extends3["aria-labelledby"]=elementIds.labelId+" "+elementIds.toggleButtonId,_extends3),rest);return rest.disabled||(toggleProps.onClick=callAllEventHandlers(onClick,(function toggleButtonHandleClick(){dispatch({type:ToggleButtonClick})})),toggleProps.onKeyDown=callAllEventHandlers(onKeyDown,(function toggleButtonHandleKeyDown(event){var key=normalizeArrowKey(event);key&&toggleButtonKeyDownHandlers[key]?toggleButtonKeyDownHandlers[key](event):isAcceptedCharacterKey(key)&&dispatch({type:ToggleButtonKeyDownCharacter,key:key,getItemNodeFromIndex:getItemNodeFromIndex})}))),setGetterPropCallInfo("getToggleButtonProps",suppressRefError,refKey,toggleButtonRef),toggleProps}),[dispatch,latest,toggleButtonKeyDownHandlers,setGetterPropCallInfo,elementIds,getItemNodeFromIndex]),getLabelProps:getLabelProps,getMenuProps:getMenuProps,getItemProps:(0,react.useCallback)((function(_temp5){var _extends4,_ref5=void 0===_temp5?{}:_temp5,item=_ref5.item,index=_ref5.index,onMouseMove=_ref5.onMouseMove,onClick=_ref5.onClick,_ref5$refKey=_ref5.refKey,refKey=void 0===_ref5$refKey?"ref":_ref5$refKey,ref=_ref5.ref,rest=objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref5,["item","index","onMouseMove","onClick","refKey","ref"]),_latest$current=latest.current,latestState=_latest$current.state,latestProps=_latest$current.props,itemIndex=getItemIndex(index,item,latestProps.items);if(itemIndex<0)throw new Error("Pass either item or item index in getItemProps!");var itemProps=(0,esm_extends.Z)(((_extends4={role:"option","aria-selected":""+(itemIndex===latestState.highlightedIndex),id:elementIds.getItemId(itemIndex)})[refKey]=handleRefs(ref,(function(itemNode){itemNode&&(itemRefs.current[elementIds.getItemId(itemIndex)]=itemNode)})),_extends4),rest);return rest.disabled||(itemProps.onMouseMove=callAllEventHandlers(onMouseMove,(function itemHandleMouseMove(){index!==latestState.highlightedIndex&&(shouldScrollRef.current=!1,dispatch({type:ItemMouseMove,index:index}))})),itemProps.onClick=callAllEventHandlers(onClick,(function itemHandleClick(){dispatch({type:ItemClick,index:index})}))),itemProps}),[dispatch,latest,shouldScrollRef,elementIds]),toggleMenu:toggleMenu,openMenu:openMenu,closeMenu:closeMenu,setHighlightedIndex:setHighlightedIndex,selectItem:selectItem,reset:reset,setInputValue:setInputValue,highlightedIndex:highlightedIndex,isOpen:isOpen,selectedItem:selectedItem,inputValue:inputValue}}useSelect.stateChangeTypes=stateChangeTypes$1;prop_types_default().array.isRequired,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().bool,prop_types_default().number,prop_types_default().number,prop_types_default().number,prop_types_default().bool,prop_types_default().bool,prop_types_default().bool,prop_types_default().any,prop_types_default().any,prop_types_default().any,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().func,prop_types_default().string,prop_types_default().string,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().shape({addEventListener:prop_types_default().func,removeEventListener:prop_types_default().func,document:prop_types_default().shape({getElementById:prop_types_default().func,activeElement:prop_types_default().any,body:prop_types_default().any})});(0,esm_extends.Z)({},defaultProps,{getA11yStatusMessage:getA11yStatusMessage,circularNavigation:!0});prop_types_default().array,prop_types_default().array,prop_types_default().array,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().number,prop_types_default().number,prop_types_default().number,prop_types_default().func,prop_types_default().func,prop_types_default().string,prop_types_default().string,prop_types_default().shape({addEventListener:prop_types_default().func,removeEventListener:prop_types_default().func,document:prop_types_default().shape({getElementById:prop_types_default().func,activeElement:prop_types_default().any,body:prop_types_default().any})})},"./node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js":function(__unused_webpack_module,exports){var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element"),c=x("react.portal"),d=x("react.fragment"),e=x("react.strict_mode"),f=x("react.profiler"),g=x("react.provider"),h=x("react.context"),k=x("react.forward_ref"),l=x("react.suspense"),m=x("react.suspense_list"),n=x("react.memo"),p=x("react.lazy"),q=x("react.block"),r=x("react.server.block"),u=x("react.fundamental"),v=x("react.debug_trace_mode"),w=x("react.legacy_hidden")}function y(a){if("object"==typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}},"./node_modules/downshift/node_modules/react-is/index.js":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js")}}]);