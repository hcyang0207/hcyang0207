# 網站更新紀錄 (CHANGELOG)

本檔案記錄 **楊皓程 (HC Yang) 個人官方網站**（[https://hc.csv.tw/](https://hc.csv.tw/)）每次版本更新與內容異動。
> **維護規範**：每次網站內容、樣式、結構或 SEO 設定更新時，皆須於本檔案最上方新增一筆更新紀錄。

---

## [Init] - 2026-11-18
### 初始版本建置（Orphan Branch 初始化基準）
- **品牌識別與視覺**：
  - 導入極簡科技感 `HC` 雙色動態光軌與物聯網節點 Logo（`logo.svg`、`favicon.svg`）。
  - 自訂網域設定：`hc.csv.tw`（`CNAME`）。
- **多頁式 SEO 架構拆頁**：
  - `index.html`（首頁總覽）：個人核心技術摘要（擅長 PHP 專案、精通 Laravel、熟悉物聯網 IoT 完整架構開發）、6 個代表專案精簡卡片、學術論文與專利摘要卡、五大專長與 48 場經歷摘要卡、LINE 與 Email 聯絡管道。
  - `projects.html`（成功代表專案）：完整收錄 6 個代表專案架構與實績：
    1. **CUMI IoT 平台**（學校與公家機關專用）：`https://iot.cumi.co/`
    2. **Pureten 智慧水表平台**（菲律賓加水站體系）：`https://pureten.co/`
    3. **Gmail Notes**（瀏覽器擴充插件）：`https://gmail-notes.csv.tw/`
    4. **菜脯埕**（行銷家裡的農產品、故事性品牌經營案例）：`https://tshaipoo.com/`
    5. **中華文化經貿生技交流協會**（網站作品、形象行銷案例）：`https://cctbda.com/`
    6. **日月知識**（網站設計、系統開發維護、資訊顧問）：`https://aak.com.tw/`
  - `publications.html`（論文與專利）：收錄 ORCID（`0000-0003-0505-0499`）、3 篇國際期刊論文（SCI / EI / SSRN）、3 篇國際研討會論文（IEEE ICSSE / IEEE IS3C / ISC）與 1 項中華民國新型專利（`M594232` 省電觸發式發報裝置）。
  - `experience.html`（歷年經歷）：完整收錄五大核心專長領域與 2016–2024 共 48 場大專院校授課、專題指導與講座分享靜態時間軸。
  - `sitemap.xml` & `robots.txt`：完整搜尋引擎索引配置與 Schema.org JSON-LD 結構化資料。
