(function(e){function t(t){for(var r,a,o=t[0],c=t[1],l=t[2],m=0,d=[];m<o.length;m++)a=o[m],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],r=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},n={app:0},i=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"217f":function(e,t,s){"use strict";s("703d")},2480:function(e,t,s){"use strict";s("ef9e")},"2c35":function(e,t,s){"use strict";s("e689")},"561e":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],a={name:"App"},o=a,c=(s("034f"),s("2877")),l=Object(c["a"])(o,n,i,!1,null,null,null),u=l.exports,m=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view home"},[s("div",{staticClass:"center"},[s("b",[e._v(e._s(e.$i18n("welcome")))]),s("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[e._v(e._s(e.$i18n("btn-create")))])],1)])},p=[],f={name:"Home"},h=f,g=(s("cccb"),Object(c["a"])(h,d,p,!1,null,null,null)),v=g.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view story"},[s("CurrentFrame"),s("Frames")],1)},y=[],C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"current-frame",style:e.currentFrame.style},[e.currentFrame.noImage?s("router-link",{staticClass:"btn-search-wiki",attrs:{to:"/searchwikipedia"}},[e._v("Search Wikipedia")]):e._e(),e.currentFrame.text?s("p",[e._v(e._s(e.currentFrame.text))]):e._e(),e.currentFrame.noImage?s("router-link",{attrs:{to:"/searchcommons"}},[e._v("Search Media")]):e._e()],1)},_=[],w=s("2f62"),k={name:"CurrentFrame",computed:Object(w["c"])(["currentFrame"])},x=k,j=(s("2c35"),Object(c["a"])(x,C,_,!1,null,null,null)),O=j.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"frames"},[e._l(e.thumbnails,(function(t){return s("div",{key:t.id,staticClass:"frame",class:{"selected-frame":t.selected},style:t.style,on:{click:function(s){return e.selectFrame(t.id)}}})})),s("div",{staticClass:"frame btn-add-frame",on:{click:e.addFrame}},[e._v("+")])],2)},L=[],F={name:"Frames",computed:Object(w["c"])(["thumbnails"]),methods:Object(w["b"])(["selectFrame","addFrame"])},T=F,q=(s("2480"),Object(c["a"])(T,S,L,!1,null,null,null)),R=q.exports,$={name:"Story",components:{CurrentFrame:O,Frames:R}},A=$,I=(s("217f"),Object(c["a"])(A,b,y,!1,null,null,null)),E=I.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view search-wp"},[s("form",[s("router-link",{attrs:{to:"Story"}},[s("div",{staticClass:"back"})]),s("div",{staticClass:"label"},[e._v(e._s(e.$i18n("search-box")))]),s("input",{staticClass:"query",attrs:{type:"text",placeholder:[[e.$i18n("search-box")]]},domProps:{value:e.query},on:{input:e.onInput}}),s("div",{staticClass:"icon"}),e.query?s("div",{staticClass:"close",on:{click:e.onClear}}):e._e()],1),e.loading?s("div",{staticClass:"loading-bar"}):e._e(),s("ListView",{attrs:{items:e.searchResults}})],1)},Q=[],M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"listview"},e._l(e.items,(function(t){return s("div",{key:t.title,staticClass:"item"},[s("router-link",{attrs:{to:t.goto}},[s("div",{staticClass:"img",style:{backgroundImage:"url("+t.thumb+")"}}),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[e._v(e._s(t.title))]),s("div",{staticClass:"description"},[e._v(e._s(t.desc))])])])],1)})),0)},W=[],V={name:"ListView",props:["items"]},B=V,H=(s("f5ca"),Object(c["a"])(B,M,W,!1,null,null,null)),D=H.exports,z={name:"SearchWikipedia",components:{ListView:D},methods:{...Object(w["b"])(["search","clear"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()}},computed:Object(w["c"])(["loading","searchResults","query"])},J=z,U=(s("884e"),Object(c["a"])(J,P,Q,!1,null,null,null)),N=U.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view search-wp"},[s("form",[s("router-link",{attrs:{to:"Story"}},[s("div",{staticClass:"back"})]),s("div",{staticClass:"label"},[e._v(e._s(e.$i18n("search-media")))]),s("input",{staticClass:"query",attrs:{type:"text",placeholder:[[e.$i18n("search-media")]]},domProps:{value:e.commonsQuery},on:{input:e.onInput}}),s("div",{staticClass:"icon"}),e.commonsQuery?s("div",{staticClass:"close",on:{click:e.onClear}}):e._e()],1),e.commonsLoading?s("div",{staticClass:"loading-bar"}):e._e(),s("ImageListView",{attrs:{items:e.commonsResults}})],1)},X=[],K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"imagelistview"},[s("div",{staticClass:"imagelistview__list-wrapper"},[s("div",{staticClass:"imagelistview__list"},e._l(e.items,(function(e){return s("div",{key:e.title,staticClass:"imagelistview__list-image",style:{width:e.width+"px"},attrs:{title:e.title}},[s("img",{attrs:{src:e.thumb,alt:e.title,loading:"lazy"}})])})),0)])])},Y=[],Z={name:"ImageListView",props:["items"]},ee=Z,te=(s("9ddc"),Object(c["a"])(ee,K,Y,!1,null,null,null)),se=te.exports,re={name:"SearchWikipedia",components:{ImageListView:se},methods:{...Object(w["b"])(["searchCommons","clearCommons"]),onInput:function(e){e.preventDefault(),this.searchCommons(e.target.value)},onClear:function(e){e.preventDefault(),this.clearCommons()}},computed:Object(w["c"])(["commonsLoading","commonsResults","commonsQuery"])},ne=re,ie=(s("f207"),Object(c["a"])(ne,G,X,!1,null,null,null)),ae=ie.exports,oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view article",domProps:{innerHTML:e._s(e.currentArticle)},on:{click:e.onClick}})},ce=[],le={name:"BrowseArticle",props:["article"],computed:Object(w["c"])(["currentArticle"]),methods:{...Object(w["b"])(["fetchArticle"]),onClick:({target:e})=>{"P"===e.tagName&&e.classList.toggle("selected-text")}},created:function(){this.fetchArticle(this.article)}},ue=le,me=(s("adc4"),Object(c["a"])(ue,oe,ce,!1,null,null,null)),de=me.exports;r["a"].use(m["a"]);const pe=[{path:"/",name:"Home",component:v},{path:"/story",name:"Story",component:E},{path:"/searchwikipedia",name:"SearchWikipedia",component:N},{path:"/searchcommons",name:"SearchCommons",component:ae},{path:"/article/:article",name:"BrowseArticle",component:de,props:!0}],fe=new m["a"]({routes:pe});var he=fe;const ge=5,ve=e=>e.img?{backgroundImage:"url("+e.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"};var be={state:{currentFrameId:1,frames:[{id:1,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bandhavgarh_Tigers.jpg/640px-Bandhavgarh_Tigers.jpg",text:"Bandhavgarh Tigers"},{id:2,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/White_Tiger_in_Touroparc.jpg/640px-White_Tiger_in_Touroparc.jpg",text:"White Tiger in Touroparc"},{id:3,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TigerVector.png/640px-TigerVector.png",text:"Taken from the Coat of arms of Vladivostok and modified."}]},mutations:{selectFrame:(e,t)=>e.currentFrameId=t,addFrame:e=>{if(e.frames.length===ge)return;const t=e.frames.length+1;e.frames.push({text:"",img:"",id:t}),e.currentFrameId=t}},actions:{selectFrame:({commit:e},t)=>{e("selectFrame",t)},addFrame:({commit:e})=>{e("addFrame")}},getters:{thumbnails:e=>e.frames.map(t=>{const s={...t};return t.id===e.currentFrameId&&(s.selected=!0),s.style=ve(t),s}),currentFrame:e=>{const t=e.frames.find(t=>t.id===e.currentFrameId);return{text:t.text,style:ve(t),noImage:""===t.img}}}};let ye=[];const Ce=()=>{ye.forEach(e=>e&&e.abort()),ye=[]},_e=(e,t)=>{Ce();const s=new XMLHttpRequest;s.open("GET",e),s.send(),s.addEventListener("load",()=>{t(JSON.parse(s.responseText))}),s.addEventListener("error",()=>{t(null,s.status)}),ye.push(s)};var we={state:{loading:!1,results:[],query:""},mutations:{setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setSearchResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const s=t.trim(),r=`https://en.wikipedia.org/w/rest.php/v1/search/title?q=${s}&limit=10`;if(e("setQuery",t),!s)return Ce(),e("setLoading",!1),void e("setSearchResults",[]);e("setLoading",!0),_e(r,t=>{t.pages&&e("setSearchResults",Object.values(t.pages).map(e=>({title:e.title,desc:e.description,thumb:e.thumbnail&&e.thumbnail.url,goto:{name:"BrowseArticle",params:{article:e.title}}}))),e("setLoading",!1)})},clear:({commit:e})=>{Ce(),e("setLoading",!1),e("setSearchResults",[]),e("setQuery","")}},getters:{loading:e=>e.loading,searchResults:e=>e.results,query:e=>e.query}},ke={state:{commonsLoading:!1,commonsResults:[],commonsQuery:""},mutations:{setCommonsLoading:(e,t)=>e.commonsLoading=t,setCommonsQuery:(e,t)=>e.commonsQuery=t,setCommonsSearchResults:(e,t)=>e.commonsResults=t},actions:{searchCommons:({commit:e},t)=>{const s=t.trim(),r=`https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&&uselang=en&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${s}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=size%7Cwordcount%7Ctimestamp%7Csnippet&prop=info%7Cimageinfo%7Centityterms&inprop=url&gsrnamespace=6&iiprop=url%7Csize%7Cmime&iiurlheight=180&wbetterms=label`;if(e("setCommonsQuery",t),!s)return Ce(),e("setCommonsLoading",!1),void e("setCommonsSearchResults",[]);e("setCommonsLoading",!0),_e(r,t=>{if(t.query&&t.query.pages){const s=Object.values(t.query.pages).sort((e,t)=>e.index-t.index);e("setCommonsSearchResults",s.map(e=>{const t=e.imageinfo[0],s=t.responsiveUrls&&Object.values(t.responsiveUrls)[0];return{title:e.title,desc:e.snippet,thumb:s||t.url,width:t.thumbwidth}}))}e("setCommonsLoading",!1)})},clearCommons:({commit:e})=>{Ce(),e("setCommonsLoading",!1),e("setCommonsSearchResults",[]),e("setCommonsQuery","")}},getters:{commonsLoading:e=>e.commonsLoading,commonsResults:e=>e.commonsResults,commonsQuery:e=>e.commonsQuery}},xe={state:{article:{title:"",html:""}},mutations:{setArticle:({article:e},{title:t,html:s})=>{e.title=t,e.html=s}},actions:{fetchArticle:async({commit:e},t)=>{const s="https://en.wikipedia.org/api/rest_v1/page/mobile-html/"+t,r=await(await fetch(s)).text(),n=(new DOMParser).parseFromString(r,"text/html");for(const a of n.querySelectorAll("table,script"))a.remove();for(const a of n.querySelectorAll("section"))a.style.display="block";for(const a of n.querySelectorAll("p"))a.style.position="unset";let i;for(const a of n.querySelectorAll("a"))i=n.createElement("span"),i.innerHTML=a.innerHTML,a.replaceWith(i);e("setArticle",{title:t,html:n.body.outerHTML})}},getters:{currentArticle:({article:e})=>e.html}};r["a"].use(w["a"]);var je=new w["a"].Store({modules:{story:be,search:we,article:xe,commons:ke}}),Oe=s("5093"),Se=s.n(Oe),Le={welcome:"Welcome to Wikistories","btn-create":"Create a story","search-box":"Search Wikipedia","search-media":"Search Media"},Fe={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire"};const Te=()=>new URL(location.href).searchParams.get("lang")||"en";r["a"].use(Se.a,{locale:Te(),messages:{en:Le,fr:Fe}}),r["a"].config.productionTip=!1,new r["a"]({router:he,store:je,render:e=>e(u)}).$mount("#app")},"58e4":function(e,t,s){},"5ced":function(e,t,s){},"703d":function(e,t,s){},7066:function(e,t,s){},"7be0":function(e,t,s){},"85ec":function(e,t,s){},"884e":function(e,t,s){"use strict";s("ba7b")},"9ddc":function(e,t,s){"use strict";s("7066")},adc4:function(e,t,s){"use strict";s("561e")},ba7b:function(e,t,s){},cccb:function(e,t,s){"use strict";s("5ced")},e689:function(e,t,s){},ef9e:function(e,t,s){},f207:function(e,t,s){"use strict";s("7be0")},f5ca:function(e,t,s){"use strict";s("58e4")}});
//# sourceMappingURL=app.7901b190.js.map