(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){},140:function(e,a,t){e.exports=t(171)},171:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(87),i=t.n(l),c=(t(104),t(223)),o=t(45),s=t(6),m=t(7),u=t(66),d=t(13),p=t(58),E=t(230),g=t(211),b=t(238),h=t(228),f=t(227),x=t(220),v=t(236),y=t(239),w=t(221),j=t(222),k=t(240),O=t(5),C=t(131),S=t.n(C),I=t(132),W=t.n(I),F=t(126),D=t.n(F),P=t(128),R=t.n(P),T=t(127),U=t.n(T),z=t(129),L=t.n(z),q=t(130),A=t.n(q),B=t(125),G=t.n(B),J=t(224),M=t(226),V=t(219),N=t(229),X=t(231),_=t(114),H=t(120),K=t.n(H),Q=t(121),Y=t.n(Q),Z=t(122),$=t.n(Z),ee=t(117),ae=t.n(ee);function te(e){var a=e.item,t=a.name,n=a.username,l=a.email,i=a.phone,c=a.website;return r.a.createElement(J.a,{sx:{maxWidth:320}},r.a.createElement(M.a,{avatar:r.a.createElement(V.a,{sx:{bgcolor:_.a[500]},"aria-label":"recipe"},t[0]),title:t,subheader:n,action:[r.a.createElement(h.a,{"aria-label":"settings",key:"options"},r.a.createElement(ae.a,null))]}),r.a.createElement(N.a,null,r.a.createElement(E.a,{sx:{display:"flex",alignItems:"center"}},r.a.createElement(K.a,{color:"primary"}),r.a.createElement(f.a,{variant:"body2",color:"text.secondary"},l)),r.a.createElement(E.a,{sx:{display:"flex",alignItems:"center"}},r.a.createElement(Y.a,{color:"primary"}),r.a.createElement(f.a,{variant:"body2",color:"text.secondary"},i)),r.a.createElement(E.a,{sx:{display:"flex",alignItems:"center"}},r.a.createElement($.a,{color:"primary"}),r.a.createElement(f.a,{variant:"body2",color:"text.secondary"},r.a.createElement(X.a,{href:"https:".concat(c),color:"inherit",underline:"none",target:"_blank",rel:"noreferrer"},c)))))}var ne=t(232),re=t(233),le=t(234),ie=t(235),ce=function(e){var a=e.items,t=void 0===a?[]:a,n=e.secondaryItems,l=void 0===n?[]:n;return r.a.createElement(ne.a,{component:"nav",sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}},r.a.createElement("div",null,t.map(function(e,a){return r.a.createElement(re.a,{key:"li-".concat(a)},r.a.createElement(le.a,null,e.icon),r.a.createElement(ie.a,{primary:e.label}))}),r.a.createElement(v.a,{sx:{my:1}})),l.length>0?r.a.createElement("div",null,l.map(function(e,a){return r.a.createElement(o.b,{key:"si-".concat(a),to:e.path,className:"link-undecorated"},r.a.createElement(re.a,null,r.a.createElement(le.a,null,e.icon),r.a.createElement(ie.a,{primary:e.label})))})):null)},oe=t(119),se=t.n(oe),me=t(123),ue=t(64),de=t(124),pe=t.n(de).a.create({baseURL:"https://jsonplaceholder.typicode.com",timeout:2e3}),Ee=Object(ue.b)({name:"users",initialState:{userslist:[]},reducers:{getUsers:function(e,a){e.userslist=a.payload}}}),ge=function(){return function(){var e=Object(me.a)(se.a.mark(function e(a){var t,n;return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe.get("/users");case 3:t=e.sent,n=t.data,a(be(n)),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}()},be=Ee.actions.getUsers,he=function(e){return e.users.userslist},fe=Ee.reducer,xe=[{icon:r.a.createElement(G.a,null),label:"Users"},{icon:r.a.createElement(D.a,null),label:"Posts"},{icon:r.a.createElement(U.a,null),label:"Pictures"},{icon:r.a.createElement(R.a,null),label:"Todos"}],ve=[{icon:r.a.createElement(L.a,null),label:"Settings",path:"/login"},{icon:r.a.createElement(A.a,null),label:"Exit",path:"/login"}];var ye=Object(O.a)(j.a,{shouldForwardProp:function(e){return"open"!==e}})(function(e){var a=e.theme,t=e.open;return{"& .MuiDrawer-paper":Object(u.a)({position:"relative",whiteSpace:"nowrap",width:240,transition:a.transitions.create("width",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.enteringScreen}),boxSizing:"border-box"},!t&&Object(m.a)({overflowX:"hidden",transition:a.transitions.create("width",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),width:a.spacing(7)},a.breakpoints.up("sm"),{width:a.spacing(9)}))}}),we=Object(O.a)(k.a,{shouldForwardProp:function(e){return"open"!==e}})(function(e){var a=e.theme,t=e.open;return Object(u.a)({zIndex:a.zIndex.drawer+1,transition:a.transitions.create(["width","margin"],{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen})},t&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:a.transitions.create(["width","margin"],{easing:a.transitions.easing.sharp,duration:a.transitions.duration.enteringScreen})})}),je=function(e){var a=e.name,t=Object(p.c)(he),l=Object(p.b)(),i=Object(n.useState)(!1),c=Object(d.a)(i,2),o=c[0],s=c[1],m=function(){s(!o)};return Object(n.useEffect)(function(){l(ge())},[]),r.a.createElement(E.a,{sx:{display:"flex"}},r.a.createElement(g.a,null),r.a.createElement(we,{position:"absolute",open:o},r.a.createElement(b.a,{sx:{pr:"24px"}},r.a.createElement(h.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:m,sx:Object(u.a)({marginRight:"36px"},o&&{display:"none"})},r.a.createElement(S.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1}},"Welcome ",a))),r.a.createElement(ye,{variant:"permanent",open:o},r.a.createElement(b.a,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-start",px:[1]}},r.a.createElement(x.a,{variant:"text",onClick:m,sx:{width:"100%",height:"100%",margin:0}},r.a.createElement(W.a,null),r.a.createElement(f.a,{variant:"body1",color:"initial"},"Close Drawer"))),r.a.createElement(v.a,null),r.a.createElement(ce,{items:xe,secondaryItems:ve})),r.a.createElement(E.a,{component:"main",sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900]},flexGrow:1,height:"100vh",overflow:"auto"}},r.a.createElement(b.a,null),r.a.createElement(y.a,{maxWidth:"lg",sx:{mt:4,mb:4}},r.a.createElement(w.a,{container:!0,sx:{display:"flex",flexWrap:"wrap",gap:3,flexDirection:"row",justifyContent:"center"}},t.map(function(e,a){return r.a.createElement(te,{key:"card-".concat(a),item:e})})))))},ke=t(214),Oe=t(241),Ce=t(217),Se=t(133),Ie=t.n(Se),We=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],l=(a[1],Object(s.g)());return r.a.createElement(y.a,{maxWidth:!1,sx:{display:"flex",alignItems:"center",height:"100vh",width:"100vw",backgroundImage:"url(".concat("https://source.unsplash.com/random",")"),backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}},r.a.createElement(y.a,{component:"main",maxWidth:"xs",sx:{display:"flex",alignItems:"center",backgroundColor:"rgba(255,255,255,0.95)",borderRadius:2,padding:3}},r.a.createElement(g.a,null),r.a.createElement(E.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(V.a,{sx:{m:1,bgcolor:"secondary.main"}},r.a.createElement(Ie.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(E.a,{component:"form",onSubmit:function(e){e.preventDefault();var a=new FormData(e.currentTarget);console.log({email:a.get("email"),password:a.get("password"),remember:a.get("remember")}),l("/dashboard")},noValidate:!0,sx:{mt:1}},r.a.createElement(ke.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(ke.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(Oe.a,{name:"remember",defaultValue:!1,control:r.a.createElement(Ce.a,{value:!0,color:"primary"}),label:"Remember me"}),r.a.createElement(x.a,{disabled:t,type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign in"),r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(X.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(w.a,{item:!0},r.a.createElement(X.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up")))))))};function Fe(){var e=Object(s.g)();return r.a.createElement(y.a,{sx:{with:"100vw",height:"100vh",display:"flex",flexWrap:"wrap",justifyContent:"center",alignContent:"center",gap:5}},r.a.createElement(f.a,{variant:"h1",color:"initial",align:"center"},"This resource is not found."),r.a.createElement(x.a,{variant:"contained",onClick:function(){e("/")}},"Return to principal page"))}var De=t(170),Pe=Object(De.a)({palette:{primary:{main:"#A020F0"}}}),Re=function(){return r.a.createElement(c.a,{theme:Pe},r.a.createElement(o.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/login",element:r.a.createElement(We,null)}),r.a.createElement(s.b,{exact:!0,path:"/dashboard",element:r.a.createElement(je,null)}),r.a.createElement(s.b,{exact:!0,path:"/",element:r.a.createElement(s.a,{to:"/login",replace:!0})}),r.a.createElement(s.b,{path:"*",element:r.a.createElement(Fe,null)}))))},Te=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,213)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),l(e),i(e)})},Ue=Object(ue.a)({reducer:{users:fe}});i.a.createRoot(document.getElementById("root")).render(r.a.createElement(p.a,{store:Ue},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re,null)))),Te()}},[[140,3,2]]]);
//# sourceMappingURL=main.78f01a70.chunk.js.map