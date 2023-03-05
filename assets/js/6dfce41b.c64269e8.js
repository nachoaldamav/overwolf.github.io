"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8894],{35318:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>s,MDXProvider:()=>f,mdx:()=>b,useMDXComponents:()=>m,withMDXComponents:()=>c});var o=t(27378);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){return function(r){var t=m(r.components);return o.createElement(e,a({},r,{components:t}))}},m=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},f=function(e){var r=m(e.components);return o.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(t),f=n,u=c["".concat(i,".").concat(f)]||c[f]||d[f]||a;return t?o.createElement(u,l(l({ref:r},s),{},{components:t})):o.createElement(u,l({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},22953:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(25773),n=(t(27378),t(35318));const a={id:220,image:"/img/embed/changelogs.jpg",title:"Version 0.220",sidebar_label:"0.220",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/march/220",id:"api/changelogs/overwolf-platform/2023/march/220",title:"Version 0.220",description:"Bug Fixes",source:"@site/pages/docs/api/changelogs/overwolf-platform/2023/march/220.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/march",slug:"/api/changelogs/overwolf-platform/2023/march/220",permalink:"/api/changelogs/overwolf-platform/2023/march/220",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2023/march/220.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1678019441,formattedLastUpdatedAt:"Mar 5, 2023",frontMatter:{id:"220",image:"/img/embed/changelogs.jpg",title:"Version 0.220",sidebar_label:"0.220",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Version 23.6.0",permalink:"/api/changelogs/electron-platform/ow-electron-builder/v23.6.0"},next:{title:"0.219",permalink:"/api/changelogs/overwolf-platform/2023/february/219"}},p={},s=[{value:"Bug Fixes",id:"bug-fixes",level:3}],c={toc:s};function m(e){let{components:r,...t}=e;return(0,n.mdx)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed an issue where the mouse position detected by overlay windows would be offset from the actual mouse position."),(0,n.mdx)("li",{parentName:"ul"},"Fixed an issue where native windows with the ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#is_alt_f4_blocked"},(0,n.mdx)("inlineCode",{parentName:"a"},"is_alt_f4_blocked"))," property would ignore the taskbar close button."),(0,n.mdx)("li",{parentName:"ul"},"Fixed an issue where an error would be thrown when trying to call ",(0,n.mdx)("a",{parentName:"li",href:"/api/windows#bringtofrontwindowid-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.bringToFront()")),"."),(0,n.mdx)("li",{parentName:"ul"},"Fixed a mis-spelling in the logs produced by the ",(0,n.mdx)("a",{parentName:"li",href:"/api/social/twitter#sharetwittershareparameters-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.social.twitter.share()"))," method.")))}m.isMDXComponent=!0}}]);