(function(){var h={},mt={},c={id:"2a0c04774115b182994cfcacf4c122e9",dm:["meizu.com","bbs.meizu.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],icon:'',ctrk:true,align:1,nv:1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:5225433,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'1CC9B32C4E71EEF8',conv:0,med:0,cvcc:{id:/hz6d/i,q:/kefu|53kf|openkf/i},cvcf:['btnSubmit','btsave','sendmessage','submitBtn'],apps:''};var u=void 0,v=!0,w=null,x=!1;mt.cookie={};mt.cookie.set=function(b,a,g){var d;g.M&&(d=new Date,d.setTime(d.getTime()+g.M));document.cookie=b+"="+a+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(d?"; expires="+d.toGMTString():"")+(g.nc?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:w};
mt.cookie.Lb=function(b,a){try{var g="Hm_ck_"+ +new Date;mt.cookie.set(g,"is-cookie-enabled",{domain:b,path:a,M:u});var d="is-cookie-enabled"===mt.cookie.get(g)?"1":"0";mt.cookie.set(g,"",{domain:b,path:a,M:-1});return d}catch(f){return"0"}};mt.lang={};mt.lang.e=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.Ha=function(b){return mt.lang.e(b,"Number")&&isFinite(b)};mt.lang.na=function(){return mt.lang.e(c.aet,"String")};
mt.lang.g=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.J=function(b,a){var g=x;if(b==w||!mt.lang.e(b,"Array")||a===u)return g;if(Array.prototype.indexOf)g=-1!==b.indexOf(a);else for(var d=0;d<b.length;d++)if(b[d]===a){g=v;break}return g};
(function(){var b=mt.lang;mt.f={};mt.f.ga=function(a){return document.getElementById(a)};mt.f.rb=function(a){if(!a)return w;try{for(var b=a.split(">"),d=document.body,f=b.length-1;0<=f;f--)if(-1<b[f].indexOf("#")){var e=b[f].split("#")[1];(d=document.getElementById(e))||(d=document.getElementById(decodeURIComponent(e)));b=b.splice(f+1,b.length-(f+1));break}for(a=0;d&&a<b.length;){var l=String(b[a]).toLowerCase();if(!("html"===l||"body"===l)){var f=0,n=b[a].match(/\[(\d+)\]/i),e=[];if(n)f=n[1]-1,l=
l.split("[")[0];else if(1!==d.childNodes.length){for(var p=0,s=0,m=d.childNodes.length;s<m;s++){var k=d.childNodes[s];1===k.nodeType&&k.nodeName.toLowerCase()===l&&p++;if(1<p)return w}if(1!==p)return w}for(p=0;p<d.childNodes.length;p++)1===d.childNodes[p].nodeType&&d.childNodes[p].nodeName.toLowerCase()===l&&e.push(d.childNodes[p]);if(!e[f])return w;d=e[f]}a++}return d}catch(r){return w}};mt.f.ka=function(a,b){var d=[],f=[];if(!a)return f;for(;a.parentNode!=w;){for(var e=0,l=0,n=a.parentNode.childNodes.length,
p=0;p<n;p++){var s=a.parentNode.childNodes[p];if(s.nodeName===a.nodeName&&(e++,s===a&&(l=e),0<l&&1<e))break}if((n=""!==a.id)&&b){d.unshift("#"+encodeURIComponent(a.id));break}else n&&(n="#"+encodeURIComponent(a.id),n=0<d.length?n+">"+d.join(">"):n,f.push(n)),d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<e?"["+l+"]":""));a=a.parentNode}f.push(d.join(">"));return f};mt.f.Ea=function(a){return(a=mt.f.ka(a,v))&&a.length?String(a[0]):""};mt.f.yb=function(a){return mt.f.ka(a,x)};mt.f.ob=
function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return w};mt.f.qb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.wb=function(a){var b={top:0,left:0};if(!a)return b;var d=mt.f.qb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());return{top:b.top+(window.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(window.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}};mt.f.getAttribute=function(a,b){var d=
a.getAttribute&&a.getAttribute(b)||w;if(!d&&a.attributes&&a.attributes.length)for(var f=a.attributes,e=f.length,l=0;l<e;l++)f[l].nodeName===b&&(d=f[l].nodeValue);return d};mt.f.U=function(a){var b="document";a.tagName!==u&&(b=a.tagName);return b.toLowerCase()};mt.f.Ab=function(a){var g="";a.textContent?g=b.trim(a.textContent):a.innerText&&(g=b.trim(a.innerText));g&&(g=g.replace(/\s+/g," ").substring(0,255));return g};mt.f.Ca=function(a,b){var d=mt.f.U(a);"input"===d&&b&&("button"===a.type||"submit"===
a.type)?d=a.value||"":"input"===d&&!b&&"password"!==a.type?d=a.value||"":"img"===d?(d=mt.f.getAttribute,d=d(a,"alt")||d(a,"title")||d(a,"src")):d="body"===d||"html"===d?["(hm-default-content-for-",d,")"].join(""):mt.f.Ab(a);return String(d).substring(0,255)};(function(){(mt.f.La=function(){function a(){if(!a.W){a.W=v;for(var d=0,b=f.length;d<b;d++)f[d]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var d=x,f=[],e;document.addEventListener?e=function(){document.removeEventListener("DOMContentLoaded",
e,x);a()}:document.attachEvent&&(e=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",e),a())});(function(){if(!d)if(d=v,"complete"===document.readyState)a.W=v;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,x),window.addEventListener("load",a,x);else if(document.attachEvent){document.attachEvent("onreadystatechange",e);window.attachEvent("onload",a);var f=x;try{f=window.frameElement==w}catch(n){}document.documentElement.doScroll&&
f&&b()}})();return function(d){a.W?d():f.push(d)}}()).W=x})();return mt.f})();mt.event={};mt.event.d=function(b,a,g){b.attachEvent?b.attachEvent("on"+a,function(a){g.call(b,a)}):b.addEventListener&&b.addEventListener(a,g,x)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=x};
(function(){var b=mt.event;mt.i={};mt.i.ma=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.Jb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:u;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Ub=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.i.O=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.i.I=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.i.orientation=0;(function(){function a(){var a=0;window.orientation!==u&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==u)&&(a=screen.orientation.angle);mt.i.orientation=a}a();b.d(window,"orientationchange",a)})();return mt.i})();
mt.r={};mt.r.parse=function(b){return(new Function("return ("+b+")"))()};
mt.r.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=g[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return b(d);case "boolean":return String(d);
default:if(d===w)return"null";if(d instanceof Array){var f=["["],e=d.length,l,g,p;for(g=0;g<e;g++)switch(p=d[g],typeof p){case "undefined":case "function":case "unknown":break;default:l&&f.push(","),f.push(mt.r.stringify(p)),l=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+a(d.getMonth()+1)+"-"+a(d.getDate())+"T"+a(d.getHours())+":"+a(d.getMinutes())+":"+a(d.getSeconds())+'"';l=["{"];g=mt.r.stringify;for(e in d)if(Object.prototype.hasOwnProperty.call(d,e))switch(p=
d[e],typeof p){case "undefined":case "unknown":case "function":break;default:f&&l.push(","),f=1,l.push(g(e)+":"+g(p))}l.push("}");return l.join("")}}}();mt.localStorage={};mt.localStorage.aa=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(b){return x}return v};
mt.localStorage.set=function(b,a,g){var d=new Date;d.setTime(d.getTime()+g||31536E6);try{window.localStorage?(a=d.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.aa()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(b,a),mt.localStorage.l.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),g=b.substring(0,a)-0;if(g&&g>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.aa())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(b)}catch(d){}return w};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.aa())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(b),mt.localStorage.l.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){try{window.sessionStorage&&window.sessionStorage.setItem(b,a)}catch(g){}};
mt.sessionStorage.get=function(b){try{return window.sessionStorage?window.sessionStorage.getItem(b):w}catch(a){return w}};mt.sessionStorage.remove=function(b){try{window.sessionStorage&&window.sessionStorage.removeItem(b)}catch(a){}};mt.Pa={};mt.Pa.log=function(b,a){var g=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=g;g.onload=function(){g.onload=w;g=window[d]=w;a&&a(b)};g.src=b};mt.sa={};
mt.sa.Bb=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return b};
mt.sa.jc=function(b,a,g,d,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+g+'" height="'+d+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+g+'" height="'+d+'" src="'+a+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.m=function(b,a){var g=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return g?g[3]:w};mt.url.kc=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:w};mt.url.ub=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):w};mt.url.N=function(b){return(b=mt.url.ub(b))?b.replace(/:\d+$/,""):b};mt.url.ka=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):w};
(function(){function b(){for(var a=x,b=document.getElementsByTagName("script"),d=b.length,d=100<d?100:d,f=0;f<d;f++){var e=b[f].src;if(e&&0===e.indexOf("https://hm.baidu.com/h")){a=v;break}}return a}return h.nb=b})();var A=h.nb;
h.o={lc:"http://tongji.baidu.com/hm-web/welcome/ico",ra:"hm.baidu.com/hm.gif",Ya:/^(tongji|hmcdn).baidu.com$/,Ra:"tongji.baidu.com",Gb:"hmmd",Hb:"hmpl",fc:"utm_medium",Fb:"hmkw",hc:"utm_term",Db:"hmci",ec:"utm_content",Ib:"hmsr",gc:"utm_source",Eb:"hmcu",dc:"utm_campaign",K:0,G:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",X:A()||"https:"===document.location.protocol?"https:":"http:",mc:0,fb:6E5,Mb:6E5,Vb:5E3,gb:5,L:1024,eb:1,z:2147483647,Qa:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
P:v,ya:["a","input","button"],$a:{id:"data-hm-id",da:"data-hm-class",va:"data-hm-xpath",content:"data-hm-content",ta:"data-hm-tag",link:"data-hm-link"},xa:"data-hm-enabled",wa:"data-hm-disabled",Qb:"https://hmcdn.baidu.com/static/tongji/plugins/",Ka:["UrlChangeTracker"]};(function(){var b={C:{},d:function(a,b){this.C[a]=this.C[a]||[];this.C[a].push(b)},H:function(a,b){this.C[a]=this.C[a]||[];for(var d=this.C[a].length,f=0;f<d;f++)this.C[a][f](b)}};return h.w=b})();
(function(){function b(b,d){var f=document.createElement("script");f.charset="utf-8";a.e(d,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=w,d()}:f.onload=function(){d()});f.src=b;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(f,e)}var a=mt.lang;return h.load=b})();
(function(){function b(){var d="";if(h.b.c.nv){d=encodeURIComponent(document.referrer);try{window.sessionStorage?g.set("Hm_from_"+c.id,d):a.set("Hm_from_"+c.id,d,864E5)}catch(b){}}else try{d=(window.sessionStorage?g.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||""}catch(e){}return d}var a=mt.localStorage,g=mt.sessionStorage;return h.Ba=b})();
(function(){var b=mt.lang,a=mt.f,g={S:function(d,b){return function(e){var l=e.target||e.srcElement;if(l){var n=l.getAttribute(d.$);e=e.clientX+":"+e.clientY;if(n&&n===e)l.removeAttribute(d.$);else if(b&&0<b.length&&(l=a.yb(l))&&l.length)if(n=l.length,e=l[l.length-1],1E4>n*e.split(">").length)for(e=0;e<n;e++)g.Oa(d,l[e]);else g.Oa(d,e)}}},Oa:function(a,f){for(var e={},l=String(f).split(">").length,g=0;g<l;g++)e[f]="",f=f.substring(0,f.lastIndexOf(">"));a&&(b.e(a,"Object")&&a.za)&&a.za(e)},Sb:function(a,
b){return function(e){(e.target||e.srcElement).setAttribute(a.$,e.clientX+":"+e.clientY);a&&a.s&&(b?a.s(b):a.s("#"+encodeURIComponent(this.id),e.type))}}};return h.fa=g})();
(function(){var b=mt.f,a=mt.r,g=mt.event,d=mt.lang,f=h.fa,e={$:"HM_ce",Ta:function(){if(c.cetrk&&c.cetrk.length){g.d(document,"click",f.S(e,c.cetrk));for(var d=0,n=c.cetrk.length;d<n;d++){var p;try{p=a.parse(decodeURIComponent(String(c.cetrk[d])))}catch(s){p={}}var m=p.p||"";-1===m.indexOf(">")&&(0===m.indexOf("#")&&(m=m.substring(1)),(m=b.ga(m))&&g.d(m,"click",f.Sb(e,p)))}}},za:function(b){if(c.cetrk&&c.cetrk.length)for(var d=0,f=c.cetrk.length;d<f;d++){var s;try{s=a.parse(decodeURIComponent(String(c.cetrk[d])))}catch(m){s=
{}}b.hasOwnProperty(s.p)&&e.s(s)}},s:function(a){h.b.c.et=7;var f=a&&a.k||"",f=d.g(f),e=[];if(a&&a.a&&d.e(a.a,"Object"))for(var s in a.a)if(a.a.hasOwnProperty(s)){e.push(d.g(s));var m=b.rb(a.a[s]||""),m=m?b.Ca(m,x):"";e.push(d.g(m))}a="";e.length&&(a="*"+e.join("*"));h.b.c.ep="ce!_iden*"+f+a;h.b.j()}};h.w.d("pv-b",e.Ta);return e})();
(function(){var b=mt.f,a=mt.lang,g=mt.event,d=mt.i,f=h.o,e=h.w,l=[],n={Sa:function(){c.ctrk&&(g.d(document,"mouseup",n.cb()),g.d(window,"unload",function(){n.Y()}),setInterval(function(){n.Y()},f.fb))},cb:function(){return function(a){a=n.pb(a);if(""!==a){var b=(f.X+"//"+f.ra+"?"+h.b.Na().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;b+(f.z+"").length>f.L||(b+encodeURIComponent(l.join("!")+(l.length?"!":"")).length+(f.z+"").length>f.L&&n.Y(),l.push(a),(l.length>=f.gb||/\*a\*/.test(a))&&
n.Y())}}},pb:function(e){var m=e.target||e.srcElement;if(0===f.eb){var k=(m.tagName||"").toLowerCase();if("embed"==k||"object"==k)return""}var r;d.ma?(r=Math.max(document.documentElement.scrollTop,document.body.scrollTop),k=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),k=e.clientX+k,r=e.clientY+r):(k=e.pageX,r=e.pageY);e=n.vb(e,m,k,r);var t=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:k-=t/2;break;case 2:k-=t}t=
[];t.push(k);t.push(r);t.push(e.Nb);t.push(e.Ob);t.push(e.Rb);t.push(a.g(e.Pb));t.push(e.ic);t.push(e.Cb);(m="a"===(m.tagName||"").toLowerCase()?m:b.ob(m))?(t.push("a"),t.push(a.g(encodeURIComponent(m.href)))):t.push("b");return t.join("*")},vb:function(e,f,k,r){e=b.Ea(f);var t=0,q=0,y=0,z=0;if(f&&(t=f.offsetWidth||f.clientWidth,q=f.offsetHeight||f.clientHeight,z=b.wb(f),y=z.left,z=z.top,a.e(f.getBBox,"Function")&&(q=f.getBBox(),t=q.width,q=q.height),"html"===(f.tagName||"").toLowerCase()))t=Math.max(t,
f.clientWidth),q=Math.max(q,f.clientHeight);return{Nb:Math.round(100*((k-y)/t)),Ob:Math.round(100*((r-z)/q)),Rb:d.orientation,Pb:e,ic:t,Cb:q}},Y:function(){0!==l.length&&(h.b.c.et=2,h.b.c.ep=l.join("!"),h.b.j(),l=[])}},p={Wa:function(){c.ctrk&&setInterval(p.Wb,f.Vb)},Wb:function(){var a=d.O()+d.I();0<a-h.b.c.vl&&(h.b.c.vl=a)}};e.d("pv-b",n.Sa);e.d("pv-b",p.Wa);return n})();
(function(){var b=mt.lang,a=mt.f,g=mt.event,d=mt.i,f=h.o,e=h.w,l=+new Date,n=[],p={S:function(){return function(d){if(h.b&&h.b.P&&c.aet&&c.aet.length){var e=d.target||d.srcElement;if(e){var k=h.b.ya,r=a.getAttribute(e,f.xa)!=w?v:x;if(a.getAttribute(e,f.wa)==w)if(r)p.ba(p.ia(e,d));else{var t=a.U(e);if(b.J(k,"*")||b.J(k,t))p.ba(p.ia(e,d));else for(;e.parentNode!=w;){var r=e.parentNode,t=a.U(r),q="a"===t&&b.J(k,"a")?v:x,t="button"===t&&b.J(k,"button")?v:x,y=a.getAttribute(r,f.xa)!=w?v:x;if(a.getAttribute(r,
f.wa)==w&&(q||t||y)){p.ba(p.ia(r,d));break}e=e.parentNode}}}}}},ia:function(e,g){var k={},r=f.$a;k.id=a.getAttribute(e,r.id)||a.getAttribute(e,"id")||"";k.da=a.getAttribute(e,r.da)||a.getAttribute(e,"class")||"";k.va=a.getAttribute(e,r.va)||a.Ea(e);k.content=a.getAttribute(e,r.content)||a.Ca(e,v);k.ta=a.getAttribute(e,r.ta)||a.U(e);k.link=a.getAttribute(e,r.link)||a.getAttribute(e,"href")||"";k.type=g.type||"click";r=b.Ha(e.offsetTop)?e.offsetTop:0;"click"===g.type?r=d.ma?g.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.pa&&b.e(g.pa.changedTouches,"Array")&&g.pa.changedTouches.length)&&(r=g.pa.changedTouches[0].pageY);k.bc=r;return k},ba:function(a){var d=b.g;a=[+new Date-(h.b.D!==u?h.b.D:l),d(a.id),d(a.da),d(a.ta),d(a.va),d(a.link),d(a.content),a.type,a.bc].join("*");p.ca(a);b.e(this.R(),"Function")&&this.R()()},ca:function(a){a.length>f.L||(encodeURIComponent(n.join("!")+a).length>f.L&&(p.s(n.join("!")),n=[]),n.push(a))},s:function(a){h.b.c.et=5;h.b.c.ep=
a;h.b.j()},R:function(){return function(){n&&n.length&&(p.s(n.join("!")),n=[])}}};b.na()&&""!==c.aet&&e.d("pv-b",function(){g.d(document,"click",p.S());"ontouchend"in document&&g.d(window,"touchend",p.S());g.d(window,"unload",p.R())});return p})();
(function(){var b=mt.event,a=mt.i,g=h.o,d=h.w,f=+new Date,e=[],l=w,n={jb:function(){return function(){h.b&&(h.b.P&&c.aet&&c.aet.length)&&(window.clearTimeout(l),l=window.setTimeout(function(){n.Va(a.O()+a.I())},150))}},Va:function(a){n.ca([+new Date-(h.b.D!==u?h.b.D:f),a].join("*"))},ca:function(a){if(encodeURIComponent(e.join("!")+a).length>g.L||3<e.length)n.s(e.join("!")),e=[];e.push(a)},s:function(b){h.b.c.et=6;h.b.c.vh=a.I();h.b.c.ep=b;h.b.j()},R:function(){return function(){e&&e.length&&(n.s(e.join("!")),
e=[])}}};mt.lang.na()&&""!==c.aet&&d.d("pv-b",function(){b.d(window,"scroll",n.jb());b.d(window,"unload",n.R())});return n})();
(function(){var b=mt.f,a=h.o,g=h.load,d=h.Ba;h.w.d("pv-b",function(){var f=a.protocol+"//crs.baidu.com/";c.rec&&b.La(function(){for(var e=0,l=c.rp.length;e<l;e++){var n=c.rp[e][0],p=c.rp[e][1],s=b.ga("hm_t_"+n);if(p&&!(2==p&&!s||s&&""!==s.innerHTML))s="",s=Math.round(Math.random()*a.z),s=4==p?f+"hl.js?"+["siteId="+c.id,"planId="+n,"rnd="+s].join("&"):f+"t.js?"+["siteId="+c.id,"planId="+n,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
s].join("&"),g(s)}})})})();(function(){var b=h.o,a=h.load,g=h.Ba;h.w.d("pv-b",function(){if(c.trust&&c.vcard){var d="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+g(),"rnd="+Math.round(Math.random()*b.z),"hm=1"].join("&");a(d)}})})();
(function(){function b(){return function(){h.b.c.nv=0;h.b.c.st=4;h.b.c.et=3;h.b.c.ep=h.ea.xb()+","+h.ea.tb();h.b.j()}}function a(){clearTimeout(z);var b;q&&(b="visible"==document[q]);y&&(b=!document[y]);n="undefined"==typeof b?v:b;if((!l||!p)&&n&&s)t=v,k=+new Date;else if(l&&p&&(!n||!s))t=x,r+=+new Date-k;l=n;p=s;z=setTimeout(a,100)}function g(a){var k=document,b="";if(a in k)b=a;else for(var d=["webkit","ms","moz","o"],q=0;q<d.length;q++){var e=d[q]+a.charAt(0).toUpperCase()+a.slice(1);if(e in k){b=
e;break}}return b}function d(k){if(!("focus"==k.type||"blur"==k.type)||!(k.target&&k.target!=window))s="focus"==k.type||"focusin"==k.type?v:x,a()}var f=mt.event,e=h.w,l=v,n=v,p=v,s=v,m=+new Date,k=m,r=0,t=v,q=g("visibilityState"),y=g("hidden"),z;a();(function(){var k=q.replace(/[vV]isibilityState/,"visibilitychange");f.d(document,k,a);f.d(window,"pageshow",a);f.d(window,"pagehide",a);"object"==typeof document.onfocusin?(f.d(document,"focusin",d),f.d(document,"focusout",d)):(f.d(window,"focus",d),
f.d(window,"blur",d))})();h.ea={xb:function(){return+new Date-m},tb:function(){return t?+new Date-k+r:r}};e.d("pv-b",function(){f.d(window,"unload",b())});e.d("duration-send",b());e.d("duration-done",function(){k=m=+new Date;r=0});return h.ea})();
(function(){var b=mt.lang,a=h.o,g=h.load,d={Kb:function(d){if((window._dxt===u||b.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var e=h.b.T();g([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(e)].join(""),d)}},ac:function(a){if(b.e(a,"String")||b.e(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.hb=d})();
(function(){function b(a,b,d,q){if(!(a===u||b===u||q===u)){if(""===a)return[b,d,q].join("*");a=String(a).split("!");for(var e,f=x,g=0;g<a.length;g++)if(e=a[g].split("*"),String(b)===e[0]){e[1]=d;e[2]=q;a[g]=e.join("*");f=v;break}f||a.push([b,d,q].join("*"));return a.join("!")}}function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var e=k[b];d.e(e,"Object")||d.e(e,"Array")?a(e):k[b]=String(e)}}var g=mt.url,d=mt.lang,f=mt.r,e=mt.i,l=h.o,n=h.w,p=h.hb,s=h.load,m={Q:[],Z:0,Ia:x,B:{ua:"",page:""},
init:function(){m.h=0;n.d("pv-b",function(){m.ib();m.lb()});n.d("pv-d",function(){m.mb();m.B.page=""});n.d("stag-b",function(){h.b.c.api=m.h||m.Z?m.h+"_"+m.Z:"";h.b.c.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),m.B.ua,m.B.page].join("!")});n.d("stag-d",function(){h.b.c.api=0;m.h=0;m.Z=0})},ib:function(){var a=window._hmt||[];if(!a||d.e(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,k=0;k<arguments.length;k++){var b=arguments[k];d.e(b,"Array")&&(a.cmd[a.id].push(b),
"_setAccount"===b[0]&&(1<b.length&&/^[0-9a-f]{32}$/.test(b[1]))&&(b=b[1],a.id=b,a.cmd[b]=a.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},lb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,e=0,y=b.length;e<y;e++){var f=b[e];d.test(f[0])?m.Q.push(f):m.qa(f)}a.cmd[c.id]={push:m.qa}},mb:function(){if(0<m.Q.length)for(var a=0,b=m.Q.length;a<b;a++)m.qa(m.Q[a]);m.Q=w},qa:function(a){var b=a[0];if(m.hasOwnProperty(b)&&
d.e(m[b],"Function"))m[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(m.h|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],x===a||v===a))m.h|=2,h.b.Fa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){m.h|=4;h.b.c.sn=h.b.Da();h.b.c.et=0;h.b.c.ep="";h.b.c.vl=e.O()+e.I();h.b.c.kb=0;h.b.la?(h.b.c.nv=0,h.b.c.st=4):h.b.la=v;var b=h.b.c.u,d=h.b.c.su;h.b.c.u=l.protocol+"//"+document.location.host+a[1];m.Ia||(h.b.c.su=document.location.href);
h.b.j();h.b.c.u=b;h.b.c.su=d;h.b.D=+new Date}},_trackEvent:function(a){2<a.length&&(m.h|=8,h.b.c.nv=0,h.b.c.st=4,h.b.c.et=4,h.b.c.ep=d.g(a[1])+"*"+d.g(a[2])+(a[3]?"*"+d.g(a[3]):"")+(a[4]?"*"+d.g(a[4]):""),h.b.j())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){m.Z++;for(var q=(h.b.c.cv||"*").split("!"),f=q.length;f<b-1;f++)q.push("*");q[b-1]=e+"*"+d.g(a[2])+"*"+d.g(a[3]);h.b.c.cv=q.join("!");a=h.b.c.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Tb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var e=d.g(a[1]);a=d.g(a[2]);if(e!==u&&a!==u){var f=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f=b(f,e,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var e=d.g(a[1]);a=d.g(a[2]);if(e!==u&&a!==u){var f=m.B.ua,f=b(f,e,2,a);m.B.ua=f}}},_setPageTag:function(a){if(!(3>a.length)){var e=d.g(a[1]);a=d.g(a[2]);
if(e!==u&&a!==u){var f=m.B.page,f=b(f,e,3,a);m.B.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.b.c.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],m.Ia=v)},_trackOrder:function(b){b=b[1];d.e(b,"Object")&&(a(b),m.h|=16,h.b.c.nv=0,h.b.c.st=4,h.b.c.et=94,h.b.c.ep=f.stringify(b),h.b.j())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])m.h|=32,h.b.c.et=93,h.b.c.ep=a,h.b.j()},_trackRTPageview:function(b){b=b[1];d.e(b,"Object")&&
(a(b),b=f.stringify(b),512>=encodeURIComponent(b).length&&(m.h|=64,h.b.c.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.e(b,"Object")){a(b);b=encodeURIComponent(f.stringify(b));var e=function(a){var b=h.b.c.rt;m.h|=128;h.b.c.et=90;h.b.c.rt=a;h.b.j();h.b.c.rt=b},g=b.length;if(900>=g)e.call(this,b);else for(var g=Math.ceil(g/900),q="block|"+Math.round(Math.random()*l.z).toString(16)+"|"+g+"|",y=[],z=0;z<g;z++)y.push(z),y.push(b.substring(900*z,900*z+900)),e.call(this,q+y.join("|")),y=[]}},_setUserId:function(a){a=
a[1];p.Kb();p.ac(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],x===a||v===a))h.b.Ga=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],x===a||v===a))h.b.P=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.b.c.et=3,h.b.c.ep=a,h.b.j())):n.H("duration-send");n.H("duration-done")},_require:function(a){1<a.length&&(a=a[1],l.Ya.test(g.N(a))&&s(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1];a=a[2];if(d.J(l.Ka,e)&&d.e(a,"Function")&&
(b.plugins=b.plugins||{},b.F=b.F||{},b.plugins[e]=a,b.A=b.A||[],a=b.A.slice(),e&&a.length&&a[0][1]===e))for(var q=0,f=a.length;q<f;q++){var g=a[q][2]||{};if(b.plugins[e]&&!b.F[e])b.F[e]=new b.plugins[e](g),b.A.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],q=a[2]||{};if(d.J(l.Ka,e))if(b.plugins=b.plugins||{},b.F=b.F||{},b.plugins[e]&&!b.F[e])b.F[e]=new b.plugins[e](q);else{b.A=b.A||[];for(var q=0,f=b.A.length;q<f;q++)if(b.A[q][1]===e)return;b.A.push(a);m._require([w,
l.Qb+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=d.g(a[1]),e="";a=a[2];if(d.e(a,"Object")){var e=[],q;for(q in a)a.hasOwnProperty(q)&&(e.push(d.g(q)),e.push(d.g(a[q])));e="*"+e.join("*")}h.b.c.et=7;h.b.c.ep="ce!_iden*"+b+e;h.b.j()}}};m.init();h.Za=m;return h.Za})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=v,this.c={},this.Ga=this.Fa=v,this.P=k.P,this.ya=f.na()&&0<c.aet.length?c.aet.split(","):"",this.la=x,this.init())}var a=mt.url,g=mt.Pa,d=mt.sa,f=mt.lang,e=mt.cookie,l=mt.i,n=mt.localStorage,p=mt.sessionStorage,s=mt.r,m=mt.event,k=h.o,r=h.load,t=h.w;b.prototype={oa:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},Ja:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},V:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.Ja(b,c.dm[d]))return v}else{var e=a.N(b);if(e&&this.oa(e,c.dm[d]))return v}return x},T:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.oa(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ha:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Ja(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},zb:function(){if(!document.referrer)return k.G-k.K>c.vdur?1:4;var b=x;this.V(document.referrer)&&this.V(document.location.href)?b=v:(b=a.N(document.referrer),b=this.oa(b||"",document.location.hostname));return b?k.G-k.K>c.vdur?1:4:3},getData:function(a){try{return e.get(a)||p.get(a)||n.get(a)}catch(b){}},setData:function(a,b,d){try{e.set(a,b,{domain:this.T(),path:this.ha(),M:d}),d?n.set(a,b,d):p.set(a,b)}catch(f){}},Tb:function(a){try{e.set(a,"",{domain:this.T(),path:this.ha(),
M:-1}),p.remove(a),n.remove(a)}catch(b){}},Zb:function(){var a,b,d,f,g;k.K=this.getData("Hm_lpvt_"+c.id)||0;13===k.K.length&&(k.K=Math.round(k.K/1E3));b=this.zb();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(g=f.length-1;0<=g;g--)13===f[g].length&&(f[g]=""+Math.round(f[g]/1E3));for(;2592E3<k.G-f[0];)f.shift();g=4>f.length?2:3;for(1===a&&f.push(k.G);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=k.G,f="",g=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+
c.id,k.G);d=e.Lb(this.T(),this.ha());if(0===c.nv&&this.V(document.location.href)&&(""===document.referrer||this.V(document.referrer)))a=0,b=4;this.c.nv=a;this.c.st=b;this.c.cc=d;this.c.lt=f;this.c.lv=g},Na:function(){for(var a=[],b=this.c.et,d=+new Date,e=0,f=k.Qa.length;e<f;e++){var g=k.Qa[e],l=this.c[g];"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:this.c.rt&&a.push("rt="+
encodeURIComponent(this.c.rt));break;case 5:a.push("_lpt="+this.D);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.D);a.push("_ct="+d);break;case 90:this.c.rt&&a.push("rt="+this.c.rt)}return a.join("&")},$b:function(){this.Zb();this.c.si=c.id;this.c.sn=this.Da();this.c.su=document.referrer;this.c.hh=window.location.hash;this.c.ds=l.Ub;this.c.cl=l.colorDepth+"-bit";this.c.ln=String(l.language).toLowerCase();this.c.ja=l.javaEnabled?1:0;this.c.ck=l.cookieEnabled?1:0;this.c.lo="number"===typeof _bdhm_top?
1:0;this.c.fl=d.Bb();this.c.v="1.2.51";this.c.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.c.tt=document.title||"";this.c.vl=l.O()+l.I();var b=document.location.href;this.c.cm=a.m(b,k.Gb)||"";this.c.cp=a.m(b,k.Hb)||a.m(b,k.fc)||"";this.c.cw=a.m(b,k.Fb)||a.m(b,k.hc)||"";this.c.ci=a.m(b,k.Db)||a.m(b,k.ec)||"";this.c.cf=a.m(b,k.Ib)||a.m(b,k.gc)||"";this.c.cu=a.m(b,k.Eb)||a.m(b,k.dc)||""},init:function(){try{this.$b(),0===this.c.nv?this.Yb():this.Aa(),h.b=this,this.bb(),this.ab(),t.H("pv-b"),
this.Xb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));g.log(k.X+"//"+k.ra+"?"+b.join("&"))}},Xb:function(){function a(){t.H("pv-d")}this.Fa?(this.la=v,this.c.et=0,this.c.ep="",this.c.vl=l.O()+l.I(),this.j(a)):a();this.D=+new Date},j:function(a){if(this.Ga){var b=this;b.c.rnd=Math.round(Math.random()*k.z);t.H("stag-b");var d=k.X+"//"+k.ra+"?"+b.Na();t.H("stag-d");b.Xa(d);g.log(d,
function(d){b.Ma(d);f.e(a,"Function")&&a.call(b)})}},bb:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.N(document.referrer)===k.Ra?1:0,f=a.m(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&g)&&(this.c.rnd=Math.round(Math.random()*k.z),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.c.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,
f))},ab:function(){if(window.postMessage&&window.self!==window.parent){var b=this;m.d(window,"message",function(d){if(a.N(d.origin)===k.Ra){var e=d.data||{};d=e.sd||"";var e=e.jn||"",f=/^customevent$/.test(e);RegExp(c.id).test(d)&&f&&(b.c.rnd=Math.round(Math.random()*k.z),r(k.protocol+"//"+c.js+e+".js?"+b.c.rnd))}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},Xa:function(a){var b;try{b=s.parse(p.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=
this.c.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);p.set("Hm_unsent_"+c.id,s.stringify(b))},Ma:function(a){var b;try{b=s.parse(p.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?p.set("Hm_unsent_"+c.id,s.stringify(b)):this.Aa()}},Aa:function(){p.remove("Hm_unsent_"+c.id)},Yb:function(){var a=this,
b;try{b=s.parse(p.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){g.log(k.X+"//"+b,function(b){a.Ma(b)})},f=0;f<b.length;f++)e(b[f])},Da:function(){return Math.round(+new Date/1E3)%65535}};return new b})();
(function(){var b=mt.event,a=mt.lang,g=h.o;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.c.kb=a.Ha(h.b.c.kb)?h.b.c.kb:0;var d=function(){h.b.c.et=85;h.b.c.ep=h.b.c.kb;h.b.j()};b.d(document,"keyup",function(){h.b.c.kb++});b.d(window,"unload",function(){d()});setInterval(d,g.Mb)}})();var B=h.o,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.i,a=mt.lang,g=mt.event,d=mt.r;if("undefined"!==typeof h.b&&(c.med||(!b.ma||7<b.Jb)&&c.cvcc)){var f,e,l,n,p=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},s=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===x)return x},m=function(b,e){var g={};g.n=f;g.t="clk";g.v=b;if(e){var k=e.getAttribute("href"),m=e.getAttribute("onclick")?""+e.getAttribute("onclick"):w,n=e.getAttribute("id")||"";l.test(k)?(g.sn="mediate",
g.snv=k):a.e(m,"String")&&l.test(m)&&(g.sn="wrap",g.snv=m);g.id=n}h.b.c.et=86;h.b.c.ep=d.stringify(g);h.b.j();for(g=+new Date;400>=+new Date-g;);};if(c.med)e="/zoosnet",f="swt",l=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,n={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(l.test(e)||l.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){e="/other-comm";f="other";l=c.cvcc.q||u;var k=c.cvcc.id||u;n={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f,g=0,m=b.length;g<m;g++)d=b[g],l!==u?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),k?(d=d.getAttribute("id"),(l.test(e)||l.test(f)||k.test(d))&&
a.push(b[g])):(l.test(e)||l.test(f))&&a.push(b[g])):k!==u&&(d=d.getAttribute("id"),k.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof n&&"undefined"!==typeof l){var r;e+=/\/$/.test(e)?"":"/";var t=function(b,d){if(r===d)return m(e+b,d),x;if(a.e(d,"Array")||a.e(d,"NodeList"))for(var f=0,g=d.length;f<g;f++)if(r===d[f])return m(e+b+"/"+(f+1),d[f]),x};g.d(document,"mousedown",function(b){b=b||window.event;r=b.target||b.srcElement;var d={};for(s(n,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});r&&
r!==document&&s(d,t)!==x;)r=r.parentNode})}}})();(function(){var b=mt.f,a=mt.lang,g=mt.event,d=mt.r;if("undefined"!==typeof h.b&&a.e(c.cvcf,"Array")&&0<c.cvcf.length){var f={Ua:function(){for(var a=c.cvcf.length,d,n=0;n<a;n++)(d=b.ga(decodeURIComponent(c.cvcf[n])))&&g.d(d,"click",f.fa())},fa:function(){return function(){h.b.c.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.c.ep=d.stringify(a);h.b.j()}}};b.La(function(){f.Ua()})}})();
(function(){var b=mt.event,a=mt.r;if(c.med&&"undefined"!==typeof h.b){var g=+new Date,d={n:"anti",sb:0,kb:0,clk:0},f=function(){h.b.c.et=86;h.b.c.ep=a.stringify(d);h.b.j()};b.d(document,"click",function(){d.clk++});b.d(document,"keyup",function(){d.kb=1});b.d(window,"scroll",function(){d.sb++});b.d(window,"unload",function(){d.t=+new Date-g;f()});b.d(window,"load",function(){setTimeout(f,5E3)})}})();c.spa!==u&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]));})();
