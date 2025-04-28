
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
              Empowering businesses with AI-driven insights and intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" label="Twitter" />
              <SocialIcon href="#" label="LinkedIn" />
              <SocialIcon href="#" label="Facebook" />
              <SocialIcon href="#" label="Instagram" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <FooterLink href="#services">AI Analytics</FooterLink>
              <FooterLink href="#services">Process Automation</FooterLink>
              <FooterLink href="#services">Intelligent Monitoring</FooterLink>
              <FooterLink href="#services">Predictive Insights</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#team">Our Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/docs">Documentation</FooterLink>
              <FooterLink href="/support">Support Center</FooterLink>
              <FooterLink href="/status">System Status</FooterLink>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Continuous Intelligence. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/cookies">Cookies</FooterLink>
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
