import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AircraftIcon from "./AircraftIcon";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: scrolled ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="pointer-events-auto">
          <AircraftIcon size={32} className="text-foreground" />
        </a>
        
        <a
          href="#contact"
          className="pointer-events-auto text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
