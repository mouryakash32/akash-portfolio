import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Rocket } from "lucide-react";

export default function Journey() {
  const milestones = [
    {
      icon: GraduationCap,
      title: "BCA Graduate",
      subtitle: "Baddi University of Emerging Science & Technology",
      description: "Learned MERN stack and built innovative projects",
      period: "Completed",
    },
    {
      icon: Briefcase,
      title: "TCS Developer + MCA Student",
      subtitle: "TCS & Manipal University Jaipur",
      description: "Working professionally while pursuing MCA in AI/ML",
      period: "Present",
      highlight: true,
    },
    {
      icon: Rocket,
      title: "AI/ML Developer",
      subtitle: "Future Goals",
      description: "Mastering Python, Data Science, and Machine Learning",
      period: "Soon",
    },
  ];

  return (
    <section id="journey" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-center mb-16">
          My Journey
        </h2>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card 
                key={index}
                className={`relative p-8 hover-elevate transition-all duration-300 ${
                  milestone.highlight ? 'border-primary' : ''
                }`}
                data-testid={`card-journey-${index}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full ${
                    milestone.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <milestone.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <p className="text-sm text-accent-foreground font-mono">
                      {milestone.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>

                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    milestone.highlight 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {milestone.period}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
