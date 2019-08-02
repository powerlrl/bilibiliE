## 微信bilibili小程序

> 数据为mock数据，非官方

### 接口如下

>```
>//获取导航栏数据
>https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList
>
>//获取首页轮播图数据
>https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList
>
>//获取视频列表
>https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList
>
>//获取视频详情信息  参数：视频id
>https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id=xxx
>
>//获取其他推荐视频  参数：视频id
>https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=xxx
>
>//获取视频评论列表  参数：视频id
>https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=xxx
>```

### 页面介绍

#### 首页

![Snipaste_2019-08-02_08-55-00.png](https://i.loli.net/2019/08/02/5d438a160a24060313.png)

#### 视频详情页

![Snipaste_2019-08-02_08-55-18.png](https://i.loli.net/2019/08/02/5d438a16045d753230.png)

### fontawesome的使用

#### 使用

+ [官网](http://fontawesome.dashgame.com/)下载到本地

+ 找到fontawesome-webfont.ttf这个文件，上传到[transfonter](https://transfonter.org/)

![Snipaste_2019-08-02_09-07-56.png](https://i.loli.net/2019/08/02/5d438d08af3ce24974.png)

+ 新建一个fontawesome.wxss

+ 把stylesheet.css复制到fontawesome.wxss中去，然后打开最开始我们下载的fontawesome中这个文件夹中的fontAwesome.wxss去掉@font-face中内容，把其余的部分(fa....)复制到fontawesome.wxss中

+ 把fontAwesome.wxss放在一个文件夹中例如（style），在app.wxss中利用@import引入（@import "style/fontAwesome.wxss"）

+ 利用class使用（class="fa fa-图标名"）

