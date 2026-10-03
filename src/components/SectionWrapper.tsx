import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Scroll reveal that never hides content.
 *
 * Deliberately animates transform only — opacity stays at 1. If JavaScript is
 * slow, the IntersectionObserver never fires, or a crawler renders without
 * scrolling, the section is still fully visible and readable. Fading from
 * opacity 0 would leave below-the-fold content blank in those cases.
 */
const SectionWrapper = ({ children, className = "", id }: Props) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
