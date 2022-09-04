"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[903],{5991:function(e,t,n){n.d(t,{Z:function(){return x}});var i=n(7294),o=n(3494),a=n(1597),r=o.default.div.withConfig({displayName:"Navbar__Wrapper",componentId:"sc-h4wduu-0"})(['.navigation{width:100%;padding:5px;z-index:5;background-color:#181f24;display:flex;flex-direction:row;justify-content:center;height:7%;min-height:65px;max-height:69px;overflow-x:hidden;}.container{display:flex;flex-flow:row nowrap;justify-content:space-between;min-width:1150px;}.nav-group{display:flex;gap:40px;}.nav-item{margin-top:15px;margin-bottom:15px;display:flex;align-self:center;font-size:20px;}a{color:white;font-family:"Yantramanav",sans-serif;text-decoration:underline;text-decoration-color:#181f24;text-underline-offset:5px;text-decoration-thickness:4px;font-weight:600;line-height:28px;margin-left:3px;margin-right:10px;}span{color:white;}#mini_main_link{display:none;font-size:28px;font-weight:800;color:white;margin-left:20px;margin-right:0px;&:hover{color:#ffa500;}&:after{}&:active{font-weight:800;}}#main_link{font-size:28px;font-weight:800;color:white;margin-left:20px;margin-right:400px;&:hover{color:#ffa500;}&:after{}&:active{font-weight:800;}}#projects_icon{margin-right:1px;}#about_me_link{color:white;text-decoration-color:#181f24;margin-left:4px;}#about_icon{line-height:25px;margin-right:-1px;color:white;margin-right:0px;}#about_nav{transition:all 1s;padding-right:0px;&:hover{}&:hover #about_icon_before{display:inline;}&:hover #about_icon_after{}&:hover #about_me_link{color:white;text-decoration-color:#ffa500;text-underline-offset:5px;text-decoration-thickness:4px;}}#github_link{margin-right:30px;}@media only screen and (max-width:1150px){.container{max-width:none;min-width:100px;width:100%;margin-right:0;padding-right:0;}}@media only screen and (max-width:970px){#main_link{margin-right:40px;}}@media only screen and (max-width:680px){a{font-size:18px;}#about_me_link{font-size:18px;}#projects_link{font-size:18px;}}@media only screen and (max-width:620px){.nav-group{gap:5px;}}@media only screen and (max-width:620px){.material-icons{display:none;}}@media only screen and (max-width:480px){#main_link{display:none;}#mini_main_link{display:flex;}}@media only screen and (max-width:370px){#about_me_link{font-size:15px;}#projects_link{font-size:15px;}a{font-size:15px;}}']),l=(0,o.default)((function(e){return i.createElement(a.rU,e)})).withConfig({displayName:"Navbar__StyledLink",componentId:"sc-h4wduu-1"})(["color:#bebebe;text-decoration:underline;text-decoration-color:#181f24;text-underline-offset:5px;text-decoration-thickness:4px;font-weight:600;@media only screen and (max-width:600px){font-size:15px;}@media only screen and (max-width:400px){font-size:11px;margin-left:0px;}"]),c=(0,o.default)((function(e){return i.createElement(a.rU,e)})).withConfig({displayName:"Navbar__StyledMainLink",componentId:"sc-h4wduu-2"})(["font-size:22px;color:white;"]),s=function(){var e=window.location.pathname.split("/")[1];function t(){var t=document.getElementById("about_icon"),n=document.getElementById("about_me_link");"import_contacts"==t.textContent||"resume"===e?(t.textContent="auto_stories",t.style.color="#FFA500",n.style.color="#FFA500",n.style.textDecoration="underline",n.style.textDecorationColor="#FFA500",n.style.textUnderlineOffset="5px",n.style.textDecorationThickness="4px"):(t.textContent="import_contacts",t.style.color="white",n.style.color="white",n.style.textDecoration="none")}function n(){var t=document.getElementById("projects_icon"),n=document.getElementById("projects_link");"terminal"==t.textContent||"projects"===e?(t.textContent="data_object",t.style.color="#FFA500",n.style.color="#FFA500",n.style.textDecorationColor="#FFA500",n.style.textUnderlineOffset="5px",n.style.textDecorationThickness="4px"):(t.textContent="terminal",t.style.color="white",n.style.color="white",n.style.textDecorationColor="#181f24")}function o(){var e=document.getElementById("github_icon"),t=document.getElementById("github_link");"tv"==e.textContent?(e.textContent="display_settings",e.style.color="#FFA500",t.style.color="#FFA500",t.style.textDecorationColor="#FFA500",t.style.textUnderlineOffset="5px",t.style.textDecorationThickness="4px"):(e.textContent="tv",e.style.color="white",t.style.color="white",t.style.textDecorationColor="#181f24")}return i.createElement(r,null,i.createElement("section",{className:"navigation"},i.createElement("div",{className:"container"},i.createElement("div",{className:"nav-group"},i.createElement("div",{className:"nav-item"},i.createElement(c,{id:"main_link",to:"/"},"Anser Ghazi"),i.createElement(c,{id:"mini_main_link",to:"/"},"AG"))),i.createElement("div",{className:"nav-group"},i.createElement("div",{className:"nav-item",id:"about_nav"},i.createElement("span",{class:"material-icons",id:"about_icon",onMouseOver:function(){return t()},onMouseLeave:function(){return t()}},"import_contacts"),i.createElement(l,{to:"/resume",id:"about_me_link",onMouseOver:function(){return t()},onMouseLeave:function(){return t()}},"Resume")),i.createElement("div",{className:"nav-item",id:"projects_nav"},i.createElement("span",{class:"material-icons",id:"projects_icon",onMouseOver:function(){return n()},onMouseLeave:function(){return n()}},"terminal"),i.createElement(l,{to:"/projects",id:"projects_link",onMouseOver:function(){return n()},onMouseLeave:function(){return n()}},"Projects")),i.createElement("div",{className:"nav-item",id:"github_nav"},i.createElement("span",{class:"material-icons",id:"github_icon",onMouseOver:function(){return o()},onMouseLeave:function(){return o()}},"tv"),i.createElement("a",{href:"https://github.com/anserghazi",target:"_blank",rel:"noreferrer",id:"github_link",onMouseOver:function(){return o()},onMouseLeave:function(){return o()}},"GitHub"))))))},m=o.default.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1i3zltk-0"})(["padding-top:65px;width:100%;background-color:#1e282e;z-index:1;display:flex;flex-flow:column nowrap;overflow:hidden;overflow-x:hidden;"]),p=o.default.div.withConfig({displayName:"Layout__Content",componentId:"sc-1i3zltk-1"})(["position:relative;overflow:hidden;"]),d=o.default.div.withConfig({displayName:"Layout__Footer",componentId:"sc-1i3zltk-2"})(['margin-top:80px;position:relative;width:99%;display:flex;flex-flow:row nowrap;justify-content:center;height:9vh;ul{display:flex;flex-flow:row nowrap;gap:100px;padding-left:0px;}li{display:flex;height:30px;}a,li{color:#bebebe;text-decoration:none;font-family:"Noto Sans",sans-serif;}a:hover{text-decoration:underline;}@media only screen and (max-width:520px){min-height:950px;}@media only screen and (max-width:500px){ul{gap:30px;}}']),x=function(e){var t=e.children;return i.createElement(i.Fragment,null,i.createElement(s,null),i.createElement(m,null,i.createElement(p,null,t),i.createElement(d,null,i.createElement("div",null),i.createElement("ul",null,i.createElement("li",null,"Anser Ghazi"),i.createElement("li",null,i.createElement("a",{href:"https://github.com/anserghazi",target:"_blank",rel:"noreferrer"},"Github")),i.createElement("li",null,i.createElement("a",{href:"https://www.gatsbyjs.com/",target:"_blank",rel:"noreferrer"},"Gatsby"))),i.createElement("div",null))))}},9023:function(e,t,n){n.r(t);var i=n(7294),o=n(3494),a=n(5991),r=o.default.div.withConfig({displayName:"resume__Wrapper",componentId:"sc-jy0cxr-0"})(['margin-top:7px;margin-bottom:200px;min-height:1000px;.section{display:flex;flex-flow:row nowrap;justify-content:center;height:100vh;}.content{display:flex;flex-flow:row nowrap;justify-content:space-evenly;width:100vh;gap:25px;height:100vh;}.header{display:flex;flex-flow:column nowrap;flex-grow:1;flex-basis:0;align-items:flex-start;}.welcome{display:inline;margin-bottom:18px;}.welcome span{color:white;gap:20px;font-size:40px;margin-left:10px;}h1{font-family:"Yantramanav",sans-serif;font-size:60px;font-weight:700;color:white;display:inline;}p{font-family:"Yantramanav",sans-serif;font-size:20px;font-weight:500;color:#bebebe;margin:0px 0px 0px 0px;}.bottom_header{margin-top:50px;}button{display:flex;padding:15px 25px;justify-content:center;cursor:pointer;outline:none;color:#fff;background-color:#569c59;border:none;border-radius:15px;box-shadow:0 9px #404a50;margin-top:40px;width:80%;font-family:"Yantramanav",sans-serif;font-size:25px;font-weight:700;color:white;margin-left:38px;}button:hover{background-color:#3e8e41;}button:active{background-color:#3e8e41;box-shadow:0 5px #181f24;transform:translateY(4px);}.intro{font-weight:600;}iframe{width:95%;min-width:100px;max-width:1110px;border:none;height:20vh;}@media only screen and (max-height:2200px){}@media only screen and (max-width:1100px){.content{min-width:700px;max-width:918px;}iframe{height:1300px;}}@media only screen and (max-width:950px){.content{min-width:100px;max-width:800px;margin-left:65px;margin-right:65px;}iframe{min-height:1100px;}}@media only screen and (max-width:760px){height:1100px;.content{margin-left:30px;margin-right:30px;}iframe{min-height:900px;}}@media only screen and (max-width:670px){iframe{max-height:20px;}}@media only screen and (max-width:520px){height:950px;}@media only screen and (max-width:420px){iframe{min-height:520px;}}@media only screen and (max-width:350px){.content{margin-left:15px;margin-right:15px;}h1{font-size:22px;}iframe{min-height:420px;}}@media only screen and (max-width:315px){iframe{min-height:380px;}}']);t.default=function(){return i.createElement(a.Z,null,i.createElement(r,null,i.createElement("div",{class:"section"},i.createElement("iframe",{src:"https://drive.google.com/file/d/1CpWLn5SGxUwa9xDt-bOeWTiBLEIXJjkW/preview",allow:"autoplay"}))))}}}]);
//# sourceMappingURL=component---src-pages-resume-js-e31ff459d030e7370a35.js.map