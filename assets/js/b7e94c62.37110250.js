"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7284],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){return function(t){var n=s(t.components);return r.createElement(e,a({},t,{components:n}))}},s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(f,m(m({ref:t},l),{},{components:n})):r.createElement(f,m({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=f;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:o,p[1]=m;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64069:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={toc:[]};function p(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"app.overwolf.isCMPRequired()")),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Returns whether or not a user is required to be informed about the CMP.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import { app } from 'electron';\n\nawait app.overwolf.isCMPRequired();\n")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"app.overwolf.openCMPWindow()")),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Opens the built-in CMP window.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"app.overwolf.openCMPWindow();\n")))}p.isMDXComponent=!0},39058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=n(64069);const p={id:"consent-management-platform",image:"/img/embed/api-docs.jpg",title:"Consent Management Platform",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!0}},m=void 0,i={unversionedId:"api/electron/consent-management-platform/consent-management-platform",id:"api/electron/consent-management-platform/consent-management-platform",title:"Consent Management Platform",description:"This page is only intended to serve as a quick reference to the CMP api.",source:"@site/pages/docs/api/electron/consent-management-platform/consent-management-platform.mdx",sourceDirName:"api/electron/consent-management-platform",slug:"/api/electron/consent-management-platform/",permalink:"/api/electron/consent-management-platform/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/electron/consent-management-platform/consent-management-platform.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1668072666,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"consent-management-platform",image:"/img/embed/api-docs.jpg",title:"Consent Management Platform",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!0}},sidebar:"api",next:{title:"package.json",permalink:"/api/electron/package/"}},l={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("admonition",{title:"About The CMP",type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"This page is only intended to serve as a quick reference to the CMP api.\nFor more information about the CMP, click ",(0,o.mdx)("a",{parentName:"p",href:"/tools/ow-electron/consent-management-platform"},"here"),".")),(0,o.mdx)(a.ZP,{mdxType:"API"}))}u.isMDXComponent=!0}}]);