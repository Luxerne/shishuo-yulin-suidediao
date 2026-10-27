# 石说榆林｜绥德石雕的岁月新刻

《石说榆林——绥德石雕的岁月新刻》决赛作品展示网站，包含在线视频播放、旁白关键词搜索和 1—61 号分镜图。

## 本地构建

需要 Node.js。运行：

```sh
node scripts/materialize-video.mjs
```

构建会把 `video-assets/` 中的视频分片整理到 `dist/media/`，并把 `storyboard-assets/` 中的分镜图片放到 `dist/storyboard/`。然后用任意静态 HTTP 服务器托管 `dist/` 目录。请通过 HTTP/HTTPS 打开网页；直接用 `file://` 打开时，浏览器会阻止视频资源读取。

## 内容

- `dist/index.html`：网站页面
- `dist/images/`：老式电视机框图片
- `video-assets/`：决赛视频分片
- `storyboard-assets/`：按 01—61 编号的分镜图
- `scripts/materialize-video.mjs`：网站资源构建脚本

线上地址：[石说榆林](https://shishuo-yulin-suidediao.fast-ash-5796.chatgpt.site)
