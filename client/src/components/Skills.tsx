import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "MERN Stack",
      icon: Code,
      color: "primary",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
    },
    {
      title: "AI/ML Toolkit",
      icon: Brain,
      color: "accent",
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Statistics", "scikit learn"],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "muted",
      skills: ["Socket.io", "WebRTC", "Leaflet Maps", "Authentication", "Git", "REST APIs"],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-skill-category-${index}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    category.color === 'primary' ? 'bg-primary/10' :
                    category.color === 'accent' ? 'bg-accent/30' :
                    'bg-muted'
                  }`}>
                    <category.icon className={`w-6 h-6 ${
                      category.color === 'primary' ? 'text-primary' :
                      category.color === 'accent' ? 'text-accent-foreground' :
                      'text-foreground'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant={category.color === 'primary' ? 'default' : 'secondary'}
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\./g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
