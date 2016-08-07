/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/5b74491a5d6a5baeb54b119c9256b201", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __webpack_require__(1);
	    __weex_module__.exports = {
	      data: function () {return {}}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "首页"
	      }
	    },
	    {
	      "type": "tabbar"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {})
	})
	;__weex_bootstrap__("@weex-component/5b74491a5d6a5baeb54b119c9256b201", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/tabbar", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data:function () {return {
	            tabItems: [
	              {
	                index: 0,
	                title: '首页',
	                icon: 'http://o94apbmjs.bkt.clouddn.com/11.png',
	                src: 'main.js',
	                visibility: 'visible'
	              },
	              {
	                index: 1,
	                title: '阅读',
	                icon: 'http://o94apbmjs.bkt.clouddn.com/23.png',
	                src: 'reading.js',
	                visibility: 'hidden',
	              },
	              {
	                index: 2,
	                title: '反馈',
	                icon: 'http://o94apbmjs.bkt.clouddn.com/17.png',
	                src: 'post.js',
	                visibility: 'hidden',
	              },
	              {
	                index: 3,
	                title: '设置',
	                icon: 'http://o94apbmjs.bkt.clouddn.com/setting.png',
	                src: 'setting.js',
	                visibility: 'hidden',
	              }
	            ]
	        }},
	        methods: {
	            onclickitem: function(e){
	                var obj =  e.target.attr;
	                var url = './index.html?page=./dist/' + obj.src;
	                var navigator = __weex_require__('@weex-module/navigator');
	                var params = {
	                    url: url,
	                    animated : 'true',
	                }
	                navigator.push(params, function(e) {});
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "tabbar"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src}
	      },
	      "style": {
	        "flex": 1
	      },
	      "events": {
	        "click": "onclickitem"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "container"
	          ],
	          "style": {
	            "backgroundColor": "#ffffff"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "top-line"
	              ],
	              "attr": {
	                "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "tab-icon"
	              ],
	              "attr": {
	                "src": function () {return this.icon}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "tab-text"
	              ],
	              "style": {
	                "color": "#000000"
	              },
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 100
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 55,
	    "height": 55
	  },
	  "tab-text": {
	    "marginTop": 10,
	    "textAlign": "center",
	    "fontSize": 20
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 110
	  }
	})
	})

/***/ }
/******/ ]);