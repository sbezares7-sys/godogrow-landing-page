import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-foreground to-dark-bg text-background">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para que tu marca esté a la altura de tu negocio?
        </h2>
        <p className="text-xl mb-10 text-background/90">
          Agenda una llamada de 15 minutos (gratis y sin compromiso)
        </p>
        
        <Button size="lg" className="text-lg px-10 py-7 mb-6" asChild>
          <a href="https://wa.me/34622145839" target="_blank" rel="noopener noreferrer">
            Agendar llamada gratuita
          </a>
        </Button>
        
        <p className="text-sm text-background/70">
          Te explicamos cómo funciona y vemos si encajamos. Sin presión.
        </p>
        
        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-background/80">
            ¿Prefieres escribir? →{" "}
            <a href="mailto:team@godogrow.es" className="text-primary hover:underline font-medium">
              team@godogrow.es
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
