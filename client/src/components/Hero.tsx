import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-6xl lg:text-7xl font-bold font-serif text-foreground">
            Akash Mourya
          </h1>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground font-medium">
            Full Stack Developer → AI/ML Specialist
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4 text-lg lg:text-xl text-muted-foreground">
            <p>BCA Graduate from Baddi University of Emerging Science & Technology</p>
            <p>Currently pursuing MCA in AI/ML from Manipal University Jaipur</p>
            <p>Software Developer at TCS, building the future with AI/ML</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              data-testid="button-contact"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
