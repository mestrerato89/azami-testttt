import { motion } from "framer-motion";
import model01 from "@/assets/model-01.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={model01}
          alt="AZAMI MODAS — A expressão máxima da sua autoconfiança"
          className="w-full h-full object-cover object-top animate-slow-zoom"
        />
        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-primary mb-6"
        >
          Nova Coleção 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[1] mb-8 max-w-4xl"
        >
          A Expressão Máxima
          <br />
          da sua{" "}
          <span className="italic text-gold-gradient">Autoconfiança</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="font-body text-xs md:text-sm text-muted-foreground max-w-lg mb-10 leading-relaxed"
        >
          Peças autorais que celebram a sua silhueta. Crochê artesanal, recortes
          estratégicos e brilho na medida certa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#night"
            className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-300 hover:shadow-gold"
          >
            Garantir meu Look
          </a>
          <a
            href="#beach"
            className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase border border-foreground/20 text-foreground px-10 py-4 hover:border-primary hover:text-primary transition-all duration-300"
          >
            Ver Disponibilidade
          </a>
        </motion.div>
      </div>

      {/* Bottom gold accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.4 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-center"
      />
    </section>
  );
};

export default HeroSection;
