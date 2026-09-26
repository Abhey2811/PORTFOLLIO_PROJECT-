// ============================================================
// EDIT ME: content for each "file" in the portfolio.
// Swap in your own name, projects, skills, and links.
// ============================================================
const PANELS = {
  readme: {
    label: "README.md",
    html: `
      <p class="hero-eyebrow">// portfolio.init()</p>
      <h1 class="hero-name">ABHEY SINGH RATHORE</h1>
      <p class="hero-role">COMPUTER APPLICATION STUDENT · Python|Full-Stack Developer</p>
      <p class="hero-blurb">First-year Computer Application student building web apps and small tools that solve real problems. This site is the class project itself a portfolio styled like the editor I wrote it in. Click a file on the left to look around.</p>
      <div class="hero-actions">
        <button class="btn btn-primary" data-file="project1">View projects</button>
        <a class="btn btn-ghost" href="#" target="_blank" rel="noopener">Download résumé</a>
      </div>
      <div class="terminal">
        <div class="terminal-line"><span class="terminal-prompt">$</span> whoami</div>
        <div class="terminal-line"><span id="terminalText"></span><span class="cursor"></span></div>
      </div>`
  },
  about: {
    label: "about.js",
    html: `
      <h2 class="panel-title">about.js</h2>
      <div class="code">
        <div class="line"><span class="kw">const</span> <span class="key">about</span> = {</div>
        <div class="line">&nbsp;&nbsp;<span class="key">name</span>: <span class="str">"ABHEY SINGH RATHORE"</span>,</div>
        <div class="line">&nbsp;&nbsp;<span class="key">basedIn</span>: <span class="str">"Shahzadpur India"</span>,</div>
        <div class="line">&nbsp;&nbsp;<span class="key">studying</span>: <span class="str">"Bachelors in Computer Application — first year"</span>,</div>
        <div class="line">&nbsp;&nbsp;<span class="key">focus</span>: [<span class="str">"web dev"</span>, <span class="str">"data structures"</span>, <span class="str">"a bit of ML"</span>],</div>
        <div class="line">&nbsp;&nbsp;<span class="key">currently</span>: <span class="str">"looking for a winter internship"</span>,</div>
        <div class="line">&nbsp;&nbsp;<span class="com">// outside of class</span></div>
        <div class="line">&nbsp;&nbsp;<span class="key">alsoDoes</span>: [<span class="str">"badminton"</span>, <span class="str">"UI sketches"</span>, <span class="str">"too much chai"</span>],</div>
        <div class="line">};</div>
      </div>`
  },
  skills: {
    label: "skills.json",
    html: `
      <h2 class="panel-title">skills.json</h2>
      <div class="skill-group">
        <p class="skill-group-label">"languages":</p>
        <div class="skill-tags"><span class="tag">JavaScript</span><span class="tag">Python</span><span class="tag">Java</span><span class="tag">C++</span></div>
      </div>
      <div class="skill-group">
        <p class="skill-group-label">"frontend":</p>
        <div class="skill-tags"><span class="tag">HTML / CSS</span><span class="tag">React</span><span class="tag">Tailwind</span></div>
      </div>
      <div class="skill-group">
        <p class="skill-group-label">"backend":</p>
        <div class="skill-tags"><span class="tag">Node.js</span><span class="tag">Express</span><span class="tag">MongoDB</span><span class="tag">MySQL</span></div>
      </div>
      <div class="skill-group">
        <p class="skill-group-label">"tools":</p>
        <div class="skill-tags"><span class="tag">Git</span><span class="tag">VS Code</span><span class="tag">Figma</span><span class="tag">Postman</span></div>
      </div>`
  },
  project1: {
    label: "weather-dashboard.py",
    html: `
      <div class="project-import">
        <div><span class="kw">import</span> <span class="str">flask</span></div>
        <div><span class="kw">import</span> <span class="str">requests</span></div>
        <div class="com"># stack: Python · Flask · OpenWeather API · Chart.js</div>
      </div>
      <h2 class="project-title">Weather Dashboard</h2>
      <p class="project-desc">A Flask app that pulls live weather data for any city and plots a 5-day forecast. Built for my Web Technologies course — caches API responses locally so the dashboard stays fast even on a slow connection.</p>
      <div class="project-actions">
        <a class="btn btn-primary" href="#" target="_blank" rel="noopener">Live demo</a>
        <a class="btn btn-ghost" href="#" target="_blank" rel="noopener">Source code</a>
      </div>
      <div class="project-nav">
        <button data-file="about">← about.js</button>
        <button data-file="project2">task-manager.js →</button>
      </div>`
  },
  project2: {
    label: "task-manager.js",
    html: `
      <div class="project-import">
        <div><span class="kw">import</span> <span class="str">express</span> <span class="kw">from</span> <span class="str">'express'</span></div>
        <div><span class="kw">import</span> <span class="str">mongoose</span> <span class="kw">from</span> <span class="str">'mongoose'</span></div>
        <div class="com">// stack: React · Node.js · Express · MongoDB</div>
      </div>
      <h2 class="project-title">Task Manager</h2>
      <p class="project-desc">A Trello-style task board with drag-and-drop columns, built in a team of three for a Software Engineering project. I owned the backend API and the auth flow.</p>
      <div class="project-actions">
        <a class="btn btn-primary" href="#" target="_blank" rel="noopener">Live demo</a>
        <a class="btn btn-ghost" href="#" target="_blank" rel="noopener">Source code</a>
      </div>
      <div class="project-nav">
        <button data-file="project1">← weather-dashboard.py</button>
        <button data-file="project3">campus-connect.html →</button>
      </div>`
  },
  project3: {
    label: "campus-connect.html",
    html: `
      <div class="project-import">
        <div><span class="kw">&lt;script</span> <span class="key">src</span>=<span class="str">"firebase.js"</span><span class="kw">&gt;</span></div>
        <div class="com">&lt;!-- stack: HTML · CSS · JS · Firebase --&gt;</div>
      </div>
      <h2 class="project-title">Campus Connect</h2>
      <p class="project-desc">An event board for college clubs to post events and for students to RSVP, with live updates via Firebase. Started as a hackathon entry, now used by two clubs on campus.</p>
      <div class="project-actions">
        <a class="btn btn-primary" href="#" target="_blank" rel="noopener">Live demo</a>
        <a class="btn btn-ghost" href="#" target="_blank" rel="noopener">Source code</a>
      </div>
      <div class="project-nav">
        <button data-file="project2">← task-manager.js</button>
        <button data-file="contact">contact.md →</button>
      </div>`
  },
  contact: {
    label: "contact.md",
    html: `
      <h2 class="panel-title">contact.md</h2>
      <p class="hero-blurb">Open to internships, collaborations, or just talking about something you saw here.</p>
      <form class="contact-form" id="contactForm">
        <div>
          <label class="field-label" for="name"><span class="field-prefix">$</span> name</label>
          <input id="name" name="name" type="text" required placeholder="your name">
        </div>
        <div>
          <label class="field-label" for="email"><span class="field-prefix">$</span> email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com">
        </div>
        <div>
          <label class="field-label" for="message"><span class="field-prefix">$</span> message</label>
          <textarea id="message" name="message" required placeholder="say hello"></textarea>
        </div>
        <button class="btn btn-primary" type="submit" style="align-self:flex-start;">./send.sh</button>
        <p class="form-status" id="formStatus"></p>
      </form>
      <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">Note: this form is front-end only. Wire it to a service like Formspree or EmailJS (or your own backend) so messages actually reach your inbox.</p>`
  }
};

