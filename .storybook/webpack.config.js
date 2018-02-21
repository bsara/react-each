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

const path = require('path');


// region Constants

const SRC_DIR          = path.resolve(__dirname, '..');
const NODE_MODULES_DIR = path.resolve(__dirname, '../node_modules');

// endregion



module.exports = {
  devtool: 'source-map',
  stats:   'minimal',

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  module: {
    rules: [
      {
        test:    /.js$/,
        include: SRC_DIR,
        exclude: NODE_MODULES_DIR,
        loader:  'babel-loader'
      }
    ]
  }
};
