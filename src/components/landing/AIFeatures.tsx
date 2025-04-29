
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Zap } from "lucide-react";

const AIFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureCard 
            isVisible={isVisible}
            delay={0}
            icon={<Brain className="h-10 w-10 text-brand-purple" />}
            title="Accelerate Software Validation with AI Automation"
            description="cIV service automates URS creation, generates intelligent test cases, and executes tests with unmatched precision without human intervention. It delivers GxP-ready URS, test scripts, and executed protocols in minutes."
          />
          
          <FeatureCard 
            isVisible={isVisible}
            delay={200}
            icon={<Zap className="h-10 w-10 text-brand-cyan" />}
            title="Revolutionize Environmental Monitoring with Continuous Temperature Mapping"
            description="cTM & cEMS automates GxP-compliant reporting, alerts, and data access, delivering regulatory-ready documentation and actionable insights in minutes."
          />
          
          <FeatureCard 
            isVisible={isVisible}
            delay={400}
            icon={<Cpu className="h-10 w-10 text-brand-magenta" />}
            title="Empowering Manufacturing with AI powered maintenance solution"
            description="cPDM combines dynamic visualization, condition monitoring, and advanced AI techniques to prevent equipment failures and streamline maintenance schedules."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const FeatureCard = ({ icon, title, description, isVisible, delay }: FeatureCardProps) => {
  return (
    <Card className={`border border-border bg-card/50 backdrop-blur-sm hover-scale transition-all duration-700
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardContent className="p-8">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AIFeatures;
