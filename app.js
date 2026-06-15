// ============================
// Data / Content
// ============================
const EMAIL = "moali@horus.edu.eg";
const PHONE = "01096681576";
const LOCATION_VAL = "Damietta, Kafr Saad, Egypt";
const LOCATION_AR = "دمياط — كفر سعد، مصر";

const content = {
  en: {
    dir: "ltr",
    lang: "en",
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      badge: "Available for Opportunities",
      name: "Mohamed Asim",
      nameHighlight: "Mohamed",
      title: "Data Analyst · Teaching Assistant in Statistics",
      summary:
        "Bridging the gap between analytical insights and academic excellence — dedicated to harnessing data for strategic decision-making while cultivating the next generation of statisticians and data professionals.",
      ctaPrimary: "View Experience",
      ctaSecondary: "Contact Me",
      floatCards: ["Statistics", "Academia", "Data"],
    },
    about: {
      title: "About Me",
      text: "I am a proactive professional with a distinctive dual background spanning Data Analysis and Higher Education. Currently serving as a Teaching Assistant in the Department of Statistics at Horus University, I bring deep expertise in statistical theory, applied probability, regression analysis, and data-driven research methodologies. Previously, as a Data Analyst, I specialized in transforming complex datasets into actionable business insights using Python, SQL, R, and Advanced Excel. Known for my adaptability, analytical rigor, reliability, and composure under pressure, I am committed to advancing both the field of statistics and the learning experience of my students.",
      stats: [
        { number: "3+", label: "Years of Experience" },
        { number: "500+", label: "Students Mentored" },
        { number: "15+", label: "Courses Taught" },
        { number: "20+", label: "Projects Delivered" },
      ],
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          id: 1,
          role: "Teaching Assistant — Department of Statistics",
          company: "Horus University",
          period: "Oct 2023 — Present",
          description: [
            "Deliver lectures and practical sessions in core statistics courses including Descriptive Statistics, Inferential Statistics, Probability Theory, and Applied Regression Analysis.",
            "Design and grade examinations, assignments, and statistical case studies, ensuring rigorous academic standards.",
            "Supervise and mentor undergraduate students in statistical research projects, guiding them through hypothesis formulation, data collection, and quantitative analysis.",
            "Facilitate hands-on lab sessions using SPSS, R, and Excel for statistical computing and data visualization.",
            "Collaborate with faculty in curriculum development, integrating modern data science techniques into the statistics program.",
            "Conduct tutoring and office hours to provide personalized academic support, significantly improving student pass rates.",
            "Manage classroom dynamics, fostering a collaborative and inclusive learning environment for diverse student populations.",
            "Support students with special needs by implementing appropriate accommodations and individualized learning plans.",
          ],
        },
        {
          id: 2,
          role: "Data Analyst",
          company: "Free Star Factory",
          period: "Jan 2022 — Oct 2023",
          description: [
            "Analyzed complex datasets to identify trends, patterns, and anomalies — enhancing overall business efficiency by 25%.",
            "Produced comprehensive monthly reports and interactive dashboards using Advanced Excel, Power BI, and visualization tools.",
            "Utilized statistical methods (hypothesis testing, time series analysis, regression modeling) to support strategic decision-making.",
            "Automated routine data processing workflows with Python scripts, reducing manual effort by 40%.",
            "Communicated data-driven insights effectively to stakeholders through clear visualizations and executive presentations.",
          ],
        },
      ],
    },
    skills: {
      title: "Skills & Expertise",
      categories: [
        {
          category: "Statistical & Analytical",
          icon: "📊",
          items: [
            "Descriptive & Inferential Statistics",
            "Probability Theory & Distributions",
            "Regression Analysis (Linear, Logistic, Multiple)",
            "Hypothesis Testing & Confidence Intervals",
            "Time Series Analysis & Forecasting",
            "Experimental Design & Sampling Methods",
            "Bayesian Statistics & Non-Parametric Methods",
            "Multivariate Analysis (PCA, Factor Analysis)",
          ],
        },
        {
          category: "Data & Technology",
          icon: "💻",
          items: [
            "Python (Pandas, NumPy, SciPy, Matplotlib)",
            "R Programming (tidyverse, ggplot2)",
            "SQL & Relational Databases",
            "Advanced Excel & Pivot Tables",
            "SPSS Statistical Software",
            "Power BI & Tableau Dashboards",
            "Data Cleaning & Wrangling",
            "Machine Learning Fundamentals",
          ],
        },
        {
          category: "Teaching & Academic",
          icon: "🎓",
          items: [
            "Curriculum Design & Course Development",
            "Lecture Delivery & Classroom Management",
            "Student Mentoring & Academic Advising",
            "Assessment Design & Grading Rubrics",
            "Lab Supervision (SPSS, R, Excel)",
            "Research Supervision & Project Guidance",
            "Inclusive Education & Special Needs Support",
            "Academic Writing & Publication Support",
          ],
        },
        {
          category: "Professional & Soft Skills",
          icon: "🤝",
          items: [
            "Public Speaking & Presentation Skills",
            "Critical Thinking & Problem Solving",
            "Strategic Planning & Decision Making",
            "Report Writing & Documentation",
            "Team Leadership & Coordination",
            "Arabic (Native) · English (Upper Intermediate)",
          ],
        },
      ],
    },
    education: {
      title: "Education & Certifications",
      eduTitle: "Education",
      certTitle: "Certifications",
      items: [
        {
          id: 1,
          degree: "Preparatory Academic Master",
          institution: "Damietta University",
          year: "2023",
        },
        {
          id: 2,
          degree: "Bachelor of Commerce",
          institution: "Damietta University",
          year: "2022",
        },
      ],
      certifications: [
        { id: 1, name: "Data Analysis Professional Track", issuer: "Ministry of Communications / Datacamp" },
        { id: 2, name: "Introduction to SQL", issuer: "Datacamp" },
        { id: 3, name: "Data Analysis using Spreadsheets", issuer: "Datacamp" },
        { id: 4, name: "Introduction to Data Fundamentals", issuer: "Google" },
        { id: 5, name: "Effective Presentation Skills", issuer: "Tomsk State University" },
        { id: 6, name: "Children's University Training", issuer: "Academy of Scientific Research" },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Open for opportunities in Data Analysis, Statistics, and Academia.",
      email: EMAIL,
      phone: PHONE,
      location: LOCATION_VAL,
      labels: { email: "Email", phone: "Phone", location: "Location" },
    },
    footer: `© ${new Date().getFullYear()} Mohamed Asim Mohamed. All rights reserved.`,
  },

  // ============================
  // Arabic Content (Improved)
  // ============================
  ar: {
    dir: "rtl",
    lang: "ar",
    nav: {
      about: "نبذة عني",
      experience: "الخبرات",
      skills: "المهارات",
      education: "التعليم",
      contact: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية",
    },
    hero: {
      badge: "متاح لفرص العمل",
      name: "محمد عاصم",
      nameHighlight: "محمد",
      title: "محلل بيانات · معيد بقسم الإحصاء",
      summary:
        "أمزج بين الرؤى التحليلية والتميّز الأكاديمي — أسخّر البيانات لدعم القرارات الاستراتيجية، وأعمل على إعداد الجيل القادم من المتخصصين في الإحصاء وعلوم البيانات.",
      ctaPrimary: "استعرض خبراتي",
      ctaSecondary: "تواصل معي",
      floatCards: ["الإحصاء", "الأكاديمية", "البيانات"],
    },
    about: {
      title: "نبذة عني",
      text: "أتمتّع بخلفية مهنية مزدوجة ومتميّزة تجمع بين تحليل البيانات والتعليم الجامعي. أعمل حاليًا معيدًا بقسم الإحصاء في جامعة حورس، حيث أمتلك خبرة عميقة في النظرية الإحصائية والاحتمالات التطبيقية وتحليل الانحدار ومنهجيات البحث الكمّي. سابقًا، عملتُ محلل بيانات متخصصًا في تحويل مجموعات البيانات المعقدة إلى رؤى عملية قابلة للتنفيذ باستخدام Python وSQL وR وExcel المتقدم. أُعرَف بقدرتي العالية على التكيّف والدقة التحليلية والموثوقية والهدوء تحت الضغط، وأسعى دائمًا لتطوير مجال الإحصاء وتعزيز تجربة التعلّم لدى طلابي.",
      stats: [
        { number: "+3", label: "سنوات خبرة" },
        { number: "+500", label: "طالب تمّ إرشادهم" },
        { number: "+15", label: "مقرر دراسي" },
        { number: "+20", label: "مشروع منجز" },
      ],
    },
    experience: {
      title: "الخبرة المهنية",
      items: [
        {
          id: 1,
          role: "معيد — قسم الإحصاء",
          company: "جامعة حورس",
          period: "أكتوبر 2023 — الحالي",
          description: [
            "تقديم المحاضرات والجلسات التطبيقية في المقررات الأساسية للإحصاء، بما يشمل الإحصاء الوصفي والاستدلالي ونظرية الاحتمالات وتحليل الانحدار التطبيقي.",
            "تصميم الاختبارات والواجبات ودراسات الحالة الإحصائية وتصحيحها وفق معايير أكاديمية صارمة.",
            "الإشراف على المشاريع البحثية الإحصائية للطلاب وإرشادهم خلال مراحل صياغة الفرضيات وجمع البيانات والتحليل الكمّي.",
            "إدارة الحصص المعملية التطبيقية باستخدام برامج SPSS وR وExcel للحوسبة الإحصائية وتصوير البيانات.",
            "المشاركة في تطوير المناهج الدراسية مع أعضاء هيئة التدريس، ودمج تقنيات علم البيانات الحديثة في برنامج الإحصاء.",
            "تقديم ساعات مكتبية ودروس تقوية فردية للطلاب، مما أسهم في تحسين معدلات النجاح بشكل ملحوظ.",
            "إدارة البيئة الصفّية وتهيئة مناخ تعليمي تعاوني وشامل لجميع الطلاب.",
            "دعم الطلاب ذوي الاحتياجات الخاصة من خلال تطبيق التسهيلات الملائمة وخطط التعلّم الفردية.",
          ],
        },
        {
          id: 2,
          role: "محلل بيانات",
          company: "Free Star Factory",
          period: "يناير 2022 — أكتوبر 2023",
          description: [
            "تحليل مجموعات البيانات المعقدة لاكتشاف الأنماط والاتجاهات والقيم الشاذة، مما عزّز كفاءة الأعمال بنسبة 25%.",
            "إعداد تقارير شهرية شاملة ولوحات معلومات تفاعلية باستخدام أدوات Excel المتقدمة وPower BI.",
            "توظيف الأساليب الإحصائية (اختبار الفرضيات، تحليل السلاسل الزمنية، نمذجة الانحدار) لدعم القرارات الاستراتيجية.",
            "أتمتة سير العمل الروتينية لمعالجة البيانات باستخدام نصوص Python البرمجية، مما قلّل الجهد اليدوي بنسبة 40%.",
            "توصيل الرؤى المبنية على البيانات لأصحاب المصلحة بوضوح من خلال العروض التقديمية والرسوم البيانية.",
          ],
        },
      ],
    },
    skills: {
      title: "المهارات والخبرات",
      categories: [
        {
          category: "الإحصاء والتحليل",
          icon: "📊",
          items: [
            "الإحصاء الوصفي والاستدلالي",
            "نظرية الاحتمالات والتوزيعات الإحصائية",
            "تحليل الانحدار (الخطي، اللوجستي، المتعدد)",
            "اختبار الفرضيات وفترات الثقة",
            "تحليل السلاسل الزمنية والتنبؤ",
            "التصميم التجريبي وأساليب المعاينة",
            "الإحصاء البايزي والأساليب اللامعلمية",
            "التحليل متعدد المتغيرات (PCA، التحليل العاملي)",
          ],
        },
        {
          category: "البيانات والتكنولوجيا",
          icon: "💻",
          items: [
            "Python (Pandas, NumPy, SciPy, Matplotlib)",
            "R (tidyverse, ggplot2)",
            "SQL وقواعد البيانات العلائقية",
            "Excel المتقدم والجداول المحورية",
            "برنامج SPSS الإحصائي",
            "Power BI و Tableau",
            "تنظيف البيانات ومعالجتها",
            "أساسيات تعلّم الآلة",
          ],
        },
        {
          category: "المهارات التدريسية والأكاديمية",
          icon: "🎓",
          items: [
            "تصميم المناهج وتطوير المقررات الدراسية",
            "إلقاء المحاضرات وإدارة القاعات الدراسية",
            "إرشاد الطلاب والتوجيه الأكاديمي",
            "تصميم أدوات التقييم ومعايير التصحيح",
            "الإشراف على المعامل التطبيقية (SPSS، R، Excel)",
            "الإشراف على الأبحاث وتوجيه المشاريع العلمية",
            "التعليم الشامل ودعم ذوي الاحتياجات الخاصة",
            "الكتابة الأكاديمية ودعم النشر العلمي",
          ],
        },
        {
          category: "المهارات المهنية والشخصية",
          icon: "🤝",
          items: [
            "التحدّث أمام الجمهور ومهارات العرض والتقديم",
            "التفكير النقدي وحل المشكلات",
            "التخطيط الاستراتيجي وصنع القرار",
            "كتابة التقارير والتوثيق",
            "قيادة الفريق والتنسيق المؤسسي",
            "العربية (اللغة الأم) · الإنجليزية (جيد جدًا)",
          ],
        },
      ],
    },
    education: {
      title: "المؤهلات العلمية والشهادات",
      eduTitle: "المؤهلات العلمية",
      certTitle: "الشهادات والدورات التدريبية",
      items: [
        {
          id: 1,
          degree: "الماجستير الأكاديمي التمهيدي",
          institution: "جامعة دمياط",
          year: "2023",
        },
        {
          id: 2,
          degree: "بكالوريوس التجارة",
          institution: "جامعة دمياط",
          year: "2022",
        },
      ],
      certifications: [
        { id: 1, name: "المسار الاحترافي لتحليل البيانات", issuer: "وزارة الاتصالات / Datacamp" },
        { id: 2, name: "مقدمة في لغة SQL", issuer: "Datacamp" },
        { id: 3, name: "تحليل البيانات باستخدام جداول البيانات", issuer: "Datacamp" },
        { id: 4, name: "أساسيات علم البيانات", issuer: "Google" },
        { id: 5, name: "مهارات العرض والتقديم الفعّال", issuer: "جامعة تومسك الحكومية للبحوث" },
        { id: 6, name: "برنامج تدريب جامعة الطفل", issuer: "أكاديمية البحث العلمي" },
      ],
    },
    contact: {
      title: "تواصل معي",
      subtitle: "متاح لفرص العمل في مجالات تحليل البيانات والإحصاء والعمل الأكاديمي.",
      email: EMAIL,
      phone: PHONE,
      location: LOCATION_AR,
      labels: { email: "البريد الإلكتروني", phone: "الهاتف", location: "الموقع" },
    },
    footer: `© ${new Date().getFullYear()} محمد عاصم محمد. جميع الحقوق محفوظة.`,
  },
};

