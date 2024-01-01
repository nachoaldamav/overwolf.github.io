"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[317],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={id:"events-sdk-for-game-developers",image:"/img/embed/api-best-practices.jpg",title:"Events SDK for Game Developers",sidebar_label:"Event SDK for Game Devs",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"topics/integrations/events-sdk-for-game-developers",id:"topics/integrations/events-sdk-for-game-developers",title:"Events SDK for Game Developers",description:"Introduction",source:"@site/../pages/topics/integrations/events-sdk-for-game-developers.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/events-sdk-for-game-developers",permalink:"/topics/integrations/events-sdk-for-game-developers",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/../pages/topics/integrations/events-sdk-for-game-developers.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"events-sdk-for-game-developers",image:"/img/embed/api-best-practices.jpg",title:"Events SDK for Game Developers",sidebar_label:"Event SDK for Game Devs",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Discord",permalink:"/topics/integrations/discord"},next:{title:"Login with Overwolf",permalink:"/topics/integrations/login-with-overwolf"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Structure",id:"structure",level:3},{value:"Implementation",id:"implementation",level:3}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Overwolf event SDK empowers game developers to mark and communicate in-game events and real-time game data, making potential Overwolf apps much more valuable. For example, implementing the SDK properly can allow app developers to build an app that creates a video compilation of kill shots in an FPS, or a highlight reel of team kills in a MOBA."),(0,o.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"You know your game better than anyone - choose the events you think are worth relating to, such as kills, deaths, match start, match end, an achievement reached, gold earned, or any other crucial in-game trigger. After implementing these code lines for each relevant event, a call will be sent through Overwolf to Overwolf apps supporting your game every time they occur."),(0,o.kt)("p",null,"This solution is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Easy \u2013 all you need is to define the events you want to use and send notifications over to Overwolf with a simple function."),(0,o.kt)("li",{parentName:"ol"},"Dynamic \u2013 you have complete flexibility on the types of events you expose and can implement new ones quickly."),(0,o.kt)("li",{parentName:"ol"},"Safe \u2013 the solution will still work as a one-way communication even if Overwolf is not running in the background. Further, game events run on a different thread, so game performance will not be hurt.")),(0,o.kt)("h3",{id:"structure"},"Structure"),(0,o.kt)("p",null,"The Overwolf event SDK is a configurable real-time database split into two main sections:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Information categories \u2013 Data that is usually updated once per match. This will include the player's ID, the team members, the player's level, and other data points that remain static throughout the game."),(0,o.kt)("li",{parentName:"ol"},"Events \u2013 This section includes a real-time database of events (e.g., double kill, head-shot, current gold). Events update frequently and expire just as often, and they are focused on what's happening in a given match.")),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Download the SDK from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/game-events-sdk"},"this link"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Include the 32/64 DLL with your game."),(0,o.kt)("li",{parentName:"ol"},"Review the tester."),(0,o.kt)("li",{parentName:"ol"},"Start updating your code with interesting events."),(0,o.kt)("li",{parentName:"ol"},"If you want ideas or a list of recommended events based on our experience, please send us an email.")),(0,o.kt)("p",null,"For that or any other questions, feel free to reach out directly at ",(0,o.kt)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com")))}m.isMDXComponent=!0}}]);