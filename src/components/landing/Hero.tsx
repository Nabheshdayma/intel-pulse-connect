
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-purple/10 to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-magenta to-brand-purple animated-gradient" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Next-Gen Customer Intelligence Platform
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Elevate Your <span className="text-gradient">Business Decisions</span> with AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Continuous Intelligence delivers real-time insights and predictive analytics to transform your data into strategic business advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="group">
                <Link to="/login">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">
                  Explore Services
                </a>
              </Button>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-up animation-delay-300' : 'opacity-0'} flex justify-center`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-magenta rounded-2xl blur opacity-30 animate-pulse-slow"></div>
              <div className="relative bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1740&q=80"
                  alt="AI Analytics Dashboard"
                  className="w-full h-full object-cover rounded-xl"
                  width={500}
                  height={380}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
          <StatItem value="98%" label="Customer Satisfaction" />
          <StatItem value="$2.4M" label="Average ROI" />
          <StatItem value="15x" label="Faster Insights" />
          <StatItem value="1000+" label="Global Clients" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center hover-lift">
    <div className="text-3xl font-bold text-gradient">{value}</div>
    <div className="text-sm text-muted-foreground mt-1">{label}</div>
  </div>
);

export default Hero;
