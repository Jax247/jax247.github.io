import{s as Q,j as q,t as At,m as Wa,C as Xn,b as vt,G as co,r as ye,_ as lo,U as uo}from"./index-256b01c5.js";const vo=Q.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,mo=()=>q(vo,{children:q("div",{className:"lds-dual-ring"})}),Ke={name:"React",color:"#2196f3",icon:"/icons/react-icon.png"},go={name:"HTML",color:"#f36f21",icon:"/icons/html-icon.png"},Fn={name:"CSS3",color:"#0000ff",icon:"/icons/css-icon.png"},Zr={name:"Sass",color:"#d34fff",icon:"/icons/sass-icon.png"},po={name:"Styled",color:"#3D3D3D",icon:"/icons/styled-icon.png"},Qr={name:"TS",color:"#155fff",icon:"/icons/TS-icon.svg.png"},ho={name:"MUI",color:"#011E3C",icon:"/icons/mui-logo.png"},bo={name:"MongoDB",color:"#3F3E42",icon:"/icons/MongoDB_Logo.png"},yo={name:"RTK",color:"#593d88",icon:"/icons/reduxTK.png"},ta={name:"Express",color:"#70c1ff",icon:"/icons/express-icon.png"},zn=t=>({name:t,color:"#aaa",icon:"/icons/gear-icon.png"}),Eo=[{name:"Accel",type:"Admin Dashboard React/Node ",tags:[Ke,Qr,ta,ho,yo,bo],screenshotpath:"/screenshots/accel-screenshot.png",description:"A Full Stack Admin Dashboard made to access and visualize sales transaction data. Complete with a custom NodeJS server and MongoDB database.",srcLink:"https://github.com/Jax247/personal-projects/tree/master/accel-dashboard",liveLink:"https://acceldash.netlify.app"},{name:"PageMe",type:"React Messaging App",tags:[Ke,Fn,ta,zn("GetStream")],screenshotpath:"./screenshots/pageMe-screenshot.png",description:"Chatroom application made to streamline paging medical professionals in a team. Utilizes the GetStream API and ExpressJS to allow authentication and messaging. ",srcLink:"https://github.com/Jax247/personal-projects/tree/master/med-pager",liveLink:"https://pagemej.netlify.app"},{name:"Solute ",type:"Landing Page Example",tags:[go,Fn,Zr],screenshotpath:"./screenshots/solute-screenshot.png",description:"Landing page layout example made with HTML and CSS for any business to market themselves",srcLink:"https://github.com/Jax247/personal-projects/tree/master/solute",liveLink:"https://solute.netlify.app"},{name:"Crypt",type:"React App Example",tags:[Ke,Zr,zn("Chart.js"),zn("CoinGecko")],screenshotpath:"./screenshots/crypt-screenshot.png",description:"Crypto Currency Price tracker made with React, Chart.js, and the CoinGecko API. Displays price information for the top 15 coins with a graph displaying coin price timelines. ",srcLink:"https://github.com/Jax247/personal-projects/tree/master/crypt",liveLink:"https://krcointracker.netlify.app"},{name:"Portfolio",type:"Personal Portfolio",tags:[Ke,Qr,Fn,po],screenshotpath:"./screenshots/portfoliov2-screenshot.png",description:"First iteration of my personal site that you're on now! Made entirely in HTML, SCSS, and Javascript/Jquery.",srcLink:"https://github.com/Jax247/personal-projects/tree/master/portfolio",liveLink:"jewanjeffries.com"}];function ea(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ea(Object(n),!0).forEach(function(r){nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ea(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vn(t){return vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vn(t)}function wo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function na(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xo(t,e,n){return e&&na(t.prototype,e),n&&na(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function br(t,e){return ko(t)||_o(t,e)||Ha(t,e)||Oo()}function Fe(t){return Ao(t)||So(t)||Ha(t)||To()}function Ao(t){if(Array.isArray(t))return Kn(t)}function ko(t){if(Array.isArray(t))return t}function So(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _o(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,o=!1,i,s;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(r.push(i.value),!(e&&r.length===e));a=!0);}catch(f){o=!0,s=f}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function Ha(t,e){if(t){if(typeof t=="string")return Kn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kn(t,e)}}function Kn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function To(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ra=function(){},yr={},Ga={},Ba=null,Xa={mark:ra,measure:ra};try{typeof window<"u"&&(yr=window),typeof document<"u"&&(Ga=document),typeof MutationObserver<"u"&&(Ba=MutationObserver),typeof performance<"u"&&(Xa=performance)}catch{}var Io=yr.navigator||{},aa=Io.userAgent,ia=aa===void 0?"":aa,Ft=yr,G=Ga,oa=Ba,qe=Xa;Ft.document;var Nt=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",Ka=~ia.indexOf("MSIE")||~ia.indexOf("Trident/"),Je,Ze,Qe,tn,en,Tt="___FONT_AWESOME___",qn=16,qa="fa",Ja="svg-inline--fa",qt="data-fa-i2svg",Jn="data-fa-pseudo-element",Po="data-fa-pseudo-element-pending",Er="data-prefix",wr="data-icon",sa="fontawesome-i2svg",Co="async",No=["HTML","HEAD","STYLE","SCRIPT"],Za=function(){try{return!0}catch{return!1}}(),H="classic",J="sharp",xr=[H,J];function ze(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[H]}})}var Se=ze((Je={},nt(Je,H,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),nt(Je,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Je)),_e=ze((Ze={},nt(Ze,H,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),nt(Ze,J,{solid:"fass",regular:"fasr"}),Ze)),Te=ze((Qe={},nt(Qe,H,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),nt(Qe,J,{fass:"fa-solid",fasr:"fa-regular"}),Qe)),Lo=ze((tn={},nt(tn,H,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),nt(tn,J,{"fa-solid":"fass","fa-regular":"fasr"}),tn)),Ro=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Qa="fa-layers-text",Do=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Mo=ze((en={},nt(en,H,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),nt(en,J,{900:"fass",400:"fasr"}),en)),ti=[1,2,3,4,5,6,7,8,9,10],Fo=ti.concat([11,12,13,14,15,16,17,18,19,20]),zo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Oe=new Set;Object.keys(_e[H]).map(Oe.add.bind(Oe));Object.keys(_e[J]).map(Oe.add.bind(Oe));var jo=[].concat(xr,Fe(Oe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bt.GROUP,Bt.SWAP_OPACITY,Bt.PRIMARY,Bt.SECONDARY]).concat(ti.map(function(t){return"".concat(t,"x")})).concat(Fo.map(function(t){return"w-".concat(t)})),we=Ft.FontAwesomeConfig||{};function $o(t){var e=G.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Yo(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(G&&typeof G.querySelector=="function"){var Uo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Uo.forEach(function(t){var e=br(t,2),n=e[0],r=e[1],a=Yo($o(n));a!=null&&(we[r]=a)})}var ei={styleDefault:"solid",familyDefault:"classic",cssPrefix:qa,replacementClass:Ja,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};we.familyPrefix&&(we.cssPrefix=we.familyPrefix);var le=S(S({},ei),we);le.autoReplaceSvg||(le.observeMutations=!1);var T={};Object.keys(ei).forEach(function(t){Object.defineProperty(T,t,{enumerable:!0,set:function(n){le[t]=n,xe.forEach(function(r){return r(T)})},get:function(){return le[t]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(e){le.cssPrefix=e,xe.forEach(function(n){return n(T)})},get:function(){return le.cssPrefix}});Ft.FontAwesomeConfig=T;var xe=[];function Vo(t){return xe.push(t),function(){xe.splice(xe.indexOf(t),1)}}var Rt=qn,bt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wo(t){if(!(!t||!Nt)){var e=G.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return G.head.insertBefore(e,r),t}}var Ho="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ie(){for(var t=12,e="";t-- >0;)e+=Ho[Math.random()*62|0];return e}function me(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ar(t){return t.classList?me(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ni(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Go(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ni(t[n]),'" ')},"").trim()}function xn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function kr(t){return t.size!==bt.size||t.x!==bt.x||t.y!==bt.y||t.rotate!==bt.rotate||t.flipX||t.flipY}function Bo(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:l}}function Xo(t){var e=t.transform,n=t.width,r=n===void 0?qn:n,a=t.height,o=a===void 0?qn:a,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&Ka?f+="translate(".concat(e.x/Rt-r/2,"em, ").concat(e.y/Rt-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/Rt,"em), calc(-50% + ").concat(e.y/Rt,"em)) "):f+="translate(".concat(e.x/Rt,"em, ").concat(e.y/Rt,"em) "),f+="scale(".concat(e.size/Rt*(e.flipX?-1:1),", ").concat(e.size/Rt*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Ko=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ri(){var t=qa,e=Ja,n=T.cssPrefix,r=T.replacementClass,a=Ko;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var fa=!1;function jn(){T.autoAddCss&&!fa&&(Wo(ri()),fa=!0)}var qo={mixout:function(){return{dom:{css:ri,insertCss:jn}}},hooks:function(){return{beforeDOMElementCreation:function(){jn()},beforeI2svg:function(){jn()}}}},Ot=Ft||{};Ot[Tt]||(Ot[Tt]={});Ot[Tt].styles||(Ot[Tt].styles={});Ot[Tt].hooks||(Ot[Tt].hooks={});Ot[Tt].shims||(Ot[Tt].shims=[]);var gt=Ot[Tt],ai=[],Jo=function t(){G.removeEventListener("DOMContentLoaded",t),mn=1,ai.map(function(e){return e()})},mn=!1;Nt&&(mn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),mn||G.addEventListener("DOMContentLoaded",Jo));function Zo(t){Nt&&(mn?setTimeout(t,0):ai.push(t))}function je(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,o=a===void 0?[]:a;return typeof t=="string"?ni(t):"<".concat(e," ").concat(Go(r),">").concat(o.map(je).join(""),"</").concat(e,">")}function ca(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Qo=function(e,n){return function(r,a,o,i){return e.call(n,r,a,o,i)}},$n=function(e,n,r,a){var o=Object.keys(e),i=o.length,s=a!==void 0?Qo(n,a):n,f,l,c;for(r===void 0?(f=1,c=e[o[0]]):(f=0,c=r);f<i;f++)l=o[f],c=s(c,e[l],l,e);return c};function ts(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Zn(t){var e=ts(t);return e.length===1?e[0].toString(16):null}function es(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function la(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Qn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,o=la(e);typeof gt.hooks.addPack=="function"&&!a?gt.hooks.addPack(t,la(e)):gt.styles[t]=S(S({},gt.styles[t]||{}),o),t==="fas"&&Qn("fa",e)}var nn,rn,an,re=gt.styles,ns=gt.shims,rs=(nn={},nt(nn,H,Object.values(Te[H])),nt(nn,J,Object.values(Te[J])),nn),Sr=null,ii={},oi={},si={},fi={},ci={},as=(rn={},nt(rn,H,Object.keys(Se[H])),nt(rn,J,Object.keys(Se[J])),rn);function is(t){return~jo.indexOf(t)}function os(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!is(a)?a:null}var li=function(){var e=function(o){return $n(re,function(i,s,f){return i[f]=$n(s,o,{}),i},{})};ii=e(function(a,o,i){if(o[3]&&(a[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){a[f.toString(16)]=i})}return a}),oi=e(function(a,o,i){if(a[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){a[f]=i})}return a}),ci=e(function(a,o,i){var s=o[2];return a[i]=i,s.forEach(function(f){a[f]=i}),a});var n="far"in re||T.autoFetchSvg,r=$n(ns,function(a,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:f}),a},{names:{},unicodes:{}});si=r.names,fi=r.unicodes,Sr=An(T.styleDefault,{family:T.familyDefault})};Vo(function(t){Sr=An(t.styleDefault,{family:T.familyDefault})});li();function _r(t,e){return(ii[t]||{})[e]}function ss(t,e){return(oi[t]||{})[e]}function Xt(t,e){return(ci[t]||{})[e]}function ui(t){return si[t]||{prefix:null,iconName:null}}function fs(t){var e=fi[t],n=_r("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function zt(){return Sr}var Tr=function(){return{prefix:null,iconName:null,rest:[]}};function An(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?H:n,a=Se[r][t],o=_e[r][t]||_e[r][a],i=t in gt.styles?t:null;return o||i||null}var ua=(an={},nt(an,H,Object.keys(Te[H])),nt(an,J,Object.keys(Te[J])),an);function kn(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,o=(e={},nt(e,H,"".concat(T.cssPrefix,"-").concat(H)),nt(e,J,"".concat(T.cssPrefix,"-").concat(J)),e),i=null,s=H;(t.includes(o[H])||t.some(function(l){return ua[H].includes(l)}))&&(s=H),(t.includes(o[J])||t.some(function(l){return ua[J].includes(l)}))&&(s=J);var f=t.reduce(function(l,c){var u=os(T.cssPrefix,c);if(re[c]?(c=rs[s].includes(c)?Lo[s][c]:c,i=c,l.prefix=c):as[s].indexOf(c)>-1?(i=c,l.prefix=An(c,{family:s})):u?l.iconName=u:c!==T.replacementClass&&c!==o[H]&&c!==o[J]&&l.rest.push(c),!a&&l.prefix&&l.iconName){var d=i==="fa"?ui(l.iconName):{},m=Xt(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!re.far&&re.fas&&!T.autoFetchSvg&&(l.prefix="fas")}return l},Tr());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===J&&(re.fass||T.autoFetchSvg)&&(f.prefix="fass",f.iconName=Xt(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=zt()||"fas"),f}var cs=function(){function t(){wo(this,t),this.definitions={}}return xo(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var i=a.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),i[s]),Qn(s,i[s]);var f=Te[H][s];f&&Qn(f,i[s]),li()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(o){var i=a[o],s=i.prefix,f=i.iconName,l=i.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=l)}),n[s][f]=l}),n}}]),t}(),da=[],ae={},se={},ls=Object.keys(se);function us(t,e){var n=e.mixoutsTo;return da=t,ae={},Object.keys(se).forEach(function(r){ls.indexOf(r)===-1&&delete se[r]}),da.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(i){typeof a[i]=="function"&&(n[i]=a[i]),vn(a[i])==="object"&&Object.keys(a[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=a[i][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){ae[i]||(ae[i]=[]),ae[i].push(o[i])})}r.provides&&r.provides(se)}),n}function tr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var o=ae[t]||[];return o.forEach(function(i){e=i.apply(null,[e].concat(r))}),e}function Jt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=ae[t]||[];a.forEach(function(o){o.apply(null,n)})}function It(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return se[t]?se[t].apply(null,e):void 0}function er(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||zt();if(e)return e=Xt(n,e)||e,ca(di.definitions,n,e)||ca(gt.styles,n,e)}var di=new cs,ds=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,Jt("noAuto")},vs={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Nt?(Jt("beforeI2svg",e),It("pseudoElements2svg",e),It("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Zo(function(){gs({autoReplaceSvgRoot:n}),Jt("watch",e)})}},ms={icon:function(e){if(e===null)return null;if(vn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=An(e[0]);return{prefix:r,iconName:Xt(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(T.cssPrefix,"-"))>-1||e.match(Ro))){var a=kn(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||zt(),iconName:Xt(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var o=zt();return{prefix:o,iconName:Xt(o,e)||e}}}},ct={noAuto:ds,config:T,dom:vs,parse:ms,library:di,findIconDefinition:er,toHtml:je},gs=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(gt.styles).length>0||T.autoFetchSvg)&&Nt&&T.autoReplaceSvg&&ct.dom.i2svg({node:r})};function Sn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return je(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Nt){var r=G.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function ps(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,o=t.styles,i=t.transform;if(kr(i)&&n.found&&!r.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};a.style=xn(S(S({},o),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function hs(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,o=t.symbol,i=o===!0?"".concat(e,"-").concat(T.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:i}),children:r}]}]}function Or(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,u=t.extra,d=t.watchable,m=d===void 0?!1:d,v=r.found?r:n,g=v.width,b=v.height,y=a==="fak",p=[T.replacementClass,o?"".concat(T.cssPrefix,"-").concat(o):""].filter(function(M){return u.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(u.classes).join(" "),h={children:[],attributes:S(S({},u.attributes),{},{"data-prefix":a,"data-icon":o,class:p,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)})},P=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/b*16*.0625,"em")}:{};m&&(h.attributes[qt]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Ie())},children:[f]}),delete h.attributes.title);var x=S(S({},h),{},{prefix:a,iconName:o,main:n,mask:r,maskId:l,transform:i,symbol:s,styles:S(S({},P),u.styles)}),L=r.found&&n.found?It("generateAbstractMask",x)||{children:[],attributes:{}}:It("generateAbstractIcon",x)||{children:[],attributes:{}},E=L.children,C=L.attributes;return x.children=E,x.attributes=C,s?hs(x):ps(x)}function va(t){var e=t.content,n=t.width,r=t.height,a=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,l=S(S(S({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(l[qt]="");var c=S({},i.styles);kr(a)&&(c.transform=Xo({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=xn(c);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function bs(t){var e=t.content,n=t.title,r=t.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=xn(r.styles);o.length>0&&(a.style=o);var i=[];return i.push({tag:"span",attributes:a,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Yn=gt.styles;function nr(t){var e=t[0],n=t[1],r=t.slice(4),a=br(r,1),o=a[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(Bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Bt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Bt.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:i}}var ys={found:!1,width:512,height:512};function Es(t,e){!Za&&!T.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function rr(t,e){var n=e;return e==="fa"&&T.styleDefault!==null&&(e=zt()),new Promise(function(r,a){if(It("missingIconAbstract"),n==="fa"){var o=ui(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Yn[e]&&Yn[e][t]){var i=Yn[e][t];return r(nr(i))}Es(t,e),r(S(S({},ys),{},{icon:T.showMissingIcons&&t?It("missingIconAbstract")||{}:{}}))})}var ma=function(){},ar=T.measurePerformance&&qe&&qe.mark&&qe.measure?qe:{mark:ma,measure:ma},Ee='FA "6.3.0"',ws=function(e){return ar.mark("".concat(Ee," ").concat(e," begins")),function(){return vi(e)}},vi=function(e){ar.mark("".concat(Ee," ").concat(e," ends")),ar.measure("".concat(Ee," ").concat(e),"".concat(Ee," ").concat(e," begins"),"".concat(Ee," ").concat(e," ends"))},Ir={begin:ws,end:vi},sn=function(){};function ga(t){var e=t.getAttribute?t.getAttribute(qt):null;return typeof e=="string"}function xs(t){var e=t.getAttribute?t.getAttribute(Er):null,n=t.getAttribute?t.getAttribute(wr):null;return e&&n}function As(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(T.replacementClass)}function ks(){if(T.autoReplaceSvg===!0)return fn.replace;var t=fn[T.autoReplaceSvg];return t||fn.replace}function Ss(t){return G.createElementNS("http://www.w3.org/2000/svg",t)}function _s(t){return G.createElement(t)}function mi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Ss:_s:n;if(typeof t=="string")return G.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){a.appendChild(mi(i,{ceFn:r}))}),a}function Ts(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var fn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(mi(a),n)}),n.getAttribute(qt)===null&&T.keepOriginalSource){var r=G.createComment(Ts(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Ar(n).indexOf(T.replacementClass))return fn.replace(e);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,f){return f===T.replacementClass||f.match(a)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(s){return je(s)}).join(`
`);n.setAttribute(qt,""),n.innerHTML=i}};function pa(t){t()}function gi(t,e){var n=typeof e=="function"?e:sn;if(t.length===0)n();else{var r=pa;T.mutateApproach===Co&&(r=Ft.requestAnimationFrame||pa),r(function(){var a=ks(),o=Ir.begin("mutate");t.map(a),o(),n()})}}var Pr=!1;function pi(){Pr=!0}function ir(){Pr=!1}var gn=null;function ha(t){if(oa&&T.observeMutations){var e=t.treeCallback,n=e===void 0?sn:e,r=t.nodeCallback,a=r===void 0?sn:r,o=t.pseudoElementsCallback,i=o===void 0?sn:o,s=t.observeMutationsRoot,f=s===void 0?G:s;gn=new oa(function(l){if(!Pr){var c=zt();me(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!ga(u.addedNodes[0])&&(T.searchPseudoElements&&i(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&T.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&ga(u.target)&&~zo.indexOf(u.attributeName))if(u.attributeName==="class"&&xs(u.target)){var d=kn(Ar(u.target)),m=d.prefix,v=d.iconName;u.target.setAttribute(Er,m||c),v&&u.target.setAttribute(wr,v)}else As(u.target)&&a(u.target)})}}),Nt&&gn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Os(){gn&&gn.disconnect()}function Is(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var o=a.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),n}function Ps(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=kn(Ar(t));return a.prefix||(a.prefix=zt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ss(a.prefix,t.innerText)||_r(a.prefix,Zn(t.innerText))),!a.iconName&&T.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Cs(t){var e=me(t.attributes).reduce(function(a,o){return a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return T.autoA11y&&(n?e["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Ie()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ns(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ba(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ps(t),r=n.iconName,a=n.prefix,o=n.rest,i=Cs(t),s=tr("parseNodeAttributes",{},t),f=e.styleParser?Is(t):[];return S({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:bt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var Ls=gt.styles;function hi(t){var e=T.autoReplaceSvg==="nest"?ba(t,{styleParser:!1}):ba(t);return~e.extra.classes.indexOf(Qa)?It("generateLayersText",t,e):It("generateSvgReplacementMutation",t,e)}var jt=new Set;xr.map(function(t){jt.add("fa-".concat(t))});Object.keys(Se[H]).map(jt.add.bind(jt));Object.keys(Se[J]).map(jt.add.bind(jt));jt=Fe(jt);function ya(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Nt)return Promise.resolve();var n=G.documentElement.classList,r=function(u){return n.add("".concat(sa,"-").concat(u))},a=function(u){return n.remove("".concat(sa,"-").concat(u))},o=T.autoFetchSvg?jt:xr.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ls));o.includes("fa")||o.push("fa");var i=[".".concat(Qa,":not([").concat(qt,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(qt,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=me(t.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var f=Ir.begin("onTree"),l=s.reduce(function(c,u){try{var d=hi(u);d&&c.push(d)}catch(m){Za||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,u){Promise.all(l).then(function(d){gi(d,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(d){f(),u(d)})})}function Rs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hi(t).then(function(n){n&&gi([n],e)})}function Ds(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:er(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:er(a||{})),t(r,S(S({},n),{},{mask:a}))}}var Ms=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?bt:r,o=n.symbol,i=o===void 0?!1:o,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,u=n.title,d=u===void 0?null:u,m=n.titleId,v=m===void 0?null:m,g=n.classes,b=g===void 0?[]:g,y=n.attributes,p=y===void 0?{}:y,h=n.styles,P=h===void 0?{}:h;if(e){var x=e.prefix,L=e.iconName,E=e.icon;return Sn(S({type:"icon"},e),function(){return Jt("beforeDOMElementCreation",{iconDefinition:e,params:n}),T.autoA11y&&(d?p["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(v||Ie()):(p["aria-hidden"]="true",p.focusable="false")),Or({icons:{main:nr(E),mask:f?nr(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:L,transform:S(S({},bt),a),symbol:i,title:d,maskId:c,titleId:v,extra:{attributes:p,styles:P,classes:b}})})}},Fs={mixout:function(){return{icon:Ds(Ms)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ya,n.nodeCallback=Rs,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?G:r,o=n.callback,i=o===void 0?function(){}:o;return ya(a,i)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,o=r.title,i=r.titleId,s=r.prefix,f=r.transform,l=r.symbol,c=r.mask,u=r.maskId,d=r.extra;return new Promise(function(m,v){Promise.all([rr(a,s),c.iconName?rr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var b=br(g,2),y=b[0],p=b[1];m([n,Or({icons:{main:y,mask:p},prefix:s,iconName:a,transform:f,symbol:l,maskId:u,title:o,titleId:i,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,o=n.main,i=n.transform,s=n.styles,f=xn(s);f.length>0&&(a.style=f);var l;return kr(i)&&(l=It("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(l||o.icon),{children:r,attributes:a}}}},zs={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,o=a===void 0?[]:a;return Sn({type:"layer"},function(){Jt("beforeDOMElementCreation",{assembler:n,params:r});var i=[];return n(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(Fe(o)).join(" ")},children:i}]})}}}},js={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,o=a===void 0?null:a,i=r.classes,s=i===void 0?[]:i,f=r.attributes,l=f===void 0?{}:f,c=r.styles,u=c===void 0?{}:c;return Sn({type:"counter",content:n},function(){return Jt("beforeDOMElementCreation",{content:n,params:r}),bs({content:n.toString(),title:o,extra:{attributes:l,styles:u,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(Fe(s))}})})}}}},$s={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,o=a===void 0?bt:a,i=r.title,s=i===void 0?null:i,f=r.classes,l=f===void 0?[]:f,c=r.attributes,u=c===void 0?{}:c,d=r.styles,m=d===void 0?{}:d;return Sn({type:"text",content:n},function(){return Jt("beforeDOMElementCreation",{content:n,params:r}),va({content:n,transform:S(S({},bt),o),title:s,extra:{attributes:u,styles:m,classes:["".concat(T.cssPrefix,"-layers-text")].concat(Fe(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,o=r.transform,i=r.extra,s=null,f=null;if(Ka){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return T.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,va({content:n.innerHTML,width:s,height:f,transform:o,title:a,extra:i,watchable:!0})])}}},Ys=new RegExp('"',"ug"),Ea=[1105920,1112319];function Us(t){var e=t.replace(Ys,""),n=es(e,0),r=n>=Ea[0]&&n<=Ea[1],a=e.length===2?e[0]===e[1]:!1;return{value:Zn(a?e[0]:e),isSecondary:r||a}}function wa(t,e){var n="".concat(Po).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var o=me(t.children),i=o.filter(function(E){return E.getAttribute(Jn)===e})[0],s=Ft.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Do),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),r();if(f&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),d=~["Sharp"].indexOf(f[2])?J:H,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?_e[d][f[2].toLowerCase()]:Mo[d][l],v=Us(u),g=v.value,b=v.isSecondary,y=f[0].startsWith("FontAwesome"),p=_r(m,g),h=p;if(y){var P=fs(g);P.iconName&&P.prefix&&(p=P.iconName,m=P.prefix)}if(p&&!b&&(!i||i.getAttribute(Er)!==m||i.getAttribute(wr)!==h)){t.setAttribute(n,h),i&&t.removeChild(i);var x=Ns(),L=x.extra;L.attributes[Jn]=e,rr(p,m).then(function(E){var C=Or(S(S({},x),{},{icons:{main:E,mask:Tr()},prefix:m,iconName:h,extra:L,watchable:!0})),M=G.createElement("svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=C.map(function(D){return je(D)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Vs(t){return Promise.all([wa(t,"::before"),wa(t,"::after")])}function Ws(t){return t.parentNode!==document.head&&!~No.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Jn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function xa(t){if(Nt)return new Promise(function(e,n){var r=me(t.querySelectorAll("*")).filter(Ws).map(Vs),a=Ir.begin("searchPseudoElements");pi(),Promise.all(r).then(function(){a(),ir(),e()}).catch(function(){a(),ir(),n()})})}var Hs={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xa,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;T.searchPseudoElements&&xa(a)}}},Aa=!1,Gs={mixout:function(){return{dom:{unwatch:function(){pi(),Aa=!0}}}},hooks:function(){return{bootstrap:function(){ha(tr("mutationObserverCallbacks",{}))},noAuto:function(){Os()},watch:function(n){var r=n.observeMutationsRoot;Aa?ir():ha(tr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ka=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var o=a.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Bs={mixout:function(){return{parse:{transform:function(n){return ka(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ka(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(f," ").concat(l," ").concat(c)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:s,inner:u,path:d};return{tag:"g",attributes:S({},m.outer),children:[{tag:"g",attributes:S({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),m.path)}]}]}}}},Un={x:0,y:0,width:"100%",height:"100%"};function Sa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Xs(t){return t.tag==="g"?t.children:[t]}var Ks={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),o=a?kn(a.split(" ").map(function(i){return i.trim()})):Tr();return o.prefix||(o.prefix=zt()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,o=n.main,i=n.mask,s=n.maskId,f=n.transform,l=o.width,c=o.icon,u=i.width,d=i.icon,m=Bo({transform:f,containerWidth:u,iconWidth:l}),v={tag:"rect",attributes:S(S({},Un),{},{fill:"white"})},g=c.children?{children:c.children.map(Sa)}:{},b={tag:"g",attributes:S({},m.inner),children:[Sa(S({tag:c.tag,attributes:S(S({},c.attributes),m.path)},g))]},y={tag:"g",attributes:S({},m.outer),children:[b]},p="mask-".concat(s||Ie()),h="clip-".concat(s||Ie()),P={tag:"mask",attributes:S(S({},Un),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Xs(d)},P]};return r.push(x,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Un)}),{children:r,attributes:a}}}},qs={provides:function(e){var n=!1;Ft.matchMedia&&(n=Ft.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=S(S({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Js={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),o=a===null?!1:a===""?!0:a;return n.symbol=o,n}}}},Zs=[qo,Fs,zs,js,$s,Hs,Gs,Bs,Ks,qs,Js];us(Zs,{mixoutsTo:ct});ct.noAuto;ct.config;ct.library;ct.dom;var or=ct.parse,bi=ct.findIconDefinition;ct.toHtml;var Qs=ct.icon;ct.layer;ct.text;ct.counter;var Y={},tf={get exports(){return Y},set exports(t){Y=t}},ef="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nf=ef,rf=nf;function yi(){}function Ei(){}Ei.resetWarningCache=yi;var af=function(){function t(r,a,o,i,s,f){if(f!==rf){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ei,resetWarningCache:yi};return n.PropTypes=n,n};tf.exports=af();function _a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Dt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_a(Object(n),!0).forEach(function(r){ie(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_a(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pn(t){return pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pn(t)}function ie(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function of(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function sf(t,e){if(t==null)return{};var n=of(t,e),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function sr(t){return ff(t)||cf(t)||lf(t)||uf()}function ff(t){if(Array.isArray(t))return fr(t)}function cf(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function lf(t,e){if(t){if(typeof t=="string")return fr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fr(t,e)}}function fr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function uf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function df(t){var e,n=t.beat,r=t.fade,a=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,u=t.pulse,d=t.fixedWidth,m=t.inverse,v=t.border,g=t.listItem,b=t.flip,y=t.size,p=t.rotation,h=t.pull,P=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":d,"fa-inverse":m,"fa-border":v,"fa-li":g,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},ie(e,"fa-".concat(y),typeof y<"u"&&y!==null),ie(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),ie(e,"fa-pull-".concat(h),typeof h<"u"&&h!==null),ie(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(P).map(function(x){return P[x]?x:null}).filter(function(x){return x})}function vf(t){return t=t-0,t===t}function wi(t){return vf(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var mf=["style"];function gf(t){return t.charAt(0).toUpperCase()+t.slice(1)}function pf(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=wi(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?e[gf(a)]=o:e[a]=o,e},{})}function xi(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(f){return xi(t,f)}),a=Object.keys(e.attributes||{}).reduce(function(f,l){var c=e.attributes[l];switch(l){case"class":f.attrs.className=c,delete e.attributes.class;break;case"style":f.attrs.style=pf(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[wi(l)]=c}return f},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=sf(n,mf);return a.attrs.style=Dt(Dt({},a.attrs.style),i),t.apply(void 0,[e.tag,Dt(Dt({},a.attrs),s)].concat(sr(r)))}var Ai=!1;try{Ai=!0}catch{}function hf(){if(!Ai&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ta(t){if(t&&pn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(or.icon)return or.icon(t);if(t===null)return null;if(t&&pn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Vn(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ie({},t,e):{}}var $e=At.forwardRef(function(t,e){var n=t.icon,r=t.mask,a=t.symbol,o=t.className,i=t.title,s=t.titleId,f=t.maskId,l=Ta(n),c=Vn("classes",[].concat(sr(df(t)),sr(o.split(" ")))),u=Vn("transform",typeof t.transform=="string"?or.transform(t.transform):t.transform),d=Vn("mask",Ta(r)),m=Qs(l,Dt(Dt(Dt(Dt({},c),u),d),{},{symbol:a,title:i,titleId:s,maskId:f}));if(!m)return hf("Could not find icon",l),null;var v=m.abstract,g={ref:e};return Object.keys(t).forEach(function(b){$e.defaultProps.hasOwnProperty(b)||(g[b]=t[b])}),bf(v[0],g)});$e.displayName="FontAwesomeIcon";$e.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};$e.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var bf=xi.bind(null,At.createElement),yf={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]};const Ef={prefix:"fab",iconName:"github"};bi(Ef);const wf={prefix:"fab",iconName:"globe"};bi(wf);const xf=Q.div`
  position: relative;
  /* background: rgba(255, 255, 255, 0.1); */
  border-radius: 25px;
  display: flex;
  height: 100%;
  opacity: 1;
`,Af=Q(Wa.div)`
background: #00000050;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;

`,kf=Q.img`
  border-radius: 25px;
  width: 100%;
  margin: 0 auto;
`,Sf=Q.h3`
  margin-top: 0;
  font-size: calc(20px + 0.5vw);
`,_f=Q.div`
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center;
`,Tf=Q.div`
  min-height: 0;
`,Of=Q.div`
  /* display: flex; */
  /* gap: 5px; */
  width: 100%;
  /* flex-wrap: wrap; */
`,If=Q.div`
  display: flex;
  gap: 20px;
  /* position: absolute; */
  bottom: 0;
  left: 0;
  width: 100%;
  /* padding: 0rem 10px; */
  margin-top: 10px;
`,Oa=Q.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  text-align: center;
  padding: 8px 12px;
  border: 2px solid ${t=>t.theme.secondary};
  color: ${t=>t.theme.secondary};
  border-radius: 24px;
  margin-bottom: 10px;
  svg {
    width: 16px;
    margin-right: 5px;
    fill: ${t=>t.theme.secondary};
  }
`,Pf=Q($e)`
  margin-right: 5px;
`,Cf=Q.div`
  display: none;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5px;

  ${t=>!t.bps.md&&Xn`
      display: flex;
    `}

  ${t=>!t.bps.lg&&Xn`
      min-height: 85px;
    `}
`,Nf=Q.div`
  background-color: ${t=>t.bps.lg?"unset":t.color};
  width: min-content;
  display: none;
  max-height: ${t=>t.bps.lg?"unset":"25px"};
  align-items: center;
  padding: ${t=>t.bps.lg?"0px":"8px 12px"};
  border-radius: 20px;

  & img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  ${t=>!t.bps.lg&&Xn`
      display: flex;
      /* max-height: unset; */
      & img {
        /* display: none; */
      }
    `}
`,Lf=({name:t,type:e,tags:n,srcLink:r,liveLink:a,description:o,screenshotpath:i})=>{const s=window.innerWidth<380,f=window.innerWidth<750,l=window.innerWidth<950;let c={sm:s,md:f,lg:l};return vt(xf,{children:[q(kf,{src:i,alt:t}),q(Af,{bps:c,initial:{opacity:c.md?1:0},whileHover:{opacity:1},children:vt(_f,{children:[vt(Tf,{children:[vt(Sf,{children:[t," - ",e]}),q("p",{style:{fontSize:"calc(16px + 0.25vw)"},children:!c.md&&o})]}),vt(Of,{children:[q(Cf,{bps:c,children:n.map(({color:u,icon:d,name:m})=>c.lg?vt("span",{style:{color:"#fff"},children:["#",m]}):vt(Nf,{bps:c,color:u,children:[q("img",{src:d,alt:m}),q("span",{children:m})]},m))}),vt(If,{children:[vt(Oa,{href:r,target:"_blank",children:[q(co,{}),q("span",{children:"Source"})]}),vt(Oa,{href:a,target:"_blank",children:[q(Pf,{icon:yf}),q("span",{children:"Live"})]})]})]})]})})]})};function Ia(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Rf(t,e,n){return e&&Ia(t.prototype,e),n&&Ia(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var Pa="(prefers-reduced-motion: reduce)",oe=1,Df=2,ue=3,ge=4,Ye=5,cn=6,hn=7,Mf={CREATED:oe,MOUNTED:Df,IDLE:ue,MOVING:ge,SCROLLING:Ye,DRAGGING:cn,DESTROYED:hn};function Pt(t){t.length=0}function Ut(t,e,n){return Array.prototype.slice.call(t,e,n)}function W(t){return t.bind.apply(t,[null].concat(Ut(arguments,1)))}var ki=setTimeout,cr=function(){};function Ca(t){return requestAnimationFrame(t)}function _n(t,e){return typeof e===t}function Pe(t){return!Nr(t)&&_n("object",t)}var Cr=Array.isArray,Si=W(_n,"function"),$t=W(_n,"string"),Ue=W(_n,"undefined");function Nr(t){return t===null}function _i(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Ve(t){return Cr(t)?t:[t]}function dt(t,e){Ve(t).forEach(e)}function Lr(t,e){return t.indexOf(e)>-1}function ln(t,e){return t.push.apply(t,Ve(e)),t}function kt(t,e,n){t&&dt(e,function(r){r&&t.classList[n?"add":"remove"](r)})}function yt(t,e){kt(t,$t(e)?e.split(" "):e,!0)}function We(t,e){dt(e,t.appendChild.bind(t))}function Rr(t,e){dt(t,function(n){var r=(e||n).parentNode;r&&r.insertBefore(n,e)})}function Ce(t,e){return _i(t)&&(t.msMatchesSelector||t.matches).call(t,e)}function Ti(t,e){var n=t?Ut(t.children):[];return e?n.filter(function(r){return Ce(r,e)}):n}function He(t,e){return e?Ti(t,e)[0]:t.firstElementChild}var Ne=Object.keys;function Kt(t,e,n){return t&&(n?Ne(t).reverse():Ne(t)).forEach(function(r){r!=="__proto__"&&e(t[r],r)}),t}function Le(t){return Ut(arguments,1).forEach(function(e){Kt(e,function(n,r){t[r]=e[r]})}),t}function Mt(t){return Ut(arguments,1).forEach(function(e){Kt(e,function(n,r){Cr(n)?t[r]=n.slice():Pe(n)?t[r]=Mt({},Pe(t[r])?t[r]:{},n):t[r]=n})}),t}function Na(t,e){dt(e||Ne(t),function(n){delete t[n]})}function Et(t,e){dt(t,function(n){dt(e,function(r){n&&n.removeAttribute(r)})})}function j(t,e,n){Pe(e)?Kt(e,function(r,a){j(t,a,r)}):dt(t,function(r){Nr(n)||n===""?Et(r,e):r.setAttribute(e,String(n))})}function fe(t,e,n){var r=document.createElement(t);return e&&($t(e)?yt(r,e):j(r,e)),n&&We(n,r),r}function mt(t,e,n){if(Ue(n))return getComputedStyle(t)[e];Nr(n)||(t.style[e]=""+n)}function Re(t,e){mt(t,"display",e)}function Oi(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function pt(t,e){return t.getAttribute(e)}function La(t,e){return t&&t.classList.contains(e)}function lt(t){return t.getBoundingClientRect()}function Zt(t){dt(t,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function Ii(t){return He(new DOMParser().parseFromString(t,"text/html").body)}function xt(t,e){t.preventDefault(),e&&(t.stopPropagation(),t.stopImmediatePropagation())}function Pi(t,e){return t&&t.querySelector(e)}function Dr(t,e){return e?Ut(t.querySelectorAll(e)):[]}function St(t,e){kt(t,e,!1)}function lr(t){return t.timeStamp}function Gt(t){return $t(t)?t:t?t+"px":""}var Ge="splide",Mr="data-"+Ge;function Ae(t,e){if(!t)throw new Error("["+Ge+"] "+(e||""))}var Yt=Math.min,bn=Math.max,yn=Math.floor,De=Math.ceil,ft=Math.abs;function Ci(t,e,n){return ft(t-e)<n}function un(t,e,n,r){var a=Yt(e,n),o=bn(e,n);return r?a<t&&t<o:a<=t&&t<=o}function ee(t,e,n){var r=Yt(e,n),a=bn(e,n);return Yt(bn(r,t),a)}function ur(t){return+(t>0)-+(t<0)}function dr(t,e){return dt(e,function(n){t=t.replace("%s",""+n)}),t}function Fr(t){return t<10?"0"+t:""+t}var Ra={};function Ff(t){return""+t+Fr(Ra[t]=(Ra[t]||0)+1)}function Ni(){var t=[];function e(i,s,f,l){a(i,s,function(c,u,d){var m="addEventListener"in c,v=m?c.removeEventListener.bind(c,u,f,l):c.removeListener.bind(c,f);m?c.addEventListener(u,f,l):c.addListener(f),t.push([c,u,d,f,v])})}function n(i,s,f){a(i,s,function(l,c,u){t=t.filter(function(d){return d[0]===l&&d[1]===c&&d[2]===u&&(!f||d[3]===f)?(d[4](),!1):!0})})}function r(i,s,f){var l,c=!0;return typeof CustomEvent=="function"?l=new CustomEvent(s,{bubbles:c,detail:f}):(l=document.createEvent("CustomEvent"),l.initCustomEvent(s,c,!1,f)),i.dispatchEvent(l),l}function a(i,s,f){dt(i,function(l){l&&dt(s,function(c){c.split(" ").forEach(function(u){var d=u.split(".");f(l,d[0],d[1])})})})}function o(){t.forEach(function(i){i[4]()}),Pt(t)}return{bind:e,unbind:n,dispatch:r,destroy:o}}var Vt="mounted",vr="ready",Ct="move",pe="moved",zr="click",Li="active",Ri="inactive",Di="visible",Mi="hidden",et="refresh",ot="updated",de="resize",Tn="resized",Fi="drag",zi="dragging",ji="dragged",On="scroll",te="scrolled",zf="overflow",jr="destroy",$i="arrows:mounted",Yi="arrows:updated",Ui="pagination:mounted",Vi="pagination:updated",$r="navigation:mounted",Yr="autoplay:play",Wi="autoplay:playing",Ur="autoplay:pause",Vr="lazyload:loaded",Hi="sk",Gi="sh",En="ei";function K(t){var e=t?t.event.bus:document.createDocumentFragment(),n=Ni();function r(o,i){n.bind(e,Ve(o).join(" "),function(s){i.apply(i,Cr(s.detail)?s.detail:[])})}function a(o){n.dispatch(e,o,Ut(arguments,1))}return t&&t.event.on(jr,n.destroy),Le(n,{bus:e,on:r,off:W(n.unbind,e),emit:a})}function In(t,e,n,r){var a=Date.now,o,i=0,s,f=!0,l=0;function c(){if(!f){if(i=t?Yt((a()-o)/t,1):1,n&&n(i),i>=1&&(e(),o=a(),r&&++l>=r))return d();s=Ca(c)}}function u(y){y||v(),o=a()-(y?i*t:0),f=!1,s=Ca(c)}function d(){f=!0}function m(){o=a(),i=0,n&&n(i)}function v(){s&&cancelAnimationFrame(s),i=0,s=0,f=!0}function g(y){t=y}function b(){return f}return{start:u,rewind:m,pause:d,cancel:v,set:g,isPaused:b}}function jf(t){var e=t;function n(a){e=a}function r(a){return Lr(Ve(a),e)}return{set:n,is:r}}function $f(t,e){var n=In(e||0,t,null,1);return function(){n.isPaused()&&n.start()}}function Yf(t,e,n){var r=t.state,a=n.breakpoints||{},o=n.reducedMotion||{},i=Ni(),s=[];function f(){var v=n.mediaQuery==="min";Ne(a).sort(function(g,b){return v?+g-+b:+b-+g}).forEach(function(g){c(a[g],"("+(v?"min":"max")+"-width:"+g+"px)")}),c(o,Pa),u()}function l(v){v&&i.destroy()}function c(v,g){var b=matchMedia(g);i.bind(b,"change",u),s.push([v,b])}function u(){var v=r.is(hn),g=n.direction,b=s.reduce(function(y,p){return Mt(y,p[1].matches?p[0]:{})},{});Na(n),m(b),n.destroy?t.destroy(n.destroy==="completely"):v?(l(!0),t.mount()):g!==n.direction&&t.refresh()}function d(v){matchMedia(Pa).matches&&(v?Mt(n,o):Na(n,Ne(o)))}function m(v,g,b){Mt(n,v),g&&Mt(Object.getPrototypeOf(n),v),(b||!r.is(oe))&&t.emit(ot,n)}return{setup:f,destroy:l,reduce:d,set:m}}var Pn="Arrow",Cn=Pn+"Left",Nn=Pn+"Right",Bi=Pn+"Up",Xi=Pn+"Down",Da="rtl",Ln="ttb",Wn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Bi,Nn],ArrowRight:[Xi,Cn]};function Uf(t,e,n){function r(o,i,s){s=s||n.direction;var f=s===Da&&!i?1:s===Ln?0:-1;return Wn[o]&&Wn[o][f]||o.replace(/width|left|right/i,function(l,c){var u=Wn[l.toLowerCase()][f]||l;return c>0?u.charAt(0).toUpperCase()+u.slice(1):u})}function a(o){return o*(n.direction===Da?1:-1)}return{resolve:r,orient:a}}var _t="role",ce="tabindex",Vf="disabled",ht="aria-",Be=ht+"controls",Ki=ht+"current",Ma=ht+"selected",ut=ht+"label",Wr=ht+"labelledby",qi=ht+"hidden",Hr=ht+"orientation",Me=ht+"roledescription",Fa=ht+"live",za=ht+"busy",ja=ht+"atomic",Gr=[_t,ce,Vf,Be,Ki,ut,Wr,qi,Hr,Me],wt=Ge+"__",Wt="is-",Hn=Ge,$a=wt+"track",Wf=wt+"list",Rn=wt+"slide",Ji=Rn+"--clone",Hf=Rn+"__container",Br=wt+"arrows",Dn=wt+"arrow",Zi=Dn+"--prev",Qi=Dn+"--next",Mn=wt+"pagination",to=Mn+"__page",Gf=wt+"progress",Bf=Gf+"__bar",Xf=wt+"toggle",Kf=wt+"spinner",qf=wt+"sr",Jf=Wt+"initialized",Qt=Wt+"active",eo=Wt+"prev",no=Wt+"next",mr=Wt+"visible",gr=Wt+"loading",ro=Wt+"focus-in",ao=Wt+"overflow",Zf=[Qt,mr,eo,no,gr,ro,ao],Qf={slide:Rn,clone:Ji,arrows:Br,arrow:Dn,prev:Zi,next:Qi,pagination:Mn,page:to,spinner:Kf};function tc(t,e){if(Si(t.closest))return t.closest(e);for(var n=t;n&&n.nodeType===1&&!Ce(n,e);)n=n.parentElement;return n}var ec=5,Ya=200,io="touchstart mousedown",Gn="touchmove mousemove",Bn="touchend touchcancel mouseup click";function nc(t,e,n){var r=K(t),a=r.on,o=r.bind,i=t.root,s=n.i18n,f={},l=[],c=[],u=[],d,m,v;function g(){h(),P(),p()}function b(){a(et,y),a(et,g),a(ot,p),o(document,io+" keydown",function(E){v=E.type==="keydown"},{capture:!0}),o(i,"focusin",function(){kt(i,ro,!!v)})}function y(E){var C=Gr.concat("style");Pt(l),St(i,c),St(d,u),Et([d,m],C),Et(i,E?C:["style",Me])}function p(){St(i,c),St(d,u),c=L(Hn),u=L($a),yt(i,c),yt(d,u),j(i,ut,n.label),j(i,Wr,n.labelledby)}function h(){d=x("."+$a),m=He(d,"."+Wf),Ae(d&&m,"A track/list element is missing."),ln(l,Ti(m,"."+Rn+":not(."+Ji+")")),Kt({arrows:Br,pagination:Mn,prev:Zi,next:Qi,bar:Bf,toggle:Xf},function(E,C){f[C]=x("."+E)}),Le(f,{root:i,track:d,list:m,slides:l})}function P(){var E=i.id||Ff(Ge),C=n.role;i.id=E,d.id=d.id||E+"-track",m.id=m.id||E+"-list",!pt(i,_t)&&i.tagName!=="SECTION"&&C&&j(i,_t,C),j(i,Me,s.carousel),j(m,_t,"presentation")}function x(E){var C=Pi(i,E);return C&&tc(C,"."+Hn)===i?C:void 0}function L(E){return[E+"--"+n.type,E+"--"+n.direction,n.drag&&E+"--draggable",n.isNavigation&&E+"--nav",E===Hn&&Qt]}return Le(f,{setup:g,mount:b,destroy:y})}var ve="slide",he="loop",Xe="fade";function rc(t,e,n,r){var a=K(t),o=a.on,i=a.emit,s=a.bind,f=t.Components,l=t.root,c=t.options,u=c.isNavigation,d=c.updateOnMove,m=c.i18n,v=c.pagination,g=c.slideFocus,b=f.Direction.resolve,y=pt(r,"style"),p=pt(r,ut),h=n>-1,P=He(r,"."+Hf),x;function L(){h||(r.id=l.id+"-slide"+Fr(e+1),j(r,_t,v?"tabpanel":"group"),j(r,Me,m.slide),j(r,ut,p||dr(m.slideLabel,[e+1,t.length]))),E()}function E(){s(r,"click",W(i,zr,F)),s(r,"keydown",W(i,Hi,F)),o([pe,Gi,te],k),o($r,M),d&&o(Ct,D)}function C(){x=!0,a.destroy(),St(r,Zf),Et(r,Gr),j(r,"style",y),j(r,ut,p||"")}function M(){var R=t.splides.map(function(A){var N=A.splide.Components.Slides.getAt(e);return N?N.slide.id:""}).join(" ");j(r,ut,dr(m.slideX,(h?n:e)+1)),j(r,Be,R),j(r,_t,g?"button":""),g&&Et(r,Me)}function D(){x||k()}function k(){if(!x){var R=t.index;_(),O(),kt(r,eo,e===R-1),kt(r,no,e===R+1)}}function _(){var R=$();R!==La(r,Qt)&&(kt(r,Qt,R),j(r,Ki,u&&R||""),i(R?Li:Ri,F))}function O(){var R=Z(),A=!R&&(!$()||h);if(t.state.is([ge,Ye])||j(r,qi,A||""),j(Dr(r,c.focusableNodes||""),ce,A?-1:""),g&&j(r,ce,A?-1:0),R!==La(r,mr)&&(kt(r,mr,R),i(R?Di:Mi,F)),!R&&document.activeElement===r){var N=f.Slides.getAt(t.index);N&&Oi(N.slide)}}function z(R,A,N){mt(N&&P||r,R,A)}function $(){var R=t.index;return R===e||c.cloneStatus&&R===n}function Z(){if(t.is(Xe))return $();var R=lt(f.Elements.track),A=lt(r),N=b("left",!0),U=b("right",!0);return yn(R[N])<=De(A[N])&&yn(A[U])<=De(R[U])}function X(R,A){var N=ft(R-e);return!h&&(c.rewind||t.is(he))&&(N=Yt(N,t.length-N)),N<=A}var F={index:e,slideIndex:n,slide:r,container:P,isClone:h,mount:L,destroy:C,update:k,style:z,isWithin:X};return F}function ac(t,e,n){var r=K(t),a=r.on,o=r.emit,i=r.bind,s=e.Elements,f=s.slides,l=s.list,c=[];function u(){d(),a(et,m),a(et,d)}function d(){f.forEach(function(k,_){g(k,_,-1)})}function m(){x(function(k){k.destroy()}),Pt(c)}function v(){x(function(k){k.update()})}function g(k,_,O){var z=rc(t,_,O,k);z.mount(),c.push(z),c.sort(function($,Z){return $.index-Z.index})}function b(k){return k?L(function(_){return!_.isClone}):c}function y(k){var _=e.Controller,O=_.toIndex(k),z=_.hasFocus()?1:n.perPage;return L(function($){return un($.index,O,O+z-1)})}function p(k){return L(k)[0]}function h(k,_){dt(k,function(O){if($t(O)&&(O=Ii(O)),_i(O)){var z=f[_];z?Rr(O,z):We(l,O),yt(O,n.classes.slide),C(O,W(o,de))}}),o(et)}function P(k){Zt(L(k).map(function(_){return _.slide})),o(et)}function x(k,_){b(_).forEach(k)}function L(k){return c.filter(Si(k)?k:function(_){return $t(k)?Ce(_.slide,k):Lr(Ve(k),_.index)})}function E(k,_,O){x(function(z){z.style(k,_,O)})}function C(k,_){var O=Dr(k,"img"),z=O.length;z?O.forEach(function($){i($,"load error",function(){--z||_()})}):_()}function M(k){return k?f.length:c.length}function D(){return c.length>n.perPage}return{mount:u,destroy:m,update:v,register:g,get:b,getIn:y,getAt:p,add:h,remove:P,forEach:x,filter:L,style:E,getLength:M,isEnough:D}}function ic(t,e,n){var r=K(t),a=r.on,o=r.bind,i=r.emit,s=e.Slides,f=e.Direction.resolve,l=e.Elements,c=l.root,u=l.track,d=l.list,m=s.getAt,v=s.style,g,b,y;function p(){h(),o(window,"resize load",$f(W(i,de))),a([ot,et],h),a(de,P)}function h(){g=n.direction===Ln,mt(c,"maxWidth",Gt(n.width)),mt(u,f("paddingLeft"),x(!1)),mt(u,f("paddingRight"),x(!0)),P(!0)}function P(F){var R=lt(c);(F||b.width!==R.width||b.height!==R.height)&&(mt(u,"height",L()),v(f("marginRight"),Gt(n.gap)),v("width",C()),v("height",M(),!0),b=R,i(Tn),y!==(y=X())&&(kt(c,ao,y),i(zf,y)))}function x(F){var R=n.padding,A=f(F?"right":"left");return R&&Gt(R[A]||(Pe(R)?0:R))||"0px"}function L(){var F="";return g&&(F=E(),Ae(F,"height or heightRatio is missing."),F="calc("+F+" - "+x(!1)+" - "+x(!0)+")"),F}function E(){return Gt(n.height||lt(d).width*n.heightRatio)}function C(){return n.autoWidth?null:Gt(n.fixedWidth)||(g?"":D())}function M(){return Gt(n.fixedHeight)||(g?n.autoHeight?null:D():E())}function D(){var F=Gt(n.gap);return"calc((100%"+(F&&" + "+F)+")/"+(n.perPage||1)+(F&&" - "+F)+")"}function k(){return lt(d)[f("width")]}function _(F,R){var A=m(F||0);return A?lt(A.slide)[f("width")]+(R?0:$()):0}function O(F,R){var A=m(F);if(A){var N=lt(A.slide)[f("right")],U=lt(d)[f("left")];return ft(N-U)+(R?0:$())}return 0}function z(F){return O(t.length-1)-O(0)+_(0,F)}function $(){var F=m(0);return F&&parseFloat(mt(F.slide,f("marginRight")))||0}function Z(F){return parseFloat(mt(u,f("padding"+(F?"Right":"Left"))))||0}function X(){return t.is(Xe)||z(!0)>k()}return{mount:p,resize:P,listSize:k,slideSize:_,sliderSize:z,totalSize:O,getPadding:Z,isOverflow:X}}var oc=2;function sc(t,e,n){var r=K(t),a=r.on,o=e.Elements,i=e.Slides,s=e.Direction.resolve,f=[],l;function c(){a(et,u),a([ot,de],m),(l=b())&&(v(l),e.Layout.resize(!0))}function u(){d(),c()}function d(){Zt(f),Pt(f),r.destroy()}function m(){var y=b();l!==y&&(l<y||!y)&&r.emit(et)}function v(y){var p=i.get().slice(),h=p.length;if(h){for(;p.length<y;)ln(p,p);ln(p.slice(-y),p.slice(0,y)).forEach(function(P,x){var L=x<y,E=g(P.slide,x);L?Rr(E,p[0].slide):We(o.list,E),ln(f,E),i.register(E,x-y+(L?0:h),P.index)})}}function g(y,p){var h=y.cloneNode(!0);return yt(h,n.classes.clone),h.id=t.root.id+"-clone"+Fr(p+1),h}function b(){var y=n.clones;if(!t.is(he))y=0;else if(Ue(y)){var p=n[s("fixedWidth")]&&e.Layout.slideSize(0),h=p&&De(lt(o.track)[s("width")]/p);y=h||n[s("autoWidth")]&&t.length||n.perPage*oc}return y}return{mount:c,destroy:d}}function fc(t,e,n){var r=K(t),a=r.on,o=r.emit,i=t.state.set,s=e.Layout,f=s.slideSize,l=s.getPadding,c=s.totalSize,u=s.listSize,d=s.sliderSize,m=e.Direction,v=m.resolve,g=m.orient,b=e.Elements,y=b.list,p=b.track,h;function P(){h=e.Transition,a([Vt,Tn,ot,et],x)}function x(){e.Controller.isBusy()||(e.Scroll.cancel(),E(t.index),e.Slides.update())}function L(A,N,U,at){A!==N&&F(A>U)&&(k(),C(D(z(),A>U),!0)),i(ge),o(Ct,N,U,A),h.start(N,function(){i(ue),o(pe,N,U,A),at&&at()})}function E(A){C(O(A,!0))}function C(A,N){if(!t.is(Xe)){var U=N?A:M(A);mt(y,"transform","translate"+v("X")+"("+U+"px)"),A!==U&&o(Gi)}}function M(A){if(t.is(he)){var N=_(A),U=N>e.Controller.getEnd(),at=N<0;(at||U)&&(A=D(A,U))}return A}function D(A,N){var U=A-X(N),at=d();return A-=g(at*(De(ft(U)/at)||1))*(N?1:-1),A}function k(){C(z(),!0),h.cancel()}function _(A){for(var N=e.Slides.get(),U=0,at=1/0,rt=0;rt<N.length;rt++){var Lt=N[rt].index,w=ft(O(Lt,!0)-A);if(w<=at)at=w,U=Lt;else break}return U}function O(A,N){var U=g(c(A-1)-Z(A));return N?$(U):U}function z(){var A=v("left");return lt(y)[A]-lt(p)[A]+g(l(!1))}function $(A){return n.trimSpace&&t.is(ve)&&(A=ee(A,0,g(d(!0)-u()))),A}function Z(A){var N=n.focus;return N==="center"?(u()-f(A,!0))/2:+N*f(A)||0}function X(A){return O(A?e.Controller.getEnd():0,!!n.trimSpace)}function F(A){var N=g(D(z(),A));return A?N>=0:N<=y[v("scrollWidth")]-lt(p)[v("width")]}function R(A,N){N=Ue(N)?z():N;var U=A!==!0&&g(N)<g(X(!1)),at=A!==!1&&g(N)>g(X(!0));return U||at}return{mount:P,move:L,jump:E,translate:C,shift:D,cancel:k,toIndex:_,toPosition:O,getPosition:z,getLimit:X,exceededLimit:R,reposition:x}}function cc(t,e,n){var r=K(t),a=r.on,o=r.emit,i=e.Move,s=i.getPosition,f=i.getLimit,l=i.toPosition,c=e.Slides,u=c.isEnough,d=c.getLength,m=n.omitEnd,v=t.is(he),g=t.is(ve),b=W(z,!1),y=W(z,!0),p=n.start||0,h,P=p,x,L,E;function C(){M(),a([ot,et,En],M),a(Tn,D)}function M(){x=d(!0),L=n.perMove,E=n.perPage,h=F();var w=ee(p,0,m?h:x-1);w!==p&&(p=w,i.reposition())}function D(){h!==F()&&o(En)}function k(w,V,st){if(!Lt()){var tt=O(w),it=X(tt);it>-1&&(V||it!==p)&&(U(it),i.move(tt,it,P,st))}}function _(w,V,st,tt){e.Scroll.scroll(w,V,st,function(){var it=X(i.toIndex(s()));U(m?Yt(it,h):it),tt&&tt()})}function O(w){var V=p;if($t(w)){var st=w.match(/([+\-<>])(\d+)?/)||[],tt=st[1],it=st[2];tt==="+"||tt==="-"?V=$(p+ +(""+tt+(+it||1)),p):tt===">"?V=it?R(+it):b(!0):tt==="<"&&(V=y(!0))}else V=v?w:ee(w,0,h);return V}function z(w,V){var st=L||(rt()?1:E),tt=$(p+st*(w?-1:1),p,!(L||rt()));return tt===-1&&g&&!Ci(s(),f(!w),1)?w?0:h:V?tt:X(tt)}function $(w,V,st){if(u()||rt()){var tt=Z(w);tt!==w&&(V=w,w=tt,st=!1),w<0||w>h?!L&&(un(0,w,V,!0)||un(h,V,w,!0))?w=R(A(w)):v?w=st?w<0?-(x%E||E):x:w:n.rewind?w=w<0?h:0:w=-1:st&&w!==V&&(w=R(A(V)+(w<V?-1:1)))}else w=-1;return w}function Z(w){if(g&&n.trimSpace==="move"&&w!==p)for(var V=s();V===l(w,!0)&&un(w,0,t.length-1,!n.rewind);)w<p?--w:++w;return w}function X(w){return v?(w+x)%x||0:w}function F(){for(var w=x-(rt()||v&&L?1:E);m&&w-- >0;)if(l(x-1,!0)!==l(w,!0)){w++;break}return ee(w,0,x-1)}function R(w){return ee(rt()?w:E*w,0,h)}function A(w){return rt()?Yt(w,h):yn((w>=h?x-1:w)/E)}function N(w){var V=i.toIndex(w);return g?ee(V,0,h):V}function U(w){w!==p&&(P=p,p=w)}function at(w){return w?P:p}function rt(){return!Ue(n.focus)||n.isNavigation}function Lt(){return t.state.is([ge,Ye])&&!!n.waitForTransition}return{mount:C,go:k,scroll:_,getNext:b,getPrev:y,getAdjacent:z,getEnd:F,setIndex:U,getIndex:at,toIndex:R,toPage:A,toDest:N,hasFocus:rt,isBusy:Lt}}var lc="http://www.w3.org/2000/svg",uc="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",on=40;function dc(t,e,n){var r=K(t),a=r.on,o=r.bind,i=r.emit,s=n.classes,f=n.i18n,l=e.Elements,c=e.Controller,u=l.arrows,d=l.track,m=u,v=l.prev,g=l.next,b,y,p={};function h(){x(),a(ot,P)}function P(){L(),h()}function x(){var _=n.arrows;_&&!(v&&g)&&M(),v&&g&&(Le(p,{prev:v,next:g}),Re(m,_?"":"none"),yt(m,y=Br+"--"+n.direction),_&&(E(),k(),j([v,g],Be,d.id),i($i,v,g)))}function L(){r.destroy(),St(m,y),b?(Zt(u?[v,g]:m),v=g=null):Et([v,g],Gr)}function E(){a([Vt,pe,et,te,En],k),o(g,"click",W(C,">")),o(v,"click",W(C,"<"))}function C(_){c.go(_,!0)}function M(){m=u||fe("div",s.arrows),v=D(!0),g=D(!1),b=!0,We(m,[v,g]),!u&&Rr(m,d)}function D(_){var O='<button class="'+s.arrow+" "+(_?s.prev:s.next)+'" type="button"><svg xmlns="'+lc+'" viewBox="0 0 '+on+" "+on+'" width="'+on+'" height="'+on+'" focusable="false"><path d="'+(n.arrowPath||uc)+'" />';return Ii(O)}function k(){if(v&&g){var _=t.index,O=c.getPrev(),z=c.getNext(),$=O>-1&&_<O?f.last:f.prev,Z=z>-1&&_>z?f.first:f.next;v.disabled=O<0,g.disabled=z<0,j(v,ut,$),j(g,ut,Z),i(Yi,v,g,O,z)}}return{arrows:p,mount:h,destroy:L,update:k}}var vc=Mr+"-interval";function mc(t,e,n){var r=K(t),a=r.on,o=r.bind,i=r.emit,s=In(n.interval,t.go.bind(t,">"),E),f=s.isPaused,l=e.Elements,c=e.Elements,u=c.root,d=c.toggle,m=n.autoplay,v,g,b=m==="pause";function y(){m&&(p(),d&&j(d,Be,l.track.id),b||h(),L())}function p(){n.pauseOnHover&&o(u,"mouseenter mouseleave",function(M){v=M.type==="mouseenter",x()}),n.pauseOnFocus&&o(u,"focusin focusout",function(M){g=M.type==="focusin",x()}),d&&o(d,"click",function(){b?h():P(!0)}),a([Ct,On,et],s.rewind),a(Ct,C)}function h(){f()&&e.Slides.isEnough()&&(s.start(!n.resetProgress),g=v=b=!1,L(),i(Yr))}function P(M){M===void 0&&(M=!0),b=!!M,L(),f()||(s.pause(),i(Ur))}function x(){b||(v||g?P(!1):h())}function L(){d&&(kt(d,Qt,!b),j(d,ut,n.i18n[b?"play":"pause"]))}function E(M){var D=l.bar;D&&mt(D,"width",M*100+"%"),i(Wi,M)}function C(M){var D=e.Slides.getAt(M);s.set(D&&+pt(D.slide,vc)||n.interval)}return{mount:y,destroy:s.cancel,play:h,pause:P,isPaused:f}}function gc(t,e,n){var r=K(t),a=r.on;function o(){n.cover&&(a(Vr,W(s,!0)),a([Vt,ot,et],W(i,!0)))}function i(f){e.Slides.forEach(function(l){var c=He(l.container||l.slide,"img");c&&c.src&&s(f,c,l)})}function s(f,l,c){c.style("background",f?'center/cover no-repeat url("'+l.src+'")':"",!0),Re(l,f?"none":"")}return{mount:o,destroy:W(i,!1)}}var pc=10,hc=600,bc=.6,yc=1.5,Ec=800;function wc(t,e,n){var r=K(t),a=r.on,o=r.emit,i=t.state.set,s=e.Move,f=s.getPosition,l=s.getLimit,c=s.exceededLimit,u=s.translate,d=t.is(ve),m,v,g=1;function b(){a(Ct,P),a([ot,et],x)}function y(E,C,M,D,k){var _=f();if(P(),M&&(!d||!c())){var O=e.Layout.sliderSize(),z=ur(E)*O*yn(ft(E)/O)||0;E=s.toPosition(e.Controller.toDest(E%O))+z}var $=Ci(_,E,1);g=1,C=$?0:C||bn(ft(E-_)/yc,Ec),v=D,m=In(C,p,W(h,_,E,k),1),i(Ye),o(On),m.start()}function p(){i(ue),v&&v(),o(te)}function h(E,C,M,D){var k=f(),_=E+(C-E)*L(D),O=(_-k)*g;u(k+O),d&&!M&&c()&&(g*=bc,ft(O)<pc&&y(l(c(!0)),hc,!1,v,!0))}function P(){m&&m.cancel()}function x(){m&&!m.isPaused()&&(P(),p())}function L(E){var C=n.easingFunc;return C?C(E):1-Math.pow(1-E,4)}return{mount:b,destroy:P,scroll:y,cancel:x}}var ne={passive:!1,capture:!0};function xc(t,e,n){var r=K(t),a=r.on,o=r.emit,i=r.bind,s=r.unbind,f=t.state,l=e.Move,c=e.Scroll,u=e.Controller,d=e.Elements.track,m=e.Media.reduce,v=e.Direction,g=v.resolve,b=v.orient,y=l.getPosition,p=l.exceededLimit,h,P,x,L,E,C=!1,M,D,k;function _(){i(d,Gn,cr,ne),i(d,Bn,cr,ne),i(d,io,z,ne),i(d,"click",X,{capture:!0}),i(d,"dragstart",xt),a([Vt,ot],O)}function O(){var I=n.drag;Jr(!I),L=I==="free"}function z(I){if(M=!1,!D){var B=it(I);tt(I.target)&&(B||!I.button)&&(u.isBusy()?xt(I,!0):(k=B?d:window,E=f.is([ge,Ye]),x=null,i(k,Gn,$,ne),i(k,Bn,Z,ne),l.cancel(),c.cancel(),F(I)))}}function $(I){if(f.is(cn)||(f.set(cn),o(Fi)),I.cancelable)if(E){l.translate(h+st(rt(I)));var B=Lt(I)>Ya,Ht=C!==(C=p());(B||Ht)&&F(I),M=!0,o(zi),xt(I)}else N(I)&&(E=A(I),xt(I))}function Z(I){f.is(cn)&&(f.set(ue),o(ji)),E&&(R(I),xt(I)),s(k,Gn,$),s(k,Bn,Z),E=!1}function X(I){!D&&M&&xt(I,!0)}function F(I){x=P,P=I,h=y()}function R(I){var B=U(I),Ht=at(B),be=n.rewind&&n.rewindByDrag;m(!1),L?u.scroll(Ht,0,n.snap):t.is(Xe)?u.go(b(ur(B))<0?be?"<":"-":be?">":"+"):t.is(ve)&&C&&be?u.go(p(!0)?">":"<"):u.go(u.toDest(Ht),!0),m(!0)}function A(I){var B=n.dragMinThreshold,Ht=Pe(B),be=Ht&&B.mouse||0,fo=(Ht?B.touch:+B)||10;return ft(rt(I))>(it(I)?fo:be)}function N(I){return ft(rt(I))>ft(rt(I,!0))}function U(I){if(t.is(he)||!C){var B=Lt(I);if(B&&B<Ya)return rt(I)/B}return 0}function at(I){return y()+ur(I)*Yt(ft(I)*(n.flickPower||600),L?1/0:e.Layout.listSize()*(n.flickMaxPages||1))}function rt(I,B){return V(I,B)-V(w(I),B)}function Lt(I){return lr(I)-lr(w(I))}function w(I){return P===I&&x||P}function V(I,B){return(it(I)?I.changedTouches[0]:I)["page"+g(B?"Y":"X")]}function st(I){return I/(C&&t.is(ve)?ec:1)}function tt(I){var B=n.noDrag;return!Ce(I,"."+to+", ."+Dn)&&(!B||!Ce(I,B))}function it(I){return typeof TouchEvent<"u"&&I instanceof TouchEvent}function so(){return E}function Jr(I){D=I}return{mount:_,disable:Jr,isDragging:so}}var Ac={Spacebar:" ",Right:Nn,Left:Cn,Up:Bi,Down:Xi};function Xr(t){return t=$t(t)?t:t.key,Ac[t]||t}var Ua="keydown";function kc(t,e,n){var r=K(t),a=r.on,o=r.bind,i=r.unbind,s=t.root,f=e.Direction.resolve,l,c;function u(){d(),a(ot,m),a(ot,d),a(Ct,g)}function d(){var y=n.keyboard;y&&(l=y==="global"?window:s,o(l,Ua,b))}function m(){i(l,Ua)}function v(y){c=y}function g(){var y=c;c=!0,ki(function(){c=y})}function b(y){if(!c){var p=Xr(y);p===f(Cn)?t.go("<"):p===f(Nn)&&t.go(">")}}return{mount:u,destroy:m,disable:v}}var ke=Mr+"-lazy",dn=ke+"-srcset",Sc="["+ke+"], ["+dn+"]";function _c(t,e,n){var r=K(t),a=r.on,o=r.off,i=r.bind,s=r.emit,f=n.lazyLoad==="sequential",l=[pe,te],c=[];function u(){n.lazyLoad&&(d(),a(et,d))}function d(){Pt(c),m(),f?y():(o(l),a(l,v),v())}function m(){e.Slides.forEach(function(p){Dr(p.slide,Sc).forEach(function(h){var P=pt(h,ke),x=pt(h,dn);if(P!==h.src||x!==h.srcset){var L=n.classes.spinner,E=h.parentElement,C=He(E,"."+L)||fe("span",L,E);c.push([h,p,C]),h.src||Re(h,"none")}})})}function v(){c=c.filter(function(p){var h=n.perPage*((n.preloadPages||1)+1)-1;return p[1].isWithin(t.index,h)?g(p):!0}),c.length||o(l)}function g(p){var h=p[0];yt(p[1].slide,gr),i(h,"load error",W(b,p)),j(h,"src",pt(h,ke)),j(h,"srcset",pt(h,dn)),Et(h,ke),Et(h,dn)}function b(p,h){var P=p[0],x=p[1];St(x.slide,gr),h.type!=="error"&&(Zt(p[2]),Re(P,""),s(Vr,P,x),s(de)),f&&y()}function y(){c.length&&g(c.shift())}return{mount:u,destroy:W(Pt,c),check:v}}function Tc(t,e,n){var r=K(t),a=r.on,o=r.emit,i=r.bind,s=e.Slides,f=e.Elements,l=e.Controller,c=l.hasFocus,u=l.getIndex,d=l.go,m=e.Direction.resolve,v=f.pagination,g=[],b,y;function p(){h(),a([ot,et,En],p);var D=n.pagination;v&&Re(v,D?"":"none"),D&&(a([Ct,On,te],M),P(),M(),o(Ui,{list:b,items:g},C(t.index)))}function h(){b&&(Zt(v?Ut(b.children):b),St(b,y),Pt(g),b=null),r.destroy()}function P(){var D=t.length,k=n.classes,_=n.i18n,O=n.perPage,z=c()?l.getEnd()+1:De(D/O);b=v||fe("ul",k.pagination,f.track.parentElement),yt(b,y=Mn+"--"+E()),j(b,_t,"tablist"),j(b,ut,_.select),j(b,Hr,E()===Ln?"vertical":"");for(var $=0;$<z;$++){var Z=fe("li",null,b),X=fe("button",{class:k.page,type:"button"},Z),F=s.getIn($).map(function(A){return A.slide.id}),R=!c()&&O>1?_.pageX:_.slideX;i(X,"click",W(x,$)),n.paginationKeyboard&&i(X,"keydown",W(L,$)),j(Z,_t,"presentation"),j(X,_t,"tab"),j(X,Be,F.join(" ")),j(X,ut,dr(R,$+1)),j(X,ce,-1),g.push({li:Z,button:X,page:$})}}function x(D){d(">"+D,!0)}function L(D,k){var _=g.length,O=Xr(k),z=E(),$=-1;O===m(Nn,!1,z)?$=++D%_:O===m(Cn,!1,z)?$=(--D+_)%_:O==="Home"?$=0:O==="End"&&($=_-1);var Z=g[$];Z&&(Oi(Z.button),d(">"+$),xt(k,!0))}function E(){return n.paginationDirection||n.direction}function C(D){return g[l.toPage(D)]}function M(){var D=C(u(!0)),k=C(u());if(D){var _=D.button;St(_,Qt),Et(_,Ma),j(_,ce,-1)}if(k){var O=k.button;yt(O,Qt),j(O,Ma,!0),j(O,ce,"")}o(Vi,{list:b,items:g},D,k)}return{items:g,mount:p,destroy:h,getAt:C,update:M}}var Oc=[" ","Enter"];function Ic(t,e,n){var r=n.isNavigation,a=n.slideFocus,o=[];function i(){t.splides.forEach(function(v){v.isParent||(l(t,v.splide),l(v.splide,t))}),r&&c()}function s(){o.forEach(function(v){v.destroy()}),Pt(o)}function f(){s(),i()}function l(v,g){var b=K(v);b.on(Ct,function(y,p,h){g.go(g.is(he)?h:y)}),o.push(b)}function c(){var v=K(t),g=v.on;g(zr,d),g(Hi,m),g([Vt,ot],u),o.push(v),v.emit($r,t.splides)}function u(){j(e.Elements.list,Hr,n.direction===Ln?"vertical":"")}function d(v){t.go(v.index)}function m(v,g){Lr(Oc,Xr(g))&&(d(v),xt(g))}return{setup:W(e.Media.set,{slideFocus:Ue(a)?r:a},!0),mount:i,destroy:s,remount:f}}function Pc(t,e,n){var r=K(t),a=r.bind,o=0;function i(){n.wheel&&a(e.Elements.track,"wheel",s,ne)}function s(l){if(l.cancelable){var c=l.deltaY,u=c<0,d=lr(l),m=n.wheelMinThreshold||0,v=n.wheelSleep||0;ft(c)>m&&d-o>v&&(t.go(u?"<":">"),o=d),f(u)&&xt(l)}}function f(l){return!n.releaseWheel||t.state.is(ge)||e.Controller.getAdjacent(l)!==-1}return{mount:i}}var Cc=90;function Nc(t,e,n){var r=K(t),a=r.on,o=e.Elements.track,i=n.live&&!n.isNavigation,s=fe("span",qf),f=In(Cc,W(c,!1));function l(){i&&(d(!e.Autoplay.isPaused()),j(o,ja,!0),s.textContent="…",a(Yr,W(d,!0)),a(Ur,W(d,!1)),a([pe,te],W(c,!0)))}function c(m){j(o,za,m),m?(We(o,s),f.start()):(Zt(s),f.cancel())}function u(){Et(o,[Fa,ja,za]),Zt(s)}function d(m){i&&j(o,Fa,m?"off":"polite")}return{mount:l,disable:d,destroy:u}}var Lc=Object.freeze({__proto__:null,Media:Yf,Direction:Uf,Elements:nc,Slides:ac,Layout:ic,Clones:sc,Move:fc,Controller:cc,Arrows:dc,Autoplay:mc,Cover:gc,Scroll:wc,Drag:xc,Keyboard:kc,LazyLoad:_c,Pagination:Tc,Sync:Ic,Wheel:Pc,Live:Nc}),Rc={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},Dc={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Qf,i18n:Rc,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Mc(t,e,n){var r=e.Slides;function a(){K(t).on([Vt,et],o)}function o(){r.forEach(function(s){s.style("transform","translateX(-"+100*s.index+"%)")})}function i(s,f){r.style("transition","opacity "+n.speed+"ms "+n.easing),ki(f)}return{mount:a,start:i,cancel:cr}}function Fc(t,e,n){var r=e.Move,a=e.Controller,o=e.Scroll,i=e.Elements.list,s=W(mt,i,"transition"),f;function l(){K(t).bind(i,"transitionend",function(m){m.target===i&&f&&(u(),f())})}function c(m,v){var g=r.toPosition(m,!0),b=r.getPosition(),y=d(m);ft(g-b)>=1&&y>=1?n.useScroll?o.scroll(g,y,!1,v):(s("transform "+y+"ms "+n.easing),r.translate(g,!0),f=v):(r.jump(m),v())}function u(){s(""),o.cancel()}function d(m){var v=n.rewindSpeed;if(t.is(ve)&&v){var g=a.getIndex(!0),b=a.getEnd();if(g===0&&m>=b||g>=b&&m===0)return v}return n.speed}return{mount:l,start:c,cancel:u}}var zc=function(){function t(n,r){this.event=K(),this.Components={},this.state=jf(oe),this.splides=[],this._o={},this._E={};var a=$t(n)?Pi(document,n):n;Ae(a,a+" is invalid."),this.root=a,r=Mt({label:pt(a,ut)||"",labelledby:pt(a,Wr)||""},Dc,t.defaults,r||{});try{Mt(r,JSON.parse(pt(a,Mr)))}catch{Ae(!1,"Invalid JSON")}this._o=Object.create(Mt({},r))}var e=t.prototype;return e.mount=function(r,a){var o=this,i=this.state,s=this.Components;Ae(i.is([oe,hn]),"Already mounted!"),i.set(oe),this._C=s,this._T=a||this._T||(this.is(Xe)?Mc:Fc),this._E=r||this._E;var f=Le({},Lc,this._E,{Transition:this._T});return Kt(f,function(l,c){var u=l(o,s,o._o);s[c]=u,u.setup&&u.setup()}),Kt(s,function(l){l.mount&&l.mount()}),this.emit(Vt),yt(this.root,Jf),i.set(ue),this.emit(vr),this},e.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(ue)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},e.go=function(r){return this._C.Controller.go(r),this},e.on=function(r,a){return this.event.on(r,a),this},e.off=function(r){return this.event.off(r),this},e.emit=function(r){var a;return(a=this.event).emit.apply(a,[r].concat(Ut(arguments,1))),this},e.add=function(r,a){return this._C.Slides.add(r,a),this},e.remove=function(r){return this._C.Slides.remove(r),this},e.is=function(r){return this._o.type===r},e.refresh=function(){return this.emit(et),this},e.destroy=function(r){r===void 0&&(r=!0);var a=this.event,o=this.state;return o.is(oe)?K(this).on(vr,this.destroy.bind(this,r)):(Kt(this._C,function(i){i.destroy&&i.destroy(r)},!0),a.emit(jr),a.destroy(),r&&Pt(this.splides),o.set(hn)),this},Rf(t,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),t}(),Kr=zc;Kr.defaults={};Kr.STATES=Mf;var Va=[[Vt,"onMounted"],[vr,"onReady"],[Ct,"onMove"],[pe,"onMoved"],[zr,"onClick"],[Li,"onActive"],[Ri,"onInactive"],[Di,"onVisible"],[Mi,"onHidden"],[et,"onRefresh"],[ot,"onUpdated"],[de,"onResize"],[Tn,"onResized"],[Fi,"onDrag"],[zi,"onDragging"],[ji,"onDragged"],[On,"onScroll"],[te,"onScrolled"],[jr,"onDestroy"],[$i,"onArrowsMounted"],[Yi,"onArrowsUpdated"],[Ui,"onPaginationMounted"],[Vi,"onPaginationUpdated"],[$r,"onNavigationMounted"],[Yr,"onAutoplayPlay"],[Wi,"onAutoplayPlaying"],[Ur,"onAutoplayPause"],[Vr,"onLazyLoadLoaded"]];function qr(...t){return t.filter(Boolean).join(" ")}function wn(t){return t!==null&&typeof t=="object"}function pr(t,e){if(Array.isArray(t)&&Array.isArray(e))return t.length===e.length&&!t.some((n,r)=>!pr(n,e[r]));if(wn(t)&&wn(e)){const n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&!n.some(a=>!Object.prototype.hasOwnProperty.call(e,a)||!pr(t[a],e[a]))}return t===e}function jc(t,e){return t.length===e.length&&!t.some((n,r)=>n!==e[r])}function $c(t,e){if(t){const n=Object.keys(t);for(let r=0;r<n.length;r++){const a=n[r];if(a!=="__proto__"&&e(t[a],a)===!1)break}}return t}function hr(t,e){const n=t;return $c(e,(r,a)=>{Array.isArray(r)?n[a]=r.slice():wn(r)?n[a]=hr(wn(n[a])?n[a]:{},r):n[a]=r}),n}var Yc=({children:t,className:e,...n})=>At.createElement("div",{className:qr("splide__track",e),...n},At.createElement("ul",{className:"splide__list"},t)),oo=class extends At.Component{constructor(){super(...arguments),this.splideRef=At.createRef(),this.slides=[]}componentDidMount(){const{options:t,extensions:e,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new Kr(r,t),this.bind(this.splide),this.splide.mount(e,n),this.options=hr({},t||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:t}=this.props;t&&!pr(this.options,t)&&(this.splide.options=t,this.options=hr({},t));const e=this.getSlides();jc(this.slides,e)||(this.splide.refresh(),this.slides=e)}sync(t){var e;(e=this.splide)==null||e.sync(t)}go(t){var e;(e=this.splide)==null||e.go(t)}getSlides(){var t;if(this.splide){const e=(t=this.splide.Components.Elements)==null?void 0:t.list.children;return e&&Array.prototype.slice.call(e)||[]}return[]}bind(t){Va.forEach(([e,n])=>{const r=this.props[n];typeof r=="function"&&t.on(e,(...a)=>{r(t,...a)})})}omit(t,e){return e.forEach(n=>{Object.prototype.hasOwnProperty.call(t,n)&&delete t[n]}),t}render(){const{className:t,tag:e="div",hasTrack:n=!0,children:r,...a}=this.props;return At.createElement(e,{className:qr("splide",t),ref:this.splideRef,...this.omit(a,["options",...Va.map(o=>o[1])])},n?At.createElement(Yc,null,r):r)}},Uc=({children:t,className:e,...n})=>At.createElement("li",{className:qr("splide__slide",e),...n},t);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */const Vc=ye.lazy(()=>lo(()=>import("./index-256b01c5.js").then(t=>t.a9),["assets/index-256b01c5.js","assets/index-253c5a0c.css"])),Wc=Q.div`
  height: 400vh;
  /* height: calc(100vh + 500px); */
  /* overflow: hidden; */
  background: linear-gradient(
    146deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: rgb(0, 0, 0);
  & .splide,
  & .splide__track {
    height: 100%;
  }
`;Q(oo)``;const Hc=Q(Uc)`
  padding: 30px;
  display: flex;
  align-items: center;
`,Gc=Q.div`
  min-width: calc(300px + 10vw);
  margin: 0 auto;
  max-width: 800px;
`,Bc=uo`
    0% {
        opacity: 0;
        transform: translateY(-200px);
      }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
`,Xc=Q(Wa.div)`
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  /* display: flex;
  align-items: center; */
  /* gap: calc(12px + 6vw); */
  width: 100%;
  height: 65vh;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  &::-webkit-scrollbar {
    display: none;
  }
  /* & > div {
    transform: translateY(-200px);
    opacity:0;
    animation: ${Bc} 0.5s ease-in-out forwards;
  }

  & > div:nth-child(2) {
    animation-delay: 500ms;
  }
  & > div:nth-child(3) {
    animation-delay: 1000ms;
  }
  & > div:nth-child(4) {
    animation-delay: 1500ms;
  }
  & > div:nth-child(5) {
    animation-delay: 2000ms;
  } */
`,Kc=Q.div`
  position: fixed;
  bottom: 0;
`,qc=Q.img`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background-color: #ffffff;
  border-radius: 50%;
  border: 2px solid #000;
`,Jc={hidden:{},show:{}};Q.div``;const Qc=()=>{const t=ye.useRef(null),e=ye.useRef(null);return ye.useEffect(()=>{let n=t.current,r=e.current,a=-1;const o=()=>{let i=window.scrollY,s=Math.abs(a-i);i>a?(n.scrollBy(s,0),r.style.transform=`rotate(${a+s}deg)`):s<a&&(n.scrollBy(-s,0),r.style.transform=`rotate(${a-s}deg)`),a=i};return addEventListener("scroll",o),()=>{removeEventListener("scroll",o)}},[]),q(Wc,{children:vt(ye.Suspense,{fallback:q(mo,{}),children:[q(Vc,{horizontal:!0,color:"#fff"}),q(Xc,{variants:Jc,initial:"hidden",animate:"show",children:q(oo,{"aria-label":"My Caro",children:Eo.map((n,r)=>q(Hc,{children:q(Gc,{children:q(Lf,{name:n.name,type:n.type,tags:n.tags,liveLink:n.liveLink,srcLink:n.srcLink,description:n.description,screenshotpath:n.screenshotpath},r)})}))})}),q(Kc,{children:q(qc,{src:"/svg/yin-yang-solid.svg",ref:e})})]})})};export{Qc as default};
