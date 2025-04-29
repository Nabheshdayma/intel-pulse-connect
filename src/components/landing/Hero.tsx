
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="w-64 h-64 flex items-center justify-center relative">
                <img 
                  src="/lovable-uploads/ff834875-c819-46c4-a414-081c14e3897c.png" 
                  alt="Friendly Robot" 
                  className="w-48 z-10"
                />
                <div className="absolute -right-3 top-1/4 animate-wave-arm">
                  <div className="w-10 h-10 rounded-full bg-secondary/5"></div>
                </div>
              </div>
              <div className="absolute w-full h-full rounded-full border-4 border-dashed border-secondary/30 animate-spin-slow"></div>
            </div>
          </div>
          
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-lg text-secondary mb-4">
                Defining AI Driven GxP Manufacturing
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6">
                Streamline Your GxP Processes Using AI
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                From predictive analytics to automated software validation, xLM's AI solutions intelligently simplify and amplify your operations
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8"
              >
                Discover Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/5"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
