
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
    <section ref={sectionRef} className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-ai-grid opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-accent text-secondary font-bold px-6 py-2 rounded-full text-sm uppercase shadow-lg">
              AI Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our AI Solutions</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage cutting-edge AI technologies to transform your manufacturing processes
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureCard 
            isVisible={isVisible}
            delay={0}
            icon={<Brain className="h-10 w-10 text-white" />}
            title="Accelerate Software Validation with AI Automation"
            description="cIV service automates URS creation, generates intelligent test cases, and executes tests with unmatched precision without human intervention. It delivers GxP-ready URS, test scripts, and executed protocols in minutes."
            gradient="from-blue-600 to-primary"
          />
          
          <FeatureCard 
            isVisible={isVisible}
            delay={200}
            icon={<Zap className="h-10 w-10 text-white" />}
            title="Revolutionize Environmental Monitoring with Continuous Temperature Mapping"
            description="cTM & cEMS automates GxP-compliant reporting, alerts, and data access, delivering regulatory-ready documentation and actionable insights in minutes."
            gradient="from-accent to-secondary"
          />
          
          <FeatureCard 
            isVisible={isVisible}
            delay={400}
            icon={<Cpu className="h-10 w-10 text-white" />}
            title="Empowering Manufacturing with AI powered maintenance solution"
            description="cPDM combines dynamic visualization, condition monitoring, and advanced AI techniques to prevent equipment failures and streamline maintenance schedules."
            gradient="from-primary to-blue-400"
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
  gradient: string;
}

const FeatureCard = ({ icon, title, description, isVisible, delay, gradient }: FeatureCardProps) => {
  return (
    <Card className={`border-none shadow-xl rounded-xl hover-scale transition-all duration-700 overflow-hidden
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`bg-gradient-to-br ${gradient} text-white p-8 rounded-t-xl`}>
        <div className="mb-6 bg-white/20 p-4 inline-block rounded-full backdrop-blur-sm">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      </div>
      <CardContent className="p-6 bg-white shadow-inner border-t border-gray-100">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AIFeatures;
