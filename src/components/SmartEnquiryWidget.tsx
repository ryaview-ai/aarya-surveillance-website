import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Building2, Factory, Landmark,
  ChevronRight, ChevronLeft, CheckCircle2,
  Send, User, MapPin, Phone, Mail, MessageSquare
} from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ───────────────────────────────────────────
// Replace these with your actual EmailJS values after setup
const EMAILJS_SERVICE_ID  = "service_fio6dfl";
const EMAILJS_TEMPLATE_ID = "template_hqc3i8y";
const EMAILJS_PUBLIC_KEY  = "AG_PAPF3Mrkcw2dRU";
// ─────────────────────────────────────────────────────────────

type CustomerType = "residential" | "commercial" | "industrial" | "government" | null;

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  customerType: CustomerType;
  // Residential
  cameraCount: string;
  propertyType: string;
  keyAreas: string[];
  // Commercial
  floors: string;
  entryPoints: string;
  existingSystem: string;
  // Industrial
  facilitySize: string;
  perimeterCoverage: string;
  nightVision: string;
  // Government
  projectNature: string;
  procurementType: string;
  approxCameras: string;
  // Common
  additionalNotes: string;
}

const initialForm: FormData = {
  name: "", email: "", phone: "", city: "",
  customerType: null,
  cameraCount: "", propertyType: "", keyAreas: [],
  floors: "", entryPoints: "", existingSystem: "",
  facilitySize: "", perimeterCoverage: "", nightVision: "",
  projectNature: "", procurementType: "", approxCameras: "",
  additionalNotes: "",
};

const customerTypes = [
  { id: "residential",  icon: Home,      label: "My Home",                  sub: "Flat, house, villa" },
  { id: "commercial",   icon: Building2, label: "Office / Business",         sub: "Retail, corporate, multi-branch" },
  { id: "industrial",   icon: Factory,   label: "Warehouse / Factory",       sub: "Industrial facility, plant" },
  { id: "government",   icon: Landmark,  label: "Government / Public Space", sub: "PSU, public infrastructure" },
];

const keyAreaOptions = ["Main Entrance", "Parking Area", "Interior Rooms", "Backyard / Garden", "Staircase / Lift", "Perimeter / Boundary"];

const totalSteps = (type: CustomerType) => type ? 4 : 3;

