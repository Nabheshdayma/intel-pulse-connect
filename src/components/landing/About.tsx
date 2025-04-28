
import { useRef, useState, useEffect } from "react";

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              Transforming Data into Actionable Insights Since 2015
            </h2>
            <p className="mt-6 text-muted-foreground">
              Continuous Intelligence was founded with a mission to help businesses harness the power of their data through cutting-edge AI solutions. What started as a team of five data scientists has grown into a global organization serving clients across industries.
            </p>

            <div className="mt-8 space-y-4">
              {aboutFeatures.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`flex items-start gap-4 transition-all duration-700`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mt-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Data visualization"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="AI technology"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mt-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Digital transformation" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const aboutFeatures = [
  {
    icon: "🌟",
    title: "Customer-Focused Approach",
    description: "We prioritize understanding your unique business challenges to deliver tailored solutions."
  },
  {
    icon: "🔬",
    title: "Research-Driven Innovation",
    description: "Our dedicated research team ensures we're at the forefront of AI and analytics advancements."
  },
  {
    icon: "🔄",
    title: "Continuous Improvement",
    description: "Our solutions evolve with your business, adapting to changing market conditions and requirements."
  },
  {
    icon: "🤝",
    title: "Collaborative Partnership",
    description: "We work alongside your team to ensure successful implementation and knowledge transfer."
  }
];

export default About;
