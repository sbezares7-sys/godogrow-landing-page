import { Zap, TrendingUp, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Solution = () => {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          La solución: Branding completo en 3 fases
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Un sistema probado que te lleva de marca amateur a profesional
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Fase 1 */}
          <div className="bg-background border-2 border-foreground rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">FASE 1: FUNDACIÓN</h3>
            <p className="text-xl font-semibold mb-4">Tu marca profesional</p>
            <p className="text-muted-foreground mb-6">
              En 14 días tienes: Logo + Web + Identidad + Contenido inicial
            </p>
            <p className="text-lg font-semibold mb-4">Desde 450€ pago único</p>
            <a href="#servicios" className="text-primary hover:underline font-medium">
              Ver paquetes ↓
            </a>
          </div>

          {/* Fase 2 */}
          <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-6">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">FASE 2: CRECIMIENTO</h3>
            <p className="text-xl font-semibold mb-4">Mantenimiento + Contenido</p>
            <p className="text-muted-foreground mb-6">
              Retainer mensual: actualizaciones, redes sociales, newsletter, soporte
            </p>
            <p className="text-lg font-semibold mb-4">Desde 200€/mes</p>
            <p className="text-sm text-muted-foreground">
              La mayoría de clientes activan esto
            </p>
          </div>

          {/* Fase 3 */}
          <div className="bg-gray-bg border-2 border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3">FASE 3: CAPTACIÓN</h3>
            <p className="text-xl font-semibold mb-4">Genera clientes nuevos</p>
            <p className="text-muted-foreground mb-6">
              Outreach B2B + Ads optimizados para tu sector
            </p>
            <p className="text-lg font-semibold mb-4">Desde 400€/mes</p>
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
