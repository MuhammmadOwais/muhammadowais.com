/* ==========================================================================
   PORTFOLIO DATA MODEL - MUHAMMAD OWAIS (EDITORY TECH & JOURNALISM EDITION)
   ========================================================================== */

const PORTFOLIO_DATA = {
  ticker: [
    { label: "FOUNDER VENTURE", text: "Aivisty.com AI Journalism Platform Live" },
    { label: "AUTOMATION ENGINE", text: "WhatsApp-to-Slack & ChatGPT Agents Operational" },
    { label: "ACADEMIC STANDING", text: "BSCS UET Lahore (CGPA 3.31) — Grad May 2027" },
    { label: "CYBER RESEARCH", text: "KICKS UET Lahore Vulnerability & Security Auditing" }
  ],

  profile: {
    name: "Muhammad Owais",
    role: "Founder & Systems Automation Architect",
    bio: "Pioneering AI-driven journalism, autonomous automation workflows, enterprise web architecture, and full-stack mobile applications.",
    email: "admin@aivisty.com",
    personalEmail: "ovas3853@gmail.com",
    phone: "+92 309 1043809",
    github: "https://github.com/MuhammmadOwais/",
    linkedin: "https://www.linkedin.com/in/muhammad-owais-aivisty/",
    location: "Lahore / Multan, Pakistan"
  },

  liveVentures: [
    {
      name: "Aivisty",
      subtitle: "AI-Powered News Agency & Journalism Platform",
      badge: "Founder Venture",
      desc: "Founded, developed, and maintain Aivisty. Built with automated AI news collection, real-time article publishing pipelines, and digital media distribution.",
      url: "https://aivisty.com/",
      tags: ["AI Journalism", "Automation", "Full-Stack", "Founder"]
    },
    {
      name: "Expert Opinions Digital",
      subtitle: "Enterprise Software & Automation House",
      badge: "Production Platform",
      desc: "Engineered agency web infrastructure and automated client outreach systems. Served as Automation Engineer & Strategic Lead.",
      url: "https://expertopinions.net/",
      tags: ["Agency Site", "Automation Engine", "Client Outreach"]
    },
    {
      name: "Shekhani LLC",
      subtitle: "Brand Collaboration & E-Commerce Storefront",
      badge: "Production Client",
      desc: "Designed and launched e-commerce web platform and brand partnership architecture for global retail operations.",
      url: "https://shekhanillc.com/",
      tags: ["E-Commerce", "Brand Strategy", "Maintainer"]
    },
    {
      name: "SpiceryCo",
      subtitle: "Artisanal Spices & Seasoning Store",
      badge: "Web Storefront",
      desc: "Modern digital commerce application engineered for premium spices and seasonings catalog with rapid checkout UX.",
      url: "https://spices-and-session.vercel.app/",
      tags: ["Next.js", "Web Commerce", "Vercel"]
    },
    {
      name: "Shelfmark LTD",
      subtitle: "International Retail E-Commerce Portal",
      badge: "Production Client",
      desc: "Engineered and maintain Shelfmark LTD's enterprise e-commerce platform for international product inventory.",
      url: "http://shelfmarkltd.com/",
      tags: ["E-Commerce", "Business Dev", "Maintenance"]
    }
  ],

  engineeringProjects: [
    {
      id: "chatgpt-agent",
      title: "Autonomous ChatGPT Prompt Engine",
      cat: "ai",
      catLabel: "AI & Automation",
      desc: "Autonomous pipeline reading JSON prompt files, running inference via ChatGPT API, and storing generated text and synthetic imagery automatically.",
      github: "https://github.com/MuhammmadOwais/chatgpt-autonomous-agent",
      tags: ["Python", "OpenAI", "Automation", "JSON"]
    },
    {
      id: "uniconsult",
      title: "UniConsult Mobile Healthcare App",
      cat: "mobile",
      catLabel: "Mobile Engineering",
      desc: "Telemedicine mobile app enabling live doctor video/audio calls, appointment booking, patient authorization, and real-time database sync.",
      github: "https://github.com/MuhammmadOwais/UniConsult-Mobile-Application",
      tags: ["Mobile APK", "WebRTC Video/Audio", "Firebase"]
    },
    {
      id: "whatsapp-forwarder",
      title: "WhatsApp-to-Slack Automation Daemon",
      cat: "ai",
      catLabel: "AI & Automation",
      desc: "Real-time background forwarder routing incoming WhatsApp text, audio notes, and media attachments straight into Slack channels.",
      github: "https://github.com/MuhammmadOwais/WhatsappForwarder",
      tags: ["Python", "Slack API", "Automation"]
    },
    {
      id: "social-bot",
      title: "Social Media Crawling & Posting Engine",
      cat: "ai",
      catLabel: "AI & Automation",
      desc: "Web crawler that fetches trending topics and automatically posts formatted media & copy to Instagram, Facebook, and LinkedIn.",
      github: "https://github.com/MuhammmadOwais/social-media-automation-engine",
      tags: ["Python", "Web Scraper", "Social APIs"]
    },
    {
      id: "fake-email",
      title: "Fake Email & SMS Phishing Detector",
      cat: "cyber",
      catLabel: "Cybersecurity & ML",
      desc: "Machine learning classifier detecting malicious email headers, phishing links, and fake SMS content in real-time.",
      github: "https://github.com/MuhammmadOwais/Fake-SMS-Email-Detection",
      tags: ["Cybersecurity", "NLP", "Machine Learning"]
    },
    {
      id: "portfolio-maker",
      title: "PortfolioMaker Web Engine",
      cat: "fullstack",
      catLabel: "Full-Stack",
      desc: "Form-to-website SaaS platform generating dynamic personalized web portfolios instantly upon form submission.",
      github: "https://github.com/MuhammmadOwais/PortfolioMaker",
      tags: ["Full-Stack", "JavaScript", "Dynamic Site"]
    },
    {
      id: "youtube-extension",
      title: "YouTube Downloader & Bookmark Extension",
      cat: "fullstack",
      catLabel: "Full-Stack",
      desc: "Custom Chrome extension providing single-click YouTube video downloads, bookmark timestamp storage, and DOM injection.",
      github: "https://github.com/MuhammmadOwais/You-tube-Bookmark-extension",
      tags: ["Chrome Extension", "JavaScript", "DOM"]
    },
    {
      id: "hospital-vlan",
      title: "Hospital Network VLAN Security",
      cat: "cyber",
      catLabel: "Cybersecurity",
      desc: "Enterprise hospital network infrastructure featuring VLAN segmentation, firewall rules, and confidential patient data routing.",
      github: "https://github.com/MuhammmadOwais/Hospital-Networking-Project-with-VLANs",
      tags: ["Cisco", "VLAN", "Network Security"]
    },
    {
      id: "dsa-scraper",
      title: "DSA Web Scraper & Sorting Engine",
      cat: "cyber",
      catLabel: "Systems Engineering",
      desc: "High-speed data scraper implementing custom Merge/QuickSort algorithms and advanced data structure indexing in Python.",
      github: "https://github.com/MuhammmadOwais/DSA-Scrapping-and-Sorting-Project",
      tags: ["Algorithms", "Python", "Data Structures"]
    },
    {
      id: "medi-harmony-gui",
      title: "Medi-Harmony GUI Management System",
      cat: "fullstack",
      catLabel: "Full-Stack",
      desc: "C# GUI desktop suite managing medical records, patient check-ins, pharmacy inventory, and doctor schedules.",
      github: "https://github.com/MuhammmadOwais/Medi-Harmony-Hospital-Management-System-In-GUI",
      tags: ["C#", ".NET GUI", "SQL"]
    },
    {
      id: "ninja-game",
      title: "Modern Ninja GUI Game Engine",
      cat: "games",
      catLabel: "Game Architecture",
      desc: "2D action game featuring custom collision physics, sprite movement cycles, and animation frame handlers in C#.",
      github: "https://github.com/MuhammmadOwais/Modern-Ninja-Game-in-GUI",
      tags: ["C#", "Game Engine", "2D Physics"]
    },
    {
      id: "mini-playstation",
      title: "Mini PlayStation DSA Arcade Platform",
      cat: "games",
      catLabel: "Game Architecture",
      desc: "Multi-game platform engineered with fundamental Data Structures (Stacks, Queues, Graphs) and custom score boards.",
      github: "https://github.com/MuhammmadOwais/DSA-Final-Project-Mini-Play-Station",
      tags: ["Python", "DSA", "Arcade Engine"]
    }
  ],

  experiences: [
    {
      role: "Founder & Chief Technology Officer",
      company: "Aivisty (aivisty.com)",
      period: "2024 — PRESENT",
      desc: "Founded an AI-driven media platform. Architected real-time news scraping, automated AI writing pipelines, and media distribution."
    },
    {
      role: "Automation Engineer & Strategy Specialist",
      company: "Expert Opinions Digital",
      period: "MAR 2026 — MAY 2026",
      desc: "Designed automated web scraping and social posting bots. Managed business development outreach and client platform upkeep."
    },
    {
      role: "Cybersecurity Research Intern",
      company: "KICKS Department, UET Lahore",
      period: "JAN 2026 — FEB 2026",
      desc: "Analyzed network security policies, audited system vulnerabilities, and assisted in cybersecurity lab research."
    },
    {
      role: "MERN Stack Developer Intern",
      company: "DEVIANICS",
      period: "NOV 2025 — JAN 2026",
      desc: "Developed RESTful APIs, modern React dashboards, and database schemas for enterprise web applications."
    },
    {
      role: "Mobile App Developer",
      company: "WebVision Technologies",
      period: "2025",
      desc: "Engineered cross-platform mobile apps featuring real-time audio/video calls, doctor appointment booking, and notifications."
    },
    {
      role: "Programming Teaching Assistant",
      company: "UET Lahore",
      period: "SEP 2024 — OCT 2024",
      desc: "Instructed university students in C++ programming fundamentals, memory pointers, and data structures."
    }
  ],

  skillPillars: [
    {
      title: "AI & Automation Engineering",
      skills: ["Autonomous ChatGPT Agents", "Python Scrapers & Bots", "WhatsApp-to-Slack Pipelines", "Social Media Crawlers", "LLM Prompt Engineering"]
    },
    {
      title: "Full-Stack & Mobile Development",
      skills: ["ReactJS & Node.js", "React Native & Mobile APKs", "PHP & MySQL CMS", "MongoDB Databases", "Custom Chrome Extensions"]
    },
    {
      title: "Business Development & Strategy",
      skills: ["Founder Leadership", "Client Outreaching", "Digital Brand Strategy", "Project Management", "Cold Calling & Sales"]
    },
    {
      title: "Cybersecurity & Systems Engineering",
      skills: ["VLAN Network Security", "C++ / C# Memory Systems", "Vulnerability Assessment", "Fake Email Phishing ML", "DSA Data Indexing"]
    }
  ],

  education: [
    {
      degree: "BS in Computer Science (BSCS)",
      institution: "UET Lahore",
      period: "Expected May 2027",
      detail: "Current CGPA: 3.31"
    },
    {
      degree: "Intermediate in Pre-Engineering",
      institution: "Muslim College of Science & Commerce",
      period: "Completed 2023",
      detail: "1011 / 1100 Marks (Distinction)"
    },
    {
      degree: "Matriculation in Biology",
      institution: "BISE Multan",
      period: "Completed 2021",
      detail: "1098 / 1100 Marks (99.8%)"
    }
  ]
};
