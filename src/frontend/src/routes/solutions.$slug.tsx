import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import BenefitsSection from "@/components/solutions/BenefitsSection";
import CTABanner from "@/components/solutions/CTABanner";
import { CaseStudiesSection } from "@/components/solutions/CaseStudiesSection";
import ContactSection from "@/components/solutions/ContactSection";
import FAQSection from "@/components/solutions/FAQSection";
import { FAQSplit } from "@/components/solutions/FAQSplit";
import FeaturesSection from "@/components/solutions/FeaturesSection";
import HeroSection from "@/components/solutions/HeroSection";
import { IndustriesHex } from "@/components/solutions/IndustriesHex";
import IndustriesSection from "@/components/solutions/IndustriesSection";
import { PremiumCTABanner } from "@/components/solutions/PremiumCTABanner";
import { PremiumProcessTimeline } from "@/components/solutions/PremiumProcessTimeline";
import ProblemSection from "@/components/solutions/ProblemSection";
import ProcessSection from "@/components/solutions/ProcessSection";
import { ServicesGrid } from "@/components/solutions/ServicesGrid";
import { SocialProofStrip } from "@/components/solutions/SocialProofStrip";
import { TechStack } from "@/components/solutions/TechStack";
import TestimonialsSection from "@/components/solutions/TestimonialsSection";
import { TestimonialsV2 } from "@/components/solutions/TestimonialsV2";
import { WhyChooseUs } from "@/components/solutions/WhyChooseUs";
import { getPremiumSolutionData, getSolutionData } from "@/data/solutions";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Search } from "lucide-react";

export const Route = createFileRoute("/solutions/$slug")({
  component: SolutionPage,
});

function NotFound({ slug }: { slug: string }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
        position: "relative",
        background: "#ffffff",
      }}
      data-ocid="not-found.section"
    >
      {/* Background accents */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "33%",
            left: "25%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            opacity: 0.06,
            filter: "blur(60px)",
            background: "radial-gradient(circle, #4f8ef7 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "33%",
            right: "25%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            opacity: 0.06,
            filter: "blur(60px)",
            background: "radial-gradient(circle, #7c5cbf 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "512px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 32px",
            background: "rgba(79,142,247,0.08)",
            border: "1px solid rgba(79,142,247,0.2)",
          }}
        >
          <Search size={36} style={{ color: "#4f8ef7" }} />
        </div>

        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: "16px",
          }}
        >
          Solution Not Found
        </h1>
        <p
          style={{ color: "#6b7280", fontSize: "1.1rem", marginBottom: "8px" }}
        >
          We couldn't find a solution page for:
        </p>
        <code
          style={{
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontFamily: "monospace",
            marginBottom: "32px",
            background: "rgba(79,142,247,0.08)",
            border: "1px solid rgba(79,142,247,0.2)",
            color: "#4f8ef7",
          }}
        >
          /solutions/{slug}
        </code>
        <p style={{ color: "#6b7280", marginBottom: "40px" }}>
          This solution may not exist yet or the URL may be incorrect. Explore
          our available solutions below.
        </p>

        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "14px 28px",
            borderRadius: "12px",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#ffffff",
            background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
          }}
          data-ocid="not-found.cta"
        >
          <ArrowLeft size={16} />
          Back to Solutions
        </Link>
      </div>
    </div>
  );
}

function SolutionPage() {
  const { slug } = Route.useParams();
  const premiumData = getPremiumSolutionData(slug);

  if (premiumData) {
    return (
      <div
        style={{ background: "#ffffff", minHeight: "100vh" }}
        data-ocid="solution.page"
      >
        <Nav />
        <main style={{ paddingTop: "64px", background: "#ffffff" }}>
          <HeroSection data={premiumData} />
          <SocialProofStrip logos={premiumData.socialProofLogos} />
          <ServicesGrid services={premiumData.serviceCards} />
          <WhyChooseUs benefits={premiumData.numberedBenefits} stats={[]} />

          <PremiumProcessTimeline
            heading={premiumData.premiumProcessHeading}
            subheading={premiumData.premiumProcessSubheading}
            steps={premiumData.premiumProcessSteps}
            ctaText={premiumData.premiumProcessCTA}
          />
          <TechStack
            heading={premiumData.techStackHeading}
            subheading={premiumData.techStackSubheading}
            techTabs={premiumData.techTabs}
          />
          <CaseStudiesSection
            caseStudies={premiumData.caseStudies.map((cs) => ({
              projectName: cs.projectName,
              industry: cs.industry,
              description: cs.description,
              metrics: cs.metrics as [string, string, string],
              accentGradient: `linear-gradient(90deg, ${cs.accentColor}, #7c5cbf)`,
              link: "#",
            }))}
          />
          <TestimonialsV2
            featuredTestimonials={[
              {
                ...premiumData.featuredTestimonial,
                avatarColor: premiumData.featuredTestimonial.color,
              },
            ]}
            stackedTestimonials={premiumData.stackedTestimonials.map((t) => ({
              ...t,
              avatarColor: t.color,
            }))}
            title={premiumData.testimonialsV2Heading}
          />
          <IndustriesHex
            industries={premiumData.industryTiles.map((t) => ({
              name: t.label,
              tooltip: t.tooltip,
              icon: t.icon,
              iconColor: t.color,
            }))}
          />
          <FAQSplit
            faqs={premiumData.faqItems}
            heading={premiumData.faqSplitHeading}
            subheading={premiumData.faqSplitSubheading}
          />
          <PremiumCTABanner
            heading={premiumData.finalCTA.heading}
            subtext={premiumData.finalCTA.subtext}
            trustItems={premiumData.finalCTA.trustItems}
            primaryLabel={premiumData.finalCTA.primaryLabel}
            secondaryLabel={premiumData.finalCTA.secondaryLabel}
          />
          <ContactSection />
        </main>
        <Footer />
      </div>
    );
  }

  const data = getSolutionData(slug);

  if (!data) {
    return (
      <div style={{ background: "#ffffff", minHeight: "100vh" }}>
        <Nav />
        <main style={{ paddingTop: "64px" }}>
          <NotFound slug={slug} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Nav />
      <main style={{ paddingTop: "64px", background: "#ffffff" }}>
        <HeroSection data={data} />
        <ProblemSection data={data} />
        <FeaturesSection data={data} />
        <ProcessSection data={data} />
        <BenefitsSection data={data} />
        <IndustriesSection data={data} />
        <TestimonialsSection data={data} />
        <FAQSection data={data} />
        <CTABanner data={data} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
