'use strict';

require('babel-polyfill');

var _vue = require('vue/dist/vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _dashboard = require('./dashboard/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
_vue2.default.use(_vueRouter2.default);
// index.js

var router = new _vueRouter2.default({
  // Routes go here.
  mode: 'history',
  base: '/',
  routes: [{ path: '/', component: _dashboard.Dashboard }]
});
// Navigation guards
router.beforeEach(function (to, from, next) {
  //
  next();
});
var vueInstance = new _vue2.default({
  el: '#app',
  router: router,
  render: function render(h) {
    return h(_App2.default);
  }
});
//# sourceMappingURL=index.js.map
