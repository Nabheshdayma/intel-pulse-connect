
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/b3a0eef4-b3c2-4b08-bcbf-1da21a681141.png" 
                alt="XLM Logo" 
                className="h-10"
              />
              <span className="ml-2 font-bold text-xl text-blue-600">xLM</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/success-stories">Success Stories</NavLink>
            <NavLink href="/partners">Partners</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/trust-center">Trust Center</NavLink>
            <NavLink href="/our-blogs">Our Blogs</NavLink>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full">
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
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/success-stories">Success Stories</MobileNavLink>
            <MobileNavLink href="/partners">Partners</MobileNavLink>
            <MobileNavLink href="/events">Events</MobileNavLink>
            <MobileNavLink href="/trust-center">Trust Center</MobileNavLink>
            <MobileNavLink href="/our-blogs">Our Blogs</MobileNavLink>
            <MobileNavLink href="/continuous-tv">ContinuousTV</MobileNavLink>
            <div className="px-3 py-2">
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-full">
                Contact Us
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
    className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600"
  >
    {children}
  </a>
);

export default NavBar;
