import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send, CheckCircle2, User, Phone, Mail, Building2, MapPin,
} from "lucide-react";

/* ─── EmailJS ──────────────────────────────────────────────────────
   Same service and template as the quick form and the new-system
   widget, so all three paths render through one template and cost
   the same two requests per enquiry.
------------------------------------------------------------------ */
const EMAILJS_SERVICE_ID  = "service_fio6dfl";
const EMAILJS_TEMPLATE_ID = "template_hqc3i8y";
const EMAILJS_PUBLIC_KEY  = "AG_PAPF3Mrkcw2dRU";

/* ─── Options ─────────────────────────────────────────────────────
   Brand list mirrors the 14 brands on this page. "Repairing is not
   supplying" — these are brands we service, not brands we sell.
------------------------------------------------------------------ */
const brandOptions = [
  "Axis", "Bosch", "Infinova", "Vivotek", "Hikvision", "Dahua",
  "Honeywell", "Hanwha", "CP Plus", "Pelco", "Uniview", "Panasonic",
  "Samsung", "Godrej",
  "Mixed — more than one brand",
  "Other / not sure",
];

const faultOptions = [
  "No power — unit completely dead",
  "No image / black screen",
  "PTZ fault — motor, zoom or drive",
  "Night vision / IR illuminator failure",
  "Intermittent — reboots or drops out",
  "Network fault — no stream, not reachable",
  "Image quality — blur, discolouration, focus",
  "Physical or weather damage",
  "Not sure — needs diagnosis",
];

const quantityOptions = [
  "1 unit",
  "2–5 units",
  "6–20 units",
  "More than 20 units",
];

const warrantyOptions = [
  "Out of warranty",
  "Still in warranty",
  "End of life — OEM no longer supports it",
  "Not sure",
];

const logisticsOptions = [
  "We'll courier the units to your lab",
  "Need collection — within Hyderabad",
  "Need a site visit — units are fixed in place",
  "Not decided yet",
];

interface TriageForm {
  name: string;
  phone: string;
  email: string;
  organisation: string;
  city: string;
  brand: string;
  model: string;
  quantity: string;
  fault: string;
  warranty: string;
  logistics: string;
  notes: string;
}

const initialForm: TriageForm = {
  name: "", phone: "", email: "", organisation: "", city: "",
  brand: "", model: "", quantity: "", fault: "", warranty: "",
  logistics: "", notes: "",
};

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm " +
  "focus:outline-none focus:ring-2 focus:ring-ring";

const iconInputClass =
  "w-full pl-9 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm " +
  "focus:outline-none focus:ring-2 focus:ring-ring";

const labelClass = "text-xs font-medium text-muted-foreground mb-1 block";

