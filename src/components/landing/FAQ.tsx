
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>("cIV");

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Questions, Answered</h2>
        </div>

        <Accordion type="single" collapsible value={expanded as string} onValueChange={(val) => setExpanded(val)}>
          <AccordionItem value="cIV">
            <AccordionTrigger className="text-xl font-semibold">
              Continuous Intelligent Validation (cIV)
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4 text-base">
              <p>
                The definition: "Continuous validation is providing documented evidence to certify that an app not only met the pre-established acceptance criteria, but "continuous" to meet thus mitigating the risk of unknown changes."
              </p>
              <p>
                Continuous validation is not just a "point in time" validation. It is a type of validation which connects various points in time (initial, patch, upgrade validation) with continuous smoke and regression testing.
              </p>
              <p>
                cIV is an AI-powered continuous validation platform that aims to revolutionize software validation by introducing autonomous agents that can generate an URS, develop test cases and execute them with very minimal human input.
              </p>
              <div className="mt-6">
                <Button variant="link" asChild className="p-0">
                  <Link to="/services/civ">Learn more about cIV</Link>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="cSM">
            <AccordionTrigger className="text-xl font-semibold">
              Continuous Service Management (cSM)
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4 text-base">
              <p>
                ContinuousSM is a comprehensive, AI-powered service management solution designed to help life sciences companies streamline processes, improve efficiency, and maintain GxP compliance.
              </p>
              <p>
                ContinuousSM provides a centralized platform for capturing, tracking, and managing requests from various channels. It allows for automated workflows with approvals, customizable queues, and insightful performance reports.
              </p>
              <div className="mt-6">
                <Button variant="link" asChild className="p-0">
                  <Link to="/services/csm">Learn more about cSM</Link>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="cPdM">
            <AccordionTrigger className="text-xl font-semibold">
              Continuous Predictive Maintenance (cPdM)
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4 text-base">
              <p>
                ContinuousPdM represents a groundbreaking advancement in predictive maintenance technology, seamlessly combining sophisticated data analytics, machine learning algorithms, and real-time monitoring capabilities.
              </p>
              <p>
                Through industrial sensors, secure cloud infrastructure, and GxP-compliant dashboards, organizations can significantly reduce unplanned downtime while maximizing asset utilization and enhancing overall operational productivity.
              </p>
              <div className="mt-6">
                <Button variant="link" asChild className="p-0">
                  <Link to="/services/cpdm">Learn more about cPdM</Link>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="cTM">
            <AccordionTrigger className="text-xl font-semibold">
              Continuous Temperature Mapping (cTM)
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4 text-base">
              <p>
                cTM is a service designed for the MedTech, Biotech, and Pharma sectors that offers continuous temperature mapping through automation, data handling, and machine learning.
              </p>
              <p>
                cTM provides three types of dashboards: Temporary Sensors Dashboard, Fixed Sensors Dashboard, and Sensor Mapping Dashboard, each serving specific purposes for comprehensive monitoring and analysis.
              </p>
              <div className="mt-6">
                <Button variant="link" asChild className="p-0">
                  <Link to="/services/ctm">Learn more about cTM</Link>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-8 text-center">
          <Button asChild>
            <Link to="/faq">View All FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
