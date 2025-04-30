
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-ai-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Ready to intelligently transform your business?
          </h2>
          <Button size="lg" asChild className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 rounded-full px-10 py-7 text-lg font-semibold">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400"></div>
    </section>
  );
};

export default CallToAction;
