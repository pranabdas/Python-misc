"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[7920],{2027:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(4165),a=n(5861),l=n(7294),u=n(2263),c=n(6357),s=n(5742),o=n(9960),i=n(5999),m=n(373),h=n(9688),p=["zero","one","two","few","many","other"];function f(e){return p.filter((function(t){return e.includes(t)}))}var d={locale:"en",pluralForms:f(["one","other"]),select:function(e){return 1===e?"one":"other"}};function g(){var e=(0,u.Z)().i18n.currentLocale;return(0,l.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:f(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),d}var t,n}),[e])}function v(){var e=g();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}var y=n(143),E=n(6775),S=n(412);var w=function(){var e=(0,E.k6)(),t=(0,E.TH)(),n=(0,u.Z)().siteConfig.baseUrl;return{searchValue:S.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},I=n(22),b=n(8202),F=n(2539),P=n(726),R=n(1073),k=n(311),Z=n(3926),_=n(1029),C="searchQueryInput_CFBF",x="searchResultItem_U687",q="searchResultItemPath_uIbk",T="searchResultItemSummary_oZHr";function M(){var e=(0,u.Z)().siteConfig.baseUrl,t=(0,y.gA)(),n=e;try{var c,o=(0,m.J)(null!=(c=null==t?void 0:t.pluginId)?c:_.gQ).preferredVersion;o&&!o.isLast&&(n=o.path+"/")}catch(N){if(_.l9&&!(N instanceof h.i6))throw N}var p=v().selectMessage,f=w(),d=f.searchValue,g=f.updateSearchPath,E=(0,l.useState)(d),S=E[0],F=E[1],P=(0,l.useState)(),R=P[0],Z=P[1],x=(0,l.useState)(),q=x[0],T=x[1],M=(0,l.useMemo)((function(){return S?(0,i.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:S}):(0,i.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[S]);(0,l.useEffect)((function(){g(S),R&&(S?R(S,(function(e){T(e)})):T(void 0))}),[S,R]);var L=(0,l.useCallback)((function(e){F(e.target.value)}),[]);return(0,l.useEffect)((function(){d&&d!==S&&F(d)}),[d]),(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)((0,r.Z)().mark((function e(){var t,a,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,I.w)(n);case 2:t=e.sent,a=t.wrappedIndexes,l=t.zhDictionary,Z((function(){return(0,b.v)(a,l,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),l.createElement(l.Fragment,null,l.createElement(s.Z,null,l.createElement("meta",{property:"robots",content:"noindex, follow"}),l.createElement("title",null,M)),l.createElement("div",{className:"container margin-vert--lg"},l.createElement("h1",null,M),l.createElement("input",{type:"search",name:"q",className:C,"aria-label":"Search",onChange:L,value:S,autoComplete:"off",autoFocus:!0}),!R&&S&&l.createElement("div",null,l.createElement(k.Z,null)),q&&(q.length>0?l.createElement("p",null,p(q.length,(0,i.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:q.length}))):l.createElement("p",null,(0,i.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),l.createElement("section",null,q&&q.map((function(e){return l.createElement(U,{key:e.document.i,searchResult:e})})))))}function U(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,u=t.tokens,c=t.metadata,s=0===r,i=2===r,m=(s?n.b:a.b).slice(),h=i?n.s:n.t;return s||m.push(a.t),l.createElement("article",{className:x},l.createElement("h2",null,l.createElement(o.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:i?(0,F.C)(h,u):(0,P.o)(h,(0,R.m)(c,"t"),u,100)}})),m.length>0&&l.createElement("p",{className:q},(0,Z.e)(m)),i&&l.createElement("p",{className:T,dangerouslySetInnerHTML:{__html:(0,P.o)(n.t,(0,R.m)(c,"t"),u,100)}}))}var L=function(){return l.createElement(c.Z,null,l.createElement(M,null))}}}]);