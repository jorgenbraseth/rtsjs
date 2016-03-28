/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _jsGame = __webpack_require__(7);
	
	var _jsGame2 = _interopRequireDefault(_jsGame);
	
	var canvas = document.getElementById('game');
	
	var game = new _jsGame2['default'](canvas);
	game.run();

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?importLoaders=1!./rts.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?importLoaders=1!./rts.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body {\n  background-color: #333;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  font-family: sans-serif;\n}\n\n#game {\n  border: 2px solid black;\n}\n\n.help {\n  border: 1px solid black;\n  background-color: #ccc;\n  padding: .5em;\n\n}\n\ndt {\n  font-weight:bold;\n}\n\n.help h1 {\n  margin: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _UserInput = __webpack_require__(8);
	
	var _UserInput2 = _interopRequireDefault(_UserInput);
	
	var _spritesPlayer = __webpack_require__(10);
	
	var _spritesPlayer2 = _interopRequireDefault(_spritesPlayer);
	
	var _spritesRock = __webpack_require__(18);
	
	var _spritesRock2 = _interopRequireDefault(_spritesRock);
	
	var _spritesTree = __webpack_require__(20);
	
	var _spritesTree2 = _interopRequireDefault(_spritesTree);
	
	var _spritesGrass2 = __webpack_require__(24);
	
	var _spritesGrass22 = _interopRequireDefault(_spritesGrass2);
	
	var _spritesStatusPanel = __webpack_require__(26);
	
	var _spritesStatusPanel2 = _interopRequireDefault(_spritesStatusPanel);
	
	var _spritesCursor = __webpack_require__(31);
	
	var _spritesCursor2 = _interopRequireDefault(_spritesCursor);
	
	var _spritesHouse = __webpack_require__(33);
	
	var _spritesHouse2 = _interopRequireDefault(_spritesHouse);
	
	var _Utils = __webpack_require__(15);
	
	var _Maps = __webpack_require__(35);
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	__webpack_require__(36);
	
	var Game = (function () {
	  function Game(canvas) {
	    var _this = this;
	
	    _classCallCheck(this, Game);
	
	    this.canvas = canvas;
	    this.screen = canvas.getContext('2d');
	    this.userInput = new _UserInput2['default'](canvas);
	    this.shiftHeld = false;
	    this.tickCallBacks = [];
	    this.canvas.onblur = function () {
	      _this.canvas.focus();
	    };
	
	    this.viewPort = {
	      width: 30,
	      height: 20,
	      minX: 0,
	      minY: 0,
	      inView: function inView(pos) {
	        return pos.x >= this.minX && pos.y >= this.minY && pos.x < this.minX + this.width && pos.y < this.minY + this.height;
	      }
	    };
	
	    this.canvas.setAttribute("width", "" + _constantsGameConstantsJs.GRID_SIZE * this.viewPort.width);
	    this.canvas.setAttribute("height", "" + _constantsGameConstantsJs.GRID_SIZE * this.viewPort.height);
	
	    this.canvas.style.cursor = "none";
	
	    this.cursor = new _spritesCursor2['default']();
	    this.canvas.onmousemove = this.onMouseMove.bind(this);
	
	    this.userInput.onLeftClick((function (x, y) {
	      this.gridLeftClicked((0, _Utils.toGridPos)(x, y, this.viewPort));
	    }).bind(this));
	
	    this.userInput.onRightClick((function (x, y) {
	      this.gridRightClicked((0, _Utils.toGridPos)(x, y, this.viewPort));
	    }).bind(this));
	
	    this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.ATTACK, this.enableAttackMode.bind(this));
	    this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.MOVE, this.enableMoveMode.bind(this));
	    this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.PLACE_BUILDING, this.enablePlacementMode.bind(this));
	
	    this.bindCameraControls();
	
	    this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.SHIFT, function () {
	      _this.shiftHeld = true;
	    });
	    this.userInput.onKeyUp(_constantsGameConstantsJs.KEY_BINDS.SHIFT, function () {
	      _this.shiftHeld = false;
	    });
	
	    this.init();
	  }
	
	  _createClass(Game, [{
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      var _cursor,
	          _this2 = this;
	
	      this.mousePixelPos = [e.layerX, e.layerY];
	
	      this.mouseGridPos = this.mousePixelPos.map(function (coord) {
	        return parseInt(coord / _constantsGameConstantsJs.GRID_SIZE);
	      });
	      this.mouseGridPos[0] += this.viewPort.minX;
	      this.mouseGridPos[1] += this.viewPort.minY;
	
	      (_cursor = this.cursor).setPosition.apply(_cursor, _toConsumableArray(this.mousePixelPos));
	
	      this.layers[_constantsGameConstantsJs.LAYER_GROUND_PLACEMENT].forEach(function (spriteToBePlaced) {
	        spriteToBePlaced.setPosition.apply(spriteToBePlaced, _toConsumableArray(_this2.mouseGridPos));
	      });
	    }
	  }, {
	    key: 'initKeyboardPlayerMovement',
	    value: function initKeyboardPlayerMovement() {
	      var _this3 = this;
	
	      this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.MOVE_RIGHT, function () {
	        return _this3.player.moveRight(true);
	      });
	      this.userInput.onKeyUp(_constantsGameConstantsJs.KEY_BINDS.MOVE_RIGHT, function () {
	        return _this3.player.moveRight(false);
	      });
	      this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.MOVE_LEFT, function () {
	        return _this3.player.moveLeft(true);
	      });
	      this.userInput.onKeyUp(_constantsGameConstantsJs.KEY_BINDS.MOVE_LEFT, function () {
	        return _this3.player.moveLeft(false);
	      });
	
	      this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.MOVE_UP, function () {
	        return _this3.player.moveUp(true);
	      });
	      this.userInput.onKeyUp(_constantsGameConstantsJs.KEY_BINDS.MOVE_UP, function () {
	        return _this3.player.moveUp(false);
	      });
	      this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.MOVE_DOWN, function () {
	        return _this3.player.moveDown(true);
	      });
	      this.userInput.onKeyUp(_constantsGameConstantsJs.KEY_BINDS.MOVE_DOWN, function () {
	        return _this3.player.moveDown(false);
	      });
	    }
	  }, {
	    key: 'bindCameraControls',
	    value: function bindCameraControls() {
	      var _this4 = this;
	
	      this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.CAMERA_PAN_LEFT, this.panCameraLeft.bind(this));
	      this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.CAMERA_PAN_RIGHT, this.panCameraRight.bind(this));
	      this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.CAMERA_PAN_UP, this.panCameraUp.bind(this));
	      this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.CAMERA_PAN_DOWN, this.panCameraDown.bind(this));
	
	      this.userInput.onKeyUp(_constantsGameConstantsJs.KEY_BINDS.CAMERA_PAN_LEFT, function () {
	        _this4.cameraPanX = 0;
	      });
	      this.userInput.onKeyUp(_constantsGameConstantsJs.KEY_BINDS.CAMERA_PAN_RIGHT, function () {
	        _this4.cameraPanX = 0;
	      });
	      this.userInput.onKeyUp(_constantsGameConstantsJs.KEY_BINDS.CAMERA_PAN_UP, function () {
	        _this4.cameraPanY = 0;
	      });
	      this.userInput.onKeyUp(_constantsGameConstantsJs.KEY_BINDS.CAMERA_PAN_DOWN, function () {
	        _this4.cameraPanY = 0;
	      });
	    }
	  }, {
	    key: 'setMode',
	    value: function setMode(mode, args) {
	      if (this.actionMode === 'PLACE') {
	        this.removeSprite(this.placingUnit);
	        this.placingUnit = undefined;
	      }
	      this.actionMode = mode;
	      this.cursor.setMode(this.actionMode, args);
	    }
	  }, {
	    key: 'enableAttackMode',
	    value: function enableAttackMode() {
	      this.setMode('ATTACK');
	    }
	  }, {
	    key: 'enableMoveMode',
	    value: function enableMoveMode() {
	      this.setMode('MOVE');
	    }
	  }, {
	    key: 'enableDefaultMode',
	    value: function enableDefaultMode() {
	      this.setMode('DEFAULT');
	    }
	  }, {
	    key: 'enablePlacementMode',
	    value: function enablePlacementMode() {
	      var sprite = new _spritesHouse2['default'](this, this.mouseGridPos);
	      this.setMode('PLACE', sprite);
	      this.addSprite(_constantsGameConstantsJs.LAYER_GROUND_PLACEMENT, sprite);
	      this.placingUnit = sprite;
	    }
	  }, {
	    key: 'panCameraDown',
	    value: function panCameraDown() {
	      this.cameraPanY = 1;
	    }
	  }, {
	    key: 'panCameraUp',
	    value: function panCameraUp() {
	      this.cameraPanY = -1;
	    }
	  }, {
	    key: 'panCameraLeft',
	    value: function panCameraLeft() {
	      this.cameraPanX = -1;
	    }
	  }, {
	    key: 'panCameraRight',
	    value: function panCameraRight() {
	      this.cameraPanX = 1;
	    }
	  }, {
	    key: 'loadMap',
	    value: function loadMap(mapData) {
	      var transposedMap = mapData[0].map(function (col, i) {
	        return mapData.map(function (row) {
	          return row[i];
	        });
	      });
	
	      this.world = transposedMap;
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this.selectedSprites = [];
	      this.cameraPanY = 0;
	      this.cameraPanX = 0;
	
	      this.layers = {};
	      this.layers[_constantsGameConstantsJs.LAYER_MAP] = [];
	      this.layers[_constantsGameConstantsJs.LAYER_FLOOR] = [];
	      this.layers[_constantsGameConstantsJs.LAYER_GROUND] = [];
	      this.layers[_constantsGameConstantsJs.LAYER_GROUND_PLACEMENT] = [];
	      this.layers[_constantsGameConstantsJs.LAYER_AIR] = [];
	
	      this.loadMap((0, _Maps.GENERATED)(100, 70, 0.2));
	
	      this._player = new _spritesPlayer2['default'](this, [0, 0]);
	      this.statusPanel = new _spritesStatusPanel2['default'](this.player, this);
	      this.player.select();
	      this.addSprite(_constantsGameConstantsJs.LAYER_GROUND, this.player);
	
	      this.initKeyboardPlayerMovement();
	
	      for (var x = 0; x < this.world.length; x++) {
	        for (var y = 0; y < this.world[x].length; y++) {
	          if (this.world[x][y] === 0) {
	            this.addSprite(_constantsGameConstantsJs.LAYER_GROUND, new _spritesRock2['default'](this, [x, y]));
	          }
	          if (this.world[x][y] === 2) {
	            this.addSprite(_constantsGameConstantsJs.LAYER_GROUND, new _spritesTree2['default'](this, [x, y]));
	          }
	          this.addSprite(_constantsGameConstantsJs.LAYER_MAP, new _spritesGrass22['default'](this, [x, y]));
	        }
	      }
	
	      this.enableDefaultMode();
	    }
	  }, {
	    key: 'select',
	    value: function select(sprite, addToSelection) {
	      if (!addToSelection) {
	        this.clearSelection();
	      }
	      sprite.select();
	      this.selectedSprites.push(sprite);
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      this.moveCam();
	
	      this.updateMapCosts();
	      this.tickLayer(_constantsGameConstantsJs.LAYER_MAP);
	      this.tickLayer(_constantsGameConstantsJs.LAYER_FLOOR);
	      this.tickLayer(_constantsGameConstantsJs.LAYER_GROUND);
	      this.tickLayer(_constantsGameConstantsJs.LAYER_AIR);
	
	      this.tickCallBacks.forEach(function (cb) {
	        return cb();
	      });
	    }
	  }, {
	    key: 'onTick',
	    value: function onTick(callback) {
	      this.tickCallBacks.push(callback);
	    }
	  }, {
	    key: 'moveCam',
	    value: function moveCam() {
	      if (this.viewPort.minY + this.viewPort.height + this.cameraPanY <= this.world[0].length && this.viewPort.minY + this.cameraPanY >= 0) {
	        this.viewPort.minY += this.cameraPanY;
	      }
	
	      if (this.viewPort.minX + this.viewPort.width + this.cameraPanX <= this.world.length && this.viewPort.minX + this.cameraPanX >= 0) {
	        this.viewPort.minX += this.cameraPanX;
	      }
	    }
	  }, {
	    key: 'spriteAt',
	    value: function spriteAt(coords) {
	      var countPlayer = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	      var x = coords[0];
	      var y = coords[1];
	
	      var found = undefined;
	      for (var i = this.layers[_constantsGameConstantsJs.LAYER_AIR].length - 1; i >= 0; i--) {
	        var sprite = this.layers[_constantsGameConstantsJs.LAYER_AIR][i];
	        if (sprite.pos.x == x && sprite.pos.y == y) {
	          found = sprite;
	        }
	      }
	      for (var i = this.layers[_constantsGameConstantsJs.LAYER_GROUND].length - 1; i >= 0; i--) {
	        var sprite = this.layers[_constantsGameConstantsJs.LAYER_GROUND][i];
	        if (sprite.pos.x == x && sprite.pos.y == y) {
	          found = sprite;
	        }
	      }
	
	      if (found && !countPlayer && found.constructor.name === 'Player') {
	        found = undefined;
	      }
	      return found;
	    }
	  }, {
	    key: 'clearSelection',
	    value: function clearSelection() {
	      if (this.selectedSprites) {
	        for (var i = 0; i < this.selectedSprites.length; i++) {
	          var sprite = this.selectedSprites[i];
	          sprite.unselect();
	        }
	      }
	      this.selectedSprites = [];
	    }
	  }, {
	    key: 'gridLeftClicked',
	    value: function gridLeftClicked(coords) {
	      var clickedSprite = this.spriteAt(coords);
	
	      if (this.actionMode === 'PLACE' && clickedSprite === undefined) {
	        var _placingUnit;
	
	        (_placingUnit = this.placingUnit).setPosition.apply(_placingUnit, _toConsumableArray(coords));
	        this.removeSprite(this.placingUnit);
	        this.addSprite(_constantsGameConstantsJs.LAYER_GROUND, this.placingUnit);
	        this.placingUnit = undefined;
	        this.enableDefaultMode();
	      }
	
	      if (clickedSprite) {
	        this.select(clickedSprite, this.shiftHeld);
	      } else {
	        // this.addSprite(LAYER_FLOOR, new TreeStump(this, coords));
	        // this.addSprite(LAYER_MAP, new Blood(this, coords));
	        this.clearSelection();
	      }
	    }
	  }, {
	    key: 'gridRightClicked',
	    value: function gridRightClicked(coords) {
	      var clickedSprite = this.spriteAt(coords);
	      if (this.actionMode !== 'DEFAULT') {
	        this.enableDefaultMode();
	      } else {
	
	        if (clickedSprite) {
	          if (clickedSprite.fireAt) {
	            this.player.attackTarget(clickedSprite);
	          } else if (clickedSprite.gather) {
	            this.player.attackTarget(clickedSprite);
	          }
	        } else {
	          this.player.moveTo(coords);
	        }
	      }
	    }
	  }, {
	    key: 'removeSprite',
	    value: function removeSprite(sprite) {
	      this.removeSpriteFromLayer(this.layers[_constantsGameConstantsJs.LAYER_AIR], sprite);
	      this.removeSpriteFromLayer(this.layers[_constantsGameConstantsJs.LAYER_GROUND], sprite);
	      this.removeSpriteFromLayer(this.layers[_constantsGameConstantsJs.LAYER_GROUND_PLACEMENT], sprite);
	      this.removeSpriteFromLayer(this.layers[_constantsGameConstantsJs.LAYER_FLOOR], sprite);
	      this.removeSpriteFromLayer(this.layers[_constantsGameConstantsJs.LAYER_MAP], sprite);
	    }
	  }, {
	    key: 'positionFree',
	    value: function positionFree(coords) {
	      var found = this.spriteAt(coords);
	      return found === undefined;
	    }
	  }, {
	    key: 'removeSpriteFromLayer',
	    value: function removeSpriteFromLayer(layer, sprite) {
	      for (var i = 0; i < layer.length; i++) {
	        var spr = layer[i];
	        if (spr == sprite) {
	          layer.splice(i, 1);
	        }
	      }
	    }
	  }, {
	    key: 'updateMapCosts',
	    value: function updateMapCosts() {
	      for (var x = 0; x < this.world.length; x++) {
	        for (var y = 0; y < this.world[x].length; y++) {
	          this.world[x][y] = 1;
	        }
	      }
	
	      var sprites = this.layers[_constantsGameConstantsJs.LAYER_GROUND];
	      for (var i = 0; i < sprites.length; i++) {
	        var sprite = sprites[i];
	        this.world[sprite.targetX][sprite.targetY] = sprite.moveCost;
	      }
	    }
	  }, {
	    key: 'tickLayer',
	    value: function tickLayer(layer) {
	      var sprites = this.layers[layer];
	      for (var i = 0; i < sprites.length; i++) {
	        var sprite = sprites[i];
	        sprite.tick(this.world);
	      }
	    }
	  }, {
	    key: 'viewPortItemsForLayer',
	    value: function viewPortItemsForLayer(layer) {
	      var _this5 = this;
	
	      var visibleSpritesFromLayer = layer.filter(function (sprite) {
	        return _this5.viewPort.inView(sprite.pos);
	      });
	
	      var visibleMap = [];
	      for (var y = 0; y < this.viewPort.height; y++) {
	        var row = [];
	        for (var x = 0; x < this.viewPort.width; x++) {
	          row.push([]);
	        }
	        visibleMap.push(row);
	      }
	
	      for (var spriteIdx = 0; spriteIdx < visibleSpritesFromLayer.length; spriteIdx++) {
	        var sprite = visibleSpritesFromLayer[spriteIdx];
	        var spriteX = parseInt(sprite.pos.x) - this.viewPort.minX;
	        var spriteY = parseInt(sprite.pos.y) - this.viewPort.minY;
	
	        if (spriteY < visibleMap.length && spriteX < visibleMap[0].length) visibleMap[spriteY][spriteX].push(sprite);
	      }
	
	      return visibleMap;
	      // console.log(visibleSpritesFromLayer);
	    }
	  }, {
	    key: 'drawLayer',
	    value: function drawLayer(layer) {
	      var visibleMap = this.viewPortItemsForLayer(layer);
	
	      for (var y = 0; y < visibleMap.length; y++) {
	        var row = visibleMap[y];
	        for (var col = 0; col < row.length; col++) {
	          var spriteList = row[col];
	
	          for (var sprite = 0; sprite < spriteList.length; sprite++) {
	            spriteList[sprite].drawSprite(this.screen, this.viewPort);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'clearScreen',
	    value: function clearScreen() {
	      this.screen.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.clearScreen();
	      this.screen.translate(-this.viewPort.minX * _constantsGameConstantsJs.GRID_SIZE, -this.viewPort.minY * _constantsGameConstantsJs.GRID_SIZE);
	      this.drawLayer(this.layers[_constantsGameConstantsJs.LAYER_MAP]);
	      this.drawLayer(this.layers[_constantsGameConstantsJs.LAYER_FLOOR]);
	      this.drawLayer(this.layers[_constantsGameConstantsJs.LAYER_GROUND]);
	      this.screen.globalAlpha = 0.5;
	      this.drawLayer(this.layers[_constantsGameConstantsJs.LAYER_GROUND_PLACEMENT]);
	      this.screen.globalAlpha = 1;
	      this.drawLayer(this.layers[_constantsGameConstantsJs.LAYER_AIR]);
	      this.screen.translate(this.viewPort.minX * _constantsGameConstantsJs.GRID_SIZE, this.viewPort.minY * _constantsGameConstantsJs.GRID_SIZE);
	
	      this.statusPanel.draw(this.screen);
	      this.cursor.draw(this.screen);
	    }
	  }, {
	    key: 'addSprite',
	    value: function addSprite(layer, sprite) {
	      this.layers[layer].push(sprite);
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      setInterval((function () {
	        this.tick();
	        this.draw();
	      }).bind(this), 1000 / 60);
	    }
	  }, {
	    key: 'player',
	    get: function get() {
	      return this._player;
	    }
	  }]);
	
	  return Game;
	})();
	
	exports['default'] = Game;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var UserInput = (function () {
	  function UserInput(canvas) {
	    _classCallCheck(this, UserInput);
	
	    this.canvas = canvas;
	
	    this.leftClickCallbacks = [];
	    this.rightClickCallbacks = [];
	    this.keyCallbacks = {};
	    this.keyUpCallbacks = {};
	
	    this.canvas.onclick = (function (e) {
	      e.preventDefault();
	      this.canvasClicked(e);
	      return false;
	    }).bind(this);
	
	    this.canvas.oncontextmenu = (function (e) {
	      e.preventDefault();
	      for (var i = 0; i < this.rightClickCallbacks.length; i++) {
	        this.rightClickCallbacks[i](e.layerX, e.layerY);
	      }
	      return false;
	    }).bind(this);
	
	    this.canvas.onkeydown = (function (e) {
	      var callbacks = this.keyCallbacks[e.keyCode];
	      if (callbacks) {
	        for (var cb = 0; cb < callbacks.length; cb++) {
	          callbacks[cb]();
	        }
	      }
	    }).bind(this);
	
	    this.canvas.onkeyup = (function (e) {
	      var callbacks = this.keyUpCallbacks[e.keyCode];
	      if (callbacks) {
	        for (var cb = 0; cb < callbacks.length; cb++) {
	          callbacks[cb]();
	        }
	      }
	    }).bind(this);
	  }
	
	  _createClass(UserInput, [{
	    key: 'onKey',
	    value: function onKey(key, callback) {
	      if (this.keyCallbacks[key] === undefined) {
	        this.keyCallbacks[key] = [];
	      }
	      this.keyCallbacks[key].push(callback);
	    }
	  }, {
	    key: 'onKeyUp',
	    value: function onKeyUp(key, callback) {
	      if (this.keyUpCallbacks[key] === undefined) {
	        this.keyUpCallbacks[key] = [];
	      }
	      this.keyUpCallbacks[key].push(callback);
	    }
	  }, {
	    key: 'canvasClicked',
	    value: function canvasClicked(e) {
	      for (var i = 0; i < this.leftClickCallbacks.length; i++) {
	        this.leftClickCallbacks[i](e.layerX, e.layerY);
	      }
	    }
	  }, {
	    key: 'onRightClick',
	    value: function onRightClick(callback) {
	      this.rightClickCallbacks.push(callback);
	    }
	  }, {
	    key: 'onLeftClick',
	    value: function onLeftClick(callback) {
	      this.leftClickCallbacks.push(callback);
	    }
	  }]);
	
	  return UserInput;
	})();
	
	exports['default'] = UserInput;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  LAYER_MAP: 0,
	  LAYER_FLOOR: 10,
	  LAYER_GROUND: 20,
	  LAYER_GROUND_PLACEMENT: 29,
	  LAYER_AIR: 30,
	
	  GRID_SIZE: 40,
	
	  KEY_BINDS: {
	    ATTACK: 65, // "A"
	    MOVE: 77, // "M"
	    CAMERA_PAN_LEFT: 37, //LEFT ARROW
	    CAMERA_PAN_RIGHT: 39, //RIGHT ARROW
	    CAMERA_PAN_UP: 38, //UP ARROW
	    CAMERA_PAN_DOWN: 40, //DOWN ARROW
	    SHIFT: 16, //SHIFT KEY,
	    PLACE_BUILDING: 81, //Q
	    MOVE_UP: 87, //W
	    MOVE_DOWN: 83, //A
	    MOVE_LEFT: 65, //S
	    MOVE_RIGHT: 68 //D
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Unit2 = __webpack_require__(11);
	
	var _Unit3 = _interopRequireDefault(_Unit2);
	
	var _Blood = __webpack_require__(14);
	
	var _Blood2 = _interopRequireDefault(_Blood);
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(15);
	
	var _imagesPerson1Png = __webpack_require__(17);
	
	var _imagesPerson1Png2 = _interopRequireDefault(_imagesPerson1Png);
	
	var PLAYER_TYPE_MAN = 0;
	var PLAYER_TYPE_WOMAN_1 = 1;
	var PLAYER_TYPE_WOMAN_2 = 2;
	
	var Player = (function (_Unit) {
	  _inherits(Player, _Unit);
	
	  function Player(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Player);
	
	    _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, game, coords, 100, 1);
	
	    this.resources = {};
	    this.animAge = 0;
	    this.width = _constantsGameConstantsJs.GRID_SIZE * 0.9;
	    this.moveCost = 10000;
	    this.movingTo = [this.pos.x, this.pos.y];
	    this.world = game.world;
	
	    this.unselect();
	
	    this.speed = .15;
	
	    this.image = (0, _Utils.loadImage)(_imagesPerson1Png2['default']);
	  }
	
	  _createClass(Player, [{
	    key: 'select',
	    value: function select() {
	      _get(Object.getPrototypeOf(Player.prototype), 'select', this).call(this);
	      this.color = "rgba(0,250,0,0.3)";
	    }
	  }, {
	    key: 'unselect',
	    value: function unselect() {
	      _get(Object.getPrototypeOf(Player.prototype), 'unselect', this).call(this);
	      this.color = "transparent";
	    }
	  }, {
	    key: 'moveRight',
	    value: function moveRight(startMovement) {
	      this.movingLeft = false;
	      this.movingRight = startMovement;
	    }
	  }, {
	    key: 'moveLeft',
	    value: function moveLeft(startMovement) {
	      this.movingRight = false;
	      this.movingLeft = startMovement;
	    }
	  }, {
	    key: 'moveUp',
	    value: function moveUp(startMovement) {
	      this.movingDown = false;
	      this.movingUp = startMovement;
	    }
	  }, {
	    key: 'moveDown',
	    value: function moveDown(startMovement) {
	      this.movingUp = false;
	      this.movingDown = startMovement;
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      _get(Object.getPrototypeOf(Player.prototype), 'tick', this).call(this);
	
	      if (this.isMoving) {
	        this.animAge = (this.animAge + 1) % 15;
	      } else if (this.movingLeft) {
	        this.moveTo([this.gridPos[0] - 1, this.gridPos[1]]);
	      } else if (this.movingRight) {
	        this.moveTo([this.gridPos[0] + 1, this.gridPos[1]]);
	      } else if (this.movingUp) {
	        this.moveTo([this.gridPos[0], this.gridPos[1] - 1]);
	      } else if (this.movingDown) {
	        this.moveTo([this.gridPos[0], this.gridPos[1] + 1]);
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(screen, viewport) {
	      screen.fillStyle = this.color;
	      // this.drawMoveQueue(screen);
	
	      var animFrame = parseInt(this.animAge / 5);
	      var directionRow = 0;
	      var playerType = PLAYER_TYPE_MAN;
	
	      if (this.dy < 0) {
	        directionRow = 3;
	      } else if (this.dx < 0) {
	        directionRow = 1;
	      } else if (this.dx > 0) {
	        directionRow = 2;
	      }
	
	      screen.drawImage(this.image, playerType * (3 * 32) + animFrame * 32, directionRow * 32, 32, 32, -this.width / 2, -this.width / 2, this.width, this.width);
	
	      if (this.selected) {
	        this.drawHp(screen);
	      }
	    }
	  }, {
	    key: 'drawMoveQueue',
	    value: function drawMoveQueue(screen) {
	      var prevPos = this.pos;
	      for (var i = 0; i < this.moveQueue.length; i++) {
	        var pos = this.moveQueue[i];
	        screen.fillStyle = "rgba(0,5,0,0.5";
	        screen.beginPath();
	        screen.arc(0, 0, 3, 0, Math.PI * 2);
	        screen.closePath();
	        screen.fill();
	
	        screen.strokeStyle = "rgba(0,50,0,0.7)";
	        screen.beginPath();
	        screen.moveTo(0, 0);
	        screen.lineTo(0, 0);
	        screen.closePath();
	        screen.stroke();
	
	        prevPos = pos;
	      }
	    }
	  }, {
	    key: 'die',
	    value: function die() {
	      _get(Object.getPrototypeOf(Player.prototype), 'die', this).call(this);
	      this.game.addSprite(_constantsGameConstantsJs.LAYER_FLOOR, new _Blood2['default'](this.game, [this.pos.x, this.pos.y]));
	    }
	  }]);
	
	  return Player;
	})(_Unit3['default']);
	
	exports['default'] = Player;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _AStar = __webpack_require__(13);
	
	var _AStar2 = _interopRequireDefault(_AStar);
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var Unit = (function (_Sprite) {
	  _inherits(Unit, _Sprite);
	
	  function Unit(game, coords, hp) {
	    if (coords === undefined) coords = [0, 0];
	    var attackDamage = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	
	    _classCallCheck(this, Unit);
	
	    _get(Object.getPrototypeOf(Unit.prototype), 'constructor', this).call(this, game, coords);
	    this.hp = hp;
	    this.initialHp = hp;
	    this.gridPos = coords;
	    this.attackRange = 1;
	    this.attackDamage = attackDamage;
	    this.gatheringSpeed = 0.25;
	    this.dead = false;
	    this.moveCost = 0;
	  }
	
	  _createClass(Unit, [{
	    key: 'moveTo',
	    value: function moveTo(targetPosition) {
	      this.targetOfAttack = undefined;
	
	      var newMoveQueue = [];
	      if (this.nextGridPosition) {
	        newMoveQueue.push([this.nextGridPosition[0], this.nextGridPosition[1]]);
	      }
	      var startPoint = this.nextGridPosition || this.gridPos;
	      this.moveQueue = newMoveQueue.concat([].concat(_toConsumableArray(this.calculatePath(startPoint, targetPosition))));
	    }
	  }, {
	    key: 'calculatePath',
	    value: function calculatePath(start, end) {
	      if (start == undefined || end == undefined) {
	        return [];
	      }
	      var calculatedPath = [];
	      var path = _AStar2['default'].findPath(this.world, start, end);
	
	      for (var pos = 0; pos < path.length; pos++) {
	        var coords = path[pos];
	        calculatedPath.push(coords);
	      }
	
	      return calculatedPath;
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      this.firedThisRound = false;
	      if (this.targetOfAttack && this.targetOfAttack.dead == true) {
	        this.targetOfAttack = undefined;
	      }
	
	      if (this.targetOfAttack && this.inAttackRange(this.targetOfAttack)) {
	        this.moveQueue = [];
	        if (this.targetOfAttack.fireAt) {
	          this.fireAt(this.targetOfAttack);
	        } else if (this.targetOfAttack.gather) {
	          this.gatherFrom(this.targetOfAttack);
	        }
	      } else {
	        this.moveTowardsTarget();
	      }
	    }
	  }, {
	    key: 'inAttackRange',
	    value: function inAttackRange(unit) {
	      var posOfTarget = unit.pos;
	      var dx = Math.abs(this.pos.x - posOfTarget.x);
	      var dy = Math.abs(this.pos.y - posOfTarget.y);
	
	      var rangeToTarget = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
	      return rangeToTarget <= this.attackRange;
	    }
	  }, {
	    key: 'takeDamage',
	    value: function takeDamage(damage, attacker) {
	      this.hp -= damage;
	      if (this.hp <= 0) {
	        this.die();
	        attacker.killed(this);
	      }
	    }
	  }, {
	    key: 'killed',
	    value: function killed(unit) {
	      this.targetOfAttack = undefined;
	    }
	  }, {
	    key: 'fireAt',
	    value: function fireAt(unit) {
	      unit.takeDamage(this.attackDamage, this);
	      this.firedThisRound = true;
	    }
	  }, {
	    key: 'gatherFrom',
	    value: function gatherFrom(resourceNode) {
	      resourceNode.gather(this.gatheringSpeed, this);
	    }
	  }, {
	    key: 'die',
	    value: function die() {
	      console.log("I'm dead!");
	      this.dead = true;
	      this.game.removeSprite(this);
	    }
	  }, {
	    key: 'draw',
	    value: function draw(screen, viewport) {
	      if (this.firedThisRound && this.targetOfAttack) {
	        screen.beginPath();
	        screen.moveTo(this.pos.centerPixelX(), this.pos.centerPixelY());
	        screen.lineTo(this.targetOfAttack.pos.centerPixelX(), this.targetOfAttack.pos.centerPixelY());
	        screen.closePath();
	        screen.stroke();
	      }
	    }
	  }, {
	    key: 'drawHp',
	    value: function drawHp(screen) {
	      var hpPercent = this.hp / this.initialHp;
	      if (hpPercent > 0.8) {
	        screen.fillStyle = "rgba(0,250,0,1)";
	      } else if (hpPercent > .25) {
	        screen.fillStyle = "rgba(250,250,0,1)";
	      } else {
	        screen.fillStyle = "rgba(250,0,0,1)";
	      }
	
	      var dx = _constantsGameConstantsJs.GRID_SIZE / 2 - 3;
	      var dy = _constantsGameConstantsJs.GRID_SIZE / 2 + 5;
	      screen.translate(-dx, -dy);
	      screen.fillRect(0, 0, (_constantsGameConstantsJs.GRID_SIZE - 6) * hpPercent, 5);
	      screen.translate(dx, dy);
	    }
	  }, {
	    key: 'moveTowardsTarget',
	    value: function moveTowardsTarget() {
	      if (this.nextGridPosition && !this.game.positionFree(this.nextGridPosition)) {
	        this.moveQueue = [];
	      }
	
	      if (this.nextGridPosition === undefined) {
	        return;
	      }
	
	      if (this.atPosition(this.nextGridPosition)) {
	        this.gridPos = [this.nextGridPosition[0], this.nextGridPosition[1]];
	        this.moveQueue.shift();
	      } else {
	        var distX = this.nextGridPosition[0] - this.pos.x;
	        var distY = this.nextGridPosition[1] - this.pos.y;
	        var dist = Math.sqrt(distX * distX + distY * distY);
	
	        if (dist > 0) {
	          var sinA = distY / dist;
	          var cosA = distX / dist;
	
	          this.dx = cosA * Math.min(this.speed, dist);
	          this.dy = sinA * Math.min(this.speed, dist);
	
	          this.pos.x += this.dx;
	          this.pos.y += this.dy;
	        }
	      }
	
	      if (this.nextGridPosition && !this.game.positionFree(this.nextGridPosition)) {
	        this.moveQueue = [];
	      }
	    }
	  }, {
	    key: 'atPosition',
	    value: function atPosition(pos) {
	      return pos == undefined || this.pos.x == pos[0] && this.pos.y == pos[1];
	    }
	  }, {
	    key: 'attackTarget',
	    value: function attackTarget(unit) {
	      this.moveTo(unit.gridPos);
	      this.targetOfAttack = unit;
	    }
	  }, {
	    key: 'isMoving',
	    get: function get() {
	      return this.nextGridPosition !== undefined;
	    }
	  }, {
	    key: 'gridPos',
	    set: function set(coords) {
	      this._gridPos = coords;
	    },
	    get: function get() {
	      return this._gridPos;
	    }
	  }, {
	    key: 'targetX',
	    get: function get() {
	      if (this.nextGridPosition) return this.nextGridPosition[0];else return this.gridPos[0];
	    }
	  }, {
	    key: 'targetY',
	    get: function get() {
	      if (this.nextGridPosition) return this.nextGridPosition[1];else return this.gridPos[1];
	    }
	  }, {
	    key: 'nextGridPosition',
	    get: function get() {
	      return this.moveQueue[0] || undefined;
	    }
	  }]);
	
	  return Unit;
	})(_Sprite3['default']);
	
	exports['default'] = Unit;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var Sprite = (function () {
	  function Sprite(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Sprite);
	
	    this.game = game;
	    this.pos = {
	      x: coords[0],
	      y: coords[1],
	      centerPixelX: function centerPixelX() {
	        return this.x * _constantsGameConstantsJs.GRID_SIZE + _constantsGameConstantsJs.GRID_SIZE / 2;
	      },
	      centerPixelY: function centerPixelY() {
	        return this.y * _constantsGameConstantsJs.GRID_SIZE + _constantsGameConstantsJs.GRID_SIZE / 2;
	      }
	    };
	
	    this.color = "rgba(255,0,255,0.6)";
	
	    this.width = _constantsGameConstantsJs.GRID_SIZE;
	    this.selected = false;
	
	    this.speed = 0.2 + Math.random();
	
	    this.dx = 1;
	    this.dy = 1;
	
	    // this.targetX = this.pos.x;
	    // this.targetY = this.pos.y;
	
	    this.moveQueue = [];
	
	    this.moveCost = 0;
	  }
	
	  _createClass(Sprite, [{
	    key: "select",
	    value: function select() {
	      this.selected = true;
	    }
	  }, {
	    key: "unselect",
	    value: function unselect() {
	      this.selected = false;
	    }
	  }, {
	    key: "tick",
	    value: function tick() {}
	  }, {
	    key: "drawSprite",
	    value: function drawSprite(screen, viewPort) {
	      if (viewPort.inView(this.pos)) {
	        var dx = this.grid2draw(this.pos.x);
	        var dy = this.grid2draw(this.pos.y);
	
	        screen.translate(dx, dy);
	        this.draw(screen);
	        screen.translate(-dx, -dy);
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(screen) {
	      if (this.image) {
	        screen.drawImage.apply(screen, _toConsumableArray(this.image));
	      } else {
	        screen.fillStyle = this.color;
	
	        var centerX = _constantsGameConstantsJs.GRID_SIZE / 2;
	        var centerY = _constantsGameConstantsJs.GRID_SIZE / 2;
	        screen.fillRect(centerX - this.width / 2, centerY - this.width / 2, this.width, this.width);
	      }
	    }
	  }, {
	    key: "grid2draw",
	    value: function grid2draw(val) {
	      return val * _constantsGameConstantsJs.GRID_SIZE + _constantsGameConstantsJs.GRID_SIZE / 2;
	    }
	  }, {
	    key: "setPosition",
	    value: function setPosition(x, y) {
	      this.pos.x = x;
	      this.pos.y = y;
	    }
	  }, {
	    key: "targetX",
	    get: function get() {
	      return this.gridPos[0];
	    }
	  }, {
	    key: "targetY",
	    get: function get() {
	      return this.gridPos[1];
	    }
	  }, {
	    key: "gridPos",
	    get: function get() {
	      return [this.pos.x, this.pos.y];
	    }
	  }]);
	
	  return Sprite;
	})();
	
	exports["default"] = Sprite;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  // world is a 2d array of integers (eg world[10][15] = 0)
	  // pathStart and pathEnd are arrays like [5,10]
	  findPath: function findPath(world, pathStart, pathEnd) {
	    // shortcuts for speed
	    var abs = Math.abs;
	    var max = Math.max;
	    var pow = Math.pow;
	    var sqrt = Math.sqrt;
	
	    // the world data are integers:
	    // anything higher than this number is considered blocked
	    // this is handy is you use numbered sprites, more than one
	    // of which is walkable road, grass, mud, etc
	    var maxWalkableTileNum = 0;
	
	    // keep track of the world dimensions
	    // Note that this A-star implementation expects the world array to be square:
	    // it must have equal height and width. If your game world is rectangular,
	    // just fill the array with dummy values to pad the empty space.
	    var worldWidth = world.length;
	    var worldHeight = world[0].length;
	    var worldSize = worldWidth * worldHeight;
	
	    // which heuristic should we use?
	    // default: no diagonals (Manhattan)
	    var distanceFunction = ManhattanDistance;
	
	    var findNeighbours = function findNeighbours() {}; // empty
	
	    // alternate heuristics, depending on your game:
	
	    // diagonals allowed but no sqeezing through cracks:
	    /* var distanceFunction = DiagonalDistance;
	     var findNeighbours = DiagonalNeighbours;
	    */
	    /*
	       // diagonals and squeezing through cracks allowed:
	       var distanceFunction = DiagonalDistance;
	       var findNeighbours = DiagonalNeighboursFree;
	    */
	    // euclidean but no squeezing through cracks:
	    // var distanceFunction = EuclideanDistance;
	    // var findNeighbours = DiagonalNeighbours;
	    /*
	       // euclidean and squeezing through cracks allowed:
	       var distanceFunction = EuclideanDistance;
	       var findNeighbours = DiagonalNeighboursFree;
	    
	       */
	
	    // distanceFunction functions
	    // these return how far away a point is to another
	
	    function ManhattanDistance(Point, Goal) {
	      // linear movement - no diagonals - just cardinal directions (NSEW)
	      return abs(Point.x - Goal.x) + abs(Point.y - Goal.y);
	    }
	
	    function DiagonalDistance(Point, Goal) {
	      // diagonal movement - assumes diag dist is 1, same as cardinals
	      return max(abs(Point.x - Goal.x), abs(Point.y - Goal.y));
	    }
	
	    function EuclideanDistance(Point, Goal) {
	      // diagonals are considered a little farther than cardinal directions
	      // diagonal movement using Euclide (AC = sqrt(AB^2 + BC^2))
	      // where AB = x2 - x1 and BC = y2 - y1 and AC will be [x3, y3]
	      return sqrt(pow(Point.x - Goal.x, 2) + pow(Point.y - Goal.y, 2));
	    }
	
	    // Neighbours functions, used by findNeighbours function
	    // to locate adjacent available cells that aren't blocked
	
	    // Returns every available North, South, East or West
	    // cell that is empty. No diagonals,
	    // unless distanceFunction function is not Manhattan
	    function Neighbours(x, y) {
	      var N = y - 1,
	          S = y + 1,
	          E = x + 1,
	          W = x - 1,
	          myN = N > -1 && canWalkHere(x, N),
	          myS = S < worldHeight && canWalkHere(x, S),
	          myE = E < worldWidth && canWalkHere(E, y),
	          myW = W > -1 && canWalkHere(W, y),
	          result = [];
	      if (myN) result.push({ x: x, y: N });
	      if (myE) result.push({ x: E, y: y });
	      if (myS) result.push({ x: x, y: S });
	      if (myW) result.push({ x: W, y: y });
	      findNeighbours(myN, myS, myE, myW, N, S, E, W, result);
	      return result;
	    }
	
	    // returns every available North East, South East,
	    // South West or North West cell - no squeezing through
	    // "cracks" between two diagonals
	    function DiagonalNeighbours(myN, myS, myE, myW, N, S, E, W, result) {
	      if (myN) {
	        if (myE && canWalkHere(E, N)) result.push({ x: E, y: N });
	        if (myW && canWalkHere(W, N)) result.push({ x: W, y: N });
	      }
	      if (myS) {
	        if (myE && canWalkHere(E, S)) result.push({ x: E, y: S });
	        if (myW && canWalkHere(W, S)) result.push({ x: W, y: S });
	      }
	    }
	
	    // returns every available North East, South East,
	    // South West or North West cell including the times that
	    // you would be squeezing through a "crack"
	    function DiagonalNeighboursFree(myN, myS, myE, myW, N, S, E, W, result) {
	      myN = N > -1;
	      myS = S < worldHeight;
	      myE = E < worldWidth;
	      myW = W > -1;
	      if (myE) {
	        if (myN && canWalkHere(E, N)) result.push({ x: E, y: N });
	        if (myS && canWalkHere(E, S)) result.push({ x: E, y: S });
	      }
	      if (myW) {
	        if (myN && canWalkHere(W, N)) result.push({ x: W, y: N });
	        if (myS && canWalkHere(W, S)) result.push({ x: W, y: S });
	      }
	    }
	
	    // returns boolean value (world cell is available and open)
	    function canWalkHere(x, y) {
	      return world[x] != null && world[x][y] != null && world[x][y] > 0;
	    }
	
	    // Node function, returns a new object with Node properties
	    // Used in the calculatePath function to store route costs, etc.
	    function Node(Parent, Point) {
	      var cost = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	      var newNode = {
	        // pointer to another Node object
	        Parent: Parent,
	        // array index of this Node in the world linear array
	        value: Point.x + Point.y * worldWidth,
	        // the location coordinates of this Node
	        x: Point.x,
	        y: Point.y,
	        // the heuristic estimated cost
	        // of an entire path using this node
	        f: cost,
	        // the distanceFunction cost to get
	        // from the starting point to this node
	        g: cost
	      };
	
	      return newNode;
	    }
	
	    // Path function, executes AStar algorithm operations
	    function calculatePath() {
	      // create Nodes from the Start and End x,y coordinates
	      var mypathStart = Node(null, { x: pathStart[0], y: pathStart[1] });
	      var mypathEnd = Node(null, { x: pathEnd[0], y: pathEnd[1] });
	      // create an array that will contain all world cells
	      var AStar = new Array(worldSize);
	      // list of currently open Nodes
	      var Open = [mypathStart];
	      // list of closed Nodes
	      var Closed = [];
	      // list of the final output array
	      var result = [];
	      // reference to a Node (that is nearby)
	      var myNeighbours;
	      // reference to a Node (that we are considering now)
	      var myNode;
	      // reference to a Node (that starts a path in question)
	      var myPath;
	      // temp integer variables used in the calculations
	      var length, max, min, i, j;
	      // iterate through the open list until none are left
	      while (length = Open.length) {
	        max = worldSize * 999999;
	        min = -1;
	        for (i = 0; i < length; i++) {
	          if (Open[i].f < max) {
	            max = Open[i].f;
	            min = i;
	          }
	        }
	        // grab the next node and remove it from Open array
	        myNode = Open.splice(min, 1)[0];
	        // is it the destination node?
	        if (myNode.value === mypathEnd.value) {
	          myPath = Closed[Closed.push(myNode) - 1];
	          do {
	            result.push([myPath.x, myPath.y]);
	          } while (myPath = myPath.Parent);
	          // clear the working arrays
	          AStar = Closed = Open = [];
	          // we want to return start to finish
	          result.reverse();
	        } else // not the destination
	          {
	            // find which nearby nodes are walkable
	            myNeighbours = Neighbours(myNode.x, myNode.y);
	            // test each one that hasn't been tried already
	            for (i = 0, j = myNeighbours.length; i < j; i++) {
	              myPath = Node(myNode, myNeighbours[i], world[myNeighbours[i].x][myNeighbours[i].y]);
	              if (!AStar[myPath.value]) {
	                // estimated cost of this particular route so far
	                myPath.g += myNode.g + distanceFunction(myNeighbours[i], myNode);
	                // estimated cost of entire guessed route to the destination
	                myPath.f = myPath.g + distanceFunction(myNeighbours[i], mypathEnd);
	                // remember this new path for testing above
	                Open.push(myPath);
	                // mark this node in the world graph as visited
	                AStar[myPath.value] = true;
	              }
	            }
	            // remember this route as having no more untested options
	            Closed.push(myNode);
	          }
	      } // keep iterating until the Open list is empty
	      return result;
	    }
	
	    // actually calculate the a-star path!
	    // this returns an array of coordinates
	    // that is empty if no path is possible
	    return calculatePath();
	  } // end of findPath() function
	
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(15);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _imagesBloodPng = __webpack_require__(16);
	
	var _imagesBloodPng2 = _interopRequireDefault(_imagesBloodPng);
	
	var Blood = (function (_Sprite) {
	  _inherits(Blood, _Sprite);
	
	  function Blood(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Blood);
	
	    _get(Object.getPrototypeOf(Blood.prototype), 'constructor', this).call(this, game, coords);
	    this.moveCost = 0;
	    this.age = 0;
	
	    this.image = (0, _Utils.loadImage)(_imagesBloodPng2['default']);
	  }
	
	  _createClass(Blood, [{
	    key: 'draw',
	    value: function draw(screen) {
	      var imageAgeOffset = parseInt(this.age / (500 / 6));
	      var x = imageAgeOffset * 150;
	      screen.drawImage(this.image, x, 0, 150, 150, -_constantsGameConstantsJs.GRID_SIZE / 2, -_constantsGameConstantsJs.GRID_SIZE / 5, this.width, this.width);
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      this.age += 1;
	      if (this.age >= 500) {
	        this.game.removeSprite(this);
	      }
	    }
	  }]);
	
	  return Blood;
	})(_Sprite3['default']);
	
	exports['default'] = Blood;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constantsGameConstants = __webpack_require__(9);
	
	var imageCache = {};
	
	module.exports = {
	
	  loadImage: function loadImage(img) {
	    if (imageCache[img] === undefined) {
	      var imgElm = document.createElement("img");
	      imgElm.setAttribute('src', img);
	      imageCache[img] = imgElm;
	    }
	    return imageCache[img];
	  },
	
	  toGridPos: function toGridPos(x, y, viewPort) {
	    return [Math.floor(x / _constantsGameConstants.GRID_SIZE) + viewPort.minX, Math.floor(y / _constantsGameConstants.GRID_SIZE) + viewPort.minY];
	  }
	
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(15);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _imagesRockTilesPng = __webpack_require__(19);
	
	var _imagesRockTilesPng2 = _interopRequireDefault(_imagesRockTilesPng);
	
	var Rock = (function (_Sprite) {
	  _inherits(Rock, _Sprite);
	
	  function Rock(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Rock);
	
	    _get(Object.getPrototypeOf(Rock.prototype), 'constructor', this).call(this, game, coords);
	
	    this.startingResources = 15;
	    this.resourceAmount = this.startingResources;
	    this.moveCost = 10000;
	
	    this.image = [(0, _Utils.loadImage)(_imagesRockTilesPng2['default']), 0, 0, 85, 85, -_constantsGameConstantsJs.GRID_SIZE / 2, -_constantsGameConstantsJs.GRID_SIZE / 2, this.width, this.width];
	  }
	
	  _createClass(Rock, [{
	    key: 'select',
	    value: function select() {
	      _get(Object.getPrototypeOf(Rock.prototype), 'select', this).call(this);
	      console.log(this.constructor.name + " selected");
	    }
	  }, {
	    key: 'gather',
	    value: function gather(gatherAmount, gatherer) {
	      var amountBeforeGather = parseInt(this.resourceAmount);
	      this.resourceAmount -= gatherAmount / 3;
	
	      var amountAfterGather = parseInt(this.resourceAmount);
	      gatherer.resources.stone = gatherer.resources.stone || 0;
	      gatherer.resources.stone += amountBeforeGather - amountAfterGather;
	
	      if (this.resourceAmount <= 0) {
	        this.deplete();
	      }
	    }
	  }, {
	    key: 'deplete',
	    value: function deplete() {
	      this.game.removeSprite(this);
	      this.depleted = true;
	      // this.game.addSprite(LAYER_FLOOR, new TreeStump(this.game, [this.pos.x,this.pos.y]))
	    }
	  }]);
	
	  return Rock;
	})(_Sprite3['default']);
	
	exports['default'] = Rock;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "017851bbf4c4539826f60c13a51902fc.png";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(15);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _TreeStump = __webpack_require__(21);
	
	var _TreeStump2 = _interopRequireDefault(_TreeStump);
	
	var _imagesTrees2Png = __webpack_require__(23);
	
	var _imagesTrees2Png2 = _interopRequireDefault(_imagesTrees2Png);
	
	var VARIANTS = [{ x: 385, y: 14, w: 86, h: 143, cX: _constantsGameConstantsJs.GRID_SIZE / 2, cY: 45 }, { x: 515, y: 332, w: 53, h: 88, cX: _constantsGameConstantsJs.GRID_SIZE / 2, cY: 45 }, { x: 268, y: 14, w: 93, h: 153, cX: _constantsGameConstantsJs.GRID_SIZE / 2, cY: 45 }, { x: 547, y: 139, w: 103, h: 172, cX: _constantsGameConstantsJs.GRID_SIZE / 2, cY: 45 }, { x: 27, y: 281, w: 101, h: 168, cX: _constantsGameConstantsJs.GRID_SIZE / 2, cY: 45 }, { x: 353, y: 311, w: 57, h: 95, cX: _constantsGameConstantsJs.GRID_SIZE / 2, cY: 45 }, { x: 155, y: 145, w: 87, h: 145, cX: _constantsGameConstantsJs.GRID_SIZE / 2, cY: 45 }];
	
	var Tree = (function (_Sprite) {
	  _inherits(Tree, _Sprite);
	
	  function Tree(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Tree);
	
	    _get(Object.getPrototypeOf(Tree.prototype), 'constructor', this).call(this, game, coords);
	    this.startingResources = 15;
	    this.resourceAmount = this.startingResources;
	    this.moveCost = 10000;
	    this.width = _constantsGameConstantsJs.GRID_SIZE;
	    this.color = "black";
	    this.depleted = false;
	
	    this.variant = VARIANTS[parseInt(Math.random() * VARIANTS.length)];
	    this.image = [(0, _Utils.loadImage)(_imagesTrees2Png2['default']), this.variant.x, this.variant.y, this.variant.w, this.variant.h, -this.variant.cX, -this.variant.cY, 40, 65];
	  }
	
	  _createClass(Tree, [{
	    key: 'gather',
	    value: function gather(gatherAmount, gatherer) {
	      var amountBeforeGather = parseInt(this.resourceAmount);
	      this.resourceAmount -= gatherAmount;
	
	      var amountAfterGather = parseInt(this.resourceAmount);
	      gatherer.resources.wood = gatherer.resources.wood || 0;
	      gatherer.resources.wood += amountBeforeGather - amountAfterGather;
	
	      if (this.resourceAmount <= 0) {
	        this.deplete();
	        gatherer.killed(this);
	      }
	    }
	  }, {
	    key: 'deplete',
	    value: function deplete() {
	      this.game.removeSprite(this);
	      this.depleted = true;
	      this.game.addSprite(_constantsGameConstantsJs.LAYER_FLOOR, new _TreeStump2['default'](this.game, [this.pos.x, this.pos.y]));
	    }
	  }]);
	
	  return Tree;
	})(_Sprite3['default']);
	
	exports['default'] = Tree;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(15);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _imagesTree_stumpPng = __webpack_require__(22);
	
	var _imagesTree_stumpPng2 = _interopRequireDefault(_imagesTree_stumpPng);
	
	var TreeStump = (function (_Sprite) {
	  _inherits(TreeStump, _Sprite);
	
	  function TreeStump(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, TreeStump);
	
	    _get(Object.getPrototypeOf(TreeStump.prototype), 'constructor', this).call(this, game, coords);
	    this.moveCost = 0;
	    this.width = _constantsGameConstantsJs.GRID_SIZE;
	    this.color = "black";
	
	    this.image = (0, _Utils.loadImage)(_imagesTree_stumpPng2['default']);
	  }
	
	  _createClass(TreeStump, [{
	    key: 'draw',
	    value: function draw(screen, viewport) {
	      screen.drawImage(this.image, 0, 0, 98, 78, -_constantsGameConstantsJs.GRID_SIZE / 5, 0, 12, 12);
	    }
	  }]);
	
	  return TreeStump;
	})(_Sprite3['default']);
	
	exports['default'] = TreeStump;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "26a6eee5149e2f028935be20eed3e1c4.png";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _imagesGroundPng = __webpack_require__(25);
	
	var _imagesGroundPng2 = _interopRequireDefault(_imagesGroundPng);
	
	var _Utils = __webpack_require__(15);
	
	var Grass2 = (function (_Sprite) {
	  _inherits(Grass2, _Sprite);
	
	  function Grass2(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Grass2);
	
	    _get(Object.getPrototypeOf(Grass2.prototype), 'constructor', this).call(this, game, coords);
	
	    this.image = [(0, _Utils.loadImage)(_imagesGroundPng2['default']), 0, 51, 24, 24, -_constantsGameConstantsJs.GRID_SIZE / 2, -_constantsGameConstantsJs.GRID_SIZE / 2, this.width, this.width];
	  }
	
	  return Grass2;
	})(_Sprite3['default']);
	
	exports['default'] = Grass2;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c97cea922775196eaab83be3836001f3.png";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(15);
	
	var _imagesIcon_woodPng = __webpack_require__(27);
	
	var _imagesIcon_woodPng2 = _interopRequireDefault(_imagesIcon_woodPng);
	
	var _imagesIcon_stonePng = __webpack_require__(28);
	
	var _imagesIcon_stonePng2 = _interopRequireDefault(_imagesIcon_stonePng);
	
	var _imagesIcon_foodPng = __webpack_require__(29);
	
	var _imagesIcon_foodPng2 = _interopRequireDefault(_imagesIcon_foodPng);
	
	var _imagesIcon_coinPng = __webpack_require__(30);
	
	var _imagesIcon_coinPng2 = _interopRequireDefault(_imagesIcon_coinPng);
	
	var StatusPanel = (function () {
	  function StatusPanel(unit, game) {
	    _classCallCheck(this, StatusPanel);
	
	    this.game = game;
	    this.unit = unit;
	    this.iconWood = (0, _Utils.loadImage)(_imagesIcon_woodPng2['default']);
	    this.iconStone = (0, _Utils.loadImage)(_imagesIcon_stonePng2['default']);
	    this.iconFood = (0, _Utils.loadImage)(_imagesIcon_foodPng2['default']);
	    this.iconCoin = (0, _Utils.loadImage)(_imagesIcon_coinPng2['default']);
	  }
	
	  _createClass(StatusPanel, [{
	    key: 'draw',
	    value: function draw(screen) {
	      var maxX = this.game.canvas.width;
	      var maxY = this.game.canvas.height;
	
	      var posX = maxX - 200;
	      var posY = maxY - 100;
	      screen.translate(posX, posY);
	
	      screen.fillStyle = "rgba(0,0,0,0.9)";
	      screen.fillRect(0, 0, 195, 95);
	
	      this.drawWood(screen);
	      this.drawStone(screen);
	      this.drawFood(screen);
	      this.drawCoin(screen);
	
	      screen.translate(-posX, -posY);
	    }
	  }, {
	    key: 'drawWood',
	    value: function drawWood(screen) {
	      screen.drawImage(this.iconWood, 0, 0, 27, 27, 10, 10, 27, 27);
	      var amountOfWood = this.unit.resources.wood || 0;
	      screen.fillStyle = "white";
	      screen.font = "12px arial";
	      screen.textAlign = "center";
	      screen.fillText(amountOfWood, 24, 50);
	    }
	  }, {
	    key: 'drawStone',
	    value: function drawStone(screen) {
	      screen.drawImage(this.iconStone, 0, 0, 184, 184, 40, 10, 27, 27);
	      var amountOfWood = this.unit.resources.stone || 0;
	      screen.fillStyle = "white";
	      screen.font = "12px arial";
	      screen.textAlign = "center";
	      screen.fillText(amountOfWood, 54, 50);
	    }
	  }, {
	    key: 'drawFood',
	    value: function drawFood(screen) {
	      screen.drawImage(this.iconFood, 0, 0, 39, 37, 73, 13, 18, 18);
	      var amount = this.unit.resources.food || 0;
	      screen.fillStyle = "white";
	      screen.font = "12px arial";
	      screen.textAlign = "center";
	      screen.fillText(amount, 84, 50);
	    }
	  }, {
	    key: 'drawCoin',
	    value: function drawCoin(screen) {
	      screen.drawImage(this.iconCoin, 0, 0, 29, 33, 103, 13, 17, 20);
	      var amount = this.unit.resources.coin || 0;
	      screen.fillStyle = "white";
	      screen.font = "12px arial";
	      screen.textAlign = "center";
	      screen.fillText(amount, 114, 50);
	    }
	  }, {
	    key: 'grid2draw',
	    value: function grid2draw(val) {
	      return val * _constantsGameConstantsJs.GRID_SIZE + _constantsGameConstantsJs.GRID_SIZE / 2;
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      _get(Object.getPrototypeOf(StatusPanel.prototype), 'select', this).call(this);
	      console.log(this.constructor.name + " selected");
	    }
	  }]);
	
	  return StatusPanel;
	})();
	
	exports['default'] = StatusPanel;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAABAAAAAQE4IvRAAAAAB3RJTUUH4AMPFTEnvOkI5gAABUBJREFUSMftlslvFEcUxr+q6p7u6dl6BuMYxtjYxmAgNuCAwcRiUXYWoQSFKDmgHBDKIUhJpFwj5ZBL/ouckJJblANKQsgGhEUCHK8YOzPe7ZmxZ+29q3IAD8YBC6Scojyp+lDq6l9/33v1qoD/418I8rQvRhq7Vq5bWiseDABAKX39id9gzwgihEB2LKEYM5bimggwTaKUVKFQ9CScwtSzK1uphgCBio3QrmbW8vahxPaZrGmev1S4VTSlGYkJA4C/mkL2FCBCAOZxolZsFtMVs+2T49rnx7qj58J2+ViMm5Frk6SXgzoSgb+aQvYUIMn2aEiX3fVtz5k9x3bRc92b1FeshYKU6S8FXMNNlBiZMExRLtrUCkhPBrLVQACY69NwVLGazr4c+GhfE//09X012zXi0+K0hZkxG27Uib77Wu2Bnc1Ky+yCN5LKYSEgwVsCLofR1axzfRICtzcc2Wp9XBc039+9WdPjkkUW50oYGahgoLyILa0hFmVuPG5XTuyvsU4LIWIA5KV6WJ536Qkpo44PLayi/ug2fnbLWvJOY11AWh8hmJgzMThsoH++gJ79cdSvj+DuUBETQyZMw9+ia1Kj4UimKsMX4qHCqo2Rxi4oerI6J0A01+PJk5383NFO7Uxro6K0rpNAJYYrt/LoHStg754EXtxRg9F0CUN9JcyWbLS1x+ueXye1ZvLewHRZysgMLgCxlDu6UhEAtWwh0dPsnDy8LXCaO2VFLS+iMDINJ1uE4QI7tkZxZPdapMaLuD2Qx8BMGS1tYdRFhFrjeod2JtirvsO1lTVBl3lKASgVh8Z7mszjBzbxD3es9ULDwzlcuJxDNmvgr7EFRELA/rYo+kfz+GMwj8GJCjo7EmjfGMHspIXFOYvkKsUGTeM1XJBq7gCALbNPMj0a2aYvvnSqS/4sCDeZHstCCqnY2JzAtcEyeDCIgx0xxMMMt1MV/NKbxQubdBztXIOhVBHDgwbuLRaRrA00JcJkpH8q2KcovGpltUB8QVmIGjXvdatnWsJeQ3qqjP4cxwen1kOPyrBtH26uDClXRsEnoLaHjuYY3tqzBlM5A7/dKWB20YYelRETQVkSlIIIsdzGKszlhCRjLFwr+/W9A/PIWRyCM0z2Z+HWBhHkPq6OlrAmQEHhQ1CKN3fpiKgCF/7MI5Ux0FqvIUyifDSPr3/OSBdDYV7d4KX09Yc2UgJm+6BGqbAmHJc63ji8Tm5IhnCtP4/J8SIqpovGhghGMha+710EMW1s0SgmZyz8fs/A5rUyVCmIVF6+9FNG/tKCmmZEmAD40uauwggBfMF43wydONERaG/X6UbCBTSF4tc7ZRzcG0dnUkNED2A67+HGPQsuI5gre2iJS9BDCi6n+XhfKfhFhodvBQgvAfCWnHsEdr8/Ce4ISYR8Q405RhevuKpZcLyUwY3OuBSA4YGBIBGVwAnF4a5a7GiJQBU+vuk1nYGC8tW4F/9WpWIBgL3cQgBgTmEKip4EIRSAEDIT4m6Bzg9k3dRI1s9fnZeH+/LymOr7oaBENMcn4kranfYcYbf5boiaLi6OO/yHFP1xRsTPU0LSFKRMKeOAeOSoWdm/yP0OAsX0SMTnXpwSP0GpSDC4tW0xb4MeJOrtDMur1Ne69UpHUwS1N3P0xs185DvOlCEGZBmYRRgTgvN/wh4DJASEAkISABNCyBwIWB6RhS+YEuBMCEIdj0uM+BREKakyKRMIE4ALgAvKQLmP4uNgS0Dx6CQByP3Ho6P6U4IQQAgOCP6g8p54H3mWa8FTx2qXnv9m/A1BS3/SeVT0pAAAABt0RVh0Q3JlYXRvcgBBZG9iZSBBZnRlciBFZmZlY3Rz5qBHlQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0wMy0xNVQyMTo0OTozOSswMDowMD0CkuMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDMtMTVUMjE6NDk6MzkrMDA6MDBMXypfAAAATXRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjkuMi03IFExNiB4ODZfNjQgMjAxNS0xMi0wMiBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ26OFj8AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADE4NLAl5SEAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTg0I9S1fAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDU4MDc4NTc5EDQPkQAAAA90RVh0VGh1bWI6OlNpemUAMEJClKI+7AAAAEh0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL3RtcC92aWduZXR0ZS84NGJjYTI4OS01YWExLTQ1MjItODRlMS00YjBmMGY4MzhiYjUucG5nfZpa9QAAAABJRU5ErkJggg=="

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _imagesPlainCursorPng = __webpack_require__(32);
	
	var _imagesPlainCursorPng2 = _interopRequireDefault(_imagesPlainCursorPng);
	
	var _constantsGameConstants = __webpack_require__(9);
	
	var _Utils = __webpack_require__(15);
	
	var hotspot = { x: 3, y: 3 };
	
	var cursors = {};
	
	var StatusPanel = (function () {
	  function StatusPanel() {
	    _classCallCheck(this, StatusPanel);
	
	    cursors.DEFAULT = [(0, _Utils.loadImage)(_imagesPlainCursorPng2['default']), 0, 0, 24, 24, -hotspot.x, -hotspot.y, 24, 24];
	    cursors.ATTACK = [(0, _Utils.loadImage)(_imagesPlainCursorPng2['default']), 0, 0, 24, 24, -hotspot.x, -hotspot.y, 24, 24];
	    cursors.MOVE = [(0, _Utils.loadImage)(_imagesPlainCursorPng2['default']), 0, 0, 24, 24, -hotspot.x, -hotspot.y, 24, 24];
	
	    this.currentLook = cursors.DEFAULT;
	  }
	
	  _createClass(StatusPanel, [{
	    key: 'setPosition',
	    value: function setPosition(x, y) {
	      this.posX = x;
	      this.posY = y;
	    }
	  }, {
	    key: 'setImage',
	    value: function setImage(img) {
	      if (img) {
	        this.currentLook = img;
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(screen) {
	      screen.translate(this.posX, this.posY);
	
	      // if(this.mode !== 'PLACE'){
	      screen.drawImage.apply(screen, _toConsumableArray(this.currentLook));
	      // }
	
	      screen.translate(-this.posX, -this.posY);
	    }
	  }, {
	    key: 'grid2draw',
	    value: function grid2draw(val) {
	      return val * _constantsGameConstants.GRID_SIZE + _constantsGameConstants.GRID_SIZE / 2;
	    }
	  }, {
	    key: 'setMode',
	    value: function setMode(mode, args) {
	      this.mode = mode;
	      this.currentLook = cursors[this.mode] || cursors.DEFAULT;
	    }
	  }]);
	
	  return StatusPanel;
	})();
	
	exports['default'] = StatusPanel;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALXRFWHRTb2Z0d2FyZQBDcmVhdGVkIGJ5IGZDb2RlciBHcmFwaGljcyBQcm9jZXNzb3J/w+1fAAAEDklEQVR42u3YT2gcVRwH8C9mihIQDf5dqSBCL4qotCj0IHjb6+IUyoISWBoYCEJ6FEkhTemtpRB4UAkWwcVCINJe2l2Nl02KcYPVsKlYrBiJrtYKWowHtcr7/vrtMLudbtLMmnbJ55LM5uXNvO/7vTcvCXDdi7Rzp10tL39Oly+jxwUa+JNUr/9KCmRiwpo5Z4EsLd26u7tPYF+azd8JeJuAT2l4+GMaHrZAjh+39grk/Pn0ru8OgQ1kZcUG6NxnFEVvEvAGAe/R0NAnNDRk7ScnrRsFsrBw69vdeYLkpXM241H0OgFPEfAWASEB71OpVKNSyQI5cUL9WCDz8603vNPcCMAeeHFRlfAuRZGWREDAMwSMEJAn4EMaHKzT4KD1Uy5b7wqkVkt7kM3SUgHinJV6FL1GwHMUt3iYgJcIeIyAVwmoULH4JRWLFsjUlPq3QGZmbn7//09bAMlKmJz8gEqlHMUDl3sJeJqAfgIGCHiZgDkKwwaFofU/PW29KJBqtfV5ui2lAsQ5rXGVumZcAxctkccJ6KM4kAcIeIGAL6hQsEAKBQvkzBnd1wI5dermz5Wd1AC0q2tz0xpXqWvGNfAbHV6/foTiz+8h4D4C7ifgeQIWKZ+3QPJ5u+/u3fYc5861P2E2OlSAOKfN7RWKZ1YzvtYg/iXgbwL+pHhpPUH6fG7Ogti+3YJYWWl/to3pGIDdeH7eHqRcttdksfgQxaWugaYFoT1BJ81vCagS8B0poGPH7Le1FLIfuHQMIMk5W7vFovYCVYKkBfEHAWXSWyIOxE6io6O/0MGD7ffujjUHYDNRq1klTE1pV3+Q4koQfa4jtg5SywRMTOzbt7oKXLo0O3v1qj9XnD3b1zc2ZpV17doVOnQo/YmyseYAkpzT60ybmDY3rXGbSeAdAr4nX/KVShT5Pi5ePHoUyOUGBnx7/71v74MIgvFxLbFuB7HuAKwSZmZUCbYkwlCvub8I+IaAWfJH55ERv9lp4MCOHf4keeDA4cOnTwONxoULjYZtgn5z/IG6H8S6A0hybonCUO/3VQI+IuA38sFVq34p9Pfb6UEDf5biHq2y4rdBMohy2YLw22c2bjuAZCVMT9t1ofAoxSVvAYyO7t9fqQTB2NiRI1bqmnFpDWKBgH9InzabyNhtB5Dk3FdUKKgCbC9wTru6NjcfxLZt4+P+YO1LXTMuOiD9ROpn716beVtEWdpwADbz1apVwq5dX1O9bj91Tu20hrWmfyQLwv+NYQct4GfSzGvgJ0+m3X+jNhyAWBA6Oudydt1esq1BaI2r1G3G9+yxdvrrsXsyC0DSBt4qGYT+b9BsdqvU02QewHplvauv16YHsNm2AujUoNdtBdCpQa/bCqBTg163FUCnBr3uP23NlWyWCFBlAAAAAElFTkSuQmCC"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(15);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _imagesBuildingsPng = __webpack_require__(34);
	
	var _imagesBuildingsPng2 = _interopRequireDefault(_imagesBuildingsPng);
	
	var House = (function (_Sprite) {
	  _inherits(House, _Sprite);
	
	  function House(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, House);
	
	    _get(Object.getPrototypeOf(House.prototype), 'constructor', this).call(this, game, coords);
	
	    this.startingResources = 15;
	    this.resourceAmount = this.startingResources;
	    this.moveCost = 0;
	
	    this.width = 64 / 73 * _constantsGameConstantsJs.GRID_SIZE;
	    this.height = _constantsGameConstantsJs.GRID_SIZE;
	
	    this.image = [(0, _Utils.loadImage)(_imagesBuildingsPng2['default']), 463, 118, 64, 73, -_constantsGameConstantsJs.GRID_SIZE / 2, -_constantsGameConstantsJs.GRID_SIZE / 2, this.width, this.width];
	  }
	
	  _createClass(House, [{
	    key: 'select',
	    value: function select() {
	      _get(Object.getPrototypeOf(House.prototype), 'select', this).call(this);
	      console.log(this.constructor.name + " selected");
	    }
	  }]);
	
	  return House;
	})(_Sprite3['default']);
	
	exports['default'] = House;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1a618c936a158eaf486667e579a4ca21.png";

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  map: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	  map2: [[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1], [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1], [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1], [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
	
	  MAP_OBLONG: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]],
	
	  GENERATED: function GENERATED(width, height, chanceOfObstacle) {
	    var map = [];
	    for (var y = 0; y < height; y++) {
	      var row = [];
	      for (var x = 0; x < width; x++) {
	        var chance = Math.random();
	        var type = chance < chanceOfObstacle / 5 ? 0 : chance < chanceOfObstacle ? 2 : 1;
	        row.push(type);
	      }
	      map.push(row);
	    }
	    return map;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAA7B0lEQVR4nO2dd5wV1dnHv+fM3LZ9l2XpvapIRFGxR2OPYEvMa+8lxhY0EhONBns09hJ7F40FRY1dLFgAFUF6Fenbd++9u7fMOef948zsvSAmSjFG9vf5DHu5d+7cmXme8/TnGWGMoR1bLuR/+wTa8d9FOwNs4WhngC0c7QywhaOdAbZwtDPAFo52BvhxQvxQP+T+UD/UDgvP8/7t567bRhIJ6G/bzxgTbHKdWI4AgjdM3uv1/QaiPRD044QxxsUSM2uMkVprACGlFICRUir+A5P4yGeIb37YzgA/HFKpFLfeeiupVGq9n0ejUXH22WfLgoIC4TgOQAmQARLr7pvJZNzVq1e7ixcvKly6dGnZ0qVLY1IS1RrHGDygBagDqtf5Dc4//3yi0SjQzgA/CIwxCCGor6+nQ4cO69vFwa5kE9BDKUVzczOhUKj34sWL9DvvvFNSV1c78NNPp/bv0aP74MmTpwxYtGhxaTLZ2gnLKGHWtukCxnkAuJg8SVBXV0dFRYU9r3YG2PwIGKChoYFBgwbR0NCAEAL/3gshhAFDQUG06rzzzt153rx5A2bPnjNg9erVPaPRWKd+/Qb2fe+9d0sAp0+f7ViyZC5gpUgkIiksFJSVCTp3hoYGmDMXMJhQCGEMSaCPEKLGGCPKy8vNvHnzKC8vb2eAHwr5DNCvX7+AAYR9HwNcYQy7AjsAFet+v6qqlCOO+DVVVU0qkfjQFBSuYtBAKbp21XTubGR5OXTpAi+9hDjnHCsG9twD8/g4tDFIYxgphHjFGOOUl5erRYsWtTFAuxfw34EEjC8Ergb+NHw4nHEGGOPqUMjo8gpDOIwoLNSirKxUDB4UIRLJOLDS/7pqO5gxMHo03Hwz7LkrPPUYPDwOoTXGdRGex/7AK6zPvcxzJ9q3zbRprTHGUF9fT3l5uQPguiIEPFJWJk3PnjIzYmc8Y9C5rwn/by9jvL1Mog4TrxtsmqqHm5plmETcfj5zJmbYMOvu/eE8TONXmJrlmC5dMeEwKhTCAFOFEAIQ5eXl1NfXt53XRkmA4ALb8e8RqACttQt4UlLmeeaZaNTd96WXHPX225nQFVdA7VIoq4BEHJQyICqtraDfw3p/cxFOHyo6d0a6q3nyScEppxjCIRj3AIw8ENIZWLAIVq+CXj0Qzc1Q38hgIehuDMtYx3XcKAYQQmAZqx3fAW5xcbHnuqKX1ozv2NEZ9swzrrf77ml3+nS7iOJx6FAJCHBCMQStGFMLEow2GCEo77yETLaSi86LcvvtKXbdCe66Cfr3gZpa6FgJK1dbtTBsKGL5CnT9NIqEYCiwjHXUwAYxgNYaKSVffPEFo0ePRkqJH6hox/rhAB54B9TUNN/bp4/bc8IEvCFDUq7W0Lmz3am1BbIZ0MZBksagAYHWBicMpR0Nc+fCccfV8tlnUUb/TnLJaI2UUN8AjgQ3Ag1N9nh9+0BZGXrqNKQQbM967IANYoBA7NfU1DBx4sQNvCdbBARtxOd04N6ttw7z2mtC9eiRdlMpiEYhm7U7OxLSKcAojAEhQHmGaDEUlsPTT8OJJ0HIgSfvS3HoIZKmJlAKXAe8LAgJAwfb45UUQdfObQTf1v+7ls7eKBUQCoVwHKddAqwfwt881+WP6TTXbr11WP/rX4oePdKO50EQkq+ts8QqL7MM4IQBA54HJZUQLoQ//hGuvx5GDIe7b4L+faGuXuNIgRSWpsZAKAprVtvjRiMwoK9lAGPo75+PIi8otNFGoFKqzaJsRxsk9gZr1+WmdJrfjxgRUi+8oGWnThmhlCV+kBdatgyGDYWKMqhtsGI8m4WO3aExCUeOhJdfhjNOgrGX2NVe3wAhF4y/oA2WAUQMVq6yx3Vc6NUDpASlqAAKWSes3B4H2PQIrGzXdXnI8zjukEPC3rhxyikqygqlwIb5c1iwEHbYDpwQyJC1Azr2hoWL4NCRMHsO3HwNnHY8NDdDJg1uyF/C+Xk/H0GqobQEunWGLp1hxUoM+cGDvJNtx6aDA2ghKHFdXvI8jjvmmIg3frx2i4rUN4gvAQx06wRHHAaeAa0t8T/8EHba0UqHFx6H00+wq95gV7ZRfCPZK3xq1tfZv+WlUF6G2GUHAIqwEmAttDPApoMLKCHoKgRveZ488I9/DHtPPJFxHemh9TdXvjRgEnDJBTBsO2hqgs594bnnYPfdobwE3hwPe+8ONTVWlAthRT3+X+MzQWA0Aqz2bYCQCwJEZQc0UAns5f9025m0M8CmQRDgGQy8p7Xc8aabIt6113qu8gwYS7y1oIGMXfGVHaw9UNkL7rgDfvUr2GVHePUZGNjXrnzXzRE/ILS17nKqIBSx7wcqwHXamCQw0HZd34m3Y+MQEH83rXk+5Mqqhx5x1LHHpFwvbXAEiPXdZQ+0ssaeNlDSBS67DK66Cg49GO66wa7g5rglvvLyVjv2rxB5GkBDSan/Ms8eNwa65VzBgbm9cyffjg2HC3iOw0ilGFdS4hY++5yr9ts37XhJY908DWuZX8K+Z7LWmHPCEC6G08+A+++D00+E6y6zId2WVjDaErq8AgqKwS3wf1WydkhH0SbYA6awcQTo3a1tz37BOfvfNu0MsGFoC/C4Lqd5Hvd07+bKFyYIvcP2KSfTAOEY+IG8tYmP/X+mFcIFkBLwq8NhwgT402j44/nW0lfa+vHFpdCUgk8XQF2jFe/V1dZeyKQtkUtLoH9/GDgQhg6FDhW5n8t60K0LIhaB1jTdgE7AiuBC2hng+yM/wHOJ53HNNltH9Mv/Mrp3l4yMr4TiMvwoAJZNAmvdD79kWyBSArXNcOih8NFHcNsNcPJvoKHRrnrXgZU18NBd8PHHILIQCUF1LSxdDulvqS3dfnsIhexrz4NMFjqUIzp2wHy9khIh6IVlgHYJsAHID/Dc6nmct/vurnrhRS2LQ1lRsxwqgoqv/IBr8FpDNgWhMli8FA4+CBYsgOefgQN28S19xxfdGpYtgYEd4fALoVd3iEQg40EiaVe29iWMEFDXAFOmwbjx8PlCu29JCaRaoSgK3bqgv16JIwT9gY/8a9HtDPDdEQR4Qq7LI54njj7ssLA3bpznqKQn6lZDaWmetR+s+CDoqm2sPlQOn31uiZ9Ow6QPYYcBsHwJhKO+fy+sFNhpB9hjF2hthVQaEhnQWQi7Vj0IaV+7LnStgn13g92GwyEn2dhCz06QTdt9u3exbChyhmDbRbXjPyMI8JS5Lq94HkeffnrIe368clP1SjTV2qSO6/jBmED8Y18bn/huKbz2Buy6i93/k8mw41awbLElPtp32/y/rSlobIasAjcMBUVQUGoPnc3YJJCnoNUn8qPPwaGnQlkJ/O2P0LAMZn5hmWro4DYLpG/uzNoZ4LsgCPB0F4K3PU/ud+llYe/ee7Nu7RKP1jiEIzaT5zh8owrfKOvuuaXw4ENw0AHWUPtkMgzsAV/Ph0jUfkfnB3Y0SGG3gCm0shImFLW/I4V1FctK4LYH4eTR0KMrPHUXDNnafj7pY/j5/8HnMwHQStPNjyNoaGeA/4TAxx+CDfBsf9vtEe/KsZ67eoHBS9uwLEA47It/RZv1rz2rn51i+Otf4dRTYORIePc96FQOqxbZla+1/x1fagR+fBDxkz5TBZE/6VgboSBmP7/gcrjiJjhobxh3B3TtDPEkpDKw888gmYDxr6Gx9F7mZ/Nl2z/tWC8CH39PrZnourLvU0876txzUu7yWRqjQLqA8Ve/9Be/9t3+LMgIZFw46SS44gr43e+suxcBapf4EsNYAgfhgkD8B5tWVjIEMAZSLTZMXF0HR50Fjz8P554Cd15tJUJLC3itdt+uVZgdt8WTkhDwT+B88srC2o3A9SMg/mFK8WRpaSj2/HhX7fPzlLNspg3wtOl6x950Ke3K1cau/HAFVNfDUUfBe+/CDTfARRdBqhESa/z9g2ieWZvwgQFp8j7HfzubhbJC+HQGnHkJrKmBW/8KRxwEjX4lkJeFkIbqBvTYu5FTvsSVktuB0eQFgYILbUcO+QGeUzyP+3v0dMWECejttmp1ls2EUNjf0yeSI3OpWaXAy0BBF5g1G0YeAkuWwDPP2Ph+8yrINFsRrrXvJDhWWuSv+uBE2rwIrMiXEopC8PQL8Pux0LkjvHg/bL+tLSpxHBv5C3swaQbeX+/GXVVDSkrOMYYH/KNtuqLQnxiCm+O5Lhd5HjdsNyykJ0wQpktZRi6bb5MtQWg2II4brH4/rl/YBV5/Aw4/zFb4TP4EdtoZGpaDSvhqg5x+F3lED9RHEO8X/jr1lPXrycLVt8Gdj8LOw+DOK6FjhQ0OOdI/tzQ8/ALerU/gZj0WOpLjleYTIdraz9aq3GlnAIvAFlKuy3Wex5j9Dwjpfz6tREhpsXqptfS1Wtswk9JG3YL3C7vAvffBmWfArrvCs8/ZYozqRUDaunKQt8r9/H/b6odc/MBHVkFRAdRXw0Vj4fX34ehRMPZC+/v1jZZRQg7Ur8H87QHMhIm4wCtScIrSVJOL/3/rhW/JkFgfH9flQc9jzHHHR7xXXjFCtGjRsMaKfa1yqzKgT5DscUIQ6wSX/MkS/9RT4b33oWMpLJtpQ7/S9W0EnVvpmhzzrMUEPjzPunhzZsGRp1ni//kc+NufrLqJJwABUQGzv0SdeQViwkSkI7lOCA7RhmpyRanrxZYuARysj18kJU96nhh54UWud+MNGbfua0O6xer3wBIXgPFDr4ERGCuClANHHQkvPA+33QbnnguNK6F+pW8jRHM6P4jygTUWPeUzhP+eEDk3sEM5vDERzrzI2gD3XQcH/twae4FnEPbg5XfwrrkftyFO3HE4UynGkbMgvlEGlo8tmQEcQElJJ2MYr5Tc5W83Rrw/XJh2qxcbvKxfehUQJ9DZ/m1VCqq6wpKVcPiRsGQxvPUW/OIXsGo+JBusZAgYxSjLPAEMlvjaL+0yQezADwAVl8A9j8Cfr4W+PeH2K2CbQTbmD+AKSDXBnf/Eu+95XGCWlByrFNPxg1f85+ERWywDBAGe/lozwZFyqwcedrwTT0i5qxfYpeU4OXHdBp8BMmno2Q++mAcHHGDfmzkbenSHr2eAl8oxDyLncwU6X/guoPLXpvYZTCmI+WnkMX+Fh5+GvUfAtX+wBmVDg/1uLAzLlmCu/gdm4me4QvAscLrWNPJv9P233YgtDYGPv5NSjC8qcrs+86zjHbh/2l0517pokFv56zJAOgXd+8AnM2D//ax1/tEn0LUClkzN7Rd4C66f3cu39oOaf+2Lf7T1IEpLoaYezvsTfDAZTvkVjD7VMks8aY9VFIE3J6KvvhexvBrpSC5Tmqv8I/9bff9tN2NLQkD8A5Xi6c6dnZIXX0Lt9LO0u2y2Deca1o7HtxVcOpBJQa8BMPETOOggqKqCN9+GXhWw9MucoQf2e45jN4lduUr5q19Z/Q9+osiz+n7aLDjjIli2Eq76Pfz6IEi0gDJ+ssnAXQ+jbn0CR2myjuQspXmQ3ISRf6vvv+2GbAnID/Ac73k8OHhw2H3pFaN7d8o6X8+zK3kta9xngsDYyqagzzbw+rtw4AG2Auetd6BLMSyfZ0W+Ckq1/V90HKvPg+JN8Dv7/eMqzzJCRSm88BqceykUF8CjN9gYfkOz/W5REcQb4co78F6ZhCsEC6TgBKX5hJy+z3cgvjO2BDcwP8Az2vN4dJddXef9943uXpGVKxfbla/1OmI/cNX86F6fofDCq5b4P/sZfDAJuhbDinnWTfS8tX16Ka3IDhAwktaW8F7WMkdRIdx0L5w1Bgb3hXG3wI7bQl29PfHSYpg7G3PSGNQrk3AdyUsYdtOGT8iJ/A0iPvz0GSAonfQDPOLvo0ZF9JtvGGImK2tX+Hn4QOSb3GvwiSShz/Zw70M2urfHnjDxXSh3YdVCGx30vLzkje8tuHmr35i1M3zpDER8prvgL/C3u2DUL+CBa6BzB7/T17X6/qXXUKdchpi7FMdxuFppRhmowfdiNvYGbSoVEKyy4DXkuNKs837+5+vc8k2KIMAjHYcHPY+TTz0t5N37D+U0r1KiJeEHeALCkMcA2GqdgkLoPBD+cjlcORaOOBIefxxMA9Su8le+yvMWfIJL6Tdl+NHCfAZJpeyqX7oMzr4Epn0Jo0+GU3/lV/20WHUkFdx8P979L+ICTVJyulI8Q17UclPcpE3FAAZQUnwjkrle6G+SOxCWgce9sWgL8AjBk54nR/7pz6539VVZt3axQfmduSoI7ZLLxgkBrQmo7ALRSjjmWBg3DkZfCDdeD/GvobXZhnXbLPngpP2Mu+vkdfHoXKFHNgslxfDex3Dmxbb695ZLYP/doTlpgz1FMahdhbnyHtS703ClYIaBY7VmJt/Txfsu2FgGCFzcAmB3bSgA+hnbhlQFlLE2cZNAPVALfAbMEIIaDOk8qn+X6Zf/DmsFeLQWu9xyW8g7/9ysu2qeQQrfYPPWJn7AdqkW6NEfqpOw/14wdSrceTecfTqsmWNPzg1DJuMTNy9QFKz+fAbwfJ2PX7794Di48Aro2QXuvhG26mMHOkgXSgth+gz05XciFq7EdSTjlOZMIM5mID5sPANYo9ZwtSvFBT07hGnNKMKuJBaWhByB8BuYBXYkVkvGsKgmHXw/aQxrgDeBN4TgY2NYxYYzQeDmDVCKCSHXGfzI49I7+jdpd/ksm7hx82LybXof+38vA/2GwPtT4YgjrBqYMB4O2AMWTYHiQtu67WVpy9gFufwAISdXHAK2di/k2vjCZdfDHQ/CHjvAledDaRHUN9lEU4EL419C/e0xnHgrniO5UGlu8w/zvf3773PDNgYacI3R++/cr1Df+JtuqrlVCwDPBs9FJqsxCLKeIZn2TOeyMFOXtHD5C6tkLCwLq0qcvjXN6syWjD7TGGoFXGrgHr4/xwfE31kpxpeWOl2efd5V++6VcZf7eXwp84jmE05Iv0PHsZb+3Q/A2b+FQQPhwduhbxXM/dyWezshqzaUry6UyjES2FiB6+SaQDNpKCywtf5nXwKvTYTjD4Xfn2ilQnMCYhHwWuDGcXiPvo4LLJOSE5VmIhvh33+fm7ahCFZpZ6DXtt1jUmvE3NVpUZfwUMaQVZpU1pDRBqMh5goWVGcY1iPGmXt14J736kyX0qgZuV2JTqQ0M5a1Vn6+NHW3EMw2hg/47kzgYt28gzyPp7t3d4tffMmo7QelneWzraUu/QROfgoWYYM7sQKo6AXnjIY774D99oAbLrP6uLoWCov9si2di95p4wd08la/61gJ4/iGX1kpTJ8JJ1wA8xfB5efArw+AJr/zJ+bCqqWY6x9FfzQTVwomGjhRa5Z9j2vfKGwMAwRSrjdQ2LU8bL5ckRL3v1/L8oYMySRk1jLyBZVFkr0GFRMJSXboU8ghjZ54eXqTSGe1HNG/kD0HFaoVjZ5c0+Q9KQW7aMNy/r27kx/gOdHzeGCbIa7z8stSdyvLOMsX+G4elvgBEYMwbboVSsshVAGjjoDXXoWzj4cLTrHWfUurFc+BL6mVbzjqnCRoU1R5rp/WUFkBz70CJ15g33/wWth5W5u/NwYiCiZ/ir7uCeSKWhxHcpvSXIgl+mYT+etiUzBAz7DrUBSV+rOvks6Xy1sBOPQwGD4c4s22sfHNNwzvvGN4Z2ESAK0NB2xbQnNK8f68BM0pzY59Y87BQ4vUc582d29u1ROEYG9jaGL9NkGQ7vRcl4s9j+v32BPz/HNKF2hPVi+DSCxXSp3vkxtjxXN5JWTCsM/eMGMa3HIZjNrXWuRC5mb4BPV7xsvZD4EHEIh/17HHdx1r7N1wN1x8FWwzAG66BLpUQm29lUC0wtNvoe6cgJPOkHIkv/NDuoE7vdlE/rrYFG7ggIKIRClj5q7KUFEOg/vAokXwwnjs0PIQ9OlgiyOPO8Hh9tsbaWgtYvf+xfx6eDktGc2nS1pwJPSrijh7DSr03pmTHJZM62cF/NKsU8hIjvg6qOA54kj0448iUjVGNsRzxAfaJmcEAZlMGso7QsLYJg3damvrtulvjbJQKGcvCHLuXBDoCRoy2nL4/vGLCu33zrgY7n8SRu4NV5xrVUJDE4gsNK2B+1/Ge/EjXGCBFByvNJP5HincTYmNYQDjNxh0Ly9wcBzBmkZFWSnccw3scjjsshu8/SpQDd07gdKa/fbz6NcvwgUXJEhmNAdtU8pJu3UglTHMXNFKNCQpiznu9r1j3tTFrfums/ph4BhyqqCtgkdKHvM8jjv7d6g7bkVWL0JkMzalGlj30slJAOUTv7QMUi6M2Bn6doKbL4fCqG+Rh/KuUORlB02Ogbygigfacv2VHW2u/qTf20ze6JPh7KOtodeUBDcDixZgbnnO0Z8vwA2FeMUYTjaGGucH0PfBdHJnnTElGxMKDlZjn5KYgxRGrG70GNAf+vWCp++AzyfDsSdDQUeoLLc7T56sOf/8DBddGGbywhZen9VEY1Jxxl6VDO0eY9byFKmsQWvj9qkMZQ0cLeBSLPFDgJYSxxgeUIrj/nI53p2346yYg8imrUEHuZUrg5p9YcV2NGoreA4ZBSP3gIdvsv11yRbrruVHsWSe3aB94qu8wE5QsFlVCZ9/CXseCR9NhbuvgAuOt21dLWkItcKkyajRdyM+X6AcUNdms+oQz1M1SilHKeUppdicm+d5KKVobGxca7zvhkoAAWhhGaiyQ5FLMqNpznrsMBxaUrDtQHjtEfjtZTDuCfjlPtblaWw0ZJsNN9yYxVMhbrmlhaKowx79izhtzw78491a5q9Js1XnCMVR6ZbEHNXcqq4Q8LqBqY5DRCkej0T41UOPkD36cEJfT7crNRIYbL7OlsYS3x+TBtgAzmPj4ORD4dD9YI3/PA3pt3UFqzoo/si3G/IDP8rv+ulYAc++Amf/CTpXwkt3w9BBsLLaz/Y1wROv4t33Cq4ybvNee+1yhpTu02zikO5/JJgvAYqLiwmFcmJuY22AKNChstjB00gwdOli6+gaGmFgH3j1QZj/tb2RfXpAc9xgUlDdYLj5Zo81q0OMeypOcVSyfc9CjtqxnL+9uoY1CY9uZSHRt2OYWStSTlaZ21yXoz2Pf3TqxAHPPIu3x3BCi2dYSz0cyZVoG22NLSlyGTmDTb0uXgA//xl06mibKoJuXuOHcdvq/fLKv4ID6DwVEApBNAzX3wW33A+7DoPb/mQl3apaEAoaVmJu+yfqtSnCBTO9Q4eS4954462Z4XD4B3Hx/hOEEBs7KJJKoKJbWZissrZLUSkUV4Ceb/vYoxHo2w2a66G0RDB4UAhEhngNFJUaHn5E89VSl+c/bqK80KV3eYS9BxfzyowmygocYiHhDO4SMYtr0yOSKfPZkCGi4rnxRvfqgLvgC4gW+IUXMjdISWEJKmXOmMskobEGOpQCxjKowC/REmsbikLk1Id9MycFslmIRa2Uu3AsvPI2HDcKLvstOALqmiCsYfos9HWPIWYvxXUcntSKM7U2iXg87paXl3vBBPH/BmTexKoNtQEkgDKmE1DQvSxExkNIIZj2maAOqOoF3arsDW5NQSphrbhIxLENk66tmnUdxXPPGbp1d3huciMtWc12vWJ0KwsxZ2UqKKsSyZQw++zjVHwwCd2lCLl0jiV+4K6F3LULMKRfkBEkd5pqfN9dWVsgaLjMDwcHhG9jALH259kslBXDshXwf7+1xL/8d3DNBfaYyVaIGXjtHdT5tyJnL8U4kou15lhjJ3Q6UkpPSsl/c/sGITcABmxxLIB0BFFXUlogue12Q6fusPtR8Oeb7Ahzz7PbDlsb7rkvSzzp2HCpgrrl0KWL4uUJghYU786N06FQcsCQEpSChTVpvliaZuQoI1591ZiwNnLVIogVWsK4QfjV9Vup/ZMTvgXfmoDmupwNEJR65Sdw8tdhIP4dmRvkCH7ZVhm8NxkOO82OabnvSjjtSGhK+IZmCu54HO+Se3Aa4qySkoOV5gYs7wt+QP/+u2KjGEBKsRRYFW9VdCoN68GdoxQXw5UXwn4jgDAk/Rsdb4JdhsGCeYrnXkSVltrSqFQcGqthu2Ee993j8vGiFpbWZxjaM8YBQ0uoblLsf4DhxfEGR2hR/ZXfosXaVr7ji/ogUOO4VuokGqzlrvwS7GBra8akjcZtnOD4DZ/gG3vYRNA9j8Nx50HHcnjyRth7J6hrhoIwNNVgLr4FddcLuMbwgRDspjWvs5ElW5sbG8MADva5dBOe+bQRV6J3G1BAsYjSmIR7HoMb/gxbDYJYGWSB/j1g2wGGv9+hyGQwwWqLV1sRfcIJirPPdrj1jXpaMooRfQuoKgrz9TI7E6e1GVTarlKjfb3vr34hbJOl0LaVqrUZEvX2e17WJ3pe8UZ+8YfMEwECq8sx9ruRsP38j9fB5TfBnsPh/iuhXw8bMSwNwawZ6JMuR7w2GceR3GngF8awhB8wpLuh2KiSMF83PvblsiSff5WQlcUuhwwr4sa7JHddZ29gY6Pdr7DMTrY4YRTMW4D815vokuJcpWzzGkg2GW6/XbPdDoJ7366nY7HLroNizJkNr73uEGZto01KX+9Lm3Yt6gAmBq+/Dckmm4v3/O6bNkNO5XIBgR5rCy8Gx3XsuRf76drjzodHn4UTD4Ub/mBjDa2tUGzgpbfwTrwSOWcprY7DaUpzDpbff9CQ7oZiYxggiMp9KIR8/dlPm2TWM6qqxOGAbYr43Z9h8jR7E9NpX7qG4ecjoG83xDU3Y9IpdGBoOa5tpxJoHntY8lVzmoVr0uzSvxCBZNw4SLfQprTz27MMUNQLPv4S9j0MalbblZtJW8PN+K1dgR8Pedb+ujdEWGlRUQrTZ8HIU2DSVLj0LLjgBFu2lUmAbIFbn8A772bchjjzpGQvpXgAK/IFP3BId0OxKYpCheOI8+sSXvKpyQ1SIMz2vWP07RDl1AsxK1ba+XZBNK28E1xwEsxbgPP40+jyslyBhVZQvwyGDPHo1BnenJGkX8cIXUtcJk/W1NUI259vfPfOg0gRFHSDG2+yHbl7bQ2H7Q9N8Zzez1/5bSed598LfLWCZYCKMnjuVRh1qp22cd9YOGxfO/DBi0PDasyYO9F3PI8rBON9fT+VXEj3R6nv14eNZQANSK3NPCnEabNWpsSXK1p1yJHsN6SQr5YJce5fcnXxAmjJwIG/gF23Q4y9EWfJYojGcg9PaKqzBNtlhMPsVWkynmGbblFqaoyOx40OYvPZDJRWASVw7HHwhwvh/OPg/NOgps5P3QaGXn6597qk8RlBK8uoJcVwwz3w2z/bpNYj18KwrWHFKtDNMGcB6oLbEW99inQkVxjDEcZQx/+Avl8fNoUEUIBrME8JwdXvzEk4LWmlymIuv9i6kClfwF2PWSta+R0xRsJfLoBkEjHmCtvx0nYwBaQNo0ZK0lqRSCsGdYuQiCNmzkPHYlb/duoBjRr23huefAIuOQPOOhbiKavz21a/zrP88Ve+f9WBFFAaCgvt57+71DLAIT+HO/9iO3ZWrwKRhLen4P3xHpzFK6lzJIcrzV/JKz3fBPfyB8em6gtQxg7GHtvcqma9PSchhUBt16OAvh3D3PEoTJpiV5c2NvEyqD9cMRpeexfz4OO2Js7L2shhvAZ238XguPBVdYZuFSGi0hXvf4IwHnTrDUtqYMQImDIZbvojHHUgpPLi9EHhRluXT55WDgI9CHs+ZaWwfBUccx688AaccyyMPdd+3lAN8RrMI//Cu/Fp3EQrU6VkN6V5ASvyN1Ul838Fm4oBDIA2ZITgD18saxEL16SRAn6xdTERR3LZTTZd6vqlHQ3NcNwRcOTBiDFXw5SpmKiws3Umvge9exjKKmFpdZbCiMOgqijT5yI79oGZX8GIXayP//B1sOcOkPSLL9s6dIKVn9eD1zaWhVxZWEUpvPw2HH6GNfquHQ2n/doOZm5tgFUr0Dc8Bc+9jysEDwvBz7VmHj9QydbmxqZiAMgNLH/VGCa8Ny/upD28spjLAdsW8/VKuP5uKIj4rh+2Lv6qi2D4UDjtYozJwgOPwruTIRQz9O0HX9d6uNLQtdylphbx6SzYax/oXgmP/s3q6ZpGKCjwU7XrBnp8A5A8q19p6z4WF8FND8AFY21M4aFrbQXwipXgNcG0majLHkB+Ph8lJRf4+fsW/kf1/fqwKRkAsE9JjcWiF9e2iNQnixMOYAZURdm+VwHjX4e3JmFKinJiWnlw77UQDSP/cA2sqcVECgCt2XtPyYxlKeoTHt07uqxZKTnoIPjl7nDPWLt665os8YKxavlTNdti/XmxA0/ZLB7AmOvhjkdhyAB49HrYZiCsWAo6Dq9Mwrv8IZxVdSyTkgO05lZ+xCHdDcWmZgANyEwmO0+iz/10SYtYVp9Rxhj2HFhEt7Iwl92MqanDhELk+uRCMO42mDEHPpiKiEUhW2uHH7cIj4wHHYodRvQuoqlBsO9udlBiSyrPtVvX1TOsFe4F/zl8RXbA4iljYPzrsPfOcNfl0LEMVn8FrU2Ye15E3fE8bjrDRGldvHf4kYd0NxSbmgEAlFLK1Vrfrw23vz4z7rZmtCeA/bYporZOystvQUT82TsC62sXF8LdV0KvbrYMu7UVBnc39O1nzBdLUgzsHGbHvgWcsmcH/nKTy59usd8POnvFOhIgQFAX6Cnr389aAMdfBNNmw5m/sTo/3WIzk2uq0Vc/hnj5IxwpuE0I9tf2gcs/GZG/LjYHA4DN80ghuLShxfv6zdlx12B0eaHLvtsU8vZH8Nh4m1rNZPzq2xD07AP/uBK26mdLqVw0Jx5h1IszGs2dr9fheZpOxS7/t2MZb7/nctZYW7dfVGBDt22DHYIkT95a7VAGr30Ax462BZrXXQQnHwG1q0E1w+SZeGP+gZy+kFYpOUUbzjemLdr5kxH562JzMYABhDE0S8HpC6vT5vOlrcaRmEGdowzoFOFv91mRXxAB4drn4WQUDNwKqiK2mCSVhqMOxXn0HteI7hluebWeBWtSdChy+f3Blah4hNOvgM9nWwIHmcBgwKLWNllUXAR3j4Pzxto5+nddDjsMhGWLgDQ89z7eVY/g1jWxQEr21pqHWLun8SeLzcUAEASIDG8IwV8/XpR0qps9HXIEO/crICIcLvl7Lk+gPEDbu13RAUyqrYtYHLynJ18fJzj8/wRPTWniowVJEHDKzysYUlXIedfAA/+00zWCmb1K2XxAKgt/uB5ufgh+vhNcf4F9euLqr8FLY257Fn3fBFyledkP6eaXaP+k9P36sDkZAKwqcICrssp8OGl+wgFUccRlt4EFzF8s+PuDEJGQjOfV3+u1w8c1tVC3Ksv9N3g89ojLlNVJXv88TsrTHLZDKXsOLOKau+GSG+2Puq7tyWtOwDlj4ZV34TcHwDlHQP0qaGmGRCvqykcQb0xBSslVAkYa0zZ44Sep79eHzc0AtsjWoIXgN0vqMs0Lq9MyEhKmW1mY7XtFeeplePFNCCn/0enkJXD8g5R3tk/Pql9tOOznWT5+z6GpOM2rnyZobPXYZ3Axv/xZCePfhDMvtVnA96fC4efAjLlw6i/hsJ2hoQYKIzB/Od6l9+HM/ooaR3KE1lxm7L34Sev79WFzD4kKWrqMFJyuNNGJc+Ome3lYFkYctu4aY2Wjx9i7sgzoYQcvIW1BhjG2rFt5NqW7qgmijqAwZegcyfLuq5J9R7YwYQqM2qmI4b0KqSh0eOyjRo4ebWhogm16wr4joaoclq2x/v/7MzFPvomrNB/7XbgL+IlE9TYEIr9J4LtCKYXjOEycOJF99tkHKeX6Hh/f1skjBXdow297VYRNY4sSHUtcDhlaQsozrG7K8vIXzfTtbXjgKigshVip30Pnl3x5afssnPqE5LdnOpz66ywRQJRKRh0DK6aF+dUeRVQUhFnVlOWeibWEXMOAbtCQgOYWgvm8utWOJviHEFxoDCl+wK6c8vJyFi1aRHl5Of/NquB8bC4V4GJHtFQJwcva8NvhfQrVr7evEPsOKmFhdZqPF7cQC0k6l4YY3jfG/CVwwwMgs9Yvl45fhu1BWTnstRN4rZpF07NMmWoDSNkGzcR/SUaMVDz+Xpw1TVm6l4c5f7+OeApmL4WmuINREldIMDIIB//TJ36ILXTlB1iLAYwx33tbB4JgDKtgZ2P40BgOGjWs3Dt1ryqnojREj7IQ+wwsZvLiJF8sayEaEgzsFKVXZYgJ78CL74DMQKI5V/bVmoGzT7Bdt50qYfgASGdtsKh2kcdzTysuHOvx+AdNLKpuoUupy+l7VCIlREPQp2OIqlKHLmUOrhTSwEPY8TVB02nuAoTYrNuPDWsxwHe9CNd12/7mf93fPCk5URveLS90+48Z2dU7cGiZm2zVRCOScFQyrFuMvfoXM3Fugq9qM5QXOuzQq5CiqOTGB+0whUwjNNfaqp+WJIQE/OUcuOUhW58X82P7qVaY/7HmTxcbRl8ueHRSM9OXtzCwc5iTd6ugPqlY0+wRcSVaIyuLHCWgD3YKSVDc2oYNWQT/adNaY4whm81uXmpuANaiYCKRIJvNtumsb4PWGiklTU1NwVttxp4jxXVKmzG9qyJc9MtuOixwGxIeIdcyT0VJmCUrW9i+ewFL6tK8NrOZY3epoHNpiO17xnh/fgtX32O461JoaYSMP7I9m4Xdtodzj8f89XbEsG1gu+0h7buOcz/QXHFJhpkzBeOebiLtGXbrX8Rvdirj6SmNRFxBRaGDFNopL3S8+qQ6CpgC/J08OyAajRKLxTaLji4tLf3RSQERcKiUklGjRjFp0qRvM+raENycbDZLIpEIjL1CR4qHlTa/GtKzQP3hkG4ynvBEotXDkQIDuI5EClhdl6Yx7tHqaZ78tJ5OJS6jtislrQwfLkwwd2Wakw+3RZiNCcsAQay/vAzOG4uZswjxykO2EtjLWiYIhaCsp+DgIwVTPzGMGlbCngOLmDg3wcvTm+hfFaYgLEmklVnd5OmWjAHYD5jouq70PE+PGTOGMWPGtBm6m+Qm+wtKSklJScmPignWkgBNTU00NDR83+97QtBTwNNKmxE7Dyj2Ljigi1vdkKYlrQk59mKNNmg0WkCH0jANiSylUYe9BhTx1tw4n37Vyi79C/lZ9wKqmz0efkExfIhtJkm05J7PF0/Atb9HHP17OOcv8MSdoHxFlkpDYpVhwrOC3fYWTJjWRDQkOGjbUmriWSYvbmHb7lGKo44wRohlDVnpKfMYMAJYCciCggJdXl6+kbf1fwdr2QD5uv072AKOEMJzBLsYwwfaMOKY3Sq9MQd3dVfVWuK7rsjrurGMoI1ASqgqC9Oa1QysirJ1lyhTliT5qjZN59IQu/UvJOQIrv6HnakTPJcnGLMeisB1v4dJn8KYq9HFBRjl2f0SzUCT5unHBcWlgn992cwXy1v49Y7l9KoMM39NGtcRFMekrCp2PSHoBtyEVWFCKdWmrzeHPfBjw4Z4AcIY4xhjlMAcrwxvF8ecnpcf0UMdO6LSXbiyhXRW4Tq5jou8FD1gEEAs4tpn4CrYo18xnUtCvDMnTjyl6FkRYYdeMVbWwHX32bkCQUWPI+3wpgH94dJT4KkJiNsfdUzX7nbiVzgK1atgcHfFE48L4q2aN2Y2sbrJ48gdyhAI1jR5hBxBSUw6FYWOBg4Rgu6AFkLILdYL+K77C1ACrtGGR3fqVxT7x8l99Q69CpwvvkrY4L8r21KzWgcxXdM2WUMIgacsOyhtKAhJhnUvIJ7SvD8vgRSCgZ1i9K4M89bHcM9TNuUbNHi60iZ5Ru4DR+yNuPYmLV+Y6NK1pyCVtJJg/gw4ZH/NDTc6LK3N8v78OLGQw1ZdoixvyKI1hBwhSqKOKQjLmNJcB99p0u1PCt+HAST+8GUEjxi45Iy9q9SNx/QxEuT0r5JIIXD8nitjLHEhqMyy91UKUMqQynhoZSgMSxbVpnlvYZywI1hYnWby4iTFUcl2PWKUFTjc/RS8N9VO1mx7EIMET8BZR8KOWxtzylmaL5dC3+2gsANUdoNkEi66UHPWWS5TFrcwf00rw3sXEHEFX9VlMBiExKkqcVTYFccCRwghgtrGLQLflQEcLPGLBTxvDCeMObiLd/IeVc6c5UmxYGUrjhR+5bWvKsgRXvtLX4igQ8gQb1FEQoIvlrcw4ctGwFYQdysPMWVJkgXV1h4Y2j2GKwU3PoRpiNuy8aC4MxQGJwwXHouoKtX85mhjFn5pcwmhKKxeDeNfMJx7Duy0k8urM5opjAr23qqYhqRieb1HQ1LR1KqFK4UBbgBKIHj8808f34UBgsnbHYB/acOoCw/s4h2yXbk7ZVGCNQ0ZfyZwXkGmEf5j1kRbYSYIlLJM0Nzikc5qPlqS5INFCYoikr0GFVFW4DCsZwFhV/DB/ATxVk3fjhEGdYmwfDXitkcxxQW0pYmlADdmp378/hhYU4M490JY/gXMeg+WT4b7/w7Dd1Qs/dqQSGumLmmhf6cIhRFJY4uiIalIprUIOQigr8H0ZgtSBf+JAQLidzGGN41h94t/2c07aGiZ+8miBI1JD0f6eh4IzDxtDAKDNnYTQqB8onmeoa4py/sLE8xY0WoHRA0sojjq0JoxFEUEfSrDtGQ0b82Jm5ADW3WJUlns8twbiDc/gpLC3LDGwgKbKezbFX73K/hgGjzzNrqi3J7NFefC9RcYRmylcENQG1e0pDUtGU2HIoch3aL0qggRC0mAJoFYs9bF/MTx7xjAjl23xH895IhhY4/s4e27dYn7ycJEm48fPCHDEAxR0gif8GDFtTYGiQEjWFmf5s05zcxdkyIaEuzcu4DSmENWWVGR9QyDOkfpUOSaNc1Z8eHCpOlUGmKH3lYVjL0LGuO5eUDpNLzyAcRb4OBdYfhguOURxPwlEHagOW6nc5/1G8BANCRpblUY/3XYlTiOIJU1YMe4JDfvLf9x4dsYQOITXxtej7hi26uO7OHtPqDYnbwgjtbGGgXaYHwrX/l/hRDW7QtcQG0QxmAMfFWT4qUZjSysTRN2BXsNLGKbblF6dghTUeigtLUdYiFhoiEhBGRnr0yJWctbTe8OEYb3LWBlteDeZ9CxEBRE4clXYPocqKqwAaOzDseEXLjxYXzpZJ/S8flsf8xLsUNNwiYAI65AG4MxQmetFFuJZQLBFiwBBLaAo1IbXgu7YtvLD+3ujehX7E5ZEG9roQ5g8C0mv+FOGWF1vxBtqkEIwZLqFBOmN7C0PkMsJDl42xK2711AUVQSkoBvOIZdYaYvazUrGrIawcECJn20KCkakkoN6hRhaI8o9z+LmDYXWtPw4HMwpJ89kUQLVBQhTjkYPp0F49+C4piVFLMW2ksri0lq49afDLv2QjytA49l5b+5Lz9JrHuh1rayTZNPhxwx9NJDunm7Dyxxpy5qJpU1uFKgtLGrXAi7s7FBJKWt7ge/9w5ByBF8VZPixemNrGzKUlXictSOZQzpHkNryHoGT9kHSURD0sxZlVZzV6elEJxjDG8h+G3GM03vzo0L15FmUOcIHWMRcc29cMujdgLZjttA0i8nq2+G3bZFbD8Qbn4Cvl5lo4jvfQYRR+JKQU086weV7LV4yhh/yt2CvPuwRWBdBpDYTt9LoyGxz6WHdM3us3Wp+8XSBE1JRSgk7Yh0X9d7nmoLbxpj2qZ0KW1dwbAjmL8qxbOfN7CmOcvWXaIcvVM5PTqESWU0ntJIAa1ZjTLGLKpO6+nLWl0huNQY7gYixjBTCM6rjntyyuKkKo25DO0VZvkylydfhkG9YFBPe+Ih33tPtsApB9rV/+fb4ePpsGINdC5zaM0amlsVEVfgSIPWhoxnhLLXMfcHuu8/GuQzQJDVG66UvvyX25apA4eWu7NXtFDTnMVxrEgXwp/BJwSuI0EKNNbSDyJ9xhhiIcmMZUmemlpHbcJjWI8YBw8tpSDi0JrReMrYx8gAja1az1udNtO+bnWEYIwxXI1NNGWwpeWPCsEjXy5vdRdWp7yqkhC9q8JIaR/efOPj8O5ntgo45I9tLy+G84+EpSvhhoetWOteESKR0mQ8e36OEHjakFVG+nw8278XW4T+h7WzgUYI4QJ/i4Ud55DtKtSyurT4ujaF64/bNNq0DeAzRrfpeEcIVNvsHUNR1GHqkgTPfVaPp2H3AYXsPqAIbSCdtd9zfEaqSyr9xdctcsbylBZwqjE8yNp1egqQxnCOgGGT5ieH7j/EUQOqok4ma1jZmGXSdMWk6YaCqC0ADXIusTAgYHUddC13KY461Cc8tIFY2DJsVmEyyghjRD0w3//Nn3QzSD4CBghcvv2BvUf0K1Ldy0LOxwvj4D/2KWirNsK0DVCUUiCEfT6QTXQYCiMOkxbEeWFaA44UHLxtMcN6xUhnDcqYtpp/xxE0tmj14YKkM3d1qkXAMQZe5JtFmkFQJoHg1542H70/L1FxyM9K1I59CpxkWhFPKVY3e9TFFcl4LgTdbKBTsaAoKqkqcVEKmlOWtqUxh4wyeNpoT+EI+ByoM8YExS1bBAIGCIyebQHTr2PUxFsVrVnr6+dq9E3b7q607p6njG8IGiIhyatfNvDO3DgFYcnIn5XQv1OElozOPacHiIYEybRW78yLOwvXpNcIwZHG8CHfXqGrAccY5gvB0Ym0ev2NWc3O9r0LdXFEypKYS0VhCNk1eGCTvZy0Z0ikFJ4yeNpKnJWNWcpiDmFH0NiqMBqTtVGqV/3f2iIZAABtaATE4M5Rkcj4qbe8Bg0EuAgcKewoLD/KpzHEXMGE6Q18tDBBZZEt++5SFqIl3eZioTUUhCUtae3968tmd0ltZqEQHGLMd5q4EbSavSkEJ9Un1X3vz4u7JVFHRUPCKYxIXMd6JdIfH+dpQzpryCjroQQM0bNDmERaI8BoYxxPmYzj8kpwGzbNrf3fQMAAfrTeukEZZfzUjh9M8eeq2IYNQVqbtslIRth07huzmvhoYYI+lWEOGlJCccyh1df30s+Dh8OwJu55r37Z7FbHvUVCsK8xLOW71+Z7BEYhuBnPPFBrgzoeuc6eb0Xg+q1qzBJxBbGw1KmsFgaWCFiUfy+2FAQMELj104HaSQvilUcPL7O6Vwj/SUY2aqa0RgqrFhwHQo7gjVlNvD23mUGdIxw0pATXEbRmbCWsIwVCCsKOYPbKVu/N2XE3lTVfCsGh35P4ASwTwIPAV0Jwp4DBUgoKwkKFXWmMr7Okz8ZSWkM1UGPxlBbNdgv4+DXjH/d7nsv/PPIlgKONaQDenrQwftR+g4tUYcRxPeXn8I3B86137bt5aU/z/Gf1fLG8lZ91j/GLrYoByCqTI74QuFLojxcleX9+wgUmCMGpxlDLhjdiBiv+HWPY3cB5WpkT4ynTK+yYtWYD+LUo/nu5xe3HehPADGwa2GaztzCsZQP49+f25hbvN89Pa3AO267cxJUSWWUjfyEpcCSEXcnSujTPT2tgdVOW4b0K2GtQke8N2GM50toKqaxWHyxocT79qgXgUgFX+7+zsY2YmtzA6suBO4zhyLRnoticfhHrVwkJYDnwNdbvX55/CzbifP4nkc8AbbN/XVee+8GC+G0VhQ479i4yUiIcIUikFMmsZubyVt6Z1wzAXgOL2KF3jKzStu6N3AzfZfUZ7+PFSXdZfXaNgEsMPGTsbwQphI2FwvcqgRrgHxt4nC0m+bMu1u0OtqvKcIeAmgnTGx+bsiTpFEUd5Snj1sQ9EmmFENCvY5gdexfQoyJEyrOGnjZWPWQ8w8wVKW/KkhY3q8w0ITjKGBayeXSsIdfi9X1KuYJSlf/pQY8bi/W1hysDIQNPY4itaso+RFNWArq8wNFbd4nSrdylS0lISCnEiiYPR4CnEEobGlqUnrMqZZY3ZF3gn0JwijEk2fwGVsAI7fgeWIsB8p4rkzXG2MmYiNXAXxHslPKE/LrRY2m9h5QpQo6grMAh5D+oR2tY0Zh1WtIax5F/By6yVcBIfuTECa79x1i6vTmxFgMkk0m01kFbWGBpv+ZvB3ow0N81BuwKdK9PZA2207YUSGOt6keU4mlyEcYfvXWdyWQASKfT/+Uz+WEhgoYPIQTTpk2jsbFx3X3+3dO7AwqHsbOXlIFm/6P/qZBq0L/Xu3dv+vTp86MZ4LC58V0nhNhY0NqFEpr1E/h/enz6loa1GCDoY9+Q4+S9/p+2qIUQ33i23k8ZGzQjqB0/HWw5rN6O9aKdAbZwtDPAFo52BtjC0c4AWzjaGWALRzsDbOH4fwSGSRVPjgJFAAAAAElFTkSuQmCC"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map