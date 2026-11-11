import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

/**
 * Process steps on a rail that fills as the section scrolls through the
 * viewport; each step lights when the fill reaches it. Every step is fully
 * readable before it lights — the dim state lowers emphasis, not legibility —
 * and with reduced motion all steps are lit from the start.
 */
const ProcessTimeline = ({ steps }: { steps: Step[] }) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [lit, setLit] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const n = Math.min(steps.length, Math.floor(p * steps.length + 0.35));
    setLit((cur) => (cur === n ? cur : n));
  });

  const litCount = reduceMotion ? steps.length : lit;

  return (
    <ol ref={ref} className="relative grid grid-cols-1 lg:grid-cols-4 gap-y-10 lg:gap-x-8 max-w-5xl mx-auto">
      {/* Rail: vertical on small screens, horizontal on large. */}
      <div aria-hidden="true" className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10 lg:left-0 lg:right-0 lg:top-[19px] lg:bottom-auto lg:h-px lg:w-auto">
        <motion.div
          className="absolute inset-0 bg-secondary origin-top lg:origin-left hidden lg:block"
          style={{ scaleX: reduceMotion ? 1 : fill }}
        />
        <motion.div
          className="absolute inset-0 bg-secondary origin-top lg:hidden"
          style={{ scaleY: reduceMotion ? 1 : fill }}
        />
      </div>

      {steps.map((s, i) => {
        const on = i < litCount;
        return (
          <li key={s.title} className="relative pl-14 lg:pl-0 lg:pt-16">
            <div
              className={`absolute left-0 top-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-500 ${
                on ? "border-secondary bg-secondary text-secondary-foreground" : "border-white/20 bg-charcoal text-white/50"
              }`}
            >
              <s.icon size={18} />
            </div>
            <p className={`font-mono text-[11px] tracking-[0.2em] mb-2 transition-colors duration-500 ${on ? "text-secondary" : "text-white/40"}`}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className={`text-xl font-semibold tracking-tight mb-2 transition-colors duration-500 ${on ? "text-white" : "text-white/70"}`}>
              {s.title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default ProcessTimeline;
