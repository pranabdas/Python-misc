"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[7918],{1310:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(7462),l=n(7294),r=n(6010),i=n(5281),o=n(3438),c=n(8596),s=n(9960),d=n(5999),m=n(4996);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function f(){var e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(s.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:v.breadcrumbHomeIcon})))}var p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function h(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?l.createElement("span",{className:a,itemProp:"name"},t):n?l.createElement(s.Z,{className:a,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:a},t)}function b(e){var t=e.children,n=e.active,i=e.index,o=e.addMicrodata;return l.createElement("li",(0,a.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(i+1)}))}function E(){var e=(0,o.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(i.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(f,null),e.map((function(t,n){var a=n===e.length-1;return l.createElement(b,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:a},t.label))})))):null}},8835:function(e,t,n){n.r(t),n.d(t,{default:function(){return Oe}});var a=n(7294),l=n(1944),r=n(9688),i=a.createContext(null);function o(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(i.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(i);if(null===e)throw new r.i6("DocProvider");return e}function s(){var e,t=c(),n=t.metadata,r=t.frontMatter,i=t.assets;return a.createElement(l.d,{title:n.title,description:n.description,keywords:r.keywords,image:null!=(e=i.image)?e:r.image})}var d=n(6010),m=n(7524),u=n(4966);function v(){var e=c().metadata;return a.createElement(u.Z,{previous:e.previous,next:e.next})}var f=n(3120),p=n(2799),h=n(5281),b=n(5999);function E(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function g(e){var t=e.lastUpdatedBy;return a.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return a.createElement("span",{className:h.k.common.lastUpdated},a.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(g,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var C=n(7462),Z=n(3366),L={iconEdit:"iconEdit_Z9Sw"},k=["className"];function _(e){var t=e.className,n=(0,Z.Z)(e,k);return a.createElement("svg",(0,C.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(L.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function y(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:h.k.common.editThisPage},a.createElement(_,null),a.createElement(b.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T=n(9960),x={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function H(e){var t=e.permalink,n=e.label,l=e.count;return a.createElement(T.Z,{href:t,className:(0,d.Z)(x.tag,l?x.tagWithCount:x.tagRegular)},n,l&&a.createElement("span",null,l))}var w={tags:"tags_jXut",tag:"tag_QGVx"};function A(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(b.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(w.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:w.tag},a.createElement(H,{label:t,permalink:n}))}))))}var M={lastUpdated:"lastUpdated_vwxv"};function U(e){return a.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(A,e)))}function B(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(y,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",M.lastUpdated)},(n||l)&&a.createElement(N,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function I(){var e=c().metadata,t=e.editUrl,n=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,r=e.lastUpdatedBy,i=e.tags,o=i.length>0,s=!!(t||n||r);return o||s?a.createElement("footer",{className:(0,d.Z)(h.k.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(U,{tags:i}),s&&a.createElement(B,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var S=n(6043),z=n(6668),O=["parentIndex"];function V(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,Z.Z)(e,O);n>=0?t[n].children.push(l):a.push(l)})),a}function R(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=R({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function D(e){var t=e.getBoundingClientRect();return t.top===t.bottom?D(e.parentNode):t}function P(e,t){var n,a,l=t.anchorTopOffset,r=e.find((function(e){return D(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(D(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(n=e[e.length-1])?n:null}function j(){var e=(0,a.useRef)(0),t=(0,z.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function F(e){var t=(0,a.useRef)(void 0),n=j();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=P(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function W(e){var t=e.toc,n=e.className,l=e.linkClassName,r=e.isChild;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(W,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}var q=a.memo(W),G=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function Y(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,r=e.linkClassName,i=void 0===r?"table-of-contents__link":r,o=e.linkActiveClassName,c=void 0===o?void 0:o,s=e.minHeadingLevel,d=e.maxHeadingLevel,m=(0,Z.Z)(e,G),u=(0,z.L)(),v=null!=s?s:u.tableOfContents.minHeadingLevel,f=null!=d?d:u.tableOfContents.maxHeadingLevel,p=function(e){var t=e.toc,n=e.minHeadingLevel,l=e.maxHeadingLevel;return(0,a.useMemo)((function(){return R({toc:V(t),minHeadingLevel:n,maxHeadingLevel:l})}),[t,n,l])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return F((0,a.useMemo)((function(){if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:f}}),[i,c,v,f])),a.createElement(q,(0,C.Z)({toc:p,className:l,linkClassName:i},m))}var J={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"},Q=["collapsed"];function X(e){var t=e.collapsed,n=(0,Z.Z)(e,Q);return a.createElement("button",(0,C.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",J.tocCollapsibleButton,!t&&J.tocCollapsibleButtonExpanded,n.className)}),a.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var K={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function $(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,r=e.maxHeadingLevel,i=(0,S.u)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return a.createElement("div",{className:(0,d.Z)(K.tocCollapsible,!o&&K.tocCollapsibleExpanded,n)},a.createElement(X,{collapsed:o,onClick:c}),a.createElement(S.z,{lazy:!0,className:K.tocCollapsibleContent,collapsed:o},a.createElement(Y,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}var ee={tocMobile:"tocMobile_ITEo"};function te(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement($,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,d.Z)(h.k.docs.docTocMobile,ee.tocMobile)})}var ne={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},ae=["className"],le="table-of-contents__link toc-highlight",re="table-of-contents__link--active";function ie(e){var t=e.className,n=(0,Z.Z)(e,ae);return a.createElement("div",{className:(0,d.Z)(ne.tableOfContents,"thin-scrollbar",t)},a.createElement(Y,(0,C.Z)({},n,{linkClassName:le,linkActiveClassName:re})))}function oe(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(ie,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var ce=n(2503),se=n(3905),de=n(5742),me=["mdxType","originalType"];var ue=n(614);var ve=n(2389),fe={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"},pe=["summary","children"];function he(e){return!!e&&("SUMMARY"===e.tagName||he(e.parentElement))}function be(e,t){return!!e&&(e===t||be(e.parentElement,t))}function Ee(e){var t=e.summary,n=e.children,l=(0,Z.Z)(e,pe),r=(0,ve.Z)(),i=(0,a.useRef)(null),o=(0,S.u)({initialState:!l.open}),c=o.collapsed,s=o.setCollapsed,m=(0,a.useState)(l.open),u=m[0],v=m[1],f=a.isValidElement(t)?t:a.createElement("summary",null,null!=t?t:"Details");return a.createElement("details",(0,C.Z)({},l,{ref:i,open:u,"data-collapsed":c,className:(0,d.Z)(fe.details,r&&fe.isBrowser,l.className),onMouseDown:function(e){he(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;he(t)&&be(t,i.current)&&(e.preventDefault(),c?(s(!1),v(!0)):s(!0))}}),f,a.createElement(S.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),v(!e)}},a.createElement("div",{className:fe.collapsibleContent},n)))}var ge={details:"details_b_Ee"},Ne="alert alert--info";function Ce(e){var t=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return a.createElement(Ee,(0,C.Z)({},t,{className:(0,d.Z)(Ne,ge.details,t.className)}))}function Ze(e){return a.createElement(ce.Z,e)}var Le={containsTaskList:"containsTaskList_mC6p"};var ke={img:"img_ev3q"};var _e="admonition_LlT9",ye="admonitionHeading_tbUL",Te="admonitionIcon_kALy",xe="admonitionContent_S0QG";var He={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(b.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(b.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(b.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(b.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(b.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},we={secondary:"note",important:"info",success:"tip",warning:"danger"};function Ae(e){var t,n=function(e){var t=a.Children.toArray(e),n=t.find((function(e){var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:l}}(e.children),l=n.mdxAdmonitionTitle,r=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:l,children:r})}var Me={head:function(e){var t=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,l=(n.mdxType,n.originalType,(0,Z.Z)(n,me));return a.createElement(e.props.originalType,l)}return e}(e):e}));return a.createElement(de.Z,e,t)},code:function(e){var t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((function(e){var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(ue.Z,e)},a:function(e){return a.createElement(T.Z,e)},pre:function(e){var t;return a.createElement(ue.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(Ce,(0,C.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,C.Z)({},e,{className:(t=e.className,(0,d.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Le.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,C.Z)({loading:"lazy"},e,{className:(t=e.className,(0,d.Z)(t,ke.img))}));var t},h1:function(e){return a.createElement(Ze,(0,C.Z)({as:"h1"},e))},h2:function(e){return a.createElement(Ze,(0,C.Z)({as:"h2"},e))},h3:function(e){return a.createElement(Ze,(0,C.Z)({as:"h3"},e))},h4:function(e){return a.createElement(Ze,(0,C.Z)({as:"h4"},e))},h5:function(e){return a.createElement(Ze,(0,C.Z)({as:"h5"},e))},h6:function(e){return a.createElement(Ze,(0,C.Z)({as:"h6"},e))},admonition:function(e){var t=Ae(e),n=t.children,l=t.type,r=t.title,i=t.icon,o=function(e){var t,n=null!=(t=we[e])?t:e,a=He[n];return a||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),He.info)}(l),c=null!=r?r:o.label,s=o.iconComponent,m=null!=i?i:a.createElement(s,null);return a.createElement("div",{className:(0,d.Z)(h.k.common.admonition,h.k.common.admonitionType(e.type),"alert","alert--"+o.infimaClassName,_e)},a.createElement("div",{className:ye},a.createElement("span",{className:Te},m),c),a.createElement("div",{className:xe},n))},mermaid:function(){return null}};function Ue(e){var t=e.children;return a.createElement(se.Zo,{components:Me},t)}function Be(e){var t,n,l,r,i=e.children,o=(t=c(),n=t.metadata,l=t.frontMatter,r=t.contentTitle,l.hide_title||void 0!==r?null:n.title);return a.createElement("div",{className:(0,d.Z)(h.k.docs.docMarkdown,"markdown")},o&&a.createElement("header",null,a.createElement(ce.Z,{as:"h1"},o)),a.createElement(Ue,null,i))}var Ie=n(1310),Se={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ze(e){var t,n,l,r,i,o,s=e.children,u=(t=c(),n=t.frontMatter,l=t.toc,r=(0,m.i)(),i=n.hide_table_of_contents,o=!i&&l.length>0,{hidden:i,mobile:o?a.createElement(te,null):void 0,desktop:!o||"desktop"!==r&&"ssr"!==r?void 0:a.createElement(oe,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!u.hidden&&Se.docItemCol)},a.createElement(f.Z,null),a.createElement("div",{className:Se.docItemContainer},a.createElement("article",null,a.createElement(Ie.Z,null),a.createElement(p.Z,null),u.mobile,a.createElement(Be,null,s),a.createElement(I,null)),a.createElement(v,null))),u.desktop&&a.createElement("div",{className:"col col--3"},u.desktop))}function Oe(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(o,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(s,null),a.createElement(ze,null,a.createElement(n,null))))}},4966:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),l=n(7294),r=n(5999),i=n(6010),o=n(9960);function c(e){var t=e.permalink,n=e.title,a=e.subLabel,r=e.isNext;return l.createElement(o.Z,{className:(0,i.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function s(e){var t=e.previous,n=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(c,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},2799:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(6010),r=n(5999),i=n(5281),o=n(4477);function c(e){var t=e.className,n=(0,o.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7294),l=n(6010),r=n(2263),i=n(9960),o=n(5999),c=n(143),s=n(5281),d=n(373),m=n(4477);var u={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,l=e.onClick;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:l},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,n=e.className,i=e.versionMetadata,o=(0,r.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,u=(0,d.J)(m).savePreferredVersionName,p=(0,c.Jo)(m),h=p.latestDocSuggestion,b=p.latestVersionSuggestion,E=null!=h?h:(t=b).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,l.Z)(n,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:o,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:b.label,to:E.path,onClick:function(){return u(b.name)}})))}function h(e){var t=e.className,n=(0,m.E)();return n.banner?a.createElement(p,{className:t,versionMetadata:n}):null}},2503:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),l=n(3366),r=n(7294),i=n(6010),o=n(5999),c=n(6668),s=n(9960),d={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"},m=["as","id"];function u(e){var t=e.as,n=e.id,u=(0,l.Z)(e,m),v=(0,c.L)().navbar.hideOnScroll;if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},u,{id:void 0}));var f=(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return r.createElement(t,(0,a.Z)({},u,{className:(0,i.Z)("anchor",v?d.anchorWithHideOnScrollNavbar:d.anchorWithStickyNavbar,u.className),id:n}),u.children,r.createElement(s.Z,{className:"hash-link",to:"#"+n,"aria-label":f,title:f},"\u200b"))}}}]);