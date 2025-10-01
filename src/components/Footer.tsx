import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted text-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <div className="text-2xl font-bold mb-3">GoDoGrow</div>
            <p className="text-sm text-muted-foreground mb-4">
              Branding profesional para negocios que quieren crecer
            </p>
            <a 
              href="mailto:hola@godogrow.es" 
              className="text-primary hover:underline text-sm"
            >
              hola@godogrow.es
            </a>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Paquetes de Branding
                </button>
              </li>
              <li>
                <a href="https://wa.me/34622145839" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Retainer Mensual
                </a>
              </li>
              <li>
                <a href="https://www.sendia.me/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Captación de Clientes
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("casos")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Casos de Éxito
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <button 
                  onClick={() => scrollToSection("proceso")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Proceso
                </button>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contacto")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 GoDoGrow. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
