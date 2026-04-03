import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import AaryaLogo from "./AaryaLogo";

const Footer = () => (
  <footer className="bg-charcoal text-charcoal-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <AaryaLogo />
            <span className="font-semibold text-sm">
              Aarya Surveillance
              <span className="block text-xs font-normal opacity-70">
                & IT Solutions Pvt. Ltd.
              </span>
            </span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Your Safety. Our Purpose.<br />
            Established 2025 · Secunderabad, Telangana
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home",          to: "/" },
              { label: "About Us",      to: "/about" },
              { label: "Our Services",  to: "/services" },
              { label: "Brands We Work With", to: "/brands" },
              { label: "Contact",       to: "/contact" },
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
          <h4 className="font-semibold mb-4 text-secondary">Services</h4>
          <nav className="flex flex-col gap-2">
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
          <h4 className="font-semibold mb-4 text-secondary">Contact</h4>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+919390284103"
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all"
            >
              <Phone size={14} /> +91-9390284103
            </a>
            <a
              href="mailto:sm@aaryasurveillance.com"
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all"
            >
              <Mail size={14} /> sm@aaryasurveillance.com
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

      <div className="border-t border-charcoal-foreground/10 mt-10 pt-6 text-center">
        <p className="text-xs opacity-50">
          © 2025 Aarya Surveillance and IT Solutions Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
