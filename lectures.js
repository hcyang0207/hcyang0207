const LECTURES_DATA = [
  {
    date: "2024/05/13",
    title: "我的斜槓人生 - 職場經驗分享",
    org: "亞洲大學",
    category: "career",
    url: null,
    tags: ["斜槓人生", "職涯經驗", "大專講座"],
    desc: "受邀至亞洲大學進行專題分享，暢談跨域工程師、自創品牌與斜槓職場的真實心路歷程與實戰策略。"
  },
  {
    date: "2023/05/22",
    title: "智慧聯網應用課程 - Node-Red 應用 - 4",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "物聯網應用", "自動化流程"],
    desc: "Node-RED 進階應用與複雜事件觸發，整合多元資料源與條件判斷邏輯。"
  },
  {
    date: "2023/05/22",
    title: "我的AI生活 - 職場經驗分享",
    org: "經驗分享",
    category: "career",
    url: null,
    tags: ["AI工具", "生產力", "職涯經驗"],
    desc: "分享生成式 AI 浪潮下，如何善用 AI 工具重塑個人工作流、加速研發效率並拓展多元職涯。"
  },
  {
    date: "2023/05/16",
    title: "智慧聯網應用課程 - Node-Red 應用 - 3",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "API串接", "數據流處理"],
    desc: "Node-RED 第三階段實戰，教授外部 API 資料對接、Webhook 監聽與即時資料清洗。"
  },
  {
    date: "2023/05/09",
    title: "智慧聯網應用課程 - Node-Red 應用 - 2",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "節點實作", "Dashboard"],
    desc: "深入常用節點語法解析、Function 節點撰寫以及資料格式轉換實務。"
  },
  {
    date: "2023/05/02",
    title: "智慧聯網應用課程 - Node-Red 應用 - 1",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "視覺化程式", "入門上手"],
    desc: "Node-RED 架構解析、視覺化流程編輯器核心思維與第一個工作流程設計。"
  },
  {
    date: "2023/03/11",
    title: "Sonoff Basic R2 Arduino IDE + MQTT 教學",
    org: "專題指導",
    category: "aiot",
    url: null,
    tags: ["Sonoff R2", "Arduino IDE", "MQTT", "智慧插座"],
    desc: "帶領學員使用 Arduino IDE 燒錄 Sonoff Basic R2，實作 MQTT 雲端遙控智慧開關與電路安全機制。"
  },
  {
    date: "2022/12/30",
    title: "以雲端電功率插座為基礎之AIoT自適應恆溫控制系統",
    org: "工業局計畫",
    category: "aiot",
    url: null,
    tags: ["工業局基地計畫", "雲端電功率插座", "AIoT", "自適應控制", "恆溫控制系統"],
    desc: "參與經濟部工業局「產學研工程人才實務能力發展基地計畫」，研發以雲端電功率監控智慧插座為核心之 AIoT 自適應恆溫控制系統，整合即時電力感測、自適應溫度反饋演算法與雲端自動化控制架構。"
  },
  {
    date: "2022/12/29",
    title: "智慧聯網應用課程 - Node-Red 應用 - 6",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "整合成果", "期末實務"],
    desc: "智慧聯網系統綜合實作成果驗證，包含系統除錯、日誌記錄與穩定性測試。"
  },
  {
    date: "2022/12/27",
    title: "智慧聯網應用課程 - Node-Red 應用 - 5",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "雲端部署", "物聯網實作"],
    desc: "將 Node-RED 系統串聯雲端資料庫與外部警報推播服務（LINE Notify / Telegram）。"
  },
  {
    date: "2022/12/25",
    title: "智慧聯網應用課程 - Node-Red 應用 - 4",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "Dashboard", "儀表板"],
    desc: "UI Dashboard 儀表板架設實作，圖形化即時數據圖表與互動按鈕設計。"
  },
  {
    date: "2022/12/22",
    title: "智慧聯網應用課程 - Node-Red 應用 - 3",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "MQTT", "感測數據"],
    desc: "結合 MQTT Broker 即時監聽與處理前端硬體感測器上傳的數據封包。"
  },
  {
    date: "2022/12/20",
    title: "智慧聯網應用課程 - Node-Red 應用 - 2",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "進階控制", "條件路由"],
    desc: "Switch 路由分支節點、Change 節點與全域變數 Context 的正確使用技巧。"
  },
  {
    date: "2022/12/18",
    title: "智慧聯網應用課程 - Node-Red 應用 - 1",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "核心基礎", "flow構建"],
    desc: "從零開始搭建 Node-RED 運作環境，掌握流程編輯核心觀念。"
  },
  {
    date: "2022/12/16",
    title: "自創者的品牌經營",
    org: "逢甲大學",
    category: "career",
    url: null,
    tags: ["逢甲大學", "品牌經營", "自創品牌", "創業實戰"],
    desc: "於逢甲大學分享個人創業者如何從零啟動品牌、定位受眾、創造高黏著度與市場差異化價值。"
  },
  {
    date: "2022/12/15",
    title: "智慧聯網應用課程 - Node-Red 介紹、安裝與設定 - 2",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "伺服器環境", "安全設定"],
    desc: "伺服器權限管理、節點安裝套件管理（Node-RED nodes library）與設定調優。"
  },
  {
    date: "2022/12/13",
    title: "智慧聯網應用課程 - Node-Red 介紹、安裝與設定 - 1",
    org: "協作課程",
    category: "nodered",
    url: null,
    tags: ["Node-RED", "環境建置", "安裝教學"],
    desc: "Node-RED 原理簡介與跨平台安裝教學，建立標準化智慧聯網實作基石。"
  },
  {
    date: "2022/11/14",
    title: "智慧聯網應用課程 - 3",
    org: "協作課程",
    category: "aiot",
    url: null,
    tags: ["物聯網應用", "感測整合", "實作練習"],
    desc: "感測器硬體訊號擷取、ADC類比轉數位與校準計算方法實習。"
  },
  {
    date: "2022/11/11",
    title: "我的斜槓人生 - 職場經驗分享",
    org: "逢甲大學",
    category: "career",
    url: null,
    tags: ["逢甲大學", "斜槓人生", "職涯經驗"],
    desc: "逢甲大學學生熱烈迴響之職涯分享，深入拆解多元斜槓身分如何在現實市場中創造正向循環。"
  },
  {
    date: "2022/10/31",
    title: "智慧聯網應用課程 - 2",
    org: "協作課程",
    category: "aiot",
    url: null,
    tags: ["物聯網通訊", "數位訊號", "控制模組"],
    desc: "繼電器開關控制、GPIO 輸出入邏輯與硬體防護電路原理。"
  },
  {
    date: "2022/10/25",
    title: "我的斜槓人生 - 職場經驗分享",
    org: "逢甲大學",
    category: "career",
    url: null,
    tags: ["逢甲大學", "斜槓人生", "職場思維"],
    desc: "剖析資通專業人員的發展路徑，如何在專職之外發展顧問與產品自主性。"
  },
  {
    date: "2022/10/24",
    title: "智慧聯網應用課程 - 1",
    org: "協作課程",
    category: "aiot",
    url: null,
    tags: ["物聯網入門", "體系架構", "協作專題"],
    desc: "物聯網三層架構（感知層、網路層、應用層）全貌與實作演練指引。"
  },
  {
    date: "2022/10/14",
    title: "資訊產業趨勢與專案分享",
    org: "逢甲大學",
    category: "career",
    url: null,
    tags: ["逢甲大學", "產業趨勢", "專案管理", "資訊業"],
    desc: "分享真實軟硬體專案由需求分析、規格制定到驗收落地的全流程實務經驗。"
  },
  {
    date: "2022/10/06",
    title: "Ubuntu 安裝 Nginx + PHP-FPM + MySQL + phpMyAdmin",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["Ubuntu", "Nginx", "LEMP", "MySQL", "PHP-FPM"],
    desc: "完整的 Linux 雲端伺服器 LEMP 堆疊部署指南，從零打造穩定高效的 Web 服務環境。"
  },
  {
    date: "2022/09/27",
    title: "我的斜槓人生 - 職場經驗分享",
    org: "逢甲大學",
    category: "career",
    url: null,
    tags: ["逢甲大學", "斜槓人生", "大學通識"],
    desc: "引導即將步入職場的大專學子掌握自主學習技巧、技術複利與個人品牌打造。"
  },
  {
    date: "2022/09/08",
    title: "安裝MQTT伺服器 & 測試與程式開發",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["MQTT Broker", "Mosquitto", "網路通訊", "IoT伺服器"],
    desc: "手把手建置 Mosquitto MQTT Broker，設置帳號密碼權限認證，並完成 Pub/Sub 聯網測試。"
  },
  {
    date: "2022/08/30",
    title: "Microsoft Hyper-V安裝Ubuntu虛擬機器教學",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["Hyper-V", "Ubuntu", "虛擬機器", "開發環境"],
    desc: "在 Windows 系統利用原生 Hyper-V 快速建置 Ubuntu Linux 獨立開發與測試虛擬機器。"
  },
  {
    date: "2022/04/18",
    title: "資通領域職場經驗分享",
    org: "經驗分享",
    category: "career",
    url: null,
    tags: ["資通訊", "職場分享", "工程師思維"],
    desc: "深入談論資通訊產業就業生態、工程師職場成長路徑與跨部門協作關鍵素養。"
  },
  {
    date: "2022/03/28",
    title: "智慧物聯網(AIoT)",
    org: "專題講座",
    category: "aiot",
    url: null,
    tags: ["AIoT", "智慧物聯網", "人工智慧與感測"],
    desc: "探討 AI 邊緣運算與物聯網感測架構的結合，打造具備自動決策能力的智慧場域。"
  },
  {
    date: "2022/03/25",
    title: "Python程式入門 - Part.4 (SQLite)",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["Python", "SQLite", "資料庫", "CRUD"],
    desc: "使用 Python 連結輕量級關聯資料庫 SQLite，實作資料持久化儲存與查詢。"
  },
  {
    date: "2022/03/21",
    title: "Python程式入門 - Part.3 (模組應用、存取檔案、網路連線)",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["Python", "模組應用", "檔案I/O", "Requests網路連線"],
    desc: "模組套件引入、文字與檔案存取操作，以及利用 Requests 串接網路 API 取得資料。"
  },
  {
    date: "2022/03/14",
    title: "Python程式入門 - Part.2 (迴圈、自訂變數)",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["Python", "迴圈結構", "函式設計"],
    desc: "for / while 迴圈運作流程、自訂函式結構與資料結構（List / Dict）基礎操作。"
  },
  {
    date: "2022/03/07",
    title: "Python程式入門 - Part.1 (列印、變數、運算式、判斷式)",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["Python", "基礎入門", "邏輯判斷"],
    desc: "零基礎學 Python，掌握變數型態、基礎運算符與 if-else 邏輯控制語法。"
  },
  {
    date: "2021/12/28",
    title: "物聯網雲端應用 (Adafruit.io)",
    org: "專題指導",
    category: "aiot",
    url: null,
    tags: ["Adafruit.io", "雲端IoT", "Python", "MQTT"],
    desc: "使用 Adafruit.io 雲端平台建立即時儀表板，搭配 Python MQTT 客戶端發佈與訂閱數據。"
  },
  {
    date: "2021/11/16",
    title: "專題指導 (物聯網雲端應用MQTT)",
    org: "專題指導",
    category: "aiot",
    url: null,
    tags: ["專題指導", "MQTT", "物聯網雲端"],
    desc: "大專學生畢業專題指導，針對 MQTT 通訊穩定性、斷線重連機制與封包格式優化給予輔導。"
  },
  {
    date: "2021/11/02",
    title: "專題指導 (物聯網雲端應用MQTT)",
    org: "專題指導",
    category: "aiot",
    url: null,
    tags: ["專題指導", "Heroku", "雲端部署", "MQTT"],
    desc: "指導專題小組建置物聯網伺服器，將後端服務與資料庫串接部署至雲端空間。"
  },
  {
    date: "2021/10/18",
    title: "專題指導 (物聯網雲端應用)",
    org: "專題指導",
    category: "aiot",
    url: null,
    tags: ["專題指導", "物聯網架構", "軟硬體整合"],
    desc: "協助專題題目架構審查、技術可行性評估與系統流程原型（MVP）打造。"
  },
  {
    date: "2021/10/12",
    title: "物聯網雲端應用",
    org: "技術實作",
    category: "aiot",
    url: null,
    tags: ["物聯網", "雲端平台", "通訊整合"],
    desc: "系統化建立物聯網雲端連線基礎，介紹業界常見的雲端架構與實務案例。"
  },
  {
    date: "2020/05/20",
    title: "資通領域職場經驗分享",
    org: "經驗分享",
    category: "career",
    url: null,
    tags: ["資通訊", "職涯經驗", "工程師思維"],
    desc: "從校園到業界的無縫接軌指南，分享在資通訊產業脫穎而出的關鍵技能與自學策略。"
  },
  {
    date: "2019/10/29",
    title: "TCP/IP 通訊原理與應用",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["TCP/IP", "網路通訊", "Socket", "封包原理"],
    desc: "深入底層解析 TCP/IP 握手機制、封包傳輸、Socket 程式設計與網路通訊除錯技巧。"
  },
  {
    date: "2019/04/16",
    title: "ESP8266課程資料 (智慧開關)",
    org: "技術實作",
    category: "aiot",
    url: null,
    tags: ["ESP8266", "智慧開關", "WiFi模組", "物聯網"],
    desc: "利用 ESP8266 Wi-Fi 晶片實作遠端網頁控制繼電器，打造可居家實用的智慧電源開關。"
  },
  {
    date: "2019/03/12",
    title: "智慧生活無線通知模組",
    org: "技術實作",
    category: "aiot",
    url: null,
    tags: ["無線通知", "智慧家庭", "物聯網通訊"],
    desc: "結合無線感測訊號，觸發即時推播訊息至行動裝置，落實智慧生活應用場景。"
  },
  {
    date: "2018/09/25",
    title: "Google雲端伺服器建置溫度控制物聯網系統",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["GCP", "雲端伺服器", "溫控系統", "物聯網"],
    desc: "在 GCP 上架設資料庫與後端伺服器，收集微控制器感測器溫度數值並進行警報判斷。"
  },
  {
    date: "2018/06/11",
    title: "ESP8266課程資料",
    org: "技術實作",
    category: "aiot",
    url: null,
    tags: ["ESP8266", "微控制器", "Arduino", "無線連網"],
    desc: "ESP8266 常用庫功能介紹、Wi-Fi 連線設定模式（STA / AP）與基本通訊實作。"
  },
  {
    date: "2018/06/04",
    title: "Golang 課程資料",
    org: "技術實作",
    category: "cloud",
    url: null,
    tags: ["Golang", "後端開發", "高效能伺服器"],
    desc: "Go 語言核心語法、Goroutine 高併發處理機制與輕量網路微服務實作。"
  },
  {
    date: "2018/05/15",
    title: "電子商務給我的啟示",
    org: "經驗分享",
    category: "career",
    url: null,
    tags: ["電子商務", "商業思維", "品牌經營"],
    desc: "以親身電商與實體品牌運營經驗出發，剖析電商流量變現、消費者信任與行銷漏斗建立。"
  },
  {
    date: "2018/05/02",
    title: "物聯網實務",
    org: "協作課程",
    category: "aiot",
    url: null,
    tags: ["物聯網實務", "硬體接線", "通訊協定"],
    desc: "物聯網感測模組實作教學，帶領學員完成軟硬體整合專案練習。"
  },
  {
    date: "2018/01/09",
    title: "物聯網實務",
    org: "協作課程",
    category: "aiot",
    url: null,
    tags: ["物聯網實務", "實作教學"],
    desc: "聚焦於智慧感知系統的基礎建立與現場除錯體驗。"
  },
  {
    date: "2016/12/13",
    title: "電子商務給我的啟示",
    org: "經驗分享",
    category: "career",
    url: null,
    tags: ["電子商務", "商業思維", "職涯啟發"],
    desc: "早期電商創業與品牌探索的心得回顧，分享在數位商業模式中的洞察與自我突破。"
  }
];

