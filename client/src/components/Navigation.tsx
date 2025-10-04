import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold font-serif hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="button-logo"
          >
            AM
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('journey')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-journey"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-skills"
            >
              Skills
            </button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('contact')}
              data-testid="button-nav-contact"
            >
              Contact
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <button 
              onClick={() => scrollToSection('journey')}
              className="block w-full text-left px-4 py-2 hover-elevate active-elevate-2 rounded-md"
              data-testid="mobile-link-journey"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-2 hover-elevate active-elevate-2 rounded-md"
              data-testid="mobile-link-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-4 py-2 hover-elevate active-elevate-2 rounded-md"
              data-testid="mobile-link-skills"
            >
              Skills
            </button>
            <Button 
              className="w-full"
              onClick={() => scrollToSection('contact')}
              data-testid="mobile-button-contact"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
