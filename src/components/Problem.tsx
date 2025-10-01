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
    <section className="py-20 px-4 bg-gray-bg">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          ¿Te suena familiar?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-background rounded-xl p-8 border border-destructive/20 hover:border-destructive/40 transition-colors">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-destructive/10 mb-6">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
