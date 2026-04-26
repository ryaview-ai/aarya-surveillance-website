import { Link } from "react-router-dom";
import { Home, Building2, Factory, Landmark, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

// Curated set shown on Home — full 18 lives on /brands
const homeBrands = [
  "Axis", "Honeywell", "Bosch", "Hanwha",
  "Hikvision", "Dahua", "CP Plus", "Matrix",
  "Sparsh", "HP", "Dell", "APC by Schneider",
];

const customerCards = [
  {
    icon: Home,
    title: "Home & Family",
    desc: "Worried about your home when you're away? We set up smart camera systems that let you watch over what matters most — right from your phone. Simple, reliable, affordable.",
  },
  {
    icon: Building2,
    title: "Your Business",
    desc: "Theft, unauthorized access, and blind spots cost businesses every day. We design surveillance systems tailored to your office, retail space, or multi-branch operation.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    desc: "Large premises need large-scale thinking. From perimeter cameras to AI-based intrusion alerts — we help you cover every corner without gaps.",
  },
  {
    icon: Landmark,
    title: "Government & Public Spaces",
    desc: "Public safety requires reliable, scalable infrastructure. We understand compliance needs and deliver systems built for long-term dependability.",
  },
];

const whyCards = [
  {
    title: "We're New — and That's Our Advantage",
    desc: "Fresh company means fresh thinking, full attention to each client, and zero complacency. You're not a number to us.",
  },
  {
    title: "Premium Brand Partnerships",
    desc: "We work with globally trusted names — Axis, Honeywell, Bosch, Hanwha, Hikvision, Dahua, CP Plus, Matrix, and more — sourced through authorized distributors.",
  },
  {
    title: "End-to-End Service",
    desc: "From your first call to final installation and beyond — one team, one point of contact, no handoffs.",
  },
  {
    title: "Your Problem First, Product Second",
    desc: "We assess your space honestly before recommending anything. The right fit, not the most expensive one.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Index = () => (
  <main>
    {/* ── Hero ── */}
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-charcoal">
      {/* Static dot grid (no animation) */}
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
            Your Safety. Our Purpose.
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold text-charcoal-foreground leading-[1.1] mb-7 tracking-tight">
            Surveillance &amp; IT solutions, engineered for the spaces that matter.
          </h1>

          <p className="text-base sm:text-lg text-charcoal-foreground/65 max-w-2xl mb-10 leading-relaxed">
            Aarya Surveillance designs and installs CCTV, networking, and IT systems for homes,
            businesses, and institutions. Based in Secunderabad. Serving across Telangana.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-105 transition-all duration-200"
            >
              Get a Free Site Survey <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-charcoal-foreground/15 text-charcoal-foreground/85 font-medium hover:border-secondary/50 hover:text-secondary transition-all duration-200"
            >
              View our services
            </Link>
          </div>

          <p className="text-[11px] text-charcoal-foreground/40 tracking-[0.15em] uppercase">
            Established 2025 · MSME / Udyam Registered · GeM Seller · Honest Advice, Always
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── What Are You Protecting? ── */}
    <SectionWrapper className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-center mb-3 tracking-tight">
          What Are You Trying to <span className="text-secondary">Protect?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          We serve every type of space with tailored security solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {customerCards.map((card) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="bg-card border border-border rounded-xl p-7 transition-colors duration-200 hover:border-secondary/40 group"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <card.icon className="text-secondary" size={22} />
              </div>
              <h3 className="font-semibold text-base mb-2.5">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{card.desc}</p>
              <Link
                to="/services"
                className="text-primary text-sm font-medium inline-flex items-center gap-1.5"
              >
                Learn how we help <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* ── Trust Strip ── */}
    <SectionWrapper className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-card border border-border rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 tracking-tight">
              Security That Fits <span className="text-secondary">Your Life</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe professional surveillance shouldn't be complicated or expensive.
              Whether you're a homeowner wanting peace of mind or a business owner protecting
              your livelihood — we make it simple, honest, and done right the first time.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold"
            >
              Talk to us about your space <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 shrink-0">
            {[
              { value: "2025", label: "Established" },
              { value: "18", label: "Trusted Brands" },
              { value: "4", label: "Service Areas" },
              { value: "24h", label: "Response Time" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-background border border-border rounded-xl px-5 py-4 text-center min-w-[120px]"
              >
                <p className="text-2xl font-semibold text-primary tracking-tight">{stat.value}</p>
                <p className="text-[11px] text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* ── Why Choose Aarya ── */}
    <SectionWrapper className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-center mb-14 tracking-tight">
          Why Work <span className="text-secondary">With Us?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {whyCards.map((card) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
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

    {/* ── Brands — Static Grid (no marquee) ── */}
    <SectionWrapper className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-10">
          Solutions Powered By Globally Trusted Brands
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {homeBrands.map((brand) => (
            <div
              key={brand}
              className="px-4 py-5 bg-background rounded-xl border border-border flex items-center justify-center text-center"
            >
              <span className="font-semibold text-primary text-sm tracking-tight">{brand}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link
            to="/brands"
            className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-secondary transition-colors"
          >
            View all 18 brands <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </SectionWrapper>

    {/* ── Honest CTA ── */}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-charcoal-foreground mb-6 tracking-tight leading-tight">
            We Started in 2025 With One Promise —{" "}
            <span className="text-secondary">To Get Your Security Right.</span>
          </h2>
          <p className="text-charcoal-foreground/65 mb-10 leading-relaxed">
            Every reliable company had a first project. We'd be honoured if yours is one of
            ours. Reach out — no obligation, no sales pressure, just an honest conversation
            about your needs.
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
