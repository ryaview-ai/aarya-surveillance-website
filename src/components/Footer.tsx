import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import AaryaLogo from "./AaryaLogo";

const Footer = () => (
  <footer className="bg-charcoal text-charcoal-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <AaryaLogo />
            <span className="font-semibold text-sm tracking-tight">
              Aarya Surveillance
              <span className="block text-[11px] font-normal opacity-65 tracking-wide">
                &amp; IT Solutions Pvt. Ltd.
              </span>
            </span>
          </div>
          <p className="text-sm opacity-65 leading-relaxed">
            Your Safety. Our Purpose.<br />
            Established 2025 · Secunderabad, Telangana
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-5 text-secondary text-[13px] tracking-wide uppercase">Quick Links</h4>
          <nav className="flex flex-col gap-2.5">
            {[
              { label: "Home",                 to: "/" },
              { label: "About Us",             to: "/about" },
              { label: "Our Services",         to: "/services" },
              { label: "Brands We Work With",  to: "/brands" },
              { label: "Contact",              to: "/contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-5 text-secondary text-[13px] tracking-wide uppercase">Services</h4>
          <nav className="flex flex-col gap-2.5">
            {[
              "CCTV Installation",
              "Networking & IT",
              "Annual Maintenance (AMC)",
              "AI Video Analytics",
            ].map((s) => (
              <Link
                key={s}
                to="/services"
                className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all"
              >
                {s}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-5 text-secondary text-[13px] tracking-wide uppercase">Contact</h4>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+918074591188"
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all"
            >
              <Phone size={14} className="shrink-0" /> +91 80745 91188
            </a>
            <a
              href="tel:+918074281188"
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all"
            >
              <Phone size={14} className="shrink-0" /> +91 80742 81188
            </a>
            <a
              href="mailto:solutions@aaryasurveillance.com"
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all"
            >
              <Mail size={14} className="shrink-0" />
              <span className="break-all">solutions@aaryasurveillance.com</span>
            </a>
            <div className="flex items-start gap-2 text-sm opacity-70">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>
                Maredpally, Secunderabad,<br />
                Telangana – 500026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials strip */}
      <div className="border-t border-charcoal-foreground/10 mt-12 pt-8">
        <p className="text-[11px] font-semibold opacity-50 uppercase tracking-[0.18em] mb-4 text-center">
          Registered &amp; Credentialed
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="bg-charcoal-foreground/[0.04] border border-charcoal-foreground/10 rounded-lg px-4 py-3 text-center">
            <p className="text-[10px] opacity-55 mb-1 tracking-wide uppercase">GeM Seller</p>
            <p className="font-mono font-semibold text-secondary text-[13px]">
              2NR7250013797701
            </p>
          </div>
          <div className="bg-charcoal-foreground/[0.04] border border-charcoal-foreground/10 rounded-lg px-4 py-3 text-center">
            <p className="text-[10px] opacity-55 mb-1 tracking-wide uppercase">Udyam (MSME)</p>
            <p className="font-mono font-semibold text-secondary text-[13px]">
              UDYAM-TS-02-0323319
            </p>
          </div>
          <div className="bg-charcoal-foreground/[0.04] border border-charcoal-foreground/10 rounded-lg px-4 py-3 text-center">
            <p className="text-[10px] opacity-55 mb-1 tracking-wide uppercase">Authorized</p>
            <p className="font-mono font-semibold text-secondary text-[13px]">
              Axis Channel Partner
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10 mt-8 pt-6 text-center">
        <p className="text-xs opacity-50">
          © 2025 Aarya Surveillance and IT Solutions Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
