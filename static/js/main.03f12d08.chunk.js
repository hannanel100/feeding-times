(this["webpackJsonpfeeding-times"]=this["webpackJsonpfeeding-times"]||[]).push([[0],{115:function(e,t,a){e.exports=a(178)},161:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=a(41),l=a.n(i),u=(a(72),a(107)),s={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/feeding-times",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/feeding-times",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/feeding-times",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/feeding-times",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/feeding-times",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/feeding-times",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/feeding-times",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REAT_APP_ID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/feeding-times",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MEASUREMENT_ID},m=(a(161),a(34)),d=a(14),p=a(21),E=a(33),g=a(13),b=(a(162),a(216)),f=a(219),O=a(237),h=a(222);l.a.initializeApp(s);var S=l.a,v=(a(93),Object(n.createContext)({})),_=v.Provider,j=function(e){var t=e.children,a=Object(n.useState)(null),o=Object(g.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(!0),u=Object(g.a)(l,2),s=u[0],m=u[1];return Object(n.useEffect)((function(){S.auth().onAuthStateChanged((function(e){e?(i(e),m(!1)):(i(null),m(!1))}))}),[]),r.a.createElement(_,{value:{user:c,authenticated:null!==c,setUser:i,loadingAuthState:s}},t)},T=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},button:{marginTop:"15px"}}})),C=function(){var e=T(),t=Object(n.useContext)(v),a=Object(d.g)(),o=Object(n.useState)({email:"",password:""}),c=Object(g.a)(o,2),i=c[0],l=c[1],u=function(e){e.persist(),l((function(t){return Object(E.a)({},t,Object(p.a)({},e.target.name,e.target.value))}))};return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(t),S.auth().signInWithEmailAndPassword(i.email,i.password).then((function(e){t.setUser(e),console.log(e,"res"),a.push("/dashboard")})).catch((function(e){console.log(e.message),alert(e.message)}))},className:e.root},r.a.createElement(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",width:"50%"},r.a.createElement(O.a,{id:"standard-basic",label:"Email",type:"text",name:"email",value:i.email,placeholder:"Enter your Email",onChange:u}),r.a.createElement(O.a,{id:"standard-basic",label:"Password",type:"password",name:"password",value:i.password,placeholder:"Enter your Password",onChange:u}),r.a.createElement(h.a,{value:"login",color:"primary",type:"submit",variant:"contained",className:e.button},"Login"))))},y=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},button:{marginTop:"15px"}}})),P=function(){var e=y(),t=Object(n.useContext)(v),a=Object(n.useState)({username:"",email:"",password:"",phone:""}),o=Object(g.a)(a,2),c=o[0],i=o[1],l=Object(d.g)(),u=function(e){e.persist(),i((function(t){return Object(E.a)({},t,Object(p.a)({},e.target.name,e.target.value))}))};return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(c,"values"),S.auth().createUserWithEmailAndPassword(c.email,c.password).then((function(e){t.setUser(e),S.firestore().collection("Users").doc(e.user?e.user.uid:null).set({email:c.email,username:c.username,phone:c.phone}).then((function(){console.log("ok"),l.push("/dashboard")})).catch((function(e){console.log(e.message),alert(e.message)}))}))},className:e.root},r.a.createElement(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",width:"50%"},r.a.createElement(O.a,{label:"Username",type:"text",name:"username",placeholder:"Username",onChange:u}),r.a.createElement(O.a,{label:"Phone Number",type:"text",name:"phone",placeholder:"Phone",onChange:u}),r.a.createElement(O.a,{label:"Email",type:"text",name:"email",placeholder:"Enter your Email",onChange:u}),r.a.createElement(O.a,{label:"Password",type:"password",name:"password",placeholder:"Enter your Password",onChange:u}),r.a.createElement(h.a,{value:"signUp",color:"primary",variant:"contained",className:e.button},"Sign up"))))},x=function(){return r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/auth/login",component:C}),r.a.createElement(d.b,{exact:!0,path:"/auth/signup",component:P}),r.a.createElement(d.a,{to:"/auth/login",from:"/auth"}))},w=a(108),D=function(e){var t=e.component,a=Object(w.a)(e,["component"]),o=Object(n.useContext)(v),c=o.authenticated;return o.loadingAuthState?r.a.createElement("div",null,r.a.createElement("h1",null,"Loading...")):r.a.createElement(d.b,Object.assign({},a,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(d.a,{to:{pathname:"/auth/login",state:{prevPath:a.path}}})}}))},A=a(106),N=a(29),R=(a(175),Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},button:{margin:"15px"}}})));var k=function(e){var t=R(),a=Object(n.useState)({right:"primary",left:"primary"}),o=Object(g.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(!1),u=Object(g.a)(l,2),s=u[0],m=u[1],d=Object(n.useState)(!1),p=Object(g.a)(d,2),b=p[0],f=p[1],O=function(t){"primary"===c.left&&"primary"===c.right?(e.isStartTime(!1),"left"===t.currentTarget.value?(m(!0),i((function(e){return Object(E.a)({},e,{left:"secondary"})})),e.side("Left")):(f(!0),i((function(e){return Object(E.a)({},e,{right:"secondary"})})),e.side("Right"))):(e.isStartTime(!0),"left"===t.currentTarget.value?(m(!1),i((function(e){return Object(E.a)({},e,{left:"primary"})}))):(f(!1),i((function(e){return Object(E.a)({},e,{right:"primary"})})))),e.timeClickHandler()};return r.a.createElement("div",null,r.a.createElement(h.a,{value:"left",variant:"contained",color:c.left,className:t.button,onClick:function(e){O(e)},disabled:b},"Left"),r.a.createElement(h.a,{value:"right",variant:"contained",color:c.right,className:t.button,onClick:function(e){O(e)},disabled:s},"Right"))},L=a(100),U=a.n(L),W=a(6),K=a(223),I=a(224),B=a(225),H=a(226),M=a(179),Y=a(227),V=a(228),F=function(e){var t="0".concat(e%60).slice(-2),a="".concat(Math.floor(e/60)),n="0".concat(a%60).slice(-2),r="0".concat(Math.floor(e/3600)).slice(-2);return"".concat(r," : ").concat(n," : ").concat(t)},G=Object(W.a)((function(e){return{root:{backgroundColor:e.palette.primary,"&:nth-of-type(odd)":{backgroundColor:e.palette.primary.main},"&:nth-of-type(even)":{backgroundColor:e.palette.secondary.main}}}}))(K.a),J=Object(b.a)((function(e){var t;return{root:{"& > *":{margin:e.spacing(2)},table:(t={},Object(p.a)(t,e.breakpoints.up("sm"),{width:"100vw",marginLeft:"240px"}),Object(p.a)(t,e.breakpoints.up("xl"),{width:"1920px",marginLeft:"240px"}),t)}}})),z=function(e){var t=e.timeArray,a=J();N.extend(U.a);var n=[];t&&(n=JSON.parse(JSON.stringify(t)).reverse());var o=t?r.a.createElement(I.a,null,n.map((function(e,a){return r.a.createElement(G,{key:a},r.a.createElement(B.a,{component:"th",scope:"row"},t.length-a),r.a.createElement(B.a,{align:"center"},e.side),r.a.createElement(B.a,{align:"center"},N(e.start).format("DD/MM/YYYY - HH:mm:ss")),r.a.createElement(B.a,{align:"center"},N(e.end).format("DD/MM/YYYY - HH:mm:ss")),r.a.createElement(B.a,{align:"center"},F(Math.floor(e.elapsed/1e3))),r.a.createElement(B.a,{align:"center"},a===n.length-1?null:N(n[a+1].end).from(N(e.start))))}))):null;return r.a.createElement(H.a,{component:M.a,className:a.table},r.a.createElement(Y.a,{"aria-label":"simple table"},r.a.createElement(V.a,null,r.a.createElement(K.a,null,r.a.createElement(B.a,null,"#"),r.a.createElement(B.a,{align:"center"},"Side"),r.a.createElement(B.a,{align:"center"},"Start Time"),r.a.createElement(B.a,{align:"center"},"End Time"),r.a.createElement(B.a,{align:"center"},"Elapsed Time"),r.a.createElement(B.a,{align:"center"},"Time Since Previous Feeding"))),o))},Q=a(70),$=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},container:{display:"flex",alignItems:"center",justifyContent:"center"}}})),q=Object(W.a)((function(e){return{root:{width:"30%",textAlign:"center",borderRadius:"10px",boxShadow:"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"}}}))(Q.a),X=function(e){var t=e.time,a=e.bgColor,n=$(t);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"stopwatch",className:n.container},r.a.createElement(q,{variant:"h2",className:(n.root,a)},F(t))))},Z=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(2),width:"calc(100% - 240px)"}},primaryBg:{backgroundColor:e.palette.primary.main},secondaryBg:{backgroundColor:e.palette.secondary.main}}})),ee=function(){var e=Z(),t=Object(n.useState)(""),a=Object(g.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),l=Object(g.a)(i,2),u=l[0],s=l[1],m=Object(n.useState)(""),d=Object(g.a)(m,2),p=d[0],E=d[1],b=Object(n.useState)([]),f=Object(g.a)(b,2),O=f[0],h=f[1],S=Object(n.useState)(0),v=Object(g.a)(S,2),_=v[0],j=v[1],T=Object(n.useState)(e.primaryBg),C=Object(g.a)(T,2),y=C[0],P=C[1],x=Object(n.useState)(!0),w=Object(g.a)(x,2),D=w[0],R=w[1],L=Object(n.useState)(!0),U=Object(g.a)(L,2),W=U[0],K=U[1],I=Object(n.useRef)(null);Object(n.useEffect)((function(){u&&h([].concat(Object(A.a)(O),[B(p,o,u,N(u).diff(N(o),"ms"))]))}),[u]);var B=function(e,t,a,n){return{side:e,start:t,end:a,elapsed:n}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timer"),r.a.createElement(X,{time:_,bgColor:y}),r.a.createElement(k,{side:function(e){return E(e)},isStartTime:function(e){return K(e)},timeClickHandler:function(){return function(){if(console.log("isStartTime: ".concat(W)),W){var t=N();c(t),P(e.secondaryBg),I.current=setInterval((function(){j((function(e){return e+1}))}),1e3),R(!1)}else{var a=N(new Date);s(a),P(e.primaryBg),j(0),clearInterval(I.current),R(!0)}}()}}),r.a.createElement(z,{timeArray:D||O.length>0?O:null}))},te=function(){return r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/dashboard",component:ee}))},ae=a(17),ne=a(233),re=a(234),oe=a(235),ce=a(104),ie=a.n(ce),le=a(240),ue=a(221),se=a(232),me=a(229),de=a(230),pe=a(231),Ee=a(101),ge=a.n(Ee),be=a(102),fe=a.n(be),Oe=a(103),he=a.n(Oe),Se=Object(b.a)({list:{width:250},fullList:{width:"auto"}});function ve(){var e=Se();return console.log(),r.a.createElement("div",{className:e.fullList,role:"presentation"},r.a.createElement(ue.a,null,[{name:"About",icon:r.a.createElement(ge.a,{color:"primary"})},{name:"Summary",icon:r.a.createElement(fe.a,{color:"primary"})},{name:"Settings",icon:r.a.createElement(he.a,{color:"primary"})}].map((function(e,t){return r.a.createElement(me.a,{button:!0,key:t},r.a.createElement(de.a,null,e.icon),r.a.createElement(pe.a,{primary:e.name}))}))),r.a.createElement(se.a,null))}var _e=a(239),je=Object(b.a)((function(e){var t;return{root:{display:"flex",flexGrow:1,marginBottom:"15px",alignContent:"center",justifyContent:"center"},appBar:(t={},Object(p.a)(t,e.breakpoints.up("sm"),{width:"100%",marginLeft:240}),Object(p.a)(t,e.breakpoints.up("xl"),{width:"1920px",marginLeft:240}),t),drawer:Object(p.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),menuButton:Object(p.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}));function Te(){var e,t=Object(ae.a)(),a=je(),o=Object(d.g)(),c=Object(n.useContext)(v),i=Object(d.h)(),u=Object(n.useState)(!1),s=Object(g.a)(u,2),m=s[0],p=s[1],E=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&p(e)}},b=c.user?r.a.createElement(h.a,{color:"inherit",onClick:function(e){e.preventDefault(),l.a.auth().signOut().then((function(e){o.push("/auth/login")})),console.log(c.user)}},"Logout"):"/auth/login"===i.pathname?r.a.createElement(h.a,{color:"inherit",onClick:function(){o.push("/auth/signup")}},"Sign Up"):r.a.createElement(h.a,{color:"inherit",onClick:function(){o.push("/auth/login")}},"Login");return e="/auth/login"===i.pathname||"/auth/signup"===i.pathname?r.a.createElement("div",{className:a.toolbar},r.a.createElement(ve,null)):null,console.log(e),r.a.createElement("div",{className:a.root},r.a.createElement(ne.a,{position:"static",className:a.appBar},r.a.createElement(re.a,null,r.a.createElement(oe.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",onClick:E(!0)},r.a.createElement(ie.a,null))," ",r.a.createElement(Q.a,{variant:"h6",className:a.title},"Feeding Times"),b)),r.a.createElement("nav",{className:a.drawer},r.a.createElement(_e.a,{smUp:!0,implementation:"css"},r.a.createElement(le.a,{variant:"temporary",anchor:"rtl"===t.direction?"right":"left",open:m,onClose:E(!1),ModalProps:{keepMounted:!0}},e," ")),r.a.createElement(_e.a,{xsDown:!0,implementation:"css"},r.a.createElement(le.a,{variant:"permanent",open:!0},e))))}var Ce=function(){return r.a.createElement(m.a,null,r.a.createElement(Te,null),r.a.createElement(d.d,null,r.a.createElement(D,{exact:!0,path:"/dashboard",component:te}),r.a.createElement(d.b,{path:"/auth",component:x}),r.a.createElement(d.a,{to:"/auth",from:"/"})))},ye=(a(177),a(236)),Pe=a(105),xe=Object(Pe.a)({palette:{primary:{main:"#f27781"},secondary:{main:"#f2cf1d"}},typography:{fontFamily:"'Quicksand', sans-serif",button:{textTransform:"none"}}});var we=function(){return r.a.createElement(ye.a,{theme:xe},r.a.createElement(Ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,Object.assign({firebase:l.a},s),r.a.createElement(j,null,r.a.createElement(we,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.03f12d08.chunk.js.map