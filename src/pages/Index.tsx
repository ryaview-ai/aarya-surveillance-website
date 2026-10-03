import { Link } from "react-router-dom";
import {
  Wrench, PackageSearch, ClipboardCheck, ArrowRight, CheckCircle2,
  AlertTriangle, Layers, Clock, Hammer,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Seo from "@/components/Seo";

/* ─── Data ─────────────────────────────────────────────────────────── */

const repairBrands = [
  "Axis", "Bosch", "Infinova", "Vivotek", "Hikvision", "Dahua",
  "Honeywell", "Hanwha", "CP Plus", "Pelco", "Uniview", "Panasonic",
];

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Your OEM won't touch other brands",
    desc: "An authorised vendor services their own make. The rest of your campus is your problem.",
  },
  {
    icon: Layers,
    title: "Mixed estate, no single owner",
    desc: "Several brands on one site means several vendors and nobody accountable end to end.",
  },
  {
    icon: Clock,
    title: "Downtime is a compliance gap",
    desc: "Every hour a camera is dark is a blind spot on your floor and an exposure on your audit.",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Multi-Brand Camera Repair",
    status: "Core service",
    live: true,
    desc: "Component-level repair for IP, PTZ, dome and bullet cameras — any make, including end-of-life models the manufacturer no longer supports. Written diagnostic on every job.",
    to: "/repair",
    cta: "See how repair works",
  },
  {
    icon: PackageSearch,
    title: "Equipment Supply",
    status: "Core service",
    live: true,
    desc: "Cameras, recorders, switches and IT hardware sourced through authorised distributors. Honest recommendations on what actually fits your site — and when repair beats replacement.",
    to: "/brands",
    cta: "Brands we work with",
  },
  {
    icon: ClipboardCheck,
    title: "Annual Maintenance (AMC)",
    status: "Core service",
    live: true,
    desc: "Scheduled health checks and priority response across your whole camera estate, whatever mix of brands it contains. One vendor, one invoice.",
    to: "/services",
    cta: "AMC details",
  },
  {
    icon: Hammer,
    title: "Installation & AI Analytics",
    status: "Building toward this",
    live: false,
    desc: "We're growing into full turnkey installation and AI video analytics. We're not claiming a track record we haven't built yet — if you need these today, we'll tell you straight and point you to someone who can.",
    to: "/services",
    cta: "Where we stand",
  },
];

const whyCards = [
  {
    title: "Repair before replace",
    desc: "A working camera you already own beats a new one you didn't need. We tell you when a unit is worth saving — and when it genuinely isn't.",
  },
  {
    title: "Brand-agnostic by design",
    desc: "We're not defending one manufacturer's territory. If it's a CCTV camera, it comes into the lab on its own merits.",
  },
  {
    title: "Documented, not verbal",
    desc: "Written diagnostic before work starts. Job reports on completion. Nothing rests on a phone call nobody can produce later.",
  },
  {
    title: "Your problem first, product second",
    desc: "We assess honestly before recommending anything. The right fit, not the biggest invoice.",
  },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aaryasurveillance.com/#business",
  name: "Aarya Surveillance and Information Technology Solutions Private Limited",
  alternateName: "Aarya Surveillance",
  description:
    "Multi-brand CCTV and IP camera repair, equipment supply and AMC services in Secunderabad and Hyderabad, Telangana.",
  url: "https://aaryasurveillance.com",
  telephone: "+91-80745-91188",
  email: "solutions@aaryasurveillance.com",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sangmitra Apts No.402, H.No.10-3-1/2/402, Maredpally",
    addressLocality: "Secunderabad",
    addressRegion: "Telangana",
    postalCode: "500026",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Secunderabad" },
    { "@type": "State", name: "Telangana" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "17:30",
    },
  ],
  knowsAbout: [
    "CCTV camera repair", "IP camera repair", "PTZ camera repair",
    "End-of-life camera repair", "Video surveillance maintenance",
  ],
};

