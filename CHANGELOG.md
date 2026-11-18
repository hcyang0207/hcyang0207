# 網站更新紀錄 (CHANGELOG)

本檔案記錄 **楊皓程 (HC Yang) 個人官方網站**（[https://hc.csv.tw/](https://hc.csv.tw/)）每次版本更新與內容異動。
> **維護規範**：每次網站內容、樣式、結構或 SEO 設定更新時，皆須於本檔案最上方新增一筆更新紀錄。

---

## [Update] - 2026-11-18
### 代表專案篩選順序調整（IoT 平台置首並設為預設）
- **代表專案頁面分類標籤調整**（`projects.html` & `projects.js`）：
  - 將「**IoT平台**」移至分類選單最前面，並設為**預設選取狀態**（載入時優先呈現 CUMI IoT 平台與 Pureten 智慧水表平台）。
  - 將「**全部專案**」移至分類選單最後面。
  - 目前標籤排列順序：
    1. **IoT平台**（預設選取，2 個）
    2. **企業系統維護**（1 個）
    3. **品牌形象網站**（2 個）
    4. **軟體開發**（2 個）
    5. **全部專案**（7 個）
- **更新 CSS 版本時間戳記**：全站更新為 `?v=20261118160225`。

---

## [Update] - 2026-11-18
### 代表專案結構優化（四大領域分類、搜尋與單欄直列呈現）與 CSS 快取控制
- **代表專案頁面呈現與檢索升級**（`projects.html` & `projects.js`）：
  - 將原本多欄（一行三個/多欄並排）改為**單欄直列呈現（一行呈現一個專案，`max-width: 960px`）**，大幅縮小視覺壓迫感與瀏覽長度。
  - 導入比照歷年經歷頁面之**即時搜尋與分類篩選器**（`projects.js`）：
    1. **全部專案**（7 個）
    2. **企業系統維護**（日月知識）
    3. **IoT平台**（CUMI IoT 平台、Pureten 智慧水表平台）
    4. **品牌形象網站**（中華文化經貿生技交流協會、菜脯埕）
    5. **軟體開發**（精首先天智能皮紋採集系統、Gmail Notes 瀏覽器外掛）
  - 支援關鍵字即時檢索（名稱、目標客群、技術標籤與內文）、即時統計 Pill 徽章與查無結果友善提示。
- **全站 CSS 引用快取控制（Cache Busting）**：
  - 於全站所有 HTML 頁面（`index.html`、`projects.html`、`publications.html`、`experience.html`、`software/fp/index.html`）之 `style.css` 引用路徑後方加入版本時間戳記（`?v=20261118155749`），避免瀏覽器快取舊樣式。
- **樣式表擴充**（`style.css`）：
  - 新增 `.projects-single-row-grid` 與 `.project-single-row-card` 單列排版規則。

---

## [Update] - 2026-11-18
### 新增精首先天智能皮紋採集系統 (Dermatoglyphics) 與網頁排版優化
- **新增專用軟體資源頁面與排版現代化**（`software/fp/index.html`）：
  - 將舊版簡易 HTML 與 PHP timestamp 標籤全面重構為全站統一之現代化設計系統（Navy / Blue 主視覺與 RWD 響應式佈局）。
  - 加入「官方程式與驅動下載」區塊：提供 **Dermatoglyphics Ver. 1.20 主程式安裝檔**（EXE）與 **Startek FM220U 指紋機驅動程式**（ZIP）卡片式一鍵下載。
  - 導入全套 HTML5 內嵌式「全套影音安裝與操作指引」清單：
    1. `p0.mp4`：FM220U 指紋機驅動程式 安裝教學
    2. `p1.mp4`：Dermatoglyphics皮紋採集系統 安裝/移除教學
    3. `p2.mp4`：Dermatoglyphics皮紋採集系統 設定/用戶教學
    4. `p3.mp4`：Dermatoglyphics皮紋採集系統 採集教學
    5. `p4.mp4`：Dermatoglyphics皮紋採集系統 Windows 11 惡意應用程式阻擋解決方法
  - 增設 Windows 11 SmartScreen 安全提示卡與新分頁全螢幕播放按鈕，大幅優化使用者操作體驗。
- **代表專案頁面更新**（`projects.html`）：
  - 於代表專案展示網格中新增「精首先天智能皮紋採集系統」專案卡片，詳列系統特點、光學硬體驅動整合與技術標籤，並連結至 `software/fp/index.html`。
  - 更新 Meta 標題、說明與 Schema.org JSON-LD 結構化資料清單。
- **首頁專案摘要更新**（`index.html`）：
  - 於「代表專案」精選區塊加入「皮紋採集系統」卡片與快速跳轉連結。
  - 更新 Person JSON-LD 中的 `knowsAbout` 與 `sameAs` 關聯。
- **全站樣式與 SEO 索引支援**：
  - `style.css`：新增 `.badge-desktop` 桌面軟體專屬標籤色彩樣式。
  - `sitemap.xml`：新增 `https://hc.csv.tw/software/fp/` 索引項目。
  - `README.md`：補充軟體專頁目錄路徑說明。

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
