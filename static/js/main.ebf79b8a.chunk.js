(this["webpackJsonpreact-star-wars"]=this["webpackJsonpreact-star-wars"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports={container:"ChooseSide_container__DcxY5",item:"ChooseSide_item__1B-Wb",item__header:"ChooseSide_item__header__1hCYy",item__img:"ChooseSide_item__img__13vXY",item__light:"ChooseSide_item__light__3Bxnt",item__dark:"ChooseSide_item__dark__hhQWi",item__neitral:"ChooseSide_item__neitral__3h2aV"}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var n=a(6),c=a.n(n),r=a(11),s=function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((a=e.sent).ok){e.next=7;break}return console.error("\u041e\u0428\u0418\u0411\u041a\u0410 FETCH.",a.status),e.abrupt("return",!1);case 7:return e.next=9,a.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),console.error("\u041e\u0428\u0418\u0411\u041a\u0410 FETCH.",e.t0.message),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},,function(e,t,a){e.exports={list__container:"SearchPageInfo_list__container__2qios",list__item:"SearchPageInfo_list__item__Ro6hr",person__photo:"SearchPageInfo_person__photo__izK7e",person__name:"SearchPageInfo_person__name__8Xqu6",person__comment:"SearchPageInfo_person__comment__g36rh"}},,function(e,t,a){e.exports={wrapper:"PersonInfo_wrapper__3ky_t",list__container:"PersonInfo_list__container__PlRG2",list__item:"PersonInfo_list__item__1OwEm",item__title:"PersonInfo_item__title__2bGIs"}},function(e,t,a){e.exports={wrapper__input:"UiInput_wrapper__input__wPTH7",input:"UiInput_input__-iAWw",clear:"UiInput_clear__qBpdq",clear__disabled:"UiInput_clear__disabled__3AvLo"}},,,,,function(e,t,a){e.exports={container:"Favorite_container__3UJec",icon:"Favorite_icon__11tPG",counter:"Favorite_counter__2gNGI"}},function(e,t,a){e.exports={container:"Header_container__2LMiY",list__container:"Header_list__container__3k1ar",logo:"Header_logo__PeKOX"}},function(e,t,a){e.exports={text:"ErrorMessage_text__1i4IT",video:"ErrorMessage_video__1-iX7",thumb:"ErrorMessage_thumb__1GRjn"}},function(e,t,a){e.exports={list__container:"PeopleList_list__container__2sPKk",list__item:"PeopleList_list__item__kCTMX",person__photo:"PeopleList_person__photo__ZResa"}},function(e,t,a){e.exports={container:"PeopleNavigation_container__VUOVg",buttons:"PeopleNavigation_buttons__Z-kQG"}},function(e,t,a){e.exports={container:"PersonPhoto_container__nl7_K",photo:"PersonPhoto_photo__13AsD",favorite:"PersonPhoto_favorite__EEdW0"}},function(e,t,a){e.exports={wrapper:"PersonPage_wrapper__3NDUi",person__name:"PersonPage_person__name__1m5S0",container:"PersonPage_container__2sZGM"}},,,,,function(e,t,a){e.exports={button:"UiButton_button__3ZY-b",dark:"UiButton_dark__s_hOH",light:"UiButton_light__114ax"}},function(e,t,a){e.exports={found:"NotFoundPage_found__ta_9j",location:"NotFoundPage_location__q-99H"}},function(e,t,a){e.exports={link:"PersonLinkBack_link__1J2ia",link__img:"PersonLinkBack_link__img__TLJHU"}},,function(e,t,a){},function(e,t,a){e.exports={video:"UiVideo_video__1VqFE"}},function(e,t,a){e.exports={loader:"UiLoading_loader__2wWLd"}},function(e,t,a){e.exports={comment:"FavoritePage_comment__17g2T"}},function(e,t,a){e.exports={input__search:"SearchPage_input__search__8Kv0N"}},function(e,t,a){e.exports={wrapper:"App_wrapper__3YVBn"}},,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),s=a.n(r),i=(a(55),a(5)),o=a(4),l=a(3),u=a(12),_=a.p+"static/media/bookmark.e9eb1ac2.svg",j=a(27),p=a.n(j),b=a(0),d=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(u.c)((function(e){return e.favoriteReducer}));return Object(n.useEffect)((function(){var e=Object.keys(r).length;e.toString().length>2?c("..."):c(e)})),Object(b.jsx)("div",{className:p.a.container,children:Object(b.jsxs)(i.b,{to:"/favorites",children:[Object(b.jsx)("span",{className:p.a.counter,children:a}),Object(b.jsx)("img",{className:p.a.icon,src:_,alt:"favorites-icon"})]})})},h=a.p+"static/media/light.b33ca8cc.svg",m=a.p+"static/media/neitral.511eae4c.svg",O=a.p+"static/media/dark.ae0163af.svg",f=a(13),x=a(50),v="light",g="dark",k="neitral",N=c.a.createContext(),P=function(e){var t=e.children,a=Object(x.a)(e,["children"]),c=Object(n.useState)(null),r=Object(l.a)(c,2),s=r[0],i=r[1];return Object(b.jsx)(N.Provider,Object(f.a)(Object(f.a)({value:{theme:s,change:function(e){i(e),function(e){var t=document.querySelector(":root");["header","image"].forEach((function(a){t.style.setProperty("--theme-default-".concat(a),"var(--theme-".concat(e,"-").concat(a,")"))}))}(e)}}},a),{},{children:t}))},S=function(){return Object(n.useContext)(N)},w=a(28),F=a.n(w),y=function(){var e=Object(n.useState)(m),t=Object(l.a)(e,2),a=t[0],c=t[1],r=S();return Object(n.useEffect)((function(){switch(r.theme){case v:c(h);break;case g:c(O);break;case k:c(m);break;default:c(m)}}),[r]),Object(b.jsxs)("div",{className:F.a.container,children:[Object(b.jsx)("img",{className:F.a.logo,src:a,alt:"starwars"}),Object(b.jsxs)("ul",{className:F.a.list__container,children:[Object(b.jsx)("li",{children:Object(b.jsx)(i.c,{to:"/",exact:!0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(i.c,{to:"/people/?page=1",children:"People"})}),Object(b.jsx)("li",{children:Object(b.jsx)(i.c,{to:"/not-found",exact:!0,children:"Not Found"})}),Object(b.jsx)("li",{children:Object(b.jsx)(i.c,{to:"/search",exact:!0,children:"Search"})}),Object(b.jsx)("li",{children:Object(b.jsx)(i.c,{to:"/fail",exact:!0,children:"Fail"})})]}),Object(b.jsx)(d,{})]})},E=a(6),C=a.n(E),I=a(11),R=a(14),U=a.n(R),B=a(43),H=a.n(B),L=function(e){var t=e.src,a=e.classes,c=e.playbackRate,r=void 0===c?1:c,s=Object(n.useRef)(null);return Object(n.useEffect)((function(){s.current.playbackRate=r}),[]),Object(b.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,className:U()(H.a.video,a),ref:s,children:Object(b.jsx)("source",{src:t})})},A=a.p+"static/media/starWars.5cd2a7e6.mp4",M=a(29),T=a.n(M),G=function(){return Object(b.jsxs)("div",{className:T.a.thumb,children:[Object(b.jsx)("p",{className:T.a.text,children:"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"}),Object(b.jsx)(L,{src:A,playbackRate:2,classes:T.a.video})]})},V=function(e){return function(t){var a=Object(n.useState)(!1),c=Object(l.a)(a,2),r=c[0],s=c[1];return Object(b.jsx)(b.Fragment,{children:r?Object(b.jsx)(G,{}):Object(b.jsx)(e,Object(f.a)({setErrorApi:s},t))})}},D=a(17),q="https://",J="swapi.dev/api/",W="people",Y="/?page=",K=function(e){var t=e.lastIndexOf(Y),a=e.slice(t+Y.length,e.length);return Number(a)},X=function(e){return function(e,t){return e.replace(q+J+t,"").replace(/\//g,"")}(e,W)},Z=function(e){return"".concat("https://starwars-visualguide.com/assets/img/characters","/").concat(e+".jpg")},z=a(30),Q=a.n(z),$=function(e){return Object(b.jsx)("ul",{className:Q.a.list__container,children:e.people.map((function(e){var t=e.id,a=e.name,n=e.img;return Object(b.jsx)("li",{className:Q.a.list__item,children:Object(b.jsxs)(i.b,{to:"/people/".concat(t),children:[Object(b.jsx)("img",{className:Q.a.person__photo,src:n,alt:a}),Object(b.jsx)("p",{children:a})]})},t)}))})},ee=(a(42),a(38)),te=a.n(ee),ae=function(e){var t=e.text,a=e.onClickUi,n=e.disabled,c=e.theme,r=void 0===c?"dark":c,s=e.classes;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{className:U()(te.a.button,te.a[r],s),onClick:a,disabled:n,children:t})})},ne=a(31),ce=a.n(ne),re=function(e){var t=e.getResource,a=e.prevPage,n=e.nextPage,c=e.counterPage;return Object(b.jsxs)("div",{className:ce.a.container,children:[Object(b.jsx)(i.b,{to:"/people/?page=".concat(c-1),className:ce.a.buttons,children:Object(b.jsx)(ae,{text:"Previous",onClickUi:function(){t(a)},disabled:!a})}),Object(b.jsx)(i.b,{to:"/people/?page=".concat(c+1),className:ce.a.buttons,children:Object(b.jsx)(ae,{text:"Next",onClickUi:function(){t(n)},disabled:!n})})]})},se=(a(62),V((function(e){var t=e.setErrorApi,a=Object(n.useState)(null),c=Object(l.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(null),u=Object(l.a)(i,2),_=u[0],j=u[1],p=Object(n.useState)(null),d=Object(l.a)(p,2),h=d[0],m=d[1],O=Object(n.useState)(1),f=Object(l.a)(O,2),x=f[0],v=f[1],g=new URLSearchParams(Object(o.g)().search).get("page"),k=function(){var e=Object(I.a)(C.a.mark((function e(a){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)(a);case 2:(n=e.sent)?(c=n.results.map((function(e){var t=e.name,a=e.url,n=X(a);return{id:n,name:t,img:Z(n)}})),s(c),j(n.previous),m(n.next),v(K(a)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k("https://swapi.dev/api/people/?page="+g)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(re,{getResource:k,prevPage:_,nextPage:h,counterPage:x}),r?Object(b.jsx)($,{people:r}):null]})}))),ie=a.p+"static/media/light.a0300f63.jpg",oe=a.p+"static/media/dark.5aa4c244.jpg",le=a.p+"static/media/neitral.17903ef8.jpg",ue=a(15),_e=a.n(ue),je=function(e){var t=e.onClick,a=e.text,n=e.img,c=e.classes;return Object(b.jsxs)("div",{className:U()(_e.a.item,c),onClick:t,children:[Object(b.jsx)("div",{className:_e.a.item__header,children:a}),Object(b.jsx)("img",{className:_e.a.item__img,src:n,alt:a})]})},pe=function(){var e=S();return Object(b.jsxs)("div",{className:_e.a.container,children:[Object(b.jsx)(je,{onClick:function(){return e.change(v)},text:"Light Side",img:ie,classes:_e.a.item__light}),Object(b.jsx)(je,{onClick:function(){return e.change(g)},text:"Dark Side",img:oe,classes:_e.a.item__dark}),Object(b.jsx)(je,{onClick:function(){return e.change(k)},text:"Neitral Side",img:le,classes:_e.a.item__neitral})]})},be=(a(63),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"header__text",children:"HomePage"}),Object(b.jsx)(pe,{})]})}),de=a(39),he=a.n(de),me=function(){var e=Object(o.g)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:he.a.found,children:"404 Not Found"}),Object(b.jsxs)("p",{className:he.a.location,children:["No match for ",Object(b.jsx)("u",{children:e.pathname})]})]})},Oe=a(25),fe="ADD_PERSON_TO_FAVORITE",xe="REMOVE_PERSON_FROM_FAVORITE",ve=a.p+"static/media/favorite.c25d9749.svg",ge=a.p+"static/media/favorite-fill.b881a61a.svg",ke=a(32),Ne=a.n(ke),Pe=function(e){var t=e.personName,a=e.personPhoto,n=e.personId,c=e.personFavorite,r=e.setPersonFavorite,s=Object(u.b)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:Ne.a.container,children:[Object(b.jsx)("img",{className:Ne.a.photo,src:a,alt:t}),Object(b.jsx)("img",{src:c?ge:ve,onClick:function(){var e;c?(s(function(e){return{type:xe,payload:e}}(n)),r(!1)):(s((e=Object(Oe.a)({},n,{name:t,img:a}),{type:fe,payload:e})),r(!0))},className:Ne.a.favorite,alt:"favorite"})]})})},Se=a(21),we=a.n(Se),Fe=function(e){var t=e.personInfo;return Object(b.jsx)("div",{className:we.a.wrapper,children:Object(b.jsx)("ul",{className:we.a.list__container,children:t.map((function(e){var t=e.title,a=e.data;return a?Object(b.jsxs)("li",{className:we.a.list__item,children:[Object(b.jsx)("span",{className:we.a.item__title,children:t}),":",a]},t):null}))})})},ye=a.p+"static/media/back.329523b3.svg",Ee=a(40),Ce=a.n(Ee),Ie=function(){var e=Object(o.f)();return Object(b.jsxs)("a",{href:"#",onClick:function(t){t.preventDefault(),e.goBack()},className:Ce.a.link,children:[Object(b.jsx)("img",{className:Ce.a.link__img,src:ye,alt:"back"}),Object(b.jsx)("span",{children:"Go Back"})]})},Re=a.p+"static/media/loader-white-red.810ea70b.svg",Ue=a.p+"static/media/loader-black.c0bae95e.svg",Be=a.p+"static/media/loader-blue.e74381ad.svg",He=a(44),Le=a.n(He),Ae=function(e){var t=e.theme,a=void 0===t?"white-red":t,c=Object(n.useState)(null),r=Object(l.a)(c,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){switch(a){case"black":i(Ue);break;case"white-red":i(Re);break;case"blue":i(Be);break;default:i(Re)}}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{className:Le.a.loader,src:s,alt:"Loader"})})},Me=a(33),Te=a.n(Me),Ge=c.a.lazy((function(){return a.e(3).then(a.bind(null,67))})),Ve=V((function(e){var t=e.match,a=e.setErrorApi,c=Object(n.useState)(null),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(null),_=Object(l.a)(o,2),j=_[0],p=_[1],d=Object(n.useState)(null),h=Object(l.a)(d,2),m=h[0],O=h[1],f=Object(n.useState)(null),x=Object(l.a)(f,2),v=x[0],g=x[1],k=Object(n.useState)(null),N=Object(l.a)(k,2),P=N[0],S=N[1],w=Object(n.useState)(!1),F=Object(l.a)(w,2),y=F[0],E=F[1],R=Object(u.c)((function(e){return e.favoriteReducer}));return Object(n.useEffect)((function(){Object(I.a)(C.a.mark((function e(){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params.id,e.next=3,Object(D.a)("".concat("https://swapi.dev/api/people","/").concat(n,"/"));case 3:c=e.sent,R[n]?E(!0):E(!1),i(n),c?(p([{title:"Birth_year",data:c.birth_year},{title:"Height",data:c.height},{title:"Eye_color",data:c.eye_color},{title:"Hair_color",data:c.hair_color},{title:"Mass",data:c.mass},{title:"Skin_color",data:c.skin_color},{title:"Gender",data:c.gender}]),O(c.name),g(Z(n)),c.films.length>0&&S(c.films),a(!1)):a(!0);case 7:case"end":return e.stop()}}),e)})))()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Ie,{}),Object(b.jsxs)("div",{className:Te.a.wrapper,children:[Object(b.jsx)("span",{className:Te.a.person__name,children:m}),Object(b.jsxs)("div",{className:Te.a.container,children:[Object(b.jsx)(Pe,{personPhoto:v,personName:m,personId:s,personFavorite:y,setPersonFavorite:E}),j?Object(b.jsx)(Fe,{personInfo:j}):null,P?Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(Ae,{theme:"white-red"}),children:Object(b.jsx)(Ge,{personFilms:P})}):null]})]})]})})),De=a(45),qe=a.n(De),Je=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(u.c)((function(e){return e.favoriteReducer}));return Object(n.useEffect)((function(){var e=Object.entries(r);if(e.length){var t=e.map((function(e){return Object(f.a)({id:e[0]},e[1])}));c(t)}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"header__text",children:"FavoritePage"}),a.length?Object(b.jsx)($,{people:a}):Object(b.jsx)("h2",{className:qe.a.comment,children:"No data"})]})},We=a(26),Ye=a(46),Ke=a.n(Ye),Xe=a(19),Ze=a.n(Xe),ze=function(e){var t=e.people;return Object(b.jsx)(b.Fragment,{children:t.length?Object(b.jsx)("ul",{className:Ze.a.list__container,children:t.map((function(e){var t=e.id,a=e.name,n=e.img;return Object(b.jsx)("li",{className:Ze.a.list__item,children:Object(b.jsxs)(i.b,{to:"/people/".concat(t),children:[Object(b.jsx)("img",{src:n,alt:a,className:Ze.a.person__photo}),Object(b.jsx)("p",{className:Ze.a.person__name,children:a})]})},t)}))}):Object(b.jsx)("h2",{className:Ze.a.person__comment,children:"No results"})})},Qe=a.p+"static/media/cross.f970c57a.svg",$e=a(22),et=a.n($e),tt=function(e){var t=e.value,a=e.handleInputChange,n=e.placeholder,c=e.classes;return Object(b.jsxs)("div",{className:U()(et.a.wrapper__input,c),children:[Object(b.jsx)("input",{type:"text",placeholder:n,value:t,onChange:function(e){return a(e.target.value)},className:et.a.input}),Object(b.jsx)("img",{onClick:function(){t&&a("")},src:Qe,className:U()(et.a.clear,t&&et.a.clear__disabled),alt:"clear"})]})},at=[{path:"/",exact:!0,component:be},{path:"/people",exact:!0,component:se},{path:"/people/:id",exact:!0,component:Ve},{path:"/not-found",exact:!0,component:me},{path:"/search",exact:!0,component:V((function(e){var t=e.setErrorApi,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)([]),o=Object(l.a)(i,2),u=o[0],_=o[1],j=function(){var e=Object(I.a)(C.a.mark((function e(a){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)("https://swapi.dev/api/people/?search="+a);case 2:(n=e.sent)?(c=n.results.map((function(e){var t=e.name,a=e.url,n=X(a);return{id:n,name:t,img:Z(n)}})),_(c),t(!1)):t(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){j("")}),[]);var p=Object(n.useCallback)(Object(We.debounce)((function(e){return j(e)}),300),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"header__text",children:"Search"}),Object(b.jsx)(tt,{value:r,handleInputChange:function(e){s(e),p(e)},placeholder:"Input charecter's name",classes:Ke.a.input__search}),Object(b.jsx)("div",{children:Object(b.jsx)(ze,{people:u})})]})}))},{path:"/favorites",exact:!0,component:Je},{path:"/fail",exact:!0,component:G},{path:"*",exact:!1,component:me}],nt=a(47),ct=a.n(nt),rt=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:ct.a.wrapper,children:[Object(b.jsx)(y,{}),Object(b.jsx)(o.c,{children:at.map((function(e,t){var a=e.path,n=e.exact,c=e.component;return Object(b.jsx)(o.a,{path:a,exact:n,component:c},t)}))})]})})})},st=a(18),it=a(48),ot=a(49),lt=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):{}}("store"),ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(f.a)(Object(f.a)({},e),t.payload);case xe:return Object(We.omit)(e,[t.payload]);default:return e}},_t=Object(st.combineReducers)({favoriteReducer:ut}),jt=Object(st.createStore)(_t,Object(it.composeWithDevTools)(Object(st.applyMiddleware)(ot.a)));jt.subscribe((function(){var e,t;e="store",t=jt.getState().favoriteReducer,localStorage.setItem(e,JSON.stringify(t))}));var pt=jt;s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(u.a,{store:pt,children:Object(b.jsx)(P,{children:Object(b.jsx)(rt,{})})})}),document.getElementById("root"))}],[[65,1,2]]]);
//# sourceMappingURL=main.ebf79b8a.chunk.js.map