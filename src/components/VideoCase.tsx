import { Play } from "lucide-react";

const VideoCase = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-bg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Mira cómo hacemos un rebranding completo en 24 horas
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Proceso real sin editar. De concepto a marca lista para usar en un día.
        </p>
        
        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl mb-12">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1122799235?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="Rebranding Express 24h"
            ></iframe>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <p className="text-sm text-muted-foreground mb-1">Duración</p>
            <p className="font-bold">24 horas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <p className="text-sm text-muted-foreground mb-1">Entregables</p>
            <p className="font-bold">Logo + Web + Redes</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✅</div>
            <p className="text-sm text-muted-foreground mb-1">Aprobación</p>
            <p className="font-bold">Primer intento</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <p className="text-sm text-muted-foreground mb-1">Resultado</p>
            <p className="font-bold">Listo para vender</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCase;
