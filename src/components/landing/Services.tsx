
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
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
    <section id="services" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary">
            AI-powered GxP Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Our Services
          </h2>
          <div className="mt-4 flex justify-center gap-4">
            <Link to="/services" className="text-sm font-medium text-primary hover:underline">view all</Link>
            <Link to="/contact" className="text-sm font-medium text-primary hover:underline">get in touch</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const ServiceCard = ({ icon, title, description, isVisible, delay }: ServiceCardProps) => {
  return (
    <Card 
      className={`overflow-hidden transition-all duration-700 hover-scale 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
          <span className="text-2xl">{icon}</span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="link" asChild className="pl-0 group">
          <Link to="/services">
            Learn More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const services = [
  {
    icon: "🧪",
    title: "Continuous Intelligent Validation (cIV)",
    description: "cIV simplifies and automates GxP-compliant software validation with cutting-edge AI."
  },
  {
    icon: "🌡️",
    title: "Continuous Temperature Mapping (cTM)",
    description: "cTM monitors and analyzes environmental parameters in real-time - an innovative AI/ML powered app."
  },
  {
    icon: "⚙️",
    title: "Continuous Predictive Maintenance (cPdM)",
    description: "cPdM transforms preventive maintenance with AI/ML driven Predictive Maintenance."
  },
  {
    icon: "🔍",
    title: "Continuous Environmental Monitoring System (cEMS)",
    description: "Continuous Environmental Monitoring System is an innovative platform set to transform environmental data analysis."
  },
  {
    icon: "📊",
    title: "Continuous Application Lifecycle Management (cALM)",
    description: "cALM is an innovative platform transforming software validation, qualification, and application lifecycle management for life sciences."
  },
  {
    icon: "📄",
    title: "Continuous Document Management (cDM)",
    description: "Equipped with cutting-edge AI technology, cDM is a premier Document Management solution tailored for life sciences organizations."
  }
];

export default Services;
