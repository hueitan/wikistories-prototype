(function(e){function t(t){for(var i,n,o=t[0],c=t[1],l=t[2],m=0,d=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},r={app:0},a=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"023c":function(e,t,s){},"034f":function(e,t,s){"use strict";s("85ec")},"04a9":function(e,t,s){},"146d":function(e,t,s){},"175a":function(e,t,s){},"217f":function(e,t,s){"use strict";s("703d")},2480:function(e,t,s){"use strict";s("ef9e")},2564:function(e,t,s){"use strict";s("8ff2")},"2a76":function(e,t,s){"use strict";s("146d")},"2f7e":function(e,t,s){},"3a9f":function(e,t,s){},4935:function(e,t,s){"use strict";s("04a9")},"56d7":function(e,t,s){"use strict";s.r(t);var i=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],n={name:"App",methods:{setStylePropertyVh(){const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}},mounted(){this.setStylePropertyVh(),window.addEventListener("resize",this.setStylePropertyVh)},beforeUnmount(){window.removeEventListener("resize",this.setStylePropertyVh)}},o=n,c=(s("034f"),s("2877")),l=Object(c["a"])(o,r,a,!1,null,null,null),u=l.exports,m=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view home"},[s("div",{staticClass:"center"},[s("b",[e._v(e._s(e.$i18n("welcome")))]),s("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[e._v(e._s(e.$i18n("btn-create")))])],1)])},h=[],p={name:"Home"},f=p,g=(s("cccb"),Object(c["a"])(f,d,h,!1,null,null,null)),b=g.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view story"},[e.canPublish?s("PrimaryButton",{staticClass:"publish-button",attrs:{text:e.$i18n("btn-next"),onClick:e.onPublish}}):e._e(),s("CurrentFrame"),s("Frames"),s("SearchToolbar")],1)},v=[],S=s("2f62"),w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"current-frame",style:e.currentFrame.style},[e.currentFrame.text?s("p",{domProps:{innerHTML:e._s(e.currentFrame.text)}}):e._e()])},C=[],_={name:"CurrentFrame",computed:Object(S["c"])(["currentFrame"])},k=_,x=(s("67ec"),Object(c["a"])(k,w,C,!1,null,"4d80befb",null)),I=x.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"frames"},[e._l(e.thumbnails,(function(t){return s("div",{key:t.id,staticClass:"frame",class:{"selected-frame":t.selected},style:t.style,on:{click:function(s){return e.selectFrame(t.id)}}})})),s("div",{staticClass:"frame btn-add-frame",on:{click:e.addFrame}},[e._v("+")])],2)},j=[],$={name:"Frames",computed:Object(S["c"])(["thumbnails"]),methods:Object(S["b"])(["selectFrame","addFrame"])},F=$,L=(s("2480"),Object(c["a"])(F,O,j,!1,null,null,null)),T=L.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-toolbar"},[s("router-link",{staticClass:"commons logo",attrs:{to:"/searchcommons"}},[e._v(e._s(e.$i18n("wikimedia-commons")))]),s("div",{staticClass:"border"}),s("router-link",{staticClass:"wikipedia logo",attrs:{to:"/searchwikipedia"}},[e._v(e._s(e.$i18n("wikipedia")))]),s("div",{staticClass:"border"}),s("router-link",{staticClass:"wikipedia logo",attrs:{to:"/searchwikistories"}},[e._v(e._s(e.$i18n("wikistories")))])],1)},E=[],q={name:"SearchToolbar"},D=q,A=(s("5807"),Object(c["a"])(D,P,E,!1,null,"9bc01c7a",null)),R=A.exports,W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"primary-button",attrs:{name:"button"},on:{click:e.onClick}},[e._v(e._s(e.text))])},B=[],N={name:"PrimaryButton",props:["text","onClick"]},M=N,V=(s("9131"),Object(c["a"])(M,W,B,!1,null,"fa2cd3ac",null)),H=V.exports,U=s("260b"),Q=s("e71f");const z={STORIES:"stories",STORY:"story"},Y={apiKey:"AIzaSyBj9x8w1xHN6dXsyIGPR10y-5xhWcmwfrA",authDomain:"fir-a342c.firebaseapp.com",projectId:"fir-a342c",storageBucket:"fir-a342c.appspot.com",messagingSenderId:"252826836190",appId:"1:252826836190:web:f596bb993da3380b26f64f"},J=Object(U["a"])(Y),G=Object(Q["e"])(J),X=e=>{const t=ee(),s=Object(Q["b"])(G,z.STORIES,t),i=Object(Q["h"])(G);let r=[];return e.map(e=>{const s=ee(),a=Object(Q["b"])(G,z.STORY,s);i.set(a,{...e,id:[t],keyword:te(e.text).split(" ")},{merge:!0}),r.push(s)}),i.set(s,{list:r},{merge:!0}),i.commit(),t},K=async e=>{const t=Object(Q["b"])(G,z.STORIES,e),s=await Object(Q["c"])(t),i=[];if(s.exists()){const t=Object(Q["f"])(Object(Q["a"])(G,z.STORY),Object(Q["g"])("id","array-contains",e)),s=await Object(Q["d"])(t);let r=1;s.forEach(e=>{const{img:t,text:s}=e.data();i.push({img:t,text:s,id:r++})})}return i},Z=async e=>{const t=Object(Q["f"])(Object(Q["a"])(G,z.STORY),Object(Q["g"])("keyword","array-contains",e)),s=await Object(Q["d"])(t),i=[];return s.empty||s.forEach(e=>{const{img:t,text:s,id:r}=e.data();i.push({img:t,text:s,id:r})}),i};function ee(e=6){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let s="";for(let i=0;i<e;i++)s+=t.charAt(Math.floor(Math.random()*t.length));return s}function te(e){return e.replace(/[[\]~&/\\#,+()$~%.'":*?<>{}!@^]/g,"").toLowerCase()}var se={name:"Story",components:{CurrentFrame:I,Frames:T,SearchToolbar:R,PrimaryButton:H},methods:{...Object(S["b"])(["setCreationDate","resetFrame"]),onPublish:function(){this.setCreationDate(),this.$router.push({name:"Publish"})}},created:function(){const e=this.$route.params.id;e&&K(e).then(e=>{e.length&&this.resetFrame(e)})},computed:{...Object(S["c"])(["currentFrame","storyLength","valid"]),canPublish:function(){return this.valid&&this.currentFrame.id===this.storyLength}}},ie=se,re=(s("217f"),s("2a76"),Object(c["a"])(ie,y,v,!1,null,"5c3e5766",null)),ae=re.exports,ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.valid?s("div",{staticClass:"viewer",style:e.currentFrame.style},[s("div",{staticClass:"progress-container"},e._l(e.storyLength,(function(t){return s("div",{key:t,staticClass:"progress"},[e.currentFrame.id===t?s("div",{staticClass:"loading"}):e.currentFrame.id>t?s("div",{staticClass:"loaded"}):e._e()])})),0),e.canShareStory()?s("div",{staticClass:"share-btn",on:{click:e.shareStory}}):e._e(),e.currentFrame.text?s("div",{staticClass:"story-text",domProps:{innerHTML:e._s(e.currentFrame.text)}}):e._e(),e.storyEnd?s("div",{staticClass:"restart-btn",on:{click:e.restartStory}},[e._v(e._s(e.$i18n("btn-restart-story")))]):e._e()]):e._e()},oe=[],ce={name:"StoryViewer",data:()=>({frameDuration:2e3,storyEnd:!1}),computed:Object(S["c"])(["currentFrame","storyInfo","storyLength","valid"]),methods:{...Object(S["b"])(["selectFrame","resetFrame"]),playNextFrame:function(){const e=setTimeout(()=>{this.selectFrame(this.currentFrame.id+1),clearTimeout(e)},this.frameDuration)},restartStory:function(){this.storyEnd=!1,this.selectFrame(1)},endStory:function(){const e=setTimeout(()=>{this.storyEnd=!0,clearTimeout(e)},this.frameDuration)},canShareStory:function(){return"https:"===location.protocol&&this.$route.params.id&&navigator.share},shareStory:function(){const e={title:"Wikistories",text:"Share this story",url:location.href};navigator.share(e)}},created:function(){const e=this.$route.params.id;e&&e!==this.storyInfo.id?(this.resetFrame([]),K(e).then(e=>{e.length&&(this.resetFrame(e),this.restartStory())})):this.restartStory()},beforeMount:function(){this.currentFrame.id>1&&this.restartStory()},mounted:function(){this.currentFrame.id<this.storyLength&&this.playNextFrame()},updated:function(){this.currentFrame.id<this.storyLength?this.playNextFrame():this.storyEnd||this.endStory()}},le=ce,ue=(s("f638"),Object(c["a"])(le,ne,oe,!1,null,"95f265d4",null)),me=ue.exports,de=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view search-wp"},[i("Navigator",{attrs:{onBack:function(){return e.$router.push({name:"Story"})}}}),i("SearchForm",{attrs:{label:t.$i18n("search-box"),placeholder:t.$i18n("search-box"),query:t.query,loading:t.loading,onInput:t.onInput,onClear:t.onClear}}),i("ListView",{attrs:{items:t.results}})],1)},he=[],pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"listview"},e._l(e.items,(function(t){return s("div",{key:t.title,staticClass:"item"},[s("router-link",{attrs:{to:t.goto}},[s("div",{staticClass:"img",style:{backgroundImage:"url("+t.thumb+")"}}),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[e._v(e._s(t.title))]),s("div",{staticClass:"description"},[e._v(e._s(t.desc))])])])],1)})),0)},fe=[],ge={name:"ListView",props:["items"]},be=ge,ye=(s("6675"),Object(c["a"])(be,pe,fe,!1,null,"7d4bd75e",null)),ve=ye.exports,Se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return e.onSubmit(t)}}},[s("div",{staticClass:"label"},[e._v(e._s(e.label))]),s("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"query",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.query},on:{input:e.onInput}}),s("div",{staticClass:"icon"}),e.query?s("div",{staticClass:"close",on:{click:e.onClear}}):e._e(),e.loading?s("div",{staticClass:"loading-bar"}):e._e()])},we=[],Ce={name:"SearchForm",props:["label","placeholder","query","loading","onInput","onClear"],methods:{onSubmit:e=>e.preventDefault}},_e=Ce,ke=(s("e15c"),Object(c["a"])(_e,Se,we,!1,null,"0d3ec56b",null)),xe=ke.exports,Ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navigator"},[e.onBack?s("div",{staticClass:"back",on:{click:e.onBack}}):e._e(),e.onNext?s("div",{staticClass:"next",on:{click:e.onNext}},[e._v(e._s(e.$i18n("btn-next")))]):e._e(),e.info?s("span",{staticClass:"info"},[e._v(e._s(e.info))]):e._e()])},Oe=[],je={name:"Navigator",props:["onBack","onNext","info"]},$e=je,Fe=(s("62fb"),Object(c["a"])($e,Ie,Oe,!1,null,"1cd70b57",null)),Le=Fe.exports,Te={name:"SearchWikipedia",components:{ListView:ve,SearchForm:xe,Navigator:Le},methods:{...Object(S["b"])("search",["search","clear"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()}},computed:Object(S["c"])("search",["loading","results","query"])},Pe=Te,Ee=(s("884e"),Object(c["a"])(Pe,de,he,!1,null,null,null)),qe=Ee.exports,De=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view search-wp"},[i("Navigator",{attrs:{onBack:function(){return e.$router.push({name:"Story"})}}}),i("SearchForm",{attrs:{label:t.$i18n("search-stories"),placeholder:t.$i18n("search-stories"),query:t.query,loading:t.loading,onInput:t.onInput,onClear:t.onClear}}),i("ListView",{attrs:{items:t.results}})],1)},Ae=[],Re={name:"SearchStories",components:{ListView:ve,SearchForm:xe,Navigator:Le},methods:{...Object(S["b"])("stories",["search","clear"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()}},computed:Object(S["c"])("stories",["loading","results","query"])},We=Re,Be=(s("dbbf"),Object(c["a"])(We,De,Ae,!1,null,null,null)),Ne=Be.exports,Me=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view search-cm"},[i("Navigator",{attrs:{onBack:function(){return e.$router.push({name:"Story"})},onNext:t.selection.length&&t.editStory,info:t.selection.length&&t.$i18n("search-media-info",t.selection.length)}}),i("SearchForm",{attrs:{label:t.$i18n("search-media"),placeholder:t.$i18n("search-media"),query:t.query,loading:t.loading,onInput:t.onInput,onClear:t.onClear}}),i("ImageListView",{attrs:{items:t.results,onItemSelect:t.onItemSelect,selected:t.selection}})],1)},Ve=[],He=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"imagelistview"},[s("div",{staticClass:"imagelistview__list-wrapper"},[s("div",{staticClass:"imagelistview__list"},e._l(e.items,(function(t){return s("div",{key:t.id,staticClass:"imagelistview__list-image",style:{width:t.width+"px"},attrs:{"data-id":t.id},on:{click:e.onSelect}},[s("img",{attrs:{src:t.thumb,alt:t.title,loading:"lazy"}}),s("div",{class:{checkbox:!0,selected:e.selected.includes(t.id)}})])})),0)])])},Ue=[],Qe={name:"ImageListView",props:["items","onItemSelect","selected"],methods:{onSelect(e){const t=e.target.getAttribute("data-id")||e.target.parentElement.getAttribute("data-id");this.selected.includes(t)?this.selected.splice(this.selected.indexOf(t),1):this.selected.push(t),this.onItemSelect(this.selected)}}},ze=Qe,Ye=(s("b78b"),Object(c["a"])(ze,He,Ue,!1,null,"0bcf1f81",null)),Je=Ye.exports,Ge={name:"SearchWikipedia",components:{ImageListView:Je,SearchForm:xe,Navigator:Le},methods:{...Object(S["b"])("commons",["select","search","clear"]),...Object(S["b"])(["resetFrame"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()},onItemSelect:function(e){this.select(e)},editStory:function(){const e=this.selection.map((e,t)=>{const s=this.results.find(t=>t.id===e);return{id:t+1,img:s.thumb,text:s.desc}});this.resetFrame(e),this.$router.push({name:"Story"})}},computed:Object(S["c"])("commons",["selection","loading","results","query"])},Xe=Ge,Ke=(s("f207"),Object(c["a"])(Xe,Me,Ve,!1,null,null,null)),Ze=Ke.exports,et=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view"},[s("Back"),s("div",{staticClass:"article",domProps:{innerHTML:e._s(e.currentArticle)}}),s("div",{staticClass:"toolbar",style:e.selectionToolbarStyle},[s("div",{on:{mousedown:e.onUseText}},[e._v(e._s(e.$i18n("btn-highlight")))]),s("div",{on:{click:e.onDismiss}},[e._v(e._s(e.$i18n("btn-clear")))])]),e.showImages?s("div",{staticClass:"article-overlay",on:{click:e.dismissImages}}):e._e(),e.showImages?s("ArticleImages",{staticClass:"images",attrs:{images:e.articleImages,onSubmit:e.onUseImage}}):e._e()],1)},tt=[],st=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"back",on:{click:function(t){return e.$router.go(-1)}}})},it=[],rt={name:"Back"},at=rt,nt=(s("8637"),Object(c["a"])(at,st,it,!1,null,"9a398128",null)),ot=nt.exports,ct=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"article-images"},[s("div",{staticClass:"article-images-header"},[s("span",[e._v(e._s(e.$i18n("btn-select-image")))]),e.selectedImage?s("a",{on:{click:function(t){return e.onSubmit(e.selectedImage)}}},[e._v(e._s(e.$i18n("btn-next")))]):e._e()]),s("div",{staticClass:"article-images-thumbs"},e._l(e.images,(function(t){return s("img",{key:t.src,staticClass:"article-image-thumb",class:{selected:e.selectedImage===t.src},attrs:{src:t.src},on:{click:function(s){return e.selectImage(t.src)}}})})),0)])},lt=[],ut={name:"ArticleImages",props:["images","onSubmit"],data:()=>({selectedImage:null}),methods:{selectImage:function(e){this.selectedImage=e}}},mt=ut,dt=(s("c452"),Object(c["a"])(mt,ct,lt,!1,null,null,null)),ht=dt.exports,pt={name:"Article",props:["article"],components:{Back:ot,ArticleImages:ht},data:()=>({selectionToolbarStyle:{display:"none",position:"absolute"},selectedText:null,showImages:!1,images:[]}),computed:{...Object(S["c"])(["currentArticle"]),articleImages:()=>Array.from(document.querySelector(".article").querySelectorAll("img")).map(e=>({src:e.src}))},methods:{...Object(S["b"])(["fetchArticle","setText","setImg"]),setToolbarDisplay:function(e){this.selectionToolbarStyle.display!==e&&(this.selectionToolbarStyle.display=e)},showSelectionToolbar:function(){this.setToolbarDisplay("flex")},hideSelectionToolbar:function(){this.setToolbarDisplay("none")},onSelectionChange:function(){const e=document.getSelection();e.isCollapsed?this.hideSelectionToolbar():(this.selectedText=e.toString(),this.showSelectionToolbar())},onUseText:function(e){e.preventDefault(),this.hideSelectionToolbar(),this.showImages=!0},onUseImage:function(e){this.setText(this.selectedText),this.setImg(e),this.$router.push({name:"Story"})},dismissImages:function(){this.showImages=!1},onDismiss:function(){this.hideSelectionToolbar()}},created:function(){this.fetchArticle(this.article)},mounted(){document.addEventListener("selectionchange",this.onSelectionChange)},beforeUnmount(){document.removeEventListener("selectionchange",this.onSelectionChange)}},ft=pt,gt=(s("4935"),Object(c["a"])(ft,et,tt,!1,null,null,null)),bt=gt.exports,yt=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view publish"},[i("Navigator",{attrs:{onBack:function(){return e.$router.go(-1)}}}),i("div",{staticClass:"header"},[i("h2",{staticClass:"title",domProps:{innerHTML:t._s(t.storyInfo.title)}}),i("div",{staticClass:"img-preview",style:t.imgSyle})]),i("div",{staticClass:"main"},[i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v(t._s(t.$i18n("publish-date")))]),i("p",{staticClass:"info"},[t._v(t._s(t._f("formatDate")(t.storyInfo.creationDate)))])]),i("div",{staticClass:"item"},[i("label",{staticClass:"tags"},[t._v(t._s(t.$i18n("publish-tags")))]),i("p",{staticClass:"info"},[t._v(t._s(t.$i18n("tags-not-set")))])]),i("div",{staticClass:"item"},[i("label",{staticClass:"Language"},[t._v(t._s(t.$i18n("publish-language")))]),i("p",{staticClass:"info"},[t._v("English")])])]),i("div",{staticClass:"confirm-publish"},[i("PrimaryButton",{attrs:{text:t.$i18n("btn-preview-wikistory"),onClick:t.onPreview}}),i("PrimaryButton",{attrs:{text:t.$i18n("btn-publish-wikistory"),onClick:t.onPublish}})],1)],1)},vt=[],St={name:"Publish",components:{Navigator:Le,PrimaryButton:H},methods:{...Object(S["b"])(["setStoryId"]),onPublish:function(){const e=X(this.storyInfo.frames.map(({img:e,text:t})=>({img:e,text:t})));this.setStoryId(e),this.$router.push({name:"StoryViewer",params:{id:e}})},onPreview:function(){this.$router.push({name:"StoryViewer"})}},computed:{...Object(S["c"])(["thumbnails","storyInfo"]),imgSyle:function(){return this.thumbnails[0].style}}},wt=St,Ct=(s("2564"),Object(c["a"])(wt,yt,vt,!1,null,"1f2397ad",null)),_t=Ct.exports;i["a"].use(m["a"]);const kt=[{path:"/",name:"Home",component:b},{path:"/story/:id?",name:"Story",component:ae},{path:"/searchwikipedia",name:"SearchWikipedia",component:qe},{path:"/searchwikistories",name:"SearchWikistories",component:Ne},{path:"/searchcommons",name:"SearchCommons",component:Ze},{path:"/article/:article",name:"Article",component:bt,props:!0},{path:"/publish",name:"Publish",component:_t},{path:"/viewer/:id?",name:"StoryViewer",component:me}],xt=new m["a"]({routes:kt});var It=xt;const Ot=5,jt=e=>e.img?{backgroundImage:"url("+e.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(338.27deg, #0BD564 -70.53%, #3366CC 71.84%)"};var $t={state:{id:null,storyTitle:"",creationDate:null,currentFrameId:1,frames:[{id:1,img:null,text:""}]},mutations:{selectFrame:(e,t)=>e.currentFrameId=t,addFrame:e=>{if(e.frames.length===Ot)return;const t=e.frames.length+1;e.frames.push({text:"",img:"",id:t}),e.currentFrameId=t},resetFrame:(e,t)=>{e.currentFrameId=t.length,e.frames=t},setText:(e,t)=>{const s=e.frames.find(t=>t.id===e.currentFrameId);s.text=t},setImg:(e,t)=>{const s=e.frames.find(t=>t.id===e.currentFrameId);s.img=t},setCreationDate:(e,t)=>{e.creationDate=t},setStoryId:(e,t)=>{e.id=t}},actions:{selectFrame:({commit:e},t)=>{e("selectFrame",t)},addFrame:({commit:e})=>{e("addFrame")},resetFrame:({commit:e},t)=>{e("resetFrame",t)},setText:({commit:e},t)=>{e("setText",t)},setImg:({commit:e},t)=>{e("setImg",t)},setCreationDate:({commit:e})=>{e("setCreationDate",(new Date).getTime())},setStoryId:({commit:e},t)=>{e("setStoryId",t)}},getters:{thumbnails:e=>e.frames.map(t=>{const s={...t};return t.id===e.currentFrameId&&(s.selected=!0),s.style=jt(t),s}),currentFrame:e=>{const t=e.frames.find(t=>t.id===e.currentFrameId);return{text:t.text,style:jt(t),noImage:""===t.img,id:e.currentFrameId}},storyLength:e=>e.frames.length,storyInfo:e=>({id:e.id,title:e.frames[0].text,creationDate:e.creationDate,frames:e.frames}),valid:e=>e.frames.length>=2&&e.frames.every(e=>e.img&&e.text)}};let Ft=[];const Lt=()=>{Ft.forEach(e=>e&&e.abort()),Ft=[]},Tt=(e,t)=>{Lt();const s=new XMLHttpRequest;s.open("GET",e),s.send(),s.addEventListener("load",()=>{t(JSON.parse(s.responseText))}),s.addEventListener("error",()=>{t(null,s.status)}),Ft.push(s)},Pt=new URL(location.href).searchParams.get("lang")||"en",Et=Pt;var qt={namespaced:!0,state:{loading:!1,results:[],query:""},mutations:{setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const s=t.trim(),i=`https://${Et}.wikipedia.org/w/rest.php/v1/search/title?q=${s}&limit=10`;if(e("setQuery",t),!s)return Lt(),e("setLoading",!1),void e("setResults",[]);e("setLoading",!0),Tt(i,t=>{t.pages&&e("setResults",Object.values(t.pages).map(e=>({title:e.title,desc:e.description,thumb:e.thumbnail&&e.thumbnail.url,goto:{name:"Article",params:{article:e.title}}}))),e("setLoading",!1)})},clear:({commit:e})=>{Lt(),e("setLoading",!1),e("setResults",[]),e("setQuery","")}},getters:{loading:e=>e.loading,results:e=>e.results,query:e=>e.query}},Dt={namespaced:!0,state:{selection:[],loading:!1,results:[],query:""},mutations:{setSelection:(e,t)=>e.selection=t,setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const s=t.trim(),i=`https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&uselang=${Pt}&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${s}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=snippet&prop=imageinfo&gsrnamespace=6&iiprop=url%7Cextmetadata&iiurlheight=180&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist&iiextmetadatalanguage=${Pt}`;if(e("setQuery",t),!s)return Lt(),e("setSelection",[]),e("setLoading",!1),void e("setResults",[]);e("setLoading",!0),Tt(i,t=>{if(t.query&&t.query.pages){const s=Object.values(t.query.pages).sort((e,t)=>e.index-t.index);e("setResults",s.map(e=>{const t=e.imageinfo[0],s=t.responsiveUrls&&Object.values(t.responsiveUrls)[0],i=t.extmetadata,r=i&&i.ImageDescription&&i.ImageDescription.value;return{id:e.pageid.toString(),title:e.title,desc:r||e.snippet,thumb:s||t.url,width:t.thumbwidth}}))}e("setSelection",[]),e("setLoading",!1)})},clear:({commit:e})=>{Lt(),e("setSelection",[]),e("setLoading",!1),e("setResults",[]),e("setQuery","")},select:({commit:e},t)=>{e("setSelection",t)}},getters:{selection:e=>e.selection,loading:e=>e.loading,results:e=>e.results,query:e=>e.query}},At={namespaced:!0,state:{loading:!1,results:[],query:""},mutations:{setLoading:(e,t)=>e.loading=t,setQuery:(e,t)=>e.query=t,setResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const s=t.trim().toLowerCase();if(e("setQuery",t),!s)return Lt(),e("setLoading",!1),void e("setResults",[]);e("setLoading",!0),Z(s).then(t=>{t.length&&e("setResults",Object.values(t).map(e=>{const t=e.id[0];return{title:e.text,desc:"Story id: "+t,thumb:e.img,goto:{name:"Story",params:{id:t}}}})),e("setLoading",!1)})},clear:({commit:e})=>{Lt(),e("setLoading",!1),e("setResults",[]),e("setQuery","")}},getters:{loading:e=>e.loading,results:e=>e.results,query:e=>e.query}};const Rt={"put styles in body":e=>{for(const t of e.head.querySelectorAll('link[rel="stylesheet"]'))e.body.prepend(t)},"remove stuff":e=>{const t=["table",".pcs-collapse-table-container","script"];for(const s of e.querySelectorAll(t.join(",")))s.remove()},"unhide sections":e=>{for(const t of e.querySelectorAll("section"))t.style.display="block"},"remove links":e=>{let t;for(const s of e.querySelectorAll("a"))t=e.createElement("span"),t.innerHTML=s.innerHTML,s.replaceWith(t)},"load images":e=>{for(const t of e.querySelectorAll("span[data-src]"))if(t){let s=e.createElement("img");s.src=t.getAttribute("data-src"),s.classList.add("pcs-widen-image-override"),s.classList.add("pcs-lazy-load-image-loaded"),t.replaceChildren(s)}else t.remove()}};var Wt={state:{article:{title:"",html:""}},mutations:{setArticle:({article:e},{title:t,html:s})=>{e.title=t,e.html=s}},actions:{fetchArticle:async({commit:e},t)=>{const s=`https://${Et}.wikipedia.org/api/rest_v1/page/mobile-html/${t}`,i=await(await fetch(s)).text(),r=(new DOMParser).parseFromString(i,"text/html");Object.values(Rt).forEach(e=>e(r)),e("setArticle",{title:t,html:r.body.outerHTML})}},getters:{currentArticle:({article:e})=>e.html}};i["a"].use(S["a"]);var Bt=new S["a"].Store({modules:{story:$t,search:qt,article:Wt,commons:Dt,stories:At}});i["a"].directive("focus",{inserted:function(e){e.focus()}}),i["a"].filter("formatDate",(function(e){if(e)return new Date(e).toLocaleString()}));var Nt=s("5093"),Mt=s.n(Nt),Vt={welcome:"Welcome to Wikistories","btn-create":"Create a story","btn-restart-story":"Start again","search-box":"Search Wikipedia","search-stories":"Search Wikistories","search-media":"Search Media","search-media-info":"$1 selected","wikimedia-commons":"Commons",wikipedia:"Wikipedia",wikistories:"Wikistories","btn-publish-wikistory":"Publish Wikistory","btn-preview-wikistory":"Preview","btn-highlight":"Highlight","btn-clear":"Clear","btn-select-image":"Select an image","btn-next":"Next","publish-date":"Date","publish-tags":"Tags","publish-language":"Language","tags-not-set":"Not set yet"},Ht={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire","btn-restart-story":"Recommencer","search-box":"Recherche dans Wikipédia","search-media":"Recherche de Média","search-media-info":"$1 {{PLURAL:$1|selectionné|selectionnés}}","wikimedia-commons":"Commons",wikipedia:"Wikipédia","btn-publish-wikistory":"Publier la Wikistoire","btn-highlight":"Surligner","btn-clear":"Annuler","btn-select-image":"Selectionnez une image","btn-next":"Suivant","publish-date":"Date","publish-tags":"Mots clés","publish-language":"Langue","tags-not-set":"Non definies"},Ut={welcome:"Welcome to Wikistories","btn-create":"Buat cerita","btn-restart-story":"mulai dari awal","search-box":"Cari di wikipedia","search-media":"Cari media","search-media-info":"$1 dipilih","wikimedia-commons":"Commons",wikipedia:"Wikipedia","btn-publish-wikistory":"Publikasikan Wikistory","btn-highlight":"Sorot teks","btn-clear":"Hapus pilihan","btn-select-image":"Pilih gambar","btn-next":"Lanjut","publish-date":"Tanggal","publish-tags":"Tags","publish-language":"Bahasa","tags-not-set":"Belum disetel"},Qt={welcome:"歡迎光臨 Wikistories","btn-create":"創建故事","btn-restart-story":"重新開始","search-box":"搜尋維基百科","search-media":"搜尋媒體","search-media-info":"$1 選擇","wikimedia-commons":"維基共享資源",wikipedia:"維基百科","btn-publish-wikistory":"發佈 Wikistory","btn-highlight":"Highlight","btn-clear":"移除","btn-select-image":"選擇圖片","btn-next":"下一步","publish-date":"日期","publish-tags":"標簽","publish-language":"語言","tags-not-set":"尚未設定"};i["a"].use(Mt.a,{locale:Pt,messages:{en:Vt,fr:Ht,id:Ut,zh:Qt}}),i["a"].config.productionTip=!1,new i["a"]({router:It,store:Bt,render:e=>e(u)}).$mount("#app")},5801:function(e,t,s){},5807:function(e,t,s){"use strict";s("942b")},"5ced":function(e,t,s){},6131:function(e,t,s){},"62fb":function(e,t,s){"use strict";s("aa55")},6675:function(e,t,s){"use strict";s("023c")},"67ec":function(e,t,s){"use strict";s("c52b")},"703d":function(e,t,s){},"7be0":function(e,t,s){},"85ec":function(e,t,s){},8637:function(e,t,s){"use strict";s("5801")},"884e":function(e,t,s){"use strict";s("ba7b")},"8ff2":function(e,t,s){},9131:function(e,t,s){"use strict";s("2f7e")},"942b":function(e,t,s){},a048:function(e,t,s){},a8b7:function(e,t,s){},aa55:function(e,t,s){},b78b:function(e,t,s){"use strict";s("a048")},ba7b:function(e,t,s){},c452:function(e,t,s){"use strict";s("a8b7")},c52b:function(e,t,s){},cccb:function(e,t,s){"use strict";s("5ced")},dbbf:function(e,t,s){"use strict";s("175a")},e15c:function(e,t,s){"use strict";s("3a9f")},ef9e:function(e,t,s){},f207:function(e,t,s){"use strict";s("7be0")},f638:function(e,t,s){"use strict";s("6131")}});
//# sourceMappingURL=app.7018e9d5.js.map