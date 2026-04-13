const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查
  /* devServer: {
    port: 5060
  } */
 // 代理服务器
  /* devServer: {
    proxy: 'http://localhost:5000'
  } */
 // 代理服务器（配置多个代理）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },
        ws: true,// 是否启用websockets
        changeOrigin: true//用于控制请求头中的host值，默认值为true，是否需要改变原始主机头为目标URL
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        ws: true,
        changeOrigin: true
      }
    }
  }
})
