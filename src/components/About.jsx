import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { styles } from "../styles";
import { services, socialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const About = () => {
    return (
        <>
            <motion.h2 variants={fadeIn("", "tween", 0, 0.5)} className={styles.sectionHeadText}>
                About Me
            </motion.h2>

            <motion.div variants={fadeIn("", "tween", 0.1, 0.5)} className={`${styles.bodyText} mt-5 space-y-5`}>
                <p>
                    Hello, I&apos;m <strong className="font-bold">Santiago Alvarez</strong>, a student one year from
                    graduating.
                </p>
                <p>
                    I split time between front-end craft and back-end systems — always aiming for products people
                    actually use.
                </p>
                <p>
                    Feel free to{" "}
                    <a href={`mailto:${socialLinks.email}`} className="text-link">
                        contact me
                    </a>{" "}
                    at {socialLinks.email}.
                </p>
            </motion.div>

            <motion.ul
                variants={fadeIn("", "tween", 0.2, 0.5)}
                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 list-none"
            >
                {services.map((service) => (
                    <li key={service.title} className="card p-4 flex flex-col gap-3">
                        <Icon icon={service.icon} className="w-6 h-6 text-fg" aria-hidden="true" />
                        <span className="text-fg text-sm font-semibold leading-snug">{service.title}</span>
                    </li>
                ))}
            </motion.ul>
        </>
    );
};

export default SectionWrapper(About, "about");
