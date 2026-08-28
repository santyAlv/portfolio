import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const difficultyLabels = {
    advanced: "Advanced",
    intermediate: "Intermediate",
};

const ProjectCard = ({
    index,
    name,
    role,
    difficulty,
    bentoClass,
    description,
    tags,
    source_code_link,
    live_link,
}) => (
    <motion.article
        variants={fadeIn("up", "spring", index * 0.2, 0.6)}
        className={`bento-card flex flex-col h-full ${bentoClass || ""}`}
        aria-labelledby={`project-${index}-title`}
    >
        {difficulty && (
            <div className="flex justify-end mb-3 sm:mb-4">
                <span className={`difficulty-badge difficulty-${difficulty}`}>
                    {difficultyLabels[difficulty]}
                </span>
            </div>
        )}

        <h3
            id={`project-${index}-title`}
            className="font-display text-white font-bold text-[20px] sm:text-[22px] leading-tight break-words"
        >
            <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
            >
                {name}
            </a>
        </h3>

        {role && (
            <p className="font-mono text-accent/90 text-[11px] sm:text-[12px] mt-1.5 uppercase tracking-wide">
                {role}
            </p>
        )}

        <p className="mt-3 text-secondary text-[14px] sm:text-[15px] leading-[1.65] flex-grow">{description}</p>

        <ul className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 list-none" aria-label={`${name} technologies`}>
            {tags.map((tag) => (
                <li key={`${name}-${tag.name}`} className="tag-pill">
                    {tag.name}
                </li>
            ))}
        </ul>

        <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
            <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-[12px] sm:text-[13px] no-link-style"
            >
                Code
            </a>
            {live_link && (
                <a
                    href={live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gradient cyan-blue-gradient text-[12px] sm:text-[13px] no-link-style"
                >
                    Live site
                </a>
            )}
        </div>
    </motion.article>
);

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Selected work</p>
                <h2 className={`${styles.sectionHeadText} mt-3`}>
                    Projects<span className="text-accent">.</span>
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[15px] sm:text-[16px] max-w-2xl leading-[1.7]"
            >
                Products where I owned code, architecture, and deployment — from idea to production.
            </motion.p>

            <div className="section-rule mt-8 sm:mt-10" aria-hidden="true" />

            <div className="bento-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={project.name} index={index} {...project} />
                ))}
            </div>

            <div className="flex justify-center mt-10 sm:mt-12">
                <a
                    href="https://github.com/santyAlv?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-wrap cyan-blue-gradient no-link-style w-full sm:w-auto"
                >
                    <span className="btn btn-primary px-6 py-2.5 text-center w-full sm:w-auto text-[14px]">
                        More on GitHub →
                    </span>
                </a>
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
