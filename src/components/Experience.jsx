import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ index, title, company_name, company_link, date, location, description, points }) => (
    <motion.article
        variants={fadeIn("up", "spring", index * 0.2, 0.6)}
        className="bento-card bento-wide flex flex-col h-full"
        aria-labelledby={`experience-${index}-title`}
    >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div className="min-w-0">
                <p className="font-mono text-accent/80 text-[11px] sm:text-[12px] font-medium uppercase tracking-widest">
                    {date}
                </p>
                <h3
                    id={`experience-${index}-title`}
                    className="font-display text-white font-bold text-[20px] sm:text-[24px] leading-tight mt-2"
                >
                    {title}
                </h3>
                <p className="mt-1.5 text-[14px] sm:text-[15px]">
                    <a
                        href={company_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link font-semibold"
                    >
                        {company_name}
                    </a>
                    {location && <span className="text-secondary"> · {location}</span>}
                </p>
            </div>
        </div>

        <p className="text-secondary text-[15px] sm:text-[16px] leading-[1.7]">{description}</p>

        <ul className="mt-4 sm:mt-5 space-y-2 list-none text-secondary text-[14px] sm:text-[15px] leading-relaxed">
            {points.map((point) => (
                <li key={point} className="flex gap-2.5">
                    <span className="text-accent mt-1.5 shrink-0" aria-hidden="true">
                        ›
                    </span>
                    <span>{point}</span>
                </li>
            ))}
        </ul>
    </motion.article>
);

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Career</p>
                <h2 className={`${styles.sectionHeadText} mt-3`}>
                    Experience<span className="text-accent">.</span>
                </h2>
            </motion.div>

            <div className="section-rule mt-8 sm:mt-10" aria-hidden="true" />

            <div className="bento-grid">
                {experiences.map((experience, index) => (
                    <ExperienceCard key={experience.company_name} index={index} {...experience} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
