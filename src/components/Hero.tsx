import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-gray-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            14 días de tu marca amateur a profesional
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tu negocio merece una marca que venda
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Branding completo + Web + Contenido en 14 días. Desde 450€ + mantenimiento desde 200€/mes para seguir creciendo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://wa.me/34622145839" target="_blank" rel="noopener noreferrer">
                Ver paquetes
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-lg"
              onClick={() => scrollToSection("como-funciona")}
            >
              Cómo funciona <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mockup visual */}
        <div className="mt-16 relative">
          <div className="bg-card border-4 border-foreground rounded-lg shadow-2xl overflow-hidden mx-auto max-w-4xl">
            <div className="bg-muted p-2 flex items-center gap-2 border-b">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
              </div>
              <div className="flex-1 bg-background rounded px-4 py-1 text-xs text-muted-foreground text-center">
                tunegocio.com
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-12">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary rounded-xl mx-auto"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-foreground/20 rounded w-48 mx-auto"></div>
                  <div className="h-3 bg-foreground/10 rounded w-64 mx-auto"></div>
                </div>
                <div className="flex gap-2 justify-center">
                  <div className="h-10 bg-primary rounded w-32"></div>
                  <div className="h-10 bg-secondary rounded w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
