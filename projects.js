/**
 * 成功代表專案 (Projects) 資料集與篩選/搜尋邏輯
 * 楊皓程 HC Yang 個人官方網站 (hc.csv.tw)
 */

const PROJECTS_DATA = [
  // 1. 企業系統維護 (日月知識)
  {
    id: "aak",
    category: "enterprise",
    categoryName: "企業系統維護",
    badgeClass: "badge-consult",
    subBadge: "資訊顧問服務",
    title: "日月知識",
    target: "專注於企業網站設計、客製化系統開發維護與全方位資訊顧問之專業服務平台",
    desc: "結合多年 PHP / Laravel 全端系統開發、雲端伺服器維運與品牌數位行銷實務經驗，為企業與組織提供從形象網站設計、客製化商業資訊系統開發、長期技術維運到數位轉型資訊顧問的一站式解決方案。",
    highlights: [
      "<strong>客製化網站與系統開發：</strong>依企業工作流量身打造高擴充性之 Web 系統、後台管理與 API 整合。",
      "<strong>長期穩定系統維護：</strong>涵蓋雲端主機架構規劃、資安更新、效能調校與資料庫備份維運。",
      "<strong>專業資訊顧問服務：</strong>協助企業評估數位工具導入、軟硬體架構整合與技術轉型策略。"
    ],
    techStack: ["網站設計", "系統開發維護", "資訊顧問", "PHP / Laravel", "企業數位轉型"],
    url: "https://aak.com.tw/",
    urlDisplay: "https://aak.com.tw/",
    buttonText: "前往日月知識網站",
    isExternal: true
  },

  // 2. IoT平台 (CUMI IoT、Pureten)
  {
    id: "cumi-iot",
    category: "iot",
    categoryName: "IoT平台",
    badgeClass: "badge-gov",
    subBadge: "IoT 雲端管理平台",
    title: "CUMI IoT 平台",
    target: "專為大專院校、中小學與公家機關打造的智慧聯網監控與設備管理平台",
    desc: "整合校園與機關場域內的各類環境感測器、電力監控與智慧控制設備。透過高可靠度的 MQTT 通訊架構與雲端後台，提供即時數據視覺化儀表板、設備狀態追蹤、異常告警通報與排程自動化管理，大幅提升公部門與校園場域的智慧化維運效率。",
    highlights: [
      "<strong>物聯網雙向架構：</strong>支援多類微控制器與感測模組透過 MQTT / HTTP 安全上雲。",
      "<strong>機構級權限控管：</strong>以 Laravel 建構多層級單位、場域與設備讀寫權限管理。",
      "<strong>即時告警與自動化：</strong>可自訂感測閾值觸發即時通知與遠端繼電器排程控制。"
    ],
    techStack: ["物聯網架構開發", "PHP / Laravel", "MQTT 雙向通訊", "即時監控儀表板", "設備權限管理"],
    url: "https://iot.cumi.co/",
    urlDisplay: "https://iot.cumi.co/",
    buttonText: "前往 CUMI IoT 平台",
    isExternal: true
  },
  {
    id: "pureten",
    category: "iot",
    categoryName: "IoT平台",
    badgeClass: "badge-global",
    subBadge: "跨國商用智慧水務",
    title: "Pureten 智慧水表平台",
    target: "專為菲律賓連鎖加水站體系設計的跨國商用物聯網水表監控與營運管理系統",
    desc: "針對海外加水站連鎖商業模式量身設計，透過物聯網智慧水表硬體即時回傳各站點出水量、水質數據與設備運作狀態。結合雲端帳務統計、濾心壽命預警、遠端設備控制與多據點營運報表，協助海外業主實現全自動化的數位水務連鎖經營。",
    highlights: [
      "<strong>跨國高可靠連線：</strong>因應海外網路環境設計斷線續傳與流量校正機制。",
      "<strong>智慧水務與耗材預警：</strong>自動累計各站點出水量，精準推算濾心更換週期與維護排程。",
      "<strong>連鎖多據點營運後台：</strong>整合分店營收對帳、設備健康度監控與角色權限管理。"
    ],
    techStack: ["智慧水表 IoT 架構", "PHP / Laravel", "跨國雲端部署", "商用多據點管理", "自動計費與預警"],
    url: "https://pureten.co/",
    urlDisplay: "https://pureten.co/",
    buttonText: "前往 Pureten 平台",
    isExternal: true
  },

  // 3. 品牌形象網站 (中華文化經貿生技交流協會、菜脯埕)
  {
    id: "cctbda",
    category: "branding",
    categoryName: "品牌形象網站",
    badgeClass: "badge-assoc",
    subBadge: "協會官方數位門戶",
    title: "中華文化經貿生技交流協會",
    target: "融合文化底蘊、經貿合作與生技產業交流之協會官方網站與數位形象行銷案例",
    desc: "為中華文化經貿生技交流協會量身規劃與建置官方數位平台，透過專業大器的視覺形象設計、會務活動紀實、跨領域產業資訊發佈與 SEO 內容佈局，全面強化協會對外公信力與國際交流品牌形象。",
    highlights: [
      "<strong>組織形象數位重塑：</strong>結合文化、經貿與生技三大核心元素，打造兼具現代感與公信力的視覺體驗。",
      "<strong>會務與活動資訊整合：</strong>提供清晰的協會宗旨、組織架構、最新會務動態與跨界交流成果展示。",
      "<strong>全裝置 RWD 與 SEO 優化：</strong>支援手機與桌機流暢瀏覽，強化搜尋引擎關鍵字能見度與形象傳播。"
    ],
    techStack: ["形象行銷企劃", "協會官網開發", "RWD 響應式設計", "內容管理架構", "SEO 品牌曝光"],
    url: "https://cctbda.com/",
    urlDisplay: "https://cctbda.com/",
    buttonText: "前往協會官方網站",
    isExternal: true
  },
  {
    id: "tshaipoo",
    category: "branding",
    categoryName: "品牌形象網站",
    badgeClass: "badge-brand",
    subBadge: "自家農產品數位行銷",
    title: "菜脯埕",
    target: "結合在地溫度與數位行銷，推廣家裡傳統農產品的故事性品牌經營實戰案例",
    desc: "從自家農產品出發，透過品牌視覺重塑、動人的在地故事敘事與電子商務網站建置，將傳統日曬菜脯轉化為具備文化溫度與高附加價值的現代伴手禮與料理精品。也是於大專院校分享「自創者的品牌經營」與「電子商務給我的啟示」之核心代表案例。",
    highlights: [
      "<strong>故事性品牌定位：</strong>挖掘家族農產工藝與土地記憶，賦予傳統農產品鮮明的品牌靈魂。",
      "<strong>數位行銷與電商轉型：</strong>結合內容行銷、搜尋引擎優化（SEO）與直購電商體驗，開拓年輕客群。",
      "<strong>產學分享實戰教材：</strong>將真實品牌從零到一的經營甘苦，轉化為逢甲大學等校講座的實務案例。"
    ],
    techStack: ["故事性品牌經營", "農產品數位轉型", "電子商務行銷", "自創品牌定位", "內容敘事與視覺企劃"],
    url: "https://tshaipoo.com/",
    urlDisplay: "https://tshaipoo.com/",
    buttonText: "前往菜脯埕品牌網站",
    isExternal: true
  },

  // 4. 軟體開發 (皮紋採集軟體、瀏覽器外掛)
  {
    id: "dermatoglyphics",
    category: "software",
    categoryName: "軟體開發",
    badgeClass: "badge-desktop",
    subBadge: "生物特徵與影像採樣",
    title: "精首先天智能皮紋採集系統",
    target: "結合 FM220U 光學指紋感應器之高精度指紋與皮紋數位化採樣分析軟體",
    desc: "專為專業先天智能皮紋檢測機構設計的桌面端數據採集與檔案管理系統。軟體整合 Startek FM220U 高解析度光學指紋感測設備，具備精準的手指中心點定位、清晰度即時檢測、十指紋路結構化建檔、加密儲存與受測者資料庫管理，提供完整穩定的實體檢測作業流程。",
    highlights: [
      "<strong>高解析光學設備整合：</strong>無縫驅動 Startek FM220U 指紋機，確保紋路影像清晰不失真。",
      "<strong>完整採集與建檔工作流：</strong>涵蓋受測者個人基本資料、十指多角度採樣檢視與資料庫匯出。",
      "<strong>教學與安裝資源配套：</strong>提供完整驅動安裝檔、主程式安裝包與 5 部實機操作影片指引。"
    ],
    techStack: ["Desktop Application", "FM220U 驅動整合", "皮紋影像辨識採集", "客戶資料庫管理", "Windows 系統軟體"],
    url: "software/fp/index.html",
    urlDisplay: "https://hc.csv.tw/software/fp/",
    buttonText: "前往皮紋採集系統下載頁",
    isExternal: false
  },
  {
    id: "gmail-notes",
    category: "software",
    categoryName: "軟體開發",
    badgeClass: "badge-ext",
    subBadge: "生產力與信件備註工具",
    title: "Gmail Notes",
    target: "專為 Gmail 打造的高效信件備註與資訊標記瀏覽器擴充套件（Browser Extension）",
    desc: "解決大量商務與專案信件往來時的上下文記憶痛點，讓使用者能直接在 Gmail 介面中針對個別郵件快速新增、編輯與檢視私人備註與摘要標籤。無縫融入原生信箱操作體驗，大幅提升日常郵件管理與專案追蹤效率。",
    highlights: [
      "<strong>原生級 Gmail DOM 整合：</strong>直覺嵌入信件列表與內頁，操作流暢不干擾既有介面。",
      "<strong>即時備註與標籤檢索：</strong>一眼識別重要客戶來信背景、待辦事項與專案進度。",
      "<strong>輕量化與隱私優先：</strong>極速載入架構，專為重度郵件工作者打造的高效工具。"
    ],
    techStack: ["Browser Extension", "Gmail 介面整合", "信件備註管理", "生產力工具開發", "輕量化前端架構"],
    url: "https://gmail-notes.csv.tw/",
    urlDisplay: "https://gmail-notes.csv.tw/",
    buttonText: "前往 Gmail Notes 網站",
    isExternal: true
  }
];

