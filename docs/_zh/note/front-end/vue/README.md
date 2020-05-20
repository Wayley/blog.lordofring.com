# VUE

## Use Gzip

> with `[compression-webpack-plugin]`(https://webpack.js.org/plugins/compression-webpack-plugin/), we can do some things

### Install Plugin

> Install `compression-webpack-plugin`

```bash
$ npm install compression-webpack-plugin --save-dev
```

### Add Config

> Add `webpack` config

- Pure webpack.config

```js
// webpack.config.js
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [new CompressionPlugin(Options)],
};
```

- Integrated in `CLI`

> such as in vue-cli

```js
// vue.config.js

const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  // ...
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|json|txt|html|ico|svg|png|jpg|jpeg|woff|ttf)(\?.*)?$/i,
            threshold: 2048,
            minRatio: 0.8,
          }),
        ],
      };
    }
  },
};
```
