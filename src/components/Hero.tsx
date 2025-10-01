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
          <div className="bg-card border-2 border-border rounded-xl shadow-2xl overflow-hidden mx-auto max-w-5xl">
            <div className="bg-muted/50 p-1.5 flex items-center gap-2 border-b border-border/50">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-destructive/60"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
                <div className="w-2 h-2 rounded-full bg-success/60"></div>
              </div>
              <div className="flex-1 bg-background/80 rounded px-3 py-0.5 text-[10px] text-muted-foreground/60 text-center max-w-xs">
                tunegocio.com
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-16">
              <div className="text-center space-y-6 w-full max-w-2xl">
                {/* Logo simulation */}
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg"></div>
                </div>
                
                {/* Text lines */}
                <div className="space-y-3">
                  <div className="h-6 bg-gradient-to-r from-foreground/30 via-foreground/20 to-transparent rounded-lg w-64 mx-auto"></div>
                  <div className="h-4 bg-foreground/10 rounded w-80 mx-auto"></div>
                  <div className="h-4 bg-foreground/10 rounded w-72 mx-auto"></div>
                </div>
                
                {/* CTA buttons */}
                <div className="flex gap-3 justify-center pt-4">
                  <div className="h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg w-40 shadow-lg"></div>
                  <div className="h-12 bg-secondary/60 rounded-lg w-40"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="flex gap-8 justify-center pt-6 opacity-40">
                  <div className="w-16 h-16 border border-foreground/20 rounded-lg"></div>
                  <div className="w-16 h-16 border border-foreground/20 rounded-lg"></div>
                  <div className="w-16 h-16 border border-foreground/20 rounded-lg"></div>
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
