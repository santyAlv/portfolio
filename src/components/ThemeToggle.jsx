import { useEffect, useState } from "react";

const THEME_COLORS = { light: "#ffffff", dark: "#0a0a0b" };

// index.html sets the initial class before paint; read it back here.
const getInitialTheme = () => (document.documentElement.classList.contains("dark") ? "dark" : "light");

const ThemeToggle = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
    }, [theme]);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";

        setTheme(next);
        try {
            localStorage.setItem("theme", next);
        } catch (e) {
            // Storage unavailable (private mode): the choice lasts for this visit only.
        }
    };

    return (
        <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
            <svg
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                {theme === "dark" ? (
                    <>
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </>
                ) : (
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                )}
            </svg>
        </button>
    );
};

export default ThemeToggle;
