"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9994],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=p(a),d=o,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const s={id:"using-tab",image:"/img/embed/api-best-practices.jpg",title:"Use Tab as an app Hotkey",sidebar_label:"Use Tab as an app Hotkey",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,r={unversionedId:"topics/best-practices/using-tab",id:"topics/best-practices/using-tab",title:"Use Tab as an app Hotkey",description:"Hotkeys - Overview",source:"@site/../pages/topics/best-practices/using-tab.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/using-tab",permalink:"/topics/best-practices/using-tab",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/../pages/topics/best-practices/using-tab.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"using-tab",image:"/img/embed/api-best-practices.jpg",title:"Use Tab as an app Hotkey",sidebar_label:"Use Tab as an app Hotkey",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"User journey and error handling",permalink:"/topics/best-practices/user-flow-and-error-handling"},next:{title:"Video capture best practices",permalink:"/topics/best-practices/video-capture"}},l={},p=[{value:"Hotkeys - Overview",id:"hotkeys---overview",level:2},{value:"Binding App Hotkeys to Game Hotkeys",id:"binding-app-hotkeys-to-game-hotkeys",level:2},{value:"Use Tab as an app Hotkey",id:"use-tab-as-an-app-hotkey",level:2},{value:"Implement &quot;Tabbing&quot; in Your App",id:"implement-tabbing-in-your-app",level:2},{value:"Set your hotkey in the manifest",id:"set-your-hotkey-in-the-manifest",level:3},{value:"Register to the onHold event",id:"register-to-the-onhold-event",level:3}],h={toc:p};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hotkeys---overview"},"Hotkeys - Overview"),(0,o.kt)("p",null,"Overwolf Hotkeys are keystrokes or key combinations that can control your app while in-game. When using a hotkey, your app window is opened, and clicking it again will hide or minimize it. You can allow users to change hotkey combinations from your app\u2019s settings panel by automatically directing the user to the Overwolf settings page.  "),(0,o.kt)("p",null,"You can read all about hotkeys in our ",(0,o.kt)("a",{parentName:"p",href:"hotkeys-best-practices"},"Hotkey best practices")," guide."),(0,o.kt)("h2",{id:"binding-app-hotkeys-to-game-hotkeys"},"Binding App Hotkeys to Game Hotkeys"),(0,o.kt)("p",null,"Most games already have built-in hotkeys for common actions. These key combinations are usually bound to the most important actions. Adding new hotkeys for your app makes the lives of players harder, as they needs to remember additional combinations."),(0,o.kt)("p",null,'We can "hitch a ride" on game hotkeys and provide value in an automated manner. The main advanatage of this approach is that the player doesn\'t need to remember new hotkeys: We can bind OW hotkeys in parallel to the existing game hotkeys to increase value on existing actions.'),(0,o.kt)("h2",{id:"use-tab-as-an-app-hotkey"},"Use Tab as an app Hotkey"),(0,o.kt)("p",null,"One of the most common hotkeys used in many games is the Tab key."),(0,o.kt)("p",null,'The tab button is a physically large button, easy to use and to reach which makes it comfortable for players. A lot of games use it as a built-in "special" hotkey that displays important information, scoreboards and similar data, sometimes in a "ShowOnHold" manner: It displays the info while the key is held down, and hides it when Tab is released.  '),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In League of Legends, when a player is pressing TAB to see match statistics, you can provide him with additional stats on top."),(0,o.kt)("li",{parentName:"ul"},"In CS:GO, when a player buys weapons, you can show the player his new weapon's recoil pattern."),(0,o.kt)("li",{parentName:"ul"},"In Hearthstone, when a player enters the deck / collection screen, you can tell him which of his prepared decks is closest to a good meta deck and what cards he is missing to complete it.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Riding" the Tab key and similar hotkeys, when done right and providing value to your users, is a highly recommended practice.')),(0,o.kt)("p",null,"A LOL example of the popup that appears while the player is holding the tab key (and hides it on release):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(87050).Z,width:"1893",height:"1006"})),(0,o.kt)("h2",{id:"implement-tabbing-in-your-app"},'Implement "Tabbing" in Your App'),(0,o.kt)("p",null,"Start by spotting the hotkeys that your targeted game uses in this fashion - whether it's Tab or other hotkeys. Break down what happens when that key is pressed - Is a new window launched? Is there a new bit of UI? Maybe the champion is doing something? Once mapped, you can think up ways to add value from your app to these screens and automated functions. "),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/api/settings/hotkeys"},"overwolf.settings.hotkeys")," API offers some useful events for that purpose.",(0,o.kt)("br",{parentName:"p"}),"\n","You can find the complete info about hotkeys and how to use them in our ",(0,o.kt)("a",{parentName:"p",href:"hotkeys-best-practices"},"hotkeys best practice")," guide."),(0,o.kt)("h3",{id:"set-your-hotkey-in-the-manifest"},"Set your hotkey in the manifest"),(0,o.kt)("p",null,'Overwolf hotkeys now offer a "ShowOnHold" mode like the tab key does in some games.',(0,o.kt)("br",{parentName:"p"}),"\n",'In order to implement a hotkey which works with an OnHold Tab functionality, we will have to set the hotkey in the manifest as a "hold" hotkey:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"hotkeys": {\n    "show_YourAppName": { \n        "title": "Show Player",\n        "action-type": "custom",\n        "default": "Shift+F9",\n        "passthrough": true,\n        "hold": true\n    }\n}\n')),(0,o.kt)("h3",{id:"register-to-the-onhold-event"},"Register to the onHold event"),(0,o.kt)("p",null,"Custom hotkeys will only work when your app is already running.",(0,o.kt)("br",{parentName:"p"}),"\n","Using a custom hotkey with the app closed will do nothing."),(0,o.kt)("p",null,"In addition, when you are using a ",(0,o.kt)("a",{parentName:"p",href:"#hold-hotkeys"},"hold")," hotkey, you should register to the ",(0,o.kt)("a",{parentName:"p",href:"/api/settings/hotkeys#onhold"},"overwolf.settings.hotkeys.onHold")," event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"overwolf.settings.hotkeys.onHold.addListener(console.log)\n")),(0,o.kt)("p",null,"Note that this event will be fired twice - on key down and on key up:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"name": "ges_showhide", "state": "down"}\n{"name": "ges_showhide", "state": "up"}\n')),(0,o.kt)("p",null,"Once the tab key is released, we can hide/minimize your window."))}c.isMDXComponent=!0},87050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tab-example-lol-a93993752370607d1584c70ced66a533.gif"}}]);