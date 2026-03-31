import { Link } from "react-router-dom";
import { Home, Building2, Factory, Landmark, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const brands = ["Honeywell", "Bosch", "Axis", "Hanwha", "Pelco", "Matrix", "Sparsh"];

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
    desc: "We work with globally trusted names — Honeywell, Bosch, Axis, Hanwha, Pelco, Matrix, Sparsh — so you get quality products, not compromises.",
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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Index = () => (
  <main>
    {/* ── Hero ── */}
    <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
      {/* Animated dot grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(42 80% 49%) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "28px 28px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-secondary/30 pointer-events-none"
        style={{ position: "absolute" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-secondary font-semibold mb-4 tracking-widest text-xs uppercase"
          >
            Your Safety. Our Purpose.
          </motion.p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal-foreground leading-tight mb-6">
            Professional Surveillance & IT Solutions{" "}
            <span className="text-secondary">for Every Space You Care About</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal-foreground/70 max-w-2xl mb-8 leading-relaxed">
            Whether it's your home, your business, your warehouse, or a public facility —
            we design and install security systems that actually work.
            Based in Secunderabad. Serving across Telangana.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 hover:scale-105 transition-all duration-200"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-lg shadow-secondary/20"
            >
              Get a Free Consultation
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xs text-charcoal-foreground/40 tracking-wide"
          >
            Established 2025 · GSTIN Registered · Honest Advice, Always
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* ── What Are You Protecting? ── */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3">
          What Are You Trying to <span className="text-secondary">Protect?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          We serve every type of space with tailored security solutions.
        </p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {customerCards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <card.icon className="text-secondary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
              <Link
                to="/services"
                className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn How We Help <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>

    {/* ── Trust Strip ── */}
    <SectionWrapper className="py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              Security That Fits <span className="text-secondary">Your Life</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe professional surveillance shouldn't be complicated or expensive.
              Whether you're a homeowner wanting peace of mind or a business owner protecting
              your livelihood — we make it simple, honest, and done right the first time.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Talk to us about your space <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 shrink-0">
            {[
              { value: "2025", label: "Established" },
              { value: "7", label: "Premium Brands" },
              { value: "4", label: "Service Areas" },
              { value: "24h", label: "Response Time" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* ── Why Choose Aarya ── */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
          Why Work <span className="text-secondary">With Us?</span>
        </h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {whyCards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                <h3 className="font-semibold">{card.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>

    {/* ── Brands Carousel ── */}
    <SectionWrapper className="py-14 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          Solutions Powered By Globally Trusted Brands
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-left">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 px-8 py-4 mx-3 bg-background rounded-lg flex items-center justify-center min-w-[160px] border border-border"
            >
              <span className="font-bold text-primary text-sm tracking-wide">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* ── Honest CTA ── */}
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal" />
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(42 80% 49% / 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "24px 24px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-foreground mb-6">
            We Started in 2025 With One Promise —{" "}
            <span className="text-secondary">To Get Your Security Right.</span>
          </h2>
          <p className="text-charcoal-foreground/70 mb-8 leading-relaxed">
            Every reliable company had a first project. We'd be honoured if yours is one of
            ours. Reach out — no obligation, no sales pressure, just an honest conversation
            about your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-bold hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-lg shadow-secondary/25"
          >
            Start the Conversation <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Index;
