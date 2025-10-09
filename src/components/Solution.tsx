import { Zap, TrendingUp, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Solution = () => {
  return (
    <section id="como-funciona" className="py-8 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">
          La solución: Branding completo en 3 fases
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-center text-muted-foreground mb-6 md:mb-16 px-4">
          Un sistema probado que te lleva de marca amateur a profesional
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {/* Fase 1 */}
          <div className="bg-background border-2 border-foreground rounded-xl p-4 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary/10 mb-3 sm:mb-6">
              <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3">FASE 1: FUNDACIÓN</h3>
            <p className="text-sm sm:text-xl font-semibold mb-2 sm:mb-4">Tu marca profesional</p>
            <p className="text-xs sm:text-base text-muted-foreground mb-3 sm:mb-6">
              En 14 días tienes: Logo + Web + Identidad + Contenido inicial
            </p>
            <p className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">Desde 450€</p>
            <p className="text-xs text-muted-foreground">No incluye IVA</p>
            <a href="#servicios" className="text-primary hover:underline font-medium">
              Ver paquetes ↓
            </a>
          </div>

          {/* Fase 2 */}
          <div className="bg-primary/5 border-2 border-primary rounded-xl p-4 sm:p-8 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary/20 mb-3 sm:mb-6">
              <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3">FASE 2: CRECIMIENTO</h3>
            <p className="text-sm sm:text-xl font-semibold mb-2 sm:mb-4">Mantenimiento + Contenido</p>
            <p className="text-xs sm:text-base text-muted-foreground mb-3 sm:mb-6">
              Retainer mensual: actualizaciones, redes sociales, newsletter, soporte
            </p>
            <p className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">Desde 200€/mes</p>
            <p className="text-xs text-muted-foreground">No incluye IVA</p>
            <p className="text-sm text-muted-foreground">
              La mayoría de clientes activan esto
            </p>
          </div>

          {/* Fase 3 */}
          <div className="bg-gray-bg border-2 border-border rounded-xl p-4 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-accent/10 mb-3 sm:mb-6">
              <Target className="w-5 h-5 sm:w-7 sm:h-7 text-accent" />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3">FASE 3: CAPTACIÓN</h3>
            <p className="text-sm sm:text-xl font-semibold mb-2 sm:mb-4">Genera clientes nuevos</p>
            <p className="text-xs sm:text-base text-muted-foreground mb-3 sm:mb-6">
              Outreach B2B + Ads optimizados para tu sector
            </p>
            <p className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">Desde 400€/mes</p>
            <p className="text-xs text-muted-foreground">No incluye IVA</p>
            <p className="text-sm text-muted-foreground mb-2">
              Opcional, cuando estés listo
            </p>
            <a 
              href="https://www.sendia.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium text-sm"
            >
              Conoce Sendia.me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
