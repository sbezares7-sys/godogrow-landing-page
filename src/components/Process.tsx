import { Calendar, Palette, Layout, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      day: "DÍA 1",
      icon: Calendar,
      title: "Kickoff Call",
      description: "30 minutos para entender tu negocio, objetivos y visión. Definimos estrategia y mensajes clave."
    },
    {
      day: "DÍAS 2-7",
      icon: Palette,
      title: "Desarrollo de Identidad",
      description: "Creamos logo, colores, tipografías y sistema visual. Primera revisión incluida."
    },
    {
      day: "DÍAS 8-12",
      icon: Layout,
      title: "Web + Copywriting",
      description: "Diseño y desarrollo de tu web con textos orientados a conversión. Segunda revisión."
    },
    {
      day: "DÍAS 13-14",
      icon: CheckCircle,
      title: "Entrega + Optimización",
      description: "Todos los assets finales, documentación completa y setup de perfiles. ¡Listo para crecer!"
    }
  ];

  return (
    <section id="proceso" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Cómo trabajamos: De kickoff a entrega en 14 días
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 md:gap-8">
                {/* Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="inline-block mb-2 text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                    {step.day}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee box */}
        <div className="mt-16 bg-primary/5 border-2 border-primary rounded-xl p-8 text-center">
          <p className="text-lg md:text-xl font-semibold">
            ¿Necesitas más tiempo? Sin problema. Si no entregamos en 14 días, es gratis. Sin excusas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
