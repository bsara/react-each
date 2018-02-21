'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aguid = require('aguid');

var _aguid2 = _interopRequireDefault(_aguid);

var _valyou = require('valyou');

var _valyou2 = _interopRequireDefault(_valyou);

var _callIfDefined = require('call-if-defined');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line spaced-comment
/**!
 * ISC License (ISC)
 *
 * Copyright (c) 2018, Brandon D. Sara (https://bsara.pro/)
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

var Each = function (_React$Component) {
  _inherits(Each, _React$Component);

  function Each() {
    var _ref;

    _classCallCheck(this, Each);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Each.__proto__ || Object.getPrototypeOf(Each)).call.apply(_ref, [this].concat(args)));

    _this._guid = (0, _aguid2.default)();
    return _this;
  }

  _createClass(Each, [{
    key: 'render',
    value: function render() {
      var items = (0, _valyou2.default)(this.props.items);

      if (items == null || items.length === 0) {
        return (0, _callIfDefined.callIfDefinedNull)(this.props.else);
      }

      return _react2.default.createElement(_react2.default.Fragment, { key: this._guid }, _renderChildren(items, this.props.renderItem));
    }
  }]);

  return Each;
}(_react2.default.Component);

exports.default = Each;


Each.propTypes = {
  items: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]),
  renderItem: _propTypes2.default.func.isRequired,
  else: _propTypes2.default.func
};

/* eslint-disable valid-jsdoc */

// region Private Render Functions

/** @private */
function _renderChildren(items, renderItem) {
  var children = [];
  var info = { itemsLastIndex: items.length - 1 };

  for (var i = 0; i < items.length; i++) {
    children.push(renderItem(items[i], i, info, items));
  }

  return children;
}

// endregion

//# sourceMappingURL=index.es5.js.map