module.exports = {
    css: {
        loaderOptions: {
            scss: {
                // @/ 是 src/ 的别名
                prependData: '@import "~@/scss/uni.scss";'
            }
        }
    }
}
