
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-white">Me Contacter</h2>
            <p className="text-xl text-blue-200">
              Discutons de votre prochain projet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Travaillons ensemble</h3>
              <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                Je suis toujours intéressé par de nouveaux défis et opportunités. 
                Que ce soit pour un projet freelance, une collaboration ou simplement 
                pour échanger sur les technologies, n'hésitez pas à me contacter.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:mansourpouye36@gmail.com" 
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      mansourpouye36@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a 
                      href="tel:+221774990983" 
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      +221 77 499 09 83
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-blue-200">Keur Mbaye Fall, Sénégal</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  asChild
                >
                  <a href="https://github.com/mm2002-pn" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  asChild
                >
                  <a href="https://linkedin.com/in/mansour-pouye-71834b243" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Envoyez-moi un message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-1">
                    Nom complet
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-1">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>
                
                <Button 
                  className="w-full bg-white text-blue-900 hover:bg-blue-50 transition-colors"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-16 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-blue-200">
            <p>&copy; 2025 Mansour Pouye. Tous droits réservés.</p>
            <p className="mt-2">Développé avec ❤️ et React.js</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
