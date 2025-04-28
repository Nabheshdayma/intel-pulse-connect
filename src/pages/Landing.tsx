
import Layout from "@/components/layout/Layout";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Process from "@/components/landing/Process";
import AIFeatures from "@/components/landing/AIFeatures";
import BlogSection from "@/components/landing/BlogSection";
import FAQ from "@/components/landing/FAQ";
import CallToAction from "@/components/landing/CallToAction";

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <AIFeatures />
      <Services />
      <Process />
      <About />
      <BlogSection />
      <FAQ />
      <CallToAction />
      <Contact />
    </Layout>
  );
};

export default Landing;
