
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80"></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-ai-grid mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
            Ready to intelligently transform your business?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Our AI-powered solutions are designed to streamline your GxP processes,
            reduce costs, and improve compliance across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="rounded-full bg-white text-secondary hover:bg-white/90 font-medium px-8"
            >
              <Link to="/contact">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="rounded-full border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
