(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{47:function(s,t,a){"use strict";a.r(t);var r=function(){var s=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var n=a(0),e=Object(n.a)({},r,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"table"},[a("h2",[s._v("Table 表格")]),a("p",[s._v("一个简单的表格组件，使用"),a("code",[s._v("ul")]),s._v("模拟而成")]),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{pre:!0,attrs:{class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("i-table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":columns")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tableColumns"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tableData"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("i-table")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("用法")]),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tableColumns")]),s._v(": [\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Name'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Age'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'age'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("textAlign")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(",\n          render(val) {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (val >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("18")]),s._v(") {\n              "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"<span style='color:#409eff'>\"")]),s._v(" + val + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'</span>'")]),s._v("\n            } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n              "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"<span style='color:#f86f74'>\"")]),s._v(" + val + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'</span>'")]),s._v("\n            }\n          }\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Address'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'address'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("150")]),s._v(",\n        }\n      ],\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tableData")]),s._v(": [\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'John Brown'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("age")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("14")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'New York No. 1 Lake Park'")]),s._v("\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jim Green'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("age")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("24")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London No. 1 Lake Park'")]),s._v("\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Joe Black'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("age")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Sydney No. 1 Lake Park'")]),s._v("\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jon Snow'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("age")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("17")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Ottawa No. 2 Lake Park'")]),s._v("\n        }\n      ]\n    }\n  }\n}\n")])]),a("h4",[s._v("Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("说明")]),a("th",[s._v("类型")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("columns")]),a("td",[s._v("列配置，详情见下个表格")]),a("td",[a("code",[s._v("Array")])]),a("td",[a("code",[s._v("[]")])])]),a("tr",[a("td",[s._v("data")]),a("td",[s._v("数据")]),a("td",[a("code",[s._v("Array")])]),a("td",[a("code",[s._v("[]")])])])])]),a("h4",[s._v("columns")]),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("说明")]),a("th",[s._v("类型")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("title")]),a("td",[s._v("列名")]),a("td",[a("code",[s._v("String")])]),a("td",[a("code",[s._v("''")])])]),a("tr",[a("td",[s._v("key")]),a("td",[s._v("字段名")]),a("td",[a("code",[s._v("String")])]),a("td",[a("code",[s._v("''")])])]),a("tr",[a("td",[s._v("width")]),a("td",[s._v("列宽度，单位 px")]),a("td",[a("code",[s._v("Number")])]),a("td",[a("code",[s._v("100")])])]),a("tr",[a("td",[s._v("align")]),a("td",[s._v("内容对齐方式，同 css 中 text-align")]),a("td",[a("code",[s._v("String")])]),a("td",[a("code",[s._v("left")])])]),a("tr",[a("td",[s._v("render")]),a("td",[s._v("自定义渲染，参数为原始值")]),a("td",[a("code",[s._v("Function")])]),a("td",[a("code",[s._v("''")])])])])]),a("h4",[s._v("Events")]),a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),a("th",[s._v("说明")]),a("th",[s._v("参数")])])]),a("tbody",[a("tr",[a("td",[s._v("click-row")]),a("td",[s._v("点击某行时触发")]),a("td",[s._v("当前行原始数据")])])])])])}],!1,null,null,null);e.options.__file="docs/table.md";t.default=e.exports}}]);