import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const email = "mouryaakash138@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/akash-mourya-a5b75825b/";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            <Card 
              className="p-6 hover-elevate transition-all duration-300"
              data-testid="card-email"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-mono text-sm truncate">{email}</p>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={copyEmail}
                  data-testid="button-copy-email"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </Card>

            <Card 
              className="p-6 hover-elevate transition-all duration-300"
              data-testid="card-linkedin"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-3 bg-accent/30 rounded-lg">
                    <Linkedin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <p className="font-medium">Akash Mourya</p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  data-testid="button-linkedin"
                >
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    Visit Profile
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t text-center space-y-4">
          <p className="text-muted-foreground">
            © 2024 Akash Mourya. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
