import{W as X,X as z,D as B,S as F,i as G,s as M,e as h,k as I,t as x,c as f,a as _,d as c,m as w,h as A,b as n,L as y,g as H,J as d,q as L,K as T,Q as K,j as O,N,V as Q,R as W}from"./vendor-1827c632.js";import{b as J}from"./paths-28a87002.js";const U=()=>{const l=X("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session}},Y={subscribe(l){return U().page.subscribe(l)}};let Z=z(500),$=B(null);function ee(l){let e,r,k,v,a,i,b,o,u,m,g,j,E,S="< back",D,p;return{c(){e=h("div"),r=h("div"),k=x("work"),v=I(),a=h("div"),i=x("/"),b=I(),o=h("div"),u=x(l[2]),g=I(),j=h("div"),E=h("a"),D=x(S),this.h()},l(t){e=f(t,"DIV",{class:!0});var s=_(e);r=f(s,"DIV",{class:!0});var V=_(r);k=A(V,"work"),V.forEach(c),v=w(s),a=f(s,"DIV",{class:!0});var q=_(a);i=A(q,"/"),q.forEach(c),b=w(s),o=f(s,"DIV",{class:!0});var C=_(o);u=A(C,l[2]),C.forEach(c),s.forEach(c),g=w(t),j=f(t,"DIV",{class:!0});var P=_(j);E=f(P,"A",{class:!0,href:!0});var R=_(E);D=A(R,S),R.forEach(c),P.forEach(c),this.h()},h(){n(r,"class","svelte-1tx0ojl"),n(a,"class","svelte-1tx0ojl"),n(o,"class","selected project-title svelte-1tx0ojl"),n(e,"class","nav-left svelte-1tx0ojl"),n(E,"class","btn-back svelte-1tx0ojl"),n(E,"href",J+"/"),n(j,"class","nav-right")},m(t,s){H(t,e,s),d(e,r),d(r,k),d(e,v),d(e,a),d(a,i),d(e,b),d(e,o),d(o,u),H(t,g,s),H(t,j,s),d(j,E),d(E,D)},p(t,s){l=t,s&4&&O(u,l[2])},i(t){m||N(()=>{m=Q(e,W,{duration:l[1]}),m.start()}),p||N(()=>{p=Q(j,W,{duration:l[1]}),p.start()})},o:T,d(t){t&&c(e),t&&c(g),t&&c(j)}}}function te(l){let e,r,k,v,a,i,b;return{c(){e=h("div"),r=h("a"),k=x("work"),v=I(),a=h("div"),i=h("a"),b=x("about"),this.h()},l(o){e=f(o,"DIV",{class:!0});var u=_(e);r=f(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=_(r);k=A(m,"work"),m.forEach(c),u.forEach(c),v=w(o),a=f(o,"DIV",{class:!0});var g=_(a);i=f(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var j=_(i);b=A(j,"about"),j.forEach(c),g.forEach(c),this.h()},h(){n(r,"sveltekit:prefetch",""),n(r,"href",J+"/"),n(r,"class","svelte-1tx0ojl"),n(e,"class","nav-item work svelte-1tx0ojl"),y(e,"selected",!l[0].url.pathname.includes("about")),n(i,"sveltekit:prefetch",""),n(i,"href",J+"/about"),n(i,"class","svelte-1tx0ojl"),n(a,"class","nav-item about svelte-1tx0ojl"),y(a,"selected",l[0].url.pathname.includes("about"))},m(o,u){H(o,e,u),d(e,r),d(r,k),H(o,v,u),H(o,a,u),d(a,i),d(i,b)},p(o,u){u&1&&y(e,"selected",!o[0].url.pathname.includes("about")),u&1&&y(a,"selected",o[0].url.pathname.includes("about"))},i:T,o:T,d(o){o&&c(e),o&&c(v),o&&c(a)}}}function se(l){let e,r,k,v,a,i,b,o,u,m,g,j,E;function S(t,s){return s&1&&(g=null),g==null&&(g=!t[0].url.pathname.includes("project")),g?te:ee}let D=S(l,-1),p=D(l);return{c(){e=h("header"),r=h("div"),k=I(),v=h("div"),a=h("div"),i=h("div"),b=h("a"),o=x("omar nema"),u=I(),m=h("div"),p.c(),j=I(),E=h("div"),this.h()},l(t){e=f(t,"HEADER",{class:!0});var s=_(e);r=f(s,"DIV",{class:!0}),_(r).forEach(c),k=w(s),v=f(s,"DIV",{class:!0});var V=_(v);a=f(V,"DIV",{class:!0});var q=_(a);i=f(q,"DIV",{class:!0});var C=_(i);b=f(C,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var P=_(b);o=A(P,"omar nema"),P.forEach(c),C.forEach(c),q.forEach(c),u=w(V),m=f(V,"DIV",{class:!0});var R=_(m);p.l(R),R.forEach(c),V.forEach(c),j=w(s),E=f(s,"DIV",{class:!0}),_(E).forEach(c),s.forEach(c),this.h()},h(){n(r,"class","header-padding left svelte-1tx0ojl"),n(b,"sveltekit:prefetch",""),n(b,"href",J),n(b,"class","svelte-1tx0ojl"),n(i,"class","header-name svelte-1tx0ojl"),n(a,"class","name-holder svelte-1tx0ojl"),n(m,"class","header-nav svelte-1tx0ojl"),y(m,"split",l[0].url.pathname.includes("project")),n(v,"class","inner-header svelte-1tx0ojl"),n(E,"class","header-padding right svelte-1tx0ojl"),n(e,"class","svelte-1tx0ojl")},m(t,s){H(t,e,s),d(e,r),d(e,k),d(e,v),d(v,a),d(a,i),d(i,b),d(b,o),d(v,u),d(v,m),p.m(m,null),d(e,j),d(e,E)},p(t,[s]){D===(D=S(t,s))&&p?p.p(t,s):(p.d(1),p=D(t),p&&(p.c(),L(p,1),p.m(m,null))),s&1&&y(m,"split",t[0].url.pathname.includes("project"))},i(t){L(p)},o:T,d(t){t&&c(e),p.d()}}}function ae(l,e,r){let k,v,a;return K(l,Y,i=>r(0,k=i)),K(l,Z,i=>r(1,v=i)),K(l,$,i=>r(2,a=i)),[k,v,a]}class ie extends F{constructor(e){super();G(this,e,ae,se,M,{})}}export{ie as H,$ as s,Z as t};