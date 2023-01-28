"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[3222],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},u=Object.keys(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,u=e.originalType,s=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),m=i(a),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||u;return a?n.createElement(k,p(p({ref:t},o),{},{components:a})):n.createElement(k,p({ref:t},o))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var u=a.length,p=new Array(u);p[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:l,p[1]=r;for(var i=2;i<u;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),l=a(6010),u="tabItem_Ymn6";function p(e){var t=e.children,a=e.hidden,p=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(u,p),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(7462),l=a(7294),u=a(6010),p=a(2466),r=a(6550),s=a(1980),i=a(7392),o=a(12);function m(e){return function(e){return l.Children.map(e,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,a=e.children;return(0,l.useMemo)((function(){var e=null!=t?t:m(a);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function k(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,u=(0,r.k6)(),p=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(p),(0,l.useCallback)((function(e){if(p){var t=new URLSearchParams(u.location.search);t.set(p,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[p,u])]}function h(e){var t,a,n,u,p=e.defaultValue,r=e.queryString,s=void 0!==r&&r,i=e.groupId,m=c(e),h=(0,l.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var l=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:p,tabValues:m})})),y=h[0],v=h[1],b=k({queryString:s,groupId:i}),g=b[0],N=b[1],f=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),a=(0,o.Nk)(t),n=a[0],u=a[1],[n,(0,l.useCallback)((function(e){t&&u.set(e)}),[t,u])]),T=f[0],x=f[1],I=function(){var e=null!=g?g:T;return d({value:e,tabValues:m})?e:null}();return(0,l.useEffect)((function(){I&&v(I)}),[I]),{selectedValue:y,selectValue:(0,l.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),x(e)}),[N,x,m]),tabValues:m}}var y=a(2389),v="tabList__CuJ",b="tabItem_LNqP";function g(e){var t=e.className,a=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,o=[],m=(0,p.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=o.indexOf(t),n=i[a].value;n!==r&&(m(t),s(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,l=o.indexOf(e.currentTarget)+1;a=null!=(n=o[l])?n:o[0];break;case"ArrowLeft":var u,p=o.indexOf(e.currentTarget)-1;a=null!=(u=o[p])?u:o[o.length-1]}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},t)},i.map((function(e){var t=e.value,a=e.label,p=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},p,{className:(0,u.Z)("tabs__item",b,null==p?void 0:p.className,{"tabs__item--active":r===t})}),null!=a?a:t)})))}function N(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(t){var u=a.find((function(e){return e.props.value===n}));return u?(0,l.cloneElement)(u,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function f(e){var t=h(e);return l.createElement("div",{className:(0,u.Z)("tabs-container",v)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(N,(0,n.Z)({},e,t)))}function T(e){var t=(0,y.Z)();return l.createElement(f,(0,n.Z)({key:String(t)},e))}},3127:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var n=a(7462),l=a(3366),u=(a(7294),a(3905)),p=a(4866),r=a(5162),s=["components"],i={title:"List, tuple, and dictionary",sidebar_label:"List, tuple, dictionary"},o=void 0,m={unversionedId:"basics/list-tuple-dict",id:"basics/list-tuple-dict",title:"List, tuple, and dictionary",description:"List",source:"@site/docs/basics/list-tuple-dict.mdx",sourceDirName:"basics",slug:"/basics/list-tuple-dict",permalink:"/python-tutorial/basics/list-tuple-dict",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/list-tuple-dict.mdx",tags:[],version:"current",frontMatter:{title:"List, tuple, and dictionary",sidebar_label:"List, tuple, dictionary"},sidebar:"docs",previous:{title:"Get started",permalink:"/python-tutorial/basics/gs"},next:{title:"Flow control",permalink:"/python-tutorial/basics/flow-control"}},c={},d=[{value:"List",id:"list",level:3},{value:"Tuples",id:"tuples",level:3},{value:"Dictionary",id:"dictionary",level:3},{value:"Sets",id:"sets",level:3}],k={toc:d};function h(e){var t=e.components,a=(0,l.Z)(e,s);return(0,u.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h3",{id:"list"},"List"),(0,u.kt)("p",null,"It is a good idea to name lists as plural as they contain multiple elements. Like, ",(0,u.kt)("inlineCode",{parentName:"p"},"names"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"items")," etc."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names = ['Rupal', 'Pranab', 'Bhanu']\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Rupal', 'Pranab', 'Bhanu']\n")))),(0,u.kt)("p",null,"Lists are mutable, we can change its contents:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names[2] = 'Nihit'\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Rupal', 'Pranab', 'Nihit']\n")))),(0,u.kt)("p",null,"Adding new items to the list"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names.append('Bhanu')\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Rupal', 'Pranab', 'Nihit', 'Bhanu']\n")))),(0,u.kt)("p",null,"Inserting item in a specific place."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names.insert(2, 'Nitin')\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Rupal', 'Pranab', 'Nitin', 'Nihit', 'Bhanu']\n")))),(0,u.kt)("p",null,"Deleting items from list."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"del names[1]\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Rupal', 'Nitin', 'Nihit', 'Bhanu']\n")))),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"pop")," method of removing. ",(0,u.kt)("inlineCode",{parentName:"p"},"pop")," let you use the removed item."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"removed_name = names.pop()  # catch the removed item\nprint(names)\nprint(removed_name)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Rupal', 'Nitin', 'Nihit']\nBhanu\n")))),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"pop")," can remove actually any item."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names.pop(1)\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"'Nitin'\n['Rupal', 'Nihit']\n")))),(0,u.kt)("p",null,"Remove an item by its value."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names.remove('Rupal')\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Nihit']\n")))),(0,u.kt)("admonition",{type:"note"},(0,u.kt)("p",{parentName:"admonition"},"If there are more than one item with same value, the ",(0,u.kt)("inlineCode",{parentName:"p"},".remove")," method removes\nonly the first occurrence.")),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names.append('Rupal')\nnames.append('Nitin')\nnames.append('Nihit')\nnames.append('Bhanu')\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Nihit', 'Rupal', 'Nitin', 'Nihit', 'Bhanu']\n")))),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names.remove('Nihit')\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Rupal', 'Nitin', 'Nihit', 'Bhanu']\n")))),(0,u.kt)("p",null,"Sort lists using ",(0,u.kt)("inlineCode",{parentName:"p"},"sorted")," function (it does not change the original list)."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"print(sorted(names))\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Bhanu', 'Nihit', 'Nitin', 'Rupal']\n")))),(0,u.kt)("p",null,"Sort lists permanently by using ",(0,u.kt)("inlineCode",{parentName:"p"},"sort")," method."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names.sort()\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Bhanu', 'Nihit', 'Nitin', 'Rupal']\n")))),(0,u.kt)("p",null,"Reverse list times using ",(0,u.kt)("inlineCode",{parentName:"p"},".reverse")," method"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names.reverse()\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Rupal', 'Nitin', 'Nihit', 'Bhanu']\n")))),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"names[2] = 'nihit'\nnames.sort()\nprint(names)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"['Bhanu', 'Nitin', 'Rupal', 'nihit']\n")))),(0,u.kt)("admonition",{type:"caution"},(0,u.kt)("p",{parentName:"admonition"},'Beware of mixing uppercase and lowercase letters. The methods may not work as\nyou might expect as shown above. While comparing strings, the ASCII values of\nthe corresponding characters are compared. For example, ASCII code of uppercase\n"A" is 65 while the lowercase "a" is 97.')),(0,u.kt)("p",null,"Looping through items of a list:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"for name in names:\n    print(name)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Nitin\nRupal\nnihit\n")))),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"Lists in python being mutable objects, when we set a list variable to another\nnew variable, a new list is not created rather the new variable point to the\nsame list."),(0,u.kt)("pre",{parentName:"admonition"},(0,u.kt)("code",{parentName:"pre",className:"language-python"},"a = [ 2, 3, 4]\nb = a\nb[2] = 10\nprint(a)  # [2, 3, 10] printed\n")),(0,u.kt)("p",{parentName:"admonition"},"If we need to clone the list to a new variable, we can use ",(0,u.kt)("inlineCode",{parentName:"p"},"b = a.copy()"),"\ninstead. Alternatively, we can instantiate a new list form the old list\n",(0,u.kt)("inlineCode",{parentName:"p"},"b = list(a)"),"."),(0,u.kt)("p",{parentName:"admonition"},"Be also careful when passing a list as argument to a function. It will modify\nthe existing list, rather than working in a copy to the list."),(0,u.kt)("pre",{parentName:"admonition"},(0,u.kt)("code",{parentName:"pre",className:"language-python"},"list = [2, 3, 4]\n\ndef factor(list, factor):\n    for i in range(len(list)):\n        list[i] *= factor\n    # return list # if we return list here, it will point to the same `list` in\n                  # in the main function\n\nfactor(list, 2) # we passed `list` to a function which does not return anything\nprint(list) # [4, 6, 8]\n"))),(0,u.kt)("p",null,"Use ",(0,u.kt)("inlineCode",{parentName:"p"},"range")," function to create numerical lists."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"nums = list(range(1, 11))\nprint(nums)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n")))),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"squares = []\nfor num in nums:\n   squares.append(num**2)\n\nfor ii in range(len(nums)):\n   print(nums[ii], '\\t', squares[ii])\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"nums     squares\n1    1\n2    4\n3    9\n4    16\n5    25\n6    36\n7    49\n8    64\n9    81\n10   100\n")))),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"even_numbers = list(range(2, 11, 2))\nprint(even_numbers)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"[2, 4, 6, 8, 10]\n")))),(0,u.kt)("p",null,"List comprehensions:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"squares = [value**2 for value in range(1, 11)]\nprint(squares)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n")))),(0,u.kt)("admonition",{type:"note"},(0,u.kt)("p",{parentName:"admonition"},"Python lists are dynamic arrays. When a list of length ",(0,u.kt)("inlineCode",{parentName:"p"},"n")," is created, the\nmemory allocator allocates more than ",(0,u.kt)("inlineCode",{parentName:"p"},"n")," contiguous locations for the list.\nThere are some advantages doing this, such as, no need to create new list\nallocation and copy items when adding new items (expanding the list size) to the\nend. Also inserting in the middle just  requires shifting. With static array,\nwhenever size increases, we need reallocation. However, we do not know how large\nthe array will grow, and the extra space allocated during the creation might not\nbe enough, in that case we need reallocation (again keeping some extra room).\nOne drawback is that Python might allocate more memory than we actually need.")),(0,u.kt)("h3",{id:"tuples"},"Tuples"),(0,u.kt)("p",null,"Tuples are just like ",(0,u.kt)("em",{parentName:"p"},"lists")," except that they are immutable. However, we can\nupdate the whole tuple instead of individual entries. Here we use parenthesis\ninstead of square bracket to define tuples."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"tup = (1, 2, 3)\ntup[0]\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"1\n")))),(0,u.kt)("p",null,"Reassigning values would result in errors"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"tup[1] = 4 # would result in error\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"TypeError: 'tuple' object does not support item assignment\n")))),(0,u.kt)("p",null,"But we can reassign the whole tuple:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"tup = (2, 3, 4, 5)\nprint(tup)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"(2, 3, 4, 5)\n")))),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"A single element tuple is declared by ",(0,u.kt)("inlineCode",{parentName:"p"},"tup = (4,)"),". The reason for this\nrequirement is that without the trailing comma, the expression ",(0,u.kt)("inlineCode",{parentName:"p"},"(4)")," is\ninterpreted as a simple parenthesized numeric expression.")),(0,u.kt)("h3",{id:"dictionary"},"Dictionary"),(0,u.kt)("p",null,"Python dictionary are list of key value pairs."),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"my_dict = {'Pranab' : 185, 'Sasha' : 196};\nprint(my_dict)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"{'Pranab': 185, 'Sasha': 196}\n")))),(0,u.kt)("p",null,"You can get values by using it's key:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"my_dict['Pranab']\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"185\n")))),(0,u.kt)("p",null,"Adding new items to the dictionary:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"my_dict['Luis'] = 190;\nprint(my_dict)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"{'Pranab': 185, 'Sasha': 196, 'Luis': 190}\n")))),(0,u.kt)("p",null,"Reassign values:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"my_dict['Luis'] = 191;\nprint(my_dict)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"{'Pranab': 185, 'Sasha': 196, 'Luis': 191}\n")))),(0,u.kt)("p",null,"Delete an entry:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"del my_dict['Luis'];\nprint(my_dict)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"{'Pranab': 185, 'Sasha': 196}\n")))),(0,u.kt)("p",null,"Looping through keys and values in a dictionary:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"print('Name\\t Height');\nfor key, value in my_dict.items():\n   print(key, '\\t', value);\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Name     Height\nPranab   185\nSasha    196\n")))),(0,u.kt)("p",null,"Looping through keys:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"for key in my_dict.keys():\n    print(key, my_dict[key])\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Pranab 185\nSasha 196\n")))),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"if 'Pranab' in my_dict.keys():\n   print('Hello Pranab, your height is :', my_dict['Pranab'])\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Hello Pranab, your height is : 185\n")))),(0,u.kt)("p",null,"Similarly we can loop through values also:"),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"my_dict.values()\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"dict_values([185, 196])\n")))),(0,u.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"for value in my_dict.values():\n    print(value)\n"))),(0,u.kt)(r.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"185\n196\n")))),(0,u.kt)("h3",{id:"sets"},"Sets"),(0,u.kt)("p",null,"Sets are hash lists. To lookup a member in a hash list has ",(0,u.kt)("span",{parentName:"p",className:"math math-inline"},(0,u.kt)("span",{parentName:"span",className:"katex"},(0,u.kt)("span",{parentName:"span",className:"katex-mathml"},(0,u.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,u.kt)("semantics",{parentName:"math"},(0,u.kt)("mrow",{parentName:"semantics"},(0,u.kt)("mi",{parentName:"mrow"},"O"),(0,u.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,u.kt)("mn",{parentName:"mrow"},"1"),(0,u.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,u.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,u.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,u.kt)("span",{parentName:"span",className:"base"},(0,u.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,u.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,u.kt)("span",{parentName:"span",className:"mopen"},"("),(0,u.kt)("span",{parentName:"span",className:"mord"},"1"),(0,u.kt)("span",{parentName:"span",className:"mclose"},")")))))," complexity,\nwhereas lookups in a python list has ",(0,u.kt)("span",{parentName:"p",className:"math math-inline"},(0,u.kt)("span",{parentName:"span",className:"katex"},(0,u.kt)("span",{parentName:"span",className:"katex-mathml"},(0,u.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,u.kt)("semantics",{parentName:"math"},(0,u.kt)("mrow",{parentName:"semantics"},(0,u.kt)("mi",{parentName:"mrow"},"O"),(0,u.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,u.kt)("mi",{parentName:"mrow"},"n"),(0,u.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,u.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,u.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,u.kt)("span",{parentName:"span",className:"base"},(0,u.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,u.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,u.kt)("span",{parentName:"span",className:"mopen"},"("),(0,u.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,u.kt)("span",{parentName:"span",className:"mclose"},")")))))," (n is the length of list)."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"s = set()\ns.add(2)\ns.add(4)\ns.add(4)  # set cannot have duplicate items\nprint(s)  # {2, 4} printed\ns.remove(2) # s.discard(2), if element is absent remove method will raise error\n4 in s  # True\n")),(0,u.kt)("p",null,"Set can also be initialized by following way:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"s = set({2, 4})\n\nlist = (3, 4, 5)\ns2 = set(list)\n\narr = [5, 6]\ns3 = set(arr)\n")),(0,u.kt)("p",null,"Size of set:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"len(s) # 2\n")),(0,u.kt)("p",null,"Union:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"s4 = s | s2 # {2, 3, 4, 5}\n\n# or\ns4 = s.union(s2)\n")),(0,u.kt)("p",null,"Intersection:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"s5 = s & s2 # {3}\n")),(0,u.kt)("p",null,"Difference:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"s5 = s.difference(s2) # {2}\n\n# or\ns5 = s - s2\n")),(0,u.kt)("p",null,"More methods:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"s.isdisjoint(s2)\ns.issubset(s2)\ns.issuperset(s2)\n")),(0,u.kt)("p",null,"We can create immutable set by:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"sf = frozenset({2, 3, 4})\n")))}h.isMDXComponent=!0}}]);