(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(52)},24:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},26:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),o=a.n(r),i=(a(24),a(25),a(26),a(2)),s=a(3),u=a(5),c=a(4),h=a(1),m=a(6),d=a(7),g=a.n(d),b=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"authenticateUser",value:function(e){localStorage.setItem("token",e)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token")}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"getUserId",value:function(){return localStorage.getItem("userId")}}]),e}(),p=a(9),f=(a(46),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={name:"",password:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,l=a.password;g.a.post("/login",{name:n,password:l}).then(function(e){console.log("Result:",e),b.authenticateUser(e.data.token),console.log("token:",b.getToken()),t.setState({name:"",password:""}),t.props.refreshPage()},function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"loginform"},l.a.createElement("h1",null,"Sign In"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,placeholder:"User",name:"name",required:!0}),l.a.createElement("br",null),l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password",name:"password",required:!0}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"}),l.a.createElement("br",null)))}}]),t}(n.Component)),E=(a(47),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={name:"",email:"",password:"",repeat_password:"",message:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,l=a.password,r=a.repeat_password,o=a.email;l!=r&&this.setState({message:"Password does not match with repeat password field!<br/>"}),g.a.post("/register",{name:n,email:o,password:l}).then(function(e){console.log(e)}).then(function(e){t.props.refreshPage()},function(e){console.log(e),document.location.reload(!0)})}},{key:"render",value:function(){return l.a.createElement("div",{id:"signup"},l.a.createElement("h1",null,"Registration"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Email:",l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleChange,name:"email",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChange,name:"password",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Repead-Password:",l.a.createElement("input",{type:"password",value:this.state.repeat_password,onChange:this.handleChange,name:"repeat_password",required:!0})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("div",{id:"message"},this.state.message))}}]),t}(n.Component)),v=(n.Component,a(48),a(49),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={date:"",sport:"",title:"",amount:0,cote:0,profit_loose:0},a.handleChangeDate=a.handleChangeDate.bind(Object(h.a)(a)),a.handleChangeSport=a.handleChangeSport.bind(Object(h.a)(a)),a.handleChangeTitle=a.handleChangeTitle.bind(Object(h.a)(a)),a.handleChangeAmount=a.handleChangeAmount.bind(Object(h.a)(a)),a.handleChangeCote=a.handleChangeCote.bind(Object(h.a)(a)),a.handleChangePL=a.handleChangePL.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"handleChangeSport",value:function(e){this.setState({sport:e.target.value})}},{key:"handleChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleChangeAmount",value:function(e){this.setState({amount:e.target.value})}},{key:"handleChangeCote",value:function(e){this.setState({cote:e.target.value})}},{key:"handleChangePL",value:function(e){this.setState({profit_loose:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A data was submitted: "+this.state.date+" - "+this.state.sport+" - "+this.state.title+" - "+this.state.amount+" - "+this.state.cote+" - "+this.state.profit_loose),e.preventDefault();var t=this.state,a=t.date,n=t.sport,l=t.title,r=t.amount,o=t.cote,i=t.profit_loose;console.log({date:a,sport:n,title:l,amount:r,cote:o,profit_loose:i}),console.log(b.getToken()),g.a.post("/addbet",{date:a,sport:n,title:l,amount:r,cote:o,profit_loose:i},{headers:{Authorization:"Bearer "+b.getToken()}}).then(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"betform"},l.a.createElement("h1",null,"Add a new Bet"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Betting Title :",l.a.createElement("input",{type:"text",value:this.state.title,onChange:this.handleChangeTitle,placeholder:"Title of Bet",required:!0}),l.a.createElement("br",null)),l.a.createElement("label",null,"Type of sport :",l.a.createElement("input",{type:"text",value:this.state.sport,onChange:this.handleChangeSport,placeholder:"Sport",required:!0}),l.a.createElement("br",null)),l.a.createElement("label",null,"Betting Date:",l.a.createElement("input",{type:"date",onChange:this.handleChangeDate,placeholder:"Date",required:!0}),l.a.createElement("br",null)),l.a.createElement("label",null,"Amount of betting :",l.a.createElement("input",{type:"number",onChange:this.handleChangeAmount,placeholder:"Amount of betting",required:!0}),l.a.createElement("br",null)),l.a.createElement("label",null,"Cote of betting :",l.a.createElement("input",{type:"number",onChange:this.handleChangeCote,placeholder:"Cote",required:!0}),l.a.createElement("br",null)),l.a.createElement("label",null,"Amount of Profit or Loose :",l.a.createElement("input",{type:"number",onChange:this.handleChangePL,placeholder:"Profit or Loose",required:!0}),l.a.createElement("br",null)),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(l.a.Component)),C=(a(50),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={bets:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;g.a.get("/getbet",{headers:{Authorization:"Bearer "+b.getToken()}}).then(function(t){console.log(t.data),e.setState({bets:t.data})})}},{key:"render",value:function(){var e=this.state.bets.map(function(e){return l.a.createElement("div",{className:"gettbet"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.sport),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.amount),l.a.createElement("td",null,e.cote),l.a.createElement("td",null,e.profit_loose))))});return l.a.createElement("tbody",null,e," ")}}]),t}(n.Component)),j=(a(51),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={id:0},a.handleChangeId=a.handleChangeId.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChangeId",value:function(e){this.setState({id:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A data was submitted: "+this.state.id),e.preventDefault();var t=this.state.id;console.log({id:t}),console.log(b.getToken()),g.a.post("/removebet",{id:t},{headers:{Authorization:"Bearer "+b.getToken()}}).then(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"removebet"},l.a.createElement("h1",null,"Remove a Bet"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Number of the bet to remove :",l.a.createElement("input",{type:"number",onChange:this.handleChangeId,placeholder:"Number of Bet to remove",required:!0}),l.a.createElement("br",null)),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(l.a.Component)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).refreshPage=a.refreshPage.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"refreshPage",value:function(){this.forceUpdate()}},{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard",refreshPage:this.refreshPage},l.a.createElement("h1",null,"Dashboard"),l.a.createElement("img",{src:"graph.jpeg"}),l.a.createElement("div",{className:"get"},l.a.createElement("h1",null,"List of Bets"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"N\xb0")),l.a.createElement("td",null,l.a.createElement("strong",null,"Sport")),l.a.createElement("td",null,l.a.createElement("strong",null,"Title")),l.a.createElement("td",null,l.a.createElement("strong",null,"Amount")),l.a.createElement("td",null,l.a.createElement("strong",null,"Cote")),l.a.createElement("td",null,l.a.createElement("strong",null,"P&L"))))),l.a.createElement(C,{refreshPage:this.refreshPage}),l.a.createElement(v,{refreshPage:this.refreshPage}),l.a.createElement(j,{refreshPage:this.refreshPage}))}}]),t}(l.a.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={show:!1},a.refreshPage=a.refreshPage.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({shown:!this.state.shown})}},{key:"refreshPage",value:function(){this.forceUpdate()}},{key:"logout",value:function(){alert("logout"),g.a.post("/logout",{token:b.getToken()}).then(function(e){console.log(e)}),b.deauthenticateUser(),this.refreshPage()}},{key:"render",value:function(){var e={display:this.state.shown?"none":"block"},t={display:this.state.shown?"block":"none"};return l.a.createElement("div",null,b.isUserAuthenticated()?l.a.createElement("div",null,l.a.createElement(O,{refreshPage:this.refreshPage}),l.a.createElement("div",{id:"logout"},l.a.createElement("button",{onClick:this.logout.bind(this)},"LogOut"))):l.a.createElement("div",{id:"login"},l.a.createElement("div",{style:e},l.a.createElement(f,{refreshPage:this.refreshPage}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.toggle.bind(this)},"Register")),l.a.createElement("div",{style:t},l.a.createElement(E,{refreshPage:this.refreshPage}))))}}]),t}(n.Component);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ca5f1371.chunk.js.map