(function(e){function t(t){for(var s,n,o=t[0],c=t[1],l=t[2],m=0,p=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(s=!1)}s&&(a.splice(t--,1),e=n(n.s=r[0]))}return e}var s={},i={app:0},a=[];function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"217f":function(e,t,r){"use strict";r("703d")},2480:function(e,t,r){"use strict";r("ef9e")},"2c35":function(e,t,r){"use strict";r("e689")},"561e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var s=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],n={name:"App"},o=n,c=(r("034f"),r("2877")),l=Object(c["a"])(o,i,a,!1,null,null,null),u=l.exports,m=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view home"},[r("div",{staticClass:"center"},[r("b",[e._v(e._s(e.$i18n("welcome")))]),r("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[e._v(e._s(e.$i18n("btn-create")))])],1)])},d=[],h={name:"Home"},f=h,g=(r("cccb"),Object(c["a"])(f,p,d,!1,null,null,null)),v=g.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view story"},[r("CurrentFrame"),r("Frames")],1)},y=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"current-frame",style:e.currentFrame.style},[e.currentFrame.noImage?r("router-link",{staticClass:"btn-search-wiki",attrs:{to:"/searchwikipedia"}},[e._v("Search Wikipedia")]):e._e(),e.currentFrame.text?r("p",[e._v(e._s(e.currentFrame.text))]):e._e(),e.currentFrame.noImage?r("router-link",{attrs:{to:"/searchcommons"}},[e._v("Search Media")]):e._e()],1)},_=[],w=r("2f62"),k={name:"CurrentFrame",computed:Object(w["c"])(["currentFrame"])},x=k,j=(r("2c35"),Object(c["a"])(x,C,_,!1,null,null,null)),O=j.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frames"},[e._l(e.thumbnails,(function(t){return r("div",{key:t.id,staticClass:"frame",class:{"selected-frame":t.selected},style:t.style,on:{click:function(r){return e.selectFrame(t.id)}}})})),r("div",{staticClass:"frame btn-add-frame",on:{click:e.addFrame}},[e._v("+")])],2)},F=[],q={name:"Frames",computed:Object(w["c"])(["thumbnails"]),methods:Object(w["b"])(["selectFrame","addFrame"])},T=q,R=(r("2480"),Object(c["a"])(T,S,F,!1,null,null,null)),$=R.exports,A={name:"Story",components:{CurrentFrame:O,Frames:$}},I=A,E=(r("217f"),Object(c["a"])(I,b,y,!1,null,null,null)),L=E.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view search-wp"},[r("form",[r("router-link",{attrs:{to:"Story"}},[r("div",{staticClass:"back"})]),r("div",{staticClass:"label"},[e._v(e._s(e.$i18n("search-box")))]),r("input",{staticClass:"query",attrs:{type:"text",placeholder:[[e.$i18n("search-box")]]},domProps:{value:e.query},on:{input:e.onInput}}),r("div",{staticClass:"icon"}),e.query?r("div",{staticClass:"close",on:{click:e.onClear}}):e._e()],1),r("ListView",{attrs:{items:e.searchResults}})],1)},Q=[],M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"listview"},e._l(e.items,(function(t){return r("div",{key:t.title,staticClass:"item"},[r("router-link",{attrs:{to:t.goto}},[r("div",{staticClass:"img",style:{backgroundImage:"url("+t.thumb+")"}}),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[e._v(e._s(t.title))]),r("div",{staticClass:"description"},[e._v(e._s(t.desc))])])])],1)})),0)},W=[],V={name:"ListView",props:["items"]},B=V,H=(r("f5ca"),Object(c["a"])(B,M,W,!1,null,null,null)),D=H.exports,z={name:"SearchWikipedia",components:{ListView:D},methods:{...Object(w["b"])(["search","clear"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()}},computed:Object(w["c"])(["searchResults","query"])},J=z,N=(r("884e"),Object(c["a"])(J,P,Q,!1,null,null,null)),U=N.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view search-wp"},[r("form",[r("router-link",{attrs:{to:"Story"}},[r("div",{staticClass:"back"})]),r("div",{staticClass:"label"},[e._v(e._s(e.$i18n("search-media")))]),r("input",{staticClass:"query",attrs:{type:"text",placeholder:[[e.$i18n("search-media")]]},domProps:{value:e.commonsQuery},on:{input:e.onInput}}),r("div",{staticClass:"icon"}),e.commonsQuery?r("div",{staticClass:"close",on:{click:e.onClear}}):e._e()],1),r("ImageListView",{attrs:{items:e.searchCommonsResults}})],1)},X=[],K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"imagelistview"},[r("div",{staticClass:"imagelistview__list-wrapper"},[r("div",{staticClass:"imagelistview__list imagelistview__list--image"},e._l(e.items,(function(e){return r("a",{key:e.title,staticClass:"sdms-image-result sdms-image-result--portrait",style:{width:e.width+"px"},attrs:{href:"#",title:e.title}},[r("img",{staticClass:"sd-image",staticStyle:{height:"100% !important","max-width":"3777px !important","max-height":"4343px"},attrs:{src:e.thumb,alt:e.title}})])})),0)])])},Y=[],Z={name:"ImageListView",props:["items"]},ee=Z,te=(r("9ddc"),Object(c["a"])(ee,K,Y,!1,null,null,null)),re=te.exports,se={name:"SearchWikipedia",components:{ImageListView:re},methods:{...Object(w["b"])(["searchCommons","clearCommons"]),onInput:function(e){e.preventDefault(),this.searchCommons(e.target.value)},onClear:function(e){e.preventDefault(),this.clearCommons()}},computed:Object(w["c"])(["searchCommonsResults","commonsQuery"])},ie=se,ae=(r("f207"),Object(c["a"])(ie,G,X,!1,null,null,null)),ne=ae.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view article",domProps:{innerHTML:e._s(e.currentArticle)},on:{click:e.onClick}})},ce=[],le={name:"BrowseArticle",props:["article"],computed:Object(w["c"])(["currentArticle"]),methods:{...Object(w["b"])(["fetchArticle"]),onClick:({target:e})=>{"P"===e.tagName&&e.classList.toggle("selected-text")}},created:function(){this.fetchArticle(this.article)}},ue=le,me=(r("adc4"),Object(c["a"])(ue,oe,ce,!1,null,null,null)),pe=me.exports;s["a"].use(m["a"]);const de=[{path:"/",name:"Home",component:v},{path:"/story",name:"Story",component:L},{path:"/searchwikipedia",name:"SearchWikipedia",component:U},{path:"/searchcommons",name:"SearchCommons",component:ne},{path:"/article/:article",name:"BrowseArticle",component:pe,props:!0}],he=new m["a"]({routes:de});var fe=he;const ge=5,ve=e=>e.img?{backgroundImage:"url("+e.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"};var be={state:{currentFrameId:1,frames:[{id:1,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bandhavgarh_Tigers.jpg/640px-Bandhavgarh_Tigers.jpg",text:"Bandhavgarh Tigers"},{id:2,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/White_Tiger_in_Touroparc.jpg/640px-White_Tiger_in_Touroparc.jpg",text:"White Tiger in Touroparc"},{id:3,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TigerVector.png/640px-TigerVector.png",text:"Taken from the Coat of arms of Vladivostok and modified."}]},mutations:{selectFrame:(e,t)=>e.currentFrameId=t,addFrame:e=>{if(e.frames.length===ge)return;const t=e.frames.length+1;e.frames.push({text:"",img:"",id:t}),e.currentFrameId=t}},actions:{selectFrame:({commit:e},t)=>{e("selectFrame",t)},addFrame:({commit:e})=>{e("addFrame")}},getters:{thumbnails:e=>e.frames.map(t=>{const r={...t};return t.id===e.currentFrameId&&(r.selected=!0),r.style=ve(t),r}),currentFrame:e=>{const t=e.frames.find(t=>t.id===e.currentFrameId);return{text:t.text,style:ve(t),noImage:""===t.img}}}};let ye=[];const Ce=()=>{ye.forEach(e=>e&&e.abort()),ye=[]},_e=(e,t)=>{Ce();const r=new XMLHttpRequest;r.open("GET",e),r.send(),r.addEventListener("load",()=>{t(JSON.parse(r.responseText))}),r.addEventListener("error",()=>{t(null,r.status)}),ye.push(r)};var we={state:{results:[],query:""},mutations:{setQuery:(e,t)=>e.query=t,setSearchResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const r=t.trim(),s="https://en.wikipedia.org/w/api.php?action=query&generator=prefixsearch&prop=description|pageimages|pageprops&piprop=thumbnail&ppprop=displaytitle&redirects=false&pithumbsize=64&gpslimit=10&gpsnamespace=0&format=json&formatversion=2&origin=*&gpssearch="+r;if(e("setQuery",t),!r)return Ce(),void e("setSearchResults",[]);_e(s,t=>{t.query&&t.query.pages&&(t.query.pages.sort((e,t)=>e.index-t.index),e("setSearchResults",Object.values(t.query.pages).map(e=>({title:e.title,desc:e.description,thumb:e.thumbnail&&e.thumbnail.source,goto:{name:"BrowseArticle",params:{article:e.title}}}))))})},clear:({commit:e})=>{Ce(),e("setSearchResults",[]),e("setQuery","")}},getters:{searchResults:e=>e.results,query:e=>e.query}},ke={state:{commonsResults:[],commonsQuery:""},mutations:{setCommonsQuery:(e,t)=>e.commonsQuery=t,setCommonsSearchResults:(e,t)=>e.commonsResults=t},actions:{searchCommons:({commit:e},t)=>{const r=t.trim(),s=`https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&&uselang=en&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${r}&gsrlimit=20&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=size%7Cwordcount%7Ctimestamp%7Csnippet&prop=info%7Cimageinfo%7Centityterms&inprop=url&gsrnamespace=6&iiprop=url%7Csize%7Cmime&iiurlheight=180&wbetterms=label`;if(e("setCommonsQuery",t),!r)return Ce(),void e("setCommonsSearchResults",[]);_e(s,t=>{t.query&&t.query.pages&&e("setCommonsSearchResults",Object.values(t.query.pages).map(e=>({title:e.title,desc:e.snippet,thumb:e.imageinfo&&(Object.values(e.imageinfo[0].responsiveUrls)[0]||e.imageinfo[0].url),width:e.imageinfo[0].thumbwidth})))})},clearCommons:({commit:e})=>{Ce(),e("setCommonsSearchResults",[]),e("setCommonsQuery","")}},getters:{searchCommonsResults:e=>e.commonsResults,commonsQuery:e=>e.commonsQuery}},xe={state:{article:{title:"",html:""}},mutations:{setArticle:({article:e},{title:t,html:r})=>{e.title=t,e.html=r}},actions:{fetchArticle:async({commit:e},t)=>{const r="https://en.wikipedia.org/api/rest_v1/page/mobile-html/"+t,s=await(await fetch(r)).text(),i=(new DOMParser).parseFromString(s,"text/html");for(const n of i.querySelectorAll("table,script"))n.remove();for(const n of i.querySelectorAll("section"))n.style.display="block";for(const n of i.querySelectorAll("p"))n.style.position="unset";let a;for(const n of i.querySelectorAll("a"))a=i.createElement("span"),a.innerHTML=n.innerHTML,n.replaceWith(a);e("setArticle",{title:t,html:i.body.outerHTML})}},getters:{currentArticle:({article:e})=>e.html}};s["a"].use(w["a"]);var je=new w["a"].Store({modules:{story:be,search:we,article:xe,commons:ke}}),Oe=r("5093"),Se=r.n(Oe),Fe={welcome:"Welcome to Wikistories","btn-create":"Create a story","search-box":"Search Wikipedia","search-media":"Search Media"},qe={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire"};const Te=()=>new URL(location.href).searchParams.get("lang")||"en";s["a"].use(Se.a,{locale:Te(),messages:{en:Fe,fr:qe}}),s["a"].config.productionTip=!1,new s["a"]({router:fe,store:je,render:e=>e(u)}).$mount("#app")},"58e4":function(e,t,r){},"5ced":function(e,t,r){},"703d":function(e,t,r){},7066:function(e,t,r){},"7be0":function(e,t,r){},"85ec":function(e,t,r){},"884e":function(e,t,r){"use strict";r("ba7b")},"9ddc":function(e,t,r){"use strict";r("7066")},adc4:function(e,t,r){"use strict";r("561e")},ba7b:function(e,t,r){},cccb:function(e,t,r){"use strict";r("5ced")},e689:function(e,t,r){},ef9e:function(e,t,r){},f207:function(e,t,r){"use strict";r("7be0")},f5ca:function(e,t,r){"use strict";r("58e4")}});
//# sourceMappingURL=app.2c2d783b.js.map