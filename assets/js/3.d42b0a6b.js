(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{306:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},307:function(t,e,n){var r=n(23),i="["+n(306)+"]",u=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(u,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},308:function(t,e,n){"use strict";var r=n(0),i=n(307).trim;r({target:"String",proto:!0,forced:n(310)("trim")},{trim:function(){return i(this)}})},310:function(t,e,n){var r=n(1),i=n(306);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},327:function(t,e,n){},355:function(t,e,n){"use strict";n(327)},361:function(t,e,n){"use strict";n.r(e);n(9),n(308),n(100);var r=n(61),i={data:function(){return{source:"",output:"",initialized:!1,api:null}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,import("https://tutara.dev/wasm/pkg/tutara_wasm.js");case 2:return n=e.sent,r=n.default,e.next=6,r();case 6:t.initialized=!0,t.api=n;case 8:case"end":return e.stop()}}),e)})))()},methods:{sample:function(){this.source="\nfun: Int add(a: Int, b: Int) {\n\treturn a + b\n}\n\nadd(1, 5)\n".trim(),this.run()},run:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.api.from_source(t.source).get_tokens(),t.output=JSON.stringify(n,null,"    ");case 2:case"end":return e.stop()}}),e)})))()}}},u=(n(355),n(42)),a=Object(u.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-container"},[t.initialized?n("div",{staticClass:"editor"},[n("form",{staticClass:"pane source",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.run(e)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.source,expression:"source"}],domProps:{value:t.source},on:{input:function(e){e.target.composing||(t.source=e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Run script")])]),t._v(" "),t.output?n("pre",{staticClass:"pane output"},[n("code",{domProps:{textContent:t._s(t.output)}})]):n("div",{staticClass:"pane output"},[t._v("\n\t\t\tType your code on the left side of this editor or "),n("a",{on:{click:t.sample}},[t._v("use a sample")]),t._v(" to get started.\n\t\t")])]):n("div",{staticClass:"loading"},[t._v("\n\t\tInitializing editor...\n\t")])])}),[],!1,null,"560e3b88",null);e.default=a.exports}}]);