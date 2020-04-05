module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    devServer:{
        port:"8080",
        disableHostCheck:true,
        proxy:{
            'areas/bound':{
                target:'https://geo.datav.aliyun.com/',
                changeOrigin:true
            }

        }
    }
}