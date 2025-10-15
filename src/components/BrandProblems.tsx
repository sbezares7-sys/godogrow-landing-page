import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, TrendingDown, ShieldAlert, Search } from "lucide-react";

const BrandProblems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "1. Pareces amateur (aunque no lo seas)",
      scenario: "Cliente potencial entra a tu web → Ve diseño de 2010 → Piensa \"¿seguirán en activo?\" → Se va sin contactar",
      cost: "20-40% de visitantes se van sin considerarte",
      solution: "Presencia profesional moderna en 14 días",
      color: "from-red-500/10 to-red-500/5"
    },
    {
      icon: Clock,
      title: "2. Tu mensaje no es claro en 3 segundos",
      scenario: "Cliente entra → No entiende qué haces → Se confunde → Se va",
      test: "Test: Enseña tu web a alguien 3 segundos. Si no sabe qué vendes, estás perdiendo dinero.",
      cost: "50-70% de visitantes no entienden tu propuesta",
      solution: "Copy estratégico que vende desde el primer segundo",
      color: "from-orange-500/10 to-orange-500/5"
    },
    {
      icon: TrendingDown,
      title: "3. Tu competencia se ve más profesional (aunque seas mejor)",
      scenario: "Cliente compara 3 opciones → Tú eres mejor técnicamente → Pero tu web parece peor → Contratan a otro",
      reality: "El cliente no puede evaluar tu calidad antes de probar. Evalúa tu marca.",
      cost: "Pierdes ante competidores peores pero con mejor imagen",
      solution: "Branding al nivel de tu competencia (o mejor)",
      color: "from-yellow-500/10 to-yellow-500/5"
    },
    {
      icon: ShieldAlert,
      title: "4. No generas confianza",
      scenario: "Web sin testimonios, sin casos, info genérica → Cliente duda → \"Mejor busco otra opción\"",
      cost: "60% de clientes potenciales no contactan por falta de confianza",
      solution: "Presencia que transmite profesionalidad y autoridad",
      color: "from-blue-500/10 to-blue-500/5"
    },
    {
      icon: Search,
      title: "5. No estás donde tu cliente te busca",
      scenario: "Cliente busca tu servicio en Google → No aparecer → Contratan a otro\nCliente te busca en redes → Perfil vacío o amateur → No confían",
      cost: "80% de clientes buscan online antes de contratar",
      solution: "Presencia digital completa y optimizada",
      color: "from-purple-500/10 to-purple-500/5"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            5 formas en que tu marca actual te está{" "}
            <span className="text-primary">haciendo perder clientes</span>
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${problem.color} border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {problem.title}
                    </h3>
                    
                    <div className="space-y-3 text-muted-foreground">
                      <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {problem.scenario}
                      </p>
                      
                      {problem.test && (
                        <p className="text-sm md:text-base font-medium text-foreground bg-background/50 p-3 rounded border-l-4 border-primary">
                          {problem.test}
                        </p>
                      )}
                      
                      {problem.reality && (
                        <p className="text-sm md:text-base italic">
                          <span className="font-semibold text-foreground">Realidad:</span> {problem.reality}
                        </p>
                      )}
                      
                      <div className="pt-2 space-y-2">
                        <p className="text-sm md:text-base">
                          <span className="font-bold text-destructive">Costo:</span> {problem.cost}
                        </p>
                        <p className="text-sm md:text-base">
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

        <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Te has sentido identificado con alguno de estos puntos?
          </h3>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-muted-foreground mb-8">
            <p>
              Tu marca no solo representa tu negocio.<br />
              <span className="font-semibold text-foreground">Es la herramienta que convierte visitantes en clientes.</span>
            </p>
            <p className="text-xl font-bold text-destructive">
              Cada día con una marca débil = clientes que se van a tu competencia.
            </p>
          </div>
          
          <Button size="lg" className="text-lg px-10 py-7" asChild>
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
