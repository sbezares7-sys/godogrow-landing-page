import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "ESENCIAL",
      badge: "Para empezar",
      price: "450€",
      subtitle: "Pago único",
      features: [
        "Logo profesional + variantes",
        "Paleta de colores + tipografías",
        "Tarjetas de visita digital",
        "1 red social optimizada",
        "Guía de marca básica (PDF)"
      ],
      ideal: "Autónomos y profesionales independientes",
      highlighted: false
    },
    {
      name: "PROFESIONAL",
      badge: "⭐ Más popular",
      price: "650€",
      subtitle: "Pago único (o 2 cuotas de 325€)",
      features: [
        "Todo del Esencial +",
        "Landing page profesional",
        "Copywriting estratégico",
        "Análisis de mercado",
        "2 redes sociales optimizadas",
        "Email profesional setup",
        "Guía de marca extendida",
        "3 plantillas de contenido"
      ],
      ideal: "Negocios locales y PYMES",
      highlighted: true
    },
    {
      name: "PREMIUM",
      badge: "Completo",
      price: "1.200€",
      subtitle: "Pago único (o 3 cuotas)",
      features: [
        "Todo del Profesional +",
        "Web completa (3-5 páginas)",
        "Estrategia de contenido 90 días",
        "Análisis de mercado profundo",
        "Sistema de newsletter",
        "5 plantillas avanzadas",
        "Setup Google My Business"
      ],
      ideal: "Multi-sede y alto crecimiento",
      highlighted: false
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-gray-bg">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Elige tu paquete de fundación
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Todo incluye 2 rondas de revisión y entrega en 14 días
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-background rounded-xl p-6 sm:p-8 border-2 ${
                pkg.highlighted
                  ? "border-primary shadow-xl md:scale-105"
                  : "border-border"
              } hover:shadow-lg transition-all`}
            >
              <div className="flex justify-between items-start mb-6">
                <Badge variant={pkg.highlighted ? "default" : "secondary"}>
                  {pkg.badge}
                </Badge>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold">{pkg.price}</span>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{pkg.subtitle}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium">Ideal para:</span> {pkg.ideal}
                </p>
                <Button
                  className="w-full"
                  variant={pkg.highlighted ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href="https://wa.me/34622145839" target="_blank" rel="noopener noreferrer">
                    Elegir {pkg.name}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground">
          Todos los paquetes incluyen garantía: si no entregamos en 14 días, es gratis
        </p>
      </div>
    </section>
  );
};

export default Packages;
