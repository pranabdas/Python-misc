"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["6647"],{1572:function(t,e,n){n.r(e),n.d(e,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>r,toc:()=>p,frontMatter:()=>i});var a=JSON.parse('{"id":"matplotlib/two-y-axes","title":"Two dependent (y) axes using twinx","description":"Sometimes we need to plot two dependent variables that have very different","source":"@site/docs/matplotlib/two-y-axes.md","sourceDirName":"matplotlib","slug":"/matplotlib/two-y-axes","permalink":"/python-tutorial/matplotlib/two-y-axes","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/two-y-axes.md","tags":[],"version":"current","frontMatter":{"title":"Two dependent (y) axes using twinx","sidebar_label":"Two y-axes"},"sidebar":"docs","previous":{"title":"Subplot","permalink":"/python-tutorial/matplotlib/subplot"},"next":{"title":"Histogram","permalink":"/python-tutorial/matplotlib/histogram"}}'),o=n("5893"),s=n("65");let i={title:"Two dependent (y) axes using twinx",sidebar_label:"Two y-axes"},l=void 0,r={},p=[];function c(t){let e={code:"code",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Sometimes we need to plot two dependent variables that have very different\nscaling but they are the function of same independent variable. In such cases,\nwe can use two separate y-axes on both sides of the figure."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"import numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams[\"figure.dpi\"]=150\nplt.rcParams[\"figure.facecolor\"]=\"white\"\n\n# Create some mock data\nx = np.linspace(0, 10, 1000)\ny1 = np.exp(x)\ny2 = np.sin(np.pi*x) + np.sin(2*np.pi*x)\n\nfig, ax1 = plt.subplots()\n\nax1.set_xlabel('x')\nax1.set_ylabel('y1', color='tab:red')\nax1.plot(x, y1, color='tab:red')\nax1.tick_params(axis='y', labelcolor='tab:red')\n\nax2 = ax1.twinx()  # instantiate a second axes that shares the same x-axis\n\nax2.set_ylabel('y2', color='tab:blue')  # x-label is handled with ax1\nax2.plot(x, y2, color='tab:blue')\nax2.tick_params(axis='y', labelcolor='tab:blue')\n\nfig.tight_layout()  # otherwise the right y-label is slightly clipped\nplt.show()\n"})}),"\n",(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{type:"image/webp",srcSet:n(7352).Z}),(0,o.jsx)("img",{src:n(6671).Z,alt:"two-y-axes"})]})]})}function u(t={}){let{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(c,{...t})}):c(t)}},6671:function(t,e,n){n.d(e,{Z:function(){return a}});let a=n.p+"assets/images/two-y-axes-e8f4b9134c5401213a952fa3627cbdba.png"},7352:function(t,e,n){n.d(e,{Z:function(){return a}});let a=n.p+"assets/images/two-y-axes-7b4186d0d6c83bab557fd77b4c9e6775.webp"},65:function(t,e,n){n.d(e,{Z:function(){return l},a:function(){return i}});var a=n(7294);let o={},s=a.createContext(o);function i(t){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),a.createElement(s.Provider,{value:e},t.children)}}}]);