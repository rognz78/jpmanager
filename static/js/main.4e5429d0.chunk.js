(this["webpackJsonpredux-contact-book"]=this["webpackJsonpredux-contact-book"]||[]).push([[0],{281:function(e,t,n){},282:function(e,t,n){},435:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n.n(r),s=n(20),i=n.n(s),o=(n(281),n(282),n(283),n(36)),l=n(30),j=n(23),d=n.n(j),b=n(41),u=n(72),m=n(79),h=n(24),p=n(42),x=n.n(p),O=n(438),f=n(129),g=n(527),v=n(495),y=n(521),w=n(491),N=function(){var e=Object(l.f)(),t=Object(r.useState)({name:"",username:"",email:"",phone:"",website:"",gender:""}),n=Object(h.a)(t,2),c=n[0],s=n[1],i=c.name,o=c.username,j=c.email,p=c.phone,N=c.website,C=c.gender,S=function(e){s(Object(m.a)(Object(m.a)({},c),{},Object(u.a)({},e.target.name,e.target.value)))},k=function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,x.a.post("http://localhost:3003/users",c);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(O.a,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"pb-4",children:[Object(a.jsx)(f.a,{component:"h2",variant:"h5",color:"secondary",align:"center",gutterBottom:!0,children:"Add a User"}),Object(a.jsxs)("form",{onSubmit:function(e){return k(e)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{required:!0,type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:i,onChange:function(e){return S(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:o,onChange:function(e){return S(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:j,onChange:function(e){return S(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:p,onChange:function(e){return S(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:N,onChange:function(e){return S(e)}})}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)(w.a,{style:{marginRight:30},children:[Object(a.jsx)(g.a,{id:"gender",children:"Gender"}),Object(a.jsxs)(y.a,{style:{minWidth:300},labelId:"gender",name:"gender",id:"gender",value:C,onChange:function(e){return S(e)},children:[Object(a.jsx)(v.a,{value:"Male",children:"Male"}),Object(a.jsx)(v.a,{value:"Female",children:"Female"}),Object(a.jsx)(v.a,{value:"Other",children:"Other"})]})]}),Object(a.jsxs)(w.a,{children:[Object(a.jsx)(g.a,{id:"gender",children:"Gender"}),Object(a.jsxs)(y.a,{style:{minWidth:300},labelId:"gender",name:"gender",id:"gender",value:C,onChange:function(e){return S(e)},children:[Object(a.jsx)(v.a,{value:"Male",children:"Male"}),Object(a.jsx)(v.a,{value:"Female",children:"Female"}),Object(a.jsx)(v.a,{value:"Other",children:"Other"})]})]})]}),Object(a.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})})},C=n(7),S=n(500),k=n(526),E=n(501),I=n(502),B=n(494),P=n(505),z=n(503),F=n(234),Y=n.n(F),M=n(236),U=n.n(M),A=n(440),D=n(496),H=n(497),R=n(498),L=n(229),T=n.n(L),W=n(230),G=n.n(W),J=n(231),V=n.n(J),K=n(232),q=n.n(K),X=n(233),$=n.n(X),Q=n(151),Z=n.n(Q),_=Object(a.jsxs)("div",{children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsxs)(A.a,{button:!0,children:[Object(a.jsx)(D.a,{children:Object(a.jsx)(T.a,{})}),Object(a.jsx)(H.a,{primary:"Home"})]})}),Object(a.jsxs)(A.a,{button:!0,children:[Object(a.jsx)(D.a,{children:Object(a.jsx)(G.a,{})}),Object(a.jsx)(H.a,{primary:"Orders"})]}),Object(a.jsx)(o.b,{to:"/form",children:Object(a.jsxs)(A.a,{button:!0,children:[Object(a.jsx)(D.a,{children:Object(a.jsx)(V.a,{})}),Object(a.jsx)(H.a,{primary:"Add Record"})]})}),Object(a.jsxs)(A.a,{button:!0,children:[Object(a.jsx)(D.a,{children:Object(a.jsx)(q.a,{})}),Object(a.jsx)(H.a,{primary:"Reports"})]}),Object(a.jsx)(o.b,{to:"/contact",children:Object(a.jsxs)(A.a,{button:!0,children:[Object(a.jsx)(D.a,{children:Object(a.jsx)($.a,{})}),Object(a.jsx)(H.a,{primary:"Contact us"})]})})]}),ee=Object(a.jsxs)("div",{children:[Object(a.jsx)(R.a,{inset:!0,children:"Saved reports"}),Object(a.jsxs)(A.a,{button:!0,children:[Object(a.jsx)(D.a,{children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)(H.a,{primary:"Current month"})]}),Object(a.jsxs)(A.a,{button:!0,children:[Object(a.jsx)(D.a,{children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)(H.a,{primary:"Last quarter"})]}),Object(a.jsxs)(A.a,{button:!0,children:[Object(a.jsx)(D.a,{children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)(H.a,{primary:"Year-end sale"})]})]}),te=n(499),ne=Object(te.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:200,width:"calc(100% - ".concat(200,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:200,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(u.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(2),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),ae=n(504);var re=function(){var e=Object(r.useState)(),t=Object(h.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3003/users");case 2:t=e.sent,c(t.data.length);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:n})},ce=n(235),se=n.n(ce);function ie(){var e=ne(),t=c.a.useState(!1),n=Object(h.a)(t,2),s=n[0],i=n[1],l=function(){i(!1)},j=Object(r.useState)(),u=Object(h.a)(j,2),m=u[0],p=u[1];Object(r.useEffect)((function(){O()}),[]);var O=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3003/users");case 2:t=e.sent,p(t.data.length);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(S.a,{}),Object(a.jsx)(E.a,{position:"absolute",className:Object(C.a)(e.appBar,s&&e.appBarShift),children:Object(a.jsxs)(I.a,{className:e.toolbar,children:[Object(a.jsx)(z.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(C.a)(e.menuButton,s&&e.menuButtonHidden),children:Object(a.jsx)(Y.a,{})}),Object(a.jsx)(f.a,{component:"h1",variant:"h6",color:"white",noWrap:!0,className:e.title,children:Object(a.jsx)(o.b,{class:"text-white",to:"/",children:"Visa Factory Limited"})}),Object(a.jsx)(z.a,{color:"inherit",children:Object(a.jsx)(ae.a,{badgeContent:m,color:"secondary",children:Object(a.jsx)(se.a,{})})})]})}),Object(a.jsxs)(k.a,{variant:"temporary",className:"docked",classes:{paper:Object(C.a)(e.drawerPaper,!s&&e.drawerPaperClose)},open:s,children:[Object(a.jsx)("div",{className:e.toolbarIcon,children:Object(a.jsx)(z.a,{onClick:l,children:Object(a.jsx)(U.a,{})})}),Object(a.jsx)(P.a,{}),Object(a.jsx)(B.a,{onClick:l,children:_}),Object(a.jsx)(P.a,{}),Object(a.jsx)(B.a,{onClick:l,children:ee})]})]})}var oe=n(8),le=n(509),je=n(511),de=n(506),be=n(508),ue=n(510),me=n(507),he=n(524);function pe(e){return Object(a.jsx)(f.a,{component:"h2",variant:"h6",color:"secondary",gutterBottom:!0,children:e.children})}var xe=n(237),Oe=n.n(xe),fe=n(238),ge=n.n(fe),ve=n(239),ye=n.n(ve),we=n(177);n(437);we.a.initializeApp({apiKey:"AIzaSyDtjd3JL4whvdhSLITanE6ozuJ2bmusMc4",authDomain:"jpmanagerproject.firebaseapp.com",projectId:"jpmanagerproject",storageBucket:"jpmanagerproject.appspot.com",messagingSenderId:"1094775570429",appId:"1:1094775570429:web:235401f26a074386b1e394"});var Ne=we.a,Ce=Object(oe.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},body:{fontSize:12}}}))(de.a),Se=Object(oe.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(me.a);var ke=Object(te.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},btnRightMargin:{marginRight:3,height:15,fontSize:10}}}));function Ee(e){re();var t=ke(),n=Object(r.useState)([]),s=Object(h.a)(n,2),i=s[0],l=s[1],j=Object(r.useState)(),u=Object(h.a)(j,2),m=u[0],p=u[1],f=Ne.firestore().collection("usersCollection");Object(r.useEffect)((function(){f.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),l(t)}))}),[]);var g=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://my-json-server.typicode.com/rognz78/jpmanager/users");case 2:t=e.sent,l(t.data.reverse()),p(t.data.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("https://my-json-server.typicode.com/rognz78/jpmanager/users/".concat(t));case 2:g();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(O.a,{className:t.paper,children:Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)(pe,{children:["Home Page New - ",m]}),Object(a.jsx)(be.a,{component:O.a,children:Object(a.jsxs)(le.a,{size:"small",className:t.Table,children:[Object(a.jsx)(ue.a,{children:Object(a.jsxs)(me.a,{children:[Object(a.jsx)(Ce,{children:"#"}),Object(a.jsx)(Ce,{children:"Name"}),Object(a.jsx)(Ce,{children:"User Name"}),Object(a.jsx)(he.a,{smDown:!0,children:Object(a.jsx)(Ce,{className:t.Paper,children:"Email"})}),Object(a.jsx)(Ce,{children:"Action"})]})}),Object(a.jsx)(je.a,{children:i.map((function(e){return Object(a.jsxs)(Se,{children:[Object(a.jsxs)(Ce,{children:["key=",e.id," "]}),Object(a.jsx)(Ce,{children:e.Name}),Object(a.jsx)(Ce,{children:e.Email}),Object(a.jsx)(he.a,{smDown:!0,children:Object(a.jsx)(Ce,{className:t.Paper,children:e.Phone})}),Object(a.jsxs)(Ce,{children:[Object(a.jsx)(o.b,{to:"/users/",children:Object(a.jsx)(Oe.a,{color:"action",fontSize:"small"})}),Object(a.jsx)(o.b,{to:"/users/edit/",children:Object(a.jsx)(ge.a,{fontSize:"small"})}),Object(a.jsx)(o.b,{onClick:function(){return v()},children:Object(a.jsx)(ye.a,{color:"secondary",fontSize:"small"})})]})]})}))})]})}),Object(a.jsx)("div",{className:t.seeMore,children:Object(a.jsx)(o.b,{color:"primary",href:"#",children:"See more orders"})})]})})}var Ie=n(528),Be=Object(te.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"100%"}}}})),Pe=function(){var e=Object(r.useState)({name:"",username:"",email:"",phone:"",website:"",gender:""}),t=Object(h.a)(e,2),n=t[0],c=t[1],s=Object(l.g)().id;Object(r.useEffect)((function(){i()}),[]);var i=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3003/users/".concat(s));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=Be();return Object(a.jsx)(O.a,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"pb-4",children:[Object(a.jsxs)(f.a,{component:"h2",variant:"h5",color:"secondary",align:"center",gutterBottom:!0,children:["User - ",n.name]}),Object(a.jsxs)("form",{className:o.root,noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(Ie.a,{disabled:!0,id:"outlined",label:"Name",variant:"outlined",value:n.name}),Object(a.jsx)(Ie.a,{disabled:!0,id:"outlined",label:"Username",variant:"outlined",value:n.username}),Object(a.jsx)(Ie.a,{disabled:!0,id:"outlined",label:"User Email",variant:"outlined",value:n.email}),Object(a.jsx)(Ie.a,{disabled:!0,id:"outlined-",label:"User Phone",variant:"outlined",value:n.phone}),Object(a.jsx)(Ie.a,{disabled:!0,id:"outlined-",label:"User Website",variant:"outlined",value:n.website}),Object(a.jsx)(Ie.a,{disabled:!0,id:"outlined-",label:"User Gender",variant:"outlined",value:n.gender})]})]})})})},ze=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"py-4",children:[Object(a.jsx)("h1",{children:"Contact Page"}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(a.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(a.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(a.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1"})]}),Object(a.jsxs)("div",{class:"form-group form-check",children:[Object(a.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(a.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(a.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})})})},Fe=n(512),Ye=n(240),Me=n.n(Ye),Ue=function(){var e=Object(l.f)(),t=Object(l.g)().id,n=Object(r.useState)({name:"",username:"",email:"",phone:"",website:""}),c=Object(h.a)(n,2),s=c[0],i=c[1],o=s.name,j=s.username,p=s.email,O=s.phone,f=s.website,g=function(e){i(Object(m.a)(Object(m.a)({},s),{},Object(u.a)({},e.target.name,e.target.value)))};Object(r.useEffect)((function(){y()}),[]);var v=function(){var n=Object(b.a)(d.a.mark((function n(a){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.next=3,x.a.put("https://my-json-server.typicode.com/rognz78/jpmanager/users/".concat(t),s);case 3:e.push("https://my-json-server.typicode.com/rognz78/jpmanager/users/");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://my-json-server.typicode.com/rognz78/jpmanager/users/".concat(t));case 2:n=e.sent,i(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(a.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:o,onChange:function(e){return g(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:j,onChange:function(e){return g(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:p,onChange:function(e){return g(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:O,onChange:function(e){return g(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:f,onChange:function(e){return g(e)}})}),Object(a.jsx)(Fe.a,{type:"submit",variant:"contained",color:"primary",startIcon:Object(a.jsx)(Me.a,{}),children:"Update Record"})]})]})})},Ae=n(518),De=n(517),He=n(35),Re=n(525),Le=n(519),Te=n(251),We=n(252),Ge=n(55),Je=n(255);function Ve(e,t){return{time:e,amount:t}}var Ke=[Ve("00:00",0),Ve("03:00",300),Ve("06:00",600),Ve("09:00",800),Ve("12:00",1500),Ve("15:00",2e3),Ve("18:00",2400),Ve("21:00",2400),Ve("24:00",void 0)];function qe(){var e=Object(He.a)(),t=ne(),n=Object(C.a)(t.paper,t.fixedHeight);return Object(a.jsx)(O.a,{className:n,children:Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(pe,{children:"Today"}),Object(a.jsx)(Re.a,{children:Object(a.jsxs)(Le.a,{data:Ke,margin:{top:16,right:16,bottom:0,left:24},children:[Object(a.jsx)(Te.a,{dataKey:"time",stroke:e.palette.text.secondary}),Object(a.jsx)(We.a,{stroke:e.palette.text.secondary,children:Object(a.jsx)(Ge.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"Sales ($)"})}),Object(a.jsx)(Je.a,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})})}var Xe=n(516),$e=n(253),Qe=n.n($e);function Ze(e){e.preventDefault()}function _e(){var e=ne(),t=Object(C.a)(e.paper,e.fixedHeight),n=re();return Object(a.jsx)(O.a,{className:t,children:Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(pe,{children:"Total Records"}),Object(a.jsx)(f.a,{component:"p",variant:"h6",children:n}),Object(a.jsx)(f.a,{component:"p",variant:"h6"}),Object(a.jsxs)(f.a,{color:"textSecondary",className:e.depositContext,children:["As on ",Qe()().format("MMMM Do YYYY")]}),Object(a.jsx)("div",{children:Object(a.jsx)(Xe.a,{color:"primary",href:"#",onClick:Ze,children:"View balance"})})]})})}var et=n(520);function tt(){return Object(a.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(o.b,{color:"inherit",href:"https://material-ui.com/",children:"Visa Factory Limited"})," ",(new Date).getFullYear(),"."]})}var nt=function(){var e=ne();return Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(ie,{}),Object(a.jsxs)("main",{className:e.content,children:[Object(a.jsx)("div",{className:e.appBarSpacer}),Object(a.jsxs)(De.a,{maxWidth:"lg",className:e.container,children:[Object(a.jsxs)(Ae.a,{container:!0,spacing:1,children:[Object(a.jsx)(l.c,{children:Object(a.jsx)(Ae.a,{item:!0,xs:12,md:8,lg:9,children:Object(a.jsx)(l.a,{exact:!0,path:"/",component:qe})})}),Object(a.jsx)(l.c,{children:Object(a.jsx)(Ae.a,{item:!0,xs:12,md:4,lg:3,children:Object(a.jsx)(l.a,{exact:!0,path:"/",component:_e})})}),Object(a.jsx)(l.c,{children:Object(a.jsx)(Ae.a,{item:!0,xs:12,children:Object(a.jsx)(l.a,{exact:!0,path:"/",component:Ee})})}),Object(a.jsx)(l.c,{children:Object(a.jsx)(Ae.a,{item:!0,xs:12,md:12,lg:12,children:Object(a.jsx)(l.a,{exact:!0,path:"/form",component:N})})}),Object(a.jsx)(l.c,{children:Object(a.jsx)(Ae.a,{item:!0,xs:12,md:12,lg:12,children:Object(a.jsx)(l.a,{exact:!0,path:"/contact",component:ze})})}),Object(a.jsx)(l.c,{children:Object(a.jsx)(Ae.a,{item:!0,xs:12,md:12,lg:12,children:Object(a.jsx)(l.a,{exact:!0,path:"/users/edit/:id",component:Ue})})}),Object(a.jsx)(l.c,{children:Object(a.jsx)(Ae.a,{item:!0,xs:12,md:12,lg:12,children:Object(a.jsx)(l.a,{exact:!0,path:"/users/:id",component:Pe})})})]}),Object(a.jsx)(et.a,{pt:4,children:Object(a.jsx)(tt,{})})]})]})]})})},at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,532)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(nt,{})}),document.getElementById("root")),at()}},[[435,1,2]]]);
//# sourceMappingURL=main.4e5429d0.chunk.js.map