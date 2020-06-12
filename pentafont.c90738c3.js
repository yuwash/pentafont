// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pentafont.js":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var config = {
  encoding: 'etaionsparse',
  renderer: 'etaionsparse',
  fontSize: 15,
  fontWidth: 0.2,
  // monospace for now
  lineHeight: 1.5,
  letterSpacing: 0,
  minWidth: 240
};
var encodingDotsies = {
  ' ': 0,
  a: 1,
  b: 2,
  c: 4,
  d: 8,
  e: 16,
  f: 3,
  g: 6,
  h: 12,
  i: 24,
  j: 5,
  k: 10,
  l: 20,
  m: 9,
  n: 18,
  o: 17,
  p: 7,
  q: 11,
  r: 13,
  s: 14,
  t: 22,
  u: 26,
  v: 28,
  w: 19,
  x: 21,
  y: 25,
  z: 15,
  _31: 31
};
var encodingEtaisparse = {
  ' ': 0,
  a: 8,
  b: 7,
  c: 10,
  d: 5,
  e: 2,
  f: 6,
  g: 28,
  h: 24,
  i: 17,
  j: 13,
  k: 26,
  l: 20,
  m: 21,
  n: 16,
  o: 4,
  p: 12,
  q: 22,
  r: 9,
  s: 18,
  t: 1,
  u: 3,
  v: 25,
  w: 11,
  x: 14,
  y: 19,
  z: 27,
  '.': 15,
  ',': 23,
  _29: 29,
  _30: 30,
  _31: 31
};
var encodingLatinoid = {
  ' ': 0,
  a: 24,
  b: 13,
  c: 18,
  d: 9,
  e: 22,
  f: 14,
  g: 26,
  h: 25,
  i: 1,
  j: 2,
  k: 29,
  l: 5,
  m: 28,
  n: 19,
  o: 4,
  p: 12,
  q: 20,
  r: 30,
  s: 17,
  t: 21,
  u: 6,
  v: 3,
  w: 7,
  x: 27,
  y: 11,
  z: 10,
  '.': 16,
  ',': 8,
  _29: 15,
  _30: 23,
  _31: 31
};

var renderByte = function renderByte(bitRenderer, byte_, x, y, width, height) {
  return [0, 1, 2, 3, 4].reduce(function (accumulator, bit) {
    if (0 < (byte_ >> bit) % 2) {
      accumulator.push(bitRenderer(bit, x, y, width, height));
    }

    return accumulator;
  }, []);
};

var renderByteEtaionsparse = function renderByteEtaionsparse(byte_, x, y, width, height) {
  return renderByte(function (bit, x, y, width, height) {
    var grid = [[x, y], // 0
    [x, y + height / 2], // 1
    [x, y + height], // 2
    [x + width, y], // 3
    [x + width, y + height / 3], // 4
    [x + width, y + height * 2 / 3], // 5
    [x + width, y + height] // 6
    ];

    if (bit == 0) {
      return [grid[0], grid[4], grid[3]];
    } else if (bit == 1) {
      return [grid[0], grid[1], grid[4]];
    } else if (bit == 2) {
      return [grid[1], grid[5], grid[4]];
    } else if (bit == 3) {
      return [grid[1], grid[2], grid[5]];
    } else if (bit == 4) {
      return [grid[2], grid[6], grid[5]];
    }
  }, byte_, x, y, width, height);
};

var renderByteDotsies = function renderByteDotsies(byte_, x, y, width, height) {
  return renderByte(function (bit, x, y, width, height) {
    return [[x, y + bit * height / 5], [x, y + (bit + 1) * height / 5], [x + width, y + (bit + 1) * height / 5], [x + width, y + bit * height / 5]];
  }, byte_, x, y, width, height);
};

var latinoidPolygons = [[[0, 0], [1, 5], [2, 5], [2, 0]], [[4, 0], [2, 5], [4, 5], [5, 2]], [[1, 5], [1, 6], [5, 6], [4, 5]], [[1, 6], [0, 8], [2, 10], [3, 6]], [[2, 6], [4, 10], [5, 10], [4, 6]]];

