(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{233:function(t,n,e){var content=e(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(44).default)("e9022a92",content,!0,{sourceMap:!1})},243:function(t,n,e){"use strict";var r=e(6),o=e(244);r({target:"String",proto:!0,forced:e(245)("anchor")},{anchor:function(t){return o(this,"a","name",t)}})},244:function(t,n,e){var r=e(3),o=e(19),c=e(12),l=/"/g,d=r("".replace);t.exports=function(t,n,e,r){var f=c(o(t)),h="<"+n;return""!==e&&(h+=" "+e+'="'+d(c(r),l,"&quot;")+'"'),h+">"+f+"</"+n+">"}},245:function(t,n,e){var r=e(4);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},246:function(t,n,e){"use strict";e(233)},247:function(t,n,e){var r=e(43)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.navbar{\n  min-height:3.5rem;\n  z-index:50;\n  border-style:none;\n  -webkit-backdrop-filter:blur(12px);\n  backdrop-filter:blur(12px);\n  position:-webkit-sticky;\n  position:sticky;\n  top:0;\n  width:100%;\n  z-index:999;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.active{\n  --tw-text-opacity:1;\n  color:rgba(255, 192, 117, var(--tw-text-opacity))\n}\n.slide-in-from-y{\n  transition:slidenow 2s ease-in\n}\n@-webkit-keyframes slidenow{\n0%{\n    transform:translateY(-20px);\n    opacity:.1\n}\nto{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes slidenow{\n0%{\n    transform:translateY(-20px);\n    opacity:.1\n}\nto{\n    transform:translateY(0);\n    opacity:1\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},267:function(t,n,e){"use strict";e.r(n);e(29),e(176),e(243),e(20),e(36);var r={directives:{clickOutside:{bind:function(t,n){t.__ClickOutsideHandler__=function(e){t===e.target||t.contains(e.target)||n.value(e)},document.body.addEventListener("click",t.__ClickOutsideHandler__)},unbind:function(t){document.body.removeEventListener("click",t.__ClickOutsideHandler__)}}},data:function(){return{darkMode:!1,scrolled:!1,current:"#home",links:[{id:1,name:"Home",target:"#home"},{id:6,name:"About Us",target:"#aboutus"},{id:4,name:"Who are we",target:"#whoweare"},{id:2,name:"Our Services",target:"#services"},{id:3,name:"The Team",target:"#team"},{id:5,name:"Contact",target:"#contact"}],menuDropdownIsOpen:!1}},methods:{handleScroll:function(){this.scrolled=window.scrollY>200},removeHash:function(){this.$router.push(this.$route.path.split("#"))},addAciveLink:function(){var t=this,n=this.$refs.anchor;document.querySelectorAll("section").forEach((function(section){var n=section.offsetTop;scrollY>=n-60&&(t.current="#".concat(section.getAttribute("id")))})),n.forEach((function(link){link.$el.classList.contains(t.current)?link.$el.classList.add("active"):link.$el.classList.remove("active")}))},newActiveLink:function(){for(var t=this.$refs.anchor,n=document.querySelectorAll("section"),e=n.length;--e&&window.scrollY+50<n[e].offsetTop;);t.forEach((function(link){return link.$el.classList.remove("active")})),t[e].$el.classList.add("active")},closeDropDownMenu:function(){this.menuDropdownIsOpen=!1}},created:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("scroll",this.newActiveLink),this.removeHash()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.newActiveLink)}},o=(e(246),e(42)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navbar bg-primary",class:t.scrolled?"shadow-md":""},[e("div",{staticClass:"flex items-center h-full px-1 py-4 mx-auto max-w-7xl sm:px-3 lg:px-6"},[e("button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDownMenu,expression:"closeDropDownMenu"}],staticClass:"flex items-center justify-center w-12 h-12 text-gray-300 transition-colors duration-200 lg:hidden d-icon hover:text-cloud-lighter",on:{click:function(n){t.menuDropdownIsOpen=!t.menuDropdownIsOpen}}},[e("fa",{staticClass:"w-8 h-8 text-white fill-current fa-2x",attrs:{icon:"bars"}})],1),t._v(" "),e("div",{staticClass:"flex items-center justify-center flex-1 text-xl font-bold text-white logo lg:justify-start"},[e("nuxt-link",{staticClass:"tracking-widest uppercase",attrs:{to:"/#home"}},[t._v("\n        SBTCapital\n      ")])],1),t._v(" "),t._l(t.links,(function(link){return e("nav",{staticClass:"items-center hidden h-full gap-4 cursor-pointer lg:flex"},[e("nuxt-link",{ref:"anchor",refInFor:!0,staticClass:"px-2 py-1 text-lg font-medium tracking-wide",class:t.current==link.target?"active":"",attrs:{to:{path:"/",hash:""+link.target}}},[t._v("\n        "+t._s(link.name)+"\n      ")])],1)}))],2),t._v(" "),t.menuDropdownIsOpen?e("div",{staticClass:"absolute w-full lg:hidden"},[e("div",{staticClass:"px-8 text-black bg-white shadow-md nav-collapse collapsing"},t._l(t.links,(function(link){return e("div",{staticClass:"py-2"},[e("nuxt-link",{ref:"anchor2",refInFor:!0,staticClass:"p-3 font-semibold",attrs:{to:{path:"/",hash:""+link.target}},nativeOn:{click:function(n){t.menuDropdownIsOpen=!1}}},[t._v("\n          "+t._s(link.name)+"\n        ")])],1)})),0)]):t._e()])}),[],!1,null,null,null);n.default=component.exports}}]);