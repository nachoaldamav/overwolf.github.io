"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[24],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(25773),o=(r(27378),r(35318));const a={id:215,image:"/img/embed/changelogs.jpg",title:"Version 0.215",sidebar_label:"0.215",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2022/december/215",id:"api/changelogs/overwolf-platform/2022/december/215",title:"Version 0.215",description:"* Note that iterations 213 to 215 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2022/december/215.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/december",slug:"/api/changelogs/overwolf-platform/2022/december/215",permalink:"/api/changelogs/overwolf-platform/2022/december/215",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/../pages/api/changelogs/overwolf-platform/2022/december/215.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"215",image:"/img/embed/changelogs.jpg",title:"Version 0.215",sidebar_label:"0.215",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.216",permalink:"/api/changelogs/overwolf-platform/2022/december/216"},next:{title:"0.212",permalink:"/api/changelogs/overwolf-platform/2022/november/212"}},c={},s=[{value:"Bug Fixes",id:"bug-fixes",level:3}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note that iterations 213 to 215 were combined into a single iteration.")),(0,o.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where in-game windows in valorant would receive a double click event when clicked once."),(0,o.kt)("li",{parentName:"ul"},"Fixed an issue involving maximizing hidden windows, and an issue involving hiding maximized windows."),(0,o.kt)("li",{parentName:"ul"},"Apps can now be installed from test channels, even if the app's production channel is empty."),(0,o.kt)("li",{parentName:"ul"},"Fixed an uncommon crash when moving windows between screens."),(0,o.kt)("li",{parentName:"ul"},"Social APIs no longer write the wrong platform name when logging a successful share."),(0,o.kt)("li",{parentName:"ul"},"Fixed an error involving ",(0,o.kt)("a",{parentName:"li",href:"/api/utils#getclientinfocallback"},(0,o.kt)("inlineCode",{parentName:"a"},"overwolf.utils.getClientInfo()")),"."),(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where window content would sometimes fail to render.")))}m.isMDXComponent=!0}}]);