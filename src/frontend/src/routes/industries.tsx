import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Building,
  Building2,
  ChevronDown,
  Globe,
  GraduationCap,
  HeartPulse,
  Landmark,
  Mail,
  Phone,
  Scale,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/industries")({
  component: AIDevelopmentCompanyPage,
});

/* ─── Types ─────────────────────────────────────────────────── */
interface Industry {
  id: string;
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface WhyCard {
  id: string;
  num: string;
  title: string;
  desc: string;
}

interface ProcessStep {
  id: string;
  num: string;
  title: string;
  desc: string;
}

interface TechCategory {
  id: string;
  title: string;
  tools: string;
}

interface FaqItem {
  id: string;
  q: string;
  a: string;
}

/* ─── Data ─────────────────────────────────────────────────── */
const heroStats = [
  { id: "projects", label: "500+ Projects Delivered" },
  { id: "clients", label: "200+ Global Clients" },
  { id: "mvp", label: "3-Day MVP Launch" },
];

const industryList: Industry[] = [
  {
    id: "health",
    icon: HeartPulse,
    title: "Healthcare & MedTech",
    desc: "Automate administrative workflows, support clinical decision-making, enable AI-powered diagnostics, and deliver personalized patient experiences — all within HIPAA-compliant, secure AI frameworks.",
  },
  {
    id: "fintech",
    icon: Landmark,
    title: "FinTech & Banking",
    desc: "Deploy AI for credit scoring, fraud detection, eKYC verification, algorithmic trading, and intelligent customer support. Approve loans in minutes and stay compliant with real-time risk monitoring.",
  },
  {
    id: "retail",
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    desc: "Use AI to power personalized product recommendations, dynamic pricing, demand forecasting, inventory optimization, and intelligent customer support chatbots that increase conversion rates.",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Supply Chain",
    desc: "Optimize last-mile delivery, automate warehouse operations, predict supply disruptions, and build intelligent route-planning systems that reduce costs and improve delivery accuracy.",
  },
  {
    id: "legal",
    icon: Scale,
    title: "Legal Tech",
    desc: "Accelerate contract review, automate compliance monitoring, streamline legal research, and deliver AI-assisted document drafting — cutting hours of manual work into seconds.",
  },
  {
    id: "realestate",
    icon: Building,
    title: "Real Estate",
    desc: "Transform property search, automate valuations, match buyers and sellers intelligently, and power virtual property tours with AI and augmented reality solutions.",
  },
  {
    id: "edtech",
    icon: GraduationCap,
    title: "EdTech & E-Learning",
    desc: "Build adaptive learning platforms that personalize content delivery, identify learning gaps, automate assessments, and improve student outcomes with AI-driven insights.",
  },
  {
    id: "hr",
    icon: Users,
    title: "HR & Workforce Management",
    desc: "Streamline hiring with AI-powered candidate screening, automate onboarding workflows, predict employee churn, and enhance engagement with intelligent HR automation platforms.",
  },
];

const whyCards: WhyCard[] = [
  {
    id: "specialization",
    num: "1",
    title: "Deep AI Specialization",
    desc: "Our team includes AI researchers, ML engineers, data scientists, and LLM specialists with hands-on experience deploying production-grade AI systems across global markets.",
  },
  {
    id: "business",
    num: "2",
    title: "Business-First Approach",
    desc: "Every solution begins with a thorough understanding of your business goals, user needs, and market context. We design AI systems that solve real problems — not just technically impressive demos.",
  },
  {
    id: "fullcycle",
    num: "3",
    title: "Full-Cycle Development",
    desc: "From discovery and data strategy to model training, deployment, and ongoing optimization — we manage the complete AI product lifecycle so you can focus on growth.",
  },
  {
    id: "security",
    num: "4",
    title: "Enterprise-Grade Security",
    desc: "We build every solution with data privacy, encryption, access controls, and compliance frameworks built in. Your intellectual property and user data are protected at every layer.",
  },
  {
    id: "scalable",
    num: "5",
    title: "Scalable Architecture",
    desc: "Our AI systems are architected for growth. Whether you are serving 100 users or 10 million, our infrastructure scales intelligently with your business.",
  },
  {
    id: "proven",
    num: "6",
    title: "Proven Delivery Track Record",
    desc: "We have delivered successful AI projects for startups, mid-sized businesses, and Fortune 500 companies — with a framework that ensures predictable timelines, transparent communication, and measurable outcomes.",
  },
];

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    num: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your business goals, data readiness, user requirements, and technical constraints to define the optimal AI approach and roadmap.",
  },
  {
    id: "architecture",
    num: "02",
    title: "Solution Architecture & Design",
    desc: "Our team plans the system architecture, data pipelines, model strategy, and user experience before any code is written — ensuring alignment and efficiency.",
  },
  {
    id: "data",
    num: "03",
    title: "Data Engineering & Preparation",
    desc: "We collect, clean, and structure your data into high-quality training sets. The quality of your AI depends on the quality of your data — we ensure both.",
  },
  {
    id: "model",
    num: "04",
    title: "AI Model Development & Training",
    desc: "We build and train custom AI models using the most suitable frameworks, algorithms, and datasets — validating accuracy and reliability at every checkpoint.",
  },
  {
    id: "deploy",
    num: "05",
    title: "Integration & Deployment",
    desc: "The AI solution is integrated into your existing systems, tested rigorously, and deployed with monitoring, governance, and performance controls in place.",
  },
  {
    id: "optimize",
    num: "06",
    title: "Optimization & Scale",
    desc: "Post-launch, we continuously monitor model performance, retrain on new data, and optimize features and infrastructure as your user base grows.",
  },
];