// ============================
// State
// ============================
let currentLang = "ar";

// ============================
// Render Functions
// ============================

function getContent() {
  return content[currentLang];
}

function setDirection() {
  const c = getContent();
  document.documentElement.dir = c.dir;
  document.documentElement.lang = c.lang;
  document.body.dir = c.dir;
  if (c.dir === "rtl") {
    document.body.style.fontFamily = "var(--ff-ar)";
  } else {
    document.body.style.fontFamily = "var(--ff-en)";
  }
}

function renderNav() {
  const c = getContent();
  const sections = [
    { label: c.nav.about, href: "#about" },
    { label: c.nav.experience, href: "#experience" },
    { label: c.nav.skills, href: "#skills" },
    { label: c.nav.education, href: "#education" },
    { label: c.nav.contact, href: "#contact" },
  ];

  const navLinks = document.getElementById("nav-links");
  const mobileLinks = document.getElementById("mobile-nav-links");

  navLinks.innerHTML = sections
    .map(
      (s) =>
        `<a href="${s.href}" class="nav-link" data-section="${s.href.slice(1)}">${s.label}</a>`
    )
    .join("");

  mobileLinks.innerHTML = sections
    .map(
      (s) =>
        `<a href="${s.href}" class="nav-link" data-section="${s.href.slice(1)}">${s.label}</a>`
    )
    .join("");

  document.getElementById("lang-label").textContent = currentLang === "en" ? "AR" : "EN";
  document.getElementById("lang-label-mobile").textContent = currentLang === "en" ? "AR" : "EN";
  document.getElementById("download-label").textContent = c.nav.downloadCv;
  document.getElementById("download-label-mobile").textContent = c.nav.downloadCv;
}

