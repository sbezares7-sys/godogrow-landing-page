import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const sections = [
    { id: "servicios", label: "Servicios" },
    { id: "paquetes", label: "Paquetes" },
    { id: "retainer", label: "Retainer" },
    { id: "casos", label: "Casos" },
    { id: "proceso", label: "Proceso" },
    { id: "faq", label: "FAQ" },
    { id: "contacto", label: "Contacto" },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-auto max-h-[80vh]">
          <nav className="py-6">
            <h2 className="text-lg font-bold mb-4">Navegar</h2>
            <div className="grid grid-cols-2 gap-3">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="outline"
                  onClick={() => scrollToSection(section.id)}
                  className="justify-start"
                >
                  {section.label}
                </Button>
              ))}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