const SmartEnquiryWidget = () => {
  const [step, setStep]         = useState(1);
  const [form, setForm]         = useState<FormData>(initialForm);
  const [sending, setSending]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]       = useState("");

  const update = (field: keyof FormData, value: string | string[]) =>
    setForm((f) => ({ ...f, [field]: value }));

  const toggleArea = (area: string) => {
    const curr = form.keyAreas;
    update("keyAreas", curr.includes(area) ? curr.filter((a) => a !== area) : [...curr, area]);
  };

  const canProceed = (): boolean => {
    if (step === 1) return !!(form.name.trim() && form.email.trim() && form.phone.trim());
    if (step === 2) return !!form.customerType;
    if (step === 3) {
      if (form.customerType === "residential")  return !!(form.cameraCount && form.propertyType);
      if (form.customerType === "commercial")   return !!(form.floors && form.entryPoints);
      if (form.customerType === "industrial")   return !!(form.facilitySize && form.nightVision);
      if (form.customerType === "government")   return !!(form.projectNature && form.procurementType);
    }
    return true;
  };

  const buildSummary = (): string => {
    const lines: string[] = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `City: ${form.city || "Not provided"}`,
      `Customer Type: ${customerTypes.find((c) => c.id === form.customerType)?.label ?? ""}`,
    ];
    if (form.customerType === "residential") {
      lines.push(`Property Type: ${form.propertyType}`);
      lines.push(`Camera Count: ${form.cameraCount}`);
      if (form.keyAreas.length) lines.push(`Key Areas: ${form.keyAreas.join(", ")}`);
    } else if (form.customerType === "commercial") {
      lines.push(`Floors: ${form.floors}`);
      lines.push(`Entry/Exit Points: ${form.entryPoints}`);
      lines.push(`Existing System: ${form.existingSystem || "None"}`);
    } else if (form.customerType === "industrial") {
      lines.push(`Facility Size: ${form.facilitySize}`);
      lines.push(`Perimeter Coverage: ${form.perimeterCoverage || "Not specified"}`);
      lines.push(`Night Vision Required: ${form.nightVision}`);
    } else if (form.customerType === "government") {
      lines.push(`Project Nature: ${form.projectNature}`);
      lines.push(`Procurement Type: ${form.procurementType}`);
      lines.push(`Approx. Cameras: ${form.approxCameras || "Not specified"}`);
    }
    if (form.additionalNotes) lines.push(`Additional Notes: ${form.additionalNotes}`);
    return lines.join("\n");
  };

  const handleSubmit = async () => {
    setSending(true);
    setError("");
    const summary = buildSummary();
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name:      form.name,
          to_email:     form.email,
          from_name:    "Aarya Surveillance",
          reply_to:     "solutions@aaryasurveillance.com",
          customer_name:  form.name,
          customer_email: form.email,
          customer_phone: form.phone,
          customer_city:  form.city || "Not provided",
          customer_type:  customerTypes.find((c) => c.id === form.customerType)?.label ?? "",
          summary,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please call us directly at +91 80745 91188 or +91 80742 81188.");
    } finally {
      setSending(false);
    }
  };

  // ── Step indicators ──────────────────────────────────────
  const steps = ["Your Details", "Space Type", "Requirements", "Review & Send"];

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">

      {/* Header */}
      <div className="bg-primary px-6 py-4">
        <h3 className="text-primary-foreground font-bold text-lg">
          Tell Us About Your Space
        </h3>
        <p className="text-primary-foreground/60 text-sm mt-0.5">
          Answer 3 quick questions — we'll prepare the right solution for you
        </p>
      </div>

      {/* Step progress bar */}
      {!submitted && (
        <div className="px-6 pt-5 pb-2">
          <div className="flex items-center gap-1.5">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-1.5 flex-1">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    i + 1 < step  ? "bg-secondary text-secondary-foreground" :
                    i + 1 === step ? "bg-primary text-primary-foreground ring-4 ring-primary/20" :
                                   "bg-muted text-muted-foreground"
                  }`}>
                    {i + 1 < step ? <CheckCircle2 size={14} /> : i + 1}
                  </div>
                  <span className={`text-[10px] font-medium hidden sm:block ${
                    i + 1 === step ? "text-primary" : "text-muted-foreground"
                  }`}>{label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-px flex-1 mb-4 transition-all ${i + 1 < step ? "bg-secondary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step content */}
      <div className="px-6 pb-6 pt-4 min-h-[320px]">
        <AnimatePresence mode="wait">

          {/* ── STEP 1: Personal Details ── */}
          {step === 1 && !submitted && (
            <motion.div key="step1"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }} className="space-y-4"
            >
              <p className="text-sm font-semibold text-foreground mb-3">
                👋 Let's start with your contact details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text" placeholder="Your full name *"
                    value={form.name} onChange={(e) => update("name", e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="relative">
                  <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="tel" placeholder="Phone number *"
                    value={form.phone} onChange={(e) => update("phone", e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email" placeholder="Email address *"
                    value={form.email} onChange={(e) => update("email", e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="relative">
                  <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text" placeholder="Your city"
                    value={form.city} onChange={(e) => update("city", e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">* Required fields</p>
            </motion.div>
          )}

          {/* ── STEP 2: Customer Type ── */}
          {step === 2 && !submitted && (
            <motion.div key="step2"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm font-semibold text-foreground mb-4">
                🏗 What are you looking to secure, {form.name.split(" ")[0]}?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customerTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => update("customerType", type.id)}
                    className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all hover:border-secondary/50 ${
                      form.customerType === type.id
                        ? "border-secondary bg-secondary/10"
                        : "border-border bg-background"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      form.customerType === type.id ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <type.icon size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{type.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{type.sub}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── STEP 3: Type-specific questions ── */}
          {step === 3 && !submitted && (
            <motion.div key="step3"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }} className="space-y-4"
            >
              <p className="text-sm font-semibold text-foreground mb-3">
                📋 A few details about your space
              </p>

              {/* Residential */}
              {form.customerType === "residential" && (
                <div className="space-y-3">
                  <select value={form.propertyType} onChange={(e) => update("propertyType", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Property type *</option>
                    <option>Apartment / Flat</option>
                    <option>Independent House</option>
                    <option>Villa / Bungalow</option>
                    <option>Gated Community</option>
                  </select>
                  <select value={form.cameraCount} onChange={(e) => update("cameraCount", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Approximate cameras needed *</option>
                    <option>1–2 cameras</option>
                    <option>3–5 cameras</option>
                    <option>6–10 cameras</option>
                    <option>Not sure — need advice</option>
                  </select>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Key areas to cover (select all that apply)</p>
                    <div className="flex flex-wrap gap-2">
                      {keyAreaOptions.map((area) => (
                        <button key={area} onClick={() => toggleArea(area)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            form.keyAreas.includes(area)
                              ? "bg-secondary/15 border-secondary text-foreground"
                              : "bg-background border-border text-muted-foreground hover:border-secondary/40"
                          }`}>
                          {area}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Commercial */}
              {form.customerType === "commercial" && (
                <div className="space-y-3">
                  <select value={form.floors} onChange={(e) => update("floors", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Number of floors *</option>
                    <option>1 floor</option>
                    <option>2–3 floors</option>
                    <option>4–10 floors</option>
                    <option>10+ floors</option>
                  </select>
                  <select value={form.entryPoints} onChange={(e) => update("entryPoints", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Number of entry/exit points *</option>
                    <option>1–2 points</option>
                    <option>3–5 points</option>
                    <option>6+ points</option>
                  </select>
                  <select value={form.existingSystem} onChange={(e) => update("existingSystem", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Existing security system?</option>
                    <option>No existing system</option>
                    <option>Yes — needs upgrade</option>
                    <option>Yes — needs repair/AMC</option>
                  </select>
                </div>
              )}

              {/* Industrial */}
              {form.customerType === "industrial" && (
                <div className="space-y-3">
                  <select value={form.facilitySize} onChange={(e) => update("facilitySize", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Facility size *</option>
                    <option>Under 5,000 sq ft</option>
                    <option>5,000–20,000 sq ft</option>
                    <option>20,000–1 lakh sq ft</option>
                    <option>1 lakh sq ft and above</option>
                  </select>
                  <select value={form.perimeterCoverage} onChange={(e) => update("perimeterCoverage", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Outdoor perimeter coverage needed?</option>
                    <option>Yes — full perimeter</option>
                    <option>Yes — partial / entry points only</option>
                    <option>No — indoor only</option>
                  </select>
                  <select value={form.nightVision} onChange={(e) => update("nightVision", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">24/7 night vision required? *</option>
                    <option>Yes — round the clock monitoring</option>
                    <option>Only certain hours</option>
                    <option>Not sure — need advice</option>
                  </select>
                </div>
              )}

              {/* Government */}
              {form.customerType === "government" && (
                <div className="space-y-3">
                  <select value={form.projectNature} onChange={(e) => update("projectNature", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Nature of project *</option>
                    <option>Office / Administrative building</option>
                    <option>Public space / Road surveillance</option>
                    <option>Housing Board / Colony</option>
                    <option>PSU / Govt. Undertaking</option>
                    <option>Other</option>
                  </select>
                  <select value={form.procurementType} onChange={(e) => update("procurementType", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Procurement type *</option>
                    <option>Direct purchase / Quote</option>
                    <option>Tender-based</option>
                    <option>GeM portal</option>
                    <option>Not decided yet</option>
                  </select>
                  <select value={form.approxCameras} onChange={(e) => update("approxCameras", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Approximate camera count</option>
                    <option>Under 10</option>
                    <option>10–50</option>
                    <option>50–200</option>
                    <option>200+ cameras</option>
                    <option>Not decided yet</option>
                  </select>
                </div>
              )}

              {/* Additional notes — all types */}
              <div className="relative">
                <MessageSquare size={14} className="absolute left-3 top-3 text-muted-foreground" />
                <textarea
                  placeholder="Any additional details or specific concerns? (optional)"
                  value={form.additionalNotes}
                  onChange={(e) => update("additionalNotes", e.target.value)}
                  rows={3}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
            </motion.div>
          )}

          {/* ── STEP 4: Review & Submit ── */}
          {step === 4 && !submitted && (
            <motion.div key="step4"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm font-semibold text-foreground mb-3">
                ✅ Review your requirement summary
              </p>
              <div className="bg-muted/60 border border-border rounded-xl p-4 text-sm space-y-1.5 mb-4">
                {buildSummary().split("\n").map((line, i) => {
                  const [key, ...rest] = line.split(": ");
                  return (
                    <div key={i} className="flex gap-2">
                      <span className="text-muted-foreground shrink-0 font-medium min-w-[130px]">{key}:</span>
                      <span className="text-foreground">{rest.join(": ")}</span>
                    </div>
                  );
                })}
              </div>
              <div className="bg-secondary/10 border border-secondary/30 rounded-lg px-4 py-3 text-xs text-foreground/70 leading-relaxed">
                📧 We'll send a confirmation to <strong>{form.email}</strong> and our team will reach out within <strong>24 business hours</strong> — no sales pressure, just honest advice.
              </div>
              {error && (
                <p className="text-destructive text-xs mt-2">{error}</p>
              )}
            </motion.div>
          )}

          {/* ── SUCCESS ── */}
          {submitted && (
            <motion.div key="success"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center py-8 gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <CheckCircle2 size={36} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-foreground mb-1">
                  Thank you, {form.name.split(" ")[0]}! 🙏
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  We've received your requirement and sent a confirmation to <strong>{form.email}</strong>. Our team will reach out within 24 hours with honest recommendations.
                </p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <a href="tel:+918074591188" className="text-primary font-semibold hover:underline">
                  📞 Call us: +91 80745 91188
                </a>
                <a href="tel:+918074281188" className="text-primary font-semibold hover:underline">
                  📞 Alternate: +91 80742 81188
                </a>
                <a href="https://wa.me/918074591188" className="text-primary font-semibold hover:underline">
                  💬 WhatsApp us instead
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      {!submitted && (
        <div className="px-6 pb-6 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button onClick={() => setStep((s) => s - 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-all">
              <ChevronLeft size={15} /> Back
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              onClick={() => { if (canProceed()) setStep((s) => s + 1); }}
              disabled={!canProceed()}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed ml-auto"
            >
              Next <ChevronRight size={15} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-bold hover:brightness-110 transition-all disabled:opacity-50 ml-auto"
            >
              <Send size={15} />
              {sending ? "Sending..." : "Send My Requirement"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SmartEnquiryWidget;
