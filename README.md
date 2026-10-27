# 石说榆林｜绥德石雕的岁月新刻

《石说榆林——绥德石雕的岁月新刻》决赛作品展示网站，包含在线视频播放、旁白关键词搜索和 1—61 号分镜图。

## 本地构建

需要 Node.js。运行：

```sh
npm run build
```

构建会把 `video-assets/` 中的视频分片整理到 `dist/media/`，并把 `storyboard-assets/` 中的分镜图片放到 `dist/storyboard/`。然后用静态 HTTP 服务器托管 `dist/` 目录。请通过 HTTP/HTTPS 打开网页；直接用 `file://` 打开时，浏览器会阻止视频资源读取。

## 部署到腾讯云 EdgeOne Pages

从 GitHub 导入本仓库，并设置：

- 根目录：`/`
- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js：22

页面生成 24 个视频分片（最大约 4 MiB/个）和 61 张分镜图。EdgeOne Pages 单文件大小上限为 25 MiB，当前资源符合该限制。

如需在中国大陆获得长期稳定、可分享的网址，请为 EdgeOne Pages 绑定已完成 ICP 备案的自定义域名。平台生成的大陆预览链接有效期有限，不适合作为长期网址。

## 内容

- `dist/index.html`：网站页面
- `dist/images/`：老式电视机框图片
- `video-assets/`：决赛视频分片
- `storyboard-assets/`：按 01—61 编号的分镜图
- `scripts/materialize-video.mjs`：网站资源构建脚本
