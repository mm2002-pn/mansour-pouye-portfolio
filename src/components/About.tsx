
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Code, Award, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Target className="w-3 h-3 sm:w-4 sm:h-4" />
              À Propos de Moi
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent leading-tight">
              Passionné par l'Innovation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Développeur Full-Stack avec une solide formation en ingénierie des systèmes d'information, 
              je transforme les idées en solutions digitales performantes et innovantes.
            </p>
          </div>

          {/* Enhanced mission cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <Card className="group text-center p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 animate-slide-in-left border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-800">Mission</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Créer des solutions innovantes et performantes qui répondent aux besoins métiers les plus complexes
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-800">Expertise</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  2 ans d'expérience en développement Full-Stack avec maîtrise du TDD et des méthodologies agiles
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 animate-slide-in-right border-0 bg-gradient-to-br from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100" style={{ animationDelay: '0.4s' }}>
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-800">Formation</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Master ISI en cours à l'École Supérieure Multinationale Télécommunication
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced academic section */}
          <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 animate-fade-in shadow-xl border border-slate-200" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Parcours Académique
              </h3>
              <p className="text-base sm:text-lg text-gray-600">Une formation solide en ingénierie des systèmes d'information</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 animate-slide-up">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-2">Master ISI</h4>
                    <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Ingénierie des Systèmes d'Information</p>
                    <p className="text-gray-600 mb-3 text-sm">École Supérieure Multinationale Télécommunication</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">2023 – 2025</span>
                      <span className="text-xs sm:text-sm text-gray-500">Colobane, Sénégal</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-green-600 mb-2">Licence IT</h4>
                    <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Informatique Télécommunication</p>
                    <p className="text-gray-600 mb-3 text-sm">École Supérieure Multinationale Télécommunication</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">2020 – 2023</span>
                      <span className="text-xs sm:text-sm text-gray-500">Colobane, Sénégal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New values section */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group animate-scale-in">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-slate-800">Innovation</h4>
              <p className="text-sm sm:text-base text-gray-600 px-2">Toujours à la recherche de nouvelles technologies et solutions créatives</p>
            </div>
            
            <div className="text-center group animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-slate-800">Collaboration</h4>
              <p className="text-sm sm:text-base text-gray-600 px-2">Travail d'équipe efficace et communication transparente</p>
            </div>
            
            <div className="text-center group animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-slate-800">Excellence</h4>
              <p className="text-sm sm:text-base text-gray-600 px-2">Qualité et performance dans chaque ligne de code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
