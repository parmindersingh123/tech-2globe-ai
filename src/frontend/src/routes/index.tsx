import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Cloud,
  Code2,
  LineChart,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const solutions = [
  {
    slug: "ai-powered-data-analytics",
    icon: BarChart3,
    title: "AI-Powered Data Analytics",
    description:
      "Transform raw data into actionable insights with real-time AI-driven analytics dashboards.",
    iconBg: "rgba(79,142,247,0.12)",
    iconColor: "#4f8ef7",
  },
  {
    slug: "intelligent-automation",
    icon: Zap,
    title: "Intelligent Automation",
    description:
      "Automate complex workflows and eliminate manual bottlenecks with smart AI orchestration.",
    iconBg: "rgba(124,92,191,0.12)",
    iconColor: "#7c5cbf",
  },
  {
    slug: "predictive-modeling",
    icon: Brain,
    title: "Predictive Modeling",
    description:
      "Forecast trends and outcomes with precision using advanced machine learning models.",
    iconBg: "rgba(79,142,247,0.12)",
    iconColor: "#4f8ef7",
  },
  {
    slug: "enterprise-security-ai",
    icon: Shield,
    title: "Enterprise Security AI",
    description:
      "Protect your business with intelligent threat detection and automated incident response.",
    iconBg: "rgba(124,92,191,0.12)",
    iconColor: "#7c5cbf",
  },
  {
    slug: "ai-automation",
    icon: Zap,
    title: "AI Automation",
    description:
      "Scale end-to-end process automation across departments with AI-driven decision-making and seamless integrations.",
    iconBg: "rgba(124,92,191,0.12)",
    iconColor: "#a78bfa",
  },
  {
    slug: "cloud-migration",
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Modernize your infrastructure with AI-guided cloud transformation — zero downtime, maximum efficiency.",
    iconBg: "rgba(34,211,238,0.12)",
    iconColor: "#22d3ee",
  },
  {
    slug: "predictive-ai-analytics",
    icon: LineChart,
    title: "Predictive AI Analytics",
    description:
      "Turn raw data into revenue-generating intelligence with AI-powered forecasting and real-time predictive models.",
    iconBg: "rgba(79,142,247,0.12)",
    iconColor: "#4f8ef7",
  },
  {
    slug: "hire-lovable-ai-developer",
    icon: Code2,
    title: "Hire a Lovable AI Developer",
    description:
      "Ship MVPs in 3–7 days with expert Lovable.dev prompt engineers delivering production-grade apps at 5–10x the speed.",
    iconBg: "rgba(255,87,87,0.12)",
    iconColor: "#ff5757",
  },
];

function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#ffffff" }}
    >
      <Nav />
      <main className="flex-1 relative overflow-hidden">
        {/* Hero */}
        <section
          className="relative min-h-screen flex items-center justify-center py-[100px] px-4"
          style={{ background: "rgba(224,247,250,0.35)" }}
        >
          {/* Subtle background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #4f8ef7 0%, transparent 70%)",
                filter: "blur(80px)",
                opacity: 0.14,
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #7c5cbf 0%, transparent 70%)",
                filter: "blur(80px)",
                opacity: 0.14,
              }}
            />
            {/* Teal accent blob */}
            <div
              className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
                filter: "blur(80px)",
                opacity: 0.07,
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 border"
                style={{
                  borderColor: "rgba(79,142,247,0.4)",
                  background: "rgba(79,142,247,0.08)",
                  color: "#4f8ef7",
                }}
              >
                Next-Generation AI Solutions
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: "-0.02em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span style={{ color: "#1a1a2e" }}>Power Your Business</span>
              <br />
              <span
                className="gradient-text-clip"
                style={{
                  background:
                    "linear-gradient(135deg, #4f8ef7 0%, #7c5cbf 55%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                with AI Intelligence
              </span>
            </motion.h1>

            <motion.p
              className="text-xl max-w-2xl mx-auto mb-10"
              style={{ color: "#6b7280" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tech 2Globe AI delivers enterprise-grade solutions that transform
              how businesses operate, compete, and grow.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/solutions/$slug"
                params={{ slug: "custom-ai-development" }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-smooth hover:opacity-90 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                }}
                data-ocid="hero-cta-primary"
              >
                Explore Solutions <ArrowRight size={18} />
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-smooth hover:scale-105"
                style={{
                  border: "1px solid rgba(79,142,247,0.5)",
                  background: "rgba(79,142,247,0.06)",
                  color: "#4f8ef7",
                }}
                data-ocid="hero-cta-secondary"
              >
                Book a Demo
              </button>
            </motion.div>
          </div>

          {/* Bottom gradient divider bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #4f8ef7 0%, #7c5cbf 50%, #06b6d4 100%)",
              opacity: 0.7,
            }}
          />
        </section>

        {/* Solutions Grid */}
        <section
          className="py-[100px] px-4 bg-section-premium"
          style={{
            background: "linear-gradient(160deg, #fafafa 0%, #f0f4ff 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#4f8ef7", letterSpacing: "0.12em" }}
              >
                Our Services
              </span>
              <h2
                className="text-4xl font-bold mb-4"
                style={{ color: "#1a1a2e", letterSpacing: "-0.02em" }}
              >
                Our Solutions
              </h2>
              <p className="text-lg" style={{ color: "#6b7280" }}>
                Explore AI-powered capabilities designed for enterprise scale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to="/solutions/$slug"
                    params={{ slug: sol.slug }}
                    className="group block p-8 rounded-xl h-full transition-smooth hover:scale-[1.02]"
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(79,142,247,0.12)",
                      boxShadow:
                        "0 4px 24px rgba(79,142,247,0.12), 0 1px 4px rgba(0,0,0,0.06)",
                    }}
                    data-ocid={`solution-card-${sol.slug}`}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth"
                      style={{
                        background: sol.iconBg,
                        color: sol.iconColor,
                      }}
                    >
                      <sol.icon size={24} />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "#1a1a2e" }}
                    >
                      {sol.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#6b7280" }}
                    >
                      {sol.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 mt-4 text-sm font-medium transition-fast"
                      style={{ color: sol.iconColor }}
                    >
                      Learn More <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
