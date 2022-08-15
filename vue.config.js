
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: '',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' 
    //       //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
    //       //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
     }
      },
    }
  }
})

