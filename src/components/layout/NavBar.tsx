import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1A1F2C]/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">
                Continuous Intelligence
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              
              <div className="relative group">
                <button className="flex items-center gap-1 text-foreground/90 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                  Services <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link to="/services/civ" className="block px-4 py-2 text-sm hover:bg-accent/10">Continuous Intelligent Validation</Link>
                    <Link to="/services/ctm" className="block px-4 py-2 text-sm hover:bg-accent/10">Continuous Temperature Mapping</Link>
                    <Link to="/services/cpdm" className="block px-4 py-2 text-sm hover:bg-accent/10">Continuous Predictive Maintenance</Link>
                    <Link to="/services/cems" className="block px-4 py-2 text-sm hover:bg-accent/10">Continuous Environmental Monitoring</Link>
                    <Link to="/services/calm" className="block px-4 py-2 text-sm hover:bg-accent/10">Continuous Application Lifecycle Management</Link>
                    <Link to="/services/cdm" className="block px-4 py-2 text-sm hover:bg-accent/10">Continuous Document Management</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-brand-purple hover:bg-brand-purple/90" asChild>
              <Link to="/contact">Book my demo</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/portfolio">Portfolio</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/services/civ">- Continuous Intelligent Validation</MobileNavLink>
            <MobileNavLink href="/services/ctm">- Continuous Temperature Mapping</MobileNavLink>
            <MobileNavLink href="/services/cpdm">- Continuous Predictive Maintenance</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-5 space-x-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-foreground/90 hover:text-foreground hover:bg-accent/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent/10 transition-colors"
  >
    {children}
  </a>
);

export default NavBar;
