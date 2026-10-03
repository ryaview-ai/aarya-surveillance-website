import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wrench, PackageCheck, Search, Truck, ShieldCheck, FileText,
  AlertTriangle, Layers, Clock, ArrowRight, CheckCircle2,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Seo from "@/components/Seo";

/* ─── Data ─────────────────────────────────────────────────────────── */

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Your OEM won't touch other brands",
    desc: "An authorised vendor services their own make. The other three brands on your campus are your problem.",
  },
  {
    icon: Layers,
    title: "Mixed estate, no single owner",
    desc: "Multiple brands across one site means multiple vendors, multiple SLAs, and nobody accountable end to end.",
  },
  {
    icon: Clock,
    title: "Downtime is a compliance gap",
    desc: "Every hour a camera is dark is a blind spot on your floor and an exposure on your audit.",
  },
];

const process = [
  { icon: Truck,        title: "Ship",     desc: "Courier the unit to our lab, or we collect within Hyderabad." },
  { icon: Search,       title: "Diagnose", desc: "Full fault analysis with a written diagnostic report." },
  { icon: Wrench,       title: "Repair",   desc: "Component-level repair by trained engineers." },
  { icon: PackageCheck, title: "Return",   desc: "Tested, shipped back, job documented and closed." },
];

const repairBrands = [
  { name: "Axis",      note: "incl. EOL models" },
  { name: "Bosch",     note: null },
  { name: "Infinova",  note: null },
  { name: "Vivotek",   note: null },
  { name: "Hikvision", note: null },
  { name: "Dahua",     note: null },
  { name: "Honeywell", note: null },
  { name: "Hanwha",    note: null },
  { name: "CP Plus",   note: null },
  { name: "Pelco",     note: null },
  { name: "Uniview",   note: null },
  { name: "Panasonic", note: null },
  { name: "Samsung",   note: null },
  { name: "Godrej",    note: null },
];

const whatWeFix = [
  "IP and network cameras",
  "PTZ units — motor, zoom and drive faults",
  "Dome and bullet cameras",
  "End-of-life models no longer supported by the OEM",
  "Power and PoE faults",
  "Image sensor and optics issues",
  "IR illuminator failure",
  "Board-level and component repair",
];

const sectors = [
  { label: "Defence electronics PSU",        detail: "Site camera estate maintained through repair rather than replacement." },
  { label: "Engineering & construction major", detail: "Multi-brand units recovered across project sites." },
  { label: "Multinational retail",            detail: "Store cameras repaired and returned to service." },
];

