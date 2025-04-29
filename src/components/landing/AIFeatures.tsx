
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">AI-Powered Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our intelligent solutions combine advanced AI with deep industry expertise to transform how you approach GxP compliance and operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureCard 
            isVisible={isVisible}
            delay={0}
            icon={<Brain className="h-12 w-12 text-primary" />}
            title="Accelerate Software Validation with AI Automation"
            description="cIV service automates URS creation, generates intelligent test cases, and executes tests with unmatched precision without human intervention."
            link="/services/civ"
          />
          
          <FeatureCard 
            isVisible={isVisible}
            delay={200}
            icon={<Zap className="h-12 w-12 text-primary" />}
            title="Revolutionize Environmental Monitoring"
            description="cTM & cEMS automates GxP-compliant reporting, alerts, and data access, delivering regulatory-ready documentation and actionable insights in minutes."
            link="/services/ctm"
          />
          
          <FeatureCard 
            isVisible={isVisible}
            delay={400}
            icon={<Cpu className="h-12 w-12 text-primary" />}
            title="AI-Powered Predictive Maintenance"
            description="cPDM combines dynamic visualization, condition monitoring, and advanced AI techniques to prevent equipment failures and streamline maintenance schedules."
            link="/services/cpdm"
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
  link: string;
}

const FeatureCard = ({ icon, title, description, isVisible, delay, link }: FeatureCardProps) => {
  return (
    <Card 
      className={`transition-all duration-700 border-0 rounded-lg shadow-lg hover:shadow-xl 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 bg-primary/10 p-4 rounded-full">{icon}</div>
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          <Button variant="ghost" className="group" asChild>
            <Link to={link}>
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIFeatures;
