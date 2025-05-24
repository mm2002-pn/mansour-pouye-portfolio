
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Cloud, 
  GitBranch, 
  Layers,
  Settings
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Back-end",
      icon: Server,
      skills: ["PHP (Laravel)", "Node.js (Express.js)", "Python"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Front-end", 
      icon: Globe,
      skills: ["HTML5/CSS3", "XML", "React", "AngularJs", "TypeScript"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Bases de données",
      icon: Database,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "SQL Server"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "API",
      icon: Layers,
      skills: ["REST", "GraphQL"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Docker", "AWS (S3, EC2)", "Nginx"],
      color: "bg-cyan-100 text-cyan-800"
    },
    {
      title: "Méthodologies",
      icon: Settings,
      skills: ["UML", "Méthodes Agiles", "Algorithmique", "TDD"],
      color: "bg-pink-100 text-pink-800"
    }
  ];

  const languages = [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Moyen" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Compétences</h2>
            <p className="text-xl text-gray-600">
              Technologies et outils que je maîtrise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-slide-in-left"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs hover:bg-blue-100 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GitBranch className="w-6 h-6 text-blue-600" />
                  Langues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="outline">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-600" />
                  Centres d'intérêt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm">📚 Lecture</Badge>
                  <Badge variant="outline" className="text-sm">⚽ Football</Badge>
                  <Badge variant="outline" className="text-sm">💻 Veille technologique</Badge>
                  <Badge variant="outline" className="text-sm">🚀 Innovation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
