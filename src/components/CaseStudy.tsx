import antesImage from "@/assets/antes.jpg";
import despuesImage from "@/assets/despues.jpg";

const CaseStudy = () => {
  return (
    <section id="casos" className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          Resultados reales: Antes vs Después
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Antes */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-destructive bg-destructive/10 px-3 py-1 rounded">
                ANTES
              </span>
            </div>
            <div className="border-2 border-muted rounded-lg overflow-hidden bg-muted/30 shadow-lg">
              <img 
                src={antesImage} 
                alt="Web antes del rebranding - diseño anticuado"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Web anticuada, sin estrategia, conversión baja
            </p>
          </div>

          {/* Después */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-success bg-success/10 px-3 py-1 rounded">
                DESPUÉS
              </span>
            </div>
            <div className="border-2 border-primary rounded-lg overflow-hidden shadow-xl">
              <img 
                src={despuesImage} 
                alt="Web después del rebranding - diseño moderno y profesional"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Diseño moderno, copy estratégico, conversión x3
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-gray-bg rounded-xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">⚡</div>
              <p className="text-xs sm:text-sm font-semibold mb-1">Entregado en:</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">14 días</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">💰</div>
              <p className="text-xs sm:text-sm font-semibold mb-1">Inversión:</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">650€</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">📈</div>
              <p className="text-xs sm:text-sm font-semibold mb-1">Resultados:</p>
              <p className="text-base sm:text-lg md:text-2xl font-bold text-success">+200% conversión</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
