import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Video, Map } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "NxMeet",
      description: "A real-time video conferencing application built with WebRTC and Socket.io. Features include peer-to-peer video calls, chat messaging, and secure token-based authentication.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "WebRTC"],
      icon: Video,
      link: "https://nxmeet.onrender.com/",
      features: ["Video Conferencing", "Real-time Chat", "Token Authentication", "Peer-to-peer Connection"],
    },
    {
      title: "Wonderlust",
      description: "A travel and accommodation platform with interactive maps and user authentication. Features secure session management, MongoDB data storage, and Leaflet API integration for location services.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Leaflet", "Authentication"],
      icon: Map,
      link: "https://wonderlust-f23l.onrender.com/",
      features: ["Interactive Maps", "User Authentication", "Session Management", "Location Services"],
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-center mb-16">
          Featured Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`p-8 lg:p-12 hover-elevate transition-all duration-300 ${
                index % 2 === 0 ? '' : 'lg:ml-16'
              }`}
              data-testid={`card-project-${index}`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-lg">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Key Features:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    asChild
                    data-testid={`button-view-project-${index}`}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Live Demo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium font-mono">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        data-testid={`badge-tech-${tag.toLowerCase()}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
