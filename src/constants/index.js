export const navLinks = [
    {
        id: "#home",
        title: "Home",
    },
    {
        id: "#projects",
        title: "Works",
    },
    {
        id: "#about",
        title: "About",
    },
    {
        id: "#skills",
        title: "Skills",
    },
    {
        id: "#experience",
        title: "Experience",
    },
];

export const socialLinks = {
    email: "santiaguitoalvarez03@gmail.com",
    github: "https://github.com/santyAlv",
    instagram: "https://www.instagram.com/sssanti.a/?hl=es",
};

const services = [
    {
        title: "Front-end Development",
        icon: "mdi:monitor-dashboard",
    },
    {
        title: "Back-end Development",
        icon: "mdi:server-outline",
    },
    {
        title: "Student",
        icon: "mdi:school-outline",
    },
    {
        title: "Creative Builder",
        icon: "mdi:lightbulb-on-outline",
    },
];

const languages = [
    {
        name: "HTML",
    },
    {
        name: "CSS",
    },
    {
        name: "JavaScript",
    },
    {
        name: "TypeScript",
    },
    {
        name: "Python",
    },
    {
        name: "Kotlin",
    },
    {
        name: "Java",
    },
    {
        name: "PHP",
    },
    {
        name: "C#",
    },
    {
        name: "Arduino",
    },
    {
        name: "MySQL",
    },
];

const tools = [
    {
        name: "React",
    },
    {
        name: "React Native",
    },
    {
        name: "Expo",
    },
    {
        name: "Vue",
    },
    {
        name: "Tailwind CSS",
    },
    {
        name: "Bootstrap",
    },
    {
        name: "Vite",
    },
    {
        name: "Zustand",
    },
    {
        name: "React Query",
    },
    {
        name: "Node.js",
    },
    {
        name: "Express.js",
    },
    {
        name: "FastAPI",
    },
    {
        name: "Django",
    },
    {
        name: ".NET",
    },
    {
        name: "PostgreSQL",
    },
    {
        name: "SQLite",
    },
    {
        name: "Supabase",
    },
    {
        name: "Firebase",
    },
    {
        name: "Docker",
    },
    {
        name: "Git",
    },
    {
        name: "npm",
    },
    {
        name: "Nodemon",
    },
    {
        name: "Figma",
    },
    {
        name: "Visual Studio",
    },
];

const projects = [
    {
        name: "Valeria Peluquería",
        role: "Full-Stack",
        difficulty: "advanced",
        bentoClass: "bento-wide",
        description:
            "E-commerce for Valeria Beauty Salon (El Jagüel, Buenos Aires). Online store with cart, admin panel, Mercado Pago payments, and Render deployment.",
        tags: [
            { name: "TypeScript" },
            { name: "React" },
            { name: "Zustand" },
            { name: "React Query" },
            { name: "Express" },
            { name: "PostgreSQL" },
            { name: "Mercado Pago" },
        ],
        live_link: "https://valeriapeluqueria.com",
    },
    {
        name: "ClicX",
        role: "Creator & Full-Stack",
        difficulty: "advanced",
        bentoClass: "",
        description:
            "Turns your phone into a touchpad, keyboard, and remote control for a Windows PC. React Native app talking to a Python host over WebSocket on Wi-Fi, USB, or Bluetooth — no cloud.",
        tags: [
            { name: "TypeScript" },
            { name: "React Native" },
            { name: "Expo" },
            { name: "Python" },
            { name: "WebSocket" },
        ],
        source_code_link: "https://github.com/santyAlv/clicx-touchpad",
        live_link: "https://santyalv.github.io/clicx-website/",
    },
    {
        name: "Tío Tito Bot",
        role: "Creator & Back-End",
        difficulty: "advanced",
        bentoClass: "",
        description:
            "WhatsApp bot with a group personality. It learns the tone and humor of a group chat, replies when mentioned, and sends spontaneous messages, powered by FastAPI and an LLM.",
        tags: [
            { name: "Python" },
            { name: "FastAPI" },
            { name: "Groq / Ollama" },
            { name: "n8n" },
            { name: "Evolution API" },
            { name: "PostgreSQL" },
        ],
        source_code_link: "https://github.com/santyAlv/tio-tito-bot",
    },
    {
        name: "DiagramTec",
        role: "Front-End",
        difficulty: "advanced",
        bentoClass: "",
        description:
            "Collaborative educational platform to create, edit, and manage data flow diagrams. Includes a visual editor, authentication, and export features.",
        tags: [
            { name: "JavaScript" },
            { name: "React" },
            { name: "Node.js" },
            { name: "PHP" },
            { name: "MySQL" },
            { name: "CSS" },
        ],
        source_code_link: "https://github.com/MaiteVazquez8/DiagramTec",
        live_link: "https://diagramtec.com",
    },
    {
        name: "Glitch.TEC",
        role: "Back-End",
        difficulty: "intermediate",
        bentoClass: "",
        description:
            "Educational cybersecurity game. Simulates a malware-infected desktop; the player uses a terminal, task manager, and email client to contain the threat.",
        tags: [
            { name: "JavaScript" },
            { name: "p5.js" },
            { name: "PHP" },
            { name: "HTML" },
            { name: "CSS" },
        ],
        source_code_link: "https://github.com/santyAlv/GlitchTec",
    },
];

const experiences = [
    {
        title: "Intern",
        company_name: "Deeptics",
        company_link: "https://deeptics.com.ar/",
        date: "4 months",
        location: "Buenos Aires, Argentina",
        description:
            "Deeptics is an SAP consulting firm focused on implementations, process consulting, training, and maintenance for national and international clients.",
        points: [
            "Completed a 4-month internship supporting SAP consulting and implementation projects.",
            "Learned enterprise processes, SAP modules, and professional delivery practices in a consulting environment.",
            "Collaborated with the team on documentation, testing, and day-to-day project tasks.",
        ],
    },
];

export { services, languages, tools, projects, experiences };
