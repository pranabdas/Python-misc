"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[1336],{2692:(t,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var e=o(4848),r=o(8453);const a={title:"Histogram"},i=void 0,s={id:"matplotlib/histogram",title:"Histogram",description:"histogram-plot",source:"@site/docs/matplotlib/histogram.md",sourceDirName:"matplotlib",slug:"/matplotlib/histogram",permalink:"/python-tutorial/matplotlib/histogram",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/histogram.md",tags:[],version:"current",frontMatter:{title:"Histogram"},sidebar:"docs",previous:{title:"Two y-axes",permalink:"/python-tutorial/matplotlib/two-y-axes"},next:{title:"Contour plot",permalink:"/python-tutorial/matplotlib/contour-plot"}},l={},p=[];function m(t){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\n# generate 1000 random numbers from normal distribution\ndata = np.random.randn(1000)\n\nplt.hist(data, 20)  # number of bins = 20\nplt.xlabel(\'x\')\nplt.ylabel(\'freq\')\nplt.show()\n'})}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"histogram-plot",src:o(8523).A+"",width:"810",height:"548"})})]})}function c(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(m,{...t})}):m(t)}},8523:(t,n,o)=>{o.d(n,{A:()=>e});const e=o.p+"assets/images/histogram-9510c78b8e12f16a4c3770c827ae2c67.png"},8453:(t,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var e=o(6540);const r={},a=e.createContext(r);function i(t){const n=e.useContext(a);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),e.createElement(a.Provider,{value:n},t.children)}}}]);