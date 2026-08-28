import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, socialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <motion.article
        variants={fadeIn("right", "spring", index * 0.35, 0.65)}
        className="bento-card flex flex-col items-center justify-center text-center min-h-[170px] sm:min-h-[190px]"
        aria-label={title}
    >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center mb-3 sm:mb-4">
            <img src={icon} alt="" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" aria-hidden="true" />
        </div>
        <h3 className="font-display text-white text-[15px] sm:text-[17px] font-semibold leading-snug px-2">
            {title}
        </h3>
    </motion.article>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={`${styles.sectionHeadText} mt-3`}>
                    About <span className="text-accent">me</span>
                </h2>
            </motion.div>

            <div className="section-rule mt-8 sm:mt-10" aria-hidden="true" />

            <div className="bento-grid">
                <motion.article variants={fadeIn("", "", 0.1, 1)} className="bento-card bento-wide">
                    <p className="text-secondary text-[15px] sm:text-[17px] leading-[1.75]">
                        Student one year from graduating. I split time between front-end craft and back-end
                        systems — always aiming for products people actually use.
                    </p>
                    <p className="mt-5 sm:mt-6 text-white/90 text-[15px] sm:text-[16px]">
                        <span className="font-mono text-accent text-xs uppercase tracking-wider mr-2">Email</span>
                        <a href={`mailto:${socialLinks.email}`} className="text-link">
                            {socialLinks.email}
                        </a>
                    </p>
                </motion.article>

                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
