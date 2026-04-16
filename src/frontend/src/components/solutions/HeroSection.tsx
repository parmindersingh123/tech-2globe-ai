import type { SolutionData } from "@/data/solutions";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

interface Props {
  data: SolutionData;
}

export default function HeroSection({ data }: Props) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      {/* Subtle gradient blobs — light tints on white */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            left: "-160px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            opacity: 0.1,
            filter: "blur(80px)",
            background:
              "radial-gradient(circle, #4f8ef7 0%, #7c5cbf 50%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "-160px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            opacity: 0.08,
            filter: "blur(80px)",
            background:
              "radial-gradient(circle, #7c5cbf 0%, #4f8ef7 50%, transparent 70%)",
          }}
        />
        {/* Light gray dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Content — always z-10, always visible */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "70px 2rem 40px",
          width: "100%",
        }}
      >
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 mb-8 text-sm"
          aria-label="Breadcrumb"
          data-ocid="hero-breadcrumb"
        >
          <Link to="/" className="transition-fast" style={{ color: "#6b7280" }}>
            Home
          </Link>
          <ChevronRight size={14} style={{ color: "#9ca3af" }} />
          <span style={{ color: "#6b7280" }}>Solutions</span>
          <ChevronRight size={14} style={{ color: "#9ca3af" }} />
          <span style={{ color: "#4f8ef7", fontWeight: 500 }}>
            {data.headlineAccent}
          </span>
        </nav>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 600,
                marginBottom: "24px",
                background: "rgba(79,142,247,0.08)",
                border: "1px solid rgba(79,142,247,0.25)",
                color: "#4f8ef7",
              }}
            >
              <Zap size={12} />
              {data.badge}
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 800,
                color: "#1a1a2e",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
                fontFamily: "var(--font-display)",
              }}
            >
              {data.headline}{" "}
              <span style={{ color: "#4f8ef7" }}>{data.headlineAccent}</span>
            </h1>

            {/* Subheading */}
            {data.subheading.split("\n\n").map((para) => (
              <p
                key={para.slice(0, 30)}
                style={{
                  fontSize: para.length < 80 ? "1.25rem" : "1.1rem",
                  color: para.length < 80 ? "#1a1a2e" : "#374151",
                  fontWeight: para.length < 80 ? 600 : 400,
                  lineHeight: 1.7,
                  marginBottom: para.length < 80 ? "12px" : "40px",
                  maxWidth: "580px",
                }}
              >
                {para}
              </p>
            ))}

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 transition-smooth hover:opacity-90"
                style={{
                  padding: "14px 28px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                  boxShadow: "0 4px 20px rgba(79,142,247,0.3)",
                }}
                data-ocid="hero-cta-primary"
              >
                {data.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 transition-smooth hover:bg-black/5"
                style={{
                  padding: "14px 28px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#1a1a2e",
                  border: "1px solid rgba(0,0,0,0.15)",
                  background: "transparent",
                }}
                data-ocid="hero-cta-secondary"
                onClick={() => setVideoOpen(true)}
              >
                {data.ctaSecondary}
              </button>
            </div>

            {/* Quick stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "32px",
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {data.heroStats.map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#6b7280",
                      marginTop: "2px",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard illustration, hidden on mobile */}
          <div
            className="hidden lg:flex items-center justify-center"
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "440px",
              }}
            >
              <div
                style={{
                  borderRadius: "16px",
                  padding: "24px",
                  width: "100%",
                  background: "#ffffff",
                  border: "1px solid rgba(79,142,247,0.15)",
                  boxShadow:
                    "0 24px 80px rgba(0,0,0,0.1), 0 0 60px rgba(79,142,247,0.06)",
                }}
              >
                {/* Dashboard header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "24px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        marginBottom: "4px",
                      }}
                    >
                      Performance Overview
                    </p>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#1a1a2e",
                      }}
                    >
                      {data.headlineAccent}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(79,142,247,0.10)",
                    }}
                  >
                    <BarChart3 size={20} style={{ color: "#4f8ef7" }} />
                  </div>
                </div>

                {/* Chart bars */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "8px",
                    height: "112px",
                    marginBottom: "24px",
                  }}
                >
                  {(
                    [
                      "h40",
                      "h65",
                      "h50",
                      "h80",
                      "h60",
                      "h90",
                      "h75",
                      "h95",
                      "h70",
                      "h88",
                    ] as const
                  ).map((key, i) => (
                    <div
                      key={key}
                      style={{
                        flex: 1,
                        borderRadius: "2px 2px 0 0",
                        height: `${Number.parseInt(key.slice(1))}%`,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "2px 2px 0 0",
                          background:
                            i >= 7
                              ? "linear-gradient(180deg, #4f8ef7, #7c5cbf)"
                              : "rgba(79,142,247,0.15)",
                          boxShadow:
                            i >= 7 ? "0 0 12px rgba(79,142,247,0.3)" : "none",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Metrics row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "12px",
                  }}
                >
                  {data.heroStats.slice(0, 3).map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        borderRadius: "8px",
                        padding: "12px",
                        background: "#f8fafc",
                        border: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.7rem",
                          color: "#6b7280",
                          marginBottom: "4px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {stat.label}
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: "#4f8ef7",
                        }}
                      >
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card 1 — static, no animation */}
              <div
                style={{
                  position: "absolute",
                  top: "-32px",
                  right: "-40px",
                  borderRadius: "12px",
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#ffffff",
                  border: "1px solid rgba(79,142,247,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(79,142,247,0.10)",
                  }}
                >
                  <TrendingUp size={16} style={{ color: "#4f8ef7" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", color: "#6b7280" }}>
                    {data.heroStats[0].label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                    }}
                  >
                    {data.heroStats[0].value}
                  </p>
                </div>
              </div>

              {/* Floating card 2 — static, no animation */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  left: "-32px",
                  borderRadius: "12px",
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#ffffff",
                  border: "1px solid rgba(124,92,191,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(124,92,191,0.10)",
                  }}
                >
                  <Zap size={16} style={{ color: "#7c5cbf" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", color: "#6b7280" }}>
                    {data.heroStats[1].label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                    }}
                  >
                    {data.heroStats[1].value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
