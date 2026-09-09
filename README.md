# 万鹏 · 学术主页

这是一个无构建依赖的静态学术主页，适合直接部署到 GitHub Pages。

## 本地预览

在项目目录运行任意静态服务器，例如 python -m http.server 8080，
然后打开 http://localhost:8080。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库，并把本目录推送到 main 分支。
2. 在仓库的 Settings → Pages 中选择 GitHub Actions 作为发布来源。
3. 仓库会通过 .github/workflows/deploy-pages.yml 自动发布。

如果使用个人主页仓库（用户名.github.io），发布地址就是：
https://用户名.github.io/

注意：`视频素材/超声机器人.mp4` 和 `视频素材/机械臂视频1080p+BGM.mp4` 均超过 GitHub 普通仓库的 100 MB 单文件限制。正式推送前请为这两个视频启用 Git LFS，或将视频放到学校服务器/对象存储后把主页中的视频地址替换为外链。

## 资料更新

- 个人照片：assets/portrait.jpg
- 招生联系：pengwan@nuaa.edu.cn
- 研究视频：视频素材/（主页展示目录中的 7 个视频）
- 发表目录：个人发表/（主页会自动生成 37 条可筛选记录，并链接到原始 PDF）
- 页面内容：index.html
- 样式：styles.css
- 交互：app.js
