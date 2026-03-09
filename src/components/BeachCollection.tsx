import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import model02 from "@/assets/model-02.jpg";
import model03 from "@/assets/model-03.jpg";
import model04 from "@/assets/model-04.jpg";
import model06 from "@/assets/model-06.jpg";

const beachProducts = [
  { name: "Vestido Crochet Sunset", price: "R$ 289,90", image: model03 },
  { name: "Saída de Praia Riviera", price: "R$ 239,90", image: model06 },
  { name: "Conjunto Crochê Dourado", price: "R$ 319,90", image: model02 },
  { name: "Biquíni Shape Bronze", price: "R$ 199,90", image: model04 },
];

const BeachCollection = () => {
  return (
    <section
      id="beach"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "hsl(33 25% 93%)" }}
    >
      {/* Subtle wave texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600">
          <path d="M0 300 Q360 200 720 300 T1440 300 V600 H0Z" fill="hsl(38 55% 55%)" />
          <path d="M0 350 Q360 250 720 350 T1440 350 V600 H0Z" fill="hsl(38 55% 55%)" opacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] tracking-[0.5em] uppercase text-primary mb-4"
          >
            Coleção Praia
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight"
          >
            Beach <span className="italic text-gold-gradient">Luxe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-xs text-muted-foreground mt-5 max-w-md mx-auto leading-relaxed"
          >
            Texturas artesanais de crochê banhadas pela luz natural. Peças que capturam a essência da brisa litorânea com sofisticação.
          </motion.p>
        </div>

        {/* Product grid — clean 2x2 on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {beachProducts.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[hsl(33_20%_88%)]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Favorite */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Favoritar">
                    <Heart size={14} />
                  </button>
                </div>

                {/* Quick buy */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <button className="w-full bg-primary text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase py-3 hover:bg-primary/90 transition-colors">
                    Ver Disponibilidade
                  </button>
                </div>

                <div className="absolute inset-0 border border-border/30 group-hover:border-primary/20 transition-colors duration-300" />
              </div>

              {/* Info */}
              <h3 className="font-body text-sm text-foreground font-light leading-snug mb-1.5">
                {product.name}
              </h3>
              <p className="font-body text-[11px] text-primary font-medium">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#"
            className="font-body text-[10px] tracking-[0.25em] uppercase text-foreground border-b border-foreground/30 hover:border-primary hover:text-primary pb-1 transition-colors duration-300"
          >
            Ver toda a coleção Praia
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeachCollection;
