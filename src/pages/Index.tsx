import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Truth from "@/components/sections/Truth";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Offers from "@/components/sections/Offers";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Problem />
      <Truth />
      <WhatWeDo />
      <Offers />
      <Philosophy />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Index;
