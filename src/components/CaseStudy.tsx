const CaseStudy = () => {
  return (
    <section id="casos" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
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
            <div className="border-2 border-muted rounded-lg overflow-hidden bg-muted/30">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-muted-foreground mb-4">
                    [Aquí irá screenshot del ANTES - 800x600px]
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted-foreground/20 rounded w-3/4 mx-auto"></div>
                    <div className="h-3 bg-muted-foreground/20 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
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
            <div className="border-2 border-primary rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-lg mx-auto"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-foreground/20 rounded w-3/4 mx-auto"></div>
                    <div className="h-3 bg-foreground/10 rounded w-full mx-auto"></div>
                    <div className="h-3 bg-foreground/10 rounded w-5/6 mx-auto"></div>
                  </div>
                  <div className="flex gap-2 justify-center pt-4">
                    <div className="h-8 bg-primary rounded w-24"></div>
                    <div className="h-8 bg-secondary rounded w-24"></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Diseño moderno, copy estratégico, conversión x3
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-gray-bg rounded-xl p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold mb-1">Entregado en:</p>
              <p className="text-2xl font-bold text-primary">14 días</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💰</div>
              <p className="font-semibold mb-1">Inversión:</p>
              <p className="text-2xl font-bold text-primary">650€</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📈</div>
              <p className="font-semibold mb-1">Resultados:</p>
              <p className="text-2xl font-bold text-success">+200% conversión</p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          Nota: Las imágenes del antes y después se subirán próximamente
        </p>
      </div>
    </section>
  );
};

export default CaseStudy;