// Transform-only reveal: content is never hidden, so it stays readable if
// JS is slow or the viewport observer never fires.
const fadeUp = {
  hidden: { y: 14 },
  visible: { y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

/* ─── Page ─────────────────────────────────────────────────────────── */

const Index = () => (
  <main>
    <Seo
      title="Aarya Surveillance — CCTV Camera Repair & Supply in Secunderabad, Hyderabad"
      description="Multi-brand CCTV and IP camera repair lab in Secunderabad. Axis, Bosch, Infinova, Vivotek, Hikvision, Dahua and more — including end-of-life models. Equipment supply and AMC across Hyderabad and Telangana."
      path="/"
      jsonLd={homeJsonLd}
    />

    {/* ── Hero ── */}
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-charcoal">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(42 55% 60%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-secondary font-medium mb-5 tracking-[0.18em] text-[11px] uppercase">
            Multi-Brand Camera Repair · Secunderabad
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold text-charcoal-foreground leading-[1.1] mb-7 tracking-tight">
            Every brand. One lab.<br />
            <span className="text-secondary">Cameras repaired, not replaced.</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal-foreground/70 max-w-2xl mb-10 leading-relaxed">
            Aarya Surveillance repairs CCTV and IP cameras of any make — including
            end-of-life models the manufacturer has dropped. We also supply equipment and
            run AMC contracts across mixed-brand estates. Based in Secunderabad, serving
            Hyderabad and Telangana.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              to="/repair"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-105 transition-all duration-200"
            >
              Get a Camera Repaired <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-charcoal-foreground/20 text-charcoal-foreground/90 font-medium hover:border-secondary/50 hover:text-secondary transition-all duration-200"
            >
              Talk to us
            </Link>
          </div>

          <p className="text-[11px] text-charcoal-foreground/55 tracking-[0.15em] uppercase">
            Established 2025 · MSME / Udyam Registered · GeM Seller · Honest Advice, Always
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── The gap we fill ── */}
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
        <p className="text-center mt-10">
          <Link
            to="/repair"
            className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-secondary transition-colors"
          >
            See how our repair process works <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </SectionWrapper>

    {/* ── What we do ── */}
    <SectionWrapper className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-center mb-3 tracking-tight">
          What We <span className="text-secondary">Actually Do</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Three services we deliver today — and one we're honest about still building.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {services.map((s) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
              className={`rounded-xl p-7 border transition-colors duration-200 ${
                s.live
                  ? "bg-card border-border hover:border-secondary/40"
                  : "bg-card/60 border-dashed border-border"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <s.icon className="text-secondary" size={22} />
                </div>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                    s.live
                      ? "bg-secondary/15 text-secondary-foreground"
                      : "bg-muted-foreground/10 text-muted-foreground"
                  }`}
                >
                  {s.status}
                </span>
              </div>
              <h3 className="font-semibold text-base mb-2.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <Link
                to={s.to}
                className="text-primary text-sm font-medium inline-flex items-center gap-1.5 hover:text-secondary transition-colors"
              >
                {s.cta} <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* ── Brands repaired ── */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4">
          Brands We Repair
        </p>
        <p className="text-center text-muted-foreground text-sm mb-10 max-w-lg mx-auto">
          We service what you already own, regardless of who sold or installed it.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {repairBrands.map((brand) => (
            <div
              key={brand}
              className="px-4 py-5 bg-card rounded-xl border border-border flex items-center justify-center text-center"
            >
              <span className="font-semibold text-primary text-sm tracking-tight">{brand}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link
            to="/repair"
            className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-secondary transition-colors"
          >
            Full repair brand list <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </SectionWrapper>

    {/* ── Why us ── */}
    <SectionWrapper className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-center mb-14 tracking-tight">
          Why Work <span className="text-secondary">With Us?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {whyCards.map((card) => (
            <motion.div
              key={card.title}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
              className="bg-card rounded-xl p-7 border border-border transition-colors duration-200 hover:border-secondary/40"
            >
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                <h3 className="font-semibold text-base">{card.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* ── CTA ── */}
    <section className="relative py-24 overflow-hidden bg-charcoal">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(42 55% 60%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl relative z-10">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-charcoal-foreground mb-6 tracking-tight leading-tight">
            Before you replace it,{" "}
            <span className="text-secondary">let us look at it.</span>
          </h2>
          <p className="text-charcoal-foreground/65 mb-10 leading-relaxed">
            Send us the make and model of the camera that's failed. We'll tell you whether
            it's worth repairing — and if it isn't, we'll say so.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-105 transition-all duration-200"
          >
            Start the Conversation <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Index;
