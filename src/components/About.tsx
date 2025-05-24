
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">À Propos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développeur passionné avec une solide formation en ingénierie des systèmes d'information
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-slide-in-left">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mission</h3>
                <p className="text-gray-600">
                  Créer des solutions innovantes et performantes qui répondent aux besoins métiers complexes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                <p className="text-gray-600">
                  2 ans d'expérience en développement Full-Stack avec maîtrise du TDD et des méthodologies agiles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-slide-in-right">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Formation</h3>
                <p className="text-gray-600">
                  Master ISI en cours à l'École Supérieure Multinationale Télécommunication
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center">Formation Académique</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Master ISI</h4>
                <p className="text-gray-800 font-medium mb-1">Ingénierie des Systèmes d'Information</p>
                <p className="text-gray-600 mb-2">École Supérieure Multinationale Télécommunication</p>
                <p className="text-sm text-gray-500">2023 – 2025 | Colobane, Sénégal</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Licence IT</h4>
                <p className="text-gray-800 font-medium mb-1">Informatique Télécommunication</p>
                <p className="text-gray-600 mb-2">École Supérieure Multinationale Télécommunication</p>
                <p className="text-sm text-gray-500">2020 – 2023 | Colobane, Sénégal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
