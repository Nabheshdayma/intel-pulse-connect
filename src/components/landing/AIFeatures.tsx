
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage cutting-edge AI technologies to transform your manufacturing processes
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureCard 
            isVisible={isVisible}
            delay={0}
            icon={<Brain className="h-10 w-10 text-primary" />}
            title="Accelerate Software Validation with AI Automation"
            description="cIV service automates URS creation, generates intelligent test cases, and executes tests with unmatched precision without human intervention. It delivers GxP-ready URS, test scripts, and executed protocols in minutes."
          />
          
          <FeatureCard 
            isVisible={isVisible}
            delay={200}
            icon={<Zap className="h-10 w-10 text-primary" />}
            title="Revolutionize Environmental Monitoring with Continuous Temperature Mapping"
            description="cTM & cEMS automates GxP-compliant reporting, alerts, and data access, delivering regulatory-ready documentation and actionable insights in minutes."
          />
          
          <FeatureCard 
            isVisible={isVisible}
            delay={400}
            icon={<Cpu className="h-10 w-10 text-primary" />}
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
    <Card className={`border border-gray-200 shadow-lg rounded-xl hover-scale transition-all duration-700
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardContent className="p-8">
        <div className="mb-6 bg-primary/10 p-4 inline-block rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold mb-4 text-secondary">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AIFeatures;