var renderByteLatinoid = function renderByteLatinoid(byte_, x, y, width, height) {
  return renderByte(function (bit, x, y, width, height) {
    return latinoidPolygons[bit].map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          x_ = _ref2[0],
          y_ = _ref2[1];

      return [x + x_ * width / 5, y + y_ * height / 10];
    });
  }, byte_, x, y, width, height);
};

var renderLetters = function renderLetters(text, width, config) {
  return Array.from(text).reduce(function (accumulator, character) {
    var bruttoLetterWidth = config.fontSize * (config.fontWidth + config.letterSpacing);
    var bruttoLineHeight = config.fontSize * config.lineHeight;
    var lastPos = accumulator.length ? accumulator[accumulator.length - 1] : {
      x: -bruttoLetterWidth,
      y: 0
    };
    var addRow = width < lastPos.x + 2 * bruttoLetterWidth; // 2 times because the last letter and this letter follows lastPos

    var x = addRow ? 0 : lastPos.x + bruttoLetterWidth;
    var y = lastPos.y + (addRow ? bruttoLineHeight : 0);
    var encoding = getEncoding(config.encoding);
    var renderer = getRenderer(config.renderer);
    var characterToRender = character.toLowerCase();

    if (!(characterToRender in encoding)) {
      characterToRender = '_31';
    }

    var fontHeight = config.fontSize;
    var fontWidth = config.fontSize * config.fontWidth;
    accumulator.push({
      polygons: renderer(encoding[characterToRender], x, y, fontWidth, fontHeight),
      x: x,
      y: y
    });
    return accumulator;
  }, []);
};

var pointsFormat = function pointsFormat(points) {
  return points.reduce(function (accumulator, point) {
    return accumulator + "".concat(point[0], ",").concat(point[1], " "); // FIXME trailing space
  }, '');
};

var getEncoding = function getEncoding(name) {
  return {
    etaionsparse: encodingEtaisparse,
    dotsies: encodingDotsies,
    latinoid: encodingLatinoid
  }[name] || encodingEtaisparse;
};

var getRenderer = function getRenderer(name) {
  return {
    etaionsparse: renderByteEtaionsparse,
    dotsies: renderByteDotsies,
    latinoid: renderByteLatinoid
  }[name] || renderByteEtaionsparse;
};

var getWidth = function getWidth() {
  var parentElement = document.getElementById('render-view');

  if (!parentElement) {
    return config.minWidth;
  }

  var parentWidth = parentElement.getBoundingClientRect().width;
  return config.minWidth < parentWidth ? parentWidth : config.minWidth;
};

var ractive = new Ractive({
  target: '#reactive-target',
  template: '#reactive-template',
  data: {
    config: config,
    text: 'etaion shrdl ucmfw ypvbgk jqxz,.;',
    imageFilename: 'untitled.svg',
    imageURL: '#',
    width: config.minWidth,
    pointsFormat: pointsFormat,
    renderLetters: renderLetters,
    updateImageFilename: function updateImageFilename() {
      this.set('imageFilename', "".concat((this.get('text') || 'untitled').substring(0, 15), ".svg"));
    },
    updateImageURL: function updateImageURL() {
      var linkElement = this.find('#image-link');
      var renderElement = this.find('#render-view');
      var svgFile = new Blob([renderElement.innerHTML], {
        type: 'text/svg'
      });
      this.set('imageURL', URL.createObjectURL(svgFile));
    }
  },
  observe: {
    'text': function text() {
      this.get('updateImageFilename')();
    },
    'text width config.*': function textWidthConfig() {
      this.get('updateImageURL')();
    }
  },
  onrender: function onrender() {
    this.set('width', getWidth());
  }
});
window.addEventListener('resize', function () {
  return ractive.onrender();
});
},{}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36165" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","pentafont.js"], null)
//# sourceMappingURL=/pentafont.c90738c3.js.map