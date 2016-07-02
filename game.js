(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = null;
    hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("game/boot.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  init: function init() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignVertically = true;
    this.scale.pageAlignHorizontally = true;
  },
  create: function create() {
    this.state.start('level_1');
  }
};
});

;require.register("game/initialize.js", function(exports, require, module) {
'use strict';

var _boot = require('./boot');

var _boot2 = _interopRequireDefault(_boot);

var _level_ = require('./level_1');

var _level_2 = _interopRequireDefault(_level_);

var _level_3 = require('./level_2');

var _level_4 = _interopRequireDefault(_level_3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  Create game instance
var game = new Phaser.Game(320, 130, Phaser.AUTO, 'game', null, false, false);

// Add states
game.state.add('boot', _boot2.default);
game.state.add('level_1', _level_2.default);
game.state.add('level_2', _level_4.default);

// Start boot state
game.state.start('boot');
});

;require.register("game/level_1.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  preload: function preload() {
    this.load.spritesheet('haro', 'images/haro.png', 32, 32);
    this.load.image('door', 'images/door.png', 32, 32);
  },
  create: function create() {
    this.door = this.add.image(this.world.centerX, this.world.height - 32, 'door');
    this.haro = this.add.sprite(0, this.world.height, 'haro');

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.enable(this.haro);

    this.haro.body.collideWorldBounds = true;
    this.haro.animations.add('idle', [0, 1, 2, 3, 4, 5], 10, true);
    this.haro.animations.add('left', [0], 10, true);
    this.haro.animations.add('right', [0], 10, true);

    this.cursors = this.input.keyboard.createCursorKeys();
  },
  update: function update() {
    this.haro.body.velocity.x = 0;
    if (this.cursors.left.isDown) {
      this.haro.body.velocity.x = -150;
      this.haro.animations.play('left');
    } else if (this.cursors.right.isDown) {
      this.haro.body.velocity.x = 150;
      this.haro.animations.play('right');
    } else {
      this.haro.animations.play('idle');
    }
    if (this.haro.body.x == this.world.centerX) {
      this.state.start('level_2');
    }
  }
};
});

;require.register("game/level_2.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  preload: function preload() {
    window.alert('Game Over!');
  }
};
});

;require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=game.js.map