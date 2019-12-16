<template>
    <view class="zt-info it">
        <view class="card">
            <view class="card-div">
                <view class="card-div-content">
                    <view class="card-div-content-desc">{{
                        data.company
                    }}</view>
                    <view class="card-div-content-name">{{ data.name }}</view>
                    <view class="card-div-content-desc-dept">{{
                        data.position
                    }}</view>

                    <view class="card-div-content-desc-phone">{{
                        data.mobile
                    }}</view>
                    <view class="card-div-content-desc-email">{{
                        data.email || '123456789@qq.com'
                    }}</view>
                </view>
                <view>
                    <image class="card-div-lop" :src="data.avatar" />
                </view>

                <view class="card-div-qrcode">
                    <text class="iconfont icon-erweima" />
                    <text>名片码</text>
                </view>
            </view>
        </view>

        <view class="nav">
            <view class="nav-item">
                <text class="iconfont icon-fenxiang"></text>
                <text class="nav-item-memo">分享</text>
            </view>
            <view class="nav-item">
                <text class="iconfont icon-tongxunlu"></text>
                <text class="nav-item-memo">通讯录</text>
            </view>
            <view class="nav-item">
                <text class="iconfont icon-dingzhi"></text>
                <text class="nav-item-memo">地址</text>
            </view>
            <view class="nav-item">
                <text class="iconfont icon-dianhua3"></text>
                <text class="nav-item-memo">电话</text>
            </view>
            <view class="nav-item">
                <text class="iconfont icon-weixin1"></text>
                <text class="nav-item-memo">加微信</text>
            </view>
        </view>

        <view class="info">
            <view class="info-title">
                <text class="iconfont icon-jianjie"></text>
                <text class="info-title-label">简介</text>
            </view>
            <view class="info-content">
                HI很高兴您查看我的名片，我是掌狐业务部的高级经理赵云，本人负责掌狐大客户业务的市场渠道，如果想了解具体的合作方式，欢迎随时与我交流
            </view>
        </view>

        <view class="goods-info"> </view>
    </view>
</template>

<script lang="ts">
import Vue from 'vue'
//1.
interface typeAny {
    [key: string]: any
}
export default Vue.extend({
    data() {
        return {
            cardId: '53b50dc2746246beb8ee65432f04ccd6',
            data: {
                viewAvatar: [
                    'http://imgoss.91zhanghu.com/volafox/d7f8c3023d28f2b3c6bbfdc72c3bcb7e-scale',
                    'http://imgoss.91zhanghu.com/volafox/d7f8c3023d28f2b3c6bbfdc72c3bcb7e-scale',
                    'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRImnuW2rJfzuhv3b6djmhlus2nrKTzbVsamOXnULpKDUpeibw6o480C7QqcQhedoIvn0It3WG1Kw/132',
                    'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLicwhaSVJxBVW3ecKt6rsNyibDriceqdwuvR6Xib1iaDliaDIXibUN2VSVRGibB2icasUxZiaw8fXmsdz84KIg/132',
                    'http://imgoss.91zhanghu.com/volafox/d7f8c3023d28f2b3c6bbfdc72c3bcb7e-scale'
                ],
                address: '罗湖区莲塘街道高新第一产业园区',
                modelSet: {
                    product: { name: '推荐商品', icon: 'icon-danhang2' },
                    img: { name: '我的图片', icon: 'icon-ziliaojia2' },
                    profile: { name: '个人简介', icon: 'icon-mingpian2' },
                    video: { name: '我的视频', icon: 'icon-jianjie' }
                },
                addressLat: '22.56612760187075',
                profile: '',
                mobile: '13077849119',
                wechat: '',
                likeCount: 0,
                avatar:
                    'https://91zhanghu-img.oss-cn-shenzhen.aliyuncs.com/volafox-card/eb03345459a47be19bb46f6076779da2',
                video: '',
                products: [],
                avatarKey: 'volafox-card/eb03345459a47be19bb46f6076779da2',
                cardId: '53b50dc2746246beb8ee65432f04ccd6',
                name: 'caoyong',
                videoCover: '',
                company: '深圳成信科技有限公司',
                position: 'Android劝退师',
                viewCount: 6,
                videoCoverKey: '',
                email: '',
                status: 1,
                addressLng: '114.1715765178604'
            }
        }
    },
    onLoad() {
        console.log(`${this.data}`)
        console.log('ctest onLoad...')
    },
    onPullDownRefresh() {
        uni.stopPullDownRefresh()
    },
    onReachBottom() {},
    methods: {
        clickIm(item: typeAny) {
            console.log('clickIm', item)
        },
        deleteItem(item: typeAny) {
            console.log('deleteItem', item)

            uni.showToast({
                icon: 'none',
                title: `删除${item.name}...`
            })
        }
    }
})
</script>

