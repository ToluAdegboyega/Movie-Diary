(this["webpackJsonpmovie-crud"]=this["webpackJsonpmovie-crud"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(1),c=a.n(r),i=a(15),s=a.n(i),o=(a(86),a(37)),l=a(14),d=a(67),u=a(24),j=a(131),m=a(39),b=a(26),p=function(e){var t={id:null,name:"",date:"",review:""},a=Object(r.useState)(t),c=Object(u.a)(a,2),i=c[0],s=c[1],o=function(e){var t=e.target,a=t.name,n=t.value;s(Object(b.a)(Object(b.a)({},i),{},Object(m.a)({},a,n)))};return Object(n.jsxs)("form",{onSubmit:function(a){a.preventDefault(),i.name&&i.date&&(e.addUser(i),s(t))},autoComplete:"off",children:[Object(n.jsx)("div",{className:"form-group input-group",children:Object(n.jsx)("input",{className:"form-control",name:"name",placeholder:"Movie Title",value:i.name,onChange:o})}),Object(n.jsx)("div",{className:"form-group input-group",children:Object(n.jsx)("input",{className:"form-control",name:"date",placeholder:"Date Watched",value:i.date,onChange:o,type:"date"})}),Object(n.jsx)("div",{className:"form-group input-group",children:Object(n.jsx)("textarea",{className:"form-control",name:"review",placeholder:"Leave A Review",value:i.review,onChange:o})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btn btn-primary btn-block",value:"Add Movie"})})]})},h=function(e){var t=Object(r.useState)(e.currentUser),a=Object(u.a)(t,2),c=a[0],i=a[1];Object(r.useEffect)((function(){i(e.currentUser)}),[e]);var s=function(e){var t=e.target,a=t.name,n=t.value;i(Object(b.a)(Object(b.a)({},c),{},Object(m.a)({},a,n)))};return Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(c.id,c)},children:[Object(n.jsx)("div",{className:"form-group input-group",children:Object(n.jsx)("input",{className:"form-control",name:"name",placeholder:"Movie Title",value:c.name,onChange:s})}),Object(n.jsx)("div",{className:"form-group input-group",children:Object(n.jsx)("input",{className:"form-control",name:"date",placeholder:"Date Watched",value:c.date,onChange:s,type:"date"})}),Object(n.jsx)("div",{className:"form-group input-group",children:Object(n.jsx)("textarea",{className:"form-control",name:"review",placeholder:"Leave A Review",value:c.review,onChange:s})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btn btn-primary btn-block",value:"Update Movie"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btn btn-primary btn-block",value:"Cancel",onClick:function(){return e.setEditing(!1)}})})]})},O=(a(87),function(e){return Object(n.jsxs)("table",{className:"table table-borderless table-stripped",children:[Object(n.jsx)("thead",{className:"thead-light",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Movie Title"}),Object(n.jsx)("th",{children:"Date Watched"}),Object(n.jsx)("th",{children:" Review"}),Object(n.jsx)("th",{})]})}),Object(n.jsx)("tbody",{children:e.users.length>0?e.users.map((function(t){return Object(n.jsxs)("tr",{className:"table-row",children:[Object(n.jsx)("td",{children:t.name}),Object(n.jsx)("td",{children:t.date}),Object(n.jsx)("td",{children:t.review}),Object(n.jsxs)("td",{children:[Object(n.jsx)("a",{onClick:function(){e.editRow(t)},className:"btn text-primary",children:Object(n.jsx)("i",{className:"fas fa-pencil-alt"})}),Object(n.jsx)("a",{onClick:function(){return e.deleteUser(t.id)},className:"btn text-danger",children:Object(n.jsx)("i",{className:"far fa-trash-alt"})})]})]},t.id)})):Object(n.jsx)("tr",{className:"table-row",children:Object(n.jsx)("td",{colSpan:3,children:"No movies"})})})]})}),x=a(133),f=a(66),v=(a(91),a(92),f.a.initializeApp({apiKey:"AIzaSyAdH3oNc28p55FCAoJYF_iKkEY2BhgC8hM",authDomain:"movie-database-crud.firebaseapp.com",databaseURL:"https://movie-database-crud.firebaseio.com",projectId:"movie-database-crud",storageBucket:"movie-database-crud.appspot.com",messagingSenderId:"11772955604",appId:"1:11772955604:web:ba24397d397030dc8ee441"})),g=(a(93),Object(j.a)((function(e){return{button:{color:"white",textAlign:"center",fontFamily:"Segoe UI",marginBottom:"50px",background:"linear-gradient( 90deg, rgba(255, 118, 20, 1) 0%,  rgba(255, 84, 17, 1) 100% )",padding:"16px",borderRadius:"5px",marginLeft:"20px"}}}))),w=function(){var e=g(),t=Object(r.useState)([{id:1,name:"Rush Hour",date:"1998-03-19",review:"A vindication of what some of us have always known: that Jackie is a screen legend."},{id:2,name:"La La Land",date:"2016-09-23",review:"It is joyful. It leaps off the screen."},{id:3,name:"Selma",date:"2014-11-05",review:"Selma is worthy of my highest recommendation. Hopefully like me, you'll clap once the end credits roll."}]),a=Object(u.a)(t,2),c=a[0],i=a[1],s=Object(r.useState)({id:null,name:"",date:"",review:""}),o=Object(u.a)(s,2),l=o[0],j=o[1],m=Object(r.useState)(!1),b=Object(u.a)(m,2),f=b[0],w=b[1];return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("users"));e&&i(e)}),[]),Object(r.useEffect)((function(){localStorage.setItem("users",JSON.stringify(c))}),[c]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(x.a,{onClick:function(){return v.auth().signOut()},className:e.button,children:"Logout"}),Object(n.jsx)("div",{className:"page-header",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("h1",{className:"display-8 text-center",children:["Movie Diary",Object(n.jsx)("i",{class:"fas fa-mug-hot"})]})})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"flex-large\tcol-md-5",children:f?Object(n.jsx)(r.Fragment,{children:Object(n.jsx)(h,{editing:f,setEditing:w,currentUser:l,updateUser:function(e,t){w(!1),i(c.map((function(a){return a.id===e?t:a})))}})}):Object(n.jsx)(r.Fragment,{children:Object(n.jsx)(p,{addUser:function(e){e.id=c.length+1,i([].concat(Object(d.a)(c),[e]))}})})}),Object(n.jsx)("div",{className:"col-md-7",children:Object(n.jsx)(O,{users:c,editRow:function(e){w(!0),j({id:e.id,name:e.name,date:e.date,review:e.review})},deleteUser:function(e){w(!1),i(c.filter((function(t){return t.id!==e})))}})})]})]})},N=a(43),y=a.n(N),S=a(54),C=a(138),k=Object(j.a)((function(e){return{loading:{color:"white",textAlign:"center",fontFamily:"Segoe UI",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:900,fontSize:"50px",height:"100vh"}}})),U=c.a.createContext(),A=function(e){var t=e.children,a=k(),c=Object(r.useState)(null),i=Object(u.a)(c,2),s=i[0],o=i[1],l=Object(r.useState)(!0),d=Object(u.a)(l,2),j=d[0],m=d[1];return Object(r.useEffect)((function(){v.auth().onAuthStateChanged((function(e){o(e),m(!1)}))}),[]),j?Object(n.jsx)(C.a,{className:a.loading,children:"Please wait..."}):Object(n.jsx)(U.Provider,{value:{currentUser:s},children:t})},I=a(137),D=a(135),W=a(139),E=a(136),M=a(102),F=Object(j.a)((function(e){return{paper:{margin:e.spacing(8),padding:e.spacing(8),display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",backgroundColor:"white",width:"100%",borderRadius:"5px"},paperH1:{color:"black",textAlign:"center",fontFamily:"Segoe UI"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function R(e){var t=e.history,a=F(),c=Object(r.useCallback)(function(){var e=Object(S.a)(y.a.mark((function e(a){var n,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,c=n.password,e.prev=2,e.next=5,v.auth().signInWithEmailAndPassword(r.value,c.value);case 5:t.push("/Movie-Diary"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(r.useContext)(U).currentUser?Object(n.jsx)(l.a,{to:"/Movie-Diary"}):Object(n.jsxs)("div",{className:a.paper,children:[Object(n.jsx)(M.a,{component:"h1",variant:"h5",className:a.paperH1,children:"Sign in"}),Object(n.jsxs)("form",{onSubmit:c,className:a.form,noValidate:!0,children:[Object(n.jsx)(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(n.jsx)(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(n.jsx)(D.a,{control:Object(n.jsx)(W.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(n.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Sign In"}),Object(n.jsxs)(E.a,{container:!0,children:[Object(n.jsx)(E.a,{item:!0,xs:!0}),Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(o.b,{to:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})}var L=Object(j.a)((function(e){return{paper:{margin:e.spacing(8),padding:e.spacing(8),display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",backgroundColor:"white",width:"100%",borderRadius:"5px"},paperH1:{color:"black",textAlign:"center",fontFamily:"Segoe UI"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function H(e){var t=e.history,a=L(),c=Object(r.useCallback)(function(){var e=Object(S.a)(y.a.mark((function e(a){var n,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,c=n.password,e.prev=2,e.next=5,v.auth().createUserWithEmailAndPassword(r.value,c.value);case 5:t.push("/Movie-Diary"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.jsxs)("div",{className:a.paper,children:[Object(n.jsx)(M.a,{component:"h1",variant:"h5",className:a.paperH1,children:"Sign up"}),Object(n.jsxs)("form",{onSubmit:c,className:a.form,noValidate:!0,children:[Object(n.jsxs)(E.a,{container:!0,spacing:2,children:[Object(n.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(I.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(n.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(I.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(n.jsx)(E.a,{item:!0,xs:12,children:Object(n.jsx)(I.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(n.jsx)(E.a,{item:!0,xs:12,children:Object(n.jsx)(I.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})})]}),Object(n.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Sign Up"}),Object(n.jsx)(E.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(E.a,{item:!0,children:Object(n.jsx)(o.b,{to:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})}a(99);var q=a(68),J=function(e){var t=e.component,a=Object(q.a)(e,["component"]),c=Object(r.useContext)(U).currentUser;return Object(n.jsx)(l.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return c?Object(n.jsx)(t,Object(b.a)({},e)):Object(n.jsx)(l.a,{to:"/login"})}}))};var P=function(){return Object(n.jsx)(A,{children:Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{className:"movieWrapper",children:[Object(n.jsx)(J,{exact:!0,path:"/Movie-Diary",component:w}),Object(n.jsx)(l.b,{exact:!0,path:"/login",component:R}),Object(n.jsx)(l.b,{exact:!0,path:"/signup",component:H})]})})})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))},86:function(e,t,a){},87:function(e,t,a){},93:function(e,t,a){},99:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.c57b001c.chunk.js.map