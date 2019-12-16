# uni-app template project

#### 配置项目

```
#1.安装依赖
yarn install

#2.解决scss报错的问题
yarn remove node-sass sass-loader
yarn add node-sass sass-loader -D

#3.cli 4.x rpx/upx编译到小程序或H5产生乱码的问题解决（降级到3.12.1）
yarn add @vue/cli-service@3.12.1 -D

#4.编辑到环境
yarn dev:mp-weixin/yarn dev:h5

```

#### 命令说明

```
#自动启动微信开发工具
#启动生成环境的代码
D:\Development\微信web开发者工具\cli.bat -o E:/workspace/insurance\dist/build/mp-weixin
#启动开发环境
D:\Development\微信web开发者工具\cli.bat -o E:\workspace\insurance\dist\dev\mp-weixin
```

#### .vscode/tasks.json
```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "devtool:dev",
            "type": "shell",
            "command": "D:\\Development\\微信web开发者工具\\cli.bat",
            "args": ["-o", "${workspaceRoot}\\dist\\dev\\mp-weixin"],
            "group": {
                "kind": "test",
                "isDefault": true
            }
        }
    ]
}

```


#### 工程结构说明

```cmd

├── dist
|   ├── build
|   	├── mp-weixin
|   	└── ...(不同平台的编译包，用于生产环境)
|   └── dev
|   	├── mp-weixin
|   	└── ...(不同平台的编译包，用于开发环境)
├── node_modules 依赖包
├── public h5开发时输出的静态页面
├── src 开发目录
|   ├── components 全局公共组件
|   ├── api API请求模块
|   ├── store 全局变量系统
|   ├── pages 页面
|   	├── subpages 分包1
|   		├── components 当前分包内共享的组件
|   		└── home 页面
|   			├── index.vue home页面代码
|   			└── components home页面组件文件夹
|   	└── subpages2 分包2 同上
|   ├── static 静态资源，不进行编译，一般放置图片
|   └── images 静态图片，只允许放tabbar资源，icon图标统一使用网络资源
```
