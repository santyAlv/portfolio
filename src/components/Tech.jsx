import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { languages, tools } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SkillBadge = ({ name, badge }) => (
    <li className="transition-transform duration-200 hover:scale-[1.03]">
        <img src={badge} alt={name} className="h-7 sm:h-8 max-w-full rounded-md" loading="lazy" />
    </li>
);

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Stack</p>
                <h2 className={`${styles.sectionHeadText} mt-3`}>
                    Skills<span className="text-accent">.</span>
                </h2>
            </motion.div>

            <div className="section-rule mt-8 sm:mt-10" aria-hidden="true" />

            <div className="bento-grid">
                <motion.article variants={fadeIn("left", "spring", 0.1, 0.6)} className="bento-card bento-wide">
                    <h3 className="font-mono text-accent/90 text-xs uppercase tracking-widest mb-4">Languages</h3>
                    <ul className="flex flex-wrap gap-2 sm:gap-2.5 list-none">
                        {languages.map((skill) => (
                            <SkillBadge key={skill.name} {...skill} />
                        ))}
                    </ul>
                </motion.article>

                <motion.article variants={fadeIn("right", "spring", 0.2, 0.6)} className="bento-card bento-wide">
                    <h3 className="font-mono text-accent/90 text-xs uppercase tracking-widest mb-4">
                        Tools &amp; tech
                    </h3>
                    <ul className="flex flex-wrap gap-2 sm:gap-2.5 list-none">
                        {tools.map((skill) => (
                            <SkillBadge key={skill.name} {...skill} />
                        ))}
                    </ul>
                </motion.article>
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "skills");
