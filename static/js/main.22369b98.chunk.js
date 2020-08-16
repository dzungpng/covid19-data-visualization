(this["webpackJsonpcovid19-data-visualization"]=this["webpackJsonpcovid19-data-visualization"]||[]).push([[0],{1:function(e,t){e.exports=Cesium},31:function(e,t,a){e.exports=a.p+"static/media/subtitle2.94c01f5d.gif"},33:function(e,t,a){e.exports=a.p+"static/media/small_data_total.089871b8.czml"},34:function(e,t,a){e.exports=a.p+"static/media/small_data_deaths.6f3bf9a1.czml"},35:function(e,t,a){e.exports=a.p+"static/media/small_data_total_pm.b443d2fd.czml"},36:function(e,t,a){e.exports=a.p+"static/media/small_data_deaths_pm.47a78e28.czml"},39:function(e,t,a){e.exports=a(96)},44:function(e,t,a){},45:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),r=a.n(o),i=(a(44),a(45),a(18)),c=a(6),s=a(13),m=a(21),u=a(29),h=a.n(u),d=a(30),p=a.n(d),E=a(16),f=a.n(E),b=a(19),g=a.n(b),w=a(31),C=a.n(w),y=a(98);function v(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1];return l.a.createElement("div",null,l.a.createElement(h.a,{className:"main-background",size:"fullheight"},l.a.createElement(f.a,{"data-tip":!0,"data-for":"helpTip",style:{marginTop:"4%",marginLeft:"4%",maxWidth:"5%"},className:"is-transparent-more is-text",onClick:function(){return o(!0)}},l.a.createElement(y.a,{size:32,color:"white"})),l.a.createElement(m.a,{id:"helpTip",place:"bottom",effect:"solid"},"About the App"),l.a.createElement(p.a,{style:{marginTop:"2%",marginLeft:"18%"}},l.a.createElement("h1",{style:{color:"white"},className:"large"},"COVID-19 ",l.a.createElement("br",null)," 3D Data Exploration"),l.a.createElement("img",{src:C.a,style:{width:"50%",height:"auto",marginTop:"-5%",marginLeft:"-3%"},alt:""}),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/visualization",style:{textDecoration:"none"}},l.a.createElement(f.a,{className:"is-info is-rounded",style:{marginTop:"5%",width:"200px"}},"Explore the Data")))),l.a.createElement(g.a,{show:a,onClose:function(){return o(!1)},closeOnBlur:!0},l.a.createElement(g.a.Content,{style:{color:"white"}},l.a.createElement("h1",null,"ABOUT THE PROJECT"),l.a.createElement("h2",null,"3D Data Visualization"),l.a.createElement("p",null,"Currently there are numerous websites and tools used to visualize COVID-19 data. However, there are few of which utilize 3D graphics. The goal of this project is to show the power of 3D data visualization and the unique way it can tell the story of the COVID-19 pademic. While viewing the data, users are able to interact with the data and the world itself. There is a component of time, which enhances the way the data is displayed."),l.a.createElement("h2",null,"Technologies Used"),l.a.createElement("p",null,l.a.createElement("b",null,"CesiumJS: ")," Cesium is a powerful open-source Javascript library for creating world-class, high-performant 3D maps. The base of the project utilizes this tool, which enables for a unique data format called czml to show time-dependent geospatial data."),l.a.createElement("p",null,l.a.createElement("b",null,"ReactJS: ")," The frontend of the project is done entirely in React with Bulma as the CSS framework."))))}var T=a(15),I=a(1),k=a(33),O=a.n(k),x=a(34),z=a.n(x),j=a(35),N=a.n(j),S=a(36),D=a.n(S),L=a(99),W=a(37),A=a.n(W),J=a(22),V=a.n(J),B=a(8),M=new I.BingMapsImageryProvider({url:"https://dev.virtualearth.net",key:"AtkUCHCo7VoFWFINVJ2Yd90ZEoN7hyDLUcKzWincgVydCTMJuyjnc7sJ2feGoZOU",mapStyle:I.BingMapsStyle.AERIAL_WITH_LABELS});function U(){I.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYWZkZjRjZi0wYWVlLTRmYmUtOWNkOC0zNGUyOGE4ZWM4YzIiLCJpZCI6Mzg1MCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTUzOTA2MTIyOH0.Nu7vAd57CwhRNnAi3L8Q0CABXfkOlzhaVqfiRXK3i-c";var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),c=Object(s.a)(r,2),u=c[0],h=c[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),E=p[0],b=p[1],w=Object(n.useState)(!1),C=Object(s.a)(w,2),v=C[0],k=C[1],x=Object(n.useState)(35),j=Object(s.a)(x,2),S=j[0],W=j[1],J=Object(n.useState)(104),U=Object(s.a)(J,2),_=U[0],F=U[1],R=Object(n.useState)(!0),G=Object(s.a)(R,2),P=G[0],H=G[1];return l.a.createElement("div",null,l.a.createElement(i.b,{to:"/"},l.a.createElement(f.a,{"data-tip":!0,"data-for":"home",style:{marginTop:"4%",marginLeft:"4%",maxWidth:"5%",position:"absolute",zIndex:3},className:"is-transparent-more is-text"},l.a.createElement(L.a,{size:32,color:"white"})),l.a.createElement(m.a,{id:"home",place:"bottom",effect:"solid"},"Go Back")),l.a.createElement(g.a,{show:P,onClose:function(){return H(!1)},closeOnBlur:!0},l.a.createElement(g.a.Content,{style:{color:"white",width:"70%"}},l.a.createElement("h1",null,"NAVIGATING THE APP UI"),l.a.createElement("h2",null,"Cesium Widgets"),l.a.createElement("h3",null,"Navigation tools:"),"Location - Topright corner",l.a.createElement("br",null),'Functions - Tips on how to navigate the globe, zoom in and out, global zoom, "fly" to a specific location on the map.',l.a.createElement("br",null),l.a.createElement("h3",null,"Timeline tools:"),"Location - Bottom of screen",l.a.createElement("br",null),"Functions - Play/pause button for animation, timeline slider, adjusting animation speed.",l.a.createElement("br",null),l.a.createElement("h2",null,"Custom Toolbar"),"Show/hide certain types of data, fly to a location with known latitude and longitude, legends.",l.a.createElement("h1",null,"INSTRUCTIONS TO GET STARTED"),"Feel free to explore the data in whichever way you would like, but here is a suggestion for starting:",l.a.createElement("br",null),"1. Click to show/hide the dataset that interests you in the Custom Toolbar.",l.a.createElement("br",null),"2. Press the Play |>| button at the bottom left corner of the screen to start the animation. ",l.a.createElement("br",null),"3. Watch as the data begins to show up over time on the global. Use your mouse controls to pan around (for mouse control tips, click on the question mark at the top right corner of the screen). 4. Click on the circles to learn more about its prepresented country's COVID-19 situation.")),l.a.createElement(A.a,{className:"is-transparent",style:{width:"20%",color:"white",top:"350px",left:"75%",zIndex:2,position:"relative"}},l.a.createElement(f.a,{"data-tip":!0,"data-for":"help",className:"is-transparent-more is-text",style:{marginTop:"1%",marginLeft:"80%",maxWidth:"40%"},onClick:function(){return H(!0)}},l.a.createElement(y.a,{size:28,color:"black"})),l.a.createElement(m.a,{id:"help",place:"top",effect:"solid"},"Instructions"),l.a.createElement(B.Field,null,l.a.createElement(B.Label,null,"Show/Hide Data"),l.a.createElement(B.Control,null,l.a.createElement(B.Checkbox,{name:"totalCases",onChange:function(e){return o(e.target.checked)},checked:a},"Total Cases"),l.a.createElement("br",null),l.a.createElement(B.Checkbox,{name:"totalDeaths",onChange:function(e){return h(e.target.checked)},checked:u},"Total Deaths"))),l.a.createElement(B.Field,null,l.a.createElement(B.Control,null,l.a.createElement(B.Checkbox,{name:"totalCasesPM",onChange:function(e){return b(e.target.checked)},checked:E},"Total Cases/Million"),l.a.createElement("br",null),l.a.createElement(B.Checkbox,{name:"totalDeaths",onChange:function(e){return k(e.target.checked)},checked:v},"Total Deaths/Million"))),l.a.createElement(B.Field,null,l.a.createElement(B.Label,null,"Custom Location"),l.a.createElement(V.a,null,l.a.createElement(V.a.Column,null,l.a.createElement(B.Control,null,l.a.createElement(B.Input,{placeholder:"Latitude (ex. 70)",style:{maxWidth:"90%"},value:S,onChange:function(e){return t=parseFloat(e.target.value),void(isNaN(t)?W(0):W(t));var t}}))),l.a.createElement(V.a.Column,null,l.a.createElement(B.Control,null,l.a.createElement(B.Input,{placeholder:"Longitude (ex. 20)",style:{maxWidth:"90%"},value:_,onChange:function(e){return t=parseFloat(e.target.value),void(isNaN(t)?F(0):F(t));var t}}))))),l.a.createElement(B.Label,{style:{marginTop:"3%"}},"Legend (# of People)"),l.a.createElement("div",{className:"gradient"}),l.a.createElement("p",{style:{wordSpacing:"40px"}},"50 200 2000 3000+")),l.a.createElement(T.d,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1}},l.a.createElement(T.c,{imageryProvider:M}),l.a.createElement(T.b,{data:O.a,show:a}),l.a.createElement(T.b,{data:z.a,show:u}),l.a.createElement(T.b,{data:N.a,show:E}),l.a.createElement(T.b,{data:D.a,show:v}),l.a.createElement(T.a,{duration:5,destination:I.Cartesian3.fromDegrees(_,S,6e6)})))}var _=function(){return l.a.createElement("div",null,l.a.createElement(i.a,{basename:window.location.pathname||""},l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",exact:!0,component:v}),l.a.createElement(c.a,{path:"/visualization",exact:!0,component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.22369b98.chunk.js.map