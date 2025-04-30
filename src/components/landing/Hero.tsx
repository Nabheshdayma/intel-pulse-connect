
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-secondary to-secondary/70 text-white pt-16">
      <div className="absolute inset-0 bg-ai-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-lg text-primary mb-4 font-medium">
                Defining AI Driven GxP Manufacturing
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Streamline Your GxP Processes Using AI
              </h1>
              <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
                From predictive analytics to automated software validation, xLM's AI solutions intelligently simplify and amplify your operations
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
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
          
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
              alt="AI Robot"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
