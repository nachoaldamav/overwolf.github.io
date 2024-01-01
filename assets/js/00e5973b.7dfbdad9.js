"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8842],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4390:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(25773),a=(n(27378),n(35318));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"app.overwolf.isCMPRequired()")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Returns whether or not a user is required to be informed about the CMP.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { app } from 'electron';\n\nawait app.overwolf.isCMPRequired();\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"app.overwolf.openCMPWindow()")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Opens the built-in CMP window.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.overwolf.openCMPWindow({\n    // defaults to purposes if not defined\n    tab?: ['purposes' | 'features' | 'vendors']\n});\n")))}i.isMDXComponent=!0},70537:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(25773),a=(n(27378),n(35318));const r={toc:[{value:"Introducing the CMP",id:"introducing-the-cmp",level:3}]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A CMP makes it easier for you to meet the stricter legal requirements governing data collection in certain parts of the world,\nby helping you handle the process of receiving consent to collect user cookies. This also allows you to show ads to users living in those areas."),(0,a.kt)("p",null,"ow-electron comes with a built in CMP, which your app can utilize out of the box.\nThis allows you to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check if a user needs to be informed of the CMP"),(0,a.kt)("li",{parentName:"ul"},"Show them the CMP itself if necessary, applying any settings they use to the entire ow-electron package")),(0,a.kt)("p",null,"The relevant users should then be informed about the existence of the CMP, as well as where they can find it in the app."),(0,a.kt)("h3",{id:"introducing-the-cmp"},"Introducing the CMP"),(0,a.kt)("p",null,"There are two ways to introduce the relevant users to the CMP:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"During the app's installation - ",(0,a.kt)("strong",{parentName:"li"},"Recommended")),(0,a.kt)("li",{parentName:"ul"},"On the app's first start, as part of the First Time User Experience (FTUE)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you are migrating your app to ow-electron, this will also apply to the first time that existing users start the app after the update")))))}i.isMDXComponent=!0},52288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=n(25773),a=(n(27378),n(35318)),r=n(70537),i=n(4390);const l={id:"consent-management-platform",image:"/img/embed/electron.jpg",title:"Consent Management Platform",sidebar_custom_props:{tags:{overwolf_platform:!1,electron_platform:!0},placeholder:!0}},s=void 0,p={unversionedId:"tools/ow-electron/consent-management-platform/consent-management-platform",id:"tools/ow-electron/consent-management-platform/consent-management-platform",title:"Consent Management Platform",description:"Installer CMP Mockup",source:"@site/../pages/tools/ow-electron/consent-management-platform/consent-management-platform.mdx",sourceDirName:"tools/ow-electron/consent-management-platform",slug:"/tools/ow-electron/consent-management-platform/",permalink:"/tools/ow-electron/consent-management-platform/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/../pages/tools/ow-electron/consent-management-platform/consent-management-platform.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"consent-management-platform",image:"/img/embed/electron.jpg",title:"Consent Management Platform",sidebar_custom_props:{tags:{overwolf_platform:!1,electron_platform:!0},placeholder:!0}},sidebar:"tools",previous:{title:"Frequently Asked Questions",permalink:"/tools/ow-electron/frequently-asked-questions"},next:{title:"Distribution",permalink:"/tools/ow-electron/distribution/"}},c={},u=[{value:"Installer CMP Mockup",id:"installer-cmp-mockup",level:2},{value:"Relevant API",id:"relevant-api",level:2},{value:"Introducing the CMP to users",id:"introducing-the-cmp-to-users",level:2},{value:"Allowing users to access the CMP",id:"allowing-users-to-access-the-cmp",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=m("Tabs"),h=m("TabItem"),f={toc:u};function g(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.ZP,{mdxType:"CMPIntro"}),(0,a.kt)("h2",{id:"installer-cmp-mockup"},"Installer CMP Mockup"),(0,a.kt)("p",null,"Below is a live installer mockup, with the CMP built into it:"),(0,a.kt)("iframe",{style:{border:"1px solid rgba(0, 0, 0, 0.1)"},width:"100%",height:"550",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsLm1ATRmpdGKjyHlVl7iur%2FInstaller-Demo%3Fpage-id%3D1%253A79%26node-id%3D1%253A174%26viewport%3D821%252C419%252C0.32%26scaling%3Dmin-zoom%26starting-point-node-id%3D1%253A174",allowfullscreen:!0}),(0,a.kt)("h2",{id:"relevant-api"},"Relevant API"),(0,a.kt)(i.ZP,{mdxType:"API"}),(0,a.kt)("h2",{id:"introducing-the-cmp-to-users"},"Introducing the CMP to users"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(h,{value:"installer-cmp",label:"CMP During Installation",default:!0,mdxType:"TabItem"},(0,a.kt)("admonition",{title:"Overwolf Windows Installer",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Our ",(0,a.kt)("a",{parentName:"p",href:"/tools/ow-electron/distribution#custom-installer"},"Windows installer")," automatically handles the introduction of the CMP to users during installation, among other things. If you wish to use it,\n",(0,a.kt)("a",{parentName:"p",href:"/support/contact-us"},"ask us for more details"),".")),(0,a.kt)("p",null,"In order to introduce the CMP during installation, you must show users a notice informing them about the CMP before starting the installation.\nWe'll use a mockup of CurseForge's installer notice as an example:")),(0,a.kt)(h,{value:"ftue-cmp",label:"CMP During FTUE",mdxType:"TabItem"},(0,a.kt)("admonition",{title:"FTUE And Migration To ow-electron",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For the purposes discussed here, a user updating from a non ow-electron version of the app, to an ow-electron version of the app,\nis treated as a First Time User, and should be shown the CMP as if they were a new user.")),(0,a.kt)("p",null,"In order to introduce the CMP inside the app itself, you must show First Time Users a notice informing them about the CMP.\nWe'll use a mockup of CurseForge's installer notice as a reference:"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Initial Notice (CurseForge)",src:n(7139).Z,width:"638",height:"421"})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"CMP Notice Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{App Name} may display in-app ads to help provide you with a free high-quality app.\nIn order to deliver ads that are relevant for you, {App Name} and trusted {ad vendors}(**must link to `vendors` tab**)\nstore and/or access information on your computer, and process personal data such as IP address and cookies.\nClick on the \u201cManage\u201d button to control your consents,\nor to object to the processing of your data when done on the basis of legitimate interest.\nYou can change your preferences at any time via the settings screen.\n\nPurposes we use: Store and/or access information on a device,\npersonalised ads and content, ad and content measurement,\naudience insights and product development.\n"))),(0,a.kt)("p",null,"Users can then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage"),", in order to open the CMP window directly, and configure it however they wish."),(0,a.kt)("p",null,"Once done, they ",(0,a.kt)("strong",{parentName:"p"},"must")," click to continue:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Accept & Install")," - If done during installation. Proceeds to install the app"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Accept & Continue")," - If done during FTUE. Proceeds to continue to the app")),(0,a.kt)("h2",{id:"allowing-users-to-access-the-cmp"},"Allowing users to access the CMP"),(0,a.kt)("p",null,"Once the user has been introduced to the CMP, they must be able to find it if they ever wish to alter its settings."),(0,a.kt)("p",null,"This is usually achieved by having a ",(0,a.kt)("strong",{parentName:"p"},"clearly visible")," section in the app's settings, called ",(0,a.kt)("inlineCode",{parentName:"p"},"Privacy"),", that shows the following when clicked:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Privacy Settings",src:n(21038).Z,width:"915",height:"191"})),(0,a.kt)("p",null,"Clicking on ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage")," then opens the CMP window, in the same way that it was opened at the start."))}g.isMDXComponent=!0},7139:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notice-a9c067a1c0ed2cdde88b2a728ff07873.jpg"},21038:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/privacy-settings-cc9baac89f3f0787a454af30d694b1aa.jpg"}}]);