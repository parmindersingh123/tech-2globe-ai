import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const services = [
  "Custom AI Development",
  "Predictive AI Analytics",
  "Hire AI Developers",
  "Hire Product Engineering",
  "Generative AI Solutions",
  "AI Automation Services",
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      style={{
        background: "#0a0f2c",
        borderTop: "1px solid rgba(0,188,212,0.15)",
      }}
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            <img
              src="/assets/tech2globe-logo-white.png"
              alt="Tech2Globe"
              className="h-12 w-auto object-contain self-start"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <p className="text-sm leading-relaxed" style={{ color: "#8892a4" }}>
              Empowering businesses worldwide with cutting-edge AI solutions,
              intelligent automation, and next-generation digital products.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(0,188,212,0.12)",
                    color: "#00bcd4",
                  }}
                  data-ocid="footer.social_link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#00bcd4" }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/#"
                    className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                    style={{ color: "#8892a4" }}
                    data-ocid="footer.service_link"
                  >
                    <ArrowRight
                      size={12}
                      className="flex-shrink-0 opacity-50"
                      style={{ color: "#00bcd4" }}
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#00bcd4" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: "#8892a4" }}
                    data-ocid="footer.company_link"
                  >
                    <ArrowRight
                      size={12}
                      className="flex-shrink-0 opacity-50"
                      style={{ color: "#00bcd4" }}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#00bcd4" }}
            >
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(0,188,212,0.12)" }}
                >
                  <Mail size={14} style={{ color: "#00bcd4" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "#8892a4" }}
                  >
                    Email Us
                  </p>
                  <a
                    href="mailto:info@tech2globe.com"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#ffffff" }}
                    data-ocid="footer.email_link"
                  >
                    info@tech2globe.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(0,188,212,0.12)" }}
                >
                  <Phone size={14} style={{ color: "#00bcd4" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "#8892a4" }}
                  >
                    Call Us
                  </p>
                  <a
                    href="tel:+15168585840"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#ffffff" }}
                    data-ocid="footer.phone_link"
                  >
                    +1-516-858-5840
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(0,188,212,0.12)" }}
                >
                  <MapPin size={14} style={{ color: "#00bcd4" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "#8892a4" }}
                  >
                    Visit Us
                  </p>
                  <p className="text-sm" style={{ color: "#ffffff" }}>
                    1538, Old Country Road, Plainview, New York, United State -
                    11803
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "#8892a4" }}
        >
          <p>
            © {year} Tech2Globe. All Rights Reserved. Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:underline"
              style={{ color: "#00bcd4" }}
              data-ocid="footer.caffeine_link"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="transition-colors duration-200 hover:underline"
              style={{ color: "#8892a4" }}
              data-ocid="footer.privacy_link"
            >
              Privacy Policy
            </a>
            <span style={{ color: "#374069" }}>|</span>
            <a
              href="/terms"
              className="transition-colors duration-200 hover:underline"
              style={{ color: "#8892a4" }}
              data-ocid="footer.terms_link"
            >
              Terms of Service
            </a>
            <span style={{ color: "#374069" }}>|</span>
            <a
              href="https://tech2globe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:underline"
              style={{ color: "#8892a4" }}
              data-ocid="footer.website_link"
            >
              tech2globe.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
