
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
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
            <NavLink href="/about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="/services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink href="/success-stories" isScrolled={isScrolled}>Success Stories</NavLink>
            <NavLink href="/partners" isScrolled={isScrolled}>Partners</NavLink>
            <NavLink href="/events" isScrolled={isScrolled}>Events</NavLink>
            <NavLink href="/trust-center" isScrolled={isScrolled}>Trust Center</NavLink>
            <NavLink href="/our-blogs" isScrolled={isScrolled}>Our Blogs</NavLink>
            <NavLink href="/continuous-tv" isScrolled={isScrolled}>ContinuousTV</NavLink>
            <Button className={`rounded-full ${isScrolled ? 'bg-primary text-white' : 'bg-white text-secondary'} hover:bg-opacity-90`}>
              Contact Us
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full ${isScrolled ? 'text-secondary' : 'text-white'}`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/success-stories">Success Stories</MobileNavLink>
            <MobileNavLink href="/partners">Partners</MobileNavLink>
            <MobileNavLink href="/events">Events</MobileNavLink>
            <MobileNavLink href="/trust-center">Trust Center</MobileNavLink>
            <MobileNavLink href="/our-blogs">Our Blogs</MobileNavLink>
            <MobileNavLink href="/continuous-tv">ContinuousTV</MobileNavLink>
            <Button className="w-full rounded-full bg-primary text-white mt-4">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ 
  href, 
  children,
  isScrolled 
}: { 
  href: string; 
  children: React.ReactNode;
  isScrolled: boolean;
}) => (
  <a
    href={href}
    className={`text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left ${
      isScrolled ? 'text-secondary' : 'text-white'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary transition-colors"
  >
    {children}
  </a>
);

export default NavBar;
