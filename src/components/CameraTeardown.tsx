import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/**
 * Scroll-driven teardown of a dome camera.
 *
 * One generated render was cut into seven transparent layers (the housing is
 * split into a back and a front half so the lens can sit inside it). Each
 * layer is placed at its exploded position and slid down by `collapse` to
 * build the assembled camera. Scrolling drives a single progress value:
 * assemble -> explode, then one part at a time is brought forward.
 *
 * Transform and opacity only. All text is in the DOM from the first render,
 * so the prerendered HTML carries it whether or not the script runs.
 */

const SRC_W = 1024;
const SRC_H = 1536;

interface Layer {
  file: string;
  part: number; // index into `parts`
  x: number;
  y: number;
  w: number;
  h: number;
  collapse: number; // px (source space) to slide down when assembled
}

// Paint order, back to front.
const layers: Layer[] = [
  { file: "base",          part: 5, x: 224, y: 1212, w: 552, h: 310, collapse: 0 },
  { file: "board",         part: 4, x: 281, y: 1006, w: 435, h: 207, collapse: 270 },
  { file: "housing_back",  part: 1, x: 224, y: 311,  w: 565, h: 221, collapse: 974 },
  { file: "ir",            part: 3, x: 293, y: 792,  w: 422, h: 212, collapse: 455 },
  { file: "lens",          part: 2, x: 365, y: 540,  w: 286, h: 243, collapse: 650 },
  { file: "housing_front", part: 1, x: 224, y: 311,  w: 565, h: 221, collapse: 974 },
  { file: "dome",          part: 0, x: 260, y: 6,    w: 496, h: 302, collapse: 1052 },
];

interface Part {
  name: string;
  fails: string;
  /** Wording taken from the "what we fix" list on /repair. Omitted where
   *  that list makes no matching claim. */
  onRepairList?: string;
  /** What Aarya does about it, as stated by the owner. */
  whatWeDo?: string;
}

const parts: Part[] = [
  {
    name: "Dome cover",
    fails:
      "Scratches, haze and UV yellowing soften the picture. At night a worn or dirty dome throws infrared back into the lens and the image turns milky white.",
    whatWeDo:
      "Domes are cleaned and professionally refurbished. Replacement domes are not always available, so a new one depends on whether a match can be sourced.",
  },
  {
    name: "Housing and seals",
    fails:
      "When a gasket ages, moisture gets in. Condensation fogs the dome from the inside, and corrosion on the boards follows.",
  },
  {
    name: "Lens and sensor module",
    fails:
      "Soft focus, an IR-cut filter stuck in one position — a pink image by day or a dark one at night — and dead lines from a failing sensor.",
    onRepairList: "Image sensor and optics issues",
  },
  {
    name: "IR LED ring",
    fails:
      "LEDs or their driver burn out. The camera looks fine in daylight and goes dark or patchy after sunset.",
    onRepairList: "IR illuminator failure",
  },
  {
    name: "Main board",
    fails:
      "A surge on the network or power line takes out the PoE stage or the Ethernet port. The camera won't power up, or keeps dropping off the network.",
    onRepairList: "Power and PoE faults · Board-level and component repair",
    whatWeDo:
      "Where a board is beyond repair, the PCB can be replaced — subject to a replacement being available.",
  },
  {
    name: "Base and connections",
    fails:
      "Corroded connectors and damaged cable tails cause intermittent dropouts that look exactly like a camera fault.",
  },
];

// Scroll timeline (fractions of the pinned section).
const EXPLODE_START = 0.04;
const EXPLODE_END = 0.24;
const STEPS_START = 0.26;
const STEPS_END = 0.97;
const STEP = (STEPS_END - STEPS_START) / parts.length;

const pct = (n: number, of: number) => `${(n / of) * 100}%`;

const LayerImg = ({ layer, dimmed }: { layer: Layer; dimmed: boolean }) => (
  <img
    src={`/teardown/${layer.file}.webp`}
    alt=""
    width={layer.w}
    height={layer.h}
    decoding="async"
    draggable={false}
    className="absolute h-auto select-none transition-opacity duration-500"
    style={{
      left: pct(layer.x, SRC_W),
      top: pct(layer.y, SRC_H),
      width: pct(layer.w, SRC_W),
      opacity: dimmed ? 0.3 : 1,
    }}
  />
);

const ScrollLayer = ({
  layer,
  progress,
  dimmed,
}: {
  layer: Layer;
  progress: MotionValue<number>;
  dimmed: boolean;
}) => {
  const y = useTransform(
    progress,
    [EXPLODE_START, EXPLODE_END],
    [pct(layer.collapse, SRC_H), "0%"],
    { clamp: true },
  );
  return (
    <motion.div className="absolute inset-0" style={{ y }}>
      <LayerImg layer={layer} dimmed={dimmed} />
    </motion.div>
  );
};

const Caption = () => (
  <p className="text-[10px] text-white/35 tracking-[0.14em] uppercase font-mono">
    Illustration — generated render of a generic dome camera, not a specific product
  </p>
);

