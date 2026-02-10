// Data + rendering for the 7Cs Stats Research directory (no build tools).

const defaultTheme = (() => {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
})();

function setTheme(theme){
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  const icon = document.querySelector("#themeToggle .icon");
  if (icon) icon.textContent = theme === "light" ? "☀" : "☾";
}
setTheme(defaultTheme);

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const cur = document.documentElement.dataset.theme === "light" ? "light" : "dark";
  setTheme(cur === "light" ? "dark" : "light");
});

// ---- Data (edit this file to expand the directory) ----
const peopleStatisticians = [
  {
    name: "Jo Hardin",
    school: "Pomona",
    title: "Hardison Chair of Analytical Thinking; Professor of Mathematics & Statistics",
    email: "jo.hardin@pomona.edu",
    img: "assets/jo-hardin.jpg",
    website: "https://hardin47.netlify.app/",
    source: "https://www.pomona.edu/directory/people/johanna-s-hardin",
    blurb:
      "Works on statistical methods for high-throughput biological data, machine learning, and statistics/data science education. Strong focus on open and accessible teaching materials.",
    keywords: ["high-throughput bio", "machine learning", "stats education", "open pedagogy"],
  },
  {
    name: "Gabe Chandler",
    school: "Pomona",
    title: "Professor of Mathematics & Statistics",
    email: "gabriel.chandler@pomona.edu",
    img: "assets/gabe-chandler.jpg",
    website: "https://pages.pomona.edu/~gjc04747/",
    source: "https://www.pomona.edu/directory/people/gabriel-chandler",
    blurb:
      "Research includes statistical theory and time series / locally stationary processes, with work on smoothing and heteroscedastic autoregression.",
    keywords: ["stat theory", "time series", "smoothing", "heteroscedasticity"],
  },
  {
    name: "Alejandra Castillo",
    school: "Pomona",
    title: "Instructor of Mathematics & Statistics",
    email: "alejandra.castillo@pomona.edu",
    img: "assets/avatar-alejandra.svg",
    website: "https://www.pomona.edu/directory/people/alejandra-castillo",
    source: "https://www.pomona.edu/directory/people/alejandra-castillo",
    blurb:
      "Filler / to refine: interests include dimension reduction, inference, and statistics education; has worked on efficient use of baseline covariates in clinical trials.",
    keywords: ["dimension reduction", "inference", "stats education", "clinical trials"],
  },
  {
    name: "Talithia Williams",
    school: "Harvey Mudd",
    title: "Professor of Mathematics; Chair of the Faculty; Director, Mathematics Clinic",
    email: "twilliams@hmc.edu",
    img: "assets/talithia-williams.jpg",
    website: "https://www.hmc.edu/mathematics/faculty-staff/williams/",
    source: "https://www.hmc.edu/mathematics/faculty-staff/williams/",
    blurb:
      "Develops statistical models with spatial and temporal structure; applies them to environmental problems (including work with the WHO). Interests include nonstationary covariance estimation and change-of-support problems.",
    keywords: ["spatio-temporal stats", "environment", "nonstationary covariance", "change of support"],
  },
  {
    name: "Harrison Li",
    school: "Harvey Mudd",
    title: "Assistant Professor of Mathematics",
    email: "harrli@hmc.edu",
    img: "assets/harrison-li.jpg",
    website: "https://www.hmc.edu/mathematics/faculty-staff/harrison-li/",
    source: "https://www.hmc.edu/mathematics/faculty-staff/harrison-li/",
    blurb:
      "Interests in applied and theoretical statistics, especially causal inference, experimental design, and data fusion; enjoys building statistical methods in service of domain applications.",
    keywords: ["causal inference", "experimental design", "data fusion", "applied stats"],
  },
  {
    name: "Evan Rosenman",
    school: "Claremont McKenna",
    title: "Assistant Professor of Statistics",
    email: "erosenman@cmc.edu",
    img: "assets/evan-rosenman.jpg",
    website: "https://www.cmc.edu/academic/faculty/profile/evan-rosenman",
    source: "https://www.cmc.edu/academic/faculty/profile/evan-rosenman",
    blurb:
      "Research interests include causal inference and political methodology (filler: add a 1–2 sentence description of current projects and/or methods).",
    keywords: ["causal inference", "political methodology", "experiments", "shrinkage/estimation"],
  },
];