// 專案篩選與搜尋狀態（預設選 IoT 平台）
let currentProjectCategory = "iot";
let currentProjectSearch = "";

document.addEventListener("DOMContentLoaded", () => {
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

  // 檢查 URL 參數中的 category
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("category");
  if (catParam) {
    currentProjectCategory = catParam;
  }

  renderProjectCategoryCounts();
  setupProjectEventListeners();
  renderProjects();
});

function renderProjectCategoryCounts() {
  const counts = {
    all: PROJECTS_DATA.length,
    enterprise: 0,
    iot: 0,
    branding: 0,
    software: 0
  };

  PROJECTS_DATA.forEach(p => {
    if (counts[p.category] !== undefined) {
      counts[p.category]++;
    }
  });

  for (const [key, val] of Object.entries(counts)) {
    const el = document.getElementById(`count-proj-${key}`);
    if (el) el.textContent = val;
  }
}

function setupProjectEventListeners() {
  const searchInput = document.getElementById("projectSearch");
  const clearBtn = document.getElementById("clearProjectSearch");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentProjectSearch = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = currentProjectSearch.length > 0 ? "block" : "none";
      }
      renderProjects();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentProjectSearch = "";
      clearBtn.style.display = "none";
      searchInput.focus();
      renderProjects();
    });
  }

  const pillsContainer = document.getElementById("projectCategoryPills");
  if (pillsContainer) {
    // 根據初始 currentProjectCategory 設定 active
    pillsContainer.querySelectorAll(".pill-btn").forEach(btn => {
      btn.classList.toggle("active", (btn.dataset.category || "all") === currentProjectCategory);
    });

    pillsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;

      pillsContainer.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentProjectCategory = btn.dataset.category || "all";
      renderProjects();
    });
  }
}

