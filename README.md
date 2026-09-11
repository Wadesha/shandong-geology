https://wadesha.github.io/shandong-geology/

# 山东区域地质知识库 · Shandong Regional Geology Knowledge Base

纯文本静态知识库。内容取自 OneDrive 工作区中的《山东省区域地质志》原书文本、
基础地质与全国地质公开资料汇编、山东专题开放获取论文全文、九部欧美地质调查笔记
经典（中英逐段对照），以及矿产 / 地震 / 工程地质专题。

A pure-text static knowledge base, rebuilt from the OneDrive source workspace.
Plain HTML, no images, no external dependencies, no build step at runtime.

## 站点结构 / Site map

| 分区 | Section | 内容 |
|---|---|---|
| 区域地质志 | Regional Geology | 《山东省区域地质志》601 页原书文本，按五篇三十章拆分，保留原书页码 |
| 志书导览 | Reader's Guide | 志书结构要点整理（明确标注：整理文本，非原书逐字） |
| 基础汇编 | Compendium | 山东基础地质公开资料原文摘录，逐条注明来源 |
| 学术论文 | Research Papers | 山东专题 OA 论文全文，按十二个专题分章 |
| 中国地质 | Geology of China | 全国性地质文献全文，山东的全国构造背景 |
| 网页全文 | Public Full Texts | 政府与公共机构公开网页全文，含世界地质公园专章 |
| 矿产外编 | Minerals · Seismic · Engineering | 胶东金矿、蒙阴金刚石、昌乐蓝宝石、郯城地震、能源工程 |
| 调查笔记 | Field Notes | Powell / Darwin / Muir / Geikie / Lyell / Humboldt 等九部经典，中英逐段对照 |
| 笔记导读 | Field Notes Guide | 九部经典的作者档案、关键发现与体例写法要点 |

首页随机展示一篇，可一键切换，并提供全站检索入口。

## 内容来源与版权 / Sources and rights

- 《山东省区域地质志》（山东省地质矿产局，1991）文本为该书的 OCR 校正 / 精校结果；
  精度有限之处以 `[?]` 标记，无法逐格复原的表格以说明代替，不臆造数值。
- 汇编 / 全文篇收录的是公开发布的网络资料原文摘录，逐条注明来源与链接，版权归原发布机构与作者。
- 学术篇 / 中国地质收录的是开放获取（OA）论文全文文字，仅去除参考文献与致谢。
- 调查笔记各书均为公共领域（Project Gutenberg 等）或开放获取文本。
- 本库仅供个人学习与研究参考，不作商业用途；需要精确数据的场合请核对原始出版物。

## 构建与维护 / Build and maintenance

本仓库**只包含站点内容**。抽取与生成管线、源文件哈希台账、变更记录均保存在
OneDrive 工作区的 `_build/` 目录中，与内容完全分离：

```
_build/norm.py      源 HTML → 结构化内容块（唯一内容源归一化）
_build/sitegen.py   分组、切分、渲染、索引、台账
_build/sync.py      扫描源 → 比对哈希 → 重建 → 提交推送
_build/ledger/      SOURCES.tsv（源清单与哈希）/ MANIFEST.json / CHANGELOG.md
```

工作流：OneDrive 源文件更新 → 运行 `sync.py` → 自动检测变更、重建受影响文章、
记录台账并推送到 `main`。台账中保留每个源文件的 SHA-256，用于跟进内容变化。

## 说明 / Notes

- 全站为简体中文，必要处附英文（页面标题、导航、双语段落）。
- 无任何 emoji，无图片，无第三方脚本、字体或统计代码。
- GitHub Pages 由 `main` 分支根目录发布；`.nojekyll` 已就位。
