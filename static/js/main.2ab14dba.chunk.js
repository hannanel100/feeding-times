(this["webpackJsonpfeeding-times"]=this["webpackJsonpfeeding-times"]||[]).push([[0],{119:function(e,t,a){e.exports=a(178)},166:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(35),i=a.n(l),u=(a(55),a(111)),m={apiKey:"AIzaSyCkjoNyREWPQSir0MQE0GKxhvk3Gu6nymU",authDomain:"feeding-times.firebaseapp.com",databaseURL:"https://feeding-times.firebaseio.com",projectId:"feeding-times",storageBucket:"feeding-times.appspot.com",messagingSenderId:"127877852778",appId:"1:127877852778:web:d4195aab660f35f7166413",measurementId:"G-BCW18CF4EW"},s=(a(166),a(19)),p=a(12),d=a(26),h=a(30),f=a(11),g=a(218),b=a(221),E=a(242),y=a(224);i.a.initializeApp(m);var j=i.a,O=(a(79),Object(n.createContext)({})),v=O.Provider,x=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(f.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(!0),u=Object(f.a)(i,2),m=u[0],s=u[1];return Object(n.useEffect)((function(){j.auth().onAuthStateChanged((function(e){e?(l(e),s(!1)):(l(null),s(!1))}))}),[]),r.a.createElement(v,{value:{user:o,authenticated:null!==o,setUser:l,loadingAuthState:m}},t)},w=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},button:{marginTop:"15px"}}})),S=function(){var e=w(),t=Object(n.useContext)(O),a=Object(p.g)(),c=Object(n.useState)({email:"",password:""}),o=Object(f.a)(c,2),l=o[0],i=o[1],u=function(e){e.persist(),i((function(t){return Object(h.a)({},t,Object(d.a)({},e.target.name,e.target.value))}))};return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j.auth().signInWithEmailAndPassword(l.email,l.password).then((function(e){t.setUser(e),a.push("/dashboard")})).catch((function(e){console.log(e.message),alert(e.message)}))},className:e.root},r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center",width:"50%"},r.a.createElement(E.a,{id:"standard-basic",label:"Email",type:"text",name:"email",value:l.email,placeholder:"Enter your Email",onChange:u}),r.a.createElement(E.a,{id:"standard-basic",label:"Password",type:"password",name:"password",value:l.password,placeholder:"Enter your Password",onChange:u}),r.a.createElement(y.a,{value:"login",color:"primary",type:"submit",variant:"contained",className:e.button},"Login"))))},k=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},button:{marginTop:"15px"}}})),C=function(){var e=k(),t=Object(n.useContext)(O),a=Object(n.useState)({username:"",email:"",password:"",phone:""}),c=Object(f.a)(a,2),o=c[0],l=c[1],i=Object(p.g)(),u=function(e){e.persist(),l((function(t){return Object(h.a)({},t,Object(d.a)({},e.target.name,e.target.value))}))};return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j.auth().createUserWithEmailAndPassword(o.email,o.password).then((function(e){t.setUser(e),j.firestore().collection("Users").doc(e.user?e.user.uid:null).set({email:o.email,username:o.username,phone:o.phone}).then((function(){console.log("ok"),i.push("/dashboard")})).catch((function(e){console.log(e.message),alert(e.message)}))}))},className:e.root},r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center",width:"50%"},r.a.createElement(E.a,{label:"Username",type:"text",name:"username",placeholder:"Username",onChange:u}),r.a.createElement(E.a,{label:"Phone Number",type:"text",name:"phone",placeholder:"Phone",onChange:u}),r.a.createElement(E.a,{label:"Email",type:"text",name:"email",placeholder:"Enter your Email",onChange:u}),r.a.createElement(E.a,{label:"Password",type:"password",name:"password",placeholder:"Enter your Password",onChange:u}),r.a.createElement(y.a,{value:"signUp",color:"primary",variant:"contained",className:e.button},"Sign up"))))},N=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/auth/login",component:S}),r.a.createElement(p.b,{exact:!0,path:"/auth/signup",component:C}),r.a.createElement(p.a,{to:"/auth/login",from:"/auth"}))},T=a(112),D=function(e){var t=e.component,a=Object(T.a)(e,["component"]),c=Object(n.useContext)(O),o=c.authenticated;return c.loadingAuthState?r.a.createElement("div",null,r.a.createElement("h1",null,"Loading...")):r.a.createElement(p.b,Object.assign({},a,{render:function(e){return o?r.a.createElement(t,e):r.a.createElement(p.a,{to:{pathname:"/auth/login",state:{prevPath:a.path}}})}}))},I=a(45),P=a.n(I),A=a(82),B=a(66),U=a(16),M=(a(175),Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},button:{margin:"15px"}}})));var L=function(e){var t=M(),a=Object(n.useState)({right:"primary",left:"primary"}),c=Object(f.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(!1),u=Object(f.a)(i,2),m=u[0],s=u[1],p=Object(n.useState)(!1),d=Object(f.a)(p,2),g=d[0],b=d[1],E=function(t){"primary"===o.left&&"primary"===o.right?(e.isStartTime(!1),"left"===t.currentTarget.value?(s(!0),l((function(e){return Object(h.a)({},e,{left:"secondary"})})),e.side("Left")):(b(!0),l((function(e){return Object(h.a)({},e,{right:"secondary"})})),e.side("Right"))):(e.isStartTime(!0),"left"===t.currentTarget.value?(s(!1),l((function(e){return Object(h.a)({},e,{left:"primary"})}))):(b(!1),l((function(e){return Object(h.a)({},e,{right:"primary"})})))),e.timeClickHandler()};return r.a.createElement("div",null,r.a.createElement(y.a,{value:"left",variant:"contained",color:o.left,className:t.button,onClick:function(e){E(e)},disabled:g},"Left"),r.a.createElement(y.a,{value:"right",variant:"contained",color:o.right,className:t.button,onClick:function(e){E(e)},disabled:m},"Right"))},W=a(101),F=a.n(W),Y=a(5),R=a(225),H=a(226),G=a(227),J=a(228),_=a(179),Q=a(229),z=a(230),K=function(e){var t="0".concat(e%60).slice(-2),a="".concat(Math.floor(e/60)),n="0".concat(a%60).slice(-2),r="0".concat(Math.floor(e/3600)).slice(-2);return"".concat(r," : ").concat(n," : ").concat(t)},$=Object(Y.a)((function(e){return{root:{backgroundColor:e.palette.primary,"&:nth-of-type(odd)":{backgroundColor:e.palette.primary.main},"&:nth-of-type(even)":{backgroundColor:e.palette.secondary.main}}}}))(R.a),q=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}}}})),V=function(e){var t=e.timeArray,a=q();U.extend(F.a);var n=[];t&&(n=JSON.parse(JSON.stringify(t)).reverse());var c=t?r.a.createElement(H.a,null,n.map((function(e,a){return r.a.createElement($,{key:a},r.a.createElement(G.a,{component:"th",scope:"row"},t.length-a),r.a.createElement(G.a,{align:"center"},e.side),r.a.createElement(G.a,{align:"center"},U(e.start).format("DD/MM/YYYY - HH:mm:ss")),r.a.createElement(G.a,{align:"center"},U(e.end).format("DD/MM/YYYY - HH:mm:ss")),r.a.createElement(G.a,{align:"center"},K(Math.floor(e.elapsed/1e3))),r.a.createElement(G.a,{align:"center"},a===n.length-1?null:U(n[a+1].end).from(U(e.start))))}))):null;return r.a.createElement(J.a,{component:_.a,className:a.table},r.a.createElement(Q.a,{"aria-label":"simple table"},r.a.createElement(z.a,null,r.a.createElement(R.a,null,r.a.createElement(G.a,null,"#"),r.a.createElement(G.a,{align:"center"},"Side"),r.a.createElement(G.a,{align:"center"},"Start Time"),r.a.createElement(G.a,{align:"center"},"End Time"),r.a.createElement(G.a,{align:"center"},"Elapsed Time"),r.a.createElement(G.a,{align:"center"},"Time Since Previous Feeding"))),c))},X=a(53),Z=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},container:{display:"flex",alignItems:"center",justifyContent:"center"}}})),ee=Object(Y.a)((function(e){return{root:{width:"30%",textAlign:"center",borderRadius:"10px",boxShadow:"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"}}}))(X.a),te=function(e){var t=e.time,a=e.bgColor,n=Z(t);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"stopwatch",className:n.container},r.a.createElement(ee,{variant:"h2",className:(n.root,a)},K(t))))},ae=function(){var e=Object(B.a)(P.a.mark((function e(t,a){var n,r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.auth().currentUser;case 2:if(n=e.sent,r=n.uid,console.log(j.firestore.Timestamp),!r){e.next=14;break}e.t0=a.type,e.next="ADD_FEEDING_TIME"===e.t0?9:13;break;case 9:return c=a.newFeedingTime,j.firestore().collection(r).doc(c.index+"").set({side:c.side,start:U(c.start).toString(),end:U(c.end).toString(),elapsed:c.elapsed},{merge:!0}).then((function(){console.log("ok")})).catch((function(e){console.log(e.message),alert(e.message)})),e.abrupt("return",c);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ne=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(2),width:"calc(100% - 240px)"}},primaryBg:{backgroundColor:e.palette.primary.main},secondaryBg:{backgroundColor:e.palette.secondary.main}}})),re=function(){var e=Object(n.useContext)(O),t=ne(),a=Object(n.useState)([]),c=Object(f.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(""),u=Object(f.a)(i,2),m=u[0],s=u[1],p=Object(n.useState)(""),d=Object(f.a)(p,2),h=d[0],g=d[1],b=Object(n.useState)(""),E=Object(f.a)(b,2),y=E[0],v=E[1],x=Object(n.useState)(0),w=Object(f.a)(x,2),S=w[0],k=w[1],C=Object(n.useState)(t.primaryBg),N=Object(f.a)(C,2),T=N[0],D=N[1],I=Object(n.useState)(!0),M=Object(f.a)(I,2),W=M[0],F=M[1],Y=Object(n.useState)(!0),R=Object(f.a)(Y,2),H=R[0],G=R[1],J=Object(n.useRef)(null),_=Object(n.useReducer)(ae,[]),Q=Object(f.a)(_,2),z=(Q[0],Q[1]),K=e.user.uid;Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(P.a.mark((function e(){var t,a,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K){e.next=9;break}return t=[],a=j.firestore().collection(K),e.next=5,a.get();case 5:n=e.sent,console.log(n),n.forEach((function(e,a){console.log(e.id," => ",e.data()),t.push(e.data())})),l((function(e){return[].concat(Object(A.a)(e),t)}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(o),Object(n.useEffect)((function(){h&&(console.log(U(h).toString()),l([].concat(Object(A.a)(o),[$(y,m,h,U(h).diff(U(m),"ms"),o.length)])),z({type:"ADD_FEEDING_TIME",newFeedingTime:$(y,m,h,U(h).diff(U(m),"ms"),o.length)}))}),[h]);var $=function(e,t,a,n,r){return{side:e,start:t,end:a,elapsed:n,index:r}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timer"),r.a.createElement(te,{time:S,bgColor:T}),r.a.createElement(L,{side:function(e){return v(e)},isStartTime:function(e){return G(e)},timeClickHandler:function(){return function(){if(H){var e=U();s(e),D(t.secondaryBg),J.current=setInterval((function(){k((function(e){return e+1}))}),1e3),F(!1)}else{var a=U(new Date);g(a),D(t.primaryBg),k(0),clearInterval(J.current),F(!0)}}()}}),r.a.createElement(V,{timeArray:W||o.length>0?o:null}))},ce=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/dashboard",component:re}))},oe=a(15),le=a(236),ie=a(237),ue=a(238),me=a(106),se=a.n(me),pe=a(235),de=a(245),he=a(223),fe=a(231),ge=a(232),be=a(233),Ee=a(234),ye=a(102),je=a.n(ye),Oe=a(103),ve=a.n(Oe),xe=a(105),we=a.n(xe),Se=a(104),ke=a.n(Se),Ce=Object(g.a)({list:{width:250},fullList:{width:"auto"},link:{textDecoration:"none",color:"black"}});function Ne(){var e=Ce(),t=Object(p.h)(),a=[{name:"About",path:"/about",icon:r.a.createElement(je.a,{color:"primary"})},{name:"Summary",path:"/summary",icon:r.a.createElement(ve.a,{color:"primary"})},{name:"Dashboard",path:"/dashboard",icon:r.a.createElement(ke.a,{color:"primary"})},{name:"Settings",path:"/settings",icon:r.a.createElement(we.a,{color:"primary"})}].filter((function(e){return e.path!==t.pathname}));return r.a.createElement("div",{className:e.fullList,role:"presentation"},r.a.createElement(fe.a,null),r.a.createElement(he.a,null,a.map((function(t,a){return r.a.createElement(s.b,{to:t.path,className:e.link,key:a},r.a.createElement(ge.a,{button:!0,key:a},r.a.createElement(be.a,null,t.icon),r.a.createElement(Ee.a,{primary:t.name})))}))),r.a.createElement(fe.a,null))}var Te=a(244),De=Object(g.a)((function(e){return{root:{display:"flex",flexShrink:0},appBar:Object(d.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),drawer:Object(d.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),menuButton:Object(d.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}));function Ie(){var e=Object(oe.a)(),t=De(),a=Object(p.g)(),c=Object(n.useContext)(O),o=Object(p.h)(),l=Object(n.useState)(!1),u=Object(f.a)(l,2),m=u[0],s=u[1],d=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&s(e)}},h=c.user?r.a.createElement(y.a,{color:"inherit",onClick:function(e){e.preventDefault(),i.a.auth().signOut().then((function(e){a.push("/auth/login")}))}},"Logout"):"/auth/login"===o.pathname?r.a.createElement(y.a,{color:"inherit",onClick:function(){a.push("/auth/signup")}},"Sign Up"):r.a.createElement(y.a,{color:"inherit",onClick:function(){a.push("/auth/login")}},"Login"),g="/auth/login"===o.pathname||"/auth/signup"===o.pathname?null:r.a.createElement("div",{className:t.toolbar},r.a.createElement(Ne,null));return r.a.createElement("div",{className:t.root},r.a.createElement(pe.a,null),r.a.createElement(le.a,{position:"static",className:t.appBar},r.a.createElement(ie.a,null,r.a.createElement(ue.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:d(!0)},r.a.createElement(se.a,null))," ",r.a.createElement(X.a,{variant:"h6",className:t.title},"Feeding Times"),h)),r.a.createElement("nav",{className:t.drawer},r.a.createElement(Te.a,{smUp:!0,implementation:"css"},r.a.createElement(de.a,{variant:"temporary",anchor:"rtl"===e.direction?"right":"left",open:m,onClose:d(!1),ModalProps:{keepMounted:!0},classes:{paper:t.drawerPaper}},g," ")),r.a.createElement(Te.a,{xsDown:!0,implementation:"css"},r.a.createElement(de.a,{variant:"permanent",classes:{paper:t.drawerPaper},open:!0},g))))}var Pe=a(69),Ae=a(107),Be=a.n(Ae),Ue=a(108),Me=a.n(Ue),Le=a(109),We=a.n(Le),Fe=a(240),Ye=a(239);function Re(){return r.a.createElement(X.a,{variant:"body2",color:"textSecondary"},"Copyright \xa9 ",r.a.createElement(Ye.a,{color:"inherit",href:"https://hannanel-portfolio.netlify.app/"},"hannanel"),(new Date).getFullYear(),".")}var He=Object(g.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},gridContainer:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",justifyContent:"center"}}}));function Ge(){var e=He();return r.a.createElement("div",{className:e.root},r.a.createElement(pe.a,null),r.a.createElement("footer",{className:e.footer},r.a.createElement(Fe.a,{maxWidth:"sm",className:e.gridContainer},r.a.createElement(Ye.a,{href:"https://twitter.com/hannanel100"},r.a.createElement(Pe.Icon,{icon:Be.a,width:"2rem"})),r.a.createElement(Ye.a,{href:"https://github.com/hannanel100"},r.a.createElement(Pe.Icon,{icon:Me.a,width:"2rem"})),r.a.createElement(Ye.a,{href:"https://www.linkedin.com/in/hannanel-gershinsky/"},r.a.createElement(Pe.Icon,{icon:We.a,width:"2rem"}))),r.a.createElement(Fe.a,{maxWidth:"sm"},r.a.createElement(X.a,{variant:"body1"}),r.a.createElement(Re,null))))}var Je=function(){return r.a.createElement("div",null,"Welcome to Summary")},_e=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/summary",component:Je}))},Qe=function(){return r.a.createElement("div",null,"Welcome to Settings")},ze=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/settings",component:Qe}))},Ke=function(){return r.a.createElement("div",null,"Welcome to about")},$e=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/about",component:Ke}))},qe=function(){return r.a.createElement(s.a,null,r.a.createElement(Ie,null),r.a.createElement(p.d,null,r.a.createElement(D,{exact:!0,path:"/dashboard",component:ce}),r.a.createElement(D,{exact:!0,path:"/about",component:$e}),r.a.createElement(D,{exact:!0,path:"/summary",component:_e}),r.a.createElement(D,{exact:!0,path:"/settings",component:ze}),r.a.createElement(p.b,{path:"/auth",component:N}),r.a.createElement(p.a,{to:"/auth",from:"/"})),r.a.createElement(Ge,null))},Ve=(a(177),a(241)),Xe=a(110),Ze=Object(Xe.a)({palette:{primary:{main:"#f27781"},secondary:{main:"#f2cf1d"}},typography:{fontFamily:"'Quicksand', sans-serif",button:{textTransform:"none"}}});var et=function(){return r.a.createElement(Ve.a,{theme:Ze},r.a.createElement(qe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,Object.assign({firebase:i.a},m),r.a.createElement(x,null,r.a.createElement(et,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.2ab14dba.chunk.js.map