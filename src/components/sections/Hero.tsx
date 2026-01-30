import { motion } from "framer-motion";
import AircraftIcon from "../AircraftIcon";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        className="text-center flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <AircraftIcon size={100} className="text-foreground" />
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
          everyday ai labs
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md">
          we fix the implementation gap
        </p>
      </motion.div>
      
      <motion.div
        className="absolute bottom-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-px h-16 bg-muted-foreground/30" />
      </motion.div>
    </section>
  );
};

export default Hero;
