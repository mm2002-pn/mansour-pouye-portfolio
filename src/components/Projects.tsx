
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sedima E-commerce",
      period: "02/2025 – 2025",
      stack: "React.js, Laravel, Nginx, GraphQL, Firebase",
      description: "Développement d'une boutique en ligne complète avec interface utilisateur moderne et API robuste.",
      features: [
        "Interface React.js responsive",
        "API Laravel avec GraphQL",
        "Authentification Google via Firebase",
        "Gestion des commandes et paiements"
      ],
      category: "E-commerce"
    },
    {
      title: "Back-office ERP SERTEM IMMO",
      period: "2023 – 2025",
      stack: "Laravel, AngularJS, PostgreSQL, GraphQL",
      description: "Système de gestion complète pour une entreprise immobilière.",
      features: [
        "Gestion des devis et factures",
        "Génération automatique de PDF",
        "Intégration système comptable",
        "Interface d'administration avancée"
      ],
      category: "ERP"
    },
    {
      title: "Back-office Yellitaare",
      period: "12/2024 – 02/2025",
      stack: "Laravel, PostgreSQL, Nginx, Tailwind CSS, GraphQL",
      description: "Plateforme de gestion pour les commerciaux et leurs activités.",
      features: [
        "Gestion des commerciaux",
        "Planification des rendez-vous",
        "Suivi des versements",
        "Intégration SAGE X3"
      ],
      category: "Gestion"
    },
    {
      title: "FCIS / PECI",
      period: "11/2024 – 01/2025",
      stack: "React.js (TypeScript), Laravel, Firebase",
      description: "Site vitrine pour une école avec interface d'administration.",
      features: [
        "Interface publique moderne",
        "Gestion des candidatures",
        "Authentification sécurisée",
        "Back-end Laravel robuste"
      ],
      category: "Éducation"
    },
    {
      title: "SANOU-SHOP",
      period: "01/2025 – 02/2025",
      stack: "ReactJS, Laravel, MySQL, Firebase",
      description: "Boutique en ligne performante avec interface TypeScript.",
      features: [
        "Interface ReactJS + TypeScript",
        "API REST sécurisée",
        "Authentification Firebase",
        "Gestion complète des produits"
      ],
      category: "E-commerce"
    }
  ];

  const getStatusColor = (category: string) => {
    const colors = {
      "E-commerce": "bg-green-100 text-green-800",
      "ERP": "bg-blue-100 text-blue-800",
      "Gestion": "bg-purple-100 text-purple-800",
      "Éducation": "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Projets Réalisés</h2>
            <p className="text-xl text-gray-600">
              Une sélection de mes réalisations les plus significatives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 animate-slide-in-left group overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4" />
                        {project.period}
                      </div>
                      <Badge className={`${getStatusColor(project.category)} text-xs`}>
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="hover:text-blue-600">
                        <Code className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="hover:text-blue-600">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.split(", ").map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Fonctionnalités clés :</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
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

export default Projects;
