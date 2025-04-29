
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold text-gradient">
              Continuous Intelligence
            </Link>
            <p className="text-muted-foreground text-sm">
              Defining AI driven GxP Manufacturing
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" label="Twitter" />
              <SocialIcon href="#" label="LinkedIn" />
              <SocialIcon href="#" label="Facebook" />
              <SocialIcon href="#" label="Instagram" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/success-stories">Success Stories</FooterLink>
              <FooterLink href="/partners">Partners</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/trust-center">Trust Center</FooterLink>
              <FooterLink href="/blog">Our Blogs</FooterLink>
              <FooterLink href="/tv">ContinuousTV</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/civ">Continuous Intelligent Validation (cIV)</FooterLink>
              <FooterLink href="/services/ctm">Continuous Temperature Mapping (cTM)</FooterLink>
              <FooterLink href="/services/cpdm">Continuous Predictive Maintenance (cPdM)</FooterLink>
              <FooterLink href="/services/cems">Continuous Environmental Monitoring System (cEMS)</FooterLink>
              <FooterLink href="/services/calm">Continuous Application Lifecycle Management (cALM)</FooterLink>
              <FooterLink href="/services">View all services</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Please enter your email address" 
                className="w-full px-4 py-2 rounded-md bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md w-full hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Continuous Intelligence. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
    >
      {children}
    </a>
  </li>
);

const SocialIcon = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
    aria-label={label}
  >
    <span className="sr-only">{label}</span>
    <div className="h-4 w-4" />
  </a>
);

export default Footer;
