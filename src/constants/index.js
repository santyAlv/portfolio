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
        badge: "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    },
    {
        name: "CSS",
        badge: "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    },
    {
        name: "JavaScript",
        badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
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
        badge: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=black",
    },
    {
        name: "Arduino",
        badge: "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
    },
    {
        name: "PHP",
        badge: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
    },
    {
        name: "C#",
        badge: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
    },
    {
        name: "MySQL",
        badge: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    },
];

const tools = [
    {
        name: "SQLite",
        badge: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
    },
    {
        name: "Git",
        badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
    },
    {
        name: ".NET",
        badge: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
    },
    {
        name: "Visual Studio",
        badge: "https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white",
    },
    {
        name: "Bootstrap",
        badge: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    },
    {
        name: "Figma",
        badge: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    },
    {
        name: "Express.js",
        badge: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    },
    {
        name: "npm",
        badge: "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",
    },
    {
        name: "Node.js",
        badge: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    },
    {
        name: "Nodemon",
        badge: "https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD",
    },
    {
        name: "React",
        badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
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
