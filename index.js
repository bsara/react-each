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


