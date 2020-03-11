(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),c=a.n(i),s=(a(52),a(81),a(7)),l=a(8),o=a(10),u=a(9),m=a(11),h=(a(82),a(34)),p=a(5),d=a(23),v=a(22),E=a(41),g=a.n(E),f=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e){var a=e.username,n=e.password;return t.service.post("/signup",{username:a,password:n}).then((function(e){return e.data}))},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://app-quake.herokuapp.com/api","/auth"),withCredentials:!0})},b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.postUser=function(){a.services.login(a.state).then((function(e){a.setState({username:"",password:""}),a.props.setTheUser(e),a.props.history.push("/")})).catch((function(e){return console.log({err:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:""},a.services=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("h1",null,"Iniciar sesi\xf3n"),r.a.createElement(p.a,{onSubmit:this.handleSubmit},r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Usuario"),r.a.createElement(p.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Password"),r.a.createElement(p.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(d.a,{variant:"primary",type:"submit"},"\xa1Entra!")))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.postUser=function(){a.services.signup(a.state).then((function(e){a.setState({username:"",password:""}),a.props.setTheUser(e),a.props.history.push("/")})).catch((function(e){return console.log({err:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:"",company:""},a.services=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("h1",null,"Registrar usuario"),r.a.createElement(p.a,{onSubmit:this.handleSubmit},r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Usuario"),r.a.createElement(p.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Password"),r.a.createElement(p.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(p.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(p.a.Check,{type:"checkbox",label:"\xbfTienes una empresa?"})),r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Nombre de sociedad"),r.a.createElement(p.a.Control,{type:"text",name:"nombreSociedad",value:this.state.company,onChange:this.handleChange})),r.a.createElement(d.a,{variant:"primary",type:"submit"},"\xa1Reg\xedstrate!")))}}]),t}(n.Component),O=function e(){var t=this;Object(s.a)(this,e),this.getAllActivities=function(){return t.service.get("/getAllActivities").then((function(e){return e.data}))},this.getActivitiesDetails=function(e){return t.service.get("/getOneActivity/".concat(e)).then((function(e){return e.data}))},this.postActivities=function(e){return t.service.post("/new",e).then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://app-quake.herokuapp.com/api","/activities"),withCredentials:!0})},C=a(33),j=a(16),A=a(18),w=function(e){var t=e.image,a=e.activity,n=e.company,i=e.price,c=e.province,s=e._id;return r.a.createElement(C.a,{md:4},r.a.createElement(j.a,null,r.a.createElement(A.b,{to:"/getOneActivity/".concat(s)},r.a.createElement(j.a.Img,{variant:"top",src:t})),r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Title,null,a),r.a.createElement(j.a.Text,null,n),r.a.createElement(j.a.Text,null,i," \u20ac"),r.a.createElement(j.a.Text,null,c))))},T=a(38),S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){return e.getAllActivities()},e.getAllActivities=function(){e.services.getAllActivities().then((function(t){return e.setState({activities:t})})).catch((function(e){return console.log(e)}))},e.state={activities:[]},e.services=new O,e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,this.state.activities.length?r.a.createElement(T.a,null,this.state.activities.map((function(e){return r.a.createElement(w,Object.assign({key:e._id},e))}))):r.a.createElement("p",null,"Cargando..."))}}]),t}(n.Component),k=a(74),U=a.n(k),D=function(e){var t=e.text;return r.a.createElement("div",null,t)},L=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"400px",width:"80%"}},this.props.latitud?r.a.createElement(U.a,{bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_URL:"https://app-quake.herokuapp.com/api"}).REACT_APP_API_KEY},center:[this.props.latitud,this.props.longitud],zoom:16},r.a.createElement(D,{lat:this.props.latitud,lng:this.props.longitud,text:this.props.name})):null)}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.getActivitiesDetails()},a.getActivitiesDetails=function(){a.services.getActivitiesDetails(a.props.match.params.id).then((function(e){return a.setState({activity:e})})).catch((function(e){return console.log(e)}))},a.state={activity:{}},a.services=new O,console.log("las props por defecto ser\xedan estas:",a.props),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("process emv",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_URL:"https://app-quake.herokuapp.com/api"})),r.a.createElement(v.a,{className:"activity-details"},r.a.createElement("h1",null,this.state.activity.company),r.a.createElement(T.a,null,r.a.createElement(C.a,{md:{span:4,offset:1}},r.a.createElement("hr",null),r.a.createElement(j.a.Body,null,r.a.createElement("h3",null,this.state.activity.activity),r.a.createElement(j.a.Text,null,"Dificultad: ",this.state.activity.difficulty),r.a.createElement(j.a.Text,null,"Duraci\xf3n: ",this.state.activity.duration," horas"),r.a.createElement(j.a.Text,null,this.state.activity.description))),r.a.createElement(C.a,{md:{span:5,offset:1}},r.a.createElement(j.a.Img,{variant:"top",src:this.state.activity.image}))),r.a.createElement(T.a,{style:{height:"500px"}},r.a.createElement(L,{latitud:40.394531,longitud:-3.699706,name:"Matadero"})),r.a.createElement(d.a,{as:"div",variant:"dark",size:"sm"},r.a.createElement(A.b,{to:"/getAllActivities"},"Volver")))}}]),t}(n.Component),x={activity:"",company:"",duration:"",price:"",description:"",date:""},I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.postActivity=function(){e.services.postActivities(e.state).then((function(){e.setState({activity:x}),e.props.history.push("/")})).catch((function(e){return console.log({err:e})}))},e.handleSubmit=function(t){t.preventDefault(),e.postActivity()},e.state={activity:x},e.services=new O,e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Actividad"),r.a.createElement(p.a.Control,{type:"text",name:"activity",value:this.state.activity.activity,onChange:this.handleChange})),r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Empresa"),r.a.createElement(p.a.Control,{type:"text",name:"company",value:this.state.activity.company,onChange:this.handleChange})),r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Duraci\xf3n"),r.a.createElement(p.a.Control,{type:"number",name:"duration",value:this.state.activity.duration,onChange:this.handleChange})),r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Price"),r.a.createElement(p.a.Control,{type:"number",name:"price",value:this.state.activity.price,onChange:this.handleChange})),r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Description"),r.a.createElement(p.a.Control,{type:"text",name:"description",value:this.state.activity.description,onChange:this.handleChange})),r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Label,null,"Fecha"),r.a.createElement(p.a.Control,{type:"date",name:"date",value:this.state.activity.date,onChange:this.handleChange})),r.a.createElement(d.a,{onClick:this.handleSubmit,variant:"dark"},"Crear nueva actividad")))}}]),t}(n.Component),P=a(25),R=a(31),G=a(20),B=function(){return r.a.createElement(P.a,{bg:"light",expand:"lg"},r.a.createElement(P.a.Brand,{href:"/"},"Quake"),r.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(R.a,{className:"mr-auto"},r.a.createElement(R.a.Link,{as:"div"}," ",r.a.createElement(A.b,{to:"/new"},"Registrar actividad")),r.a.createElement(R.a.Link,{as:"div"}," ",r.a.createElement(A.b,{to:"/signup"},"Registro")),r.a.createElement(R.a.Link,{as:"div"}," ",r.a.createElement(A.b,{to:"/login"},"Inicio sesi\xf3n")))))},N=function(){return r.a.createElement(P.a,{bg:"light",expand:"lg"},r.a.createElement(P.a.Brand,{href:"/"},"Quake"),r.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(R.a,{className:"mr-auto"},r.a.createElement(G.a,{title:"Deportes",id:"basic-nav-dropdown"},r.a.createElement(G.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(G.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(G.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(G.a.Divider,null),r.a.createElement(G.a.Item,{href:"#action/3.4"},"Separated link")),r.a.createElement(G.a,{title:"Provincias",id:"basic-nav-dropdown"},r.a.createElement(G.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(G.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(G.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(G.a.Divider,null),r.a.createElement(G.a.Item,{href:"#action/3.4"},"Separated link")),r.a.createElement(R.a.Link,{as:"div"}," ",r.a.createElement(A.b,{to:"/signup"},"Registro")),r.a.createElement(R.a.Link,{as:"div"}," ",r.a.createElement(A.b,{to:"/login"},"Inicio sesi\xf3n")))))},K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logout=function(){a.services.logout().then((function(e){a.props.setTheUser(!1)})).catch((function(e){return console.log(e)}))},a.state={},a.services=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.user&&"COMPANY"===this.props.user.role?r.a.createElement(B,null):r.a.createElement(N,null)}}]),t}(n.Component),W=a(28),M=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidUpdate=function(t,a){return console.log("El estado de App se ha actualizado:",e.state)},e.componentDidMount=function(){return e.fetchUser()},e.setTheUser=function(t){return e.setState({user:t})},e.fetchUser=function(){e.services.loggedin().then((function(t){return e.setState({user:t})})).catch((function(){return e.setState({user:!1})}))},e.state={user:null},e.services=new f,e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{user:this.state.user,fetchUser:this.fetchUser}),r.a.createElement("a",{href:"/getAllActivities"},"\xcdnspirame"),r.a.createElement(W.c,null,r.a.createElement(W.a,{path:"/login",render:function(t){return r.a.createElement(b,Object.assign({setTheUser:e.setTheUser},t))}}),r.a.createElement(W.a,{path:"/signup",render:function(t){return r.a.createElement(y,Object.assign({setTheUser:e.setTheUser},t))}}),r.a.createElement(W.a,{path:"/getAllActivities",render:function(t){return r.a.createElement(S,Object.assign({setTheUser:e.setTheUser},t))}}),r.a.createElement(W.a,{path:"/getOneActivity/:id",render:function(t){return r.a.createElement(_,Object.assign({setTheUser:e.setTheUser},t))}}),r.a.createElement(W.a,{path:"/new",render:function(t){return r.a.createElement(I,Object.assign({setTheUser:e.setTheUser},t))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a(125)},81:function(e,t,a){},82:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.ebfd34df.chunk.js.map