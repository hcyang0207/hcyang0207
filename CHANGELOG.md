# 網站更新紀錄 (CHANGELOG)

本檔案記錄 **楊皓程 (HC Yang) 個人官方網站**（[https://hc.csv.tw/](https://hc.csv.tw/)）每次版本更新與內容異動。
> **維護規範**：每次網站內容、樣式、結構或 SEO 設定更新時，皆須於本檔案最上方新增一筆更新紀錄。

---

## [Update] - 2026-11-18
### 新增「經濟部工業局人才基地計畫」經歷（歷年經歷累計 49 場次）
- **歷年經歷資料庫與時間軸擴充**（`experience.html` & `lectures.js`）：
  - 於 2022 年新增經濟部工業局大型產學研實務計畫經歷：
    * **計畫名稱**：經濟部工業局「產學研工程人才實務能力發展基地計畫」
    * **題目項目**：**以雲端電功率插座為基礎之AIoT自適應恆溫控制系統**
    * **分類標籤**：`aiot`（物聯網／專題指導・累積 16 場）
    * **關鍵技術**：工業局基地計畫、雲端電功率插座、AIoT、自適應控制、恆溫控制系統
    * **詳細說明**：研發以雲端電功率監控智慧插座為核心之 AIoT 自適應恆溫控制系統，整合即時電力感測、自適應溫度反饋演算法與雲端自動化控制架構。
  - 同步更新靜態預渲染 HTML 與即時篩選統計計數器（全站經歷場次升級至 **49 場**）。
- **首頁亮點與經歷統計同步**（`index.html`）：
  - 歷年經歷按鈕、總覽數值與摘要卡片全面同步為 49 場經歷。
- **快取版本號更新**：`style.css?v=20261118170220` 與 `lectures.js?v=20261118170220`。

---

## [Update] - 2026-11-18
### 新增優雅原生效能圖片燈箱（Lightbox）效果
- **輕量化高質感燈箱功能**（`lectures.js` & `style.css`）：
  - 為榮譽獲獎獎狀與全站圖片支援原生效能燈箱（無需載入肥大外部套件）。
  - 具備半透明毛玻璃背景（`backdrop-filter: blur(8px)`）、滑順淡入放大動畫、ESC 快捷鍵關閉、點擊背景遮罩關閉及獨立關閉按鈕。
  - 點擊 [publications.html](publications.html) 上的教育部獎狀或亞洲大學獎狀縮圖，即可立即於頁面中央無縫彈出高畫質燈箱大圖與標題說明，大幅提升瀏覽體驗。
- **快取版本號更新**：全站更新為 `style.css?v=20261118164616` 與 `lectures.js?v=20261118164616`。

---

## [Update] - 2026-11-18
### 新增「教育部顧問室 TA 教案績優團隊獎」與亞洲大學「林創辦紀念獎」實績
- **論文與專利頁面榮譽獲獎清單擴充**（`publications.html`）：
  - 將「競賽獲獎」升級為「**榮譽與獲獎・Honors & Awards**」，完整收錄三大代表性榮譽：
    1. **2012**：**教育部顧問室**「強化臺灣特色之人文藝術及社會科學基礎應用人才培育計畫」之「TA 教案績優團隊」甄選競賽「**績優團隊獎**」（〈媽祖宮的籤詩〉教案，臺顧計特(四)字第 101080 號，2012/07/21）。
    2. **2010**：**教育部 2010 大學校院嵌入式系統(ES)設計競賽** 創意應用組「**佳作**」（具遠端控制功能之電子門鎖系統，台顧字第 0990107809 號，2010/07/06）。
    3. **2010**：**亞洲大學** 資訊工程學系學士班 98 學年度畢業班「**林創辦紀念獎**」（亞洲畢獎字第 09800009 號，校長張紘炬頒發，2010/06/12）。
  - **適當縮圖與高畫質圖片處理**：
    - `award_2012_moe_ta.jpg`（~93 KB）與卡片縮圖 `award_2012_moe_ta_thumb.jpg`（~16 KB）。
    - `award_2010_lin_memorial.jpg`（~75 KB）與卡片縮圖 `award_2010_lin_memorial_thumb.jpg`（~14 KB）。
    - 均提供點擊開啟清晰原檔功能。
- **快取版本號更新**：`style.css?v=20261118164246`。

---

## [Update] - 2026-11-18
### 新增「教育部 2010 大學校院嵌入式系統(ES)設計競賽」獲獎實績與獎狀圖片
- **論文與專利頁面升級收錄獲獎專區**（`publications.html`）：
  - 新增「**競賽獲獎・Honors & Awards**」專區，收錄：
    - **作品名稱**：具遠端控制功能之電子門鎖系統 (The Electronic Door-Lock System)
    - **競賽名稱**：教育部 2010 大學校院嵌入式系統(ES)設計競賽（2010 Embedded System Design Contest）創意應用組「佳作」
    - **作者群**：梁議中、楊皓程、姚柏齡（亞洲大學資訊工程學系）
    - **發文字號**：教育部台顧字第 0990107809 號（2010/07/06）
  - **圖片輕量化與縮圖呈現**：將獎狀經過高品質壓縮為輕量檢視圖（`images/award_2010_embedded_system.jpg`，約 95KB）與精巧預覽縮圖（`award_2010_embedded_system_thumb.jpg`，約 14KB），兼顧清晰度與極致載入速度，並支援點擊檢視。
- **首頁亮點卡片同步**（`index.html`）：更新為「國際期刊論文 (SCI / EI)、專利與教育部獲獎」。
- **樣式與快取更新**：`style.css` 新增 `.badge-award`、`.award-card` 等樣式，全站版本號更新為 `?v=20261118163941`。

---

## [Update] - 2026-11-18
### 更新 Pureten 專案亮點與個人軟硬體全棧整合職能
- **Pureten 專案實績與職能描述深化**（`projects.html` & `projects.js` & `index.html`）：
  - 詳實補充 **Pureten 智慧水表專案**中，由作者**全自主一手包辦「電路原理圖設計」、「PCB Layout 洗板佈線」、「實體硬體打樣焊接與成品製作」，一路貫通至微控制器韌體開發、斷線續傳、流量脈衝計量，再到後端 PHP / Laravel 雲端多據點監控營運管理系統**之軟硬體一條龍自主研發與跨國商業落地過程。
  - 將專案副標升級為「`軟硬體整合・跨國智慧水務`」，技術標籤同步擴增「硬體電路設計、PCB Layout、實體成品製作、微控制器韌體、跨國多據點雲端架構」。
- **個人核心專長與職能領域擴充**（`index.html` & `experience.html`）：
  - 首頁核心領域更新為「`PHP & Laravel / IoT 物聯網軟硬體整合 / 電路設計與 Layout / Node-RED / 品牌行銷`」。
  - 歷年經歷頁面專長卡片更新為「`智慧物聯網 (AIoT)・電路設計與軟硬整合`」，彰顯軟體兼備硬體獨立研發的稀有核心競爭力。
- **快取版本戳記更新**：`style.css?v=20261118163435`。

---

## [Update] - 2026-11-18
### 集中管理字體與樣式引用（移除各頁肥大內嵌，統一由 style.css 載入）
- **外掛字體集中化**：
  - 將各頁 HTML 中重複的 Google Fonts `<link>` 與 `<link rel="preconnect">` 標籤全數抽除。
  - 統一於 `style.css` 開頭以 `@import url('...')` 集中引入 `Urbanist` 與 `Noto Sans TC`，讓 HTML 結構維持極簡乾淨。
- **軟體專頁樣式整併**：
  - 將原本暫存在 `software/fp/index.html` 內超過 210 行的肥大 `<style>` 區塊全數抽出並整併至全站共用的 `style.css`，實現真正的關注點分離（Separation of Concerns）與樣式共用。
- **更新快取時間戳記**：`style.css?v=20261118161928`。

---

## [Update] - 2026-11-18
### 大幅瘦身全站標題字重（由 600 下調至 400 Regular / 500 Medium）
- **標題顯著瘦身與透氣排版優化**（`style.css`）：
  - 將全站標題類別（`h1` ~ `h6`、`.hero-title`、`.page-hero-title`、`.section-title`、`.project-name`）字重由原本偏重的 `600` 大幅調降為標準輕盈的 **`400 (Regular)`**。
  - 將次級卡片標題（`.domain-title`、`.pub-category-header h3`、`.lecture-title`）由 `600` 調降為 **`500 (Medium)`**。
  - 將字距（`letter-spacing`）由原本緊貼的負字距微調擴展至 `0.01em`，呈現細緻修長的高級現代極簡美學。
- **更新全站快取版本號**：`style.css?v=20261118161613`。

---

## [Update] - 2026-11-18
### 全站字體瘦身（引入 Urbanist 現代幾何無襯線）、標題字重輕量化與徹底防快取配置
- **視覺字體全面升級與瘦身（告別笨重粗黑感）**：
  - 引入 Google Fonts 現代修長幾何無襯線字體 **`Urbanist`**（300, 400, 500, 600）搭配輕量細緻的 **`Noto Sans TC`**（300, 400, 500, 600）。
  - **標題字重全面調降**：將全站 H1、H2、H3、Hero Title、Section Title、專案卡片名稱等由原本粗重的 `800/700` 全面調降為細緻輕盈的 `600/500`（Medium），大幅改善視覺壓迫感與笨重感，呈現如同 Apple/科技新創般的洗鍊呼吸空間。
- **徹底解決快取問題（No-Cache 機制）**：
  - 於全站所有 HTML 頁面（`index.html`、`projects.html`、`publications.html`、`experience.html`、`software/fp/index.html`）的 `<head>` 區塊標準配置防快取標籤：
    - `<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />`
    - `<meta http-equiv="Pragma" content="no-cache" />`
    - `<meta http-equiv="Expires" content="0" />`
  - 全站 CSS 與 JavaScript（`style.css`、`projects.js`、`lectures.js`）全面追加最新版本號戳記（`?v=20261118161125`），確保使用者重新整理立即載入最新設計。

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
