import { motion } from "framer-motion";
import model04 from "@/assets/model-04.jpg";

const BrandStory = () => {
  return (
    <section id="sobre" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img src={model04} alt="AZAMI MODAS — Nossa história" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/15 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-primary mb-5">
              Nossa Essência
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
              Vista a sua
              <br />
              <span className="italic text-gold-gradient">melhor versão</span>
            </h2>
            <div className="space-y-5 mb-10">
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                A AZAMI nasceu da paixão por peças que contam histórias. Cada modelo
                é pensado para valorizar a silhueta feminina com autenticidade e ousadia,
                sem abrir mão da sofisticação.
              </p>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                Do crochê artesanal que evoca a brisa do litoral ao brilho que ilumina
                a noite, nossa curadoria une tendências globais à elegância brasileira.
              </p>
            </div>

            {/* Decorative stitch */}
            <div className="mb-8">
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="text-primary/25">
                <path d="M0 12 C10 4, 20 20, 30 12 C40 4, 50 20, 60 12 C70 4, 80 20, 90 12 C100 4, 110 20, 120 12" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="0" cy="12" r="2" fill="currentColor" />
                <circle cx="60" cy="12" r="2" fill="currentColor" />
                <circle cx="120" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>

            <a href="#" className="font-body text-[10px] tracking-[0.25em] uppercase text-foreground border-b border-foreground/30 hover:border-primary hover:text-primary pb-1 transition-colors duration-300">
              Conheça nossa história
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