const PartCopy = ({ part, index }: { part: Part; index: number }) => (
  <>
    <p className="font-mono text-[11px] tracking-[0.2em] text-secondary-dark mb-4">
      {String(index + 1).padStart(2, "0")} / {String(parts.length).padStart(2, "0")}
    </p>
    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-4 lg:mb-6">
      {part.name}
    </h3>
    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
      What goes wrong
    </p>
    <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-md">
      {part.fails}
    </p>
    {part.whatWeDo && (
      <p className="mt-4 lg:mt-6 text-xs sm:text-sm text-white/70 leading-relaxed max-w-md border-l border-secondary-dark/60 pl-3">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase block text-white/40 mb-0.5">
          What we do
        </span>
        {part.whatWeDo}
      </p>
    )}
    {part.onRepairList && (
      <p className="mt-4 lg:mt-6 inline-flex items-start gap-2 text-xs sm:text-sm text-secondary-dark border-l border-secondary-dark/60 pl-3">
        <span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase block text-white/40 mb-0.5">
            On our repair list
          </span>
          {part.onRepairList}
        </span>
      </p>
    )}
  </>
);

const CameraTeardown = () => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(-1); // -1 = intro, before the explode

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next =
      p < EXPLODE_END - 0.04
        ? -1
        : Math.min(parts.length - 1, Math.max(0, Math.floor((p - STEPS_START) / STEP)));
    setActive((cur) => (cur === next ? cur : next));
  });

  // Assembled, the camera fills only the bottom third of the frame. Scale it
  // up and lift it to centre, then relax to 1:1 as the parts separate.
  const rigScale = useTransform(scrollYProgress, [EXPLODE_START, EXPLODE_END], [1.75, 1], { clamp: true });
  const rigY = useTransform(scrollYProgress, [EXPLODE_START, EXPLODE_END], ["-57%", "0%"], { clamp: true });
  const hintOpacity = useTransform(scrollYProgress, [0, EXPLODE_START + 0.03], [1, 0], { clamp: true });

  /* Reduced motion: no pinning, no movement. Exploded view beside the full list. */
  if (reduceMotion) {
    return (
      <section className="bg-ink py-20" aria-labelledby="teardown-title">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative mx-auto w-full max-w-[360px]" style={{ aspectRatio: `${SRC_W} / ${SRC_H}` }} aria-hidden="true">
              {layers.map((l) => (
                <LayerImg key={l.file} layer={l} dimmed={false} />
              ))}
            </div>
            <div className="mt-6 text-center"><Caption /></div>
          </div>
          <div>
            <h2 id="teardown-title" className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-10">
              Inside a dome camera — <span className="text-secondary-dark">and what fails.</span>
            </h2>
            <ol className="space-y-10">
              {parts.map((p, i) => (
                <li key={p.name}><PartCopy part={p} index={i} /></li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-ink h-[520vh]" aria-labelledby="teardown-title">
      <div className="sticky top-0 h-screen h-[100svh] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 h-full grid grid-rows-[minmax(0,46%)_minmax(0,1fr)] lg:grid-rows-1 lg:grid-cols-2 gap-4 lg:gap-12 pt-20 pb-6 lg:pt-24 lg:pb-10">

          {/* Rig */}
          <div className="relative lg:order-2 flex items-center justify-center min-h-0" aria-hidden="true">
            <motion.div
              className="relative h-full max-h-[760px] will-change-transform"
              style={{ aspectRatio: `${SRC_W} / ${SRC_H}`, scale: rigScale, y: rigY }}
            >
              {layers.map((l) => (
                <ScrollLayer
                  key={l.file}
                  layer={l}
                  progress={scrollYProgress}
                  dimmed={active >= 0 && l.part !== active}
                />
              ))}
            </motion.div>
          </div>

          {/* Copy */}
          <div className="relative lg:order-1 min-h-0">
            {/* Intro */}
            <div
              className={`absolute inset-0 flex flex-col justify-start lg:justify-center transition-all duration-500 ${
                active === -1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-secondary-dark mb-4">
                Teardown
              </p>
              <h2 id="teardown-title" className="text-3xl/[1.1] sm:text-4xl/[1.1] lg:text-6xl/[1.05] font-semibold tracking-tight text-white mb-5 text-balance">
                Inside a dome camera — <span className="text-secondary-dark">and what fails.</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-md leading-relaxed">
                Six parts. Any one of them can take a camera off your wall. Often the rest
                of the unit is still good.
              </p>
              <motion.p
                style={{ opacity: hintOpacity }}
                className="mt-6 lg:mt-10 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40"
              >
                Scroll to open it ↓
              </motion.p>
            </div>

            {/* Steps */}
            {parts.map((p, i) => (
              <div
                key={p.name}
                aria-hidden={active !== i}
                className={`absolute inset-0 flex flex-col justify-start lg:justify-center transition-all duration-500 ${
                  active === i
                    ? "opacity-100 translate-y-0"
                    : `opacity-0 pointer-events-none ${active > i ? "-translate-y-4" : "translate-y-4"}`
                }`}
              >
                <PartCopy part={p} index={i} />
                {i === parts.length - 1 && (
                  <Link
                    to="/repair"
                    tabIndex={active === i ? 0 : -1}
                    className="mt-6 lg:mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-secondary-dark transition-colors"
                  >
                    See how repair works <ArrowRight size={15} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step ticks + caption */}
        <div className="absolute bottom-3 inset-x-0 px-4 lg:px-8 flex items-end justify-between gap-4 pointer-events-none">
          <div className="hidden lg:block"><Caption /></div>
          <div className="flex gap-1.5 mx-auto lg:mx-0" aria-hidden="true">
            {parts.map((p, i) => (
              <span
                key={p.name}
                className={`h-[2px] w-7 transition-colors duration-300 ${
                  i === active ? "bg-secondary-dark" : i < active ? "bg-white/40" : "bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraTeardown;
