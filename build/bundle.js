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
	
	var _spritesKeyboardPlayer = __webpack_require__(10);
	
	var _spritesKeyboardPlayer2 = _interopRequireDefault(_spritesKeyboardPlayer);
	
	var _spritesGatherablesRock = __webpack_require__(18);
	
	var _spritesGatherablesRock2 = _interopRequireDefault(_spritesGatherablesRock);
	
	var _spritesGatherablesTree = __webpack_require__(22);
	
	var _spritesGatherablesTree2 = _interopRequireDefault(_spritesGatherablesTree);
	
	var _spritesTerrainGrass2 = __webpack_require__(27);
	
	var _spritesTerrainGrass22 = _interopRequireDefault(_spritesTerrainGrass2);
	
	var _spritesGatherablesHouse = __webpack_require__(29);
	
	var _spritesGatherablesHouse2 = _interopRequireDefault(_spritesGatherablesHouse);
	
	var _spritesGatherablesHouse22 = __webpack_require__(32);
	
	var _spritesGatherablesHouse23 = _interopRequireDefault(_spritesGatherablesHouse22);
	
	var _Renderer = __webpack_require__(33);
	
	var _Renderer2 = _interopRequireDefault(_Renderer);
	
	var _ViewPort = __webpack_require__(34);
	
	var _ViewPort2 = _interopRequireDefault(_ViewPort);
	
	var _spritesUiStatusPanel = __webpack_require__(35);
	
	var _spritesUiStatusPanel2 = _interopRequireDefault(_spritesUiStatusPanel);
	
	var _spritesUiCursor = __webpack_require__(40);
	
	var _spritesUiCursor2 = _interopRequireDefault(_spritesUiCursor);
	
	var _spritesUiQuickBar = __webpack_require__(42);
	
	var _spritesUiQuickBar2 = _interopRequireDefault(_spritesUiQuickBar);
	
	var _Utils = __webpack_require__(13);
	
	var _Maps = __webpack_require__(44);
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var UnitTypes = {
	  House: _spritesGatherablesHouse2['default'],
	  House2: _spritesGatherablesHouse23['default'],
	  Rock: _spritesGatherablesRock2['default']
	};
	
	var Game = (function () {
	  function Game(canvas) {
	    var _this = this;
	
	    _classCallCheck(this, Game);
	
	    this.canvas = canvas;
	
	    this.viewPort = new _ViewPort2['default'](this);
	
	    this.userInput = new _UserInput2['default'](canvas);
	    this.shiftHeld = false;
	    this.tickCallBacks = [];
	    canvas.onblur = function () {
	      canvas.focus();
	    };
	
	    this.layers = {};
	
	    for (var layer in _constantsGameConstantsJs.LAYERS) {
	      this.layers[_constantsGameConstantsJs.LAYERS[layer]] = [];
	    }
	
	    this.renderer = new _Renderer2['default'](canvas, this.viewPort);
	
	    this.cursor = new _spritesUiCursor2['default']();
	    canvas.onmousemove = this.onMouseMove.bind(this);
	
	    this.quickBar = new _spritesUiQuickBar2['default'](this, [canvas.width / 2 - _constantsGameConstantsJs.GRID_SIZE * 5, canvas.height - _constantsGameConstantsJs.GRID_SIZE * 1.5]);
	    this.addSprite(_constantsGameConstantsJs.LAYERS.UI, this.quickBar);
	    this.quickBar.setSlot(0, _spritesGatherablesHouse2['default']);
	    this.quickBar.setSlot(1, UnitTypes.House2);
	
	    this.userInput.onLeftClick(this.leftClicked.bind(this));
	
	    this.userInput.onRightClick((function (x, y) {
	      this.gridRightClicked(this.viewPort.toGridPos(x, y));
	    }).bind(this));
	
	    this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.QUICKSLOT_1, (function () {
	      _this.enablePlacementMode("House");
	    }).bind(this));
	    this.userInput.onKey(_constantsGameConstantsJs.KEY_BINDS.QUICKSLOT_2, (function () {
	      _this.enablePlacementMode("House2");
	    }).bind(this));
	
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
	      var _viewPort,
	          _cursor,
	          _this2 = this;
	
	      this.mousePixelPos = [e.layerX, e.layerY];
	      this.mouseGridPos = (_viewPort = this.viewPort).toGridPos.apply(_viewPort, _toConsumableArray(this.mousePixelPos));
	
	      (_cursor = this.cursor).setPosition.apply(_cursor, _toConsumableArray(this.mousePixelPos));
	
	      this.layers[_constantsGameConstantsJs.LAYERS.LAYER_GROUND_PLACEMENT].forEach(function (spriteToBePlaced) {
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
	    value: function enablePlacementMode(unitType) {
	      var sprite = new UnitTypes[unitType](this, this.mouseGridPos);
	
	      sprite.beingPlaced = true;
	      this.setMode('PLACE', sprite);
	      this.addSprite(_constantsGameConstantsJs.LAYERS.LAYER_GROUND_PLACEMENT, sprite);
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
	      this.worldSize = [transposedMap.length, transposedMap[0].length];
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this.selectedSprites = [];
	      this.cameraPanY = 0;
	      this.cameraPanX = 0;
	
	      // this.loadMap(GENERATED(100,70,0.2));
	      this.loadMap(_Maps.MAP_TEST);
	
	      this._player = new _spritesKeyboardPlayer2['default'](this, [0.2, 0.6]);
	      this.statusPanel = new _spritesUiStatusPanel2['default'](this.player, this);
	      this.addSprite(_constantsGameConstantsJs.LAYERS.LAYER_GROUND, this.player);
	
	      this.initKeyboardPlayerMovement();
	
	      for (var x = 0; x < this.world.length; x++) {
	        for (var y = 0; y < this.world[x].length; y++) {
	          if (this.world[x][y] === 0) {
	            this.addSprite(_constantsGameConstantsJs.LAYERS.LAYER_GROUND, new _spritesGatherablesRock2['default'](this, [x, y]));
	          }
	          if (this.world[x][y] === 2) {
	            this.addSprite(_constantsGameConstantsJs.LAYERS.LAYER_GROUND, new _spritesGatherablesTree2['default'](this, [x, y]));
	          }
	          this.addSprite(_constantsGameConstantsJs.LAYERS.LAYER_MAP, new _spritesTerrainGrass22['default'](this, [x, y]));
	        }
	      }
	
	      this.enableDefaultMode();
	    }
	  }, {
	    key: 'selectSprite',
	    value: function selectSprite(sprite, addToSelection) {
	      if (!addToSelection) {
	        this.clearSelection();
	      }
	      sprite.select();
	      if (sprite.infoWindow) {
	        this.addSprite(_constantsGameConstantsJs.LAYERS.UI, sprite.infoWindow);
	      }
	      this.selectedSprites.push(sprite);
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      this.focusCamOnPlayer();
	      // this.moveCam();
	
	      for (var layer in _constantsGameConstantsJs.LAYERS) {
	        this.tickLayer(_constantsGameConstantsJs.LAYERS[layer]);
	      }
	
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
	    key: 'focusCamOnPlayer',
	    value: function focusCamOnPlayer() {
	      this.viewPort.focusOnGridPos(this.player.gridPos);
	    }
	  }, {
	    key: 'moveCam',
	    value: function moveCam() {
	      if (this.viewPort.minYInGridUnits + this.viewPort.heightInGridUnits + this.cameraPanY <= this.world[0].length && this.viewPort.minYInGridUnits + this.cameraPanY >= 0) {
	        this.viewPort.minYInGridUnits += this.cameraPanY;
	      }
	
	      if (this.viewPort.minXInGridUnits + this.viewPort.widthInGridUnits + this.cameraPanX <= this.world.length && this.viewPort.minXInGridUnits + this.cameraPanX >= 0) {
	        this.viewPort.minXInGridUnits += this.cameraPanX;
	      }
	    }
	  }, {
	    key: 'spriteAt',
	    value: function spriteAt(coords) {
	      var countPlayer = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	      var x = coords[0];
	      var y = coords[1];
	
	      var found = undefined;
	      for (var i = this.layers[_constantsGameConstantsJs.LAYERS.LAYER_AIR].length - 1; i >= 0; i--) {
	        var sprite = this.layers[_constantsGameConstantsJs.LAYERS.LAYER_AIR][i];
	        if (sprite.pos.x == x && sprite.pos.y == y) {
	          found = sprite;
	        }
	      }
	      for (var i = this.layers[_constantsGameConstantsJs.LAYERS.LAYER_GROUND].length - 1; i >= 0; i--) {
	        var sprite = this.layers[_constantsGameConstantsJs.LAYERS.LAYER_GROUND][i];
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
	          if (sprite.infoWindow) {
	            this.removeSpriteFromLayer(this.layers[_constantsGameConstantsJs.LAYERS.UI], sprite.infoWindow);
	          }
	        }
	      }
	      this.selectedSprites = [];
	    }
	  }, {
	    key: 'leftClicked',
	    value: function leftClicked(x, y) {
	      var coordsShiftedForViewPort = [x + this.viewPort.minXInGridUnits * _constantsGameConstantsJs.GRID_SIZE, y + this.viewPort.minYInGridUnits * _constantsGameConstantsJs.GRID_SIZE];
	      var clickedSprite = this.findSpriteAtPos.apply(this, coordsShiftedForViewPort);
	
	      if (this.actionMode === 'PLACE' && this.placingUnit.isPlaceable) {
	        this.build(this.viewPort.toGridPos(x, y), this.placingUnit);
	        this.placingUnit = undefined;
	      } else if (clickedSprite != undefined) {
	        clickedSprite.click(x, y);
	      } else {
	        this.clearSelection();
	      }
	
	      return undefined;
	    }
	  }, {
	    key: 'findSpriteAtPos',
	    value: function findSpriteAtPos(x, y) {
	      var layersToCheck = [_constantsGameConstantsJs.LAYERS.UI, _constantsGameConstantsJs.LAYERS.LAYER_AIR, _constantsGameConstantsJs.LAYERS.LAYER_GROUND];
	
	      for (var l = 0; l < layersToCheck.length; l++) {
	        var layer = layersToCheck[l];
	        var clicked = this.layers[layer].find(function (sprite) {
	          return (0, _Utils.containsPoint)(sprite.boundingBox, x, y);
	        });
	        if (clicked !== undefined) {
	          return clicked;
	        }
	      }
	    }
	  }, {
	    key: 'build',
	    value: function build(coords, unit) {
	      var playerResources = this.player.resources;
	      var cost = unit.cost;
	
	      this.removeSprite(unit);
	      this.enableDefaultMode();
	
	      for (var resourceType in cost) {
	        playerResources[resourceType] -= cost[resourceType];
	      }
	      unit.beingPlaced = false;
	      unit.setPosition.apply(unit, _toConsumableArray(coords));
	      this.addSprite(_constantsGameConstantsJs.LAYERS.LAYER_GROUND, unit);
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
	        }
	      }
	    }
	  }, {
	    key: 'removeSprite',
	    value: function removeSprite(sprite) {
	      for (var layer in _constantsGameConstantsJs.LAYERS) {
	        this.removeSpriteFromLayer(this.layers[_constantsGameConstantsJs.LAYERS[layer]], sprite);
	      }
	    }
	  }, {
	    key: 'positionFree',
	    value: function positionFree(coords) {
	      var countPlayer = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	      var inLegalMapArea = coords[0] >= 0 && coords[1] >= 0;
	      var found = inLegalMapArea && this.spriteAt(coords, countPlayer);
	      return found === undefined;
	    }
	  }, {
	    key: 'findCollision',
	    value: function findCollision(spriteToCheck) {
	      var _this5 = this;
	
	      var found = [_constantsGameConstantsJs.LAYERS.LAYER_GROUND].map(function (layerIdx) {
	        var layer = _this5.layers[layerIdx];
	
	        var foundSprite = layer.find(function (sprite) {
	          return sprite != spriteToCheck && (0, _Utils.intersects)(sprite.boundingBox, spriteToCheck.boundingBox);
	        });
	
	        return foundSprite;
	      });
	      return found[0];
	    }
	  }, {
	    key: 'canAfford',
	    value: function canAfford(cost) {
	      var playerResources = this.player.resources;
	      for (var resourceType in cost) {
	        if (playerResources[resourceType] < cost[resourceType]) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }, {
	    key: 'isWithinBuildRange',
	    value: function isWithinBuildRange(coords) {
	      var dx = Math.abs(coords[0] - this.player.pos.x);
	      var dy = Math.abs(coords[1] - this.player.pos.y);
	
	      var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
	      return distance <= 5;
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
	    key: 'tickLayer',
	    value: function tickLayer(layer) {
	      var sprites = this.layers[layer];
	      for (var i = 0; i < sprites.length; i++) {
	        var sprite = sprites[i];
	        sprite.tick(this.world);
	      }
	    }
	  }, {
	    key: 'addSprite',
	    value: function addSprite(layer, sprite) {
	      this.layers[layer].push(sprite);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.layers);
	      this.renderer.renderUi(this.statusPanel);
	      this.renderer.renderUi(this.quickBar);
	
	      //Cursor last
	      this.renderer.renderUi(this.cursor);
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
	  LAYERS: {
	    LAYER_MAP: 0,
	    LAYER_FLOOR: 10,
	    LAYER_GROUND: 20,
	    LAYER_GROUND_PLAYER: 21,
	    LAYER_GROUND_PLACEMENT: 29,
	    LAYER_AIR: 30,
	    UI: 90
	  },
	
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
	    MOVE_RIGHT: 68, //D,
	    QUICKSLOT_0: 48,
	    QUICKSLOT_1: 49,
	    QUICKSLOT_2: 50,
	    QUICKSLOT_3: 51,
	    QUICKSLOT_4: 52,
	    QUICKSLOT_5: 53,
	    QUICKSLOT_6: 54,
	    QUICKSLOT_7: 55,
	    QUICKSLOT_8: 56,
	    QUICKSLOT_9: 57
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
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _KeyboardControlledUnit = __webpack_require__(11);
	
	var _KeyboardControlledUnit2 = _interopRequireDefault(_KeyboardControlledUnit);
	
	var _decoreBlood = __webpack_require__(15);
	
	var _decoreBlood2 = _interopRequireDefault(_decoreBlood);
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(13);
	
	// import Image from '../../images/person1.png';
	
	var _imagesPlayer_spritesPng = __webpack_require__(17);
	
	var _imagesPlayer_spritesPng2 = _interopRequireDefault(_imagesPlayer_spritesPng);
	
	var PLAYER_TYPES = {
	  OLD_MAN: [0, 0],
	  YOUNG_MAN: [1, 0],
	  PIRATE: [2, 0],
	  RED_GIRL: [3, 0],
	  WIZARD: [0, 1],
	  SCIENTIST: [1, 1],
	  BLUE_MAN: [2, 1],
	  RED_GIRL2: [3, 1]
	};
	
	var types = Object.keys(PLAYER_TYPES);
	var randomPick = Math.floor(Math.random() * types.length);
	var CHOSEN_APPEARANCE = PLAYER_TYPES[types[randomPick]];
	
	var Player = (function (_Unit) {
	  _inherits(Player, _Unit);
	
	  function Player(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Player);
	
	    _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, game, coords, 100, 1);
	
	    this.resources = {
	      wood: 0, stone: 0, food: 0, gold: 0
	    };
	    this.animAge = 0;
	    this.width = 25;
	    this.height = 13;
	    this.moveCost = 10000;
	    this.world = game.world;
	
	    this.updateDirection();
	
	    this.speed = 1 / 12;
	
	    this.images = {
	      SOUTH: [(0, _Utils.loadImage)(_imagesPlayer_spritesPng2['default']), CHOSEN_APPEARANCE[0] * (3 * 32), CHOSEN_APPEARANCE[1] * 4 * 32, 32, 32],
	      WEST: [(0, _Utils.loadImage)(_imagesPlayer_spritesPng2['default']), CHOSEN_APPEARANCE[0] * (3 * 32), CHOSEN_APPEARANCE[1] * 4 * 32 + 1 * 32, 32, 32],
	      EAST: [(0, _Utils.loadImage)(_imagesPlayer_spritesPng2['default']), CHOSEN_APPEARANCE[0] * (3 * 32), CHOSEN_APPEARANCE[1] * 4 * 32 + 2 * 32, 32, 32],
	      NORTH: [(0, _Utils.loadImage)(_imagesPlayer_spritesPng2['default']), CHOSEN_APPEARANCE[0] * (3 * 32), CHOSEN_APPEARANCE[1] * 4 * 32 + 3 * 32, 32, 32]
	    };
	
	    var drawHeight = _constantsGameConstantsJs.GRID_SIZE * 0.9;
	    var drawWidth = _constantsGameConstantsJs.GRID_SIZE * 0.9;
	
	    this.image = [].concat(_toConsumableArray(this.images["SOUTH"]), [this.width / 2 - drawWidth / 2, this.height - drawHeight, drawWidth, drawHeight]);
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
	      this.movingRight = startMovement;
	    }
	  }, {
	    key: 'moveLeft',
	    value: function moveLeft(startMovement) {
	      this.movingLeft = startMovement;
	    }
	  }, {
	    key: 'moveUp',
	    value: function moveUp(startMovement) {
	      this.movingUp = startMovement;
	    }
	  }, {
	    key: 'moveDown',
	    value: function moveDown(startMovement) {
	      this.movingDown = startMovement;
	    }
	  }, {
	    key: 'ageTick',
	    value: function ageTick() {
	      this.animAge = (this.animAge + 1) % 15;
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      _get(Object.getPrototypeOf(Player.prototype), 'tick', this).call(this);
	
	      this.dx = this.movingLeft ? -this.speed : this.movingRight ? this.speed : 0;
	      this.dy = this.movingUp ? -this.speed : this.movingDown ? this.speed : 0;
	
	      this.pos.x += this.dx;
	
	      var collision = this.game.findCollision(this);
	      if (collision !== undefined) {
	        if (this.movingLeft) {
	          var stepBackInGridUnits = collision.boundingBox.right - this.boundingBox.left;
	          this.pos.x += stepBackInGridUnits / _constantsGameConstantsJs.GRID_SIZE;
	        } else if (this.movingRight) {
	          var stepBackInGridUnits = this.boundingBox.right - collision.boundingBox.left;
	          this.pos.x -= stepBackInGridUnits / _constantsGameConstantsJs.GRID_SIZE;
	        }
	      }
	      if (this.pos.x < 0) {
	        this.pos.x = 0;
	      } else if (this.pos.x > this.game.worldSize[0] - 1) {
	        console.log("Too far right!");
	        this.pos.x = this.game.worldSize[0] - 1;
	      }
	
	      this.pos.y += this.dy;
	
	      var collision = this.game.findCollision(this);
	      if (collision !== undefined) {
	        if (this.movingUp) {
	          var stepBackInGridUnits = collision.boundingBox.bottom - this.boundingBox.top;
	          this.pos.y += stepBackInGridUnits / _constantsGameConstantsJs.GRID_SIZE;
	        } else if (this.movingDown) {
	          var stepBackInGridUnits = this.boundingBox.bottom - collision.boundingBox.top;
	          this.pos.y -= stepBackInGridUnits / _constantsGameConstantsJs.GRID_SIZE;
	        }
	      }
	
	      if (this.pos.y < 0) {
	        this.pos.y = 0;
	      } else if (this.pos.y > this.game.worldSize[1] - 1) {
	        this.pos.y = this.game.worldSize[1] - 1;
	      }
	
	      if (this.dx != 0 || this.dy != 0) {
	        this.ageTick();
	        this.updateDirection();
	      }
	
	      this.gridPos = [this.pos.x, this.pos.y];
	    }
	  }, {
	    key: 'draw',
	    value: function draw(screen, viewport) {
	      _get(Object.getPrototypeOf(Player.prototype), 'draw', this).apply(this, arguments);
	      screen.fillStyle = this.color;
	
	      var drawWidth = _constantsGameConstantsJs.GRID_SIZE * 0.9;
	      var drawHeight = _constantsGameConstantsJs.GRID_SIZE * 0.9;
	
	      var currentImage = this.images[this.direction].concat([]);
	      currentImage[1] += this.animFrame * 32;
	
	      this.image = [].concat(_toConsumableArray(currentImage), [this.width / 2 - drawWidth / 2, this.height - drawHeight, drawWidth, drawHeight]);
	      screen.drawImage.apply(screen, _toConsumableArray(this.image));
	
	      if (this.selected) {
	        this.drawHp(screen);
	      }
	    }
	  }, {
	    key: 'updateDirection',
	    value: function updateDirection() {
	      this.direction = "SOUTH";
	      if (this.dy < 0) {
	        this.direction = "NORTH";
	      } else if (this.dx < 0) {
	        this.direction = "WEST";
	      } else if (this.dx > 0) {
	        this.direction = "EAST";
	      }
	    }
	  }, {
	    key: 'die',
	    value: function die() {
	      _get(Object.getPrototypeOf(Player.prototype), 'die', this).call(this);
	      this.game.addSprite(_constantsGameConstantsJs.LAYER_FLOOR, new _decoreBlood2['default'](this.game, this.gridInfo.pos));
	    }
	  }, {
	    key: 'animFrame',
	    get: function get() {
	      return parseInt(this.animAge / 5);
	    }
	  }]);
	
	  return Player;
	})(_KeyboardControlledUnit2['default']);
	
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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _AStar = __webpack_require__(14);
	
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
	    this.attackRange = 1.5;
	    this.attackDamage = attackDamage;
	    this.gatheringSpeed = 0.25;
	    this.dead = false;
	    this.moveCost = 0;
	  }
	
	  _createClass(Unit, [{
	    key: 'tick',
	    value: function tick() {
	      this.firedThisRound = false;
	      if (this.targetOfAttack && this.targetOfAttack.dead == true) {
	        this.targetOfAttack = undefined;
	      }
	
	      if (this.targetOfAttack && this.inAttackRange(this.targetOfAttack)) {
	        if (this.targetOfAttack.fireAt) {
	          this.fireAt(this.targetOfAttack);
	          this.firedThisRound = true;
	        } else if (this.targetOfAttack.gather) {
	          this.gatherFrom(this.targetOfAttack);
	          this.firedThisRound = true;
	        }
	      }
	    }
	  }, {
	    key: 'inAttackRange',
	    value: function inAttackRange(unit) {
	      var posOfTarget = unit.gridInfo.pos;
	      var dx = Math.abs(this.gridInfo.pos[0] - posOfTarget[0]);
	      var dy = Math.abs(this.gridInfo.pos[1] - posOfTarget[1]);
	
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
	      if (this.firedThisRound && this.targetOfAttack && this.drawLineToAttackTarget) {
	        screen.save();
	        screen.translate(-this.drawInfo.centerPixelX(), -this.drawInfo.centerPixelY());
	        screen.beginPath();
	        screen.moveTo(this.drawInfo.centerPixelX(), this.drawInfo.centerPixelY());
	        screen.lineTo(this.targetOfAttack.drawInfo.centerPixelX(), this.targetOfAttack.drawInfo.centerPixelY());
	        screen.closePath();
	        screen.stroke();
	        screen.restore();
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
	
	      var dx = 0;
	      var dy = 5;
	      screen.translate(-dx, -dy);
	      screen.fillRect(0, 0, _constantsGameConstantsJs.GRID_SIZE * hpPercent, 5);
	      screen.translate(dx, dy);
	    }
	  }, {
	    key: 'attackTarget',
	    value: function attackTarget(unit) {
	      this.targetOfAttack = unit;
	    }
	  }, {
	    key: 'isMoving',
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: 'gridPos',
	    set: function set(coords) {
	      this._gridPos = coords;
	    },
	    get: function get() {
	      return this._gridPos;
	    }
	  }]);
	
	  return Unit;
	})(_Sprite3['default']);
	
	exports['default'] = Unit;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(13);
	
	var Sprite = (function () {
	  function Sprite(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	    var width = arguments.length <= 2 || arguments[2] === undefined ? _constantsGameConstantsJs.GRID_SIZE : arguments[2];
	    var height = arguments.length <= 3 || arguments[3] === undefined ? _constantsGameConstantsJs.GRID_SIZE : arguments[3];
	
	    _classCallCheck(this, Sprite);
	
	    this.game = game;
	
	    this._x = coords[0];
	    this._y = coords[1];
	
	    this.beingPlaced = false;
	
	    this.color = "red";
	    this.age = 0;
	
	    this.width = width;
	    this.height = height;
	    this.selected = false;
	    this.alwaysDraw = false;
	
	    this.speed = 0.2 + Math.random();
	
	    this.dx = 1;
	    this.dy = 1;
	
	    this.moveCost = 0;
	
	    this.pos = {
	      x: coords[0],
	      y: coords[1],
	      centerPixelX: function centerPixelX() {
	        return this.grid2draw(this.x) + this.width / 2;
	      },
	      centerPixelY: function centerPixelY() {
	        return this.grid2draw(this.x) + this.width / 2;
	      }
	    };
	  }
	
	  _createClass(Sprite, [{
	    key: 'select',
	    value: function select() {
	      this.selected = true;
	    }
	  }, {
	    key: 'unselect',
	    value: function unselect() {
	      this.selected = false;
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {}
	  }, {
	    key: 'drawSprite',
	    value: function drawSprite(screen) {
	      // this.drawPhysicalSize(screen);
	
	      screen.save();
	      screen.translate.apply(screen, _toConsumableArray(this.drawInfo.pos));
	
	      if (this.beingPlaced) {
	        screen.globalAlpha = 0.5;
	        this.drawGridCell(screen);
	      }
	
	      if (this.selected) {
	        screen.strokeSize = 1;
	        screen.strokeStyle = 'rgba(250,250,0,0.8) ';
	        screen.strokeRect(0, 0, this.width, this.height);
	      }
	
	      this.draw(screen);
	      screen.globalAlpha = 1;
	      screen.restore();
	    }
	  }, {
	    key: 'drawPhysicalSize',
	    value: function drawPhysicalSize(screen) {
	      screen.save();
	      screen.fillStyle = "rgba(250,250,250,0.4)";
	      screen.translate(this.pos.x * _constantsGameConstantsJs.GRID_SIZE, this.pos.y * _constantsGameConstantsJs.GRID_SIZE);
	      screen.fillRect(0, 0, this.width, this.height);
	      screen.restore();
	    }
	  }, {
	    key: 'click',
	    value: function click() {
	      this.game.selectSprite(this);
	    }
	  }, {
	    key: 'draw',
	    value: function draw(screen) {
	      if (this.image) {
	        screen.drawImage.apply(screen, _toConsumableArray(this.image));
	      } else {
	        screen.fillStyle = this.color;
	
	        var centerX = this.drawWidth / 2;
	        var centerY = this.drawHeight / 2;
	        screen.fillRect(centerX - this.width / 2, centerY - this.width / 2, this.width, this.width);
	      }
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition(x, y) {
	      this.pos.x = x;
	      this.pos.y = y;
	    }
	  }, {
	    key: 'drawGridCell',
	    value: function drawGridCell(screen) {
	      screen.fillStyle = this.isPlaceable ? "rgba(0,255,0,0.9" : "red";
	      screen.fillRect(0, 0, _constantsGameConstantsJs.GRID_SIZE, _constantsGameConstantsJs.GRID_SIZE);
	    }
	  }, {
	    key: 'drawWidth',
	    get: function get() {
	      if (this.image && this.image.length == 8) {
	        return this.image[7];
	      } else if (this.image && this.image.length == 4) {
	        return this.image[3];
	      } else {
	        return this._width;
	      }
	    }
	  }, {
	    key: 'drawHeight',
	    get: function get() {
	      if (this.image && this.image.length == 8) {
	        return this.image[6];
	      } else if (this.image && this.image.length == 4) {
	        return this.image[2];
	      } else {
	        return this._height;
	      }
	    }
	  }, {
	    key: 'physical',
	    get: function get() {
	      var coords = [this._x, this._y];
	      return {
	        top: this._y,
	        bottom: this._y + this._height,
	        left: this._x,
	        right: this._x + this._width,
	        width: this._width,
	        height: this._height,
	        center: {
	          x: this._x + this.width / 2,
	          y: this._y + this.width / 2
	        }
	      };
	    }
	  }, {
	    key: 'gridInfo',
	    get: function get() {
	      var coords = this.gridPos;
	      return {
	        pos: coords,
	        width: 1,
	        height: 1,
	        boundingBox: {
	          top: coords[1],
	          left: coords[0],
	          bottom: coords[1] + 1,
	          right: coords[0] + 1
	        }
	      };
	    }
	  }, {
	    key: 'drawInfo',
	    get: function get() {
	      var coords = [this.pos.x * _constantsGameConstantsJs.GRID_SIZE, this.pos.y * _constantsGameConstantsJs.GRID_SIZE];
	      return {
	        pos: coords,
	        width: this.width,
	        height: this.height,
	        boundingBox: {
	          top: coords[1],
	          left: coords[0],
	          bottom: coords[1] + this.width,
	          right: coords[0] + this.height
	        },
	        centerPixelX: function centerPixelX() {
	          return coords[0] + this.width / 2;
	        },
	        centerPixelY: function centerPixelY() {
	          return coords[1] + this.height / 2;
	        }
	      };
	    }
	  }, {
	    key: 'gridPos',
	    get: function get() {
	      return [this.pos.x, this.pos.y];
	    }
	  }, {
	    key: 'boundingBox',
	    get: function get() {
	      var drawCoords = [this.pos.x * _constantsGameConstantsJs.GRID_SIZE, this.pos.y * _constantsGameConstantsJs.GRID_SIZE];
	      return {
	        left: drawCoords[0],
	        right: drawCoords[0] + this.width,
	        top: drawCoords[1],
	        bottom: drawCoords[1] + this.height
	      };
	    }
	  }, {
	    key: 'isPlaceable',
	    get: function get() {
	      var positionFree = this.game.positionFree([this.pos.x, this.pos.y], true);
	      var affordable = this.game.canAfford(this.cost);
	      var isInRange = this.game.isWithinBuildRange([this.pos.x, this.pos.y]);
	      var collidesWithPlayer = (0, _Utils.intersects)(this.game.player.boundingBox, this.boundingBox);
	      return positionFree && affordable && isInRange && !collidesWithPlayer;
	    }
	  }]);
	
	  return Sprite;
	})();
	
	exports['default'] = Sprite;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
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
	
	  intersects: function intersects(r1, r2) {
	    return !(r2.left >= r1.right || r2.right <= r1.left || r2.top >= r1.bottom || r2.bottom <= r1.top);
	  },
	
	  containsPoint: function containsPoint(rect, x, y) {
	    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
	  }
	
	};

/***/ },
/* 14 */
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
/* 15 */
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
	
	var _Utils = __webpack_require__(13);
	
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
	      screen.drawImage(this.image, x, 0, 150, 150, 0, 0, this.width, this.width);
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
	
	var _Utils = __webpack_require__(13);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _decoreRubble = __webpack_require__(19);
	
	var _decoreRubble2 = _interopRequireDefault(_decoreRubble);
	
	var _imagesRock_spritePng = __webpack_require__(21);
	
	var _imagesRock_spritePng2 = _interopRequireDefault(_imagesRock_spritePng);
	
	var Rock = (function (_Sprite) {
	  _inherits(Rock, _Sprite);
	
	  function Rock(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Rock);
	
	    _get(Object.getPrototypeOf(Rock.prototype), 'constructor', this).call(this, game, coords);
	
	    this.startingResources = 15;
	    this.resourceAmount = this.startingResources;
	    this.moveCost = 10000;
	
	    this.images = [[(0, _Utils.loadImage)(_imagesRock_spritePng2['default']), 126, 0, 42, 42, 0, 0, this.width, this.height], [(0, _Utils.loadImage)(_imagesRock_spritePng2['default']), 84, 0, 42, 42, 0, 0, this.width, this.height], [(0, _Utils.loadImage)(_imagesRock_spritePng2['default']), 42, 0, 42, 42, 0, 0, this.width, this.height], [(0, _Utils.loadImage)(_imagesRock_spritePng2['default']), 0, 0, 42, 42, 0, 0, this.width, this.height]];
	    this.image = this.images[3];
	  }
	
	  _createClass(Rock, [{
	    key: 'gather',
	    value: function gather(gatherAmount, gatherer) {
	      var amountBeforeGather = parseInt(this.resourceAmount);
	      this.resourceAmount -= gatherAmount / 3;
	
	      var amountAfterGather = parseInt(this.resourceAmount);
	      gatherer.resources.stone = gatherer.resources.stone || 0;
	      gatherer.resources.stone += amountBeforeGather - amountAfterGather;
	
	      if (this.resourceAmount <= 0) {
	        this.deplete();
	        gatherer.killed(this);
	      }
	
	      var steps = Math.ceil(this.startingResources / this.images.length);
	      var currentLook = Math.floor(this.resourceAmount / steps);
	      this.image = this.images[currentLook];
	    }
	  }, {
	    key: 'deplete',
	    value: function deplete() {
	      this.game.removeSprite(this);
	      this.depleted = true;
	      this.game.addSprite(_constantsGameConstantsJs.LAYERS.LAYER_FLOOR, new _decoreRubble2['default'](this.game, this.gridInfo.pos));
	    }
	  }]);
	
	  return Rock;
	})(_Sprite3['default']);
	
	exports['default'] = Rock;
	module.exports = exports['default'];

