"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[4505],{7605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"basics/gs","title":"Python Basics","description":"Python is a dynamically typed, interpreted language. Python interpreter is","source":"@site/docs/basics/gs.mdx","sourceDirName":"basics","slug":"/basics/gs","permalink":"/python-tutorial/basics/gs","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/gs.mdx","tags":[],"version":"current","frontMatter":{"title":"Python Basics","sidebar_label":"Get started"},"sidebar":"docs","previous":{"title":"Basics","permalink":"/python-tutorial/category/basics"},"next":{"title":"List, tuple, dictionary","permalink":"/python-tutorial/basics/list-tuple-dict"}}');var l=t(4848),r=t(8453),s=t(1470),u=t(9365);const i={title:"Python Basics",sidebar_label:"Get started"},o=void 0,c={},d=[{value:"Hello Python",id:"hello-python",level:3},{value:"Assigning variables",id:"assigning-variables",level:3},{value:"String concatenation",id:"string-concatenation",level:3},{value:"Loosely typed",id:"loosely-typed",level:3},{value:"Input",id:"input",level:3},{value:"Type conversion",id:"type-conversion",level:3},{value:"String formatting",id:"string-formatting",level:3}];function p(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Python is a dynamically typed, interpreted language. Python interpreter is\nwritten in C-language. Interpreter program reads and performs the Python codes/\ninstructions. The interpreters interacts with the operating system layer (use\nnetwork, keyboard, mouse, monitor, hard drive etc.)."}),"\n",(0,l.jsx)(n.h3,{id:"hello-python",children:"Hello Python"}),"\n",(0,l.jsx)(n.p,{children:"It is customary to write our first program that prints some message in the\nscreen:"}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'print("Hello Python!")\n'})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"Hello Python!\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"assigning-variables",children:"Assigning variables"}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"a = 5\nb = 3\na + b\n"})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"8\n"})})})]}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"a * b\n"})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"15\n"})})})]}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"a - b\n"})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"2\n"})})})]}),"\n",(0,l.jsxs)(n.admonition,{title:"Good to know",type:"tip",children:[(0,l.jsx)(n.p,{children:"Due to how the numbers are stored in computer memory, floating point algebra\nsometimes might produce unexpected results. Notice the following discrepancy\n(floating point addition/ subtraction is not associative):"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:">>> (1.2 + 1E20) - 1E20\n0.0\n>>> 1.2 + (1E20 - 1E20)\n1.2\n"})})]}),"\n",(0,l.jsx)(n.h3,{id:"string-concatenation",children:"String concatenation"}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'greeting = "Hello"\nname = "Pranab"\nprint(greeting + " " + name)\n'})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"Hello Pranab\n"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["For performance improvement and better readability, consider using ",(0,l.jsx)(n.code,{children:"join"}),"\ninstead of in-place string concatenation."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'" ".join([greeting, name])\n'})}),"\n",(0,l.jsx)(n.h3,{id:"loosely-typed",children:"Loosely typed"}),"\n",(0,l.jsx)(n.p,{children:"As we have seen, we do not need to define the datatype in python. Interestingly,\nfor certain operations, we can even mix types:"}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'my_str = "Rain! "\nmy_str * 3  # multiplying a str with int\n'})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'Rain! Rain! Rain! '\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"input",children:"Input"}),"\n",(0,l.jsx)(n.p,{children:"Collecting user input:"}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'age = input("How old are you? ")\ntype(age)\n'})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"How old are you? 34\n<class 'str'>\n"})})})]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Notice that variable assigned from ",(0,l.jsx)(n.code,{children:"input"})," is a string, even if a number is\nentered."]})}),"\n",(0,l.jsx)(n.h3,{id:"type-conversion",children:"Type conversion"}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"age = int(age)\ntype(age)\n"})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"<class 'int'>\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"string-formatting",children:"String formatting"}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"Singapore".upper()\n'})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'SINGAPORE'\n"})})})]}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"Singapore".lower()\n'})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'singapore'\n"})})})]}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"das".capitalize()\n'})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'Das'\n"})})})]}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"pranab das".title()\n'})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'Pranab Das'\n"})})})]}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"ABCDefgh".swapcase()\n'})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'abcdEFGH'\n"})})})]}),"\n",(0,l.jsxs)(s.A,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(u.A,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"name = 'Pranab'\nage = 34\nprint(\"Name: {0}. Age: {1} years.\".format(name, age))\n"})})}),(0,l.jsx)(u.A,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"Name: Pranab. Age: 34 years.\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"You can also format in the following way:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'print("Name: {name}. Age: {age} years.".format(name=name, age=age))\n'})}),"\n",(0,l.jsx)(n.p,{children:"Starting from Python 3.6 and above:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'print(f"Name: {name}. Age: {age} years.")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(4164);const l={tabItem:"tabItem_Ymn6"};var r=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>A});var a=t(6540),l=t(4164),r=t(3104),s=t(6347),u=t(205),i=t(7485),o=t(1682),c=t(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=p(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,d]=g({queryString:t,groupId:l}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,c.Dv)(t);return[l,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),v=(()=>{const e=o??x;return h({value:e,tabValues:r})?e:null})();(0,u.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),l=u[t].value;l!==a&&(o(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,l.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function f(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(y,{...n,...e})]})}function A(e){const n=(0,m.A)();return(0,j.jsx)(f,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>u});var a=t(6540);const l={},r=a.createContext(l);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);