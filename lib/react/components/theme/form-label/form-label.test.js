'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

/** @test {FormLabel} */

describe('FormLabel component', function () {
  /** @test {FormLabel#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      null,
      'Nome'
    ));

    it('Should output a form label', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'label'));
    });

    it('Should output a form label with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.label));
    });
  });
});