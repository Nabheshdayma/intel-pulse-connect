
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveDiagonal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-secondary/80 to-secondary overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-ai-grid mix-blend-overlay pointer-events-none"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/lovable-uploads/fe312032-54f9-497a-bf73-32ea94f61ee3.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                Defining AI Driven GxP Manufacturing
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Streamline Your GxP Processes Using AI
              </h1>
              
              <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
                From predictive analytics to automated software validation, xLM's AI solutions intelligently simplify and amplify your operations
              </p>
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-medium"
                >
                  Discover Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 rounded-full"
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse-slow"></div>
              <div className="w-full h-full flex items-center justify-center relative">
                <img 
                  src="/lovable-uploads/ff834875-c819-46c4-a414-081c14e3897c.png" 
                  alt="Friendly Robot" 
                  className="w-72 z-10 animate-float"
                />
                <div className="absolute -right-3 top-1/4 animate-wave-arm">
                  <div className="w-10 h-10 rounded-full bg-primary/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Paper Kit style bottom indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="h-16 w-px bg-white/30 mb-2"></div>
          <div className="text-white/70 text-sm">Scroll Down</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
