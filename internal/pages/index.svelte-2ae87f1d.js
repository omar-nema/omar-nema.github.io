import{S as T,i as W,s as z,e as E,t as B,c as j,a as y,h as C,d as p,b as D,L as q,g as A,J as m,j as J,k as P,m as S,M as le,N as se,O as re,P as G,Q as K,R as L,T as X,K as ne,w as Y,x as Z,y as x,q as M,o as R,B as ee,U as ve,p as pe,V as me,n as ge,W as $e}from"../chunks/vendor-e4f9a02f.js";import{s as ie,H as ke}from"../chunks/Header-adc9d9ea.js";import{b as oe}from"../chunks/paths-28a87002.js";import{p as De,a as O}from"../chunks/Filters.svelte_svelte_type_style_lang-82a1eec4.js";function ce(n,e,l){const a=n.slice();return a[5]=e[l],a}function de(n){let e,l=n[5]+"",a;return{c(){e=E("div"),a=B(l),this.h()},l(t){e=j(t,"DIV",{class:!0});var s=y(e);a=C(s,l),s.forEach(p),this.h()},h(){D(e,"class","chip svelte-r5ac44"),q(e,"datavis",n[5]=="datavis"),q(e,"art",n[5]=="art"),q(e,"product",n[5]=="product")},m(t,s){A(t,e,s),m(e,a)},p(t,s){s&1&&l!==(l=t[5]+"")&&J(a,l),s&1&&q(e,"datavis",t[5]=="datavis"),s&1&&q(e,"art",t[5]=="art"),s&1&&q(e,"product",t[5]=="product")},d(t){t&&p(e)}}}function be(n){let e,l,a,t=n[0].title+"",s,o,i,d=n[0].description+"",_,I,v,g,V,f,H,r,h,u,F,w=n[0].tags,$=[];for(let c=0;c<w.length;c+=1)$[c]=de(ce(n,w,c));return{c(){e=E("a"),l=E("div"),a=E("span"),s=B(t),o=P(),i=E("div"),_=B(d),I=P(),v=E("div");for(let c=0;c<$.length;c+=1)$[c].c();g=P(),V=E("div"),f=B(n[1]),this.h()},l(c){e=j(c,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var b=y(e);l=j(b,"DIV",{class:!0});var k=y(l);a=j(k,"SPAN",{});var N=y(a);s=C(N,t),N.forEach(p),k.forEach(p),o=S(b),i=j(b,"DIV",{class:!0});var te=y(i);_=C(te,d),te.forEach(p),I=S(b),v=j(b,"DIV",{class:!0});var U=y(v);for(let Q=0;Q<$.length;Q+=1)$[Q].l(U);g=S(U),V=j(U,"DIV",{class:!0});var ae=y(V);f=C(ae,n[1]),ae.forEach(p),U.forEach(p),b.forEach(p),this.h()},h(){D(l,"class","list-row card-title svelte-r5ac44"),D(i,"class","list-row card-body svelte-r5ac44"),D(V,"class","chip date svelte-r5ac44"),D(v,"class","list-row card-footer svelte-r5ac44"),D(e,"class","card svelte-r5ac44"),D(e,"sveltekit:prefetch",""),D(e,"href",H=oe+n[0].url)},m(c,b){A(c,e,b),m(e,l),m(l,a),m(a,s),m(e,o),m(e,i),m(i,_),m(e,I),m(e,v);for(let k=0;k<$.length;k+=1)$[k].m(v,null);m(v,g),m(v,V),m(V,f),h=!0,u||(F=le(e,"click",n[3]),u=!0)},p(c,[b]){if((!h||b&1)&&t!==(t=c[0].title+"")&&J(s,t),(!h||b&1)&&d!==(d=c[0].description+"")&&J(_,d),b&1){w=c[0].tags;let k;for(k=0;k<w.length;k+=1){const N=ce(c,w,k);$[k]?$[k].p(N,b):($[k]=de(N),$[k].c(),$[k].m(v,g))}for(;k<$.length;k+=1)$[k].d(1);$.length=w.length}(!h||b&2)&&J(f,c[1]),(!h||b&1&&H!==(H=oe+c[0].url))&&D(e,"href",H)},i(c){h||(se(()=>{r||(r=re(e,L,{},!0)),r.run(1)}),h=!0)},o(c){r||(r=re(e,L,{},!1)),r.run(0),h=!1},d(c){c&&p(e),G($,c),c&&r&&r.end(),u=!1,F()}}}function Ee(n,e,l){let a;K(n,ie,d=>l(2,a=d));let{data:t}=e,s=Math.max(...t.years),o=s;t.years.length>1&&(minDate=Math.min(...t.years),o=minDate+" - "+s);const i=()=>{X(ie,a=t.title,a)};return n.$$set=d=>{"data"in d&&l(0,t=d.data)},[t,o,a,i]}class je extends T{constructor(e){super();W(this,e,Ee,be,z,{data:0})}}function fe(n,e,l){const a=n.slice();return a[6]=e[l],a}function ue(n){let e,l,a,t=n[6]+"",s,o,i,d,_,I;return{c(){e=E("div"),l=E("span"),a=P(),s=B(t),o=P(),this.h()},l(v){e=j(v,"DIV",{class:!0,"data-type":!0});var g=y(e);l=j(g,"SPAN",{class:!0}),y(l).forEach(p),a=S(g),s=C(g,t),o=S(g),g.forEach(p),this.h()},h(){D(l,"class","circle svelte-1gihyr6"),D(e,"class",i="filter-option "+n[6]+" svelte-1gihyr6"),D(e,"data-type",d=n[6]),q(e,"selected",n[6]==n[0])},m(v,g){A(v,e,g),m(e,l),m(e,a),m(e,s),m(e,o),_||(I=le(e,"click",n[2]),_=!0)},p(v,g){g&3&&q(e,"selected",v[6]==v[0])},d(v){v&&p(e),_=!1,I()}}}function ye(n){let e,l,a=n[1],t=[];for(let s=0;s<a.length;s+=1)t[s]=ue(fe(n,a,s));return{c(){e=E("div"),l=E("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=j(s,"DIV",{class:!0});var o=y(e);l=j(o,"DIV",{class:!0});var i=y(l);for(let d=0;d<t.length;d+=1)t[d].l(i);i.forEach(p),o.forEach(p),this.h()},h(){D(l,"class","project-filter type svelte-1gihyr6"),D(e,"class","filter-holder svelte-1gihyr6")},m(s,o){A(s,e,o),m(e,l);for(let i=0;i<t.length;i+=1)t[i].m(l,null)},p(s,[o]){if(o&7){a=s[1];let i;for(i=0;i<a.length;i+=1){const d=fe(s,a,i);t[i]?t[i].p(d,o):(t[i]=ue(d),t[i].c(),t[i].m(l,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=a.length}},i:ne,o:ne,d(s){s&&p(e),G(t,s)}}}function Ve(n,e,l){let a,t;K(n,De,_=>l(3,a=_)),K(n,O,_=>l(4,t=_));let s=a.map(_=>_.tags).flat(1),o=[...new Set(s)];o.unshift("all");let i="all";function d(){l(0,i=this.getAttribute("data-type")),i=="all"?X(O,t=a,t):X(O,t=a.filter(_=>_.tags.includes(i)),t)}return[i,o,d]}class Ie extends T{constructor(e){super();W(this,e,Ve,ye,z,{})}}function he(n,e,l){const a=n.slice();return a[1]=e[l],a}function _e(n){let e,l;return e=new je({props:{data:n[1]}}),{c(){Y(e.$$.fragment)},l(a){Z(e.$$.fragment,a)},m(a,t){x(e,a,t),l=!0},p(a,t){const s={};t&1&&(s.data=a[1]),e.$set(s)},i(a){l||(M(e.$$.fragment,a),l=!0)},o(a){R(e.$$.fragment,a),l=!1},d(a){ee(e,a)}}}function we(n){let e,l,a,t,s,o,i,d,_,I,v,g;l=new ke({}),o=new Ie({});let V=n[0],f=[];for(let r=0;r<V.length;r+=1)f[r]=_e(he(n,V,r));const H=r=>R(f[r],1,1,()=>{f[r]=null});return{c(){e=P(),Y(l.$$.fragment),a=P(),t=E("div"),s=E("div"),Y(o.$$.fragment),i=P(),d=E("div"),_=E("div");for(let r=0;r<f.length;r+=1)f[r].c();this.h()},l(r){ve('[data-svelte="svelte-106i3db"]',document.head).forEach(p),e=S(r),Z(l.$$.fragment,r),a=S(r),t=j(r,"DIV",{class:!0});var u=y(t);s=j(u,"DIV",{class:!0});var F=y(s);Z(o.$$.fragment,F),F.forEach(p),i=S(u),d=j(u,"DIV",{class:!0});var w=y(d);_=j(w,"DIV",{class:!0});var $=y(_);for(let c=0;c<f.length;c+=1)f[c].l($);$.forEach(p),w.forEach(p),u.forEach(p),this.h()},h(){document.title="omar nema",D(s,"class","content-inner"),D(_,"class","project-list-holder content-inner svelte-1molqrd"),D(d,"class","project-outer svelte-1molqrd"),D(t,"class","content-outer")},m(r,h){A(r,e,h),x(l,r,h),A(r,a,h),A(r,t,h),m(t,s),x(o,s,null),m(t,i),m(t,d),m(d,_);for(let u=0;u<f.length;u+=1)f[u].m(_,null);g=!0},p(r,[h]){if(h&1){V=r[0];let u;for(u=0;u<V.length;u+=1){const F=he(r,V,u);f[u]?(f[u].p(F,h),M(f[u],1)):(f[u]=_e(F),f[u].c(),M(f[u],1),f[u].m(_,null))}for(ge(),u=V.length;u<f.length;u+=1)H(u);pe()}},i(r){if(!g){M(l.$$.fragment,r),M(o.$$.fragment,r);for(let h=0;h<V.length;h+=1)M(f[h]);se(()=>{v&&v.end(1),I=$e(t,L,{delay:300,duration:500}),I.start()}),g=!0}},o(r){R(l.$$.fragment,r),R(o.$$.fragment,r),f=f.filter(Boolean);for(let h=0;h<f.length;h+=1)R(f[h]);I&&I.invalidate(),v=me(t,L,{duration:200}),g=!1},d(r){r&&p(e),ee(l,r),r&&p(a),r&&p(t),ee(o),G(f,r),r&&v&&v.end()}}}function Fe(n,e,l){let a;return K(n,O,t=>l(0,a=t)),[a]}class He extends T{constructor(e){super();W(this,e,Fe,we,z,{})}}export{He as default};
