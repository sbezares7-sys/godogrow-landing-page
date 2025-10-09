const FloatingUrgencyBadge = () => {
  return (
    <a
      href="https://wa.me/34622145839"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-pulse hover:animate-none"
    >
      <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all hover:scale-105">
        <p className="font-bold text-sm md:text-base whitespace-nowrap">
          🔥 Solo 3 huecos este mes
        </p>
      </div>
    </a>
  );
};

export default FloatingUrgencyBadge;
