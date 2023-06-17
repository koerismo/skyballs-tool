var Rp=Object.defineProperty;var Cp=(n,e,t)=>e in n?Rp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Us=(n,e,t)=>(Cp(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Pl={};Object.defineProperty(Pl,"__esModule",{value:!0});function Lp(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */var Dp=Pl.saveAs=window.saveAs||function(n){if(!(typeof navigator<"u"&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=n.document,t=function(){return n.URL||n.webkitURL||n},i=e.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in i,s=function(b){var S=new MouseEvent("click");b.dispatchEvent(S)},a=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),o=n.webkitRequestFileSystem,c=n.requestFileSystem||o||n.mozRequestFileSystem,l=function(b){(n.setImmediate||n.setTimeout)(function(){throw b},0)},f="application/octet-stream",p=0,h=1e3*40,m=function(b){var S=function(){typeof b=="string"?t().revokeObjectURL(b):b.remove()};setTimeout(S,h)},v=function(b,S,M){S=[].concat(S);for(var y=S.length;y--;){var T=b["on"+S[y]];if(typeof T=="function")try{T.call(b,M||b)}catch(x){l(x)}}},g=function(b){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b},u=function _(b,S,M){Lp(this,_),M||(b=g(b));var y=this,T=b.type,x=!1,E,A,H=function(){v(y,"writestart progress write writeend".split(" "))},U=function(){if(A&&a&&typeof FileReader<"u"){var O=new FileReader;O.onloadend=function(){var q=O.result;A.location.href="data:attachment/file"+q.slice(q.search(/[,;]/)),y.readyState=y.DONE,H()},O.readAsDataURL(b),y.readyState=y.INIT;return}if((x||!E)&&(E=t().createObjectURL(b)),A)A.location.href=E;else{var Q=n.open(E,"_blank");Q===void 0&&a&&(n.location.href=E)}y.readyState=y.DONE,H(),m(E)},I=function(O){return function(){if(y.readyState!==y.DONE)return O.apply(this,arguments)}},P={create:!0,exclusive:!1},X;if(y.readyState=y.INIT,S||(S="download"),r){E=t().createObjectURL(b),setTimeout(function(){i.href=E,i.download=S,s(i),H(),m(E),y.readyState=y.DONE});return}if(n.chrome&&T&&T!==f&&(X=b.slice||b.webkitSlice,b=X.call(b,0,b.size,f),x=!0),o&&S!=="download"&&(S+=".download"),(T===f||o)&&(A=n),!c){U();return}p+=b.size,c(n.TEMPORARY,p,I(function(F){F.root.getDirectory("saved",P,I(function(O){var Q=function(){O.getFile(S,P,I(function(ce){ce.createWriter(I(function(N){N.onwriteend=function($){A.location.href=ce.toURL(),y.readyState=y.DONE,v(y,"writeend",$),m(ce)},N.onerror=function(){var $=N.error;$.code!==$.ABORT_ERR&&U()},"writestart progress write abort".split(" ").forEach(function($){N["on"+$]=y["on"+$]}),N.write(b),y.abort=function(){N.abort(),y.readyState=y.DONE},y.readyState=y.WRITING}),U)}),U)};O.getFile(S,{create:!1},I(function(q){q.remove(),Q()}),I(function(q){q.code===q.NOT_FOUND_ERR?Q():U()}))}),U)}),U)},d=u.prototype,w=function(b,S,M){return new u(b,S,M)};return typeof navigator<"u"&&navigator.msSaveOrOpenBlob?function(_,b,S){return S||(_=g(_)),navigator.msSaveOrOpenBlob(_,b||"download")}:(d.abort=function(){var _=this;_.readyState=_.DONE,v(_,"abort")},d.readyState=d.INIT=0,d.WRITING=1,d.DONE=2,d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null,w)}}(typeof self<"u"&&self||typeof window<"u"&&window||(void 0).content),Up=Pl.default=Dp;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="153",Pp=0,lc=1,Ip=2,cu=1,Fp=2,Hn=3,gi=0,Gt=1,En=2,ui=0,xr=1,cc=2,fc=3,dc=4,Np=5,hr=100,kp=101,Op=102,uc=103,hc=104,Bp=200,zp=201,Gp=202,Hp=203,fu=204,du=205,Vp=206,Wp=207,Xp=208,qp=209,Yp=210,Zp=0,$p=1,jp=2,il=3,Kp=4,Jp=5,Qp=6,em=7,uu=0,tm=1,nm=2,Zn=0,hu=1,pu=2,im=3,rm=4,sm=5,mu=300,Sr=301,Er=302,rl=303,sl=304,Ia=306,al=1e3,Lt=1001,ol=1002,vt=1003,pc=1004,$a=1005,dt=1006,am=1007,yr=1008,hi=1009,om=1010,lm=1011,Fl=1012,_u=1013,ci=1014,Kt=1015,Mn=1016,gu=1017,xu=1018,ki=1020,cm=1021,gn=1023,fm=1024,dm=1025,Oi=1026,Mr=1027,um=1028,vu=1029,hm=1030,wu=1031,bu=1033,ja=33776,Ka=33777,Ja=33778,Qa=33779,mc=35840,_c=35841,gc=35842,xc=35843,pm=36196,vc=37492,wc=37496,bc=37808,Sc=37809,Ec=37810,yc=37811,Mc=37812,Tc=37813,Ac=37814,Rc=37815,Cc=37816,Lc=37817,Dc=37818,Uc=37819,Pc=37820,Ic=37821,eo=36492,mm=36283,Fc=36284,Nc=36285,kc=36286,Su=3e3,Bi=3001,_m=3200,gm=3201,xm=0,vm=1,zi="",Ue="srgb",en="srgb-linear",Eu="display-p3",to=7680,wm=519,bm=512,Sm=513,Em=514,ym=515,Mm=516,Tm=517,Am=518,Rm=519,Oc=35044,Bc="300 es",ll=1035,qn=2e3,Ea=2001;class Ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,cl=180/Math.PI;function xs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Cm(n,e){return(n%e+e)%e}function io(n,e,t){return(1-t)*n+t*e}function zc(n){return(n&n-1)===0&&n!==0}function fl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,i,r,s,a,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],p=i[7],h=i[2],m=i[5],v=i[8],g=r[0],u=r[3],d=r[6],w=r[1],_=r[4],b=r[7],S=r[2],M=r[5],y=r[8];return s[0]=a*g+o*w+c*S,s[3]=a*u+o*_+c*M,s[6]=a*d+o*b+c*y,s[1]=l*g+f*w+p*S,s[4]=l*u+f*_+p*M,s[7]=l*d+f*b+p*y,s[2]=h*g+m*w+v*S,s[5]=h*u+m*_+v*M,s[8]=h*d+m*b+v*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-i*s*f+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=f*a-o*l,h=o*c-f*s,m=l*s-a*c,v=t*p+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=p*g,e[1]=(r*l-f*i)*g,e[2]=(o*i-r*a)*g,e[3]=h*g,e[4]=(f*t-r*c)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(i*c-l*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new Fe;function yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Gc={};function Qr(n){n in Gc||(Gc[n]=!0,console.warn(n))}function vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function so(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Lm=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Dm=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Um(n){return n.convertSRGBToLinear().applyMatrix3(Dm)}function Pm(n){return n.applyMatrix3(Lm).convertLinearToSRGB()}const Im={[en]:n=>n,[Ue]:n=>n.convertSRGBToLinear(),[Eu]:Um},Fm={[en]:n=>n,[Ue]:n=>n.convertLinearToSRGB(),[Eu]:Pm},ln={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return en},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Im[e],r=Fm[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let qi;class Mu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=is("canvas")),qi.width=e.width,qi.height=e.height;const i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vr(t[i]/255)*255):t[i]=vr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nm=0;class Tu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=xs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ao(r[a].image)):s.push(ao(r[a]))}else s=ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let km=0;class Pt extends Ur{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Lt,r=Lt,s=dt,a=yr,o=gn,c=hi,l=Pt.DEFAULT_ANISOTROPY,f=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=xs(),this.name="",this.source=new Tu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Bi?Ue:zi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case al:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case al:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?Bi:Su}set encoding(e){Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Bi?Ue:zi}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=mu;Pt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],f=c[4],p=c[8],h=c[1],m=c[5],v=c[9],g=c[2],u=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-g)<.01&&Math.abs(v-u)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+g)<.1&&Math.abs(v+u)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,b=(m+1)/2,S=(d+1)/2,M=(f+h)/4,y=(p+g)/4,T=(v+u)/4;return _>b&&_>S?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=y/i):b>S?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=M/r,s=T/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=y/s,r=T/s),this.set(i,r,s,t),this}let w=Math.sqrt((u-v)*(u-v)+(p-g)*(p-g)+(h-f)*(h-f));return Math.abs(w)<.001&&(w=1),this.x=(u-v)/w,this.y=(p-g)/w,this.z=(h-f)/w,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xi extends Ur{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Bi?Ue:zi),this.texture=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:dt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Au extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Om extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],f=i[r+2],p=i[r+3];const h=s[a+0],m=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(p!==g||c!==h||l!==m||f!==v){let u=1-o;const d=c*h+l*m+f*v+p*g,w=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const S=Math.sqrt(_),M=Math.atan2(S,d*w);u=Math.sin(u*M)/S,o=Math.sin(o*M)/S}const b=o*w;if(c=c*u+h*b,l=l*u+m*b,f=f*u+v*b,p=p*u+g*b,u===1-o){const S=1/Math.sqrt(c*c+l*l+f*f+p*p);c*=S,l*=S,f*=S,p*=S}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],f=i[r+3],p=s[a],h=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+f*p+c*m-l*h,e[t+1]=c*v+f*h+l*p-o*m,e[t+2]=l*v+f*m+o*h-c*p,e[t+3]=f*v-o*p-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(r/2),p=o(s/2),h=c(i/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=h*f*p+l*m*v,this._y=l*m*p-h*f*v,this._z=l*f*v+h*m*p,this._w=l*f*p-h*m*v;break;case"YXZ":this._x=h*f*p+l*m*v,this._y=l*m*p-h*f*v,this._z=l*f*v-h*m*p,this._w=l*f*p+h*m*v;break;case"ZXY":this._x=h*f*p-l*m*v,this._y=l*m*p+h*f*v,this._z=l*f*v+h*m*p,this._w=l*f*p-h*m*v;break;case"ZYX":this._x=h*f*p-l*m*v,this._y=l*m*p+h*f*v,this._z=l*f*v-h*m*p,this._w=l*f*p+h*m*v;break;case"YZX":this._x=h*f*p+l*m*v,this._y=l*m*p+h*f*v,this._z=l*f*v-h*m*p,this._w=l*f*p-h*m*v;break;case"XZY":this._x=h*f*p-l*m*v,this._y=l*m*p-h*f*v,this._z=l*f*v+h*m*p,this._w=l*f*p+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],p=t[10],h=i+o+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(f-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-i*l,this._z=s*f+a*l+i*c-r*o,this._w=a*f-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),p=Math.sin((1-t)*f)/l,h=Math.sin(t*f)/l;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*r-o*i,f=c*i+o*t-s*r,p=c*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=l*c+h*-s+f*-o-p*-a,this.y=f*c+h*-a+p*-s-l*-o,this.z=p*c+h*-o+l*-a-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new Z,Hc=new vs;class ws{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox),Yi.applyMatrix4(e.matrixWorld),this.union(Yi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Fn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else r.boundingBox===null&&r.computeBoundingBox(),Yi.copy(r.boundingBox),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Is.subVectors(this.max,Or),Zi.subVectors(e.a,Or),$i.subVectors(e.b,Or),ji.subVectors(e.c,Or),Kn.subVectors($i,Zi),Jn.subVectors(ji,$i),Ei.subVectors(Zi,ji);let t=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-Ei.z,Ei.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,Ei.z,0,-Ei.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-Ei.y,Ei.x,0];return!lo(t,Zi,$i,ji,Is)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,Zi,$i,ji,Is))?!1:(Fs.crossVectors(Kn,Jn),t=[Fs.x,Fs.y,Fs.z],lo(t,Zi,$i,ji,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Fn=new Z,Yi=new ws,Zi=new Z,$i=new Z,ji=new Z,Kn=new Z,Jn=new Z,Ei=new Z,Or=new Z,Is=new Z,Fs=new Z,yi=new Z;function lo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){yi.fromArray(n,s);const o=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),c=e.dot(yi),l=t.dot(yi),f=i.dot(yi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Bm=new ws,Br=new Z,co=new Z;class Nl{constructor(e=new Z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(co)),this.expandByPoint(Br.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new Z,fo=new Z,Ns=new Z,Qn=new Z,uo=new Z,ks=new Z,ho=new Z;class zm{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fo.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(fo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=Qn.dot(this.direction),c=-Qn.dot(Ns),l=Qn.lengthSq(),f=Math.abs(1-a*a);let p,h,m,v;if(f>0)if(p=a*c-o,h=a*o-c,v=s*f,p>=0)if(h>=-v)if(h<=v){const g=1/f;p*=g,h*=g,m=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*c)+l;else h=-s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*c)+l;else h<=-v?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+h*(h+2*c)+l):h<=v?(p=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+h*(h+2*c)+l);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(fo).addScaledVector(Ns,h),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){uo.subVectors(t,e),ks.subVectors(i,e),ho.crossVectors(uo,ks);let a=this.direction.dot(ho),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,e);const c=o*this.direction.dot(ks.crossVectors(Qn,ks));if(c<0)return null;const l=o*this.direction.dot(uo.cross(Qn));if(l<0||c+l>a)return null;const f=-o*Qn.dot(ho);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,i,r,s,a,o,c,l,f,p,h,m,v,g,u){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,f,p,h,m,v,g,u)}set(e,t,i,r,s,a,o,c,l,f,p,h,m,v,g,u){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=f,d[10]=p,d[14]=h,d[3]=m,d[7]=v,d[11]=g,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*p,v=o*f,g=o*p;t[0]=c*f,t[4]=-c*p,t[8]=l,t[1]=m+v*l,t[5]=h-g*l,t[9]=-o*c,t[2]=g-h*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,m=c*p,v=l*f,g=l*p;t[0]=h+g*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*p,t[5]=a*f,t[9]=-o,t[2]=m*o-v,t[6]=g+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,m=c*p,v=l*f,g=l*p;t[0]=h-g*o,t[4]=-a*p,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*f,t[9]=g-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,m=a*p,v=o*f,g=o*p;t[0]=c*f,t[4]=v*l-m,t[8]=h*l+g,t[1]=c*p,t[5]=g*l+h,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,v=o*c,g=o*l;t[0]=c*f,t[4]=g-h*p,t[8]=v*p+m,t[1]=p,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=m*p+v,t[10]=h-g*p}else if(e.order==="XZY"){const h=a*c,m=a*l,v=o*c,g=o*l;t[0]=c*f,t[4]=-p,t[8]=l*f,t[1]=h*p+g,t[5]=a*f,t[9]=m*p-v,t[2]=v*p-m,t[6]=o*f,t[10]=g*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Hm)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),ei.crossVectors(i,Wt),ei.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),ei.crossVectors(i,Wt)),ei.normalize(),Os.crossVectors(Wt,ei),r[0]=ei.x,r[4]=Os.x,r[8]=Wt.x,r[1]=ei.y,r[5]=Os.y,r[9]=Wt.y,r[2]=ei.z,r[6]=Os.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],p=i[5],h=i[9],m=i[13],v=i[2],g=i[6],u=i[10],d=i[14],w=i[3],_=i[7],b=i[11],S=i[15],M=r[0],y=r[4],T=r[8],x=r[12],E=r[1],A=r[5],H=r[9],U=r[13],I=r[2],P=r[6],X=r[10],F=r[14],O=r[3],Q=r[7],q=r[11],ce=r[15];return s[0]=a*M+o*E+c*I+l*O,s[4]=a*y+o*A+c*P+l*Q,s[8]=a*T+o*H+c*X+l*q,s[12]=a*x+o*U+c*F+l*ce,s[1]=f*M+p*E+h*I+m*O,s[5]=f*y+p*A+h*P+m*Q,s[9]=f*T+p*H+h*X+m*q,s[13]=f*x+p*U+h*F+m*ce,s[2]=v*M+g*E+u*I+d*O,s[6]=v*y+g*A+u*P+d*Q,s[10]=v*T+g*H+u*X+d*q,s[14]=v*x+g*U+u*F+d*ce,s[3]=w*M+_*E+b*I+S*O,s[7]=w*y+_*A+b*P+S*Q,s[11]=w*T+_*H+b*X+S*q,s[15]=w*x+_*U+b*F+S*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],p=e[6],h=e[10],m=e[14],v=e[3],g=e[7],u=e[11],d=e[15];return v*(+s*c*p-r*l*p-s*o*h+i*l*h+r*o*m-i*c*m)+g*(+t*c*m-t*l*h+s*a*h-r*a*m+r*l*f-s*c*f)+u*(+t*l*p-t*o*m-s*a*p+i*a*m+s*o*f-i*l*f)+d*(-r*o*f-t*c*p+t*o*h+r*a*p-i*a*h+i*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=e[9],h=e[10],m=e[11],v=e[12],g=e[13],u=e[14],d=e[15],w=p*u*l-g*h*l+g*c*m-o*u*m-p*c*d+o*h*d,_=v*h*l-f*u*l-v*c*m+a*u*m+f*c*d-a*h*d,b=f*g*l-v*p*l+v*o*m-a*g*m-f*o*d+a*p*d,S=v*p*c-f*g*c-v*o*h+a*g*h+f*o*u-a*p*u,M=t*w+i*_+r*b+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/M;return e[0]=w*y,e[1]=(g*h*s-p*u*s-g*r*m+i*u*m+p*r*d-i*h*d)*y,e[2]=(o*u*s-g*c*s+g*r*l-i*u*l-o*r*d+i*c*d)*y,e[3]=(p*c*s-o*h*s-p*r*l+i*h*l+o*r*m-i*c*m)*y,e[4]=_*y,e[5]=(f*u*s-v*h*s+v*r*m-t*u*m-f*r*d+t*h*d)*y,e[6]=(v*c*s-a*u*s-v*r*l+t*u*l+a*r*d-t*c*d)*y,e[7]=(a*h*s-f*c*s+f*r*l-t*h*l-a*r*m+t*c*m)*y,e[8]=b*y,e[9]=(v*p*s-f*g*s-v*i*m+t*g*m+f*i*d-t*p*d)*y,e[10]=(a*g*s-v*o*s+v*i*l-t*g*l-a*i*d+t*o*d)*y,e[11]=(f*o*s-a*p*s-f*i*l+t*p*l+a*i*m-t*o*m)*y,e[12]=S*y,e[13]=(f*g*r-v*p*r+v*i*h-t*g*h-f*i*u+t*p*u)*y,e[14]=(v*o*r-a*g*r-v*i*c+t*g*c+a*i*u-t*o*u)*y,e[15]=(a*p*r-f*o*r+f*i*c-t*p*c-a*i*h+t*o*h)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+i,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,p=o+o,h=s*l,m=s*f,v=s*p,g=a*f,u=a*p,d=o*p,w=c*l,_=c*f,b=c*p,S=i.x,M=i.y,y=i.z;return r[0]=(1-(g+d))*S,r[1]=(m+b)*S,r[2]=(v-_)*S,r[3]=0,r[4]=(m-b)*M,r[5]=(1-(h+d))*M,r[6]=(u+w)*M,r[7]=0,r[8]=(v+_)*y,r[9]=(u-w)*y,r[10]=(1-(h+g))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ki.set(r[0],r[1],r[2]).length();const a=Ki.set(r[4],r[5],r[6]).length(),o=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const l=1/s,f=1/a,p=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=f,cn.elements[5]*=f,cn.elements[6]*=f,cn.elements[8]*=p,cn.elements[9]*=p,cn.elements[10]*=p,t.setFromRotationMatrix(cn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=qn){const c=this.elements,l=2*s/(t-e),f=2*s/(i-r),p=(t+e)/(t-e),h=(i+r)/(i-r);let m,v;if(o===qn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ea)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=qn){const c=this.elements,l=1/(t-e),f=1/(i-r),p=1/(a-s),h=(t+e)*l,m=(i+r)*f;let v,g;if(o===qn)v=(a+s)*p,g=-2*p;else if(o===Ea)v=s*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new Z,cn=new St,Gm=new Z(0,0,0),Hm=new Z(1,1,1),ei=new Z,Os=new Z,Wt=new Z,Vc=new St,Wc=new vs;class bn{constructor(e=0,t=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],p=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vm=0;const Xc=new Z,Ji=new vs,kn=new St,Bs=new Z,zr=new Z,Wm=new Z,Xm=new vs,qc=new Z(1,0,0),Yc=new Z(0,1,0),Zc=new Z(0,0,1),qm={type:"added"},$c={type:"removed"};class Qt extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new Z,t=new bn,i=new vs,r=new Z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Fe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bs.copy(e):Bs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(zr,Bs,this.up):kn.lookAt(Bs,zr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(kn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($c)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($c)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new Z(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new Z,On=new Z,po=new Z,Bn=new Z,Qi=new Z,er=new Z,jc=new Z,mo=new Z,_o=new Z,go=new Z;let zs=!1;class _n{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),On.subVectors(i,t),po.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(On),c=fn.dot(po),l=On.dot(On),f=On.dot(po),p=a*l-o*o;if(p===0)return s.set(-2,-1,-1);const h=1/p,m=(l*c-o*f)*h,v=(a*f-o*c)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,i,r,s,a,o,c){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),this.getInterpolation(e,t,i,r,s,a,o,c)}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Bn),c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),On.subVectors(e,t),fn.cross(On).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),fn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),_n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Qi.subVectors(r,i),er.subVectors(s,i),mo.subVectors(e,i);const c=Qi.dot(mo),l=er.dot(mo);if(c<=0&&l<=0)return t.copy(i);_o.subVectors(e,r);const f=Qi.dot(_o),p=er.dot(_o);if(f>=0&&p<=f)return t.copy(r);const h=c*p-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(Qi,a);go.subVectors(e,s);const m=Qi.dot(go),v=er.dot(go);if(v>=0&&m<=v)return t.copy(s);const g=m*l-c*v;if(g<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(er,o);const u=f*v-m*p;if(u<=0&&p-f>=0&&m-v>=0)return jc.subVectors(s,r),o=(p-f)/(p-f+(m-v)),t.copy(r).addScaledVector(jc,o);const d=1/(u+g+h);return a=g*d,o=h*d,t.copy(i).addScaledVector(Qi,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ym=0;class Fa extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=xr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fu,this.blendDst=du,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ln.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ln.workingColorSpace){return this.r=e,this.g=t,this.b=i,ln.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ln.workingColorSpace){if(e=Cm(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xo(a,s,e+1/3),this.g=xo(a,s,e),this.b=xo(a,s,e-1/3)}return ln.toWorkingColorSpace(this,r),this}setStyle(e,t=Ue){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){const i=Cu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return ln.fromWorkingColorSpace(yt.copy(this),e),Math.round(Rt(yt.r*255,0,255))*65536+Math.round(Rt(yt.g*255,0,255))*256+Math.round(Rt(yt.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ln.workingColorSpace){ln.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=f<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ln.workingColorSpace){return ln.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Ue){ln.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==Ue?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(dn),dn.h+=e,dn.s+=t,dn.l+=i,this.setHSL(dn.h,dn.s,dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(Gs);const i=io(dn.h,Gs.h,t),r=io(dn.s,Gs.s,t),s=io(dn.l,Gs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new nt;nt.NAMES=Cu;class kl extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xn=Zm();function Zm(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,f=0;for(;!(l&8388608);)l<<=1,f-=8388608;l&=-8388609,f+=947912704,s[c]=l|f}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function $m(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Rt(n,-65504,65504),Xn.floatView[0]=n;const e=Xn.uint32View[0],t=e>>23&511;return Xn.baseTable[t]+((e&8388607)>>Xn.shiftTable[t])}function jm(n){const e=n>>10;return Xn.uint32View[0]=Xn.mantissaTable[Xn.offsetTable[e]+(n&1023)]+Xn.exponentTable[e],Xn.floatView[0]}const Hs={toHalfFloat:$m,fromHalfFloat:jm},ct=new Z,Vs=new $e;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oc,this.updateRange={offset:0,count:-1},this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lu extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Du extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rn extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Km=0;const tn=new St,vo=new Qt,tr=new Z,Xt=new ws,Gr=new ws,mt=new Z;class vi extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?Du:Lu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Xt.min,Gr.min),Xt.expandByPoint(mt),mt.addVectors(Xt.max,Gr.max),Xt.expandByPoint(mt)):(Xt.expandByPoint(Gr.min),Xt.expandByPoint(Gr.max))}Xt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)mt.fromBufferAttribute(o,l),c&&(tr.fromBufferAttribute(e,l),mt.add(tr)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],f=[];for(let E=0;E<o;E++)l[E]=new Z,f[E]=new Z;const p=new Z,h=new Z,m=new Z,v=new $e,g=new $e,u=new $e,d=new Z,w=new Z;function _(E,A,H){p.fromArray(r,E*3),h.fromArray(r,A*3),m.fromArray(r,H*3),v.fromArray(a,E*2),g.fromArray(a,A*2),u.fromArray(a,H*2),h.sub(p),m.sub(p),g.sub(v),u.sub(v);const U=1/(g.x*u.y-u.x*g.y);isFinite(U)&&(d.copy(h).multiplyScalar(u.y).addScaledVector(m,-g.y).multiplyScalar(U),w.copy(m).multiplyScalar(g.x).addScaledVector(h,-u.x).multiplyScalar(U),l[E].add(d),l[A].add(d),l[H].add(d),f[E].add(w),f[A].add(w),f[H].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let E=0,A=b.length;E<A;++E){const H=b[E],U=H.start,I=H.count;for(let P=U,X=U+I;P<X;P+=3)_(i[P+0],i[P+1],i[P+2])}const S=new Z,M=new Z,y=new Z,T=new Z;function x(E){y.fromArray(s,E*3),T.copy(y);const A=l[E];S.copy(A),S.sub(y.multiplyScalar(y.dot(A))).normalize(),M.crossVectors(T,A);const U=M.dot(f[E])<0?-1:1;c[E*4]=S.x,c[E*4+1]=S.y,c[E*4+2]=S.z,c[E*4+3]=U}for(let E=0,A=b.length;E<A;++E){const H=b[E],U=H.start,I=H.count;for(let P=U,X=U+I;P<X;P+=3)x(i[P+0]),x(i[P+1]),x(i[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,c=new Z,l=new Z,f=new Z,p=new Z;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),g=e.getX(h+1),u=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,u),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,u),o.add(f),c.add(f),l.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(u,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,p=o.normalized,h=new l.constructor(c.length*f);let m=0,v=0;for(let g=0,u=c.length;g<u;g++){o.isInterleavedBufferAttribute?m=c[g]*o.data.stride+o.offset:m=c[g]*f;for(let d=0;d<f;d++)h[v++]=l[m++]}return new An(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,p=l.length;f<p;f++){const h=l[f],m=e(h,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let p=0,h=l.length;p<h;p++){const m=l[p];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],p=s[l];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new St,Mi=new zm,Ws=new Nl,Jc=new Z,nr=new Z,ir=new Z,rr=new Z,wo=new Z,Xs=new Z,qs=new $e,Ys=new $e,Zs=new $e,Qc=new Z,ef=new Z,tf=new Z,$s=new Z,js=new Z;class Yn extends Qt{constructor(e=new vi,t=new kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Xs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],p=s[c];f!==0&&(wo.fromBufferAttribute(p,e),a?Xs.addScaledVector(wo,f):Xs.addScaledVector(wo.sub(t),f))}t.add(Xs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Ws.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ws,Jc)===null||Mi.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Kc.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=h.length;v<g;v++){const u=h[v],d=a[u.materialIndex],w=Math.max(u.start,m.start),_=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let b=w,S=_;b<S;b+=3){const M=o.getX(b),y=o.getX(b+1),T=o.getX(b+2);r=Ks(this,d,e,i,l,f,p,M,y,T),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let u=v,d=g;u<d;u+=3){const w=o.getX(u),_=o.getX(u+1),b=o.getX(u+2);r=Ks(this,a,e,i,l,f,p,w,_,b),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=h.length;v<g;v++){const u=h[v],d=a[u.materialIndex],w=Math.max(u.start,m.start),_=Math.min(c.count,Math.min(u.start+u.count,m.start+m.count));for(let b=w,S=_;b<S;b+=3){const M=b,y=b+1,T=b+2;r=Ks(this,d,e,i,l,f,p,M,y,T),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let u=v,d=g;u<d;u+=3){const w=u,_=u+1,b=u+2;r=Ks(this,a,e,i,l,f,p,w,_,b),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}}function Jm(n,e,t,i,r,s,a,o){let c;if(e.side===Gt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===gi,o),c===null)return null;js.copy(o),js.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(js);return l<t.near||l>t.far?null:{distance:l,point:js.clone(),object:n}}function Ks(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,nr),n.getVertexPosition(c,ir),n.getVertexPosition(l,rr);const f=Jm(n,e,t,i,nr,ir,rr,$s);if(f){r&&(qs.fromBufferAttribute(r,o),Ys.fromBufferAttribute(r,c),Zs.fromBufferAttribute(r,l),f.uv=_n.getInterpolation($s,nr,ir,rr,qs,Ys,Zs,new $e)),s&&(qs.fromBufferAttribute(s,o),Ys.fromBufferAttribute(s,c),Zs.fromBufferAttribute(s,l),f.uv1=_n.getInterpolation($s,nr,ir,rr,qs,Ys,Zs,new $e),f.uv2=f.uv1),a&&(Qc.fromBufferAttribute(a,o),ef.fromBufferAttribute(a,c),tf.fromBufferAttribute(a,l),f.normal=_n.getInterpolation($s,nr,ir,rr,Qc,ef,tf,new Z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new Z,materialIndex:0};_n.getNormal(nr,ir,rr,p.normal),f.face=p}return f}class bs extends vi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],p=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Rn(l,3)),this.setAttribute("normal",new Rn(f,3)),this.setAttribute("uv",new Rn(p,2));function v(g,u,d,w,_,b,S,M,y,T,x){const E=b/y,A=S/T,H=b/2,U=S/2,I=M/2,P=y+1,X=T+1;let F=0,O=0;const Q=new Z;for(let q=0;q<X;q++){const ce=q*A-U;for(let N=0;N<P;N++){const $=N*E-H;Q[g]=$*w,Q[u]=ce*_,Q[d]=I,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[u]=0,Q[d]=M>0?1:-1,f.push(Q.x,Q.y,Q.z),p.push(N/y),p.push(1-q/T),F+=1}}for(let q=0;q<T;q++)for(let ce=0;ce<y;ce++){const N=h+ce+P*q,$=h+ce+P*(q+1),ie=h+(ce+1)+P*(q+1),fe=h+(ce+1)+P*q;c.push(N,$,fe),c.push($,ie,fe),O+=6}o.addGroup(m,O,x),m+=O,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=Tr(n[t]);for(const r in i)e[r]=i[r]}return e}function Qm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uu(n){return n.getRenderTarget()===null?n.outputColorSpace:en}const e0={clone:Tr,merge:At};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pu extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends Pu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sr=-90,ar=1;class i0 extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new jt(sr,ar,e,t);r.layers=this.layers,this.add(r);const s=new jt(sr,ar,e,t);s.layers=this.layers,this.add(s);const a=new jt(sr,ar,e,t);a.layers=this.layers,this.add(a);const o=new jt(sr,ar,e,t);o.layers=this.layers,this.add(o);const c=new jt(sr,ar,e,t);c.layers=this.layers,this.add(c);const l=new jt(sr,ar,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,c,l]=this.children,f=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=Zn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(f),e.toneMapping=p,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Iu extends Pt{constructor(e,t,i,r,s,a,o,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r0 extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Bi?Ue:zi),this.texture=new Iu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bs(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:ui});s.uniforms.tEquirect.value=t;const a=new Yn(r,s),o=t.minFilter;return t.minFilter===yr&&(t.minFilter=dt),new i0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const bo=new Z,s0=new Z,a0=new Fe;class Ci{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=bo.subVectors(i,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||a0.getNormalMatrix(e),r=this.coplanarPoint(bo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Nl,Js=new Z;class Fu{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,s=new Ci,a=new Ci){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],f=r[5],p=r[6],h=r[7],m=r[8],v=r[9],g=r[10],u=r[11],d=r[12],w=r[13],_=r[14],b=r[15];if(i[0].setComponents(c-s,h-l,u-m,b-d).normalize(),i[1].setComponents(c+s,h+l,u+m,b+d).normalize(),i[2].setComponents(c+a,h+f,u+v,b+w).normalize(),i[3].setComponents(c-a,h-f,u-v,b-w).normalize(),i[4].setComponents(c-o,h-p,u-g,b-_).normalize(),t===qn)i[5].setComponents(c+o,h+p,u+g,b+_).normalize();else if(t===Ea)i[5].setComponents(o,p,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function o0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,f){const p=l.array,h=l.usage,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,p,h),l.onUploadCallback();let v;if(p instanceof Float32Array)v=n.FLOAT;else if(p instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=n.SHORT;else if(p instanceof Uint32Array)v=n.UNSIGNED_INT;else if(p instanceof Int32Array)v=n.INT;else if(p instanceof Int8Array)v=n.BYTE;else if(p instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:l.version}}function s(l,f,p){const h=f.array,m=f.updateRange;n.bindBuffer(p,l),m.count===-1?n.bufferSubData(p,0,h):(t?n.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f&&(n.deleteBuffer(f.buffer),i.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const p=i.get(l);p===void 0?i.set(l,r(l,f)):p.version<l.version&&(s(p.buffer,l,f),p.version=l.version)}return{get:a,remove:o,update:c}}class Ol extends vi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,f=c+1,p=e/o,h=t/c,m=[],v=[],g=[],u=[];for(let d=0;d<f;d++){const w=d*h-a;for(let _=0;_<l;_++){const b=_*p-s;v.push(b,-w,0),g.push(0,0,1),u.push(_/o),u.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<o;w++){const _=w+l*d,b=w+l*(d+1),S=w+1+l*(d+1),M=w+1+l*d;m.push(_,b,M),m.push(b,S,M)}this.setIndex(m),this.setAttribute("position",new Rn(v,3)),this.setAttribute("normal",new Rn(g,3)),this.setAttribute("uv",new Rn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p0="vec3 transformed = vec3( position );",m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",F0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,i_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,o_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,d_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,u_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,v_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,P_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,H_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,X_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Q_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tg=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:l0,alphamap_pars_fragment:c0,alphatest_fragment:f0,alphatest_pars_fragment:d0,aomap_fragment:u0,aomap_pars_fragment:h0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:_0,iridescence_fragment:g0,bumpmap_pars_fragment:x0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:b0,clipping_planes_vertex:S0,color_fragment:E0,color_pars_fragment:y0,color_pars_vertex:M0,color_vertex:T0,common:A0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:L0,displacementmap_vertex:D0,emissivemap_fragment:U0,emissivemap_pars_fragment:P0,encodings_fragment:I0,encodings_pars_fragment:F0,envmap_fragment:N0,envmap_common_pars_fragment:k0,envmap_pars_fragment:O0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:K0,envmap_vertex:z0,fog_vertex:G0,fog_pars_vertex:H0,fog_fragment:V0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_fragment:q0,lightmap_pars_fragment:Y0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:$0,lights_pars_begin:j0,lights_toon_fragment:J0,lights_toon_pars_fragment:Q0,lights_phong_fragment:e_,lights_phong_pars_fragment:t_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:r_,lights_fragment_maps:s_,lights_fragment_end:a_,logdepthbuf_fragment:o_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:c_,logdepthbuf_vertex:f_,map_fragment:d_,map_pars_fragment:u_,map_particle_fragment:h_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:__,morphcolor_vertex:g_,morphnormal_vertex:x_,morphtarget_pars_vertex:v_,morphtarget_vertex:w_,normal_fragment_begin:b_,normal_fragment_maps:S_,normal_pars_fragment:E_,normal_pars_vertex:y_,normal_vertex:M_,normalmap_pars_fragment:T_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:L_,output_fragment:D_,packing:U_,premultiplied_alpha_fragment:P_,project_vertex:I_,dithering_fragment:F_,dithering_pars_fragment:N_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:O_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:z_,shadowmap_vertex:G_,shadowmask_pars_fragment:H_,skinbase_vertex:V_,skinning_pars_vertex:W_,skinning_vertex:X_,skinnormal_vertex:q_,specularmap_fragment:Y_,specularmap_pars_fragment:Z_,tonemapping_fragment:$_,tonemapping_pars_fragment:j_,transmission_fragment:K_,transmission_pars_fragment:J_,uv_pars_fragment:Q_,uv_pars_vertex:eg,uv_vertex:tg,worldpos_vertex:ng,background_vert:ig,background_frag:rg,backgroundCube_vert:sg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:fg,distanceRGBA_vert:dg,distanceRGBA_frag:ug,equirect_vert:hg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:_g,meshbasic_vert:gg,meshbasic_frag:xg,meshlambert_vert:vg,meshlambert_frag:wg,meshmatcap_vert:bg,meshmatcap_frag:Sg,meshnormal_vert:Eg,meshnormal_frag:yg,meshphong_vert:Mg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Lg,points_vert:Dg,points_frag:Ug,shadow_vert:Pg,shadow_frag:Ig,sprite_vert:Fg,sprite_frag:Ng},de={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Sn={basic:{uniforms:At([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:At([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:At([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:At([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:At([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:At([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:At([de.points,de.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:At([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:At([de.common,de.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:At([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:At([de.sprite,de.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:At([de.common,de.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:At([de.lights,de.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Sn.physical={uniforms:At([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Qs={r:0,b:0,g:0};function kg(n,e,t,i,r,s,a){const o=new nt(0);let c=s===!0?0:1,l,f,p=null,h=0,m=null;function v(u,d){let w=!1,_=d.isScene===!0?d.background:null;switch(_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?g(o,c):_&&_.isColor&&(g(_,1),w=!0),n.xr.getEnvironmentBlendMode()){case"opaque":w=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),w=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),w=!0;break}(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ia)?(f===void 0&&(f=new Yn(new bs(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Tr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(M,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.toneMapped=_.colorSpace!==Ue,(p!==_||h!==_.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,p=_,h=_.version,m=n.toneMapping),f.layers.enableAll(),u.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Yn(new Ol(2,2),new Gi({name:"BackgroundMaterial",uniforms:Tr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=_.colorSpace!==Ue,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||h!==_.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,p=_,h=_.version,m=n.toneMapping),l.layers.enableAll(),u.unshift(l,l.geometry,l.material,0,0,null))}function g(u,d){u.getRGB(Qs,Uu(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(u,d=1){o.set(u),c=d,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(u){c=u,g(o,c)},render:v}}function Og(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=u(null);let l=c,f=!1;function p(I,P,X,F,O){let Q=!1;if(a){const q=g(F,X,P);l!==q&&(l=q,m(l.object)),Q=d(I,F,X,O),Q&&w(I,F,X,O)}else{const q=P.wireframe===!0;(l.geometry!==F.id||l.program!==X.id||l.wireframe!==q)&&(l.geometry=F.id,l.program=X.id,l.wireframe=q,Q=!0)}O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(Q||f)&&(f=!1,T(I,P,X,F),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,P,X){const F=X.wireframe===!0;let O=o[I.id];O===void 0&&(O={},o[I.id]=O);let Q=O[P.id];Q===void 0&&(Q={},O[P.id]=Q);let q=Q[F];return q===void 0&&(q=u(h()),Q[F]=q),q}function u(I){const P=[],X=[],F=[];for(let O=0;O<r;O++)P[O]=0,X[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:F,object:I,attributes:{},index:null}}function d(I,P,X,F){const O=l.attributes,Q=P.attributes;let q=0;const ce=X.getAttributes();for(const N in ce)if(ce[N].location>=0){const ie=O[N];let fe=Q[N];if(fe===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;q++}return l.attributesNum!==q||l.index!==F}function w(I,P,X,F){const O={},Q=P.attributes;let q=0;const ce=X.getAttributes();for(const N in ce)if(ce[N].location>=0){let ie=Q[N];ie===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));const fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),O[N]=fe,q++}l.attributes=O,l.attributesNum=q,l.index=F}function _(){const I=l.newAttributes;for(let P=0,X=I.length;P<X;P++)I[P]=0}function b(I){S(I,0)}function S(I,P){const X=l.newAttributes,F=l.enabledAttributes,O=l.attributeDivisors;X[I]=1,F[I]===0&&(n.enableVertexAttribArray(I),F[I]=1),O[I]!==P&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,P),O[I]=P)}function M(){const I=l.newAttributes,P=l.enabledAttributes;for(let X=0,F=P.length;X<F;X++)P[X]!==I[X]&&(n.disableVertexAttribArray(X),P[X]=0)}function y(I,P,X,F,O,Q,q){q===!0?n.vertexAttribIPointer(I,P,X,O,Q):n.vertexAttribPointer(I,P,X,F,O,Q)}function T(I,P,X,F){if(i.isWebGL2===!1&&(I.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const O=F.attributes,Q=X.getAttributes(),q=P.defaultAttributeValues;for(const ce in Q){const N=Q[ce];if(N.location>=0){let $=O[ce];if($===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const ie=$.normalized,fe=$.itemSize,le=t.get($);if(le===void 0)continue;const xe=le.buffer,Te=le.type,be=le.bytesPerElement,Ne=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||$.gpuType===_u);if($.isInterleavedBufferAttribute){const Me=$.data,B=Me.stride,Ye=$.offset;if(Me.isInstancedInterleavedBuffer){for(let ge=0;ge<N.locationSize;ge++)S(N.location+ge,Me.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ge=0;ge<N.locationSize;ge++)b(N.location+ge);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let ge=0;ge<N.locationSize;ge++)y(N.location+ge,fe/N.locationSize,Te,ie,B*be,(Ye+fe/N.locationSize*ge)*be,Ne)}else{if($.isInstancedBufferAttribute){for(let Me=0;Me<N.locationSize;Me++)S(N.location+Me,$.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Me=0;Me<N.locationSize;Me++)b(N.location+Me);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Me=0;Me<N.locationSize;Me++)y(N.location+Me,fe/N.locationSize,Te,ie,fe*be,fe/N.locationSize*Me*be,Ne)}}else if(q!==void 0){const ie=q[ce];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(N.location,ie);break;case 3:n.vertexAttrib3fv(N.location,ie);break;case 4:n.vertexAttrib4fv(N.location,ie);break;default:n.vertexAttrib1fv(N.location,ie)}}}}M()}function x(){H();for(const I in o){const P=o[I];for(const X in P){const F=P[X];for(const O in F)v(F[O].object),delete F[O];delete P[X]}delete o[I]}}function E(I){if(o[I.id]===void 0)return;const P=o[I.id];for(const X in P){const F=P[X];for(const O in F)v(F[O].object),delete F[O];delete P[X]}delete o[I.id]}function A(I){for(const P in o){const X=o[P];if(X[I.id]===void 0)continue;const F=X[I.id];for(const O in F)v(F[O].object),delete F[O];delete X[I.id]}}function H(){U(),f=!0,l!==c&&(l=c,m(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:H,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:b,disableUnusedAttributes:M}}function Bg(n,e,t,i){const r=i.isWebGL2;let s;function a(l){s=l}function o(l,f){n.drawArrays(s,l,f),t.update(f,s,1)}function c(l,f,p){if(p===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,f,p),t.update(f,s,p)}this.setMode=a,this.render=o,this.renderInstances=c}function zg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),u=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,b=a||e.has("OES_texture_float"),S=_&&b,M=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:u,maxVaryings:d,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:M}}function Gg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ci,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=f(p,h,0)},this.setState=function(p,h,m){const v=p.clippingPlanes,g=p.clipIntersection,u=p.clipShadows,d=n.get(p);if(!r||v===null||v.length===0||s&&!u)s?f(null):l();else{const w=s?0:i,_=w*4;let b=d.clippingState||null;c.value=b,b=f(v,h,_,m);for(let S=0;S!==_;++S)b[S]=t[S];d.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,v){const g=p!==null?p.length:0;let u=null;if(g!==0){if(u=c.value,v!==!0||u===null){const d=m+g*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(u===null||u.length<d)&&(u=new Float32Array(d));for(let _=0,b=m;_!==g;++_,b+=4)a.copy(p[_]).applyMatrix4(w,o),a.normal.toArray(u,b),u[b+3]=a.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,u}}function Hg(n){let e=new WeakMap;function t(a,o){return o===rl?a.mapping=Sr:o===sl&&(a.mapping=Er),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===rl||o===sl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new r0(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Vg extends Pu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,nf=[.125,.215,.35,.446,.526,.582],Pi=20,So=new Vg,rf=new nt;let Eo=null;const Li=(1+Math.sqrt(5))/2,or=1/Li,sf=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Li,or),new Z(0,Li,-or),new Z(or,0,Li),new Z(-or,0,Li),new Z(Li,or,0),new Z(-Li,or,0)];class af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Eo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo),e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dt,minFilter:dt,generateMipmaps:!1,type:Mn,format:gn,colorSpace:en,depthBuffer:!1},r=of(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(s)),this._blurMaterial=Xg(s,e,t)}return r}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,i,r){const o=new jt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(rf),f.toneMapping=Zn,f.autoClear=!1;const m=new kl({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),v=new Yn(new bs,m);let g=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,g=!0):(m.color.copy(rf),g=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):w===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const _=this._cubeSize;ea(r,w*_,d>2?_:0,_,_),f.setRenderTarget(r),g&&f.render(v,o),f.render(e,o)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ea(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,So)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sf[(r-1)%sf.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Yn(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),g=s/v,u=isFinite(s)?1+Math.floor(f*g):Pi;u>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Pi}`);const d=[];let w=0;for(let y=0;y<Pi;++y){const T=y/g,x=Math.exp(-T*T/2);d.push(x),y===0?w+=x:y<u&&(w+=2*x)}for(let y=0;y<d.length;y++)d[y]=d[y]/w;h.envMap.value=e.texture,h.samples.value=u,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const b=this._sizeLods[r],S=3*b*(r>_-_r?r-_+_r:0),M=4*(this._cubeSize-b);ea(t,S,M,3*b,2*b),c.setRenderTarget(t),c.render(p,So)}}function Wg(n){const e=[],t=[],i=[];let r=n;const s=n-_r+1+nf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-_r?c=nf[a-n+_r-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),f=-l,p=1+l,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,v=6,g=3,u=2,d=1,w=new Float32Array(g*v*m),_=new Float32Array(u*v*m),b=new Float32Array(d*v*m);for(let M=0;M<m;M++){const y=M%3*2/3-1,T=M>2?0:-1,x=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];w.set(x,g*v*M),_.set(h,u*v*M);const E=[M,M,M,M,M,M];b.set(E,d*v*M)}const S=new vi;S.setAttribute("position",new An(w,g)),S.setAttribute("uv",new An(_,u)),S.setAttribute("faceIndex",new An(b,d)),e.push(S),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function of(n,e,t){const i=new xi(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Xg(n,e,t){const i=new Float32Array(Pi),r=new Z(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function lf(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function cf(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===rl||c===sl,f=c===Sr||c===Er;if(l||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new af(n)),p=l?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(l&&p&&p.height>0||f&&p&&r(p)){t===null&&(t=new af(n));const h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Yg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zg(n,e,t,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let u=0,d=g.length;u<d;u++)e.remove(g[u])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const g=m[v];for(let u=0,d=g.length;u<d;u++)e.update(g[u],n.ARRAY_BUFFER)}}function l(p){const h=[],m=p.index,v=p.attributes.position;let g=0;if(m!==null){const w=m.array;g=m.version;for(let _=0,b=w.length;_<b;_+=3){const S=w[_+0],M=w[_+1],y=w[_+2];h.push(S,M,M,y,y,S)}}else{const w=v.array;g=v.version;for(let _=0,b=w.length/3-1;_<b;_+=3){const S=_+0,M=_+1,y=_+2;h.push(S,M,M,y,y,S)}}const u=new(yu(h)?Du:Lu)(h,1);u.version=g;const d=s.get(p);d&&e.remove(d),s.set(p,u)}function f(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:f}}function $g(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,c;function l(h){o=h.type,c=h.bytesPerElement}function f(h,m){n.drawElements(s,m,o,h*c),t.update(m,s,1)}function p(h,m,v){if(v===0)return;let g,u;if(r)g=n,u="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[u](s,m,o,h*c,v),t.update(m,s,v)}this.setMode=a,this.setIndex=l,this.render=f,this.renderInstances=p}function jg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Kg(n,e){return n[0]-e[0]}function Jg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Qg(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new bt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,f,p){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let g=s.get(f);if(g===void 0||g.count!==v){let I=function(){H.dispose(),s.delete(f),f.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],M=f.morphAttributes.normal||[],y=f.morphAttributes.color||[];let T=0;w===!0&&(T=1),_===!0&&(T=2),b===!0&&(T=3);let x=f.attributes.position.count*T,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*E*4*v),H=new Au(A,x,E,v);H.type=Kt,H.needsUpdate=!0;const U=T*4;for(let P=0;P<v;P++){const X=S[P],F=M[P],O=y[P],Q=x*E*4*P;for(let q=0;q<X.count;q++){const ce=q*U;w===!0&&(a.fromBufferAttribute(X,q),A[Q+ce+0]=a.x,A[Q+ce+1]=a.y,A[Q+ce+2]=a.z,A[Q+ce+3]=0),_===!0&&(a.fromBufferAttribute(F,q),A[Q+ce+4]=a.x,A[Q+ce+5]=a.y,A[Q+ce+6]=a.z,A[Q+ce+7]=0),b===!0&&(a.fromBufferAttribute(O,q),A[Q+ce+8]=a.x,A[Q+ce+9]=a.y,A[Q+ce+10]=a.z,A[Q+ce+11]=O.itemSize===4?a.w:1)}}g={count:v,texture:H,size:new $e(x,E)},s.set(f,g),f.addEventListener("dispose",I)}let u=0;for(let w=0;w<h.length;w++)u+=h[w];const d=f.morphTargetsRelative?1:1-u;p.getUniforms().setValue(n,"morphTargetBaseInfluence",d),p.getUniforms().setValue(n,"morphTargetInfluences",h),p.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const m=h===void 0?0:h.length;let v=i[f.id];if(v===void 0||v.length!==m){v=[];for(let _=0;_<m;_++)v[_]=[_,0];i[f.id]=v}for(let _=0;_<m;_++){const b=v[_];b[0]=_,b[1]=h[_]}v.sort(Jg);for(let _=0;_<8;_++)_<m&&v[_][1]?(o[_][0]=v[_][0],o[_][1]=v[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Kg);const g=f.morphAttributes.position,u=f.morphAttributes.normal;let d=0;for(let _=0;_<8;_++){const b=o[_],S=b[0],M=b[1];S!==Number.MAX_SAFE_INTEGER&&M?(g&&f.getAttribute("morphTarget"+_)!==g[S]&&f.setAttribute("morphTarget"+_,g[S]),u&&f.getAttribute("morphNormal"+_)!==u[S]&&f.setAttribute("morphNormal"+_,u[S]),r[_]=M,d+=M):(g&&f.hasAttribute("morphTarget"+_)===!0&&f.deleteAttribute("morphTarget"+_),u&&f.hasAttribute("morphNormal"+_)===!0&&f.deleteAttribute("morphNormal"+_),r[_]=0)}const w=f.morphTargetsRelative?1:1-d;p.getUniforms().setValue(n,"morphTargetBaseInfluence",w),p.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function ex(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,p=e.get(c,f);return r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER)),p}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const ku=new Pt,Ou=new Au,Bu=new Om,zu=new Iu,ff=[],df=[],uf=new Float32Array(16),hf=new Float32Array(9),pf=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ff[r];if(s===void 0&&(s=new Float32Array(r),ff[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Na(n,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function sx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;pf.set(i),n.uniformMatrix2fv(this.addr,!1,pf),ht(t,i)}}function ax(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;hf.set(i),n.uniformMatrix3fv(this.addr,!1,hf),ht(t,i)}}function ox(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;uf.set(i),n.uniformMatrix4fv(this.addr,!1,uf),ht(t,i)}}function lx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),ht(t,e)}}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),ht(t,e)}}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),ht(t,e)}}function ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),ht(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),ht(t,e)}}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),ht(t,e)}}function _x(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||ku,r)}function gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bu,r)}function xx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zu,r)}function vx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ou,r)}function wx(n){switch(n){case 5126:return tx;case 35664:return nx;case 35665:return ix;case 35666:return rx;case 35674:return sx;case 35675:return ax;case 35676:return ox;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return fx;case 35669:case 35673:return dx;case 5125:return ux;case 36294:return hx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return vx}}function bx(n,e){n.uniform1fv(this.addr,e)}function Sx(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ex(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function yx(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function Mx(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tx(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ax(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rx(n,e){n.uniform1iv(this.addr,e)}function Cx(n,e){n.uniform2iv(this.addr,e)}function Lx(n,e){n.uniform3iv(this.addr,e)}function Dx(n,e){n.uniform4iv(this.addr,e)}function Ux(n,e){n.uniform1uiv(this.addr,e)}function Px(n,e){n.uniform2uiv(this.addr,e)}function Ix(n,e){n.uniform3uiv(this.addr,e)}function Fx(n,e){n.uniform4uiv(this.addr,e)}function Nx(n,e,t){const i=this.cache,r=e.length,s=Na(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ku,s[a])}function kx(n,e,t){const i=this.cache,r=e.length,s=Na(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bu,s[a])}function Ox(n,e,t){const i=this.cache,r=e.length,s=Na(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||zu,s[a])}function Bx(n,e,t){const i=this.cache,r=e.length,s=Na(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ou,s[a])}function zx(n){switch(n){case 5126:return bx;case 35664:return Sx;case 35665:return Ex;case 35666:return yx;case 35674:return Mx;case 35675:return Tx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Lx;case 35669:case 35673:return Dx;case 5125:return Ux;case 36294:return Px;case 36295:return Ix;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Bx}}class Gx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=wx(t.type)}}class Hx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=zx(t.type)}}class Vx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function mf(n,e){n.seq.push(e),n.map[e.id]=e}function Wx(n,e,t){const i=n.name,r=i.length;for(yo.lastIndex=0;;){const s=yo.exec(i),a=yo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){mf(t,l===void 0?new Gx(o,n,e):new Hx(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new Vx(o),mf(t,p)),t=p}}}class va{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Wx(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function _f(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Xx=0;function qx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Yx(n){switch(n){case en:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function gf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+qx(n.getShaderSource(e),a)}else return r}function Zx(n,e){const t=Yx(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $x(n,e){let t;switch(e){case hu:t="Linear";break;case pu:t="Reinhard";break;case im:t="OptimizedCineon";break;case rm:t="ACESFilmic";break;case sm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function Kx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function $r(n){return n!==""}function xf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(n){return n.replace(Qx,e1)}function e1(n,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return dl(t)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(n){return n.replace(t1,n1)}function n1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function r1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function a1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uu:e="ENVMAP_BLENDING_MULTIPLY";break;case tm:e="ENVMAP_BLENDING_MIX";break;case nm:e="ENVMAP_BLENDING_ADD";break}return e}function o1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function l1(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=i1(t),l=r1(t),f=s1(t),p=a1(t),h=o1(t),m=t.isWebGL2?"":jx(t),v=Kx(s),g=r.createProgram();let u,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($r).join(`
`),u.length>0&&(u+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($r).join(`
`),d.length>0&&(d+=`
`)):(u=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),d=[m,bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Zn?$x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,Zx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=dl(a),a=xf(a,t),a=vf(a,t),o=dl(o),o=xf(o,t),o=vf(o,t),a=wf(a),o=wf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,d=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=w+u+a,b=w+d+o,S=_f(r,r.VERTEX_SHADER,_),M=_f(r,r.FRAGMENT_SHADER,b);if(r.attachShader(g,S),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const x=r.getProgramInfoLog(g).trim(),E=r.getShaderInfoLog(S).trim(),A=r.getShaderInfoLog(M).trim();let H=!0,U=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,S,M);else{const I=gf(r,S,"vertex"),P=gf(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+I+`
`+P)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(E===""||A==="")&&(U=!1);U&&(this.diagnostics={runnable:H,programLog:x,vertexShader:{log:E,prefix:u},fragmentShader:{log:A,prefix:d}})}r.deleteShader(S),r.deleteShader(M);let y;this.getUniforms=function(){return y===void 0&&(y=new va(r,g)),y};let T;return this.getAttributes=function(){return T===void 0&&(T=Jx(r,g)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=M,this}let c1=0;class f1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new d1(e),t.set(e,i)),i}}class d1{constructor(e){this.id=c1++,this.code=e,this.usedTimes=0}}function u1(n,e,t,i,r,s,a){const o=new Ru,c=new f1,l=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function u(x,E,A,H,U){const I=H.fog,P=U.geometry,X=x.isMeshStandardMaterial?H.environment:null,F=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),O=F&&F.mapping===Ia?F.image.height:null,Q=v[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ce=q!==void 0?q.length:0;let N=0;P.morphAttributes.position!==void 0&&(N=1),P.morphAttributes.normal!==void 0&&(N=2),P.morphAttributes.color!==void 0&&(N=3);let $,ie,fe,le;if(Q){const ot=Sn[Q];$=ot.vertexShader,ie=ot.fragmentShader}else $=x.vertexShader,ie=x.fragmentShader,c.update(x),fe=c.getVertexShaderID(x),le=c.getFragmentShaderID(x);const xe=n.getRenderTarget(),Te=U.isInstancedMesh===!0,be=!!x.map,Ne=!!x.matcap,Me=!!F,B=!!x.aoMap,Ye=!!x.lightMap,ge=!!x.bumpMap,ve=!!x.normalMap,_e=!!x.displacementMap,He=!!x.emissiveMap,Ae=!!x.metalnessMap,Re=!!x.roughnessMap,We=x.anisotropy>0,je=x.clearcoat>0,ft=x.iridescence>0,L=x.sheen>0,R=x.transmission>0,K=We&&!!x.anisotropyMap,oe=je&&!!x.clearcoatMap,re=je&&!!x.clearcoatNormalMap,ue=je&&!!x.clearcoatRoughnessMap,we=ft&&!!x.iridescenceMap,pe=ft&&!!x.iridescenceThicknessMap,te=L&&!!x.sheenColorMap,Se=L&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,k=!!x.specularColorMap,V=!!x.specularIntensityMap,z=R&&!!x.transmissionMap,j=R&&!!x.thicknessMap,se=!!x.gradientMap,D=!!x.alphaMap,ne=x.alphaTest>0,W=!!x.extensions,ae=!!P.attributes.uv1,he=!!P.attributes.uv2,Oe=!!P.attributes.uv3;return{isWebGL2:f,shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:$,fragmentShader:ie,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Te,instancingColor:Te&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:en,map:be,matcap:Ne,envMap:Me,envMapMode:Me&&F.mapping,envMapCubeUVHeight:O,aoMap:B,lightMap:Ye,bumpMap:ge,normalMap:ve,displacementMap:h&&_e,emissiveMap:He,normalMapObjectSpace:ve&&x.normalMapType===vm,normalMapTangentSpace:ve&&x.normalMapType===xm,metalnessMap:Ae,roughnessMap:Re,anisotropy:We,anisotropyMap:K,clearcoat:je,clearcoatMap:oe,clearcoatNormalMap:re,clearcoatRoughnessMap:ue,iridescence:ft,iridescenceMap:we,iridescenceThicknessMap:pe,sheen:L,sheenColorMap:te,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:k,specularIntensityMap:V,transmission:R,transmissionMap:z,thicknessMap:j,gradientMap:se,opaque:x.transparent===!1&&x.blending===xr,alphaMap:D,alphaTest:ne,combine:x.combine,mapUv:be&&g(x.map.channel),aoMapUv:B&&g(x.aoMap.channel),lightMapUv:Ye&&g(x.lightMap.channel),bumpMapUv:ge&&g(x.bumpMap.channel),normalMapUv:ve&&g(x.normalMap.channel),displacementMapUv:_e&&g(x.displacementMap.channel),emissiveMapUv:He&&g(x.emissiveMap.channel),metalnessMapUv:Ae&&g(x.metalnessMap.channel),roughnessMapUv:Re&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:oe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(x.sheenRoughnessMap.channel),specularMapUv:Ee&&g(x.specularMap.channel),specularColorMapUv:k&&g(x.specularColorMap.channel),specularIntensityMapUv:V&&g(x.specularIntensityMap.channel),transmissionMapUv:z&&g(x.transmissionMap.channel),thicknessMapUv:j&&g(x.thicknessMap.channel),alphaMapUv:D&&g(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ve||We),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:he,vertexUv3s:Oe,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(be||D),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:U.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:N,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:Zn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===En,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:W&&x.extensions.derivatives===!0,extensionFragDepth:W&&x.extensions.fragDepth===!0,extensionDrawBuffers:W&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:W&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)E.push(A),E.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(w(E,x),_(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function w(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function _(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),x.push(o.mask)}function b(x){const E=v[x.type];let A;if(E){const H=Sn[E];A=e0.clone(H.uniforms)}else A=x.uniforms;return A}function S(x,E){let A;for(let H=0,U=l.length;H<U;H++){const I=l[H];if(I.cacheKey===E){A=I,++A.usedTimes;break}}return A===void 0&&(A=new l1(n,E,x,s),l.push(A)),A}function M(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),x.destroy()}}function y(x){c.remove(x)}function T(){c.dispose()}return{getParameters:u,getProgramCacheKey:d,getUniforms:b,acquireProgram:S,releaseProgram:M,releaseShaderCache:y,programs:l,dispose:T}}function h1(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function p1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ef(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(p,h,m,v,g,u){let d=n[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:m,groupOrder:v,renderOrder:p.renderOrder,z:g,group:u},n[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=p.renderOrder,d.z=g,d.group=u),e++,d}function o(p,h,m,v,g,u){const d=a(p,h,m,v,g,u);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(p,h,m,v,g,u){const d=a(p,h,m,v,g,u);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(p,h){t.length>1&&t.sort(p||p1),i.length>1&&i.sort(h||Sf),r.length>1&&r.sort(h||Sf)}function f(){for(let p=e,h=n.length;p<h;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:l}}function m1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ef,n.set(i,[a])):r>=s.length?(a=new Ef,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function _1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new nt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function g1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let x1=0;function v1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function w1(n,e){const t=new _1,i=g1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new Z);const s=new Z,a=new St,o=new St;function c(f,p){let h=0,m=0,v=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let g=0,u=0,d=0,w=0,_=0,b=0,S=0,M=0,y=0,T=0;f.sort(v1);const x=p===!0?Math.PI:1;for(let A=0,H=f.length;A<H;A++){const U=f[A],I=U.color,P=U.intensity,X=U.distance,F=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=I.r*P*x,m+=I.g*P*x,v+=I.b*P*x;else if(U.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(U.sh.coefficients[O],P);else if(U.isDirectionalLight){const O=t.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const Q=U.shadow,q=i.get(U);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.directionalShadow[g]=q,r.directionalShadowMap[g]=F,r.directionalShadowMatrix[g]=U.shadow.matrix,b++}r.directional[g]=O,g++}else if(U.isSpotLight){const O=t.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(I).multiplyScalar(P*x),O.distance=X,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,r.spot[d]=O;const Q=U.shadow;if(U.map&&(r.spotLightMap[y]=U.map,y++,Q.updateMatrices(U),U.castShadow&&T++),r.spotLightMatrix[d]=Q.matrix,U.castShadow){const q=i.get(U);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.spotShadow[d]=q,r.spotShadowMap[d]=F,M++}d++}else if(U.isRectAreaLight){const O=t.get(U);O.color.copy(I).multiplyScalar(P),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),r.rectArea[w]=O,w++}else if(U.isPointLight){const O=t.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*x),O.distance=U.distance,O.decay=U.decay,U.castShadow){const Q=U.shadow,q=i.get(U);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,r.pointShadow[u]=q,r.pointShadowMap[u]=F,r.pointShadowMatrix[u]=U.shadow.matrix,S++}r.point[u]=O,u++}else if(U.isHemisphereLight){const O=t.get(U);O.skyColor.copy(U.color).multiplyScalar(P*x),O.groundColor.copy(U.groundColor).multiplyScalar(P*x),r.hemi[_]=O,_++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const E=r.hash;(E.directionalLength!==g||E.pointLength!==u||E.spotLength!==d||E.rectAreaLength!==w||E.hemiLength!==_||E.numDirectionalShadows!==b||E.numPointShadows!==S||E.numSpotShadows!==M||E.numSpotMaps!==y)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=w,r.point.length=u,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=M+y-T,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=T,E.directionalLength=g,E.pointLength=u,E.spotLength=d,E.rectAreaLength=w,E.hemiLength=_,E.numDirectionalShadows=b,E.numPointShadows=S,E.numSpotShadows=M,E.numSpotMaps=y,r.version=x1++)}function l(f,p){let h=0,m=0,v=0,g=0,u=0;const d=p.matrixWorldInverse;for(let w=0,_=f.length;w<_;w++){const b=f[w];if(b.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(b.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),v++}else if(b.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(d),o.identity(),a.copy(b.matrixWorld),a.premultiply(d),o.extractRotation(a),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){const S=r.hemi[u];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:r}}function yf(n,e){const t=new w1(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(p){i.push(p)}function o(p){r.push(p)}function c(p){t.setup(i,p)}function l(p){t.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function b1(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new yf(n,e),t.set(s,[c])):a>=o.length?(c=new yf(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class S1 extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E1 extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T1(n,e,t){let i=new Fu;const r=new $e,s=new $e,a=new bt,o=new S1({depthPacking:gm}),c=new E1,l={},f=t.maxTextureSize,p={[gi]:Gt,[Gt]:gi,[En]:En},h=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:y1,fragmentShader:M1}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new vi;v.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Yn(v,h),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let d=this.type;this.render=function(S,M,y){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||S.length===0)return;const T=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),A=n.state;A.setBlending(ui),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const H=d!==Hn&&this.type===Hn,U=d===Hn&&this.type!==Hn;for(let I=0,P=S.length;I<P;I++){const X=S[I],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const O=F.getFrameExtents();if(r.multiply(O),s.copy(F.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,F.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,F.mapSize.y=s.y)),F.map===null||H===!0||U===!0){const q=this.type!==Hn?{minFilter:vt,magFilter:vt}:{};F.map!==null&&F.map.dispose(),F.map=new xi(r.x,r.y,q),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const Q=F.getViewportCount();for(let q=0;q<Q;q++){const ce=F.getViewport(q);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),A.viewport(a),F.updateMatrices(X,q),i=F.getFrustum(),b(M,y,F.camera,X,this.type)}F.isPointLightShadow!==!0&&this.type===Hn&&w(F,y),F.needsUpdate=!1}d=this.type,u.needsUpdate=!1,n.setRenderTarget(T,x,E)};function w(S,M){const y=e.update(g);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new xi(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,y,h,g,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,y,m,g,null)}function _(S,M,y,T){let x=null;const E=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)x=E;else if(x=y.isPointLight===!0?c:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const A=x.uuid,H=M.uuid;let U=l[A];U===void 0&&(U={},l[A]=U);let I=U[H];I===void 0&&(I=x.clone(),U[H]=I),x=I}if(x.visible=M.visible,x.wireframe=M.wireframe,T===Hn?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:p[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,y.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const A=n.properties.get(x);A.light=y}return x}function b(S,M,y,T,x){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Hn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);const H=e.update(S),U=S.material;if(Array.isArray(U)){const I=H.groups;for(let P=0,X=I.length;P<X;P++){const F=I[P],O=U[F.materialIndex];if(O&&O.visible){const Q=_(S,O,T,x);n.renderBufferDirect(y,null,H,Q,S,F)}}}else if(U.visible){const I=_(S,U,T,x);n.renderBufferDirect(y,null,H,I,S,null)}}const A=S.children;for(let H=0,U=A.length;H<U;H++)b(A[H],M,y,T,x)}}function A1(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ne=new bt;let W=null;const ae=new bt(0,0,0,0);return{setMask:function(he){W!==he&&!D&&(n.colorMask(he,he,he,he),W=he)},setLocked:function(he){D=he},setClear:function(he,Oe,Ke,ot,wi){wi===!0&&(he*=ot,Oe*=ot,Ke*=ot),ne.set(he,Oe,Ke,ot),ae.equals(ne)===!1&&(n.clearColor(he,Oe,Ke,ot),ae.copy(ne))},reset:function(){D=!1,W=null,ae.set(-1,0,0,0)}}}function s(){let D=!1,ne=null,W=null,ae=null;return{setTest:function(he){he?xe(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(he){ne!==he&&!D&&(n.depthMask(he),ne=he)},setFunc:function(he){if(W!==he){switch(he){case Zp:n.depthFunc(n.NEVER);break;case $p:n.depthFunc(n.ALWAYS);break;case jp:n.depthFunc(n.LESS);break;case il:n.depthFunc(n.LEQUAL);break;case Kp:n.depthFunc(n.EQUAL);break;case Jp:n.depthFunc(n.GEQUAL);break;case Qp:n.depthFunc(n.GREATER);break;case em:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=he}},setLocked:function(he){D=he},setClear:function(he){ae!==he&&(n.clearDepth(he),ae=he)},reset:function(){D=!1,ne=null,W=null,ae=null}}}function a(){let D=!1,ne=null,W=null,ae=null,he=null,Oe=null,Ke=null,ot=null,wi=null;return{setTest:function(st){D||(st?xe(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(st){ne!==st&&!D&&(n.stencilMask(st),ne=st)},setFunc:function(st,xn,Mt){(W!==st||ae!==xn||he!==Mt)&&(n.stencilFunc(st,xn,Mt),W=st,ae=xn,he=Mt)},setOp:function(st,xn,Mt){(Oe!==st||Ke!==xn||ot!==Mt)&&(n.stencilOp(st,xn,Mt),Oe=st,Ke=xn,ot=Mt)},setLocked:function(st){D=st},setClear:function(st){wi!==st&&(n.clearStencil(st),wi=st)},reset:function(){D=!1,ne=null,W=null,ae=null,he=null,Oe=null,Ke=null,ot=null,wi=null}}}const o=new r,c=new s,l=new a,f=new WeakMap,p=new WeakMap;let h={},m={},v=new WeakMap,g=[],u=null,d=!1,w=null,_=null,b=null,S=null,M=null,y=null,T=null,x=!1,E=null,A=null,H=null,U=null,I=null;const P=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,F=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=F>=2);let Q=null,q={};const ce=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),$=new bt().fromArray(ce),ie=new bt().fromArray(N);function fe(D,ne,W,ae){const he=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(D,Oe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<W;Ke++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ne,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ne+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return Oe}const le={};le[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),xe(n.DEPTH_TEST),c.setFunc(il),_e(!1),He(lc),xe(n.CULL_FACE),ge(ui);function xe(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Te(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function be(D,ne){return m[D]!==ne?(n.bindFramebuffer(D,ne),m[D]=ne,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ne),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ne)),!0):!1}function Ne(D,ne){let W=g,ae=!1;if(D)if(W=v.get(ne),W===void 0&&(W=[],v.set(ne,W)),D.isWebGLMultipleRenderTargets){const he=D.texture;if(W.length!==he.length||W[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,Ke=he.length;Oe<Ke;Oe++)W[Oe]=n.COLOR_ATTACHMENT0+Oe;W.length=he.length,ae=!0}}else W[0]!==n.COLOR_ATTACHMENT0&&(W[0]=n.COLOR_ATTACHMENT0,ae=!0);else W[0]!==n.BACK&&(W[0]=n.BACK,ae=!0);ae&&(t.isWebGL2?n.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Me(D){return u!==D?(n.useProgram(D),u=D,!0):!1}const B={[hr]:n.FUNC_ADD,[kp]:n.FUNC_SUBTRACT,[Op]:n.FUNC_REVERSE_SUBTRACT};if(i)B[uc]=n.MIN,B[hc]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(B[uc]=D.MIN_EXT,B[hc]=D.MAX_EXT)}const Ye={[Bp]:n.ZERO,[zp]:n.ONE,[Gp]:n.SRC_COLOR,[fu]:n.SRC_ALPHA,[Yp]:n.SRC_ALPHA_SATURATE,[Xp]:n.DST_COLOR,[Vp]:n.DST_ALPHA,[Hp]:n.ONE_MINUS_SRC_COLOR,[du]:n.ONE_MINUS_SRC_ALPHA,[qp]:n.ONE_MINUS_DST_COLOR,[Wp]:n.ONE_MINUS_DST_ALPHA};function ge(D,ne,W,ae,he,Oe,Ke,ot){if(D===ui){d===!0&&(Te(n.BLEND),d=!1);return}if(d===!1&&(xe(n.BLEND),d=!0),D!==Np){if(D!==w||ot!==x){if((_!==hr||M!==hr)&&(n.blendEquation(n.FUNC_ADD),_=hr,M=hr),ot)switch(D){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cc:n.blendFunc(n.ONE,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,y=null,T=null,w=D,x=ot}return}he=he||ne,Oe=Oe||W,Ke=Ke||ae,(ne!==_||he!==M)&&(n.blendEquationSeparate(B[ne],B[he]),_=ne,M=he),(W!==b||ae!==S||Oe!==y||Ke!==T)&&(n.blendFuncSeparate(Ye[W],Ye[ae],Ye[Oe],Ye[Ke]),b=W,S=ae,y=Oe,T=Ke),w=D,x=!1}function ve(D,ne){D.side===En?Te(n.CULL_FACE):xe(n.CULL_FACE);let W=D.side===Gt;ne&&(W=!W),_e(W),D.blending===xr&&D.transparent===!1?ge(ui):ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const ae=D.stencilWrite;l.setTest(ae),ae&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(D){E!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),E=D)}function He(D){D!==Pp?(xe(n.CULL_FACE),D!==A&&(D===lc?n.cullFace(n.BACK):D===Ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),A=D}function Ae(D){D!==H&&(X&&n.lineWidth(D),H=D)}function Re(D,ne,W){D?(xe(n.POLYGON_OFFSET_FILL),(U!==ne||I!==W)&&(n.polygonOffset(ne,W),U=ne,I=W)):Te(n.POLYGON_OFFSET_FILL)}function We(D){D?xe(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function je(D){D===void 0&&(D=n.TEXTURE0+P-1),Q!==D&&(n.activeTexture(D),Q=D)}function ft(D,ne,W){W===void 0&&(Q===null?W=n.TEXTURE0+P-1:W=Q);let ae=q[W];ae===void 0&&(ae={type:void 0,texture:void 0},q[W]=ae),(ae.type!==D||ae.texture!==ne)&&(Q!==W&&(n.activeTexture(W),Q=W),n.bindTexture(D,ne||le[D]),ae.type=D,ae.texture=ne)}function L(){const D=q[Q];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(D){$.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function V(D){ie.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function z(D,ne){let W=p.get(ne);W===void 0&&(W=new WeakMap,p.set(ne,W));let ae=W.get(D);ae===void 0&&(ae=n.getUniformBlockIndex(ne,D.name),W.set(D,ae))}function j(D,ne){const ae=p.get(ne).get(D);f.get(ne)!==ae&&(n.uniformBlockBinding(ne,ae,D.__bindingPointIndex),f.set(ne,ae))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,q={},m={},v=new WeakMap,g=[],u=null,d=!1,w=null,_=null,b=null,S=null,M=null,y=null,T=null,x=!1,E=null,A=null,H=null,U=null,I=null,$.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:xe,disable:Te,bindFramebuffer:be,drawBuffers:Ne,useProgram:Me,setBlending:ge,setMaterial:ve,setFlipSided:_e,setCullFace:He,setLineWidth:Ae,setPolygonOffset:Re,setScissorTest:We,activeTexture:je,bindTexture:ft,unbindTexture:L,compressedTexImage2D:R,compressedTexImage3D:K,texImage2D:Se,texImage3D:Ee,updateUBOMapping:z,uniformBlockBinding:j,texStorage2D:pe,texStorage3D:te,texSubImage2D:oe,texSubImage3D:re,compressedTexSubImage2D:ue,compressedTexSubImage3D:we,scissor:k,viewport:V,reset:se}}function R1(n,e,t,i,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,f=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,R){return d?new OffscreenCanvas(L,R):is("canvas")}function _(L,R,K,oe){let re=1;if((L.width>oe||L.height>oe)&&(re=oe/Math.max(L.width,L.height)),re<1||R===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ue=R?fl:Math.floor,we=ue(re*L.width),pe=ue(re*L.height);g===void 0&&(g=w(we,pe));const te=K?w(we,pe):g;return te.width=we,te.height=pe,te.getContext("2d").drawImage(L,0,0,we,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+we+"x"+pe+")."),te}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return zc(L.width)&&zc(L.height)}function S(L){return o?!1:L.wrapS!==Lt||L.wrapT!==Lt||L.minFilter!==vt&&L.minFilter!==dt}function M(L,R){return L.generateMipmaps&&R&&L.minFilter!==vt&&L.minFilter!==dt}function y(L){n.generateMipmap(L)}function T(L,R,K,oe,re=!1){if(o===!1)return R;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=R;return R===n.RED&&(K===n.FLOAT&&(ue=n.R32F),K===n.HALF_FLOAT&&(ue=n.R16F),K===n.UNSIGNED_BYTE&&(ue=n.R8)),R===n.RG&&(K===n.FLOAT&&(ue=n.RG32F),K===n.HALF_FLOAT&&(ue=n.RG16F),K===n.UNSIGNED_BYTE&&(ue=n.RG8)),R===n.RGBA&&(K===n.FLOAT&&(ue=n.RGBA32F),K===n.HALF_FLOAT&&(ue=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ue=oe===Ue&&re===!1?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)),(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function x(L,R,K){return M(L,K)===!0||L.isFramebufferTexture&&L.minFilter!==vt&&L.minFilter!==dt?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function E(L){return L===vt||L===pc||L===$a?n.NEAREST:n.LINEAR}function A(L){const R=L.target;R.removeEventListener("dispose",A),U(R),R.isVideoTexture&&v.delete(R)}function H(L){const R=L.target;R.removeEventListener("dispose",H),P(R)}function U(L){const R=i.get(L);if(R.__webglInit===void 0)return;const K=L.source,oe=u.get(K);if(oe){const re=oe[R.__cacheKey];re.usedTimes--,re.usedTimes===0&&I(L),Object.keys(oe).length===0&&u.delete(K)}i.remove(L)}function I(L){const R=i.get(L);n.deleteTexture(R.__webglTexture);const K=L.source,oe=u.get(K);delete oe[R.__cacheKey],a.memory.textures--}function P(L){const R=L.texture,K=i.get(L),oe=i.get(R);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(K.__webglFramebuffer[re]),K.__webglDepthbuffer&&n.deleteRenderbuffer(K.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&n.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&n.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let re=0;re<K.__webglColorRenderbuffer.length;re++)K.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(K.__webglColorRenderbuffer[re]);K.__webglDepthRenderbuffer&&n.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let re=0,ue=R.length;re<ue;re++){const we=i.get(R[re]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(R[re])}i.remove(R),i.remove(L)}let X=0;function F(){X=0}function O(){const L=X;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),X+=1,L}function Q(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function q(L,R){const K=i.get(L);if(L.isVideoTexture&&je(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const oe=L.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(K,L,R);return}}t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+R)}function ce(L,R){const K=i.get(L);if(L.version>0&&K.__version!==L.version){be(K,L,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+R)}function N(L,R){const K=i.get(L);if(L.version>0&&K.__version!==L.version){be(K,L,R);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+R)}function $(L,R){const K=i.get(L);if(L.version>0&&K.__version!==L.version){Ne(K,L,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+R)}const ie={[al]:n.REPEAT,[Lt]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},fe={[vt]:n.NEAREST,[pc]:n.NEAREST_MIPMAP_NEAREST,[$a]:n.NEAREST_MIPMAP_LINEAR,[dt]:n.LINEAR,[am]:n.LINEAR_MIPMAP_NEAREST,[yr]:n.LINEAR_MIPMAP_LINEAR},le={[bm]:n.NEVER,[Rm]:n.ALWAYS,[Sm]:n.LESS,[ym]:n.LEQUAL,[Em]:n.EQUAL,[Am]:n.GEQUAL,[Mm]:n.GREATER,[Tm]:n.NOTEQUAL};function xe(L,R,K){if(K?(n.texParameteri(L,n.TEXTURE_WRAP_S,ie[R.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ie[R.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ie[R.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,fe[R.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,fe[R.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(R.wrapS!==Lt||R.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,E(R.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,E(R.minFilter)),R.minFilter!==vt&&R.minFilter!==dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,le[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===vt||R.minFilter!==$a&&R.minFilter!==yr||R.type===Kt&&e.has("OES_texture_float_linear")===!1||o===!1&&R.type===Mn&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||i.get(R).__currentAnisotropy)&&(n.texParameterf(L,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy)}}function Te(L,R){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",A));const oe=R.source;let re=u.get(oe);re===void 0&&(re={},u.set(oe,re));const ue=Q(R);if(ue!==L.__cacheKey){re[ue]===void 0&&(re[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,K=!0),re[ue].usedTimes++;const we=re[L.__cacheKey];we!==void 0&&(re[L.__cacheKey].usedTimes--,we.usedTimes===0&&I(R)),L.__cacheKey=ue,L.__webglTexture=re[ue].texture}return K}function be(L,R,K){let oe=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=n.TEXTURE_3D);const re=Te(L,R),ue=R.source;t.bindTexture(oe,L.__webglTexture,n.TEXTURE0+K);const we=i.get(ue);if(ue.version!==we.__version||re===!0){t.activeTexture(n.TEXTURE0+K),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const pe=S(R)&&b(R.image)===!1;let te=_(R.image,pe,!1,f);te=ft(R,te);const Se=b(te)||o,Ee=s.convert(R.format,R.colorSpace);let k=s.convert(R.type),V=T(R.internalFormat,Ee,k,R.colorSpace);xe(oe,R,Se);let z;const j=R.mipmaps,se=o&&R.isVideoTexture!==!0,D=we.__version===void 0||re===!0,ne=x(R,te,Se);if(R.isDepthTexture)V=n.DEPTH_COMPONENT,o?R.type===Kt?V=n.DEPTH_COMPONENT32F:R.type===ci?V=n.DEPTH_COMPONENT24:R.type===ki?V=n.DEPTH24_STENCIL8:V=n.DEPTH_COMPONENT16:R.type===Kt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Oi&&V===n.DEPTH_COMPONENT&&R.type!==Fl&&R.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=ci,k=s.convert(R.type)),R.format===Mr&&V===n.DEPTH_COMPONENT&&(V=n.DEPTH_STENCIL,R.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=ki,k=s.convert(R.type))),D&&(se?t.texStorage2D(n.TEXTURE_2D,1,V,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,V,te.width,te.height,0,Ee,k,null));else if(R.isDataTexture)if(j.length>0&&Se){se&&D&&t.texStorage2D(n.TEXTURE_2D,ne,V,j[0].width,j[0].height);for(let W=0,ae=j.length;W<ae;W++)z=j[W],se?t.texSubImage2D(n.TEXTURE_2D,W,0,0,z.width,z.height,Ee,k,z.data):t.texImage2D(n.TEXTURE_2D,W,V,z.width,z.height,0,Ee,k,z.data);R.generateMipmaps=!1}else se?(D&&t.texStorage2D(n.TEXTURE_2D,ne,V,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Ee,k,te.data)):t.texImage2D(n.TEXTURE_2D,0,V,te.width,te.height,0,Ee,k,te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){se&&D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,V,j[0].width,j[0].height,te.depth);for(let W=0,ae=j.length;W<ae;W++)z=j[W],R.format!==gn?Ee!==null?se?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,z.width,z.height,te.depth,Ee,z.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,V,z.width,z.height,te.depth,0,z.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,z.width,z.height,te.depth,Ee,k,z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,V,z.width,z.height,te.depth,0,Ee,k,z.data)}else{se&&D&&t.texStorage2D(n.TEXTURE_2D,ne,V,j[0].width,j[0].height);for(let W=0,ae=j.length;W<ae;W++)z=j[W],R.format!==gn?Ee!==null?se?t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,z.width,z.height,Ee,z.data):t.compressedTexImage2D(n.TEXTURE_2D,W,V,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(n.TEXTURE_2D,W,0,0,z.width,z.height,Ee,k,z.data):t.texImage2D(n.TEXTURE_2D,W,V,z.width,z.height,0,Ee,k,z.data)}else if(R.isDataArrayTexture)se?(D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,V,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ee,k,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,V,te.width,te.height,te.depth,0,Ee,k,te.data);else if(R.isData3DTexture)se?(D&&t.texStorage3D(n.TEXTURE_3D,ne,V,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ee,k,te.data)):t.texImage3D(n.TEXTURE_3D,0,V,te.width,te.height,te.depth,0,Ee,k,te.data);else if(R.isFramebufferTexture){if(D)if(se)t.texStorage2D(n.TEXTURE_2D,ne,V,te.width,te.height);else{let W=te.width,ae=te.height;for(let he=0;he<ne;he++)t.texImage2D(n.TEXTURE_2D,he,V,W,ae,0,Ee,k,null),W>>=1,ae>>=1}}else if(j.length>0&&Se){se&&D&&t.texStorage2D(n.TEXTURE_2D,ne,V,j[0].width,j[0].height);for(let W=0,ae=j.length;W<ae;W++)z=j[W],se?t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ee,k,z):t.texImage2D(n.TEXTURE_2D,W,V,Ee,k,z);R.generateMipmaps=!1}else se?(D&&t.texStorage2D(n.TEXTURE_2D,ne,V,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,k,te)):t.texImage2D(n.TEXTURE_2D,0,V,Ee,k,te);M(R,Se)&&y(oe),we.__version=ue.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Ne(L,R,K){if(R.image.length!==6)return;const oe=Te(L,R),re=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+K);const ue=i.get(re);if(re.version!==ue.__version||oe===!0){t.activeTexture(n.TEXTURE0+K),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const we=R.isCompressedTexture||R.image[0].isCompressedTexture,pe=R.image[0]&&R.image[0].isDataTexture,te=[];for(let W=0;W<6;W++)!we&&!pe?te[W]=_(R.image[W],!1,!0,l):te[W]=pe?R.image[W].image:R.image[W],te[W]=ft(R,te[W]);const Se=te[0],Ee=b(Se)||o,k=s.convert(R.format,R.colorSpace),V=s.convert(R.type),z=T(R.internalFormat,k,V,R.colorSpace),j=o&&R.isVideoTexture!==!0,se=ue.__version===void 0||oe===!0;let D=x(R,Se,Ee);xe(n.TEXTURE_CUBE_MAP,R,Ee);let ne;if(we){j&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,z,Se.width,Se.height);for(let W=0;W<6;W++){ne=te[W].mipmaps;for(let ae=0;ae<ne.length;ae++){const he=ne[ae];R.format!==gn?k!==null?j?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,0,0,he.width,he.height,k,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,z,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,0,0,he.width,he.height,k,V,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,z,he.width,he.height,0,k,V,he.data)}}}else{ne=R.mipmaps,j&&se&&(ne.length>0&&D++,t.texStorage2D(n.TEXTURE_CUBE_MAP,D,z,te[0].width,te[0].height));for(let W=0;W<6;W++)if(pe){j?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,te[W].width,te[W].height,k,V,te[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,z,te[W].width,te[W].height,0,k,V,te[W].data);for(let ae=0;ae<ne.length;ae++){const Oe=ne[ae].image[W].image;j?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,0,0,Oe.width,Oe.height,k,V,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,z,Oe.width,Oe.height,0,k,V,Oe.data)}}else{j?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,k,V,te[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,z,k,V,te[W]);for(let ae=0;ae<ne.length;ae++){const he=ne[ae];j?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,0,0,k,V,he.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,z,k,V,he.image[W])}}}M(R,Ee)&&y(n.TEXTURE_CUBE_MAP),ue.__version=re.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Me(L,R,K,oe,re){const ue=s.convert(K.format,K.colorSpace),we=s.convert(K.type),pe=T(K.internalFormat,ue,we,K.colorSpace);i.get(R).__hasExternalTextures||(re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,0,pe,R.width,R.height,R.depth,0,ue,we,null):t.texImage2D(re,0,pe,R.width,R.height,0,ue,we,null)),t.bindFramebuffer(n.FRAMEBUFFER,L),We(R)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,re,i.get(K).__webglTexture,0,Re(R)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,re,i.get(K).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(L,R,K){if(n.bindRenderbuffer(n.RENDERBUFFER,L),R.depthBuffer&&!R.stencilBuffer){let oe=n.DEPTH_COMPONENT16;if(K||We(R)){const re=R.depthTexture;re&&re.isDepthTexture&&(re.type===Kt?oe=n.DEPTH_COMPONENT32F:re.type===ci&&(oe=n.DEPTH_COMPONENT24));const ue=Re(R);We(R)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,oe,R.width,R.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,oe,R.width,R.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,R.width,R.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(R.depthBuffer&&R.stencilBuffer){const oe=Re(R);K&&We(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,R.width,R.height):We(R)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{const oe=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0;re<oe.length;re++){const ue=oe[re],we=s.convert(ue.format,ue.colorSpace),pe=s.convert(ue.type),te=T(ue.internalFormat,we,pe,ue.colorSpace),Se=Re(R);K&&We(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,te,R.width,R.height):We(R)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,te,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,te,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),q(R.depthTexture,0);const oe=i.get(R.depthTexture).__webglTexture,re=Re(R);if(R.depthTexture.format===Oi)We(R)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(R.depthTexture.format===Mr)We(R)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ge(L){const R=i.get(L),K=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ye(R.__webglFramebuffer,L)}else if(K){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]=n.createRenderbuffer(),B(R.__webglDepthbuffer[oe],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=n.createRenderbuffer(),B(R.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(L,R,K){const oe=i.get(L);R!==void 0&&Me(oe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),K!==void 0&&ge(L)}function _e(L){const R=L.texture,K=i.get(L),oe=i.get(R);L.addEventListener("dispose",H),L.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=R.version,a.memory.textures++);const re=L.isWebGLCubeRenderTarget===!0,ue=L.isWebGLMultipleRenderTargets===!0,we=b(L)||o;if(re){K.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)K.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(K.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const pe=L.texture;for(let te=0,Se=pe.length;te<Se;te++){const Ee=i.get(pe[te]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&We(L)===!1){const pe=ue?R:[R];K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let te=0;te<pe.length;te++){const Se=pe[te];K.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[te]);const Ee=s.convert(Se.format,Se.colorSpace),k=s.convert(Se.type),V=T(Se.internalFormat,Ee,k,Se.colorSpace,L.isXRRenderTarget===!0),z=Re(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,z,V,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,K.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),B(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),xe(n.TEXTURE_CUBE_MAP,R,we);for(let pe=0;pe<6;pe++)Me(K.__webglFramebuffer[pe],L,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe);M(R,we)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const pe=L.texture;for(let te=0,Se=pe.length;te<Se;te++){const Ee=pe[te],k=i.get(Ee);t.bindTexture(n.TEXTURE_2D,k.__webglTexture),xe(n.TEXTURE_2D,Ee,we),Me(K.__webglFramebuffer,L,Ee,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D),M(Ee,we)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?pe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,oe.__webglTexture),xe(pe,R,we),Me(K.__webglFramebuffer,L,R,n.COLOR_ATTACHMENT0,pe),M(R,we)&&y(pe),t.unbindTexture()}L.depthBuffer&&ge(L)}function He(L){const R=b(L)||o,K=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let oe=0,re=K.length;oe<re;oe++){const ue=K[oe];if(M(ue,R)){const we=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(ue).__webglTexture;t.bindTexture(we,pe),y(we),t.unbindTexture()}}}function Ae(L){if(o&&L.samples>0&&We(L)===!1){const R=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],K=L.width,oe=L.height;let re=n.COLOR_BUFFER_BIT;const ue=[],we=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(L),te=L.isWebGLMultipleRenderTargets===!0;if(te)for(let Se=0;Se<R.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Se=0;Se<R.length;Se++){ue.push(n.COLOR_ATTACHMENT0+Se),L.depthBuffer&&ue.push(we);const Ee=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Ee===!1&&(L.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),te&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Se]),Ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[we]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[we])),te){const k=i.get(R[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,k,0)}n.blitFramebuffer(0,0,K,oe,0,0,K,oe,re,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let Se=0;Se<R.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Se]);const Ee=i.get(R[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Re(L){return Math.min(p,L.samples)}function We(L){const R=i.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function je(L){const R=a.render.frame;v.get(L)!==R&&(v.set(L,R),L.update())}function ft(L,R){const K=L.colorSpace,oe=L.format,re=L.type;return L.isCompressedTexture===!0||L.format===ll||K!==en&&K!==zi&&(K===Ue?o===!1?e.has("EXT_sRGB")===!0&&oe===gn?(L.format=ll,L.minFilter=dt,L.generateMipmaps=!1):R=Mu.sRGBToLinear(R):(oe!==gn||re!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),R}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=ce,this.setTexture3D=N,this.setTextureCube=$,this.rebindTextures=ve,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=We}function C1(n,e,t){const i=t.isWebGL2;function r(s,a=zi){let o;if(s===hi)return n.UNSIGNED_BYTE;if(s===gu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===xu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===om)return n.BYTE;if(s===lm)return n.SHORT;if(s===Fl)return n.UNSIGNED_SHORT;if(s===_u)return n.INT;if(s===ci)return n.UNSIGNED_INT;if(s===Kt)return n.FLOAT;if(s===Mn)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===cm)return n.ALPHA;if(s===gn)return n.RGBA;if(s===fm)return n.LUMINANCE;if(s===dm)return n.LUMINANCE_ALPHA;if(s===Oi)return n.DEPTH_COMPONENT;if(s===Mr)return n.DEPTH_STENCIL;if(s===ll)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===um)return n.RED;if(s===vu)return n.RED_INTEGER;if(s===hm)return n.RG;if(s===wu)return n.RG_INTEGER;if(s===bu)return n.RGBA_INTEGER;if(s===ja||s===Ka||s===Ja||s===Qa)if(a===Ue)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ja)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ja)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mc||s===_c||s===gc||s===xc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_c)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vc||s===wc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===vc)return a===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===wc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bc||s===Sc||s===Ec||s===yc||s===Mc||s===Tc||s===Ac||s===Rc||s===Cc||s===Lc||s===Dc||s===Uc||s===Pc||s===Ic)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===bc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ec)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ac)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pc)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ic)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===eo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===eo)return a===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===mm||s===Fc||s===Nc||s===kc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===eo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ki?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class L1 extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ta extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D1={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const u=t.getJointPose(g,i),d=this._getHandJoint(l,g);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}const f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,v=.005;l.inputState.pinching&&h>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class U1 extends Pt{constructor(e,t,i,r,s,a,o,c,l,f){if(f=f!==void 0?f:Oi,f!==Oi&&f!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Oi&&(i=ci),i===void 0&&f===Mr&&(i=ki),super(null,r,s,a,o,c,f,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class P1 extends Ur{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,p=null,h=null,m=null,v=null;const g=t.getContextAttributes();let u=null,d=null;const w=[],_=[];let b=null;const S=new jt;S.layers.enable(1),S.viewport=new bt;const M=new jt;M.layers.enable(2),M.viewport=new bt;const y=[S,M],T=new L1;T.layers.enable(1),T.layers.enable(2);let x=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(N){b=N},this.getController=function(N){let $=w[N];return $===void 0&&($=new Mo,w[N]=$),$.getTargetRaySpace()},this.getControllerGrip=function(N){let $=w[N];return $===void 0&&($=new Mo,w[N]=$),$.getGripSpace()},this.getHand=function(N){let $=w[N];return $===void 0&&($=new Mo,w[N]=$),$.getHandSpace()};function A(N){const $=_.indexOf(N.inputSource);if($===-1)return;const ie=w[$];ie!==void 0&&(ie.update(N.inputSource,N.frame,l||a),ie.dispatchEvent({type:N.type,data:N.inputSource}))}function H(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",U);for(let N=0;N<w.length;N++){const $=_[N];$!==null&&(_[N]=null,w[N].disconnect($))}x=null,E=null,e.setRenderTarget(u),m=null,h=null,p=null,r=null,d=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",H),r.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:m}),d=new xi(m.framebufferWidth,m.framebufferHeight,{format:gn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,ie=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?Mr:Oi,ie=g.stencil?ki:ci);const le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};p=new XRWebGLBinding(r,t),h=p.createProjectionLayer(le),r.updateRenderState({layers:[h]}),d=new xi(h.textureWidth,h.textureHeight,{format:gn,type:hi,depthTexture:new U1(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const xe=e.properties.get(d);xe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(N){for(let $=0;$<N.removed.length;$++){const ie=N.removed[$],fe=_.indexOf(ie);fe>=0&&(_[fe]=null,w[fe].disconnect(ie))}for(let $=0;$<N.added.length;$++){const ie=N.added[$];let fe=_.indexOf(ie);if(fe===-1){for(let xe=0;xe<w.length;xe++)if(xe>=_.length){_.push(ie),fe=xe;break}else if(_[xe]===null){_[xe]=ie,fe=xe;break}if(fe===-1)break}const le=w[fe];le&&le.connect(ie)}}const I=new Z,P=new Z;function X(N,$,ie){I.setFromMatrixPosition($.matrixWorld),P.setFromMatrixPosition(ie.matrixWorld);const fe=I.distanceTo(P),le=$.projectionMatrix.elements,xe=ie.projectionMatrix.elements,Te=le[14]/(le[10]-1),be=le[14]/(le[10]+1),Ne=(le[9]+1)/le[5],Me=(le[9]-1)/le[5],B=(le[8]-1)/le[0],Ye=(xe[8]+1)/xe[0],ge=Te*B,ve=Te*Ye,_e=fe/(-B+Ye),He=_e*-B;$.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(He),N.translateZ(_e),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ae=Te+_e,Re=be+_e,We=ge-He,je=ve+(fe-He),ft=Ne*be/Re*Ae,L=Me*be/Re*Ae;N.projectionMatrix.makePerspective(We,je,ft,L,Ae,Re),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function F(N,$){$===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices($.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCameraXR=function(N){if(r===null)return N;b&&(N=b),T.near=M.near=S.near=N.near,T.far=M.far=S.far=N.far,(x!==T.near||E!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),x=T.near,E=T.far);const $=N.parent,ie=T.cameras;F(T,$);for(let fe=0;fe<ie.length;fe++)F(ie[fe],$);return ie.length===2?X(T,S,M):T.projectionMatrix.copy(S.projectionMatrix),b&&O(T,$),T};function O(N,$){const ie=b;$===null?ie.matrix.copy(N.matrixWorld):(ie.matrix.copy($.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(N.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0);const fe=ie.children;for(let le=0,xe=fe.length;le<xe;le++)fe[le].updateMatrixWorld(!0);ie.projectionMatrix.copy(N.projectionMatrix),ie.projectionMatrixInverse.copy(N.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=cl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(N){c=N,h!==null&&(h.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let Q=null;function q(N,$){if(f=$.getViewerPose(l||a),v=$,f!==null){const ie=f.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let fe=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,fe=!0);for(let le=0;le<ie.length;le++){const xe=ie[le];let Te=null;if(m!==null)Te=m.getViewport(xe);else{const Ne=p.getViewSubImage(h,xe);Te=Ne.viewport,le===0&&(e.setRenderTargetTextures(d,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(d))}let be=y[le];be===void 0&&(be=new jt,be.layers.enable(le),be.viewport=new bt,y[le]=be),be.matrix.fromArray(xe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(xe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Te.x,Te.y,Te.width,Te.height),le===0&&(T.matrix.copy(be.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),fe===!0&&T.cameras.push(be)}}for(let ie=0;ie<w.length;ie++){const fe=_[ie],le=w[ie];fe!==null&&le!==void 0&&le.update(fe,$,l||a)}Q&&Q(N,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),v=null}const ce=new Nu;ce.setAnimationLoop(q),this.setAnimationLoop=function(N){Q=N},this.dispose=function(){}}}function I1(n,e){function t(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function i(u,d){d.color.getRGB(u.fogColor.value,Uu(n)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function r(u,d,w,_,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(u,d):d.isMeshToonMaterial?(s(u,d),p(u,d)):d.isMeshPhongMaterial?(s(u,d),f(u,d)):d.isMeshStandardMaterial?(s(u,d),h(u,d),d.isMeshPhysicalMaterial&&m(u,d,b)):d.isMeshMatcapMaterial?(s(u,d),v(u,d)):d.isMeshDepthMaterial?s(u,d):d.isMeshDistanceMaterial?(s(u,d),g(u,d)):d.isMeshNormalMaterial?s(u,d):d.isLineBasicMaterial?(a(u,d),d.isLineDashedMaterial&&o(u,d)):d.isPointsMaterial?c(u,d,w,_):d.isSpriteMaterial?l(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,t(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===Gt&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,t(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===Gt&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,t(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,t(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);const w=e.get(d).envMap;if(w&&(u.envMap.value=w,u.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap){u.lightMap.value=d.lightMap;const _=n.useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,u.lightMapTransform)}d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,u.aoMapTransform))}function a(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform))}function o(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function c(u,d,w,_){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*w,u.scale.value=_*.5,d.map&&(u.map.value=d.map,t(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function l(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function f(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function p(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function h(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,u.roughnessMapTransform)),e.get(d).envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function m(u,d,w){u.ior.value=d.ior,d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&u.clearcoatNormalScale.value.negate())),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=w.texture,u.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,d){d.matcap&&(u.matcap.value=d.matcap)}function g(u,d){const w=e.get(d).light;u.referencePosition.value.setFromMatrixPosition(w.matrixWorld),u.nearDistance.value=w.shadow.camera.near,u.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function F1(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,_){const b=_.program;i.uniformBlockBinding(w,b)}function l(w,_){let b=r[w.id];b===void 0&&(v(w),b=f(w),r[w.id]=b,w.addEventListener("dispose",u));const S=_.program;i.updateUBOMapping(w,S);const M=e.render.frame;s[w.id]!==M&&(h(w),s[w.id]=M)}function f(w){const _=p();w.__bindingPointIndex=_;const b=n.createBuffer(),S=w.__size,M=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,S,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,b),b}function p(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const _=r[w.id],b=w.uniforms,S=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let M=0,y=b.length;M<y;M++){const T=b[M];if(m(T,M,S)===!0){const x=T.__offset,E=Array.isArray(T.value)?T.value:[T.value];let A=0;for(let H=0;H<E.length;H++){const U=E[H],I=g(U);typeof U=="number"?(T.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,x+A,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=U.elements[0],T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=U.elements[0],T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=U.elements[0]):(U.toArray(T.__data,A),A+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,x,T.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,_,b){const S=w.value;if(b[_]===void 0){if(typeof S=="number")b[_]=S;else{const M=Array.isArray(S)?S:[S],y=[];for(let T=0;T<M.length;T++)y.push(M[T].clone());b[_]=y}return!0}else if(typeof S=="number"){if(b[_]!==S)return b[_]=S,!0}else{const M=Array.isArray(b[_])?b[_]:[b[_]],y=Array.isArray(S)?S:[S];for(let T=0;T<M.length;T++){const x=M[T];if(x.equals(y[T])===!1)return x.copy(y[T]),!0}}return!1}function v(w){const _=w.uniforms;let b=0;const S=16;let M=0;for(let y=0,T=_.length;y<T;y++){const x=_[y],E={boundary:0,storage:0},A=Array.isArray(x.value)?x.value:[x.value];for(let H=0,U=A.length;H<U;H++){const I=A[H],P=g(I);E.boundary+=P.boundary,E.storage+=P.storage}if(x.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=b,y>0){M=b%S;const H=S-M;M!==0&&H-E.boundary<0&&(b+=S-M,x.__offset=b)}b+=E.storage}return M=b%S,M>0&&(b+=S-M),w.__size=b,w.__cache={},this}function g(w){const _={boundary:0,storage:0};return typeof w=="number"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function u(w){const _=w.target;_.removeEventListener("dispose",u);const b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}function N1(){const n=is("canvas");return n.style.display="block",n}class zl{constructor(e={}){const{canvas:t=N1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,u=null;const d=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this.useLegacyLights=!0,this.toneMapping=Zn,this.toneMappingExposure=1;const _=this;let b=!1,S=0,M=0,y=null,T=-1,x=null;const E=new bt,A=new bt;let H=null;const U=new nt(0);let I=0,P=t.width,X=t.height,F=1,O=null,Q=null;const q=new bt(0,0,P,X),ce=new bt(0,0,P,X);let N=!1;const $=new Fu;let ie=!1,fe=!1,le=null;const xe=new St,Te=new $e,be=new Z,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return y===null?F:1}let B=i;function Ye(C,Y){for(let J=0;J<C.length;J++){const G=C[J],ee=t.getContext(G,Y);if(ee!==null)return ee}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Il}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",ae,!1),B===null){const Y=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Y.shift(),B=Ye(Y,C),B===null)throw Ye(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ge,ve,_e,He,Ae,Re,We,je,ft,L,R,K,oe,re,ue,we,pe,te,Se,Ee,k,V,z,j;function se(){ge=new Yg(B),ve=new zg(B,ge,e),ge.init(ve),V=new C1(B,ge,ve),_e=new A1(B,ge,ve),He=new jg(B),Ae=new h1,Re=new R1(B,ge,_e,Ae,ve,V,He),We=new Hg(_),je=new qg(_),ft=new o0(B,ve),z=new Og(B,ge,ft,ve),L=new Zg(B,ft,He,z),R=new ex(B,L,ft,He),Se=new Qg(B,ve,Re),we=new Gg(Ae),K=new u1(_,We,je,ge,ve,z,we),oe=new I1(_,Ae),re=new m1,ue=new b1(ge,ve),te=new kg(_,We,je,_e,R,h,c),pe=new T1(_,R,ve),j=new F1(B,He,ve,_e),Ee=new Bg(B,ge,He,ve),k=new $g(B,ge,He,ve),He.programs=K.programs,_.capabilities=ve,_.extensions=ge,_.properties=Ae,_.renderLists=re,_.shadowMap=pe,_.state=_e,_.info=He}se();const D=new P1(_,B);this.xr=D,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=ge.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ge.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(P,X,!1))},this.getSize=function(C){return C.set(P,X)},this.setSize=function(C,Y,J=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,X=Y,t.width=Math.floor(C*F),t.height=Math.floor(Y*F),J===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(P*F,X*F).floor()},this.setDrawingBufferSize=function(C,Y,J){P=C,X=Y,F=J,t.width=Math.floor(C*J),t.height=Math.floor(Y*J),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,Y,J,G){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,Y,J,G),_e.viewport(E.copy(q).multiplyScalar(F).floor())},this.getScissor=function(C){return C.copy(ce)},this.setScissor=function(C,Y,J,G){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,Y,J,G),_e.scissor(A.copy(ce).multiplyScalar(F).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(C){_e.setScissorTest(N=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(C=!0,Y=!0,J=!0){let G=0;if(C){let ee=!1;if(y!==null){const me=y.texture.format;ee=me===bu||me===wu||me===vu}if(ee){const me=y.texture.type,ye=me===hi||me===ci||me===Fl||me===ki||me===gu||me===xu,Ce=te.getClearColor(),Le=te.getClearAlpha(),ke=Ce.r,De=Ce.g,Pe=Ce.b,Je=Ae.get(y).__webglFramebuffer;ye?(m[0]=ke,m[1]=De,m[2]=Pe,m[3]=Le,B.clearBufferuiv(B.COLOR,Je,m)):(v[0]=ke,v[1]=De,v[2]=Pe,v[3]=Le,B.clearBufferiv(B.COLOR,Je,v))}else G|=B.COLOR_BUFFER_BIT}Y&&(G|=B.DEPTH_BUFFER_BIT),J&&(G|=B.STENCIL_BUFFER_BIT),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),re.dispose(),ue.dispose(),Ae.dispose(),We.dispose(),je.dispose(),R.dispose(),z.dispose(),j.dispose(),K.dispose(),D.dispose(),D.removeEventListener("sessionstart",st),D.removeEventListener("sessionend",xn),le&&(le.dispose(),le=null),Mt.stop()};function ne(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=He.autoReset,Y=pe.enabled,J=pe.autoUpdate,G=pe.needsUpdate,ee=pe.type;se(),He.autoReset=C,pe.enabled=Y,pe.autoUpdate=J,pe.needsUpdate=G,pe.type=ee}function ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function he(C){const Y=C.target;Y.removeEventListener("dispose",he),Oe(Y)}function Oe(C){Ke(C),Ae.remove(C)}function Ke(C){const Y=Ae.get(C).programs;Y!==void 0&&(Y.forEach(function(J){K.releaseProgram(J)}),C.isShaderMaterial&&K.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,J,G,ee,me){Y===null&&(Y=Ne);const ye=ee.isMesh&&ee.matrixWorld.determinant()<0,Ce=yp(C,Y,J,G,ee);_e.setMaterial(G,ye);let Le=J.index,ke=1;G.wireframe===!0&&(Le=L.getWireframeAttribute(J),ke=2);const De=J.drawRange,Pe=J.attributes.position;let Je=De.start*ke,at=(De.start+De.count)*ke;me!==null&&(Je=Math.max(Je,me.start*ke),at=Math.min(at,(me.start+me.count)*ke)),Le!==null?(Je=Math.max(Je,0),at=Math.min(at,Le.count)):Pe!=null&&(Je=Math.max(Je,0),at=Math.min(at,Pe.count));const on=at-Je;if(on<0||on===1/0)return;z.setup(ee,G,Ce,J,Le);let Pn,lt=Ee;if(Le!==null&&(Pn=ft.get(Le),lt=k,lt.setIndex(Pn)),ee.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Me()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(ee.isLine){let Ge=G.linewidth;Ge===void 0&&(Ge=1),_e.setLineWidth(Ge*Me()),ee.isLineSegments?lt.setMode(B.LINES):ee.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else ee.isPoints?lt.setMode(B.POINTS):ee.isSprite&&lt.setMode(B.TRIANGLES);if(ee.isInstancedMesh)lt.renderInstances(Je,on,ee.count);else if(J.isInstancedBufferGeometry){const Ge=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xa=Math.min(J.instanceCount,Ge);lt.renderInstances(Je,on,Xa)}else lt.render(Je,on)},this.compile=function(C,Y){function J(G,ee,me){G.transparent===!0&&G.side===En&&G.forceSinglePass===!1?(G.side=Gt,G.needsUpdate=!0,Ds(G,ee,me),G.side=gi,G.needsUpdate=!0,Ds(G,ee,me),G.side=En):Ds(G,ee,me)}u=ue.get(C),u.init(),w.push(u),C.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights(_.useLegacyLights),C.traverse(function(G){const ee=G.material;if(ee)if(Array.isArray(ee))for(let me=0;me<ee.length;me++){const ye=ee[me];J(ye,C,G)}else J(ee,C,G)}),w.pop(),u=null};let ot=null;function wi(C){ot&&ot(C)}function st(){Mt.stop()}function xn(){Mt.start()}const Mt=new Nu;Mt.setAnimationLoop(wi),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(C){ot=C,D.setAnimationLoop(C),C===null?Mt.stop():Mt.start()},D.addEventListener("sessionstart",st),D.addEventListener("sessionend",xn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(Y=D.updateCameraXR(Y)),C.isScene===!0&&C.onBeforeRender(_,C,Y,y),u=ue.get(C,w.length),u.init(),w.push(u),xe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),$.setFromProjectionMatrix(xe),fe=this.localClippingEnabled,ie=we.init(this.clippingPlanes,fe),g=re.get(C,d.length),g.init(),d.push(g),nc(C,Y,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(O,Q),ie===!0&&we.beginShadows();const J=u.state.shadowsArray;if(pe.render(J,C,Y),ie===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,te.render(g,C),u.setupLights(_.useLegacyLights),Y.isArrayCamera){const G=Y.cameras;for(let ee=0,me=G.length;ee<me;ee++){const ye=G[ee];ic(g,C,ye,ye.viewport)}}else ic(g,C,Y);y!==null&&(Re.updateMultisampleRenderTarget(y),Re.updateRenderTargetMipmap(y)),C.isScene===!0&&C.onAfterRender(_,C,Y),z.resetDefaultState(),T=-1,x=null,w.pop(),w.length>0?u=w[w.length-1]:u=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function nc(C,Y,J,G){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){G&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xe);const ye=R.update(C),Ce=C.material;Ce.visible&&g.push(C,ye,Ce,J,be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==He.render.frame&&(C.skeleton.update(),C.skeleton.frame=He.render.frame);const ye=R.update(C),Ce=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),be.copy(ye.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(xe)),Array.isArray(Ce)){const Le=ye.groups;for(let ke=0,De=Le.length;ke<De;ke++){const Pe=Le[ke],Je=Ce[Pe.materialIndex];Je&&Je.visible&&g.push(C,ye,Je,J,be.z,Pe)}}else Ce.visible&&g.push(C,ye,Ce,J,be.z,null)}}const me=C.children;for(let ye=0,Ce=me.length;ye<Ce;ye++)nc(me[ye],Y,J,G)}function ic(C,Y,J,G){const ee=C.opaque,me=C.transmissive,ye=C.transparent;u.setupLightsView(J),ie===!0&&we.setGlobalState(_.clippingPlanes,J),me.length>0&&Ep(ee,me,Y,J),G&&_e.viewport(E.copy(G)),ee.length>0&&Ls(ee,Y,J),me.length>0&&Ls(me,Y,J),ye.length>0&&Ls(ye,Y,J),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ep(C,Y,J,G){const ee=ve.isWebGL2;le===null&&(le=new xi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Mn:hi,minFilter:yr,samples:ee&&o===!0?4:0})),_.getDrawingBufferSize(Te),ee?le.setSize(Te.x,Te.y):le.setSize(fl(Te.x),fl(Te.y));const me=_.getRenderTarget();_.setRenderTarget(le),_.getClearColor(U),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const ye=_.toneMapping;_.toneMapping=Zn,Ls(C,J,G),Re.updateMultisampleRenderTarget(le),Re.updateRenderTargetMipmap(le);let Ce=!1;for(let Le=0,ke=Y.length;Le<ke;Le++){const De=Y[Le],Pe=De.object,Je=De.geometry,at=De.material,on=De.group;if(at.side===En&&Pe.layers.test(G.layers)){const Pn=at.side;at.side=Gt,at.needsUpdate=!0,rc(Pe,J,G,Je,at,on),at.side=Pn,at.needsUpdate=!0,Ce=!0}}Ce===!0&&(Re.updateMultisampleRenderTarget(le),Re.updateRenderTargetMipmap(le)),_.setRenderTarget(me),_.setClearColor(U,I),_.toneMapping=ye}function Ls(C,Y,J){const G=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,me=C.length;ee<me;ee++){const ye=C[ee],Ce=ye.object,Le=ye.geometry,ke=G===null?ye.material:G,De=ye.group;Ce.layers.test(J.layers)&&rc(Ce,Y,J,Le,ke,De)}}function rc(C,Y,J,G,ee,me){C.onBeforeRender(_,Y,J,G,ee,me),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(_,Y,J,G,C,me),ee.transparent===!0&&ee.side===En&&ee.forceSinglePass===!1?(ee.side=Gt,ee.needsUpdate=!0,_.renderBufferDirect(J,Y,G,ee,C,me),ee.side=gi,ee.needsUpdate=!0,_.renderBufferDirect(J,Y,G,ee,C,me),ee.side=En):_.renderBufferDirect(J,Y,G,ee,C,me),C.onAfterRender(_,Y,J,G,ee,me)}function Ds(C,Y,J){Y.isScene!==!0&&(Y=Ne);const G=Ae.get(C),ee=u.state.lights,me=u.state.shadowsArray,ye=ee.state.version,Ce=K.getParameters(C,ee.state,me,Y,J),Le=K.getProgramCacheKey(Ce);let ke=G.programs;G.environment=C.isMeshStandardMaterial?Y.environment:null,G.fog=Y.fog,G.envMap=(C.isMeshStandardMaterial?je:We).get(C.envMap||G.environment),ke===void 0&&(C.addEventListener("dispose",he),ke=new Map,G.programs=ke);let De=ke.get(Le);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===ye)return sc(C,Ce),De}else Ce.uniforms=K.getUniforms(C),C.onBuild(J,Ce,_),C.onBeforeCompile(Ce,_),De=K.acquireProgram(Ce,Le),ke.set(Le,De),G.uniforms=Ce.uniforms;const Pe=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pe.clippingPlanes=we.uniform),sc(C,Ce),G.needsLights=Tp(C),G.lightsStateVersion=ye,G.needsLights&&(Pe.ambientLightColor.value=ee.state.ambient,Pe.lightProbe.value=ee.state.probe,Pe.directionalLights.value=ee.state.directional,Pe.directionalLightShadows.value=ee.state.directionalShadow,Pe.spotLights.value=ee.state.spot,Pe.spotLightShadows.value=ee.state.spotShadow,Pe.rectAreaLights.value=ee.state.rectArea,Pe.ltc_1.value=ee.state.rectAreaLTC1,Pe.ltc_2.value=ee.state.rectAreaLTC2,Pe.pointLights.value=ee.state.point,Pe.pointLightShadows.value=ee.state.pointShadow,Pe.hemisphereLights.value=ee.state.hemi,Pe.directionalShadowMap.value=ee.state.directionalShadowMap,Pe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Pe.spotShadowMap.value=ee.state.spotShadowMap,Pe.spotLightMatrix.value=ee.state.spotLightMatrix,Pe.spotLightMap.value=ee.state.spotLightMap,Pe.pointShadowMap.value=ee.state.pointShadowMap,Pe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Je=De.getUniforms(),at=va.seqWithValue(Je.seq,Pe);return G.currentProgram=De,G.uniformsList=at,De}function sc(C,Y){const J=Ae.get(C);J.outputColorSpace=Y.outputColorSpace,J.instancing=Y.instancing,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function yp(C,Y,J,G,ee){Y.isScene!==!0&&(Y=Ne),Re.resetTextureUnits();const me=Y.fog,ye=G.isMeshStandardMaterial?Y.environment:null,Ce=y===null?_.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:en,Le=(G.isMeshStandardMaterial?je:We).get(G.envMap||ye),ke=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,De=!!J.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!J.morphAttributes.position,Je=!!J.morphAttributes.normal,at=!!J.morphAttributes.color,on=G.toneMapped?_.toneMapping:Zn,Pn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=Pn!==void 0?Pn.length:0,Ge=Ae.get(G),Xa=u.state.lights;if(ie===!0&&(fe===!0||C!==x)){const Ht=C===x&&G.id===T;we.setState(G,C,Ht)}let pt=!1;G.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Xa.state.version||Ge.outputColorSpace!==Ce||ee.isInstancedMesh&&Ge.instancing===!1||!ee.isInstancedMesh&&Ge.instancing===!0||ee.isSkinnedMesh&&Ge.skinning===!1||!ee.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Le||G.fog===!0&&Ge.fog!==me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==we.numPlanes||Ge.numIntersection!==we.numIntersection)||Ge.vertexAlphas!==ke||Ge.vertexTangents!==De||Ge.morphTargets!==Pe||Ge.morphNormals!==Je||Ge.morphColors!==at||Ge.toneMapping!==on||ve.isWebGL2===!0&&Ge.morphTargetsCount!==lt)&&(pt=!0):(pt=!0,Ge.__version=G.version);let bi=Ge.currentProgram;pt===!0&&(bi=Ds(G,Y,ee));let ac=!1,kr=!1,qa=!1;const Tt=bi.getUniforms(),Si=Ge.uniforms;if(_e.useProgram(bi.program)&&(ac=!0,kr=!0,qa=!0),G.id!==T&&(T=G.id,kr=!0),ac||x!==C){if(Tt.setValue(B,"projectionMatrix",C.projectionMatrix),ve.logarithmicDepthBuffer&&Tt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),x!==C&&(x=C,kr=!0,qa=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Ht=Tt.map.cameraPosition;Ht!==void 0&&Ht.setValue(B,be.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ee.isSkinnedMesh)&&Tt.setValue(B,"viewMatrix",C.matrixWorldInverse)}if(ee.isSkinnedMesh){Tt.setOptional(B,ee,"bindMatrix"),Tt.setOptional(B,ee,"bindMatrixInverse");const Ht=ee.skeleton;Ht&&(ve.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Tt.setValue(B,"boneTexture",Ht.boneTexture,Re),Tt.setValue(B,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ya=J.morphAttributes;if((Ya.position!==void 0||Ya.normal!==void 0||Ya.color!==void 0&&ve.isWebGL2===!0)&&Se.update(ee,J,bi),(kr||Ge.receiveShadow!==ee.receiveShadow)&&(Ge.receiveShadow=ee.receiveShadow,Tt.setValue(B,"receiveShadow",ee.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Si.envMap.value=Le,Si.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),kr&&(Tt.setValue(B,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&Mp(Si,qa),me&&G.fog===!0&&oe.refreshFogUniforms(Si,me),oe.refreshMaterialUniforms(Si,G,F,X,le),va.upload(B,Ge.uniformsList,Si,Re)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(va.upload(B,Ge.uniformsList,Si,Re),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(B,"center",ee.center),Tt.setValue(B,"modelViewMatrix",ee.modelViewMatrix),Tt.setValue(B,"normalMatrix",ee.normalMatrix),Tt.setValue(B,"modelMatrix",ee.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ht=G.uniformsGroups;for(let Za=0,Ap=Ht.length;Za<Ap;Za++)if(ve.isWebGL2){const oc=Ht[Za];j.update(oc,bi),j.bind(oc,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Mp(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Tp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(C,Y,J){Ae.get(C.texture).__webglTexture=Y,Ae.get(C.depthTexture).__webglTexture=J;const G=Ae.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=J===void 0,G.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Y){const J=Ae.get(C);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,J=0){y=C,S=Y,M=J;let G=!0,ee=null,me=!1,ye=!1;if(C){const Le=Ae.get(C);Le.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(B.FRAMEBUFFER,null),G=!1):Le.__webglFramebuffer===void 0?Re.setupRenderTarget(C):Le.__hasExternalTextures&&Re.rebindTextures(C,Ae.get(C.texture).__webglTexture,Ae.get(C.depthTexture).__webglTexture);const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const De=Ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ee=De[Y],me=!0):ve.isWebGL2&&C.samples>0&&Re.useMultisampledRTT(C)===!1?ee=Ae.get(C).__webglMultisampledFramebuffer:ee=De,E.copy(C.viewport),A.copy(C.scissor),H=C.scissorTest}else E.copy(q).multiplyScalar(F).floor(),A.copy(ce).multiplyScalar(F).floor(),H=N;if(_e.bindFramebuffer(B.FRAMEBUFFER,ee)&&ve.drawBuffers&&G&&_e.drawBuffers(C,ee),_e.viewport(E),_e.scissor(A),_e.setScissorTest(H),me){const Le=Ae.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,J)}else if(ye){const Le=Ae.get(C.texture),ke=Y||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.__webglTexture,J||0,ke)}T=-1},this.readRenderTargetPixels=function(C,Y,J,G,ee,me,ye){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){_e.bindFramebuffer(B.FRAMEBUFFER,Ce);try{const Le=C.texture,ke=Le.format,De=Le.type;if(ke!==gn&&V.convert(ke)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=De===Mn&&(ge.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ge.has("EXT_color_buffer_float"));if(De!==hi&&V.convert(De)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Kt&&(ve.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-G&&J>=0&&J<=C.height-ee&&B.readPixels(Y,J,G,ee,V.convert(ke),V.convert(De),me)}finally{const Le=y!==null?Ae.get(y).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(C,Y,J=0){const G=Math.pow(2,-J),ee=Math.floor(Y.image.width*G),me=Math.floor(Y.image.height*G);Re.setTexture2D(Y,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,C.x,C.y,ee,me),_e.unbindTexture()},this.copyTextureToTexture=function(C,Y,J,G=0){const ee=Y.image.width,me=Y.image.height,ye=V.convert(J.format),Ce=V.convert(J.type);Re.setTexture2D(J,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment),Y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,C.x,C.y,ee,me,ye,Ce,Y.image.data):Y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,C.x,C.y,Y.mipmaps[0].width,Y.mipmaps[0].height,ye,Y.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,G,C.x,C.y,ye,Ce,Y.image),G===0&&J.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,J,G,ee=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=C.max.x-C.min.x+1,ye=C.max.y-C.min.y+1,Ce=C.max.z-C.min.z+1,Le=V.convert(G.format),ke=V.convert(G.type);let De;if(G.isData3DTexture)Re.setTexture3D(G,0),De=B.TEXTURE_3D;else if(G.isDataArrayTexture)Re.setTexture2DArray(G,0),De=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const Pe=B.getParameter(B.UNPACK_ROW_LENGTH),Je=B.getParameter(B.UNPACK_IMAGE_HEIGHT),at=B.getParameter(B.UNPACK_SKIP_PIXELS),on=B.getParameter(B.UNPACK_SKIP_ROWS),Pn=B.getParameter(B.UNPACK_SKIP_IMAGES),lt=J.isCompressedTexture?J.mipmaps[0]:J.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,C.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,C.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?B.texSubImage3D(De,ee,Y.x,Y.y,Y.z,me,ye,Ce,Le,ke,lt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(De,ee,Y.x,Y.y,Y.z,me,ye,Ce,Le,lt.data)):B.texSubImage3D(De,ee,Y.x,Y.y,Y.z,me,ye,Ce,Le,ke,lt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Pe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Je),B.pixelStorei(B.UNPACK_SKIP_PIXELS,at),B.pixelStorei(B.UNPACK_SKIP_ROWS,on),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pn),ee===0&&G.generateMipmaps&&B.generateMipmap(De),_e.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Re.setTextureCube(C,0):C.isData3DTexture?Re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Re.setTexture2DArray(C,0):Re.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){S=0,M=0,y=null,_e.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?Bi:Su}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Bi?Ue:en}}class k1 extends zl{}k1.prototype.isWebGL1Renderer=!0;class O1 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gu extends Pt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=vt,f=vt,p,h){super(null,a,o,c,l,f,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gl extends vi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const f=[],p=new Z,h=new Z,m=[],v=[],g=[],u=[];for(let d=0;d<=i;d++){const w=[],_=d/i;let b=0;d===0&&a===0?b=.5/t:d===i&&c===Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){const M=S/t;p.x=-e*Math.cos(r+M*s)*Math.sin(a+_*o),p.y=e*Math.cos(a+_*o),p.z=e*Math.sin(r+M*s)*Math.sin(a+_*o),v.push(p.x,p.y,p.z),h.copy(p).normalize(),g.push(h.x,h.y,h.z),u.push(M+b,1-_),w.push(l++)}f.push(w)}for(let d=0;d<i;d++)for(let w=0;w<t;w++){const _=f[d][w+1],b=f[d][w],S=f[d+1][w],M=f[d+1][w+1];(d!==0||a>0)&&m.push(_,b,M),(d!==i-1||c<Math.PI)&&m.push(b,S,M)}this.setIndex(m),this.setAttribute("position",new Rn(v,3)),this.setAttribute("normal",new Rn(g,3)),this.setAttribute("uv",new Rn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const ya={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class B1{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,p){return l.push(f,p),this},this.removeHandler=function(f){const p=l.indexOf(f);return p!==-1&&l.splice(p,2),this},this.getHandler=function(f){for(let p=0,h=l.length;p<h;p+=2){const m=l[p],v=l[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return v}return null}}}const z1=new B1;class ka{constructor(e){this.manager=e!==void 0?e:z1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const zn={};class G1 extends Error{constructor(e,t){super(e),this.response=t}}class H1 extends ka{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ya.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:i,onError:r});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const f=zn[e],p=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=h?parseInt(h):0,v=m!==0;let g=0;const u=new ReadableStream({start(d){w();function w(){p.read().then(({done:_,value:b})=>{if(_)d.close();else{g+=b.byteLength;const S=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let M=0,y=f.length;M<y;M++){const T=f[M];T.onProgress&&T.onProgress(S)}d.enqueue(b),w()}})}}});return new Response(u)}else throw new G1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return l.json();default:if(o===void 0)return l.text();{const p=/charset="?([^;"\s]*)"?/i.exec(o),h=p&&p[1]?p[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{ya.add(e,l);const f=zn[e];delete zn[e];for(let p=0,h=f.length;p<h;p++){const m=f[p];m.onLoad&&m.onLoad(l)}}).catch(l=>{const f=zn[e];if(f===void 0)throw this.manager.itemError(e),l;delete zn[e];for(let p=0,h=f.length;p<h;p++){const m=f[p];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class V1 extends ka{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ya.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=is("img");function c(){f(),ya.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(p){f(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class W1 extends ka{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new Gu,o=new H1(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){const l=s.parse(c);l&&(l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Lt,a.wrapT=l.wrapT!==void 0?l.wrapT:Lt,a.magFilter=l.magFilter!==void 0?l.magFilter:dt,a.minFilter=l.minFilter!==void 0?l.minFilter:dt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?a.colorSpace=l.colorSpace:l.encoding!==void 0&&(a.encoding=l.encoding),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=yr),l.mipmapCount===1&&(a.minFilter=dt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l))},i,r),a}}class X1 extends ka{constructor(e){super(e)}load(e,t,i,r){const s=new Pt,a=new V1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);class q1 extends W1{constructor(e){super(e),this.type=Mn}parse(e){const o=function(_,b){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(b||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(b||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(b||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(b||""))}return-1},p=`
`,h=function(_,b,S){b=b||1024;let y=_.pos,T=-1,x=0,E="",A=String.fromCharCode.apply(null,new Uint16Array(_.subarray(y,y+128)));for(;0>(T=A.indexOf(p))&&x<b&&y<_.byteLength;)E+=A,x+=A.length,y+=128,A+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(y,y+128)));return-1<T?(S!==!1&&(_.pos+=x+T+1),E+A.slice(0,T)):!1},m=function(_){const b=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,y=/^\s*FORMAT=(\S+)\s*$/,T=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,x={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let E,A;if(_.pos>=_.byteLength||!(E=h(_)))return o(1,"no header found");if(!(A=E.match(b)))return o(3,"bad initial token");for(x.valid|=1,x.programtype=A[1],x.string+=E+`
`;E=h(_),E!==!1;){if(x.string+=E+`
`,E.charAt(0)==="#"){x.comments+=E+`
`;continue}if((A=E.match(S))&&(x.gamma=parseFloat(A[1])),(A=E.match(M))&&(x.exposure=parseFloat(A[1])),(A=E.match(y))&&(x.valid|=2,x.format=A[1]),(A=E.match(T))&&(x.valid|=4,x.height=parseInt(A[1],10),x.width=parseInt(A[2],10)),x.valid&2&&x.valid&4)break}return x.valid&2?x.valid&4?x:o(3,"missing image size specifier"):o(3,"missing format specifier")},v=function(_,b,S){const M=b;if(M<8||M>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(M!==(_[2]<<8|_[3]))return o(3,"wrong scanline width");const y=new Uint8Array(4*b*S);if(!y.length)return o(4,"unable to allocate buffer space");let T=0,x=0;const E=4*M,A=new Uint8Array(4),H=new Uint8Array(E);let U=S;for(;U>0&&x<_.byteLength;){if(x+4>_.byteLength)return o(1);if(A[0]=_[x++],A[1]=_[x++],A[2]=_[x++],A[3]=_[x++],A[0]!=2||A[1]!=2||(A[2]<<8|A[3])!=M)return o(3,"bad rgbe scanline format");let I=0,P;for(;I<E&&x<_.byteLength;){P=_[x++];const F=P>128;if(F&&(P-=128),P===0||I+P>E)return o(3,"bad scanline data");if(F){const O=_[x++];for(let Q=0;Q<P;Q++)H[I++]=O}else H.set(_.subarray(x,x+P),I),I+=P,x+=P}const X=M;for(let F=0;F<X;F++){let O=0;y[T]=H[F+O],O+=M,y[T+1]=H[F+O],O+=M,y[T+2]=H[F+O],O+=M,y[T+3]=H[F+O],T+=4}U--}return y},g=function(_,b,S,M){const y=_[b+3],T=Math.pow(2,y-128)/255;S[M+0]=_[b+0]*T,S[M+1]=_[b+1]*T,S[M+2]=_[b+2]*T,S[M+3]=1},u=function(_,b,S,M){const y=_[b+3],T=Math.pow(2,y-128)/255;S[M+0]=Hs.toHalfFloat(Math.min(_[b+0]*T,65504)),S[M+1]=Hs.toHalfFloat(Math.min(_[b+1]*T,65504)),S[M+2]=Hs.toHalfFloat(Math.min(_[b+2]*T,65504)),S[M+3]=Hs.toHalfFloat(1)},d=new Uint8Array(e);d.pos=0;const w=m(d);if(w!==-1){const _=w.width,b=w.height,S=v(d.subarray(d.pos),_,b);if(S!==-1){let M,y,T;switch(this.type){case Kt:T=S.length/4;const x=new Float32Array(T*4);for(let A=0;A<T;A++)g(S,A*4,x,A*4);M=x,y=Kt;break;case Mn:T=S.length/4;const E=new Uint16Array(T*4);for(let A=0;A<T;A++)u(S,A*4,E,A*4);M=E,y=Mn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:b,data:M,header:w.string,gamma:w.gamma,exposure:w.exposure,type:y}}}return null}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(a,o){switch(a.type){case Kt:case Mn:a.colorSpace=en,a.minFilter=dt,a.magFilter=dt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,i,r)}}class Y1 extends q1{constructor(e){super(e)}fromBuffer(e){const t=this.parse(e);if(!t||!t.data)return null;const i=new Gu(t.data,t.width,t.height);switch(i.wrapS=Lt,i.wrapT=Lt,i.magFilter=dt,i.minFilter=dt,i.type=t.type,i.anisotropy=1,t.type){case Kt:case Mn:i.colorSpace=en,i.generateMipmaps=!1,i.flipY=!0;break}return i.needsUpdate=!0,i}}const Yt=new jt(90,1/1,.1,2);Yt.projectionMatrix.scale(new Z(1,-1,1));const pn=new zl({antialias:!0,depth:!1,stencil:!1}),oi=new xi(16,16,{generateMipmaps:!0,type:Kt,depthBuffer:!1,stencilBuffer:!1});pn.setRenderTarget(oi);function lr(){const n=new Float32Array(oi.width*oi.height*4);return pn.readRenderTargetPixels(oi,0,0,oi.width,oi.height,n),n}function Z1(n){pn.setSize(n,n),oi.setSize(n,n),pn.setRenderTarget(oi);const e=Math.PI/2;Yt.setRotationFromEuler(new bn(0,e*3,0)),pn.render(si,Yt);const t=lr();Yt.setRotationFromEuler(new bn(0,e*2,0)),pn.render(si,Yt);const i=lr();Yt.setRotationFromEuler(new bn(0,e*1,0)),pn.render(si,Yt);const r=lr();Yt.setRotationFromEuler(new bn(0,0,0)),pn.render(si,Yt);const s=lr();Yt.setRotationFromEuler(new bn(e,0,0)),pn.render(si,Yt);const a=lr();Yt.setRotationFromEuler(new bn(-e,0,0)),pn.render(si,Yt);const o=lr();return{front:t,left:i,back:r,right:s,up:a,down:o}}function Hu(){Ss.setSize(na.clientWidth,na.clientHeight),Ar.aspect=na.clientWidth/na.clientHeight,Ar.updateProjectionMatrix()}const Mf=1/200,fi=new $e(0,0);let pr=1;function $1(n){if(!n.buttons)return;const e=pr/2+.5;fi.x-=n.movementX*Mf/e,fi.y+=n.movementY*Mf/e,fi.y=Math.min(Math.PI/2,Math.max(-Math.PI/2,fi.y))}function j1(n){pr-=n.deltaY*pr/400,pr=Math.max(.5,Math.min(10,pr)),Ar.zoom=pr,Ar.updateProjectionMatrix()}const Vu=new X1,Wu=new Y1,na=document.querySelector("#viewport-container"),rs=document.querySelector("#viewport"),si=new O1,Ar=new jt(90,rs.clientWidth/rs.clientHeight,.1,100),Xu=new Gl(1,200,100),ul=new kl({side:En}),K1=new Yn(Xu,ul);Xu.scale(1,1,-1);si.add(K1);function qu(n){return n.endsWith(".hdr")||n.endsWith(".exr")}function Yu(n,e){const t=e?pu:hu;pn.toneMapping=t,Ss.toneMapping=t,n.colorSpace=e?en:Ue,ul.map=n,ul.needsUpdate=!0}async function J1(n){let e;const t=qu(n);return t?e=await Wu.loadAsync(n):e=await Vu.loadAsync(n),e&&Yu(e,t),Promise.resolve()}async function Q1(n){return new Promise(e=>{const t=new FileReader,i=qu(n.name);t.onload=async()=>{let r;i?r=Wu.fromBuffer(t.result):r=await Vu.loadAsync(t.result),r?Yu(r,i):console.warn("Failed to parse file!"),e()},i?t.readAsArrayBuffer(n):t.readAsDataURL(n)})}const Ss=new zl({canvas:rs,antialias:!0,stencil:!1,depth:!1});Ss.setPixelRatio(window.devicePixelRatio);Hu();function Zu(){const n=Math.cos(fi.y);Ar.lookAt(Math.cos(fi.x)*n,Math.sin(fi.y),Math.sin(fi.x)*n),Ss.render(si,Ar),requestAnimationFrame(Zu)}function ev(n){Ss.toneMappingExposure=n}window.addEventListener("resize",Hu);rs.addEventListener("mousemove",$1);rs.addEventListener("wheel",j1);Zu();const Es={loadTexture:J1,loadTextureFile:Q1,setExposure:ev},tv=new TextEncoder,nv=new TextDecoder;class $u extends Uint8Array{constructor(t,i,r){!(t instanceof ArrayBuffer)&&i!==0&&r!==void 0&&(t=t.buffer);super(t,i,r);Us(this,"pointer",0);Us(this,"view");Us(this,"little",!1);this.view=new DataView(this.buffer,this.byteOffset,this.byteLength)}set_endian(t){this.little=t}goto(t){this.pointer=t}pad(t){this.pointer+=t}align(t,i){this.pointer=(i??0)+this.pointer+(t-this.pointer%t)%t}read_u8(t){const i=this.pointer;return t===void 0?(this.pointer++,this.view.getUint8(i)):(this.pointer+=t,new Uint8Array(this.slice(i,this.pointer)))}write_u8(t){const i=this.pointer;if(typeof t=="number")return this.pointer++,this.view.setUint8(i,t);this.pointer+=t.length,this.set(t,i)}read_u16(t,i=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=2,this.view.getUint16(r,i);this.pointer+=t*2;const s=new Uint16Array(t);for(let a=0;a<t;a++)s[a]=this.view.getUint16(r+a*2,i);return s}write_u16(t,i=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=2,this.view.setUint16(r,t,i);this.pointer+=t.length*2;for(let s=0;s<t.length;s++)this.view.setUint16(r+s*2,t[s],i)}read_u32(t,i=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=4,this.view.getUint32(r,i);this.pointer+=t*4;const s=new Uint32Array(t);for(let a=0;a<t;a++)s[a]=this.view.getUint32(r+a*4,i);return s}write_u32(t,i=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=4,this.view.setUint32(r,t,i);this.pointer+=t.length*4;for(let s=0;s<t.length;s++)this.view.setUint32(r+s*4,t[s],i)}read_i32(t,i=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=4,this.view.getInt32(r,i);this.pointer+=t*4;const s=new Int32Array(t);for(let a=0;a<t;a++)s[a]=this.view.getInt32(r+a*4,i);return s}write_i32(t,i=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=4,this.view.setInt32(r,t,i);this.pointer+=t.length*4;for(let s=0;s<t.length;s++)this.view.setInt32(r+s*4,t[s],i)}read_f32(t,i=this.little){const r=this.pointer;if(t===void 0)return this.pointer+=4,this.view.getFloat32(r,i);this.pointer+=t*4;const s=new Float32Array(t);for(let a=0;a<t;a++)s[a]=this.view.getFloat32(r+a*4,i);return s}write_f32(t,i=this.little){const r=this.pointer;if(typeof t=="number")return this.pointer+=4,this.view.setFloat32(r,t,i);this.pointer+=t.length*4;for(let s=0;s<t.length;s++)this.view.setFloat32(r+s*4,t[s],i)}read_str(t){const i=this.pointer;let r=i+t;if(t===void 0){for(r=i;r<this.length&&this.view.getUint8(r)!=0;r++);this.pointer++}return this.pointer+=r-i,nv.decode(this.slice(i,r))}write_str(t,i){const r=this.pointer;if(this.pointer+=t.length,this.set(tv.encode(t),r),i===void 0)this.view.setUint8(this.pointer,0),this.pointer++;else if(t.length!==i)throw new RangeError("String of length "+t.length+" does not match write length of "+i+"!")}}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const iv=4,Tf=0,Af=1,rv=2;function Ir(n){let e=n.length;for(;--e>=0;)n[e]=0}const sv=0,ju=1,av=2,ov=3,lv=258,Hl=29,ys=256,ss=ys+1+Hl,wr=30,Vl=19,Ku=2*ss+1,Ii=15,To=16,cv=7,Wl=256,Ju=16,Qu=17,eh=18,hl=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),wa=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),fv=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),th=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dv=512,Vn=new Array((ss+2)*2);Ir(Vn);const es=new Array(wr*2);Ir(es);const as=new Array(dv);Ir(as);const os=new Array(lv-ov+1);Ir(os);const Xl=new Array(Hl);Ir(Xl);const Ma=new Array(wr);Ir(Ma);function Ao(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let nh,ih,rh;function Ro(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const sh=n=>n<256?as[n]:as[256+(n>>>7)],ls=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},zt=(n,e,t)=>{n.bi_valid>To-t?(n.bi_buf|=e<<n.bi_valid&65535,ls(n,n.bi_buf),n.bi_buf=e>>To-n.bi_valid,n.bi_valid+=t-To):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},yn=(n,e,t)=>{zt(n,t[e*2],t[e*2+1])},ah=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},uv=n=>{n.bi_valid===16?(ls(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},hv=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,f,p,h,m,v,g=0;for(h=0;h<=Ii;h++)n.bl_count[h]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<Ku;l++)f=n.heap[l],h=t[t[f*2+1]*2+1]+1,h>c&&(h=c,g++),t[f*2+1]=h,!(f>i)&&(n.bl_count[h]++,m=0,f>=o&&(m=a[f-o]),v=t[f*2],n.opt_len+=v*(h+m),s&&(n.static_len+=v*(r[f*2+1]+m)));if(g!==0){do{for(h=c-1;n.bl_count[h]===0;)h--;n.bl_count[h]--,n.bl_count[h+1]+=2,n.bl_count[c]--,g-=2}while(g>0);for(h=c;h!==0;h--)for(f=n.bl_count[h];f!==0;)p=n.heap[--l],!(p>i)&&(t[p*2+1]!==h&&(n.opt_len+=(h-t[p*2+1])*t[p*2],t[p*2+1]=h),f--)}},oh=(n,e,t)=>{const i=new Array(Ii+1);let r=0,s,a;for(s=1;s<=Ii;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=ah(i[o]++,o))}},pv=()=>{let n,e,t,i,r;const s=new Array(Ii+1);for(t=0,i=0;i<Hl-1;i++)for(Xl[i]=t,n=0;n<1<<hl[i];n++)os[t++]=i;for(os[t-1]=i,r=0,i=0;i<16;i++)for(Ma[i]=r,n=0;n<1<<wa[i];n++)as[r++]=i;for(r>>=7;i<wr;i++)for(Ma[i]=r<<7,n=0;n<1<<wa[i]-7;n++)as[256+r++]=i;for(e=0;e<=Ii;e++)s[e]=0;for(n=0;n<=143;)Vn[n*2+1]=8,n++,s[8]++;for(;n<=255;)Vn[n*2+1]=9,n++,s[9]++;for(;n<=279;)Vn[n*2+1]=7,n++,s[7]++;for(;n<=287;)Vn[n*2+1]=8,n++,s[8]++;for(oh(Vn,ss+1,s),n=0;n<wr;n++)es[n*2+1]=5,es[n*2]=ah(n,5);nh=new Ao(Vn,hl,ys+1,ss,Ii),ih=new Ao(es,wa,0,wr,Ii),rh=new Ao(new Array(0),fv,0,Vl,cv)},lh=n=>{let e;for(e=0;e<ss;e++)n.dyn_ltree[e*2]=0;for(e=0;e<wr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<Vl;e++)n.bl_tree[e*2]=0;n.dyn_ltree[Wl*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},ch=n=>{n.bi_valid>8?ls(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Rf=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},Co=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Rf(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Rf(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},Cf=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?yn(n,r,e):(a=os[r],yn(n,a+ys+1,e),o=hl[a],o!==0&&(r-=Xl[a],zt(n,r,o)),i--,a=sh(i),yn(n,a,t),o=wa[a],o!==0&&(i-=Ma[a],zt(n,i,o)));while(s<n.sym_next);yn(n,Wl,e)},pl=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(n.heap_len=0,n.heap_max=Ku,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,a=n.heap_len>>1;a>=1;a--)Co(n,t,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],Co(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[l*2]=t[a*2]+t[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=l,n.heap[1]=l++,Co(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],hv(n,e),oh(t,c,n.bl_count)},Lf=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Ju*2]++):o<=10?n.bl_tree[Qu*2]++:n.bl_tree[eh*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},Df=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do yn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(yn(n,s,n.bl_tree),o--),yn(n,Ju,n.bl_tree),zt(n,o-3,2)):o<=10?(yn(n,Qu,n.bl_tree),zt(n,o-3,3)):(yn(n,eh,n.bl_tree),zt(n,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},mv=n=>{let e;for(Lf(n,n.dyn_ltree,n.l_desc.max_code),Lf(n,n.dyn_dtree,n.d_desc.max_code),pl(n,n.bl_desc),e=Vl-1;e>=3&&n.bl_tree[th[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},_v=(n,e,t,i)=>{let r;for(zt(n,e-257,5),zt(n,t-1,5),zt(n,i-4,4),r=0;r<i;r++)zt(n,n.bl_tree[th[r]*2+1],3);Df(n,n.dyn_ltree,e-1),Df(n,n.dyn_dtree,t-1)},gv=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return Tf;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Af;for(t=32;t<ys;t++)if(n.dyn_ltree[t*2]!==0)return Af;return Tf};let Uf=!1;const xv=n=>{Uf||(pv(),Uf=!0),n.l_desc=new Ro(n.dyn_ltree,nh),n.d_desc=new Ro(n.dyn_dtree,ih),n.bl_desc=new Ro(n.bl_tree,rh),n.bi_buf=0,n.bi_valid=0,lh(n)},fh=(n,e,t,i)=>{zt(n,(sv<<1)+(i?1:0),3),ch(n),ls(n,t),ls(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},vv=n=>{zt(n,ju<<1,3),yn(n,Wl,Vn),uv(n)},wv=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===rv&&(n.strm.data_type=gv(n)),pl(n,n.l_desc),pl(n,n.d_desc),a=mv(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?fh(n,e,t,i):n.strategy===iv||s===r?(zt(n,(ju<<1)+(i?1:0),3),Cf(n,Vn,es)):(zt(n,(av<<1)+(i?1:0),3),_v(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),Cf(n,n.dyn_ltree,n.dyn_dtree)),lh(n),i&&ch(n)},bv=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(os[t]+ys+1)*2]++,n.dyn_dtree[sh(e)*2]++),n.sym_next===n.sym_end);var Sv=xv,Ev=fh,yv=wv,Mv=bv,Tv=vv,Av={_tr_init:Sv,_tr_stored_block:Ev,_tr_flush_block:yv,_tr_tally:Mv,_tr_align:Tv};const Rv=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var cs=Rv;const Cv=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},Lv=new Uint32Array(Cv()),Dv=(n,e,t,i)=>{const r=Lv,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var _t=Dv,Rr={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Ms={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Uv,_tr_stored_block:ml,_tr_flush_block:Pv,_tr_tally:pi,_tr_align:Iv}=Av,{Z_NO_FLUSH:mi,Z_PARTIAL_FLUSH:Fv,Z_FULL_FLUSH:Nv,Z_FINISH:rn,Z_BLOCK:Pf,Z_OK:xt,Z_STREAM_END:If,Z_STREAM_ERROR:Cn,Z_DATA_ERROR:kv,Z_BUF_ERROR:Lo,Z_DEFAULT_COMPRESSION:Ov,Z_FILTERED:Bv,Z_HUFFMAN_ONLY:ia,Z_RLE:zv,Z_FIXED:Gv,Z_DEFAULT_STRATEGY:Hv,Z_UNKNOWN:Vv,Z_DEFLATED:Oa}=Ms,Wv=9,Xv=15,qv=8,Yv=29,Zv=256,_l=Zv+1+Yv,$v=30,jv=19,Kv=2*_l+1,Jv=15,ze=3,di=258,Ln=di+ze+1,Qv=32,Cr=42,ql=57,gl=69,xl=73,vl=91,wl=103,Fi=113,jr=666,Dt=1,Fr=2,Hi=3,Nr=4,ew=3,Ni=(n,e)=>(n.msg=Rr[e],e),Ff=n=>n*2-(n>4?9:0),li=n=>{let e=n.length;for(;--e>=0;)n[e]=0},tw=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let nw=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,_i=nw;const Zt=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},Jt=(n,e)=>{Pv(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,Zt(n.strm)},Xe=(n,e)=>{n.pending_buf[n.pending++]=e},Hr=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},bl=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=cs(n.adler,e,r,t):n.state.wrap===2&&(n.adler=_t(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},dh=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Ln?n.strstart-(n.w_size-Ln):0,l=n.window,f=n.w_mask,p=n.prev,h=n.strstart+di;let m=l[i+a-1],v=l[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+a]!==v||l[r+a-1]!==m||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<h);if(s=di-(h-i),i=h-di,s>a){if(n.match_start=e,a=s,s>=o)break;m=l[i+a-1],v=l[i+a]}}while((e=p[e&f])>c&&--t!==0);return a<=n.lookahead?a:n.lookahead},Lr=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Ln)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),tw(n),i+=e),n.strm.avail_in===0)break;if(t=bl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=ze)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=_i(n,n.ins_h,n.window[r+1]);n.insert&&(n.ins_h=_i(n,n.ins_h,n.window[r+ze-1]),n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,n.insert--,!(n.lookahead+n.insert<ze)););}while(n.lookahead<Ln&&n.strm.avail_in!==0)},uh=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==rn||e===mi||i!==r+n.strm.avail_in)))break;a=e===rn&&i===r+n.strm.avail_in?1:0,ml(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,Zt(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(bl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?Nr:e!==mi&&e!==rn&&n.strm.avail_in===0&&n.strstart===n.block_start?Fr:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(bl(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===rn)&&e!==mi&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===rn&&n.strm.avail_in===0&&i===r?1:0,ml(n,n.block_start,i,a),n.block_start+=i,Zt(n.strm)),a?Hi:Dt)},Do=(n,e)=>{let t,i;for(;;){if(n.lookahead<Ln){if(Lr(n),n.lookahead<Ln&&e===mi)return Dt;if(n.lookahead===0)break}if(t=0,n.lookahead>=ze&&(n.ins_h=_i(n,n.ins_h,n.window[n.strstart+ze-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-Ln&&(n.match_length=dh(n,t)),n.match_length>=ze)if(i=pi(n,n.strstart-n.match_start,n.match_length-ze),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=ze){n.match_length--;do n.strstart++,n.ins_h=_i(n,n.ins_h,n.window[n.strstart+ze-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=_i(n,n.ins_h,n.window[n.strstart+1]);else i=pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(Jt(n,!1),n.strm.avail_out===0))return Dt}return n.insert=n.strstart<ze-1?n.strstart:ze-1,e===rn?(Jt(n,!0),n.strm.avail_out===0?Hi:Nr):n.sym_next&&(Jt(n,!1),n.strm.avail_out===0)?Dt:Fr},cr=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Ln){if(Lr(n),n.lookahead<Ln&&e===mi)return Dt;if(n.lookahead===0)break}if(t=0,n.lookahead>=ze&&(n.ins_h=_i(n,n.ins_h,n.window[n.strstart+ze-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=ze-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Ln&&(n.match_length=dh(n,t),n.match_length<=5&&(n.strategy===Bv||n.match_length===ze&&n.strstart-n.match_start>4096)&&(n.match_length=ze-1)),n.prev_length>=ze&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-ze,i=pi(n,n.strstart-1-n.prev_match,n.prev_length-ze),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=_i(n,n.ins_h,n.window[n.strstart+ze-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=ze-1,n.strstart++,i&&(Jt(n,!1),n.strm.avail_out===0))return Dt}else if(n.match_available){if(i=pi(n,0,n.window[n.strstart-1]),i&&Jt(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Dt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=pi(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<ze-1?n.strstart:ze-1,e===rn?(Jt(n,!0),n.strm.avail_out===0?Hi:Nr):n.sym_next&&(Jt(n,!1),n.strm.avail_out===0)?Dt:Fr},iw=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=di){if(Lr(n),n.lookahead<=di&&e===mi)return Dt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=ze&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+di;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=di-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=ze?(t=pi(n,1,n.match_length-ze),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(Jt(n,!1),n.strm.avail_out===0))return Dt}return n.insert=0,e===rn?(Jt(n,!0),n.strm.avail_out===0?Hi:Nr):n.sym_next&&(Jt(n,!1),n.strm.avail_out===0)?Dt:Fr},rw=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(Lr(n),n.lookahead===0)){if(e===mi)return Dt;break}if(n.match_length=0,t=pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(Jt(n,!1),n.strm.avail_out===0))return Dt}return n.insert=0,e===rn?(Jt(n,!0),n.strm.avail_out===0?Hi:Nr):n.sym_next&&(Jt(n,!1),n.strm.avail_out===0)?Dt:Fr};function vn(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const Kr=[new vn(0,0,0,0,uh),new vn(4,4,8,4,Do),new vn(4,5,16,8,Do),new vn(4,6,32,32,Do),new vn(4,4,16,16,cr),new vn(8,16,32,32,cr),new vn(8,16,128,128,cr),new vn(8,32,128,256,cr),new vn(32,128,258,1024,cr),new vn(32,258,258,4096,cr)],sw=n=>{n.window_size=2*n.w_size,li(n.head),n.max_lazy_match=Kr[n.level].max_lazy,n.good_match=Kr[n.level].good_length,n.nice_match=Kr[n.level].nice_length,n.max_chain_length=Kr[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=ze-1,n.match_available=0,n.ins_h=0};function aw(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Oa,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(Kv*2),this.dyn_dtree=new Uint16Array((2*$v+1)*2),this.bl_tree=new Uint16Array((2*jv+1)*2),li(this.dyn_ltree),li(this.dyn_dtree),li(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(Jv+1),this.heap=new Uint16Array(2*_l+1),li(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*_l+1),li(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Ts=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==Cr&&e.status!==ql&&e.status!==gl&&e.status!==xl&&e.status!==vl&&e.status!==wl&&e.status!==Fi&&e.status!==jr?1:0},hh=n=>{if(Ts(n))return Ni(n,Cn);n.total_in=n.total_out=0,n.data_type=Vv;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?ql:e.wrap?Cr:Fi,n.adler=e.wrap===2?0:1,e.last_flush=-2,Uv(e),xt},ph=n=>{const e=hh(n);return e===xt&&sw(n.state),e},ow=(n,e)=>Ts(n)||n.state.wrap!==2?Cn:(n.state.gzhead=e,xt),mh=(n,e,t,i,r,s)=>{if(!n)return Cn;let a=1;if(e===Ov&&(e=6),i<0?(a=0,i=-i):i>15&&(a=2,i-=16),r<1||r>Wv||t!==Oa||i<8||i>15||e<0||e>9||s<0||s>Gv||i===8&&a!==1)return Ni(n,Cn);i===8&&(i=9);const o=new aw;return n.state=o,o.strm=n,o.status=Cr,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+ze-1)/ze),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=s,o.method=t,ph(n)},lw=(n,e)=>mh(n,e,Oa,Xv,qv,Hv),cw=(n,e)=>{if(Ts(n)||e>Pf||e<0)return n?Ni(n,Cn):Cn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===jr&&e!==rn)return Ni(n,n.avail_out===0?Lo:Cn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(Zt(n),n.avail_out===0)return t.last_flush=-1,xt}else if(n.avail_in===0&&Ff(e)<=Ff(i)&&e!==rn)return Ni(n,Lo);if(t.status===jr&&n.avail_in!==0)return Ni(n,Lo);if(t.status===Cr&&t.wrap===0&&(t.status=Fi),t.status===Cr){let r=Oa+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=ia||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=Qv),r+=31-r%31,Hr(t,r),t.strstart!==0&&(Hr(t,n.adler>>>16),Hr(t,n.adler&65535)),n.adler=1,t.status=Fi,Zt(n),t.pending!==0)return t.last_flush=-1,xt}if(t.status===ql){if(n.adler=0,Xe(t,31),Xe(t,139),Xe(t,8),t.gzhead)Xe(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),Xe(t,t.gzhead.time&255),Xe(t,t.gzhead.time>>8&255),Xe(t,t.gzhead.time>>16&255),Xe(t,t.gzhead.time>>24&255),Xe(t,t.level===9?2:t.strategy>=ia||t.level<2?4:0),Xe(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(Xe(t,t.gzhead.extra.length&255),Xe(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=_t(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=gl;else if(Xe(t,0),Xe(t,0),Xe(t,0),Xe(t,0),Xe(t,0),Xe(t,t.level===9?2:t.strategy>=ia||t.level<2?4:0),Xe(t,ew),t.status=Fi,Zt(n),t.pending!==0)return t.last_flush=-1,xt}if(t.status===gl){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=_t(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,Zt(n),t.pending!==0)return t.last_flush=-1,xt;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=_t(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=xl}if(t.status===xl){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=_t(n.adler,t.pending_buf,t.pending-r,r)),Zt(n),t.pending!==0)return t.last_flush=-1,xt;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,Xe(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=_t(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=vl}if(t.status===vl){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=_t(n.adler,t.pending_buf,t.pending-r,r)),Zt(n),t.pending!==0)return t.last_flush=-1,xt;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,Xe(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=_t(n.adler,t.pending_buf,t.pending-r,r))}t.status=wl}if(t.status===wl){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(Zt(n),t.pending!==0))return t.last_flush=-1,xt;Xe(t,n.adler&255),Xe(t,n.adler>>8&255),n.adler=0}if(t.status=Fi,Zt(n),t.pending!==0)return t.last_flush=-1,xt}if(n.avail_in!==0||t.lookahead!==0||e!==mi&&t.status!==jr){let r=t.level===0?uh(t,e):t.strategy===ia?rw(t,e):t.strategy===zv?iw(t,e):Kr[t.level].func(t,e);if((r===Hi||r===Nr)&&(t.status=jr),r===Dt||r===Hi)return n.avail_out===0&&(t.last_flush=-1),xt;if(r===Fr&&(e===Fv?Iv(t):e!==Pf&&(ml(t,0,0,!1),e===Nv&&(li(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),Zt(n),n.avail_out===0))return t.last_flush=-1,xt}return e!==rn?xt:t.wrap<=0?If:(t.wrap===2?(Xe(t,n.adler&255),Xe(t,n.adler>>8&255),Xe(t,n.adler>>16&255),Xe(t,n.adler>>24&255),Xe(t,n.total_in&255),Xe(t,n.total_in>>8&255),Xe(t,n.total_in>>16&255),Xe(t,n.total_in>>24&255)):(Hr(t,n.adler>>>16),Hr(t,n.adler&65535)),Zt(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?xt:If)},fw=n=>{if(Ts(n))return Cn;const e=n.state.status;return n.state=null,e===Fi?Ni(n,kv):xt},dw=(n,e)=>{let t=e.length;if(Ts(n))return Cn;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==Cr||i.lookahead)return Cn;if(r===1&&(n.adler=cs(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(li(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,Lr(i);i.lookahead>=ze;){let c=i.strstart,l=i.lookahead-(ze-1);do i.ins_h=_i(i,i.ins_h,i.window[c+ze-1]),i.prev[c&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=c,c++;while(--l);i.strstart=c,i.lookahead=ze-1,Lr(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=ze-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,xt};var uw=lw,hw=mh,pw=ph,mw=hh,_w=ow,gw=cw,xw=fw,vw=dw,ww="pako deflate (from Nodeca project)",ts={deflateInit:uw,deflateInit2:hw,deflateReset:pw,deflateResetKeep:mw,deflateSetHeader:_w,deflate:gw,deflateEnd:xw,deflateSetDictionary:vw,deflateInfo:ww};const bw=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var Sw=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)bw(t,i)&&(n[i]=t[i])}}return n},Ew=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},Ba={assign:Sw,flattenChunks:Ew};let _h=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{_h=!1}const fs=new Uint8Array(256);for(let n=0;n<256;n++)fs[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;fs[254]=fs[254]=1;var yw=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const Mw=(n,e)=>{if(e<65534&&n.subarray&&_h)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var Tw=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=fs[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return Mw(s,r)},Aw=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+fs[n[t]]>e?t:e},ds={string2buf:yw,buf2string:Tw,utf8border:Aw};function Rw(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var gh=Rw;const xh=Object.prototype.toString,{Z_NO_FLUSH:Cw,Z_SYNC_FLUSH:Lw,Z_FULL_FLUSH:Dw,Z_FINISH:Uw,Z_OK:Ta,Z_STREAM_END:Pw,Z_DEFAULT_COMPRESSION:Iw,Z_DEFAULT_STRATEGY:Fw,Z_DEFLATED:Nw}=Ms;function As(n){this.options=Ba.assign({level:Iw,method:Nw,chunkSize:16384,windowBits:15,memLevel:8,strategy:Fw},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new gh,this.strm.avail_out=0;let t=ts.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==Ta)throw new Error(Rr[t]);if(e.header&&ts.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=ds.string2buf(e.dictionary):xh.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=ts.deflateSetDictionary(this.strm,i),t!==Ta)throw new Error(Rr[t]);this._dict_set=!0}}As.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?Uw:Cw,typeof n=="string"?t.input=ds.string2buf(n):xh.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===Lw||s===Dw)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=ts.deflate(t,s),r===Pw)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=ts.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Ta;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};As.prototype.onData=function(n){this.chunks.push(n)};As.prototype.onEnd=function(n){n===Ta&&(this.result=Ba.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Yl(n,e){const t=new As(e);if(t.push(n,!0),t.err)throw t.msg||Rr[t.err];return t.result}function kw(n,e){return e=e||{},e.raw=!0,Yl(n,e)}function Ow(n,e){return e=e||{},e.gzip=!0,Yl(n,e)}var Bw=As,zw=Yl,Gw=kw,Hw=Ow,Vw=Ms,Ww={Deflate:Bw,deflate:zw,deflateRaw:Gw,gzip:Hw,constants:Vw};const ra=16209,Xw=16191;var qw=function(e,t){let i,r,s,a,o,c,l,f,p,h,m,v,g,u,d,w,_,b,S,M,y,T,x,E;const A=e.state;i=e.next_in,x=e.input,r=i+(e.avail_in-5),s=e.next_out,E=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=A.dmax,l=A.wsize,f=A.whave,p=A.wnext,h=A.window,m=A.hold,v=A.bits,g=A.lencode,u=A.distcode,d=(1<<A.lenbits)-1,w=(1<<A.distbits)-1;e:do{v<15&&(m+=x[i++]<<v,v+=8,m+=x[i++]<<v,v+=8),_=g[m&d];t:for(;;){if(b=_>>>24,m>>>=b,v-=b,b=_>>>16&255,b===0)E[s++]=_&65535;else if(b&16){S=_&65535,b&=15,b&&(v<b&&(m+=x[i++]<<v,v+=8),S+=m&(1<<b)-1,m>>>=b,v-=b),v<15&&(m+=x[i++]<<v,v+=8,m+=x[i++]<<v,v+=8),_=u[m&w];n:for(;;){if(b=_>>>24,m>>>=b,v-=b,b=_>>>16&255,b&16){if(M=_&65535,b&=15,v<b&&(m+=x[i++]<<v,v+=8,v<b&&(m+=x[i++]<<v,v+=8)),M+=m&(1<<b)-1,M>c){e.msg="invalid distance too far back",A.mode=ra;break e}if(m>>>=b,v-=b,b=s-a,M>b){if(b=M-b,b>f&&A.sane){e.msg="invalid distance too far back",A.mode=ra;break e}if(y=0,T=h,p===0){if(y+=l-b,b<S){S-=b;do E[s++]=h[y++];while(--b);y=s-M,T=E}}else if(p<b){if(y+=l+p-b,b-=p,b<S){S-=b;do E[s++]=h[y++];while(--b);if(y=0,p<S){b=p,S-=b;do E[s++]=h[y++];while(--b);y=s-M,T=E}}}else if(y+=p-b,b<S){S-=b;do E[s++]=h[y++];while(--b);y=s-M,T=E}for(;S>2;)E[s++]=T[y++],E[s++]=T[y++],E[s++]=T[y++],S-=3;S&&(E[s++]=T[y++],S>1&&(E[s++]=T[y++]))}else{y=s-M;do E[s++]=E[y++],E[s++]=E[y++],E[s++]=E[y++],S-=3;while(S>2);S&&(E[s++]=E[y++],S>1&&(E[s++]=E[y++]))}}else if(b&64){e.msg="invalid distance code",A.mode=ra;break e}else{_=u[(_&65535)+(m&(1<<b)-1)];continue n}break}}else if(b&64)if(b&32){A.mode=Xw;break e}else{e.msg="invalid literal/length code",A.mode=ra;break e}else{_=g[(_&65535)+(m&(1<<b)-1)];continue t}break}}while(i<r&&s<o);S=v>>3,i-=S,v-=S<<3,m&=(1<<v)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),A.hold=m,A.bits=v};const fr=15,Nf=852,kf=592,Of=0,Uo=1,Bf=2,Yw=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Zw=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),$w=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),jw=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Kw=(n,e,t,i,r,s,a,o)=>{const c=o.bits;let l=0,f=0,p=0,h=0,m=0,v=0,g=0,u=0,d=0,w=0,_,b,S,M,y,T=null,x;const E=new Uint16Array(fr+1),A=new Uint16Array(fr+1);let H=null,U,I,P;for(l=0;l<=fr;l++)E[l]=0;for(f=0;f<i;f++)E[e[t+f]]++;for(m=c,h=fr;h>=1&&E[h]===0;h--);if(m>h&&(m=h),h===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(p=1;p<h&&E[p]===0;p++);for(m<p&&(m=p),u=1,l=1;l<=fr;l++)if(u<<=1,u-=E[l],u<0)return-1;if(u>0&&(n===Of||h!==1))return-1;for(A[1]=0,l=1;l<fr;l++)A[l+1]=A[l]+E[l];for(f=0;f<i;f++)e[t+f]!==0&&(a[A[e[t+f]]++]=f);if(n===Of?(T=H=a,x=20):n===Uo?(T=Yw,H=Zw,x=257):(T=$w,H=jw,x=0),w=0,f=0,l=p,y=s,v=m,g=0,S=-1,d=1<<m,M=d-1,n===Uo&&d>Nf||n===Bf&&d>kf)return 1;for(;;){U=l-g,a[f]+1<x?(I=0,P=a[f]):a[f]>=x?(I=H[a[f]-x],P=T[a[f]-x]):(I=32+64,P=0),_=1<<l-g,b=1<<v,p=b;do b-=_,r[y+(w>>g)+b]=U<<24|I<<16|P|0;while(b!==0);for(_=1<<l-1;w&_;)_>>=1;if(_!==0?(w&=_-1,w+=_):w=0,f++,--E[l]===0){if(l===h)break;l=e[t+a[f]]}if(l>m&&(w&M)!==S){for(g===0&&(g=m),y+=p,v=l-g,u=1<<v;v+g<h&&(u-=E[v+g],!(u<=0));)v++,u<<=1;if(d+=1<<v,n===Uo&&d>Nf||n===Bf&&d>kf)return 1;S=w&M,r[S]=m<<24|v<<16|y-s|0}}return w!==0&&(r[y+w]=l-g<<24|64<<16|0),o.bits=m,0};var ns=Kw;const Jw=0,vh=1,wh=2,{Z_FINISH:zf,Z_BLOCK:Qw,Z_TREES:sa,Z_OK:Vi,Z_STREAM_END:eb,Z_NEED_DICT:tb,Z_STREAM_ERROR:an,Z_DATA_ERROR:bh,Z_MEM_ERROR:Sh,Z_BUF_ERROR:nb,Z_DEFLATED:Gf}=Ms,za=16180,Hf=16181,Vf=16182,Wf=16183,Xf=16184,qf=16185,Yf=16186,Zf=16187,$f=16188,jf=16189,Aa=16190,Gn=16191,Po=16192,Kf=16193,Io=16194,Jf=16195,Qf=16196,ed=16197,td=16198,aa=16199,oa=16200,nd=16201,id=16202,rd=16203,sd=16204,ad=16205,Fo=16206,od=16207,ld=16208,it=16209,Eh=16210,yh=16211,ib=852,rb=592,sb=15,ab=sb,cd=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function ob(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Xi=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<za||e.mode>yh?1:0},Mh=n=>{if(Xi(n))return an;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=za,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(ib),e.distcode=e.distdyn=new Int32Array(rb),e.sane=1,e.back=-1,Vi},Th=n=>{if(Xi(n))return an;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,Mh(n)},Ah=(n,e)=>{let t;if(Xi(n))return an;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?an:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,Th(n))},Rh=(n,e)=>{if(!n)return an;const t=new ob;n.state=t,t.strm=n,t.window=null,t.mode=za;const i=Ah(n,e);return i!==Vi&&(n.state=null),i},lb=n=>Rh(n,ab);let fd=!0,No,ko;const cb=n=>{if(fd){No=new Int32Array(512),ko=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(ns(vh,n.lens,0,288,No,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;ns(wh,n.lens,0,32,ko,0,n.work,{bits:5}),fd=!1}n.lencode=No,n.lenbits=9,n.distcode=ko,n.distbits=5},Ch=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},fb=(n,e)=>{let t,i,r,s,a,o,c,l,f,p,h,m,v,g,u=0,d,w,_,b,S,M,y,T;const x=new Uint8Array(4);let E,A;const H=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Xi(n)||!n.output||!n.input&&n.avail_in!==0)return an;t=n.state,t.mode===Gn&&(t.mode=Po),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,f=t.bits,p=o,h=c,T=Vi;e:for(;;)switch(t.mode){case za:if(t.wrap===0){t.mode=Po;break}for(;f<16;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,x[0]=l&255,x[1]=l>>>8&255,t.check=_t(t.check,x,2,0),l=0,f=0,t.mode=Hf;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=it;break}if((l&15)!==Gf){n.msg="unknown compression method",t.mode=it;break}if(l>>>=4,f-=4,y=(l&15)+8,t.wbits===0&&(t.wbits=y),y>15||y>t.wbits){n.msg="invalid window size",t.mode=it;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?jf:Gn,l=0,f=0;break;case Hf:for(;f<16;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if(t.flags=l,(t.flags&255)!==Gf){n.msg="unknown compression method",t.mode=it;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=it;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=_t(t.check,x,2,0)),l=0,f=0,t.mode=Vf;case Vf:for(;f<32;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,x[2]=l>>>16&255,x[3]=l>>>24&255,t.check=_t(t.check,x,4,0)),l=0,f=0,t.mode=Wf;case Wf:for(;f<16;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=_t(t.check,x,2,0)),l=0,f=0,t.mode=Xf;case Xf:if(t.flags&1024){for(;f<16;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=_t(t.check,x,2,0)),l=0,f=0}else t.head&&(t.head.extra=null);t.mode=qf;case qf:if(t.flags&1024&&(m=t.length,m>o&&(m=o),m&&(t.head&&(y=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+m),y)),t.flags&512&&t.wrap&4&&(t.check=_t(t.check,i,m,s)),o-=m,s+=m,t.length-=m),t.length))break e;t.length=0,t.mode=Yf;case Yf:if(t.flags&2048){if(o===0)break e;m=0;do y=i[s+m++],t.head&&y&&t.length<65536&&(t.head.name+=String.fromCharCode(y));while(y&&m<o);if(t.flags&512&&t.wrap&4&&(t.check=_t(t.check,i,m,s)),o-=m,s+=m,y)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Zf;case Zf:if(t.flags&4096){if(o===0)break e;m=0;do y=i[s+m++],t.head&&y&&t.length<65536&&(t.head.comment+=String.fromCharCode(y));while(y&&m<o);if(t.flags&512&&t.wrap&4&&(t.check=_t(t.check,i,m,s)),o-=m,s+=m,y)break e}else t.head&&(t.head.comment=null);t.mode=$f;case $f:if(t.flags&512){for(;f<16;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=it;break}l=0,f=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=Gn;break;case jf:for(;f<32;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}n.adler=t.check=cd(l),l=0,f=0,t.mode=Aa;case Aa:if(t.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=f,tb;n.adler=t.check=1,t.mode=Gn;case Gn:if(e===Qw||e===sa)break e;case Po:if(t.last){l>>>=f&7,f-=f&7,t.mode=Fo;break}for(;f<3;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}switch(t.last=l&1,l>>>=1,f-=1,l&3){case 0:t.mode=Kf;break;case 1:if(cb(t),t.mode=aa,e===sa){l>>>=2,f-=2;break e}break;case 2:t.mode=Qf;break;case 3:n.msg="invalid block type",t.mode=it}l>>>=2,f-=2;break;case Kf:for(l>>>=f&7,f-=f&7;f<32;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=it;break}if(t.length=l&65535,l=0,f=0,t.mode=Io,e===sa)break e;case Io:t.mode=Jf;case Jf:if(m=t.length,m){if(m>o&&(m=o),m>c&&(m=c),m===0)break e;r.set(i.subarray(s,s+m),a),o-=m,s+=m,c-=m,a+=m,t.length-=m;break}t.mode=Gn;break;case Qf:for(;f<14;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if(t.nlen=(l&31)+257,l>>>=5,f-=5,t.ndist=(l&31)+1,l>>>=5,f-=5,t.ncode=(l&15)+4,l>>>=4,f-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=it;break}t.have=0,t.mode=ed;case ed:for(;t.have<t.ncode;){for(;f<3;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}t.lens[H[t.have++]]=l&7,l>>>=3,f-=3}for(;t.have<19;)t.lens[H[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,E={bits:t.lenbits},T=ns(Jw,t.lens,0,19,t.lencode,0,t.work,E),t.lenbits=E.bits,T){n.msg="invalid code lengths set",t.mode=it;break}t.have=0,t.mode=td;case td:for(;t.have<t.nlen+t.ndist;){for(;u=t.lencode[l&(1<<t.lenbits)-1],d=u>>>24,w=u>>>16&255,_=u&65535,!(d<=f);){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if(_<16)l>>>=d,f-=d,t.lens[t.have++]=_;else{if(_===16){for(A=d+2;f<A;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if(l>>>=d,f-=d,t.have===0){n.msg="invalid bit length repeat",t.mode=it;break}y=t.lens[t.have-1],m=3+(l&3),l>>>=2,f-=2}else if(_===17){for(A=d+3;f<A;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}l>>>=d,f-=d,y=0,m=3+(l&7),l>>>=3,f-=3}else{for(A=d+7;f<A;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}l>>>=d,f-=d,y=0,m=11+(l&127),l>>>=7,f-=7}if(t.have+m>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=it;break}for(;m--;)t.lens[t.have++]=y}}if(t.mode===it)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=it;break}if(t.lenbits=9,E={bits:t.lenbits},T=ns(vh,t.lens,0,t.nlen,t.lencode,0,t.work,E),t.lenbits=E.bits,T){n.msg="invalid literal/lengths set",t.mode=it;break}if(t.distbits=6,t.distcode=t.distdyn,E={bits:t.distbits},T=ns(wh,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,E),t.distbits=E.bits,T){n.msg="invalid distances set",t.mode=it;break}if(t.mode=aa,e===sa)break e;case aa:t.mode=oa;case oa:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=f,qw(n,h),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,f=t.bits,t.mode===Gn&&(t.back=-1);break}for(t.back=0;u=t.lencode[l&(1<<t.lenbits)-1],d=u>>>24,w=u>>>16&255,_=u&65535,!(d<=f);){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if(w&&!(w&240)){for(b=d,S=w,M=_;u=t.lencode[M+((l&(1<<b+S)-1)>>b)],d=u>>>24,w=u>>>16&255,_=u&65535,!(b+d<=f);){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}l>>>=b,f-=b,t.back+=b}if(l>>>=d,f-=d,t.back+=d,t.length=_,w===0){t.mode=ad;break}if(w&32){t.back=-1,t.mode=Gn;break}if(w&64){n.msg="invalid literal/length code",t.mode=it;break}t.extra=w&15,t.mode=nd;case nd:if(t.extra){for(A=t.extra;f<A;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,f-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=id;case id:for(;u=t.distcode[l&(1<<t.distbits)-1],d=u>>>24,w=u>>>16&255,_=u&65535,!(d<=f);){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if(!(w&240)){for(b=d,S=w,M=_;u=t.distcode[M+((l&(1<<b+S)-1)>>b)],d=u>>>24,w=u>>>16&255,_=u&65535,!(b+d<=f);){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}l>>>=b,f-=b,t.back+=b}if(l>>>=d,f-=d,t.back+=d,w&64){n.msg="invalid distance code",t.mode=it;break}t.offset=_,t.extra=w&15,t.mode=rd;case rd:if(t.extra){for(A=t.extra;f<A;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,f-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=it;break}t.mode=sd;case sd:if(c===0)break e;if(m=h-c,t.offset>m){if(m=t.offset-m,m>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=it;break}m>t.wnext?(m-=t.wnext,v=t.wsize-m):v=t.wnext-m,m>t.length&&(m=t.length),g=t.window}else g=r,v=a-t.offset,m=t.length;m>c&&(m=c),c-=m,t.length-=m;do r[a++]=g[v++];while(--m);t.length===0&&(t.mode=oa);break;case ad:if(c===0)break e;r[a++]=t.length,c--,t.mode=oa;break;case Fo:if(t.wrap){for(;f<32;){if(o===0)break e;o--,l|=i[s++]<<f,f+=8}if(h-=c,n.total_out+=h,t.total+=h,t.wrap&4&&h&&(n.adler=t.check=t.flags?_t(t.check,r,h,a-h):cs(t.check,r,h,a-h)),h=c,t.wrap&4&&(t.flags?l:cd(l))!==t.check){n.msg="incorrect data check",t.mode=it;break}l=0,f=0}t.mode=od;case od:if(t.wrap&&t.flags){for(;f<32;){if(o===0)break e;o--,l+=i[s++]<<f,f+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=it;break}l=0,f=0}t.mode=ld;case ld:T=eb;break e;case it:T=bh;break e;case Eh:return Sh;case yh:default:return an}return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=f,(t.wsize||h!==n.avail_out&&t.mode<it&&(t.mode<Fo||e!==zf))&&Ch(n,n.output,n.next_out,h-n.avail_out),p-=n.avail_in,h-=n.avail_out,n.total_in+=p,n.total_out+=h,t.total+=h,t.wrap&4&&h&&(n.adler=t.check=t.flags?_t(t.check,r,h,n.next_out-h):cs(t.check,r,h,n.next_out-h)),n.data_type=t.bits+(t.last?64:0)+(t.mode===Gn?128:0)+(t.mode===aa||t.mode===Io?256:0),(p===0&&h===0||e===zf)&&T===Vi&&(T=nb),T},db=n=>{if(Xi(n))return an;let e=n.state;return e.window&&(e.window=null),n.state=null,Vi},ub=(n,e)=>{if(Xi(n))return an;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,Vi):an},hb=(n,e)=>{const t=e.length;let i,r,s;return Xi(n)||(i=n.state,i.wrap!==0&&i.mode!==Aa)?an:i.mode===Aa&&(r=1,r=cs(r,e,t,0),r!==i.check)?bh:(s=Ch(n,e,t,t),s?(i.mode=Eh,Sh):(i.havedict=1,Vi))};var pb=Th,mb=Ah,_b=Mh,gb=lb,xb=Rh,vb=fb,wb=db,bb=ub,Sb=hb,Eb="pako inflate (from Nodeca project)",Wn={inflateReset:pb,inflateReset2:mb,inflateResetKeep:_b,inflateInit:gb,inflateInit2:xb,inflate:vb,inflateEnd:wb,inflateGetHeader:bb,inflateSetDictionary:Sb,inflateInfo:Eb};function yb(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Mb=yb;const Lh=Object.prototype.toString,{Z_NO_FLUSH:Tb,Z_FINISH:Ab,Z_OK:us,Z_STREAM_END:Oo,Z_NEED_DICT:Bo,Z_STREAM_ERROR:Rb,Z_DATA_ERROR:dd,Z_MEM_ERROR:Cb}=Ms;function Zl(n){this.options=Ba.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new gh,this.strm.avail_out=0;let t=Wn.inflateInit2(this.strm,e.windowBits);if(t!==us)throw new Error(Rr[t]);if(this.header=new Mb,Wn.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=ds.string2buf(e.dictionary):Lh.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=Wn.inflateSetDictionary(this.strm,e.dictionary),t!==us)))throw new Error(Rr[t])}Zl.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?Ab:Tb,Lh.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=Wn.inflate(t,a),s===Bo&&r&&(s=Wn.inflateSetDictionary(t,r),s===us?s=Wn.inflate(t,a):s===dd&&(s=Bo));t.avail_in>0&&s===Oo&&t.state.wrap>0&&n[t.next_in]!==0;)Wn.inflateReset(t),s=Wn.inflate(t,a);switch(s){case Rb:case dd:case Bo:case Cb:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===Oo))if(this.options.to==="string"){let c=ds.utf8border(t.output,t.next_out),l=t.next_out-c,f=ds.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(f)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===us&&o===0)){if(s===Oo)return s=Wn.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Zl.prototype.onData=function(n){this.chunks.push(n)};Zl.prototype.onEnd=function(n){n===us&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Ba.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};const{Deflate:yy,deflate:Lb,deflateRaw:My,gzip:Ty}=Ww;var Db=Lb;function Ub(n,e,t){return Math.max(e,Math.min(t,n))}const la=Pb();function Pb(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,f=0;for(;!(l&8388608);)l<<=1,f-=8388608;l&=-8388609,f+=947912704,s[c]=l|f}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function zo(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Ub(n,-65504,65504),la.floatView[0]=n;const e=la.uint32View[0],t=e>>23&511;return la.baseTable[t]+((e&8388607)>>la.shiftTable[t])}const Dh={RGBA8:4,BGRA8:4,RGBA16:8,RGBA16F:8,RGB32F:12,RGBA32F:16},Ib={RGBA8:0,BGRA8:12,RGBA16F:24,RGBA16:25,RGB32F:28,RGBA32F:29};function Fb(n,e){const t=Dh[e],i=new ArrayBuffer(t*n.length/4),r=new Uint8ClampedArray(i),s=new DataView(i);switch(e){case"RGBA8":for(let a=0;a<n.length;a++)r[a]=n[a]*255;break;case"BGRA8":for(let a=0;a<n.length;a+=4){const o=Math.max(n[a],n[a+1],n[a+2]),c=Math.ceil(o*255/16)/255*16;r[a]=Math.round(n[a+2]/c*255),r[a+1]=Math.round(n[a+1]/c*255),r[a+2]=Math.round(n[a]/c*255),r[a+3]=Math.round(c/16*255)}break;case"RGBA16":for(let a=0;a<n.length;a++)s.setUint16(a*2,n[a]*65535,!0);break;case"RGBA16F":for(let a=0;a<n.length;a+=4)s.setUint16(a*2,zo(n[a]),!0),s.setUint16(a*2+2,zo(n[a+1]),!0),s.setUint16(a*2+4,zo(n[a+2]),!0),s.setUint16(a*2+6,15360,!0);break;case"RGB32F":for(let a=0;a<n.length;a+=4)s.setFloat32(a*3,n[a],!0),s.setFloat32(a*3+4,n[a+1],!0),s.setFloat32(a*3+8,n[a+2],!0);break;case"RGBA32F":for(let a=0;a<n.length;a++)s.setFloat32(a*4,n[a],!0);break}return new Uint8Array(i)}function Nb(n,e){return Db(n,{level:e})}function kb(n,e,t){return n.set_endian(!0),n.write_str("VTF\0",4),n.write_u32(7),n.write_u32(e.version),n.write_u32(80+t*8),n.write_u16(e.size),n.write_u16(e.size),n.write_u32(782),n.write_u16(1),n.write_u16(0),n.pad(4),n.write_f32(new Float32Array([0,0,0])),n.pad(4),n.write_f32(1),n.write_u32(Ib[e.format]),n.write_u8(e.mipmaps),n.write_u32(13),n.write_u8(0),n.write_u8(0),n.write_u16(1),n.pad(3),n.write_u32(t),n.pad(8),n.buffer}function Ob(n,e){const t=new $u(n.length*4+8);t.write_u32(t.length-4,!0),t.write_i32(e,!0);for(let i=0;i<n.length;i++)t.write_u32(n[i].length,!0);return t.buffer}function Go(n,e,t,i){n.write_str(e,3),n.write_u8(i),n.write_u32(t)}function Bb(n,e){const t=e.version>=6&&e.compress,i=t?3:2,r=[],s=80+i*8,a=new $u(s);r.push(a.buffer),kb(a,e,i),Go(a,"\0\0",0,2),Go(a,"0\0\0",s,0);const o=s+n.length;if(r.push(n),t){Go(a,"AXC",o,0);const c=Ob([n],e.compression_level);r.push(c)}return new Blob(r)}const Ho=["front","left","back","right","up","down"];function zb(n,e,t,i,r){let s=Fb(n,t);return i&&(s=Nb(s,r)),Bb(s,{compress:i,compression_level:r,format:t,mipmaps:1,size:e,version:i?6:4})}async function Gb(n,e,t,i,r,s){return new Promise(a=>{const o={};let c=0;const l=()=>{const f=Ho[c];o[f]=zb(n[f],e,t,i,r),c+=1,s==null||s(c/Ho.length),c>=Ho.length?a(o):setTimeout(l,20)};setTimeout(l,20)})}const hs=15,Sl=30,El=19,Hb=29,Ra=256,$l=Ra+1+Hb,ud=2*$l+1,Vr=256,Vb=7,hd=16,pd=17,md=18,Vo=8*2,Ca=-1,Wb=1,ca=2,Xb=0,mr=0,_d=1,qb=3,It=4,hn=0,Uh=1,fa=2,mn=-2,Yb=-3,dr=-5;function Ga(n){return Ha(n.map(([e,t])=>new Array(e).fill(t,0,e)))}function Ha(n){return n.reduce((e,t)=>e.concat(Array.isArray(t)?Ha(t):t),[])}const gd=[0,1,2,3].concat(...Ga([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function et(){const n=this;function e(r){const s=n.dyn_tree,a=n.stat_desc.static_tree,o=n.stat_desc.extra_bits,c=n.stat_desc.extra_base,l=n.stat_desc.max_length;let f,p,h,m,v,g,u=0;for(m=0;m<=hs;m++)r.bl_count[m]=0;for(s[r.heap[r.heap_max]*2+1]=0,f=r.heap_max+1;f<ud;f++)p=r.heap[f],m=s[s[p*2+1]*2+1]+1,m>l&&(m=l,u++),s[p*2+1]=m,!(p>n.max_code)&&(r.bl_count[m]++,v=0,p>=c&&(v=o[p-c]),g=s[p*2],r.opt_len+=g*(m+v),a&&(r.static_len+=g*(a[p*2+1]+v)));if(u!==0){do{for(m=l-1;r.bl_count[m]===0;)m--;r.bl_count[m]--,r.bl_count[m+1]+=2,r.bl_count[l]--,u-=2}while(u>0);for(m=l;m!==0;m--)for(p=r.bl_count[m];p!==0;)h=r.heap[--f],!(h>n.max_code)&&(s[h*2+1]!=m&&(r.opt_len+=(m-s[h*2+1])*s[h*2],s[h*2+1]=m),p--)}}function t(r,s){let a=0;do a|=r&1,r>>>=1,a<<=1;while(--s>0);return a>>>1}function i(r,s,a){const o=[];let c=0,l,f,p;for(l=1;l<=hs;l++)o[l]=c=c+a[l-1]<<1;for(f=0;f<=s;f++)p=r[f*2+1],p!==0&&(r[f*2]=t(o[p]++,p))}n.build_tree=function(r){const s=n.dyn_tree,a=n.stat_desc.static_tree,o=n.stat_desc.elems;let c,l,f=-1,p;for(r.heap_len=0,r.heap_max=ud,c=0;c<o;c++)s[c*2]!==0?(r.heap[++r.heap_len]=f=c,r.depth[c]=0):s[c*2+1]=0;for(;r.heap_len<2;)p=r.heap[++r.heap_len]=f<2?++f:0,s[p*2]=1,r.depth[p]=0,r.opt_len--,a&&(r.static_len-=a[p*2+1]);for(n.max_code=f,c=Math.floor(r.heap_len/2);c>=1;c--)r.pqdownheap(s,c);p=o;do c=r.heap[1],r.heap[1]=r.heap[r.heap_len--],r.pqdownheap(s,1),l=r.heap[1],r.heap[--r.heap_max]=c,r.heap[--r.heap_max]=l,s[p*2]=s[c*2]+s[l*2],r.depth[p]=Math.max(r.depth[c],r.depth[l])+1,s[c*2+1]=s[l*2+1]=p,r.heap[1]=p++,r.pqdownheap(s,1);while(r.heap_len>=2);r.heap[--r.heap_max]=r.heap[1],e(r),i(s,n.max_code,r.bl_count)}}et._length_code=[0,1,2,3,4,5,6,7].concat(...Ga([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]]));et.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];et.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];et.d_code=function(n){return n<256?gd[n]:gd[256+(n>>>7)]};et.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];et.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];et.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];et.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function wt(n,e,t,i,r){const s=this;s.static_tree=n,s.extra_bits=e,s.extra_base=t,s.elems=i,s.max_length=r}const Zb=[12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227],$b=Ga([[144,8],[112,9],[24,7],[8,8]]);wt.static_ltree=Ha(Zb.map((n,e)=>[n,$b[e]]));const jb=[0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23],Kb=Ga([[30,5]]);wt.static_dtree=Ha(jb.map((n,e)=>[n,Kb[e]]));wt.static_l_desc=new wt(wt.static_ltree,et.extra_lbits,Ra+1,$l,hs);wt.static_d_desc=new wt(wt.static_dtree,et.extra_dbits,0,Sl,hs);wt.static_bl_desc=new wt(null,et.extra_blbits,0,El,Vb);const Jb=9,Qb=8;function wn(n,e,t,i,r){const s=this;s.good_length=n,s.max_lazy=e,s.nice_length=t,s.max_chain=i,s.func=r}const Ph=0,ba=1,Di=2,un=[new wn(0,0,0,0,Ph),new wn(4,4,8,4,ba),new wn(4,5,16,8,ba),new wn(4,6,32,32,ba),new wn(4,4,16,16,Di),new wn(8,16,32,32,Di),new wn(8,16,128,128,Di),new wn(8,32,128,256,Di),new wn(32,128,258,1024,Di),new wn(32,258,258,4096,Di)],da=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],nn=0,ua=1,Wr=2,ha=3,eS=32,Wo=42,pa=113,Xr=666,Xo=8,tS=0,qo=1,nS=2,rt=3,Sa=258,qt=Sa+rt+1;function xd(n,e,t,i){const r=n[e*2],s=n[t*2];return r<s||r==s&&i[e]<=i[t]}function iS(){const n=this;let e,t,i,r,s,a,o,c,l,f,p,h,m,v,g,u,d,w,_,b,S,M,y,T,x,E,A,H,U,I,P,X,F;const O=new et,Q=new et,q=new et;n.depth=[];let ce,N,$,ie,fe,le;n.bl_count=[],n.heap=[],P=[],X=[],F=[];function xe(){l=2*s,p[m-1]=0;for(let k=0;k<m-1;k++)p[k]=0;E=un[A].max_lazy,U=un[A].good_length,I=un[A].nice_length,x=un[A].max_chain,S=0,d=0,y=0,w=T=rt-1,b=0,h=0}function Te(){let k;for(k=0;k<$l;k++)P[k*2]=0;for(k=0;k<Sl;k++)X[k*2]=0;for(k=0;k<El;k++)F[k*2]=0;P[Vr*2]=1,n.opt_len=n.static_len=0,N=$=0}function be(){O.dyn_tree=P,O.stat_desc=wt.static_l_desc,Q.dyn_tree=X,Q.stat_desc=wt.static_d_desc,q.dyn_tree=F,q.stat_desc=wt.static_bl_desc,fe=0,le=0,ie=8,Te()}n.pqdownheap=function(k,V){const z=n.heap,j=z[V];let se=V<<1;for(;se<=n.heap_len&&(se<n.heap_len&&xd(k,z[se+1],z[se],n.depth)&&se++,!xd(k,j,z[se],n.depth));)z[V]=z[se],V=se,se<<=1;z[V]=j};function Ne(k,V){let z=-1,j,se=k[0*2+1],D=0,ne=7,W=4;se===0&&(ne=138,W=3),k[(V+1)*2+1]=65535;for(let ae=0;ae<=V;ae++)j=se,se=k[(ae+1)*2+1],!(++D<ne&&j==se)&&(D<W?F[j*2]+=D:j!==0?(j!=z&&F[j*2]++,F[hd*2]++):D<=10?F[pd*2]++:F[md*2]++,D=0,z=j,se===0?(ne=138,W=3):j==se?(ne=6,W=3):(ne=7,W=4))}function Me(){let k;for(Ne(P,O.max_code),Ne(X,Q.max_code),q.build_tree(n),k=El-1;k>=3&&F[et.bl_order[k]*2+1]===0;k--);return n.opt_len+=3*(k+1)+5+5+4,k}function B(k){n.pending_buf[n.pending++]=k}function Ye(k){B(k&255),B(k>>>8&255)}function ge(k){B(k>>8&255),B(k&255&255)}function ve(k,V){let z;const j=V;le>Vo-j?(z=k,fe|=z<<le&65535,Ye(fe),fe=z>>>Vo-le,le+=j-Vo):(fe|=k<<le&65535,le+=j)}function _e(k,V){const z=k*2;ve(V[z]&65535,V[z+1]&65535)}function He(k,V){let z,j=-1,se,D=k[0*2+1],ne=0,W=7,ae=4;for(D===0&&(W=138,ae=3),z=0;z<=V;z++)if(se=D,D=k[(z+1)*2+1],!(++ne<W&&se==D)){if(ne<ae)do _e(se,F);while(--ne!==0);else se!==0?(se!=j&&(_e(se,F),ne--),_e(hd,F),ve(ne-3,2)):ne<=10?(_e(pd,F),ve(ne-3,3)):(_e(md,F),ve(ne-11,7));ne=0,j=se,D===0?(W=138,ae=3):se==D?(W=6,ae=3):(W=7,ae=4)}}function Ae(k,V,z){let j;for(ve(k-257,5),ve(V-1,5),ve(z-4,4),j=0;j<z;j++)ve(F[et.bl_order[j]*2+1],3);He(P,k-1),He(X,V-1)}function Re(){le==16?(Ye(fe),fe=0,le=0):le>=8&&(B(fe&255),fe>>>=8,le-=8)}function We(){ve(qo<<1,3),_e(Vr,wt.static_ltree),Re(),1+ie+10-le<9&&(ve(qo<<1,3),_e(Vr,wt.static_ltree),Re()),ie=7}function je(k,V){let z,j,se;if(n.dist_buf[N]=k,n.lc_buf[N]=V&255,N++,k===0?P[V*2]++:($++,k--,P[(et._length_code[V]+Ra+1)*2]++,X[et.d_code(k)*2]++),!(N&8191)&&A>2){for(z=N*8,j=S-d,se=0;se<Sl;se++)z+=X[se*2]*(5+et.extra_dbits[se]);if(z>>>=3,$<Math.floor(N/2)&&z<Math.floor(j/2))return!0}return N==ce-1}function ft(k,V){let z,j,se=0,D,ne;if(N!==0)do z=n.dist_buf[se],j=n.lc_buf[se],se++,z===0?_e(j,k):(D=et._length_code[j],_e(D+Ra+1,k),ne=et.extra_lbits[D],ne!==0&&(j-=et.base_length[D],ve(j,ne)),z--,D=et.d_code(z),_e(D,V),ne=et.extra_dbits[D],ne!==0&&(z-=et.base_dist[D],ve(z,ne)));while(se<N);_e(Vr,k),ie=k[Vr*2+1]}function L(){le>8?Ye(fe):le>0&&B(fe&255),fe=0,le=0}function R(k,V,z){L(),ie=8,z&&(Ye(V),Ye(~V)),n.pending_buf.set(c.subarray(k,k+V),n.pending),n.pending+=V}function K(k,V,z){ve((tS<<1)+(z?1:0),3),R(k,V,!0)}function oe(k,V,z){let j,se,D=0;A>0?(O.build_tree(n),Q.build_tree(n),D=Me(),j=n.opt_len+3+7>>>3,se=n.static_len+3+7>>>3,se<=j&&(j=se)):j=se=V+5,V+4<=j&&k!=-1?K(k,V,z):se==j?(ve((qo<<1)+(z?1:0),3),ft(wt.static_ltree,wt.static_dtree)):(ve((nS<<1)+(z?1:0),3),Ae(O.max_code+1,Q.max_code+1,D+1),ft(P,X)),Te(),z&&L()}function re(k){oe(d>=0?d:-1,S-d,k),d=S,e.flush_pending()}function ue(){let k,V,z,j;do{if(j=l-y-S,j===0&&S===0&&y===0)j=s;else if(j==-1)j--;else if(S>=s+s-qt){c.set(c.subarray(s,s+s),0),M-=s,S-=s,d-=s,k=m,z=k;do V=p[--z]&65535,p[z]=V>=s?V-s:0;while(--k!==0);k=s,z=k;do V=f[--z]&65535,f[z]=V>=s?V-s:0;while(--k!==0);j+=s}if(e.avail_in===0)return;k=e.read_buf(c,S+y,j),y+=k,y>=rt&&(h=c[S]&255,h=(h<<u^c[S+1]&255)&g)}while(y<qt&&e.avail_in!==0)}function we(k){let V=65535,z;for(V>i-5&&(V=i-5);;){if(y<=1){if(ue(),y===0&&k==mr)return nn;if(y===0)break}if(S+=y,y=0,z=d+V,(S===0||S>=z)&&(y=S-z,S=z,re(!1),e.avail_out===0)||S-d>=s-qt&&(re(!1),e.avail_out===0))return nn}return re(k==It),e.avail_out===0?k==It?Wr:nn:k==It?ha:ua}function pe(k){let V=x,z=S,j,se,D=T;const ne=S>s-qt?S-(s-qt):0;let W=I;const ae=o,he=S+Sa;let Oe=c[z+D-1],Ke=c[z+D];T>=U&&(V>>=2),W>y&&(W=y);do if(j=k,!(c[j+D]!=Ke||c[j+D-1]!=Oe||c[j]!=c[z]||c[++j]!=c[z+1])){z+=2,j++;do;while(c[++z]==c[++j]&&c[++z]==c[++j]&&c[++z]==c[++j]&&c[++z]==c[++j]&&c[++z]==c[++j]&&c[++z]==c[++j]&&c[++z]==c[++j]&&c[++z]==c[++j]&&z<he);if(se=Sa-(he-z),z=he-Sa,se>D){if(M=k,D=se,se>=W)break;Oe=c[z+D-1],Ke=c[z+D]}}while((k=f[k&ae]&65535)>ne&&--V!==0);return D<=y?D:y}function te(k){let V=0,z;for(;;){if(y<qt){if(ue(),y<qt&&k==mr)return nn;if(y===0)break}if(y>=rt&&(h=(h<<u^c[S+(rt-1)]&255)&g,V=p[h]&65535,f[S&o]=p[h],p[h]=S),V!==0&&(S-V&65535)<=s-qt&&H!=ca&&(w=pe(V)),w>=rt)if(z=je(S-M,w-rt),y-=w,w<=E&&y>=rt){w--;do S++,h=(h<<u^c[S+(rt-1)]&255)&g,V=p[h]&65535,f[S&o]=p[h],p[h]=S;while(--w!==0);S++}else S+=w,w=0,h=c[S]&255,h=(h<<u^c[S+1]&255)&g;else z=je(0,c[S]&255),y--,S++;if(z&&(re(!1),e.avail_out===0))return nn}return re(k==It),e.avail_out===0?k==It?Wr:nn:k==It?ha:ua}function Se(k){let V=0,z,j;for(;;){if(y<qt){if(ue(),y<qt&&k==mr)return nn;if(y===0)break}if(y>=rt&&(h=(h<<u^c[S+(rt-1)]&255)&g,V=p[h]&65535,f[S&o]=p[h],p[h]=S),T=w,_=M,w=rt-1,V!==0&&T<E&&(S-V&65535)<=s-qt&&(H!=ca&&(w=pe(V)),w<=5&&(H==Wb||w==rt&&S-M>4096)&&(w=rt-1)),T>=rt&&w<=T){j=S+y-rt,z=je(S-1-_,T-rt),y-=T-1,T-=2;do++S<=j&&(h=(h<<u^c[S+(rt-1)]&255)&g,V=p[h]&65535,f[S&o]=p[h],p[h]=S);while(--T!==0);if(b=0,w=rt-1,S++,z&&(re(!1),e.avail_out===0))return nn}else if(b!==0){if(z=je(0,c[S-1]&255),z&&re(!1),S++,y--,e.avail_out===0)return nn}else b=1,S++,y--}return b!==0&&(z=je(0,c[S-1]&255),b=0),re(k==It),e.avail_out===0?k==It?Wr:nn:k==It?ha:ua}function Ee(k){return k.total_in=k.total_out=0,k.msg=null,n.pending=0,n.pending_out=0,t=pa,r=mr,be(),xe(),hn}n.deflateInit=function(k,V,z,j,se,D){return j||(j=Xo),se||(se=Qb),D||(D=Xb),k.msg=null,V==Ca&&(V=6),se<1||se>Jb||j!=Xo||z<9||z>15||V<0||V>9||D<0||D>ca?mn:(k.dstate=n,a=z,s=1<<a,o=s-1,v=se+7,m=1<<v,g=m-1,u=Math.floor((v+rt-1)/rt),c=new Uint8Array(s*2),f=[],p=[],ce=1<<se+6,n.pending_buf=new Uint8Array(ce*4),i=ce*4,n.dist_buf=new Uint16Array(ce),n.lc_buf=new Uint8Array(ce),A=V,H=D,Ee(k))},n.deflateEnd=function(){return t!=Wo&&t!=pa&&t!=Xr?mn:(n.lc_buf=null,n.dist_buf=null,n.pending_buf=null,p=null,f=null,c=null,n.dstate=null,t==pa?Yb:hn)},n.deflateParams=function(k,V,z){let j=hn;return V==Ca&&(V=6),V<0||V>9||z<0||z>ca?mn:(un[A].func!=un[V].func&&k.total_in!==0&&(j=k.deflate(_d)),A!=V&&(A=V,E=un[A].max_lazy,U=un[A].good_length,I=un[A].nice_length,x=un[A].max_chain),H=z,j)},n.deflateSetDictionary=function(k,V,z){let j=z,se,D=0;if(!V||t!=Wo)return mn;if(j<rt)return hn;for(j>s-qt&&(j=s-qt,D=z-j),c.set(V.subarray(D,D+j),0),S=j,d=j,h=c[0]&255,h=(h<<u^c[1]&255)&g,se=0;se<=j-rt;se++)h=(h<<u^c[se+(rt-1)]&255)&g,f[se&o]=p[h],p[h]=se;return hn},n.deflate=function(k,V){let z,j,se,D,ne;if(V>It||V<0)return mn;if(!k.next_out||!k.next_in&&k.avail_in!==0||t==Xr&&V!=It)return k.msg=da[fa-mn],mn;if(k.avail_out===0)return k.msg=da[fa-dr],dr;if(e=k,D=r,r=V,t==Wo&&(j=Xo+(a-8<<4)<<8,se=(A-1&255)>>1,se>3&&(se=3),j|=se<<6,S!==0&&(j|=eS),j+=31-j%31,t=pa,ge(j)),n.pending!==0){if(e.flush_pending(),e.avail_out===0)return r=-1,hn}else if(e.avail_in===0&&V<=D&&V!=It)return e.msg=da[fa-dr],dr;if(t==Xr&&e.avail_in!==0)return k.msg=da[fa-dr],dr;if(e.avail_in!==0||y!==0||V!=mr&&t!=Xr){switch(ne=-1,un[A].func){case Ph:ne=we(V);break;case ba:ne=te(V);break;case Di:ne=Se(V);break}if((ne==Wr||ne==ha)&&(t=Xr),ne==nn||ne==Wr)return e.avail_out===0&&(r=-1),hn;if(ne==ua){if(V==_d)We();else if(K(0,0,!1),V==qb)for(z=0;z<m;z++)p[z]=0;if(e.flush_pending(),e.avail_out===0)return r=-1,hn}}return V!=It?hn:Uh}}function Ih(){const n=this;n.next_in_index=0,n.next_out_index=0,n.avail_in=0,n.total_in=0,n.avail_out=0,n.total_out=0}Ih.prototype={deflateInit(n,e){const t=this;return t.dstate=new iS,e||(e=hs),t.dstate.deflateInit(t,n,e)},deflate(n){const e=this;return e.dstate?e.dstate.deflate(e,n):mn},deflateEnd(){const n=this;if(!n.dstate)return mn;const e=n.dstate.deflateEnd();return n.dstate=null,e},deflateParams(n,e){const t=this;return t.dstate?t.dstate.deflateParams(t,n,e):mn},deflateSetDictionary(n,e){const t=this;return t.dstate?t.dstate.deflateSetDictionary(t,n,e):mn},read_buf(n,e,t){const i=this;let r=i.avail_in;return r>t&&(r=t),r===0?0:(i.avail_in-=r,n.set(i.next_in.subarray(i.next_in_index,i.next_in_index+r),e),i.next_in_index+=r,i.total_in+=r,r)},flush_pending(){const n=this;let e=n.dstate.pending;e>n.avail_out&&(e=n.avail_out),e!==0&&(n.next_out.set(n.dstate.pending_buf.subarray(n.dstate.pending_out,n.dstate.pending_out+e),n.next_out_index),n.next_out_index+=e,n.dstate.pending_out+=e,n.total_out+=e,n.avail_out-=e,n.dstate.pending-=e,n.dstate.pending===0&&(n.dstate.pending_out=0))}};function rS(n){const e=this,t=new Ih,i=sS(n&&n.chunkSize?n.chunkSize:64*1024),r=mr,s=new Uint8Array(i);let a=n?n.level:Ca;typeof a>"u"&&(a=Ca),t.deflateInit(a),t.next_out=s,e.append=function(o,c){let l,f,p=0,h=0,m=0;const v=[];if(o.length){t.next_in_index=0,t.next_in=o,t.avail_in=o.length;do{if(t.next_out_index=0,t.avail_out=i,l=t.deflate(r),l!=hn)throw new Error("deflating: "+t.msg);t.next_out_index&&(t.next_out_index==i?v.push(new Uint8Array(s)):v.push(s.subarray(0,t.next_out_index))),m+=t.next_out_index,c&&t.next_in_index>0&&t.next_in_index!=p&&(c(t.next_in_index),p=t.next_in_index)}while(t.avail_in>0||t.avail_out===0);return v.length>1?(f=new Uint8Array(m),v.forEach(function(g){f.set(g,h),h+=g.length})):f=v[0]?new Uint8Array(v[0]):new Uint8Array,f}},e.flush=function(){let o,c,l=0,f=0;const p=[];do{if(t.next_out_index=0,t.avail_out=i,o=t.deflate(It),o!=Uh&&o!=hn)throw new Error("deflating: "+t.msg);i-t.avail_out>0&&p.push(s.slice(0,t.next_out_index)),f+=t.next_out_index}while(t.avail_in>0||t.avail_out===0);return t.deflateEnd(),c=new Uint8Array(f),p.forEach(function(h){c.set(h,l),l+=h.length}),c}}function sS(n){return n+5*(Math.floor(n/16383)+1)}const aS=15,Ve=0,$n=1,oS=2,Ft=-2,tt=-3,vd=-4,jn=-5,$t=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],Fh=1440,lS=0,cS=4,fS=9,dS=5,uS=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],hS=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],pS=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],mS=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],_S=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],gS=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ti=15;function yl(){const n=this;let e,t,i,r,s,a;function o(l,f,p,h,m,v,g,u,d,w,_){let b,S,M,y,T,x,E,A,H,U,I,P,X,F,O;U=0,T=p;do i[l[f+U]]++,U++,T--;while(T!==0);if(i[0]==p)return g[0]=-1,u[0]=0,Ve;for(A=u[0],x=1;x<=ti&&i[x]===0;x++);for(E=x,A<x&&(A=x),T=ti;T!==0&&i[T]===0;T--);for(M=T,A>T&&(A=T),u[0]=A,F=1<<x;x<T;x++,F<<=1)if((F-=i[x])<0)return tt;if((F-=i[T])<0)return tt;for(i[T]+=F,a[1]=x=0,U=1,X=2;--T!==0;)a[X]=x+=i[U],X++,U++;T=0,U=0;do(x=l[f+U])!==0&&(_[a[x]++]=T),U++;while(++T<p);for(p=a[M],a[0]=T=0,U=0,y=-1,P=-A,s[0]=0,I=0,O=0;E<=M;E++)for(b=i[E];b--!==0;){for(;E>P+A;){if(y++,P+=A,O=M-P,O=O>A?A:O,(S=1<<(x=E-P))>b+1&&(S-=b+1,X=E,x<O))for(;++x<O&&!((S<<=1)<=i[++X]);)S-=i[X];if(O=1<<x,w[0]+O>Fh)return tt;s[y]=I=w[0],w[0]+=O,y!==0?(a[y]=T,r[0]=x,r[1]=A,x=T>>>P-A,r[2]=I-s[y-1]-x,d.set(r,(s[y-1]+x)*3)):g[0]=I}for(r[1]=E-P,U>=p?r[0]=128+64:_[U]<h?(r[0]=_[U]<256?0:32+64,r[2]=_[U++]):(r[0]=v[_[U]-h]+16+64,r[2]=m[_[U++]-h]),S=1<<E-P,x=T>>>P;x<O;x+=S)d.set(r,(I+x)*3);for(x=1<<E-1;T&x;x>>>=1)T^=x;for(T^=x,H=(1<<P)-1;(T&H)!=a[y];)y--,P-=A,H=(1<<P)-1}return F!==0&&M!=1?jn:Ve}function c(l){let f;for(e||(e=[],t=[],i=new Int32Array(ti+1),r=[],s=new Int32Array(ti),a=new Int32Array(ti+1)),t.length<l&&(t=[]),f=0;f<l;f++)t[f]=0;for(f=0;f<ti+1;f++)i[f]=0;for(f=0;f<3;f++)r[f]=0;s.set(i.subarray(0,ti),0),a.set(i.subarray(0,ti+1),0)}n.inflate_trees_bits=function(l,f,p,h,m){let v;return c(19),e[0]=0,v=o(l,0,19,19,null,null,p,f,h,e,t),v==tt?m.msg="oversubscribed dynamic bit lengths tree":(v==jn||f[0]===0)&&(m.msg="incomplete dynamic bit lengths tree",v=tt),v},n.inflate_trees_dynamic=function(l,f,p,h,m,v,g,u,d){let w;return c(288),e[0]=0,w=o(p,0,l,257,pS,mS,v,h,u,e,t),w!=Ve||h[0]===0?(w==tt?d.msg="oversubscribed literal/length tree":w!=vd&&(d.msg="incomplete literal/length tree",w=tt),w):(c(288),w=o(p,l,f,0,_S,gS,g,m,u,e,t),w!=Ve||m[0]===0&&l>257?(w==tt?d.msg="oversubscribed distance tree":w==jn?(d.msg="incomplete distance tree",w=tt):w!=vd&&(d.msg="empty distance tree with lengths",w=tt),w):Ve)}}yl.inflate_trees_fixed=function(n,e,t,i){return n[0]=fS,e[0]=dS,t[0]=uS,i[0]=hS,Ve};const ma=0,wd=1,bd=2,Sd=3,Ed=4,yd=5,Md=6,Yo=7,Td=8,_a=9;function xS(){const n=this;let e,t=0,i,r=0,s=0,a=0,o=0,c=0,l=0,f=0,p,h=0,m,v=0;function g(u,d,w,_,b,S,M,y){let T,x,E,A,H,U,I,P,X,F,O,Q,q,ce,N,$;I=y.next_in_index,P=y.avail_in,H=M.bitb,U=M.bitk,X=M.write,F=X<M.read?M.read-X-1:M.end-X,O=$t[u],Q=$t[d];do{for(;U<20;)P--,H|=(y.read_byte(I++)&255)<<U,U+=8;if(T=H&O,x=w,E=_,$=(E+T)*3,(A=x[$])===0){H>>=x[$+1],U-=x[$+1],M.win[X++]=x[$+2],F--;continue}do{if(H>>=x[$+1],U-=x[$+1],A&16){for(A&=15,q=x[$+2]+(H&$t[A]),H>>=A,U-=A;U<15;)P--,H|=(y.read_byte(I++)&255)<<U,U+=8;T=H&Q,x=b,E=S,$=(E+T)*3,A=x[$];do if(H>>=x[$+1],U-=x[$+1],A&16){for(A&=15;U<A;)P--,H|=(y.read_byte(I++)&255)<<U,U+=8;if(ce=x[$+2]+(H&$t[A]),H>>=A,U-=A,F-=q,X>=ce)N=X-ce,X-N>0&&2>X-N?(M.win[X++]=M.win[N++],M.win[X++]=M.win[N++],q-=2):(M.win.set(M.win.subarray(N,N+2),X),X+=2,N+=2,q-=2);else{N=X-ce;do N+=M.end;while(N<0);if(A=M.end-N,q>A){if(q-=A,X-N>0&&A>X-N)do M.win[X++]=M.win[N++];while(--A!==0);else M.win.set(M.win.subarray(N,N+A),X),X+=A,N+=A,A=0;N=0}}if(X-N>0&&q>X-N)do M.win[X++]=M.win[N++];while(--q!==0);else M.win.set(M.win.subarray(N,N+q),X),X+=q,N+=q,q=0;break}else if(!(A&64))T+=x[$+2],T+=H&$t[A],$=(E+T)*3,A=x[$];else return y.msg="invalid distance code",q=y.avail_in-P,q=U>>3<q?U>>3:q,P+=q,I-=q,U-=q<<3,M.bitb=H,M.bitk=U,y.avail_in=P,y.total_in+=I-y.next_in_index,y.next_in_index=I,M.write=X,tt;while(!0);break}if(A&64)return A&32?(q=y.avail_in-P,q=U>>3<q?U>>3:q,P+=q,I-=q,U-=q<<3,M.bitb=H,M.bitk=U,y.avail_in=P,y.total_in+=I-y.next_in_index,y.next_in_index=I,M.write=X,$n):(y.msg="invalid literal/length code",q=y.avail_in-P,q=U>>3<q?U>>3:q,P+=q,I-=q,U-=q<<3,M.bitb=H,M.bitk=U,y.avail_in=P,y.total_in+=I-y.next_in_index,y.next_in_index=I,M.write=X,tt);if(T+=x[$+2],T+=H&$t[A],$=(E+T)*3,(A=x[$])===0){H>>=x[$+1],U-=x[$+1],M.win[X++]=x[$+2],F--;break}}while(!0)}while(F>=258&&P>=10);return q=y.avail_in-P,q=U>>3<q?U>>3:q,P+=q,I-=q,U-=q<<3,M.bitb=H,M.bitk=U,y.avail_in=P,y.total_in+=I-y.next_in_index,y.next_in_index=I,M.write=X,Ve}n.init=function(u,d,w,_,b,S){e=ma,l=u,f=d,p=w,h=_,m=b,v=S,i=null},n.proc=function(u,d,w){let _,b,S,M=0,y=0,T=0,x,E,A,H;for(T=d.next_in_index,x=d.avail_in,M=u.bitb,y=u.bitk,E=u.write,A=E<u.read?u.read-E-1:u.end-E;;)switch(e){case ma:if(A>=258&&x>=10&&(u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,w=g(l,f,p,h,m,v,u,d),T=d.next_in_index,x=d.avail_in,M=u.bitb,y=u.bitk,E=u.write,A=E<u.read?u.read-E-1:u.end-E,w!=Ve)){e=w==$n?Yo:_a;break}s=l,i=p,r=h,e=wd;case wd:for(_=s;y<_;){if(x!==0)w=Ve;else return u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);x--,M|=(d.read_byte(T++)&255)<<y,y+=8}if(b=(r+(M&$t[_]))*3,M>>>=i[b+1],y-=i[b+1],S=i[b],S===0){a=i[b+2],e=Md;break}if(S&16){o=S&15,t=i[b+2],e=bd;break}if(!(S&64)){s=S,r=b/3+i[b+2];break}if(S&32){e=Yo;break}return e=_a,d.msg="invalid literal/length code",w=tt,u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);case bd:for(_=o;y<_;){if(x!==0)w=Ve;else return u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);x--,M|=(d.read_byte(T++)&255)<<y,y+=8}t+=M&$t[_],M>>=_,y-=_,s=f,i=m,r=v,e=Sd;case Sd:for(_=s;y<_;){if(x!==0)w=Ve;else return u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);x--,M|=(d.read_byte(T++)&255)<<y,y+=8}if(b=(r+(M&$t[_]))*3,M>>=i[b+1],y-=i[b+1],S=i[b],S&16){o=S&15,c=i[b+2],e=Ed;break}if(!(S&64)){s=S,r=b/3+i[b+2];break}return e=_a,d.msg="invalid distance code",w=tt,u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);case Ed:for(_=o;y<_;){if(x!==0)w=Ve;else return u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);x--,M|=(d.read_byte(T++)&255)<<y,y+=8}c+=M&$t[_],M>>=_,y-=_,e=yd;case yd:for(H=E-c;H<0;)H+=u.end;for(;t!==0;){if(A===0&&(E==u.end&&u.read!==0&&(E=0,A=E<u.read?u.read-E-1:u.end-E),A===0&&(u.write=E,w=u.inflate_flush(d,w),E=u.write,A=E<u.read?u.read-E-1:u.end-E,E==u.end&&u.read!==0&&(E=0,A=E<u.read?u.read-E-1:u.end-E),A===0)))return u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);u.win[E++]=u.win[H++],A--,H==u.end&&(H=0),t--}e=ma;break;case Md:if(A===0&&(E==u.end&&u.read!==0&&(E=0,A=E<u.read?u.read-E-1:u.end-E),A===0&&(u.write=E,w=u.inflate_flush(d,w),E=u.write,A=E<u.read?u.read-E-1:u.end-E,E==u.end&&u.read!==0&&(E=0,A=E<u.read?u.read-E-1:u.end-E),A===0)))return u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);w=Ve,u.win[E++]=a,A--,e=ma;break;case Yo:if(y>7&&(y-=8,x++,T--),u.write=E,w=u.inflate_flush(d,w),E=u.write,A=E<u.read?u.read-E-1:u.end-E,u.read!=u.write)return u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);e=Td;case Td:return w=$n,u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);case _a:return w=tt,u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w);default:return w=Ft,u.bitb=M,u.bitk=y,d.avail_in=x,d.total_in+=T-d.next_in_index,d.next_in_index=T,u.write=E,u.inflate_flush(d,w)}},n.free=function(){}}const Ad=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ur=0,Zo=1,Rd=2,Cd=3,Ld=4,Dd=5,ga=6,xa=7,Ud=8,Ai=9;function vS(n,e){const t=this;let i=ur,r=0,s=0,a=0,o;const c=[0],l=[0],f=new xS;let p=0,h=new Int32Array(Fh*3);const m=0,v=new yl;t.bitk=0,t.bitb=0,t.win=new Uint8Array(e),t.end=e,t.read=0,t.write=0,t.reset=function(g,u){u&&(u[0]=m),i==ga&&f.free(g),i=ur,t.bitk=0,t.bitb=0,t.read=t.write=0},t.reset(n,null),t.inflate_flush=function(g,u){let d,w,_;return w=g.next_out_index,_=t.read,d=(_<=t.write?t.write:t.end)-_,d>g.avail_out&&(d=g.avail_out),d!==0&&u==jn&&(u=Ve),g.avail_out-=d,g.total_out+=d,g.next_out.set(t.win.subarray(_,_+d),w),w+=d,_+=d,_==t.end&&(_=0,t.write==t.end&&(t.write=0),d=t.write-_,d>g.avail_out&&(d=g.avail_out),d!==0&&u==jn&&(u=Ve),g.avail_out-=d,g.total_out+=d,g.next_out.set(t.win.subarray(_,_+d),w),w+=d,_+=d),g.next_out_index=w,t.read=_,u},t.proc=function(g,u){let d,w,_,b,S,M,y,T;for(b=g.next_in_index,S=g.avail_in,w=t.bitb,_=t.bitk,M=t.write,y=M<t.read?t.read-M-1:t.end-M;;){let x,E,A,H,U,I,P,X;switch(i){case ur:for(;_<3;){if(S!==0)u=Ve;else return t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);S--,w|=(g.read_byte(b++)&255)<<_,_+=8}switch(d=w&7,p=d&1,d>>>1){case 0:w>>>=3,_-=3,d=_&7,w>>>=d,_-=d,i=Zo;break;case 1:x=[],E=[],A=[[]],H=[[]],yl.inflate_trees_fixed(x,E,A,H),f.init(x[0],E[0],A[0],0,H[0],0),w>>>=3,_-=3,i=ga;break;case 2:w>>>=3,_-=3,i=Cd;break;case 3:return w>>>=3,_-=3,i=Ai,g.msg="invalid block type",u=tt,t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u)}break;case Zo:for(;_<32;){if(S!==0)u=Ve;else return t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);S--,w|=(g.read_byte(b++)&255)<<_,_+=8}if((~w>>>16&65535)!=(w&65535))return i=Ai,g.msg="invalid stored block lengths",u=tt,t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);r=w&65535,w=_=0,i=r!==0?Rd:p!==0?xa:ur;break;case Rd:if(S===0||y===0&&(M==t.end&&t.read!==0&&(M=0,y=M<t.read?t.read-M-1:t.end-M),y===0&&(t.write=M,u=t.inflate_flush(g,u),M=t.write,y=M<t.read?t.read-M-1:t.end-M,M==t.end&&t.read!==0&&(M=0,y=M<t.read?t.read-M-1:t.end-M),y===0)))return t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);if(u=Ve,d=r,d>S&&(d=S),d>y&&(d=y),t.win.set(g.read_buf(b,d),M),b+=d,S-=d,M+=d,y-=d,(r-=d)!==0)break;i=p!==0?xa:ur;break;case Cd:for(;_<14;){if(S!==0)u=Ve;else return t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);S--,w|=(g.read_byte(b++)&255)<<_,_+=8}if(s=d=w&16383,(d&31)>29||(d>>5&31)>29)return i=Ai,g.msg="too many length or distance symbols",u=tt,t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);if(d=258+(d&31)+(d>>5&31),!o||o.length<d)o=[];else for(T=0;T<d;T++)o[T]=0;w>>>=14,_-=14,a=0,i=Ld;case Ld:for(;a<4+(s>>>10);){for(;_<3;){if(S!==0)u=Ve;else return t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);S--,w|=(g.read_byte(b++)&255)<<_,_+=8}o[Ad[a++]]=w&7,w>>>=3,_-=3}for(;a<19;)o[Ad[a++]]=0;if(c[0]=7,d=v.inflate_trees_bits(o,c,l,h,g),d!=Ve)return u=d,u==tt&&(o=null,i=Ai),t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);a=0,i=Dd;case Dd:for(;d=s,!(a>=258+(d&31)+(d>>5&31));){let F,O;for(d=c[0];_<d;){if(S!==0)u=Ve;else return t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);S--,w|=(g.read_byte(b++)&255)<<_,_+=8}if(d=h[(l[0]+(w&$t[d]))*3+1],O=h[(l[0]+(w&$t[d]))*3+2],O<16)w>>>=d,_-=d,o[a++]=O;else{for(T=O==18?7:O-14,F=O==18?11:3;_<d+T;){if(S!==0)u=Ve;else return t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);S--,w|=(g.read_byte(b++)&255)<<_,_+=8}if(w>>>=d,_-=d,F+=w&$t[T],w>>>=T,_-=T,T=a,d=s,T+F>258+(d&31)+(d>>5&31)||O==16&&T<1)return o=null,i=Ai,g.msg="invalid bit length repeat",u=tt,t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);O=O==16?o[T-1]:0;do o[T++]=O;while(--F!==0);a=T}}if(l[0]=-1,U=[],I=[],P=[],X=[],U[0]=9,I[0]=6,d=s,d=v.inflate_trees_dynamic(257+(d&31),1+(d>>5&31),o,U,I,P,X,h,g),d!=Ve)return d==tt&&(o=null,i=Ai),u=d,t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);f.init(U[0],I[0],h,P[0],h,X[0]),i=ga;case ga:if(t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,(u=f.proc(t,g,u))!=$n)return t.inflate_flush(g,u);if(u=Ve,f.free(g),b=g.next_in_index,S=g.avail_in,w=t.bitb,_=t.bitk,M=t.write,y=M<t.read?t.read-M-1:t.end-M,p===0){i=ur;break}i=xa;case xa:if(t.write=M,u=t.inflate_flush(g,u),M=t.write,y=M<t.read?t.read-M-1:t.end-M,t.read!=t.write)return t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);i=Ud;case Ud:return u=$n,t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);case Ai:return u=tt,t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u);default:return u=Ft,t.bitb=w,t.bitk=_,g.avail_in=S,g.total_in+=b-g.next_in_index,g.next_in_index=b,t.write=M,t.inflate_flush(g,u)}}},t.free=function(g){t.reset(g,null),t.win=null,h=null},t.set_dictionary=function(g,u,d){t.win.set(g.subarray(u,u+d),0),t.read=t.write=d},t.sync_point=function(){return i==Zo?1:0}}const wS=32,bS=8,SS=0,Pd=1,Id=2,Fd=3,Nd=4,kd=5,$o=6,qr=7,Od=12,ni=13,ES=[0,0,255,255];function yS(){const n=this;n.mode=0,n.method=0,n.was=[0],n.need=0,n.marker=0,n.wbits=0;function e(t){return!t||!t.istate?Ft:(t.total_in=t.total_out=0,t.msg=null,t.istate.mode=qr,t.istate.blocks.reset(t,null),Ve)}n.inflateEnd=function(t){return n.blocks&&n.blocks.free(t),n.blocks=null,Ve},n.inflateInit=function(t,i){return t.msg=null,n.blocks=null,i<8||i>15?(n.inflateEnd(t),Ft):(n.wbits=i,t.istate.blocks=new vS(t,1<<i),e(t),Ve)},n.inflate=function(t,i){let r,s;if(!t||!t.istate||!t.next_in)return Ft;const a=t.istate;for(i=i==cS?jn:Ve,r=jn;;)switch(a.mode){case SS:if(t.avail_in===0)return r;if(r=i,t.avail_in--,t.total_in++,((a.method=t.read_byte(t.next_in_index++))&15)!=bS){a.mode=ni,t.msg="unknown compression method",a.marker=5;break}if((a.method>>4)+8>a.wbits){a.mode=ni,t.msg="invalid win size",a.marker=5;break}a.mode=Pd;case Pd:if(t.avail_in===0)return r;if(r=i,t.avail_in--,t.total_in++,s=t.read_byte(t.next_in_index++)&255,((a.method<<8)+s)%31!==0){a.mode=ni,t.msg="incorrect header check",a.marker=5;break}if(!(s&wS)){a.mode=qr;break}a.mode=Id;case Id:if(t.avail_in===0)return r;r=i,t.avail_in--,t.total_in++,a.need=(t.read_byte(t.next_in_index++)&255)<<24&4278190080,a.mode=Fd;case Fd:if(t.avail_in===0)return r;r=i,t.avail_in--,t.total_in++,a.need+=(t.read_byte(t.next_in_index++)&255)<<16&16711680,a.mode=Nd;case Nd:if(t.avail_in===0)return r;r=i,t.avail_in--,t.total_in++,a.need+=(t.read_byte(t.next_in_index++)&255)<<8&65280,a.mode=kd;case kd:return t.avail_in===0?r:(r=i,t.avail_in--,t.total_in++,a.need+=t.read_byte(t.next_in_index++)&255,a.mode=$o,oS);case $o:return a.mode=ni,t.msg="need dictionary",a.marker=0,Ft;case qr:if(r=a.blocks.proc(t,r),r==tt){a.mode=ni,a.marker=0;break}if(r==Ve&&(r=i),r!=$n)return r;r=i,a.blocks.reset(t,a.was),a.mode=Od;case Od:return t.avail_in=0,$n;case ni:return tt;default:return Ft}},n.inflateSetDictionary=function(t,i,r){let s=0,a=r;if(!t||!t.istate||t.istate.mode!=$o)return Ft;const o=t.istate;return a>=1<<o.wbits&&(a=(1<<o.wbits)-1,s=r-a),o.blocks.set_dictionary(i,s,a),o.mode=qr,Ve},n.inflateSync=function(t){let i,r,s,a,o;if(!t||!t.istate)return Ft;const c=t.istate;if(c.mode!=ni&&(c.mode=ni,c.marker=0),(i=t.avail_in)===0)return jn;for(r=t.next_in_index,s=c.marker;i!==0&&s<4;)t.read_byte(r)==ES[s]?s++:t.read_byte(r)!==0?s=0:s=4-s,r++,i--;return t.total_in+=r-t.next_in_index,t.next_in_index=r,t.avail_in=i,c.marker=s,s!=4?tt:(a=t.total_in,o=t.total_out,e(t),t.total_in=a,t.total_out=o,c.mode=qr,Ve)},n.inflateSyncPoint=function(t){return!t||!t.istate||!t.istate.blocks?Ft:t.istate.blocks.sync_point()}}function Nh(){}Nh.prototype={inflateInit(n){const e=this;return e.istate=new yS,n||(n=aS),e.istate.inflateInit(e,n)},inflate(n){const e=this;return e.istate?e.istate.inflate(e,n):Ft},inflateEnd(){const n=this;if(!n.istate)return Ft;const e=n.istate.inflateEnd(n);return n.istate=null,e},inflateSync(){const n=this;return n.istate?n.istate.inflateSync(n):Ft},inflateSetDictionary(n,e){const t=this;return t.istate?t.istate.inflateSetDictionary(t,n,e):Ft},read_byte(n){return this.next_in[n]},read_buf(n,e){return this.next_in.subarray(n,n+e)}};function MS(n){const e=this,t=new Nh,i=n&&n.chunkSize?Math.floor(n.chunkSize*2):128*1024,r=lS,s=new Uint8Array(i);let a=!1;t.inflateInit(),t.next_out=s,e.append=function(o,c){const l=[];let f,p,h=0,m=0,v=0;if(o.length!==0){t.next_in_index=0,t.next_in=o,t.avail_in=o.length;do{if(t.next_out_index=0,t.avail_out=i,t.avail_in===0&&!a&&(t.next_in_index=0,a=!0),f=t.inflate(r),a&&f===jn){if(t.avail_in!==0)throw new Error("inflating: bad input")}else if(f!==Ve&&f!==$n)throw new Error("inflating: "+t.msg);if((a||f===$n)&&t.avail_in===o.length)throw new Error("inflating: bad input");t.next_out_index&&(t.next_out_index===i?l.push(new Uint8Array(s)):l.push(s.subarray(0,t.next_out_index))),v+=t.next_out_index,c&&t.next_in_index>0&&t.next_in_index!=h&&(c(t.next_in_index),h=t.next_in_index)}while(t.avail_in>0||t.avail_out===0);return l.length>1?(p=new Uint8Array(v),l.forEach(function(g){p.set(g,m),m+=g.length})):p=l[0]?new Uint8Array(l[0]):new Uint8Array,p}},e.flush=function(){t.inflateEnd()}}const Bt=4294967295,Nt=65535,Bd=8,TS=0,AS=99,RS=67324752,kh=134695760,CS=kh,LS=33639248,DS=101010256,US=101075792,PS=117853008,Ml=22,Oh=20,Bh=56,IS=Ml+Oh+Bh,FS=1,NS=39169,kS=10,OS=1,zh=21589,BS=1,zS=8,GS=2048,HS=16,VS=20,zd=45,Gd=51,jo="/",Hd=new Date(2107,11,31),Vd=new Date(1980,0,1),Ut=void 0,La="undefined",Gh="function";class Wd{constructor(e){return class extends TransformStream{constructor(t,i){const r=new e(i);super({transform(s,a){a.enqueue(r.append(s))},flush(s){const a=r.flush();a&&s.enqueue(a)}})}}}}const WS=64;let Hh=2;try{typeof navigator!=La&&navigator.hardwareConcurrency&&(Hh=navigator.hardwareConcurrency)}catch{}const XS={chunkSize:512*1024,maxWorkers:Hh,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:Ut,CompressionStreamNative:typeof CompressionStream!=La&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream!=La&&DecompressionStream},ai=Object.assign({},XS);function qS(){return ai}function YS(n){return Math.max(n.chunkSize,WS)}function jl(n){const{baseURL:e,chunkSize:t,maxWorkers:i,terminateWorkerTimeout:r,useCompressionStream:s,useWebWorkers:a,Deflate:o,Inflate:c,CompressionStream:l,DecompressionStream:f,workerScripts:p}=n;if(ii("baseURL",e),ii("chunkSize",t),ii("maxWorkers",i),ii("terminateWorkerTimeout",r),ii("useCompressionStream",s),ii("useWebWorkers",a),o&&(ai.CompressionStream=new Wd(o)),c&&(ai.DecompressionStream=new Wd(c)),ii("CompressionStream",l),ii("DecompressionStream",f),p!==Ut){const{deflate:h,inflate:m}=p;if((h||m)&&(ai.workerScripts||(ai.workerScripts={})),h){if(!Array.isArray(h))throw new Error("workerScripts.deflate must be an array");ai.workerScripts.deflate=h}if(m){if(!Array.isArray(m))throw new Error("workerScripts.inflate must be an array");ai.workerScripts.inflate=m}}}function ii(n,e){e!==Ut&&(ai[n]=e)}const Yr={application:{"andrew-inset":"ez",annodex:"anx","atom+xml":"atom","atomcat+xml":"atomcat","atomserv+xml":"atomsrv",bbolin:"lin",cap:["cap","pcap"],"cu-seeme":"cu","davmount+xml":"davmount",dsptype:"tsp",ecmascript:["es","ecma"],futuresplash:"spl",hta:"hta","java-archive":"jar","java-serialized-object":"ser","java-vm":"class",javascript:"js",m3g:"m3g","mac-binhex40":"hqx",mathematica:["nb","ma","mb"],msaccess:"mdb",msword:["doc","dot"],mxf:"mxf",oda:"oda",ogg:"ogx",pdf:"pdf","pgp-keys":"key","pgp-signature":["asc","sig"],"pics-rules":"prf",postscript:["ps","ai","eps","epsi","epsf","eps2","eps3"],rar:"rar","rdf+xml":"rdf","rss+xml":"rss",rtf:"rtf",smil:["smi","smil"],"xhtml+xml":["xhtml","xht"],xml:["xml","xsl","xsd"],"xspf+xml":"xspf",zip:"zip","vnd.android.package-archive":"apk","vnd.cinderella":"cdy","vnd.google-earth.kml+xml":"kml","vnd.google-earth.kmz":"kmz","vnd.mozilla.xul+xml":"xul","vnd.ms-excel":["xls","xlb","xlt","xlm","xla","xlc","xlw"],"vnd.ms-pki.seccat":"cat","vnd.ms-pki.stl":"stl","vnd.ms-powerpoint":["ppt","pps","pot"],"vnd.oasis.opendocument.chart":"odc","vnd.oasis.opendocument.database":"odb","vnd.oasis.opendocument.formula":"odf","vnd.oasis.opendocument.graphics":"odg","vnd.oasis.opendocument.graphics-template":"otg","vnd.oasis.opendocument.image":"odi","vnd.oasis.opendocument.presentation":"odp","vnd.oasis.opendocument.presentation-template":"otp","vnd.oasis.opendocument.spreadsheet":"ods","vnd.oasis.opendocument.spreadsheet-template":"ots","vnd.oasis.opendocument.text":"odt","vnd.oasis.opendocument.text-master":"odm","vnd.oasis.opendocument.text-template":"ott","vnd.oasis.opendocument.text-web":"oth","vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx","vnd.openxmlformats-officedocument.spreadsheetml.template":"xltx","vnd.openxmlformats-officedocument.presentationml.presentation":"pptx","vnd.openxmlformats-officedocument.presentationml.slideshow":"ppsx","vnd.openxmlformats-officedocument.presentationml.template":"potx","vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","vnd.openxmlformats-officedocument.wordprocessingml.template":"dotx","vnd.smaf":"mmf","vnd.stardivision.calc":"sdc","vnd.stardivision.chart":"sds","vnd.stardivision.draw":"sda","vnd.stardivision.impress":"sdd","vnd.stardivision.math":["sdf","smf"],"vnd.stardivision.writer":["sdw","vor"],"vnd.stardivision.writer-global":"sgl","vnd.sun.xml.calc":"sxc","vnd.sun.xml.calc.template":"stc","vnd.sun.xml.draw":"sxd","vnd.sun.xml.draw.template":"std","vnd.sun.xml.impress":"sxi","vnd.sun.xml.impress.template":"sti","vnd.sun.xml.math":"sxm","vnd.sun.xml.writer":"sxw","vnd.sun.xml.writer.global":"sxg","vnd.sun.xml.writer.template":"stw","vnd.symbian.install":["sis","sisx"],"vnd.visio":["vsd","vst","vss","vsw"],"vnd.wap.wbxml":"wbxml","vnd.wap.wmlc":"wmlc","vnd.wap.wmlscriptc":"wmlsc","vnd.wordperfect":"wpd","vnd.wordperfect5.1":"wp5","x-123":"wk","x-7z-compressed":"7z","x-abiword":"abw","x-apple-diskimage":"dmg","x-bcpio":"bcpio","x-bittorrent":"torrent","x-cbr":["cbr","cba","cbt","cb7"],"x-cbz":"cbz","x-cdf":["cdf","cda"],"x-cdlink":"vcd","x-chess-pgn":"pgn","x-cpio":"cpio","x-csh":"csh","x-debian-package":["deb","udeb"],"x-director":["dcr","dir","dxr","cst","cct","cxt","w3d","fgd","swa"],"x-dms":"dms","x-doom":"wad","x-dvi":"dvi","x-httpd-eruby":"rhtml","x-font":"pcf.Z","x-freemind":"mm","x-gnumeric":"gnumeric","x-go-sgf":"sgf","x-graphing-calculator":"gcf","x-gtar":["gtar","taz"],"x-hdf":"hdf","x-httpd-php":["phtml","pht","php"],"x-httpd-php-source":"phps","x-httpd-php3":"php3","x-httpd-php3-preprocessed":"php3p","x-httpd-php4":"php4","x-httpd-php5":"php5","x-ica":"ica","x-info":"info","x-internet-signup":["ins","isp"],"x-iphone":"iii","x-iso9660-image":"iso","x-java-jnlp-file":"jnlp","x-jmol":"jmz","x-killustrator":"kil","x-koan":["skp","skd","skt","skm"],"x-kpresenter":["kpr","kpt"],"x-kword":["kwd","kwt"],"x-latex":"latex","x-lha":"lha","x-lyx":"lyx","x-lzh":"lzh","x-lzx":"lzx","x-maker":["frm","maker","frame","fm","fb","book","fbdoc"],"x-ms-wmd":"wmd","x-ms-wmz":"wmz","x-msdos-program":["com","exe","bat","dll"],"x-msi":"msi","x-netcdf":["nc","cdf"],"x-ns-proxy-autoconfig":["pac","dat"],"x-nwc":"nwc","x-object":"o","x-oz-application":"oza","x-pkcs7-certreqresp":"p7r","x-python-code":["pyc","pyo"],"x-qgis":["qgs","shp","shx"],"x-quicktimeplayer":"qtl","x-redhat-package-manager":"rpm","x-ruby":"rb","x-sh":"sh","x-shar":"shar","x-shockwave-flash":["swf","swfl"],"x-silverlight":"scr","x-stuffit":"sit","x-sv4cpio":"sv4cpio","x-sv4crc":"sv4crc","x-tar":"tar","x-tcl":"tcl","x-tex-gf":"gf","x-tex-pk":"pk","x-texinfo":["texinfo","texi"],"x-trash":["~","%","bak","old","sik"],"x-troff":["t","tr","roff"],"x-troff-man":"man","x-troff-me":"me","x-troff-ms":"ms","x-ustar":"ustar","x-wais-source":"src","x-wingz":"wz","x-x509-ca-cert":["crt","der","cer"],"x-xcf":"xcf","x-xfig":"fig","x-xpinstall":"xpi",applixware:"aw","atomsvc+xml":"atomsvc","ccxml+xml":"ccxml","cdmi-capability":"cdmia","cdmi-container":"cdmic","cdmi-domain":"cdmid","cdmi-object":"cdmio","cdmi-queue":"cdmiq","docbook+xml":"dbk","dssc+der":"dssc","dssc+xml":"xdssc","emma+xml":"emma","epub+zip":"epub",exi:"exi","font-tdpfr":"pfr","gml+xml":"gml","gpx+xml":"gpx",gxf:"gxf",hyperstudio:"stk","inkml+xml":["ink","inkml"],ipfix:"ipfix",json:"json","jsonml+json":"jsonml","lost+xml":"lostxml","mads+xml":"mads",marc:"mrc","marcxml+xml":"mrcx","mathml+xml":"mathml",mbox:"mbox","mediaservercontrol+xml":"mscml","metalink+xml":"metalink","metalink4+xml":"meta4","mets+xml":"mets","mods+xml":"mods",mp21:["m21","mp21"],mp4:"mp4s","oebps-package+xml":"opf","omdoc+xml":"omdoc",onenote:["onetoc","onetoc2","onetmp","onepkg"],oxps:"oxps","patch-ops-error+xml":"xer","pgp-encrypted":"pgp",pkcs10:"p10","pkcs7-mime":["p7m","p7c"],"pkcs7-signature":"p7s",pkcs8:"p8","pkix-attr-cert":"ac","pkix-crl":"crl","pkix-pkipath":"pkipath",pkixcmp:"pki","pls+xml":"pls","prs.cww":"cww","pskc+xml":"pskcxml","reginfo+xml":"rif","relax-ng-compact-syntax":"rnc","resource-lists+xml":"rl","resource-lists-diff+xml":"rld","rls-services+xml":"rs","rpki-ghostbusters":"gbr","rpki-manifest":"mft","rpki-roa":"roa","rsd+xml":"rsd","sbml+xml":"sbml","scvp-cv-request":"scq","scvp-cv-response":"scs","scvp-vp-request":"spq","scvp-vp-response":"spp",sdp:"sdp","set-payment-initiation":"setpay","set-registration-initiation":"setreg","shf+xml":"shf","sparql-query":"rq","sparql-results+xml":"srx",srgs:"gram","srgs+xml":"grxml","sru+xml":"sru","ssdl+xml":"ssdl","ssml+xml":"ssml","tei+xml":["tei","teicorpus"],"thraud+xml":"tfi","timestamped-data":"tsd","vnd.3gpp.pic-bw-large":"plb","vnd.3gpp.pic-bw-small":"psb","vnd.3gpp.pic-bw-var":"pvb","vnd.3gpp2.tcap":"tcap","vnd.3m.post-it-notes":"pwn","vnd.accpac.simply.aso":"aso","vnd.accpac.simply.imp":"imp","vnd.acucobol":"acu","vnd.acucorp":["atc","acutc"],"vnd.adobe.air-application-installer-package+zip":"air","vnd.adobe.formscentral.fcdt":"fcdt","vnd.adobe.fxp":["fxp","fxpl"],"vnd.adobe.xdp+xml":"xdp","vnd.adobe.xfdf":"xfdf","vnd.ahead.space":"ahead","vnd.airzip.filesecure.azf":"azf","vnd.airzip.filesecure.azs":"azs","vnd.amazon.ebook":"azw","vnd.americandynamics.acc":"acc","vnd.amiga.ami":"ami","vnd.anser-web-certificate-issue-initiation":"cii","vnd.anser-web-funds-transfer-initiation":"fti","vnd.antix.game-component":"atx","vnd.apple.installer+xml":"mpkg","vnd.apple.mpegurl":"m3u8","vnd.aristanetworks.swi":"swi","vnd.astraea-software.iota":"iota","vnd.audiograph":"aep","vnd.blueice.multipass":"mpm","vnd.bmi":"bmi","vnd.businessobjects":"rep","vnd.chemdraw+xml":"cdxml","vnd.chipnuts.karaoke-mmd":"mmd","vnd.claymore":"cla","vnd.cloanto.rp9":"rp9","vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"vnd.cluetrust.cartomobile-config":"c11amc","vnd.cluetrust.cartomobile-config-pkg":"c11amz","vnd.commonspace":"csp","vnd.contact.cmsg":"cdbcmsg","vnd.cosmocaller":"cmc","vnd.crick.clicker":"clkx","vnd.crick.clicker.keyboard":"clkk","vnd.crick.clicker.palette":"clkp","vnd.crick.clicker.template":"clkt","vnd.crick.clicker.wordbank":"clkw","vnd.criticaltools.wbs+xml":"wbs","vnd.ctc-posml":"pml","vnd.cups-ppd":"ppd","vnd.curl.car":"car","vnd.curl.pcurl":"pcurl","vnd.dart":"dart","vnd.data-vision.rdz":"rdz","vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"vnd.dece.ttml+xml":["uvt","uvvt"],"vnd.dece.unspecified":["uvx","uvvx"],"vnd.dece.zip":["uvz","uvvz"],"vnd.denovo.fcselayout-link":"fe_launch","vnd.dna":"dna","vnd.dolby.mlp":"mlp","vnd.dpgraph":"dpg","vnd.dreamfactory":"dfac","vnd.ds-keypoint":"kpxx","vnd.dvb.ait":"ait","vnd.dvb.service":"svc","vnd.dynageo":"geo","vnd.ecowin.chart":"mag","vnd.enliven":"nml","vnd.epson.esf":"esf","vnd.epson.msf":"msf","vnd.epson.quickanime":"qam","vnd.epson.salt":"slt","vnd.epson.ssf":"ssf","vnd.eszigno3+xml":["es3","et3"],"vnd.ezpix-album":"ez2","vnd.ezpix-package":"ez3","vnd.fdf":"fdf","vnd.fdsn.mseed":"mseed","vnd.fdsn.seed":["seed","dataless"],"vnd.flographit":"gph","vnd.fluxtime.clip":"ftc","vnd.framemaker":["fm","frame","maker","book"],"vnd.frogans.fnc":"fnc","vnd.frogans.ltf":"ltf","vnd.fsc.weblaunch":"fsc","vnd.fujitsu.oasys":"oas","vnd.fujitsu.oasys2":"oa2","vnd.fujitsu.oasys3":"oa3","vnd.fujitsu.oasysgp":"fg5","vnd.fujitsu.oasysprs":"bh2","vnd.fujixerox.ddd":"ddd","vnd.fujixerox.docuworks":"xdw","vnd.fujixerox.docuworks.binder":"xbd","vnd.fuzzysheet":"fzs","vnd.genomatix.tuxedo":"txd","vnd.geogebra.file":"ggb","vnd.geogebra.tool":"ggt","vnd.geometry-explorer":["gex","gre"],"vnd.geonext":"gxt","vnd.geoplan":"g2w","vnd.geospace":"g3w","vnd.gmx":"gmx","vnd.grafeq":["gqf","gqs"],"vnd.groove-account":"gac","vnd.groove-help":"ghf","vnd.groove-identity-message":"gim","vnd.groove-injector":"grv","vnd.groove-tool-message":"gtm","vnd.groove-tool-template":"tpl","vnd.groove-vcard":"vcg","vnd.hal+xml":"hal","vnd.handheld-entertainment+xml":"zmm","vnd.hbci":"hbci","vnd.hhe.lesson-player":"les","vnd.hp-hpgl":"hpgl","vnd.hp-hpid":"hpid","vnd.hp-hps":"hps","vnd.hp-jlyt":"jlt","vnd.hp-pcl":"pcl","vnd.hp-pclxl":"pclxl","vnd.hydrostatix.sof-data":"sfd-hdstx","vnd.ibm.minipay":"mpy","vnd.ibm.modcap":["afp","listafp","list3820"],"vnd.ibm.rights-management":"irm","vnd.ibm.secure-container":"sc","vnd.iccprofile":["icc","icm"],"vnd.igloader":"igl","vnd.immervision-ivp":"ivp","vnd.immervision-ivu":"ivu","vnd.insors.igm":"igm","vnd.intercon.formnet":["xpw","xpx"],"vnd.intergeo":"i2g","vnd.intu.qbo":"qbo","vnd.intu.qfx":"qfx","vnd.ipunplugged.rcprofile":"rcprofile","vnd.irepository.package+xml":"irp","vnd.is-xpr":"xpr","vnd.isac.fcs":"fcs","vnd.jam":"jam","vnd.jcp.javame.midlet-rms":"rms","vnd.jisp":"jisp","vnd.joost.joda-archive":"joda","vnd.kahootz":["ktz","ktr"],"vnd.kde.karbon":"karbon","vnd.kde.kchart":"chrt","vnd.kde.kformula":"kfo","vnd.kde.kivio":"flw","vnd.kde.kontour":"kon","vnd.kde.kpresenter":["kpr","kpt"],"vnd.kde.kspread":"ksp","vnd.kde.kword":["kwd","kwt"],"vnd.kenameaapp":"htke","vnd.kidspiration":"kia","vnd.kinar":["kne","knp"],"vnd.koan":["skp","skd","skt","skm"],"vnd.kodak-descriptor":"sse","vnd.las.las+xml":"lasxml","vnd.llamagraphics.life-balance.desktop":"lbd","vnd.llamagraphics.life-balance.exchange+xml":"lbe","vnd.lotus-1-2-3":"123","vnd.lotus-approach":"apr","vnd.lotus-freelance":"pre","vnd.lotus-notes":"nsf","vnd.lotus-organizer":"org","vnd.lotus-screencam":"scm","vnd.lotus-wordpro":"lwp","vnd.macports.portpkg":"portpkg","vnd.mcd":"mcd","vnd.medcalcdata":"mc1","vnd.mediastation.cdkey":"cdkey","vnd.mfer":"mwf","vnd.mfmp":"mfm","vnd.micrografx.flo":"flo","vnd.micrografx.igx":"igx","vnd.mif":"mif","vnd.mobius.daf":"daf","vnd.mobius.dis":"dis","vnd.mobius.mbk":"mbk","vnd.mobius.mqy":"mqy","vnd.mobius.msl":"msl","vnd.mobius.plc":"plc","vnd.mobius.txf":"txf","vnd.mophun.application":"mpn","vnd.mophun.certificate":"mpc","vnd.ms-artgalry":"cil","vnd.ms-cab-compressed":"cab","vnd.ms-excel.addin.macroenabled.12":"xlam","vnd.ms-excel.sheet.binary.macroenabled.12":"xlsb","vnd.ms-excel.sheet.macroenabled.12":"xlsm","vnd.ms-excel.template.macroenabled.12":"xltm","vnd.ms-fontobject":"eot","vnd.ms-htmlhelp":"chm","vnd.ms-ims":"ims","vnd.ms-lrm":"lrm","vnd.ms-officetheme":"thmx","vnd.ms-powerpoint.addin.macroenabled.12":"ppam","vnd.ms-powerpoint.presentation.macroenabled.12":"pptm","vnd.ms-powerpoint.slide.macroenabled.12":"sldm","vnd.ms-powerpoint.slideshow.macroenabled.12":"ppsm","vnd.ms-powerpoint.template.macroenabled.12":"potm","vnd.ms-project":["mpp","mpt"],"vnd.ms-word.document.macroenabled.12":"docm","vnd.ms-word.template.macroenabled.12":"dotm","vnd.ms-works":["wps","wks","wcm","wdb"],"vnd.ms-wpl":"wpl","vnd.ms-xpsdocument":"xps","vnd.mseq":"mseq","vnd.musician":"mus","vnd.muvee.style":"msty","vnd.mynfc":"taglet","vnd.neurolanguage.nlu":"nlu","vnd.nitf":["ntf","nitf"],"vnd.noblenet-directory":"nnd","vnd.noblenet-sealer":"nns","vnd.noblenet-web":"nnw","vnd.nokia.n-gage.data":"ngdat","vnd.nokia.n-gage.symbian.install":"n-gage","vnd.nokia.radio-preset":"rpst","vnd.nokia.radio-presets":"rpss","vnd.novadigm.edm":"edm","vnd.novadigm.edx":"edx","vnd.novadigm.ext":"ext","vnd.oasis.opendocument.chart-template":"otc","vnd.oasis.opendocument.formula-template":"odft","vnd.oasis.opendocument.image-template":"oti","vnd.olpc-sugar":"xo","vnd.oma.dd2+xml":"dd2","vnd.openofficeorg.extension":"oxt","vnd.openxmlformats-officedocument.presentationml.slide":"sldx","vnd.osgeo.mapguide.package":"mgp","vnd.osgi.dp":"dp","vnd.osgi.subsystem":"esa","vnd.palm":["pdb","pqa","oprc"],"vnd.pawaafile":"paw","vnd.pg.format":"str","vnd.pg.osasli":"ei6","vnd.picsel":"efif","vnd.pmi.widget":"wg","vnd.pocketlearn":"plf","vnd.powerbuilder6":"pbd","vnd.previewsystems.box":"box","vnd.proteus.magazine":"mgz","vnd.publishare-delta-tree":"qps","vnd.pvi.ptid1":"ptid","vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"vnd.realvnc.bed":"bed","vnd.recordare.musicxml":"mxl","vnd.recordare.musicxml+xml":"musicxml","vnd.rig.cryptonote":"cryptonote","vnd.rn-realmedia":"rm","vnd.rn-realmedia-vbr":"rmvb","vnd.route66.link66+xml":"link66","vnd.sailingtracker.track":"st","vnd.seemail":"see","vnd.sema":"sema","vnd.semd":"semd","vnd.semf":"semf","vnd.shana.informed.formdata":"ifm","vnd.shana.informed.formtemplate":"itp","vnd.shana.informed.interchange":"iif","vnd.shana.informed.package":"ipk","vnd.simtech-mindmapper":["twd","twds"],"vnd.smart.teacher":"teacher","vnd.solent.sdkm+xml":["sdkm","sdkd"],"vnd.spotfire.dxp":"dxp","vnd.spotfire.sfs":"sfs","vnd.stepmania.package":"smzip","vnd.stepmania.stepchart":"sm","vnd.sus-calendar":["sus","susp"],"vnd.svd":"svd","vnd.syncml+xml":"xsm","vnd.syncml.dm+wbxml":"bdm","vnd.syncml.dm+xml":"xdm","vnd.tao.intent-module-archive":"tao","vnd.tcpdump.pcap":["pcap","cap","dmp"],"vnd.tmobile-livetv":"tmo","vnd.trid.tpt":"tpt","vnd.triscape.mxs":"mxs","vnd.trueapp":"tra","vnd.ufdl":["ufd","ufdl"],"vnd.uiq.theme":"utz","vnd.umajin":"umj","vnd.unity":"unityweb","vnd.uoml+xml":"uoml","vnd.vcx":"vcx","vnd.visionary":"vis","vnd.vsf":"vsf","vnd.webturbo":"wtb","vnd.wolfram.player":"nbp","vnd.wqd":"wqd","vnd.wt.stf":"stf","vnd.xara":"xar","vnd.xfdl":"xfdl","vnd.yamaha.hv-dic":"hvd","vnd.yamaha.hv-script":"hvs","vnd.yamaha.hv-voice":"hvp","vnd.yamaha.openscoreformat":"osf","vnd.yamaha.openscoreformat.osfpvg+xml":"osfpvg","vnd.yamaha.smaf-audio":"saf","vnd.yamaha.smaf-phrase":"spf","vnd.yellowriver-custom-menu":"cmp","vnd.zul":["zir","zirz"],"vnd.zzazz.deck+xml":"zaz","voicexml+xml":"vxml",widget:"wgt",winhlp:"hlp","wsdl+xml":"wsdl","wspolicy+xml":"wspolicy","x-ace-compressed":"ace","x-authorware-bin":["aab","x32","u32","vox"],"x-authorware-map":"aam","x-authorware-seg":"aas","x-blorb":["blb","blorb"],"x-bzip":"bz","x-bzip2":["bz2","boz"],"x-cfs-compressed":"cfs","x-chat":"chat","x-conference":"nsc","x-dgc-compressed":"dgc","x-dtbncx+xml":"ncx","x-dtbook+xml":"dtb","x-dtbresource+xml":"res","x-eva":"eva","x-font-bdf":"bdf","x-font-ghostscript":"gsf","x-font-linux-psf":"psf","x-font-otf":"otf","x-font-pcf":"pcf","x-font-snf":"snf","x-font-ttf":["ttf","ttc"],"x-font-type1":["pfa","pfb","pfm","afm"],"x-font-woff":"woff","x-freearc":"arc","x-gca-compressed":"gca","x-glulx":"ulx","x-gramps-xml":"gramps","x-install-instructions":"install","x-lzh-compressed":["lzh","lha"],"x-mie":"mie","x-mobipocket-ebook":["prc","mobi"],"x-ms-application":"application","x-ms-shortcut":"lnk","x-ms-xbap":"xbap","x-msbinder":"obd","x-mscardfile":"crd","x-msclip":"clp","x-msdownload":["exe","dll","com","bat","msi"],"x-msmediaview":["mvb","m13","m14"],"x-msmetafile":["wmf","wmz","emf","emz"],"x-msmoney":"mny","x-mspublisher":"pub","x-msschedule":"scd","x-msterminal":"trm","x-mswrite":"wri","x-nzb":"nzb","x-pkcs12":["p12","pfx"],"x-pkcs7-certificates":["p7b","spc"],"x-research-info-systems":"ris","x-silverlight-app":"xap","x-sql":"sql","x-stuffitx":"sitx","x-subrip":"srt","x-t3vm-image":"t3","x-tads":"gam","x-tex":"tex","x-tex-tfm":"tfm","x-tgif":"obj","x-xliff+xml":"xlf","x-xz":"xz","x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"xaml+xml":"xaml","xcap-diff+xml":"xdf","xenc+xml":"xenc","xml-dtd":"dtd","xop+xml":"xop","xproc+xml":"xpl","xslt+xml":"xslt","xv+xml":["mxml","xhvml","xvml","xvm"],yang:"yang","yin+xml":"yin",envoy:"evy",fractals:"fif","internet-property-stream":"acx",olescript:"axs","vnd.ms-outlook":"msg","vnd.ms-pkicertstore":"sst","x-compress":"z","x-compressed":"tgz","x-gzip":"gz","x-perfmon":["pma","pmc","pml","pmr","pmw"],"x-pkcs7-mime":["p7c","p7m"],"ynd.ms-pkipko":"pko"},audio:{amr:"amr","amr-wb":"awb",annodex:"axa",basic:["au","snd"],flac:"flac",midi:["mid","midi","kar","rmi"],mpeg:["mpga","mpega","mp2","mp3","m4a","mp2a","m2a","m3a"],mpegurl:"m3u",ogg:["oga","ogg","spx"],"prs.sid":"sid","x-aiff":["aif","aiff","aifc"],"x-gsm":"gsm","x-ms-wma":"wma","x-ms-wax":"wax","x-pn-realaudio":"ram","x-realaudio":"ra","x-sd2":"sd2","x-wav":"wav",adpcm:"adp",mp4:"mp4a",s3m:"s3m",silk:"sil","vnd.dece.audio":["uva","uvva"],"vnd.digital-winds":"eol","vnd.dra":"dra","vnd.dts":"dts","vnd.dts.hd":"dtshd","vnd.lucent.voice":"lvp","vnd.ms-playready.media.pya":"pya","vnd.nuera.ecelp4800":"ecelp4800","vnd.nuera.ecelp7470":"ecelp7470","vnd.nuera.ecelp9600":"ecelp9600","vnd.rip":"rip",webm:"weba","x-aac":"aac","x-caf":"caf","x-matroska":"mka","x-pn-realaudio-plugin":"rmp",xm:"xm",mid:["mid","rmi"]},chemical:{"x-alchemy":"alc","x-cache":["cac","cache"],"x-cache-csf":"csf","x-cactvs-binary":["cbin","cascii","ctab"],"x-cdx":"cdx","x-chem3d":"c3d","x-cif":"cif","x-cmdf":"cmdf","x-cml":"cml","x-compass":"cpa","x-crossfire":"bsd","x-csml":["csml","csm"],"x-ctx":"ctx","x-cxf":["cxf","cef"],"x-embl-dl-nucleotide":["emb","embl"],"x-gamess-input":["inp","gam","gamin"],"x-gaussian-checkpoint":["fch","fchk"],"x-gaussian-cube":"cub","x-gaussian-input":["gau","gjc","gjf"],"x-gaussian-log":"gal","x-gcg8-sequence":"gcg","x-genbank":"gen","x-hin":"hin","x-isostar":["istr","ist"],"x-jcamp-dx":["jdx","dx"],"x-kinemage":"kin","x-macmolecule":"mcm","x-macromodel-input":["mmd","mmod"],"x-mdl-molfile":"mol","x-mdl-rdfile":"rd","x-mdl-rxnfile":"rxn","x-mdl-sdfile":["sd","sdf"],"x-mdl-tgf":"tgf","x-mmcif":"mcif","x-mol2":"mol2","x-molconn-Z":"b","x-mopac-graph":"gpt","x-mopac-input":["mop","mopcrt","mpc","zmt"],"x-mopac-out":"moo","x-ncbi-asn1":"asn","x-ncbi-asn1-ascii":["prt","ent"],"x-ncbi-asn1-binary":["val","aso"],"x-pdb":["pdb","ent"],"x-rosdal":"ros","x-swissprot":"sw","x-vamas-iso14976":"vms","x-vmd":"vmd","x-xtel":"xtel","x-xyz":"xyz"},image:{gif:"gif",ief:"ief",jpeg:["jpeg","jpg","jpe"],pcx:"pcx",png:"png","svg+xml":["svg","svgz"],tiff:["tiff","tif"],"vnd.djvu":["djvu","djv"],"vnd.wap.wbmp":"wbmp","x-canon-cr2":"cr2","x-canon-crw":"crw","x-cmu-raster":"ras","x-coreldraw":"cdr","x-coreldrawpattern":"pat","x-coreldrawtemplate":"cdt","x-corelphotopaint":"cpt","x-epson-erf":"erf","x-icon":"ico","x-jg":"art","x-jng":"jng","x-nikon-nef":"nef","x-olympus-orf":"orf","x-photoshop":"psd","x-portable-anymap":"pnm","x-portable-bitmap":"pbm","x-portable-graymap":"pgm","x-portable-pixmap":"ppm","x-rgb":"rgb","x-xbitmap":"xbm","x-xpixmap":"xpm","x-xwindowdump":"xwd",bmp:"bmp",cgm:"cgm",g3fax:"g3",ktx:"ktx","prs.btif":"btif",sgi:"sgi","vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"vnd.dwg":"dwg","vnd.dxf":"dxf","vnd.fastbidsheet":"fbs","vnd.fpx":"fpx","vnd.fst":"fst","vnd.fujixerox.edmics-mmr":"mmr","vnd.fujixerox.edmics-rlc":"rlc","vnd.ms-modi":"mdi","vnd.ms-photo":"wdp","vnd.net-fpx":"npx","vnd.xiff":"xif",webp:"webp","x-3ds":"3ds","x-cmx":"cmx","x-freehand":["fh","fhc","fh4","fh5","fh7"],"x-pict":["pic","pct"],"x-tga":"tga","cis-cod":"cod",pipeg:"jfif"},message:{rfc822:["eml","mime","mht","mhtml","nws"]},model:{iges:["igs","iges"],mesh:["msh","mesh","silo"],vrml:["wrl","vrml"],"x3d+vrml":["x3dv","x3dvz"],"x3d+xml":["x3d","x3dz"],"x3d+binary":["x3db","x3dbz"],"vnd.collada+xml":"dae","vnd.dwf":"dwf","vnd.gdl":"gdl","vnd.gtw":"gtw","vnd.mts":"mts","vnd.vtu":"vtu"},text:{"cache-manifest":["manifest","appcache"],calendar:["ics","icz","ifb"],css:"css",csv:"csv",h323:"323",html:["html","htm","shtml","stm"],iuls:"uls",mathml:"mml",plain:["txt","text","brf","conf","def","list","log","in","bas"],richtext:"rtx",scriptlet:["sct","wsc"],texmacs:["tm","ts"],"tab-separated-values":"tsv","vnd.sun.j2me.app-descriptor":"jad","vnd.wap.wml":"wml","vnd.wap.wmlscript":"wmls","x-bibtex":"bib","x-boo":"boo","x-c++hdr":["h++","hpp","hxx","hh"],"x-c++src":["c++","cpp","cxx","cc"],"x-component":"htc","x-dsrc":"d","x-diff":["diff","patch"],"x-haskell":"hs","x-java":"java","x-literate-haskell":"lhs","x-moc":"moc","x-pascal":["p","pas"],"x-pcs-gcd":"gcd","x-perl":["pl","pm"],"x-python":"py","x-scala":"scala","x-setext":"etx","x-tcl":["tcl","tk"],"x-tex":["tex","ltx","sty","cls"],"x-vcalendar":"vcs","x-vcard":"vcf",n3:"n3","prs.lines.tag":"dsc",sgml:["sgml","sgm"],troff:["t","tr","roff","man","me","ms"],turtle:"ttl","uri-list":["uri","uris","urls"],vcard:"vcard","vnd.curl":"curl","vnd.curl.dcurl":"dcurl","vnd.curl.scurl":"scurl","vnd.curl.mcurl":"mcurl","vnd.dvb.subtitle":"sub","vnd.fly":"fly","vnd.fmi.flexstor":"flx","vnd.graphviz":"gv","vnd.in3d.3dml":"3dml","vnd.in3d.spot":"spot","x-asm":["s","asm"],"x-c":["c","cc","cxx","cpp","h","hh","dic"],"x-fortran":["f","for","f77","f90"],"x-opml":"opml","x-nfo":"nfo","x-sfv":"sfv","x-uuencode":"uu",webviewhtml:"htt"},video:{avif:".avif","3gpp":"3gp",annodex:"axv",dl:"dl",dv:["dif","dv"],fli:"fli",gl:"gl",mpeg:["mpeg","mpg","mpe","m1v","m2v","mp2","mpa","mpv2"],mp4:["mp4","mp4v","mpg4"],quicktime:["qt","mov"],ogg:"ogv","vnd.mpegurl":["mxu","m4u"],"x-flv":"flv","x-la-asf":["lsf","lsx"],"x-mng":"mng","x-ms-asf":["asf","asx","asr"],"x-ms-wm":"wm","x-ms-wmv":"wmv","x-ms-wmx":"wmx","x-ms-wvx":"wvx","x-msvideo":"avi","x-sgi-movie":"movie","x-matroska":["mpv","mkv","mk3d","mks"],"3gpp2":"3g2",h261:"h261",h263:"h263",h264:"h264",jpeg:"jpgv",jpm:["jpm","jpgm"],mj2:["mj2","mjp2"],"vnd.dece.hd":["uvh","uvvh"],"vnd.dece.mobile":["uvm","uvvm"],"vnd.dece.pd":["uvp","uvvp"],"vnd.dece.sd":["uvs","uvvs"],"vnd.dece.video":["uvv","uvvv"],"vnd.dvb.file":"dvb","vnd.fvt":"fvt","vnd.ms-playready.media.pyv":"pyv","vnd.uvvu.mp4":["uvu","uvvu"],"vnd.vivo":"viv",webm:"webm","x-f4v":"f4v","x-m4v":"m4v","x-ms-vob":"vob","x-smv":"smv"},"x-conference":{"x-cooltalk":"ice"},"x-world":{"x-vrml":["vrm","vrml","wrl","flr","wrz","xaf","xof"]}};(()=>{const n={};for(const e in Yr)if(Yr.hasOwnProperty(e)){for(const t in Yr[e])if(Yr[e].hasOwnProperty(t)){const i=Yr[e][t];if(typeof i=="string")n[i]=e+"/"+t;else for(let r=0;r<i.length;r++)n[i[r]]=e+"/"+t}}return n})();const Vh=[];for(let n=0;n<256;n++){let e=n;for(let t=0;t<8;t++)e&1?e=e>>>1^3988292384:e=e>>>1;Vh[n]=e}class Tl{constructor(e){this.crc=e||-1}append(e){let t=this.crc|0;for(let i=0,r=e.length|0;i<r;i++)t=t>>>8^Vh[(t^e[i])&255];this.crc=t}get(){return~this.crc}}class Wh extends TransformStream{constructor(){let e;const t=new Tl;super({transform(i,r){t.append(i),r.enqueue(i)},flush(){const i=new Uint8Array(4);new DataView(i.buffer).setUint32(0,t.get()),e.value=i}}),e=this}}function Al(n){if(typeof TextEncoder>"u"){n=unescape(encodeURIComponent(n));const e=new Uint8Array(n.length);for(let t=0;t<e.length;t++)e[t]=n.charCodeAt(t);return e}else return new TextEncoder().encode(n)}const Ct={concat(n,e){if(n.length===0||e.length===0)return n.concat(e);const t=n[n.length-1],i=Ct.getPartial(t);return i===32?n.concat(e):Ct._shiftRight(e,i,t|0,n.slice(0,n.length-1))},bitLength(n){const e=n.length;if(e===0)return 0;const t=n[e-1];return(e-1)*32+Ct.getPartial(t)},clamp(n,e){if(n.length*32<e)return n;n=n.slice(0,Math.ceil(e/32));const t=n.length;return e=e&31,t>0&&e&&(n[t-1]=Ct.partial(e,n[t-1]&2147483648>>e-1,1)),n},partial(n,e,t){return n===32?e:(t?e|0:e<<32-n)+n*1099511627776},getPartial(n){return Math.round(n/1099511627776)||32},_shiftRight(n,e,t,i){for(i===void 0&&(i=[]);e>=32;e-=32)i.push(t),t=0;if(e===0)return i.concat(n);for(let a=0;a<n.length;a++)i.push(t|n[a]>>>e),t=n[a]<<32-e;const r=n.length?n[n.length-1]:0,s=Ct.getPartial(r);return i.push(Ct.partial(e+s&31,e+s>32?t:i.pop(),1)),i}},Da={bytes:{fromBits(n){const t=Ct.bitLength(n)/8,i=new Uint8Array(t);let r;for(let s=0;s<t;s++)s&3||(r=n[s/4]),i[s]=r>>>24,r<<=8;return i},toBits(n){const e=[];let t,i=0;for(t=0;t<n.length;t++)i=i<<8|n[t],(t&3)===3&&(e.push(i),i=0);return t&3&&e.push(Ct.partial(8*(t&3),i)),e}}},Xh={};Xh.sha1=class{constructor(n){const e=this;e.blockSize=512,e._init=[1732584193,4023233417,2562383102,271733878,3285377520],e._key=[1518500249,1859775393,2400959708,3395469782],n?(e._h=n._h.slice(0),e._buffer=n._buffer.slice(0),e._length=n._length):e.reset()}reset(){const n=this;return n._h=n._init.slice(0),n._buffer=[],n._length=0,n}update(n){const e=this;typeof n=="string"&&(n=Da.utf8String.toBits(n));const t=e._buffer=Ct.concat(e._buffer,n),i=e._length,r=e._length=i+Ct.bitLength(n);if(r>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");const s=new Uint32Array(t);let a=0;for(let o=e.blockSize+i-(e.blockSize+i&e.blockSize-1);o<=r;o+=e.blockSize)e._block(s.subarray(16*a,16*(a+1))),a+=1;return t.splice(0,16*a),e}finalize(){const n=this;let e=n._buffer;const t=n._h;e=Ct.concat(e,[Ct.partial(1,1)]);for(let i=e.length+2;i&15;i++)e.push(0);for(e.push(Math.floor(n._length/4294967296)),e.push(n._length|0);e.length;)n._block(e.splice(0,16));return n.reset(),t}_f(n,e,t,i){if(n<=19)return e&t|~e&i;if(n<=39)return e^t^i;if(n<=59)return e&t|e&i|t&i;if(n<=79)return e^t^i}_S(n,e){return e<<n|e>>>32-n}_block(n){const e=this,t=e._h,i=Array(80);for(let l=0;l<16;l++)i[l]=n[l];let r=t[0],s=t[1],a=t[2],o=t[3],c=t[4];for(let l=0;l<=79;l++){l>=16&&(i[l]=e._S(1,i[l-3]^i[l-8]^i[l-14]^i[l-16]));const f=e._S(5,r)+e._f(l,s,a,o)+c+i[l]+e._key[Math.floor(l/20)]|0;c=o,o=a,a=e._S(30,s),s=r,r=f}t[0]=t[0]+r|0,t[1]=t[1]+s|0,t[2]=t[2]+a|0,t[3]=t[3]+o|0,t[4]=t[4]+c|0}};const qh={};qh.aes=class{constructor(n){const e=this;e._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],e._tables[0][0][0]||e._precompute();const t=e._tables[0][4],i=e._tables[1],r=n.length;let s,a,o,c=1;if(r!==4&&r!==6&&r!==8)throw new Error("invalid aes key size");for(e._key=[a=n.slice(0),o=[]],s=r;s<4*r+28;s++){let l=a[s-1];(s%r===0||r===8&&s%r===4)&&(l=t[l>>>24]<<24^t[l>>16&255]<<16^t[l>>8&255]<<8^t[l&255],s%r===0&&(l=l<<8^l>>>24^c<<24,c=c<<1^(c>>7)*283)),a[s]=a[s-r]^l}for(let l=0;s;l++,s--){const f=a[l&3?s:s-4];s<=4||l<4?o[l]=f:o[l]=i[0][t[f>>>24]]^i[1][t[f>>16&255]]^i[2][t[f>>8&255]]^i[3][t[f&255]]}}encrypt(n){return this._crypt(n,0)}decrypt(n){return this._crypt(n,1)}_precompute(){const n=this._tables[0],e=this._tables[1],t=n[4],i=e[4],r=[],s=[];let a,o,c,l;for(let f=0;f<256;f++)s[(r[f]=f<<1^(f>>7)*283)^f]=f;for(let f=a=0;!t[f];f^=o||1,a=s[a]||1){let p=a^a<<1^a<<2^a<<3^a<<4;p=p>>8^p&255^99,t[f]=p,i[p]=f,l=r[c=r[o=r[f]]];let h=l*16843009^c*65537^o*257^f*16843008,m=r[p]*257^p*16843008;for(let v=0;v<4;v++)n[v][f]=m=m<<24^m>>>8,e[v][p]=h=h<<24^h>>>8}for(let f=0;f<5;f++)n[f]=n[f].slice(0),e[f]=e[f].slice(0)}_crypt(n,e){if(n.length!==4)throw new Error("invalid aes block size");const t=this._key[e],i=t.length/4-2,r=[0,0,0,0],s=this._tables[e],a=s[0],o=s[1],c=s[2],l=s[3],f=s[4];let p=n[0]^t[0],h=n[e?3:1]^t[1],m=n[2]^t[2],v=n[e?1:3]^t[3],g=4,u,d,w;for(let _=0;_<i;_++)u=a[p>>>24]^o[h>>16&255]^c[m>>8&255]^l[v&255]^t[g],d=a[h>>>24]^o[m>>16&255]^c[v>>8&255]^l[p&255]^t[g+1],w=a[m>>>24]^o[v>>16&255]^c[p>>8&255]^l[h&255]^t[g+2],v=a[v>>>24]^o[p>>16&255]^c[h>>8&255]^l[m&255]^t[g+3],g+=4,p=u,h=d,m=w;for(let _=0;_<4;_++)r[e?3&-_:_]=f[p>>>24]<<24^f[h>>16&255]<<16^f[m>>8&255]<<8^f[v&255]^t[g++],u=p,p=h,h=m,m=v,v=u;return r}};const ZS={getRandomValues(n){const e=new Uint32Array(n.buffer),t=i=>{let r=987654321;const s=4294967295;return function(){return r=36969*(r&65535)+(r>>16)&s,i=18e3*(i&65535)+(i>>16)&s,(((r<<16)+i&s)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let i=0,r;i<n.length;i+=4){const s=t((r||Math.random())*4294967296);r=s()*987654071,e[i/4]=s()*4294967296|0}return n}},Yh={};Yh.ctrGladman=class{constructor(n,e){this._prf=n,this._initIv=e,this._iv=e}reset(){this._iv=this._initIv}update(n){return this.calculate(this._prf,n,this._iv)}incWord(n){if((n>>24&255)===255){let e=n>>16&255,t=n>>8&255,i=n&255;e===255?(e=0,t===255?(t=0,i===255?i=0:++i):++t):++e,n=0,n+=e<<16,n+=t<<8,n+=i}else n+=1<<24;return n}incCounter(n){(n[0]=this.incWord(n[0]))===0&&(n[1]=this.incWord(n[1]))}calculate(n,e,t){let i;if(!(i=e.length))return[];const r=Ct.bitLength(e);for(let s=0;s<i;s+=4){this.incCounter(t);const a=n.encrypt(t);e[s]^=a[0],e[s+1]^=a[1],e[s+2]^=a[2],e[s+3]^=a[3]}return Ct.clamp(e,r)}};const Wi={importKey(n){return new Wi.hmacSha1(Da.bytes.toBits(n))},pbkdf2(n,e,t,i){if(t=t||1e4,i<0||t<0)throw new Error("invalid params to pbkdf2");const r=(i>>5)+1<<2;let s,a,o,c,l;const f=new ArrayBuffer(r),p=new DataView(f);let h=0;const m=Ct;for(e=Da.bytes.toBits(e),l=1;h<(r||1);l++){for(s=a=n.encrypt(m.concat(e,[l])),o=1;o<t;o++)for(a=n.encrypt(a),c=0;c<a.length;c++)s[c]^=a[c];for(o=0;h<(r||1)&&o<s.length;o++)p.setInt32(h,s[o]),h+=4}return f.slice(0,i/8)}};Wi.hmacSha1=class{constructor(n){const e=this,t=e._hash=Xh.sha1,i=[[],[]];e._baseHash=[new t,new t];const r=e._baseHash[0].blockSize/32;n.length>r&&(n=new t().update(n).finalize());for(let s=0;s<r;s++)i[0][s]=n[s]^909522486,i[1][s]=n[s]^1549556828;e._baseHash[0].update(i[0]),e._baseHash[1].update(i[1]),e._resultHash=new t(e._baseHash[0])}reset(){const n=this;n._resultHash=new n._hash(n._baseHash[0]),n._updated=!1}update(n){const e=this;e._updated=!0,e._resultHash.update(n)}digest(){const n=this,e=n._resultHash.finalize(),t=new n._hash(n._baseHash[1]).update(e).finalize();return n.reset(),t}encrypt(n){if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(n),this.digest(n)}};const $S=typeof crypto<"u"&&typeof crypto.getRandomValues=="function",Zh="Invalid password",$h="Invalid signature",jh="zipjs-abort-check-password";function Kh(n){return $S?crypto.getRandomValues(n):ZS.getRandomValues(n)}const gr=16,jS="raw",Jh={name:"PBKDF2"},KS={name:"HMAC"},JS="SHA-1",QS=Object.assign({hash:KS},Jh),Rl=Object.assign({iterations:1e3,hash:{name:JS}},Jh),eE=["deriveBits"],ps=[8,12,16],Zr=[16,24,32],ri=10,tE=[0,0,0,0],Qh="undefined",ep="function",Va=typeof crypto!=Qh,Rs=Va&&crypto.subtle,tp=Va&&typeof Rs!=Qh,Dn=Da.bytes,nE=qh.aes,iE=Yh.ctrGladman,rE=Wi.hmacSha1;let Xd=Va&&tp&&typeof Rs.importKey==ep,qd=Va&&tp&&typeof Rs.deriveBits==ep;class sE extends TransformStream{constructor({password:e,signed:t,encryptionStrength:i,checkPasswordOnly:r}){super({start(){Object.assign(this,{ready:new Promise(s=>this.resolveReady=s),password:e,signed:t,strength:i-1,pending:new Uint8Array})},async transform(s,a){const o=this,{password:c,strength:l,resolveReady:f,ready:p}=o;c?(await oE(o,l,c,sn(s,0,ps[l]+2)),s=sn(s,ps[l]+2),r?a.error(new Error(jh)):f()):await p;const h=new Uint8Array(s.length-ri-(s.length-ri)%gr);a.enqueue(np(o,s,h,0,ri,!0))},async flush(s){const{signed:a,ctr:o,hmac:c,pending:l,ready:f}=this;await f;const p=sn(l,0,l.length-ri),h=sn(l,l.length-ri);let m=new Uint8Array;if(p.length){const v=_s(Dn,p);c.update(v);const g=o.update(v);m=ms(Dn,g)}if(a){const v=sn(ms(Dn,c.digest()),0,ri);for(let g=0;g<ri;g++)if(v[g]!=h[g])throw new Error($h)}s.enqueue(m)}})}}class aE extends TransformStream{constructor({password:e,encryptionStrength:t}){let i;super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:e,strength:t-1,pending:new Uint8Array})},async transform(r,s){const a=this,{password:o,strength:c,resolveReady:l,ready:f}=a;let p=new Uint8Array;o?(p=await lE(a,c,o),l()):await f;const h=new Uint8Array(p.length+r.length-r.length%gr);h.set(p,0),s.enqueue(np(a,r,h,p.length,0))},async flush(r){const{ctr:s,hmac:a,pending:o,ready:c}=this;await c;let l=new Uint8Array;if(o.length){const f=s.update(_s(Dn,o));a.update(f),l=ms(Dn,f)}i.signature=ms(Dn,a.digest()).slice(0,ri),r.enqueue(Kl(l,i.signature))}}),i=this}}function np(n,e,t,i,r,s){const{ctr:a,hmac:o,pending:c}=n,l=e.length-r;c.length&&(e=Kl(c,e),t=dE(t,l-l%gr));let f;for(f=0;f<=l-gr;f+=gr){const p=_s(Dn,sn(e,f,f+gr));s&&o.update(p);const h=a.update(p);s||o.update(h),t.set(ms(Dn,h),f+i)}return n.pending=sn(e,f),t}async function oE(n,e,t,i){const r=await ip(n,e,t,sn(i,0,ps[e])),s=sn(i,ps[e]);if(r[0]!=s[0]||r[1]!=s[1])throw new Error(Zh)}async function lE(n,e,t){const i=Kh(new Uint8Array(ps[e])),r=await ip(n,e,t,i);return Kl(i,r)}async function ip(n,e,t,i){n.password=null;const r=Al(t),s=await cE(jS,r,QS,!1,eE),a=await fE(Object.assign({salt:i},Rl),s,8*(Zr[e]*2+2)),o=new Uint8Array(a),c=_s(Dn,sn(o,0,Zr[e])),l=_s(Dn,sn(o,Zr[e],Zr[e]*2)),f=sn(o,Zr[e]*2);return Object.assign(n,{keys:{key:c,authentication:l,passwordVerification:f},ctr:new iE(new nE(c),Array.from(tE)),hmac:new rE(l)}),f}async function cE(n,e,t,i,r){if(Xd)try{return await Rs.importKey(n,e,t,i,r)}catch{return Xd=!1,Wi.importKey(e)}else return Wi.importKey(e)}async function fE(n,e,t){if(qd)try{return await Rs.deriveBits(n,e,t)}catch{return qd=!1,Wi.pbkdf2(e,n.salt,Rl.iterations,t)}else return Wi.pbkdf2(e,n.salt,Rl.iterations,t)}function Kl(n,e){let t=n;return n.length+e.length&&(t=new Uint8Array(n.length+e.length),t.set(n,0),t.set(e,n.length)),t}function dE(n,e){if(e&&e>n.length){const t=n;n=new Uint8Array(e),n.set(t,0)}return n}function sn(n,e,t){return n.subarray(e,t)}function ms(n,e){return n.fromBits(e)}function _s(n,e){return n.toBits(e)}const br=12;class uE extends TransformStream{constructor({password:e,passwordVerification:t,checkPasswordOnly:i}){super({start(){Object.assign(this,{password:e,passwordVerification:t}),rp(this,e)},transform(r,s){const a=this;if(a.password){const o=Yd(a,r.subarray(0,br));if(a.password=null,o[br-1]!=a.passwordVerification)throw new Error(Zh);r=r.subarray(br)}i?s.error(new Error(jh)):s.enqueue(Yd(a,r))}})}}class hE extends TransformStream{constructor({password:e,passwordVerification:t}){super({start(){Object.assign(this,{password:e,passwordVerification:t}),rp(this,e)},transform(i,r){const s=this;let a,o;if(s.password){s.password=null;const c=Kh(new Uint8Array(br));c[br-1]=s.passwordVerification,a=new Uint8Array(i.length+c.length),a.set(Zd(s,c),0),o=br}else a=new Uint8Array(i.length),o=0;a.set(Zd(s,i),o),r.enqueue(a)}})}}function Yd(n,e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=sp(n)^e[i],Jl(n,t[i]);return t}function Zd(n,e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=sp(n)^e[i],Jl(n,e[i]);return t}function rp(n,e){const t=[305419896,591751049,878082192];Object.assign(n,{keys:t,crcKey0:new Tl(t[0]),crcKey2:new Tl(t[2])});for(let i=0;i<e.length;i++)Jl(n,e.charCodeAt(i))}function Jl(n,e){let[t,i,r]=n.keys;n.crcKey0.append([e]),t=~n.crcKey0.get(),i=$d(Math.imul($d(i+ap(t)),134775813)+1),n.crcKey2.append([i>>>24]),r=~n.crcKey2.get(),n.keys=[t,i,r]}function sp(n){const e=n.keys[2]|2;return ap(Math.imul(e,e^1)>>>8)}function ap(n){return n&255}function $d(n){return n&4294967295}const jd="deflate-raw";class pE extends TransformStream{constructor(e,{chunkSize:t,CompressionStream:i,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:a,useCompressionStream:o,zipCrypto:c,signed:l,level:f}=e,p=this;let h,m,v=op(super.readable);(!a||c)&&l&&(h=new Wh,v=Un(v,h)),s&&(v=cp(v,o,{level:f,chunkSize:t},r,i)),a&&(c?v=Un(v,new hE(e)):(m=new aE(e),v=Un(v,m))),lp(p,v,async()=>{let g;a&&!c&&(g=m.signature),(!a||c)&&l&&(g=new DataView(h.value.buffer).getUint32(0)),p.signature=g})}}class mE extends TransformStream{constructor(e,{chunkSize:t,DecompressionStream:i,DecompressionStreamNative:r}){super({});const{zipCrypto:s,encrypted:a,signed:o,signature:c,compressed:l,useCompressionStream:f}=e;let p,h,m=op(super.readable);a&&(s?m=Un(m,new uE(e)):(h=new sE(e),m=Un(m,h))),l&&(m=cp(m,f,{chunkSize:t},r,i)),(!a||s)&&o&&(p=new Wh,m=Un(m,p)),lp(this,m,async()=>{if((!a||s)&&o){const v=new DataView(p.value.buffer);if(c!=v.getUint32(0,!1))throw new Error($h)}})}}function op(n){return Un(n,new TransformStream({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function lp(n,e,t){e=Un(e,new TransformStream({flush:t})),Object.defineProperty(n,"readable",{get(){return e}})}function cp(n,e,t,i,r){try{const s=e&&i?i:r;n=Un(n,new s(jd,t))}catch(s){if(e)n=Un(n,new r(jd,t));else throw s}return n}function Un(n,e){return n.pipeThrough(e)}const _E="message",gE="start",xE="pull",Kd="data",vE="ack",wE="close",fp="deflate",bE="inflate";class SE extends TransformStream{constructor(e,t){super({});const i=this,{codecType:r}=e;let s;r.startsWith(fp)?s=pE:r.startsWith(bE)&&(s=mE);let a=0;const o=new s(e,t),c=super.readable,l=new TransformStream({transform(f,p){f&&f.length&&(a+=f.length,p.enqueue(f))},flush(){const{signature:f}=o;Object.assign(i,{signature:f,size:a})}});Object.defineProperty(i,"readable",{get(){return c.pipeThrough(o).pipeThrough(l)}})}}const EE=typeof Worker!=La;class Ko{constructor(e,{readable:t,writable:i},{options:r,config:s,streamOptions:a,useWebWorkers:o,transferStreams:c,scripts:l},f){const{signal:p}=a;return Object.assign(e,{busy:!0,readable:t.pipeThrough(new yE(t,a,s),{signal:p}),writable:i,options:Object.assign({},r),scripts:l,transferStreams:c,terminate(){const{worker:h,busy:m}=e;h&&!m&&(h.terminate(),e.interface=null)},onTaskFinished(){e.busy=!1,f(e)}}),(o&&EE?TE:ME)(e,s)}}class yE extends TransformStream{constructor(e,{onstart:t,onprogress:i,size:r,onend:s},{chunkSize:a}){let o=0;super({start(){t&&Jo(t,r)},async transform(c,l){o+=c.length,i&&await Jo(i,o,r),l.enqueue(c)},flush(){e.size=o,s&&Jo(s,o)}},{highWaterMark:1,size:()=>a})}}async function Jo(n,...e){try{await n(...e)}catch{}}function ME(n,e){return{run:()=>AE(n,e)}}function TE(n,{baseURL:e,chunkSize:t}){return n.interface||Object.assign(n,{worker:LE(n.scripts[0],e,n),interface:{run:()=>RE(n,{chunkSize:t})}}),n.interface}async function AE({options:n,readable:e,writable:t,onTaskFinished:i},r){const s=new SE(n,r);try{await e.pipeThrough(s).pipeTo(t,{preventClose:!0,preventAbort:!0});const{signature:a,size:o}=s;return{signature:a,size:o}}finally{i()}}async function RE(n,e){let t,i;const r=new Promise((h,m)=>{t=h,i=m});Object.assign(n,{reader:null,writer:null,resolveResult:t,rejectResult:i,result:r});const{readable:s,options:a,scripts:o}=n,{writable:c,closed:l}=CE(n.writable);Cl({type:gE,scripts:o.slice(1),options:a,config:e,readable:s,writable:c},n)||Object.assign(n,{reader:s.getReader(),writer:c.getWriter()});const p=await r;try{await c.close()}catch{}return await l,p}function CE(n){const e=n.getWriter();let t;const i=new Promise(s=>t=s);return{writable:new WritableStream({async write(s){await e.ready,await e.write(s)},close(){e.releaseLock(),t()},abort(s){return e.abort(s)}}),closed:i}}let Jd=!0,Qd=!0;function LE(n,e,t){const i={type:"module"};let r,s;typeof n==Gh&&(n=n());try{r=new URL(n,e)}catch{r=n}if(Jd)try{s=new Worker(r)}catch{Jd=!1,s=new Worker(r,i)}else s=new Worker(r,i);return s.addEventListener(_E,a=>DE(a,t)),s}function Cl(n,{worker:e,writer:t,onTaskFinished:i,transferStreams:r}){try{let{value:s,readable:a,writable:o}=n;const c=[];if(s&&(n.value=s.buffer,c.push(n.value)),r&&Qd?(a&&c.push(a),o&&c.push(o)):n.readable=n.writable=null,c.length)try{return e.postMessage(n,c),!0}catch{Qd=!1,n.readable=n.writable=null,e.postMessage(n)}else e.postMessage(n)}catch(s){throw t&&t.releaseLock(),i(),s}}async function DE({data:n},e){const{type:t,value:i,messageId:r,result:s,error:a}=n,{reader:o,writer:c,resolveResult:l,rejectResult:f,onTaskFinished:p}=e;try{if(a){const{message:m,stack:v,code:g,name:u}=a,d=new Error(m);Object.assign(d,{stack:v,code:g,name:u}),h(d)}else{if(t==xE){const{value:m,done:v}=await o.read();Cl({type:Kd,value:m,done:v,messageId:r},e)}t==Kd&&(await c.ready,await c.write(new Uint8Array(i)),Cl({type:vE,messageId:r},e)),t==wE&&h(null,s)}}catch(m){h(m)}function h(m,v){m?f(m):l(v),c&&c.releaseLock(),p()}}let Ri=[];const Qo=[];let eu=0;async function UE(n,e){const{options:t,config:i}=e,{transferStreams:r,useWebWorkers:s,useCompressionStream:a,codecType:o,compressed:c,signed:l,encrypted:f}=t,{workerScripts:p,maxWorkers:h,terminateWorkerTimeout:m}=i;e.transferStreams=r||r===Ut;const v=!c&&!l&&!f&&!e.transferStreams;e.useWebWorkers=!v&&(s||s===Ut&&i.useWebWorkers),e.scripts=e.useWebWorkers&&p?p[o]:[],t.useCompressionStream=a||a===Ut&&i.useCompressionStream;let g;const u=Ri.find(w=>!w.busy);if(u)tu(u),g=new Ko(u,n,e,d);else if(Ri.length<h){const w={indexWorker:eu};eu++,Ri.push(w),g=new Ko(w,n,e,d)}else g=await new Promise(w=>Qo.push({resolve:w,stream:n,workerOptions:e}));return g.run();function d(w){if(Qo.length){const[{resolve:_,stream:b,workerOptions:S}]=Qo.splice(0,1);_(new Ko(w,b,S,d))}else w.worker?(tu(w),Number.isFinite(m)&&m>=0&&(w.terminateTimeout=setTimeout(()=>{Ri=Ri.filter(_=>_!=w),w.terminate()},m))):Ri=Ri.filter(_=>_!=w)}}function tu(n){const{terminateTimeout:e}=n;e&&(clearTimeout(e),n.terminateTimeout=null)}function PE(n){const e=()=>URL.createObjectURL(new Blob([`const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self;class k{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const v=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;v[e]=t}class S{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^v[255&(t^e[n])];this.t=t}get(){return~this.t}}class z extends p{constructor(){let e;const t=new S;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){const n=new i(4);new l(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}}const C={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=C.i(n);return 32===r?e.concat(t):C.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+C.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=C.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=C.i(s);return r.push(C.h(t+i&31,t+i>32?n:r.pop(),1)),r}},x={p:{m(e){const t=C.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)0==(3&s)&&(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},g(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3==(3&n)&&(t.push(r),r=0);return 3&n&&t.push(C.h(8*(3&n),r)),t}}},_=class{constructor(e){const t=this;t.blockSize=512,t.k=[1732584193,4023233417,2562383102,271733878,3285377520],t.v=[1518500249,1859775393,2400959708,3395469782],e?(t.S=e.S.slice(0),t.C=e.C.slice(0),t._=e._):t.reset()}reset(){const e=this;return e.S=e.k.slice(0),e.C=[],e._=0,e}update(e){const t=this;"string"==typeof e&&(e=x.A.g(e));const n=t.C=C.concat(t.C,e),r=t._,i=t._=r+C.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.I(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}D(){const e=this;let t=e.C;const n=e.S;t=C.concat(t,[C.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e._/4294967296)),t.push(0|e._);t.length;)e.I(t.splice(0,16));return e.reset(),n}V(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}P(e,t){return t<<e|t>>>32-e}I(t){const n=this,s=n.S,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.P(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.P(5,o)+n.V(e,c,f,a)+l+i[e]+n.v[r.floor(e/20)]|0;l=a,a=f,f=n.P(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},A={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},I={importKey:e=>new I.R(x.p.g(e)),B(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=C;for(t=x.p.g(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},R:class{constructor(e){const t=this,n=t.M=_,r=[[],[]];t.K=[new n,new n];const s=t.K[0].blockSize/32;e.length>s&&(e=(new n).update(e).D());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.K[0].update(r[0]),t.K[1].update(r[1]),t.U=new n(t.K[0])}reset(){const e=this;e.U=new e.M(e.K[0]),e.N=!1}update(e){this.N=!0,this.U.update(e)}digest(){const e=this,t=e.U.D(),n=new e.M(e.K[1]).update(t).D();return e.reset(),n}encrypt(e){if(this.N)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},D=void 0!==h&&"function"==typeof h.getRandomValues,V="Invalid password",P="Invalid signature",R="zipjs-abort-check-password";function B(e){return D?h.getRandomValues(e):A.getRandomValues(e)}const E=16,M={name:"PBKDF2"},K=t.assign({hash:{name:"HMAC"}},M),U=t.assign({iterations:1e3,hash:{name:"SHA-1"}},M),N=["deriveBits"],O=[8,12,16],T=[16,24,32],W=10,j=[0,0,0,0],H="undefined",L="function",F=typeof h!=H,q=F&&h.subtle,G=F&&typeof q!=H,J=x.p,Q=class{constructor(e){const t=this;t.O=[[[],[],[],[],[]],[[],[],[],[],[]]],t.O[0][0][0]||t.T();const n=t.O[0][4],r=t.O[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.v=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.W(e,0)}decrypt(e){return this.W(e,1)}T(){const e=this.O[0],t=this.O[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}W(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.v[t],r=n.length/4-2,i=[0,0,0,0],o=this.O[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},X=class{constructor(e,t){this.j=e,this.H=t,this.L=t}reset(){this.L=this.H}update(e){return this.F(this.j,e,this.L)}q(e){if(255==(e>>24&255)){let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}G(e){0===(e[0]=this.q(e[0]))&&(e[1]=this.q(e[1]))}F(e,t,n){let r;if(!(r=t.length))return[];const s=C.l(t);for(let s=0;r>s;s+=4){this.G(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return C.u(t,s)}},Y=I.R;let Z=F&&G&&typeof q.importKey==L,$=F&&G&&typeof q.deriveBits==L;class ee extends p{constructor({password:e,signed:n,encryptionStrength:r,checkPasswordOnly:o}){super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:e,signed:n,X:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:c,J:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await re(e,t,n,ie(r,0,O[t])),o=ie(r,O[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(V)})(n,c,r,ie(e,0,O[c]+2)),e=ie(e,O[c]+2),o?t.error(new s(R)):f()):await a;const l=new i(e.length-W-(e.length-W)%E);t.enqueue(ne(n,e,l,0,W,!0))},async flush(e){const{signed:t,Y:n,Z:r,pending:o,ready:c}=this;await c;const f=ie(o,0,o.length-W),a=ie(o,o.length-W);let l=new i;if(f.length){const e=ce(J,f);r.update(e);const t=n.update(e);l=oe(J,t)}if(t){const e=ie(oe(J,r.digest()),0,W);for(let t=0;W>t;t++)if(e[t]!=a[t])throw new s(P)}e.enqueue(l)}})}}class te extends p{constructor({password:e,encryptionStrength:n}){let r;super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:e,X:n-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:s,J:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=B(new i(O[t]));return se(r,await re(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%E);a.set(f,0),t.enqueue(ne(n,e,a,f.length,0))},async flush(e){const{Y:t,Z:n,pending:s,ready:o}=this;await o;let c=new i;if(s.length){const e=t.update(ce(J,s));n.update(e),c=oe(J,e)}r.signature=oe(J,n.digest()).slice(0,W),e.enqueue(se(c,r.signature))}}),r=this}}function ne(e,t,n,r,s,o){const{Y:c,Z:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=se(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%E)),u=0;l-E>=u;u+=E){const e=ce(J,ie(t,u,u+E));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(oe(J,s),u+r)}return e.pending=ie(t,u),n}async function re(n,r,s,o){n.password=null;const c=(e=>{if(void 0===w){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(s),f=await(async(e,t,n,r,s)=>{if(!Z)return I.importKey(t);try{return await q.importKey("raw",t,n,!1,s)}catch(e){return Z=!1,I.importKey(t)}})(0,c,K,0,N),a=await(async(e,t,n)=>{if(!$)return I.B(t,e.salt,U.iterations,n);try{return await q.deriveBits(e,t,n)}catch(r){return $=!1,I.B(t,e.salt,U.iterations,n)}})(t.assign({salt:o},U),f,8*(2*T[r]+2)),l=new i(a),u=ce(J,ie(l,0,T[r])),h=ce(J,ie(l,T[r],2*T[r])),d=ie(l,2*T[r]);return t.assign(n,{keys:{key:u,$:h,passwordVerification:d},Y:new X(new Q(u),e.from(j)),Z:new Y(h)}),d}function se(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ie(e,t,n){return e.subarray(t,n)}function oe(e,t){return e.m(t)}function ce(e,t){return e.g(t)}class fe extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),we(this,e)},transform(e,t){const n=this;if(n.password){const t=le(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(V);e=e.subarray(12)}r?t.error(new s(R)):t.enqueue(le(n,e))}})}}class ae extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),we(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=B(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(ue(n,t),0),s=12}else r=new i(e.length),s=0;r.set(ue(n,e),s),t.enqueue(r)}})}}function le(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=de(e)^t[r],he(e,n[r]);return n}function ue(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=de(e)^t[r],he(e,t[r]);return n}function we(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,ee:new S(r[0]),te:new S(r[2])});for(let t=0;t<n.length;t++)he(e,n.charCodeAt(t))}function he(e,t){let[n,s,i]=e.keys;e.ee.append([t]),n=~e.ee.get(),s=ye(r.imul(ye(s+pe(n)),134775813)+1),e.te.append([s>>>24]),i=~e.te.get(),e.keys=[n,s,i]}function de(e){const t=2|e.keys[2];return pe(r.imul(t,1^t)>>>8)}function pe(e){return 255&e}function ye(e){return 4294967295&e}const me="deflate-raw";class be extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=ke(super.readable);i&&!c||!f||(w=new z,d=ze(d,w)),s&&(d=Se(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=ze(d,new ae(e)):(h=new te(e),d=ze(d,h))),ve(u,d,(async()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=new l(w.value.buffer).getUint32(0)),u.signature=e}))}}class ge extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=ke(super.readable);o&&(i?d=ze(d,new fe(e)):(h=new ee(e),d=ze(d,h))),a&&(d=Se(d,u,{chunkSize:t},r,n)),o&&!i||!c||(w=new z,d=ze(d,w)),ve(this,d,(async()=>{if((!o||i)&&c){const e=new l(w.value.buffer);if(f!=e.getUint32(0,!1))throw new s(P)}}))}}function ke(e){return ze(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ve(e,n,r){n=ze(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function Se(e,t,n,r,s){try{e=ze(e,new(t&&r?r:s)(me,n))}catch(r){if(!t)throw r;e=ze(e,new s(me,n))}return e}function ze(e,t){return e.pipeThrough(t)}const Ce="data";class xe extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=be:s.startsWith("inflate")&&(i=ge);let o=0;const c=new i(e,n),f=super.readable,a=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=c;t.assign(r,{signature:e,size:o})}});t.defineProperty(r,"readable",{get:()=>f.pipeThrough(c).pipeThrough(a)})}}const _e=new a,Ae=new a;let Ie=0;async function De(e){try{const{options:t,scripts:r,config:s}=e;r&&r.length&&importScripts.apply(void 0,r),self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new k(self.Deflate)),self.Inflate&&(s.DecompressionStream=new k(self.Inflate));const i={highWaterMark:1,size:()=>s.chunkSize},o=e.readable||new y({async pull(e){const t=new u((e=>_e.set(Ie,e)));Ve({type:"pull",messageId:Ie}),Ie=(Ie+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));Ae.set(Ie,t),Ve({type:Ce,value:e,messageId:Ie}),Ie=(Ie+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new xe(t,s);await o.pipeThrough(f).pipeTo(c,{preventClose:!0,preventAbort:!0});try{await c.close()}catch(e){}const{signature:a,size:l}=f;Ve({type:"close",result:{signature:a,size:l}})}catch(e){Pe(e)}}function Ve(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Pe(e){const{message:t,stack:n,code:r,name:s}=e;d({error:{message:t,stack:n,code:r,name:s}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&De(e),t==Ce){const e=_e.get(n);_e.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=Ae.get(n);Ae.delete(n),e()}}catch(e){Pe(e)}}));const Re=-2;function Be(t){return Ee(t.map((([t,n])=>new e(t).fill(n,0,t))))}function Ee(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?Ee(n):n)),[])}const Me=[0,1,2,3].concat(...Be([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Ke(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.ne=n=>{const s=e.re,i=e.ie.se,o=e.ie.oe;let c,f,a,l=-1;for(n.ce=0,n.fe=573,c=0;o>c;c++)0!==s[2*c]?(n.ae[++n.ce]=l=c,n.le[c]=0):s[2*c+1]=0;for(;2>n.ce;)a=n.ae[++n.ce]=2>l?++l:0,s[2*a]=1,n.le[a]=0,n.ue--,i&&(n.we-=i[2*a+1]);for(e.he=l,c=r.floor(n.ce/2);c>=1;c--)n.de(s,c);a=o;do{c=n.ae[1],n.ae[1]=n.ae[n.ce--],n.de(s,1),f=n.ae[1],n.ae[--n.fe]=c,n.ae[--n.fe]=f,s[2*a]=s[2*c]+s[2*f],n.le[a]=r.max(n.le[c],n.le[f])+1,s[2*c+1]=s[2*f+1]=a,n.ae[1]=a++,n.de(s,1)}while(n.ce>=2);n.ae[--n.fe]=n.ae[1],(t=>{const n=e.re,r=e.ie.se,s=e.ie.pe,i=e.ie.ye,o=e.ie.me;let c,f,a,l,u,w,h=0;for(l=0;15>=l;l++)t.be[l]=0;for(n[2*t.ae[t.fe]+1]=0,c=t.fe+1;573>c;c++)f=t.ae[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.he||(t.be[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.ue+=w*(l+u),r&&(t.we+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.be[l];)l--;t.be[l]--,t.be[l+1]+=2,t.be[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.be[l];0!==f;)a=t.ae[--c],a>e.he||(n[2*a+1]!=l&&(t.ue+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;15>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.he,n.be)}}function Ue(e,t,n,r,s){const i=this;i.se=e,i.pe=t,i.ye=n,i.oe=r,i.me=s}Ke.ge=[0,1,2,3,4,5,6,7].concat(...Be([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),Ke.ke=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],Ke.ve=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],Ke.Se=e=>256>e?Me[e]:Me[256+(e>>>7)],Ke.ze=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ke.Ce=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ke.xe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ke._e=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Ne=Be([[144,8],[112,9],[24,7],[8,8]]);Ue.Ae=Ee([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Ne[t]])));const Oe=Be([[30,5]]);function Te(e,t,n,r,s){const i=this;i.Ie=e,i.De=t,i.Ve=n,i.Pe=r,i.Re=s}Ue.Be=Ee([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,Oe[t]]))),Ue.Ee=new Ue(Ue.Ae,Ke.ze,257,286,15),Ue.Me=new Ue(Ue.Be,Ke.Ce,0,30,15),Ue.Ke=new Ue(null,Ke.xe,0,19,7);const We=[new Te(0,0,0,0,0),new Te(4,4,8,4,1),new Te(4,5,16,8,1),new Te(4,6,32,32,1),new Te(4,4,16,16,2),new Te(8,16,32,32,2),new Te(8,16,128,128,2),new Te(8,32,128,256,2),new Te(32,128,258,1024,2),new Te(32,258,258,4096,2)],je=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],He=113,Le=666,Fe=262;function qe(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function Ge(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,_,A,I,D,V,P,R,B,E,M,K;const U=new Ke,N=new Ke,O=new Ke;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)K[2*t]=0;E[512]=1,e.ue=e.we=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?K[2*n]+=i:0!==n?(n!=r&&K[2*n]++,K[32]++):i>10?K[36]++:K[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ue[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,K)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,K),o--),Y(16,K),X(o-3,2)):o>10?(Y(18,K),X(o-11,7)):(Y(17,K),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Ne[W]=t,e.Oe[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(Ke.ge[n]+256+1)]++,M[2*Ke.Se(t)]++),0==(8191&W)&&V>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+Ke.Ce[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Ne[c],s=e.Oe[c],c++,0===r?Y(s,t):(i=Ke.ge[s],Y(i+256+1,t),o=Ke.ze[i],0!==o&&(s-=Ke.ke[i],X(s,o)),r--,i=Ke.Se(r),Y(i,n),o=Ke.Ce[i],0!==o&&(r-=Ke.ve[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ue.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;V>0?(U.ne(e),N.ne(e),o=(()=>{let t;for(G(E,U.he),G(M,N.he),O.ne(e),t=18;t>=3&&0===K[2*Ke._e[t]+1];t--);return e.ue+=14+3*(t+1),t})(),s=e.ue+3+7>>>3,i=e.we+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(Ue.Ae,Ue.Be)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(K[2*Ke._e[r]+1],3);Z(E,e-1),Z(M,t-1)})(U.he+1,N.he+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.Te()}function ie(){let e,n,r,s;do{if(s=w-_-C,0===s&&0===C&&0===_)s=f;else if(-1==s)s--;else if(C>=f+f-Fe){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.We)return;e=t.je(u,C+_,s),_+=e,3>_||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(Fe>_&&0!==t.We)}function oe(e){let t,n,r=I,s=C,i=A;const o=C>f-Fe?C-(f-Fe):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>A||(r>>=2),c>_&&(c=_);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>_?_:i}e.le=[],e.be=[],e.ae=[],E=[],M=[],K=[],e.de=(t,n)=>{const r=e.ae,s=r[n];let i=n<<1;for(;i<=e.ce&&(i<e.ce&&qe(t,r[i+1],r[i],e.le)&&i++,!qe(t,s,r[i],e.le));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.He=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Le=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?Re:(t.Fe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ue=new i(4*T),s=4*T,e.Ne=new o(T),e.Oe=new i(T),V=S,P=G,(t=>(t.qe=t.Ge=0,t.Le=null,e.pending=0,e.Je=0,n=He,c=0,U.re=E,U.ie=Ue.Ee,N.re=M,N.ie=Ue.Me,O.re=K,O.ie=Ue.Ke,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;D=We[V].De,R=We[V].Ie,B=We[V].Ve,I=We[V].Pe,C=0,k=0,_=0,v=A=2,z=0,p=0})(),0))(t))),e.Qe=()=>42!=n&&n!=He&&n!=Le?Re:(e.Oe=null,e.Ne=null,e.Ue=null,d=null,h=null,u=null,e.Fe=null,n==He?-3:0),e.Xe=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?Re:(We[V].Re!=We[t].Re&&0!==e.qe&&(r=e.Ye(1)),V!=t&&(V=t,D=We[V].De,R=We[V].Ie,B=We[V].Ve,I=We[V].Pe),P=n,r)},e.Ze=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return Re;if(3>i)return 0;for(i>f-Fe&&(i=f-Fe,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ye=(r,i)=>{let o,w,m,I,R;if(i>4||0>i)return Re;if(!r.$e||!r.et&&0!==r.We||n==Le&&4!=i)return r.Le=je[4],Re;if(0===r.tt)return r.Le=je[7],-5;var B;if(t=r,I=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(V-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=He,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.Te(),0===t.tt)return c=-1,0}else if(0===t.We&&I>=i&&4!=i)return t.Le=je[7],-5;if(n==Le&&0!==t.We)return r.Le=je[7],-5;if(0!==t.We||0!==_||0!=i&&n!=Le){switch(R=-1,We[V].Re){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=_){if(ie(),0===_&&0==e)return 0;if(0===_)break}if(C+=_,_=0,n=k+r,(0===C||C>=n)&&(_=C-n,C=n,se(!1),0===t.tt))return 0;if(C-k>=f-Fe&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(Fe>_){if(ie(),Fe>_&&0==e)return 0;if(0===_)break}if(3>_||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-Fe||2!=P&&(v=oe(r)),3>v)n=ee(0,255&u[C]),_--,C++;else if(n=ee(C-x,v-3),_-=v,v>D||3>_)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!=--v);C++}if(n&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(Fe>_){if(ie(),Fe>_&&0==e)return 0;if(0===_)break}if(3>_||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),A=v,S=x,v=2,0!==s&&D>A&&f-Fe>=(C-s&65535)&&(2!=P&&(v=oe(s)),5>=v&&(1==P||3==v&&C-x>4096)&&(v=2)),3>A||v>A)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,_--,0===t.tt)return 0}else z=1,C++,_--;else{r=C+_-3,n=ee(C-1-S,A-3),_-=A-1,A-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!=--A);if(z=0,v=2,C++,n&&(se(!1),0===t.tt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=Le),0==R||2==R)return 0===t.tt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,Ue.Ae),$(),9>1+H+10-F&&(X(2,3),Y(256,Ue.Ae),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.Te(),0===t.tt)return c=-1,0}}return 4!=i?0:1}}function Je(){const e=this;e.nt=0,e.rt=0,e.We=0,e.qe=0,e.tt=0,e.Ge=0}function Qe(e){const t=new Je,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.He(f),t.$e=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,o=t.Ye(0),0!=o)throw new s("deflating: "+t.Le);t.rt&&(t.rt==n?w.push(new i(c)):w.push(c.subarray(0,t.rt))),u+=t.rt,r&&t.nt>0&&t.nt!=a&&(r(t.nt),a=t.nt)}while(t.We>0||0===t.tt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]?new i(w[0]):new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.rt=0,t.tt=n,e=t.Ye(4),1!=e&&0!=e)throw new s("deflating: "+t.Le);n-t.tt>0&&a.push(c.slice(0,t.rt)),f+=t.rt}while(t.We>0||0===t.tt);return t.Qe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}Je.prototype={He(e,t){const n=this;return n.Fe=new Ge,t||(t=15),n.Fe.He(n,e,t)},Ye(e){const t=this;return t.Fe?t.Fe.Ye(t,e):Re},Qe(){const e=this;if(!e.Fe)return Re;const t=e.Fe.Qe();return e.Fe=null,t},Xe(e,t){const n=this;return n.Fe?n.Fe.Xe(n,e,t):Re},Ze(e,t){const n=this;return n.Fe?n.Fe.Ze(n,e,t):Re},je(e,t,n){const r=this;let s=r.We;return s>n&&(s=n),0===s?0:(r.We-=s,e.set(r.et.subarray(r.nt,r.nt+s),t),r.nt+=s,r.qe+=s,s)},Te(){const e=this;let t=e.Fe.pending;t>e.tt&&(t=e.tt),0!==t&&(e.$e.set(e.Fe.Ue.subarray(e.Fe.Je,e.Fe.Je+t),e.rt),e.rt+=t,e.Fe.Je+=t,e.Ge+=t,e.tt-=t,e.Fe.pending-=t,0===e.Fe.pending&&(e.Fe.Je=0))}};const Xe=-2,Ye=-3,Ze=-5,$e=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],et=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],tt=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],nt=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],rt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],st=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],it=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function ot(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,_,A,I,D;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,0;for(S=u[0],k=1;15>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=15;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,I=1<<k;g>k;k++,I<<=1)if(0>(I-=n[k]))return Ye;if(0>(I-=n[g]))return Ye;for(n[g]+=I,i[1]=k=0,C=1,A=2;0!=--g;)i[A]=k+=n[C],A++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,_=-S,s[0]=0,x=0,D=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>_+S;){if(b++,_+=S,D=m-_,D=D>S?S:D,(y=1<<(k=v-_))>p+1&&(y-=p+1,A=v,D>k))for(;++k<D&&(y<<=1)>n[++A];)y-=n[A];if(D=1<<k,h[0]+D>1440)return Ye;s[b]=x=h[0],h[0]+=D,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>_-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-_,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-_,k=g>>>_;D>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;0!=(g&k);k>>>=1)g^=k;for(g^=k,z=(1<<_)-1;(g&z)!=i[b];)b--,_-=S,z=(1<<_)-1}return 0!==I&&1!=m?Ze:0}function c(o){let c;for(e||(e=[],t=[],n=new f(16),r=[],s=new f(15),i=new f(16)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,15),0),i.set(n.subarray(0,16),0)}this.st=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==Ye?f.Le="oversubscribed dynamic bit lengths tree":a!=Ze&&0!==r[0]||(f.Le="incomplete dynamic bit lengths tree",a=Ye),a},this.it=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,nt,rt,a,i,u,e,t),0!=h||0===i[0]?(h==Ye?w.Le="oversubscribed literal/length tree":-4!=h&&(w.Le="incomplete literal/length tree",h=Ye),h):(c(288),h=o(s,n,r,0,st,it,l,f,u,e,t),0!=h||0===f[0]&&n>257?(h==Ye?w.Le="oversubscribed distance tree":h==Ze?(w.Le="incomplete distance tree",h=Ye):-4!=h&&(w.Le="empty distance tree with lengths",h=Ye),h):0)}}function ct(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.nt,p=c.We,w=o.ot,h=o.ct,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=$e[e],g=$e[t];do{for(;20>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15,k=a[z+2]+(w&$e[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15;u>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(v=a[z+2]+(w&$e[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--u);else o.lt.set(o.lt.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.lt[y++]=o.lt[S++],o.lt[y++]=o.lt[S++],k-=2):(o.lt.set(o.lt.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--k);else o.lt.set(o.lt.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(0!=(64&u))return c.Le="invalid distance code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,Ye;f+=a[z+2],f+=w&$e[u],z=3*(l+f),u=a[z]}break}if(0!=(64&u))return 0!=(32&u)?(k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,1):(c.Le="invalid literal/length code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,Ye);if(f+=a[z+2],f+=w&$e[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,0}e.init=(e,i,o,c,f,a)=>{t=0,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.ut=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,_=0,A=0;for(A=y.nt,v=y.We,x=e.ot,_=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case 0:if(z>=258&&v>=10&&(e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,m=p(u,w,r,h,s,d,e,y),A=y.nt,v=y.We,x=e.ot,_=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S,0!=m)){t=1==m?7:9;break}c=u,n=r,o=h,t=1;case 1:for(b=c;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}if(g=3*(o+(x&$e[b])),x>>>=n[g+1],_-=n[g+1],k=n[g],0===k){f=n[g+2],t=6;break}if(0!=(16&k)){a=15&k,i=n[g+2],t=2;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}if(0!=(32&k)){t=7;break}return t=9,y.Le="invalid literal/length code",m=Ye,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);case 2:for(b=a;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}i+=x&$e[b],x>>=b,_-=b,c=w,n=s,o=d,t=3;case 3:for(b=c;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}if(g=3*(o+(x&$e[b])),x>>=n[g+1],_-=n[g+1],k=n[g],0!=(16&k)){a=15&k,l=n[g+2],t=4;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}return t=9,y.Le="invalid distance code",m=Ye,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);case 4:for(b=a;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}l+=x&$e[b],x>>=b,_-=b,t=5;case 5:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);e.lt[S++]=e.lt[C++],z--,C==e.end&&(C=0),i--}t=0;break;case 6:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,e.lt[S++]=f,z--,t=0;break;case 7:if(_>7&&(_-=8,v++,A--),e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);t=8;case 8:return m=1,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);case 9:return m=Ye,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);default:return m=Xe,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m)}},e.ht=()=>{}}ot.dt=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=et,r[0]=tt,0);const ft=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function at(e,t){const n=this;let r,s=0,o=0,c=0,a=0;const l=[0],u=[0],w=new ct;let h=0,d=new f(4320);const p=new ot;n.ct=0,n.ot=0,n.lt=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),6==s&&w.ht(e),s=0,n.ct=0,n.ot=0,n.read=n.write=0},n.reset(e,null),n.wt=(e,t)=>{let r,s,i;return s=e.rt,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.tt&&(r=e.tt),0!==r&&t==Ze&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.tt&&(r=e.tt),0!==r&&t==Ze&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r),e.rt=s,n.read=i,t},n.ut=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,_,A,I,D;switch(s){case 0:for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=1;break;case 1:S=[],z=[],C=[[]],x=[[]],ot.dt(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=6;break;case 2:f>>>=3,y-=3,s=3;break;case 3:return f>>>=3,y-=3,s=9,e.Le="invalid block type",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}break;case 1:for(;32>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=9,e.Le="invalid stored block lengths",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);o=65535&f,f=y=0,s=0!==o?2:0!==h?7:0;break;case 2:if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(t=0,i=o,i>b&&(i=b),i>k&&(i=k),n.lt.set(e.je(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?7:0;break;case 3:for(;14>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=9,e.Le="too many length or distance symbols",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=4;case 4:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}r[ft[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[ft[a++]]=0;if(l[0]=7,i=p.st(r,l,u,d,e),0!=i)return(t=i)==Ye&&(r=null,s=9),n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);a=0,s=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&$e[i]))+1],w=d[3*(u[0]+(f&$e[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&$e[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=9,e.Le="invalid bit length repeat",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,_=[],A=[],I=[],D=[],_[0]=9,A[0]=6,i=c,i=p.it(257+(31&i),1+(i>>5&31),r,_,A,I,D,d,e),0!=i)return i==Ye&&(r=null,s=9),t=i,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w.init(_[0],A[0],d,I[0],d,D[0]),s=6;case 6:if(n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,1!=(t=w.ut(n,e,t)))return n.wt(e,t);if(t=0,w.ht(e),m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=0;break}s=7;case 7:if(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);s=8;case 8:return t=1,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);case 9:return t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);default:return t=Xe,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}}},n.ht=e=>{n.reset(e,null),n.lt=null,d=null},n.yt=(e,t,r)=>{n.lt.set(e.subarray(t,t+r),0),n.read=n.write=r},n.bt=()=>1==s?1:0}const lt=13,ut=[0,0,255,255];function wt(){const e=this;function t(e){return e&&e.gt?(e.qe=e.Ge=0,e.Le=null,e.gt.mode=7,e.gt.kt.reset(e,null),0):Xe}e.mode=0,e.method=0,e.vt=[0],e.St=0,e.marker=0,e.zt=0,e.Ct=t=>(e.kt&&e.kt.ht(t),e.kt=null,0),e.xt=(n,r)=>(n.Le=null,e.kt=null,8>r||r>15?(e.Ct(n),Xe):(e.zt=r,n.gt.kt=new at(n,1<<r),t(n),0)),e._t=(e,t)=>{let n,r;if(!e||!e.gt||!e.et)return Xe;const s=e.gt;for(t=4==t?Ze:0,n=Ze;;)switch(s.mode){case 0:if(0===e.We)return n;if(n=t,e.We--,e.qe++,8!=(15&(s.method=e.ft(e.nt++)))){s.mode=lt,e.Le="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.zt){s.mode=lt,e.Le="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.We)return n;if(n=t,e.We--,e.qe++,r=255&e.ft(e.nt++),((s.method<<8)+r)%31!=0){s.mode=lt,e.Le="incorrect header check",s.marker=5;break}if(0==(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St=(255&e.ft(e.nt++))<<24&4278190080,s.mode=3;case 3:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<16&16711680,s.mode=4;case 4:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<8&65280,s.mode=5;case 5:return 0===e.We?n:(n=t,e.We--,e.qe++,s.St+=255&e.ft(e.nt++),s.mode=6,2);case 6:return s.mode=lt,e.Le="need dictionary",s.marker=0,Xe;case 7:if(n=s.kt.ut(e,n),n==Ye){s.mode=lt,s.marker=0;break}if(0==n&&(n=t),1!=n)return n;n=t,s.kt.reset(e,s.vt),s.mode=12;case 12:return e.We=0,1;case lt:return Ye;default:return Xe}},e.At=(e,t,n)=>{let r=0,s=n;if(!e||!e.gt||6!=e.gt.mode)return Xe;const i=e.gt;return s<1<<i.zt||(s=(1<<i.zt)-1,r=n-s),i.kt.yt(t,r,s),i.mode=7,0},e.It=e=>{let n,r,s,i,o;if(!e||!e.gt)return Xe;const c=e.gt;if(c.mode!=lt&&(c.mode=lt,c.marker=0),0===(n=e.We))return Ze;for(r=e.nt,s=c.marker;0!==n&&4>s;)e.ft(r)==ut[s]?s++:s=0!==e.ft(r)?0:4-s,r++,n--;return e.qe+=r-e.nt,e.nt=r,e.We=n,c.marker=s,4!=s?Ye:(i=e.qe,o=e.Ge,t(e),e.qe=i,e.Ge=o,c.mode=7,0)},e.Dt=e=>e&&e.gt&&e.gt.kt?e.gt.kt.bt():Xe}function ht(){}function dt(e){const t=new ht,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.xt(),t.$e=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,0!==t.We||c||(t.nt=0,c=!0),a=t._t(0),c&&a===Ze){if(0!==t.We)throw new s("inflating: bad input")}else if(0!==a&&1!==a)throw new s("inflating: "+t.Le);if((c||1===a)&&t.We===e.length)throw new s("inflating: bad input");t.rt&&(t.rt===n?f.push(new i(o)):f.push(o.subarray(0,t.rt))),h+=t.rt,r&&t.nt>0&&t.nt!=u&&(r(t.nt),u=t.nt)}while(t.We>0||0===t.tt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]?new i(f[0]):new i,l}},this.flush=()=>{t.Ct()}}ht.prototype={xt(e){const t=this;return t.gt=new wt,e||(e=15),t.gt.xt(t,e)},_t(e){const t=this;return t.gt?t.gt._t(t,e):Xe},Ct(){const e=this;if(!e.gt)return Xe;const t=e.gt.Ct(e);return e.gt=null,t},It(){const e=this;return e.gt?e.gt.It(e):Xe},At(e,t){const n=this;return n.gt?n.gt.At(n,e,t):Xe},ft(e){return this.et[e]},je(e,t){return this.et.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=Qe,self.Inflate=dt};
`],{type:"text/javascript"}));n({workerScripts:{inflate:[e],deflate:[e]}})}const IE="Writer iterator completed too soon",FE="text/plain",NE="Content-Type",kE=64*1024,dp="writable";class Ql{constructor(){this.size=0}init(){this.initialized=!0}}class up extends Ql{get readable(){const e=this,{chunkSize:t=kE}=e,i=new ReadableStream({start(){this.chunkOffset=0},async pull(r){const{offset:s=0,size:a,diskNumberStart:o}=i,{chunkOffset:c}=this;r.enqueue(await Dl(e,s+c,Math.min(t,a-c),o)),c+t>a?r.close():this.chunkOffset+=t}});return i}}class Ui extends up{constructor(e){super(),Object.assign(this,{blob:e,size:e.size})}async readUint8Array(e,t){const i=this,r=e+t,s=e||r<i.size?i.blob.slice(e,r):i.blob;return new Uint8Array(await s.arrayBuffer())}}class hp extends Ql{constructor(e){super();const t=this,i=new TransformStream,r=[];e&&r.push([NE,e]),Object.defineProperty(t,dp,{get(){return i.writable}}),t.blob=new Response(i.readable,{headers:r}).blob()}getData(){return this.blob}}class OE extends Ui{constructor(e){super(new Blob([e],{type:FE}))}}class BE extends up{constructor(e){super(),this.readers=e}async init(){const e=this,{readers:t}=e;e.lastDiskNumber=0,e.lastDiskOffset=0,await Promise.all(t.map(async(i,r)=>{await i.init(),r!=t.length-1&&(e.lastDiskOffset+=i.size),e.size+=i.size})),super.init()}async readUint8Array(e,t,i=0){const r=this,{readers:s}=this;let a,o=i;o==-1&&(o=s.length-1);let c=e;for(;c>=s[o].size;)c-=s[o].size,o++;const l=s[o],f=l.size;if(c+t<=f)a=await Dl(l,c,t);else{const p=f-c;a=new Uint8Array(t),a.set(await Dl(l,c,p)),a.set(await r.readUint8Array(e+p,t-p,i),p)}return r.lastDiskNumber=Math.max(o,r.lastDiskNumber),a}}class Ll extends Ql{constructor(e,t=4294967295){super();const i=this;Object.assign(i,{diskNumber:0,diskOffset:0,size:0,maxSize:t,availableSize:t});let r,s,a;const o=new WritableStream({async write(f){const{availableSize:p}=i;if(a)f.length>=p?(await c(f.slice(0,p)),await l(),i.diskOffset+=r.size,i.diskNumber++,a=null,await this.write(f.slice(p))):await c(f);else{const{value:h,done:m}=await e.next();if(m&&!h)throw new Error(IE);r=h,r.size=0,r.maxSize&&(i.maxSize=r.maxSize),i.availableSize=i.maxSize,await gs(r),s=h.writable,a=s.getWriter(),await this.write(f)}},async close(){await a.ready,await l()}});Object.defineProperty(i,dp,{get(){return o}});async function c(f){const p=f.length;p&&(await a.ready,await a.write(f),r.size+=p,i.size+=p,i.availableSize-=p)}async function l(){s.size=r.size,await a.close()}}}async function gs(n,e){n.init&&!n.initialized&&await n.init(e)}function zE(n){return Array.isArray(n)&&(n=new BE(n)),n instanceof ReadableStream&&(n={readable:n}),n}function GE(n){n.writable===Ut&&typeof n.next==Gh&&(n=new Ll(n)),n instanceof WritableStream&&(n={writable:n});const{writable:e}=n;return e.size===Ut&&(e.size=0),n instanceof Ll||Object.assign(n,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),n}function Dl(n,e,t,i){return n.readUint8Array(e,t,i)}const HE="\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split("");HE.length==256;const VE="filename",WE="rawFilename",XE="comment",qE="rawComment",YE="uncompressedSize",ZE="compressedSize",$E="offset",nu="diskNumberStart",pp="lastModDate",jE="rawLastModDate",mp="lastAccessDate",_p="creationDate",gp="internalFileAttribute",xp="externalFileAttribute",vp="msDosCompatible",wp="zip64",KE=[VE,WE,ZE,YE,pp,jE,XE,qE,mp,_p,$E,nu,nu,gp,xp,vp,wp,"directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"];class bp{constructor(e){KE.forEach(t=>this[t]=e[t])}}const JE="File already exists",QE="Zip file comment exceeds 64KB",ey="File entry comment exceeds 64KB",ty="File entry name exceeds 64KB",iu="Version exceeds 65535",ny="The strength must equal 1, 2, or 3",iy="Extra field type exceeds 65535",ry="Extra field data exceeds 64KB",ec="Zip64 is not supported (make sure 'keepOrder' is set to 'true')",ru=new Uint8Array([7,0,2,0,65,69,3,0,0]);let el=0;const su=[];class sy{constructor(e,t={}){e=GE(e),Object.assign(this,{writer:e,addSplitZipSignature:e instanceof Ll,options:t,config:qS(),files:new Map,filenames:new Set,offset:e.writable.size,pendingEntriesSize:0,pendingAddFileCalls:new Set,bufferedWrites:0})}async add(e="",t,i={}){const r=this,{pendingAddFileCalls:s,config:a}=r;el<a.maxWorkers?el++:await new Promise(c=>su.push(c));let o;try{if(e=e.trim(),r.filenames.has(e))throw new Error(JE);return r.filenames.add(e),o=ay(r,e,t,i),s.add(o),await o}catch(c){throw r.filenames.delete(e),c}finally{s.delete(o);const c=su.shift();c?c():el--}}async close(e=new Uint8Array,t={}){const i=this,{pendingAddFileCalls:r,writer:s}=this,{writable:a}=s;for(;r.size;)await Promise.all(Array.from(r));return await py(this,e,t),Qe(i,t,"preventClose")||await a.close(),s.getData?s.getData():a}}async function ay(n,e,t,i){e=e.trim(),i.directory&&!e.endsWith(jo)?e+=jo:i.directory=e.endsWith(jo);const r=Al(e);if(qe(r)>Nt)throw new Error(ty);const s=i.comment||"",a=Al(s);if(qe(a)>Nt)throw new Error(ey);const o=Qe(n,i,"version",VS);if(o>Nt)throw new Error(iu);const c=Qe(n,i,"versionMadeBy",20);if(c>Nt)throw new Error(iu);const l=Qe(n,i,pp,new Date),f=Qe(n,i,mp),p=Qe(n,i,_p),h=Qe(n,i,vp,!0),m=Qe(n,i,gp,0),v=Qe(n,i,xp,0),g=Qe(n,i,"password"),u=Qe(n,i,"encryptionStrength",3),d=Qe(n,i,"zipCrypto"),w=Qe(n,i,"extendedTimestamp",!0),_=Qe(n,i,"keepOrder",!0),b=Qe(n,i,"level"),S=Qe(n,i,"useWebWorkers"),M=Qe(n,i,"bufferedWrite"),y=Qe(n,i,"dataDescriptorSignature",!1),T=Qe(n,i,"signal"),x=Qe(n,i,"useCompressionStream");let E=Qe(n,i,"dataDescriptor",!0),A=Qe(n,i,wp);if(g!==Ut&&u!==Ut&&(u<1||u>3))throw new Error(ny);let H=new Uint8Array;const{extraField:U}=i;if(U){let be=0,Ne=0;U.forEach(Me=>be+=4+qe(Me)),H=new Uint8Array(be),U.forEach((Me,B)=>{if(B>Nt)throw new Error(iy);if(qe(Me)>Nt)throw new Error(ry);gt(H,new Uint16Array([B]),Ne),gt(H,new Uint16Array([qe(Me)]),Ne+2),gt(H,Me,Ne+4),Ne+=4+qe(Me)})}let I=0,P=0,X=0;const F=A===!0;t&&(t=zE(t),await gs(t),t.size===Ut?(E=!0,(A||A===Ut)&&(A=!0,I=Bt)):(X=t.size,I=_y(X)));const{diskOffset:O,diskNumber:Q,maxSize:q}=n.writer,ce=F||X>=Bt,N=F||I>=Bt,$=F||n.offset+n.pendingEntriesSize-O>=Bt,fe=Qe(n,i,"supportZip64SplitFile",!0)&&F||Q+Math.ceil(n.pendingEntriesSize/q)>=Nt;if($||ce||N||fe){if(A===!1||!_)throw new Error(ec);A=!0}A=A||!1,i=Object.assign({},i,{rawFilename:r,rawComment:a,version:o,versionMadeBy:c,lastModDate:l,lastAccessDate:f,creationDate:p,rawExtraField:H,zip64:A,zip64UncompressedSize:ce,zip64CompressedSize:N,zip64Offset:$,zip64DiskNumberStart:fe,password:g,level:b,useWebWorkers:S,encryptionStrength:u,extendedTimestamp:w,zipCrypto:d,bufferedWrite:M,keepOrder:_,dataDescriptor:E,dataDescriptorSignature:y,signal:T,msDosCompatible:h,internalFileAttribute:m,externalFileAttribute:v,useCompressionStream:x});const le=cy(i),xe=fy(i);P=qe(le.localHeaderArray,xe.dataDescriptorArray)+I,n.pendingEntriesSize+=P;let Te;try{Te=await oy(n,e,t,{headerInfo:le,dataDescriptorInfo:xe},i)}finally{n.pendingEntriesSize-=P}return Object.assign(Te,{name:e,comment:s,extraField:U}),new bp(Te)}async function oy(n,e,t,i,r){const{files:s,writer:a}=n,{keepOrder:o,dataDescriptor:c,signal:l}=r,{headerInfo:f}=i,p=Array.from(s.values()).pop();let h={},m,v,g,u,d,w;s.set(e,h);try{let M;o&&(M=p&&p.lock,_()),r.bufferedWrite||n.writerLocked||n.bufferedWrites&&o||!c?(w=new hp,w.writable.size=0,m=!0,n.bufferedWrites++,await gs(a)):(w=a,await b()),await gs(w);const{writable:y}=a;let{diskOffset:T}=a;if(n.addSplitZipSignature){delete n.addSplitZipSignature;const E=new Uint8Array(4),A=Ot(E);Be(A,0,kh),await Tn(y,E),n.offset+=4}m||(await M,await S(y));const{diskNumber:x}=a;if(d=!0,h.diskNumberStart=x,h=await ly(t,w,h,i,n.config,r),d=!1,s.set(e,h),h.filename=e,m){await w.writable.close();let E=await w.getData();await M,await b(),u=!0,c||(E=await uy(h,E,y,r)),await S(y),h.diskNumberStart=a.diskNumber,T=a.diskOffset,await E.stream().pipeTo(y,{preventClose:!0,preventAbort:!0,signal:l}),y.size+=E.size,u=!1}if(h.offset=n.offset-T,h.zip64)hy(h,r);else if(h.offset>=Bt)throw new Error(ec);return n.offset+=h.length,h}catch(M){if(m&&u||!m&&d){if(n.hasCorruptedEntries=!0,M)try{M.corruptedEntry=!0}catch{}m?n.offset+=w.writable.size:n.offset=w.writable.size}throw s.delete(e),M}finally{m&&n.bufferedWrites--,g&&g(),v&&v()}function _(){h.lock=new Promise(M=>g=M)}async function b(){n.writerLocked=!0;const{lockWriter:M}=n;n.lockWriter=new Promise(y=>v=()=>{n.writerLocked=!1,y()}),await M}async function S(M){f.localHeaderArray.length>a.availableSize&&(a.availableSize=0,await Tn(M,new Uint8Array))}}async function ly(n,e,{diskNumberStart:t,lock:i},r,s,a){const{headerInfo:o,dataDescriptorInfo:c}=r,{localHeaderArray:l,headerArray:f,lastModDate:p,rawLastModDate:h,encrypted:m,compressed:v,version:g,compressionMethod:u,rawExtraFieldExtendedTimestamp:d,rawExtraFieldNTFS:w,rawExtraFieldAES:_}=o,{dataDescriptorArray:b}=c,{rawFilename:S,lastAccessDate:M,creationDate:y,password:T,level:x,zip64:E,zip64UncompressedSize:A,zip64CompressedSize:H,zip64Offset:U,zip64DiskNumberStart:I,zipCrypto:P,dataDescriptor:X,directory:F,versionMadeBy:O,rawComment:Q,rawExtraField:q,useWebWorkers:ce,onstart:N,onprogress:$,onend:ie,signal:fe,encryptionStrength:le,extendedTimestamp:xe,msDosCompatible:Te,internalFileAttribute:be,externalFileAttribute:Ne,useCompressionStream:Me}=a,B={lock:i,versionMadeBy:O,zip64:E,directory:!!F,filenameUTF8:!0,rawFilename:S,commentUTF8:!0,rawComment:Q,rawExtraFieldExtendedTimestamp:d,rawExtraFieldNTFS:w,rawExtraFieldAES:_,rawExtraField:q,extendedTimestamp:xe,msDosCompatible:Te,internalFileAttribute:be,externalFileAttribute:Ne,diskNumberStart:t};let Ye=0,ge=0,ve;const{writable:_e}=e;if(n){n.chunkSize=YS(s),await Tn(_e,l);const Ae=n.readable,Re=Ae.size=n.size,We={options:{codecType:fp,level:x,password:T,encryptionStrength:le,zipCrypto:m&&P,passwordVerification:m&&P&&h>>8&255,signed:!0,compressed:v,encrypted:m,useWebWorkers:ce,useCompressionStream:Me,transferStreams:!1},config:s,streamOptions:{signal:fe,size:Re,onstart:N,onprogress:$,onend:ie}},je=await UE({readable:Ae,writable:_e},We);_e.size+=je.size,ve=je.signature,ge=n.size=Ae.size,Ye=je.size}else await Tn(_e,l);let He;if(E){let Ae=4;A&&(Ae+=8),H&&(Ae+=8),U&&(Ae+=8),I&&(Ae+=4),He=new Uint8Array(Ae)}else He=new Uint8Array;return dy({signature:ve,rawExtraFieldZip64:He,compressedSize:Ye,uncompressedSize:ge,headerInfo:o,dataDescriptorInfo:c},a),X&&await Tn(_e,b),Object.assign(B,{uncompressedSize:ge,compressedSize:Ye,lastModDate:p,rawLastModDate:h,creationDate:y,lastAccessDate:M,encrypted:m,length:qe(l,b)+Ye,compressionMethod:u,version:g,headerArray:f,signature:ve,rawExtraFieldZip64:He,zip64UncompressedSize:A,zip64CompressedSize:H,zip64Offset:U,zip64DiskNumberStart:I}),B}function cy(n){const{rawFilename:e,lastModDate:t,lastAccessDate:i,creationDate:r,password:s,level:a,zip64:o,zipCrypto:c,dataDescriptor:l,directory:f,rawExtraField:p,encryptionStrength:h,extendedTimestamp:m}=n,v=a!==0&&!f,g=!!(s&&qe(s));let u=n.version,d;if(g&&!c){d=new Uint8Array(qe(ru)+2);const P=Ot(d);Ze(P,0,NS),gt(d,ru,2),Ua(P,8,h)}else d=new Uint8Array;let w,_;if(m){_=new Uint8Array(9+(i?4:0)+(r?4:0));const P=Ot(_);Ze(P,0,zh),Ze(P,2,qe(_)-4);const X=1+(i?2:0)+(r?4:0);Ua(P,4,X),Be(P,5,Math.floor(t.getTime()/1e3)),i&&Be(P,9,Math.floor(i.getTime()/1e3)),r&&Be(P,13,Math.floor(r.getTime()/1e3));try{w=new Uint8Array(36);const F=Ot(w),O=tl(t);Ze(F,0,kS),Ze(F,2,32),Ze(F,8,OS),Ze(F,10,24),kt(F,12,O),kt(F,20,tl(i)||O),kt(F,28,tl(r)||O)}catch{w=new Uint8Array}}else w=_=new Uint8Array;let b=GS;l&&(b=b|zS);let S=TS;v&&(S=Bd),o&&(u=u>zd?u:zd),g&&(b=b|BS,c||(u=u>Gd?u:Gd,S=AS,v&&(d[9]=Bd)));const M=new Uint8Array(26),y=Ot(M);Ze(y,0,u),Ze(y,2,b),Ze(y,4,S);const T=new Uint32Array(1),x=Ot(T);let E;t<Vd?E=Vd:t>Hd?E=Hd:E=t,Ze(x,0,(E.getHours()<<6|E.getMinutes())<<5|E.getSeconds()/2),Ze(x,2,(E.getFullYear()-1980<<4|E.getMonth()+1)<<5|E.getDate());const A=T[0];Be(y,6,A),Ze(y,22,qe(e));const H=qe(d,_,w,p);Ze(y,24,H);const U=new Uint8Array(30+qe(e)+H),I=Ot(U);return Be(I,0,RS),gt(U,M,4),gt(U,e,30),gt(U,d,30+qe(e)),gt(U,_,30+qe(e,d)),gt(U,w,30+qe(e,d,_)),gt(U,p,30+qe(e,d,_,w)),{localHeaderArray:U,headerArray:M,headerView:y,lastModDate:t,rawLastModDate:A,encrypted:g,compressed:v,version:u,compressionMethod:S,rawExtraFieldExtendedTimestamp:_,rawExtraFieldNTFS:w,rawExtraFieldAES:d}}function fy(n){const{zip64:e,dataDescriptor:t,dataDescriptorSignature:i}=n;let r=new Uint8Array,s,a=0;return t&&(r=new Uint8Array(e?i?24:20:i?16:12),s=Ot(r),i&&(a=4,Be(s,0,CS))),{dataDescriptorArray:r,dataDescriptorView:s,dataDescriptorOffset:a}}function dy(n,e){const{signature:t,rawExtraFieldZip64:i,compressedSize:r,uncompressedSize:s,headerInfo:a,dataDescriptorInfo:o}=n,{headerView:c,encrypted:l}=a,{dataDescriptorView:f,dataDescriptorOffset:p}=o,{zip64:h,zip64UncompressedSize:m,zip64CompressedSize:v,zipCrypto:g,dataDescriptor:u}=e;if((!l||g)&&t!==Ut&&(Be(c,10,t),u&&Be(f,p,t)),h){const d=Ot(i);Ze(d,0,FS),Ze(d,2,i.length-4);let w=4;m&&(Be(c,18,Bt),kt(d,w,BigInt(s)),w+=8),v&&(Be(c,14,Bt),kt(d,w,BigInt(r))),u&&(kt(f,p+4,BigInt(r)),kt(f,p+12,BigInt(s)))}else Be(c,14,r),Be(c,18,s),u&&(Be(f,p+4,r),Be(f,p+8,s))}async function uy(n,e,t,{zipCrypto:i}){const r=await my(e,0,26),s=new DataView(r);return(!n.encrypted||i)&&Be(s,14,n.signature),n.zip64?(Be(s,18,Bt),Be(s,22,Bt)):(Be(s,18,n.compressedSize),Be(s,22,n.uncompressedSize)),await Tn(t,new Uint8Array(r)),e.slice(r.byteLength)}function hy(n,e){const{rawExtraFieldZip64:t,offset:i,diskNumberStart:r}=n,{zip64UncompressedSize:s,zip64CompressedSize:a,zip64Offset:o,zip64DiskNumberStart:c}=e,l=Ot(t);let f=4;s&&(f+=8),a&&(f+=8),o&&(kt(l,f,BigInt(i)),f+=8),c&&Be(l,f,r)}async function py(n,e,t){const{files:i,writer:r}=n,{diskOffset:s,writable:a}=r;let{diskNumber:o}=r,c=0,l=0,f=n.offset-s,p=i.size;for(const[,{rawFilename:S,rawExtraFieldZip64:M,rawExtraFieldAES:y,rawExtraField:T,rawComment:x,rawExtraFieldExtendedTimestamp:E,rawExtraFieldNTFS:A}]of i)l+=46+qe(S,x,M,y,E,A,T);const h=new Uint8Array(l),m=Ot(h);await gs(r);let v=0;for(const[S,M]of Array.from(i.values()).entries()){const{offset:y,rawFilename:T,rawExtraFieldZip64:x,rawExtraFieldAES:E,rawExtraFieldNTFS:A,rawExtraField:H,rawComment:U,versionMadeBy:I,headerArray:P,directory:X,zip64:F,zip64UncompressedSize:O,zip64CompressedSize:Q,zip64DiskNumberStart:q,zip64Offset:ce,msDosCompatible:N,internalFileAttribute:$,externalFileAttribute:ie,extendedTimestamp:fe,lastModDate:le,diskNumberStart:xe,uncompressedSize:Te,compressedSize:be}=M;let Ne;if(fe){Ne=new Uint8Array(9);const ge=Ot(Ne);Ze(ge,0,zh),Ze(ge,2,qe(Ne)-4),Ua(ge,4,1),Be(ge,5,Math.floor(le.getTime()/1e3))}else Ne=new Uint8Array;const Me=qe(x,E,Ne,A,H);Be(m,c,LS),Ze(m,c+4,I);const B=Ot(P);O||Be(B,18,Te),Q||Be(B,14,be),gt(h,P,c+6),Ze(m,c+30,Me),Ze(m,c+32,qe(U)),Ze(m,c+34,F&&q?Nt:xe),Ze(m,c+36,$),ie?Be(m,c+38,ie):X&&N&&Ua(m,c+38,HS),Be(m,c+42,F&&ce?Bt:y),gt(h,T,c+46),gt(h,x,c+46+qe(T)),gt(h,E,c+46+qe(T,x)),gt(h,Ne,c+46+qe(T,x,E)),gt(h,A,c+46+qe(T,x,E,Ne)),gt(h,H,c+46+qe(T,x,E,Ne,A)),gt(h,U,c+46+qe(T)+Me);const Ye=46+qe(T,U)+Me;if(c-v>r.availableSize&&(r.availableSize=0,await Tn(a,h.slice(v,c)),v=c),c+=Ye,t.onprogress)try{await t.onprogress(S+1,i.size,new bp(M))}catch{}}await Tn(a,v?h.slice(v):h);let g=r.diskNumber;const{availableSize:u}=r;u<Ml&&g++;let d=Qe(n,t,"zip64");if(f>=Bt||l>=Bt||p>=Nt||g>=Nt){if(d===!1)throw new Error(ec);d=!0}const w=new Uint8Array(d?IS:Ml),_=Ot(w);c=0,d&&(Be(_,0,US),kt(_,4,BigInt(44)),Ze(_,12,45),Ze(_,14,45),Be(_,16,g),Be(_,20,o),kt(_,24,BigInt(p)),kt(_,32,BigInt(p)),kt(_,40,BigInt(l)),kt(_,48,BigInt(f)),Be(_,56,PS),kt(_,64,BigInt(f)+BigInt(l)),Be(_,72,g+1),Qe(n,t,"supportZip64SplitFile",!0)&&(g=Nt,o=Nt),p=Nt,f=Bt,l=Bt,c+=Bh+Oh),Be(_,c,DS),Ze(_,c+4,g),Ze(_,c+6,o),Ze(_,c+8,p),Ze(_,c+10,p),Be(_,c+12,l),Be(_,c+16,f);const b=qe(e);if(b)if(b<=Nt)Ze(_,c+20,b);else throw new Error(QE);await Tn(a,w),b&&await Tn(a,e)}function my(n,e,t){return e||t?n.slice(e,t).arrayBuffer():n.arrayBuffer()}async function Tn(n,e){const t=n.getWriter();await t.ready,n.size+=qe(e),await t.write(e),t.releaseLock()}function tl(n){if(n)return(BigInt(n.getTime())+BigInt(116444736e5))*BigInt(1e4)}function Qe(n,e,t,i){const r=e[t]===Ut?n.options[t]:e[t];return r===Ut?i:r}function _y(n){return n+5*(Math.floor(n/16383)+1)}function Ua(n,e,t){n.setUint8(e,t)}function Ze(n,e,t){n.setUint16(e,t,!0)}function Be(n,e,t){n.setUint32(e,t,!0)}function kt(n,e,t){n.setBigUint64(e,t,!0)}function gt(n,e,t){n.set(e,t)}function Ot(n){return new DataView(n.buffer)}function qe(...n){let e=0;return n.forEach(t=>t&&(e+=t.length)),e}let Sp;try{Sp=import.meta.url}catch{}jl({baseURL:Sp});PE(jl);jl({Deflate:rS,Inflate:MS});function gy(n){const t=n.replace("\\","/").replace("//","/").replace(/[^a-zA-Z0-9\-_/]/g,"_").split("/"),i=t.length-1;return t[i].startsWith("sky_")||(t[i]="sky_"+t[i]),t.unshift("skybox"),[t.join("/"),t[i+1]]}async function xy(n,e,t,i,r){const s=new hp,a=new sy(s);console.log("Writing VTFs to zip..."),await Promise.allSettled([a.add(e+"lf.vtf",new Ui(t.left)),a.add(e+"ft.vtf",new Ui(t.front)),a.add(e+"bk.vtf",new Ui(t.back)),a.add(e+"rt.vtf",new Ui(t.right)),a.add(e+"up.vtf",new Ui(t.up)),a.add(e+"dn.vtf",new Ui(t.down))]),r==null||r(1/3);function o(l){return new OE(`Sky
{
	$basetexture "${n}${l}"
	$hdr${i?"compressed":"base"}texture "${n}${l}"
}
`)}console.log("Writing VMTs to zip..."),await Promise.allSettled([a.add(e+"lf.vmt",o("lf")),a.add(e+"ft.vmt",o("ft")),a.add(e+"bk.vmt",o("bk")),a.add(e+"rt.vmt",o("rt")),a.add(e+"up.vmt",o("up")),a.add(e+"dn.vmt",o("dn"))]),r==null||r(2/3),console.log("Closing zip.");const c=await a.close();return r==null||r(3/3),c}function Wa(){const n=tc.value,e=Dr.checked,t=Math.max(Math.min(parseInt(Cs.value)||6,9),1),i=parseInt(Pa.value),r=Dh[n];let s=(80+16+20*+e+r*i*i)*6;e&&(s/=1.8+t/90),s>=1e9?ou.innerText=Math.round(s/1e3/1e3/1e3*10)/10+"GB":ou.innerText=Math.round(s/1e3/1e3*10)/10+"MB",by.innerText=e?"v7.6":"v7.4"}const Ul=document.querySelector("#action-import"),nl=document.querySelector("#action-export"),vy=document.querySelector("#input-name"),tc=document.querySelector("#input-format"),Dr=document.querySelector("#input-compress"),Cs=document.querySelector("#input-compress-level"),Pa=document.querySelector("#input-size"),au=document.querySelector("#loader-container"),wy=document.querySelector("#loader-progress"),by=document.querySelector("#info-version"),ou=document.querySelector("#info-size");tc.addEventListener("input",Wa);Dr.addEventListener("input",Wa);Cs.addEventListener("input",Wa);Pa.addEventListener("input",Wa);Dr.checked=!1;Cs.disabled=!0;Dr.addEventListener("input",()=>{Cs.disabled=!Dr.checked});const lu=document.querySelector("#vp-exposure"),Sy=document.querySelector("#vp-exposure-value"),Jr=document.createElement("input");Jr.type="file";Ul.addEventListener("click",()=>{Jr.oninput=()=>{var n;(n=Jr.files)!=null&&n.length&&Es.loadTextureFile(Jr.files[0])},Jr.click()});Es.setExposure(1);lu.addEventListener("input",()=>{const n=parseFloat(lu.value);Es.setExposure(n),Sy.innerText=n.toFixed(2)});Es.loadTexture("./test/kloofendal_overcast_1k.hdr");document.body.addEventListener("dragover",n=>{n.preventDefault()});document.body.addEventListener("drop",n=>{var e,t;n.preventDefault(),(t=(e=n.dataTransfer)==null?void 0:e.files)!=null&&t.length&&Es.loadTextureFile(n.dataTransfer.files[0])});nl.addEventListener("click",async()=>{const n=vy.value,e=tc.value,t=Dr.checked,i=Math.max(Math.min(parseInt(Cs.value)||6,9),1),r=parseInt(Pa.value);if(isNaN(r))return alert(`Could not parse size "${Pa.value}"`);if(r>8192)return alert("Size must be smaller than or equal to 8192!");if(r<16)return alert("Size must be larger than or equal to 16!");if(Math.log2(r)%1&&!confirm("Size should be a power of two! Continue anyways?"))return;au.hidden=!1,Ul.disabled=!0,nl.disabled=!0;const s=[0,0,0],a=[.5,1,.3],o=a.reduce((l,f)=>l+f,0);function c(l,f){s[l]=f,wy.value=s.reduce((p,h,m)=>p+h*a[m],0)/o*100}try{console.log("Rendering cubemap...");const l=Z1(r);c(0,1),console.log("Converting images...");const f=await Gb(l,r,e,t,i,v=>c(1,v));console.log("Creating zip...");const[p,h]=gy(n),m=await xy(p,h,f,e==="BGRA8",v=>c(2,v));Up(m,h+".zip")}catch(l){console.warn(l),alert("An error occurred! Info logged to console.")}finally{au.hidden=!0,Ul.disabled=!1,nl.disabled=!1}});
