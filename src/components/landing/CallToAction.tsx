
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to intelligently transform your business?
        </h2>
        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
