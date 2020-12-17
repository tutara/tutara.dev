(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{379:function(t,e,s){"use strict";s.r(e);var a=s(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" Modules")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Modules are still an early concept feature and are subject to change.")])]),t._v(" "),s("p",[t._v("Importing and exporting code works using modules. To define a file to be a\nmodule you specify the this in the file itself using the "),s("code",[t._v("mod")]),t._v(" keyword.")]),t._v(" "),s("p",[t._v("A module can only contain classes and functions in the top-level. Other code is\nnot allowed within a module and should be added inside functions or classes.")]),t._v(" "),s("p",[t._v("All members are exported since there is no concept of visibility in the language.")]),t._v(" "),s("div",{staticClass:"language-ttr extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Set the module name for this file\nmod math\n\nfun: Int add(a: Int, b: Int) {\n  return a + b\n}\n\nfun: Int subtract(a: Int, b: Int) {\n  return a - b\n}\n")])])]),s("p",[t._v("Using functions or classes from a module is done using the "),s("code",[t._v("use")]),t._v(" keyword.")]),t._v(" "),s("div",{staticClass:"language-ttr extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// Use the "add" function from the "math" module\nuse math.add\n\nval foo = add(12, 30)\n')])])]),s("p",[t._v("When using multiple members from the same module it's also possible to use a\nspecial syntax using curly brackets. This way multiple members can be used with\na single statement.")]),t._v(" "),s("div",{staticClass:"language-ttr extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// Use the "add" and "subtract" functions from the "math" module\nuse math.{add, subtract}\n\nval foo = add(12, 30)\nval bar = subtract(100, 58)\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);