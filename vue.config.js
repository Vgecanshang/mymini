module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // @/ 是 src/ 的别名
                prependData: '@import "~@/scss/uni.scss";'
            }
        }
    }
}
