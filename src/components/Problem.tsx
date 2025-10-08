import { AlertCircle, Clock, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Tu marca no refleja tu calidad",
      description: "Ofreces un servicio profesional pero tu imagen parece amateur. Pierdes clientes antes de que te conozcan."
    },
    {
      icon: Clock,
      title: "No tienes tiempo ni equipo",
      description: "Las agencias tradicionales tardan meses y cobran fortunas. Tú necesitas resultados ya."
    },
    {
      icon: TrendingDown,
      title: "Tu competencia te está superando",
      description: "Otros negocios tienen mejor presencia online. Tú te quedas atrás aunque tu servicio sea mejor."
    }
  ];

  return (
    <section id="servicios" className="py-8 md:py-20 px-4 bg-gray-bg">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-8 md:mb-16">
          ¿Te suena familiar?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-background rounded-xl p-4 md:p-8 border border-destructive/20 hover:border-destructive/40 transition-colors">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-destructive/10 mb-3 md:mb-6">
                <problem.icon className="w-5 h-5 md:w-7 md:h-7 text-destructive" />
              </div>
              <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">{problem.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
