import { Store, User, Rocket, Building, Network } from "lucide-react";

const SocialProof = () => {
  const items = [
    {
      icon: Store,
      title: "Negocios Locales",
      description: "Autoescuelas, clínicas, restaurantes..."
    },
    {
      icon: User,
      title: "Profesionales",
      description: "Consultores, coaches, freelancers..."
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Proyectos tech, apps, SaaS..."
    },
    {
      icon: Building,
      title: "PYMES",
      description: "Empresas consolidadas en crecimiento..."
    },
    {
      icon: Network,
      title: "Multi-sede",
      description: "Franquicias y negocios escalables..."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-12">
          Confianza de negocios que quieren crecer
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
