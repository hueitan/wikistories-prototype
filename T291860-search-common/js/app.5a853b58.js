(function(e){function t(t){for(var s,n,c=t[0],o=t[1],l=t[2],m=0,d=[];m<c.length;m++)n=c[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,c=1;c<r.length;c++){var o=r[c];0!==i[o]&&(s=!1)}s&&(a.splice(t--,1),e=n(n.s=r[0]))}return e}var s={},i={app:0},a=[];function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"217f":function(e,t,r){"use strict";r("703d")},2480:function(e,t,r){"use strict";r("ef9e")},"2c35":function(e,t,r){"use strict";r("e689")},"2fba":function(e,t,r){"use strict";r("8a03")},"561e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var s=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],n={name:"App"},c=n,o=(r("034f"),r("2877")),l=Object(o["a"])(c,i,a,!1,null,null,null),u=l.exports,m=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view home"},[r("div",{staticClass:"center"},[r("b",[e._v(e._s(e.$i18n("welcome")))]),r("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[e._v(e._s(e.$i18n("btn-create")))])],1)])},p=[],h={name:"Home"},f=h,g=(r("cccb"),Object(o["a"])(f,d,p,!1,null,null,null)),b=g.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view story"},[r("CurrentFrame"),r("Frames")],1)},y=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"current-frame",style:e.currentFrame.style},[e.currentFrame.noImage?r("router-link",{staticClass:"btn-search-wiki",attrs:{to:"/searchwikipedia"}},[e._v("Search Wikipedia")]):e._e(),e.currentFrame.text?r("p",{domProps:{innerHTML:e._s(e.currentFrame.text)}}):e._e(),e.currentFrame.noImage?r("router-link",{attrs:{to:"/searchcommons"}},[e._v("Search Media")]):e._e()],1)},w=[],C=r("2f62"),S={name:"CurrentFrame",computed:Object(C["c"])(["currentFrame"])},k=S,x=(r("2c35"),Object(o["a"])(k,_,w,!1,null,null,null)),F=x.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frames"},[e._l(e.thumbnails,(function(t){return r("div",{key:t.id,staticClass:"frame",class:{"selected-frame":t.selected},style:t.style,on:{click:function(r){return e.selectFrame(t.id)}}})})),r("div",{staticClass:"frame btn-add-frame",on:{click:e.addFrame}},[e._v("+")])],2)},O=[],I={name:"Frames",computed:Object(C["c"])(["thumbnails"]),methods:Object(C["b"])(["selectFrame","addFrame"])},q=I,L=(r("2480"),Object(o["a"])(q,j,O,!1,null,null,null)),$=L.exports,T={name:"Story",components:{CurrentFrame:F,Frames:$}},A=T,E=(r("217f"),Object(o["a"])(A,v,y,!1,null,null,null)),P=E.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view search-wp"},[r("div",{staticClass:"header"},[r("router-link",{attrs:{to:"Story"}},[r("div",{staticClass:"back"})])],1),r("SearchForm",{attrs:{label:e.$i18n("search-box"),placeholder:e.$i18n("search-box"),query:e.query,loading:e.loading,onInput:e.onInput,onClear:e.onClear}}),r("ListView",{attrs:{items:e.searchResults}})],1)},R=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"listview"},e._l(e.items,(function(t){return r("div",{key:t.title,staticClass:"item"},[r("router-link",{attrs:{to:t.goto}},[r("div",{staticClass:"img",style:{backgroundImage:"url("+t.thumb+")"}}),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[e._v(e._s(t.title))]),r("div",{staticClass:"description"},[e._v(e._s(t.desc))])])])],1)})),0)},V=[],D={name:"ListView",props:["items"]},H=D,B=(r("6594"),Object(o["a"])(H,W,V,!1,null,"8b9bacd8",null)),Q=B.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",[r("div",{staticClass:"label"},[e._v(e._s(e.label))]),r("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"query",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.query},on:{input:e.onInput}}),r("div",{staticClass:"icon"}),e.query?r("div",{staticClass:"close",on:{click:e.onClear}}):e._e(),e.loading?r("div",{staticClass:"loading-bar"}):e._e()])},J=[],U={name:"SearchForm",props:["label","placeholder","query","loading","onInput","onClear"]},z=U,G=(r("c218"),Object(o["a"])(z,N,J,!1,null,"073106b2",null)),X=G.exports,K={name:"SearchWikipedia",components:{ListView:Q,SearchForm:X},methods:{...Object(C["b"])(["search","clear"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()}},computed:Object(C["c"])(["loading","searchResults","query"])},Y=K,Z=(r("884e"),Object(o["a"])(Y,M,R,!1,null,null,null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view search-cm"},[r("div",{staticClass:"header"},[r("router-link",{attrs:{to:"Story"}},[r("div",{staticClass:"back"})]),e.selection.length?r("div",{staticClass:"next",on:{click:e.editStory}}):e._e(),e.selection.length?r("span",{staticClass:"info"},[e._v(e._s(e.$i18n("search-media-info",e.selection.length)))]):e._e()],1),r("SearchForm",{attrs:{label:e.$i18n("search-media"),placeholder:e.$i18n("search-media"),query:e.query,loading:e.loading,onInput:e.onInput,onClear:e.onClear}}),r("ImageListView",{attrs:{items:e.results,onItemSelect:e.onItemSelect,selected:e.selection}})],1)},re=[],se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"imagelistview"},[r("div",{staticClass:"imagelistview__list-wrapper"},[r("div",{staticClass:"imagelistview__list"},e._l(e.items,(function(t){return r("div",{key:t.id,staticClass:"imagelistview__list-image",style:{width:t.width+"px"},attrs:{"data-id":t.id},on:{click:e.onSelect}},[r("img",{attrs:{src:t.thumb,alt:t.title,loading:"lazy"}}),r("div",{class:{checkbox:!0,selected:e.selected.includes(t.id)}})])})),0)])])},ie=[],ae={name:"ImageListView",props:["items","onItemSelect","selected"],methods:{onSelect(e){const t=e.target.getAttribute("data-id");this.selected.includes(t)?this.selected.splice(this.selected.indexOf(t),1):this.selected.push(t),this.onItemSelect(this.selected)}}},ne=ae,ce=(r("2fba"),Object(o["a"])(ne,se,ie,!1,null,"7fd474f2",null)),oe=ce.exports,le={name:"SearchWikipedia",components:{ImageListView:oe,SearchForm:X},methods:{...Object(C["b"])("commons",["select","search","clear"]),...Object(C["b"])(["resetFrame"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()},onItemSelect:function(e){this.select(e)},editStory:function(){const e=this.selection.map((e,t)=>{const r=this.results.find(t=>t.id===e);return{id:t+1,img:r.thumb,text:r.desc}});this.resetFrame(e),this.$router.push({name:"Story"})}},computed:Object(C["c"])("commons",["selection","loading","results","query"])},ue=le,me=(r("f207"),Object(o["a"])(ue,te,re,!1,null,null,null)),de=me.exports,pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view article",domProps:{innerHTML:e._s(e.currentArticle)},on:{click:e.onClick}})},he=[],fe={name:"BrowseArticle",props:["article"],computed:Object(C["c"])(["currentArticle"]),methods:{...Object(C["b"])(["fetchArticle"]),onClick:({target:e})=>{"P"===e.tagName&&e.classList.toggle("selected-text")}},created:function(){this.fetchArticle(this.article)}},ge=fe,be=(r("adc4"),Object(o["a"])(ge,pe,he,!1,null,null,null)),ve=be.exports;s["a"].use(m["a"]);const ye=[{path:"/",name:"Home",component:b},{path:"/story",name:"Story",component:P},{path:"/searchwikipedia",name:"SearchWikipedia",component:ee},{path:"/searchcommons",name:"SearchCommons",component:de},{path:"/article/:article",name:"BrowseArticle",component:ve,props:!0}],_e=new m["a"]({routes:ye});var we=_e;const Ce=5,Se=e=>e.img?{backgroundImage:"url("+e.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"};var ke={state:{currentFrameId:1,frames:[{id:1,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bandhavgarh_Tigers.jpg/640px-Bandhavgarh_Tigers.jpg",text:"Bandhavgarh Tigers"},{id:2,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/White_Tiger_in_Touroparc.jpg/640px-White_Tiger_in_Touroparc.jpg",text:"White Tiger in Touroparc"},{id:3,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TigerVector.png/640px-TigerVector.png",text:"Taken from the Coat of arms of Vladivostok and modified."}]},mutations:{selectFrame:(e,t)=>e.currentFrameId=t,addFrame:e=>{if(e.frames.length===Ce)return;const t=e.frames.length+1;e.frames.push({text:"",img:"",id:t}),e.currentFrameId=t},resetFrame:(e,t)=>{e.currentFrameId=t.length,e.frames=t}},actions:{selectFrame:({commit:e},t)=>{e("selectFrame",t)},addFrame:({commit:e})=>{e("addFrame")},resetFrame:({commit:e},t)=>{e("resetFrame",t)}},getters:{thumbnails:e=>e.frames.map(t=>{const r={...t};return t.id===e.currentFrameId&&(r.selected=!0),r.style=Se(t),r}),currentFrame:e=>{const t=e.frames.find(t=>t.id===e.currentFrameId);return{text:t.text,style:Se(t),noImage:""===t.img}}}};let xe=[];const Fe=()=>{xe.forEach(e=>e&&e.abort()),xe=[]},je=(e,t)=>{Fe();const r=new XMLHttpRequest;r.open("GET",e),r.send(),r.addEventListener("load",()=>{t(JSON.parse(r.responseText))}),r.addEventListener("error",()=>{t(null,r.status)}),xe.push(r)};var Oe={state:{loading:!1,results:[],query:""},mutations:{setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setSearchResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const r=t.trim(),s=`https://en.wikipedia.org/w/rest.php/v1/search/title?q=${r}&limit=10`;if(e("setQuery",t),!r)return Fe(),e("setLoading",!1),void e("setSearchResults",[]);e("setLoading",!0),je(s,t=>{t.pages&&e("setSearchResults",Object.values(t.pages).map(e=>({title:e.title,desc:e.description,thumb:e.thumbnail&&e.thumbnail.url,goto:{name:"BrowseArticle",params:{article:e.title}}}))),e("setLoading",!1)})},clear:({commit:e})=>{Fe(),e("setLoading",!1),e("setSearchResults",[]),e("setQuery","")}},getters:{loading:e=>e.loading,searchResults:e=>e.results,query:e=>e.query}},Ie={namespaced:!0,state:{selection:[],loading:!1,results:[],query:""},mutations:{setSelection:(e,t)=>e.selection=t,setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const r=t.trim(),s=`https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&uselang=en&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${r}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=snippet&prop=imageinfo&gsrnamespace=6&iiprop=url%7Cextmetadata&iiurlheight=180&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist`;if(e("setQuery",t),!r)return Fe(),e("setSelection",[]),e("setLoading",!1),void e("setResults",[]);e("setLoading",!0),je(s,t=>{if(t.query&&t.query.pages){const r=Object.values(t.query.pages).sort((e,t)=>e.index-t.index);e("setResults",r.map(e=>{const t=e.imageinfo[0],r=t.responsiveUrls&&Object.values(t.responsiveUrls)[0],s=t.extmetadata,i=s&&s.ImageDescription&&s.ImageDescription.value;return{id:e.pageid.toString(),title:e.title,desc:i||e.snippet,thumb:r||t.url,width:t.thumbwidth}}))}e("setSelection",[]),e("setLoading",!1)})},clear:({commit:e})=>{Fe(),e("setSelection",[]),e("setLoading",!1),e("setResults",[]),e("setQuery","")},select:({commit:e},t)=>{e("setSelection",t)}},getters:{selection:e=>e.selection,loading:e=>e.loading,results:e=>e.results,query:e=>e.query}},qe={state:{article:{title:"",html:""}},mutations:{setArticle:({article:e},{title:t,html:r})=>{e.title=t,e.html=r}},actions:{fetchArticle:async({commit:e},t)=>{const r="https://en.wikipedia.org/api/rest_v1/page/mobile-html/"+t,s=await(await fetch(r)).text(),i=(new DOMParser).parseFromString(s,"text/html");for(const n of i.querySelectorAll("table,script"))n.remove();for(const n of i.querySelectorAll("section"))n.style.display="block";for(const n of i.querySelectorAll("p"))n.style.position="unset";let a;for(const n of i.querySelectorAll("a"))a=i.createElement("span"),a.innerHTML=n.innerHTML,n.replaceWith(a);e("setArticle",{title:t,html:i.body.outerHTML})}},getters:{currentArticle:({article:e})=>e.html}};s["a"].use(C["a"]);var Le=new C["a"].Store({modules:{story:ke,search:Oe,article:qe,commons:Ie}});s["a"].directive("focus",{inserted:function(e){e.focus()}});var $e=r("5093"),Te=r.n($e),Ae={welcome:"Welcome to Wikistories","btn-create":"Create a story","search-box":"Search Wikipedia","search-media":"Search Media","search-media-info":"$1 selected"},Ee={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire"};const Pe=()=>new URL(location.href).searchParams.get("lang")||"en";s["a"].use(Te.a,{locale:Pe(),messages:{en:Ae,fr:Ee}}),s["a"].config.productionTip=!1,new s["a"]({router:we,store:Le,render:e=>e(u)}).$mount("#app")},"5ced":function(e,t,r){},6594:function(e,t,r){"use strict";r("f1fb")},"703d":function(e,t,r){},"7be0":function(e,t,r){},"85ec":function(e,t,r){},"884e":function(e,t,r){"use strict";r("ba7b")},"8a03":function(e,t,r){},adc4:function(e,t,r){"use strict";r("561e")},afd8:function(e,t,r){},ba7b:function(e,t,r){},c218:function(e,t,r){"use strict";r("afd8")},cccb:function(e,t,r){"use strict";r("5ced")},e689:function(e,t,r){},ef9e:function(e,t,r){},f1fb:function(e,t,r){},f207:function(e,t,r){"use strict";r("7be0")}});
//# sourceMappingURL=app.5a853b58.js.map