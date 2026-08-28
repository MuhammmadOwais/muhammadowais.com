/* ==========================================================================
   MINIMALIST EXECUTIVE RENDER ENGINE - MUHAMMAD OWAIS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderApp();
});

function renderApp() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    ${renderHeader()}
    ${renderMobileDrawer()}
    ${renderHero()}
    ${renderLiveVentures()}
    ${renderEngineeringProjects()}
    ${renderSkills()}
    ${renderExperience()}
    ${renderEducation()}
    ${renderFooter()}
  `;

  attachFilterListeners();
  attachDrawerListeners();
}

function renderHeader() {
  return `
    <header class="header">
      <div class="container nav-wrap">
        <a href="#hero" class="brand">
          <img src="nav-logo.png" alt="Muhammad Owais Logo" class="brand-logo-full" />
        </a>

        <!-- Black Hamburger Icon Button -->
        <button class="hamburger-btn" id="hamburgerBtn" aria-label="Open Navigation Menu">
          <i class="fa-solid fa-bars"></i>
        </button>

        <ul class="nav-links">
          <li><a href="#hero" class="nav-link">Overview</a></li>
          <li><a href="#ventures" class="nav-link">Ventures</a></li>
          <li><a href="#engineering" class="nav-link">Engineering</a></li>
          <li><a href="#skills" class="nav-link">Capabilities</a></li>
          <li><a href="#experience" class="nav-link">Experience</a></li>
        </ul>

        <a href="#contact" class="nav-btn desktop-contact-btn">Contact</a>
      </div>
    </header>
  `;
}

function renderMobileDrawer() {
  return `
    <!-- Right Side Sliding Mobile Navigation Drawer -->
    <div class="drawer-overlay" id="drawerOverlay"></div>
    
    <aside class="mobile-drawer" id="mobileDrawer">
      <div class="drawer-header">
        <div class="drawer-title"></div>
        <button class="drawer-close-btn" id="drawerCloseBtn" aria-label="Close Menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <ul class="drawer-menu">
        <li><a href="#hero" class="drawer-link">Overview <i class="fa-solid fa-arrow-right-long"></i></a></li>
        <li><a href="#ventures" class="drawer-link">Ventures <i class="fa-solid fa-arrow-right-long"></i></a></li>
        <li><a href="#engineering" class="drawer-link">Engineering <i class="fa-solid fa-arrow-right-long"></i></a></li>
        <li><a href="#skills" class="drawer-link">Capabilities <i class="fa-solid fa-arrow-right-long"></i></a></li>
        <li><a href="#experience" class="drawer-link">Experience <i class="fa-solid fa-arrow-right-long"></i></a></li>
        <li>
          <a href="#contact" class="drawer-link" style="margin-top: 10px;">
            <span class="accent">Contact Founder</span>
            <i class="fa-solid fa-envelope" style="color: var(--brand-maroon);"></i>
          </a>
        </li>
      </ul>
    </aside>
  `;
}

function renderHero() {
  const { name, github, linkedin } = PORTFOLIO_DATA.profile;

  return `
    <section id="hero" class="hero">
      <div class="container">
        <div class="hero-role-pill">
          <i class="fa-solid fa-crown" style="font-size: 0.7rem;"></i> Founder & Systems Architect
        </div>
        
        <h1 class="hero-name">${name}</h1>
        
        <p class="hero-humanized-paragraph">
          Hello, I am <strong>Muhammad Owais</strong>, founder of <a href="https://aivisty.com/" target="_blank" rel="noopener" class="inline-link">Aivisty.com</a>, an AI-powered global news and technology media agency. Beyond leading digital media, I specialize as a Senior Web and Mobile Application Developer, Automation Systems Engineer, Digital Business Strategist, and Cybersecurity Researcher.
        </p>

        <div class="hero-compact-actions">
          <a href="${github}" target="_blank" rel="noopener" class="btn-compact btn-compact-maroon">
            <i class="fa-brands fa-github"></i> GitHub Repos
          </a>
          <a href="${linkedin}" target="_blank" rel="noopener" class="btn-compact btn-compact-outline">
            <i class="fa-brands fa-linkedin"></i> LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  `;
}

/* ULTRA COMPACT LOW HEIGHT VENTURES SECTION */
function renderLiveVentures() {
  return `
    <section id="ventures" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title"><span class="title-bar"></span> Live Commercial Platforms</h2>
        </div>

        <div class="grid-2">
          ${PORTFOLIO_DATA.liveVentures.map(v => `
            <div class="card-compact">
              <div class="card-compact-main">
                <div class="card-compact-header">
                  <span class="card-compact-title">${v.name}</span>
                  <span class="card-compact-tag">${v.badge}</span>
                </div>
                <div class="card-compact-desc">${v.subtitle} • ${v.desc}</div>
              </div>

              <a href="${v.url}" target="_blank" rel="noopener" class="card-compact-link" title="Open Platform">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ULTRA COMPACT LOW HEIGHT REPOSITORIES SECTION */
function renderEngineeringProjects() {
  return `
    <section id="engineering" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title"><span class="title-bar"></span> Engineering Repositories</h2>
        </div>

        <div class="filter-tabs">
          <button class="tab-btn active" data-filter="all">All (${PORTFOLIO_DATA.engineeringProjects.length})</button>
          <button class="tab-btn" data-filter="ai">AI & Bot</button>
          <button class="tab-btn" data-filter="mobile">Mobile</button>
          <button class="tab-btn" data-filter="fullstack">Full-Stack</button>
          <button class="tab-btn" data-filter="cyber">Cyber</button>
          <button class="tab-btn" data-filter="games">Games</button>
        </div>

        <div class="grid-2" id="projectsGrid">
          ${PORTFOLIO_DATA.engineeringProjects.map(p => `
            <div class="card-compact project-item" data-cat="${p.cat}">
              <div class="card-compact-main">
                <div class="card-compact-header">
                  <span class="card-compact-title">${p.title}</span>
                  <span class="card-compact-tag">${p.catLabel}</span>
                </div>
                <div class="card-compact-desc">${p.desc}</div>
              </div>

              <a href="${p.github}" target="_blank" rel="noopener" class="card-compact-link" title="View Source">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderSkills() {
  return `
    <section id="skills" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title"><span class="title-bar"></span> Capabilities & Expertise</h2>
        </div>

        <div class="grid-2">
          ${PORTFOLIO_DATA.skillPillars.map(sp => `
            <div class="card-compact" style="flex-direction: column; align-items: flex-start; gap: 6px;">
              <div style="font-size: 0.92rem; font-weight: 700; color: var(--brand-black);">${sp.title}</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">
                ${sp.skills.join(" • ")}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderExperience() {
  return `
    <section id="experience" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title"><span class="title-bar"></span> Experience Trajectory</h2>
        </div>

        <div class="timeline">
          ${PORTFOLIO_DATA.experiences.map(e => `
            <div class="timeline-item">
              <div class="timeline-date">${e.period}</div>
              <div>
                <div class="timeline-role">${e.role}</div>
                <div class="timeline-company">${e.company}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderEducation() {
  return `
    <section id="education" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title"><span class="title-bar"></span> Education & Distinction</h2>
        </div>

        <div class="grid-2">
          ${PORTFOLIO_DATA.education.map(ed => `
            <div class="card-compact">
              <div class="card-compact-main">
                <div class="card-compact-header">
                  <span class="card-compact-title">${ed.degree}</span>
                  <span class="card-compact-tag">${ed.period}</span>
                </div>
                <div class="card-compact-desc">${ed.institution} (${ed.detail})</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  const { email, phone, github, linkedin } = PORTFOLIO_DATA.profile;

  return `
    <footer id="contact" class="footer">
      <div class="container footer-centralized">
        <div class="footer-brand">Muhammad Owais</div>
        
        <div class="footer-links">
          <a href="mailto:${email}" class="footer-link">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
          <a href="https://wa.me/923091043809" target="_blank" rel="noopener" class="footer-link">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <a href="${linkedin}" target="_blank" rel="noopener" class="footer-link">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a href="${github}" target="_blank" rel="noopener" class="footer-link">
            <i class="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </footer>
  `;
}

function attachFilterListeners() {
  const btns = document.querySelectorAll(".tab-btn");
  const projects = document.querySelectorAll(".project-item");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projects.forEach(p => {
        if (filter === "all" || p.getAttribute("data-cat") === filter) {
          p.style.display = "flex";
        } else {
          p.style.display = "none";
        }
      });
    });
  });
}

function attachDrawerListeners() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function openDrawer() {
    mobileDrawer.classList.add("active");
    drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("active");
    drawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", drawerCloseBtn ? closeDrawer : null);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}