function renderProjects() {
  const gridEl = document.getElementById("projectsGrid");
  const emptyEl = document.getElementById("noProjectResults");
  if (!gridEl) return;

  const query = currentProjectSearch.trim().toLowerCase();

  const filtered = PROJECTS_DATA.filter(item => {
    const matchesCat = currentProjectCategory === "all" || item.category === currentProjectCategory;
    const matchesSearch = !query ||
      item.title.toLowerCase().includes(query) ||
      item.target.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.techStack.some(t => t.toLowerCase().includes(query)) ||
      item.categoryName.toLowerCase().includes(query);

    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    gridEl.innerHTML = "";
    if (emptyEl) emptyEl.style.display = "block";
    return;
  }

  if (emptyEl) emptyEl.style.display = "none";

  gridEl.innerHTML = filtered.map(item => {
    const targetAttr = item.isExternal ? 'target="_blank" rel="noopener"' : '';
    const extIcon = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    `;

    return `
      <article class="project-showcase-card project-single-row-card" id="${escapeHtml(item.id)}" data-category="${escapeHtml(item.category)}">
        <div class="project-card-top">
          <div class="project-badges">
            <span class="proj-badge ${escapeHtml(item.badgeClass)}">${escapeHtml(item.categoryName)}</span>
            <span class="proj-badge badge-tech">${escapeHtml(item.subBadge)}</span>
          </div>
          <h2 class="project-name">${escapeHtml(item.title)}</h2>
          <p class="project-target">${escapeHtml(item.target)}</p>
          <p class="project-description">${escapeHtml(item.desc)}</p>
          <ul class="project-arch-list">
            ${item.highlights.map(h => `<li>${h}</li>`).join("")}
          </ul>
          <div class="project-tech-stack">
            ${item.techStack.map(t => `<span>${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>
        <div class="project-card-bottom">
          <span class="project-url-text">${escapeHtml(item.urlDisplay)}</span>
          <a href="${escapeHtml(item.url)}" ${targetAttr} class="btn btn-primary btn-project-visit">
            <span>${escapeHtml(item.buttonText)}</span>
            ${extIcon}
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function resetProjectFilters() {
  currentProjectCategory = "iot";
  currentProjectSearch = "";

  const searchInput = document.getElementById("projectSearch");
  const clearBtn = document.getElementById("clearProjectSearch");
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.style.display = "none";

  const pillsContainer = document.getElementById("projectCategoryPills");
  if (pillsContainer) {
    pillsContainer.querySelectorAll(".pill-btn").forEach(btn => {
      btn.classList.toggle("active", (btn.dataset.category || "all") === "iot");
    });
  }

  renderProjects();
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