// Category metadata
const CATEGORY_MAP = {
  all: "全部經歷",
  career: "職場／斜槓／品牌",
  nodered: "Node-RED 應用",
  aiot: "物聯網／專題指導",
  cloud: "雲端／系統／Python"
};

// State
let currentCategory = "all";
let currentSearch = "";
let isTimelineExpanded = false;
const DEFAULT_COLLAPSED_COUNT = 6;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const listEl = document.getElementById("lecturesList");
  if (listEl && listEl.dataset.defaultExpanded === "true") {
    isTimelineExpanded = true;
  }

  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("category");
  if (catParam && CATEGORY_MAP[catParam]) {
    currentCategory = catParam;
    isTimelineExpanded = true;
    const pillsContainer = document.getElementById("categoryPills");
    if (pillsContainer) {
      pillsContainer.querySelectorAll(".pill-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === catParam);
      });
    }
  }

  renderMetrics();
  renderCategoryCounts();
  updateCollapseUI();
  renderLectures();
  setupEventListeners();
});

function renderMetrics() {
  const totalCountEl = document.getElementById("totalLecturesCount");
  if (totalCountEl) {
    totalCountEl.textContent = `${LECTURES_DATA.length}+`;
  }
  const headerTotalEl = document.getElementById("headerTotalCount");
  if (headerTotalEl) {
    headerTotalEl.textContent = LECTURES_DATA.length;
  }
}

