
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

import React from 'react';
import PropTypes from 'prop-types';

import aguid from 'aguid';
import valyou from 'valyou';
import { callIfDefinedNull } from 'call-if-defined';



export default class Each extends React.Component {

  constructor(...args) {
    super(...args);

    this._guid = aguid();
  }



  render() {
    const items = valyou(this.props.items);

    if (items == null || items.length === 0) {
      return callIfDefinedNull(this.props.else);
    }

    return React.createElement(
      React.Fragment,
      { key: this._guid },
      _renderChildren(items, this.props.renderItem)
    );
  }
}


Each.propTypes = {
  items:      PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  renderItem: PropTypes.func.isRequired,
  else:       PropTypes.func
};



/* eslint-disable valid-jsdoc */



// region Private Render Functions

/** @private */
function _renderChildren(items, renderItem) {
  const children = [];
  const info     = { itemsLastIndex: (items.length - 1) };

  for (let i = 0; i < items.length; i++) {
    children.push(renderItem(items[i], i, info, items));
  }

  return children;
}

// endregion
