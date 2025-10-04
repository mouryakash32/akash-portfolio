import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-center mb-16">
          Experience
        </h2>

        <Card className="p-8 lg:p-12 max-w-3xl mx-auto" data-testid="card-experience">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Developer</h3>
                  <p className="text-lg text-accent-foreground font-medium">TCS (Tata Consultancy Services)</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">Currently Working</span>
                </div>
              </div>

              <p className="text-muted-foreground">
                Working as a software developer while pursuing advanced studies in AI/ML. 
                Applying full-stack development skills and learning cutting-edge technologies 
                in artificial intelligence and machine learning.
              </p>

              <div className="pt-4">
                <p className="text-sm font-medium mb-2">Focus Areas:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Full Stack Development</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">AI/ML Learning</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Data Science</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
