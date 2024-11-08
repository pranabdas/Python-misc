"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[7841],{5243:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"django/webapp","title":"Building webapp using Django framework","description":"Django is a python web framework that helps you build rich interactive web apps.","source":"@site/docs/django/webapp.md","sourceDirName":"django","slug":"/django/webapp","permalink":"/python-tutorial/django/webapp","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/django/webapp.md","tags":[],"version":"current","frontMatter":{"title":"Building webapp using Django framework","sidebar_label":"Django"},"sidebar":"docs","previous":{"title":"Webapps","permalink":"/python-tutorial/category/webapps"},"next":{"title":"Today app","permalink":"/python-tutorial/django/today-app"}}');var o=a(4848),r=a(8453);const l={title:"Building webapp using Django framework",sidebar_label:"Django"},s=void 0,i={},d=[];function c(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Django is a python web framework that helps you build rich interactive web apps.\nMozilla, Dropbox, Wikipedia, Spotify are some of the websites built using Django\nframework. First of make sure you have ",(0,o.jsx)(n.code,{children:"virtualenv"})," installed, it helps keep\nyour project dependencies separate. Create a new project directory, and activate\n",(0,o.jsx)(n.code,{children:"virtualenv"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mkdir django-project\ncd django-project\nvirtualenv venv\nsource venv/bin/activate\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now we should be in virtual environment, you should see ",(0,o.jsx)(n.code,{children:"venv>"})," prompt in the\nTerminal. You can exit virtualenv by entering ",(0,o.jsx)(n.code,{children:"deactivate"}),". Let's install\n",(0,o.jsx)(n.code,{children:"django"})," under the venv."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip3 install django\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once Django is installed, we can create our django project, let's call it\nmyWebApp."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"django-admin startproject myWebApp .\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note the ",(0,o.jsx)(n.code,{children:"."})," in the end, which creates the project in our current directory,\notherwise it will create another extra top level folder. You have to be mindful\nof your directory structure when you deploy it in a server."]}),"\n",(0,o.jsx)(n.p,{children:"Django projects are collection of apps. Say, we want to create an app called\nhello, which says hello when visited /hello url. We can create our hello app by:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"django-admin startapp hello\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We have to tell our Django project that we have a new app. Open\n",(0,o.jsx)(n.code,{children:"myWebApp/settings.py"})," and add hello to the ",(0,o.jsx)(n.code,{children:"INSTALLED_APPS"})," list. You will see\na number of default apps already registered there."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n\n    # my apps\n    'hello',\n]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Create urls. It's like a table of content. We want to keep the urls of each app\nseparated. Create ",(0,o.jsx)(n.code,{children:"hello/urls.py"})," and include:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('', views.hello, name='hello'),\n]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now we have to add the hello app urls in our main project. Open\n",(0,o.jsx)(n.code,{children:"myWebApp/urls.py"})," and add the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('hello/', include('hello.urls'))\n]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Next step is to create views. Go to ",(0,o.jsx)(n.code,{children:"hello/views.py"})," and add following function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from django.shortcuts import render\n\ndef hello(request):\n    """hello page"""\n    return render(request, \'hello/index.html\')\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Final step is to create the index.html. We create\n",(0,o.jsx)(n.code,{children:"hello/templates/hello/index.html"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Hello django</title>\n  </head>\n  <body>\n    <h1>Hello Django!</h1>\n  </body>\n</html>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we can run our django server :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"python3 manage.py runserver\n"})}),"\n",(0,o.jsxs)(n.p,{children:["and visit ",(0,o.jsx)(n.a,{href:"localhost:8000/hello",children:"localhost:8000/hello"})," in our browser. This is\nour simplest hello app. Now let's say we want to greet a specific user by\nhis/her name. We could create individual user pages, or we can take the url\nargument and generate a page based on that argument. We write the following view\nfunction (",(0,o.jsx)(n.code,{children:"hello/views.py"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def greet(request, name):\n    """greet anyone"""\n    return render(request, \'hello/greet.html\', {\n        "name": name.capitalize()\n        })\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"hello/templates/hello/greet.html"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Welcome</title>\n  </head>\n  <body>\n    <h1>Hello {{ name }}!</h1>\n  </body>\n</html>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(n.code,{children:"hello/urls.py"})," and include:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"path('/<str:name>', views.greet, name='greet'),\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now we can ",(0,o.jsx)(n.code,{children:"python3 manage.py runserver"})," and visit an arbitrary url\n",(0,o.jsx)(n.code,{children:"localhost:8000/hello/albert"})]}),"\n",(0,o.jsxs)(n.p,{children:["Learn more: ",(0,o.jsx)(n.a,{href:"https://docs.djangoproject.com/",children:"https://docs.djangoproject.com/"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var t=a(6540);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);