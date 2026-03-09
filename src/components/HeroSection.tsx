import { motion } from "framer-motion";
import model01 from "@/assets/model-01.jpg";
import model08 from "@/assets/model-08.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-background">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={model01}
          alt="AZAMI MODAS - Coleção"
          className="w-full h-full object-cover object-top animate-slow-zoom"
        />
        {/* Gradient overlay — bottom fade for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {/* Subtle gold tint overlay */}
        <div className="absolute inset-0 bg-primary/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-28">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-4"
          >
            Nova Coleção 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.9] mb-6"
          >
            Glow Up
            <br />
            <span className="text-gold-gradient italic">Collection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-body text-sm text-muted-foreground max-w-md mb-8 leading-relaxed"
          >
            Peças autorais que celebram a sua silhueta. Crochê artesanal, recortes 
            estratégicos e brilho na medida certa para quem nasceu para brilhar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-4"
          >
            <a
              href="#colecoes"
              className="font-body text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-3.5 hover:bg-primary/90 transition-colors duration-300"
            >
              Explorar Coleção
            </a>
            <a
              href="#novidades"
              className="font-body text-[11px] tracking-[0.2em] uppercase border border-foreground/20 text-foreground px-8 py-3.5 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Novidades
            </a>
          </motion.div>
        </div>

        {/* Decorative element: thin gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute bottom-8 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
        />
      </div>

      {/* Side floating thumbnail — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="hidden lg:block absolute right-12 bottom-28 w-40 aspect-[3/4]"
      >
        <img
          src={model08}
          alt="Preview da coleção"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 border border-primary/20" />
        <p className="font-body text-[9px] tracking-[0.3em] uppercase text-primary/60 mt-2 text-center">
          Ver lookbook
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
