
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/082497ec-3b35-40db-8587-7146fdcbb988.png" 
                alt="XLM Logo" 
                className="h-10"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/success-stories">Success Stories</NavLink>
            <NavLink href="/partners">Partners</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/trust-center">Trust Center</NavLink>
            <NavLink href="/our-blogs">Our Blogs</NavLink>
            <NavLink href="/continuous-tv">ContinuousTV</NavLink>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Contact Us
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/success-stories">Success Stories</MobileNavLink>
            <MobileNavLink href="/partners">Partners</MobileNavLink>
            <MobileNavLink href="/events">Events</MobileNavLink>
            <MobileNavLink href="/trust-center">Trust Center</MobileNavLink>
            <MobileNavLink href="/our-blogs">Our Blogs</MobileNavLink>
            <MobileNavLink href="/continuous-tv">ContinuousTV</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-secondary hover:text-primary transition-colors text-sm font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary"
  >
    {children}
  </a>
);

export default NavBar;

