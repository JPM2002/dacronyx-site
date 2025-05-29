import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Daren Coudriet",
    role: "CEO & Co-Founder",
    bio: "Tech strategist with decades of experience helping companies adopt and scale emerging technologies, including AI.",
    image: "/profiles/Daren.jpg",
    linkedin: "https://www.linkedin.com/in/darencoudriet/",
  },
  {
    name: "Javier Pozo",
    role: "CTO & Co-Founder",
    bio: "Penn State CS graduate and AI engineer focused on turning research into real-world products and intelligent tools.",
    image: "/profiles/Javier.jpg",
    linkedin: "https://www.linkedin.com/in/javier-pozo-miranda/",
    github: "https://github.com/JPM2002",
  },
];

export function Team() {
  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Leadership Team</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            Meet the visionaries behind Dacronyx—unifying deep AI expertise and product execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-dacronyx-dark/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-dacronyx-accent/10 mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-space text-lg font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-dacronyx-accent2 text-sm mb-3">{member.role}</p>
                <p className="text-dacronyx-light/70 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4 text-dacronyx-light/50 hover:text-dacronyx-accent2 transition-colors" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="h-4 w-4 text-dacronyx-light/50 hover:text-dacronyx-accent2 transition-colors" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
