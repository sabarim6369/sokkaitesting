(()=>{var e={};e.id=5433,e.ids=[5433],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},83997:e=>{"use strict";e.exports=require("tty")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},42152:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=s(70260),n=s(28203),o=s(25155),a=s.n(o),i=s(67292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let c=["",{children:["frontend",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,99572)),"C:\\Users\\User\\Documents\\Projects\\sokkai1\\sokkai\\clothing\\src\\app\\frontend\\login\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,62804)),"C:\\Users\\User\\Documents\\Projects\\sokkai1\\sokkai\\clothing\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\User\\Documents\\Projects\\sokkai1\\sokkai\\clothing\\src\\app\\frontend\\login\\page.jsx"],u={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/frontend/login/page",pathname:"/frontend/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},59732:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,13219,23)),Promise.resolve().then(s.t.bind(s,34863,23)),Promise.resolve().then(s.t.bind(s,25155,23)),Promise.resolve().then(s.t.bind(s,9350,23)),Promise.resolve().then(s.t.bind(s,96313,23)),Promise.resolve().then(s.t.bind(s,48530,23)),Promise.resolve().then(s.t.bind(s,88921,23))},96116:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,66959,23)),Promise.resolve().then(s.t.bind(s,33875,23)),Promise.resolve().then(s.t.bind(s,88903,23)),Promise.resolve().then(s.t.bind(s,84178,23)),Promise.resolve().then(s.t.bind(s,86013,23)),Promise.resolve().then(s.t.bind(s,87190,23)),Promise.resolve().then(s.t.bind(s,61365,23))},67020:(e,t,s)=>{Promise.resolve().then(s.bind(s,99572))},73100:(e,t,s)=>{Promise.resolve().then(s.bind(s,9320))},97310:(e,t,s)=>{Promise.resolve().then(s.bind(s,62804))},65766:(e,t,s)=>{Promise.resolve().then(s.bind(s,29382))},15070:(e,t,s)=>{"use strict";s.d(t,{j:()=>i,s:()=>a});var r=s(45512),n=s(58009);let o=(0,n.createContext)(),a=({children:e})=>{let[t,s]=(0,n.useState)(null);return(0,r.jsx)(o.Provider,{value:{orderData:t,setOrderData:s},children:e})},i=()=>(0,n.useContext)(o)},45103:(e,t,s)=>{"use strict";s.d(t,{default:()=>n.a});var r=s(73864),n=s.n(r)},73864:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return l},getImageProps:function(){return i}});let r=s(25488),n=s(42034),o=s(41902),a=r._(s(21628));function i(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let l=o.Image},9320:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(45512),n=s(45103),o=s(85668),a=s(79334),i=s(58009);s(48251);var l=s(48981);s(25806);var c=s(67100),d=s(32644),u=s.n(d);s(25998),s(1769);let p=()=>{let e=(0,a.useRouter)(),[t,s]=(0,i.useState)(!1),[d,p]=(0,i.useState)({email:"",password:""}),[h,m]=(0,i.useState)(!1),[f,x]=(0,i.useState)(0),[g,v]=(0,i.useState)(!1),b=["/images/login/a4.jpg","/images/login/a3.jpg","/images/login/a6.webp","/images/login/a7.jpg","/images/login/a8.jpg","/images/login/a11.jpg"];(0,i.useEffect)(()=>{let e=setInterval(()=>{x(e=>(e+1)%b.length)},3e3);return()=>clearInterval(e)},[]);let j=e=>{let{name:t,value:s}=e.target;p(e=>({...e,[t]:s}))},k=async t=>{t.preventDefault(),s(!0);try{let t=await o.A.post("/api/Auth/login",d),{token:s,user:r}=t.data;if(document.cookie=`token=${s}; path=/; secure`,401===t.status){l.oR.warning("Email not exists. Sign in to continue.");return}l.oR.success("Login successful!"),setTimeout(()=>{e.push("/")},2e3)}catch(t){console.error("Login error:",t);let e=t.response?t.response.data.error:t.message;l.oR.error(e)}finally{s(!1)}},y=e=>{e.preventDefault(),m(!0);try{(0,c.l)(N)}catch(e){console.error("Error initializing OTPless:",e),l.oR.error("Error initializing OTPless.")}},w=()=>{m(!1)},N=async t=>{if(!t){l.oR.error("OTPless authentication failed.");return}try{let{identities:s}=t,r=s[0]?.identityValue,n=await o.A.post("/api/Auth/login",{email:r});if(200===n.status){let{token:t}=n.data;document.cookie=`token=${t}; path=/; secure`,l.oR.success("Login successful!"),e.push("/")}else 401===n.status?l.oR.error("Email not exists. Please signup to continue."):l.oR.error("Unexpected response from login API.")}catch(t){l.oR.error("Email not exists. Sign up to continue."),setTimeout(()=>{e.push("/frontend/signup")},3e3)}};return(0,r.jsxs)("div",{className:"login-container",children:[(0,r.jsxs)("div",{className:"left-section",children:[(0,r.jsx)(n.default,{src:b[f],alt:"Background",layout:"fill",objectFit:"cover",objectPosition:"center",quality:100}),(0,r.jsxs)("div",{className:"overlay",children:[(0,r.jsx)("h2",{children:"Welcome Back!"}),(0,r.jsx)("p",{children:"Log in to access your account."})]})]}),(0,r.jsx)("div",{className:"right-section",children:(0,r.jsxs)("div",{className:"form-card",children:[(0,r.jsx)("button",{className:"back-button",onClick:()=>e.push("/"),children:"Back to website →"}),(0,r.jsx)("h1",{className:"form-header",children:"Log In"}),(0,r.jsxs)("p",{className:"form-subheader",children:["Don't have an account?"," ",(0,r.jsx)("button",{onClick:()=>e.push("/frontend/signup"),className:"signup-link",children:"Sign up"})]}),(0,r.jsxs)("form",{className:"login-form",onSubmit:k,children:[(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("input",{type:"email",name:"email",placeholder:"Email",required:!0,value:d.email,onChange:j})}),(0,r.jsxs)("div",{className:"form-group password-group",children:[(0,r.jsx)("input",{type:g?"text":"password",name:"password",placeholder:"Password",required:!0,value:d.password,onChange:j}),(0,r.jsx)("span",{className:"eye-icon",onClick:()=>v(!g),children:g?"\uD83D\uDC41️":"\uD83D\uDE48"})]}),(0,r.jsx)("button",{type:"submit",className:"login-button",children:t?"Loading...":"Log In"}),(0,r.jsx)("div",{className:"divider",children:"Or log in with"}),(0,r.jsxs)("div",{className:"social-buttons",children:[(0,r.jsx)("button",{className:"google-button",onClick:e=>y(e),children:"Google"}),(0,r.jsx)("button",{className:"apple-button",children:"Apple"})]}),(0,r.jsx)("div",{className:"forgot-password",children:(0,r.jsx)("a",{href:"/forgot-password",children:"Forgot your password?"})})]})]})}),(0,r.jsxs)(u(),{isOpen:h,onRequestClose:w,contentLabel:"OTPless Login",className:"otpless-modal",overlayClassName:"otpless-overlay",children:[(0,r.jsx)("div",{className:"otpless-container",children:(0,r.jsx)("div",{id:"otpless-login-page"})}),(0,r.jsx)("button",{onClick:w,className:"close-modal-button",children:"Close"})]}),(0,r.jsx)(l.N9,{})]})}},29382:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var r=s(45512),n=s(79334),o=s(58009),a=s(30285),i=s.n(a),l=s(9464),c=s.n(l);s(44263);var d=s(26008);function u(){let[e,t]=(0,o.useState)(!1),s=(0,o.useRef)(null),[n,a]=(0,o.useState)(!1);return(0,r.jsxs)("header",{className:"flex items-center px-4 sm:px-6 py-4 bg-white text-black top-0 left-0 w-full z-10 shadow-lg relative",children:[(0,r.jsxs)("h1",{className:`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex-1 ${e?"hidden":""}`,children:[(0,r.jsx)("span",{className:"text-black",children:"SO"}),(0,r.jsx)("span",{className:"text-blue-500",children:"K"}),(0,r.jsx)("span",{className:"text-black",children:"KA"}),(0,r.jsx)("span",{className:"text-yellow-500",children:"I"})]}),(0,r.jsxs)("div",{className:"flex-grow flex justify-end items-center space-x-4 relative",children:[(0,r.jsx)("button",{className:`lg:hidden text-gray-700 text-lg sm:text-xl ${e?"hidden":""}`,onClick:()=>t(!0),"aria-label":"Open search bar",children:(0,r.jsx)("i",{className:"fas fa-search"})}),e&&(0,r.jsx)("div",{ref:s,className:"absolute top-0 left-0 w-full h-full bg-white z-20 flex items-center justify-center",children:(0,r.jsx)("input",{type:"text",placeholder:"Search for products...",className:"bg-gray-100 text-sm sm:text-base lg:text-lg px-4 py-2 rounded-full w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500","aria-label":"Search input"})}),(0,r.jsx)("div",{className:"hidden lg:flex flex-shrink-0 w-1/4 max-w-xs",children:(0,r.jsx)("input",{type:"text",placeholder:"Search for products...",className:"bg-gray-100 text-sm sm:text-base lg:text-lg px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500","aria-label":"Search input large"})}),(0,r.jsxs)("div",{className:"flex items-center space-x-4 text-gray-700 text-lg sm:text-xl lg:space-x-8 lg:text-2xl",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("button",{className:"hover:text-blue-500","aria-label":"Filter",onClick:()=>{a(e=>!e)},children:(0,r.jsx)("i",{className:"fas fa-filter"})}),n&&(0,r.jsx)("div",{className:"absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50",children:(0,r.jsxs)("ul",{className:"text-gray-700 text-base",children:[(0,r.jsx)("li",{className:"hover:bg-gray-100",children:(0,r.jsx)(d.default,{href:"/frontend/Products/shirts",className:"block px-4 py-2",children:"Shirts"})}),(0,r.jsx)("li",{className:"hover:bg-gray-100",children:(0,r.jsx)(d.default,{href:"/frontend/Products/trousers",className:"block px-4 py-2",children:"Trousers"})}),(0,r.jsx)("li",{className:"hover:bg-gray-100",children:(0,r.jsx)(d.default,{href:"/frontend/Products/pants",className:"block px-4 py-2",children:"Pants"})})]})})]}),(0,r.jsx)("button",{className:"hover:text-blue-500","aria-label":"Home",children:(0,r.jsx)(d.default,{href:"/",children:(0,r.jsx)("i",{className:"fas fa-home"})})}),(0,r.jsx)("button",{className:"hover:text-blue-500","aria-label":"Wishlist",children:(0,r.jsx)(d.default,{href:"/frontend/Products/wishlist",children:(0,r.jsx)("i",{className:"fas fa-heart"})})}),(0,r.jsx)("button",{className:"hover:text-blue-500","aria-label":"Cart",children:(0,r.jsx)(d.default,{href:"/frontend/cart",children:(0,r.jsx)("i",{className:"fas fa-shopping-cart"})})}),(0,r.jsx)("button",{className:"hover:text-blue-500","aria-label":"User Profile",children:(0,r.jsx)(d.default,{href:"/frontend/profile",children:(0,r.jsx)("i",{className:"fas fa-user"})})})]})]})]})}s(32644);var p=s(15070);function h({children:e}){let t=!["/","/frontend/login","/frontend/signup"].includes((0,n.usePathname)());return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${i().variable} ${c().variable} antialiased`,children:(0,r.jsxs)(p.s,{children:[" ",t&&(0,r.jsx)(u,{}),e]})})})}},67100:(e,t,s)=>{"use strict";s.d(t,{l:()=>r});let r=e=>{if(Reflect.set(window,"otpless",e),document.getElementById("otpless-sdk"))return;let t=document.createElement("script");t.id="otpless-sdk",t.type="text/javascript",t.src="https://otpless.com/v2/auth.js",t.setAttribute("data-appid","RXF5HPDIPQNCY9Z9O9RJ"),document.head.appendChild(t)}},1769:(e,t,s)=>{"use strict";s.d(t,{WG:()=>i,gf:()=>a,sW:()=>o,wR:()=>l});var r=s(25998),n=s(80814);let o=()=>{let e=r.A.get("token");if(e){let t=(0,n.s)(e);return t?.id}return null},a=()=>r.A.get("token"),i=e=>{r.A.set("token",e,{expires:7})},l=()=>{let e=r.A.get("token");if(!e)return!1;try{let t=(0,n.s)(e);return t?.exp>Math.floor(Date.now()/1e3)}catch{return!1}}},99572:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\sokkai1\\\\sokkai\\\\clothing\\\\src\\\\app\\\\frontend\\\\login\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\User\\Documents\\Projects\\sokkai1\\sokkai\\clothing\\src\\app\\frontend\\login\\page.jsx","default")},62804:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\sokkai1\\\\sokkai\\\\clothing\\\\src\\\\app\\\\layout.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\User\\Documents\\Projects\\sokkai1\\sokkai\\clothing\\src\\app\\layout.js","default")},70440:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(88077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},48251:()=>{},44263:()=>{},25998:(e,t,s)=>{"use strict";function r(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)e[r]=s[r]}return e}s.d(t,{A:()=>n});var n=function e(t,s){function n(e,n,o){if("undefined"!=typeof document){"number"==typeof(o=r({},s,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var i in o)o[i]&&(a+="; "+i,!0!==o[i]&&(a+="="+o[i].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+a}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var s=document.cookie?document.cookie.split("; "):[],r={},n=0;n<s.length;n++){var o=s[n].split("="),a=o.slice(1).join("=");try{var i=decodeURIComponent(o[0]);if(r[i]=t.read(a,i),e===i)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){n(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})},80814:(e,t,s)=>{"use strict";s.d(t,{s:()=>n});class r extends Error{}function n(e,t){let s;if("string"!=typeof e)throw new r("Invalid token specified: must be a string");t||(t={});let n=!0===t.header?0:1,o=e.split(".")[n];if("string"!=typeof o)throw new r(`Invalid token specified: missing part #${n+1}`);try{s=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var s;return s=t,decodeURIComponent(atob(s).replace(/(.)/g,(e,t)=>{let s=t.charCodeAt(0).toString(16).toUpperCase();return s.length<2&&(s="0"+s),"%"+s}))}catch(e){return atob(t)}}(o)}catch(e){throw new r(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(s)}catch(e){throw new r(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}r.prototype.name="InvalidTokenError"}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[5994,6306,8077,5668,9332,1902],()=>s(42152));module.exports=r})();