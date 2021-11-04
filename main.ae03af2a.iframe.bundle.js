(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{479:function(module,exports,__webpack_require__){__webpack_require__(480),__webpack_require__(635),__webpack_require__(636),__webpack_require__(846),__webpack_require__(847),__webpack_require__(853),__webpack_require__(854),__webpack_require__(852),__webpack_require__(848),__webpack_require__(855),__webpack_require__(849),__webpack_require__(851),__webpack_require__(856),module.exports=__webpack_require__(833)},546:function(module,exports){},636:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(341)},833:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(341).configure)([__webpack_require__(834),__webpack_require__(835)],module,!1)}).call(this,__webpack_require__(200)(module))},834:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=834},835:function(module,exports,__webpack_require__){var map={"./stories/Player.stories.js":850};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=835},840:function(module,exports,__webpack_require__){var api=__webpack_require__(432),content=__webpack_require__(841);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},841:function(module,exports,__webpack_require__){(exports=__webpack_require__(433)(!1)).push([module.i,".playerButton {\n  border: none;\n  background-color: transparent;\n}\n\n.playerButton:hover {\n  transform: scale(1.1);\n}\n\n.play > svg , .pause > svg {\n  height: 40px;\n  width: 40px;\n}\n\n.prev {\n  transform: rotate(180deg) translateY(3px);\n}\n.prev:hover {\n  transform: scale(1.1) rotate(180deg) translateY(3px);\n}\n\n.prev > svg {\n  height: 20px;\n  width: 20px;\n}\n\n.next > svg {\n  height: 20px;\n  width: 20px;\n}",""]),module.exports=exports},843:function(module,exports,__webpack_require__){var api=__webpack_require__(432),content=__webpack_require__(844);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},844:function(module,exports,__webpack_require__){(exports=__webpack_require__(433)(!1)).push([module.i,"#player {\n  display: none;\n}\n\n.playerContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.actionPanelContainer {\n  display: flex;\n}\n\n.durationRange {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 70%;\n}\n\n.durationRange > span {\n  flex: 1 1;\n  margin-left: 8px;\n}\n\n.durationRange > span:first-of-type {\n  text-align: end;\n  margin-right: 8px;\n  margin-left: 0px;\n}\n\n.durationRange > input {\n  flex: 4 1;\n}\n\n/* Bar */\n\n.input-bar {\n  border-radius: 8px;\n  height: 5px;\n  width: 100%;\n  outline: none;\n  transition: background 450ms ease-in;\n  -webkit-appearance: none;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  border: 1px solid #C7C7C7;\n  height: 16px;\n  width: 16px;\n  border-radius: 16px;\n  background: #FFFFFF;\n  cursor: pointer;\n  -webkit-appearance: none;\n}\n\ninput[type=range]::-moz-range-thumb {\n  border: 1px solid #C7C7C7;\n  height: 16px;\n  width: 16px;\n  border-radius: 16px;\n  background: #FFFFFF;\n  cursor: pointer;\n}",""]),module.exports=exports},850:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithoutSongs",(function(){return Player_stories_WithoutSongs}));__webpack_require__(17),__webpack_require__(836),__webpack_require__(431),__webpack_require__(6),__webpack_require__(9),__webpack_require__(8),__webpack_require__(19),__webpack_require__(15),__webpack_require__(12),__webpack_require__(14),__webpack_require__(13),__webpack_require__(7),__webpack_require__(26);var react=__webpack_require__(0),jsx_runtime=(__webpack_require__(837),__webpack_require__(838),__webpack_require__(840),__webpack_require__(5)),ButtonsSVG_FowardSVG=function FowardSVG(){return Object(jsx_runtime.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"593.912px",height:"593.912px",viewBox:"0 0 593.912 593.912",children:[Object(jsx_runtime.jsx)("g",{children:Object(jsx_runtime.jsx)("g",{children:Object(jsx_runtime.jsxs)("g",{children:[Object(jsx_runtime.jsx)("path",{d:"M564.34,246.605L334.045,113.644c-8.852-5.111-18.896-7.813-29.047-7.813l0,0l0,0c-32.071,0-58.163,26.093-58.163,58.163 v41.521L87.709,113.644c-8.852-5.111-18.896-7.813-29.046-7.813h0l0,0c-32.071,0-58.163,26.093-58.163,58.163v265.923 c0,32.07,26.092,58.164,58.164,58.164c10.149,0,20.193-2.703,29.045-7.812l159.127-91.873v41.521 c0,32.07,26.092,58.164,58.164,58.164c10.15,0,20.193-2.703,29.045-7.812l230.297-132.963 c9.16-5.289,16.695-12.941,21.787-22.129c4.766-8.598,7.283-18.355,7.283-28.221c0-9.867-2.518-19.625-7.283-28.222 C581.035,259.546,573.502,251.894,564.34,246.605z M542.922,310.206L312.625,443.167c-2.465,1.424-5.078,2.072-7.625,2.072 c-7.993,0-15.324-6.391-15.324-15.322v-66.254v-49.469v-34.478v-49.467v-66.254c0-8.932,7.332-15.323,15.324-15.324 c2.547,0,5.16,0.65,7.625,2.073l230.297,132.962C553.121,289.594,553.121,304.317,542.922,310.206z M66.29,443.167 c-2.465,1.424-5.08,2.072-7.626,2.072c-7.993,0-15.324-6.391-15.324-15.322V163.995c0-8.932,7.332-15.323,15.324-15.324 c2.547,0,5.161,0.65,7.626,2.073l180.546,104.238v83.946L66.29,443.167z"}),Object(jsx_runtime.jsx)("path",{d:"M305,488.581c-32.348,0-58.664-26.316-58.664-58.664v-40.655L87.959,480.701c-8.93,5.155-19.061,7.88-29.295,7.88 C26.316,488.581,0,462.265,0,429.917V163.994c0-32.347,26.316-58.663,58.663-58.663c10.238,0,20.369,2.725,29.297,7.88 l158.376,91.438v-40.655c0-32.347,26.316-58.663,58.663-58.663c10.238,0,20.369,2.725,29.297,7.88L564.59,246.172 c9.238,5.333,16.838,13.051,21.977,22.32c4.806,8.669,7.346,18.512,7.346,28.464c0,9.951-2.54,19.793-7.346,28.463 c-5.136,9.267-12.734,16.984-21.975,22.319L334.295,480.701C325.364,485.856,315.234,488.581,305,488.581z M247.336,387.529 v42.388c0,31.796,25.868,57.664,57.664,57.664c10.06,0,20.017-2.679,28.795-7.745l230.297-132.963 c9.083-5.245,16.553-12.831,21.6-21.938c4.724-8.522,7.221-18.197,7.221-27.979c0-9.783-2.497-19.458-7.221-27.979 c-5.051-9.11-12.521-16.696-21.602-21.938L333.795,114.077c-8.775-5.067-18.733-7.746-28.797-7.746 c-31.795,0-57.663,25.868-57.663,57.663v42.388L87.459,114.077c-8.776-5.067-18.734-7.746-28.796-7.746 C26.868,106.332,1,132.199,1,163.994v265.923c0,31.796,25.868,57.664,57.664,57.664c10.059,0,20.017-2.679,28.795-7.745 L247.336,387.529z M305,445.739c-8.726,0-15.824-7.098-15.824-15.822V163.995c0-8.724,7.099-15.823,15.824-15.824l0,0 c2.766,0,5.416,0.72,7.875,2.14l230.297,132.962c4.946,2.855,7.899,7.971,7.899,13.682c0,5.713-2.953,10.828-7.899,13.684 L312.875,443.6C310.418,445.02,307.768,445.739,305,445.739z M305,149.171c-8.174,0.001-14.824,6.651-14.824,14.824v265.922 c0,8.173,6.65,14.822,14.824,14.822c2.59,0,5.071-0.675,7.375-2.005l230.297-132.961c4.634-2.676,7.399-7.467,7.399-12.818 c0-5.35-2.767-10.141-7.399-12.816L312.375,151.177C310.069,149.846,307.588,149.171,305,149.171L305,149.171z M58.664,445.739 c-8.726,0-15.824-7.098-15.824-15.822V163.995c0-8.724,7.099-15.823,15.824-15.824l0,0c2.766,0,5.416,0.72,7.876,2.14 l180.796,104.383v84.524l-0.25,0.144L66.54,443.6C64.082,445.02,61.432,445.739,58.664,445.739z M58.664,149.171 c-8.174,0.001-14.824,6.651-14.824,14.824v265.922c0,8.173,6.65,14.822,14.824,14.822c2.591,0,5.072-0.675,7.376-2.005 L246.335,338.64v-83.369L66.04,151.177C63.734,149.846,61.252,149.171,58.664,149.171L58.664,149.171z"})]})})}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{})]})};ButtonsSVG_FowardSVG.displayName="FowardSVG";var ButtonsSVG_PauseSVG=function PauseSVG(){return Object(jsx_runtime.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 300.003 300.003",children:[Object(jsx_runtime.jsx)("g",{children:Object(jsx_runtime.jsx)("g",{children:Object(jsx_runtime.jsx)("path",{d:"M150.001,0c-82.838,0-150,67.159-150,150c0,82.838,67.162,150.003,150,150.003c82.843,0,150-67.165,150-150.003 C300.001,67.159,232.846,0,150.001,0z M134.41,194.538c0,9.498-7.7,17.198-17.198,17.198s-17.198-7.7-17.198-17.198V105.46 c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z M198.955,194.538c0,9.498-7.701,17.198-17.198,17.198 c-9.498,0-17.198-7.7-17.198-17.198V105.46c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z"})})}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{})]})};ButtonsSVG_PauseSVG.displayName="PauseSVG";var ButtonsSVG_PlaySVG=function PlaySVG(){return Object(jsx_runtime.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"408.221px",height:"408.221px",viewBox:"0 0 408.221 408.221",children:[Object(jsx_runtime.jsx)("g",{children:Object(jsx_runtime.jsx)("g",{children:Object(jsx_runtime.jsx)("path",{d:"M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11 C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012 c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z"})})}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{}),Object(jsx_runtime.jsx)("g",{})]})};ButtonsSVG_PlaySVG.displayName="PlaySVG";var PlayerButton_PlayerButton=function PlayerButton(_ref){var onClick=_ref.onClick,type=_ref.type,Svgs={prev:Object(jsx_runtime.jsx)(ButtonsSVG_FowardSVG,{}),next:Object(jsx_runtime.jsx)(ButtonsSVG_FowardSVG,{}),pause:Object(jsx_runtime.jsx)(ButtonsSVG_PauseSVG,{}),play:Object(jsx_runtime.jsx)(ButtonsSVG_PlaySVG,{})};return Object(jsx_runtime.jsx)("button",{className:"playerButton "+type,type:"button",onClick:onClick,children:Svgs[type]})};PlayerButton_PlayerButton.displayName="PlayerButton";var components_PlayerButton=PlayerButton_PlayerButton;try{PlayerButton_PlayerButton.displayName="PlayerButton",PlayerButton_PlayerButton.__docgenInfo={description:"",displayName:"PlayerButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"prev"'},{value:'"next"'},{value:'"pause"'},{value:'"play"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PlayerButton.tsx#PlayerButton"]={docgenInfo:PlayerButton_PlayerButton.__docgenInfo,name:"PlayerButton",path:"src/components/PlayerButton.tsx#PlayerButton"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(843);var EmptyYoutubePlayer={loadVideoById:function loadVideoById(){return null},playVideo:function playVideo(){return null},pauseVideo:function pauseVideo(){return null},stopVideo:function stopVideo(){return null},seekTo:function seekTo(){return null},clearVideo:function clearVideo(){return null},nextVideo:function nextVideo(){return null},previousVideo:function previousVideo(){return null},playVideoAt:function playVideoAt(){return null},mute:function mute(){return null},unMute:function unMute(){return null},isMuted:function isMuted(){return!1},setVolume:function setVolume(){return null},getVolume:function getVolume(){return 0},getPlayerState:function getPlayerState(){return-1},getCurrentTime:function getCurrentTime(){return 0},getDuration:function getDuration(){return 0},getVideoUrl:function getVideoUrl(){return""},getVideoEmbedCode:function getVideoEmbedCode(){return""},addEventListener:function addEventListener(){return null},removeEventListener:function removeEventListener(){return null},getIframe:function getIframe(){return{}},destroy:function destroy(){return null}},parseDuration=(__webpack_require__(845),function parseDuration(value){var minutes=Math.trunc(value/60),minutesString=1===(""+minutes).length?"0"+minutes:""+minutes,seconds=Math.trunc(value%60);return minutesString+":"+(1===(""+seconds).length?"0"+seconds:""+seconds)});function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Player_Player=function Player(_ref){var _ref$songs=_ref.songs,songs=void 0===_ref$songs?[]:_ref$songs,_ref$start=_ref.start,start=void 0===_ref$start?0:_ref$start,_useState2=_slicedToArray(Object(react.useState)(start),2),currentSong=_useState2[0],setCurrentSong=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(0),2),duration=_useState4[0],setDuration=_useState4[1],_useState6=_slicedToArray(Object(react.useState)(EmptyYoutubePlayer),2),player=_useState6[0],setPLayer=_useState6[1],_useState8=_slicedToArray(Object(react.useState)(-1),2),playerState=_useState8[0],setPlayerState=_useState8[1],_useState10=_slicedToArray(Object(react.useState)(0),2),currentTime=_useState10[0],setCurrentTime=_useState10[1],handlePlaying=function handlePlaying(){return setDuration(player.getDuration())},handleEnd=function handleEnd(){return nextSong()},handleStateChange=function handleStateChange(event){return setPlayerState(event.data)};Object(react.useEffect)((function(){var _handleStates;((_handleStates={})[1]=handlePlaying,_handleStates[0]=handleEnd,_handleStates[2]=function(){return console.log(2)},_handleStates[3]=function(){return console.log(3)},_handleStates[5]=function(){return console.log(5)},_handleStates[-1]=function(){return console.log(-1)},_handleStates)[playerState]()}),[playerState]);var loadPlayer=function loadPlayer(){var _firstScriptTag$paren,tag=document.createElement("script");tag.id="youtubeApi",tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];null==firstScriptTag||null===(_firstScriptTag$paren=firstScriptTag.parentNode)||void 0===_firstScriptTag$paren||_firstScriptTag$paren.insertBefore(tag,firstScriptTag),window.onYouTubeIframeAPIReady=function(){return function startPlayer(){setPLayer(new window.YT.Player("player",{height:"0",width:"0",videoId:songs[currentSong],events:{onReady:function onReady(event){return event.target.playVideo()},onStateChange:handleStateChange}}))}()}};Object(react.useEffect)((function(){var progressInterval=setInterval((function(){player&&setCurrentTime(player.getCurrentTime())}),1e3);return function(){return clearInterval(progressInterval)}}),[player]),Object(react.useEffect)((function(){return loadPlayer()}),[]),Object(react.useEffect)((function(){player.loadVideoById(songs[0],0,"small"),setCurrentSong(0)}),[songs]);var nextSong=function nextSong(){songs.length<=currentSong+1||(player.loadVideoById(songs[currentSong+1],0,"small"),setCurrentSong((function(prevState){return prevState+1})))};return Object(jsx_runtime.jsxs)("div",{className:"playerContainer",children:[Object(jsx_runtime.jsx)("div",{id:"player"}),Object(jsx_runtime.jsxs)("div",{className:"actionPanelContainer",children:[Object(jsx_runtime.jsx)(components_PlayerButton,{onClick:function prevSong(){if(0===currentSong)return player.seekTo(0,!0);player.loadVideoById(songs[currentSong-1],0,"small"),setCurrentSong((function(prevState){return prevState-1}))},type:"prev"}),1!==playerState?Object(jsx_runtime.jsx)(components_PlayerButton,{onClick:function play(){return player.playVideo()},type:"play"}):Object(jsx_runtime.jsx)(components_PlayerButton,{onClick:function pause(){return player.pauseVideo()},type:"pause"}),Object(jsx_runtime.jsx)(components_PlayerButton,{onClick:nextSong,type:"next"})]}),Object(jsx_runtime.jsxs)("div",{className:"durationRange",children:[Object(jsx_runtime.jsx)("span",{children:parseDuration(currentTime)}),Object(jsx_runtime.jsx)("input",{className:"input-bar",style:{background:"linear-gradient(to right, #959595 0%, #959595 "+100*currentTime/(duration||1)+"%, #e1e1e1 "+100*currentTime/(duration||1)+"%, #e1e1e1 100%)"},onChange:function seek(event){var value=event.target.value,seek=parseFloat(value);setCurrentTime(seek),player.seekTo(seek,!0)},type:"range",min:"0",max:duration,step:"any",value:currentTime}),Object(jsx_runtime.jsx)("span",{children:parseDuration(duration)})]})]})};Player_Player.displayName="Player";var components_Player=Player_Player;try{Player_Player.displayName="Player",Player_Player.__docgenInfo={description:"",displayName:"Player",props:{songs:{defaultValue:{value:"[]"},description:"",name:"songs",required:!1,type:{name:"never[]"}},start:{defaultValue:{value:"0"},description:"",name:"start",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Player.tsx#Player"]={docgenInfo:Player_Player.__docgenInfo,name:"Player",path:"src/components/Player.tsx#Player"})}catch(__react_docgen_typescript_loader_error){}function Player_stories_slicedToArray(arr,i){return function Player_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Player_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Player_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Player_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Player_stories_arrayLikeToArray(o,minLen)}(arr,i)||function Player_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Player_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"Components/Player",component:components_Player};var Player_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_Player,Object.assign({},args))};Player_stories_Template.displayName="Template";var Default=Player_stories_Template.bind({});Default.args={songs:["oUFJJNQGwhk","gBrO3VGCwio"]};var Player_stories_WithoutSongs=function WithoutSongs(args){var _useState2=Player_stories_slicedToArray(Object(react.useState)([]),2),songs=_useState2[0],setSongs=_useState2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(components_Player,Object.assign({},args,{songs:songs})),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("button",{type:"button",onClick:function addSongs(){return setSongs(["oUFJJNQGwhk","gBrO3VGCwio"])},children:"Add playlist"}),Object(jsx_runtime.jsx)("button",{type:"button",onClick:function changePlaylist(){return setSongs(["gBrO3VGCwio","oUFJJNQGwhk"])},children:"Change playlist"})]})};Default.parameters=Object.assign({storySource:{source:"(args) => <Player {...args} />"}},Default.parameters),Player_stories_WithoutSongs.parameters=Object.assign({storySource:{source:"(args) => {\n  const [songs, setSongs] = useState([])\n  const addSongs = () => setSongs(['oUFJJNQGwhk', 'gBrO3VGCwio'])\n  const changePlaylist = () => setSongs(['gBrO3VGCwio', 'oUFJJNQGwhk'])\n  return (\n    <>\n      <Player {...args} songs={songs} />\n      <br />\n      <button type=\"button\" onClick={addSongs}>Add playlist</button>\n      <button type=\"button\" onClick={changePlaylist}>Change playlist</button>\n    </>\n  );\n}"}},Player_stories_WithoutSongs.parameters),Player_stories_WithoutSongs.__docgenInfo={description:"",methods:[],displayName:"WithoutSongs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\Player.stories.js"]={name:"WithoutSongs",docgenInfo:Player_stories_WithoutSongs.__docgenInfo,path:"src\\stories\\Player.stories.js"})},856:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(23),__webpack_require__(6),__webpack_require__(50),__webpack_require__(423),__webpack_require__(830),__webpack_require__(47),__webpack_require__(831),__webpack_require__(832),__webpack_require__(422);var client_api=__webpack_require__(863),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[479,2,3]]]);