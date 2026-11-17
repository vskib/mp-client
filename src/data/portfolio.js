// ✏️  EDIT THIS FILE to personalise the whole site.
export const profile = {
  name: "James Kiven Burce",
  headline: "3rd Year IT Student | Aspiring Full-Stack Developer",
  intro: "An Information Technology student passionate about building modern web applications, exploring emerging technologies, and transforming ideas into functional digital experiences.",
  tagline: "Building ideas into meaningful digital experiences.",
  photo: "/images/profile.jpg", // replace with your own photo
  resume: "/resume.pdf",
  startYear: 2024, // used to compute "Years of Learning"
  email: "jameskivenburce0@gmail.com",
  location: "Philippines",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/vskib", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kib05", icon: "linkedin" },
  { label: "Facebook", href: "https://facebook.com/bikswonkenoon", icon: "facebook" },
];

export const about = {
  paragraphs: [
    "I'm a Bachelor of Science in Information Technology student who enjoys turning everyday problems into working software. I like understanding how a system fits together, from the interface a person taps to the database behind it.",
    "Right now I'm building my foundation in web development, databases, and API design, and practising by building small, practical tools for real use cases such as retail operations and sports.",
    "My goal is to grow into a full-stack software engineer who ships reliable, well-designed products, and I'm looking for internships and learning opportunities that help me get there.",
  ],
  interests: ["Full-stack web development", "Database design", "Mobile apps", "UI/UX", "Emerging technologies"],
  goals: ["Land an internship in software development", "Build and deploy production-ready apps", "Deepen backend and database skills"],
};

// icon keys map to components in Skills.jsx
export const skillGroups = [
  { title: "Frontend Development", items: [
    { name: "HTML5", icon: "html" }, { name: "CSS3", icon: "css" }, { name: "JavaScript", icon: "js" },
    { name: "React.js", icon: "react" }, { name: "Tailwind CSS", icon: "tailwind" } ] },
  { title: "Backend Development", items: [
    { name: "Node.js", icon: "node" }, { name: "Express.js", icon: "express" }, { name: "REST APIs", icon: "api" } ] },
  { title: "Database Management", items: [
    { name: "PostgreSQL", icon: "postgres" }, { name: "Supabase", icon: "supabase" } ] },
  { title: "Tools & Environment", items: [
    { name: "Git", icon: "git" }, { name: "GitHub", icon: "github" }, { name: "VS Code", icon: "vscode" },
    { name: "Postman", icon: "postman" }, { name: "Figma", icon: "figma" } ] },
];

// Leave github/demo/image as "" until real ones exist. Empty values are hidden.
export const projects = [
  { id: "ches-tindahan", name: "Che's Tindahan POS & Inventory System",
    summary: "A point-of-sale and inventory management solution designed to simplify retail store operations.",
    details: "Designed to help a small retail store record sales and keep track of stock in one place. Replace this text with your own description of the problem, your role, and what you learned.",
    stack: ["React", "Node.js", "Express", "PostgreSQL"], // update to the stack you actually used
    features: ["Point-of-sale checkout", "Inventory tracking", "Product management"],
    image: "/images/projects/p1.png", github: "https://github.com/vskib/tindahan_frontend",
    demo: "https://ches-tindahan.vercel.app"
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "Naga College Foundation, Inc.",
  period: "2024–2028",
  status: "Currently enrolled",
  coursework: [],
  achievements: [
    "Dean's Lister – 1st Semester, 1st Year",
    "Dean's Lister – 2nd Semester, 1st Year",
    "Dean's Lister – 2nd Semester, 2nd Year",
  ],
  certifications: [
    "Certified Data Science Associate",
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" }, { label: "Skills", href: "#skills" }, { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" },
];
