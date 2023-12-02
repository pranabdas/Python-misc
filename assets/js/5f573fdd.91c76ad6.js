"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[4949],{6224:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var l=a(5893),u=a(1151),t=a(4866),r=a(5162);const s={title:"Numerical operations using numpy",sidebar_label:"numpy basics"},i=void 0,c={id:"numpy/numpy-basics",title:"Numerical operations using numpy",description:"Creating numpy array:",source:"@site/docs/numpy/numpy-basics.mdx",sourceDirName:"numpy",slug:"/numpy/numpy-basics",permalink:"/python-tutorial/numpy/numpy-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/numpy/numpy-basics.mdx",tags:[],version:"current",frontMatter:{title:"Numerical operations using numpy",sidebar_label:"numpy basics"},sidebar:"docs",previous:{title:"numpy",permalink:"/python-tutorial/category/numpy"},next:{title:"Linear algebra",permalink:"/python-tutorial/numpy/linear-algebra"}},p={},d=[];function o(e){const n={code:"code",p:"p",pre:"pre",...(0,u.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Creating ",(0,l.jsx)(n.code,{children:"numpy"})," array:"]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"import numpy as np\nmy_array = np.array([1, 3, 4])\nprint(my_array)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[1 3 4]\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"type(my_array)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"numpy.ndarray\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Create a two-dimensional array/matrix:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array2 = np.array([[1, 2, 4], [3, 1, 5]])\nprint(my_array2)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[[1 2 4]\n [3 1 5]]\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Check dimension of an array:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array2.ndim\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"2\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array2.shape\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"(2, 3)\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array2.size\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"6\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array2.dtype\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"dtype('int64')\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"We can specify the dtype explicitly if you need to."}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array3 = np.array([[1, 4, 7], [1, 9, 32]], dtype=np.float64)\nmy_array3.dtype\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"dtype('float64')\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"We can switch type of an existing array:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array3.astype(np.int64)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[ 1,  4,  7],\n       [ 1,  9, 32]])\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Alternative way:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array3 = np.array(my_array3, dtype=np.float64)\nprint(my_array3)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[[ 1.  4.  7.]\n [ 1.  9. 32.]]\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Creating zero matrices:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_zero_array = np.zeros((2, 3))\nprint(my_zero_array)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[[0. 0. 0.]\n [0. 0. 0.]]\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Matrix of ones:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_ones_array = np.ones((2, 3))\nprint(my_ones_array)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[[1. 1. 1.]\n [1. 1. 1.]]\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"If we need to fill the matrix with some other constant, we can first create\nones_matrix and multiply. However there is another function to do the same."}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_const_array = np.full([2, 3], 5)\nprint(my_const_array)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[[5 5 5]\n [5 5 5]]\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Create arrays with incremental sequences:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array4 = np.arange(1, 10, 2)\nprint(my_array4)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[1 3 5 7 9]\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array5 = np.linspace(1, 10, 10)\nprint(my_array5)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[ 1.  2.  3.  4.  5.  6.  7.  8.  9. 10.]\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Create meshgrid:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"x = np.array([-1, 0, 1])\ny = np.array([-2, 0, 2])\n\nX, Y = np.meshgrid(x, y)\nprint(X, '\\n\\n', Y)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[[-1  0  1]\n [-1  0  1]\n [-1  0  1]]\n\n [[-2 -2 -2]\n [ 0  0  0]\n [ 2  2  2]]\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Other useful matrices:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"np.identity(4)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[1., 0., 0., 0.],\n       [0., 1., 0., 0.],\n       [0., 0., 1., 0.],\n       [0., 0., 0., 1.]])\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"np.eye(4)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[1., 0., 0., 0.],\n       [0., 1., 0., 0.],\n       [0., 0., 1., 0.],\n       [0., 0., 0., 1.]])\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"np.eye(4, k=1)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[0., 1., 0., 0.],\n       [0., 0., 1., 0.],\n       [0., 0., 0., 1.],\n       [0., 0., 0., 0.]])\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"np.eye(4, k=-1)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[0., 0., 0., 0.],\n       [1., 0., 0., 0.],\n       [0., 1., 0., 0.],\n       [0., 0., 1., 0.]])\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"np.diag(np.arange(0, 20, 5))\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[ 0,  0,  0,  0],\n       [ 0,  5,  0,  0],\n       [ 0,  0, 10,  0],\n       [ 0,  0,  0, 15]])\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Create random matrix:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"np.random.rand(3)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([0.49067738, 0.79451961, 0.87339187])\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"np.random.rand(2, 3)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[0.858099  , 0.86235168, 0.48305685],\n       [0.23118357, 0.87312982, 0.1940535 ]])\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Normally distributed random numbers:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array_10 = np.random.randn(5); my_array_10\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([ 0.55956033, -0.37623696,  1.78995147,  0.05591339, -0.43796257])\n"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["Expand matrix with ",(0,l.jsx)(n.code,{children:"numpy.tile()"}),":"]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array_11 = np.array([[1, 3], [2, 5]]); my_array_11\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[1, 3],\n       [2, 5]])\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array_12 = np.tile(my_array_11, 2); my_array_12\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[1, 3, 1, 3],\n       [2, 5, 2, 5]])\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array_12 = np.tile(my_array_11, (3, 2)); my_array_12\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([[1, 3, 1, 3],\n       [2, 5, 2, 5],\n       [1, 3, 1, 3],\n       [2, 5, 2, 5],\n       [1, 3, 1, 3],\n       [2, 5, 2, 5]])\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Indexing and slicing matrix:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array = np.arange(5); my_array\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([0, 1, 2, 3, 4])\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"print(my_array[0], my_array[-1])\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"0 4\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Reversing an array:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array[::-1]\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([4, 3, 2, 1, 0])\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Indexing in higher dimensional array:"}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array = np.array([[1, 3, 2], [1, 4, 2], [5, 3, 1]]); print(my_array)\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[[1 3 2]\n [1 4 2]\n [5 3 1]]\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array[2, 1]\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"3\n"})})})]}),"\n",(0,l.jsxs)(t.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(r.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"my_array[2, :]\n"})})}),(0,l.jsx)(r.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"array([5, 3, 1])\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Masking/substituting array values based on criteria:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"import numpy as np\n\na = np.random.rand(10)\nprint(a)\n\n# sample output\n[0.80182435 0.94238444 0.42435805 0.03047743 0.20772764 0.63607548\n 0.17445815 0.32827581 0.5017025  0.33546651]\n\nb = np.array(a)  # make a deep copy\nb[a>0.5] = 1\nb[a<=0.5] = 0\n\nprint(b)\n\n# output\n[1. 1. 0. 0. 0. 1. 0. 0. 1. 0.]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>r});a(7294);var l=a(6905);const u={tabItem:"tabItem_Ymn6"};var t=a(5893);function r(e){let{children:n,hidden:a,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.Z)(u.tabItem,r),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>Z});var l=a(7294),u=a(6905),t=a(2466),r=a(6550),s=a(469),i=a(1980),c=a(7392),p=a(12);function d(e){var n,a;return null!=(n=null==(a=l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function o(e){const{values:n,children:a}=e;return(0,l.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:l,default:u}}=e;return{value:n,label:a,attributes:l,default:u}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:a}=e;const u=(0,r.k6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,i._X)(t),(0,l.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(u.location.search);n.set(t,e),u.replace({...u.location,search:n.toString()})}),[t,u])]}function y(e){const{defaultValue:n,queryString:a=!1,groupId:u}=e,t=o(e),[r,i]=(0,l.useState)((()=>function(e){var n;let{defaultValue:a,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+l.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const u=null!=(n=l.find((e=>e.default)))?n:l[0];if(!u)throw new Error("Unexpected error: 0 tabValues");return u.value}({defaultValue:n,tabValues:t}))),[c,d]=x({queryString:a,groupId:u}),[y,j]=function(e){let{groupId:n}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(n),[u,t]=(0,p.Nk)(a);return[u,(0,l.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:u}),m=(()=>{const e=null!=c?c:y;return h({value:e,tabValues:t})?e:null})();(0,s.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),j(e)}),[d,j,t]),tabValues:t}}var j=a(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(5893);function g(e){let{className:n,block:a,selectedValue:l,selectValue:r,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),p=e=>{const n=e.currentTarget,a=i.indexOf(n),u=s[a].value;u!==l&&(c(n),r(u))},d=e=>{var n;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var l;const n=i.indexOf(e.currentTarget)+1;a=null!=(l=i[n])?l:i[0];break}case"ArrowLeft":{var u;const n=i.indexOf(e.currentTarget)-1;a=null!=(u=i[n])?u:i[i.length-1];break}}null==(n=a)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>i.push(e),onKeyDown:d,onClick:p,...t,className:(0,u.Z)("tabs__item",m.tabItem,null==t?void 0:t.className,{"tabs__item--active":l===n}),children:null!=a?a:n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:u}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===u));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==u})))})}function f(e){const n=y(e);return(0,v.jsxs)("div",{className:(0,u.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(g,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function Z(e){const n=(0,j.Z)();return(0,v.jsx)(f,{...e,children:d(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>r});var l=a(7294);const u={},t=l.createContext(u);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(u):e.components||u:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);