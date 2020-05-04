module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    // 打包app要加上 baseUrl:'./'
    // baseUrl:'./',
    devServer:{
        port:"8080",
        disableHostCheck:true,
        proxy:{
            '/areas/bound':{
                target:'https://geo.datav.aliyun.com',
                changeOrigin:true,
                ws: true,
                pathRewrite: {
                    '/areas/bound': '/areas/bound'
                  }
            }

        }
    }
}