import { useEffect, useState } from "react";

import { navLinks } from "../constants";
import useActiveSection from "../utils/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const sectionIds = [...navLinks.map((link) => link.id.replace("#", "")), "contact"];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activeSection = useActiveSection(sectionIds);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 8);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (navId) => activeSection === navId.replace("#", "");

    return (
        <header className={`nav-bar fixed top-0 inset-x-0 z-30 ${scrolled || toggle ? "nav-bar-scrolled" : ""} ${toggle ? "nav-bar-open" : ""}`}>
            <nav
                aria-label="Main navigation"
                className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between"
            >
                <a href="#home" className="text-fg text-lg font-black tracking-tight" aria-label="Santiago Alvarez, home">
                    SA.
                </a>

                <ul
                    className="hidden md:flex items-center gap-1 list-none absolute left-1/2 -translate-x-1/2"
                    role="list"
                >
                    {navLinks.map((nav) => (
                        <li key={nav.id}>
                            <a
                                href={nav.id}
                                aria-current={isActive(nav.id) ? "page" : undefined}
                                className={`nav-pill ${isActive(nav.id) ? "nav-pill-active" : ""}`}
                            >
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <ThemeToggle />

                    <a href="#contact" className="btn btn-primary hidden xs:inline-flex">
                        Contact me
                    </a>

                    <button
                        type="button"
                        className="icon-btn md:hidden"
                        aria-label={toggle ? "Close menu" : "Open menu"}
                        aria-expanded={toggle}
                        onClick={() => setToggle(!toggle)}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            aria-hidden="true"
                        >
                            {toggle ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                        </svg>
                    </button>
                </div>
            </nav>

            {toggle && (
                <div className="md:hidden px-5 pb-4" role="dialog" aria-label="Navigation menu">
                    <ul className="list-none flex flex-col gap-1" role="list">
                        {[...navLinks, { id: "#contact", title: "Contact" }].map((nav) => (
                            <li key={nav.id}>
                                <a
                                    href={nav.id}
                                    aria-current={isActive(nav.id) ? "page" : undefined}
                                    className={`nav-pill w-full ${isActive(nav.id) ? "nav-pill-active" : ""}`}
                                    onClick={() => setToggle(false)}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
