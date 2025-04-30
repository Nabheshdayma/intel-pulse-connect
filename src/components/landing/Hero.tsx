
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black text-white pt-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/lovable-uploads/b3a0eef4-b3c2-4b08-bcbf-1da21a681141.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-ai-grid opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-8 max-w-4xl">
            <div>
              <h2 className="text-xl sm:text-2xl text-yellow-400 mb-4 font-medium animate-pulse-slow">
                Defining AI Driven GxP Manufacturing
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-white">
                Streamline Your GxP Processes Using AI
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                From predictive analytics to automated software validation, xLM's AI solutions intelligently simplify and amplify your operations
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-full text-lg"
              >
                Discover Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 rounded-full px-10 py-6 text-lg"
              >
                Request a Demo
              </Button>
            </div>
          </div>
          
          <div className="mt-16 relative animate-float">
            <div className="absolute -inset-4 bg-blue-400/20 rounded-full blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
              alt="AI Robot"
              className="w-full max-w-md h-auto rounded-3xl shadow-2xl border border-blue-400/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