const RepairTriageForm = () => {
  const [form, setForm]           = useState<TriageForm>(initialForm);
  const [sending, setSending]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState("");

  const update = (field: keyof TriageForm, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const required =
    form.name.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.brand &&
    form.quantity &&
    form.fault;

  const buildSummary = (): string =>
    [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Organisation: ${form.organisation || "Not provided"}`,
      `City / Site: ${form.city || "Not provided"}`,
      "",
      `Brand: ${form.brand}`,
      `Model: ${form.model || "Not provided"}`,
      `Quantity: ${form.quantity}`,
      `Fault: ${form.fault}`,
      `Warranty: ${form.warranty || "Not specified"}`,
      `Logistics: ${form.logistics || "Not specified"}`,
      `Notes: ${form.notes || "None"}`,
    ].join("\n");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!required) return;
    setSending(true);
    setError("");

    const summary = buildSummary();
    const detail = [
      `${form.quantity} · ${form.brand}${form.model ? ` · ${form.model}` : ""}`,
      `Fault: ${form.fault}`,
      `Warranty: ${form.warranty || "Not specified"}`,
      `Logistics: ${form.logistics || "Not specified"}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          customer_name:  form.name,
          customer_email: form.email,
          customer_phone: form.phone,
          customer_city:  form.city || "Not provided",
          customer_type:  form.organisation
            ? `Repair triage — ${form.organisation}`
            : "Repair triage",
          service_needed: `Camera repair — ${form.brand}, ${form.quantity}`,
          message:        detail,
          summary,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "Could not send your enquiry. Please call +91 80745 91188 or +91 80742 81188, " +
        "or email solutions@aaryasurveillance.com.",
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="bg-card border border-secondary/30 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={34} className="text-secondary" />
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Enquiry received, {form.name.split(" ")[0]}.
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-5">
          We've logged {form.quantity.toLowerCase()} of {form.brand} with the fault you
          described. An engineer will come back within 24 business hours on whether it's
          repairable — before you spend anything on replacement.
        </p>
        <div className="flex flex-col gap-1.5 text-sm">
          <a href="tel:+918074591188" className="text-primary font-semibold hover:underline">
            Call +91 80745 91188
          </a>
          <a href="https://wa.me/918074591188" className="text-primary font-semibold hover:underline">
            WhatsApp us instead
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl border border-border p-6 sm:p-7 space-y-5 shadow-sm"
    >
      {/* ── Contact ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="rt-name" className={labelClass}>Full name *</label>
          <div className="relative">
            <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              id="rt-name" type="text" required autoComplete="name"
              placeholder="Your name"
              value={form.name} onChange={(e) => update("name", e.target.value)}
              className={iconInputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="rt-phone" className={labelClass}>Phone *</label>
          <div className="relative">
            <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              id="rt-phone" type="tel" required autoComplete="tel"
              placeholder="+91 XXXXX XXXXX"
              value={form.phone} onChange={(e) => update("phone", e.target.value)}
              className={iconInputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="rt-email" className={labelClass}>Email *</label>
          <div className="relative">
            <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              id="rt-email" type="email" required autoComplete="email"
              placeholder="yourname@company.com"
              value={form.email} onChange={(e) => update("email", e.target.value)}
              className={iconInputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="rt-org" className={labelClass}>Organisation</label>
          <div className="relative">
            <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              id="rt-org" type="text" autoComplete="organization"
              placeholder="Company or site name"
              value={form.organisation} onChange={(e) => update("organisation", e.target.value)}
              className={iconInputClass}
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* ── The cameras ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="rt-brand" className={labelClass}>Camera brand *</label>
          <select
            id="rt-brand" required
            value={form.brand} onChange={(e) => update("brand", e.target.value)}
            className={inputClass}
          >
            <option value="">Select the brand</option>
            {brandOptions.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="rt-model" className={labelClass}>
            Model number <span className="font-normal">(if you have it)</span>
          </label>
          <input
            id="rt-model" type="text"
            placeholder="e.g. P3225-LVE"
            value={form.model} onChange={(e) => update("model", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="rt-qty" className={labelClass}>How many units *</label>
          <select
            id="rt-qty" required
            value={form.quantity} onChange={(e) => update("quantity", e.target.value)}
            className={inputClass}
          >
            <option value="">Select quantity</option>
            {quantityOptions.map((q) => <option key={q}>{q}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="rt-warranty" className={labelClass}>Warranty status</label>
          <select
            id="rt-warranty"
            value={form.warranty} onChange={(e) => update("warranty", e.target.value)}
            className={inputClass}
          >
            <option value="">Select status</option>
            {warrantyOptions.map((w) => <option key={w}>{w}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="rt-fault" className={labelClass}>What's wrong *</label>
        <select
          id="rt-fault" required
          value={form.fault} onChange={(e) => update("fault", e.target.value)}
          className={inputClass}
        >
          <option value="">Select the fault</option>
          {faultOptions.map((f) => <option key={f}>{f}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="rt-logistics" className={labelClass}>Getting the units to us</label>
          <select
            id="rt-logistics"
            value={form.logistics} onChange={(e) => update("logistics", e.target.value)}
            className={inputClass}
          >
            <option value="">Select an option</option>
            {logisticsOptions.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="rt-city" className={labelClass}>City / site location</label>
          <div className="relative">
            <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              id="rt-city" type="text"
              placeholder="Where the cameras are"
              value={form.city} onChange={(e) => update("city", e.target.value)}
              className={iconInputClass}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="rt-notes" className={labelClass}>
          Anything else <span className="font-normal">(optional)</span>
        </label>
        <textarea
          id="rt-notes" rows={3}
          placeholder="When it failed, what you've already tried, whether other brands on site are affected."
          value={form.notes} onChange={(e) => update("notes", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && <p className="text-destructive text-xs">{error}</p>}

      <button
        type="submit"
        disabled={sending || !required}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-105 transition-all disabled:opacity-45 disabled:cursor-not-allowed"
      >
        <Send size={15} />
        {sending ? "Sending..." : "Send Repair Enquiry"}
      </button>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        No obligation. We assess first and tell you honestly whether a repair is worth
        it — diagnosis comes to you in writing before any work is agreed.
      </p>
    </form>
  );
};

export default RepairTriageForm;
