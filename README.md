# react-each [![NPM Package](https://img.shields.io/npm/v/react-each.svg?style=flat-square)][npm]

![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)

> A simple React component used for rendering collections and arrays.

When you see this component, you may be asking "Why did you make this? You can just use
the 'map' function of your item array!". So, **here are the reasons that you might use
this component instead of the `map` function:**

- Since you're using a component, you can "connect" it using `connect` from the
  `redux-react` library.
- You have the ability to cleanly implement rendering when the items array is either not
  defined or empty *(see `else` prop below)*.
- You may find that your JSX code is more clean and easier to read.


[Storybook](https://bsara.github.io/react-each)

[Changelog](https://github.com/bsara/react-each/blob/master/CHANGELOG.md)



## Install

```bash
$ npm i --save react-each
```


## Usage

```jsx
import React from 'react';
import Each from 'react-each';


export default function MyComponent(props) {
  return (
    {/* ... */}

      <Each items={props.items} renderItem={(item, index, { itemsLastIndex }, items) => (
        // Render item...
      )} else={() => (
        // Render component(s) when list is not defined or is empty...
      )} />

    {/* ... */}
  );
}
```


## Props

- **items** `?(Array|Function)`

  Array of items (or function which returns an array of items) to use for rendering.

- **renderItem** `!Function` - **REQUIRED**

  Render function called for each item found in the given `items` array.

- **else** `?Function`

  Render function called when `items` array is not defined or is empty.


<br/>
<br/>


# License

ISC License (ISC)

Copyright (c) 2018, Brandon D. Sara (http://bsara.pro/)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.



[license]: https://github.com/bsara/react-each/blob/master/LICENSE "License"
[npm]:     https://www.npmjs.com/package/react-each                "NPM Package: react-each"
