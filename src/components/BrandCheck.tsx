import { useState } from "react";
import { ArrowRight, Check, Minus } from "lucide-react";

/**
 * "Do you repair my brand?" — checks what the visitor types against the
 * repair brand list on this page. Brand level only: there is no model list.
 * A brand that isn't listed is not a no; the copy says to ask.
 */
const BrandCheck = ({ brands }: { brands: string[] }) => {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const match =
    term.length < 2
      ? null
      : brands.find((b) => b.toLowerCase() === term) ??
        brands.find((b) => b.toLowerCase().startsWith(term)) ??
        brands.find((b) => b.toLowerCase().includes(term) || term.includes(b.toLowerCase()));

  return (
    <div className="max-w-xl mx-auto mt-12">
      <label htmlFor="brand-check" className="block font-mono text-[11px] tracking-[0.2em] uppercase text-secondary mb-3 text-center">
        Check your brand
      </label>
      <input
        id="brand-check"
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Type the make on the camera label"
        autoComplete="off"
        className="w-full px-5 py-3.5 rounded-md border border-input bg-background text-base text-center placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <div aria-live="polite" className="min-h-[5.5rem] mt-4 text-center">
        {term.length >= 2 && match && (
          <p className="text-sm leading-relaxed">
            <span className="inline-flex items-center gap-2 text-secondary font-semibold text-base">
              <Check size={17} /> {match} is on our repair list.
            </span>
            <br />
            <a href="#repair-enquiry" className="inline-flex items-center gap-1.5 mt-2 text-foreground/80 hover:text-secondary transition-colors">
              Tell us what's wrong with it <ArrowRight size={14} />
            </a>
          </p>
        )}
        {term.length >= 2 && !match && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="inline-flex items-center gap-2 text-foreground font-semibold text-base">
              <Minus size={17} /> “{q.trim()}” isn't on the list.
            </span>
            <br />
            That isn't a no. We do take in makes beyond this list — send us the brand and
            the fault and we'll tell you honestly whether we can repair it.{" "}
            <a href="#repair-enquiry" className="text-secondary hover:underline whitespace-nowrap">
              Ask us →
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandCheck;
