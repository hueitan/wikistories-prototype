(function(e){function t(t){for(var i,n,o=t[0],c=t[1],l=t[2],m=0,d=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},a={app:0},r=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"023c":function(e,t,s){},"034f":function(e,t,s){"use strict";s("85ec")},"04a9":function(e,t,s){},1271:function(e,t,s){},1314:function(e,t,s){"use strict";s("b2bc")},"217f":function(e,t,s){"use strict";s("703d")},2480:function(e,t,s){"use strict";s("ef9e")},2609:function(e,t,s){},"29d4":function(e,t,s){"use strict";s("2f620")},"2f620":function(e,t,s){},"2f7e":function(e,t,s){},4935:function(e,t,s){"use strict";s("04a9")},"515b":function(e,t,s){"use strict";s("c9d8")},"56d7":function(e,t,s){"use strict";s.r(t);var i=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],n={name:"App",methods:{setStylePropertyVh(){const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}},mounted(){this.setStylePropertyVh(),window.addEventListener("resize",this.setStylePropertyVh)},beforeUnmount(){window.removeEventListener("resize",this.setStylePropertyVh)}},o=n,c=(s("034f"),s("2877")),l=Object(c["a"])(o,a,r,!1,null,null,null),u=l.exports,m=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view home"},[s("div",{staticClass:"center"},[s("b",[e._v(e._s(e.$i18n("welcome")))]),s("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[e._v(e._s(e.$i18n("btn-create")))])],1)])},h=[],p={name:"Home"},f=p,b=(s("cccb"),Object(c["a"])(f,d,h,!1,null,null,null)),g=b.exports,v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view story"},[e.canPublish?s("PrimaryButton",{staticClass:"publish-button",attrs:{text:e.$i18n("btn-publish"),onClick:e.onPublish}}):e._e(),s("CurrentFrame"),s("Frames"),s("SearchToolbar")],1)},y=[],_=s("2f62"),C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"current-frame",style:e.currentFrame.style},[e.currentFrame.text?s("p",{domProps:{innerHTML:e._s(e.currentFrame.text)}}):e._e()])},w=[],S={name:"CurrentFrame",computed:Object(_["c"])(["currentFrame"])},k=S,x=(s("6a42"),Object(c["a"])(k,C,w,!1,null,"37499b30",null)),I=x.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"frames"},[e._l(e.thumbnails,(function(t){return s("div",{key:t.id,staticClass:"frame",class:{"selected-frame":t.selected},style:t.style,on:{click:function(s){return e.selectFrame(t.id)}}})})),s("div",{staticClass:"frame btn-add-frame",on:{click:e.addFrame}},[e._v("+")])],2)},$=[],O={name:"Frames",computed:Object(_["c"])(["thumbnails"]),methods:Object(_["b"])(["selectFrame","addFrame"])},j=O,L=(s("2480"),Object(c["a"])(j,F,$,!1,null,null,null)),T=L.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-toolbar"},[s("router-link",{staticClass:"commons logo",attrs:{to:"/searchcommons"}},[e._v(e._s(e.$i18n("wikimedia-commons")))]),s("div",{staticClass:"border"}),s("router-link",{staticClass:"wikipedia logo",attrs:{to:"/searchwikipedia"}},[e._v(e._s(e.$i18n("wikipedia")))])],1)},E=[],q={name:"SearchToolbar"},D=q,A=(s("29d4"),Object(c["a"])(D,P,E,!1,null,"d23ff7cc",null)),N=A.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"primary-button",attrs:{name:"button"},on:{click:e.onClick}},[e._v(e._s(e.text))])},M=[],W={name:"PrimaryButton",props:["text","onClick"]},R=W,V=(s("9131"),Object(c["a"])(R,B,M,!1,null,"fa2cd3ac",null)),H=V.exports,U={name:"Story",components:{CurrentFrame:I,Frames:T,SearchToolbar:N,PrimaryButton:H},methods:{...Object(_["b"])(["setCreationDate"]),onPublish:function(){this.setCreationDate(),this.$router.push({name:"Publish"})}},computed:{...Object(_["c"])(["currentFrame","storyLength","valid"]),canPublish:function(){return this.valid&&this.currentFrame.id===this.storyLength}}},Q=U,z=(s("217f"),s("515b"),Object(c["a"])(Q,v,y,!1,null,"83089be2",null)),J=z.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"viewer",style:e.currentFrame.style},[s("div",{staticClass:"progress-container"},e._l(e.storyLength,(function(t){return s("div",{key:t,staticClass:"progress"},[e.currentFrame.id===t?s("div",{staticClass:"loading"}):e.currentFrame.id>t?s("div",{staticClass:"loaded"}):e._e()])})),0),e.currentFrame.text?s("div",{staticClass:"story-text",domProps:{innerHTML:e._s(e.currentFrame.text)}}):e._e(),e.storyEnd?s("div",{staticClass:"restart-btn",on:{click:e.restartStory}},[e._v(e._s(e.$i18n("btn-restart-story")))]):e._e()])},X=[],K={name:"StoryViewer",data:()=>({frameDuration:2e3,storyEnd:!1}),computed:Object(_["c"])(["currentFrame","storyLength"]),methods:{...Object(_["b"])(["selectFrame"]),playNextFrame:function(){const e=setTimeout(()=>{this.selectFrame(this.currentFrame.id+1),clearTimeout(e)},this.frameDuration)},restartStory:function(){this.storyEnd=!1,this.selectFrame(1)},endStory:function(){const e=setTimeout(()=>{this.storyEnd=!0,clearTimeout(e)},this.frameDuration)}},beforeMount:function(){this.currentFrame.id>1&&this.restartStory()},mounted:function(){this.currentFrame.id<this.storyLength&&this.playNextFrame()},updated:function(){this.currentFrame.id<this.storyLength?this.playNextFrame():this.storyEnd||this.endStory()}},Y=K,Z=(s("e9ba"),Object(c["a"])(Y,G,X,!1,null,"1b626382",null)),ee=Z.exports,te=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view search-wp"},[i("Navigator",{attrs:{onBack:function(){return e.$router.push({name:"Story"})}}}),i("SearchForm",{attrs:{label:t.$i18n("search-box"),placeholder:t.$i18n("search-box"),query:t.query,loading:t.loading,onInput:t.onInput,onClear:t.onClear}}),i("ListView",{attrs:{items:t.results}})],1)},se=[],ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"listview"},e._l(e.items,(function(t){return s("div",{key:t.title,staticClass:"item"},[s("router-link",{attrs:{to:t.goto}},[s("div",{staticClass:"img",style:{backgroundImage:"url("+t.thumb+")"}}),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[e._v(e._s(t.title))]),s("div",{staticClass:"description"},[e._v(e._s(t.desc))])])])],1)})),0)},ae=[],re={name:"ListView",props:["items"]},ne=re,oe=(s("6675"),Object(c["a"])(ne,ie,ae,!1,null,"7d4bd75e",null)),ce=oe.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return e.onSubmit(t)}}},[s("div",{staticClass:"label"},[e._v(e._s(e.label))]),s("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"query",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.query},on:{input:e.onInput}}),s("div",{staticClass:"icon"}),e.query?s("div",{staticClass:"close",on:{click:e.onClear}}):e._e(),e.loading?s("div",{staticClass:"loading-bar"}):e._e()])},ue=[],me={name:"SearchForm",props:["label","placeholder","query","loading","onInput","onClear"],methods:{onSubmit:e=>e.preventDefault}},de=me,he=(s("1314"),Object(c["a"])(de,le,ue,!1,null,"125a2cf9",null)),pe=he.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navigator"},[e.onBack?s("div",{staticClass:"back",on:{click:e.onBack}}):e._e(),e.onNext?s("div",{staticClass:"next",on:{click:e.onNext}}):e._e(),e.info?s("span",{staticClass:"info"},[e._v(e._s(e.info))]):e._e()])},be=[],ge={name:"Navigator",props:["onBack","onNext","info"]},ve=ge,ye=(s("6d78"),Object(c["a"])(ve,fe,be,!1,null,"4b967167",null)),_e=ye.exports,Ce={name:"SearchWikipedia",components:{ListView:ce,SearchForm:pe,Navigator:_e},methods:{...Object(_["b"])("search",["search","clear"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()}},computed:Object(_["c"])("search",["loading","results","query"])},we=Ce,Se=(s("884e"),Object(c["a"])(we,te,se,!1,null,null,null)),ke=Se.exports,xe=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view search-cm"},[i("Navigator",{attrs:{onBack:function(){return e.$router.push({name:"Story"})},onNext:t.selection.length&&t.editStory,info:t.selection.length&&t.$i18n("search-media-info",t.selection.length)}}),i("SearchForm",{attrs:{label:t.$i18n("search-media"),placeholder:t.$i18n("search-media"),query:t.query,loading:t.loading,onInput:t.onInput,onClear:t.onClear}}),i("ImageListView",{attrs:{items:t.results,onItemSelect:t.onItemSelect,selected:t.selection}})],1)},Ie=[],Fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"imagelistview"},[s("div",{staticClass:"imagelistview__list-wrapper"},[s("div",{staticClass:"imagelistview__list"},e._l(e.items,(function(t){return s("div",{key:t.id,staticClass:"imagelistview__list-image",style:{width:t.width+"px"},attrs:{"data-id":t.id},on:{click:e.onSelect}},[s("img",{attrs:{src:t.thumb,alt:t.title,loading:"lazy"}}),s("div",{class:{checkbox:!0,selected:e.selected.includes(t.id)}})])})),0)])])},$e=[],Oe={name:"ImageListView",props:["items","onItemSelect","selected"],methods:{onSelect(e){const t=e.target.getAttribute("data-id");this.selected.includes(t)?this.selected.splice(this.selected.indexOf(t),1):this.selected.push(t),this.onItemSelect(this.selected)}}},je=Oe,Le=(s("609d"),Object(c["a"])(je,Fe,$e,!1,null,"9157c556",null)),Te=Le.exports,Pe={name:"SearchWikipedia",components:{ImageListView:Te,SearchForm:pe,Navigator:_e},methods:{...Object(_["b"])("commons",["select","search","clear"]),...Object(_["b"])(["resetFrame"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()},onItemSelect:function(e){this.select(e)},editStory:function(){const e=this.selection.map((e,t)=>{const s=this.results.find(t=>t.id===e);return{id:t+1,img:s.thumb,text:s.desc}});this.resetFrame(e),this.$router.push({name:"Story"})}},computed:Object(_["c"])("commons",["selection","loading","results","query"])},Ee=Pe,qe=(s("f207"),Object(c["a"])(Ee,xe,Ie,!1,null,null,null)),De=qe.exports,Ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view"},[s("Back"),s("div",{staticClass:"article",domProps:{innerHTML:e._s(e.currentArticle)},on:{mouseup:e.onAfterSelect,touchend:e.onAfterSelect}}),s("div",{staticClass:"toolbar",style:e.selectionToolbarStyle},[s("div",{on:{click:e.onUseText}},[e._v("Highlight")]),s("div",{on:{click:e.onDismiss}},[e._v("Clear")])]),e.showImages?s("div",{staticClass:"article-overlay",on:{click:e.dismissImages}}):e._e(),e.showImages?s("ArticleImages",{staticClass:"images",attrs:{images:e.articleImages,onSubmit:e.onUseImage}}):e._e()],1)},Ne=[],Be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"back",on:{click:function(t){return e.$router.go(-1)}}})},Me=[],We={name:"Back"},Re=We,Ve=(s("8637"),Object(c["a"])(Re,Be,Me,!1,null,"9a398128",null)),He=Ve.exports,Ue=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"article-images"},[s("div",{staticClass:"article-images-header"},[s("span",[e._v("Select an image")]),e.selectedImage?s("a",{on:{click:function(t){return e.onSubmit(e.selectedImage)}}},[e._v("Next")]):e._e()]),s("div",{staticClass:"article-images-thumbs"},e._l(e.images,(function(t){return s("img",{key:t.src,staticClass:"article-image-thumb",class:{selected:e.selectedImage===t.src},attrs:{src:t.src},on:{click:function(s){return e.selectImage(t.src)}}})})),0)])},Qe=[],ze={name:"ArticleImages",props:["images","onSubmit"],data:()=>({selectedImage:null}),methods:{selectImage:function(e){this.selectedImage=e}}},Je=ze,Ge=(s("c452"),Object(c["a"])(Je,Ue,Qe,!1,null,null,null)),Xe=Ge.exports,Ke={name:"Article",props:["article"],components:{Back:He,ArticleImages:Xe},data:()=>({selectionToolbarStyle:{display:"none",position:"absolute"},selectedText:null,showImages:!1,images:[]}),computed:{...Object(_["c"])(["currentArticle"]),articleImages:()=>Array.from(document.querySelector(".article").querySelectorAll("img")).map(e=>({src:e.src}))},methods:{...Object(_["b"])(["fetchArticle","setText","setImg"]),showSelectionToolbar:function(){this.selectionToolbarStyle.display="flex"},hideSelectionToolbar:function(){this.selectionToolbarStyle.display="none"},onAfterSelect:function(e){e.preventDefault();const t=document.getSelection(),s=t&&t.getRangeAt(0);s&&!s.collapsed?(this.selectedText=t.toString(),this.showSelectionToolbar()):this.hideSelectionToolbar()},onUseText:function(){this.hideSelectionToolbar(),this.showImages=!0},onUseImage:function(e){this.setText(this.selectedText),this.setImg(e),this.$router.push({name:"Story"})},dismissImages:function(){this.showImages=!1},onDismiss:function(){this.hideSelectionToolbar()}},created:function(){this.fetchArticle(this.article)}},Ye=Ke,Ze=(s("4935"),Object(c["a"])(Ye,Ae,Ne,!1,null,null,null)),et=Ze.exports,tt=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view publish"},[i("Navigator",{attrs:{onBack:function(){return e.$router.push({name:"Story"})}}}),i("div",{staticClass:"header"},[i("h2",{staticClass:"title",domProps:{innerHTML:t._s(t.storyInfo.title)}}),i("div",{staticClass:"img-preview",style:t.imgSyle})]),i("div",{staticClass:"main"},[i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v(t._s(t.$i18n("publish-date")))]),i("p",{staticClass:"info"},[t._v(t._s(t._f("formatDate")(t.storyInfo.creationDate)))])]),i("div",{staticClass:"item"},[i("label",{staticClass:"tags"},[t._v(t._s(t.$i18n("publish-tags")))]),i("p",{staticClass:"info"},[t._v(t._s(t.$i18n("tags-not-set")))])]),i("div",{staticClass:"item"},[i("label",{staticClass:"Language"},[t._v(t._s(t.$i18n("publish-language")))]),i("p",{staticClass:"info"},[t._v("English")])])]),i("PrimaryButton",{staticClass:"confirm-publish",attrs:{text:t.$i18n("btn-publish-wikistory"),onClick:t.onPublish}})],1)},st=[],it={name:"Publish",components:{Navigator:_e,PrimaryButton:H},methods:{onPublish:function(){this.$router.push({name:"StoryViewer"})}},computed:{...Object(_["c"])(["thumbnails","storyInfo"]),imgSyle:function(){return this.thumbnails[0].style}}},at=it,rt=(s("d79a"),Object(c["a"])(at,tt,st,!1,null,"5b84f53a",null)),nt=rt.exports;i["a"].use(m["a"]);const ot=[{path:"/",name:"Home",component:g},{path:"/story",name:"Story",component:J},{path:"/searchwikipedia",name:"SearchWikipedia",component:ke},{path:"/searchcommons",name:"SearchCommons",component:De},{path:"/article/:article",name:"Article",component:et,props:!0},{path:"/publish",name:"Publish",component:nt},{path:"/viewer",name:"StoryViewer",component:ee}],ct=new m["a"]({routes:ot});var lt=ct;const ut=5,mt=e=>e.img?{backgroundImage:"url("+e.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(338.27deg, #0BD564 -70.53%, #3366CC 71.84%)"};var dt={state:{storyTitle:"",creationDate:null,currentFrameId:1,frames:[{id:1,img:null,text:""}]},mutations:{selectFrame:(e,t)=>e.currentFrameId=t,addFrame:e=>{if(e.frames.length===ut)return;const t=e.frames.length+1;e.frames.push({text:"",img:"",id:t}),e.currentFrameId=t},resetFrame:(e,t)=>{e.currentFrameId=t.length,e.frames=t},setText:(e,t)=>{const s=e.frames.find(t=>t.id===e.currentFrameId);s.text=t},setImg:(e,t)=>{const s=e.frames.find(t=>t.id===e.currentFrameId);s.img=t},setCreationDate:(e,t)=>{e.creationDate=t}},actions:{selectFrame:({commit:e},t)=>{e("selectFrame",t)},addFrame:({commit:e})=>{e("addFrame")},resetFrame:({commit:e},t)=>{e("resetFrame",t)},setText:({commit:e},t)=>{e("setText",t)},setImg:({commit:e},t)=>{e("setImg",t)},setCreationDate:({commit:e})=>{e("setCreationDate",(new Date).getTime())}},getters:{thumbnails:e=>e.frames.map(t=>{const s={...t};return t.id===e.currentFrameId&&(s.selected=!0),s.style=mt(t),s}),currentFrame:e=>{const t=e.frames.find(t=>t.id===e.currentFrameId);return{text:t.text,style:mt(t),noImage:""===t.img,id:e.currentFrameId}},storyLength:e=>e.frames.length,storyInfo:e=>({title:e.frames[0].text,creationDate:e.creationDate}),valid:e=>e.frames.length>=2&&e.frames.every(e=>e.img&&e.text)}};let ht=[];const pt=()=>{ht.forEach(e=>e&&e.abort()),ht=[]},ft=(e,t)=>{pt();const s=new XMLHttpRequest;s.open("GET",e),s.send(),s.addEventListener("load",()=>{t(JSON.parse(s.responseText))}),s.addEventListener("error",()=>{t(null,s.status)}),ht.push(s)},bt=new URL(location.href).searchParams.get("lang")||"en",gt=bt;var vt={namespaced:!0,state:{loading:!1,results:[],query:""},mutations:{setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const s=t.trim(),i=`https://${gt}.wikipedia.org/w/rest.php/v1/search/title?q=${s}&limit=10`;if(e("setQuery",t),!s)return pt(),e("setLoading",!1),void e("setResults",[]);e("setLoading",!0),ft(i,t=>{t.pages&&e("setResults",Object.values(t.pages).map(e=>({title:e.title,desc:e.description,thumb:e.thumbnail&&e.thumbnail.url,goto:{name:"Article",params:{article:e.title}}}))),e("setLoading",!1)})},clear:({commit:e})=>{pt(),e("setLoading",!1),e("setResults",[]),e("setQuery","")}},getters:{loading:e=>e.loading,results:e=>e.results,query:e=>e.query}},yt={namespaced:!0,state:{selection:[],loading:!1,results:[],query:""},mutations:{setSelection:(e,t)=>e.selection=t,setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const s=t.trim(),i=`https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&uselang=${bt}&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${s}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=snippet&prop=imageinfo&gsrnamespace=6&iiprop=url%7Cextmetadata&iiurlheight=180&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist&iiextmetadatalanguage=${bt}`;if(e("setQuery",t),!s)return pt(),e("setSelection",[]),e("setLoading",!1),void e("setResults",[]);e("setLoading",!0),ft(i,t=>{if(t.query&&t.query.pages){const s=Object.values(t.query.pages).sort((e,t)=>e.index-t.index);e("setResults",s.map(e=>{const t=e.imageinfo[0],s=t.responsiveUrls&&Object.values(t.responsiveUrls)[0],i=t.extmetadata,a=i&&i.ImageDescription&&i.ImageDescription.value;return{id:e.pageid.toString(),title:e.title,desc:a||e.snippet,thumb:s||t.url,width:t.thumbwidth}}))}e("setSelection",[]),e("setLoading",!1)})},clear:({commit:e})=>{pt(),e("setSelection",[]),e("setLoading",!1),e("setResults",[]),e("setQuery","")},select:({commit:e},t)=>{e("setSelection",t)}},getters:{selection:e=>e.selection,loading:e=>e.loading,results:e=>e.results,query:e=>e.query}};const _t={"put styles in body":e=>{for(const t of e.head.querySelectorAll('link[rel="stylesheet"]'))e.body.prepend(t)},"remove stuff":e=>{const t=["table",".pcs-collapse-table-container","script"];for(const s of e.querySelectorAll(t.join(",")))s.remove()},"unhide sections":e=>{for(const t of e.querySelectorAll("section"))t.style.display="block"},"remove links":e=>{let t;for(const s of e.querySelectorAll("a"))t=e.createElement("span"),t.innerHTML=s.innerHTML,s.replaceWith(t)},"load images":e=>{for(const t of e.querySelectorAll("figure")){let s=t.querySelector("span[data-src]");if(s){let i=e.createElement("img");i.src=s.getAttribute("data-src"),i.classList.add("pcs-widen-image-override"),i.classList.add("pcs-lazy-load-image-loaded"),t.replaceChildren(i)}else t.remove()}}};var Ct={state:{article:{title:"",html:""}},mutations:{setArticle:({article:e},{title:t,html:s})=>{e.title=t,e.html=s}},actions:{fetchArticle:async({commit:e},t)=>{const s=`https://${gt}.wikipedia.org/api/rest_v1/page/mobile-html/${t}`,i=await(await fetch(s)).text(),a=(new DOMParser).parseFromString(i,"text/html");Object.values(_t).forEach(e=>e(a)),e("setArticle",{title:t,html:a.body.outerHTML})}},getters:{currentArticle:({article:e})=>e.html}};i["a"].use(_["a"]);var wt=new _["a"].Store({modules:{story:dt,search:vt,article:Ct,commons:yt}});i["a"].directive("focus",{inserted:function(e){e.focus()}}),i["a"].filter("formatDate",(function(e){if(e)return new Date(e).toLocaleString()}));var St=s("5093"),kt=s.n(St),xt={welcome:"Welcome to Wikistories","btn-create":"Create a story","btn-restart-story":"Start again","search-box":"Search Wikipedia","search-media":"Search Media","search-media-info":"$1 selected","wikimedia-commons":"Commons",wikipedia:"Wikipedia","btn-publish":"Publish","btn-publish-wikistory":"Publish Wikistory","publish-date":"Date","publish-tags":"Tags","publish-language":"Language","tags-not-set":"Not set yet"},It={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire","btn-restart-story":"Recommencer","search-box":"Recherche dans Wikipédia","search-media":"Recherche de Média","search-media-info":"$1 {{PLURAL:$1|selectionné|selectionnés}}","wikimedia-commons":"Commons",wikipedia:"Wikipédia","btn-publish":"Publier","btn-publish-wikistory":"Publier la Wikistoire","publish-date":"Date","publish-tags":"Mots clés","publish-language":"Langue","tags-not-set":"Non definies"},Ft={welcome:"Welcome to Wikistories","btn-create":"Buat cerita","btn-restart-story":"mulai dari awal","search-box":"Cari di wikipedia","search-media":"Cari media","search-media-info":"$1 dipilih","wikimedia-commons":"Commons",wikipedia:"Wikipedia","btn-publish":"Terbitkan","btn-publish-wikistory":"Publikasikan Wikistory","publish-date":"Tanggal","publish-tags":"Tags","publish-language":"Bahasa","tags-not-set":"Belum disetel"};i["a"].use(kt.a,{locale:bt,messages:{en:xt,fr:It,id:Ft}}),i["a"].config.productionTip=!1,new i["a"]({router:lt,store:wt,render:e=>e(u)}).$mount("#app")},5801:function(e,t,s){},"5ced":function(e,t,s){},"609d":function(e,t,s){"use strict";s("e47c")},6675:function(e,t,s){"use strict";s("023c")},"6a42":function(e,t,s){"use strict";s("7ec0")},"6d78":function(e,t,s){"use strict";s("2609")},"703d":function(e,t,s){},"7be0":function(e,t,s){},"7ec0":function(e,t,s){},"85ec":function(e,t,s){},8637:function(e,t,s){"use strict";s("5801")},"884e":function(e,t,s){"use strict";s("ba7b")},9131:function(e,t,s){"use strict";s("2f7e")},a8b7:function(e,t,s){},b2bc:function(e,t,s){},b861:function(e,t,s){},ba7b:function(e,t,s){},c452:function(e,t,s){"use strict";s("a8b7")},c9d8:function(e,t,s){},cccb:function(e,t,s){"use strict";s("5ced")},d79a:function(e,t,s){"use strict";s("1271")},e47c:function(e,t,s){},e9ba:function(e,t,s){"use strict";s("b861")},ef9e:function(e,t,s){},f207:function(e,t,s){"use strict";s("7be0")}});
//# sourceMappingURL=app.d550a028.js.map