function renderCategoryCounts() {
  const counts = {
    all: LECTURES_DATA.length,
    career: 0,
    nodered: 0,
    aiot: 0,
    cloud: 0
  };

  LECTURES_DATA.forEach(item => {
    if (counts[item.category] !== undefined) {
      counts[item.category]++;
    }
  });

  for (const [key, value] of Object.entries(counts)) {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = value;
  }
}

function toggleTimelineCollapse() {
  isTimelineExpanded = !isTimelineExpanded;
  updateCollapseUI();
  renderLectures();
}

function updateCollapseUI() {
  const badgeEl = document.getElementById("collapseBadge");
  const descEl = document.getElementById("collapseDesc");
  const btnTextEl = document.getElementById("toggleBtnText");
  const btnIconEl = document.getElementById("toggleBtnIcon");
  const bottomExpandEl = document.getElementById("bottomExpandArea");

  if (isTimelineExpanded) {
    if (badgeEl) {
      badgeEl.textContent = "已展開全部";
      badgeEl.classList.add("expanded");
    }
    if (descEl) {
      descEl.textContent = `目前顯示全部 ${LECTURES_DATA.length} 場歷年完整紀錄。`;
    }
    if (btnTextEl) btnTextEl.textContent = "收合歷年經歷";
    if (btnIconEl) btnIconEl.style.transform = "rotate(180deg)";
    if (bottomExpandEl) bottomExpandEl.style.display = "none";
  } else {
    if (badgeEl) {
      badgeEl.textContent = "預設收合展示";
      badgeEl.classList.remove("expanded");
    }
    if (descEl) {
      descEl.textContent = `目前顯示精選最新場次，點擊右側按鈕可展開全部 ${LECTURES_DATA.length} 場歷年紀錄。`;
    }
    if (btnTextEl) btnTextEl.textContent = `展開全部經歷 (${LECTURES_DATA.length}場)`;
    if (btnIconEl) btnIconEl.style.transform = "rotate(0deg)";
  }
}

