'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _koaRedis = require('koa-redis');

var _koaRedis2 = _interopRequireDefault(_koaRedis);

var _koaGenericSession = require('koa-generic-session');

var _koaGenericSession2 = _interopRequireDefault(_koaGenericSession);

var Session = (function () {
  function Session(app) {
    _classCallCheck(this, Session);

    this.app = app;
  }

  _createClass(Session, [{
    key: 'setup',
    value: regeneratorRuntime.mark(function setup() {
      var options;
      return regeneratorRuntime.wrap(function setup$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            options = _extends({}, this.app.config.session);

            options.store = new _koaRedis2['default'](this.app.config.connections.redis['default']);

            this.app.application.keys = options.keys;

            this.app.session = (0, _koaGenericSession2['default'])(options);

            this.app.application.use(this.app.session);

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, setup, this);
    })
  }]);

  return Session;
})();

exports['default'] = Session;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map