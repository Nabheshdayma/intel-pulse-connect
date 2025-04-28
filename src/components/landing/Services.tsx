
import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Intelligent Solutions for Modern Businesses
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our AI-powered platform provides comprehensive insights and tools to help your business thrive in the digital age.
          </p>
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
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {Array(3).fill(0).map((_, i) => (
            <li key={i} className="flex items-center text-sm">
              <span className="mr-2 text-primary">✓</span>
              <span className="text-muted-foreground">Feature {i + 1}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const services = [
  {
    icon: "🔍",
    title: "AI Analytics",
    description: "Advanced analytics powered by artificial intelligence to uncover hidden insights in your data."
  },
  {
    icon: "🤖",
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that adapts to your business needs."
  },
  {
    icon: "📊",
    title: "Predictive Intelligence",
    description: "Forecast market trends and customer behavior with our predictive modeling."
  },
  {
    icon: "🛡️",
    title: "Security Intelligence",
    description: "Proactively identify and mitigate security risks with AI-powered threat detection."
  },
  {
    icon: "💬",
    title: "Customer Experience AI",
    description: "Enhance customer satisfaction with personalized experiences and intelligent support."
  },
  {
    icon: "🚀",
    title: "Decision Acceleration",
    description: "Rapid data processing for faster, more informed business decisions."
  }
];

export default Services;
