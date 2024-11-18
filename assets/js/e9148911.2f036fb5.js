"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["1497"],{1102:function(t,e,n){n.r(e),n.d(e,{metadata:()=>l,contentTitle:()=>s,default:()=>c,assets:()=>a,toc:()=>r,frontMatter:()=>o});var l=JSON.parse('{"id":"matplotlib/subplot","title":"Subplot with multiple panels","description":"The following way we can incorporate multiple panels in a figure:","source":"@site/docs/matplotlib/subplot.md","sourceDirName":"matplotlib","slug":"/matplotlib/subplot","permalink":"/python-tutorial/matplotlib/subplot","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/subplot.md","tags":[],"version":"current","frontMatter":{"title":"Subplot with multiple panels","sidebar_label":"Subplot"},"sidebar":"docs","previous":{"title":"Basic plotting","permalink":"/python-tutorial/matplotlib/basic-plotting"},"next":{"title":"Two y-axes","permalink":"/python-tutorial/matplotlib/two-y-axes"}}'),i=n("5893"),p=n("65");let o={title:"Subplot with multiple panels",sidebar_label:"Subplot"},s=void 0,a={},r=[];function u(t){let e={code:"code",p:"p",pre:"pre",...(0,p.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"The following way we can incorporate multiple panels in a figure:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:'import matplotlib.pyplot as plt\nimport numpy as np\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\nx = np.linspace(-2*np.pi, 2*np.pi, 100)\ny1 = np.sin(x)\ny2 = (np.sin(x)/x)**2\ny3 = np.tan(x)\ny4 = np.exp(x)\n\nfig = plt.figure(figsize = (10, 8))\nplt.rcParams["axes.labelsize"] = 14\nplt.rcParams["axes.titlesize"] = 14\nplt.rcParams["xtick.labelsize"] = 14\nplt.rcParams["ytick.labelsize"] = 14\nplt.rcParams["legend.fontsize"] = 10\nplt.rcParams["xtick.major.size"] = 4\nplt.rcParams["ytick.major.size"] = 4\n\nplt.subplot(221)  # plt.subplot(no_rows, no_cols, index)\nplt.plot(x, y1)\nplt.title(\'221\')\n\nplt.subplot(222)\nplt.plot(x, y2)\nplt.title(\'222\')\n\nplt.subplot(223)\nplt.plot(x, y3)\nplt.title(\'223\')\n\nplt.subplot(224)\nplt.plot(x, y4)\nplt.title(\'224\')\n\nplt.tight_layout()\nplt.subplots_adjust(wspace = 0.25, hspace = 0.25)\nfig.text(0.01, 1, "A", fontsize=16, weight=\'bold\')\nfig.text(0.51, 1, "B", fontsize=16, weight=\'bold\')\nfig.text(0.01, 0.5, "C", fontsize=16, weight=\'bold\')\nfig.text(0.51, 0.5, "D", fontsize=16, weight=\'bold\')\n# plt.savefig(\'layout1.pdf\')\nplt.show()\n'})}),"\n",(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{type:"image/webp",srcSet:n(9491).Z}),(0,i.jsx)("img",{src:n(1611).Z,alt:"subplot"})]})]})}function c(t={}){let{wrapper:e}={...(0,p.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},1611:function(t,e,n){n.d(e,{Z:function(){return l}});let l=n.p+"assets/images/subplot-3e912cf5e5223c96de54422493c01234.png"},9491:function(t,e,n){n.d(e,{Z:function(){return l}});let l=n.p+"assets/images/subplot-2f5438483e143400f43f5a1f2640e3c3.webp"},65:function(t,e,n){n.d(e,{Z:function(){return s},a:function(){return o}});var l=n(7294);let i={},p=l.createContext(i);function o(t){let e=l.useContext(p);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),l.createElement(p.Provider,{value:e},t.children)}}}]);