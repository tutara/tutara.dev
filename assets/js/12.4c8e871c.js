(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{376:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),n("p",[t._v("Functions are used for encapsulating specific behavior in a program te be reused with given parameters. Functions are described by the "),n("code",[t._v("fun")]),t._v(" keyword. They return a value with the "),n("code",[t._v("return")]),t._v(" keyword which takes an expression as right-hand. Everything after a return is considered unreachable code.")]),t._v(" "),n("p",[t._v("To specify the returned type of a function a semicolon ("),n("code",[t._v(":")]),t._v(") is written after the "),n("code",[t._v("fun")]),t._v(" keyword. After this a identifier is required to set the name of the function. Functions can receive parameters via parentheses ("),n("code",[t._v("(")]),t._v(" and "),n("code",[t._v(")")]),t._v("). Parameters are declared inside separated by a comma ("),n("code",[t._v(",")]),t._v("). Parameters require a type specification using a semicolon ("),n("code",[t._v(":")]),t._v(") followed by the type.")]),t._v(" "),n("p",[t._v("A function needs a body with the statements that execute when the function is called. Function bodies are declared by placing an opening curly brace ("),n("code",[t._v("{")]),t._v(") to start, and an closing curly brace ("),n("code",[t._v("}")]),t._v(") to end it. A function with a specified return type must always return the given type. Functions without return types may use the return keyword to end early.")]),t._v(" "),n("p",[n("strong",[t._v("EBNF Notation")])]),t._v(" "),n("div",{staticClass:"language-ebnf extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ebnf"}},[n("code",[n("span",{pre:!0,attrs:{class:"token definition rule keyword"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"z"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Z"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"z"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Z"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token definition rule keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fun"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"("')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("statement")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("sub",[t._v("* "),n("code",[t._v("statement")]),t._v(" is a placeholder")])]),t._v(" "),n("p",[n("strong",[t._v("Example")])]),t._v(" "),n("div",{staticClass:"language-ttr extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("fun foo {\n    // Do somthing\n}\n\nfun bar(parameter: string) {\n    // Do somthing\n}\n\nfun baz(firstName: string, lastName: string) {\n   // Do somthing\n}\n\nfun: string qux {\n   return 'value'\n}\n\nfun: string quux(parameter: string) {\n   parameter = 'Hello' + parameter\n   return parameter\n}\n\nfun: string quuz(firstName: string, lastName: string) {\n   val greet = 'Hello' + firstName + lastName\n   return greet\n}\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);