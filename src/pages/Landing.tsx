
import { useState, useEffect } from "react";
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
import ConferenceCountdown from "@/components/popups/ConferenceCountdown";
import { useToast } from "@/hooks/use-toast";

const Landing = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setShowCountdown(true);
    }, 1500);

    // Show welcome toast
    toast({
      title: "Welcome to xLM Solutions",
      description: "Explore our AI-powered GxP solutions for the manufacturing industry",
      duration: 5000,
    });

    return () => clearTimeout(timer);
  }, [toast]);

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
      
      <ConferenceCountdown 
        isOpen={showCountdown}
        onClose={() => setShowCountdown(false)}
      />
    </Layout>
  );
};

export default Landing;
