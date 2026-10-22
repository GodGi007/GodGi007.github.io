/**
 * นักแปลนอนน้อย (Thai Mod Collection) — Main Interactive Logic
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
  const searchInput = document.getElementById("mod-search-input");
  const filterPills = document.querySelectorAll(".filter-pill");
  const modalOverlay = document.getElementById("mod-detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  let activeCategory = "all";
  let searchQuery = "";

  // Helper to generate Mod Card HTML
  function createModCard(mod) {
    const downloadBtns = [];
    if (mod.downloads?.nexus) {
      downloadBtns.push(`
        <a href="${mod.downloads.nexus}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
          ⬇ NexusMods
        </a>
      `);
    }
    if (mod.downloads?.mediafire) {
      downloadBtns.push(`
        <a href="${mod.downloads.mediafire}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
          📦 MediaFire
        </a>
      `);
    }

    return `
      <article class="mod-card" data-id="${mod.id}">
        <div class="mc-thumb">
          <img src="${mod.cover}" alt="${mod.title}" loading="lazy">
          <div class="mc-badges-overlay">
            <span class="mc-badge-ver">${mod.version}</span>
            <span class="brand-badge">${mod.status}</span>
          </div>
        </div>
        <div class="mc-body">
          <p class="mc-game-name">${mod.game}</p>
          <h3 class="mc-mod-title">${mod.title}</h3>
          <p class="mc-desc-text">${mod.shortDesc}</p>
          <div class="mc-tag-list">
            ${mod.tags.map(t => `<span class="mc-tag-item">#${t}</span>`).join("")}
          </div>
          <div class="mc-footer-actions">
            <button type="button" class="btn btn-secondary btn-sm open-detail-btn" data-id="${mod.id}">
              ℹ วิธีติดตั้ง & รายละเอียด
            </button>
            ${downloadBtns[0] || ""}
          </div>
        </div>
      </article>
    `;
  }

  // Render Mods in mods.html
  function renderMods() {
    if (!modsGrid) return;

    const filtered = modsData.filter(mod => {
      const matchCategory = activeCategory === "all" || mod.category === activeCategory || mod.tags.some(t => t.toLowerCase() === activeCategory.toLowerCase());
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
          <p style="color: var(--text-secondary);">ลองพิมพ์คำค้นหาใหม่ หรือเลือกหมวดหมู่อื่นดูนะครับ</p>
        </div>
      `;
      return;
    }

    let cardsHtml = filtered.map(createModCard).join("");
    // Add Coming Soon card
    cardsHtml += `
      <article class="mod-card card-coming-soon">
        <div>
          <div class="cs-icon">⏳</div>
          <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Mod ตัวต่อไป</h4>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.25rem;">กำลังแปลและทดสอบระบบอยู่...<br>มีเกมที่อยากให้แปล? ทักบอกที่เพจได้เลย</p>
          <a href="https://www.facebook.com/profile.php?id=61592087018204&locale=th_TH" target="_blank" rel="noopener" class="btn btn-facebook btn-sm">
            📘 เสนอเกมที่อยากให้แปล
          </a>
        </div>
      </article>
    `;

    modsGrid.innerHTML = cardsHtml;
    attachDetailListeners();
  }

  // Render Recent Mods in index.html (top 3)
  function renderRecentMods() {
    if (!recentModsGrid) return;
    const recent = modsData.slice(0, 3);
    recentModsGrid.innerHTML = recent.map(createModCard).join("");
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
    document.getElementById("modal-status").textContent = mod.status;

    // Highlights
    const hlContainer = document.getElementById("modal-highlights-list");
    if (hlContainer) {
      hlContainer.innerHTML = mod.highlights.map(h => `<li>${h}</li>`).join("");
    }

    // Install steps
    const stepsContainer = document.getElementById("modal-steps-list");
    if (stepsContainer) {
      stepsContainer.innerHTML = mod.installGuide.map(s => `<li>${s}</li>`).join("");
    }

    // Download buttons
    const actionsContainer = document.getElementById("modal-actions");
    if (actionsContainer) {
      let btnsHtml = "";
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
      btnsHtml += `
        <a href="https://www.facebook.com/profile.php?id=61592087018204&locale=th_TH" target="_blank" rel="noopener" class="btn btn-facebook">
          💬 แจ้งปัญหา / ติดต่อผู้แปล
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

  // Category Filter Pills
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
});
