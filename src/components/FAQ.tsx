import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Por qué tan rápido y a este precio?",
      answer: "Usamos procesos sistemáticos y tecnología que las agencias tradicionales no tienen. Somos eficientes, no baratos. Pagas por resultados, no por reuniones infinitas."
    },
    {
      question: "¿Trabajáis con mi sector?",
      answer: "Trabajamos con negocios locales, profesionales, startups y PYMES de cualquier sector. Nuestra expertise es branding, no sectores específicos. Eso nos permite traer ideas frescas."
    },
    {
      question: "¿Qué pasa si no me gusta el resultado?",
      answer: "Incluyes 2 rondas de revisión. En nuestra experiencia, el 95% de clientes aprueba en la primera o segunda ronda. Si realmente no funciona, hablamos y buscamos solución."
    },
    {
      question: "¿Los precios incluyen IVA?",
      answer: "Los precios mostrados no incluyen IVA. El IVA se aplicará en la factura cuando sea necesario según tu situación fiscal y ubicación. Si eres cliente fuera de España, consulta con nosotros sobre impuestos y facturación específicos de tu país."
    },
    {
      question: "¿Qué incluye vuestra garantía de entrega?",
      answer: "GARANTÍA DE ENTREGA EN 14 DÍAS: Si no entregamos tu proyecto completo en 14 días hábiles, es gratis. Condiciones: Los 14 días empiezan después del kickoff call, el cliente debe proporcionar feedback en menos de 48h cuando se solicita, se excluyen retrasos por cambios fuera de las 2 revisiones incluidas y causas de fuerza mayor (enfermedad grave, catástrofe). En 3 años, nunca hemos tenido que activar esta garantía."
    },
    {
      question: "¿Qué incluye exactamente el retainer?",
      answer: "Depende del plan. El base incluye 2 actualizaciones mensuales. El de contenido incluye gestión completa de redes. El multi-canal incluye todo + newsletter. Sin permanencia en ninguno."
    },
    {
      question: "¿Qué pasa si no contrato un retainer?",
      answer: "Al finalizar la Fase 1, recibes todos los archivos (logo, diseños, código web), acceso completo a hosting/dominio y documentación para gestionar por tu cuenta. MANTENIMIENTO: Si NO activas retainer, la web es 100% tuya pero tú gestionas actualizaciones, seguridad, backups, etc. Si activas retainer, nosotros nos encargamos de todo. IMPORTANTE: Sin retainer activo, no realizamos cambios ni soporte. Si en el futuro necesitas cambios, se cobran como servicios a la carta."
    },
    {
      question: "¿Necesito tener algo preparado antes de empezar?",
      answer: "No. Solo necesitamos que nos dediques 30 minutos en el kickoff call. Nosotros nos encargamos del resto. Si tienes fotos/contenido, genial. Si no, te orientamos qué necesitas."
    },
    {
      question: "¿Qué diferencia hay entre vosotros y una agencia tradicional?",
      answer: "Velocidad, precio y modelo de trabajo. Las agencias tradicionales tardan meses, cobran 5-15k€ y luego desaparecen. Nosotros entregamos en 14 días, cobramos 450-1.200€, y si quieres, seguimos contigo cada mes."
    },
    {
      question: "¿Hacéis también la captación de clientes?",
      answer: "Sí, pero es la Fase 3 (opcional). Primero construimos tu marca (Fase 1), luego te mantenemos y creamos contenido (Fase 2), y cuando estés listo, te ayudamos a captar clientes con outreach y ads (Fase 3)."
    }
  ];

  return (
    <section id="faq" className="py-12 md:py-20 px-4 bg-gray-bg">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Preguntas frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
