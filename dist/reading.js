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

	;__weex_define__("@weex-component/a226d1182c5ea9dcf649e4a839147185", [], function(__weex_require__, __weex_exports__, __weex_module__){






	;
	    __webpack_require__(3);
	    __webpack_require__(4);
	    __webpack_require__(5);
	    __webpack_require__(6);
	    __webpack_require__(7);
	    //require('weex-components');
	    __weex_module__.exports = {
	        data:function () {return {
	         width: 0,
	         height: 0,
	         recommendTopic:[],
	         hotRecommend1:[],
	         hotRecommend2:[],
	         category1: [],
	         category2: [],
	         cookies1: [],
	         cookies2: []
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
	                        var obj = data.data;
	                        that.recommendTopic = obj.recommendTopic;
	                        that.hotRecommend1 = obj.hotTopic.slice(0, 4);
	                        that.hotRecommend2 = obj.hotTopic.slice(4, 8);
	                        that.category1 = obj.category.slice(0, 2);
	                        that.category2 = obj.category.slice(2, 4);
	                        that.cookies1 = obj.other.slice(0, 4);
	                        that.cookies2 = obj.other.slice(4, 8);
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
	      "classList": [
	        "container"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "container"
	          ],
	          "children": [
	            {
	              "type": "recommend",
	              "attr": {
	                "recommend": function () {return this.recommendTopic}
	              }
	            },
	            {
	              "type": "hr"
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title-big"
	              ],
	              "attr": {
	                "value": "热门推荐"
	              }
	            },
	            {
	              "type": "hot-recommend",
	              "attr": {
	                "hotRecommend": function () {return this.hotRecommend1}
	              }
	            },
	            {
	              "type": "hot-recommend",
	              "attr": {
	                "hotRecommend": function () {return this.hotRecommend2}
	              }
	            },
	            {
	              "type": "hr"
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title-big"
	              ],
	              "attr": {
	                "value": "专题分类"
	              }
	            },
	            {
	              "type": "category",
	              "attr": {
	                "list": function () {return this.category1}
	              }
	            },
	            {
	              "type": "category",
	              "attr": {
	                "list": function () {return this.category2}
	              }
	            },
	            {
	              "type": "hr"
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title-big"
	              ],
	              "attr": {
	                "value": "轻松一刻"
	              }
	            },
	            {
	              "type": "hot-recommend",
	              "attr": {
	                "hotRecommend": function () {return this.cookies1}
	              }
	            },
	            {
	              "type": "hot-recommend",
	              "attr": {
	                "hotRecommend": function () {return this.cookies2}
	              }
	            },
	            {
	              "type": "div",
	              "style": {
	                "height": 50
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
	  "title-big": {
	    "fontSize": 30,
	    "color": "#444444",
	    "marginLeft": 10,
	    "marginBottom": 10
	  },
	  "container": {
	    "flex": 1
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/a226d1182c5ea9dcf649e4a839147185", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/search", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "height": 100
	  },
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
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/recommend", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  var webview = __weex_require__('@weex-module/webview');
	  __weex_module__.exports = {
	    data:function () {return {
	     width: 0,
	     height: 0,
	     recommend: [],
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
	                var recommend = this.recommend;
	                for(var i in recommend){
	                    imgs.push(recommend[i].img);
	                }
	                return imgs;
	            }
	        }
	    },
	    methods: {
	        openWebPage: function(index){
	            var url = this.recommend[index].url;
	            var title = this.recommend[index].title;
	            var path = './index.html?page='+ './dist/yywebview.js&weixin_title=' + title + '&weixin_url=' + url;
	            var navigator = __weex_require__('@weex-module/navigator');
	            var params = {
	                'url': path,
	                'animated' : 'true',
	            }
	            navigator.push(params, function(e) {});
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
	          "events": {
	            "click": function ($event) {this.openWebPage(0,$event)}
	          },
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
	          "events": {
	            "click": function ($event) {this.openWebPage(1,$event)}
	          },
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/hot-recommend", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	           hotRecommend: [],
	           width: 0
	        }},
	        created: function(){
	            var width = (this.$getConfig().env.deviceWidth - 50) /4;
	            this.width = width;
	        },
	        methods: {
	            openWebPage: function(e){
	                console.log(e.target);
	                /*var url = this.recommend[index].url;
	                var title = this.recommend[index].title;
	                var path = './index.html?page='+ './dist/yywebview.js&weixin_title=' + title + '&weixin_url=' + url;
	                var navigator = __weex_require__('@weex-module/navigator');
	                var params = {
	                    'url': path,
	                    'animated' : 'true',
	                }
	                navigator.push(params, function(e) {});*/
	            }
	        }
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "row"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "item"
	      ],
	      "repeat": function () {return this.hotRecommend},
	      "events": {
	        "click": "openWebPage"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "attr": {
	            "src": function () {return this.img},
	            "resize": "cover"
	          },
	          "style": {
	            "width": function () {return this.width}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "row": {
	    "flexDirection": "row",
	    "height": 310,
	    "marginTop": 5
	  },
	  "title": {
	    "fontSize": 24,
	    "marginTop": 5,
	    "color": "#414141",
	    "lines": 3,
	    "height": 60,
	    "textOverflow": "ellipsis"
	  },
	  "img": {
	    "height": 240
	  },
	  "item": {
	    "marginLeft": 10
	  }
	})
	})

/***/ },
/* 7 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/category", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            list: [],
	            texts:[]
	        }},
	        created: function(){

	        },
	        computed: {
	           texts: {
	               get: function(){
	                 var texts = [];
	                 for(var i in this.list){
	                    texts.push(this.list[i].text);
	                 }
	                 return texts;
	               }
	           }
	        }

	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "row"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "item-left",
	        "center",
	        "border"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": function () {return this.texts[0]}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item-right",
	        "center",
	        "border"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": function () {return this.texts[1]}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "row": {
	    "flexDirection": "row",
	    "height": 150,
	    "marginTop": 6
	  },
	  "item-left": {
	    "flex": 1,
	    "borderWidth": 1,
	    "borderColor": "#BEBEBE",
	    "borderRadius": 4,
	    "marginLeft": 10,
	    "marginRight": 5
	  },
	  "item-right": {
	    "flex": 1,
	    "marginLeft": 5,
	    "marginRight": 10
	  },
	  "center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "border": {
	    "borderWidth": 1,
	    "borderColor": "#BEBEBE",
	    "borderRadius": 4
	  },
	  "title": {
	    "fontSize": 28,
	    "color": "#2A2C28"
	  }
	})
	})

/***/ }
/******/ ]);