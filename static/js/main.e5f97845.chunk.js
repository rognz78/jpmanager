(this["webpackJsonpredux-contact-book"]=this["webpackJsonpredux-contact-book"]||[]).push([[0],{275:function(e,t,a){},276:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a.n(r),s=a(20),i=a.n(s),o=(a(275),a(276),a(277),a(36)),l=a(30),j=a(70),d=a(77),b=a(23),u=a(43),m=a.n(u),h=a(432),p=a(125),x=a(171);a(431);x.a.initializeApp({apiKey:"AIzaSyDtjd3JL4whvdhSLITanE6ozuJ2bmusMc4",authDomain:"jpmanagerproject.firebaseapp.com",databaseURL:"https://jpmanagerproject-default-rtdb.firebaseio.com",projectId:"jpmanagerproject",storageBucket:"jpmanagerproject.appspot.com",messagingSenderId:"1094775570429",appId:"1:1094775570429:web:235401f26a074386b1e394"});var O=x.a,f=function(){Object(l.f)();var e=Object(r.useState)({Name:"",Email:"",Phone:"",Category:""}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=a.Name,i=a.Email,o=a.Phone,u=a.Category,m=O.firestore().collection("usersCollection"),x=function(e){c(Object(d.a)(Object(d.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"pb-4",children:[Object(n.jsx)(p.a,{component:"h2",variant:"h5",color:"secondary",align:"center",gutterBottom:!0,children:"Add a User- Fresh-6"}),Object(n.jsxs)("form",{onSubmit:function(e){m.doc(a.id).set(a).catch((function(e){console.error(e)}))},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{required:!0,type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"Name",value:s,onChange:function(e){return x(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Email",name:"Email",value:i,onChange:function(e){return x(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter phone",name:"Phone",value:o,onChange:function(e){return x(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Category",name:"Category",value:u,onChange:function(e){return x(e)}})}),Object(n.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})})},g=a(26),v=a.n(g),y=a(47),N=a(7),w=a(490),C=a(517),S=a(491),k=a(492),E=a(496),P=a(495),I=a(493),B=a(230),z=a.n(B),Y=a(232),F=a.n(Y),U=a(485),A=a(486),D=a(487),H=a(488),L=a(225),M=a.n(L),R=a(226),T=a.n(R),W=a(227),J=a.n(W),V=a(228),G=a.n(V),K=a(229),q=a.n(K),X=a(147),$=a.n(X),Q=Object(n.jsxs)("div",{children:[Object(n.jsx)(o.b,{to:"/",children:Object(n.jsxs)(U.a,{button:!0,children:[Object(n.jsx)(A.a,{children:Object(n.jsx)(M.a,{})}),Object(n.jsx)(D.a,{primary:"Home"})]})}),Object(n.jsxs)(U.a,{button:!0,children:[Object(n.jsx)(A.a,{children:Object(n.jsx)(T.a,{})}),Object(n.jsx)(D.a,{primary:"Orders"})]}),Object(n.jsx)(o.b,{to:"/form",children:Object(n.jsxs)(U.a,{button:!0,children:[Object(n.jsx)(A.a,{children:Object(n.jsx)(J.a,{})}),Object(n.jsx)(D.a,{primary:"Add Record"})]})}),Object(n.jsxs)(U.a,{button:!0,children:[Object(n.jsx)(A.a,{children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(D.a,{primary:"Reports"})]}),Object(n.jsx)(o.b,{to:"/contact",children:Object(n.jsxs)(U.a,{button:!0,children:[Object(n.jsx)(A.a,{children:Object(n.jsx)(q.a,{})}),Object(n.jsx)(D.a,{primary:"Contact us"})]})})]}),Z=Object(n.jsxs)("div",{children:[Object(n.jsx)(H.a,{inset:!0,children:"Saved reports"}),Object(n.jsxs)(U.a,{button:!0,children:[Object(n.jsx)(A.a,{children:Object(n.jsx)($.a,{})}),Object(n.jsx)(D.a,{primary:"Current month"})]}),Object(n.jsxs)(U.a,{button:!0,children:[Object(n.jsx)(A.a,{children:Object(n.jsx)($.a,{})}),Object(n.jsx)(D.a,{primary:"Last quarter"})]}),Object(n.jsxs)(U.a,{button:!0,children:[Object(n.jsx)(A.a,{children:Object(n.jsx)($.a,{})}),Object(n.jsx)(D.a,{primary:"Year-end sale"})]})]}),_=a(489),ee=Object(_.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:200,width:"calc(100% - ".concat(200,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:200,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(j.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(2),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),te=a(494);var ae=function(){var e=Object(r.useState)(),t=Object(b.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3003/users");case 2:t=e.sent,c(t.data.length);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:a})},ne=a(231),re=a.n(ne);function ce(){var e=ee(),t=c.a.useState(!1),a=Object(b.a)(t,2),s=a[0],i=a[1],l=function(){i(!1)},j=Object(r.useState)(),d=Object(b.a)(j,2),u=d[0],h=d[1];Object(r.useEffect)((function(){x()}),[]);var x=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3003/users");case 2:t=e.sent,h(t.data.length);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(w.a,{}),Object(n.jsx)(S.a,{position:"absolute",className:Object(N.a)(e.appBar,s&&e.appBarShift),children:Object(n.jsxs)(k.a,{className:e.toolbar,children:[Object(n.jsx)(I.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(N.a)(e.menuButton,s&&e.menuButtonHidden),children:Object(n.jsx)(z.a,{})}),Object(n.jsx)(p.a,{component:"h1",variant:"h6",color:"white",noWrap:!0,className:e.title,children:Object(n.jsx)(o.b,{class:"text-white",to:"/",children:"Visa Factory Limited"})}),Object(n.jsx)(I.a,{color:"inherit",children:Object(n.jsx)(te.a,{badgeContent:u,color:"secondary",children:Object(n.jsx)(re.a,{})})})]})}),Object(n.jsxs)(C.a,{variant:"temporary",className:"docked",classes:{paper:Object(N.a)(e.drawerPaper,!s&&e.drawerPaperClose)},open:s,children:[Object(n.jsx)("div",{className:e.toolbarIcon,children:Object(n.jsx)(I.a,{onClick:l,children:Object(n.jsx)(F.a,{})})}),Object(n.jsx)(P.a,{}),Object(n.jsx)(E.a,{onClick:l,children:Q}),Object(n.jsx)(P.a,{}),Object(n.jsx)(E.a,{onClick:l,children:Z})]})]})}var se=a(8),ie=a(500),oe=a(502),le=a(497),je=a(499),de=a(501),be=a(498),ue=a(515);function me(e){return Object(n.jsx)(p.a,{component:"h2",variant:"h6",color:"secondary",gutterBottom:!0,children:e.children})}var he=a(233),pe=a.n(he),xe=a(234),Oe=a.n(xe),fe=a(235),ge=a.n(fe),ve=Object(se.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},body:{fontSize:12}}}))(le.a),ye=Object(se.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(be.a);var Ne=Object(_.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},btnRightMargin:{marginRight:3,height:15,fontSize:10}}}));function we(e){ae();var t=Ne(),a=Object(r.useState)([]),s=Object(b.a)(a,2),i=s[0],l=s[1],j=Object(r.useState)(),d=Object(b.a)(j,2),u=d[0],p=d[1],x=O.firestore().collection("usersCollection");Object(r.useEffect)((function(){x.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),""!==t.Name&&l(t)}))}),[]);var f=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://my-json-server.typicode.com/rognz78/jpmanager/users");case 2:t=e.sent,l(t.data.reverse()),p(t.data.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("https://my-json-server.typicode.com/rognz78/jpmanager/users/".concat(t));case 2:f();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(h.a,{className:t.paper,children:Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)(me,{children:["Home Page New - ",u]}),Object(n.jsx)(je.a,{component:h.a,children:Object(n.jsxs)(ie.a,{size:"small",className:t.Table,children:[Object(n.jsx)(de.a,{children:Object(n.jsxs)(be.a,{children:[Object(n.jsx)(ve,{children:"#"}),Object(n.jsx)(ve,{children:"Name"}),Object(n.jsx)(ve,{children:"User Name"}),Object(n.jsx)(ue.a,{smDown:!0,children:Object(n.jsx)(ve,{className:t.Paper,children:"Email"})}),Object(n.jsx)(ve,{children:"Action"})]})}),Object(n.jsx)(oe.a,{children:i.map((function(e){return Object(n.jsxs)(ye,{children:[Object(n.jsxs)(ve,{children:[e.ID," "]}),Object(n.jsx)(ve,{children:e.Name}),Object(n.jsx)(ve,{children:e.Email}),Object(n.jsx)(ue.a,{smDown:!0,children:Object(n.jsx)(ve,{className:t.Paper,children:e.Phone})}),Object(n.jsxs)(ve,{children:[Object(n.jsx)(o.b,{to:"/users/",children:Object(n.jsx)(pe.a,{color:"action",fontSize:"small"})}),Object(n.jsx)(o.b,{to:"/users/edit/",children:Object(n.jsx)(Oe.a,{fontSize:"small"})}),Object(n.jsx)(o.b,{onClick:function(){return g()},children:Object(n.jsx)(ge.a,{color:"secondary",fontSize:"small"})})]})]})}))})]})}),Object(n.jsx)("div",{className:t.seeMore,children:Object(n.jsx)(o.b,{color:"primary",href:"#",children:"See more orders"})})]})})}var Ce=a(510),Se=Object(_.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"100%"}}}})),ke=function(){var e=Object(r.useState)({name:"",username:"",email:"",phone:"",website:"",gender:""}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(l.g)().id;Object(r.useEffect)((function(){i()}),[]);var i=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3003/users/".concat(s));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=Se();return Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"pb-4",children:[Object(n.jsxs)(p.a,{component:"h2",variant:"h5",color:"secondary",align:"center",gutterBottom:!0,children:["User - ",a.name]}),Object(n.jsxs)("form",{className:o.root,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(Ce.a,{disabled:!0,id:"outlined",label:"Name",variant:"outlined",value:a.name}),Object(n.jsx)(Ce.a,{disabled:!0,id:"outlined",label:"Username",variant:"outlined",value:a.username}),Object(n.jsx)(Ce.a,{disabled:!0,id:"outlined",label:"User Email",variant:"outlined",value:a.email}),Object(n.jsx)(Ce.a,{disabled:!0,id:"outlined-",label:"User Phone",variant:"outlined",value:a.phone}),Object(n.jsx)(Ce.a,{disabled:!0,id:"outlined-",label:"User Website",variant:"outlined",value:a.website}),Object(n.jsx)(Ce.a,{disabled:!0,id:"outlined-",label:"User Gender",variant:"outlined",value:a.gender})]})]})})})},Ee=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("h1",{children:"Contact Page"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(n.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(n.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(n.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1"})]}),Object(n.jsxs)("div",{class:"form-group form-check",children:[Object(n.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(n.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(n.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})})})},Pe=a(503),Ie=a(236),Be=a.n(Ie),ze=function(){var e=Object(l.f)(),t=Object(l.g)().id,a=Object(r.useState)({name:"",username:"",email:"",phone:"",website:""}),c=Object(b.a)(a,2),s=c[0],i=c[1],o=s.name,u=s.username,h=s.email,p=s.phone,x=s.website,O=function(e){i(Object(d.a)(Object(d.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};Object(r.useEffect)((function(){g()}),[]);var f=function(){var a=Object(y.a)(v.a.mark((function a(n){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,m.a.put("https://my-json-server.typicode.com/rognz78/jpmanager/users/".concat(t),s);case 3:e.push("https://my-json-server.typicode.com/rognz78/jpmanager/users/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),g=function(){var e=Object(y.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://my-json-server.typicode.com/rognz78/jpmanager/users/".concat(t));case 2:a=e.sent,i(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(n.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:o,onChange:function(e){return O(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:u,onChange:function(e){return O(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:h,onChange:function(e){return O(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:p,onChange:function(e){return O(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:x,onChange:function(e){return O(e)}})}),Object(n.jsx)(Pe.a,{type:"submit",variant:"contained",color:"primary",startIcon:Object(n.jsx)(Be.a,{}),children:"Update Record"})]})]})})},Ye=a(509),Fe=a(508),Ue=a(35),Ae=a(516),De=a(511),He=a(247),Le=a(248),Me=a(54),Re=a(251);function Te(e,t){return{time:e,amount:t}}var We=[Te("00:00",0),Te("03:00",300),Te("06:00",600),Te("09:00",800),Te("12:00",1500),Te("15:00",2e3),Te("18:00",2400),Te("21:00",2400),Te("24:00",void 0)];function Je(){var e=Object(Ue.a)(),t=ee(),a=Object(N.a)(t.paper,t.fixedHeight);return Object(n.jsx)(h.a,{className:a,children:Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(me,{children:"Today"}),Object(n.jsx)(Ae.a,{children:Object(n.jsxs)(De.a,{data:We,margin:{top:16,right:16,bottom:0,left:24},children:[Object(n.jsx)(He.a,{dataKey:"time",stroke:e.palette.text.secondary}),Object(n.jsx)(Le.a,{stroke:e.palette.text.secondary,children:Object(n.jsx)(Me.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"Sales ($)"})}),Object(n.jsx)(Re.a,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})})}var Ve=a(507),Ge=a(249),Ke=a.n(Ge);function qe(e){e.preventDefault()}function Xe(){var e=ee(),t=Object(N.a)(e.paper,e.fixedHeight),a=ae();return Object(n.jsx)(h.a,{className:t,children:Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(me,{children:"Total Records"}),Object(n.jsx)(p.a,{component:"p",variant:"h6",children:a}),Object(n.jsx)(p.a,{component:"p",variant:"h6"}),Object(n.jsxs)(p.a,{color:"textSecondary",className:e.depositContext,children:["As on ",Ke()().format("MMMM Do YYYY")]}),Object(n.jsx)("div",{children:Object(n.jsx)(Ve.a,{color:"primary",href:"#",onClick:qe,children:"View balance"})})]})})}var $e=a(512);function Qe(){return Object(n.jsxs)(p.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(o.b,{color:"inherit",href:"https://material-ui.com/",children:"Visa Factory Limited"})," ",(new Date).getFullYear(),"."]})}var Ze=function(){var e=ee();return Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(ce,{}),Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.appBarSpacer}),Object(n.jsxs)(Fe.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsxs)(Ye.a,{container:!0,spacing:1,children:[Object(n.jsx)(l.c,{children:Object(n.jsx)(Ye.a,{item:!0,xs:12,md:8,lg:9,children:Object(n.jsx)(l.a,{exact:!0,path:"/",component:Je})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Ye.a,{item:!0,xs:12,md:4,lg:3,children:Object(n.jsx)(l.a,{exact:!0,path:"/",component:Xe})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Ye.a,{item:!0,xs:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/",component:we})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Ye.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/form",component:f})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Ye.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/contact",component:Ee})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Ye.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/users/edit/:id",component:ze})})}),Object(n.jsx)(l.c,{children:Object(n.jsx)(Ye.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(l.a,{exact:!0,path:"/users/:id",component:ke})})})]}),Object(n.jsx)($e.a,{pt:4,children:Object(n.jsx)(Qe,{})})]})]})]})})},_e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,520)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Ze,{})}),document.getElementById("root")),_e()}},[[429,1,2]]]);
//# sourceMappingURL=main.e5f97845.chunk.js.map