/***/ },
/* 19 */
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
	
	var _Utils = __webpack_require__(13);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _imagesRubblePng = __webpack_require__(20);
	
	var _imagesRubblePng2 = _interopRequireDefault(_imagesRubblePng);
	
	var Rubble = (function (_Sprite) {
	  _inherits(Rubble, _Sprite);
	
	  function Rubble(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Rubble);
	
	    _get(Object.getPrototypeOf(Rubble.prototype), 'constructor', this).call(this, game, coords);
	    this.moveCost = 0;
	    this.width = _constantsGameConstantsJs.GRID_SIZE;
	    this.color = "black";
	
	    this.image = (0, _Utils.loadImage)(_imagesRubblePng2['default']);
	  }
	
	  _createClass(Rubble, [{
	    key: 'draw',
	    value: function draw(screen, viewport) {
	      screen.drawImage(this.image, 0, 0);
	    }
	  }]);
	
	  return Rubble;
	})(_Sprite3['default']);
	
	exports['default'] = Rubble;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 22 */
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
	
	var _Utils = __webpack_require__(13);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _decoreTreeStump = __webpack_require__(23);
	
	var _decoreTreeStump2 = _interopRequireDefault(_decoreTreeStump);
	
	var _uiInfoWindow = __webpack_require__(25);
	
	var _uiInfoWindow2 = _interopRequireDefault(_uiInfoWindow);
	
	var _imagesTrees2Png = __webpack_require__(26);
	
	var _imagesTrees2Png2 = _interopRequireDefault(_imagesTrees2Png);
	
	var VARIANTS = [{ x: 385, y: 14, w: 86, h: 143, cX: 0, cY: _constantsGameConstantsJs.GRID_SIZE - 65 }, { x: 515, y: 332, w: 53, h: 88, cX: 0, cY: _constantsGameConstantsJs.GRID_SIZE - 65 }, { x: 268, y: 14, w: 93, h: 153, cX: 0, cY: _constantsGameConstantsJs.GRID_SIZE - 65 }, { x: 547, y: 139, w: 103, h: 172, cX: 0, cY: _constantsGameConstantsJs.GRID_SIZE - 65 }, { x: 27, y: 281, w: 101, h: 168, cX: 0, cY: _constantsGameConstantsJs.GRID_SIZE - 65 }, { x: 353, y: 311, w: 57, h: 95, cX: 0, cY: _constantsGameConstantsJs.GRID_SIZE - 65 }, { x: 155, y: 145, w: 87, h: 145, cX: 0, cY: _constantsGameConstantsJs.GRID_SIZE - 65 }];
	
	var Tree = (function (_Sprite) {
	  _inherits(Tree, _Sprite);
	
	  function Tree(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Tree);
	
	    _get(Object.getPrototypeOf(Tree.prototype), 'constructor', this).call(this, game, coords);
	    this.startingResources = 15;
	    this.resourceAmount = this.startingResources;
	    this.moveCost = 10000;
	
	    this.color = "black";
	    this.depleted = false;
	    this.resourceType = "wood";
	
	    this.infoWindow = new _uiInfoWindow2['default'](this, this.game);
	
	    this.variant = VARIANTS[parseInt(Math.random() * VARIANTS.length)];
	    this.image = [(0, _Utils.loadImage)(_imagesTrees2Png2['default']), this.variant.x, this.variant.y, this.variant.w, this.variant.h, _constantsGameConstantsJs.GRID_SIZE / 2 - 40 / 2, _constantsGameConstantsJs.GRID_SIZE - 65, 40, 65];
	  }
	
	  _createClass(Tree, [{
	    key: 'gather',
	    value: function gather(gatherAmount, gatherer) {
	      var amountBeforeGather = parseInt(this.resourceAmount);
	      this.resourceAmount -= gatherAmount;
	
	      var amountAfterGather = parseInt(this.resourceAmount);
	      gatherer.resources[this.resourceType] = gatherer.resources[this.resourceType] || 0;
	      gatherer.resources[this.resourceType] += amountBeforeGather - amountAfterGather;
	
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
	      this.game.addSprite(_constantsGameConstantsJs.LAYERS.LAYER_FLOOR, new _decoreTreeStump2['default'](this.game, this.gridInfo.pos));
	    }
	  }]);
	
	  return Tree;
	})(_Sprite3['default']);
	
	exports['default'] = Tree;
	module.exports = exports['default'];

/***/ },
/* 23 */
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
	
	var _Utils = __webpack_require__(13);
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _imagesTree_stumpPng = __webpack_require__(24);
	
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
	      screen.drawImage(this.image, 0, 0, 98, 78, _constantsGameConstantsJs.GRID_SIZE / 2 - 7, _constantsGameConstantsJs.GRID_SIZE / 2, 12, 12);
	    }
	  }]);
	
	  return TreeStump;
	})(_Sprite3['default']);
	
	exports['default'] = TreeStump;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(13);
	
	var InfoWindow = (function (_Sprite) {
	  _inherits(InfoWindow, _Sprite);
	
	  function InfoWindow(unit, game) {
	    _classCallCheck(this, InfoWindow);
	
	    _get(Object.getPrototypeOf(InfoWindow.prototype), 'constructor', this).call(this, game);
	    this.alwaysDraw = true;
	    this.game = game;
	    this.unit = unit;
	
	    this.width = 195;
	    this.height = 95;
	  }
	
	  _createClass(InfoWindow, [{
	    key: 'draw',
	    value: function draw(screen) {
	      var maxX = this.game.canvas.width;
	      var maxY = this.game.canvas.height;
	
	      var posX = maxX - 10 - this.width;
	      var posY = 10;
	      screen.translate(posX, posY);
	
	      screen.fillStyle = "rgba(0,0,0,0.9)";
	      screen.fillRect(0, 0, this.width, this.height);
	
	      screen.fillStyle = "white";
	      screen.textAlign = "left";
	
	      var textline = 1;
	      screen.fontSize = 12;
	      screen.fillText(this.unit.constructor.name, 10, textline * 12 + 10);
	      textline++;
	      textline++;
	      screen.fillText(Math.ceil(this.unit.resourceAmount), 10, textline * 12 + 10);
	
	      screen.translate(-posX, -posY);
	    }
	  }, {
	    key: 'click',
	    value: function click(x, y) {
	      console.log("Clicked info windo!");
	    }
	  }, {
	    key: 'boundingBox',
	    get: function get() {
	      return {
	        left: this.pos.x,
	        right: this.pos.x + this.width,
	        top: this.pos.y,
	        bottom: this.pos.y + this.height
	      };
	    }
	  }]);
	
	  return InfoWindow;
	})(_Sprite3['default']);
	
	exports['default'] = InfoWindow;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "26a6eee5149e2f028935be20eed3e1c4.png";

/***/ },
/* 27 */
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
	
	var _imagesGroundPng = __webpack_require__(28);
	
	var _imagesGroundPng2 = _interopRequireDefault(_imagesGroundPng);
	
	var _Utils = __webpack_require__(13);
	
	var Grass2 = (function (_Sprite) {
	  _inherits(Grass2, _Sprite);
	
	  function Grass2(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, Grass2);
	
	    _get(Object.getPrototypeOf(Grass2.prototype), 'constructor', this).call(this, game, coords, _constantsGameConstantsJs.GRID_SIZE, _constantsGameConstantsJs.GRID_SIZE);
	
	    this.image = [(0, _Utils.loadImage)(_imagesGroundPng2['default']), 0, 51, 24, 24, 0, 0, this.width, this.width];
	  }
	
	  return Grass2;
	})(_Sprite3['default']);
	
	exports['default'] = Grass2;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c97cea922775196eaab83be3836001f3.png";

/***/ },
/* 29 */
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
	
	var _Utils = __webpack_require__(13);
	
	var _ProductionBuilding2 = __webpack_require__(30);
	
	var _ProductionBuilding3 = _interopRequireDefault(_ProductionBuilding2);
	
	var _imagesBuildingsPng = __webpack_require__(31);
	
	var _imagesBuildingsPng2 = _interopRequireDefault(_imagesBuildingsPng);
	
	var House = (function (_ProductionBuilding) {
	  _inherits(House, _ProductionBuilding);
	
	  function House(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, House);
	
	    _get(Object.getPrototypeOf(House.prototype), 'constructor', this).call(this, "food", 10, 200, game, coords, _constantsGameConstantsJs.GRID_SIZE, _constantsGameConstantsJs.GRID_SIZE);
	
	    this.moveCost = 0;
	    this.cost = {
	      wood: 5
	    };
	
	    var drawHeight = 73 / 64 * _constantsGameConstantsJs.GRID_SIZE;
	    var drawWidth = _constantsGameConstantsJs.GRID_SIZE;
	
	    this.image = [(0, _Utils.loadImage)(_imagesBuildingsPng2['default']), 463, 118, 64, 73, _constantsGameConstantsJs.GRID_SIZE / 2 - drawWidth / 2, _constantsGameConstantsJs.GRID_SIZE - drawHeight, drawWidth, drawHeight];
	  }
	
	  return House;
	})(_ProductionBuilding3['default']);
	
	exports['default'] = House;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var ProductionBuilding = (function (_Sprite) {
	  _inherits(ProductionBuilding, _Sprite);
	
	  function ProductionBuilding(producesType, capacity, productionSpeed, game, coords, width, height) {
	    if (coords === undefined) coords = [0, 0];
	
	    _classCallCheck(this, ProductionBuilding);
	
	    _get(Object.getPrototypeOf(ProductionBuilding.prototype), 'constructor', this).call(this, game, coords, width, height);
	
	    this.startingResources = 0;
	    this.resourceAmount = this.startingResources;
	    this.resourceType = producesType;
	    this.maxResourceAmount = capacity;
	    this.productionProgress = 0;
	
	    this.progressNeededToProduce = productionSpeed;
	  }
	
	  _createClass(ProductionBuilding, [{
	    key: 'draw',
	    value: function draw(screen) {
	      _get(Object.getPrototypeOf(ProductionBuilding.prototype), 'draw', this).call(this, screen);
	
	      if (!this.beingPlaced) {
	        this.drawInventoryIndicator(screen);
	      }
	    }
	  }, {
	    key: 'drawInventoryIndicator',
	    value: function drawInventoryIndicator(screen) {
	
	      var indicatorPos = [this.width * 0.05, 0];
	
	      screen.save();
	      screen.translate.apply(screen, indicatorPos);
	
	      var indicatorWidth = this.width * 0.9;
	      var indicatorHeight = 5;
	
	      screen.fillStyle = 'rgba(0,0,0,0.3';
	      screen.fillRect(0, 0, indicatorWidth, indicatorHeight + 1);
	      screen.translate(1, 1);
	      screen.fillStyle = 'rgba(250,200,0,0.9)';
	      screen.fillRect(0, 0, indicatorWidth * this.progressPercent, 1);
	      screen.translate(0, 2);
	
	      var widthPerBox = (indicatorWidth - 1 - this.maxResourceAmount) / this.maxResourceAmount;
	      for (var res = 0; res < this.resourceAmount; res++) {
	        screen.fillRect(res * widthPerBox + res, 0, widthPerBox, indicatorHeight - 2);
	      }
	
	      screen.restore();
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      if (!this.beingPlaced) {
	        if (this.resourceAmount < this.maxResourceAmount) {
	          this.productionProgress++;
	        }
	
	        if (this.productionProgress >= this.progressNeededToProduce) {
	          this.resourceAmount++;
	          this.productionProgress -= this.progressNeededToProduce;
	        }
	      }
	    }
	  }, {
	    key: 'gather',
	    value: function gather(gatherAmount, gatherer) {
	      gatherer.resources[this.resourceType] = gatherer.resources[this.resourceType] || 0;
	      gatherer.resources[this.resourceType] += this.resourceAmount;
	      this.resourceAmount = 0;
	      gatherer.targetOfAttack = undefined;
	    }
	  }, {
	    key: 'progressPercent',
	    get: function get() {
	      return this.productionProgress / this.progressNeededToProduce;
	    }
	  }]);
	
	  return ProductionBuilding;
	})(_Sprite3['default']);
	
	exports['default'] = ProductionBuilding;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1a618c936a158eaf486667e579a4ca21.png";

