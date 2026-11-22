/**
 * นักแปลนอนน้อย (Thai Mod Collection) — Main Interactive Logic
 * รองรับการแสดงผลเปอร์เซ็นต์ความคืบหน้า (Progress Bar) และสถานะการแปล
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // 2. Mobile Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const isExpanded = navMenu.classList.contains("open");
      hamburger.setAttribute("aria-expanded", isExpanded);
    });

    // Close menu when clicking links
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. Mod Data Rendering & Modal System
  const modsData = window.MODS_DATA || [];

  // Elements
  const modsGrid = document.getElementById("mods-grid");
  const recentModsGrid = document.getElementById("recent-mods-grid");
  const roadmapGrid = document.getElementById("roadmap-cards-grid");
  const searchInput = document.getElementById("mod-search-input");
  const filterPills = document.querySelectorAll(".filter-pill");
  const modalOverlay = document.getElementById("mod-detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  let activeCategory = "all";
  let searchQuery = "";

  // Helper to generate Mod Card HTML
  function createModCard(mod) {
    // 1. Badge by status
    let statusBadge = "";
    if (mod.statusCode === "completed") {
      statusBadge = `<span class="brand-badge badge-status-completed">✓ 100% เสร็จสมบูรณ์</span>`;
    } else if (mod.statusCode === "in_progress") {
      statusBadge = `<span class="brand-badge badge-status-wip">🔥 กำลังแปล ${mod.progress}%</span>`;
    } else {
      statusBadge = `<span class="brand-badge badge-status-upcoming">⏳ รอตัวเกมมา</span>`;
    }

    // 2. Progress Box
    let progressBoxHtml = "";
    if (mod.statusCode === "completed") {
      progressBoxHtml = `
        <div class="mc-progress-box">
          <div class="mc-progress-header">
            <span class="mc-progress-title">⚡ สถานะ:</span>
            <span class="mc-progress-pct neon-emerald">100% พร้อมเล่น</span>
          </div>
          <div class="mc-progress-bar-track">
            <div class="mc-progress-bar-fill completed" style="width: 100%"></div>
          </div>
        </div>
      `;
    } else if (mod.statusCode === "in_progress") {
      progressBoxHtml = `
        <div class="mc-progress-box">
          <div class="mc-progress-header">
            <span class="mc-progress-title">🔥 ความคืบหน้า:</span>
            <span class="mc-progress-pct neon-cyan">${mod.progress}%</span>
          </div>
          <div class="mc-progress-bar-track">
            <div class="mc-progress-bar-fill in-progress" style="width: ${mod.progress}%"></div>
          </div>
          <p class="mc-progress-note">${mod.statusNote || 'กำลังดำเนินการแปล'}</p>
        </div>
      `;
    } else {
      progressBoxHtml = `
        <div class="mc-progress-box">
          <div class="mc-progress-header">
            <span class="mc-progress-title">⏳ สถานะโปรเจกต์:</span>
            <span class="mc-progress-pct" style="color: #fbbf24;">รอตัวเกมมา</span>
          </div>
          <div class="mc-progress-bar-track">
            <div class="mc-progress-bar-fill upcoming" style="width: 5%"></div>
          </div>
          <p class="mc-progress-note">${mod.statusNote || 'เตรียมตัวแปลเมื่อเกมวางจำหน่าย'}</p>
        </div>
      `;
    }

    // 3. Action buttons
    const actionBtns = [];
    if (mod.statusCode === "completed") {
      actionBtns.push(`
        <button type="button" class="btn btn-secondary btn-sm open-detail-btn" data-id="${mod.id}">
          ℹ วิธีติดตั้ง & รายละเอียด
        </button>
      `);
      if (mod.downloads?.nexus) {
        actionBtns.push(`
          <a href="${mod.downloads.nexus}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            ⬇ NexusMods
          </a>
        `);
      } else if (mod.downloads?.mediafire) {
        actionBtns.push(`
          <a href="${mod.downloads.mediafire}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
            📦 MediaFire
          </a>
        `);
      }
    } else {
      // In progress or upcoming
      actionBtns.push(`
        <button type="button" class="btn btn-primary btn-sm open-detail-btn" data-id="${mod.id}">
          ℹ ดูรายละเอียดโปรเจกต์
        </button>
      `);
      actionBtns.push(`
        <a href="https://www.facebook.com/profile.php?id=61592087018204&locale=th_TH" target="_blank" rel="noopener" class="btn btn-facebook btn-sm">
          📘 ติดตามในเพจ
        </a>
      `);
    }

    return `
      <article class="mod-card" data-id="${mod.id}">
        <div class="mc-thumb">
          <img src="${mod.cover}" alt="${mod.title}" loading="lazy">
          <div class="mc-badges-overlay">
            <span class="mc-badge-ver">${mod.version}</span>
            ${statusBadge}
          </div>
        </div>
        <div class="mc-body">
          <p class="mc-game-name">${mod.game}</p>
          <h3 class="mc-mod-title">${mod.title}</h3>
          <p class="mc-desc-text">${mod.shortDesc}</p>
          
          ${progressBoxHtml}

          <div class="mc-tag-list">
            ${mod.tags.map(t => `<span class="mc-tag-item">#${t}</span>`).join("")}
          </div>
          <div class="mc-footer-actions">
            ${actionBtns.join("")}
          </div>
        </div>
      </article>
    `;
  }

  // Render Mods in mods.html
  function renderMods() {
    if (!modsGrid) return;

    const filtered = modsData.filter(mod => {
      // Category / Status Filter
      let matchCategory = false;
      if (activeCategory === "all") {
        matchCategory = true;
      } else if (activeCategory === "completed") {
        matchCategory = mod.statusCode === "completed";
      } else if (activeCategory === "in_progress") {
        matchCategory = mod.statusCode === "in_progress";
      } else if (activeCategory === "upcoming") {
        matchCategory = mod.statusCode === "upcoming";
      } else {
        matchCategory = mod.category === activeCategory || 
          mod.tags.some(t => t.toLowerCase() === activeCategory.toLowerCase());
      }

      // Search Query
      const matchSearch = !searchQuery || 
        mod.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      modsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍 ไม่พบ Mod ที่ค้นหา</p>
          <p style="color: var(--text-secondary);">ลองพิมพ์คำค้นหาใหม่ หรือเลือกตัวกรองหมวดหมู่อื่นดูนะครับ</p>
        </div>
      `;
      return;
    }

    let cardsHtml = filtered.map(createModCard).join("");
    // Add Suggest a Game Card
    cardsHtml += `
      <article class="mod-card card-coming-soon">
        <div>
          <div class="cs-icon">💬</div>
          <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">มีเกมที่อยากให้แปล?</h4>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.25rem;">เสนอชื่อเกมที่อยากให้มีม็อดภาษาไทยได้เลย<br>เราคอยอ่านทุกความคิดเห็นครับ</p>
          <a href="https://www.facebook.com/profile.php?id=61592087018204&locale=th_TH" target="_blank" rel="noopener" class="btn btn-facebook btn-sm">
            📘 ทักเสนอเกมที่เพจ Facebook
          </a>
        </div>
      </article>
    `;

    modsGrid.innerHTML = cardsHtml;
    attachDetailListeners();
  }

  // Render Completed / Featured Mods on index.html
  function renderRecentMods() {
    if (!recentModsGrid) return;
    const completedMods = modsData.filter(m => m.statusCode === "completed").slice(0, 3);
    recentModsGrid.innerHTML = completedMods.map(createModCard).join("");
    attachDetailListeners();
  }

  // Render Roadmap (In Progress & Upcoming) on index.html
  function renderRoadmapSection() {
    if (!roadmapGrid) return;
    const roadmapItems = modsData.filter(m => m.statusCode === "in_progress" || m.statusCode === "upcoming");
    
    roadmapGrid.innerHTML = roadmapItems.map(mod => {
      const isWip = mod.statusCode === "in_progress";
      const badge = isWip 
        ? `<span class="brand-badge badge-status-wip">🔥 กำลังแปล ${mod.progress}%</span>`
        : `<span class="brand-badge badge-status-upcoming">⏳ รอตัวเกมมา</span>`;

      const progressFill = isWip
        ? `<div class="mc-progress-bar-fill in-progress" style="width: ${mod.progress}%"></div>`
        : `<div class="mc-progress-bar-fill upcoming" style="width: 5%"></div>`;

      return `
        <div class="roadmap-card-item">
          <div class="roadmap-thumb-wrap">
            <img src="${mod.cover}" alt="${mod.title}" loading="lazy">
            <div class="roadmap-badge-overlay">${badge}</div>
          </div>
          <p class="roadmap-game-name">${mod.game}</p>
          <h3 class="roadmap-item-title">${mod.title}</h3>
          <p class="roadmap-item-desc">${mod.shortDesc}</p>
          
          <div class="mc-progress-box" style="margin-top: auto; margin-bottom: 1.25rem;">
            <div class="mc-progress-header">
              <span class="mc-progress-title">${isWip ? '🔥 ความคืบหน้า:' : '⏳ สถานะ:'}</span>
              <span class="mc-progress-pct ${isWip ? 'neon-cyan' : ''}" style="${!isWip ? 'color:#fbbf24' : ''}">${isWip ? mod.progress + '%' : 'รอเกมออก'}</span>
            </div>
            <div class="mc-progress-bar-track">
              ${progressFill}
            </div>
            <p class="mc-progress-note">${mod.statusNote}</p>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-secondary btn-sm open-detail-btn" data-id="${mod.id}">
              ℹ รายละเอียด
            </button>
            <a href="https://www.facebook.com/profile.php?id=61592087018204&locale=th_TH" target="_blank" rel="noopener" class="btn btn-facebook btn-sm">
              📘 ติดตามอัปเดต
            </a>
          </div>
        </div>
      `;
    }).join("");

    attachDetailListeners();
  }

  // Detail Modal Logic
  function openModDetail(modId) {
    const mod = modsData.find(m => m.id === modId);
    if (!mod || !modalOverlay) return;

    document.getElementById("modal-game").textContent = mod.game;
    document.getElementById("modal-title").textContent = mod.title;
    document.getElementById("modal-desc").textContent = mod.shortDesc;
    document.getElementById("modal-cover").src = mod.cover;
    document.getElementById("modal-cover").alt = mod.title;
    document.getElementById("modal-version").textContent = mod.version;
    document.getElementById("modal-date").textContent = mod.date;
    
    const statusElem = document.getElementById("modal-status");
    if (statusElem) {
      if (mod.statusCode === "completed") {
        statusElem.className = "neon-emerald";
        statusElem.textContent = "เสร็จสมบูรณ์ 100%";
      } else if (mod.statusCode === "in_progress") {
        statusElem.className = "neon-cyan";
        statusElem.textContent = `กำลังแปล (${mod.progress}%)`;
      } else {
        statusElem.className = "";
        statusElem.style.color = "#fbbf24";
        statusElem.textContent = "รอตัวเกมมา";
      }
    }

    // Modal Progress Bar
    const modalProgContainer = document.getElementById("modal-progress-container");
    if (modalProgContainer) {
      if (mod.statusCode === "completed") {
        modalProgContainer.innerHTML = `
          <div class="mc-progress-box" style="margin-bottom: 1.5rem;">
            <div class="mc-progress-header">
              <span class="mc-progress-title">⚡ ความคืบหน้าการแปล:</span>
              <span class="mc-progress-pct neon-emerald">100% เสร็จสมบูรณ์</span>
            </div>
            <div class="mc-progress-bar-track">
              <div class="mc-progress-bar-fill completed" style="width: 100%"></div>
            </div>
            <p class="mc-progress-note">${mod.statusNote}</p>
          </div>
        `;
      } else if (mod.statusCode === "in_progress") {
        modalProgContainer.innerHTML = `
          <div class="mc-progress-box" style="margin-bottom: 1.5rem;">
            <div class="mc-progress-header">
              <span class="mc-progress-title">🔥 ความคืบหน้าการแปล:</span>
              <span class="mc-progress-pct neon-cyan">${mod.progress}%</span>
            </div>
            <div class="mc-progress-bar-track">
              <div class="mc-progress-bar-fill in-progress" style="width: ${mod.progress}%"></div>
            </div>
            <p class="mc-progress-note">${mod.statusNote}</p>
          </div>
        `;
      } else {
        modalProgContainer.innerHTML = `
          <div class="mc-progress-box" style="margin-bottom: 1.5rem;">
            <div class="mc-progress-header">
              <span class="mc-progress-title">⏳ สถานะโปรเจกต์:</span>
              <span class="mc-progress-pct" style="color: #fbbf24;">รอตัวเกมมา</span>
            </div>
            <div class="mc-progress-bar-track">
              <div class="mc-progress-bar-fill upcoming" style="width: 5%"></div>
            </div>
            <p class="mc-progress-note">${mod.statusNote}</p>
          </div>
        `;
      }
    }

    // Highlights
    const hlContainer = document.getElementById("modal-highlights-list");
    if (hlContainer) {
      hlContainer.innerHTML = mod.highlights.map(h => `<li>${h}</li>`).join("");
    }

    // Install steps / Development note
    const stepsTitle = document.getElementById("modal-steps-title");
    if (stepsTitle) {
      stepsTitle.textContent = mod.statusCode === "completed" ? "📥 วิธีการติดตั้ง" : "📌 แผนงานและการพัฒนา";
    }

    const stepsContainer = document.getElementById("modal-steps-list");
    if (stepsContainer) {
      stepsContainer.innerHTML = mod.installGuide.map(s => `<li>${s}</li>`).join("");
    }

    // Download / Action buttons
    const actionsContainer = document.getElementById("modal-actions");
    if (actionsContainer) {
      let btnsHtml = "";
      if (mod.statusCode === "completed") {
        if (mod.downloads?.nexus) {
          btnsHtml += `
            <a href="${mod.downloads.nexus}" target="_blank" rel="noopener" class="btn btn-primary">
              ⬇ ดาวน์โหลดผ่าน NexusMods
            </a>
          `;
        }
        if (mod.downloads?.mediafire) {
          btnsHtml += `
            <a href="${mod.downloads.mediafire}" target="_blank" rel="noopener" class="btn btn-secondary">
              📦 ลิงก์สำรอง (MediaFire)
            </a>
          `;
        }
      } else {
        btnsHtml += `
          <a href="https://www.facebook.com/profile.php?id=61592087018204&locale=th_TH" target="_blank" rel="noopener" class="btn btn-primary">
            📘 ติดตามข่าวสารการปล่อยม็อดที่เพจ Facebook
          </a>
        `;
      }

      btnsHtml += `
        <a href="https://www.facebook.com/profile.php?id=61592087018204&locale=th_TH" target="_blank" rel="noopener" class="btn btn-facebook">
          💬 พูดคุย / แจ้งข้อเสนอแนะ
        </a>
      `;
      actionsContainer.innerHTML = btnsHtml;
    }

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function attachDetailListeners() {
    document.querySelectorAll(".open-detail-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        openModDetail(id);
      });
    });
  }

  // Modal Close Events
  if (modalOverlay) {
    modalCloseBtn?.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
        closeModal();
      }
    });
  }

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderMods();
    });
  }

  // Category & Status Filter Pills
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-category") || "all";
      renderMods();
    });
  });

  // Initial runs
  renderMods();
  renderRecentMods();
  renderRoadmapSection();
});
