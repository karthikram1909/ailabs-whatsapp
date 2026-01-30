import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-light text-foreground">
            what we refuse to do
          </h2>
          
          <div className="space-y-4 text-muted-foreground/70 text-base md:text-lg font-light">
            <p>chase trends</p>
            <p>over-explain ai</p>
            <p>compete on features</p>
            <p>look busy instead of effective</p>
            <p>blame you and your team for failure</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8"
        >
          <div className="w-16 h-px bg-muted-foreground/30 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed">
            when the future feels unclear,
            <br />
            we improve the present through execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
