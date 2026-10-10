import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { fadeIn } from "../utils/motion";

const ExperienceCard = ({ index, title, company_name, company_link, date, location, description, points }) => (
    <motion.article
        variants={fadeIn("", "tween", 0.1 + index * 0.1, 0.5)}
        className="card p-5 sm:p-7"
        aria-labelledby={`experience-${index}-title`}
    >
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <div className="min-w-0">
                <h3 id={`experience-${index}-title`} className={styles.cardTitle}>
                    {title}
                </h3>
                <p className="mt-1.5 text-sm">
                    <a href={company_link} target="_blank" rel="noopener noreferrer" className="text-link">
                        {company_name}
                    </a>
                    {location && <span className="text-muted"> · {location}</span>}
                </p>
            </div>
            <span className="tag-pill">{date}</span>
        </div>

        <p className="mt-4 text-fg text-sm sm:text-[15px] leading-[1.7]">{description}</p>

        <ul className="mt-4 space-y-2 list-none text-muted text-sm leading-relaxed">
            {points.map((point) => (
                <li key={point} className="flex gap-2.5">
                    <span className="text-fg shrink-0" aria-hidden="true">
                        –
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
            <motion.h2 variants={fadeIn("", "tween", 0, 0.5)} className={styles.sectionHeadText}>
                Experience
            </motion.h2>

            <div className="mt-6 flex flex-col gap-5">
                {experiences.map((experience, index) => (
                    <ExperienceCard key={experience.company_name} index={index} {...experience} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
