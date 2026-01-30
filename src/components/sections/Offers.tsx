import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const offers = [
  {
    level: "level 0",
    name: "implementation gap audit",
    description: "paid diagnostic. one real business problem. clear gap identification. clear fix roadmap.",
    starting: "starting at ₹25,000",
  },
  {
    level: "level 1",
    name: "implementation fix engagement",
    description: "we take one approved gap. design the system. implement ai + process + tooling. stay until it works.",
    starting: "starting at ₹75,000",
  },
  {
    level: "level 2",
    name: "systems-as-a-service",
    description: "ongoing ownership of execution. monitoring, refining, improving. documentation + adoption support.",
    starting: "starting at ₹30,000/month",
  },
  {
    level: "level 3",
    name: "team execution enablement",
    description: "train teams on their systems. adoption-focused. reduces founder dependency.",
    starting: "starting at ₹50,000",
  },
];

const Offers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-4xl w-full space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-light text-foreground">
            how we work
          </h2>
          <p className="text-muted-foreground text-base font-light">
            execution ownership. not consulting theatre.
          </p>
        </motion.div>

        <div className="space-y-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.level}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="border-t border-border pt-8 pb-4"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground text-sm font-light">
                      {offer.level}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-foreground">
                    {offer.name}
                  </h3>
                  <p className="text-muted-foreground/80 text-sm md:text-base font-light leading-relaxed max-w-xl">
                    {offer.description}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="text-muted-foreground text-sm font-light">
                    {offer.starting}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center pt-8"
        >
          <p className="text-muted-foreground/60 text-sm font-light">
            We don’t stop at ideas. We stay until execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
