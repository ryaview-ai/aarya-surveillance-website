import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Seo from "@/components/Seo";

// ─── DATA ────────────────────────────────────────────────────────────────────

const surveillanceBrands = [
  {
    name: "Axis Communications",
    specialty: "Network Cameras & Access Control",
    desc: "The one surveillance brand we hold a formal partnership with. As a certified Axis Channel Partner we supply Axis hardware directly and support what we sell.",
    tag: "Certified Partner",
    certified: true,
  },
  {
    name: "Honeywell",
    specialty: "Security & Building Management",
    desc: "Sourced to order. We are not a Honeywell partner — we quote, supply and support the units we sell you.",
    tag: "Sourced to order",
    certified: false,
  },
  {
    name: "Bosch",
    specialty: "Professional Video Security",
    desc: "Sourced to order. No formal partnership — we quote, supply and support the units we sell you.",
    tag: "Sourced to order",
    certified: false,
  },
  {
    name: "Hanwha Vision",
    specialty: "Camera Systems & Analytics",
    desc: "Sourced to order. No formal partnership — we quote, supply and support the units we sell you.",
    tag: "Sourced to order",
    certified: false,
  },
  {
    name: "CP Plus",
    specialty: "Cameras, DVRs & NVRs",
    desc: "Sourced to order. Commonly specified on cost-led projects — tell us the model and we'll quote it.",
    tag: "Sourced to order",
    certified: false,
  },
  {
    name: "Pelco",
    specialty: "Enterprise Video Security",
    desc: "Sourced to order. No formal partnership — we quote, supply and support the units we sell you.",
    tag: "Sourced to order",
    certified: false,
  },
  {
    name: "Matrix Comsec",
    specialty: "Access Control & Communication",
    desc: "Sourced to order. Access control, time-attendance and communication hardware, quoted on request.",
    tag: "Sourced to order",
    certified: false,
  },
  {
    name: "Sparsh",
    specialty: "IP Surveillance",
    desc: "Sourced to order. Tell us the model and we'll quote it, or say so if we can't get it.",
    tag: "Sourced to order",
    certified: false,
  },
];

const networkingBrands = [
  {
    name: "Cisco",
    specialty: "Enterprise Networking",
    desc: "Sourced to order. Switching, routing and wireless quoted against your specification.",
    tag: "Sourced to order",
  },
  {
    name: "Ubiquiti",
    specialty: "Wireless & Wired Networks",
    desc: "Sourced to order. Frequently specified on SME and multi-site networks we build.",
    tag: "Sourced to order",
  },
  {
    name: "D-Link",
    specialty: "Networking Hardware",
    desc: "Sourced to order. Tell us the part number and we'll quote it.",
    tag: "Sourced to order",
  },
  {
    name: "TP-Link",
    specialty: "Networking Hardware",
    desc: "Sourced to order. Tell us the part number and we'll quote it.",
    tag: "Sourced to order",
  },
  {
    name: "Netgear",
    specialty: "Business & Home Networking",
    desc: "Sourced to order. Tell us the part number and we'll quote it.",
    tag: "Sourced to order",
  },
];

const itInfrastructureBrands = [
  {
    name: "HP",
    specialty: "Computers, Servers & Printers",
    desc: "Sourced to order. Laptops, desktops, workstations and servers quoted against your requirement.",
    tag: "Sourced to order",
  },
  {
    name: "Dell",
    specialty: "Enterprise Computing & Storage",
    desc: "Sourced to order. Desktops, laptops and servers quoted against your requirement.",
    tag: "Sourced to order",
  },
  {
    name: "APC by Schneider Electric",
    specialty: "Power Protection & UPS",
    desc: "Sourced to order. UPS and power protection sized to the load you give us.",
    tag: "Sourced to order",
  },
];

