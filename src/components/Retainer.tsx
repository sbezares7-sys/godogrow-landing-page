import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Retainer = () => {
  const plans = [
    {
      name: "Retainer Base",
      price: "200€/mes",
      commitment: "Sin permanencia · No incluye IVA",
      features: [
        "Web siempre actualizada y relevante",
        "Cambios incluidos (2 al mes, sin pagar extra)",
        "Problemas resueltos en <24h",
        "Protección de tu inversión inicial",
        "Optimización continua para vender más"
      ],
      highlighted: false
    },
    {
      name: "Retainer Contenido",
      price: "350€/mes",
      badge: "Recomendado",
      commitment: "Sin permanencia · No incluye IVA",
      features: [
        "Todo lo anterior +",
        "Calendario mensual completo (16-20 posts)",
        "Gestión de 1 red social",
        "Diseño de publicaciones",
        "Análisis de engagement"
      ],
      highlighted: true
    },
    {
      name: "Retainer Multi-canal",
      price: "550€/mes",
      commitment: "Sin permanencia · No incluye IVA",
      features: [
        "Todo lo anterior +",
        "2 redes sociales gestionadas",
        "Newsletter mensual",
        "Plantillas ilimitadas",
        "Anuncios especiales incluidos"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="retainer" className="py-12 md:py-20 px-4 bg-gradient-to-br from-dark-bg to-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fase 2: Crece cada mes sin esfuerzo
          </h2>
          <p className="text-xl text-background/80">
            El 80% de nuestros clientes activan un retainer después de la fundación
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-background/10 backdrop-blur-sm rounded-xl p-8 border-2 ${
                plan.highlighted
                  ? "border-primary shadow-xl shadow-primary/30 scale-105"
                  : "border-background/20"
              } hover:bg-background/15 transition-all`}
            >
              {plan.badge && (
                <Badge className="mb-4" variant="default">{plan.badge}</Badge>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <p className="text-sm text-background/70 mb-6">{plan.commitment}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary text-lg">•</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${!plan.highlighted ? "bg-background text-foreground hover:bg-background/90 border-background" : ""}`}
                variant={plan.highlighted ? "default" : "secondary"}
                size="lg"
                asChild
              >
                <a href="https://wa.me/34622145839" target="_blank" rel="noopener noreferrer">
                  Más info
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-background/10 backdrop-blur-sm rounded-xl border-2 border-background/20">
            <AccordionItem value="cost-analysis" className="border-none">
              <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-bold hover:no-underline hover:bg-background/5">
                💰 COSTE REAL DE NO TENER RETAINER
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-background/90">
                  <div className="space-y-2">
                    <p className="flex justify-between items-center">
                      <span>1 cliente perdido</span>
                      <span className="font-bold text-primary">= 500-2.000€ (según tu ticket)</span>
                    </p>
                    <p className="flex justify-between items-center">
                      <span>1 cambio urgente</span>
                      <span className="font-bold text-primary">= 300€</span>
                    </p>
                    <p className="flex justify-between items-center">
                      <span>Web caída 1 día</span>
                      <span className="font-bold text-primary">= ¿Cuántos clientes pierdes?</span>
                    </p>
                  </div>
                  
                  <div className="border-t border-background/20 pt-4 mt-4">
                    <p className="text-xl font-bold text-center mb-2">
                      Total: <span className="text-primary">800-2.500€</span> en pérdidas
                    </p>
                    <p className="text-center text-lg">
                      vs <span className="text-accent font-bold">200€/mes</span> de protección
                    </p>
                  </div>
                  
                  <p className="text-center text-sm pt-4 border-t border-background/20">
                    Sin permanencia. Cancelas cuando quieras.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Retainer;
