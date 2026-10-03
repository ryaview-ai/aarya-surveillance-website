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
    desc: "A certified Axis Channel Partner. We design, supply and support Axis network cameras, access control and network audio directly.",
    tag: "Certified Partner",
    certified: true,
  },
  {
    name: "Honeywell",
    specialty: "Security & Building Management",
    desc: "Specified and sourced on request. Useful where surveillance sits alongside fire, access and building management on one site.",
    tag: "Sourced on request",
    certified: false,
  },
  {
    name: "i-PRO",
    specialty: "Professional IP Cameras & Analytics",
    desc: "Specified and sourced on request. Formerly Panasonic's security business, now its own company — a strong fit where edge analytics and long-term firmware support matter.",
    tag: "Sourced on request",
    certified: false,
  },
  {
    name: "IQSIGHT (Keenfinity / Bosch)",
    specialty: "Professional Video Security",
    desc: "Specified and sourced on request. The former Bosch video systems business, now trading as IQSIGHT under Keenfinity. A regular choice where image quality and long service life matter more than unit price.",
    tag: "Sourced on request",
    certified: false,
  },
  {
    name: "Hanwha Vision",
    specialty: "Camera Systems & Analytics",
    desc: "Specified and sourced on request. Suits designs that need on-camera analytics rather than analytics bolted on later.",
    tag: "Sourced on request",
    certified: false,
  },
  {
    name: "CP Plus",
    specialty: "Cameras, DVRs & NVRs",
    desc: "Specified and sourced on request. Where budget drives the design, we will size a CP Plus system properly rather than undersell a premium one.",
    tag: "Sourced on request",
    certified: false,
  },
  {
    name: "Pelco",
    specialty: "Enterprise Video Security",
    desc: "Specified and sourced on request. Built for large estates and mission-critical sites where downtime carries a real cost.",
    tag: "Sourced on request",
    certified: false,
  },
  {
    name: "Matrix Comsec",
    specialty: "Access Control & Communication",
    desc: "Specified and sourced on request. Access control, time-attendance and communication designed for Indian site requirements.",
    tag: "Sourced on request",
    certified: false,
  },
  {
    name: "Sparsh",
    specialty: "IP Surveillance",
    desc: "Specified and sourced on request. A sensible fit for smaller sites that still want IP rather than analogue.",
    tag: "Sourced on request",
    certified: false,
  },
];

const networkingBrands = [
  {
    name: "Cisco",
    specialty: "Enterprise Networking",
    desc: "Specified and sourced on request. Switching, routing and wireless designed around the camera load the network has to carry.",
    tag: "Sourced on request",
  },
  {
    name: "Ubiquiti",
    specialty: "Wireless & Wired Networks",
    desc: "Specified and sourced on request. A frequent choice on SME and multi-site networks where one controller has to cover several buildings.",
    tag: "Sourced on request",
  },
  {
    name: "D-Link",
    specialty: "Networking Hardware",
    desc: "Specified and sourced on request. Switching and wireless for straightforward office and residential deployments.",
    tag: "Sourced on request",
  },
  {
    name: "TP-Link",
    specialty: "Networking Hardware",
    desc: "Specified and sourced on request. Dependable access points and switches where the requirement is simple and the budget is tight.",
    tag: "Sourced on request",
  },
  {
    name: "Netgear",
    specialty: "Business & Home Networking",
    desc: "Specified and sourced on request. Suits distributed offices and smaller business networks.",
    tag: "Sourced on request",
  },
];

const itInfrastructureBrands = [
  {
    name: "HP",
    specialty: "Computers, Servers & Printers",
    desc: "Specified and sourced on request. Laptops, desktops, workstations and servers sized to the workload, not to the invoice.",
    tag: "Sourced on request",
  },
  {
    name: "Dell",
    specialty: "Enterprise Computing & Storage",
    desc: "Specified and sourced on request. Long-lifecycle hardware for sites that need the same machine supportable in five years.",
    tag: "Sourced on request",
  },
  {
    name: "APC by Schneider Electric",
    specialty: "Power Protection & UPS",
    desc: "Specified and sourced on request. UPS and power protection sized to the actual load, including the recorder and switch stack.",
    tag: "Sourced on request",
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
    <Seo title="Brands We Repair & Supply | Aarya Surveillance Hyderabad" description="Multi-brand system integrator in Hyderabad and Telangana. Certified Axis Channel Partner, with solution design and supply across i-PRO, IQSIGHT (formerly Bosch), Honeywell, Hanwha, CP Plus, Pelco, Cisco, HP, Dell and more." path="/brands" />
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
              Brands We Work With
            </p>
            <h1 className="text-3xl/[1.2] sm:text-4xl/[1.2] lg:text-5xl/[1.2] font-bold text-charcoal-foreground mb-4 text-balance">
              Any brand.{" "}
              <span className="text-secondary">The right one for the job.</span>
            </h1>
            <p className="text-charcoal-foreground/60 text-lg max-w-2xl">
              We design the solution first and let the requirement choose the make.
              Below is what we specify and supply most often — it isn't a limit, and
              it's a shorter list than the brands we repair.
            </p>
          </motion.div>

          {/* Counts rather than a logo wall: a grid of manufacturer logos would
              imply fourteen partnerships, which is the impression this page
              deliberately does not give. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-px bg-charcoal-foreground/10 rounded-2xl overflow-hidden border border-charcoal-foreground/10">
              <div className="bg-charcoal p-6">
                <p className="text-4xl font-semibold text-secondary tabular-nums tracking-tight">16</p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-charcoal-foreground/50 mt-1.5">
                  Brands we supply
                </p>
              </div>
              <div className="bg-charcoal p-6">
                <p className="text-4xl font-semibold text-secondary tabular-nums tracking-tight">14</p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-charcoal-foreground/50 mt-1.5">
                  Brands we repair
                </p>
              </div>
              <div className="bg-charcoal p-6 col-span-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck size={15} className="text-secondary shrink-0" />
                  <p className="text-sm font-semibold text-charcoal-foreground">
                    Certified Axis Channel Partner
                  </p>
                </div>
                <p className="text-[13px] text-charcoal-foreground/50 leading-relaxed">
                  Our one formal manufacturer partnership. Everything else is specified
                  and sourced on request.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── What "we supply this" actually means ── */}
    <SectionWrapper className="py-14 bg-muted border-y border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Brand-agnostic by design
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We are a multi-brand system integrator. The design comes first — what the site
          actually needs, what it has to integrate with, what the budget will carry — and
          the brand follows from that. We can specify and source across every make on this
          page, and plenty that aren't, rather than fitting your requirement around one
          manufacturer's catalogue.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Axis is the one brand we also hold a certified channel partnership with. If a
          particular make doesn't suit the requirement, or can't be had at a price or lead
          time that works, we'll tell you that instead of quoting it anyway. The brands we
          repair are a wider list again — servicing a unit you already own carries none of
          the procurement questions that supplying a new one does.
        </p>
      </div>
    </SectionWrapper>

    {/* ── Surveillance ── */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Security & Surveillance"
          title="Cameras, NVRs & Access Control"
          subtitle="Cameras, recorders and access control we design with and supply across every major make."
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
          subtitle="Wired and wireless networking designed around what the site and the camera estate actually need."
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
          subtitle="Compute, storage and power protection specified to the workload and the load it has to carry."
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
