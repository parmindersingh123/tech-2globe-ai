import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Hire Product Engineering" },
  { label: "Hire AI Developers" },
  { label: "Industries" },
  { label: "Use cases" },
  { label: "Let's Talk with AI Expert" },
  { label: "Contact Us", href: "/contact" },
];

const navLinkStyle: React.CSSProperties = { color: "#374151" };

function NavItem({
  label,
  href,
  onClick,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const sharedProps = {
    className:
      "block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap",
    style: navLinkStyle as React.CSSProperties,
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.color = "#7c3aed";
      e.currentTarget.style.background = "rgba(124,58,237,0.06)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.color = "#374151";
      e.currentTarget.style.background = "transparent";
    },
    "data-ocid": `nav-link-${label.toLowerCase().replace(/[\s']+/g, "-")}`,
    onClick,
  };
  if (href) {
    return (
      <Link to={href} {...sharedProps}>
        {label}
      </Link>
    );
  }
  return (
    <button type="button" {...sharedProps}>
      {label}
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0"
          data-ocid="nav-logo"
          onClick={closeMobile}
        >
          <img
            src="/assets/tech2globe-logo.png"
            alt="Tech2Globe"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavItem label={link.label} href={link.href} />
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            type="button"
            className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "#7c3aed" }}
            data-ocid="nav-cta"
          >
            Hire Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg transition-colors duration-200"
          style={{ color: "#374151" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="nav-mobile-toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden overflow-hidden"
          style={{
            background: "#ffffff",
            borderTop: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavItem
                key={link.label}
                label={link.label}
                href={link.href}
                onClick={closeMobile}
              />
            ))}

            <div
              className="pt-3 border-t"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <button
                type="button"
                className="w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background: "#7c3aed" }}
                data-ocid="nav-mobile-cta"
                onClick={closeMobile}
              >
                Hire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