function renderHero() {
  const c = getContent();
  document.getElementById("hero-badge-text").textContent = c.hero.badge;
  document.getElementById("hero-name").innerHTML = `${c.hero.name} <span class="gradient-text">${c.hero.nameHighlight}</span>`;
  document.getElementById("hero-title").textContent = c.hero.title;
  document.getElementById("hero-summary").textContent = c.hero.summary;
  document.getElementById("cta-primary-text").textContent = c.hero.ctaPrimary;
  document.getElementById("cta-secondary-text").textContent = c.hero.ctaSecondary;

  document.getElementById("float-card-1").textContent = c.hero.floatCards[0];
  document.getElementById("float-card-2").textContent = c.hero.floatCards[1];
  document.getElementById("float-card-3").textContent = c.hero.floatCards[2];
}

function renderAbout() {
  const c = getContent();
  document.getElementById("about-title").textContent = c.about.title;
  document.getElementById("about-text").textContent = c.about.text;

  const statsRow = document.getElementById("stats-row");
  statsRow.innerHTML = c.about.stats
    .map(
      (s) => `
      <div class="stat-item">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>`
    )
    .join("");
}

function renderExperience() {
  const c = getContent();
  document.getElementById("experience-title").innerHTML = c.experience.title;

  const timeline = document.getElementById("timeline");
  timeline.innerHTML = c.experience.items
    .map(
      (item) => `
      <div class="timeline-item fade-in-up">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <div class="timeline-role">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                ${item.role}
              </div>
              <div class="timeline-company">${item.company}</div>
            </div>
            <span class="timeline-period">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              ${item.period}
            </span>
          </div>
          <ul class="timeline-desc">
            ${item.description.map((d) => `<li>${d}</li>`).join("")}
          </ul>
        </div>
      </div>`
    )
    .join("");
}

