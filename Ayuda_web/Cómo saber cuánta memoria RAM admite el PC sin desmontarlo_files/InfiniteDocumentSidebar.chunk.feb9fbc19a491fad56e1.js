(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{84:function(e,t,s){"use strict";s.r(t);var i={components:{SidebarBlocks:s(48).a},props:["post","isDesktop","sidebar"],mounted:function(){var e=document.getElementsByClassName("twitter-tweet");if(e.length>0)for(var t=0;t<e.length;t++){var s=document.createElement("div");s.className="embed-containers",e[t].parentNode.insertBefore(s,e[t]),s.appendChild(e[t])}},computed:{sidebarGroups:function(){var e=0;return void 0!==this.sidebar&&this.sidebar.length>0&&(e=this.sidebar[0].sidebars),e},related:function(){var e=this.post._embedded.related;return e}}},r=s(0),a=Object(r.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return this.sidebarGroups.length>0?t("sidebar-blocks",{staticClass:"aside",attrs:{position:"post",related:this.related,isDesktop:this.isDesktop,sidebarGroups:this.sidebarGroups,post:this.post}}):this._e()}),[],!1,null,null,null);t.default=a.exports}}]);