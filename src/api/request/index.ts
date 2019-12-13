import axios from 'uni-axios-ts'

if (process.env.NODE_ENV === 'development') {
    console.log('开发环境')
} else {
    console.log('生产环境')
}

const axiosInstance = axios.create({
    baseURL: 'https://cardtest.91zhanghu.com',
    // baseURL: 'https://zt.91zhanghu.com',
    header: {
        common: {
            // appId: 'wx3fd27ddc03e1b073',
            // appId: 'wx742a569d198cb160',
            // sessionId: 'xxx',
            'content-type': 'application/x-www-form-urlencoded'
        }
    }
})

const enum Status {
    SUCCESS = 1,
    FAIL = 0,
    TOKEN_INVALID = -1, // 登录过期
    SALESMAN_MISS = -2 // 业务员不存在
}

/**
 * 没有图标的 showToast
 * @param title 提示信息
 */
function uniShowTips(title: string) {
    // title 最多2行
    uni.showToast({
        icon: 'none',
        title: title,
        duration: 2500
    })
}
/**
 * 统一错误处理函数
 * @param error 错误描述
 */
function reject(error: string): void {
    console.log(`%c 请求失败:${error || '接口返回错误'}`, 'color:#4981FF;')
}
// 拦截器::请求
axiosInstance.interceptors.request.use(function(config) {
    // console.log(config);
    // @ts-ignore
    let lauchOption = wx.getLaunchOptionsSync()
    // TODO::获取用户来源渠道
    return config
})

// 拦截器::响应
axiosInstance.interceptors.response.use(
    function(response) {
        const data = response.data
        let errMsg: string = '加载失败'
        switch (data.result) {
            case Status.SUCCESS:
                return data
            case Status.FAIL:
                errMsg = data.msg || '加载失败，请稍后重试'
                uniShowTips(errMsg)
                return Promise.reject(errMsg)
            case Status.TOKEN_INVALID:
                errMsg = data.msg || '登录已过期，请重新登录'
                uniShowTips(errMsg)
                return Promise.reject(errMsg)
            case Status.SALESMAN_MISS:
                errMsg = data.msg || '该名片不存在'
                uniShowTips(errMsg)
                // TODO::跳转名片列表
                // uni.reLaunch({
                // 	url: '/pages/home/index/index'
                // });
                return Promise.reject(errMsg)
            default:
                return data
                break
        }
    },
    function(error) {
        // 这里是状态码验证失败的统一处理
        console.error('请求错误：', error)
        uniShowTips('请检查网络连接是否正常！')
    }
)

export default axiosInstance