function renderSkills() {
  const c = getContent();
  document.getElementById("skills-title").innerHTML = c.skills.title;

  const grid = document.getElementById("skills-grid");
  grid.innerHTML = c.skills.categories
    .map(
      (cat) => `
      <div class="skill-category fade-in-up">
        <h3 class="skill-category-title">
          <span class="skill-category-icon">${cat.icon}</span>
          ${cat.category}
        </h3>
        <ul class="skill-list">
          ${cat.items
            .map(
              (item) => `
            <li>
              <span class="check-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              ${item}
            </li>`
            )
            .join("")}
        </ul>
      </div>`
    )
    .join("");
}

function renderEducation() {
  const c = getContent();
  document.getElementById("education-section-title").innerHTML = c.education.title;

  const grid = document.getElementById("edu-grid");
  grid.innerHTML = `
    <div>
      <h3 class="edu-column-title">
        <span class="icon-wrap purple">🎓</span>
        ${c.education.eduTitle}
      </h3>
      <div class="edu-items">
        ${c.education.items
          .map(
            (item) => `
          <div class="edu-item">
            <div class="edu-degree">${item.degree}</div>
            <div class="edu-institution">${item.institution}</div>
            <span class="edu-year">${item.year}</span>
          </div>`
          )
          .join("")}
      </div>
    </div>
    <div>
      <h3 class="edu-column-title">
        <span class="icon-wrap green">📜</span>
        ${c.education.certTitle}
      </h3>
      <div class="cert-list">
        ${c.education.certifications
          .map(
            (cert) => `
          <div class="cert-item">
            <span class="cert-icon">✅</span>
            <div>
              <div class="cert-name">${cert.name}</div>
              <div class="cert-issuer">${cert.issuer}</div>
            </div>
          </div>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderContact() {
  const c = getContent();
  document.getElementById("contact-title").textContent = c.contact.title;
  document.getElementById("contact-subtitle").textContent = c.contact.subtitle;

  const cards = document.getElementById("contact-cards");
  cards.innerHTML = `
    <div class="contact-card">
      <div class="contact-card-icon">✉️</div>
      <div class="contact-card-label">${c.contact.labels.email}</div>
      <a href="mailto:${c.contact.email}" class="contact-card-value">${c.contact.email}</a>
    </div>
    <div class="contact-card">
      <div class="contact-card-icon">📱</div>
      <div class="contact-card-label">${c.contact.labels.phone}</div>
      <a href="tel:${c.contact.phone}" class="contact-card-value">${c.contact.phone}</a>
    </div>
    <div class="contact-card">
      <div class="contact-card-icon">📍</div>
      <div class="contact-card-label">${c.contact.labels.location}</div>
      <span class="contact-card-value">${c.contact.location}</span>
    </div>
  `;

  document.getElementById("footer-text").textContent = c.footer;
}

function renderAll() {
  setDirection();
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderSkills();
  renderEducation();
  renderContact();
  observeAnimations();
}

// ============================
// Event Handlers
// ============================

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  renderAll();
}

