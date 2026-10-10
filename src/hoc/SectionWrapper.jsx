import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.container} py-12 sm:py-16 relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
