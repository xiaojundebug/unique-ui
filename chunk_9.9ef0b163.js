(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(t,a,o){var e=o(146);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(3)(e,i);e.locals&&(t.exports=e.locals)},145:function(t,a,o){"use strict";var e=o(113);o.n(e).a},146:function(t,a,o){(t.exports=o(2)(!1)).push([t.i,".demo-modal .wrapper[data-v-3892a08c]{padding:0 1em}.demo-modal .modal-enter-active[data-v-3892a08c],.demo-modal .modal-leave-active[data-v-3892a08c]{-webkit-transition:opacity .45s,-webkit-transform .45s;transition:opacity .45s,-webkit-transform .45s;transition:opacity .45s,transform .45s;transition:opacity .45s,transform .45s,-webkit-transform .45s}.demo-modal .modal-enter[data-v-3892a08c]{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(2);transform:translate3d(-50%,-50%,0) scale(2)}.demo-modal .modal-leave-to[data-v-3892a08c]{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(1.5);transform:translate3d(-50%,-50%,0) scale(1.5)}",""])},22:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"demo-modal"},[o("demo-block",{attrs:{title:"不同风格"}},[o("div",{staticClass:"wrapper"},[o("i-button",{on:{click:function(a){return t.$modal.alert("Are you ok?",{title:"👽"})}}},[t._v("alert")]),t._v(" "),o("i-button",{on:{click:function(a){return t.$modal.confirm("大郎，起来喝药了",{title:"提示"})}}},[t._v("confirm")])],1)]),t._v(" "),o("demo-block",{attrs:{title:"异步关闭"}},[o("div",{staticClass:"wrapper"},[o("i-button",{on:{click:t.asyncClose}},[t._v("异步关闭")])],1)]),t._v(" "),o("demo-block",{attrs:{title:"组件调用"}},[o("div",{staticClass:"wrapper"},[o("i-button",{on:{click:function(a){t.show=!0}}},[t._v("组件调用")])],1)]),t._v(" "),o("i-modal",{staticStyle:{width:"66%"},attrs:{"close-on-click-overlay":"","confirm-text":"CLOSE","transition-name":"modal"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[o("img",{staticStyle:{display:"block",width:"100%"},attrs:{src:"https://xiaojun1994.top/images/avatar.jpg",alt:"avatar"}})])],1)};e._withStripped=!0;var i={data:function(){return{show:!1}},methods:{asyncClose:function(){this.$modal.alert("异步关闭",{title:"提示",autoClose:!1}).then(function(t){setTimeout(function(){t()},1e3)})}}},s=(o(145),o(0)),n=Object(s.a)(i,e,[],!1,null,"3892a08c",null);n.options.__file="packages/modal/demo/index.vue";a.default=n.exports}}]);