function downloadCV() {
  const a = document.createElement("a");
  a.href = "./resume.pdf";
  a.download = "Mohamed_Asim_CV.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
  // Close mobile menu
  document.getElementById("mobile-menu").classList.remove("open");
}

// ============================
// Scroll Effects
// ============================

function handleScroll() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active nav link highlight
  const sections = ["about", "experience", "skills", "education", "contact"];
  let currentSection = "";

  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom > 150) {
        currentSection = section;
      }
    }
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.section === currentSection);
  });
}

// ============================
// Intersection Observer for animations
// ============================
function observeAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".fade-in-up").forEach((el) => {
    observer.observe(el);
  });
}

// ============================
// Mobile menu
// ============================
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

// ============================
// Init
// ============================
document.addEventListener("DOMContentLoaded", () => {
  renderAll();

  // Event listeners
  document.getElementById("btn-lang").addEventListener("click", toggleLanguage);
  document.getElementById("btn-lang-mobile").addEventListener("click", toggleLanguage);
  document.getElementById("btn-download").addEventListener("click", downloadCV);
  document.getElementById("btn-download-mobile").addEventListener("click", downloadCV);
  document.getElementById("btn-mobile-menu").addEventListener("click", toggleMobileMenu);
  document.getElementById("nav-logo").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scroll for all internal links
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      smoothScroll(e);
    }
  });

  // Scroll handler
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Profile image fallback
  const profileImg = document.getElementById("profile-img");
  profileImg.addEventListener("error", () => {
    profileImg.src = "https://picsum.photos/400/400";
  });
});
