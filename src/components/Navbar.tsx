import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AaryaLogo from "./AaryaLogo";

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "Repair",   to: "/repair" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Brands",   to: "/brands" },
  { label: "Contact",  to: "/contact" },
];

const PHONES = [
  { display: "+91 80745 91188", tel: "+918074591188" },
  { display: "+91 80742 81188", tel: "+918074281188" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <AaryaLogo />
          <span className="font-semibold text-white text-sm lg:text-[15px] leading-tight tracking-tight">
            Aarya
            <span className="block text-[11px] font-normal text-white/55 tracking-wide">
              Surveillance &amp; IT
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3.5 py-2 rounded-md text-[13px] font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-secondary"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-secondary shrink-0" />
            <div className="flex flex-col leading-tight">
              {PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="text-[12px] font-medium text-white/85 hover:text-secondary transition-colors whitespace-nowrap"
                >
                  {p.display}
                </a>
              ))}
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold text-[13px] hover:brightness-105 transition-all"
          >
            Talk to Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-16 bg-charcoal z-40 flex flex-col p-6 md:hidden"
          >
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-secondary bg-white/10"
                      : "text-white/80 hover:text-secondary hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              {PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg border border-white/15 text-white font-medium text-base"
                >
                  <Phone size={16} className="text-secondary" />
                  {p.display}
                </a>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-base"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
