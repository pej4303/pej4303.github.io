(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{4852:function(e){"use strict";e.exports=Object.assign},5928:function(e,t,n){const r=n(9576),{title:o,description:i,author:a,siteUrl:s,keywords:c,repo:l,socialLinks:u,gtag:d}=r;e.exports={pathPrefix:"/",siteMetadata:{title:o,description:i,author:a,siteUrl:s,keywords:c,repo:l,socialLinks:u,gtag:d},plugins:[{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",feeds:[{serialize:e=>{let{query:{site:t,allMarkdownRemark:n}}=e;return n.edges.map((e=>Object.assign({},e.node.frontmatter,{description:e.node.excerpt,date:e.node.frontmatter.date,url:t.siteMetadata.siteUrl+e.node.fields.slug,guid:t.siteMetadata.siteUrl+e.node.fields.slug,custom_elements:[{"content:encoded":e.node.html}]})))},query:"\n              {\n                allMarkdownRemark(\n                  sort: { fields: [frontmatter___date], order: DESC }\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields { slug }\n                      frontmatter {\n                        title\n                        date\n                      }\n                    }\n                  }\n                }\n              }\n            ",output:"/rss.xml",title:"RSS Feed",match:"^/blog/"}]}},{resolve:"gatsby-plugin-gtag",options:{trackingId:d}},"gatsby-plugin-sharp",{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images"},{resolve:"gatsby-remark-prismjs",options:{classPrefix:"language-"}},{resolve:"gatsby-remark-autolink-headers"}]}},{resolve:"gatsby-source-filesystem",options:{name:"content",path:"//contents/posts"}},{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-default",short_name:"starter",start_url:"/",background_color:"#663399",display:"minimal-ui",icon:"static/profile.png"}},"gatsby-plugin-styled-components","gatsby-plugin-react-helmet","gatsby-plugin-sitemap",{resolve:"gatsby-plugin-robots-txt",options:{host:s,sitemap:s+"/sitemap.xml",policy:[{userAgent:"*",allow:"/"}]}}]}},9576:function(e){e.exports={title:"보통사람",description:"Dev Note",author:"pej4303",siteUrl:"https://pej4303.github.io/",keywords:["Java","BackEnd","Blog"],repo:"pej4303/pej4303.github.io",gtag:"GTM-59BDNJNQ",socialLinks:{github:"https://github.com/pej4303",email:"pej4303@naver.com"}}},6678:function(e,t,n){"use strict";n.d(t,{Z:function(){return ee}});var r=n(7294),o=n(3133);const i=o.default.div.withConfig({displayName:"page-content__PageContentStyle",componentId:"sc-1fh0ejl-0"})(["padding-top:130px;max-width:700px;margin:0 auto;"]);var a=e=>{let{contents:t}=e;return r.createElement(i,null,t)},s=n(1883);const c=o.default.span.withConfig({displayName:"page-footer__Text",componentId:"sc-1eegvf3-0"})(["margin-right:5px;color:gray;"]),l=(0,o.default)(s.Link).withConfig({displayName:"page-footer__StyledLink",componentId:"sc-1eegvf3-1"})(["color:",";"],(e=>e.theme.post.content.text)),u=o.default.footer.withConfig({displayName:"page-footer__PageFooterWrapper",componentId:"sc-1eegvf3-2"})(["margin-top:120px;padding-bottom:60px;text-align:center;font-size:13.5px;color:gray;height:30px;position:relative;transform:translateY(-100%);"]);var d=()=>r.createElement(u,null,r.createElement(c,null,"Ⓒ 2024 pej4303, powered by "),r.createElement(l,{to:"https://github.com/msung99/Gatsby-Starter-Haon.git"},"Gatsby-Starter-Haon Theme (Open Source) ✍️")),p=n(7896),f=n(5928),m=n(8318),h=n(2091),g=n(8633),b=n(80),y=n(657);const v=o.default.div.withConfig({displayName:"theme-switch__DarkModeButtonWrapper",componentId:"sc-dlk7qu-0"})([""]),w=o.default.div.withConfig({displayName:"theme-switch__DarkModeButton",componentId:"sc-dlk7qu-1"})(["margin-top:30px;padding-right:80px;padding:10px;font-size:16px;transition:background-color 0.2s ease-in-out;border-radius:8px;background-color:",";&:hover{background-color:",";}@media (max-width:768px){margin-right:-3px;margin-left:-15px;margin-top:0;}@media (max-width:1300px){margin-right:-3px;margin-left:-15px;margin-top:0;&:hover{background-color:",";}}"],(e=>e.active?e.theme.menuBar.sideMenu:"transparent"),(e=>e.active?e.theme.menuBar.sideMenu:e.theme.menuBar.sideMenuHover),(e=>e.active?e.theme.menuBar.sideMenu:"transparent")),x=o.default.div.withConfig({displayName:"theme-switch__DarkModeIcon",componentId:"sc-dlk7qu-2"})(["color:",";@media (max-width:1300px){font-size:28px;}"],(e=>e.theme.main.text)),E=o.default.div.withConfig({displayName:"theme-switch__ButtonWrapper",componentId:"sc-dlk7qu-3"})(["display:flex;align-items:center;"]),k=o.default.p.withConfig({displayName:"theme-switch__ThemeText",componentId:"sc-dlk7qu-4"})(["margin-left:10px;margin-right:30px;font-size:15px;color:",";@media (max-width:1300px){display:none;}"],(e=>e.theme.main.text));var T=function(){const{0:e,1:t}=(0,r.useState)((0,y.F)("isDarkMode")),{0:n,1:o}=(0,r.useState)("undefined"!=typeof window&&window.innerWidth<=768);return(0,r.useEffect)((()=>{(0,y.Z)("isDarkMode",e),document.documentElement.setAttribute("data-theme",e?"dark":"light");const t=new Event("themeChange");window.dispatchEvent(t)}),[e]),(0,r.useEffect)((()=>{const e=()=>{"undefined"!=typeof window&&o(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),r.createElement(v,null,r.createElement(w,{onClick:()=>t((e=>!e))},r.createElement(E,null,r.createElement(x,{as:e?b.Dq:b.Wn6,fontSize:"32",isSmallScreen:"undefined"!=typeof window&&window.innerWidth<=1300}),!n&&r.createElement(k,null,e?"Dark":"Light"))))};const O=[{to:"/",icon:r.createElement(m.wB6,{className:"icon",size:"30"}),text:"Home"},{to:"/search",icon:r.createElement(m.eaK,{className:"icon",size:"30"}),text:"Search"},{to:"/tags",icon:r.createElement(m.JbM,{className:"icon",size:"30"}),text:"Tags"},{to:"/series",icon:r.createElement(h.Mp$,{className:"icon",size:"30"}),text:"Series"},{to:"/about",icon:r.createElement(g.rVC,{className:"icon",size:"30"}),text:"About"}],S=e=>{let{to:t,icon:n,text:o}=e;const i=(0,p.useLocation)(),a="/"===t?i.pathname===t:i.pathname.startsWith(t);return r.createElement(s.Link,{to:t,style:{textDecoration:"none"}},r.createElement(j,{active:a},n,r.createElement(A,null,o)))},C=o.default.div.withConfig({displayName:"aside__SideMenuBarStyle",componentId:"sc-1v3s0vh-0"})(["position:fixed;left:0;height:100%;max-width:210px;margin-left:30px;padding-right:10px;background:",";color:",";z-index:10;@media (max-width:1300px){display:none;}"],(e=>e.theme.menuBar.wrapper),(e=>e.theme.main.text)),j=o.default.div.withConfig({displayName:"aside__SideMenu",componentId:"sc-1v3s0vh-1"})(["margin-top:30px;margin-bottom:30px;padding:10px;color:",";font-size:16px;display:flex;align-items:center;transition:background-color 0.2s ease-in-out;border-radius:8px;background-color:",";&:hover{background-color:",";}"],(e=>e.theme.main.text),(e=>e.active?e.theme.menuBar.sideMenu:"transparent"),(e=>e.active?e.theme.menuBar.sideMenu:e.theme.menuBar.sideMenuHover)),A=o.default.p.withConfig({displayName:"aside__MenuText",componentId:"sc-1v3s0vh-2"})(["margin-left:10px;margin-right:30px;font-size:16px;"]),M=o.default.div.withConfig({displayName:"aside__Title",componentId:"sc-1v3s0vh-3"})(["font-size:32px;color:",';margin-top:30px;margin-left:5px;margin-bottom:40px;font-family:"Source Code Pro",sans-serif;font-weight:800;'],(e=>e.theme.main.text)),_=o.default.div.withConfig({displayName:"aside__SocialMenu",componentId:"sc-1v3s0vh-4"})(["display:flex;justify-content:center;margin-top:15px;padding-top:10px;padding-right:40px;padding-bottom:10px;transition:background-color 0.2s ease-in-out;border-radius:8px;&:hover{background-color:",";}"],(e=>e.active?e.theme.menuBar.sideMenu:e.theme.menuBar.sideMenuHover)),N=o.default.p.withConfig({displayName:"aside__SocialText",componentId:"sc-1v3s0vh-5"})(["font-size:15px;color:",";margin-left:7px;margin-top:10px;line-height:125%;"],(e=>e.theme.main.text)),L="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":f.siteMetadata.siteUrl,P=o.default.div.withConfig({displayName:"aside__SocialImage",componentId:"sc-1v3s0vh-6"})(["background-image:url(","/profile.png);width:38px;height:38px;border:1px solid transparent;border-color:white;background-size:cover;background-position:center;border-radius:50%;"],L);var I=()=>{const e=(0,p.useLocation)();return r.createElement(C,null,r.createElement(s.Link,{to:"/",style:{textDecoration:"none"}},r.createElement(M,null,f.siteMetadata.title)),r.createElement("div",null,O.slice(0,1).map(((t,n)=>r.createElement(S,Object.assign({key:n},t,{active:e.pathname===t.to})))),r.createElement(T,null),O.slice(1).map(((t,n)=>r.createElement(S,Object.assign({key:n},t,{active:e.pathname===t.to}))))),r.createElement(s.Link,{to:"/community",style:{textDecoration:"none"}},r.createElement(_,null,r.createElement(P,null),r.createElement(N,null,f.siteMetadata.author," / Social"))))};const z=[{to:"/search",icon:r.createElement(m.eaK,{className:"icon",size:"23"}),text:"Search"},{to:"/tags",icon:r.createElement(m.JbM,{className:"icon",size:"23"}),text:"Tags"},{to:"/series",icon:r.createElement(h.Mp$,{className:"icon",size:"23"}),text:"Series"},{to:"/about",icon:r.createElement(g.rVC,{className:"icon",size:"23"}),text:"About"},{to:"/community",icon:r.createElement(h.diV,{className:"icon",size:"23"}),text:"Community"}],q=e=>{let{to:t,icon:n,text:o}=e;const i=(0,p.useLocation)(),a="/"===t?i.pathname===t:i.pathname.startsWith(t);return r.createElement(s.Link,{to:t,style:{textDecoration:"none"}},r.createElement(F,{active:a},n))},B=o.default.header.withConfig({displayName:"header__Title",componentId:"sc-1uzaex0-0"})(["font-size:24px;color:",";font-weight:bold;margin-left:20px;padding-top:10px;padding-bottom:10px;"],(e=>e.theme.main.text)),D=o.default.div.withConfig({displayName:"header__NavigatorWrapper",componentId:"sc-1uzaex0-1"})(["position:fixed;display:flex;justify-content:space-between;align-items:center;border-bottom:2.5px solid ",";width:100%;background-color:",";z-index:1000;@media(max-width:768px){left:0px;}"],(e=>e.theme.menuBar.border),(e=>e.theme.menuBar.wrapper)),H=o.default.div.withConfig({displayName:"header__MenuContainer",componentId:"sc-1uzaex0-2"})(["display:flex;margin-right:20px;max-width:42%;align-items:center;"]),F=o.default.span.withConfig({displayName:"header__SideMenu",componentId:"sc-1uzaex0-3"})(["margin-right:13px;color:",";transition:background-color 0.2s ease-in-out;"],(e=>e.theme.main.text));var R=()=>{const e=(0,p.useLocation)();return r.createElement(D,null,r.createElement(s.Link,{style:{textDecoration:"none"},to:"/"},r.createElement(B,null,f.siteMetadata.title)),r.createElement(H,null,z.slice(0,1).map(((t,n)=>r.createElement(q,Object.assign({key:n},t,{active:e.pathname===t.to})))),r.createElement(T,null),z.slice(1).map(((t,n)=>r.createElement(q,Object.assign({key:n},t,{active:e.pathname===t.to}))))))};(0,o.keyframes)(["from{transform:translateX(-100%);}to{transform:translateX(0);}"]),(0,o.keyframes)(["from{transform:translateX(0);}to{transform:translateX(-100%);}"]);const U=o.default.div.withConfig({displayName:"page-navigator__SideMenuBarWrapper",componentId:"sc-152srn3-0"})(["position:fixed;top:0;left:0;width:300px;height:100%;background:",";padding-top:60px;transform:translateX(",");transition:transform 0.7s ease-in-out;z-index:10;"],(e=>e.theme.menuBar.wrapper),(e=>{let{show:t}=e;return t?"0":"-100%"}));var W=()=>{const{0:e,1:t}=(0,r.useState)(!0),{0:n,1:o}=(0,r.useState)(!0),{0:i,1:a}=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=()=>{t(window.innerWidth<1300)},n=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;o(!(e>i)),a(e<=0?0:e)};return e(),window.addEventListener("resize",e),window.addEventListener("scroll",n),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",n)}}),[i]),r.createElement(r.Fragment,null,e?r.createElement(R,null):r.createElement(U,{show:n},r.createElement(I,null)))};const Y={main:{background:"#fff",text:"#000",icon:"#868e97",border:"#E2E2E2"},menuBar:{wrapper:"#FAFAFA",sideMenu:"#eef2f3",sideMenuHover:"#eef2f3",border:"#E2E2E2"},profile:{description:"black",keyword:"#f3f3f3"},tag:{title:"black",text:"#212529",count:"#878f98",background:"#f7f6f2",circle:"gray",hover:"#dcd9c6"},postlist:{date:"#899097",text:"black",tag:"#626262",border:"#f3f3f3",pagnigation:"#f1f3f5"},post:{copystatus:{bg:"#eef2f3",text:"black"},series:"#f7f6f2",toc:{a:"#666",hover:"black"},content:{highlight:{bg:"#F7F9FA",text:"#f7f6f2"},text:"black",blockquote:{body:"#f7f6f2",left:"#c0c0c0",text:"black"},hr:"#eef2f3",language:{bg:"#f7f6f2",text:"black"},a:"dimgray",li:"black"},footer:{button:"#f7f6f2",hover:"#f1f0eb"}},utterances:"github-light",search:{input:{bottom:"#A9A9A9",bg:"#eef2f3"},underline:"#c3cad1"},emoji:"#444",serieslist:{bg:"#f1f3f5",descriptionBg:"#fff",title:"#444",date:"#888"}},K={main:{background:"#1a1a1a",text:"white",border:"#282828"},menuBar:{wrapper:"#1e1e1e",sideMenu:"#1e1e1e",sideMenuHover:"#282828",border:"#282828"},profile:{description:"#bababa",keyword:"#484848"},tag:{title:"gray",text:"#cdd4d9",count:"gray",background:"#3C3A39",circle:"white",hover:"#555"},postlist:{text:"#cdd4d9",date:"#cdd4d9",border:"#282828",tag:"#cdd4d9",pagnigation:"#484848"},post:{copystatus:{bg:"gray",text:"white"},series:"#3C3A39",toc:{a:"#a0a0a0",hover:"#e8e8e8"},content:{highlight:{bg:"#202020",text:"#2d2d2d"},text:"#e8e8e8",blockquote:{body:"#212121",left:"#606060",text:"#e6e6e6"},hr:"#282828",language:{bg:"#202020",text:"#e6e6e6"},a:"#c9c9ca",li:"white"},footer:{button:"#3c3a39",hover:"#555555"}},utterances:"github-dark",search:{input:{bottom:"##888888",bg:"#333"},underline:"white"},emoji:"#E2E2E2",serieslist:{bg:"#222222",descriptionBg:"linear-gradient(180deg, #1e1e1e, #292929)",date:"#a1a6b0",title:"white"}};var J,V,G=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},X=(0,o.css)(J||(J=G(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),Z=((0,o.createGlobalStyle)(V||(V=G(["",""],["",""])),X),X);var $=(0,o.createGlobalStyle)([""," html,body{width:100%;height:100%;margin:0;padding:0;font-family:'Noto Sans KR',sans-serif;background:",";}#___gatsby,#gatsby-focus-wrapper{height:100%;}"],Z,(e=>e.theme.main.background));const Q=o.default.div.withConfig({displayName:"page-component__PageWrapper",componentId:"sc-1647kqj-0"})(["@media(max-width:768px){padding:0 10px;}height:auto;min-height:100%;margin-bottom:70px;"]);var ee=e=>{let{children:t}=e;const{0:n,1:i}=(0,r.useState)((0,y.F)("isDarkMode")?K:Y);return(0,r.useEffect)((()=>{i((0,y.F)("isDarkMode")?K:Y);const e=()=>{i((0,y.F)("isDarkMode")?K:Y)};return window.addEventListener("theme",e),()=>{window.removeEventListener("theme",e)}}),[]),r.createElement(o.ThemeProvider,{theme:n},r.createElement($,null),r.createElement(Q,null,r.createElement(W,null),r.createElement(a,{contents:t})),r.createElement(d,null))}},4839:function(e,t,n){"use strict";n.d(t,{Z:function(){return he}});var r,o,i,a,s=n(7294),c=n(5928),l=n(5697),u=n.n(l),d=n(3524),p=n.n(d),f=n(9590),m=n.n(f),h=n(4852),g=n.n(h),b="bodyAttributes",y="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",k="href",T="http-equiv",O="innerHTML",S="itemprop",C="name",j="property",A="rel",M="src",_="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",P="defer",I="encodeSpecialCharacters",z="onChangeClientState",q="titleTemplate",B=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],H="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Z(e,w.TITLE),n=Z(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,L);return t||r||void 0},J=function(e){return Z(e,z)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||n===A&&"canonical"===e[n].toLowerCase()||c===A&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==O&&s!==E&&s!==S||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=g()({},r[s],o[s]);r[s]=c}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),Q=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:n.g.cancelAnimationFrame||Q,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;se(w.BODY,r),se(w.HTML,o),ae(d,p);var f={baseTag:ce(w.BASE,n),linkTags:ce(w.LINK,i),metaTags:ce(w.META,a),noscriptTags:ce(w.NOSCRIPT,s),scriptTags:ce(w.SCRIPT,l),styleTags:ce(w.STYLE,u)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),c(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+H+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(H,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=ue(n,r),[s.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ie(t);return o?"<"+e+" "+H+'="true" '+o+">"+Y(i,r)+"</"+e+">":"<"+e+" "+H+'="true">'+Y(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case y:return{toComponent:function(){return ue(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===O||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+" "+H+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(y,o,r),link:de(w.LINK,i,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,s,r),script:de(w.SCRIPT,c,r),style:de(w.STYLE,l,r),title:de(w.TITLE,{title:d,titleAttributes:p},r)}},fe=p()((function(e){return{baseTag:G([k,_],e),bodyAttributes:V(b,e),defer:Z(e,P),encode:Z(e,I),htmlAttributes:V(y,e),linkTags:X(w.LINK,[A,k],e),metaTags:X(w.META,[C,x,T,j,S],e),noscriptTags:X(w.NOSCRIPT,[O],e),onChangeClientState:J(e),scriptTags:X(w.SCRIPT,[M,O],e),styleTags:X(w.STYLE,[E],e),title:K(e),titleAttributes:V(v,e)}}),(function(e){re&&te(re),e.defer?re=ee((function(){oe(e,(function(){re=null}))})):(oe(e),re=null)}),pe)((function(){return null})),me=(o=fe,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case w.BODY:return U({},o,{bodyAttributes:U({},i)});case w.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(W(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(o,r)},R(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var he=e=>{let{title:t,description:n}=e;const r=c.siteMetadata.siteUrl+"/og-image.png",o=n||c.siteMetadata.description;return s.createElement(me,{htmlAttributes:{lang:"en"},title:t,defaultTitle:c.siteMetadata.title,meta:[{property:"og:title",content:t},{property:"og:site_title",content:t},{name:"description",content:o},{property:"og:description",content:o},{property:"og:author",content:c.siteMetadata.author.name},{property:"og:image",content:r},{property:"og:type",content:"website"}]})}},657:function(e,t,n){"use strict";function r(e){if("undefined"!=typeof window)return JSON.parse(window.localStorage.getItem(e))}function o(e,t){"undefined"!=typeof window&&(window.localStorage.setItem(e,JSON.stringify(t)),"isDarkMode"===e&&window.dispatchEvent(new Event("theme")))}n.d(t,{F:function(){return r},Z:function(){return o}})},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",s),d}}},3621:function(e,t,n){"use strict";n.d(t,{w_:function(){return f}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=["attr","size","title"];function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return e&&e.map(((e,t)=>r.createElement(e.tag,u({key:t},e.attr),p(e.child))))}function f(e){return t=>r.createElement(m,c({attr:u({},e.attr)},t),p(e.child))}function m(e){var t=t=>{var n,{attr:o,size:i,title:l}=e,d=s(e,a),p=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,d,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(e=>t(e))):t(o)}}}]);
//# sourceMappingURL=commons-2f90f35ebb61e8980668.js.map