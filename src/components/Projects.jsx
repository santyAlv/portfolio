import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, role, description, tags, source_code_link, live_link }) => (
    <motion.article
        variants={fadeIn("", "tween", 0.1 + index * 0.1, 0.5)}
        className="card p-5 sm:p-7"
        aria-labelledby={`project-${index}-title`}
    >
        <ul className="flex flex-wrap gap-1.5 list-none" aria-label={`${name} technologies`}>
            {tags.map((tag) => (
                <li key={`${name}-${tag.name}`} className="tag-pill">
                    {tag.name}
                </li>
            ))}
        </ul>

        <h3 id={`project-${index}-title`} className={`${styles.cardTitle} mt-4 break-words`}>
            {name}
        </h3>

        <p className="mt-3 text-fg text-sm sm:text-[15px] leading-[1.7] max-w-2xl">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2.5">
            {live_link && (
                <a href={live_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <Icon icon="mdi:open-in-new" className="w-4 h-4" aria-hidden="true" />
                    Live Site
                </a>
            )}
            <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${live_link ? "btn-secondary" : "btn-primary"}`}
            >
                <Icon icon="mdi:github" className="w-4 h-4" aria-hidden="true" />
                Github
            </a>
        </div>

        {role && <p className="mt-5 text-muted text-xs">Role : {role}</p>}
    </motion.article>
);

const Projects = () => {
    return (
        <>
            <motion.h2 variants={fadeIn("", "tween", 0, 0.5)} className={styles.sectionHeadText}>
                Works
            </motion.h2>

            <motion.p variants={fadeIn("", "tween", 0.05, 0.5)} className="mt-3 text-muted text-sm sm:text-[15px] max-w-2xl leading-[1.7]">
                Products where I owned code, architecture, and deployment — from idea to production.
            </motion.p>

            <div className="mt-6 flex flex-col gap-5">
                {projects.map((project, index) => (
                    <ProjectCard key={project.name} index={index} {...project} />
                ))}
            </div>

            <div className="mt-8">
                <a
                    href="https://github.com/santyAlv?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                >
                    More on GitHub
                    <span aria-hidden="true">→</span>
                </a>
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
