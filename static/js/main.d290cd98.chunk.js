(this["webpackJsonpsir-vote-a-lot"]=this["webpackJsonpsir-vote-a-lot"]||[]).push([[0],{372:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),c=n.n(r),l=n(213),o=n(24),s=n(416),j=n(420),u=n(427),p=n(411),O=n(415),d=n(375),b=n(10);function h(){return Object(b.jsx)(p.a,{position:"static",children:Object(b.jsx)(O.a,{variant:"dense",children:Object(b.jsx)(d.a,{variant:"h6",color:"inherit",children:"Sir Vote-a-lot"})})})}var x=n(26),g=n(85),f=n(374),m=n(428),v=n(419),y=n(193),C=n.n(y),T=Object(s.a)((function(e){return{root:{flexGrow:1,"& .MuiTextField-root":{margin:e.spacing(1,0)},"& .MuiButton-root":{marginTop:e.spacing(2),marginBottom:e.spacing(1)}},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},pollOption:{width:"80%"},pollButton:{width:"10%",marginLeft:e.spacing(1)},optionsCounter:{margin:"auto"},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));function N(e,t){var n;switch(t.type){case"ADD_OPTION":return[].concat(Object(g.a)(e),[{title:t.option}]);case"EDIT_OPTION":return(n=Object(g.a)(e))[t.index]={title:t.option},n;case"REMOVE_OPTION":return(n=Object(g.a)(e)).splice(t.index,1),n;default:return}}var w=function(e){var t=e.pollResetHandler,n=T(),i=Object(a.useState)(""),r=Object(o.a)(i,2),c=r[0],l=r[1],s=Object(a.useState)(""),u=Object(o.a)(s,2),p=u[0],O=u[1],h=Object(a.useState)(!1),g=Object(o.a)(h,2),y=g[0],w=g[1],D=Object(a.useReducer)(N,[]),P=Object(o.a)(D,2),I=P[0],F=P[1];return Object(a.useEffect)((function(){if(I.length>10||I.length<2)w(!0);else if(c.length>80||0===c.length)w(!0);else{var e,t=Object(x.a)(I);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(n.title.length>80||0===n.title.length)return void w(!0)}}catch(a){t.e(a)}finally{t.f()}w(!1)}}),[I,c]),Object(b.jsx)(f.a,{className:n.paper,children:Object(b.jsxs)("form",{className:n.root,noValidate:!0,autoComplete:"off",children:[Object(b.jsx)(m.a,{label:"Poll Question",fullWidth:!0,value:c,onChange:function(e){return l(e.target.value)},error:c.length>80,helperText:c.length>80?"This field has an 80 character limit":""}),I&&I.map((function(e,t){var a=e.title;return Object(b.jsxs)("div",{children:[Object(b.jsx)(m.a,{label:"Option #"+(t+1),className:n.pollOption,value:a,onChange:function(e){return F({type:"EDIT_OPTION",index:t,option:e.target.value})},error:I[t].title.length>80,helperText:I[t].title.length>80?"This field has an 80 character limit":""}),Object(b.jsx)(v.a,{variant:"contained",color:"primary",className:n.pollButton,onClick:function(){return F({type:"REMOVE_OPTION",index:t})},children:Object(b.jsx)(C.a,{})})]},t)})),Object(b.jsxs)("div",{children:[Object(b.jsx)(m.a,{label:"Add Option",className:n.pollOption,value:p,onChange:function(e){return O(e.target.value)},error:p.length>80,helperText:p.length>80?"This field has an 80 character limit":"",disabled:I.length>=10}),Object(b.jsx)(v.a,{type:"submit",variant:"contained",color:"primary",className:n.pollButton,onClick:function(e){e.preventDefault(),F({type:"ADD_OPTION",option:p}),O("")},disabled:I.length>=10||p.length>80||0===p.length,children:"Add"})]}),Object(b.jsxs)(j.a,{container:!0,children:[Object(b.jsx)(j.a,{item:!0,sm:9,className:n.optionsCounter,children:Object(b.jsx)(d.a,{align:"left",children:I.length<2?"Poll must have at least 2 options":I.length+"/10 possible answers"})}),Object(b.jsx)(j.a,{item:!0,sm:3,children:Object(b.jsx)(v.a,{type:"submit",variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var n=I.map((function(e){return e.voteCount=0,e}));t(c,n)},disabled:y,children:"Reset"})})]})]})})},D=n(430),P=n(431),I=n(421),F=n(417),S=n(418),E=i.a.createContext({pollQuestion:"",pollOptions:[]}),B=Object(s.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));var R=function(e){var t=e.registerVote,n=B(),i=Object(a.useState)(""),r=Object(o.a)(i,2),c=r[0],l=r[1],s=Object(a.useContext)(E),j=s.pollQuestion,u=s.pollOptions;return u?Object(b.jsx)(f.a,{className:n.paper,children:Object(b.jsxs)(F.a,{component:"fieldset",children:[Object(b.jsxs)(S.a,{component:"legend",children:[" ",j]}),Object(b.jsx)(P.a,{"aria-label":"gender",name:"gender1",value:c,onChange:function(e){return l(e.target.value)},children:u.map((function(e,t){var n=e.title;return Object(b.jsx)(I.a,{value:t.toString(),control:Object(b.jsx)(D.a,{}),label:n},t)}))}),Object(b.jsx)(v.a,{type:"submit",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),t(c),l("")},children:"Vote"})]})}):null},V=n(422),k=n(423),M=n(209),_=n(210),Q=n(99),A=n(212),G=Object(s.a)((function(e){return{root:{flexGrow:1},barChart:{width:"100%",minHeight:"300px"},paper:{padding:e.spacing(2),color:e.palette.text.secondary,fontFamily:e.typography.fontFamily},chartTitle:{fontWeight:"700"}}}));var L=function(){var e=G(),t=Object(a.useContext)(E),n=t.pollQuestion,i=t.pollOptions;if(!i)return null;var r=Object(g.a)(i);return Object(b.jsxs)(f.a,{className:e.paper,children:[Object(b.jsx)(d.a,{align:"center",className:e.chartTitle,children:n}),Object(b.jsx)(V.a,{className:e.barChart,children:Object(b.jsxs)(k.a,{data:r,children:[Object(b.jsx)(M.a,{dataKey:"title"}),Object(b.jsx)(_.a,{allowDecimals:!1}),Object(b.jsx)(Q.a,{}),Object(b.jsx)(A.a,{dataKey:"voteCount",name:"votes",fill:"#3f51b5"})]})})]})},H=Object(s.a)((function(e){return{root:{flexGrow:1,"& .MuiTextField-root":{margin:e.spacing(1,0)}},content:{margin:e.spacing(2,0)}}}));var J=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],i=t[1],r=H();return Object(b.jsxs)(E.Provider,{value:n,children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:r.content,children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(j.a,{container:!0,spacing:3,children:[Object(b.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(b.jsx)(w,{pollResetHandler:function(e,t){i({pollQuestion:e,pollOptions:t})}})}),Object(b.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(b.jsx)(R,{registerVote:function(e){var t=Object(l.a)({},n);t.pollOptions[e].voteCount=n.pollOptions[e].voteCount+1,i(t)}})}),Object(b.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(b.jsx)(L,{})})]})})})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,433)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root")),K()}},[[372,1,2]]]);
//# sourceMappingURL=main.d290cd98.chunk.js.map