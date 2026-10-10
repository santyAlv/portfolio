import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { languages, tools } from "../constants";
import { fadeIn } from "../utils/motion";

const SkillGroup = ({ title, skills }) => (
    <div className="card p-5 sm:p-6">
        <h3 className="text-fg text-sm font-semibold mb-4">{title}</h3>
        <ul className="flex flex-wrap gap-2 list-none">
            {skills.map((skill) => (
                <li key={skill.name} className="tag-pill">
                    {skill.name}
                </li>
            ))}
        </ul>
    </div>
);

const Tech = () => {
    return (
        <>
            <motion.h2 variants={fadeIn("", "tween", 0, 0.5)} className={styles.sectionHeadText}>
                Skills
            </motion.h2>

            <motion.div variants={fadeIn("", "tween", 0.1, 0.5)} className="mt-6 grid md:grid-cols-2 gap-4">
                <SkillGroup title="Languages" skills={languages} />
                <SkillGroup title="Tools & tech" skills={tools} />
            </motion.div>
        </>
    );
};

export default SectionWrapper(Tech, "skills");