const techCategories: TechCategory[] = [
  {
    id: "llm",
    title: "Large Language Models & Generative AI",
    tools:
      "GPT-4o, Claude 3, Gemini Pro, LLaMA 3, Mistral, Falcon, Cohere Command, Stability AI, Midjourney API, DALL-E 3",
  },
  {
    id: "ml",
    title: "Machine Learning Frameworks",
    tools:
      "TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost, LightGBM, Hugging Face Transformers, FastAI",
  },
  {
    id: "nlp",
    title: "NLP & Conversational AI",
    tools:
      "LangChain, LlamaIndex, Rasa, Dialogflow, AWS Lex, spaCy, NLTK, OpenAI Assistants API",
  },
  {
    id: "vision",
    title: "Computer Vision",
    tools:
      "OpenCV, YOLO (v8/v9), MediaPipe, Detectron2, Tesseract OCR, AWS Rekognition, Google Vision AI",
  },
  {
    id: "cloud",
    title: "Cloud & MLOps",
    tools:
      "AWS SageMaker, Google Vertex AI, Azure Machine Learning, MLflow, Kubeflow, Docker, Kubernetes, CI/CD pipelines",
  },
  {
    id: "data",
    title: "Data Engineering",
    tools:
      "Apache Spark, Kafka, Airflow, dbt, Snowflake, BigQuery, PostgreSQL, MongoDB, Pinecone, Weaviate (Vector DBs)",
  },
];

const faqItems: FaqItem[] = [
  {
    id: "what",
    q: "What does an AI development company do?",
    a: "An AI development company designs, builds, and deploys artificial intelligence solutions for businesses. This includes custom ML models, generative AI applications, intelligent chatbots, computer vision systems, predictive analytics platforms, and AI integration into existing software products.",
  },
  {
    id: "cost",
    q: "How much does it cost to build a custom AI solution?",
    a: "The cost of AI development varies based on solution complexity, data requirements, model type, integration scope, and team size. A simple AI chatbot may start from $10,000–$25,000, while enterprise-grade AI platforms can range from $50,000 to $500,000+. We provide detailed estimates after an initial discovery consultation.",
  },
  {
    id: "time",
    q: "How long does it take to develop an AI application?",
    a: "Development timelines depend on the project scope. A minimum viable AI product (MVP) typically takes 6–12 weeks. More complex AI systems with multiple integrations may require 4–9 months. We share a detailed timeline during the project scoping phase.",
  },
  {
    id: "data",
    q: "Do I need a large dataset to build an AI solution?",
    a: "Not always. While large datasets improve model accuracy, modern techniques like transfer learning, fine-tuning pre-trained models, and synthetic data generation allow us to build powerful AI solutions even with limited data. Our data team will assess your data readiness and recommend the best approach.",
  },
  {
    id: "integrate",
    q: "Can you integrate AI into my existing software or app?",
    a: "Absolutely. AI integration is one of our core services. We can embed AI capabilities — such as smart recommendations, NLP features, predictive analytics, or automation — into your existing web apps, mobile apps, CRMs, ERPs, or cloud platforms without disrupting current operations.",
  },
  {
    id: "security",
    q: "Is my data safe when working with an AI development company?",
    a: "Yes. We implement enterprise-grade data security practices including end-to-end encryption, role-based access control, secure data pipelines, and strict IP ownership policies. All projects are governed by NDAs and comply with GDPR, HIPAA, and other relevant regulations.",
  },
  {
    id: "industries",
    q: "What industries do you serve with AI development?",
    a: "We serve healthcare, fintech, retail, e-commerce, logistics, legal tech, real estate, education, manufacturing, media, and more. Our cross-industry expertise ensures that AI solutions are tailored to the specific compliance, user, and business requirements of your sector.",
  },
  {
    id: "aivsml",
    q: "What is the difference between AI development and ML development?",
    a: "AI (Artificial Intelligence) is the broader field of creating systems that simulate human intelligence. ML (Machine Learning) is a subset of AI focused on training algorithms on data to make predictions or decisions. All ML is AI, but not all AI involves ML. We work across the full AI/ML spectrum.",
  },
];

