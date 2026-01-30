import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhatWeDo = () => {
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
            we don't fix people
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
            we fix the setup that creates the dependency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="text-muted-foreground/70 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            we sit between how a leader thinks and how work actually happens.
            we identify the one thing that keeps repeating.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="pt-8"
        >
          <p className="text-foreground text-base md:text-lg font-medium">
            human-friendly ai systems for business owners
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
