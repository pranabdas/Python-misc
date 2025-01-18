"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["9067"],{3828:function(t,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>l,metadata:()=>a,assets:()=>i,toc:()=>s,contentTitle:()=>p});var a=JSON.parse('{"id":"matplotlib/custom-colormap","title":"Creating custom colormaps","description":"Matplotlib includes wonderful colormaps. Moreover, it is possible to create any","source":"@site/docs/matplotlib/custom-colormap.md","sourceDirName":"matplotlib","slug":"/matplotlib/custom-colormap","permalink":"/python-tutorial/matplotlib/custom-colormap","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/custom-colormap.md","tags":[],"version":"current","frontMatter":{"title":"Creating custom colormaps","sidebar_label":"Custom colormap"},"sidebar":"docs","previous":{"title":"Customizing matplotlib","permalink":"/python-tutorial/matplotlib/mpl-customizations"},"next":{"title":"numpy","permalink":"/python-tutorial/category/numpy"}}'),e=n("5893"),r=n("65");let l={title:"Creating custom colormaps",sidebar_label:"Custom colormap"},p=void 0,i={},s=[];function c(t){let o={code:"code",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(o.p,{children:["Matplotlib includes wonderful colormaps. Moreover, it is possible to create any\ncustom colormap we want. We need the RGB values in a file. We could also include\nalpha (transparency) values in 4",(0,e.jsx)("sup",{children:"th"})," column."]}),"\n",(0,e.jsx)(o.pre,{children:(0,e.jsx)(o.code,{className:"language-python",metastring:"showLineNumbers",children:'import matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\nimport sys\nsys.path.append("/root/")\n# https://github.com/pranabdas/arpespythontools\nimport arpespythontools as arp\n\ndef create_cmap(data_path):\n    import numpy as np\n    from matplotlib.colors import ListedColormap\n    contents = open(data_path, "r").readlines()\n    cmap_length = len(contents)\n    cmap = np.ndarray((cmap_length, 4))\n\n    for ii in range(cmap_length):\n        cmap_row = contents[ii][:-1].split(\'\\t\')\n        cmap[ii, 0] = cmap_row[0]\n        cmap[ii, 1] = cmap_row[1]\n        cmap[ii, 2] = cmap_row[2]\n        cmap[ii, 3] = 1  # Default alpha\n    cmap = ListedColormap(cmap)\n    return cmap\n\nmy_cmap = create_cmap("../datafiles/cmap_blue_hot.dat")\n[data, x, y] = arp.import_itx(\'../datafiles/GX.itx\')\n\nplt.imshow(data, aspect=\'auto\', origin="lower", interpolation=\'none\', \\\n    filterrad=4.0, cmap=my_cmap, vmin=0, vmax=600)\n# plt.set_cmap(\'gist_heat_r\')\nplt.show()\n'})}),"\n",(0,e.jsx)("img",{src:n(994).Z,alt:"custom-colormap"})]})}function m(t={}){let{wrapper:o}={...(0,r.a)(),...t.components};return o?(0,e.jsx)(o,{...t,children:(0,e.jsx)(c,{...t})}):c(t)}},994:function(t,o,n){n.d(o,{Z:function(){return a}});let a=n.p+"assets/images/custom-colormap-ba5a3f81025d107253a6d64c71db1d81.webp"},65:function(t,o,n){n.d(o,{Z:function(){return p},a:function(){return l}});var a=n(7294);let e={},r=a.createContext(e);function l(t){let o=a.useContext(r);return a.useMemo(function(){return"function"==typeof t?t(o):{...o,...t}},[o,t])}function p(t){let o;return o=t.disableParentContext?"function"==typeof t.components?t.components(e):t.components||e:l(t.components),a.createElement(r.Provider,{value:o},t.children)}}}]);