// Transform-only reveal: content is never hidden, so it stays readable if
// JS is slow or the viewport observer never fires.
const fadeUp = {
  hidden: { y: 14 },
  visible: { y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

/* ─── Page ─────────────────────────────────────────────────────────── */

const repairJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CCTV and IP Camera Repair",
  name: "Multi-Brand CCTV Camera Repair",
  description:
    "Multi-brand CCTV, IP and PTZ camera repair including end-of-life models, with a written diagnostic report on every job.",
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Secunderabad" },
    { "@type": "State", name: "Telangana" },
  ],
  provider: {
    "@type": "LocalBusiness",
    name: "Aarya Surveillance and Information Technology Solutions Private Limited",
    telephone: "+91-80745-91188",
    email: "solutions@aaryasurveillance.com",
    url: "https://aaryasurveillance.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sangmitra Apts No.402, H.No.10-3-1/2/402, Maredpally",
      addressLocality: "Secunderabad",
      addressRegion: "Telangana",
      postalCode: "500026",
      addressCountry: "IN",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Brands Repaired",
    itemListElement: [
      "Axis", "Bosch", "Infinova", "Vivotek", "Hikvision", "Dahua",
      "Honeywell", "Hanwha", "CP Plus", "Pelco", "Uniview", "Panasonic",
      "Samsung", "Godrej",
    ].map((b) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${b} camera repair` },
    })),
  },
};

const Repair = () => (
  <main>
    <Seo
      title="CCTV Camera Repair in Hyderabad & Secunderabad | Multi-Brand Repair Lab"
      description="Multi-brand CCTV and IP camera repair in Secunderabad, Hyderabad. Axis (including EOL models), Bosch, Infinova, Vivotek, Hikvision, Dahua and more. Written diagnostic report with every repair."
      path="/repair"
      jsonLd={repairJsonLd}
    />

    {/* ── Hero ── */}
    <section className="relative bg-charcoal pt-28 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(42 55% 60%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-secondary font-medium mb-5 tracking-[0.18em] text-[11px] uppercase">
            Multi-Brand Camera Repair · Secunderabad
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-charcoal-foreground leading-[1.1] mb-6 tracking-tight">
            Every brand. One lab.<br />
            <span className="text-secondary">Cameras repaired, not replaced.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal-foreground/70 max-w-2xl mb-9 leading-relaxed">
            Your facility runs one brand on Block A, another on Block B, and something
            else in the server room. Your OEM services only their own. We repair all of
            them — including end-of-life models the manufacturer has stopped supporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-105 transition-all duration-200"
            >
              Get a Repair Quote <ArrowRight size={16} />
            </Link>
            <a
              href="#brands-we-repair"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-charcoal-foreground/20 text-charcoal-foreground/90 font-medium hover:border-secondary/50 hover:text-secondary transition-all duration-200"
            >
              Brands we repair
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Why this exists ── */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-center mb-3 tracking-tight">
          Why Mixed Estates Go <span className="text-secondary">Unserviced</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          The gap isn't technical. It's commercial — and it leaves cameras dark.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painPoints.map((p) => (
            <motion.div
              key={p.title}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
              className="bg-card border border-border rounded-xl p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <p.icon className="text-secondary" size={22} />
              </div>
              <h3 className="font-semibold text-base mb-2.5">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* ── Process ── */}
    <SectionWrapper className="py-20 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-secondary text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-charcoal-foreground tracking-tight">
            Four steps. Documented at every stage.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {process.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
              className="bg-charcoal-foreground/[0.04] border border-charcoal-foreground/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                  <s.icon className="text-secondary" size={19} />
                </div>
                <span className="text-charcoal-foreground/35 font-semibold text-sm">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-charcoal-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-charcoal-foreground/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto bg-secondary/10 border border-secondary/25 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Clock className="text-secondary shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-charcoal-foreground/80 leading-relaxed">
              <strong className="text-charcoal-foreground">Turnaround is typically 10 working days</strong>{" "}
              from receipt to dispatch. Complex board-level faults can take longer — if
              that's the case we tell you after diagnosis, before any work begins.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* ── Brands ── */}
    <SectionWrapper id="brands-we-repair" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-center mb-3 tracking-tight">
          Brands We <span className="text-secondary">Repair</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Not a reseller list — these are makes we take in for repair, regardless of where
          the unit was bought or who installed it.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {repairBrands.map((b) => (
            <div
              key={b.name}
              className="px-4 py-5 bg-card rounded-xl border border-border flex flex-col items-center justify-center text-center gap-1"
            >
              <span className="font-semibold text-primary text-sm tracking-tight">{b.name}</span>
              {b.note && (
                <span className="text-[10px] text-secondary font-medium uppercase tracking-wide">
                  {b.note}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto mt-10 bg-muted border border-border rounded-xl p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Repairing is not supplying.</strong> This
            list covers units already installed on your site — we service what you own,
            whoever sold it to you. It is a different list from the brands we supply, which
            is narrower and follows Indian procurement rules.{" "}
            <Link to="/brands" className="text-primary font-medium hover:text-secondary transition-colors">
              See what we supply
            </Link>
            .
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">
          Brand not listed? Send us the model number — we'll tell you honestly whether we
          can repair it.
        </p>
      </div>
    </SectionWrapper>

    {/* ── What we fix + diagnostic promise ── */}
    <SectionWrapper className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 tracking-tight">
              What We <span className="text-secondary">Fix</span>
            </h2>
            <ul className="space-y-3">
              {whatWeFix.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={17} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-7">
            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
              <FileText className="text-secondary" size={21} />
            </div>
            <h3 className="font-semibold text-lg mb-3 tracking-tight">
              A written diagnostic on every job
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Every unit gets a full fault diagnostic in writing before any repair is
              carried out. You see what's wrong and what it costs before you commit.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The diagnostic is free when you proceed with the repair. An inspection
              charge applies only if you decide not to go ahead. No hidden costs.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* ── Who we've repaired for ── */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-3 tracking-tight">
          Who We've <span className="text-secondary">Repaired For</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
          Client names withheld. We don't publish customer identities without their
          written consent.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {sectors.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-6">
              <ShieldCheck className="text-secondary mb-4" size={20} />
              <h3 className="font-semibold text-sm mb-2">{s.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* ── CTA ── */}
    <section className="relative py-20 bg-charcoal overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(42 55% 60%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl relative z-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-charcoal-foreground mb-5 tracking-tight">
          Got a dead camera on site?
        </h2>
        <p className="text-charcoal-foreground/65 mb-9 leading-relaxed">
          Send us the make and model. We'll tell you whether it's repairable before you
          spend anything on a replacement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-105 transition-all"
          >
            Start a Repair Enquiry <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+918074591188"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-charcoal-foreground/20 text-charcoal-foreground/90 font-medium hover:border-secondary/50 hover:text-secondary transition-all"
          >
            Call +91 80745 91188
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Repair;
