import{S as Q,i as T,s as G,e as b,t as N,c as j,a as E,h as B,d as m,b as k,L as F,g as z,J as g,j as U,k as q,m as P,M as ae,N as se,O as re,P as W,Q as J,R as K,T as X,K as ne,w as Y,x as Z,y as x,q as A,o as C,B as ee,p as ve,U as pe,n as me,V as ge}from"../chunks/vendor-1827c632.js";import{s as ie,H as $e}from"../chunks/Header-caa67d1c.js";import{b as ce}from"../chunks/paths-28a87002.js";import{p as ke,a as L}from"../chunks/Filters.svelte_svelte_type_style_lang-548d01ca.js";function oe(r,e,s){const t=r.slice();return t[5]=e[s],t}function de(r){let e,s=r[5]+"",t;return{c(){e=b("div"),t=N(s),this.h()},l(l){e=j(l,"DIV",{class:!0});var a=E(e);t=B(a,s),a.forEach(m),this.h()},h(){k(e,"class","chip svelte-r5ac44"),F(e,"datavis",r[5]=="datavis"),F(e,"art",r[5]=="art"),F(e,"product",r[5]=="product")},m(l,a){z(l,e,a),g(e,t)},p(l,a){a&1&&s!==(s=l[5]+"")&&U(t,s),a&1&&F(e,"datavis",l[5]=="datavis"),a&1&&F(e,"art",l[5]=="art"),a&1&&F(e,"product",l[5]=="product")},d(l){l&&m(e)}}}function De(r){let e,s,t,l=r[0].title+"",a,u,n,d=r[0].description+"",p,y,_,v,o,S,i,f,c,I,H,V=r[0].tags,D=[];for(let h=0;h<V.length;h+=1)D[h]=de(oe(r,V,h));return{c(){e=b("a"),s=b("div"),t=b("span"),a=N(l),u=q(),n=b("div"),p=N(d),y=q(),_=b("div");for(let h=0;h<D.length;h+=1)D[h].c();v=q(),o=b("div"),S=N(r[1]),this.h()},l(h){e=j(h,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var w=E(e);s=j(w,"DIV",{class:!0});var $=E(s);t=j($,"SPAN",{});var M=E(t);a=B(M,l),M.forEach(m),$.forEach(m),u=P(w),n=j(w,"DIV",{class:!0});var te=E(n);p=B(te,d),te.forEach(m),y=P(w),_=j(w,"DIV",{class:!0});var R=E(_);for(let O=0;O<D.length;O+=1)D[O].l(R);v=P(R),o=j(R,"DIV",{class:!0});var le=E(o);S=B(le,r[1]),le.forEach(m),R.forEach(m),w.forEach(m),this.h()},h(){k(s,"class","list-row card-title svelte-r5ac44"),k(n,"class","list-row card-body svelte-r5ac44"),k(o,"class","chip date svelte-r5ac44"),k(_,"class","list-row card-footer svelte-r5ac44"),k(e,"class","card svelte-r5ac44"),k(e,"sveltekit:prefetch",""),k(e,"href",i=ce+r[0].url)},m(h,w){z(h,e,w),g(e,s),g(s,t),g(t,a),g(e,u),g(e,n),g(n,p),g(e,y),g(e,_);for(let $=0;$<D.length;$+=1)D[$].m(_,null);g(_,v),g(_,o),g(o,S),c=!0,I||(H=ae(e,"click",r[3]),I=!0)},p(h,[w]){if((!c||w&1)&&l!==(l=h[0].title+"")&&U(a,l),(!c||w&1)&&d!==(d=h[0].description+"")&&U(p,d),w&1){V=h[0].tags;let $;for($=0;$<V.length;$+=1){const M=oe(h,V,$);D[$]?D[$].p(M,w):(D[$]=de(M),D[$].c(),D[$].m(_,v))}for(;$<D.length;$+=1)D[$].d(1);D.length=V.length}(!c||w&2)&&U(S,h[1]),(!c||w&1&&i!==(i=ce+h[0].url))&&k(e,"href",i)},i(h){c||(se(()=>{f||(f=re(e,K,{},!0)),f.run(1)}),c=!0)},o(h){f||(f=re(e,K,{},!1)),f.run(0),c=!1},d(h){h&&m(e),W(D,h),h&&f&&f.end(),I=!1,H()}}}function we(r,e,s){let t;J(r,ie,d=>s(2,t=d));let{data:l}=e,a=Math.max(...l.years),u=a;l.years.length>1&&(minDate=Math.min(...l.years),u=minDate+" - "+a);const n=()=>{X(ie,t=l.title,t)};return r.$$set=d=>{"data"in d&&s(0,l=d.data)},[l,u,t,n]}class be extends Q{constructor(e){super();T(this,e,we,De,G,{data:0})}}function fe(r,e,s){const t=r.slice();return t[6]=e[s],t}function ue(r){let e,s,t,l=r[6]+"",a,u,n,d,p,y;return{c(){e=b("div"),s=b("span"),t=q(),a=N(l),u=q(),this.h()},l(_){e=j(_,"DIV",{class:!0,"data-type":!0});var v=E(e);s=j(v,"SPAN",{class:!0}),E(s).forEach(m),t=P(v),a=B(v,l),u=P(v),v.forEach(m),this.h()},h(){k(s,"class","circle svelte-17ykwzw"),k(e,"class",n="filter-option "+r[6]+" svelte-17ykwzw"),k(e,"data-type",d=r[6]),F(e,"selected",r[6]==r[0])},m(_,v){z(_,e,v),g(e,s),g(e,t),g(e,a),g(e,u),p||(y=ae(e,"click",r[2]),p=!0)},p(_,v){v&3&&F(e,"selected",_[6]==_[0])},d(_){_&&m(e),p=!1,y()}}}function je(r){let e,s,t=r[1],l=[];for(let a=0;a<t.length;a+=1)l[a]=ue(fe(r,t,a));return{c(){e=b("div"),s=b("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=j(a,"DIV",{class:!0});var u=E(e);s=j(u,"DIV",{class:!0});var n=E(s);for(let d=0;d<l.length;d+=1)l[d].l(n);n.forEach(m),u.forEach(m),this.h()},h(){k(s,"class","project-filter type svelte-17ykwzw"),k(e,"class","filter-holder svelte-17ykwzw")},m(a,u){z(a,e,u),g(e,s);for(let n=0;n<l.length;n+=1)l[n].m(s,null)},p(a,[u]){if(u&7){t=a[1];let n;for(n=0;n<t.length;n+=1){const d=fe(a,t,n);l[n]?l[n].p(d,u):(l[n]=ue(d),l[n].c(),l[n].m(s,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},i:ne,o:ne,d(a){a&&m(e),W(l,a)}}}function Ee(r,e,s){let t,l;J(r,ke,p=>s(3,t=p)),J(r,L,p=>s(4,l=p));let a=t.map(p=>p.tags).flat(1),u=[...new Set(a)];u.unshift("all");let n="all";function d(){s(0,n=this.getAttribute("data-type")),n=="all"?X(L,l=t,l):X(L,l=t.filter(p=>p.tags.includes(n)),l)}return[n,u,d]}class ye extends Q{constructor(e){super();T(this,e,Ee,je,G,{})}}function he(r,e,s){const t=r.slice();return t[1]=e[s],t}function _e(r){let e,s;return e=new be({props:{data:r[1]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){x(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.data=t[1]),e.$set(a)},i(t){s||(A(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){ee(e,t)}}}function Ve(r){let e,s,t,l,a,u,n,d,p,y,_;e=new $e({}),a=new ye({});let v=r[0],o=[];for(let i=0;i<v.length;i+=1)o[i]=_e(he(r,v,i));const S=i=>C(o[i],1,1,()=>{o[i]=null});return{c(){Y(e.$$.fragment),s=q(),t=b("div"),l=b("div"),Y(a.$$.fragment),u=q(),n=b("div"),d=b("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){Z(e.$$.fragment,i),s=P(i),t=j(i,"DIV",{class:!0});var f=E(t);l=j(f,"DIV",{class:!0});var c=E(l);Z(a.$$.fragment,c),c.forEach(m),u=P(f),n=j(f,"DIV",{class:!0});var I=E(n);d=j(I,"DIV",{class:!0});var H=E(d);for(let V=0;V<o.length;V+=1)o[V].l(H);H.forEach(m),I.forEach(m),f.forEach(m),this.h()},h(){k(l,"class","content-inner"),k(d,"class","project-list-holder content-inner svelte-1molqrd"),k(n,"class","project-outer svelte-1molqrd"),k(t,"class","content-outer")},m(i,f){x(e,i,f),z(i,s,f),z(i,t,f),g(t,l),x(a,l,null),g(t,u),g(t,n),g(n,d);for(let c=0;c<o.length;c+=1)o[c].m(d,null);_=!0},p(i,[f]){if(f&1){v=i[0];let c;for(c=0;c<v.length;c+=1){const I=he(i,v,c);o[c]?(o[c].p(I,f),A(o[c],1)):(o[c]=_e(I),o[c].c(),A(o[c],1),o[c].m(d,null))}for(me(),c=v.length;c<o.length;c+=1)S(c);ve()}},i(i){if(!_){A(e.$$.fragment,i),A(a.$$.fragment,i);for(let f=0;f<v.length;f+=1)A(o[f]);se(()=>{y&&y.end(1),p=ge(t,K,{delay:300,duration:500}),p.start()}),_=!0}},o(i){C(e.$$.fragment,i),C(a.$$.fragment,i),o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)C(o[f]);p&&p.invalidate(),y=pe(t,K,{duration:300}),_=!1},d(i){ee(e,i),i&&m(s),i&&m(t),ee(a),W(o,i),i&&y&&y.end()}}}function Ie(r,e,s){let t;return J(r,L,l=>s(0,t=l)),[t]}class ze extends Q{constructor(e){super();T(this,e,Ie,Ve,G,{})}}export{ze as default};
