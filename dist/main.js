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

	;__weex_define__("@weex-component/bb0e4f6e1bf6af7933ede6c4f6f69683", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __webpack_require__(4);
	  var selectedColor = '#808080';
	  var unselectedColor = '#808080';
	  __weex_module__.exports = {
	    data: function () {return {
	      tabItems: [
	        {
	          index: 0,
	          title: '首页',
	          titleColor: '#000',
	          selectedColor: selectedColor,
	          unselectedColor: unselectedColor,
	          icon: '',
	          image: 'http://o94apbmjs.bkt.clouddn.com/11.png',
	          selectedImage: 'http://o94apbmjs.bkt.clouddn.com/11.png',
	          src: 'home.js',
	          visibility: 'visible'
	        },
	        {
	          index: 1,
	          title: '阅读',
	          titleColor: '#000000',
	          selectedColor: selectedColor,
	          unselectedColor: unselectedColor,
	          icon: '',
	          image: 'http://o94apbmjs.bkt.clouddn.com/23.png',
	          selectedImage: 'http://o94apbmjs.bkt.clouddn.com/23.png',
	          src: 'reading.js',
	          visibility: 'hidden',
	        },
	        {
	          index: 2,
	          title: '反馈',
	          titleColor: '#000000',
	          selectedColor: selectedColor,
	          unselectedColor: unselectedColor,
	          icon: '',
	          image: 'http://o94apbmjs.bkt.clouddn.com/17.png',
	          selectedImage: 'http://o94apbmjs.bkt.clouddn.com/17.png',
	          src: 'post.js',
	          visibility: 'hidden',
	        },
	        {
	          index: 3,
	          title: '设置',
	          titleColor: '#000000',
	          selectedColor: selectedColor,
	          unselectedColor: unselectedColor,
	          icon: '',
	          image: 'http://o94apbmjs.bkt.clouddn.com/setting.png',
	          selectedImage: 'http://o94apbmjs.bkt.clouddn.com/setting.png',
	          src: 'setting.js',
	          visibility: 'hidden',
	        }
	      ],
	    }},
	    created: function() {
	        var bundleUrl = this.$getConfig().bundleUrl;
	        var nativeBase;
	        var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	        if (isAndroidAssets) {
	          nativeBase = 'file://assets/';
	        }
	        else if (isiOSAssets) {
	          // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	          // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	          nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	        }
	        else {
	          var host = 'localhost:12580';
	          var matches = /\/\/([^\/]+?)\//.exec(this.$getConfig().bundleUrl);
	          if (matches && matches.length >= 2) {
	            host = matches[1];
	          }
	          nativeBase = 'http://' + host + '/' + this.dir + '/build/';
	        }
	        var h5Base = './dist/';
	        // in Native
	        var base = nativeBase;
	        if (typeof window === 'object') {
	          // in Browser or WebView
	          base = h5Base;
	        }

	        for(var i = 0; i < this.tabItems.length; i++) {
	            var tabItem = this.tabItems[i];
	            tabItem.src = base + tabItem.src;
	        }
	        // see log in Android Logcat
	        //if (this.items.length) console.log('hit', this.items[0].url);
	    },
	    methods: {
	      ready: function (e) {
	        var vm = this;
	        vm.$on('tabBar.onClick',function(e){
	          var detail= e.detail;
	          nativeLog('tabBar.onClick ' + detail.index);
	        });
	      },
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "wxc-tabbar",
	      "attr": {
	        "tabItems": function () {return this.tabItems}
	      }
	    }
	  ]
	})
	})
	;__weex_bootstrap__("@weex-component/bb0e4f6e1bf6af7933ede6c4f6f69683", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-tabbar", [], function(__weex_require__, __weex_exports__, __weex_module__){


	;
	    //在得到开源代码支持前,首先将开源代码拿出来修改,这样同步到其他协作同学
	    __webpack_require__(5);
	    __weex_module__.exports = {
	        data: function () {return {
	          tabItems: [ ],
	          selectedIndex: 0
	        }},
	        created: function () {
	          this.selected(this.selectedIndex);

	          this.$on('tabItem.onClick',function(e){
	            var detail= e.detail;
	            this.selectedIndex = detail.index;
	            this.selected(detail.index);

	            var params = {
	              index: detail.index
	            };
	            this.$dispatch('tabBar.onClick', params);
	          });
	        },
	        methods: {
	            selected: function(index) {
	              for(var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if(i == index){
	                  tabItem.icon = tabItem.selectedImage;
	                  tabItem.titleColor = tabItem.selectedColor || '#0A60FE';
	                  tabItem.visibility = 'visible';
	                }
	                else {
	                  tabItem.icon = tabItem.image;
	                  tabItem.titleColor = tabItem.unselectedColor || '#808080';
	                  tabItem.visibility = 'hidden';
	                }
	              }
	            },  
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tabitem", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          index: 0,
	          title: '',
	          titleColor: '#000000',
	          icon: '',
	          backgroundColor: '#ffffff',
	        }},
	        methods: {
	          onclickitem: function (e) {
	            var vm = this;
	            var params = {
	              index: vm.index
	            };
	            vm.$dispatch('tabItem.onClick', params);
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
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
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
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
	  }
	})
	})

/***/ }
/******/ ]);