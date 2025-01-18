"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["9871"],{6665:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>a,assets:()=>s,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"django/learning-log","title":"Learning log","description":"Here we will see some more advanced features like admin account and databases.","source":"@site/docs/django/learning-log.md","sourceDirName":"django","slug":"/django/learning-log","permalink":"/python-tutorial/django/learning-log","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/django/learning-log.md","tags":[],"version":"current","frontMatter":{"title":"Learning log"},"sidebar":"docs","previous":{"title":"Airline app","permalink":"/python-tutorial/django/airline"},"next":{"title":"Miscellaneous","permalink":"/python-tutorial/misc"}}'),r=t("5893"),i=t("65");let o={title:"Learning log"},l=void 0,s={},d=[{value:"Creating models",id:"creating-models",level:3},{value:"Activating models",id:"activating-models",level:3},{value:"Create superuser",id:"create-superuser",level:3},{value:"Creating pages",id:"creating-pages",level:3},{value:"Creating templates",id:"creating-templates",level:3},{value:"Allow users to create entries",id:"allow-users-to-create-entries",level:3}];function c(e){let n={code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Here we will see some more advanced features like admin account and databases."}),"\n",(0,r.jsx)(n.p,{children:"Creating a Project in Django:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"django-admin.py startproject learning_log .\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Our project is called ",(0,r.jsx)(n.code,{children:"learning_log"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Creating a database for the project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 manage.py migrate\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now you will see a new file called ",(0,r.jsx)(n.code,{children:"db.sqlite3"})," in the directory."]}),"\n",(0,r.jsx)(n.p,{children:"Viewing the Project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 manage.py runserver\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can visit ",(0,r.jsx)(n.code,{children:"localhost:8000"})," in your browser, and you should see a default\ndjango webpage. Django project is consists of a set of individual apps. This\nmodular approach helps to organize complex apps. In order to start an app:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 manage.py startapp learning_log_app\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We call our app ",(0,r.jsx)(n.code,{children:"learning_log_app"}),". Check all the directory structure."]}),"\n",(0,r.jsx)(n.h3,{id:"creating-models",children:"Creating models"}),"\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsx)(n.code,{children:"learning_log_app/models.py"})," and define a model:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Topic(models.Model):\n    """A topic the user is learning"""\n    text = models.CharField(max_length=200)\n    date_added = models.DateTimeField(auto_now_add=True)\n\n    def __str__(self):\n        """Return a string representation of the model"""\n        return self.text\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We can build as many models we want. We can define it by our requirements. Here\nwe are defining our Topic model based on the Django in-built ",(0,r.jsx)(n.code,{children:"models.Model"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"activating-models",children:"Activating models"}),"\n",(0,r.jsxs)(n.p,{children:["Once we have defined a model in our app, we have to include in our global django\nsettings. Open ",(0,r.jsx)(n.code,{children:"learning_log/settings.py"})," add ",(0,r.jsx)(n.code,{children:"learning_log_app"})," app to the list\nof ",(0,r.jsx)(n.code,{children:"INSTALLED_APPS"})," list:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n\n    # My apps\n    'learning_log_app',\n]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Make the migration to take changes effect:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 manage.py makemigrations learning_log_app\npython3 manage.py migrate\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-superuser",children:"Create superuser"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 manage.py createsuperuser\n"})}),"\n",(0,r.jsx)(n.p,{children:"Provide username and password."}),"\n",(0,r.jsxs)(n.p,{children:["Registering a model with the admin site: Open ",(0,r.jsx)(n.code,{children:"learning_log_app/admin.py"})," and\nadd the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from learning_log_app.models import Topic\n\nadmin.site.register(Topic)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we can start the server ",(0,r.jsx)(n.code,{children:"python3 manage.py runserver"})," and login to\n",(0,r.jsx)(n.code,{children:"localhost:8000/admin"})," and create Topics."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's define another model for the Entry. Open ",(0,r.jsx)(n.code,{children:"learning_log_app/models.py"})," and\ndefine a model for ",(0,r.jsx)(n.em,{children:"Entry"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Entry(models.Model):\n    """Something specific learned about a topic"""\n    topic = models.ForeignKey(Topic, on_delete=models.DO_NOTHING,)\n    text = models.TextField()\n    date_added = models.DateTimeField(auto_now_add=True)\n\n    class Meta:\n        verbose_name_plural = \'entries\'\n    def __str__(self):\n        """Return a string representation of the model."""\n        return self.text[:50] + "..."\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Make changes to the ",(0,r.jsx)(n.code,{children:"learning_log_app/admin.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from django.contrib import admin\n\nfrom learning_log_app.models import Topic\nfrom learning_log_app.models import Entry\n\nadmin.site.register(Topic)\nadmin.site.register(Entry)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Make migrations:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"python3 manage.py makemigrations learning_log_app\npython3 manage.py migrate\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can start server and check out the new changes."}),"\n",(0,r.jsx)(n.h3,{id:"creating-pages",children:"Creating pages"}),"\n",(0,r.jsx)(n.p,{children:"Creating pages has three steps: (1) Mapping URL, (2) Writing views, (3) Writing\ntemplates."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Mapping URL:"})," You have tell Django, what to look for when a url is requested.\nOpen ",(0,r.jsx)(n.code,{children:"learning_log/urls.py"})," and include the following. You will see that the\n",(0,r.jsx)(n.code,{children:"admin/"})," path is already registered when we created the admin account. Now we\nare including our home page (base url) will look for the urls in the\nlearning_log_app app urls."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('', include('learning_log_app.urls'))\n]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create an urls.py in the directory learning_log_app and include the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'"""This file includes the urls of our learning_log_app """\n\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path(\'\', views.index, name=\'index\'),\n]\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Writing view:"})," A view function takes the request and prepares a webpage to\nrender. Open ",(0,r.jsx)(n.code,{children:"learning_log_app/views.py"})," and add the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'from django.shortcuts import render\n\ndef index(request):\n    """The home page for Learning Log"""\n    return render(request, \'learning_log_app/index.html\')\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Writing a template:"})," We will store the templates in the following directory:\n",(0,r.jsx)(n.code,{children:"learning_log_app/templates/learning_log_app"}),". Create an\n",(0,r.jsx)(n.code,{children:"learning_log_app/templates/learning_log_app/index.html"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Learning log homepage</title>\n    </head>\n    <body>\n        <h3>Welcome to learning Log</h3>\n        <p>Here you can keep track of the topics you are learning.</p>\n    </body>\n</html>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that in the above code block there is an extra space in ",(0,r.jsx)(n.code,{children:"head"})," tags, please\nremove the spaces in your actual code (my website search function has some\nissues with the ",(0,r.jsx)(n.code,{children:"head"})," tag, and I am using this workaround to counter the error\ncurrently). We can browse the homepage ",(0,r.jsx)(n.code,{children:"localhost:8000"})," and see the index page."]}),"\n",(0,r.jsx)(n.p,{children:"Now that we know how to build a basic page, we will follow the same process to\nbuild a page to list our topics and another to show the entries for each topic."}),"\n",(0,r.jsx)(n.h3,{id:"creating-templates",children:"Creating templates"}),"\n",(0,r.jsxs)(n.p,{children:["In almost all web project you will find, there are some contents that are shared\nby several other pages. Instead of hard coding those common elements, we can\nbuild templates. Let's create a template ",(0,r.jsx)(n.code,{children:"base.html"})," where we will include the\ntitle of the pages. Create a file\n",(0,r.jsx)(n.code,{children:"learning_log_app/templates/learning_log_app/base.html"})," and include our title\nhtml:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<html>\n        <head>\n                <title>Learning log</title>\n        </head>\n        <body>\n                <h3><a href=\"{% url 'index' %}\">Learning log</a></h3>\n                {% block content %}{% endblock content %}\n        </body>\n</html>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we will use this template to build other pages. Let's rewrite our\n",(0,r.jsx)(n.code,{children:"learning_log_app/templates/learning_log_app/index.html"})," using this template:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'{% extends "learning_log_app/base.html" %}\n\n{% block content %}\n<p>Learning Log helps you keep track of your learning, for any topic you\'re learning about.</p>\n{% endblock content %}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Let's create our Topics page. Register the url pattern in\n",(0,r.jsx)(n.code,{children:"learning_log_app/urls.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"urlpatterns = [\n    url('', views.index, name='index'),\n\n    # Show all topics\n    url('topics/', views.topics, name='topics'),\n]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Register the views in ",(0,r.jsx)(n.code,{children:"learning_log_app/view.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from learning_log_app.models import Topic\n\ndef topics(request):\n    \"\"\"Show all topics.\"\"\"\n    topics = Topic.objects.order_by('date_added')\n    context = {'topics': topics}\n    return render(request, 'learning_log_app/topics.html', context)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create ",(0,r.jsx)(n.code,{children:"learning_log_app/templates/learning_log_app/topics.html"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'{% extends "learning_log_app/base.html" %}\n\n{% block content %}\n<h3>List of topics</h3>\n<ul>\n    {% for topic in topics %}\n        <li>{{ topic }}</li>\n    {% empty %}\n        <li>No topics have been added yet.</li>\n    {% endfor %}\n  </ul>\n{% endblock content %}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now let's add individual topics pages. Update the url pattern\n",(0,r.jsx)(n.code,{children:"learning_log_app/urls.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"path('topics/(<int:topic_id>/', views.topic, name='topic'),\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Update the views ",(0,r.jsx)(n.code,{children:"learning_log_app/views.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def\ndef topic(request, topic_id):\n    \"\"\"Show a single topic and all its entries.\"\"\"\n    topic = Topic.objects.get(id=topic_id)\n    entries = topic.entry_set.order_by('-date_added')\n    context = {'topic': topic, 'entries': entries}\n    return render(request, 'learning_log_app/topic.html', context)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a new ",(0,r.jsx)(n.code,{children:"learning_log_app/templates/learning_log_app/topic.html"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"{% extends 'learning_log_app /base.html' %}\n{% block content %}\n  <p>Topic: {{ topic }}</p>\n  <p>Entries:</p>\n  <ul>\n  {% for entry in entries %}\n    <li>\n    <p>{{ entry.date_added|date:'M d, Y H:i' }}</p> <p>{{ entry.text|linebreaks }}</p>\n    </li>\n  {% empty %}\n    <li>\n    <p>There are no entries for this topic yet.</p>\n    </li>\n  {% endfor %}\n  </ul>\n{% endblock content %}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Link the specific topic pages in our\n",(0,r.jsx)(n.code,{children:"learning_log_app/templates/learning_log_app/topics.html"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<li>\n<a href=\"{% url 'topic' topic.id %}\">({{ topic.id }}) {{ topic }}</a>\n</li>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Working in Djngo shell:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 manage.py shell\n"})}),"\n",(0,r.jsx)(n.h3,{id:"allow-users-to-create-entries",children:"Allow users to create entries"}),"\n",(0,r.jsxs)(n.p,{children:["We can let users submit and edit topics and entries via ",(0,r.jsx)(n.code,{children:"ModelForm"}),". Create a\nforms file ",(0,r.jsx)(n.code,{children:"learning_log_app/forms.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from django import forms\nfrom .models import Topic\n\nclass TopicForm(forms.ModelForm):\n    class Meta:\n        model = Topic\n        fields = ['text']\n        labels = {'text': ''}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL for new Topics page:"})," Add following to our ",(0,r.jsx)(n.code,{children:"learning_log_app/urls.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"path('new_topic/', views.new_topic, name='new_topic'),\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Update new_topic() in ",(0,r.jsx)(n.code,{children:"learning_log_app/views.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from django.shortcuts import render\nfrom django.http import HttpResponseRedirect\nfrom django.core.urlresolvers import reverse\nfrom learning_log_app.models import Topic\nfrom learning_log_app.forms import TopicForm\n\ndef index(request):\n    \"\"\"The home page for Learning Log\"\"\"\n    return render(request, 'learning_log_app/index.html')\n\ndef topics(request):\n    \"\"\"Show all topics.\"\"\"\n    topics = Topic.objects.order_by('date_added')\n    context = {'topics': topics}\n    return render(request, 'learning_log_app/topics.html', context)\n\ndef topic(request, topic_id):\n    \"\"\"Show a single topic and all its entries.\"\"\"\n    topic = Topic.objects.get(id=topic_id)\n    entries = topic.entry_set.order_by('-date_added')\n    context = {'topic': topic, 'entries': entries}\n    return render(request, 'learning_log_app/topic.html', context)\n\ndef new_topic(request):\n    \"\"\"Add a new topic.\"\"\"\n    if request.method != 'POST':\n        # No data submitted; create a blank form.\n        form = TopicForm()\n    else:\n        # POST data submitted; process data.\n        form = TopicForm(request.POST)\n        if form.is_valid():\n            form.save()\n            return HttpResponseRedirect(reverse('learning_log_app:topics'))\n\n    context = {'form': form}\n    return render(request, 'learning_log_app/new_topic.html', context)\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},65:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var a=t(7294);let r={},i=a.createContext(r);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);