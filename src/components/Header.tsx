import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-foreground">GoDoGrow</div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("casos")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Casos
          </button>
          <button
            onClick={() => scrollToSection("proceso")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Proceso
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>

        <Button asChild>
          <a href="https://wa.me/34622145839" target="_blank" rel="noopener noreferrer">
            Agenda una llamada
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
