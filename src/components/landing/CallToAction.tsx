
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-ai-grid opacity-20"></div>
      
      {/* Animated decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
      
      {/* Background tech patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white/30 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-6 rounded-full text-sm font-bold bg-white/20 text-white backdrop-blur-sm mb-6 shadow-lg">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Ready to intelligently transform your business?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Join the leaders in GxP manufacturing who are leveraging AI to streamline processes and boost productivity
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                asChild 
                className="bg-accent text-secondary hover:bg-yellow-500 rounded-full px-10 py-7 text-lg font-semibold shadow-lg group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                asChild 
                variant="secondary" 
                className="bg-white text-secondary border-2 border-accent hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-semibold shadow-lg"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-accent to-blue-400"></div>
    </section>
  );
};

export default CallToAction;
