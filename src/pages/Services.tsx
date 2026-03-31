import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Network, Wrench, Brain, ArrowRight, Home, Building2, Factory, Landmark } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const segments = [
  { icon: Home,      label: "Residential" },
  { icon: Building2, label: "Commercial" },
  { icon: Factory,   label: "Industrial" },
  { icon: Landmark,  label: "Government" },
];

const services = [
  {
    id: "cctv",
    icon: Camera,
    title: "CCTV & Surveillance Installation",
    tagline: "See everything. Miss nothing.",
    desc: "We start by understanding your space — not by pushing a package. Whether you need 2 cameras or 200, indoors or outdoors, fixed or PTZ, we design a layout that actually covers your blind spots. Every camera positioned with purpose.",
    features: [
      "HD & 4K IP Cameras",
      "PTZ (Pan-Tilt-Zoom) Systems",
      "Indoor & Outdoor Coverage",
      "Night Vision & IR Cameras",
      "NVR / DVR Setup",
      "Mobile App Remote Viewing",
      "Perimeter & Boundary Security",
      "Multi-site Installation",
    ],
    segments: ["Residential", "Commercial", "Industrial", "Government"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "networking",
    icon: Network,
    title: "Networking & IT Infrastructure",
    tagline: "Good surveillance needs a solid backbone.",
    desc: "The best cameras are only as good as the network behind them. We handle structured cabling, NVR/DVR connectivity, cloud storage integration, and LAN/WAN configuration — so your system is fast, stable, and future-ready from day one.",
    features: [
      "Structured Cabling & CAT6",
      "LAN / WAN Configuration",
      "Network Video Recorder Setup",
      "Cloud Storage Integration",
      "PoE Switch Installation",
      "Wireless Network Setup",
      "VPN & Remote Access",
      "Network Security Basics",
    ],
    segments: ["Commercial", "Industrial", "Government"],
    color: "bg-green-500/10 text-green-600",
  },
  {
    id: "amc",
    icon: Wrench,
    title: "Annual Maintenance Contracts (AMC)",
    tagline: "Installing it was step one. Keeping it working is where we shine.",
    desc: "The camera you installed today needs to work perfectly on day 365 too. Our AMC plans include scheduled health checks, rapid on-site response, remote diagnostics, and proactive maintenance — so you're never left with a blind system when it matters most.",
    features: [
      "Scheduled Preventive Maintenance",
      "Rapid On-site Response",
      "Remote Diagnostics & Monitoring",
      "Camera Cleaning & Calibration",
      "Firmware & Software Updates",
      "Priority Support Line",
      "Incident Reports & Logs",
      "Renewal Reminders",
    ],
    segments: ["Residential", "Commercial", "Industrial", "Government"],
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI-Powered Video Analytics",
    tagline: "Your cameras should work for you, not just record.",
    desc: "Modern surveillance is active intelligence, not passive recording. We configure AI-based analytics that turn your cameras into smart security tools — detecting, alerting, and reporting in real time, so you always know what's happening.",
    features: [
      "People Counting & Crowd Analysis",
      "Intrusion Detection & Alerts",
      "License Plate Recognition (LPR)",
      "Facial Recognition-Ready Systems",
      "Heat Mapping & Zone Analytics",
      "Loitering Detection",
      "Real-time Push Notifications",
      "Dashboard & Reporting",
    ],
    segments: ["Commercial", "Industrial", "Government"],
    color: "bg-purple-500/10 text-purple-600",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const Services = () => (
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
            Our Services
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-foreground mb-3">
            What We <span className="text-secondary">Offer</span>
          </h1>
          <p className="text-charcoal-foreground/60 text-lg max-w-2xl">
            Four focused services. What we do, we do thoroughly — from site assessment
            to final handover.
          </p>
        </motion.div>
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
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5`}>
                <service.icon size={26} />
              </div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
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
                Enquire About This Service <ArrowRight size={15} />
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
