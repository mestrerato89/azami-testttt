import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import model05 from "@/assets/model-05.jpg";
import model07 from "@/assets/model-07.jpg";
import model08 from "@/assets/model-08.jpg";
import model09 from "@/assets/model-09.jpg";

const nightProducts = [
  { name: "Corset Brilho Noir", price: "R$ 399,90", image: model05 },
  { name: "Vestido Glow Dourado", price: "R$ 449,90", image: model09 },
  { name: "Conjunto Cut-Out Obsidian", price: "R$ 349,90", image: model07 },
  { name: "Body Recorte Crystal", price: "R$ 289,90", image: model08 },
];

const NightCollection = () => {
  return (
    <section id="night" className="relative bg-[hsl(0_0%_4%)] text-[hsl(30_15%_92%)] py-24 md:py-36 overflow-hidden">
      {/* Ambient texture — subtle radial glow */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/40 to-transparent" />
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
            Coleção Noite
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-light leading-tight"
          >
            Night <span className="italic text-gold-gradient">Glow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-xs text-[hsl(30_8%_55%)] mt-5 max-w-md mx-auto leading-relaxed"
          >
            Peças que brilham sob as luzes da noite. Corsets estruturados, recortes estratégicos e texturas que capturam cada olhar.
          </motion.p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[260px] sm:auto-rows-[320px] md:auto-rows-[380px]">
          {nightProducts.map((product, i) => {
            // Asymmetric spans for visual movement
            const spanClasses = [
              "md:col-span-2 md:row-span-2",
              "md:col-span-2 md:row-span-1",
              "md:col-span-2 md:row-span-1",
              "md:col-span-2 md:row-span-1",
            ];
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`group relative cursor-pointer overflow-hidden ${spanClasses[i]}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_4%)/80] via-transparent to-transparent" />

                {/* Quick action */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-9 h-9 bg-[hsl(0_0%_4%)/70] backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Favoritar">
                    <Heart size={15} />
                  </button>
                </div>

                {/* Hover buy bar */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-20">
                  <button className="w-full bg-primary text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase py-3.5 hover:bg-primary/90 transition-colors">
                    Garantir meu Look
                  </button>
                </div>

                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10">
                  <h3 className="font-body text-xs md:text-sm text-[hsl(30_15%_92%)] font-light mb-1">
                    {product.name}
                  </h3>
                  <p className="font-body text-[11px] text-primary font-medium">
                    {product.price}
                  </p>
                </div>

                {/* Border hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 transition-colors duration-500 z-10" />
              </motion.div>
            );
          })}
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
            className="font-body text-[10px] tracking-[0.25em] uppercase text-primary border-b border-primary/30 hover:border-primary pb-1 transition-colors duration-300"
          >
            Ver toda a coleção Noite
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NightCollection;
