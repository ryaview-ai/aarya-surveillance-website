import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Network, Wrench, PackageSearch, ClipboardCheck, Hammer, ArrowRight, Home, Building2, Factory, Landmark } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Seo from "@/components/Seo";

const segments = [
  { icon: Home,      label: "Residential" },
  { icon: Building2, label: "Commercial" },
  { icon: Factory,   label: "Industrial" },
  { icon: Landmark,  label: "Government" },
];

const services = [
  {
    id: "repair",
    icon: Wrench,
    title: "Multi-Brand Camera Repair",
    tagline: "Our core service.",
    status: "live",
    desc: "Component-level repair for CCTV and IP cameras of any make — including end-of-life models the manufacturer has stopped supporting. Your OEM services only their own brand; we take in the rest. Every unit gets a written fault diagnostic before any work begins.",
    features: [
      "IP & Network Cameras",
      "PTZ Motor, Zoom & Drive Faults",
      "Dome & Bullet Cameras",
      "End-of-Life (EOL) Models",
      "Power & PoE Faults",
      "Image Sensor & Optics",
      "IR Illuminator Failure",
      "Board-Level Component Repair",
    ],
    segments: ["Commercial", "Industrial", "Government"],
  },
  {
    id: "supply",
    icon: PackageSearch,
    title: "Equipment Supply",
    tagline: "The right kit, honestly specified.",
    status: "live",
    desc: "Cameras, recorders, switches, storage and IT hardware sourced through authorised distributors. We assess your site first and tell you what actually fits — including when repairing what you already own is the better call.",
    features: [
      "IP & Analogue Cameras",
      "NVR / DVR Systems",
      "PoE Switches & Network Gear",
      "Storage & Server Hardware",
      "UPS & Power Protection",
      "Structured Cabling Material",
      "Replacement Parts",
      "Multi-Brand Sourcing",
    ],
    segments: ["Residential", "Commercial", "Industrial", "Government"],
  },
  {
    id: "amc",
    icon: ClipboardCheck,
    title: "Annual Maintenance Contracts (AMC)",
    tagline: "One vendor for a mixed estate.",
    status: "live",
    desc: "Most AMC providers cover the brand they sold you. We cover the whole estate whatever mix it contains — scheduled health checks, priority response, and documented incident reports. One vendor, one invoice, no finger-pointing.",
    features: [
      "Scheduled Preventive Maintenance",
      "Priority Response",
      "Multi-Brand Coverage",
      "Camera Cleaning & Calibration",
      "Firmware & Software Updates",
      "Remote Diagnostics",
      "Incident Reports & Logs",
      "Renewal Reminders",
    ],
    segments: ["Commercial", "Industrial", "Government"],
  },
  {
    id: "networking",
    icon: Network,
    title: "Networking & IT Infrastructure",
    tagline: "The backbone behind the cameras.",
    status: "live",
    desc: "Structured cabling, NVR connectivity, PoE switching and LAN configuration — the groundwork that decides whether a camera estate is stable or permanently troublesome.",
    features: [
      "Structured Cabling & CAT6",
      "LAN / WAN Configuration",
      "NVR / DVR Connectivity",
      "PoE Switch Installation",
      "Wireless Network Setup",
      "Storage Integration",
      "VPN & Remote Access",
      "Network Security Basics",
    ],
    segments: ["Commercial", "Industrial", "Government"],
  },
  {
    id: "installation",
    icon: Hammer,
    title: "Turnkey Installation & AI Video Analytics",
    tagline: "Being straight with you: we're building toward this.",
    status: "building",
    desc: "We are growing into full turnkey installation and AI-based video analytics — intrusion detection, LPR, people counting and the rest. We have not yet delivered these at scale, and we are not going to claim otherwise. If you need a proven installation partner today, tell us and we will say so plainly rather than take the job and learn on your site.",
    features: [
      "Full site survey & system design",
      "End-to-end installation & commissioning",
      "Intrusion detection & alerting",
      "License Plate Recognition (LPR)",
      "People counting & zone analytics",
      "Dashboard & reporting",
    ],
    segments: ["Commercial", "Industrial", "Government"],
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { x: -8 },
  visible: { x: 0, transition: { duration: 0.4 } },
};

const Services = () => (
  <main>
    <Seo
      title="Camera Repair, Supply & AMC Services | Aarya Surveillance Secunderabad"
      description="Multi-brand CCTV camera repair, equipment supply, AMC and networking services in Secunderabad and Hyderabad. Honest about what we deliver today and what we're still building."
      path="/services"
    />
    {/* Hero */}
    <section className="bg-charcoal pt-28 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-3xl/[1.2] sm:text-4xl/[1.2] lg:text-5xl/[1.2] font-bold text-charcoal-foreground mb-3 text-balance">
              What We <span className="text-secondary">Offer</span>
            </h1>
            <p className="text-charcoal-foreground/60 text-lg max-w-2xl">
              Repair is what we do most of, and what we do best. Below is every service we
              offer — clearly marked by what we deliver today and what we're still building.
            </p>
          </motion.div>

          {/* The honest status list, stated up front rather than discovered by
              scrolling. Built from the same data as the sections below. */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="hidden lg:block lg:col-span-5"
          >
            {services.map((service, i) => (
              <li
                key={service.title}
                className={`flex items-center justify-between gap-5 py-3.5 ${i === 0 ? "" : "border-t border-charcoal-foreground/10"}`}
              >
                <span className="text-[15px] text-charcoal-foreground/85">{service.title}</span>
                <span
                  className={`shrink-0 text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${
                    service.status === "live"
                      ? "bg-secondary/15 text-secondary"
                      : "bg-charcoal-foreground/10 text-charcoal-foreground/50"
                  }`}
                >
                  {service.status === "live" ? "Today" : "Building"}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>

    {/* Services */}
    {services.map((service, idx) => (
      <SectionWrapper
        key={service.id}
        id={service.id}
        className={`py-20 ${idx % 2 === 0 ? "bg-background" : "bg-muted"}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                <service.icon size={26} />
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                  service.status === "live"
                    ? "bg-secondary/15 text-secondary-foreground"
                    : "bg-muted-foreground/10 text-muted-foreground"
                }`}>
                  {service.status === "live" ? "Available now" : "Building toward this"}
                </span>
              </div>
              <p className="text-secondary text-[13px] font-semibold mb-2">
                {service.tagline}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>

              {/* Segments */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.segments.map((seg) => {
                  const match = segments.find((s) => s.label === seg);
                  return match ? (
                    <span
                      key={seg}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-medium border border-primary/15"
                    >
                      <match.icon size={12} />
                      {seg}
                    </span>
                  ) : null;
                })}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:brightness-110 transition-all"
              >
                {service.status === "live" ? "Enquire About This Service" : "Ask Where We Stand"} <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right — features */}
            <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  What's Included
                </p>
                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {service.features.map((f) => (
                    <motion.li
                      key={f}
                      variants={item}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="w-5 h-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 text-xs font-bold">
                        ✓
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    ))}

    {/* CTA */}
    <section className="py-16 bg-charcoal text-center">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <h2 className="text-2xl font-bold text-charcoal-foreground mb-4">
          Not Sure Which Service You Need?
        </h2>
        <p className="text-charcoal-foreground/60 mb-8">
          Use our smart enquiry form and we'll figure it out together — no technical
          knowledge required from your side.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-bold hover:brightness-110 transition-all"
        >
          Get a Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </main>
);

export default Services;
