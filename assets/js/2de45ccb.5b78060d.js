"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6167],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return o},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){return function(a){var t=u(a.components);return n.createElement(e,r({},a,{components:t}))}},u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},s=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},x={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(t),s=l,c=p["".concat(m,".").concat(s)]||p[s]||x[s]||r;return t?n.createElement(c,d(d({ref:a},o),{},{components:t})):n.createElement(c,d({ref:a},o))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,m=new Array(r);m[0]=c;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:l,m[1]=d;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},16589:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return i},default:function(){return x},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return u}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),m=["components"],d={id:"overwolf-games-events-vanguard",title:"Call of Duty: Vanguard",sidebar_label:"Call of Duty: Vanguard"},i=void 0,o={unversionedId:"api/overwolf-games-events-vanguard",id:"api/overwolf-games-events-vanguard",title:"Call of Duty: Vanguard",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/overwolf-games-events-vanguard.mdx",sourceDirName:"api",slug:"/api/overwolf-games-events-vanguard",permalink:"/docs/api/overwolf-games-events-vanguard",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/overwolf-games-events-vanguard.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"overwolf-games-events-vanguard",title:"Call of Duty: Vanguard",sidebar_label:"Call of Duty: Vanguard"},sidebar:"api",previous:{title:"Valorant",permalink:"/docs/api/overwolf-games-events-valorant"},next:{title:"World of Tanks",permalink:"/docs/api/overwolf-games-events-wot"}},p={},u=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"gep_internal",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"match_info",id:"match_info",level:2},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>round_outcome</em> note",id:"round_outcome-note",level:4},{value:"game_info",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4},{value:"<em>game_mode</em> note",id:"game_mode-note",level:4},{value:"me",id:"me",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>player_name</em> note",id:"player_name-note",level:4},{value:"kill",id:"kill",level:2},{value:"Events",id:"events-1",level:3},{value:"<em>kill</em> note",id:"kill-note",level:4},{value:"death",id:"death",level:2},{value:"Events",id:"events-2",level:3},{value:"<em>death</em> note",id:"death-note",level:4}],s={toc:u};function x(e){var a=e.components,t=(0,l.Z)(e,m);return(0,r.mdx)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Please read the ",(0,r.mdx)("a",{parentName:"p",href:"overwolf-games-events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Game ID")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"21876"))),(0,r.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("ul",{parentName:"div"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The implementation of this game's GEP is experimental and is considered a Beta version")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Support for these events is for English only and for 16:9 and 16:10 screen resolutions, the game window must be visible and should run with native screen resolution. ")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"This game requires enabling exclusive mode on your OW app's windows. Read more about OW ",(0,r.mdx)("a",{parentName:"p",href:"../topics/exclusive-mode"},"exclusive mode"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"In addition, when developing your app, you must comply with Activision\u2019s Call of Duty:Vanguard terms and conditions. Supporting que dodging, interfering with matchmaking or any such behavior is strictly prohibited, and will not be approved. If you have any doubt, please contact us directly before starting development."))),(0,r.mdx)("p",{parentName:"div"},"For more information check our ",(0,r.mdx)("a",{parentName:"p",href:"https://overwolf.github.io/docs/start/game-compliance-guiding-principles"},"Game compliance principles")))),(0,r.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Vanguard game events sample app"))),(0,r.mdx)("h2",{id:"available-features"},"Available Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#me"},"me")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#kill"},"kill")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#death"},"death"))),(0,r.mdx)("h2",{id:"game-event-status"},"Game event status"),(0,r.mdx)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,r.mdx)("p",null,"Check the current game event status ",(0,r.mdx)("a",{parentName:"p",href:"../status/all"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,r.mdx)("a",{parentName:"p",href:"../topics/howto-check-events-status-from-app"},"using our API"),"."),(0,r.mdx)("h2",{id:"gep_internal"},"gep_internal"),(0,r.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"198.0")))),(0,r.mdx)("h4",{id:"gep_internal-note"},(0,r.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"198.0.0","public_version":"198.0.0","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.mdx)("h2",{id:"match_info"},"match_info"),(0,r.mdx)("h3",{id:"events"},"Events"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Event"),(0,r.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,r.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"match_start"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Match started."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"198.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"match_end"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Match ended and also data about the match outcome."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"198.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"round_outcome"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Current round result."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#round_outcome-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"198.0")))),(0,r.mdx)("h4",{id:"match_start-note"},(0,r.mdx)("em",{parentName:"h4"},"match_start")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":null}]}\n')),(0,r.mdx)("h4",{id:"match_end-note"},(0,r.mdx)("em",{parentName:"h4"},"match_end")," note"),(0,r.mdx)("p",null,"Match end event include the match outcome",(0,r.mdx)("br",null),"\nPossible values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"victory"),(0,r.mdx)("li",{parentName:"ul"},"defeat")),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":victory}]}\n')),(0,r.mdx)("h4",{id:"round_outcome-note"},(0,r.mdx)("em",{parentName:"h4"},"round_outcome")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"name":"round_outcome","data":"defeat"}\n{"name":"round_outcome","data":"victory"}\n')),(0,r.mdx)("h2",{id:"game_info"},"game_info"),(0,r.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"scene"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"current player's scene."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"198.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"game_mode"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"current game mode selected by the player."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#game_mode-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"198.0")))),(0,r.mdx)("h4",{id:"scene-note"},(0,r.mdx)("em",{parentName:"h4"},"scene")," note"),(0,r.mdx)("p",null,"Possible values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"lobby"),(0,r.mdx)("li",{parentName:"ul"},"inGame")),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"scene","value":"lobby"}\n')),(0,r.mdx)("h4",{id:"game_mode-note"},(0,r.mdx)("em",{parentName:"h4"},"game_mode")," note"),(0,r.mdx)("p",null,"Possible values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"free_for_all "),(0,r.mdx)("li",{parentName:"ul"},"team_deathmatch "),(0,r.mdx)("li",{parentName:"ul"},"kill_confirmed "),(0,r.mdx)("li",{parentName:"ul"},"domination "),(0,r.mdx)("li",{parentName:"ul"},"search_destroy "),(0,r.mdx)("li",{parentName:"ul"},"hardpoint "),(0,r.mdx)("li",{parentName:"ul"},"control "),(0,r.mdx)("li",{parentName:"ul"},"patrol "),(0,r.mdx)("li",{parentName:"ul"},"champion_hill"),(0,r.mdx)("li",{parentName:"ul"},"arms_race")),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"game_mode","value":"domination"}\n')),(0,r.mdx)("h2",{id:"me"},"me"),(0,r.mdx)("h3",{id:"info-updates-2"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"player_name"),(0,r.mdx)("td",{parentName:"tr",align:null},"me"),(0,r.mdx)("td",{parentName:"tr",align:null},"current player's name."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#player_name-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"198.0")))),(0,r.mdx)("h4",{id:"player_name-note"},(0,r.mdx)("em",{parentName:"h4"},"player_name")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"me","category":"me","key":"player_name","value":"someUser"}\n')),(0,r.mdx)("h2",{id:"kill"},"kill"),(0,r.mdx)("h3",{id:"events-1"},"Events"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Event"),(0,r.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,r.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"kill"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Local player has performed a kill."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#kill-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"198.0")))),(0,r.mdx)("h4",{id:"kill-note"},(0,r.mdx)("em",{parentName:"h4"},"kill")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"kill","data":null}]}\n')),(0,r.mdx)("h2",{id:"death"},"death"),(0,r.mdx)("h3",{id:"events-2"},"Events"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Event"),(0,r.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,r.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"death"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Local player has died."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#death-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"198.0")))),(0,r.mdx)("h4",{id:"death-note"},(0,r.mdx)("em",{parentName:"h4"},"death")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"death","data":null}]}\n')))}x.isMDXComponent=!0}}]);