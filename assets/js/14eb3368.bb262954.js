"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["1983"],{5872:function(e,t,n){n.d(t,{Z:()=>b});var r=n("5893");n("7294");var i=n("7026"),s=n("6171"),a=n("6563"),l=n("3868"),o=n("3367"),c=n("7670"),d=n("3187");function u(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function h(){let e=(0,d.ZP)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(u,{className:"breadcrumbHomeIcon_YNFT"})})})}function m(e){let{children:t,href:n,isLast:i}=e,s="breadcrumbs__link";return i?(0,r.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,r.jsx)(o.Z,{className:s,href:n,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:t})}):(0,r.jsx)("span",{className:s,children:t})}function p(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,r.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,r.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function b(){let e=(0,a.s1)(),t=(0,l.Ns)();return e?(0,r.jsx)("nav",{className:(0,i.Z)(s.k.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,r.jsx)(h,{}),e.map((t,n)=>{let i=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,r.jsx)(p,{active:i,index:n,addMicrodata:!!s,children:(0,r.jsx)(m,{href:s,isLast:i,children:t.label})},n)})]})}):null}},4226:function(e,t,n){n.r(t),n.d(t,{default:()=>y});var r=n("5893");n("7294");var i=n("9258"),s=n("6563"),a=n("3187"),l=n("7026"),o=n("3367"),c=n("1107"),d=n("9999"),u=n("7670"),h=n("6055");let m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return(0,r.jsx)(o.Z,{href:t,className:(0,l.Z)("card padding--lg",m.cardContainer),children:n})}function b(e){let{href:t,icon:n,title:i,description:s}=e;return(0,r.jsxs)(p,{href:t,children:[(0,r.jsxs)(h.Z,{as:"h2",className:(0,l.Z)("text--truncate",m.cardTitle),title:i,children:[n," ",i]}),s&&(0,r.jsx)("p",{className:(0,l.Z)("text--truncate",m.cardDescription),title:s,children:s})]})}function x(e){var t;let{item:n}=e,i=(0,s.LM)(n),a=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,u.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,r.jsx)(b,{href:i,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:null!==(t=n.description)&&void 0!==t?t:a(n.items.length)}):null}function v(e){var t,n;let{item:i}=e,a=(0,d.Z)(i.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",l=(0,s.xz)(null!==(t=i.docId)&&void 0!==t?t:void 0);return(0,r.jsx)(b,{href:i.href,icon:a,title:i.label,description:null!==(n=i.description)&&void 0!==n?n:null==l?void 0:l.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(v,{item:t});case"category":return(0,r.jsx)(x,{item:t});default:throw Error("unknown item type ".concat(JSON.stringify(t)))}}function g(e){let{className:t}=e,n=(0,s.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(g,{...e});let i=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,l.Z)("row",n),children:i.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(f,{item:e})},t))})}var Z=n("2368"),N=n("9548"),_=n("1987"),k=n("5872");function L(e){let{categoryGeneratedIndex:t}=e;return(0,r.jsx)(i.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.ZP)(t.image)})}function T(e){let{categoryGeneratedIndex:t}=e,n=(0,s.jA)();return(0,r.jsxs)("div",{className:"generatedIndexPage_vN6x",children:[(0,r.jsx)(N.Z,{}),(0,r.jsx)(k.Z,{}),(0,r.jsx)(_.Z,{}),(0,r.jsxs)("header",{children:[(0,r.jsx)(h.Z,{as:"h1",className:"title_kItE",children:t.title}),t.description&&(0,r.jsx)("p",{children:t.description})]}),(0,r.jsx)("article",{className:"margin-top--lg",children:(0,r.jsx)(j,{items:n.items,className:"list_eTzJ"})}),(0,r.jsx)("footer",{className:"margin-top--lg",children:(0,r.jsx)(Z.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function y(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L,{...e}),(0,r.jsx)(T,{...e})]})}},2368:function(e,t,n){n.d(t,{Z:()=>o});var r=n("5893");n("7294");var i=n("7670"),s=n("7026"),a=n("3367");function l(e){let{permalink:t,title:n,subLabel:i,isNext:l}=e;return(0,r.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}function o(e){let{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(l,{...t,subLabel:(0,r.jsx)(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(l,{...n,subLabel:(0,r.jsx)(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},1987:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5893);n(7294);var i=n(7026),s=n(7670),a=n(6171),l=n(9873);function o(e){let{className:t}=e,n=(0,l.E)();return n.badge?(0,r.jsx)("span",{className:(0,i.Z)(t,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},9548:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(5893);n(7294);var i=n(7026),s=n(7262),a=n(3367),l=n(7670),o=n(8854),c=n(6171),d=n(7137),u=n(9873);let h={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){let t=h[e.versionMetadata.banner];return(0,r.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:i}=e;return(0,r.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(a.Z,{to:n,onClick:i,children:(0,r.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:a}}=(0,s.Z)(),{pluginId:l}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:u}=(0,d.J)(l),{latestDocSuggestion:h,latestVersionSuggestion:b}=(0,o.Jo)(l),x=null!=h?h:b.docs.find(e=>e.id===b.mainDocId);return(0,r.jsxs)("div",{className:(0,i.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(m,{siteTitle:a,versionMetadata:n})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(p,{versionLabel:b.label,to:x.path,onClick:()=>u(b.name)})})]})}function x(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,r.jsx)(b,{className:t,versionMetadata:n}):null}},1107:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(7294),i=n(7262);let s=["zero","one","two","few","many","other"];function a(e){return s.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'.concat(e,'".\nDocusaurus will fallback to the default (English) implementation.\nError: ').concat(t.message,"\n")),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale=".concat(n.locale,", a maximum of ").concat(n.pluralForms.length," plural forms are expected (").concat(n.pluralForms.join(","),"), but the message contains ").concat(r.length,": ").concat(e));let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}}}]);