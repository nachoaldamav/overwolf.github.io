"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[582],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,g=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={id:"v22.3.13",image:"/img/embed/changelogs.jpg",title:"Version 22.3.13",sidebar_custom_props:{tags:{overwolf_platform:!1,electron_platform:!0}}},l=void 0,i={unversionedId:"api/changelogs/electron-platform/ow-electron/v22.3.13",id:"api/changelogs/electron-platform/ow-electron/v22.3.13",title:"Version 22.3.13",description:"Platform",source:"@site/../pages/api/changelogs/electron-platform/ow-electron/v22.3.13.mdx",sourceDirName:"api/changelogs/electron-platform/ow-electron",slug:"/api/changelogs/electron-platform/ow-electron/v22.3.13",permalink:"/api/changelogs/electron-platform/ow-electron/v22.3.13",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/../pages/api/changelogs/electron-platform/ow-electron/v22.3.13.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"v22.3.13",image:"/img/embed/changelogs.jpg",title:"Version 22.3.13",sidebar_custom_props:{tags:{overwolf_platform:!1,electron_platform:!0}}},sidebar:"api",previous:{title:"Version 22.3.25",permalink:"/api/changelogs/electron-platform/ow-electron/v22.3.25"},next:{title:"Version 22.0.3",permalink:"/api/changelogs/electron-platform/ow-electron/v22.0.3"}},p={},c=[{value:"Platform",id:"platform",level:2},{value:"Sub-Version Summary",id:"sub-version-summary",level:2}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"platform"},"Platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated the underlying ",(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/package/electron"},"electron")," version to ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/electron/v/22.3.13"},(0,o.kt)("inlineCode",{parentName:"a"},"22.3.13")),"."),(0,o.kt)("li",{parentName:"ul"},"Performed various improvements and optimizations to the Overwolf Ads SDK."),(0,o.kt)("li",{parentName:"ul"},"Added support for the Overwolf Electron Package Manager, a module targeted at supporting the different Overwolf API Modules.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The types repository complementing it can be found ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/ow-electron-packages-types"},"here"),"."))),(0,o.kt)("li",{parentName:"ul"},"Added support for the following Overwolf API Modules:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In-game Overlay - Module in charge of letting Apps utilize Overwolf's in-game Overlay."),(0,o.kt)("li",{parentName:"ul"},"Game Events Provider - Module in charge of letting Apps utilize Overwolf's ",(0,o.kt)("a",{parentName:"li",href:"/api/live-game-data"},"Live Game Data")," integration.")))),(0,o.kt)("h2",{id:"sub-version-summary"},"Sub-Version Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/ow-electron/v/22.3.13"},(0,o.kt)("inlineCode",{parentName:"a"},"22.3.13"))," - Initial version.")))}m.isMDXComponent=!0}}]);