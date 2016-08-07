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

	;__weex_define__("@weex-component/64eb0679c4c4de8b1b91337b34fd1383", [], function(__weex_require__, __weex_exports__, __weex_module__){




	;
	    __webpack_require__(1);
	    __webpack_require__(2);
	    __webpack_require__(3);

	    __weex_module__.exports = {
	        data:function () {return {
	         width: 0,
	         height: 0,
	         recommendTopic:[]
	        }},
	        created: function(){
	            this._getData();
	        },
	        methods:{
	            _getData: function(){
	                var that = this;
	                var stream = __weex_require__('@weex-module/stream');
	                var url = "http://123.57.39.116:3000/data/read?type=config";
	                stream.fetch({
	                  method: 'GET',
	                  url: url,
	                  type:'json'
	                }, function(response) {
	                    if(response.status == 200){
	                      var data = response.data;
	                      if(data.status){
	                        that.recommendTopic = data.data.recommendTopic;
	                      }else{
	                       //TODO:
	                      }
	                    }else{
	                        //TODO:错误处理
	                    }
	                },function(err){
	                    //console.log(err);
	                    //TODO:错误处理
	                });
	            }
	        }
	      };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "search"
	    },
	    {
	      "type": "hr"
	    },
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "recommend",
	              "attr": {
	                "recommendList": function () {return this.recommendTopic}
	              }
	            },
	            {
	              "type": "hr"
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {})
	})
	;__weex_bootstrap__("@weex-component/64eb0679c4c4de8b1b91337b34fd1383", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/search", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "input",
	      "classList": [
	        "search"
	      ],
	      "attr": {
	        "type": "text",
	        "autofocus": "true",
	        "placeholder": "搜索"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "search": {
	    "height": 75,
	    "marginTop": 22,
	    "paddingLeft": 20,
	    "fontSize": 30,
	    "borderWidth": 1,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "outline": "none",
	    "borderRadius": 5,
	    "placeholderColor": "#393939"
	  }
	})
	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/hr", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "hr"
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "hr": {
	    "marginTop": 20,
	    "borderTopWidth": 1,
	    "borderTopColor": "#C1C1C1",
	    "height": 20
	  }
	})
	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/recommend", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data:function () {return {
	     width: 0,
	     height: 0,
	     recommendList: [],
	    }},
	    created: function(){
	        var config = this.$getConfig();
	        this.width = (config.env.deviceWidth - 30) / 2;
	        this.height = (config.env.deviceHeight -30) / 2;
	    },
	    computed: {
	        imgs: {
	            get: function(){
	                var imgs = [];
	                var recommendList = this.recommendList;
	                for(var i in recommendList){
	                    imgs.push(recommendList[i].img);
	                }
	                return imgs;
	            }
	        }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "title-big"
	      ],
	      "attr": {
	        "value": "推荐专题"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "img-view"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "img-div-left",
	            "center"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "style": {
	                "width": function () {return this.width},
	                "height": function () {return this.height}
	              },
	              "attr": {
	                "resize": "cover",
	                "src": function () {return this.imgs[0]}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "img-div-right",
	            "center"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "style": {
	                "width": function () {return this.width},
	                "height": function () {return this.height}
	              },
	              "attr": {
	                "resize": "cover",
	                "src": function () {return this.imgs[1]}
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
	  "center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "title-big": {
	    "fontSize": 30,
	    "color": "#444444",
	    "marginLeft": 10
	  },
	  "img-view": {
	    "flexDirection": "row",
	    "height": 200,
	    "marginTop": 20
	  },
	  "img-div-left": {
	    "flex": 1,
	    "marginLeft": 10,
	    "marginRight": 5
	  },
	  "img-div-right": {
	    "flex": 1,
	    "marginLeft": 5,
	    "marginRight": 10
	  },
	  "img": {
	    "borderRadius": 5
	  }
	})
	})

/***/ }
/******/ ]);