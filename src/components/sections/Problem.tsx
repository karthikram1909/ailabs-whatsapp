import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground">
            intent <span className="font-serif">≠</span> implementation
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
            you already know enough
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-muted-foreground/80 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            businesses don't fail because they lack ideas.
            they fail because execution breaks in between.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8"
        >
          <div className="w-16 h-px bg-muted-foreground/30 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
