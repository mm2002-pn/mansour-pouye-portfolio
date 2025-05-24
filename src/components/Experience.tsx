
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Développeur Full-Stack & Consultant Freelance",
      period: "2024 – 2025",
      location: "Dakar, Sénégal",
      type: "Freelance",
      description: "Développement de solutions web complètes pour diverses entreprises",
      achievements: [
        "Développement d'applications e-commerce avec React.js et Laravel",
        "Intégration de systèmes de paiement et d'authentification",
        "Optimisation des performances et de l'expérience utilisateur"
      ]
    },
    {
      title: "Développeur Full-Stack",
      period: "2023 – 2024",
      location: "Dakar, Sénégal", 
      type: "Stage",
      description: "Stage de développement dans une entreprise locale",
      achievements: [
        "Participation au développement de back-offices",
        "Apprentissage des méthodologies agiles",
        "Développement d'APIs REST et GraphQL"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Expérience Professionnelle</h2>
            <p className="text-xl text-gray-600">
              Mon parcours en développement Full-Stack
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-slide-in-left border-l-4 border-l-blue-500"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-800 mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <Badge variant="secondary">{exp.type}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Réalisations clés :</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
