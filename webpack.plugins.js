// 引入在生产环境中使用的插件

const cachewebWebpackPlugin = require('cacheweb-webpack-plugin');
module.exports = [
  new cachewebWebpackPlugin({
    chacheName: 'SW',
    expirationHour: 72,
    maxNum: 50,
    noCacheFileList: ['index.html', 'register.js'],
    cacheFirstList: ['entity'],
    permanentCacheList: ['entity/0/children'],
  }),
];
