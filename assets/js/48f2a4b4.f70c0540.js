"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6643],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,d=s["".concat(l,".").concat(f)]||s[f]||u[f]||a;return n?r.createElement(d,p(p({ref:t},m),{},{components:n})):r.createElement(d,p({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4390:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(25773),o=(n(27378),n(35318));const a={toc:[]};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"app.overwolf.isCMPRequired()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns whether or not a user is required to be informed about the CMP.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { app } from 'electron';\n\nawait app.overwolf.isCMPRequired();\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"app.overwolf.openCMPWindow()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Opens the built-in CMP window.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.overwolf.openCMPWindow({\n    // defaults to purposes if not defined\n    tab?: ['purposes' | 'features' | 'vendors']\n});\n")))}p.isMDXComponent=!0},19399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var r=n(25773),o=(n(27378),n(35318)),a=n(4390);const p={id:"consent-management-platform",image:"/img/embed/api-docs.jpg",title:"Consent Management Platform",sidebar_custom_props:{tags:{overwolf_platform:!1,electron_platform:!0}}},i=void 0,l={unversionedId:"api/electron/consent-management-platform/consent-management-platform",id:"api/electron/consent-management-platform/consent-management-platform",title:"Consent Management Platform",description:"This page is only intended to serve as a quick reference to the CMP API.",source:"@site/../pages/api/electron/consent-management-platform/consent-management-platform.mdx",sourceDirName:"api/electron/consent-management-platform",slug:"/api/electron/consent-management-platform/",permalink:"/api/electron/consent-management-platform/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/../pages/api/electron/consent-management-platform/consent-management-platform.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"consent-management-platform",image:"/img/embed/api-docs.jpg",title:"Consent Management Platform",sidebar_custom_props:{tags:{overwolf_platform:!1,electron_platform:!0}}},sidebar:"api",previous:{title:"Hunt: Showdown",permalink:"/api/live-game-data/deprecated/hunt-showdown"},next:{title:"package.json",permalink:"/api/electron/package/"}},c={},m=[],s={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"About The CMP",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This page is only intended to serve as a quick reference to the CMP API.\nFor more information about the CMP, click ",(0,o.kt)("a",{parentName:"p",href:"/tools/ow-electron/consent-management-platform"},"here"),".")),(0,o.kt)(a.ZP,{mdxType:"API"}))}u.isMDXComponent=!0}}]);