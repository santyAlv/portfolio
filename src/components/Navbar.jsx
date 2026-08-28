import { useEffect, useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import useActiveSection from "../utils/useActiveSection";

const sectionIds = navLinks.map((link) => link.id.replace("#", ""));

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activeSection = useActiveSection(sectionIds);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = toggle ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [toggle]);

    const isActive = (navId) => activeSection === navId.replace("#", "");

    return (
        <header className={`${styles.paddingX} w-full fixed top-0 z-30 pt-3 sm:pt-4`}>
            <nav
                aria-label="Main navigation"
                className={`w-full max-w-5xl mx-auto rounded-2xl transition-[background-color,box-shadow,padding] duration-300 ease-out ${
                    scrolled || toggle
                        ? "py-3 px-4 sm:px-6 bg-black-100/90 backdrop-blur-xl shadow-nav"
                        : "py-4 sm:py-5 bg-transparent shadow-none"
                }`}
            >
                <div className="relative flex items-center justify-end w-full min-h-[40px]">
                    <ul
                        className={`hidden md:flex items-center gap-7 lg:gap-9 list-none transition-all duration-300 ease-out ${
                            scrolled ? "absolute left-1/2 -translate-x-1/2" : ""
                        }`}
                        role="list"
                    >
                        {navLinks.map((nav) => (
                            <li key={nav.id}>
                                <a
                                    href={nav.id}
                                    aria-current={isActive(nav.id) ? "page" : undefined}
                                    className={`nav-link no-link-style ${
                                        isActive(nav.id) ? "nav-link-active text-white" : "text-secondary hover:text-white"
                                    }`}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className="md:hidden shrink-0 p-1.5 bg-transparent border-none rounded-lg hover:bg-white/5 transition-colors"
                        aria-label={toggle ? "Close menu" : "Open menu"}
                        aria-expanded={toggle}
                        onClick={() => setToggle(!toggle)}
                    >
                        <img
                            src={toggle ? close : menu}
                            alt=""
                            className="w-6 h-6 object-contain opacity-80"
                            aria-hidden="true"
                        />
                    </button>

                    {toggle && (
                        <>
                            <button
                                type="button"
                                className="md:hidden fixed inset-0 top-[72px] bg-black/60 backdrop-blur-sm z-40 border-none cursor-default"
                                aria-label="Close menu"
                                onClick={() => setToggle(false)}
                            />
                            <div
                                className="md:hidden fixed top-[72px] left-4 right-4 z-50 p-5 black-gradient rounded-xl border border-accent/15 shadow-card"
                                role="dialog"
                                aria-label="Navigation menu"
                            >
                                <ul className="list-none flex flex-col gap-1" role="list">
                                    {navLinks.map((nav) => (
                                        <li key={nav.id}>
                                            <a
                                                href={nav.id}
                                                aria-current={isActive(nav.id) ? "page" : undefined}
                                                className={`block py-2.5 px-2 rounded-lg text-[16px] font-medium transition-colors ${
                                                    isActive(nav.id)
                                                        ? "text-white bg-accent/10"
                                                        : "text-secondary hover:text-white hover:bg-white/5"
                                                }`}
                                                onClick={() => setToggle(false)}
                                            >
                                                {nav.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
