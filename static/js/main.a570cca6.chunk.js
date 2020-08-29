(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('{"projects":[{"id":3,"image":"./img/kda-akali-click-game.jpg","name":"KDA Akali Click Game","link":"https://ernesturzua.github.io/kda-akali-click-game/","description":"Akali is a League of Legends Champion, and this game is a memory based click game that shuffles after every click."},{"id":4,"image":"./img/projectX.jpg","name":"Project X","link":"https://fast-meadow-38464.herokuapp.com/","description":"Project X is a choose your own adventure game, utilizing Particle.js, mysql and materialize css."},{"id":5,"image":"./img/shoppinator.png","name":"Shoppinator","link":"https://ernesturzua.github.io/Shoppinator/","description":"Shoppinator is a shopping app that allows you to take a picture of an object and retrieves the nearest stores."},{"id":6,"image":"./img/weather-dashboard.png","name":"Weather Dashboard","link":"https://ernesturzua.github.io/weather-dashboard/","description":"Weather Dashboard is simple and easy to use to find the weather in any part of the country using openWeather api."},{"id":7,"image":"./img/workday-scheduler.png","name":"Workday Scheduler","link":"https://ernesturzua.github.io/workday-scheduler/","description":"Workday Scheduler is a simple easy to use task saver that holds persistant data and highlights the current hour."},{"id":1,"image":"./img/AnimationTransitions.jpg","name":"Animation Transitions","link":"https://ernieurzua.com/project02.html","description":"Transitions are keyframed in UIKit for the IOS."},{"id":2,"image":"./img/DemoReel.jpg","name":"Demo Reel","link":"https://ernieurzua.com/project03.html","description":"Animation Demo reel of various motion capture and keyframed shots."}],"assets":[{"id":1,"image":"./img/me.jpg","name":"me"},{"id":2,"image":"./img/aboutMe.png","name":"About Me"}]}')},,,,,,,,,,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(20),o=t.n(i),c=(t(27),t(28),t(7)),s=t(1);t(29);var l=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark green orange-text"},r.a.createElement("div",{className:"navbar-brand orange-text"},"Ernest Urzua",r.a.createElement("span",{className:"large"},"Portfolio")),r.a.createElement("span",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-link"},r.a.createElement(c.b,{to:"/projects"},"Projects")),r.a.createElement("li",{className:"nav-link"},r.a.createElement(c.b,{to:"/about"},"About")),r.a.createElement("li",{className:"nav-link"},r.a.createElement(c.b,{to:"/resume"},"Resume")))))},m=t(13),u=t(9),d=t(10),p=t(14),h=t(12),g=(t(35),t(11));t(36);var f=function(e){return r.a.createElement("div",{className:"card transition1 text-center"},r.a.createElement("img",{src:e.image,className:"card-img",onClick:e.handleClick,alt:e.name,id:e.id}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("a",{className:"card-title",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.name)),r.a.createElement("p",{className:"card-text text-center"},e.description))},k=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={Img:g},e.handleItemClick=function(a){var t=a.target.id;console.log("Clicked ID:"+t);var n=Object(m.a)({},e.state);e.setState(n),console.log("setting the newState")},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid p-2 col-12 justify-content-center white"},this.state.Img.projects.map((function(a){return r.a.createElement(f,{key:a.id,id:a.id,name:a.name,handleClick:e.handleItemClick,image:a.image,link:a.link,description:a.description})}))))}}]),t}(n.Component);t(37);var v=function(){return r.a.createElement("footer",{className:"footer green orange-text"},r.a.createElement("span",null,"ernestUrzua Portfolio 2020"),r.a.createElement("div",{className:"footer-icons"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/ernesturzua/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{href:"https://github.com/ErnestUrzua"},r.a.createElement("i",{className:"fa fa-github"}))))},E=(t(38),function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={Img:g},e.handleItemClick=function(a){var t=a.target.id;console.log("Clicked ID:"+t);var n=Object(m.a)({},e.state);e.setState(n),console.log("setting the newState")},e}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container p-2 col-12 white"},r.a.createElement("img",{className:"image",src:this.state.Img.assets[0].image}),r.a.createElement("div",{className:"container w-50 orange-text"},r.a.createElement("p",null,"My passion for creation first started in Animation and art. Through the process of creating I realized that designing, building, and iterating is something that is common amongst many disciplines, more specifically software development. This shared creation process has naturally led me to software development and its fascinating power. Joining both my passions of art and technology only expands my skill set to have a unique perspective on creation."))))}}]),t}(n.Component));t(39);var b=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};var y=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(b,null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{exact:!0,path:"/projects",component:k}),r.a.createElement(s.a,{exact:!0,path:"/about",component:E}),r.a.createElement(s.a,{path:"/resume",component:function(){return window.location="https://docs.google.com/document/d/1sw88-b4F8rUdlXCVsSD_dUfwirS9NjuOvVSu7f1WUTY/edit?usp=sharing"}})),r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.a570cca6.chunk.js.map