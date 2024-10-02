"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[4900],{911:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=t(4848),a=t(8453);const r={title:"Geographical plots using geopandas and bokeh",sidebar_label:"Geo-plots"},l=void 0,i={id:"matplotlib/geo-plot",title:"Geographical plots using geopandas and bokeh",description:"Geo-maps are very helpful in visualizing geographical data. In order to create",source:"@site/docs/matplotlib/geo-plot.md",sourceDirName:"matplotlib",slug:"/matplotlib/geo-plot",permalink:"/python-tutorial/matplotlib/geo-plot",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/geo-plot.md",tags:[],version:"current",frontMatter:{title:"Geographical plots using geopandas and bokeh",sidebar_label:"Geo-plots"},sidebar:"docs",previous:{title:"3D volume plots",permalink:"/python-tutorial/matplotlib/3d-vol"},next:{title:"Customizing matplotlib",permalink:"/python-tutorial/matplotlib/mpl-customizations"}},s={},p=[];function c(e){const o={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["Geo-maps are very helpful in visualizing geographical data. In order to create\ngeo-maps, we need the shape files. You can download such shape files ",(0,n.jsx)(o.a,{href:"https://www.naturalearthdata.com/downloads/",children:"here"}),". We will be plotting life\nexpectancy data over our map from WHO record. You can find such datasets from\n",(0,n.jsx)(o.a,{href:"https://www.kaggle.com",children:"Kaggle"}),". You can also find a copy of the CSV file that\nwe will be using ",(0,n.jsx)(o.a,{href:"https://pranabdas.github.io/drive/downloads/datasets/Life-Expectancy-Data.csv",children:"here"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",metastring:"showLineNumbers",children:"import pandas as pd\nimport geopandas as gpd\nimport json\nfrom bokeh.io import output_notebook, show, output_file\nfrom bokeh.plotting import figure\nfrom bokeh.models import GeoJSONDataSource, LinearColorMapper, ColorBar\nfrom bokeh.palettes import brewer\n\n# Load the shapefile, we are only loading necessary columns\ngdf = gpd.read_file(\"/Users/Pranab/Desktop/map-data/\\\nne_110m_admin_0_countries.shp\")[['ADMIN', 'geometry']]\n\n# rename the columns\ngdf.columns = ['Country', 'geometry']\n\n# load life expectancy data\nlife_expectancy = pd.read_csv(\"~/Desktop/Life-Expectancy-Data.csv\")\n\n# choose only life expectancy data\nlife_expectancy = life_expectancy[['Country', 'Year', 'Life expectancy ']]\n\n# choose only data for 2015\nlife_expectancy = life_expectancy.loc[life_expectancy['Year'] == 2015]\n\n# Merge dataframes gdf and life_expectancy\nmerged = gdf.merge(life_expectancy, left_on = 'Country', right_on = 'Country')\n\n# Read data to json\nmerged_json = json.loads(merged.to_json())\n\n# Convert to String like object\njson_data = json.dumps(merged_json)\n\n# Input GeoJSON source that contains features for plotting\ngeosource = GeoJSONDataSource(geojson = json_data)\n\n# Define a sequential multi-hue color palette\npalette = brewer['YlGnBu'][8]\n\n# Reverse color order\npalette = palette[::-1]\n\n# Instantiate LinearColorMapper that linearly maps numbers in a range\ncolor_mapper = LinearColorMapper(palette = palette, low = 50, high = 90)\n\n# Define custom tick labels for color bar\ntick_labels = {'50': '50', '55': '55', '60':'60', '65':'65', \\\n               '70':'70', '75':'75', '80':'80','85':'85', '90': '90'}\n\n# Create color bar\ncolor_bar = ColorBar(color_mapper = color_mapper, label_standoff = 8,\\\n                     width = 500, height = 20,\nborder_line_color=None,location = (0,0), orientation = 'horizontal', \\\n                     major_label_overrides = tick_labels)\n\n# Create figure object\np = figure(title = 'Life expectancy, 2015', plot_height = 450 , \\\n           plot_width = 750, toolbar_location = None)\np.xgrid.grid_line_color = None\np.ygrid.grid_line_color = None\n\n# Add patch renderer to figure\np.patches('xs','ys', source = geosource,fill_color = {'field' :\\\n          'Life expectancy ', 'transform' : color_mapper},\\\n          line_color = 'black', line_width = 0.25, fill_alpha = 1)\n\n# Specify figure layout\np.add_layout(color_bar, 'below')\np.axis.visible = False\n\n# Display figure inline in Jupyter Notebook\noutput_notebook()\nshow(p)\n"})}),"\n",(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{type:"image/webp",srcSet:t(4494).A}),(0,n.jsx)("img",{src:t(3405).A,alt:"geo-plot"})]})]})}function d(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},3405:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/geo-plot-77f696660cd2ffe10360545c6628ed2f.png"},4494:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/geo-plot-8943f43922e436a2e0f98720e179a5c9.webp"},8453:(e,o,t)=>{t.d(o,{R:()=>l,x:()=>i});var n=t(6540);const a={},r=n.createContext(a);function l(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);