// ============================================================
// App logic — shouldn't need to touch this to edit content above.
// ============================================================
let openTabs = ["readme"];
let activeFile = "readme";
let hasTyped = false;

function renderAllPanels() {
  const content = document.getElementById("content");
  content.innerHTML = Object.keys(PANELS)
    .map(key => `<div class="panel" id="panel-${key}">${PANELS[key].html}</div>`)
    .join("");
}

function renderTabs() {
  const tabsEl = document.getElementById("tabs");
  tabsEl.innerHTML = openTabs
    .map(key => `
      <button class="tab${key === activeFile ? " active" : ""}" data-file="${key}">
        ${PANELS[key].label}
        <span class="tab-close" data-close="${key}">×</span>
      </button>`)
    .join("");
}

function updatePanels() {
  document.querySelectorAll(".panel").forEach(p => {
    p.classList.toggle("active", p.id === "panel-" + activeFile);
  });
}

function updateTreeSelection() {
  document.querySelectorAll(".tree-item").forEach(t => {
    t.classList.toggle("selected", t.dataset.file === activeFile);
  });
}

function updateStatus() {
  document.getElementById("statusMsg").textContent = "Editing " + PANELS[activeFile].label;
}

function closeSidebarOnMobile() {
  if (window.innerWidth <= 780) {
    document.querySelector(".sidebar").classList.remove("open");
  }
}

function openFile(key) {
  if (!PANELS[key]) return;
  if (!openTabs.includes(key)) openTabs.push(key);
  activeFile = key;
  renderTabs();
  updatePanels();
  updateTreeSelection();
  updateStatus();
  closeSidebarOnMobile();
  if (key === "readme") runTypingEffect();
}

function closeTab(key, evt) {
  evt.stopPropagation();
  const idx = openTabs.indexOf(key);
  openTabs = openTabs.filter(k => k !== key);
  if (openTabs.length === 0) openTabs.push("readme");
  if (activeFile === key) {
    activeFile = openTabs[Math.max(0, idx - 1)] || openTabs[0];
  }
  renderTabs();
  updatePanels();
  updateTreeSelection();
  updateStatus();
}

function runTypingEffect() {
  if (hasTyped) return;
  const el = document.getElementById("terminalText");
  if (!el) return;
  hasTyped = true;
  const text = "ABHEY SINGH RATHORE —  building things, breaking things, fixing them again.";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    el.textContent = text;
    return;
  }
  let i = 0;
  const speed = 28;
  (function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, speed);
    }
  })();
}

function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");
  toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      icon.textContent = "◑";
      label.textContent = "Dark+";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      icon.textContent = "◐";
      label.textContent = "Light+";
    }
  });
}

function initContactForm() {
  document.addEventListener("submit", e => {
    if (e.target && e.target.id === "contactForm") {
      e.preventDefault();
      const status = document.getElementById("formStatus");
      status.textContent = "Message drafted — connect this form to send it for real.";
      e.target.reset();
    }
  });
}

function initSidebarToggle() {
  const explorerIcon = document.querySelector(".activity-icon.active");
  explorerIcon.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("open");
  });
}

// Delegated clicks for tree items, hero buttons, and project-nav buttons
document.addEventListener("click", e => {
  const fileTarget = e.target.closest("[data-file]");
  if (fileTarget && !fileTarget.closest(".tabs")) {
    openFile(fileTarget.dataset.file);
    return;
  }
  const closeTarget = e.target.closest("[data-close]");
  if (closeTarget) {
    closeTab(closeTarget.dataset.close, e);
    return;
  }
  const tabTarget = e.target.closest(".tab");
  if (tabTarget) {
    openFile(tabTarget.dataset.file);
  }
});

// Init
renderAllPanels();
renderTabs();
updatePanels();
updateTreeSelection();
updateStatus();
initThemeToggle();
initContactForm();
initSidebarToggle();
runTypingEffect();
