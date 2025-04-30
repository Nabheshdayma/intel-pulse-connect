
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-ai-grid opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-400/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block py-1 px-6 rounded-full text-sm font-bold bg-white/20 text-white backdrop-blur-sm mb-6 shadow-lg">
            Get Started Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Ready to intelligently transform your business?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent text-secondary hover:bg-yellow-500 rounded-full px-10 py-7 text-lg font-semibold shadow-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" asChild variant="secondary" className="bg-white text-secondary border-2 border-accent hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-semibold shadow-lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-accent to-blue-400"></div>
    </section>
  );
};

export default CallToAction;
