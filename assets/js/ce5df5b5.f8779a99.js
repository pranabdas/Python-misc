"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[8556],{9719:(t,o,a)=>{a.r(o),a.d(o,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(4848),e=a(8453);const r={title:"Creating custom colormaps",sidebar_label:"Custom colormap"},p=void 0,s={id:"matplotlib/custom-colormap",title:"Creating custom colormaps",description:"Matplotlib includes wonderful colormaps. Moreover, it is possible to create any",source:"@site/docs/matplotlib/custom-colormap.md",sourceDirName:"matplotlib",slug:"/matplotlib/custom-colormap",permalink:"/python-tutorial/matplotlib/custom-colormap",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/custom-colormap.md",tags:[],version:"current",frontMatter:{title:"Creating custom colormaps",sidebar_label:"Custom colormap"},sidebar:"docs",previous:{title:"Customizing matplotlib",permalink:"/python-tutorial/matplotlib/mpl-customizations"},next:{title:"numpy",permalink:"/python-tutorial/category/numpy"}},i={},c=[];function l(t){const o={code:"code",p:"p",pre:"pre",...(0,e.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["Matplotlib includes wonderful colormaps. Moreover, it is possible to create any\ncustom colormap we want. We need the RGB values in a file. We could also include\nalpha (transparency) values in 4",(0,n.jsx)("sup",{children:"th"})," column."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",metastring:"showLineNumbers",children:'import matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\nimport sys\nsys.path.append("/root/")\n# https://github.com/pranabdas/arpespythontools\nimport arpespythontools as arp\n\ndef create_cmap(data_path):\n    import numpy as np\n    from matplotlib.colors import ListedColormap\n    contents = open(data_path, "r").readlines()\n    cmap_length = len(contents)\n    cmap = np.ndarray((cmap_length, 4))\n\n    for ii in range(cmap_length):\n        cmap_row = contents[ii][:-1].split(\'\\t\')\n        cmap[ii, 0] = cmap_row[0]\n        cmap[ii, 1] = cmap_row[1]\n        cmap[ii, 2] = cmap_row[2]\n        cmap[ii, 3] = 1  # Default alpha\n    cmap = ListedColormap(cmap)\n    return cmap\n\nmy_cmap = create_cmap("../datafiles/cmap_blue_hot.dat")\n[data, x, y] = arp.import_itx(\'../datafiles/GX.itx\')\n\nplt.imshow(data, aspect=\'auto\', origin="lower", interpolation=\'none\', \\\n    filterrad=4.0, cmap=my_cmap, vmin=0, vmax=600)\n# plt.set_cmap(\'gist_heat_r\')\nplt.show()\n'})}),"\n",(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{type:"image/webp",srcSet:a(9006).A}),(0,n.jsx)("img",{src:a(733).A,alt:"custom-colormap"})]})]})}function m(t={}){const{wrapper:o}={...(0,e.R)(),...t.components};return o?(0,n.jsx)(o,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},733:(t,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/custom-colormap-77caf1555b6db20ebc2f64eadb8a4681.png"},9006:(t,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/custom-colormap-ba5a3f81025d107253a6d64c71db1d81.webp"},8453:(t,o,a)=>{a.d(o,{R:()=>p,x:()=>s});var n=a(6540);const e={},r=n.createContext(e);function p(t){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(o):{...o,...t}}),[o,t])}function s(t){let o;return o=t.disableParentContext?"function"==typeof t.components?t.components(e):t.components||e:p(t.components),n.createElement(r.Provider,{value:o},t.children)}}}]);