import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Retainer = () => {
  const plans = [
    {
      name: "Retainer Base",
      price: "200€/mes + IVA",
      commitment: "Sin permanencia",
      features: [
        "2 actualizaciones mensuales",
        "Soporte prioritario (<24h)",
        "1 llamada estratégica/mes",
        "Análisis mensual"
      ],
      highlighted: false
    },
    {
      name: "Retainer Contenido",
      price: "350€/mes + IVA",
      badge: "Recomendado",
      commitment: "Sin permanencia",
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
      price: "550€/mes + IVA",
      commitment: "Sin permanencia",
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
      </div>
    </section>
  );
};

export default Retainer;