<style lang="scss">
$cardHeight: 360rpx;
// @import '@/scss/constant.scss';

page {
    background-color: #f6f6f7;
}

.card {
    padding: $padding-sm $padding-md;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
    background-image: url('~@/static/bg/bg-card.png');
    background-color: $color-white;
    &-div {
        height: $cardHeight;
        width: 100%;
        border-radius: 15rpx;
        background: white;
        display: flex;
        position: relative;
        box-shadow: 0 2px 10px rgba(196, 196, 196, 0.5);
        &-content {
            flex: 1;
            overflow: hidden;
            padding-top: 30rpx;
            padding-left: 30rpx;
            &-company {
                color: #999999;
                font-size: 30rpx;
                line-height: 30rpx;
                @include textOverflowEllipsis;
            }
            &-name {
                color: black;
                font-size: 40rpx;
                line-height: 60rpx;
                font-weight: 600;
                align-content: center;
                @include textOverflowEllipsis;
                margin-top: $margin-sm;
            }

            &-desc {
                color: #999999;
                font-size: 28rpx;
                line-height: 32rpx;
                @include textOverflowEllipsis;
                &-dept {
                    font-size: 28rpx;
                    color: #999999;
                    margin-top: 10rpx;
                }
                &-phone {
                    color: #999999;
                    font-size: 25rpx;
                    margin-top: $margin-lg;
                }
                &-email {
                    color: #999999;
                    font-size: 25rpx;
                }
            }
        }
        &-lop {
            width: 320rpx;
            height: 360rpx;
            background-color: white;
            border-radius: 50% 15rpx 15rpx 50%;
        }
        &-qrcode {
            background-color: rgba($color: #000000, $alpha: 0.5);
            border-radius: 40rpx 0 0 40rpx;
            position: absolute;
            bottom: 20rpx;
            right: 0;
            color: white;
            font-size: 25rpx;
            padding: 18rpx 30rpx;
            .iconfont {
                font-size: 32rpx;
                margin-right: 10rpx;
            }
        }
    }
}

.nav {
    display: flex;
    padding: $padding-sm $padding-xs;
    background-color: white;
    &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        .iconfont {
            color: #4981ff;
            font-size: 50rpx;
        }
        &-memo {
            color: #666666;
            font-size: 24rpx;
        }
    }
}

.info {
    background-color: white;
    padding: $padding-sm $padding-md;
    margin-top: $margin-sm;
    &-title {
        display: flex;
        align-items: center;
        .iconfont {
            font-size: 48rpx;
            background: -webkit-linear-gradient(
                135deg,
                rgba(89, 174, 255, 1) 0%,
                rgba(73, 128, 255, 1) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-right: 10rpx;
        }
        &-label {
            line-height: 48rpx;
            font-size: 34rpx;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
        }
    }
    &-content {
        margin-top: 28rpx;
        font-size: 30rpx;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 42rpx;
    }
}

.goods-info {
    background-color: white;
}

.#{$zt-prefix}-info {
    &-head {
        &-title {
            .iconfont {
                background-image: -webkit-linear-gradient(
                    -45deg,
                    #58acff,
                    #4a82ff
                );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
}
</style>
