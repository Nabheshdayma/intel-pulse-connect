
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/082497ec-3b35-40db-8587-7146fdcbb988.png"
              alt="Gear Icon"
              className="w-64 h-64 object-contain animate-spin-slow"
            />
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

