"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[586],{2377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"basics/loop","title":"Loop","description":"for loop","source":"@site/docs/basics/loop.mdx","sourceDirName":"basics","slug":"/basics/loop","permalink":"/python-tutorial/basics/loop","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/loop.mdx","tags":[],"version":"current","frontMatter":{"title":"Loop"},"sidebar":"docs","previous":{"title":"Flow control","permalink":"/python-tutorial/basics/flow-control"},"next":{"title":"Function","permalink":"/python-tutorial/basics/function"}}');var a=t(4848),l=t(8453),o=t(1470),s=t(9365);const u={title:"Loop"},i=void 0,c={},p=[{value:"for loop",id:"for-loop",level:3},{value:"while loop",id:"while-loop",level:3},{value:"break",id:"break",level:3},{value:"continue",id:"continue",level:3}];function d(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"for-loop",children:"for loop"}),"\n",(0,a.jsxs)(o.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,a.jsx)(s.A,{value:"input",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"for i in range(10):\n    print(i)\n"})})}),(0,a.jsx)(s.A,{value:"output",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"while-loop",children:"while loop"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'prompt = "\\nTell me something, and I will repeat it back to you:"\nprompt += "\\nEnter \'quit\' to end the program. "\n\nmessage = ""\nwhile message != \'quit\':\n    message = input(prompt)\n    print(message)\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Use a ",(0,a.jsx)(n.code,{children:"flag"})," to do the same:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"prompt = \"\\nTell me something, and I will repeat it back to you:\"\nprompt += \"\\nEnter 'quit' to end the program. \"\n\nactive = True\nwhile active:\n    message = input(prompt)\n\n    if message == 'quit':\n        active = False\n    else:\n        print(message)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"break",children:"break"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"prompt = \"\\nTell me something, and I will repeat it back to you:\"\nprompt += \"\\nEnter 'quit' to end the program. \"\n\nwhile True:\n    message = input(prompt)\n\n    if message == 'quit':\n        break\n    else:\n        print(message)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"continue",children:"continue"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"continue"})," takes to the beginging of loop."]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,a.jsx)(s.A,{value:"input",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"current_num = 0\nwhile current_num < 10:\n    current_num += 1\n    if current_num % 2 == 0:\n        continue\n    print(current_num)  # print odd numbers only\n"})})}),(0,a.jsx)(s.A,{value:"output",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"1\n3\n5\n7\n9\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var l=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),l=t(3104),o=t(6347),s=t(205),u=t(7485),i=t(1682),c=t(679);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[i,p]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),g=(()=>{const e=i??b;return h({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),f(e)}),[p,f,l]),tabValues:l}}var f=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=s[t].value;a!==r&&(i(n),o(a))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:p,onClick:c,...l,className:(0,a.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,v.jsx)(y,{...e,children:p(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const a={},l=r.createContext(a);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);