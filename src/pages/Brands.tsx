import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const brands = [
  {
    name: "Honeywell",
    specialty: "Global Security & Building Management",
    desc: "A global leader in integrated security, fire detection, and building management systems. Trusted by enterprises and governments worldwide for reliable, scalable solutions.",
    tag: "Enterprise Grade",
  },
  {
    name: "Bosch",
    specialty: "Professional Video Security",
    desc: "German engineering precision applied to professional surveillance. Bosch cameras and systems are renowned for their image quality, durability, and long-term reliability in demanding environments.",
    tag: "German Engineering",
  },
  {
    name: "Axis",
    specialty: "Network Cameras & Access Control",
    desc: "The pioneer of IP-based network cameras. Axis continuously drives innovation in video surveillance, access control, and network audio with a strong focus on cybersecurity.",
    tag: "Market Pioneer",
  },
  {
    name: "Hanwha Vision",
    specialty: "AI-Powered Camera Systems",
    desc: "South Korean innovation at its finest. Hanwha Vision leads in AI-integrated cameras with deep analytics capability — from facial recognition to behavioral analysis.",
    tag: "AI Analytics",
  },
  {
    name: "Pelco",
    specialty: "Enterprise Video Security",
    desc: "Built for large-scale, mission-critical deployments. Pelco systems are widely used in airports, stadiums, cities, and critical infrastructure where reliability is non-negotiable.",
    tag: "Mission Critical",
  },
  {
    name: "Matrix Comsec",
    specialty: "Indian Access Control & Communication",
    desc: "A trusted Indian brand delivering integrated access control, time-attendance, and communication solutions. Matrix is built for Indian conditions and budget requirements.",
    tag: "Made in India",
  },
  {
    name: "Sparsh",
    specialty: "Cost-effective IP Surveillance",
    desc: "Reliable and cost-effective IP surveillance designed specifically for SMEs, residences, and small businesses. Sparsh delivers quality monitoring without the premium price tag.",
    tag: "Value for Money",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Brands = () => (
  <main>
    {/* Hero */}
    <section className="bg-charcoal pt-28 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-3">
            Brand Partners
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-foreground mb-3">
            Products We <span className="text-secondary">Trust</span>
          </h1>
          <p className="text-charcoal-foreground/60 text-lg max-w-2xl">
            We don't stock every brand — we've chosen partners whose products we believe
            in and can support confidently. Not everything. Just the right ones.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Brand Grid */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border-2 border-border rounded-2xl p-7 hover:border-secondary/40 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Tag */}
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-secondary/15 text-secondary">
                {brand.tag}
              </span>

              <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                {brand.name}
              </h3>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                {brand.specialty}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{brand.desc}</p>
            </motion.div>
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
            href="mailto:admin@aaryasurveillance.com"
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
