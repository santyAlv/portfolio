import { motion } from "framer-motion";
import { styles } from "../styles";
import { socialLinks } from "../constants";
import SocialIcon from "./SocialIcon";

const socialButtons = [
    { href: socialLinks.github, icon: "GitHub", label: "GitHub", external: true },
    { href: `mailto:${socialLinks.email}`, icon: "Email", label: "Email", external: false },
    { href: socialLinks.instagram, icon: "Instagram", label: "Instagram", external: true },
];

const Hero = () => {
    return (
        <section
            className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden"
            aria-labelledby="hero-heading"
        >
            <div className="hero-mesh" aria-hidden="true" />
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-fade" aria-hidden="true" />

            <div className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} pt-28 pb-24 sm:pt-36 sm:pb-28`}>
                <div className="max-w-2xl sm:max-w-3xl">
                    <h1 id="hero-heading" className={styles.heroHeadText}>
                        Hi, I&apos;m Santiago
                        <br />
                        Alvarez
                    </h1>

                    <p className="mt-5 sm:mt-6 text-secondary text-[15px] sm:text-[17px] max-w-xl leading-[1.65] font-sans font-normal">
                        I build web products that ship — SaaS, stores, and learning tools with real users behind
                        them.
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
                        {socialButtons.map(({ href, icon, label, external }) => (
                            <a
                                key={label}
                                href={href}
                                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                aria-label={label}
                                className="btn-outline-wrap cyan-blue-gradient shadow-card no-link-style"
                            >
                                <span className="btn btn-primary p-3 sm:p-3.5 text-white">
                                    <SocialIcon name={icon} className="w-6 h-6 sm:w-7 sm:h-7" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center pointer-events-none">
                <a href="#about" aria-label="Go to about section" className="pointer-events-auto no-link-style">
                    <div className="w-[30px] h-[52px] sm:w-[35px] sm:h-[64px] rounded-3xl border-[3px] sm:border-4 border-secondary flex justify-center items-start p-1.5 sm:p-2">
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