const peopleAdjacent = [
  {
    name: "Mark Huber",
    school: "Claremont McKenna",
    title: "Fletcher Jones Professor of Mathematics & Statistics",
    email: "(add if desired)",
    img: "assets/avatar-mh.svg",
    website: "https://www.cmc.edu/academic/faculty/profile/mark-huber",
    blurb: "Computational probability and Monte Carlo methods for applications in statistics and computer science.",
    keywords: ["Monte Carlo", "computational probability", "sampling", "algorithms"],
  },
  {
    name: "Sarah Cannon",
    school: "Claremont McKenna",
    title: "Associate Professor of Mathematics & Computer Science",
    email: "scannon@cmc.edu",
    img: "assets/avatar-sc.svg",
    website: "https://www1.cmc.edu/pages/faculty/SCannon/",
    blurb: "Randomized algorithms, Markov chains, stochastic processes, and related discrete methods.",
    keywords: ["randomized algorithms", "Markov chains", "stochastic processes"],
  },
  {
    name: "R. Teal Witter",
    school: "Claremont McKenna",
    title: "Assistant Professor of Mathematics & Computer Science",
    email: "rtealwitter@cmc.edu",
    img: "assets/avatar-tw.svg",
    website: "https://www.cmc.edu/academic/faculty/profile/raylen-witter",
    blurb: "Randomized algorithms for explainable AI and generative AI; theory-meets-practice in ML.",
    keywords: ["explainable AI", "generative AI", "randomized algorithms"],
  },
  {
    name: "Pierangelo De Pace",
    school: "Pomona",
    title: "Professor of Economics",
    email: "pierangelo.depace@pomona.edu",
    img: "assets/avatar-pdp.svg",
    website: "https://www.pomona.edu/directory/people/pierangelo-de-pace",
    blurb: "Empirical macroeconomics & finance; econometrics and time-series econometrics.",
    keywords: ["econometrics", "time series", "macro/finance"],
  },
  {
    name: "Shannon Burns",
    school: "Pomona",
    title: "Assistant Professor of Psychological Science & Neuroscience",
    email: "shannon.burns@pomona.edu",
    img: "assets/avatar-sb.svg",
    website: "https://www.pomona.edu/directory/people/shannon-burns",
    blurb: "Studies psychological, neural, and behavioral mechanisms of interpersonal communication and coordination (quantitative social science).",
    keywords: ["social neuroscience", "quant methods", "communication"],
  },
  {
    name: "David Bachman",
    school: "Pitzer",
    title: "Professor of Mathematics",
    email: "bachman@pitzer.edu",
    img: "assets/avatar-db.svg",
    website: "https://pzacad.pitzer.edu/~dbachman/",
    blurb: "Teaches math/data science/CS; interests include artificial intelligence and its broader implications.",
    keywords: ["data science", "AI", "education", "geometry/topology"],
  },
  {
    name: "Deepti Goel",
    school: "Pitzer",
    title: "Assistant Professor of Economics",
    email: "Deepti_Goel@pitzer.edu",
    img: "assets/avatar-dg.svg",
    website: "https://www.pitzer.edu/deepti-goel",
    blurb: "Applied microeconomics with interests in causal inference, labor economics, and development economics.",
    keywords: ["causal inference", "policy evaluation", "labor/dev econ"],
  },
  {
    name: "Linus Yamane",
    school: "Pitzer",
    title: "Professor of Economics",
    email: "Linus_Yamane@pitzer.edu",
    img: "assets/avatar-ly.svg",
    website: "https://www.pitzer.edu/linus-yamane",
    blurb: "Macroeconomics and econometrics; teaches statistics and econometrics.",
    keywords: ["econometrics", "macro", "statistics teaching"],
  },
  {
    name: "Christina Edholm",
    school: "Scripps",
    title: "Associate Professor of Mathematics",
    email: "cedholm@scrippscollege.edu",
    img: "assets/avatar-ce.svg",
    website: "https://www.scrippscollege.edu/offices/profile/christina-edholm",
    blurb: "Mathematical biology and epidemiological modeling (applied modeling + inference).",
    keywords: ["modeling", "epidemiology", "applied math"],
  },
  {
    name: "Michael Spezio",
    school: "Scripps",
    title: "Co-Director, Data Science; Associate Professor of Psychology & Neuroscience",
    email: "mspezio@scrippscollege.edu",
    img: "assets/avatar-ms.svg",
    website: "https://www.scrippscollege.edu/offices/profile/michael-spezio",
    blurb: "Computational cognitive neuroscience; decision science; ML/NLP/Bayesian modeling in social/affective contexts.",
    keywords: ["Bayesian models", "NLP", "decision science", "computational neuroscience"],
  },
  {
    name: "Erin Talvitie",
    school: "Harvey Mudd",
    title: "Associate Professor of Computer Science",
    email: "(add if desired)",
    img: "assets/avatar-et.svg",
    website: "https://www.hmc.edu/academics/faculty/",
    blurb: "Machine learning for AI and autonomous agents (flexible behavior in unknown environments).",
    keywords: ["machine learning", "AI", "agents"],
  },
];

