const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components' ),
        '@views': path.resolve(__dirname, 'src/views' ),
        '@utils': path.resolve(__dirname, 'src/utils' ),
        '@server': path.resolve(__dirname, 'src/server' )
      }
    }
  }
}