function renderLectures() {
  const listEl = document.getElementById("lecturesList");
  const emptyEl = document.getElementById("noResultsState");
  const bottomExpandEl = document.getElementById("bottomExpandArea");
  if (!listEl) return;

  const filtered = LECTURES_DATA.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const query = currentSearch.trim().toLowerCase();
    const matchesSearch = !query || 
      item.title.toLowerCase().includes(query) ||
      (item.org && item.org.toLowerCase().includes(query)) ||
      item.date.includes(query) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(query))) ||
      (item.desc && item.desc.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = "";
    if (emptyEl) emptyEl.style.display = "block";
    if (bottomExpandEl) bottomExpandEl.style.display = "none";
    return;
  }

  if (emptyEl) emptyEl.style.display = "none";

  // If user is searching or has filtered a specific category, show all matching items
  const isFilteringOrSearching = currentSearch.trim() !== "" || currentCategory !== "all";
  const shouldLimit = !isTimelineExpanded && !isFilteringOrSearching;

  const displayList = shouldLimit ? filtered.slice(0, DEFAULT_COLLAPSED_COUNT) : filtered;

  if (bottomExpandEl) {
    if (shouldLimit && filtered.length > DEFAULT_COLLAPSED_COUNT) {
      bottomExpandEl.style.display = "block";
      const bottomBtn = bottomExpandEl.querySelector("button");
      if (bottomBtn) {
        bottomBtn.innerHTML = `展開查看其餘 ${filtered.length - DEFAULT_COLLAPSED_COUNT} 場歷年經歷 &darr;`;
      }
    } else {
      bottomExpandEl.style.display = "none";
    }
  }

  // Group items by Year
  const grouped = {};
  displayList.forEach(item => {
    const year = item.date.substring(0, 4);
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(item);
  });

  const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

  let html = "";
  sortedYears.forEach(year => {
    html += `
      <div class="timeline-year-group">
        <div class="timeline-year-badge">${year} 年</div>
        <div class="timeline-year-items">
    `;

    grouped[year].forEach(item => {
      const categoryLabel = CATEGORY_MAP[item.category] || item.category;
      
      const tagsHtml = item.tags && item.tags.length > 0
        ? `<div class="item-tags">
            ${item.tags.map(t => `<span class="tag-pill">${escapeHtml(t)}</span>`).join("")}
           </div>`
        : "";

      html += `
        <article class="lecture-card" data-category="${item.category}">
          <div class="lecture-meta">
            <span class="lecture-date">${item.date}</span>
            <span class="lecture-cat-tag cat-${item.category}">${categoryLabel}</span>
            ${item.org ? `<span class="lecture-org">${escapeHtml(item.org)}</span>` : ""}
          </div>
          <div class="lecture-main">
            <h3 class="lecture-title">${escapeHtml(item.title)}</h3>
            ${item.desc ? `<p class="lecture-desc">${escapeHtml(item.desc)}</p>` : ""}
            ${tagsHtml}
          </div>
        </article>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  listEl.innerHTML = html;
}

function setupEventListeners() {
  // Mobile Nav Toggle
  const toggleBtn = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      toggleBtn.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        toggleBtn.classList.remove("active");
      });
    });
  }

  // Search Input
  const searchInput = document.getElementById("lectureSearch");
  const clearBtn = document.getElementById("clearSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = currentSearch.length > 0 ? "block" : "none";
      }
      renderLectures();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearch = "";
      clearBtn.style.display = "none";
      searchInput.focus();
      renderLectures();
    });
  }

  // Filter Pills
  const pillsContainer = document.getElementById("categoryPills");
  if (pillsContainer) {
    pillsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;

      pillsContainer.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentCategory = btn.dataset.category || "all";
      renderLectures();
    });
  }
}

// Global shortcut function from domain cards
function filterByDomain(domainCategory) {
  currentCategory = domainCategory;
  isTimelineExpanded = true;
  updateCollapseUI();

  const pillsContainer = document.getElementById("categoryPills");
  if (pillsContainer) {
    pillsContainer.querySelectorAll(".pill-btn").forEach(btn => {
      if (btn.dataset.category === domainCategory) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Scroll smoothly to lectures section
  const el = document.getElementById("lectures");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  renderLectures();
}

function resetFilters() {
  currentCategory = "all";
  currentSearch = "";
  const searchInput = document.getElementById("lectureSearch");
  const clearBtn = document.getElementById("clearSearch");
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.style.display = "none";

  const pillsContainer = document.getElementById("categoryPills");
  if (pillsContainer) {
    pillsContainer.querySelectorAll(".pill-btn").forEach(btn => {
      if (btn.dataset.category === "all") btn.classList.add("active");
      else btn.classList.remove("active");
    });
  }

  renderLectures();
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   Global Image Lightbox (通用圖片燈箱效果)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  setupLightbox();
});

function setupLightbox() {
  const lightboxLinks = document.querySelectorAll("a[data-lightbox]");
  if (lightboxLinks.length === 0) return;

  // 建立或取得燈箱 DOM
  let overlay = document.getElementById("globalLightbox");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "globalLightbox";
    overlay.className = "lightbox-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML = `
      <div class="lightbox-container" onclick="event.stopPropagation()">
        <button class="lightbox-close" id="lightboxClose" aria-label="關閉燈箱">&times;</button>
        <img src="" alt="" class="lightbox-img" id="lightboxImg" />
        <div class="lightbox-caption" id="lightboxCaption"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    // 關閉事件
    const closeBtn = document.getElementById("lightboxClose");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeLightbox);
    }

    overlay.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeLightbox();
      }
    });
  }

  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");

  lightboxLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const imgSrc = link.getAttribute("href");
      const title = link.getAttribute("data-title") || link.getAttribute("title") || "";

      if (lightboxImg) {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = title;
      }
      if (lightboxCaption) {
        lightboxCaption.textContent = title;
        lightboxCaption.style.display = title ? "block" : "none";
      }

      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });
}

function closeLightbox() {
  const overlay = document.getElementById("globalLightbox");
  if (overlay) {
    overlay.classList.remove("active");
  }
  document.body.style.overflow = "";
}

