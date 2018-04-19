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
import { storiesOf } from '@storybook/react';

import Each from './index.js';



const initialItems = [
  "apple",
  "apricot",
  "banana",
  "blackberry",
  "blueberry",
  "boysenberry",
  "cantaloupe",
  "cherry",
  "clementine",
  "fig",
  "gooseberry",
  "grape",
  "grapefruit",
  "guava",
  "honeydew",
  "huckleberry",
  "kiwi",
  "lemon",
  "lime",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "passion fruit",
  "peach",
  "pear",
  "pineapple",
  "plum",
  "pomegranate",
  "raspberry",
  "strawberry",
  "tangerine",
  "watermelon"
];



class _TestComponentForm extends React.PureComponent {

  constructor(...args) {
    super(...args);

    this.state = {
      newItem: ""
    }
  }


  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.newItem} placeholder="Item..." onChange={(e) => this.setState({ newItem: e.target.value })} />
        &nbsp;
        <input type="button" value="Add" disabled={this.state.newItem == null || this.state.newItem.trim().length === 0} onClick={() => {
          if (this.props.onSubmit(this.state.newItem)) {
            this.setState({ newItem: "" });
          }
        }} />
      </React.Fragment>
    );
  }
}


class _TestComponent extends React.Component {

  constructor(...args) {
    super(...args);

    this.state = {
      items: initialItems
    };
  }


  render() {
    return (
      <div>
        <div>
          <a href="https://github.com/bsara/react-each/blob/master/story.jsx#L139-L156">View story source</a>
        </div>

        <br/>

        <div>
          <_TestComponentForm onSubmit={(newItem) => {
            if (!this.state.items.includes(newItem)) {
              this.setState({
                items: [
                  newItem,
                  ...this.state.items
                ]
              });
              return true;
            }

            alert("Item is already found in the list!");

            return false;
          }} />
          &nbsp;
          <input type="button" value="Reset List" disabled={this.state.items === initialItems} onClick={() => this.setState({ items: initialItems })} />
        </div>

        <hr/>

        <div>
          <div style={{ marginBottom: '15px' }}>
            <input type="button" value="Remove All" disabled={this.state.items.length === 0} onClick={() => this.setState({ items: [] })} />
          </div>

          <Each items={this.state.items} renderItem={(item) => (
            <div key={item} style={{ marginBottom: '5px' }}>
              <input type="button" value="Remove" onClick={() => {
                const itemIndex = this.state.items.indexOf(item);

                this.setState({
                  items: [
                    ...this.state.items.slice(0, itemIndex),
                    ...this.state.items.slice(itemIndex + 1)
                  ]
                });
              }} />
              &nbsp;
              {item}
            </div>
          )} else={() => (
            <div><i>Item list is empty!</i></div>
          )} />
        </div>

      </div>
    );
  }
}



storiesOf("react-each", module)
  .add("Default", () => <_TestComponent />);
