(this["webpackJsonpredux-contact-book"]=this["webpackJsonpredux-contact-book"]||[]).push([[0],{276:function(e,t,a){},277:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a.n(r),s=a(20),o=a.n(s),i=(a(276),a(277),a(278),a(36)),l=a(30),j=a(70),d=a(77),b=a(23),u=a(43),m=a.n(u),h=a(433),p=a(125),x=a(171);a(432);x.a.initializeApp({apiKey:"AIzaSyDtjd3JL4whvdhSLITanE6ozuJ2bmusMc4",authDomain:"jpmanagerproject.firebaseapp.com",databaseURL:"https://jpmanagerproject-default-rtdb.firebaseio.com",projectId:"jpmanagerproject",storageBucket:"jpmanagerproject.appspot.com",messagingSenderId:"1094775570429",appId:"1:1094775570429:web:235401f26a074386b1e394"});var O=x.a,f=a(516),g=function(){Object(l.f)();var e=Object(r.useState)({Id:"",Name:"",Email:"",Phone:"",Category:""}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=a.Name,o=a.Email,i=a.Phone,u=a.Category,m=Object(r.useState)(f.a),x=Object(b.a)(m,2),g=(x[0],x[1],O.firestore().collection("usersCollection")),v=function(e){c(Object(d.a)(Object(d.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"pb-4",children:[Object(n.jsx)(p.a,{component:"h2",variant:"h5",color:"secondary",align:"center",gutterBottom:!0,children:"Add a User- Fresh-6"}),Object(n.jsxs)("form",{onSubmit:function(e){g.doc().set(a).catch((function(e){console.error(e)}))},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{required:!0,type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"Name",value:s,onChange:function(e){return v(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Email",name:"Email",value:o,onChange:function(e){return v(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter phone",name:"Phone",value:i,onChange:function(e){return v(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Category",name:"Category",value:u,onChange:function(e){return v(e)}})}),Object(n.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})})},v=a(26),y=a.n(v),w=a(47),N=a(7),C=a(491),S=a(519),k=a(492),E=a(493),I=a(497),P=a(496),B=a(494),z=a(230),Y=a.n(z),F=a(232),U=a.n(F),A=a(486),D=a(487),H=a(488),L=a(489),M=a(225),R=a.n(M),T=a(226),W=a.n(T),J=a(227),V=a.n(J),G=a(228),K=a.n(G),q=a(229),X=a.n(q),$=a(147),Q=a.n($),Z=Object(n.jsxs)("div",{children:[Object(n.jsx)(i.b,{to:"/",children:Object(n.jsxs)(A.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(R.a,{})}),Object(n.jsx)(H.a,{primary:"Home"})]})}),Object(n.jsxs)(A.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(W.a,{})}),Object(n.jsx)(H.a,{primary:"Orders"})]}),Object(n.jsx)(i.b,{to:"/form",children:Object(n.jsxs)(A.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(V.a,{})}),Object(n.jsx)(H.a,{primary:"Add Record"})]})}),Object(n.jsxs)(A.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(K.a,{})}),Object(n.jsx)(H.a,{primary:"Reports"})]}),Object(n.jsx)(i.b,{to:"/contact",children:Object(n.jsxs)(A.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(X.a,{})}),Object(n.jsx)(H.a,{primary:"Contact us"})]})})]}),_=Object(n.jsxs)("div",{children:[Object(n.jsx)(L.a,{inset:!0,children:"Saved reports"}),Object(n.jsxs)(A.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(Q.a,{})}),Object(n.jsx)(H.a,{primary:"Current month"})]}),Object(n.jsxs)(A.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(Q.a,{})}),Object(n.jsx)(H.a,{primary:"Last quarter"})]}),Object(n.jsxs)(A.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(Q.a,{})}),Object(n.jsx)(H.a,{primary:"Year-end sale"})]})]}),ee=a(490),te=Object(ee.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:200,width:"calc(100% - ".concat(200,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:200,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(j.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(2),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),ae=a(495);var ne=function(){var e=Object(r.useState)(),t=Object(b.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3003/users");case 2:t=e.sent,c(t.data.length);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:a})},re=a(231),ce=a.n(re);function se(){var e=te(),t=c.a.useState(!1),a=Object(b.a)(t,2),s=a[0],o=a[1],l=function(){o(!1)},j=Object(r.useState)(),d=Object(b.a)(j,2),u=d[0],h=d[1];Object(r.useEffect)((function(){x()}),[]);var x=function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3003/users");case 2:t=e.sent,h(t.data.length);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(C.a,{}),Object(n.jsx)(k.a,{position:"absolute",className:Object(N.a)(e.appBar,s&&e.appBarShift),children:Object(n.jsxs)(E.a,{className:e.toolbar,children:[Object(n.jsx)(B.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(N.a)(e.menuButton,s&&e.menuButtonHidden),children:Object(n.jsx)(Y.a,{})}),Object(n.jsx)(p.a,{component:"h1",variant:"h6",color:"white",noWrap:!0,className:e.title,children:Object(n.jsx)(i.b,{class:"text-white",to:"/",children:"Visa Factory Limited"})}),Object(n.jsx)(B.a,{color:"inherit",children:Object(n.jsx)(ae.a,{badgeContent:u,color:"secondary",children:Object(n.jsx)(ce.a,{})})})]})}),Object(n.jsxs)(S.a,{variant:"temporary",className:"docked",classes:{paper:Object(N.a)(e.drawerPaper,!s&&e.drawerPaperClose)},open:s,children:[Object(n.jsx)("div",{className:e.toolbarIcon,children:Object(n.jsx)(B.a,{onClick:l,children:Object(n.jsx)(U.a,{})})}),Object(n.jsx)(P.a,{}),Object(n.jsx)(I.a,{onClick:l,children:Z}),Object(n.jsx)(P.a,{}),Object(n.jsx)(I.a,{onClick:l,children:_})]})]})}var oe=a(8),ie=a(501),le=a(503),je=a(498),de=a(500),be=a(502),ue=a(499),me=a(517);function he(e){return Object(n.jsx)(p.a,{component:"h2",variant:"h6",color:"secondary",gutterBottom:!0,children:e.children})}var pe=a(233),xe=a.n(pe),Oe=a(234),fe=a.n(Oe),ge=a(235),ve=a.n(ge),ye=Object(oe.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},body:{fontSize:12}}}))(je.a),we=Object(oe.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(ue.a);var Ne=Object(ee.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},btnRightMargin:{marginRight:3,height:15,fontSize:10}}}));function Ce(e){ne();var t=Ne(),a=Object(r.useState)([]),s=Object(b.a)(a,2),o=s[0],l=s[1],j=Object(r.useState)(),d=Object(b.a)(j,2),u=d[0],p=d[1],x=O.firestore().collection("usersCollection");Object(r.useEffect)((function(){x.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),l(t),p(e.length),console.log(t),console.log(u)}))}),[]);var f=function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://my-json-server.typicode.com/rognz78/jpmanager/users");case 2:t=e.sent,l(t.data.reverse()),p(t.data.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("https://my-json-server.typicode.com/rognz78/jpmanager/users/".concat(t));case 2:f();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(h.a,{className:t.paper,children:Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)(he,{children:["Home Page New ",u]}),Object(n.jsx)(de.a,{component:h.a,children:Object(n.jsxs)(ie.a,{size:"small",className:t.Table,children:[Object(n.jsx)(be.a,{children:Object(n.jsxs)(ue.a,{children:[Object(n.jsx)(ye,{children:"#"}),Object(n.jsx)(ye,{children:"Name"}),Object(n.jsx)(ye,{children:"User Name"}),Object(n.jsx)(me.a,{smDown:!0,children:Object(n.jsx)(ye,{className:t.Paper,children:"Email"})}),Object(n.jsx)(ye,{children:"Action"})]})}),Object(n.jsx)(le.a,{children:o.map((function(e){return Object(n.jsxs)(we,{children:[Object(n.jsxs)(ye,{children:[e.Id," "]}),Object(n.jsx)(ye,{children:e.Name}),Object(n.jsx)(ye,{children:e.Email}),Object(n.jsx)(me.a,{smDown:!0,children:Object(n.jsx)(ye,{className:t.Paper,children:e.Phone})}),Object(n.jsxs)(ye,{children:[Object(n.jsx)(i.b,{to:"/users/",children:Object(n.jsx)(xe.a,{color:"action",fontSize:"small"})}),Object(n.jsx)(i.b,{to:"/users/edit/",children:Object(n.jsx)(fe.a,{fontSize:"small"})}),Object(n.jsx)(i.b,{onClick:function(){return g()},children:Object(n.jsx)(ve.a,{color:"secondary",fontSize:"small"})})]})]})}))})]})}),Object(n.jsx)("div",{className:t.seeMore,children:Object(n.jsx)(i.b,{color:"primary",href:"#",children:"See more orders"})})]})})}var Se=a(511),ke=Object(ee.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"100%"}}}})),Ee=function(){var e=Object(r.useState)({name:"",username:"",email:"",phone:"",website:"",gender:""}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(l.g)().id;Object(r.useEffect)((function(){o()}),[]);var o=function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3003/users/".concat(s));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=ke();return Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"pb-4",children:[Object(n.jsxs)(p.a,{component:"h2",variant:"h5",color:"secondary",align:"center",gutterBottom:!0,children:["User - ",a.name]}),Object(n.jsxs)("form",{className:i.root,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(Se.a,{disabled:!0,id:"outlined",label:"Name",variant:"outlined",value:a.name}),Object(n.jsx)(Se.a,{disabled:!0,id:"outlined",label:"Username",variant:"outlined",value:a.username}),Object(n.jsx)(Se.a,{disabled:!0,id:"outlined",label:"User Email",variant:"outlined",value:a.email}),Object(n.jsx)(Se.a,{disabled:!0,id:"outlined-",label:"User Phone",variant:"outlined",value:a.phone}),Object(n.jsx)(Se.a,{disabled:!0,id:"outlined-",label:"User Website",variant:"outlined",value:a.website}),Object(n.jsx)(Se.a,{disabled:!0,id:"outlined-",label:"User Gender",variant:"outlined",value:a.gender})]})]})})})},Ie=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("h1",{children:"Contact Page"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(n.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(n.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(n.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1"})]}),Object(n.jsxs)("div",{class:"form-group form-check",children:[Object(n.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(n.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(n.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})})})},Pe=a(504),Be=a(236),ze=a.n(Be),Ye=function(){var e=Object(l.f)(),t=Object(l.g)().id,a=Object(r.useState)({name:"",username:"",email:"",phone:"",website:""}),c=Object(b.a)(a,2),s=c[0],o=c[1],i=s.name,u=s.username,h=s.email,p=s.phone,x=s.website,O=function(e){o(Object(d.a)(Object(d.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};Object(r.useEffect)((function(){g()}),[]);var f=function(){var a=Object(w.a)(y.a.mark((function a(n){return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,m.a.put("https://my-json-server.typicode.com/rognz78/jpmanager/users/".concat(t),s);case 3:e.push("https://my-json-server.typicode.com/rognz78/jpmanager/users/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),g=function(){var e=Object(w.a)(y.a.mark((function e(){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://my-json-server.typicode.com/rognz78/jpmanager/users/".concat(t));case 2:a=e.sent,o(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(n.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:i,onChange:function(e){return O(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:u,onChange:function(e){return O(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:h,onChange:function(e){return O(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:p,onChange:function(e){return O(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:x,onChange:function(e){return O(e)}})}),Object(n.jsx)(Pe.a,{type:"submit",variant:"contained",color:"primary",startIcon:Object(n.jsx)(ze.a,{}),children:"Update Record"})]})]})})},Fe=a(510),Ue=a(509),Ae=a(35),De=a(518),He=a(512),Le=a(247),Me=a(248),Re=a(54),Te=a(251);function We(e,t){return{time:e,amount:t}}var Je=[We("00:00",0),We("03:00",300),We("06:00",600),We("09:00",800),We("12:00",1500),We("15:00",2e3),We("18:00",2400),We("21:00",2400),We("24:00",void 0)];function Ve(){var e=Object(Ae.a)(),t=te(),a=Object(N.a)(t.paper,t.fixedHeight);return Object(n.jsx)(h.a,{className:a,children:Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(he,{children:"Today"}),Object(n.jsx)(De.a,{children:Object(n.jsxs)(He.a,{data:Je,margin:{top:16,right:16,bottom:0,left:24},children:[Object(n.jsx)(Le.a,{dataKey:"time",stroke:e.palette.text.secondary}),Object(n.jsx)(Me.a,{stroke:e.palette.text.secondary,children:Object(n.jsx)(Re.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"Sales ($)"})}),Object(n.jsx)(Te.a,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})})}var Ge=a(508),Ke=a(249),qe=a.n(Ke);function Xe(e){e.preventDefault()}function $e(){var e=te(),t=Object(N.a)(e.paper,e.fixedHeight),a=ne();return Object(n.jsx)(h.a,{className:t,children:Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(he,{children:"Total Records"}),Object(n.jsx)(p.a,{component:"p",variant:"h6",children:a}),Object(n.jsx)(p.a,{component:"p",variant:"h6"}),Object(n.jsxs)(p.a,{color:"textSecondary",className:e.depositContext,children:["As on ",qe()().format("MMMM Do YYYY")]}),Object(n.jsx)("div",{children:Object(n.jsx)(Ge.a,{color:"primary",href:"#",onClick:Xe,children:"View balance"})})]})})}var Qe=a(513);function Ze(){return Object(n.jsxs)(p.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(i.b,{color:"inherit",href:"https://material-ui.com/",children:"Visa Factory Limited"})," ",(new Date).getFullYear(),"."]})}var _e=function(){var e=te();return Object(n.jsx)(i.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(se,{}),Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.appBarSpacer}),Object(n.jsxs)(Ue.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsxs)(Fe.a,{container:!0,spacing:1,children:[Object(n.jsx)(l.c,{children:Object(n.jsx)(Fe.a,{item:!0,xs:12,md:8,lg:9,children:Object(n.jsx)(l.a,{exact:!0,path:"/",component:Ve})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Fe.a,{item:!0,xs:12,md:4,lg:3,children:Object(n.jsx)(l.a,{exact:!0,path:"/",component:$e})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Fe.a,{item:!0,xs:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/",component:Ce})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Fe.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/form",component:g})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Fe.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/contact",component:Ie})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Fe.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/users/edit/:id",component:Ye})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Fe.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/users/:id",component:Ee})})})]}),Object(n.jsx)(Qe.a,{pt:4,children:Object(n.jsx)(Ze,{})})]})]})]})})},et=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,522)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(_e,{})}),document.getElementById("root")),et()}},[[430,1,2]]]);
//# sourceMappingURL=main.b5fdd859.chunk.js.map