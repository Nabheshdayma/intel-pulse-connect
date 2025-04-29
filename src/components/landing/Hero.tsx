
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-secondary/90 to-secondary flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-ai-grid mix-blend-overlay pointer-events-none"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Defining AI Driven GxP Manufacturing
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Streamline Your GxP Processes Using AI
            </h1>
            
            <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-8">
              From predictive analytics to automated software validation, xLM's AI solutions intelligently simplify and amplify your operations
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-secondary hover:bg-white/90 rounded-full px-8 font-medium"
                asChild
              >
                <Link to="/services">
                  Discover Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 rounded-full"
                asChild
              >
                <Link to="/contact">
                  Request a Demo
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full h-full flex items-center justify-center overflow-visible">
              <img 
                src="/lovable-uploads/ff834875-c819-46c4-a414-081c14e3897c.png" 
                alt="Friendly Robot" 
                className="w-[90%] lg:w-[110%] z-10 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Paper Kit style bottom indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="h-16 w-px bg-white/30 mb-2"></div>
        <div className="text-white/70 text-sm">Scroll Down</div>
      </div>
    </section>
  );
};

export default Hero;
