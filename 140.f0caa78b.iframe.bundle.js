(self.webpackChunk_bryandv_tbn_library=self.webpackChunk_bryandv_tbn_library||[]).push([[140,447,508,220,406,545],{"./node_modules/@babel/runtime/helpers/extends.js":module=>{function _extends(){return module.exports=_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports,_extends.apply(this,arguments)}module.exports=_extends,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/react-native-web/dist/exports/ActivityIndicator/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _excluded=["animating","color","hidesWhenStopped","size","style"],createSvgCircle=function createSvgCircle(style){return React.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style})},ActivityIndicator=React.forwardRef((function(props,forwardedRef){var _props$animating=props.animating,animating=void 0===_props$animating||_props$animating,_props$color=props.color,color=void 0===_props$color?"#1976D2":_props$color,_props$hidesWhenStopp=props.hidesWhenStopped,hidesWhenStopped=void 0===_props$hidesWhenStopp||_props$hidesWhenStopp,_props$size=props.size,size=void 0===_props$size?"small":_props$size,style=props.style,other=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded),svg=React.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},createSvgCircle({stroke:color,opacity:.2}),createSvgCircle({stroke:color,strokeDasharray:80,strokeDashoffset:60}));return React.createElement(_View.default,(0,_extends2.default)({},other,{"aria-valuemax":1,"aria-valuemin":0,ref:forwardedRef,role:"progressbar",style:[styles.container,style]}),React.createElement(_View.default,{children:svg,style:["number"==typeof size?{height:size,width:size}:indicatorSizes[size],styles.animation,!animating&&styles.animationPause,!animating&&hidesWhenStopped&&styles.hidesWhenStopped]}))}));ActivityIndicator.displayName="ActivityIndicator";var styles=_StyleSheet.default.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),indicatorSizes=_StyleSheet.default.create({small:{width:20,height:20},large:{width:36,height:36}});exports.default=ActivityIndicator},"./node_modules/react-native-web/dist/exports/Modal/ModalAnimation.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_createElement=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/createElement/index.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function getAnimationStyle(animationType,visible){return"slide"===animationType?visible?animatedSlideInStyles:animatedSlideOutStyles:"fade"===animationType?visible?animatedFadeInStyles:animatedFadeOutStyles:visible?styles.container:styles.hidden}var styles=_StyleSheet.default.create({container:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999},animatedIn:{animationDuration:"300ms",animationTimingFunction:"ease-in"},animatedOut:{pointerEvents:"none",animationDuration:"300ms",animationTimingFunction:"ease-out"},fadeIn:{opacity:1,animationKeyframes:{"0%":{opacity:0},"100%":{opacity:1}}},fadeOut:{opacity:0,animationKeyframes:{"0%":{opacity:1},"100%":{opacity:0}}},slideIn:{transform:"translateY(0%)",animationKeyframes:{"0%":{transform:"translateY(100%)"},"100%":{transform:"translateY(0%)"}}},slideOut:{transform:"translateY(100%)",animationKeyframes:{"0%":{transform:"translateY(0%)"},"100%":{transform:"translateY(100%)"}}},hidden:{opacity:0}}),animatedSlideInStyles=[styles.container,styles.animatedIn,styles.slideIn],animatedSlideOutStyles=[styles.container,styles.animatedOut,styles.slideOut],animatedFadeInStyles=[styles.container,styles.animatedIn,styles.fadeIn],animatedFadeOutStyles=[styles.container,styles.animatedOut,styles.fadeOut];exports.default=function ModalAnimation(props){var animationType=props.animationType,children=props.children,onDismiss=props.onDismiss,onShow=props.onShow,visible=props.visible,_React$useState=React.useState(!1),isRendering=_React$useState[0],setIsRendering=_React$useState[1],wasVisible=React.useRef(!1),wasRendering=React.useRef(!1),isAnimated=animationType&&"none"!==animationType,animationEndCallback=React.useCallback((function(e){e&&e.currentTarget!==e.target||(visible?onShow&&onShow():setIsRendering(!1))}),[onShow,visible]);return React.useEffect((function(){wasRendering.current&&!isRendering&&onDismiss&&onDismiss(),wasRendering.current=isRendering}),[isRendering,onDismiss]),React.useEffect((function(){visible&&setIsRendering(!0),visible===wasVisible.current||isAnimated||animationEndCallback(),wasVisible.current=visible}),[isAnimated,visible,animationEndCallback]),isRendering||visible?(0,_createElement.default)("div",{style:isRendering?getAnimationStyle(animationType,visible):styles.hidden,onAnimationEnd:animationEndCallback,children}):null}},"./node_modules/react-native-web/dist/exports/Modal/ModalContent.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_canUseDom=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/canUseDom/index.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _excluded=["active","children","onRequestClose","transparent"],ModalContent=React.forwardRef((function(props,forwardedRef){var active=props.active,children=props.children,onRequestClose=props.onRequestClose,transparent=props.transparent,rest=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded);React.useEffect((function(){if(_canUseDom.default){var closeOnEscape=function closeOnEscape(e){active&&"Escape"===e.key&&(e.stopPropagation(),onRequestClose&&onRequestClose())};return document.addEventListener("keyup",closeOnEscape,!1),function(){return document.removeEventListener("keyup",closeOnEscape,!1)}}}),[active,onRequestClose]);var style=React.useMemo((function(){return[styles.modal,transparent?styles.modalTransparent:styles.modalOpaque]}),[transparent]);return React.createElement(_View.default,(0,_extends2.default)({},rest,{"aria-modal":!0,ref:forwardedRef,role:active?"dialog":null,style}),React.createElement(_View.default,{style:styles.container},children))})),styles=_StyleSheet.default.create({modal:{position:"fixed",top:0,right:0,bottom:0,left:0},modalTransparent:{backgroundColor:"transparent"},modalOpaque:{backgroundColor:"white"},container:{top:0,flex:1}});exports.default=ModalContent},"./node_modules/react-native-web/dist/exports/Modal/ModalFocusTrap.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_createElement=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/createElement/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_UIManager=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/UIManager/index.js")),_canUseDom=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/canUseDom/index.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var FocusBracket=function FocusBracket(){return(0,_createElement.default)("div",{role:"none",tabIndex:0,style:styles.focusBracket})};function attemptFocus(element){if(!_canUseDom.default)return!1;try{element.focus()}catch(e){}return document.activeElement===element}function focusFirstDescendant(element){for(var i=0;i<element.childNodes.length;i++){var child=element.childNodes[i];if(attemptFocus(child)||focusFirstDescendant(child))return!0}return!1}function focusLastDescendant(element){for(var i=element.childNodes.length-1;i>=0;i--){var child=element.childNodes[i];if(attemptFocus(child)||focusLastDescendant(child))return!0}return!1}exports.default=function ModalFocusTrap(_ref){var active=_ref.active,children=_ref.children,trapElementRef=React.useRef(),focusRef=React.useRef({trapFocusInProgress:!1,lastFocusedElement:null});return React.useEffect((function(){if(_canUseDom.default){var trapFocus=function trapFocus(){if(null!=trapElementRef.current&&!focusRef.current.trapFocusInProgress&&active){try{if(focusRef.current.trapFocusInProgress=!0,document.activeElement instanceof Node&&!trapElementRef.current.contains(document.activeElement)){var hasFocused=focusFirstDescendant(trapElementRef.current);focusRef.current.lastFocusedElement===document.activeElement&&(hasFocused=focusLastDescendant(trapElementRef.current)),!hasFocused&&null!=trapElementRef.current&&document.activeElement&&_UIManager.default.focus(trapElementRef.current)}}finally{focusRef.current.trapFocusInProgress=!1}focusRef.current.lastFocusedElement=document.activeElement}};return trapFocus(),document.addEventListener("focus",trapFocus,!0),function(){return document.removeEventListener("focus",trapFocus,!0)}}}),[active]),React.useEffect((function(){if(_canUseDom.default){var lastFocusedElementOutsideTrap=document.activeElement;return function(){lastFocusedElementOutsideTrap&&document.contains(lastFocusedElementOutsideTrap)&&_UIManager.default.focus(lastFocusedElementOutsideTrap)}}}),[]),React.createElement(React.Fragment,null,React.createElement(FocusBracket,null),React.createElement(_View.default,{ref:trapElementRef},children),React.createElement(FocusBracket,null))};var styles=_StyleSheet.default.create({focusBracket:{outlineStyle:"none"}})},"./node_modules/react-native-web/dist/exports/Modal/ModalPortal.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_reactDom=_interopRequireDefault(__webpack_require__("./node_modules/react-dom/index.js")),_canUseDom=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/canUseDom/index.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports.default=function ModalPortal(props){var children=props.children,elementRef=React.useRef(null);if(_canUseDom.default&&!elementRef.current){var element=document.createElement("div");element&&document.body&&(document.body.appendChild(element),elementRef.current=element)}return React.useEffect((function(){if(_canUseDom.default)return function(){document.body&&elementRef.current&&(document.body.removeChild(elementRef.current),elementRef.current=null)}}),[]),elementRef.current&&_canUseDom.default?_reactDom.default.createPortal(children,elementRef.current):null}},"./node_modules/react-native-web/dist/exports/Modal/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_ModalPortal=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/ModalPortal.js")),_ModalAnimation=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/ModalAnimation.js")),_ModalContent=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/ModalContent.js")),_ModalFocusTrap=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/ModalFocusTrap.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _excluded=["animationType","children","onDismiss","onRequestClose","onShow","transparent","visible"],uniqueModalIdentifier=0,activeModalStack=[],activeModalListeners={};function notifyActiveModalListeners(){if(0!==activeModalStack.length){var activeModalId=activeModalStack[activeModalStack.length-1];activeModalStack.forEach((function(modalId){modalId in activeModalListeners&&activeModalListeners[modalId](modalId===activeModalId)}))}}function removeActiveModal(modalId){modalId in activeModalListeners&&(activeModalListeners[modalId](!1),delete activeModalListeners[modalId]);var index=activeModalStack.indexOf(modalId);-1!==index&&(activeModalStack.splice(index,1),notifyActiveModalListeners())}var Modal=React.forwardRef((function(props,forwardedRef){var animationType=props.animationType,children=props.children,onDismiss=props.onDismiss,onRequestClose=props.onRequestClose,onShow=props.onShow,transparent=props.transparent,_props$visible=props.visible,visible=void 0===_props$visible||_props$visible,rest=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded),modalId=React.useMemo((function(){return uniqueModalIdentifier++}),[]),_React$useState=React.useState(!1),isActive=_React$useState[0],setIsActive=_React$useState[1],onDismissCallback=React.useCallback((function(){removeActiveModal(modalId),onDismiss&&onDismiss()}),[modalId,onDismiss]),onShowCallback=React.useCallback((function(){!function addActiveModal(modalId,listener){removeActiveModal(modalId),activeModalStack.push(modalId),activeModalListeners[modalId]=listener,notifyActiveModalListeners()}(modalId,setIsActive),onShow&&onShow()}),[modalId,onShow]);return React.useEffect((function(){return function(){return removeActiveModal(modalId)}}),[modalId]),React.createElement(_ModalPortal.default,null,React.createElement(_ModalAnimation.default,{animationType,onDismiss:onDismissCallback,onShow:onShowCallback,visible},React.createElement(_ModalFocusTrap.default,{active:isActive},React.createElement(_ModalContent.default,(0,_extends2.default)({},rest,{active:isActive,onRequestClose,ref:forwardedRef,transparent}),children))))}));exports.default=Modal},"./node_modules/react-native-web/dist/exports/Text/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectSpread2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread2.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_createElement=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/createElement/index.js")),forwardedProps=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-web/dist/modules/forwardedProps/index.js")),_pick=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/pick/index.js")),_useElementLayout=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useElementLayout/index.js")),_useMergeRefs=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useMergeRefs/index.js")),_usePlatformMethods=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js")),_useResponderEvents=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useResponderEvents/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_TextAncestorContext=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js")),_useLocale=__webpack_require__("./node_modules/react-native-web/dist/modules/useLocale/index.js"),_warnOnce=__webpack_require__("./node_modules/react-native-web/dist/modules/warnOnce/index.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var _excluded=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],forwardPropsList=Object.assign({},forwardedProps.defaultProps,forwardedProps.accessibilityProps,forwardedProps.clickProps,forwardedProps.focusProps,forwardedProps.keyboardProps,forwardedProps.mouseProps,forwardedProps.touchProps,forwardedProps.styleProps,{href:!0,lang:!0,pointerEvents:!0}),Text=React.forwardRef((function(props,forwardedRef){var hrefAttrs=props.hrefAttrs,numberOfLines=props.numberOfLines,onClick=props.onClick,onLayout=props.onLayout,onPress=props.onPress,onMoveShouldSetResponder=props.onMoveShouldSetResponder,onMoveShouldSetResponderCapture=props.onMoveShouldSetResponderCapture,onResponderEnd=props.onResponderEnd,onResponderGrant=props.onResponderGrant,onResponderMove=props.onResponderMove,onResponderReject=props.onResponderReject,onResponderRelease=props.onResponderRelease,onResponderStart=props.onResponderStart,onResponderTerminate=props.onResponderTerminate,onResponderTerminationRequest=props.onResponderTerminationRequest,onScrollShouldSetResponder=props.onScrollShouldSetResponder,onScrollShouldSetResponderCapture=props.onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder=props.onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture=props.onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder=props.onStartShouldSetResponder,onStartShouldSetResponderCapture=props.onStartShouldSetResponderCapture,selectable=props.selectable,rest=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded);null!=selectable&&(0,_warnOnce.warnOnce)("selectable","selectable prop is deprecated. Use styles.userSelect.");var hasTextAncestor=React.useContext(_TextAncestorContext.default),hostRef=React.useRef(null),contextDirection=(0,_useLocale.useLocaleContext)().direction;(0,_useElementLayout.default)(hostRef,onLayout),(0,_useResponderEvents.default)(hostRef,{onMoveShouldSetResponder,onMoveShouldSetResponderCapture,onResponderEnd,onResponderGrant,onResponderMove,onResponderReject,onResponderRelease,onResponderStart,onResponderTerminate,onResponderTerminationRequest,onScrollShouldSetResponder,onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder,onStartShouldSetResponderCapture});var handleClick=React.useCallback((function(e){null!=onClick?onClick(e):null!=onPress&&(e.stopPropagation(),onPress(e))}),[onClick,onPress]),component=hasTextAncestor?"span":"div",langDirection=null!=props.lang?(0,_useLocale.getLocaleDirection)(props.lang):null,componentDirection=props.dir||langDirection,writingDirection=componentDirection||contextDirection,supportedProps=function pickProps(props){return(0,_pick.default)(props,forwardPropsList)}(rest);if(supportedProps.dir=componentDirection,hasTextAncestor||(supportedProps.dir=null!=componentDirection?componentDirection:"auto"),(onClick||onPress)&&(supportedProps.onClick=handleClick),supportedProps.style=[null!=numberOfLines&&numberOfLines>1&&{WebkitLineClamp:numberOfLines},!0===hasTextAncestor?styles.textHasAncestor$raw:styles.text$raw,1===numberOfLines&&styles.textOneLine,null!=numberOfLines&&numberOfLines>1&&styles.textMultiLine,props.style,!0===selectable&&styles.selectable,!1===selectable&&styles.notSelectable,onPress&&styles.pressable],null!=props.href&&(component="a",null!=hrefAttrs)){var download=hrefAttrs.download,rel=hrefAttrs.rel,target=hrefAttrs.target;null!=download&&(supportedProps.download=download),null!=rel&&(supportedProps.rel=rel),"string"==typeof target&&(supportedProps.target="_"!==target.charAt(0)?"_"+target:target)}var platformMethodsRef=(0,_usePlatformMethods.default)(supportedProps),setRef=(0,_useMergeRefs.default)(hostRef,platformMethodsRef,forwardedRef);supportedProps.ref=setRef;var element=(0,_createElement.default)(component,supportedProps,{writingDirection});return hasTextAncestor?element:React.createElement(_TextAncestorContext.default.Provider,{value:!0},element)}));Text.displayName="Text";var textStyle={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},styles=_StyleSheet.default.create({text$raw:textStyle,textHasAncestor$raw:(0,_objectSpread2.default)((0,_objectSpread2.default)({},textStyle),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});exports.default=Text},"./src/components/TabaknatieModal/TabaknatieModal.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Primary=exports.FullScreen=void 0;var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_FullScreen$parameter,_FullScreen$parameter2,_FullScreen$parameter3,_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_TabaknatieModal=__webpack_require__("./src/components/TabaknatieModal/TabaknatieModal.tsx"),_TabaknatieSpinner=__webpack_require__("./src/components/TabaknatieSpinner/index.ts"),meta={title:"Tabaknatie/TbnModal",component:_TabaknatieModal.TbnModal,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary=(exports.default=meta,exports.Primary={render:function render(){return _react.default.createElement(_TabaknatieModal.TbnModal,{visible:!0,componentToRender:_react.default.createElement(_TabaknatieSpinner.TbnSpinner,{label:"Gij hed da lef nie"})})}}),FullScreen=exports.FullScreen={render:function render(){return _react.default.createElement(_TabaknatieModal.TbnModal,{visible:!0,componentToRender:_react.default.createElement(_TabaknatieSpinner.TbnSpinner,{label:"Gij hed da lef nie",textVisible:!0}),fullScreen:!0})}};Primary.parameters=Object.assign({},Primary.parameters,{docs:Object.assign({},null==(_Primary$parameters=Primary.parameters)?void 0:_Primary$parameters.docs,{source:Object.assign({originalSource:"{\n  render: () => <TbnModal visible={true} componentToRender={<TbnSpinner label='Gij hed da lef nie' />} />\n}"},null==(_Primary$parameters2=Primary.parameters)||null==(_Primary$parameters2$=_Primary$parameters2.docs)?void 0:_Primary$parameters2$.source)})}),FullScreen.parameters=Object.assign({},FullScreen.parameters,{docs:Object.assign({},null==(_FullScreen$parameter=FullScreen.parameters)?void 0:_FullScreen$parameter.docs,{source:Object.assign({originalSource:"{\n  render: () => <TbnModal visible={true} componentToRender={<TbnSpinner label='Gij hed da lef nie' textVisible />} fullScreen />\n}"},null==(_FullScreen$parameter2=FullScreen.parameters)||null==(_FullScreen$parameter3=_FullScreen$parameter2.docs)?void 0:_FullScreen$parameter3.source)})})},"./src/components/TabaknatieModal/TabaknatieModal.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TbnModal=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Modal=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_styles=__webpack_require__("./src/components/TabaknatieModal/styles.tsx"),TbnModal=exports.TbnModal=function TbnModal(props){return _react.default.createElement(_Modal.default,{transparent:!1,visible:props.visible,onRequestClose:props.onRequestClose,animationType:props.animationType},_react.default.createElement(_View.default,{style:_styles.styles.centeredView},props.fullScreen?_react.default.createElement(_View.default,null,props.componentToRender):_react.default.createElement(_View.default,{style:_styles.styles.modalView},props.componentToRender)))};try{TbnModal.displayName="TbnModal",TbnModal.__docgenInfo={description:"",displayName:"TbnModal",props:{componentToRender:{defaultValue:null,description:"",name:"componentToRender",required:!0,type:{name:"Element"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"",name:"onRequestClose",required:!1,type:{name:"(() => void)"}},animationType:{defaultValue:null,description:"",name:"animationType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"slide"'},{value:'"fade"'}]}},fullScreen:{defaultValue:null,description:"",name:"fullScreen",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabaknatieModal/TabaknatieModal.tsx#TbnModal"]={docgenInfo:TbnModal.__docgenInfo,name:"TbnModal",path:"src/components/TabaknatieModal/TabaknatieModal.tsx#TbnModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabaknatieModal/styles.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.styles=void 0;var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"));exports.styles=_StyleSheet.default.create({centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:"white",borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5}})},"./src/components/TabaknatieSpinner/TabaknatieSpinner.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TbnSpinner=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_ActivityIndicator=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/ActivityIndicator/index.js")),_styles=__webpack_require__("./src/components/TabaknatieSpinner/styles.tsx"),TbnSpinner=exports.TbnSpinner=function TbnSpinner(props){return _react.default.createElement(_View.default,{style:_styles.styles.modal},_react.default.createElement(_ActivityIndicator.default,{size:"large",animating:!0,color:"#0000ff"}),props.textVisible&&_react.default.createElement(_Text.default,{style:_styles.styles.text},props.label))};try{TbnSpinner.displayName="TbnSpinner",TbnSpinner.__docgenInfo={description:"",displayName:"TbnSpinner",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},textVisible:{defaultValue:null,description:"",name:"textVisible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabaknatieSpinner/TabaknatieSpinner.tsx#TbnSpinner"]={docgenInfo:TbnSpinner.__docgenInfo,name:"TbnSpinner",path:"src/components/TabaknatieSpinner/TabaknatieSpinner.tsx#TbnSpinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabaknatieSpinner/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"TbnSpinner",{enumerable:!0,get:function get(){return _TabaknatieSpinner.TbnSpinner}});var _TabaknatieSpinner=__webpack_require__("./src/components/TabaknatieSpinner/TabaknatieSpinner.tsx")},"./src/components/TabaknatieSpinner/styles.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.styles=void 0;var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"));exports.styles=_StyleSheet.default.create({modal:{alignItems:"center"},text:{color:"#3f2949",fontSize:25,marginTop:90},load:{marginTop:70}})}}]);