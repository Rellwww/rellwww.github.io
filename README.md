# 梁鼎立个人网站 · GitHub Pages 发布教程

准备日期：2026-11-03。适用账号：**Rellwww**。目标仓库：**rellwww.github.io**。

完成本教程后，网站地址为 **[https://rellwww.github.io/](https://rellwww.github.io/)**。本包已经准备好网站文件，尚未替你创建 GitHub 仓库或开启 Pages。

## 一、发布包里有什么

这是无需安装依赖、无需编译的静态网站，包含最新的六个页面、头像、CV、五篇论文 PDF 和论文配图，保留中英文切换、明暗模式、目录和图片放大功能。首页已包含 AI for Mathematics。

已为 GitHub Pages 配好正式网址、页面标题、分享图片、人物信息、`robots.txt`、`sitemap.xml`、`.nojekyll` 和 `404.html`。网站文件约 11 MB，可以使用 GitHub 网页上传。

CV 和论文 PDF 保留当前网站版本。发布后，访问者可以下载它们，包括 CV 中原有的联系方式。

```text
仓库根目录
├── index.html                  ← 首页，必须直接位于根目录
├── assets/                     ← 图片、样式、脚本、CV 和论文 PDF
├── publications/index.html
├── experience/index.html
├── teaching/index.html
├── awards/index.html
├── projects/index.html
├── .nojekyll
├── robots.txt
├── sitemap.xml
├── 404.html
└── README.md                   ← 本教程
```

## 二、创建仓库

1. 登录 **Rellwww** 的 GitHub 账号，打开 [新建仓库](https://github.com/new)。
2. Owner 选择 `Rellwww`。
3. Repository name 填 **`rellwww.github.io`**。
4. Visibility 选择 **Public**，打开 **Add README**，点击 **Create repository**。

如果这个账号已有同名仓库，使用现有仓库；本教程后续操作均在它的根目录完成。GitHub 的个人主页地址由账号名决定；这个发布包按 Rellwww 的个人主页配置。[GitHub 个人网站说明](https://docs.github.com/en/pages/quickstart)

## 三、上传解压后的文件

1. 解压 `Dingli-Liang-GitHub-Pages-2026-11-03.zip`，进入解压目录，确认能直接看到 `index.html` 和 `assets`。
2. Mac 上按 **Command + Shift + .** 显示隐藏文件，确保能看到 `.nojekyll`。
3. 在 GitHub 仓库里选择 **Add file → Upload files**。
4. 将解压目录**里面的全部文件和文件夹**拖入上传区域。不要直接上传 ZIP，也不要把外层文件夹整体作为一层目录上传。
5. 等上传完成，提交说明可写 `Publish academic homepage`。提交到 `main`；如果界面要求创建分支和 Pull Request，就合并到 `main` 后继续。
6. 提交后检查：仓库首页文件列表应直接包含 `index.html`、`assets` 和 `.nojekyll`。

若 `.nojekyll` 没上传成功，可用 **Add file → Create new file** 新建同名文件，内容写 `# Static website`，提交到 `main`。本包文件数少于 100，单文件均小于 25 MiB，适合一次网页上传。[GitHub 上传说明](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

## 四、打开 GitHub Pages

进入仓库 **Settings → Pages**，在 **Build and deployment** 下设置：

| 设置项 | 选择 |
| --- | --- |
| Source | **Deploy from a branch** |
| Branch | **main** |
| Folder | **/ (root)** |

点击 **Save**。这份静态网站不需要手写 GitHub Actions 工作流，也不需要挑选 Jekyll 主题。[GitHub 发布来源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

打开仓库 **Actions**，等 `pages build and deployment` 显示成功，再回 **Settings → Pages** 查看发布地址。更改发布可能需要最多约 10 分钟。[GitHub 发布时间说明](https://docs.github.com/en/pages/quickstart)

## 五、确认别人能访问

用浏览器的无痕窗口打开 [https://rellwww.github.io/](https://rellwww.github.io/)，也可以把地址发给朋友试开。检查以下内容：

- 首页能打开，头像和姓名正常。
- 三横线目录能进入论文、经历、教学、奖项、项目页；直接打开子页面也正常。
- 中英文切换、明暗模式正常。
- CV 链接及论文 PDF 能打开，论文配图能放大。

`github.io` 地址会自动使用 HTTPS；如果 Pages 设置中有 **Enforce HTTPS**，保持开启。[GitHub HTTPS 说明](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## 六、让 Google 发现网站

网站可以公开访问后，再做以下步骤：

1. 打开 [Google Search Console](https://search.google.com/search-console/welcome)，登录你的 Google 账号。
2. 添加资源时选择 **URL prefix（网址前缀）**，填写 `https://rellwww.github.io/`。GitHub 提供的子域名适合采用这个选项。
3. 选择 **HTML file（HTML 文件）** 验证方法，下载 Google 提供的 `google…html` 文件。
4. 把该文件原样上传到 GitHub 仓库根目录，与 `index.html` 同级，等待 Pages 更新。不要重命名或编辑验证文件。
5. 先用无痕窗口确认 Google 指定的验证文件网址能打开，再回 Search Console 点 **Verify（验证）**。验证成功后保留此文件。[Google 所有权验证说明](https://support.google.com/webmasters/answer/9008080?hl=en)
6. 在 **Sitemaps（站点地图）** 中提交 `sitemap.xml`。完整地址是 [https://rellwww.github.io/sitemap.xml](https://rellwww.github.io/sitemap.xml)。本包已列出六个主要页面。[Google 网站地图说明](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
7. 在顶部 **URL inspection（网址检查）** 输入首页地址，选择 **Request indexing（请求编入索引）**，之后可查看收录状态。

Google 抓取可能需要几天到几周；提交申请不保证收录或搜索排名。无需反复提交同一网址。[Google 抓取说明](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)

发布后，也可以把正式网址填到你的 Google Scholar、GitHub 和 LinkedIn 个人资料中，方便访客找到。

## 七、以后如何更新

- 修改对应文件后，再上传到同一个仓库的 `main` 分支；GitHub Pages 会按设置自动更新。[发布更新机制](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- 首页：`index.html`；其余栏目：对应目录里的 `index.html`。
- 英文正文与 `data-zh` 中的中文翻译要一起修改。英文模式显示英文名及中文名，中文模式只显示中文名。
- CV：`assets/DingliLiang-CV.pdf`。替换后，也应更新页面里 CV 链接的 `?v=` 版本值，避免浏览器沿用旧文件。
- 论文 PDF：`assets/papers/`；论文配图：`assets/figures/`。
- 新增页面时，把新网址补到 `sitemap.xml`。
- 如果之后换 GitHub 账号、换成项目子路径或绑定自有域名，需要同步修改每页的正式地址、分享地址、首页人物信息、`robots.txt` 和 `sitemap.xml`。

## 常见问题

| 现象 | 先检查 |
| --- | --- |
| 首页 404 | 仓库名是否为 `rellwww.github.io`；Pages 是否选 `main / (root)`；部署是否完成 |
| 显示 README 而不是主页 | `index.html` 是否直接位于仓库根目录，而不是多套了一层文件夹 |
| 图片或 PDF 打不开 | `assets/` 是否完整上传，文件名大小写是否保留 |
| Pages 没有 main 可选 | 先完成一次文件提交，再刷新设置页 |
| 更新没有出现 | 查看 Actions 是否成功，再强制刷新；Mac 常用 Command + Shift + R |
| Google 搜不到 | 先确认公开访问，再查看 Search Console 的验证、抓取和索引状态 |

本包按静态根站点发布，所有资源均在包内。无须把原来的 Sites 项目目录、部署归档或 `.git` 文件夹上传到 GitHub。
