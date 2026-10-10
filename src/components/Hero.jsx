import { useEffect, useState } from "react";

import { styles } from "../styles";
import SocialLinks from "./SocialLinks";

const TERMINAL_LINES = [
    "Hi, I'm Santiago 👋",
    "I build web products that ship.",
    "SaaS, stores, and learning tools.",
];

const useTypewriter = (lines) => {
    const [text, setText] = useState("");

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setText(lines[0]);
            return undefined;
        }

        let line = 0;
        let length = 0;
        let deleting = false;
        let timeout;

        const tick = () => {
            const current = Array.from(lines[line]);

            length += deleting ? -1 : 1;
            setText(current.slice(0, length).join(""));

            let delay = deleting ? 30 : 65;

            if (!deleting && length === current.length) {
                deleting = true;
                delay = 2200;
            } else if (deleting && length === 0) {
                deleting = false;
                line = (line + 1) % lines.length;
                delay = 400;
            }

            timeout = setTimeout(tick, delay);
        };

        timeout = setTimeout(tick, 600);
        return () => clearTimeout(timeout);
    }, [lines]);

    return text;
};

const HeroIllustration = () => (
    <svg
        viewBox="0 0 320 240"
        className="w-full max-w-[340px] text-fg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        {/* desk */}
        <path d="M20 200h280" />
        {/* laptop */}
        <rect x="80" y="70" width="160" height="104" rx="8" />
        <path d="M60 200l20-26h160l20 26" />
        {/* code on screen */}
        <path d="M112 108l-14 14 14 14M148 108l14 14-14 14M136 102l-12 40" />
        <path d="M180 112h36M180 126h24M180 140h30" strokeWidth="2" />
        {/* idea */}
        <g className="text-amber-500" strokeWidth="2">
            <path d="M270 40a14 14 0 1 0-20 12.6V60h12v-7.4A14 14 0 0 0 270 40z" fill="currentColor" fillOpacity="0.9" />
            <path d="M251 66h10M256 14v-6M280 22l4-4M232 22l-4-4" />
        </g>
    </svg>
);

const Hero = () => {
    const typed = useTypewriter(TERMINAL_LINES);

    return (
        <section id="home" className="relative w-full pt-32 pb-16 sm:pt-40 sm:pb-24" aria-labelledby="hero-heading">
            <div className={`${styles.container} grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-6 items-center`}>
                <div className="min-w-0">
                    <h1 id="hero-heading" className={styles.heroHeadText}>
                        Santiago Alvarez /
                        <br />
                        Full-Stack Developer
                    </h1>

                    <div className="terminal mt-6 max-w-md" role="img" aria-label={`Terminal: ${TERMINAL_LINES.join(" ")}`}>
                        <div className="flex gap-1.5 mb-3" aria-hidden="true">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        </div>
                        <p aria-hidden="true" className="min-h-[1.6em] break-words">
                            <span className="text-emerald-400">santi:~$</span> {typed}
                            <span className="terminal-cursor" />
                        </p>
                    </div>

                    <SocialLinks className="mt-6" />
                </div>

                <div className="hidden md:flex justify-end">
                    <HeroIllustration />
                </div>
            </div>
        </section>
    );
};

export default Hero;
