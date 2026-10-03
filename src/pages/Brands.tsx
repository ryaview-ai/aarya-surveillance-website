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
    desc: "The pioneer of IP-based network cameras. Axis drives innovation in video surveillance, access control, and network audio with a strong focus on cybersecurity. We are a certified Axis Channel Partner.",
    tag: "Certified Partner",
    certified: true,
  },
  {
    name: "Honeywell",
    specialty: "Global Security & Building Management",
    desc: "A global leader in integrated security, fire detection, and building management systems. Trusted by enterprises and governments worldwide for reliable, scalable solutions.",
    tag: "Enterprise Grade",
    certified: false,
  },
  {
    name: "Bosch",
    specialty: "Professional Video Security",
    desc: "German engineering precision applied to professional surveillance. Bosch cameras and systems are renowned for image quality, durability, and long-term reliability in demanding environments.",
    tag: "German Engineering",
    certified: false,
  },
  {
    name: "Hanwha Vision",
    specialty: "AI-Powered Camera Systems",
    desc: "South Korean innovation at its finest. Hanwha Vision leads in AI-integrated cameras with deep analytics capability — from facial recognition to behavioral analysis.",
    tag: "AI Analytics",
    certified: false,
  },
  {
    name: "CP Plus",
    specialty: "Surveillance for Every Scale",
    desc: "India's most trusted surveillance brand offering a wide range of cameras, DVRs, and NVRs. CP Plus is a go-to for cost-effective residential and SME deployments.",
    tag: "Made in India",
    certified: false,
  },
  {
    name: "Pelco",
    specialty: "Enterprise Video Security",
    desc: "Built for large-scale, mission-critical deployments. Pelco systems are widely used in airports, stadiums, and critical infrastructure where reliability is non-negotiable.",
    tag: "Mission Critical",
    certified: false,
  },
  {
    name: "Matrix Comsec",
    specialty: "Access Control & Communication",
    desc: "A trusted Indian brand delivering integrated access control, time-attendance, and communication solutions built for Indian conditions and requirements.",
    tag: "Made in India",
    certified: false,
  },
  {
    name: "Sparsh",
    specialty: "Cost-Effective IP Surveillance",
    desc: "Reliable and affordable IP surveillance designed for SMEs, residences, and small businesses. Sparsh delivers quality monitoring without the premium price tag.",
    tag: "Value for Money",
    certified: false,
  },
];

const networkingBrands = [
  {
    name: "Cisco",
    specialty: "Enterprise Networking",
    desc: "The global standard in enterprise networking. Cisco switches, routers, and wireless solutions power reliable, secure networks for businesses of every scale.",
    tag: "Industry Standard",
  },
  {
    name: "Ubiquiti",
    specialty: "Scalable Wireless Networks",
    desc: "Professional-grade wireless and wired networking at competitive price points. Ubiquiti's UniFi ecosystem is ideal for SMEs and multi-site deployments.",
    tag: "SME Favourite",
  },
  {
    name: "D-Link",
    specialty: "Networking for Every Budget",
    desc: "Reliable wired and wireless networking solutions spanning home, SME, and enterprise segments. D-Link offers an extensive range with proven performance.",
    tag: "Versatile Range",
  },
  {
    name: "TP-Link",
    specialty: "Networking & Smart Devices",
    desc: "One of the world's leading providers of networking devices. TP-Link delivers dependable switches, access points, and routers suited for residential and commercial use.",
    tag: "Global Reach",
  },
  {
    name: "Netgear",
    specialty: "Business & Home Networking",
    desc: "Trusted networking solutions for both home and business environments. Netgear's ProSAFE and Orbi lines are particularly well suited for SME and distributed office setups.",
    tag: "Proven Reliability",
  },
];

const itInfrastructureBrands = [
  {
    name: "HP",
    specialty: "Computers, Servers & Printers",
    desc: "A trusted global brand for business laptops, desktops, workstations, and enterprise servers. HP hardware is a standard choice for corporate IT infrastructure deployments.",
    tag: "Global Standard",
  },
  {
    name: "Dell",
    specialty: "Enterprise Computing & Storage",
    desc: "Dell's OptiPlex desktops, Latitude laptops, and PowerEdge servers are widely deployed across businesses and institutions requiring dependable, long-lifecycle hardware.",
    tag: "Enterprise Ready",
  },
  {
    name: "APC by Schneider Electric",
    specialty: "Power Protection & UPS",
    desc: "The world's most trusted UPS and power protection brand. APC solutions safeguard IT equipment and surveillance systems from power fluctuations and outages.",
    tag: "Power Protection",
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

    {/* Tag */}
    <span
      className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full
        ${certified
          ? "bg-secondary text-secondary-foreground"
          : "bg-secondary/15 text-secondary"
        }`}
    >
      {tag}
    </span>

    {/* Certified badge */}
    {certified && (
      <div className="flex items-center gap-1.5 mb-3">
        <ShieldCheck size={14} className="text-secondary" />
        <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
          Axis Channel Partner
        </span>
      </div>
    )}

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
    <Seo title="Brands We Repair & Supply | Aarya Surveillance Hyderabad" description="Axis, Bosch, Infinova, Vivotek, Honeywell, Hanwha, CP Plus, Pelco and more — brands we repair, and source through authorised distributors across Telangana." path="/brands" />
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

    {/* ── Surveillance ── */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Security & Surveillance"
          title="Cameras, NVRs & Access Control"
          subtitle="From entry-level residential to enterprise-grade deployments — we work with the brands that matter in the Indian surveillance market."
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
          subtitle="Reliable wired and wireless networking infrastructure for homes, offices, and multi-site deployments."
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
          subtitle="Hardware essentials for business IT setups — from workstations and servers to UPS systems that keep your infrastructure running through power disruptions."
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
