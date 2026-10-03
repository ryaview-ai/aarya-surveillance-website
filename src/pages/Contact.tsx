import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Seo from "@/components/Seo";
import SmartEnquiryWidget from "@/components/SmartEnquiryWidget";

const EMAILJS_SERVICE_ID  = "service_fio6dfl";
const EMAILJS_TEMPLATE_ID = "template_hqc3i8y";
const EMAILJS_PUBLIC_KEY  = "AG_PAPF3Mrkcw2dRU";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80745 91188",
    href: "tel:+918074591188",
    sub: "Mon–Fri, 9:30 AM – 5:30 PM IST",
  },
  {
    icon: Phone,
    label: "Alternate Phone",
    value: "+91 80742 81188",
    href: "tel:+918074281188",
    sub: "Mon–Fri, 9:30 AM – 5:30 PM IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "solutions@aaryasurveillance.com",
    href: "mailto:solutions@aaryasurveillance.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Sangmitra Apts No.402, H.No.10-3-1/2/402, Maredpally, Secunderabad, Telangana – 500026",
    href: "https://maps.google.com/?q=Maredpally,Secunderabad,Telangana",
    sub: "GSTIN: 36ABDCA3268R1Z3",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 Business Hours",
    href: null,
    sub: "No pushy sales calls — honest advice only",
  },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting]   = useState(false);
  const [submitted, setSubmitted]     = useState(false);
  const [formError, setFormError]     = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);
    setFormError("");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setFormError("Could not send your message. Please call us directly at +91 80745 91188 or +91 80742 81188.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <Seo title="Contact Aarya Surveillance | CCTV Repair Enquiry, Secunderabad" description="Get a CCTV camera repair quote in Secunderabad and Hyderabad. Call +91 80745 91188 or send your camera make and model for an honest assessment." path="/contact" />
      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary text-sm font-medium uppercase tracking-wider mb-3">Contact Us</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-foreground mb-3">
              Let's Talk About <span className="text-secondary">Your Security</span>
            </h1>
            <p className="text-charcoal-foreground/60 text-lg max-w-2xl">
              No obligation, no sales pressure. Just an honest conversation about what you need and whether we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards + Map */}
      <SectionWrapper className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold mb-6">Reach Us Directly</h2>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-secondary/30 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="font-semibold text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm text-foreground">{item.value}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-border h-72 lg:h-full min-h-[300px] shadow-sm">
              <iframe
                title="Aarya Surveillance Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.5!3d17.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMaredpally%2C+Secunderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Quick contact form + Smart widget */}
      <SectionWrapper className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Standard contact form */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Repair &amp; <span className="text-secondary">Quick Enquiry</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Got a camera that's failed? Send us the make, model and fault — we'll tell
                you whether it's repairable before you spend on a replacement.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-secondary/30 rounded-2xl p-8 text-center"
                >
                  <CheckCircle2 size={40} className="text-secondary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Message Received!</h3>
                  <p className="text-muted-foreground text-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Full Name *
                      </label>
                      <input
                        name="customer_name" type="text" required
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Phone *
                      </label>
                      <input
                        name="customer_phone" type="tel" required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Email Address *
                    </label>
                    <input
                      name="customer_email" type="email" required
                      placeholder="yourname@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      What do you need help with?
                    </label>
                    <select
                      name="service_needed"
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option>Camera Repair — single unit</option>
                      <option>Camera Repair — multiple units / whole site</option>
                      <option>Equipment Supply</option>
                      <option>Annual Maintenance Contract (AMC)</option>
                      <option>Networking & IT Infrastructure</option>
                      <option>Installation / AI Analytics — enquiry</option>
                      <option>Not sure — need advice</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Make, Model &amp; Fault — or your requirement
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="For repairs: camera make, model and what&apos;s wrong (e.g. Axis P3225 — no power, 4 units). Otherwise, tell us about your site."
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  {formError && (
                    <p className="text-destructive text-xs">{formError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-bold hover:brightness-110 transition-all disabled:opacity-50"
                  >
                    <Send size={15} />
                    {submitting ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>

            {/* Smart Guided Enquiry Widget */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Planning a <span className="text-secondary">New System?</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                This one is for sizing a new or expanded camera setup — answer a few
                questions and we'll scope it. <strong className="text-foreground">For
                repairs, use the form on the left</strong> — it's quicker and we only need
                the make, model and fault.
              </p>
              <SmartEnquiryWidget />
            </div>

          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Contact;
