(function(e){function t(t){for(var i,a,o=t[0],c=t[1],l=t[2],m=0,d=[];m<o.length;m++)a=o[m],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(i=!1)}i&&(n.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},r={app:0},n=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"023c":function(e,t,s){},"034f":function(e,t,s){"use strict";s("85ec")},"04a9":function(e,t,s){},1314:function(e,t,s){"use strict";s("b2bc")},"217f":function(e,t,s){"use strict";s("703d")},2480:function(e,t,s){"use strict";s("ef9e")},2609:function(e,t,s){},"29d4":function(e,t,s){"use strict";s("2f620")},"2f620":function(e,t,s){},"2f7e":function(e,t,s){},"373f":function(e,t,s){"use strict";s("b668")},3749:function(e,t,s){},4935:function(e,t,s){"use strict";s("04a9")},"56d7":function(e,t,s){"use strict";s.r(t);var i=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],a={name:"App",mounted:()=>{o(),window.addEventListener("resize",o)},beforeUnmount:()=>{window.removeEventListener("resize",o)}};const o=()=>{const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")};var c=a,l=(s("034f"),s("2877")),u=Object(l["a"])(c,r,n,!1,null,null,null),m=u.exports,d=s("8c4f"),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view home"},[s("div",{staticClass:"center"},[s("b",[e._v(e._s(e.$i18n("welcome")))]),s("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[e._v(e._s(e.$i18n("btn-create")))])],1)])},p=[],f={name:"Home"},g=f,b=(s("cccb"),Object(l["a"])(g,h,p,!1,null,null,null)),v=b.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view story"},[e.currentFrame.id===e.storyLength?s("PrimaryButton",{staticClass:"publish-button",attrs:{text:e.$i18n("btn-publish"),onClick:e.onPublish}}):e._e(),s("CurrentFrame"),s("Frames"),s("SearchToolbar")],1)},_=[],C=s("2f62"),w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"current-frame",style:e.currentFrame.style},[e.currentFrame.text?s("p",{domProps:{innerHTML:e._s(e.currentFrame.text)}}):e._e()])},S=[],x={name:"CurrentFrame",computed:Object(C["c"])(["currentFrame"])},k=x,F=(s("6a42"),Object(l["a"])(k,w,S,!1,null,"37499b30",null)),I=F.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"frames"},[e._l(e.thumbnails,(function(t){return s("div",{key:t.id,staticClass:"frame",class:{"selected-frame":t.selected},style:t.style,on:{click:function(s){return e.selectFrame(t.id)}}})})),s("div",{staticClass:"frame btn-add-frame",on:{click:e.addFrame}},[e._v("+")])],2)},$=[],j={name:"Frames",computed:Object(C["c"])(["thumbnails"]),methods:Object(C["b"])(["selectFrame","addFrame"])},O=j,L=(s("2480"),Object(l["a"])(O,T,$,!1,null,null,null)),E=L.exports,q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-toolbar"},[s("router-link",{staticClass:"commons logo",attrs:{to:"/searchcommons"}},[e._v(e._s(e.$i18n("wikimedia-commons")))]),s("div",{staticClass:"border"}),s("router-link",{staticClass:"wikipedia logo",attrs:{to:"/searchwikipedia"}},[e._v(e._s(e.$i18n("wikipedia")))])],1)},A=[],D={name:"SearchToolbar"},P=D,N=(s("29d4"),Object(l["a"])(P,q,A,!1,null,"d23ff7cc",null)),B=N.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"primary-button",attrs:{name:"button"},on:{click:e.onClick}},[e._v(e._s(e.text))])},W=[],M={name:"PrimaryButton",props:["text","onClick"]},V=M,H=(s("9131"),Object(l["a"])(V,R,W,!1,null,"fa2cd3ac",null)),U=H.exports,Q={name:"Story",components:{CurrentFrame:I,Frames:E,SearchToolbar:B,PrimaryButton:U},methods:{...Object(C["b"])(["setCreationDate"]),onPublish:function(){this.setCreationDate(),this.$router.push({name:"Publish"})}},computed:Object(C["c"])(["currentFrame","storyLength"])},z=Q,J=(s("217f"),s("373f"),Object(l["a"])(z,y,_,!1,null,"7ca78242",null)),G=J.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"viewer",style:e.currentFrame.style},[s("div",{staticClass:"progress-container"},e._l(e.storyLength,(function(t){return s("div",{key:t,staticClass:"progress"},[e.currentFrame.id===t?s("div",{staticClass:"loading"}):e.currentFrame.id>t?s("div",{staticClass:"loaded"}):e._e()])})),0),e.currentFrame.text?s("div",{staticClass:"story-text"},[e._v(e._s(e.currentFrame.text))]):e._e(),e.storyEnd?s("div",{staticClass:"restart-btn",on:{click:e.restartStory}},[e._v(e._s(e.$i18n("btn-restart-story")))]):e._e()])},K=[],Y={name:"StoryViewer",data:()=>({frameDuration:2e3,storyEnd:!1}),computed:Object(C["c"])(["currentFrame","storyLength"]),methods:{...Object(C["b"])(["selectFrame"]),playNextFrame:function(){const e=setTimeout(()=>{this.selectFrame(this.currentFrame.id+1),clearTimeout(e)},this.frameDuration)},restartStory:function(){this.storyEnd=!1,this.selectFrame(1)},endStory:function(){const e=setTimeout(()=>{this.storyEnd=!0,clearTimeout(e)},this.frameDuration)}},beforeMount:function(){this.currentFrame.id>1&&this.restartStory()},mounted:function(){this.currentFrame.id<this.storyLength&&this.playNextFrame()},updated:function(){this.currentFrame.id<this.storyLength?this.playNextFrame():this.storyEnd||this.endStory()}},Z=Y,ee=(s("e247"),Object(l["a"])(Z,X,K,!1,null,"62ff0e00",null)),te=ee.exports,se=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view search-wp"},[i("Navigator",{attrs:{onBack:function(){return e.$router.push({name:"Story"})}}}),i("SearchForm",{attrs:{label:t.$i18n("search-box"),placeholder:t.$i18n("search-box"),query:t.query,loading:t.loading,onInput:t.onInput,onClear:t.onClear}}),i("ListView",{attrs:{items:t.results}})],1)},ie=[],re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"listview"},e._l(e.items,(function(t){return s("div",{key:t.title,staticClass:"item"},[s("router-link",{attrs:{to:t.goto}},[s("div",{staticClass:"img",style:{backgroundImage:"url("+t.thumb+")"}}),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[e._v(e._s(t.title))]),s("div",{staticClass:"description"},[e._v(e._s(t.desc))])])])],1)})),0)},ne=[],ae={name:"ListView",props:["items"]},oe=ae,ce=(s("6675"),Object(l["a"])(oe,re,ne,!1,null,"7d4bd75e",null)),le=ce.exports,ue=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return e.onSubmit(t)}}},[s("div",{staticClass:"label"},[e._v(e._s(e.label))]),s("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"query",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.query},on:{input:e.onInput}}),s("div",{staticClass:"icon"}),e.query?s("div",{staticClass:"close",on:{click:e.onClear}}):e._e(),e.loading?s("div",{staticClass:"loading-bar"}):e._e()])},me=[],de={name:"SearchForm",props:["label","placeholder","query","loading","onInput","onClear"],methods:{onSubmit:e=>e.preventDefault}},he=de,pe=(s("1314"),Object(l["a"])(he,ue,me,!1,null,"125a2cf9",null)),fe=pe.exports,ge=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navigator"},[e.onBack?s("div",{staticClass:"back",on:{click:e.onBack}}):e._e(),e.onNext?s("div",{staticClass:"next",on:{click:e.onNext}}):e._e(),e.info?s("span",{staticClass:"info"},[e._v(e._s(e.info))]):e._e()])},be=[],ve={name:"Navigator",props:["onBack","onNext","info"]},ye=ve,_e=(s("6d78"),Object(l["a"])(ye,ge,be,!1,null,"4b967167",null)),Ce=_e.exports,we={name:"SearchWikipedia",components:{ListView:le,SearchForm:fe,Navigator:Ce},methods:{...Object(C["b"])("search",["search","clear"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()}},computed:Object(C["c"])("search",["loading","results","query"])},Se=we,xe=(s("884e"),Object(l["a"])(Se,se,ie,!1,null,null,null)),ke=xe.exports,Fe=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view search-cm"},[i("Navigator",{attrs:{onBack:function(){return e.$router.push({name:"Story"})},onNext:t.selection.length&&t.editStory,info:t.selection.length&&t.$i18n("search-media-info",t.selection.length)}}),i("SearchForm",{attrs:{label:t.$i18n("search-media"),placeholder:t.$i18n("search-media"),query:t.query,loading:t.loading,onInput:t.onInput,onClear:t.onClear}}),i("ImageListView",{attrs:{items:t.results,onItemSelect:t.onItemSelect,selected:t.selection}})],1)},Ie=[],Te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"imagelistview"},[s("div",{staticClass:"imagelistview__list-wrapper"},[s("div",{staticClass:"imagelistview__list"},e._l(e.items,(function(t){return s("div",{key:t.id,staticClass:"imagelistview__list-image",style:{width:t.width+"px"},attrs:{"data-id":t.id},on:{click:e.onSelect}},[s("img",{attrs:{src:t.thumb,alt:t.title,loading:"lazy"}}),s("div",{class:{checkbox:!0,selected:e.selected.includes(t.id)}})])})),0)])])},$e=[],je={name:"ImageListView",props:["items","onItemSelect","selected"],methods:{onSelect(e){const t=e.target.getAttribute("data-id");this.selected.includes(t)?this.selected.splice(this.selected.indexOf(t),1):this.selected.push(t),this.onItemSelect(this.selected)}}},Oe=je,Le=(s("609d"),Object(l["a"])(Oe,Te,$e,!1,null,"9157c556",null)),Ee=Le.exports,qe={name:"SearchWikipedia",components:{ImageListView:Ee,SearchForm:fe,Navigator:Ce},methods:{...Object(C["b"])("commons",["select","search","clear"]),...Object(C["b"])(["resetFrame"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()},onItemSelect:function(e){this.select(e)},editStory:function(){const e=this.selection.map((e,t)=>{const s=this.results.find(t=>t.id===e);return{id:t+1,img:s.thumb,text:s.desc}});this.resetFrame(e),this.$router.push({name:"Story"})}},computed:Object(C["c"])("commons",["selection","loading","results","query"])},Ae=qe,De=(s("f207"),Object(l["a"])(Ae,Fe,Ie,!1,null,null,null)),Pe=De.exports,Ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view"},[s("Back"),s("div",{staticClass:"article",domProps:{innerHTML:e._s(e.currentArticle)},on:{mouseup:e.onAfterSelect,touchend:e.onAfterSelect}}),s("div",{staticClass:"toolbar",style:e.selectionToolbarStyle},[s("div",{on:{click:e.onUseText}},[e._v("Highlight")]),s("div",{on:{click:e.onDismiss}},[e._v("Clear")])]),e.showImages?s("div",{staticClass:"article-overlay"}):e._e(),e.showImages?s("ArticleImages",{staticClass:"images",attrs:{images:e.articleImages,onSubmit:e.onUseImage}}):e._e()],1)},Be=[],Re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"back",on:{click:function(t){return e.$router.go(-1)}}})},We=[],Me={name:"Back"},Ve=Me,He=(s("8637"),Object(l["a"])(Ve,Re,We,!1,null,"9a398128",null)),Ue=He.exports,Qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"article-images"},[s("div",{staticClass:"article-images-header"},[s("span",[e._v("Select an image")]),e.selectedImage?s("a",{on:{click:function(t){return e.onSubmit(e.selectedImage)}}},[e._v("Next")]):e._e()]),s("div",{staticClass:"article-images-thumbs"},e._l(e.images,(function(t){return s("img",{key:t.src,staticClass:"article-image-thumb",class:{selected:e.selectedImage===t.src},attrs:{src:t.src},on:{click:function(s){return e.selectImage(t.src)}}})})),0)])},ze=[],Je={name:"ArticleImages",props:["images","onSubmit"],data:()=>({selectedImage:null}),methods:{selectImage:function(e){this.selectedImage=e}}},Ge=Je,Xe=(s("c452"),Object(l["a"])(Ge,Qe,ze,!1,null,null,null)),Ke=Xe.exports,Ye={name:"Article",props:["article"],components:{Back:Ue,ArticleImages:Ke},data:()=>({selectionToolbarStyle:{display:"none",position:"absolute"},selectedText:null,showImages:!1,images:[]}),computed:{...Object(C["c"])(["currentArticle"]),articleImages:()=>Array.from(document.querySelector(".article").querySelectorAll("img")).map(e=>({src:e.src}))},methods:{...Object(C["b"])(["fetchArticle","setText","setImg"]),showSelectionToolbar:function(e){this.selectionToolbarStyle.display="flex",this.selectionToolbarStyle.top=e.top-43+"px",this.selectionToolbarStyle.left=e.left+"px"},hideSelectionToolbar:function(){this.selectionToolbarStyle.display="none"},onAfterSelect:function(e){e.preventDefault();const t=document.getSelection(),s=t&&t.getRangeAt(0);s&&!s.collapsed?(this.selectedText=t.toString(),this.showSelectionToolbar(s.getBoundingClientRect())):this.hideSelectionToolbar()},onUseText:function(){this.hideSelectionToolbar(),this.showImages=!0},onUseImage:function(e){this.setText(this.selectedText),this.setImg(e),this.$router.push({name:"Story"})},onDismiss:function(){this.hideSelectionToolbar()}},created:function(){this.fetchArticle(this.article)}},Ze=Ye,et=(s("4935"),Object(l["a"])(Ze,Ne,Be,!1,null,null,null)),tt=et.exports,st=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view publish"},[i("Navigator",{attrs:{onBack:function(){return e.$router.push({name:"Story"})}}}),i("div",{staticClass:"header"},[i("h2",{staticClass:"title"},[t._v(t._s(t.storyInfo.title))]),i("div",{staticClass:"img-preview",style:t.imgSyle})]),i("div",{staticClass:"main"},[i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v(t._s(t.$i18n("publish-date")))]),i("p",{staticClass:"info"},[t._v(t._s(t._f("formatDate")(t.storyInfo.creationDate)))])]),i("div",{staticClass:"item"},[i("label",{staticClass:"tags"},[t._v(t._s(t.$i18n("publish-tags")))]),i("p",{staticClass:"info"},[t._v(t._s(t.$i18n("tags-not-set")))])]),i("div",{staticClass:"item"},[i("label",{staticClass:"Language"},[t._v(t._s(t.$i18n("publish-language")))]),i("p",{staticClass:"info"},[t._v("English")])])]),i("PrimaryButton",{staticClass:"confirm-publish",attrs:{text:t.$i18n("btn-publish-wikistory"),onClick:t.onPublish}})],1)},it=[],rt={name:"Publish",components:{Navigator:Ce,PrimaryButton:U},methods:{onPublish:function(){this.$router.push({name:"StoryViewer"})}},computed:{...Object(C["c"])(["thumbnails","storyInfo"]),imgSyle:function(){return this.thumbnails[0].style}}},nt=rt,at=(s("815d"),Object(l["a"])(nt,st,it,!1,null,"f5d2d8f2",null)),ot=at.exports;i["a"].use(d["a"]);const ct=[{path:"/",name:"Home",component:v},{path:"/story",name:"Story",component:G},{path:"/searchwikipedia",name:"SearchWikipedia",component:ke},{path:"/searchcommons",name:"SearchCommons",component:Pe},{path:"/article/:article",name:"Article",component:tt,props:!0},{path:"/publish",name:"Publish",component:ot},{path:"/viewer",name:"StoryViewer",component:te}],lt=new d["a"]({routes:ct});var ut=lt;const mt=5,dt=e=>e.img?{backgroundImage:"url("+e.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"};var ht={state:{storyTitle:"",creationDate:null,currentFrameId:1,frames:[{id:1,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bandhavgarh_Tigers.jpg/640px-Bandhavgarh_Tigers.jpg",text:"Bandhavgarh Tigers"},{id:2,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/White_Tiger_in_Touroparc.jpg/640px-White_Tiger_in_Touroparc.jpg",text:"White Tiger in Touroparc"},{id:3,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TigerVector.png/640px-TigerVector.png",text:"Taken from the Coat of arms of Vladivostok and modified."}]},mutations:{selectFrame:(e,t)=>e.currentFrameId=t,addFrame:e=>{if(e.frames.length===mt)return;const t=e.frames.length+1;e.frames.push({text:"",img:"",id:t}),e.currentFrameId=t},resetFrame:(e,t)=>{e.currentFrameId=t.length,e.frames=t},setText:(e,t)=>{const s=e.frames.find(t=>t.id===e.currentFrameId);s.text=t},setImg:(e,t)=>{const s=e.frames.find(t=>t.id===e.currentFrameId);s.img=t},setCreationDate:(e,t)=>{e.creationDate=t}},actions:{selectFrame:({commit:e},t)=>{e("selectFrame",t)},addFrame:({commit:e})=>{e("addFrame")},resetFrame:({commit:e},t)=>{e("resetFrame",t)},setText:({commit:e},t)=>{e("setText",t)},setImg:({commit:e},t)=>{e("setImg",t)},setCreationDate:({commit:e})=>{e("setCreationDate",(new Date).getTime())}},getters:{thumbnails:e=>e.frames.map(t=>{const s={...t};return t.id===e.currentFrameId&&(s.selected=!0),s.style=dt(t),s}),currentFrame:e=>{const t=e.frames.find(t=>t.id===e.currentFrameId);return{text:t.text,style:dt(t),noImage:""===t.img,id:e.currentFrameId}},storyLength:e=>e.frames.length,storyInfo:e=>({title:e.frames[0].text,creationDate:e.creationDate})}};let pt=[];const ft=()=>{pt.forEach(e=>e&&e.abort()),pt=[]},gt=(e,t)=>{ft();const s=new XMLHttpRequest;s.open("GET",e),s.send(),s.addEventListener("load",()=>{t(JSON.parse(s.responseText))}),s.addEventListener("error",()=>{t(null,s.status)}),pt.push(s)},bt=new URL(location.href).searchParams.get("lang")||"en",vt=bt;var yt={namespaced:!0,state:{loading:!1,results:[],query:""},mutations:{setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const s=t.trim(),i=`https://${vt}.wikipedia.org/w/rest.php/v1/search/title?q=${s}&limit=10`;if(e("setQuery",t),!s)return ft(),e("setLoading",!1),void e("setResults",[]);e("setLoading",!0),gt(i,t=>{t.pages&&e("setResults",Object.values(t.pages).map(e=>({title:e.title,desc:e.description,thumb:e.thumbnail&&e.thumbnail.url,goto:{name:"Article",params:{article:e.title}}}))),e("setLoading",!1)})},clear:({commit:e})=>{ft(),e("setLoading",!1),e("setResults",[]),e("setQuery","")}},getters:{loading:e=>e.loading,results:e=>e.results,query:e=>e.query}},_t={namespaced:!0,state:{selection:[],loading:!1,results:[],query:""},mutations:{setSelection:(e,t)=>e.selection=t,setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const s=t.trim(),i=`https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&uselang=${bt}&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${s}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=snippet&prop=imageinfo&gsrnamespace=6&iiprop=url%7Cextmetadata&iiurlheight=180&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist&iiextmetadatalanguage=${bt}`;if(e("setQuery",t),!s)return ft(),e("setSelection",[]),e("setLoading",!1),void e("setResults",[]);e("setLoading",!0),gt(i,t=>{if(t.query&&t.query.pages){const s=Object.values(t.query.pages).sort((e,t)=>e.index-t.index);e("setResults",s.map(e=>{const t=e.imageinfo[0],s=t.responsiveUrls&&Object.values(t.responsiveUrls)[0],i=t.extmetadata,r=i&&i.ImageDescription&&i.ImageDescription.value;return{id:e.pageid.toString(),title:e.title,desc:r||e.snippet,thumb:s||t.url,width:t.thumbwidth}}))}e("setSelection",[]),e("setLoading",!1)})},clear:({commit:e})=>{ft(),e("setSelection",[]),e("setLoading",!1),e("setResults",[]),e("setQuery","")},select:({commit:e},t)=>{e("setSelection",t)}},getters:{selection:e=>e.selection,loading:e=>e.loading,results:e=>e.results,query:e=>e.query}};const Ct={"put styles in body":e=>{for(const t of e.head.querySelectorAll('link[rel="stylesheet"]'))e.body.prepend(t)},"remove stuff":e=>{const t=["table",".pcs-collapse-table-container","script"];for(const s of e.querySelectorAll(t.join(",")))s.remove()},"unhide sections":e=>{for(const t of e.querySelectorAll("section"))t.style.display="block"},"remove links":e=>{let t;for(const s of e.querySelectorAll("a"))t=e.createElement("span"),t.innerHTML=s.innerHTML,s.replaceWith(t)},"load images":e=>{for(const t of e.querySelectorAll("figure")){let s=t.querySelector("span[data-src]");if(s){let i=e.createElement("img");i.src=s.getAttribute("data-src"),i.classList.add("pcs-widen-image-override"),i.classList.add("pcs-lazy-load-image-loaded"),t.replaceChildren(i)}else t.remove()}}};var wt={state:{article:{title:"",html:""}},mutations:{setArticle:({article:e},{title:t,html:s})=>{e.title=t,e.html=s}},actions:{fetchArticle:async({commit:e},t)=>{const s=`https://${vt}.wikipedia.org/api/rest_v1/page/mobile-html/${t}`,i=await(await fetch(s)).text(),r=(new DOMParser).parseFromString(i,"text/html");Object.values(Ct).forEach(e=>e(r)),e("setArticle",{title:t,html:r.body.outerHTML})}},getters:{currentArticle:({article:e})=>e.html}};i["a"].use(C["a"]);var St=new C["a"].Store({modules:{story:ht,search:yt,article:wt,commons:_t}});i["a"].directive("focus",{inserted:function(e){e.focus()}}),i["a"].filter("formatDate",(function(e){if(e)return new Date(e).toLocaleString()}));var xt=s("5093"),kt=s.n(xt),Ft={welcome:"Welcome to Wikistories","btn-create":"Create a story","btn-restart-story":"Start again","search-box":"Search Wikipedia","search-media":"Search Media","search-media-info":"$1 selected","wikimedia-commons":"Commons",wikipedia:"Wikipedia","btn-publish":"Publish","btn-publish-wikistory":"Publish Wikistory","publish-date":"Date","publish-tags":"Tags","publish-language":"Language","tags-not-set":"Not set yet"},It={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire","btn-restart-story":"Recommencer","search-box":"Recherche dans Wikipédia","search-media":"Recherche de Média","search-media-info":"$1 {{PLURAL:$1|selectionné|selectionnés}}","wikimedia-commons":"Commons",wikipedia:"Wikipédia","btn-publish":"Publier","btn-publish-wikistory":"Publier la Wikistoire","publish-date":"Date","publish-tags":"Mots clés","publish-language":"Langue","tags-not-set":"Non definies"};i["a"].use(kt.a,{locale:bt,messages:{en:Ft,fr:It}}),i["a"].config.productionTip=!1,new i["a"]({router:ut,store:St,render:e=>e(m)}).$mount("#app")},5801:function(e,t,s){},"5ced":function(e,t,s){},"609d":function(e,t,s){"use strict";s("e47c")},6675:function(e,t,s){"use strict";s("023c")},"6a42":function(e,t,s){"use strict";s("7ec0")},"6d78":function(e,t,s){"use strict";s("2609")},"703d":function(e,t,s){},"7be0":function(e,t,s){},"7ec0":function(e,t,s){},"815d":function(e,t,s){"use strict";s("3749")},"85ec":function(e,t,s){},8637:function(e,t,s){"use strict";s("5801")},"884e":function(e,t,s){"use strict";s("ba7b")},9131:function(e,t,s){"use strict";s("2f7e")},a8b7:function(e,t,s){},adc1:function(e,t,s){},b2bc:function(e,t,s){},b668:function(e,t,s){},ba7b:function(e,t,s){},c452:function(e,t,s){"use strict";s("a8b7")},cccb:function(e,t,s){"use strict";s("5ced")},e247:function(e,t,s){"use strict";s("adc1")},e47c:function(e,t,s){},ef9e:function(e,t,s){},f207:function(e,t,s){"use strict";s("7be0")}});
//# sourceMappingURL=app.aa053a34.js.map