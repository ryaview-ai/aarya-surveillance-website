import { motion } from "framer-motion";
import { Shield, Heart, Star, Eye } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Seo from "@/components/Seo";

const values = [
  { icon: Shield, title: "Trust",               desc: "Every recommendation we make is one we'd make for our own family." },
  { icon: Heart,  title: "Honesty",             desc: "We tell you what you need — not what makes us the most money." },
  { icon: Star,   title: "Reliability",         desc: "Systems that work on day 1 and day 365. That's our standard." },
  { icon: Eye,    title: "Attention to Detail", desc: "Every cable run, every camera angle, every configuration — done right." },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { y: 18 },
  visible: { y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const About = () => (
  <main>
    <Seo title="About Aarya Surveillance | CCTV Repair Company in Secunderabad" description="Aarya Surveillance and IT Solutions Pvt. Ltd. — a Secunderabad camera repair and surveillance company established in 2025. MSME/Udyam registered, GeM seller." path="/about" />
    {/* Hero */}
    <section className="relative bg-charcoal pt-28 pb-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(42 80% 49%) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-foreground mb-3">
            Who We Are
          </h1>
          <p className="text-charcoal-foreground/60 text-lg">
            Aarya Surveillance and IT Solutions Pvt. Ltd.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <p className="text-lg leading-relaxed text-foreground mb-6">
          We are Aarya Surveillance — a Secunderabad-based company established in 2025
          with a focused mission: to make professional-grade security accessible to homes,
          businesses, and public infrastructure across Telangana and beyond.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We started small, intentionally. Because we believe that doing fewer things
          exceptionally well is better than doing everything poorly.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We don't oversell. We listen first, assess your space, recommend what fits,
          and install it correctly. No upselling. No unnecessary upgrades. Just the right
          solution for your actual need.
        </p>
      </div>
    </SectionWrapper>

    {/* Mission & Vision */}
    <SectionWrapper className="py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="text-primary" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3 text-primary">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver honest, effective, and technology-driven surveillance solutions —
              treating every client's safety as seriously as our own.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Eye className="text-secondary" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3 text-secondary">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become Telangana's most trusted name in surveillance and IT security
              infrastructure — not by cutting corners, but by getting every installation right.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* Values */}
    <SectionWrapper className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          What We <span className="text-secondary">Stand For</span>
        </h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={item}
              className="bg-card border border-border rounded-xl p-6 hover:border-secondary/30 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <v.icon className="text-secondary" size={20} />
              </div>
              <h3 className="font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>

    {/* Credentials */}
    <SectionWrapper className="py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <div className="bg-charcoal text-charcoal-foreground rounded-2xl p-8 text-center">
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-4">
            Registered Business
          </p>
          <h3 className="font-bold text-lg mb-6">
            Aarya Surveillance and IT Solutions Pvt. Ltd.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-charcoal-foreground/5 rounded-lg p-4">
              <p className="text-charcoal-foreground/50 text-xs mb-1">Incorporated</p>
              <p className="font-semibold">2025</p>
            </div>
            <div className="bg-charcoal-foreground/5 rounded-lg p-4">
              <p className="text-charcoal-foreground/50 text-xs mb-1">Location</p>
              <p className="font-semibold text-xs">Secunderabad, Telangana</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </main>
);

export default About;