/***/ },
/* 32 */
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
	
	var _Utils = __webpack_require__(13);
	
	var _ProductionBuilding = __webpack_require__(30);
	
	var _ProductionBuilding2 = _interopRequireDefault(_ProductionBuilding);
	
	var _imagesBuildingsPng = __webpack_require__(31);
	
	var _imagesBuildingsPng2 = _interopRequireDefault(_imagesBuildingsPng);
	
	var drawHeight = 73 / 64 * _constantsGameConstantsJs.GRID_SIZE;
	var drawWidth = _constantsGameConstantsJs.GRID_SIZE;
	
	var House2 = (function (_Producer) {
	  _inherits(House2, _Producer);
	
	  function House2(game) {
	    var coords = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, House2);
	
	    _get(Object.getPrototypeOf(House2.prototype), 'constructor', this).call(this, "gold", 5, 1000, game, coords, _constantsGameConstantsJs.GRID_SIZE, _constantsGameConstantsJs.GRID_SIZE);
	    this.moveCost = 0;
	
	    this.image = [(0, _Utils.loadImage)(_imagesBuildingsPng2['default']), 531, 120, 62, 73, _constantsGameConstantsJs.GRID_SIZE / 2 - drawWidth / 2, _constantsGameConstantsJs.GRID_SIZE - drawHeight, drawWidth, drawHeight];
	
	    this.cost = {
	      stone: 10,
	      food: 5
	    };
	  }
	
	  return House2;
	})(_ProductionBuilding2['default']);
	
	exports['default'] = House2;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var Renderer = (function () {
	  function Renderer(canvas, viewPort) {
	    _classCallCheck(this, Renderer);
	
	    this.canvas = canvas;
	    this.screen = canvas.getContext('2d');
	
	    this.canvas.setAttribute("width", "" + _constantsGameConstantsJs.GRID_SIZE * viewPort.widthInGridUnits);
	    this.canvas.setAttribute("height", "" + _constantsGameConstantsJs.GRID_SIZE * viewPort.heightInGridUnits);
	
	    this.canvas.style.cursor = "none";
	
	    this.viewPort = viewPort;
	  }
	
	  _createClass(Renderer, [{
	    key: 'render',
	    value: function render(layers) {
	      var viewPort = this.viewPort;
	      this.clearScreen();
	      this.screen.save();
	      this.screen.translate(-viewPort.minXPx, -viewPort.minYPx);
	      this.drawGridLayer(layers[_constantsGameConstantsJs.LAYERS.LAYER_MAP], viewPort);
	      this.drawGridLayer(layers[_constantsGameConstantsJs.LAYERS.LAYER_FLOOR], viewPort);
	      this.drawGridLayer(layers[_constantsGameConstantsJs.LAYERS.LAYER_GROUND], viewPort);
	      this.drawGridLayer(layers[_constantsGameConstantsJs.LAYERS.LAYER_GROUND_PLAYER], viewPort);
	      this.drawGridLayer(layers[_constantsGameConstantsJs.LAYERS.LAYER_GROUND_PLACEMENT], viewPort);
	      this.drawGridLayer(layers[_constantsGameConstantsJs.LAYERS.LAYER_AIR], viewPort);
	      this.drawPixelLayer(layers[_constantsGameConstantsJs.LAYERS.UI]);
	      this.screen.restore();
	    }
	  }, {
	    key: 'clearScreen',
	    value: function clearScreen() {
	      this.screen.clearRect(0, 0, this.canvas.widthInGridUnits, this.canvas.heightInGridUnits);
	    }
	  }, {
	    key: 'drawPixelLayer',
	    value: function drawPixelLayer(layer) {
	      for (var spriteIdx = 0; spriteIdx < layer.length; spriteIdx++) {
	        var sprite = layer[spriteIdx];
	        sprite.drawSprite(this.screen);
	      }
	    }
	  }, {
	    key: 'drawGridLayer',
	    value: function drawGridLayer(layer, viewPort) {
	      var _this = this;
	
	      layer.filter(function (sprite) {
	        return viewPort.isRectVisible(sprite.boundingBox);
	      }).sort(function (s1, s2) {
	        return s1.pos.y - s2.pos.y;
	      }).forEach(function (s) {
	        return s.drawSprite(_this.screen, viewPort);
	      });
	    }
	  }, {
	    key: 'renderUi',
	    value: function renderUi(component) {
	      component.draw(this.screen);
	    }
	  }]);
	
	  return Renderer;
	})();
	
	exports['default'] = Renderer;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _Utils = __webpack_require__(13);
	
	var _constantsGameConstants = __webpack_require__(9);
	
	var ViewPort = (function () {
	  function ViewPort(game) {
	    var width = arguments.length <= 1 || arguments[1] === undefined ? 30 : arguments[1];
	    var height = arguments.length <= 2 || arguments[2] === undefined ? 20 : arguments[2];
	    var pos = arguments.length <= 3 || arguments[3] === undefined ? [0, 0] : arguments[3];
	
	    _classCallCheck(this, ViewPort);
	
	    this._width = width;
	    this._height = height;
	    this._pos = pos;
	    this.game = game;
	  }
	
	  _createClass(ViewPort, [{
	    key: 'isRectVisible',
	    value: function isRectVisible(rect) {
	      return (0, _Utils.intersects)(rect, this.boxPx);
	    }
	  }, {
	    key: 'toWorldCoord',
	    value: function toWorldCoord(viewPortCoord) {
	      return [viewPortCoord[0] + this.pos[0], viewPortCoord[1] + this.pos[1]];
	    }
	  }, {
	    key: 'toGridCoord',
	    value: function toGridCoord(viewPortCoord) {
	      return [Math.floor(viewPortCoord[0] / _constantsGameConstants.GRID_SIZE + this.pos[0]), Math.floor(viewPortCoord[1] / _constantsGameConstants.GRID_SIZE + this.pos[1])];
	    }
	  }, {
	    key: 'globalToViewPort',
	    value: function globalToViewPort(globalX, globalY) {
	      return [globalX - this.boxPx.left, globalY - this.boxPx.top];
	    }
	  }, {
	    key: 'toGridPos',
	    value: function toGridPos(x, y) {
	      return this.toGridCoord([x, y]);
	    }
	  }, {
	    key: 'focusOnGridPos',
	    value: function focusOnGridPos(pos) {
	      var focusX = pos[0];
	      var focusY = pos[1];
	      var halfHeight = this.heightInGridUnits / 2;
	      var halfWidth = this.widthInGridUnits / 2;
	
	      var newX = Math.min(Math.max(0, focusX - halfWidth), this.game.worldSize[0] - this.widthInGridUnits);
	      var newY = Math.min(Math.max(0, focusY - halfHeight), this.game.worldSize[1] - this.heightInGridUnits);
	
	      this._pos = [newX, newY];
	    }
	  }, {
	    key: 'pos',
	    get: function get() {
	      return this._pos;
	    }
	  }, {
	    key: 'widthInGridUnits',
	    get: function get() {
	      return this._width;
	    }
	  }, {
	    key: 'heightInGridUnits',
	    get: function get() {
	      return this._height;
	    }
	  }, {
	    key: 'minXInGridUnits',
	    get: function get() {
	      return this.pos[0];
	    },
	    set: function set(newX) {
	      this.pos[0] = newX;
	    }
	  }, {
	    key: 'minYInGridUnits',
	    get: function get() {
	      return this.pos[1];
	    },
	    set: function set(newY) {
	      this.pos[1] = newY;
	    }
	  }, {
	    key: 'minXPx',
	    get: function get() {
	      return this.minXInGridUnits * _constantsGameConstants.GRID_SIZE;
	    }
	  }, {
	    key: 'minYPx',
	    get: function get() {
	      return this.minYInGridUnits * _constantsGameConstants.GRID_SIZE;
	    }
	  }, {
	    key: 'boxPx',
	    get: function get() {
	      return {
	        left: this.boxGridUnits.left * _constantsGameConstants.GRID_SIZE,
	        right: this.boxGridUnits.right * _constantsGameConstants.GRID_SIZE,
	        top: this.boxGridUnits.top * _constantsGameConstants.GRID_SIZE,
	        bottom: this.boxGridUnits.bottom * _constantsGameConstants.GRID_SIZE
	      };
	    }
	  }, {
	    key: 'boxGridUnits',
	    get: function get() {
	      return {
	        left: this.minXInGridUnits,
	        right: this.minXInGridUnits + this.widthInGridUnits,
	        top: this.minYInGridUnits,
	        bottom: this.minYInGridUnits + this.heightInGridUnits
	      };
	    }
	  }, {
	    key: 'worldCoordPos',
	    get: function get() {
	      return [this.pos[0] * _constantsGameConstants.GRID_SIZE, this.pos[1] * _constantsGameConstants.GRID_SIZE];
	    }
	  }]);
	
	  return ViewPort;
	})();
	
	exports['default'] = ViewPort;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Sprite2 = __webpack_require__(12);
	
	var _Sprite3 = _interopRequireDefault(_Sprite2);
	
	var _constantsGameConstantsJs = __webpack_require__(9);
	
	var _Utils = __webpack_require__(13);
	
	var _imagesIcon_woodPng = __webpack_require__(36);
	
	var _imagesIcon_woodPng2 = _interopRequireDefault(_imagesIcon_woodPng);
	
	var _imagesIcon_stone2Png = __webpack_require__(37);
	
	var _imagesIcon_stone2Png2 = _interopRequireDefault(_imagesIcon_stone2Png);
	
	var _imagesIcon_food2Png = __webpack_require__(38);
	
	var _imagesIcon_food2Png2 = _interopRequireDefault(_imagesIcon_food2Png);
	
	var _imagesIcon_coinPng = __webpack_require__(39);
	
	var _imagesIcon_coinPng2 = _interopRequireDefault(_imagesIcon_coinPng);
	
	var StatusPanel = (function (_Sprite) {
	  _inherits(StatusPanel, _Sprite);
	
	  function StatusPanel(unit, game) {
	    _classCallCheck(this, StatusPanel);
	
	    _get(Object.getPrototypeOf(StatusPanel.prototype), 'constructor', this).call(this, game);
	    this.alwaysDraw = true;
	    this.game = game;
	    this.unit = unit;
	    this.iconWood = (0, _Utils.loadImage)(_imagesIcon_woodPng2['default']);
	    this.iconStone = (0, _Utils.loadImage)(_imagesIcon_stone2Png2['default']);
	    this.iconFood = (0, _Utils.loadImage)(_imagesIcon_food2Png2['default']);
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
	      this.drawGold(screen);
	
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
	      // screen.drawImage(this.iconStone, 0, 0, 184, 184, 40, 10, 27, 27);
	      screen.drawImage(this.iconStone, 45, 15, 18, 18);
	      var amountOfWood = this.unit.resources.stone || 0;
	      screen.fillStyle = "white";
	      screen.font = "12px arial";
	      screen.textAlign = "center";
	      screen.fillText(amountOfWood, 54, 50);
	    }
	  }, {
	    key: 'drawFood',
	    value: function drawFood(screen) {
	      screen.drawImage(this.iconFood, 75, 13, 18, 18);
	      var amount = this.unit.resources.food || 0;
	      screen.fillStyle = "white";
	      screen.font = "12px arial";
	      screen.textAlign = "center";
	      screen.fillText(amount, 84, 50);
	    }
	  }, {
	    key: 'drawGold',
	    value: function drawGold(screen) {
	      screen.drawImage(this.iconCoin, 0, 0, 29, 33, 103, 13, 17, 20);
	      var amount = this.unit.resources.gold || 0;
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
	})(_Sprite3['default']);
	
	exports['default'] = StatusPanel;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAABAAAAAQE4IvRAAAAAB3RJTUUH4AMPFTEnvOkI5gAABUBJREFUSMftlslvFEcUxr+q6p7u6dl6BuMYxtjYxmAgNuCAwcRiUXYWoQSFKDmgHBDKIUhJpFwj5ZBL/ouckJJblANKQsgGhEUCHK8YOzPe7ZmxZ+29q3IAD8YBC6Scojyp+lDq6l9/33v1qoD/418I8rQvRhq7Vq5bWiseDABAKX39id9gzwgihEB2LKEYM5bimggwTaKUVKFQ9CScwtSzK1uphgCBio3QrmbW8vahxPaZrGmev1S4VTSlGYkJA4C/mkL2FCBCAOZxolZsFtMVs+2T49rnx7qj58J2+ViMm5Frk6SXgzoSgb+aQvYUIMn2aEiX3fVtz5k9x3bRc92b1FeshYKU6S8FXMNNlBiZMExRLtrUCkhPBrLVQACY69NwVLGazr4c+GhfE//09X012zXi0+K0hZkxG27Uib77Wu2Bnc1Ky+yCN5LKYSEgwVsCLofR1axzfRICtzcc2Wp9XBc039+9WdPjkkUW50oYGahgoLyILa0hFmVuPG5XTuyvsU4LIWIA5KV6WJ536Qkpo44PLayi/ug2fnbLWvJOY11AWh8hmJgzMThsoH++gJ79cdSvj+DuUBETQyZMw9+ia1Kj4UimKsMX4qHCqo2Rxi4oerI6J0A01+PJk5383NFO7Uxro6K0rpNAJYYrt/LoHStg754EXtxRg9F0CUN9JcyWbLS1x+ueXye1ZvLewHRZysgMLgCxlDu6UhEAtWwh0dPsnDy8LXCaO2VFLS+iMDINJ1uE4QI7tkZxZPdapMaLuD2Qx8BMGS1tYdRFhFrjeod2JtirvsO1lTVBl3lKASgVh8Z7mszjBzbxD3es9ULDwzlcuJxDNmvgr7EFRELA/rYo+kfz+GMwj8GJCjo7EmjfGMHspIXFOYvkKsUGTeM1XJBq7gCALbNPMj0a2aYvvnSqS/4sCDeZHstCCqnY2JzAtcEyeDCIgx0xxMMMt1MV/NKbxQubdBztXIOhVBHDgwbuLRaRrA00JcJkpH8q2KcovGpltUB8QVmIGjXvdatnWsJeQ3qqjP4cxwen1kOPyrBtH26uDClXRsEnoLaHjuYY3tqzBlM5A7/dKWB20YYelRETQVkSlIIIsdzGKszlhCRjLFwr+/W9A/PIWRyCM0z2Z+HWBhHkPq6OlrAmQEHhQ1CKN3fpiKgCF/7MI5Ux0FqvIUyifDSPr3/OSBdDYV7d4KX09Yc2UgJm+6BGqbAmHJc63ji8Tm5IhnCtP4/J8SIqpovGhghGMha+710EMW1s0SgmZyz8fs/A5rUyVCmIVF6+9FNG/tKCmmZEmAD40uauwggBfMF43wydONERaG/X6UbCBTSF4tc7ZRzcG0dnUkNED2A67+HGPQsuI5gre2iJS9BDCi6n+XhfKfhFhodvBQgvAfCWnHsEdr8/Ce4ISYR8Q405RhevuKpZcLyUwY3OuBSA4YGBIBGVwAnF4a5a7GiJQBU+vuk1nYGC8tW4F/9WpWIBgL3cQgBgTmEKip4EIRSAEDIT4m6Bzg9k3dRI1s9fnZeH+/LymOr7oaBENMcn4kranfYcYbf5boiaLi6OO/yHFP1xRsTPU0LSFKRMKeOAeOSoWdm/yP0OAsX0SMTnXpwSP0GpSDC4tW0xb4MeJOrtDMur1Ne69UpHUwS1N3P0xs185DvOlCEGZBmYRRgTgvN/wh4DJASEAkISABNCyBwIWB6RhS+YEuBMCEIdj0uM+BREKakyKRMIE4ALgAvKQLmP4uNgS0Dx6CQByP3Ho6P6U4IQQAgOCP6g8p54H3mWa8FTx2qXnv9m/A1BS3/SeVT0pAAAABt0RVh0Q3JlYXRvcgBBZG9iZSBBZnRlciBFZmZlY3Rz5qBHlQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0wMy0xNVQyMTo0OTozOSswMDowMD0CkuMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDMtMTVUMjE6NDk6MzkrMDA6MDBMXypfAAAATXRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjkuMi03IFExNiB4ODZfNjQgMjAxNS0xMi0wMiBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ26OFj8AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADE4NLAl5SEAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTg0I9S1fAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDU4MDc4NTc5EDQPkQAAAA90RVh0VGh1bWI6OlNpemUAMEJClKI+7AAAAEh0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL3RtcC92aWduZXR0ZS84NGJjYTI4OS01YWExLTQ1MjItODRlMS00YjBmMGY4MzhiYjUucG5nfZpa9QAAAABJRU5ErkJggg=="

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAANkSURBVHjatJVdbxtFFIaf3VnH69jNV2s7zQeCOjTkAgkhuKCXSEhIXPV/FCHED0D8kP4OJFohcVG1qoSICGoEtHFNUoLjOt71fnk8uztc7HpjE+cKda5GZ8+85933nHfG0FrzJpYBYBiGuLmxcXd5efmDcrlct21707bt9XkHlFJuEATPAbTWies4+57nPXMc5+ckSaI8ngF/cufO981m8/P/w1Ap5f52cPBNp9O5r7XGEkJUGo3GZwCNRp2PP/qQt7a3qC1WAVhdXaFWqwFwfHxSAAVRxNFRm/bLDi+O2gDLt1qte51O5z6AVa1WdwzDEBXb5usv71GtVq5ktb29VexHUUR9bZXWO9uEnsvx6RlLS0vvm6a5AIytiZZ7e7szoK9OTuh2Txm6wyK2WKlgWhZh4JOmWdPTNMESAiPrlqjVarvAgVVaWFgD2NzYLADaz1/Q+evlJcZhFF2KBWEWs4SFimPK5XIdwDQMQwBcu5ZpGis1F3Te0hrCMARACAOAhRzYmiRNGtTv94uDneNTzgcO1VqVrZt1Fiuz+vuBTxInAJimABQLpdIagDlJsqyshu97xcFz16HZvEGtWuHktFf89kTbIPCLvWkaM0WtOI59AMsUmWZ5MsDtW29TXZw/JY4zJE00M4YASqXScsZY6wRgNJbZGE2xWltdwbYvgG/UMzk832c0GhXxJLkAvsQ4TdIsKU2Lj1JK3r29y+r16wxdh5WVFZ4+eYw3vJBLo9E6nZIoHQNYSik3G6Wsu4YxW/vPP35HCIFdqfDr/i+87g9mrSzjvMCEfXZfWFLKfwA8LyCfv0t6JknC+es+/cEgm7GpJVUmoS4MkzOWUva01onjOiLzjrgE7Hk+nufNbWKY9yTJC46VOgewtNZJGIbtbre7MzHI1I2F47ioqdhMQd9HSln8FcBYyl5hkKHrHvx92t0JggApJUrF+L5P9B8LKxWjYkU8jvFDnzg3B4DK91EUvSqAXdfd933/7g8PHtLvnRWjpFRMmrdFyfGV1h5JhdaaOI79MAzbBXCv1/vxvb2973569IRaxaZcEljCYk4fSRJNqhNSrVFxyliNGclMqsFg8HTmaQJotVpfNdfXv6jX659OLqbJMoVRuOyq16N3dvbg8PDwW8/znmmtMd7UY/rvAIZk1fmTLQMhAAAAAElFTkSuQmCC"

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _imagesPlainCursorPng = __webpack_require__(41);
	
	var _imagesPlainCursorPng2 = _interopRequireDefault(_imagesPlainCursorPng);
	
	var _constantsGameConstants = __webpack_require__(9);
	
	var _Utils = __webpack_require__(13);
	
	var hotspot = { x: 3, y: 3 };
	
	var cursors = {};
	
	var StatusPanel = (function () {
	  function StatusPanel() {
	    _classCallCheck(this, StatusPanel);
	
	    this.alwaysDraw = true;
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
/* 41 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALXRFWHRTb2Z0d2FyZQBDcmVhdGVkIGJ5IGZDb2RlciBHcmFwaGljcyBQcm9jZXNzb3J/w+1fAAAEDklEQVR42u3YT2gcVRwH8C9mihIQDf5dqSBCL4qotCj0IHjb6+IUyoISWBoYCEJ6FEkhTemtpRB4UAkWwcVCINJe2l2Nl02KcYPVsKlYrBiJrtYKWowHtcr7/vrtMLudbtLMmnbJ55LM5uXNvO/7vTcvCXDdi7Rzp10tL39Oly+jxwUa+JNUr/9KCmRiwpo5Z4EsLd26u7tPYF+azd8JeJuAT2l4+GMaHrZAjh+39grk/Pn0ru8OgQ1kZcUG6NxnFEVvEvAGAe/R0NAnNDRk7ScnrRsFsrBw69vdeYLkpXM241H0OgFPEfAWASEB71OpVKNSyQI5cUL9WCDz8603vNPcCMAeeHFRlfAuRZGWREDAMwSMEJAn4EMaHKzT4KD1Uy5b7wqkVkt7kM3SUgHinJV6FL1GwHMUt3iYgJcIeIyAVwmoULH4JRWLFsjUlPq3QGZmbn7//09bAMlKmJz8gEqlHMUDl3sJeJqAfgIGCHiZgDkKwwaFofU/PW29KJBqtfV5ui2lAsQ5rXGVumZcAxctkccJ6KM4kAcIeIGAL6hQsEAKBQvkzBnd1wI5dermz5Wd1AC0q2tz0xpXqWvGNfAbHV6/foTiz+8h4D4C7ifgeQIWKZ+3QPJ5u+/u3fYc5861P2E2OlSAOKfN7RWKZ1YzvtYg/iXgbwL+pHhpPUH6fG7Ogti+3YJYWWl/to3pGIDdeH7eHqRcttdksfgQxaWugaYFoT1BJ81vCagS8B0poGPH7Le1FLIfuHQMIMk5W7vFovYCVYKkBfEHAWXSWyIOxE6io6O/0MGD7ffujjUHYDNRq1klTE1pV3+Q4koQfa4jtg5SywRMTOzbt7oKXLo0O3v1qj9XnD3b1zc2ZpV17doVOnQo/YmyseYAkpzT60ybmDY3rXGbSeAdAr4nX/KVShT5Pi5ePHoUyOUGBnx7/71v74MIgvFxLbFuB7HuAKwSZmZUCbYkwlCvub8I+IaAWfJH55ERv9lp4MCOHf4keeDA4cOnTwONxoULjYZtgn5z/IG6H8S6A0hybonCUO/3VQI+IuA38sFVq34p9Pfb6UEDf5biHq2y4rdBMohy2YLw22c2bjuAZCVMT9t1ofAoxSVvAYyO7t9fqQTB2NiRI1bqmnFpDWKBgH9InzabyNhtB5Dk3FdUKKgCbC9wTru6NjcfxLZt4+P+YO1LXTMuOiD9ROpn716beVtEWdpwADbz1apVwq5dX1O9bj91Tu20hrWmfyQLwv+NYQct4GfSzGvgJ0+m3X+jNhyAWBA6Oudydt1esq1BaI2r1G3G9+yxdvrrsXsyC0DSBt4qGYT+b9BsdqvU02QewHplvauv16YHsNm2AujUoNdtBdCpQa/bCqBTg163FUCnBr3uP23NlWyWCFBlAAAAAElFTkSuQmCC"

/***/ },
/* 42 */
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
	
	var _constantsGameConstants = __webpack_require__(9);
	
	var _Utils = __webpack_require__(13);
	
	var _imagesIcon_woodPng = __webpack_require__(36);
	
	var _imagesIcon_woodPng2 = _interopRequireDefault(_imagesIcon_woodPng);
	
	var _imagesIcon_stonePng = __webpack_require__(43);
	
	var _imagesIcon_stonePng2 = _interopRequireDefault(_imagesIcon_stonePng);
	
	var _imagesIcon_food2Png = __webpack_require__(38);
	
	var _imagesIcon_food2Png2 = _interopRequireDefault(_imagesIcon_food2Png);
	
	var _imagesIcon_coinPng = __webpack_require__(39);
	
	var _imagesIcon_coinPng2 = _interopRequireDefault(_imagesIcon_coinPng);
	
	var padding = 0.07 * _constantsGameConstants.GRID_SIZE;
	var iconSize = _constantsGameConstants.GRID_SIZE - padding * 2;
	
	var QuickBar = (function (_Sprite) {
	  _inherits(QuickBar, _Sprite);
	
	  function QuickBar(game) {
	    var position = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	
	    _classCallCheck(this, QuickBar);
	
	    _get(Object.getPrototypeOf(QuickBar.prototype), 'constructor', this).call(this, game, position);
	    this.game = game;
	    this.position = position;
	    this.alwaysDraw = true;
	
	    this.icons = {};
	    this.icons.wood = (0, _Utils.loadImage)(_imagesIcon_woodPng2['default']);
	    this.icons.stone = (0, _Utils.loadImage)(_imagesIcon_stonePng2['default']);
	    this.icons.food = (0, _Utils.loadImage)(_imagesIcon_food2Png2['default']);
	    this.icons.gold = (0, _Utils.loadImage)(_imagesIcon_coinPng2['default']);
	
	    this.slots = [[], [], [], [], [], [], [], [], []];
	  }
	
	  _createClass(QuickBar, [{
	    key: 'setSlot',
	    value: function setSlot(slotNum, unitType) {
	      this.slots[slotNum] = [new unitType(), unitType];
	    }
	  }, {
	    key: 'getSlot',
	    value: function getSlot(slotNum) {}
	  }, {
	    key: 'click',
	    value: function click(x, y) {
	      var localCoords = [x - this.boundingBox.left, y - this.boundingBox.top];
	      var widthPerSlot = this.width / this.slots.length;
	      var clickedSlotNum = Math.floor(localCoords[0] / widthPerSlot);
	
	      var clickedSlot = this.slots[clickedSlotNum];
	      if (clickedSlot[1]) {
	        this.game.enablePlacementMode(clickedSlot[1].name);
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(screen) {
	      screen.save();
	      screen.translate.apply(screen, _toConsumableArray(this.position));
	
	      screen.fillStyle = 'rgba(0,0,0,0.3)';
	      screen.fillRect(0, 0, this.width, this.height);
	      screen.fillStyle = 'rgba(0,0,0,0.6)';
	      screen.fillRect(0, _constantsGameConstants.GRID_SIZE, this.width, 14);
	
	      screen.save();
	      for (var slotPos = 0; slotPos < this.slots.length; slotPos++) {
	        this.drawSlot(screen, slotPos);
	        screen.translate(_constantsGameConstants.GRID_SIZE, 0);
	      }
	      screen.restore();
	
	      screen.translate(-this.position[0], -this.position[1]);
	      screen.restore();
	    }
	  }, {
	    key: 'drawSlot',
	    value: function drawSlot(screen, slotPos) {
	      screen.save();
	
	      var slotInPos = this.slots[slotPos];
	
	      if (slotInPos[0]) {
	
	        //Image
	        this.drawSlotImage(screen, slotInPos);
	
	        //Number
	        this.drawSlotNumber(screen, slotPos);
	
	        //Cost
	        screen.save();
	        screen.translate(0, -20);
	        var slotCost = slotInPos[0].cost;
	        for (var resourceType in slotCost) {
	          screen.save();
	          screen.fillRect(0, 0, 35, 14);
	          screen.drawImage(this.icons[resourceType], 0, 0, 15, 15);
	          screen.translate(17, 0);
	          screen.fillStyle = "white";
	          screen.textAlign = "left";
	          screen.fillText(slotCost[resourceType], 0, 12);
	          screen.restore();
	          screen.translate(0, -17);
	        }
	        screen.restore();
	      }
	
	      screen.restore();
	    }
	  }, {
	    key: 'drawSlotImage',
	    value: function drawSlotImage(screen, slotInPos) {
	      screen.save();
	      var slotImage = slotInPos[0].image;
	
	      slotImage[5] = padding;
	      slotImage[6] = padding;
	      slotImage[7] = iconSize;
	      slotImage[8] = iconSize;
	
	      if (!this.game.canAfford(slotInPos[0].cost)) {
	        screen.globalAlpha = 0.5;
	      }
	      screen.drawImage.apply(screen, _toConsumableArray(slotImage));
	      screen.restore();
	    }
	  }, {
	    key: 'drawSlotNumber',
	    value: function drawSlotNumber(screen, slotPos) {
	      screen.save();
	      screen.translate(0, _constantsGameConstants.GRID_SIZE);
	      screen.fillStyle = "white";
	      var textWidth = screen.measureText("" + (slotPos + 1)).width;
	      screen.fillText("" + (slotPos + 1), padding + _constantsGameConstants.GRID_SIZE / 2 - textWidth / 2, _constantsGameConstants.GRID_SIZE * 0.3);
	      screen.restore();
	    }
	  }, {
	    key: 'width',
	    set: function set(w) {},
	    get: function get() {
	      return _constantsGameConstants.GRID_SIZE * this.slots.length;
	    }
	  }, {
	    key: 'height',
	    set: function set(h) {},
	    get: function get() {
	      return _constantsGameConstants.GRID_SIZE;
	    }
	  }, {
	    key: 'boundingBox',
	    get: function get() {
	      return {
	        left: this.pos.x,
	        right: this.pos.x + this.width,
	        top: this.pos.y,
	        bottom: this.pos.y + this.height
	      };
	    }
	  }]);
	
	  return QuickBar;
	})(_Sprite3['default']);
	
	exports['default'] = QuickBar;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAYAAABQMybHAAAACXBIWXMAAAABAAAAAQE4IvRAAAAAJHpUWHRDcmVhdG9yAAB4nHNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs7nzXNmAAAgAElEQVR4nOy96ZMkyXne+XOPMzPyzsq6u/qeme65MPcMMCBIXARIiqRIo8Q1rlYUbfkv7Ed93c/SmtZsl9qV2WptVyYttaJRAgEQIHHMYE7MffT03dXddVdW3hmXu++HqOrOzs7qGaxpetCDes3CIsIzsjIq4oknHn8PdziwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwAzuwe9DEZ30Cn0crHn56dHf8GpuxzwxA98qrn/JZ/WraAcB/QfsY8O5ne8eZse+YCccy6fODB+D/nx0A/GOsePjpPZYdXY/bfgDe+2wia4/YJwX+Adv/gnYA8BHbZedRAO53fSaBfb/vjQN3EsBHP7/T/m3tB2C/s/3KA3wE1OM2ysqj+6MAlRO+M5HFdz+YxNSjf19POA+zz/aNtgOQ72+/cgD/BBp6ksQY39/vmP2Ye5LtgXv8QTJj26Pr8e9PahPdK69+nLb/lbHPPcBHAP1JNPT4/n7rT3LMnXS5GftMj5zffgDfT77cCcy3aP9fReB/LgH+C7L0ZNDeFCKjgN1vmwntk9pukxsCjNmfvSft3/L9Cdt7+59I63/e5c3nDuB30NSj7fuBcBzgk4Asx/YnHXNjPQFlk5h3HMyacWALzG7LbYAf0ffjvzHpdye2fV6B/rkC+K5Lb9w+DtTj25KbDLjfsndc9iiYiX9nv98c70iaX2AZP54J7XvbYqxt3G5j/c8jyD8XAJ8A7I/rGN7O2LduS8aBfOf2SQ/ApHMZlw6fBNSaW4F6O7vfuVN6o+2TMP3nTaff8wDfR5Lcwtq7N3YSIOH2dsntgJUjx4qx7Ung3u+tsWf7gXV0X40do0f2GWu7E8Mz4bPxtlvs8wTyexrgI53JUVmxZ/vJj/1kh2QywPcD/J0kzJ1kyii4GdkeZ+tJ25rbH45PKmc+zjNz2/bnQbLYn/UJ/FewvVf+J5Eg8mO2JbcDfZy1R9uZcMzoZ7A/wO8kR0bXk7YNNx/q/eTMfsteP0CMbI+e57iMuqftnmXwMd09un0nbTwK0NH9cYDf8ZgRyXMnxp90bpPY8+NAPQnck/b3A/h+oN/77fHzueU873UWvycBPkF3jzP1neTH3rY1tpa727cdK8C6DdACiblNm39ch3M/9t4P0PsxuGJ/sJs7HDdJ5kw6n1sY/F7W5PecRNkH3HcCuNxnGQX4ePstx5rbvyt2wb3PW8E4oH2DroKeBTNjML7YBZ2BAYiuQDTBWhPINsiIDJDjoFYTtm1uBe/oMaOgFyNtYkKbHGlj5LhRu2fBDfcgg48BfD9gT5Ick4C9t0xqvyPox37HNmhPoIugFgzqfgt9VBrVKOe82ny9HASuY+V9D8exdWxMem1zJ95sdaLOMF3XwjpvsH8ssK+ADLkJ5pssLtCY21h8HNBq7LNJb4SPY/VxGQP3sFS55xic2x/KT+INGQXqfsv4MZLs+oyy/MhDYBxQJYOeNujDllH3CZ0s2qhqwRb+fKOan52d9R5/7FH7W9/8uqw1pnBtG+lIjIG11TX91us/N9/5zvcX3r24fHI7jL6QCv2q1vInAmcVRMwoiM2N7VG2Hn8QrN21HPt8XDLpsePkyN8cvcb3NHvDPcbg+8iTSd6Mcflhcyt47ZH2O4F+F8jGAeMjzJQx6QKYGoJZz+JI3jJTniVzjXLBf+T+o7nDR49Yx44el6VyRTZmZrn/9CkKpTJirK9pMOhUcfXyWX76ox+bv/7+D8P3z19rbXSGK1EqvgPuGyD73ArgW1n99vbxdTrpGAHaTP47d3Qr3ossfq8CfD/dPUlWTAK1PdI2AnLjgckbTB50ybbFMdeRx7VKi4VCsVKrlqcGnWbJBd9zbbdeLjv3HTvkLMzNWc8884xYPLRoavW6yOcDlq+tkCjNyeNHcVx35L/QKJWilEIbjVaKNElYW7lmXvzxC+rf/9Xf9N86v7wxSPmxNu7fZ/pcKDKAjkuQ0f3RttEl5XbAjz8I+wH8FqlyL3Y27xmA7+MW3M+dN87aeyB2uBXYtsE4Al01qDkh1EO+LR4qF4Lq1HQjtzBTrzx4bLHQWl/3co4rsW1ZKheto8dPiurMnHAcF9fOfibI57Atm1zOxXZsur0IKSUnTizhe/7IqWuM0cRxTJrECCEzPjeGQbfDO++8pf/iL/5t/PL75zfbkfqZ1s73wNoBMcrGBow0qBxoH4ydfS76ArEDdg/Ykzh7IB8Fd8qtD8Wd/O33tBa/lzT4nYI5+4F8lL33tp3dfQdU2RA/7lr6q3lbnpipFIMHjy2WvvmNr3qLC/PS8R3henlh2w6+51Os1bBdnzRJ6XT7tHsD0JpSMcBzbMJQMQwTupsdcnkfyxI0d9rMzXgIcfszaVlWlitrDEZrckHAE08+I4Og5P/P/+pfz/703TPPt4exrxT/GaymQfugZkAt2rZcdCxxSKikLIV0jdFKG9GLjVlWOvm+wHsT5JBb33TpzWt5y+Ucdw1+bjwp9wSDT/Cc/CKg3mPrEWAb15DOu475g0rOen6pnJv63W9/Nf8b3/xNq1iqUqnXsR1n98cEQgpMhkQGw4itZptePyRNU2rVIieOLmHZNipJaXXaXLq0guP6SClxHIsjSwsEQe62/ytNI5IkweiMMLXRGaNr+Ov/+Jf8j//iL0JtO1vrre61ROmWJSnWCsF8o1YN6vWatzQ/5/pSWVHYkVGSUCkEKgzD6G9+9u7V9fbwLwX+34LsAQkZW++t9xh9XM58Yj0O90Yo/15h8P0exF9Ef++ujatNesixkj85Xi8/+9yjD9Yfevgh59lfe14sLi0hpUQCqdYYbRBSgNoVukrT7Q/p9UMSpXBsm+lGDdfNJIjlWZSKRXJ5jzjOwBonimvX11g8NEfOd5HiZhTftl2ktAijEKMVxhiUSrEtmwdOn2JpZsrLFYsz1bWVSs4PTHlu3l46fNSuNWbsh+87Lo4tLdDr7nD5yjkSI3nm8Yftgm97J/7DXx3/F//m//nHG50oEfg/FFlaerJ7neI7XNdREtlL9hpl99H1eGHJL6V8sT7rE/g4u429xa2gFrcDe5S5HW5hblxDOi8J/8mhav6Lv/2V56e+9JWvO8fuv0+4ro9j2ziODQK0zuoLpJBordHaMBxE9AchSZpijKQY+Mw2Gji7bA8CKQWtVodhlGDJzCWYJCnd3gCDwPc8wKC1yn7DZGSptAIN2hhUktDv9XnxxZeEShOrUi25jzz9Ze/kY884S0dOWDOzMyIf5Mi5As+1SJSkWKpy6v6T1OszPHDqtGUJFbz57plGGMfXhbC2xrA8Lvf2kyCTiGW/KK3wKgvCqyzgVRaI29fvdFvvmv1SA/wOUctRF+De9nincnTZBbrJCxP+XtU1X/u1p5+afuyZ5y3XLwjHdUmVwnNd8oUcQuxKEsBoiNMUDERxTM73yXkuGPBcm1q1gmXbN59AIej3+7TbPYS86RyM44R2u0cYpXQ6Xa5fu05/0MGyBJ7no5IEpdVu/Zoh7A945bXXkbk8QX2W2cNHKQQlKvmAejlPOXCxpcCyBJaQOJ7P0UOHkNLC93Li0OKsvXzxQnDu0vKMNlwRwmpxK7BH9fYk7b3Xa9j7zkRQ79e2B/bPGui/1AD3KgswuTM5DvRRf/c4wB3ABVxj4vsdk/zxcw+dPPRrX/u6I/2c0CQMoj79OMS2LCqVEpYl0cqgtMFoQ5KmqDTFdV2mp2vkcy4530UYg5TZA2BbEikz97uUguZWkzhJsR0LhMAIWG93GEYxedemUMjTaExRLFWwLRshDGEUotKEaBiytrrKm++8j7Z9sCSzc0tIP08qBdWix/GFWWrlInGSgBHUqxXqtWp2GYShVCqJk8eOuGfOfFi6urbeMIbLQsguiIlgnnD5Pymwx/tGt93DzxLkv7QA33ULTrqIo5HK0aDMqCtwFNi70sQUIPyH98/XHvvG179aCEoVoQw4lsTzXVKtGEYR5SAgl8uTppm/WpssIKOBer2K4zgIaZHL5XBdi263y06zS6vTIQyHGKPI5/xM6hiNtMG2LIK8h+NIHEdQKxeYnq4T5AsIAUkSgwCVpnS7HbY313nxRy/y0aVlvHwBYdsUSjVmpqcy74wtaZQDgrxPkiiiOGG6MUU+lx+5gppiqSCOHZ73z334fnllq+kZYX8okDFjWprJAJ/02TiI7/S9G8d7lQXxWYH8lw7gxcNPjzL3+PqTdCZHtfeeNHEx8fGcw+8/+/CphZMPPmxprTFCISyXfD4g5+eIwoRCzqdSKaG1JowilNKkWuN6HuVSEUvaWNLK1pYDCIZRRBilRFFCvz9gMOgThSEIw8xMg7nZBo16jXqlSDXv49gChCBJQtbWrrFy7SLdbhujEnY2t/gP/+7f86MXfoYRUKw2UFph24LDSwu4vk/J9/EtSblcwJKS/iDEcbIObmYGYxTNnR0KxaIIPMt5/a33vX6sPhBYO3e4/HcC700V9vFAv83N+Fkx+S8VwMfGMBlfj6e6fpxLcG9xDeQM0dcXK/mnv/jclwp+EAhLSmzLxrJtHNdFaUO3MyDn+1TLJbQx7LS6pEoRJymubVEsBghhobRC65Q4iUmShChOSaIUZTRoiJOUdrvL+lYXrTXlchHfz+E4Nr6fw/U8hv0ul6+cY7u5Tq/fJhwOkFrwn/7y/+U7P/wJShtKU1OUqhWSVJMMI6YWDhGnNr4tkBKEMPSGEZs7bbabO/SGA2qVCkLA9tYGlu0y05ihXCpbL770srq+0VxFOJfEzZyT0es9CuD9Phvd3w/gow6BW77zWQBcfvwhd8fGwvDjtt8F3k+mjC4OJp1xpXns8NxcoVSrCsjS84y0MEAYxURxTKJSmr02l69eZXWjSbPdI00UQS7HMIoZDEMGYY/Ll6/QHwxI4gSlVPa+NwatNAKDZUmMEGxud3np1TNcu74JgNnzxgx7bG9vMBgM0SqLbEokV69c5C+/9wPCKMaybErFEkHeRcchG2vXWL52jalywLXNLu9e3eLH71zm/QsrbHWHdKOECxcu0GrvoJTi+uomlu1gjKEx3eDRB0760qT3gckhxt9wN2TdbnT3tk76pKS0/YpDbt6vW4fdGHcr3hX7pfCDf8IChvEU2PELfyuLCxwMLhjXmOSJqu8snT592rMtG4kAo1FJDEiEiUEI0jjBsVw63RDVSahV8kw1qtTrVVqtLmmSkCaZS8+2MneiiSJsS2LbAt/2MRhW1ja5eHWF9naPKIxJ4wQAlWp2mpu0OlvEcYxt2wgBRisEgvfeeRedJORyOWqVEqVSCQTkXIFVLBD12zx0+igz6xvEgwHaAGgWpuvMNqZwHAuMytotF9u2SZIIx3U5/eBp2/lP36vGWucx1rgvfNL13lvU2FpwezbiXtt4jvlnHgH9zAH+C1bnjDL2KNjHNbiN2VurKVuoZ04sLpTrszPCCIE2BqEFwhggxhI2SiuiJCHnORQKBTAWlpAYY5DSwrIkaZpiSUEhyOE4DgaDZVt4GLT2cRyXdrvD+vomKyurqFTjWDZbO0201iAUiJR8Pofr2OQ8j1QZtDa4jkt9usFMtYzv+7iux3DQxbFTPFeCcdlaXeHMuQs89+gpAktgtCaMY1575wPWmj2efug+bCc751Ipj9EKy3ZJ05RBry8tKT2UcYXAMfu7DCcBXo3sj96n0YqgPWDfVhE09p27CvrPFOB3APfo9jh7761twBbZK3WSa9Amcw1+oRJ4S/edPJmzPR9jsrslDdhSgJQkOkUlMUmiiZXCsiyEEbR7A5KrGqUMzU6bvGdTKZXwXY9+v4fjOAzDmEEYkSaaou2Sy3nUq0VWNwqEUYo0ArRGG33Dty4gi5jaAseWeLkChWKJr33rH3D2w3P85OU3qTk5es2WybtaBPkCg3CIjWTl+gaXq1UeOL6EZWnKuTxLC3P8u++9hC00z3zhNJaUTFXKKJ0yGCYkUYxOQpnP59ywk1q712s0xXH02k56a46z+V7S1p7tAV1yu76/E+A/dfvMAD4ObsENB+04i4xLk1t04ARwj0gVVbKkfur+pflaY3EJbcC2JJisB6QMONJCCsNOt0cUpXS7MZ4XEqcRK+tdVGK4tr5NrezjNsoYZfALHjs7LVY2W8QKUgOlwKdiW1iWhxQWKtXZSQtBIfARQKoUWimMEWCyaGm+WCAoVLAsi/r0LKceepAfv/hzBIIkTel1Q7wgTxiGBI6HbcHGTovmOwOqhRwPHT/MiaOH+fM/LNEf9NFaI20brRWXrlwhjiOqxSLStXBtKxAiLWPYMQIrk3D7eqv2W0aBPUpI48USMAHUxcNP39Ucls9couzaKLj31gJujO23X0XO7bndAhuzm1BlklOBJ4/Wq2XPz+eEVinGsrGEJDUplrFAKwZxTLvXQ6WG5WurrKxtoKUkTTW1SplDc1NMVQOq5RKFQjGLViaGa90QS1rYUlKWEktKkiRlGEYMhzFKKUp5H9dxiMMBYdTLQK5T0iQhiuLMzy1kFrbXcPT4cXKeu8v2RoRRwrAX4QGEPa5fucj09DTJMCKNY67m18h7Dq+8dxEVRxyan2Uw3GFjc4tKuczK2io73R7FUmDlHOE7NsfjxCxjhNq9pg77vyXH5croGm5Kkz3br75zUj7LXbHPBOB3GI3qNv1nbmVsweTKm5teALO3bUqY9IvTpUJ9/tBhaTQICVqlaDQawSAMsQZdtrbbDAYRSJn5vjUUCkWWDs3z5EPHKQY5jNIopXE8l2Zzh7XtNlJaaAOxUjhSIoUgjmNA8/gjJ5iuVwGDYws67TZKR7sdW9BaEfZ7pMUKSTzEkKVEDbodomEfv1gELNJU0+tF5GyJIw2bFz/g+swccwtLJEZx5uIqQ5WwsrmNSoacuXAeHYfUK1Vc38seoqLL3HTDmq6U8q2Ix+P28CrGug5iuHu5HW4H9l5y1l7bXqrtKINPsj3wjmvycelyV+yXgcEnMcMkNhkPyU9Ig725rXV8vGhzam6qnvOLZZEmGse3idOUNE2xbYdet0trp4VKDcoYpGWRaoUQDq5jcezQLDnPYWt7m0FviOMcJk0UG1s7DIYhnpB04yF528YSmsFwyPZ2k2NHFjl27CiObWf+9O1NBr0WUgqU0ug0ZXNrjRf+/ofU6nMsLh7Cdhxm5+d445WX0cYghQAjsCwb13F3O7lDZNjlozd+grC+Sn2qgTAageLho9MUXReTRBQ8STjscW11lVq1go3h9ZdeFYsz04UHHn7i5Gtvvf3fr21ur7Q6vTOpFlcFsosQA4HsGiP7QhCBsMhAvQfuPbAnZKAdj6HsAVlya6f0M2HuPfusAL7fa29SJ2e/woU9UE/qYFqgZnKOCOYPLdnGclFKEfdiOr0uUX+IMYZUK1Klb/yUEAaURjga3/MoFHJgaXK+SzEoUanVMAKq1fKuS07T7zn0+kPa7R7LV69x5txZnvjCoxxRKVoIhuGA9ZVl+r0OQVBAaU1nZ4tXX3qRjz46T6/7LkJalIoB99+/xM/ffIdSuZKJMyHQqaLf6dLTKTnPwnEthp0mZz58h8cef5apYp7ZRpWFmSkEhigOuXzlKmGcMlWvQ5ry6isvgXR5/stfdKQwjVNHp6tXV9bmr6xsnjp7/nzYH8ZhnKowStTWIIrXtaZtjA61UpERRMKIgRFyXWBfEsLe3lWUo4AdXe/dtywoYG4DuLmbOvyuA3yk9Gwc1Hs2zt7jwYVx//dokGJ3WzuAazluUmvMGIklhknIcNAnGg5wXRfPy2M5FtoY+t0ew2GcuQStTFJurG3w+ptnePKxB7AxHD5Ux3OzrMFKuUCtUkYrxdXLF4mHkKQha+urSJVwffkSQg0IPJd+t81w2EanCeEwII1CXnzhBc6dv4LvedTKBY4cOYznObzws5dZ3exSrk9nLknLAtui2+0QDweUiwG5gs/SwglOPXwKdIgUDpVibvftYBgMY65tNjmyME+/0+bnr7zCxUvLfPv3/4jHnnqSNA6lbdtuqrQbDoeF1etX9fmzZ/X1lbW02dw8vt3qJL3+UKVJYsJhqKMo1q1OSzfb3UE/Td8Po/T/RvjvgYjIALvH8mZknd1TM/Eh+Pxr8H1sD9QwOVr2MfkmuGB8TDJrSJ52bZ7yHcfv94doGTIMOwiTUq3WCQo5JBYKQZom9Pt9kiTG8zwq5RpCQDiMuXxlmZW1VR6+/xB536LV2qHb7rDTbDK3MM/bb7/Nay+/hu14nDh1P7VqhScffZh+p0Vnc4UuKWkck0QRQgosy+Wll17hrbfP0JiqUS4VeeaZJzl+8jTXL1/kP/7VdxmGKc6gj2U7pElMUCjhWDaJECTaUMuXkJbHdKWMQvPBB+/R62zTqNfRSqOV4fDMNN3mNm++8ToffXCWzZ0uV5aXefzppyhV60RhjLQVtuuJk+WydfLUaStNtGO0JtUpSRwZA+RcD8eSDHs75u++/+/My6+8M/W91y7H2x11WWCnZGO17N2bvXrO8b7U3r391XITjtkk3+tNl2Dm0pqUc7K7GN+YdB4Tf9F3xFNFz5kr+26l3+85Fy6dE41DETqMsaREJSndrsswHJCkaRZpTBWWtJCOy0yjzmy9DELg2CCMZn62QRzGrF5fYfnSFVrtNv/5b77LW2+9h+s6VKoVLq+scuTQHJ3tIxw5Ok9jdpGdjes0O9tE4RBLWLzxxvusrq3xm9/6OlE4QAIzcwuZJ8axSY0hTBVlKRFCkKqUne1tXMsiVVnuS5oqDi0tkPcdkjimlnPwbQsJ5Pw8QRDQbrd44YUXefv1N7hwZZnpmVk+fP9dDi0d4te+8hU836PX7dDrtnajqQIpLCzHxrUcXNsSlmXjeB6e49CYmhLf+K3/hnffPB/4ljiGUVWE3cPcUtq2R0SjJW6T3taf30DPhFyEScEEyc1x/zKQm/3Y27jGpDPGRM/ZQj9fLwaHG9VKWQrcOIqF7SZ0dlrYQUAgBf04YWs9i0YiyFhVWgjLQUoLo1LSYQ9b++TzPkJKbNuhub3FmQ8+YKfdwrZcXCervyzm8yDAEgJEytq1ZY4fnuX4yQcJgiIrV87T73YQQnDhyjIfnDnPn/zJH/PIU09w6cJ5rp4/B0KitWJtfYPtVofOMOsAF4I8Wmf5SkM9xLItpJRUXIlOI1596QUunL+EYzlMNRrYtkU+KBKnisuXLnHlyjLRoI/v+/SGMWfPX+Tqv/7fSGLNr/3GlxHYWJaNShOM0mgMDMB1HIQlcBwfLSCMIrqW5LU3zhDGllUplYsrzfVpYIWbAw2N9pfGWfxXspM5aqOJ9RnYzW2ekwnsrQOjw4cF6bfLvvvQ/FStNjs74+fyBSFtC6UUm2vXaW5v4DVzWDmXbrePkTaFchnbchFIhAQpLDCQRgPeev0V3tIxnu9m7RjCMGR1fYOv/frzLC4s8YO/+xG+4+L7Lkpr+r0uvmvzW7/zLX79G79JISjwzs9f4tLFcxit2d7e4Y23zjDVqHLs5Am00uT9HEop0ihkICQ/+vELXN/YxnMcdlqaRGsEEsexyfsexXwOjUB6OZQd0O4npMZmdWWdD89dymTVYEBQKvLcc8/yD//gDyiViqxeu8Krr77GO++d4dKFFf7Xf/U/cfHCR/z27/8hM7MzpFFMt90ijiMQOntLDBJsJyJfKlEIirz82tucvXwdvEDanu8LKWrG3CYhxwM9nxlrj9rdBvikf35SQGG8YzlWY6l9rYdfybniD2ar1cWl2dliY2bGypfL2JaFUobuoMNUpYJMYlxh0dpuEicJhUoV33HB9najioZUJaA0g26PKBziSDA7kKYpiUow2lCpFrEsQRLFfPlLzyGlpFAs0G73+MHf/ZCHTt/P1779W3iex2sv/h2vv/xT0kTTD4ecPXeZZqvNl59/GsfzSFS6O2KPoT/oc/6jj/jw7AV+40tP8vDp+/nK136TEycfYNAf4HoOnX7E9/72h/z856/TbnV4+623kUaQpFm6rrQspmam+eIXn6M2VeWB048wMzsPRnP8gYd59te/zodvvc7/8W//Ly5fW+XFH/8I13F44qmnefDUAzSmGrTbLfr9LlJKYhOysb7B4WLAhx9+xNkz57GEhV8IRKfXV1rrWAgjs8jCLTGKPaBPCtl/JnZX88HvUII2XrwwqbZyT5b4RodP5X353y5N1U8+88QTwZETJ6SwbQyZljTGkAxDLKVZPHSIar1GqhRhGGKMwiiDSiOSeEASDVFJjFIhtm1Tq5WR0sYgSZRBI8n5DvVyiX6vSz7v0WjU2G5us7R4iEcffYgHTx3lwYdPobXilR/9gB//8PtcvbrG6nqL9e02G+tN+sOQhekpTp6+H4Og1WySzxWYmpnH9Ut849u/w5/++Z/z27//R9z3wENU6w2m5+apN2aYnpvj6WefJZcv8trLL4HSuF5Woa+0YvHQIf7pn/4Z3/jNrxP1elTrDeq1KqUgQFoW0nE4fuI+nnj8caJui7WV62xtb/PmKy/Ranc4eeIYpUoN27EJwxBL2vS6Pd59/wPW15tEUYo2itbOtnnr3Q/WhjHfF8LZ4WbHcnQ93jZqN7T53coNv2sAn5DvPZ5jsl84/pZAjtHxoWLB/bOlqdr9xw8fzj/9zDNC2g69/oCsSge0htb2DlG/T5REDKMhOk1RxuDaDsIYojBC68xVmxUi+OSDAo7n7ZarGQQCP+fSqFeYnalRLeXp95q8/PKrfPj+e7RbW9hCkQvypEnE337nr/kv3/kbPrpwjbWNFtvtDu12l1ZvCJbFdL3OAw+eplxtMD09zxeeeI5czsfyAh54+DGmp2eyNNxdM2R55nt9hfpUjSvLy1y9cplKpUK326VSqfLP/uzPePKJJ8uNtbsAACAASURBVDBGM+j3mJmZoxjkESLLvXFsCykEpXKF4yeOc/aDt1nf2MCRNtudDuVKGcdxsiEvcjmG0RClDW+//RGb2y0cxycaDthev27OXLy6GSt+JITd5tbh38ZBPuoeHAW6Ae5adc/dlCjjofnRtvHAzqjP+6bv22hfCPVsrVg5NlurB4ePHiVfKmHlfFY215F6txpeK7a3thi2tqnVq2x1WrhO5sN2iyVcx8FBYDs2UlpI28ZxPVzfyZKkpIVWGtfPMT83xdNPPMTi3DTNzTWifo92u8vC7BSnHzjB8vIV3nv3Xd59/ywXLy3TGQwYJgqMwXccivmARqPOg6dP89CjXyBSLl6uTC7v0um0SFLN9WvXqE3PUasUMUC0W+ScpAlGg1EKz/eYqtf4vd/9Xa4vX6bT7hAOh8w/+CD5XI619TXqjTonH3gQz7mZKKiNIUmzfp/rSKbnFvmTP/1z/pd/+S9ZvrbKTFCk1d7h+vIlNjdWOXriJKVylavLK9i2y6DbIufls5ReL4e0LbMbtZ8UbR6Xm+M27hP/1O2uMfhYneW4bpuUZ3JbEbEmnc558g/rpeLR+06edGfnFqjUqmgEnU6XaBhmeddSYgkwcUI/Cmm2ehitCXwXx3Hw8wVy+QA/n8fLB7iej227NzIm4mGIMZqgXOKpJx7mqccfoVIpUa01CIpFpElYX9vg/TNn+fufvsoLL73JhWurhHHMMFYEQZ5T95/k1597hj/6R/+Ib//O7/DoE08wd+gItakZWq0tdBojjKC50+Ts2fNUGzPMTk8hECRKEcUx2mRjFqo0JRqG2LbDwvw8g8GAD957D600tXqV2lSd5eVl6lNT1Ot1tNFYQqK0IY519mbTJrsuUtCYnmFxcYFXXvwp4XDI8ZPHCYoF0jSmub1NFKdsbDYZximDcIhl22ilSNJUv/fRuc0oNj8VwuqyOx4SN1l6fFSscea+kYB1t2o072bJ2ngHc1KS/bgvfKSzaWxMfMS1xaFyqeAbaWXDOpAFjj3PwwiBVhqMplitkK/XiDQIx2EYpbuFDilpMkRYWSgcnaX+a6PRcUocRVlVjedTKReolvLkfRfP8ymXS8zMzfHwFx7n4tUVfvDTV7l0fY04TbAkJKmiXAx4/JFHeOaZL3H8wcc4dPIUtekFalMzFItFlIrIB0UKxQpuLiCOU86fv8zPX32dnVYLAN9xsGwnuxBCIKUkTRJ63Q6O5/LVr32NhUOLFMsluv0+165dY2XtGuvra6CzocSzMrysE43IHFNpolBKI4Tgocee5H/45/+cWuBx7r0ztLZ3MGTJYleXz3P+0lmkFARBgTiOGQ4HrG9uiDROQNw2Js24k2D8nn8mUUz4bBh8XI7s5xK8tXNpTF7K9FuNcuHhQ4uLBT/nM78wTz6fy17DSiGEQBmNSrMbq6UF0sKyXbRWJHFE3nPQKiWJhwhLIqUNQhANBwx6HdIoQWtFqVbj8MI0tUoBKSDI5zFGI6QkjWN++tOfsLq5jW1l1T5CgOtIFuZmWTx8glyxxiBO2d5qsnJ9BT/n47oOGImf88h5HkYb1ldX2N5usd3c4fCRQ5SrNSQCx7YwSJRO0akiVSnCCDzfo1gs4rouvX4PpM21levk/BwPPfwojekplDIkSYIQkr3K3721VjqTZVIwMzfP3NwCb7z+BhubW6g0ZqfV4s23P+SDM5c4ceI4WkO73WZrY5XNtVWzudNuhol5UQi7w+1DMBtuZ/FRPX6L3Q0Gv9safFL+yQjoDdws6r4l2coYnXcscaSQz+eREtfJUSgUUdqQpopquUypGLDTbLG1tU2708bzPPJBkCVUGUOruUmnH1Ip5FBRwmC7iSkopGPjWgLH83FsSZgapG1RLuVJVMLl5asUimXyvodKI9bWVrLOqW3hOw6eY9EeDJiu1VlcOkapVkdYFipNaLZbCGMwHyruu+8kjZkGvpMVAzeb26xtbGPZHjmZgT/V0Ou16XbbOI5DPheANji2gyXljYv1/Jd/jS99+Xm2d3Z47dXXeffdt9je3qbT6VMoFLAtAWY3oGUESLIh6IwhShSusLCl4NGnnubDD97n7370M954/VW0kOz0EuYWD9PtZvnrtm0R9nuYMMSSEoSGW/tK4+H5j9PiAqB4+OlPfTzDu8ngk0A91qkUkwantwHHmGTWtc03HclspVyz5uYWqE9PYYzm+vVVVldWsZxsmGNjso6ZSlU2MlUSo7VBCEm308GywLEstNEMwpBwt3jg5JElDi3MkQ9yhHFKIfDI5TykFKSpYWtrk3Nnz/C9736Xjc1tkjgbHTZRCs9xOLy0RGVqnmK1nqkfrZECbMdmcW6ORr2K53nYrken3eHcuXO0Wi2Gg5ATJ05w8r6TCAlJGhFFIf1um0KxjGN7lMslckEeg6Db6VIoBORyPtVymVOnHuC+++6nPwyJoxTbcXCcrGhC6xSE3h0DUSKlAGPQBhxbIqXk5MmTqHjIa2+9TWtzg5mpBlIIWr0+w2Ef23a5duUSq6uryVavv6q084IQ1vjsE+MsPu5VgQmM/mmz+F1h8F0X4WiFB+yvuycA31iC9LBruaVoOLQGg5DaVB2BQWlNGIYsX7vGytoqS0tLVMsV4jig1+9j2RLHcbCsCNfzSfw861stivmQYjEgSaBQDuhHIdvNFuVyiXIhG9nqyrVNEpVSKxc5e/413nrjbfr9LjutbTwpcR2HYRSRJCnlUpE4TUnikEGvg+tn2r1YKDA70+Dxxx+hWCig0hRh2wzQCKNxZJZuXa4WsV2byxfPYlsWjuti2w4725tgsvELLdui02qRJjHl0mn2+EkKwaGFBcIoZm1tHT/vk6qIIFcEYTBaZkyOyjS9JXEd68YNyRWKfOt3f4+XXnuZv/kvF5mfMxTyPoNeH0sKtrdbXLhwiVanOQyVvSqsfMTtEnNSJdA4s4+b+LRZ/LNwEwqR9QvN2Gd31OdCcDjvu0HetYXruJlGVdmfCPJFcn7A5tYWRl0jnU8oV8rkC3mi7RDf84ijkCROcVwXjaTVG6KxaFSqCAxevsBGp0+l3aFeLVEpBmx3h3xw9jp53+HSxbNsra5g24Kc75F3bEwhTyEoMBhGzMzNMjU7z9TMHFNT08zOzjI3PU25WqZYLFIMAizLwnEdjNZMT01Rr1YYRBErV68zf2gh60+kiqvXlrEsO+sIAzrNZIKUEqUUjuswN79ArT51ywWebjT48MwZjNHU6nXCfEK5XMaSu9OzKYXn+wRuNhquwRArg2NJCqUyX/zyr/Pjv/8JYZqSU4bp2Rl2Om0uXrhEHPZJNQOD9ZFAJBPuE7v3dRJhjd/j7Ofvgt0tgN/yj5rJT/ikJeutG2wBM8V84AW+y2yjQZrEYEl0mpIv5JmqN0gSMDqh2WxSm6pRKpVp77QRuynLRmjSJKFULCCEIBxGNFsdphsujmMjbJf1VpdUa/xcgNKGME7pDULiKCYIfI4dXqRWL+LbmXTxPZ8olvilCvc/9CDz8/Pk/Rw5P4fSKXGS0Gm12FhfJ+f5lMolgiDAcRzK1SpHi2XuO3kfxghs2+LQ4aMMh10Gg0H2z1sWWuwOq6xVloCdKpaXL1MolXBHfN7FQoDnuWgDJ44fy0bu2h3h1gDdwZBer0fguQgE/SjOxnjJ57NaUaMp5At4jkecxPT7HQbdHRwTg0lTYztDEnslu4W3B+p2ywtTbgfz+PYtNZqfJot/lslWd3IPjskV7QhB3rIsx3ZtYVmSjbUNCpVs9jI/57O4NEexXGanuYVKYgTZ+CBI6Pa7CKNIh0MEGtt1QBtc1yVWCUJoAlsSoekOEgZJF3SPJFUYDBhDtVrhqUe+yMzMFEnUI45iwjhhqx3RHShk3EFcWGZjs4nnOlknwnGoN+pcunyJnZ0uUghyQUC1XGZ2epr7Tt1HqVjCtZ0bF6VSrbJ4+DjLl86RxBGWZe8O4JNkmppsTPF2e4f1zS2mG40s/2a3in44CNnZ2WE4HFIsFImSFKVSwjgmDCOG4ZANkYE+VQm1ai1DpxAMBwPCKCQMh4gkIVEJtmWT92yiVCkt7B7IzoT7tbcNNwE/afrCu+4m/NQBPpIiO16BvZ8evy1CZozO2bYsa6OFVoaVtTXc7W2m5mYpFPJIaZHzPWxbEkUDwr7B9Vy6ffBcj1wuR6+1ge9JlhaP0+102GntYMmMGa9vbTIY9nBzJfygTJykWbWzLfBsGzeXZ37+KF6lxrnlLeJ4gOO4dMOU4TAbpkEYweXlVTzXzebjMeB6LsePQ3cAV69vkqp011UIUkrm33qHP/3v/gmHFudvXAjfcZifX0QI2FhfIU3S3U6hIYkjhMgYvNvvs7x8ma2tTUrlCq3WDteuXkcKqFZKnD13hvnFQ7RabYzS+LkcuXyAJQVhOKRUKlHNl3GsTMcnScL15augNVtb68RhRLFcYXFxiVazhchCRYnI5u+ETzaM234SZZzFPzX71L0ou94T2B/Ek4aC2Itg7vrAkxnfsb5RLQRTOd+zjDZ0O238XJ5CuZyVdgFJnJCmKcVyEcex6fd6JGlKvTbFwuwMjuXgerlsapEwJIkilNZ0e0N6wwHa6EzrCo1tSxr1GseOHqFab1Cs1KnXp1hd36DXjxmmgJDYTjZEmpQWUsjsbhmDMRCrlJ3mDlJI4iRjUIzGaI0yhm63j+/Z3H/ffUiZPfsasCyLYqlCuVonTRIEcpelNVpnxGiMIo5jLMvBcWyUMlSrUxw9foTZ2QZhmNDr9nFcl1w+G9QfAcVimalalcD3sXfdjpBlTr7zztv0+j1cx6HfaYHJpm1pNrco1xvpIGE7TnhdSKu/+7U7zd85GskcHQFrFNCfevLVZyFRxpl7dHv0NXdT3xmdl9JywVAsliiVKjR3duj3+7i2i9GGTqeNsCSlcgkhJWG/h+s6lCtlBBJPCopFxTAKKQYCXU3o9nokyjA1VefEiZNMz8yRD4LsZAS4no9B0O/1iXWHMIroDSOMZe3OAgGgMRqU1ggjsGyJ3hvNxQjiJGFra4NquYSKY1SaDVshNKRa8eZb7/HsM0+zuLBw4yIYsl51IRewsHSUna0tdppbFGXm2kSTuSb9PEGxDEJSrhSZn5vFsy3CJMLPFbh48SJxnJDPBwiRzermulmF/uiFN8ZwfW2NOFV883f+AacffJBL58/xf/6b/51z5y5llT2uJ107LQsxfMwY8QrC7ox0Nkcjm+MENjqT8ih7j/67n9qAQJ8qg0+Y2/L2crQ7RzD3fOBTvmt9MfC8MmAJIRgMBri2w9zCPBurKywvX6a5vYWUNkopNjayV7dt2URhSLs9IIoT8vk8jak6Ko1ZXVvHcV0effgR7j/1II3GNEGxgO/nkZaDUppOr0O71cKSAqUUnXYnY2Fhdv3MGqXTbMIqkbHvHovvPa3aGFKVkvM94jTOHgYE2mQj2zbqVY4cOYwcCeTsXTFh2Ti5HFJIhMwumeN5+H6Al8seRtdzmZ6eJvAcpIAojen3OszOzdNstuj1ejiuSz6X260NtbCkJE4T2r0+KxvrvP3GG2yvr/H4k0/y7DPP8uCDD2FZNh+eOUu+VEEKpNGJbYw6pHVyIk0jIYS1iRAx2US1k/zfe+2TMgxHcQF8Oj7xTxXgExKsxkF+p/zvGyA3aN+S+unAdepxnFrdbo84HGKMIElSLl+5SJKEoDVxHNHuZG9QKQS9Xpdur5tVywuDJQT9XpdLly/R6bZZnJunFBSwLQc/CHaHQxZIIbJhJXan+bMwWZptEuNYNvYui1vSwnVsXNsmyOWQVjb2SWaCveEfhJCUiwGgSdJ4l/0tHNcnVyiwuDBLoRCg994GCITI5txSSuPkcgjLIozijDIdb/dcDQvz8xRz3g06dGyHVGu0SvFzPu+88SbtnSZhOKTb6dLcbnJ9dYXXXnuVixfOk/dyLBxeQgpot1uUSiU6nQ7f/+7f0h4kLBw+xvNf/aaYqs86geMUhq3NRhgOj6RGGYS9LIQVcutUhON54XcC+aca9PnUAD5hCpL9QL2XDjuqvW/R4AIhVRrel/fcRc/zXZ2qDAgqy5QrFvIU8nkc10HtpppKIQiHQ4QQVMplDDDo9Ghub7Oyco2dVgtpWRw7cpgoirFtiZcLSJJsbG5jNLaVDctmOw6+l1UADYfDrEjYtvBdm5zrEHgugeeR950sQqoNaZrdSymyeTa1MiiVUC0FpKkmiTNwKqWRlqQxVScfBGw1d3j77XdY39jIctzJ8mySOMb38zc6i8PhkH6vx9TMLLVyCbl7pROtaXfaWJZAI3AcmzRJePnFn/LRO+/w3ttvsb62xpVLF9FKcf+pUywdPcp0o8HJk/djBLz20ov8/LXXWL6+Srk2RbnWYGHpOOXajDj96NNyem7OVnHodzrtmSiJOkK4VxFib0CgUV0+qRBiX7unAD5hGpLbGFzcDu5xebI73qC0jIqnbMnxQi4fCCGE49i4rkuxmKdYzCOlQIosFC0BlWZTZSdxhNGQhDHdbpdup0s4GNAfDikXi1SqdbrDAcoocvk8ILDsDKRCCqTt4rkujm0TDiP6/QGeZ1PI+RQCn7zn4Tr2buc0+31B1olMVdbZzCR5JmdcW2Isa/dBEeg0RqWKSqlKo1Gj3drhtZ+/yeUrl7l06RKXLl6i3e1iIRiGQ0rlCl4uQKmUQqnM/PRUNkoueygyxEmM3IuGWhb1ejZ/z8svvoAAypUKTz33HL/x1a8zv7iIQGc58rbDdGOaRBt++pOfMEwMc4eWUEpgewWSNAWhRb5QElONWSce9t31jbVAGd4T0tlLvpq0TArXw5hUuWcAvg97j3dA9vOeTBr3xDJaCUH6UOD5NdfxRGN2mlqtRpokDAY90lRlueCGDGS7VSz9/oCdnTadTocoTlBpTKIS4iihWCzg+g5xnBDFYeYjlw627ZAkcTZdIArPzkC702yRJBE5zyPIuVk1PWDQuzIkK7iwZFbMHMUpUgpKQUAQ+FlY3qSkSYxtSTzPxXU8Bv0+GsGRI4dxXZvmdgukhbQknXabbrtNs9lEa0W1VoXdGZEdxyXw3Cy/hAxJ/XCYDRXX75EPClnAKVUU8znOnTlDq9Xij//pP+PRhx+hkM+TGk0URQhLEicJy8tXcLzsf3vr7feIkpRiuUGlWmF6ejqrAtreEAIhbCns7a1N2e31NpDeBSHEpNmS4VZ5Mjo4/i0uwk8D4J+2F+VOncxJwB+VLaO5KAIhQqWNStJECSFku7lDbj5Hc2ubq1eXCYKAfJDHdd3dtQMYXC+fsafKMulAYHazC33fzyaZUgopBd1uj0qlsRs8Mfi2RBmNa2c1iqCQ0mJvlgijDQa9q8W5UaAgBeQcm6FjIaXF3GyDQjFPOAxpbm2Spl2kk6XYKsCyHdrtFtdXVllcnMPzXfwgIAgC1tdW6XbaNHeatFot+r0+i0eOonVCHEaoo0dYmJ0jThOur1ynUCrj+wFh2CeKIvJeDs/ziFyPmcY0H124xLEjR3B3J6/NWQ4mX8BozZmPPuDD99/l2InjxHFMPAzRGqZm5mk0psnl8oTDIVJIEqOZnlmQh+Zmyxs7rSdjFf9MCC8au3eTIpnjQaAb/vBPw5PyqTD4mO8bJidS7QLZ2GRZhONjDt4cscoYV6vhk4V87uFqqVJScSyba6tsb2+ztb2FJSWWZZEqxXAYEoURnXaH1bU1pJVl1mXz5wi0VkRxSJymFIL8bm5IRiZJmrK4uEQxyCZ7tR07O3Eh6A8GNJs7aKMJ8t4N1hR72b1i1xNmzI22nOfh53L4vk8u7+E4DtKxCAcDtFIgsvzsJE0JhxGO61AolQmHIZZlkQ8KBEEBgySJY6IoJoyG+L5Pu9ViOBgSxTFzM9MkacIH773DxtoK/V6XXC6P7WQzVwhpg9YYnfCD732XpWPHOHLk6M2bIy3eefdd3vj5Kziuy+bWJi+9+DLLV65Tn55hdv4IpUoZS9oYrel02jfqX8Nez2rubDndfv+6tPzLfLLOJrfsj9Dgf20WvxsVPeNgH2V1uatQx8E/kt+gXZ32H7eF+mrR96tSSBsEcaoYDAbI/4+69/6RLMvu/D733mfDpTflq7qrunvaTU/3+BlyaZajBbUcCaTExQpYQP/OAhIg6D8QhF1KBBaiW3G4Sw45pmemva/uri6fVekjw8dz1+iH+yIrK7uqSUBdRfICgYh0kRHxzjvv3O/5fr9HSYSQFGXpL7VCIKSkMhprYTjoYbVmVkwI53DGvwxtvQmqDBRC+mw7GY8ZDEds7exgjJ88bK2jKj28F4Uhsi5FvIW3VxUZa9DGYJyr/86ysLjAiVOnQAm09tBis9kibTa9kMiCQIBztZLmDru7ezRbHZqNFtaYWmK2wur6SW8tN7/k6/AkIYhCxpMJe90uOFhYXCKbTun1e8wvLLGytEK70SIKFI1GgxdeeoVXXnyBP/uTPyXL88ODsLW1xd/817+it7dPb2+Xyx9+wtb2HmESe4hUqbqRBY1mQpKmWOspt3OLS2qukc4H0n3P2apz7Fgev0o/uHvtHl0380vP4MfU88cz+D/EGuKIgl4vWD36jUS5H3bi+HQjiVtRHAqHo9FokCR1h85ZKmMRUtBsNTHWkOUZzXZKq9EgjiKckH5rX1XkRY6Q0KoFyNZQR5v3/8vygmG/jxTQaraQQjAYj5lMp4RB4Keozd7aLNitL3tmAe8cqFpw4Zz3FjeVocgLBv0hZek3l0oFCCmIk4SVlVXW10+QJjFSCT8Jol5hGGCNpT3X9lOR8wznvBfh3NwcnVaTSpceGXn2edaXV5FC+KubECglieMYbSr+n//0xzzz4oucPX0G6xx/97d/w9XPPuXGtZt88vFnxGmTs08+QZqm5EXBE089T6s9Rxwplhbb9A56HPT8uM0ojBB6Gu5396NpUXwmVXyXB3c2j9bks6/hEdfhX3qAH0NP4PN19xc1eA5n62D1nDOj323Fwe8utlqnOvML6cLqmphfWkFIRT4dezI/decvUARRiMM7PGVFTqfVot1MMabyiAaCPJ9S1FCgZ/X5wDHWEihfIigJsRJMsoyqqghkwGDQp9KVx78RYL1gxrla1lnfwN8LKQijxG8IpUAFAWVRcntjg3F/iJIB06JEBSHf+MYrnLtwnqqqWFlZptFuo7X2J81sOUecJAjhGAwGKKm86t4YOu0Oy4tLTCZjTp4+w/rSCk74xOhRnHvl1PLKMlevXmF7c5uvf+vbSCnY2rjNa798ndE058zFpzj/5BMsLS+yML/obStUyPz8ose9rKHXH9LdPyAIJGEYU5U5/f0d9gejuzJIPwChuT+wjwuTZ4ftkW80H2WAH4cIj28gj6Imx6Y0uNTo8XcasfrhiZXVU6vrJ+O5xUXR7MwTBAFBpED60gTrs5SMImQUUeQZUknm2i1azZQiz7l79w5FVaHCgKqssHgvlDRNfJ1qjDedVyFpI/UvSvoR21WlmUwmZEXhB0eJ+jx17vBuFtlCiDp7O7STSKVwDs8nkRBFEdbWds2lb9gYU1FpTafdrqe5BTSaLf/cFsAenjgAo8nQ6y1xtQTNkqYt1lZXCeKQubl5SqMZTceMJxOmZY4QXuMJgiRtML8wx3/4P/5PTl04T1VM+ZM/+TNu3LrL0889z8kzp0mTBIREBZJ2u8Pu1h2GwwH725t8/N7bfPLhB2xu3cKYCoXjzp3b3L19y44K/YkI0neE72zOsvjxevxhkCHw5Qf440BRHlR3yWNfq3vfd8ra7GQg7e90Wu3V+eWlcH5pDQQYq8nzDKsrGu0WSZpiKk02HjMtcqw2REHkIblQkucZB70eo2mGEwELC4uoQGDLIy/nSBkw404LBIgAGSiscRRlbX9MULfY6yTkDqOwXj5jShUQBCFx6CFHZx0m10StGKUCkBLnoNVuksQeQ19cWkGpkMl0QqUrL46IFaYSWF35UgjnJ7ZZjdYehXHOMZ2OMViCMGE0nXgiWVUhpSQIAsbZFCcFjdB3O5997kXWTp7gf/n3/5611ZNcvXadi5cusrq6QhRGXt5W6znjKOTXfv27KBXwo7/8K27dvsXeftc5Y8Tmxk10UbC/u2eGedFDJndqcfPDIOIHxcTxePlS6/FHkcEf9OaOBPBDuSf12D+bCjv9YafV+Ob66vp8s9WSUtVz4YVCSOGJ/3VL3Trrzd+1AaMJo4CqyDnYP6A/HOKEpN2eZ36uw+rqMp1Wm7IoqbSh026ilMQaD/elaUqr2UIJWZOTvB2cdY5A1vxyd+/NUcOOhzJp5xBSIYQkkIIkSUnTBmEQIIVkOs3Z7+4zGU1pNRs0Gyll5Wmpy8vLyCAiSRKCwLvdgpeXycBfrbSumE5HVGVVK/m9pUQcJywurVDpCoSjKnNUEKBkgHWmFmZrwigkkJ5wlU/GvPfeB6goodKaC0+cZ3F5xW/SZ/t+4SHMhcUFvvrSC6yvrxNIRV4UHPT6QpcVo/Gw7E3yrZLgv6qw9WMhVMb92fthqvvjODmA++eRwQWifsmHh57P76ofzCW2uqNwL8612p1mq6l0VTGe7tFqzpE2G/7gixZ5McZpbxXhBAhhQVgmownjkZ8RL2pnqaWlRQIl6R90OXPmHKsrS2xubXuoa/YSnSdKhWEIVVlj3Hj4zwkq7ZASEL6mvrf8W3N1JvddS59Np3lGXhaEQYA2lrwsvE5UQVUWZFieePJJlk+ss7+3R7PdYXFpBanUvYJegESB8lbOWhuqqvSQY40gra+fwOKwZYEQoS/dEGirvdUFgkJX9PqGpflFAqkIQ293ce6JJ1hZXkYqRVVW/v1Ln0ibrQZJnDAaDul297l46SLLS8s0221x45NPENhqqrlboF4Lws5fIsMZjfYfmq0f9L1/Bhm83tPwxejJ7P6+ESTOFKeigH+1srS0HISRyIqCMs/J8im6LOtuocAZMRXmxQAAIABJREFUU2/gfK0LMB6NqPQ96K/TbpM0Uipd0N3bZ3trC+ssJ06eJMumqMBnM6011jrvGNtqkkQxxuh6sygRymc1JbgP0XL1JGSgvvd0gThOSZIGQZCg6rpaCkWV51S6opFGxElMmra4cOkplpYW2d/bQcqAZrvj/ctnH2Ft9eCwmEpz0N3DGK8t1drw1Rdf5OKlSwRxRBAoyrKozX5gxk10ztX1vsYYS1mUdPd3ePO11zhx5jxnzp0lm/rYFMpzb4SULC8us7qyzP7+Hlnm9zZra2ucOnWSJI6pqkouzM+pbrdHUVW3hYx2a06KOXb7+xCVw4/0n/Qms27Rz7I1PDhb3ytPxDGI0BFZmz0VKfnd+c78HFKIUnsOjwOKMiObjJmOx+TTDOu0p5jW9WmeFxTZFGd1rWx2DAcDegddsskYo0vyPGdldbW+xDiiKKEoKkrta1YpBWkjraE/P3lNKUlQb9Jmf4cTs1mWhwEFECUpzUabQAWHNyUVoVQYbcizMSoSzC0skCQtmo0WX3nhWaIw4Oq1qzQaDeI4BuGbUtaYep69oygyet0dsum03jgKXv7qV5mf6xAoiYpCtNaUdSK4lyMdFkFRlMzNLzDJRkwnYzauX0MmLf7gD/8Nc/MdGo0mk/GU4XBAI01pNBoIJDeu3/C8Hl1RVRWLi4s8+8LzWKPF9atX48HBQWda5EsO+b6QwQivy3zQRvOL+CnAP/1N5qztCg/fYMIss7v7qbMOq7DmtBQqNM4evjjr3OFTG+ewpsAZR6kFzjiCIKDf3edgb8d37qwjTWKGg0HdUNFESYMoSclGfS5/8D5J2uDs+TOkaYNKa7QxaK3p9XukSYNWs0HlKoJQ1XbLxp8AKkLryoeMu0dwEs7Xy856hiOBqFGWuhGkKyqdkU0nlOOKXneAFIJTp9Zptds0Wi0Egs07dzC6YmFx0ZcaQvgIsZpedw+rLcNRn6oqKacheZmBs4RCIhG02m2cNRRlAcYdPocz3rrO28Bp8iyjmcTcvbvBwuICzeaLVFXF+++8zV/8xZ9z49o1VlfWSNMUay1VUVJVM58ZzcmTJ7n0zDNc/PQq167ebHVS/eTBZPqyUsksQh+KlHCvFHlkDZ7ZehyKnuPd0gd1NuubC3HmVKhUYq0X12Idzh7icfUmSCGUI1ASISVlkTOZjFAqIGnW3iNSEdetZVuVXqoGCBHS7XZBHXDixCpOQBhENBKHto6y1Ny5u8HJEydIohRnfW1e6XoqnrU4LFp7Ux8hBbIObikD8kqT9XuEKsDh6rLAYKoKP7PJ87S10WAhz3OMNoRhyOLCPFk2IZuMsFVF0miSNFoEQYA1jlanTbMRgbLMd+awTnP5o4+4ees6589f4typMyQqQHTm6Q96vlyp6QPUOtGyqnyqEIKN7X2GRcXVK594kYeUlGXJ5tY2o9EEnGOus0CapkgkvW7/sCTTumJxcZmvff2bDEcjXn31l/Pd8d55nBWetgB8PoAfxCK8j1H4gL/5/7W+1BLlC/SXx8uTByMpVrewxe800/RsnKaRkJ62OivTZl7ZgnsbQmst+XSC1po4bRIkMVIFhElKGMco5WvTMAy94kYqorTh28/Csbi06lv2QlAZDdaRZzmT6RSpQAmFCny30VpT3xyl1ofCBBWGqCDCIQiTBBBUVUVeFX6jmWWUVeW7l9bj2sZYKm1IkpRzF87R63ZRyhPBtKmwRmOqkrIo8UxFh0STNlLa7TbD/gFf/9Z3WV5fBwSXP/qAMEpYml9AKoVQAdpob0bKzKW2otXqMBkP6e932draZjyZkiaCbDqk0oZf/fI1fvaLXxJHEY1Gg7TRQNRjynGWIit8ORcoiiInihLCOHG3btzUd7f3P5Fh8zWEqBAY7pUqR5s9D1P5AP/0S5Sj64tKlAfipA6bqEC2pCT0jQ6f8XyX0Pt2N5ptLxOrSrSuyMYT8skEGShUEnuMWfgDK5wlkAIbhHh/VUmUpLQWFlFKcbB9m35vSNSIKarKT3YIDEJLJuMJQggCFRJGEVEU1rCk9pckV6KdPbRrDsK4PhECwiggChNSvH1cnk8ZjYeUVuOsBymSJMZaP1qwf9Bna+MOWT6px4P7oLTWUozH9Ic9zp8/R5gmgMUYw8LSMq1mg5XVEwxbLZK0wfvvv0273WZtZZUkiqiiGFMZnDVYbe991A5vIBTHHBwM2N7eoSxLut0x73/wIUVRMsmnRJE3CK3KijiKwCqcs/S7A4y2BEFAEsfsbm27SZaPEWLfgfUQ6gNLFHvs+D/y9Shr8KNLHHkgjkDJ99+s7sRhMC+El5j7jV79tM4hnEUKv+GbFBlZlpFPxxjnCMMUjxgInDbYqiAMQ18qKOXhwMgjCbrUJJ0mUsX0Bz1OtU5DJOq2ux+BYo0hzzPGkzFJnKCUQAUhGIF2vn2P1lTWYLIc56DRaPvEJb2a5vASJsCWuXd2FT644jjk6Wee4umnn+HWzWvkWe5PaCE8Iax+/wIo8xJrNGGaUpUFw8GIWzdvMD8/z+ryKu1WG2sd55+4xLvvvcN3vv0dOq0OMoioqj5aa6RQCBngnGE8GlGUBa1mC4C7d7a5fXOTO9u7dHsHvj8gFP3+gCRpHOL/TjisM1gtGPWH3mmr3WJrc9MeDIZTZHBTCPEwNc/RTP0wZc+XXpM/8hr8eFHlPBQxm6Q2+5W6b2LbjbQROxDWgbDeNNLVpA/rHNl0gsBRFiVllmG0IYh99sRRnwT4aQQCHJ5dKBC4+mfTcZ9sMmQ6mRDHEUWxRBDFgEBYgQtDoigmm4wZDQY0Gi3iJEZYe9homnUJrfYjwSdZhjWOtNkiimJwvv6eTAZMxyNK7f1NpBIEQUSj2SZtpqSpoOp67gzWkcp0VpB5yZNShEiG/SFKeQ770sI808kiW5ub/PjHf813v/drLM7NA4JPP/iATy5/wtNfeZ68yAhkxGgyxAnL/PwiSZxgcQilmJ9rIZzmo48/ZWF+kbm5OdZWVjHW+4sPBmPKskA4R1lWhFHkxRzCJ4q5zhJxknDj9u1ikmXbUkXX+LxlxIPa80fvH+l6FAF+XwZ3ny9LZm9tlu0Pf+6cbaRpqsqiEM46rHS+G14jj1LIuk1tqIoMXeSHBu/WOpwpMGWFEI7WwiLT0QAQRHGMc5Ysz9BV6acPVyVSSIbDEXu7O3TmF0jTJs4JlAh8HSsF48mIxmjkO5wqqGVpEq0NQagIAVv5rDzJMvKqIk0TkjitO6ES7fyJJgV05hbpLK/QSBLm2wnYjNOri9ze2iXLTP35zLB1gcNSVpqsrDi4eo0zZ84QRxEvvvQyaydOsrO9zdvvvMXLL3+TOIpYXT/B22++ztbdOzTbLVZWVhGBIq5RpNF4RJw0kKEfYpUVBctLy7zy8issLnpDU2sdeS3efuqZZ7lzZ4PbN2/SabeIooQ4jnDO0G43+eCjy2Zj825vNC1+KsL5fR5MsprdHgoPHomRLzXwH0WAP6hM+XyQP4CLLrBpHEdBVRSHOPRs117neLRx6KqiqE17cGCqEqcrAKzWqDCk3Vmk0WxRTqeUuiLLMj+XUlc455ETpEe1B4OBV+oE/jKuVOiJUnjV/mQ6Ji8Lv+EiIElaTKdjwN3jZU+nlEWBLjVFWSDl0A+ZBYzzjaeFuQXWT50nSRMC6XAzGNAZxsMxWe5fXxxHICQKAVJycHBAUeQkiWTr7l2Wl5ZZP3WS5dVV5heX2dne5Mat60RhyKlzZxDSkU0m3Lz2Gc1mg7Uzp+nMLTCdTrhy9VMW5pdxxrCzs4uUIc8+/RSLC4uHkj8nYX5xie//5g9YXvHt+z/+v/4jn378sVtaXBIOSzuJuXnrBq+9+eZ0tzv4FJX+QghZ8sVyNfjiAP7nV6LU6zgUdPx74DN4EqhAWqzwMHld+9XoicVhK02V574tPXsGrRFRRBInCAFFmbO7fZvO3BJRs4XJJrgsI222iBstRO0OhYQoCCmyCVXp2/PG1vXqjJMhJFmW4UQNCEmBDELS5hzWFAQqwhqNSwW6utcwMsa7RfnngWajxfLJMyRpE6Ekxhnubu1iqinOWs8RN5Z+f0BQS938p+TYuLsFzvDcV55kamB9bZ1nLj6FjCJPqV1b41evfsLzL3yNMydPsr62zkF3n6KqcDisceztbLO/t8tH773P2fPn0aXm/cufolRA2mzTnptHCOlN+/s9nnzqGc498QRBGBJHiu9893u8+dobBMrP69navMvlTz4tb23tblZW/rUKk1n2/qKZPV8Y5I/C+OeRlyhH1gNhoWO/EAaBUk5bcBasxM0q0nqQkskydOXVKEoJlAqJkoQ0TYlrmZauNFkx5aC7UxOSAtLWHGEUo1R94aivDFVVkBcZ2lQUee6hv4bwmdX4TW1ZFvT7A5ppi0bS8P9bCqwNsM56eFH6WfHVsI+12o9GcXgyWL0niOOGDzhrcaZi0Osz2t3GCphmGZV1TCYlpZ5xYbyMbjyekiYhw/GYcuqHUUVBiBKCUVFy9coVPrtylW9+87sUZUFRFIxHQxYW57h1+zqvv/EaOzu7tJot0laDjdu3ufzRp1y5fpN2q4kKApZWl1k/cZqyrLh18wZrJ0/RaqaUlR+4FUQB5588Jz7+6GNnrRN7+/vFfn+wOy3NT2TYefdIi/5hncvj5cnDNqBf6vqycfDZw+MIycOcrI6qepStps+tLs2/PBqOkjBOalbbrB4FU5RURQY4AqVIGy3m5hdotjskaZM4TQjDiDiKSdIGzWbLY+WmIo4SOnPzvuliTL35FOiyAGO9NjIvUHFMXuZM80nNWPRvoCwq8jwnigKSRouyKNjb3cTVlxFj/AygJGkQhCGlLnxbX4BA0my2aHbmkFLV5ZchCATLS0scHBxQld5gCAt5WVIZj7cjBGEQYK3lmWeewxrNaDRgv39AWWmu3rjGZx9/zGQ0IokTurs77O5s0+8dIKViZ2uH9997n9Fo4k03W03efe8yP331DRzeOHRvb5fe3h5zcx0ufuU5zl64wJkTaxT5hNdf+xVb25uMx0OiMOD69RtiOBzp3mjc7Y6mfyeC9p9JFQ2ACo97z24PYxI+qBYH/hn4ovw9k4yPN32OS9aU05PnVpcXvzYZjZMgihHyng2aqSqqfOLFCTiSOGVuYZGk2SCMIsLAq3msrS0c8N3FIIqIkxQHpFEECKZZfg/GqeFHr5wf+KaNFFR5Wf+O3+g5YyiLnKLMabU79Hp7bG7epci802wURVRVxcLiKq12x1tBGOPn4zjozC/QanZAgpKSOA55/tlnef7F55iOJ9zZ2PBNJemvHmEUEyhFEke+Td8f8MQTT/DNb34bZ0re/+BD9rsHtNtzTMZ+E5xNJty9s8lkPCGOEs4+cYGTp05TlAW727uMhxPefOtDbmzskNVjWyyO6WQK1k9/+O63v8Ha4hxFnvOjH/01Gxu3CAPPUGy22ty6cR2louL6xsZdQ/JHMki3uBfcs/u/j4fCkfvZ+tKJVvBoa/CHXXYeVML43xWiLLLSinqjGkZhjVsbdJ55K2EhvKhhrk0YJ6RJgzBUGO3V6bbmfwC1vQMUxmJsxWQ6pNlZIK0SrLMI4XBW4aQiCALSZovxsM/CwvJh504bT1zSriKwFfv7BVVVMp1OmYzHFM0Gc505Wq2O7xJORqyvn+Lpp57jxo1PGU8nKKlIUq/YkXiSVhxGnDi1zny7xYWLF3n77bfQNSI0nk6J4pi5dhshBN2DA0bjMRsbt/mXv/1bhKGl2fFG+s76CWytRoN+b8DNm7dYXFqkNd+h0WzQbrd56atf5Y1fvsFHn90kKxwqDGnNL+J0hdU52lSIIGA8GvLHf/QfSNtNknSerMxpNFo+FTiQShDFkbt563JZVua6CKJd7gX0g2RqxzngR0uSx8JH+bIDXNz36H619HGo6Oj3aqKJ2u6N+mMpRUcqqZIkQWuDrl1ZnXOHdgpREJFEIZcuXmB1dYHRcMTdzV12uz2ctSRJwoUnz4MQ9Lpd9vb22dvdJW21ieLIbyqdQ4ahHyZlLYYAYzRVOSWKGhSVH/ctped7a+PAGHa3/WxMhCUo7jm1OmuZDHvsCsev//pvMz/X5KPLHzCaZMRxQlkVWFMSIZmUOVQapGRufp5mq0WuHXOdeXrDEd3uHroskIGiNxhgjaHfH7Bx5zatRszps2e4cP48O3u73Lpxnc/uXGV//4DdvT36wwHPvvAVkjgmz3J+/Lc/472Pb2BEQtyQh5/liVMnePqpS+ztbLGzeQdtNHc27tBZbLO8Hnl1UiQpsoyqLGk0G25hYcnt7u2X2ojbQRTMBlEZfAfTuHtfHw9s4HPxcC9SHtF6dJ1Md9/3jr+BB2KjUiW3R5PprUYQzBfTSVuqwE8rM5WvZQXEUUScxgRBwKlT61x88gxpI2Z5aR4VSPqDEXleMr/QZmVlkSLLKSYxSZzy0tde5gc/+G3eff9DfvrTX3hoUEpMFGGtJUwVgXL0u7s0Wh1kECJrKFG4GlWx1DW8QzpBVWr6/R5aa7r7+wxHQxYXFjh98jSVKegddBmMJpx7oqLRbHLryhWSIGF9/SRF7l1p250OSytr/PxXb/Bb//JZb2e8cYOD3gHD0YQsy0FAnk359OPLOFPy9Fee5sXnn8WxxNbODm++8RauJosNRyOufnwFXRT89Oe/5G//7jVcEBOFIUXppzivr63wve99h3/9e/+aqsx56623eP0Xv2Rnbx+3ucnKdp/5pSUaaXrY1Gq122I8GlhrjXUEQ7x98tGS5Lgnyhd5ozyWhs+jqsGP3x91OnoY+UoKoayucmNM+XQoZAsppHXel8RZi7DeLqLRbtNqtXnllReZ6zTRNelpOs3Y3txBSsGFs2fQxrG9uUW/P+LEyZP84b/9H3ju2Us888wl5ufm6HZ7TKe5b6pLiXBgnaTf7zLo7iKcIVDqEI8XM8N44aE3AOMM1mi63S67+3vkZcZoPCSfTLizcYvbG7fpD/qU+ZSVlWWiMKCReD3paDLkqy+9QFlVZNOM115/jc2N21y6dInvfvc7nDt7luFgwO5BF2MNi4sLPPHEBd555x2uXb/BmbOnmUwm/OqXv+L27buUuSdCjccTPr1yjbffeY/3PrqClZ4wZnQJwrG8tMAf/P5/z7/7d/+W0+srLC4vcv7SU8Rpm7ffeJ3xOGM46NPvHXDj6lWuXLnC1U+v8PHHl90777ybjbJiSwSN/yxVssPna+/jAf+5zqZ4QFfzn/uMngeduZ//vpCVDFrvVmXvnbwsm6ool6JUSakkSgaISNBsdwjC6HAiAnCPuwEYUxKqiPFgRK4PKIqKi088yW/81q9z4dwp4jhmaX6B//l/+h+5u7XLzs4OFusZikFAWeSEUQNTlIyHI6w2KKUIooRGq411IIUiCkUteYPxeHKoCHLOUuYV165fI4xCzyKsKj795CMCCRfOPwkxLKycIcsmbG/dYWX1JJ1Oh1A4bt24ypNPnOMH/+p3uPjU04wmUz67do3eZMRwOEAJP9/+4KDP//a//u9EccTG7Q2K3LumVdoymU4piz5xo4kIAkIp6waXJUlinnrqEkmS8Mnlj+kNBhijCaQkwnLm9GkuX75MrzehKEq0Ll1V6Wo8GheVNZV2YtPK+E9V0LiFcwYhjgbz8Tr8QZ1L90hT9rH1pWbwcnD3iwa+PghF+Tx8KJV1zo6NKZ4KpWoHQRgJKcE5kiii0WrXXh2S9bU10kaMw2dXXTn2dw/Y3d2ptZARi4srPPHkkwTKEoURp9fWyCZT/tOf/7/86Ed/zXTq7ZCF9I2lKptgtSYIAoQKyTLfoQyjmChtgBOH/y9QnuMiBKi6hT+zjjDGUOnKiwyEIMunhPUsoStXPmYyGeKwvP3Wm2xsbPD+++/x0YcfkuVTVpdXWF1bw2jNxu3bfHz5I8ZDL3Lo7myzvbuLrjQHB3329rtkWYEjYFJq8tKgwoSk2UKFkceAnOf0hEHAk0+c4+TJdaQzHh48OGDQ7zMc9EmiiLsbd7h18yY7e/uurIyO4nTcH432p5W5akTwK4Lmn6u485aQ4cSXKE4j0HW58rBS5aHQ4NHYeRTrUbXq4X605MGbys9/AFaAlWHzjsnzD4qqWAurOAmVUkJKsmJKMA5Imx0Abm9scHdzE6Ugn+ZIKdnv7oIQlJWfYbO1fZfdvR2ef/5pptMxf/Fn/5mirNjZ3SONPbRXlGVtc+J8prM+wJ0ApWNKbZnmBXGeEccNitxPIJOSWjoWHcJ70snDQVMC6o2xJA4D3yXc32MyHHHtsytsb95hb2eHstJMphPK0vNj7ty5w//9R/+R9RMniOKYsihwDrJpxpVrN2pagfdCLytNEMYEApxQJI0maaOBrgrKIvPi69rZ6tSpdU6cOEG72fb8d+11p2macu78Wab5lKvXrrK9u6cnWT4UQdTrZ8WGceo9GXc+IAj3BHIKInd+NqMRThhwBq+K+yIV/ez4C+7feD6SDuZsPeoS5XhAP2yTcV/QCyFzocJPS119W1flQhCGygsOHP2DXRyQRBGbdzYPoTWAIs8YHHQ5eeoMzUaTg4MD4jAGKfjk8scMDnr0e10WFhZ44flnCZRgr9vj+o3bbG7tkBclIAjjlEAFiKr03HNKShcyGI6Jg4ysyDHGc1/iRkKr0SEMEhACZw3ghcrO2NpeTWONZnc05M6dWzjjvCuVs95eLfAeLFIEGFNx5coVrIA4TkmTBpNphooaCCGwQmEsZLn2oum0hQoUWI+vJ0mMMSV5VuPwUhAoxfLyMmdPnWJ1ZRWlArR2SCWpypxWM6Uz32Zwd4R2zpXWDUsrrjkX/RcRJjelCMYIkYEowdUB7QPbCWGEwyvAEUex7wchZkfvecjXX+p6nEOoHhbkD6rZrBDhrjHF2DprnbUOpYQMY6xwFEXBcNwjbba9D0mtaA/CkDCOubNxi2arw3Q8otlsEyjFaNj1LfMwpNKGaTZGSkmaxJw6sUqgoNftM9jbJYwihFQEKiSOE4zWVASUDoq8wpQaXRUEYURsHE5XVNhaNeP1ndZatK4wdbljtCErCqz1xCspA1ASbTTGSISV3oNIBAjh0RtDyKS0yKiBUrV7gBB+BLjXhAB+eoRzgiAK0UaTTSZUVYWSkmYj5uKTF1hbW2d1edW3+aPQW0dbTZ5N6R50yfOME6dOkzZbJkrTzFXq54StayAqJ7DCE4OsAyOoA9oJi3DWCemEs16wKeSDEJTjyexwPcrsDY++0XMU43xQxn5QC9dnAiELrDPOWudE7a7nQMgYYx39bo/peMr84hJCBah6zHU+nTIcDMgmU8CRTTMcjjRN6HTmWVleZDQZk93MUdKbaOZFxuLcAjubO96SQXh6LUISqNDzW0qLts6jLXGTIIjBWqaVIq8yZF3eGK3RuqhZghAoRRx7pY+KvDOtFBKE9Hyv0OtKgzDy/oo1V8a5WuQsaqG19fwco82hXZzfNxivVIpjJI788P1GxHHEyRMneP6551FBSBgoFhYWePa5ZwmigPfffYfRqEee52ze3gQlCKPAVZXNnIz2xWwP5bysGg7tGOsk5AwIi7DW+alcVgjn7mla7j/mR4Lhse0zH7VkbbYeFOwPczryR9JZiRCBc055mZWoW/DeM7DMx0ynQ/I8oz2/RCADqjInm06RwhtfRnEEOKpSUxYVdzZu0+vtk6YpSZLSabcIwojxeEw2KbizsXFo0XBoCSQ8D10qf9icdT5Ag8g3ilTgg1IIYmaT1+ordC30VTKodbiznMvhzyyeourtKUKsAzD+uXEY50szXWk/MygIkLUfuhCCUAW0O22v47QWSULaSGmmKXEUM7ewQBD6ESzrJ9f4xje+SWdhnl/+/O+4evVTxpMR8/OLCCEYjceMR1NdaT1xMq0ABU5DTab0jslO1MfLgQ9qsEgsRjrnjBNCPZBF6B5zeQKPIMBHt16fWSgfhwNn9xaPmjwoix/enNVzSoqmr0FmT+C509YYrC5AeFhO1YNWdVX6DVgSECURgfTKdhFLTBjUlmMHNRckZn5unrUT6ywsLHL3zl2y6YQoTpkxGKmPphMCKdw9izbh1UGiJvUK6RmLKlAI4adJ6Kq6R7l199kFYd0M2nSH/8PW7EEh3L3ToM55utKEgaLZatLpzNGuVUONNOY73/8eVVXxi5//lLIsaLc6zC8s0mw0iBNvuh9HEafOnOYb3/oWSsGP//pHvP3G61hn+eorL/Picy9hjeVXr/0Ka52prOsipQFk/brFzLpLHMJ8/nQXQvigd845IZ10wjqcE+KBWfy+uHjU5Qk8ugw+y9gcuf+iEuX+AHc4Z/WCkjIVUoqjrEJrDFWRexmb0SglqcricPxfHCeHJ4OpDe69eDhAxZKyKClKjy5Y4+fWCwe729sY49X1Pt24WQ5HCkEQCCptaxdagcQb+TgcVVGhAu/PEscJMghxRqN15dVDusIY43ko1KFx5Pp2NBSEdLXq3iAwOKDVbLC0tMjCwiJJHJPEDZpzLf67H/4eF5++yE9//Hc8/cxztdhDEShFUZRY5wjjiDPnzvDy17/B3v4Or/3i5+Rlzm/+Nz/gpedeYGl+nl+8/Sbvv/0hb73xlhtn06wwbBCIex/AoTr03jGrx+D6YPanq0M657REOA0qgAfX4Udj5JGvx7HJPFqePBQ54d7u2+/EnW1KqYLZxqq+GlKVBUXuR3zMpjXkkzHTaUaapKio5mEbT6YSs3q3HoOdJIlHHepXZY1m485tJtm09hwUh4Y+Mwc1L4AAKWsf8SBieWWNQa+HkBDUHtnWasoSQue8FXLglUHkeH8WB1LMhNR+zc5dV38svoL1vxsGAXNzc6yvrtFut6G2Sn7m+ef57R/8Jutry7z2+hvc3rjtIUulsNYynGYAnD59ks78HPPLC1y7/hlVmfF7P/w9TqysIKXg2sZN/uIv/4wDpIY7AAAc80lEQVT33r7MztY22lHe3d7bdyq5K9zh4AVfUd0Xj2JWqsxeugVhBdYipXP2sIx5UCwcPgmPIcgfZyfTv6Hal50HM83qx84CoVKBtMYIV3M/rNbYMkcKOH3mPJN8QplX5HlJZUFnU4JS1ti0RyKCIESFDl366WYqDInCGK1LnNMcdLuMRj2USrxQ2Q/lQbjZmJJ65o5wKAm6bjSrMCBpxFRFRafTRsoO+/t75NMpJqqI4uSw2xrFCUqFlGWGLvW9QytcrbsEZS22dnaIlCRNUprNJufOnSUJY7SuaLXn+d0f/h7f+NZLOBxvvP4mH7/3AWVR+s8GP6i2kTa48MSTdOY7HBwckOcli8tLBEGH4XTCJ69+yiSbcvmDj9i4dpOt7V32u13TG096e/3Je0StzIn6hQlmJ7zzAHb9g2ODR0Q90QWJE1b4zCPU7NjPfvNBoMMjXY87g1MXuLMa/GhgG3w304AwQsqtqqr6OBvnU5pSKWmLCVWRocKYheU1Lp48y8HOFr1el4P9fbK8pn5iqfQUAYQiQIZBfZEVBMrL0pSAPC/p97s4LM1WdChGwDrixHO8p9Mpph5xqqT08C/CdzulZFzUXtxKolRAFHkX2jLP/HgS5edninrjK6RGl6VXKDl/8Z8Jq61zhErS6nQwxqCiAOs0iIjVldP8/h/+Pi++9BW0rfj5T17l/XffZTIaoLU9hCNbc21e+vrLnDh1ksFwQOkKzpw7zWQ65m/+y98w6A8pspy00WA8HDMcjrhz967d3O0ejCv7vovaNwV40r30u2Yf3GK2Y8AhnN9DyCNpAIQTDukcTuJshVCfa5Q/1vobHtGUtSMte7gfTXmYEOL+dr53oJ9qnUlt9Io1JrJVFRTTkSjLQjRa8xRVxaWvvMRTX/ka66fOIYSjyD3rTqoIIbx5vcbDdWWl/aXjsPFS0e/tYXEEQUgQeOuJtNHglW98m29///sYo+n3elRV5V+a85ZtQkkC5Zs62TRDBSFRHKOkJAoVUvkuqDMGa7x5kWdD+mkUNSDBbL4Ptp57GShOnz3L1175PqXO2dneJJtOOXnqLH/4b/6Qf/HtF0hCwcEo52c/+Qnd3T2SpEGj2WTt1Cle/PorPP/K12h2GoyHfQSW5fkF1pdX+Nsf/4RPPviIbDhBV4bJeMKg12N7e9fdvrs9HBT6I5LOO0iV49BC3CdiqAAtfDu+AirhxKFyR4ARM186gcNJi60QKvh8lhb3YuRxrMfZ6IH7a+5Zy/YBpYowUiVdIvGXthoPCl3+oHLupDB2SQoZNZodkiTms8uvo9w3WD91lq++8j3W18/S7e4yGg6YTEZMxkOmRYms29pO5+giQxdjiunIHw+hfH1uPG+k05nnyeeepZWmhFHizfbBZ2EkfparYTwckEQhSaAwZYGUbdJGg6LIMWVFGIQYIQ/n/xhj753p0s+2MUZTGQ8Jzi3M8+KLX+f5r30dqRSXL79JpTWD4ZBeb58XnjmLlDCtDOPpmBeef5ZXXnyOS09fYmV1mUhKCgv7WcnNa1d498132N3ZQUhJkjQYDIZIGVBWJVgv2tjZ2WG32y1GebFJ1PkQZFmjJdY5YaldIcGbrzucQ2AFwnmwRFoxgws9e9xvPn3Sf/Dm8rEUJvfWP0Yn8+jjo+WJrB9rQCJkJVTcV0K9avV0x1aTPwiCKI6UXAjjUCgp2d68Q5EVGPsdTpw6x9r6aeK045EM6ZiMB9zeuM7m1l2qUmNcTNJsU2U+eG2ZexWQ1lhj6LSaTLMp2xt3eOLSU1jnDudrIkAFkrDyFFlnlEdGpDjUearAjy4RwptYKiFRymJz798ihbdls876y5VUhFGMcI4zZ87yzItfI00bXL9xhYNelxqm4PbGbd755Aon1laZVDmnVlf5wW98j9wYxlnJ3a09snzKMMvY74+4cvkDbmxskg8HCKmwZs9fSZzvthZ5zt7uHllZ6N54fFCp9H2h1LQuH+uNfh3oAuMbOMx89JwTnjMEs6bOrIy51xL6eyiDjy3MH1mAj2697o74hcO9OtziS6PjmPisBvcfsnNGIConw7GMWp8ZU71qTH42bbbm0zQWng8i2N3d47NP3kOgWDlxmsH+Fnk24unnXmb+9HkW5peJ4w/Z3d8izws/ui+IkEJh5IjQGIqyxFpNnCQsra5zsN/l9PmS9twcURRT5Dkzp2cVBlCVPvMLX5k6XVIVXu3uxRAgpMThCFWMFII8z2t/RYGykjAKWV1dYW5ugcl4RJzEXPn4XaIoZTLaY2VpmbWVJeYX5zh1+iRXb99mmOf82tdfQgA/eeNtrt+6we5Ol4PuAWVZkOcFVZZRZBNE3SNwpqjZhJ7VWFUV29tbTLK8yo3r9TP7noga29TV3CyD1xilxnlUy7lZUNdt+9m8LazHnZyzs83nbLN1bD3m3O3X4y5R4P4S5WhpMhvx7Gm0QhgcWuA0QhYiSK46k0+UCmxVlnI6mSCFFyOUec72nWtMsxFFPmXjxjVGgwG/9ju/y9PPXuCpr1xgPB7RHw7p9wfcuHqd2zc+pW805AVBIDBGUVaG+fklVKgoi5LV9RMsrawyGY99qxzhN6Iy8KQqq0B6umyZT5BSUhnjrdvqjqjGEsUxaaPJdDLyc3saDU6fO8/S8goIRZomNFoxUlgarRYnznyfuU6LUXebnb0uxlgWFha4cPEpPrxxi9d+9jOGwxFbG5tUxbTGNwTOGW/cWVcIpt4wC1zNdS/YuHWLje2dfJAVeyZI3idKr4HUPmO7uu52ut5NH7m5mu8tjMNZMau38Vm9HojlSxpvjzU71v+o63HDhBy5/3yD5yge7hlqM56xRAYDoMjzqdUHmrKqiKKUQAbs7WzRbLbY/+R99nd3sdZy0Ovyre9/i69/7dcJQulVOdaSF4ZPP7vDj3/8c1796V9xMByjhMA5STbJEEKwuHYCISFNUp586mn2dreZjL1ftsfDpfdDqUqCMAAck8GAqtKoMK5b8/XoEAEy8MKH1ZU1Llx8ihdf+RpZkXP+9CmE9KMB40bC4uISi6uLNNspH73/Dju7u+TDjCcvPsX62kmuffQxv3rtZ+xt73hfxkrPOv612MIdijBE7eXo8CMRs8mE69c+c5u73Xyi7bYJG28SpFtixumGyvmr5mzzeNwGQjtEncWFcZ4ia2R9DJ0Tvp2P8JvmfwLBDY+HLiuOPT5eh88eH232yJpEL/FZQwlEZnH9PC91IkUkhaLMc0w9JmTzzgZJmiCCgCLLwGhee/VVnPNWxVESsb6+BkqytdXDCo9lB0GItRoVBFRVxbDX5dSFC4QqpMgLllZWWVpcosimFIXGOVMTsbw5pqlKrDWYqmA6rIibHY97y+CQD14U3qIhSyK+8Z1v8b3vfJPdgy4n11boDvtU4hSra+uoIMBVJftbm7SSBpeevsT7r7/L3c1Nbty8w43PrtHv7WLKqgahBa5uHAnhR4Uzgx/xn7YSgrLUXP3sE3dne29cOrVlotabBMmeJ0uh3WHmFpXDVTVaUgLVkSTjr6YIXWfzmfuB72xaLMo5ZyUC40SYHI+Df5T1uEuUWSlytLM5K1dmm8yjm06NcwohKmQwgeCKxj6rtUmTKBa1fQ8Ao2GfqmywsLZG20J3Z5uNjdsc/EWvHjOoSdIGFy5eQgjJ1tYtJqMeSTOl391FOhCkaGPo94dY55l5g8EBk8nYeyHOAPFZn925+spukNKhTYXEHM4MQvhJCNZ63vdwOOLyBx/y9Vde4uKF88gkIl1aoJOEWAtbe3163S47m7vMt0IOhnvcvHmdcW9CUVb1MADv2egn/TmccdSkmFq0weFmUklJXhbcuHbVbu4fDHLCaySt91HhSHAkuB0VQpQCVzoowZUcZnFRP3YVCH0oU3MeGvTzN2rCssSJSjioELLxoE7mY1+PBAefrQfg4Q97fPReHvu5dAjpB5qZzOnyaQkLQsowCKJ7LWTnx3NoY2rqakm7M0/aSD3OHUZIAXNzS4Rpg8mwz2AwoMozrNZIKVhdW2PtxGmqMmPYH9Dd26J3sE9ZFr4rqsKa6lq/YOWZhkL5uZbGeHu5OE5wQqCNReeZH4pVNz2UUBTaoIOA1fV1bKn55LMb/PL1N/nJ3/wVH334Dt29u7z7xhu88epbjPpjysILJqx1hxMbENKXIDV70Vlz2CAWdc4YD4fcuHHd3N3tDioRfeKSzrtCBeN6s1g5n6ELEJUQlEAhoMBn77y+lT7IRSGgQlD5Damoy0hhhfAbUyGkExUOoZ1U4UPj4nE1eeDxdjKPPj5anhzFxAU+e99rBgmhhXOeVRK1r1lT/mle5W1n7VkTVolESBUETslQKKkoJhOK6Zg4SWk0Upqtpo8HpYjiBp3FVVSc0GgcEKi7WJnTnpv3g2RVyGQ8wtjSX0KkopG2mJtboswnFEVBr9dnMp1gjEZJDxkYrbFSElnLdDKlv7dDe2mFJG1QWUueZwijEURs3b3Fr35WcfXmTV7/2c+xtmJ/d5vB/j5FzYeRAsqiQIqwbgaZQ9jNsxMF0nlGg6WmZOOQsgbqhKg1mwd2p9fvVyr+yCXtDxGqqFERDfigdpT4+1lgF/duwmdz4Urhg1rXTSCDwwqEFQKDlVYEzmKlgwqp4kcfVf/A9bhx8OM1+NHAn13SjgW50zO+j5AKmSz+zOQHujDFf6ur8qx0oi110QhkFMZJIoUIBM6TmrLpmFazSdpoM7d6mqWVE0RhxMH+LuPhAcJqFheX0ECvd8BwPCRUikarSdpIiOMYYy2j4YDxZERV+TF6M37KrGTAuXrisrdey0Y94iRhcWGRiTFkucWUmrwa04yWUEHMcHebvZufHp7Jh/CidWhrwXlq8OzjOayrqYlPCk/PNTX3XHrURiDIJjm9g77Z6fX7pQg/IG5/IIQqPAyIBkoEFdaXJtQBLaBwPmvXwe5KASVO+Hrc1RtOn7k9Kc7OXpAUQjvr0E7I6Phx/6KvH+l6pCUKfK5MgfvLj+PrAWXLjFxac6ulNDJIN5Hhe9a628aakXHWGKMpq9wZU0pntTTWiLKYEscJF7/yMksrqwQqoNfr8um7v+TunRvVeNwvJtOJqKpKOOuEs5okiVhcXKKsvKPsQbfHcNgnzzPK3M8FmjXprPXzcmZqGyE8YFwWU4qyIE5TKqsxlcYZjVSSVqdNFEiqfIzR2iuAKu3pu1Yf1tDGaF961HI8UWPuQtj/r71r7ZEjyarnRGR2VXW3214PzOBdYJdBowUhBIgVX/jpaCW+ISHxGphlAe1qF7zLePxqt/tRlZkRhw83IjMqO6vchqHdtvNIrcpHZGV294mbJ27cewP0KSoR5jFBP9UCnL++wJOvn8Zfff3Nq1eb8M9YnHwJ5zcwo9EMP9qA3IDYAFiDSZIwE5wbAuukwdMgEy2Tq5BgkiWM8BKbKkJr0XnRTUzRJ9ymPAFugeDAqCAQMSb71Da2jjOHtqVWZKQ/uOLB4WNXrf6Vvv4qAo9jiKENnevaBs1m7brNlT97dQrEji4G/PzfvsS/f/V3+OUvfnb14uzl06umedK2bbtpNlFdB4TWkY6HqxWvrtY4P79MsdxdCo4alFWIEbFr04rLtipC13Vou4AoKnQtLs7P2TQbxHaDw+MjfProu0AMOD99ibxKc0QaMCqi60JaeCvfJa0q5wB6gT6aX4k25WiDTaZc0IjXZ6/x7OmL8OT5y9OLwH/B4t4/ge4KYEhEbkEl68wNiDWkDcA1qDVII7uR29qDDYGWZGMeFJdyMhkoRlYxMtRCbEUC7g3ek9uKQcnYRapvHWlWs7znVNBVrpEyrpdSAaogVAIrUMPy30INqBZ0oNDej+3l99Vd/gih+yMqfMYY7h0c1PXRaokuEk3AetN1vwrV8m9QLX+N2J0wrH9AhR946DdqVx3dOz5cro6Oa7JiiB36OFYYkc2yxlTnO6ppG8UQFKQYozqQIYSg2DW1Jw/o6B4+/ASf//AP0G7WuDh/BdLh8N6xxZorq7XO4l18cowyi7N0d6KfQ1G0N0izbrG52qBtg84vzpvnZ69PL1p9pYPjL+GqSwyuvuwdSQFTLDS3GqKXKsnC5322jmolmvYGOwIBkYE+RshHdBLRRlevxrEn1+TJbVvw2yR4eb9dJN9fFAiqIXnAVYJsKXDBAzgQ5EHUkGrFcBjD+jM1F3+G0H0BhU8JHIq8hK9+jfr4H1AvnqZbeylWUDhCt36EbvNFhfj7h4uDTx48+M6CrNjFDgqJ1AJiCCG0XWhDG7oYQtuFTYDOBV6AXAtuDUCI3cNK4bOa7sQxVt/7nd/F8cl9XJ2fQ4o4PjnBYrEytx4AQKg8ksUeyJ1OIWW/AQLWlw2eP3uutg0KIYTLy/XVWdN806H+R9VHP4dza/Rkzm4/ZnmSCdxw2M7kbodzFj1IINgAU4FkhwjRIRBGbrCLrlrkWP8S/R4BnP3yb2/dH37bBM/3nCI4cN2S5+28X0GyWuKgB20bQgXKS2nNe6gCUElaSGGJ2J5I8Uh0wbl6k6bcvOzN4EFUEjwBrxgWai6/cPHqL1dV/elycbCEqKZtYwxdCFIbhCYCZwF4AfpTufoFq/oFnG+slEIaQMewRHP+xz40f1hTJ5Vzfrlcsa4rAmBV1Tg6PMJytcDy8AiuqlBVAt2IB/1/yZYM36xbvHz+Kl5cXF6db5rLq01zugn6herVT+EOXoDIxGwFtqBaiMkliBZgyy1CbxG7Zd8mT+zYdD1BG1w6RcqLQVFq5evlVOTgNTK//pAJDlyz4nl7/LOvWH76lDdLzkoW7+rNEstImgrqAzBLb4Svla9Nkkd950BlnUOpM8Vazfq30V3+qVN4BJAR2IDutZx/Bn/wDK46o/Mb0YUdv0/yDYUVmvMfuth8DmBVOb+sHBck0DUtGbvlg/v3q9/87Ld47zsP4B3g/IgHuQxjJEIX8OzpM706u7x8/vricRP936Ne/DddfZZ0diZljt3OkzbN6Fiy0nZe2VqbnzsQtloxxZwcaj5vh4joxRAEhgg6OF+XlavKzxK3Lk+AWyY4sEXymxJ9bM0zyV2SK17MpE/nKSO5ekJ7Izp8Inlv+cV0XrlTFO1jXFJhaddQci4SZdo7veXc5mcmBbkkJmx0DBAmgRaIYYnYPWTsHtiYQit1m+8unXt4vFodPvreo+re/fvwla1OAViwVE6M6LqA0xcv9OTrZ5uXF+v/0sHxX6FePS7WxynjR9piP1voLFd6686+jX1H2g8UQwqL7QhEkZFEZHAphjjAVQuLWTDcKe2d8S6iCUvfd96f7PHpM5cBy5VFkkOMDqSkGClaABAT6UVPqDPvMCtAnqCXLRzohSRHiIqgM3liUgXiUNLZ+Qtb14AOUPkWyZ2NFpcKB8vqIgd7m7I7UxvWF3A1ID2xTkFA8qw2n2yaiz+P6/Xn7X8+vn/v+EV9dHSI6qDu1+QkiU3T4NXpqU5fvrpaB3ytxfGPWa9+JrqGNmGfp9Y7WNxIq+TaQ5q15EDy1gaLTG6/fvInuQAR4BApBgKCQ3RyprfV2oxltSwlyV5p8i5x6xYcMI9KwerxwNMV+9MpbUW98UTaRDKk4ZlcmvpwILw0SBxBPpO1b9Nbdvik8cvz1zw7FlotqnwmFdscPbPSPvs2RhtbfpmI3SGa8x+5bvMnHvHkcLmsSEpRiCGwi51CiKGL2kT6J1oc/bVbnPwkTdIUBO01c7ba2fedSM9E+i1t3QFWZ5DmTowQA6FoznZGREZKAoJIJws74FiWjLf7Y+/KegPvxoIDQ1wQsD3DaXMlw7nsn8vtXHHcAzahCKV8MsBJMZjFhbOsBIW0/Hu2qF5mkT1TnAvMojtIqcaEKpm+8AA9CGeFQZQK9SPVlVXf2dLDewBUSWhtER1k31ksAQwEff1ai5MfR3f109htfu+siYdDhA0gVaBjg8p/w4PVfzi//EY9uXtydrLtRObBmmPoBC37wWK6tic0c5KDTb/TyVIbJChEV9WyPj88F25A7hvy4f8N78SCAzsHnFPHSos+Zc23jiWrSwrJitNZGHNP8oKUNjehwUoTkE8ETcSWo32vz/eRSR4Ub4Cp50n7yvq8lC7pM/dpJFe3mELIc2kWcEgNiyI7DhVct1ZSoK2PkwnfETkgSp2y7zpbbCO1RW0SkRb/G0jmSC4hIlrxWColD7+J1HdGd5d4ZwQHJkme9980AC1JPdXGQXCWZcVEOhJUsqhy6tsqkRYFUZWtMtNAleU5TRJaDuytd76nG3jK/AZxqWQUASDNRbL4lYntojk5Tme7xAYZrWxxzrZhANMKC0IHMIJGdPWFeXLZY0az+ogiopVZoxAZGU2KwDHaMMe9yUOyy0rPBAf2knz8ObW9S6+X7WjJ4RxIzUTsZKnTJEt+AxCSI3P7QWuz3yahmONmM/EJkDbQBXDdmtO+Y5AuSQYhl/lEapCuz2n42XoawS2VTGlgGc0CF6489hlRVqXXavWYVwSpUCaZY2oFMTLmNOEokKL5Kaes9n5yD89+J8gN3AGCAzvliiaOXSfv9XO7rDoAMOXGuiQK0sCvJzvVkzW1GQiOvp1l2RrpRYr9NcOAsvwhaGmLnHpuIJXNTR0oZaEZ9dUvJWsMTOdCki0BqUojjJ123PzYwvaKC9aeMm0NRioqxQnkACn7KTvZgJt6Su4MuYE7QnDg2kxniTHJM9ye81Pk7q+RafRsrVOYIgeSWh0yBxPDtNpTJje09f0CrMSt0RhlJ8mEtRjI1F3zuZyDA5gRT/xGYcJNwRB9KHhk7yJFhJVQG8hrj5Yt+CBpkt4maDUDmbOSk9UmVcgQYLDcLLbzbz2eit/Cu5ipfBPuDMEz7n3/L/KfdurZpix66V0p20x1hvI6246RFrvPdM9U83jIhmNKP7POYIcsKU2pUzBRhWQuWFlY48RdZR2SOlP/tsAQVrXlUAKG4jlIPaiv1pqteQqzzMnAERatLnPrMUqIQFRf6kFRdHUu+zBOK9tlsfcdA+6Y1S5x5wiesUObTx0rGbFL0pTX7fpM27KpOWNfigpRHgcORDQ/+PY9VH5nHjhq6Fxi1t8Dq1MGTvk8Ji9SiKGZbBXHsvW1LONUn8Rsq5EakIa63YnYaYUG7PaG7PWIYDfuLLmBO0zwjD3SZdfxXaTe1Qmm2hafyvpZqQyEw/bAMJva3uIPA8U8jZ/EBVN9CpP2SPOZJpl2/hp9ofKBoHZBssDKLXIniH2/HAanKPb3DRw/GGJn3HmCZxREB9783KV8AbYJjonPDDfRbhDEveE1CCJiLKva95TtrTkBwBUdyyTMIMPSmyEd3qp7xvICWKHX3COcj6lN1sWlO28fkTVqt/WHGrWZgoDbz8z53+K9IfgY+yx78Q8bE3vfsZtu7+wA/X4amHI4Vxho5opA/aCV/dtAadybU/T6+5WfGO3H0bld5L6JF+RNg8T3wmqXeG8JPkap2Scs0hj7dPy+NrhBu8Ii9w2o3e3Hb5PxSBO4HrKQz00NCvfp7F344Iid8cEQvERR9HOfblcWBHvaYeJcuf+2nWLXc+173rHLruy/uwi8T0uPv2PqQfpz7yuxMz5Igpe4wSB1jLdp97ad4ybnyk4xdb8SU6SfuvZNFvpau/ed2BkfPMEzRoNU4G2IfAPNs/f67e0pCTLGmzrOFLF3dYCb4r2VIfvw0RB8jFHtcuDt/xY3seC7rhnfcxfpp/b34aO11Lvw0RJ8jLd0Q+7CPsJq1OamuIk2v+n3fPCEHmMm+B58S6S/bfTE/9jIPIX35Z92JzCh44H/y9/w7bT9+G1wbTA6E/o6ZoJ/yxh5bfbRd0pbT14zE3fGjBkzZsyYMWPGjBkzZsyYMWPGjBkzZsyYMWPGjBkzZsyYMWPGjBkzZsyYMWPGjBkzZnxs+B84Wf99TLzmCgAAAABJRU5ErkJggg=="

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  map: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	  map2: [[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1], [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1], [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1], [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
	
	  MAP_OBLONG: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]],
	
	  MAP_TEST: ["111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111221111111111111111111111111111111111111111111111", "111122222111111111111111111111111111111111111111111111", "111122222111111111111111111111000011111111111111111111", "111122222111111111111111111111110011111111111111111111", "111122222111111111111111111111111111111111111111111111", "111122222111111111111110011111111111111111111111111111", "111112211111111111111100011111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111110000011111111111", "111111111111111111111111111111111111111100011111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111011111111111111111111111111111111111111", "111111111110000011111111111111212111111111111111111111", "111100000000011111111111111111222122221111111111111111", "111100000001111111111111111111221122222211111111111111", "111100111111100011111111111111111112222221111111111111", "111100000000011111111111111111112222211111111111111111", "111101111111111111111111111111111122221111111111111111", "111101111111111111111111111111111111221111111111111111", "111100111111111111111111111111111111122111111111111111", "111110001111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111222211111111", "111111111111111111111111111111111111111112222221111111", "111111111111111111111111111111111111111111112222111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111"].map(function (line) {
	    return ("" + line).split("").map(function (s) {
	      return parseInt(s);
	    });
	  }),
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map