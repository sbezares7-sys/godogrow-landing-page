import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, TrendingDown, ShieldAlert, Search } from "lucide-react";

const BrandProblems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "1. Pareces amateur (aunque no lo seas)",
      scenario: "Cliente potencial entra a tu web → Ve diseño de 2010 → Piensa \"¿seguirán en activo?\" → Se va sin contactar",
      cost: "20-40% de visitantes se van sin considerarte",
      solution: "Presencia profesional moderna en 14 días"
    },
    {
      icon: Clock,
      title: "2. Tu mensaje no es claro en 3 segundos",
      scenario: "Cliente entra → No entiende qué haces → Se confunde → Se va",
      test: "Test: Enseña tu web a alguien 3 segundos. Si no sabe qué vendes, estás perdiendo dinero.",
      cost: "50-70% de visitantes no entienden tu propuesta",
      solution: "Copy estratégico que vende desde el primer segundo"
    },
    {
      icon: TrendingDown,
      title: "3. Tu competencia se ve más profesional (aunque seas mejor)",
      scenario: "Cliente compara 3 opciones → Tú eres mejor técnicamente → Pero tu web parece peor → Contratan a otro",
      reality: "El cliente no puede evaluar tu calidad antes de probar. Evalúa tu marca.",
      cost: "Pierdes ante competidores peores pero con mejor imagen",
      solution: "Branding al nivel de tu competencia (o mejor)"
    },
    {
      icon: ShieldAlert,
      title: "4. No generas confianza",
      scenario: "Web sin testimonios, sin casos, info genérica → Cliente duda → \"Mejor busco otra opción\"",
      cost: "60% de clientes potenciales no contactan por falta de confianza",
      solution: "Presencia que transmite profesionalidad y autoridad"
    },
    {
      icon: Search,
      title: "5. No estás donde tu cliente te busca",
      scenario: "Cliente busca tu servicio en Google → No aparecer → Contratan a otro\nCliente te busca en redes → Perfil vacío o amateur → No confían",
      cost: "80% de clientes buscan online antes de contratar",
      solution: "Presencia digital completa y optimizada"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            5 formas en que tu marca actual te está{" "}
            <span className="text-primary">haciendo perder clientes</span>
          </h2>
        </div>

        <div className="grid gap-4 md:gap-5 mb-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-primary/5 border border-primary/20 rounded-lg p-4 md:p-6 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-xl font-bold mb-2">
                      {problem.title}
                    </h3>
                    
                    <div className="space-y-2 text-muted-foreground text-sm md:text-base">
                      <p className="leading-relaxed whitespace-pre-line">
                        {problem.scenario}
                      </p>
                      
                      {problem.test && (
                        <p className="font-medium text-foreground bg-background/50 p-2 md:p-3 rounded border-l-4 border-primary">
                          {problem.test}
                        </p>
                      )}
                      
                      {problem.reality && (
                        <p className="italic">
                          <span className="font-semibold text-foreground">Realidad:</span> {problem.reality}
                        </p>
                      )}
                      
                      <div className="pt-1 space-y-1">
                        <p>
                          <span className="font-bold text-primary">Coste:</span> {problem.cost}
                        </p>
                        <p>
                          <span className="font-bold text-primary">Solución:</span> {problem.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-6 md:p-10 text-center">
          <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
            ¿Te has sentido identificado con alguno de estos puntos?
          </h3>
          <div className="max-w-2xl mx-auto space-y-3 text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
            <p>
              Tu marca no solo representa tu negocio.<br />
              <span className="font-semibold text-foreground">Es la herramienta que convierte visitantes en clientes.</span>
            </p>
            <p className="text-lg md:text-xl font-bold text-primary">
              Cada día con una marca débil = clientes que se van a tu competencia.
            </p>
          </div>
          
          <Button size="lg" className="text-base md:text-lg px-8 py-6" asChild>
            <a href="#paquetes">
              Arregla tu marca en 14 días - Desde 450€
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandProblems;
