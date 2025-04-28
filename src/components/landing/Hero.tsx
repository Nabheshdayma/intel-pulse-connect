
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#1A1F2C] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
              <Brain className="w-4 h-4 text-brand-purple" />
              <span className="text-sm text-brand-purple">AI Driven GxP Manufacturing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Keep a good thing{" "}
              <span className="text-gradient bg-gradient-to-r from-brand-purple via-brand-neon to-brand-magenta">
                growing
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              From predictive analytics to automated software validation, our AI solutions intelligently simplify and amplify your GxP operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-purple hover:bg-brand-purple/90 text-white"
                asChild
              >
                <Link to="/contact">Book my demo</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-white/5"
                asChild
              >
                <Link to="/services">Start now</Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:flex hidden justify-end">
            <div className="w-full max-w-lg">
              <img
                src="/lovable-uploads/b5772adf-02fc-4a04-a5ce-7a8aa38ffcc9.png"
                alt="Dashboard Preview"
                className="w-full h-auto rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-800">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {['Time', 'Sprout Social', 'Fish & Fun', 'Paramount+', 'Kahoot!', 'Sling'].map((brand) => (
              <div key={brand} className="text-center text-gray-400 text-sm font-medium">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