// ─── ANIMATIONS ──────────────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { y: 20 },
  visible: { y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

const SectionHeader = ({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) => (
  <div className="mb-10">
    <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
      {label}
    </p>
    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{title}</h2>
    <p className="text-muted-foreground text-sm max-w-xl">{subtitle}</p>
  </div>
);

interface BrandCardProps {
  name: string;
  specialty: string;
  desc: string;
  tag: string;
  certified?: boolean;
}

const BrandCard = ({ name, specialty, desc, tag, certified = false }: BrandCardProps) => (
  <motion.div
    variants={item}
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`relative bg-card rounded-2xl p-7 border-2 transition-all duration-300 group overflow-hidden
      ${certified
        ? "border-secondary shadow-lg shadow-secondary/10 hover:shadow-secondary/20"
        : "border-border hover:border-secondary/40 hover:shadow-xl"
      }`}
  >
    {/* Certified glow */}
    {certified && (
      <div className="absolute inset-0 bg-secondary/5 pointer-events-none rounded-2xl" />
    )}

    {/* Header row — in normal flow so nothing can overlap at any text length.
        Certified cards use the shield row as their single indicator; the pill
        would just repeat it. */}
    <div className="relative flex items-start justify-between gap-3 mb-4 min-h-[22px]">
      {certified ? (
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-secondary shrink-0" />
          <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
            Axis Channel Partner
          </span>
        </div>
      ) : (
        <span aria-hidden="true" />
      )}

      {!certified && (
        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-secondary/15 text-secondary">
          {tag}
        </span>
      )}
    </div>

    <h3
      className={`text-xl font-bold mb-1 transition-colors
        ${certified ? "text-secondary" : "text-primary group-hover:text-secondary"}`}
    >
      {name}
    </h3>
    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
      {specialty}
    </p>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const Brands = () => (
  <main>
    <Seo title="Brands We Repair & Supply | Aarya Surveillance Hyderabad" description="Brands Aarya Surveillance supplies in Hyderabad and Telangana. Certified Axis Channel Partner; Bosch, Honeywell, Hanwha, CP Plus, Pelco, Cisco, HP, Dell and more sourced to order." path="/brands" />
    {/* Hero */}
    <section className="bg-charcoal pt-28 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-3">
            Brands We Work With
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-foreground mb-4">
            Products We <span className="text-secondary">Believe In</span>
          </h1>
          <p className="text-charcoal-foreground/60 text-lg max-w-2xl mb-4">
            We don't stock every brand — we've chosen partners whose products we can
            source, install, and support with confidence. These are available through
            authorized distributors. Not everything. Just the right ones.
          </p>
          <p className="text-charcoal-foreground/40 text-sm max-w-xl">
            Products are sourced through authorized distribution channels. Axis
            Communications is our only certified channel partnership.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── What "we supply this" actually means ── */}
    <SectionWrapper className="py-14 bg-muted border-y border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          What "we supply this" actually means
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Axis is the only brand on this page we hold a formal partnership with — we are a
          certified Axis Channel Partner. Everything else we source to order: you give us
          the model or the requirement, we quote it, supply it and support what we sold
          you. We are not an authorised partner or distributor for those brands and we
          don't claim to be.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If we can't get something at a price or lead time that makes sense, we'll say so
          rather than quote you something we can't deliver. This list is also different
          from the brands we repair, which is wider — repairing a unit you already own
          carries none of the procurement questions that supplying a new one does.
        </p>
      </div>
    </SectionWrapper>

    {/* ── Surveillance ── */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Security & Surveillance"
          title="Cameras, NVRs & Access Control"
          subtitle="Cameras, recorders and access control we supply. Axis is a certified partnership; the rest are sourced to order."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {surveillanceBrands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>

    {/* ── Networking ── */}
    <SectionWrapper className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Networking"
          title="Switches, Routers & Wireless"
          subtitle="Wired and wireless networking hardware, sourced to order against your specification."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {networkingBrands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>

    {/* ── IT Infrastructure ── */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="IT Infrastructure"
          title="Compute, Storage & Power Protection"
          subtitle="Compute, storage and power protection, sourced to order against your requirement."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {itInfrastructureBrands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>

    {/* Bottom CTA */}
    <SectionWrapper className="py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">
          Looking for a Brand Not Listed Here?
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Write to us — we'll tell you honestly whether we can source and support it.
          No false promises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:solutions@aaryasurveillance.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ExternalLink size={15} /> Email Us
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:brightness-110 transition-all"
          >
            Get a Quote <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  </main>
);

export default Brands;
