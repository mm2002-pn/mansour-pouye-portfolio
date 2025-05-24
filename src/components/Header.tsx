
import { Mail, Phone, MapPin, Github, Linkedin, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Enhanced name with better typography */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent tracking-tight leading-tight">
                Mansour Pouye
              </h1>
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
            </div>
            
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 text-blue-100 tracking-wide px-4">
              Développeur Full-Stack & Ingénieur des Systèmes d'Information
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Passionné par le développement web avec <span className="font-semibold text-white">2 ans d'expérience</span>. 
              Spécialisé en <span className="text-blue-200 font-medium">React.js, Laravel, Node.js et Angular.js</span> avec une expertise en TDD.
            </p>
          </div>

          {/* Enhanced contact info with glass morphism */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 animate-slide-in-left px-4">
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:bg-white/15 transition-all duration-300 shadow-lg text-xs sm:text-sm">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
              <span className="font-medium hidden sm:inline">mansourpouye36@gmail.com</span>
              <span className="font-medium sm:hidden">Email</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:bg-white/15 transition-all duration-300 shadow-lg text-xs sm:text-sm">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
              <span className="font-medium">+221 77 499 09 83</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:bg-white/15 transition-all duration-300 shadow-lg text-xs sm:text-sm">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-300 flex-shrink-0" />
              <span className="font-medium hidden sm:inline">Keur Mbaye Fall, Sénégal</span>
              <span className="font-medium sm:hidden">Sénégal</span>
            </div>
          </div>

          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 animate-slide-in-right px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Télécharger CV
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="https://github.com/mm2002-pn" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="https://linkedin.com/in/mansour-pouye-71834b243" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Achievement stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 animate-fade-in px-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300 mb-2">2+</div>
              <div className="text-xs sm:text-sm text-blue-100">Années d'expérience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-green-300 mb-2">15+</div>
              <div className="text-xs sm:text-sm text-blue-100">Projets réalisés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-purple-300 mb-2">10+</div>
              <div className="text-xs sm:text-sm text-blue-100">Technologies maîtrisées</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-xs text-blue-200 font-medium hidden sm:block">Défiler pour découvrir</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 animate-bounce" />
        </div>
      </div>
    </header>
  );
};

export default Header;
