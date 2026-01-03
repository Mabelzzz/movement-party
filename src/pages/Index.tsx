import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { PolicySection } from "@/components/PolicySection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PolicySection />
      <CTASection />
    </Layout>
  );
};

export default Index;
