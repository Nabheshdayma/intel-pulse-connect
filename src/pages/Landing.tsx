
import Layout from "@/components/layout/Layout";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Contact />
    </Layout>
  );
};

export default Landing;
