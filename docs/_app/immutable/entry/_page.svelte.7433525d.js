import{S as Re,i as Ae,s as Pe,k,q as U,a as A,e as te,l as D,m as g,r as C,h as a,c as P,n as L,J as ye,b as _,G as h,K as ke,L as j,u as le,H as De,M as Se,o as Be,N as Oe,O as ge}from"../chunks/index.330bc23d.js";const Ee=(n,f)=>{const u=n.numberOfChannels,p=f*u*2+44,r=new ArrayBuffer(p),c=new DataView(r),o=[];let t,i,l=0,y=0;for(d(1179011410),d(p-8),d(1163280727),d(544501094),d(16),H(1),H(u),d(n.sampleRate),d(n.sampleRate*2*u),H(u*2),H(16),d(1635017060),d(p-y-4),t=0;t<n.numberOfChannels;t++)o.push(n.getChannelData(t));for(;y<p;){for(t=0;t<u;t++)i=Math.max(-1,Math.min(1,o[t][l])),i=(.5+i<0?i*32768:i*32767)|0,c.setInt16(y,i,!0),y+=2;l++}return new Blob([r],{type:"audio/wav"});function H(q){c.setUint16(y,q,!0),y+=2}function d(q){c.setUint32(y,q,!0),y+=4}};function Ue(n,f,u){const p=n.slice();return p[17]=f[u],p}function Ce(n){let f,u,p,r,c=Array.from(n[0]),o=[];for(let t=0;t<c.length;t+=1)o[t]=Ie(Ue(n,c,t));return{c(){f=k("h2"),u=U("Selected files:"),p=A();for(let t=0;t<o.length;t+=1)o[t].c();r=te()},l(t){f=D(t,"H2",{});var i=g(f);u=C(i,"Selected files:"),i.forEach(a),p=P(t);for(let l=0;l<o.length;l+=1)o[l].l(t);r=te()},m(t,i){_(t,f,i),h(f,u),_(t,p,i);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(t,i);_(t,r,i)},p(t,i){if(i&1){c=Array.from(t[0]);let l;for(l=0;l<c.length;l+=1){const y=Ue(t,c,l);o[l]?o[l].p(y,i):(o[l]=Ie(y),o[l].c(),o[l].m(r.parentNode,r))}for(;l<o.length;l+=1)o[l].d(1);o.length=c.length}},d(t){t&&a(f),t&&a(p),Oe(o,t),t&&a(r)}}}function Ie(n){let f,u=n[17].name+"",p,r,c=n[17].size+"",o,t;return{c(){f=k("p"),p=U(u),r=U(" ("),o=U(c),t=U(" bytes)")},l(i){f=D(i,"P",{});var l=g(f);p=C(l,u),r=C(l," ("),o=C(l,c),t=C(l," bytes)"),l.forEach(a)},m(i,l){_(i,f,l),h(f,p),h(f,r),h(f,o),h(f,t)},p(i,l){l&1&&u!==(u=i[17].name+"")&&le(p,u),l&1&&c!==(c=i[17].size+"")&&le(o,c)},d(i){i&&a(f)}}}function He(n){let f,u,p,r,c,o,t,i,l,y,H,d,q,F,N,Y,J,V,Z,m,M,b,S,E,v,B,O,T,w,I,W,$,K,ae,x,ne,z,ie,oe,se,Q,fe,ee,X,re,he,R=n[0]&&Ce(n);return{c(){f=k("h1"),u=U("Image2Audio Art"),p=A(),r=k("h2"),c=U("Upload a picture:"),o=A(),t=k("input"),i=A(),l=k("h2"),y=U("Preview:"),H=A(),d=k("img"),F=A(),N=k("h2"),Y=U("Result:"),J=A(),V=k("div"),Z=U("frequency: "),m=U(n[2]),M=A(),b=k("button"),S=U("Play"),E=A(),v=k("button"),B=U("Stop"),T=A(),w=k("div"),I=k("h2"),W=U("Download:"),$=A(),K=k("div"),ae=U("duration: "),x=U(n[4]),ne=A(),z=k("input"),ie=A(),oe=k("br"),se=A(),Q=k("button"),fe=U("Download"),ee=A(),R&&R.c(),X=te(),this.h()},l(e){f=D(e,"H1",{});var s=g(f);u=C(s,"Image2Audio Art"),s.forEach(a),p=P(e),r=D(e,"H2",{});var pe=g(r);c=C(pe,"Upload a picture:"),pe.forEach(a),o=P(e),t=D(e,"INPUT",{accept:!0,id:!0,name:!0,type:!0}),i=P(e),l=D(e,"H2",{});var _e=g(l);y=C(_e,"Preview:"),_e.forEach(a),H=P(e),d=D(e,"IMG",{src:!0,alt:!0}),F=P(e),N=D(e,"H2",{});var de=g(N);Y=C(de,"Result:"),de.forEach(a),J=P(e),V=D(e,"DIV",{});var ue=g(V);Z=C(ue,"frequency: "),m=C(ue,n[2]),ue.forEach(a),M=P(e),b=D(e,"BUTTON",{});var me=g(b);S=C(me,"Play"),me.forEach(a),E=P(e),v=D(e,"BUTTON",{});var be=g(v);B=C(be,"Stop"),be.forEach(a),T=P(e),w=D(e,"DIV",{});var G=g(w);I=D(G,"H2",{});var ve=g(I);W=C(ve,"Download:"),ve.forEach(a),$=P(G),K=D(G,"DIV",{});var ce=g(K);ae=C(ce,"duration: "),x=C(ce,n[4]),ce.forEach(a),ne=P(G),z=D(G,"INPUT",{type:!0,min:!0,max:!0}),ie=P(G),oe=D(G,"BR",{}),se=P(G),Q=D(G,"BUTTON",{});var we=g(Q);fe=C(we,"Download"),we.forEach(a),G.forEach(a),ee=P(e),R&&R.l(e),X=te(),this.h()},h(){L(t,"accept","image/png, image/jpeg"),L(t,"id","image"),L(t,"name","avatar"),L(t,"type","file"),ye(d.src,q=n[1])||L(d,"src",q),L(d,"alt","please upload"),b.disabled=n[3],v.disabled=O=!n[3],L(z,"type","range"),L(z,"min","1"),L(z,"max","20")},m(e,s){_(e,f,s),h(f,u),_(e,p,s),_(e,r,s),h(r,c),_(e,o,s),_(e,t,s),_(e,i,s),_(e,l,s),h(l,y),_(e,H,s),_(e,d,s),_(e,F,s),_(e,N,s),h(N,Y),_(e,J,s),_(e,V,s),h(V,Z),h(V,m),_(e,M,s),_(e,b,s),h(b,S),_(e,E,s),_(e,v,s),h(v,B),_(e,T,s),_(e,w,s),h(w,I),h(I,W),h(w,$),h(w,K),h(K,ae),h(K,x),h(w,ne),h(w,z),ke(z,n[4]),h(w,ie),h(w,oe),h(w,se),h(w,Q),h(Q,fe),_(e,ee,s),R&&R.m(e,s),_(e,X,s),re||(he=[j(t,"change",n[9]),j(t,"change",n[10]),j(b,"click",n[6]),j(v,"click",n[7]),j(z,"change",n[11]),j(z,"input",n[11]),j(Q,"click",n[8])],re=!0)},p(e,[s]){s&2&&!ye(d.src,q=e[1])&&L(d,"src",q),s&4&&le(m,e[2]),s&8&&(b.disabled=e[3]),s&8&&O!==(O=!e[3])&&(v.disabled=O),s&16&&le(x,e[4]),s&16&&ke(z,e[4]),e[0]?R?R.p(e,s):(R=Ce(e),R.c(),R.m(X.parentNode,X)):R&&(R.d(1),R=null)},i:De,o:De,d(e){e&&a(f),e&&a(p),e&&a(r),e&&a(o),e&&a(t),e&&a(i),e&&a(l),e&&a(H),e&&a(d),e&&a(F),e&&a(N),e&&a(J),e&&a(V),e&&a(M),e&&a(b),e&&a(E),e&&a(v),e&&a(T),e&&a(w),e&&a(ee),R&&R.d(e),e&&a(X),re=!1,Se(he)}}}function Ne(n,f,u){let p,r,c,o;Be(()=>{p=window.AudioContext||window.webkitAudioContext,r=new p});let t=null,i=null,l=100;const y=m=>{const M=m.target;let b=M.files?M.files[0]:null;if(!b)return;let S=new FileReader;S.readAsDataURL(b),S.onload=E=>{const v=E.target;u(1,i=v.result);const B=new Image;B.src=i,B.onload=()=>{const{r:O,g:T,b:w}=H(B);u(2,l=(O+T+w)/3)}}},H=m=>{const b={r:0,g:0,b:0};let S=document.createElement("canvas"),E=S.getContext&&S.getContext("2d"),v,B,O,T=-4,w,I={r:0,g:0,b:0},W=0;if(!E)return b;O=S.height=m.naturalHeight||m.offsetHeight||m.height,B=S.width=m.naturalWidth||m.offsetWidth||m.width,E.drawImage(m,0,0);try{v=E.getImageData(0,0,B,O)}catch{return b}for(w=v.data.length;(T+=5*4)<w;)++W,I.r+=v.data[T],I.g+=v.data[T+1],I.b+=v.data[T+2];return I.r=~~(I.r/W),I.g=~~(I.g/W),I.b=~~(I.b/W),I};let d=!1;const q=()=>{c=r.createOscillator(),o=r.createGain(),c.connect(o),o.connect(r.destination),c.frequency.value=l,c.start(0),c.connect(r.destination),u(3,d=!0)},F=()=>{c.disconnect(r.destination),c.stop(),u(3,d=!1)};let N=5;const Y=()=>{const m=r.sampleRate,M=1,b=m*N,S=r.createBuffer(M,b,m),E=S.getChannelData(0);for(let O=0;O<b;O++)E[O]=Math.sin(O/m*2*Math.PI*l);var v=URL.createObjectURL(Ee(S,b)),B=document.createElement("a");B.href=v,B.download="result.wav",B.click()};function J(){t=this.files,u(0,t)}const V=m=>y(m);function Z(){N=ge(this.value),u(4,N)}return n.$$.update=()=>{if(n.$$.dirty&1&&t)for(const m of t)console.log(`${m.name}: ${m.size} bytes`)},[t,i,l,d,N,y,q,F,Y,J,V,Z]}class qe extends Re{constructor(f){super(),Ae(this,f,Ne,He,Pe,{})}}export{qe as default};