const accentGradient =
  "linear-gradient(135deg, #4f8ef7 0%, #7c5cbf 55%, #06b6d4 100%)";

/* ─── Sub-components ─────────────────────────────────────────── */
function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: accentGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function FAQItem({ item, ocid }: { item: FaqItem; ocid: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${open ? "rgba(79,142,247,0.4)" : "#e5e7eb"}`,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: open
          ? "0 4px 20px rgba(79,142,247,0.1)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      data-ocid={ocid}
    >
      <button
        type="button"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
          gap: "16px",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "15px",
            color: "#1a1a2e",
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>
        <ChevronDown
          size={20}
          style={{
            color: "#4f8ef7",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </button>
      {open && (
        <div style={{ padding: "0 24px 20px" }}>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#4b5563",
              margin: 0,
            }}
          >
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function AIDevelopmentCompanyPage() {
  return (
    <>
      <style>{`
        .ind-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px 24px;
          box-shadow: 0 4px 16px rgba(79,142,247,0.06);
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .ind-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(79,142,247,0.14);
          border-color: rgba(79,142,247,0.35);
        }
        .why-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 28px 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .why-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(79,142,247,0.12);
        }
        .tech-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px;
          border-left: 4px solid transparent;
          border-image: linear-gradient(180deg, #4f8ef7, #7c5cbf, #06b6d4) 1;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .tech-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(79,142,247,0.12);
        }
        .tool-tag {
          display: inline-block;
          background: #f0f4ff;
          border: 1px solid rgba(79,142,247,0.18);
          color: #374151;
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 500;
          margin: 3px 2px;
        }
        .step-line-connector {
          position: absolute;
          left: 24px;
          top: 56px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #4f8ef7, #7c5cbf);
        }

        /* Responsive grid helpers */
        .grid-4-col { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .grid-3-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .grid-2-col { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .grid-1-col { display: grid; grid-template-columns: 1fr; gap: 20px; }

        .hero-h1 { font-size: 56px; }
        .hero-h1 span.line-break::after { content: '\\A'; white-space: pre; }
        .section-h2 { font-size: 40px; }
        .section-padding { padding: 80px 24px; }

        @media (max-width: 1024px) {
          .grid-4-col { grid-template-columns: repeat(2, 1fr); }
          .grid-3-col { grid-template-columns: repeat(2, 1fr); }
          .hero-h1 { font-size: 40px; }
          .section-h2 { font-size: 32px; }
          .section-padding { padding: 60px 20px; }
        }
        @media (max-width: 640px) {
          .grid-4-col { grid-template-columns: repeat(1, 1fr); }
          .grid-3-col { grid-template-columns: 1fr; }
          .grid-2-col { grid-template-columns: 1fr; }
          .hero-h1 { font-size: 32px; }
          .section-h2 { font-size: 26px; }
          .section-padding { padding: 48px 16px; }
          .hero-stats-bar { flex-direction: column; gap: 8px; }
          .hero-cta-row { flex-direction: column; }
          .faq-split { flex-direction: column; }
          .process-zigzag { display: none !important; }
          .process-mobile { display: flex !important; }
          .tech-card { border-left-width: 3px; }
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          color: "#1a1a2e",
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        }}
      >
        <Nav />
        <main style={{ flex: 1 }}>
          {/* ── HERO ─────────────────────────────────────────── */}
          <section
            style={{
              background: "#ffffff",
              position: "relative",
              overflow: "hidden",
              padding: "80px 24px 64px",
            }}
            data-ocid="hero.section"
          >
            {/* Decorative orbs */}
            <div
              style={{
                position: "absolute",
                top: "-120px",
                left: "-120px",
                width: "480px",
                height: "480px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(79,142,247,0.09) 0%, transparent 65%)",
                filter: "blur(80px)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-80px",
                right: "-80px",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(124,92,191,0.08) 0%, transparent 65%)",
                filter: "blur(80px)",
                pointerEvents: "none",
              }}
            />
            {/* Grid pattern */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(79,142,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.03) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "900px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  background: "rgba(79,142,247,0.07)",
                  border: "1px solid rgba(79,142,247,0.22)",
                  color: "#4f8ef7",
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "28px",
                }}
                data-ocid="hero.badge"
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#4f8ef7",
                    display: "inline-block",
                  }}
                />
                AI Development Company
              </div>

              <h1
                className="hero-h1"
                style={{
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  color: "#1a1a2e",
                  marginBottom: "16px",
                }}
              >
                We Don't Just Build AI.
                <br />
                <GradientText>We Build AI That Works for You.</GradientText>
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  color: "#6b7280",
                  maxWidth: "680px",
                  margin: "0 auto 36px",
                  lineHeight: 1.7,
                }}
              >
                From custom LLM integrations to full-stack AI platforms — we
                engineer intelligent systems that automate, predict, and scale
                without limits.
              </p>

              {/* Stats bar */}
              <div
                className="hero-stats-bar"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0",
                  marginBottom: "36px",
                  flexWrap: "wrap",
                }}
              >
                {heroStats.map((stat, i) => (
                  <div
                    key={stat.id}
                    style={{
                      padding: "14px 32px",
                      borderRight:
                        i < heroStats.length - 1 ? "1px solid #e5e7eb" : "none",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "20px",
                        background: accentGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.label.split(" ")[0]}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#6b7280",
                        marginTop: "2px",
                      }}
                    >
                      {stat.label.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div
                className="hero-cta-row"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px 32px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#ffffff",
                    background: accentGradient,
                    boxShadow:
                      "0 4px 24px rgba(79,142,247,0.32), 0 8px 40px rgba(124,92,191,0.12)",
                    textDecoration: "none",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(0)";
                  }}
                  data-ocid="hero.primary_button"
                >
                  Book Free Consultation
                </Link>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: "hire-ai-developers" }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px 32px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#1a1a2e",
                    background: "#ffffff",
                    border: "1.5px solid #d1d5db",
                    textDecoration: "none",
                    transition: "transform 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(-2px)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#4f8ef7";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#d1d5db";
                  }}
                  data-ocid="hero.secondary_button"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Bottom divider */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, #4f8ef7 25%, #7c5cbf 50%, #06b6d4 75%, transparent)",
              }}
            />
          </section>

          {/* ── INDUSTRIES ───────────────────────────────────── */}
          <section
            className="section-padding"
            style={{ background: "#f0f4ff" }}
            data-ocid="industries.section"
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "56px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#4f8ef7",
                    marginBottom: "12px",
                  }}
                >
                  Sectors We Empower
                </p>
                <h2
                  className="section-h2"
                  style={{
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#1a1a2e",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  Industries We <GradientText>Empower with AI</GradientText>
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#6b7280",
                    maxWidth: "680px",
                    margin: "0 auto",
                    lineHeight: 1.7,
                  }}
                >
                  Our AI development expertise spans a wide range of sectors. We
                  understand the unique regulatory, operational, and user
                  experience challenges of each industry — and we build
                  solutions that deliver measurable ROI from day one.
                </p>
              </div>

              <div className="grid-4-col">
                {industryList.map((ind, i) => (
                  <div
                    key={ind.id}
                    className="ind-card"
                    data-ocid={`industries.item.${i + 1}`}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        background:
                          "linear-gradient(135deg, rgba(79,142,247,0.12), rgba(124,92,191,0.1))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                      }}
                    >
                      <ind.icon size={24} style={{ color: "#4f8ef7" }} />
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#1a1a2e",
                        marginBottom: "10px",
                      }}
                    >
                      {ind.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {ind.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── WHY CHOOSE US ────────────────────────────────── */}
          <section
            className="section-padding"
            style={{ background: "#ffffff" }}
            data-ocid="why-choose-us.section"
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "56px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#7c5cbf",
                    marginBottom: "12px",
                  }}
                >
                  Our Advantage
                </p>
                <h2
                  className="section-h2"
                  style={{
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#1a1a2e",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  Why Choose Us as Your{" "}
                  <GradientText>AI Development Company?</GradientText>
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#6b7280",
                    maxWidth: "620px",
                    margin: "0 auto",
                    lineHeight: 1.7,
                  }}
                >
                  We are not just developers — we are your strategic AI
                  partners. Here is what sets us apart from generic software
                  agencies:
                </p>
              </div>

              <div className="grid-3-col">
                {whyCards.map((card, i) => (
                  <div
                    key={card.id}
                    className="why-card"
                    data-ocid={`why.card.${i + 1}`}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: accentGradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: "14px",
                        }}
                      >
                        {card.num}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#1a1a2e",
                        marginBottom: "10px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PROCESS ──────────────────────────────────────── */}
          <section
            className="section-padding"
            style={{ background: "#f0f4ff" }}
            data-ocid="process.section"
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "56px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#06b6d4",
                    marginBottom: "12px",
                  }}
                >
                  How We Work
                </p>
                <h2
                  className="section-h2"
                  style={{
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#1a1a2e",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  Our AI <GradientText>Development Process</GradientText>
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#6b7280",
                    maxWidth: "620px",
                    margin: "0 auto",
                    lineHeight: 1.7,
                  }}
                >
                  We follow a proven, structured methodology that turns your AI
                  vision into a reliable, scalable product — minimizing risk and
                  maximizing business value at every stage.
                </p>
              </div>

              {/* Desktop zigzag */}
              <div
                className="process-zigzag"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                }}
              >
                {processSteps.map((step, i) => {
                  const isRight = i % 2 === 1;
                  return (
                    <div
                      key={step.id}
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "16px",
                        padding: "28px 28px 28px 28px",
                        boxShadow: "0 4px 16px rgba(79,142,247,0.06)",
                        display: "flex",
                        gap: "20px",
                        alignItems: "flex-start",
                        ...(isRight
                          ? { marginTop: "32px" }
                          : { marginBottom: "0" }),
                      }}
                      data-ocid={`process.step.${i + 1}`}
                    >
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "50%",
                          background: accentGradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 4px 16px rgba(79,142,247,0.28)",
                        }}
                      >
                        <span
                          style={{
                            color: "#ffffff",
                            fontWeight: 800,
                            fontSize: "15px",
                          }}
                        >
                          {step.num}
                        </span>
                      </div>
                      <div>
                        <h3
                          style={{
                            fontWeight: 700,
                            fontSize: "16px",
                            color: "#1a1a2e",
                            marginBottom: "8px",
                          }}
                        >
                          {step.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#6b7280",
                            lineHeight: 1.65,
                            margin: 0,
                          }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile stacked */}
              <div
                className="process-mobile"
                style={{
                  flexDirection: "column",
                  gap: "16px",
                  display: "none",
                }}
              >
                {processSteps.map((step, i) => (
                  <div
                    key={step.id}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "20px",
                      boxShadow: "0 2px 10px rgba(79,142,247,0.05)",
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                    data-ocid={`process.step.mobile.${i + 1}`}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: accentGradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 12px rgba(79,142,247,0.24)",
                      }}
                    >
                      <span
                        style={{
                          color: "#ffffff",
                          fontWeight: 800,
                          fontSize: "13px",
                        }}
                      >
                        {step.num}
                      </span>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#1a1a2e",
                          marginBottom: "6px",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#6b7280",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── TECHNOLOGIES ─────────────────────────────────── */}
          <section
            className="section-padding"
            style={{ background: "#ffffff" }}
            data-ocid="technologies.section"
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "56px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#4f8ef7",
                    marginBottom: "12px",
                  }}
                >
                  Our Tech Stack
                </p>
                <h2
                  className="section-h2"
                  style={{
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#1a1a2e",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  Technologies & <GradientText>Frameworks We Use</GradientText>
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#6b7280",
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: 1.7,
                  }}
                >
                  We leverage the most powerful and proven AI/ML tools and
                  platforms to build scalable, production-ready solutions for
                  our clients.
                </p>
              </div>

              <div className="grid-2-col">
                {techCategories.map((cat, i) => (
                  <div
                    key={cat.id}
                    className="tech-card"
                    data-ocid={`tech.card.${i + 1}`}
                  >
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#1a1a2e",
                        marginBottom: "12px",
                      }}
                    >
                      {cat.title}
                    </h3>
                    <div>
                      {cat.tools.split(", ").map((tool) => (
                        <span key={tool} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────── */}
          <section
            className="section-padding"
            style={{ background: "#f0f4ff" }}
            data-ocid="faq.section"
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                className="faq-split"
                style={{
                  display: "flex",
                  gap: "64px",
                  alignItems: "flex-start",
                }}
              >
                {/* Left side */}
                <div style={{ flex: "0 0 360px", minWidth: "260px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#4f8ef7",
                      marginBottom: "12px",
                    }}
                  >
                    Got Questions?
                  </p>
                  <h2
                    className="section-h2"
                    style={{
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "#1a1a2e",
                      marginBottom: "16px",
                      lineHeight: 1.2,
                    }}
                  >
                    Frequently Asked{" "}
                    <GradientText>Questions (FAQ)</GradientText>
                  </h2>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#6b7280",
                      lineHeight: 1.7,
                      marginBottom: "32px",
                    }}
                  >
                    These are the most common questions businesses ask when
                    exploring AI development services. Answering them here helps
                    you make a confident, informed decision.
                  </p>
                  {/* Decorative element */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "16px",
                      padding: "24px",
                      boxShadow: "0 4px 16px rgba(79,142,247,0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: accentGradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "14px",
                      }}
                    >
                      <Building2 size={22} style={{ color: "#ffffff" }} />
                    </div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#1a1a2e",
                        marginBottom: "8px",
                      }}
                    >
                      Still have questions?
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#6b7280",
                        marginBottom: "16px",
                        lineHeight: 1.6,
                      }}
                    >
                      Our AI experts are ready to answer any specific questions
                      about your project.
                    </p>
                    <Link
                      to="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "#ffffff",
                        background: accentGradient,
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                      data-ocid="faq.contact_button"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Right side — accordion */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {faqItems.map((item, i) => (
                      <FAQItem
                        key={item.id}
                        item={item}
                        ocid={`faq.item.${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA BANNER ───────────────────────────────────── */}
          <section
            style={{
              position: "relative",
              padding: "80px 24px",
              overflow: "hidden",
              background:
                "linear-gradient(135deg, #1e40af 0%, #7c3aed 55%, #0891b2 100%)",
            }}
            data-ocid="cta.section"
          >
            {/* Grid overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                pointerEvents: "none",
              }}
            />
            {/* Glow blobs */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                left: "-60px",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-60px",
                right: "-60px",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "40px",
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  marginBottom: "16px",
                  lineHeight: 1.15,
                }}
              >
                Ready to Build Your AI Solution?
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: "560px",
                  margin: "0 auto 32px",
                  lineHeight: 1.7,
                }}
              >
                Talk to our AI experts today and get a free consultation
                tailored to your business goals.
              </p>

              {/* Contact info row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "24px",
                  marginBottom: "32px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="mailto:info@tech2globe.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "rgba(255,255,255,0.9)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  data-ocid="cta.email_link"
                >
                  <Mail size={16} />
                  info@tech2globe.com
                </a>
                <a
                  href="tel:+15168585840"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "rgba(255,255,255,0.9)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  data-ocid="cta.phone_link"
                >
                  <Phone size={16} />
                  +1-516-858-5840
                </a>
                <a
                  href="https://www.tech2globe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "rgba(255,255,255,0.9)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  data-ocid="cta.website_link"
                >
                  <Globe size={16} />
                  www.tech2globe.com
                </a>
              </div>

              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "16px 40px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#1e40af",
                  background: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 32px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 4px 24px rgba(0,0,0,0.2)";
                }}
                data-ocid="cta.primary_button"
              >
                Book Free Consultation
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