// ---- Rendering helpers ----
function mailto(email){
  if (!email || email.includes("(add") || email.includes("add if")) return null;
  if (email.includes("@")) return `mailto:${email}`;
  return null;
}

function cardHTML(p, compact=false){
  const tags = [`${p.school}`].filter(Boolean);
  const emailLink = mailto(p.email);
  const imgAlt = `${p.name} headshot`;
  const kw = (p.keywords || []).map(k => `<span class="kw">${escapeHTML(k)}</span>`).join("");

  return `
    <article class="card ${compact ? "card-mini" : ""}" data-school="${escapeAttr(p.school)}" data-search="${escapeAttr((p.name + " " + (p.title||"") + " " + (p.blurb||"") + " " + (p.keywords||[]).join(" ")).toLowerCase())}">
      <div class="card-top">
        <img class="avatar" src="${escapeAttr(p.img)}" alt="${escapeAttr(imgAlt)}" loading="lazy" onerror="this.src='assets/avatar-generic.svg'"/>
        <div>
          <div class="name-row">
            <h3 class="person-name">${escapeHTML(p.name)}</h3>
            <div class="badges">
              ${tags.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join("")}
            </div>
          </div>
          <div class="person-title">${escapeHTML(p.title || "")}</div>
          <div class="person-links">
            ${emailLink ? `<a href="${emailLink}">${escapeHTML(p.email)}</a>` : (p.email ? `<span class="muted">${escapeHTML(p.email)}</span>` : "")}
            ${p.website && p.website !== "#" ? `<a href="${escapeAttr(p.website)}" target="_blank" rel="noreferrer">Profile</a>` : ""}
          </div>
        </div>
      </div>
      <div class="card-body">
        <p class="blurb">${escapeHTML(p.blurb || "")}</p>
        ${kw ? `<div class="keywords">${kw}</div>` : ""}
      </div>
    </article>
  `;
}

function escapeHTML(s){
  return String(s ?? "").replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function escapeAttr(s){ return escapeHTML(s).replace(/\n/g, " "); }

function render(gridEl, people, compact=false){
  gridEl.innerHTML = people.map(p => cardHTML(p, compact)).join("");
}

const statGrid = document.getElementById("statGrid");
const adjGrid  = document.getElementById("adjGrid");
render(statGrid, peopleStatisticians, false);
render(adjGrid, peopleAdjacent, true);

// ---- Filters ----
document.getElementById("filterStat")?.addEventListener("change", (e) => {
  const school = e.target.value;
  const cards = Array.from(statGrid.querySelectorAll(".card"));
  cards.forEach(card => {
    const ok = (school === "all") || card.dataset.school === school;
    card.style.display = ok ? "" : "none";
  });
});

function applyAdjFilters(){
  const school = document.getElementById("filterAdj")?.value || "all";
  const q = (document.getElementById("searchAdj")?.value || "").trim().toLowerCase();
  const cards = Array.from(adjGrid.querySelectorAll(".card"));
  cards.forEach(card => {
    const okSchool = (school === "all") || card.dataset.school === school;
    const okSearch = !q || (card.dataset.search || "").includes(q);
    card.style.display = (okSchool && okSearch) ? "" : "none";
  });
}

document.getElementById("filterAdj")?.addEventListener("change", applyAdjFilters);
document.getElementById("searchAdj")?.addEventListener("input", applyAdjFilters);
