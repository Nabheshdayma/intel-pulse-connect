
import { useRef, useEffect, useState } from "react";

const Process = () => {
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
          <h2 className="text-3xl sm:text-4xl font-bold">Our Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.number}
              {...step}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const ProcessCard = ({ number, title, description, isVisible, delay }: ProcessStepProps) => {
  return (
    <div 
      className={`relative transition-all duration-700 hover-lift
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-secondary/30 rounded-xl p-8 border border-border">
        <div className="absolute -top-6 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
          {number}
        </div>
        <h3 className="font-bold text-xl mt-6 mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const processSteps = [
  {
    number: "01",
    title: "Assess",
    description: "We assess your processes to upgrade them with AI enabled automation."
  },
  {
    number: "02",
    title: "Deploy",
    description: "We deploy our AI Enables Services with best practices baked in. All services are Continuous Validation enabled."
  },
  {
    number: "03",
    title: "Manage",
    description: "We ensure your apps are running with continuous governance enabled."
  }
];

export default Process;
