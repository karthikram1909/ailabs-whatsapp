import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Truth = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed">
            your best employee might be the reason your system is still broken.
          </p>
          
          <p className="text-muted-foreground text-lg md:text-xl font-light">
            they are not weak, they are too good.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="text-muted-foreground/80 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            they keep delivering results despite poor inputs and unclear setup.
            so the real system never gets fixed.
          </p>
          
          <p className="text-muted-foreground/60 text-base md:text-lg font-light">
            good people compensating for broken systems.
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

export default Truth;
