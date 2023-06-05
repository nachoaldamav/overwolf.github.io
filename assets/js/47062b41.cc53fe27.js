"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9952],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>i,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=t(27378);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,m=function(e,a){if(null==e)return{};var t,n,m={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}var i=n.createContext({}),p=function(e){return function(a){var t=s(a.components);return n.createElement(e,l({},a,{components:t}))}},s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},x="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,m=e.mdxType,l=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=s(t),u=m,x=p["".concat(r,".").concat(u)]||p[u]||c[u]||l;return t?n.createElement(x,d(d({ref:a},i),{},{components:t})):n.createElement(x,d({ref:a},i))}));function f(e,a){var t=arguments,m=a&&a.mdxType;if("string"==typeof e||m){var l=t.length,r=new Array(l);r[0]=g;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d[x]="string"==typeof e?e:m,r[1]=d;for(var i=2;i<l;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},92388:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=t(25773),m=(t(27378),t(35318));const l={id:"minecraft",image:"/img/embed/games/minecraft.jpg",title:"Minecraft Game events",hide_title:!0,sidebar_label:"Minecraft",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,d={unversionedId:"api/games/events/minecraft",id:"api/games/events/minecraft",title:"Minecraft Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/minecraft.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/minecraft",permalink:"/api/games/events/minecraft",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/minecraft.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1683468411,formattedLastUpdatedAt:"May 7, 2023",frontMatter:{id:"minecraft",image:"/img/embed/games/minecraft.jpg",title:"Minecraft Game events",hide_title:!0,sidebar_label:"Minecraft",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Magic: The Gathering Arena",permalink:"/api/games/events/magic-the-gathering-arena"},next:{title:"New World",permalink:"/api/games/events/new-world"}},o={},i=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4},{value:"<em>name</em> note",id:"name-note",level:4},{value:"<em>player_X</em> note",id:"player_x-note",level:4},{value:"<em>mc_version</em> note",id:"mc_version-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"Events",id:"events",level:3},{value:"<em>server</em> note",id:"server-note",level:4},{value:"note regarding statistics",id:"note-regarding-statistics",level:4},{value:"<em>general_stats</em> note",id:"general_stats-note",level:4},{value:"<em>items_stats</em> note",id:"items_stats-note",level:4},{value:"<em>mobs_stats</em> note",id:"mobs_stats-note",level:4},{value:"<em>location</em> note",id:"location-note",level:4},{value:"<em>facing</em> note",id:"facing-note",level:4},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>chat</em> note",id:"chat-note",level:4},{value:"<code>game_info</code>",id:"game_info-1",level:2},{value:"Info Updates",id:"info-updates-3",level:3},{value:"<em>scene</em> note",id:"scene-note-1",level:4},{value:"<em>name</em> note",id:"name-note-1",level:4},{value:"<code>mods</code>",id:"mods",level:2},{value:"Info Updates",id:"info-updates-4",level:3},{value:"<em>addon_xxx</em> note",id:"addon_xxx-note",level:4},{value:"<code>counters</code>",id:"counters",level:2},{value:"Info Updates",id:"info-updates-5",level:3},{value:"<em>ping</em> note",id:"ping-note",level:4}],p=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",a)},s=p("GameInfo"),u=p("MatchOnly"),x={toc:i};function c(e){let{components:a,...t}=e;return(0,m.mdx)("wrapper",(0,n.Z)({},x,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("head",null,(0,m.mdx)("meta",{name:"keywords",content:"API for Minecraft, Minecraft API, SDK for Minecraft, Minecraft SDK"})),(0,m.mdx)(s,{gameId:8032,page:"docs",mdxType:"GameInfo"}),(0,m.mdx)("p",null,"Please read the ",(0,m.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,m.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Minecraft game events sample app"))),(0,m.mdx)("h2",{id:"available-features"},"Available Features"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#mods"},"mods")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#counters"},"counters"))),(0,m.mdx)("h2",{id:"game-event-status"},"Game event status"),(0,m.mdx)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,m.mdx)("p",null,"Check the current game event status ",(0,m.mdx)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,m.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"GEP supports the following Minecraft versions:")),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Supported vanila versions:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"1.12.2 - support all events except chat, statistics, scene and player_x"),(0,m.mdx)("li",{parentName:"ul"},"1.16 - 1.16.1 - support all events except chat and statistics"),(0,m.mdx)("li",{parentName:"ul"},"1.16.2 - support all events except chat"),(0,m.mdx)("li",{parentName:"ul"},"1.17 - 1.19.4 - full support"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Supported mod-loaders:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Forge 36.0.0 - 36.2.39 "),(0,m.mdx)("li",{parentName:"ul"},"Forge 39.0.0 - 44.1.8 "),(0,m.mdx)("li",{parentName:"ul"},"Fabric 0.14.0 - 0.14.13"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"addons (mods) event is supported from Minecraft versions 1.8 to 1.19 for both Forge and Fabric"))),(0,m.mdx)("h2",{id:"gep_internal"},(0,m.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,m.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,m.mdx)("h4",{id:"gep_internal-note"},(0,m.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,m.mdx)("h2",{id:"game_info"},(0,m.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,m.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"scene"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The name of the current scene."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"name"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The name of the local player."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#name-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"player_X"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The list of players in the current game."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#player_X-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"191.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mc_version"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current Minecraftt version played."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#mc_version-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"205.0")))),(0,m.mdx)("h4",{id:"scene-note"},(0,m.mdx)("em",{parentName:"h4"},"scene")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"scene":"Title Screen"}},"feature":"game_info"}\n{"info":{"game_info":{"scene":"Select World"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"name-note"},(0,m.mdx)("em",{parentName:"h4"},"name")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"name":"OverwoldDeBest"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"player_x-note"},(0,m.mdx)("em",{parentName:"h4"},"player_X")," note"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"A full players list is sent each time a player get in or out from the game"),(0,m.mdx)("li",{parentName:"ul"},"The position of each player in the list can vary from time to time "),(0,m.mdx)("li",{parentName:"ul"},'In case "players visibility toggle" is turned on, this info update will not send values')),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"player_3","value":"Nor555"}\n')),(0,m.mdx)("h4",{id:"mc_version-note"},(0,m.mdx)("em",{parentName:"h4"},"mc_version")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"mc_version":"1.18.2"}},"feature":"game_info"}\n')),(0,m.mdx)("h2",{id:"match_info"},(0,m.mdx)("inlineCode",{parentName:"h2"},"match_info")),(0,m.mdx)("h3",{id:"info-updates-2"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"server"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The full id of the server."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#server-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"general_stats"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"All of the current general statistics."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#general_stats-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"items_stats"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"All of the current item statistics."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#items_stats-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mobs_stats"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"All of the current mob statistics."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#mobs_stats-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"location"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"Current player's location in the game."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#location-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"157.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"facing"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current direction the player is facing."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#facing-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"157.0")))),(0,m.mdx)("h3",{id:"events"},"Events"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Event"),(0,m.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,m.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"match_start"),(0,m.mdx)("td",{parentName:"tr",align:null},"null"),(0,m.mdx)("td",{parentName:"tr",align:null},"When loading into map."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"match_end"),(0,m.mdx)("td",{parentName:"tr",align:null},"null"),(0,m.mdx)("td",{parentName:"tr",align:null},"When disconnecting from map."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"chat"),(0,m.mdx)("td",{parentName:"tr",align:null},"text"),(0,m.mdx)("td",{parentName:"tr",align:null},"When chat window is updated."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#chat-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"187.0")))),(0,m.mdx)("h4",{id:"server-note"},(0,m.mdx)("em",{parentName:"h4"},"server")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"server":"Play.datblock.com"}},"feature":"match_info"}\n')),(0,m.mdx)("h4",{id:"note-regarding-statistics"},"note regarding statistics"),(0,m.mdx)("p",null,"To activate and extract the data out of the statistics you must open the main menu (ESC) and click on the statistics."),(0,m.mdx)("h4",{id:"general_stats-note"},(0,m.mdx)("em",{parentName:"h4"},"general_stats")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "info": {\n        "match_info": {\n            "general_stats": "[ {\n                "name": "damage_absorbed",\n                "value": "0"\n            },\n            {\n                "name": "fall_one_cm",\n                "value": "0 cm"\n            },\n            {\n                "name": "walk_one_cm",\n                "value": "79.65 m"\n            },\n...\n            {"name":"enchant_item","value":"0"}]"}},\n                "feature":"match_info"}\n')),(0,m.mdx)("h4",{id:"items_stats-note"},(0,m.mdx)("em",{parentName:"h4"},"items_stats")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'    {"info":\n        {"match_info":{"items_stats":"[\n            {"name":"rass","value":"4","stat_type":"stat_type.minecraft.mined"},\n            {"name":"ead_bush","value":"31","stat_type":"stat_type.minecraft.mined"},\n            {"name":"ft.wheat_seeds","value":"6","stat_type":"stat_type.minecraft.picked_up"},\n            {"name":"ft.beef","value":"1","stat_type":"stat_type.minecraft.picked_up"},\n            {"name":"ft.leather","value":"1","stat_type":"stat_type.minecraft.picked_up"}]"}},\n            "feature":"match_info"}\n')),(0,m.mdx)("h4",{id:"mobs_stats-note"},(0,m.mdx)("em",{parentName:"h4"},"mobs_stats")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"mobs_stats":"[{"name":"cow","value":"1","stat_type":"stat_type.minecraft.killed"}]"}},"feature":"match_info"}\n')),(0,m.mdx)("h4",{id:"location-note"},(0,m.mdx)("em",{parentName:"h4"},"location")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"location":"{"x":-289.403,"y":60.9237,"z":474.063}"}},"feature":"match_info"}\n{"info":{"match_info":{"location":"{"x":-289.669,"y":60.4237,"z":475.049}"}},"feature":"match_info"}\n{"info":{"match_info":{"location":"{"x":-290.248,"y":59.9237,"z":476.861}"}},"feature":"match_info"}\n{"info":{"match_info":{"location":"{"x":-290.754,"y":59.4237,"z":478.788}"}},"feature":"match_info"}\n')),(0,m.mdx)("h4",{id:"facing-note"},(0,m.mdx)("em",{parentName:"h4"},"facing")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"facing":"{"x":146.851,"y":1.34979}"}},"feature":"match_info"}\n')),(0,m.mdx)("h4",{id:"match_start-note"},(0,m.mdx)("em",{parentName:"h4"},"match_start")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":"null"}]}\n')),(0,m.mdx)("h4",{id:"match_end-note"},(0,m.mdx)("em",{parentName:"h4"},"match_end")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":"null"}]}\n')),(0,m.mdx)("h4",{id:"chat-note"},(0,m.mdx)("em",{parentName:"h4"},"chat")," note"),(0,m.mdx)(u,{mdxType:"MatchOnly"}),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"chat","data":"\xa77overwolfqa\xa77: hello"}]}\n')),(0,m.mdx)("h2",{id:"game_info-1"},(0,m.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,m.mdx)("h3",{id:"info-updates-3"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"scene"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The name of the current scene."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"name"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The name of the local player."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#name-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"153.0")))),(0,m.mdx)("h4",{id:"scene-note-1"},(0,m.mdx)("em",{parentName:"h4"},"scene")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"scene":"Title Screen"}},"feature":"game_info"}\n{"info":{"game_info":{"scene":"Select World"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"name-note-1"},(0,m.mdx)("em",{parentName:"h4"},"name")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"name":"OverwoldDeBest"}},"feature":"game_info"}\n')),(0,m.mdx)("h2",{id:"mods"},(0,m.mdx)("inlineCode",{parentName:"h2"},"mods")),(0,m.mdx)("h3",{id:"info-updates-4"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"addon_xxx"),(0,m.mdx)("td",{parentName:"tr",align:null},"mods"),(0,m.mdx)("td",{parentName:"tr",align:null},"Addons list used by the player"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#addon_xxx-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"190.0")))),(0,m.mdx)("h4",{id:"addon_xxx-note"},(0,m.mdx)("em",{parentName:"h4"},"addon_xxx")," note"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"addons (mods) supported from Minecraft versions 1.8 to 1.18 for both Forge and Fabric ")),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"mods":{"addon_153":"{"name":"xpbook","display_name":"XP Tome","version":"2.1.3"}"}},"feature":"mods"}\n')),(0,m.mdx)("h2",{id:"counters"},(0,m.mdx)("inlineCode",{parentName:"h2"},"counters")),(0,m.mdx)("h3",{id:"info-updates-5"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"ping"),(0,m.mdx)("td",{parentName:"tr",align:null},"performance"),(0,m.mdx)("td",{parentName:"tr",align:null},"Latency changes of the local player in the current game."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#ping-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"191.0")))),(0,m.mdx)("h4",{id:"ping-note"},(0,m.mdx)("em",{parentName:"h4"},"ping")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"counters","category":"performance","key":"ping","value":"157"}\n')))}c.isMDXComponent=!0}}]);