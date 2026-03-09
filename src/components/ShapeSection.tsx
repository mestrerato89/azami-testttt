import { motion } from "framer-motion";
import model01 from "@/assets/model-01.jpg";

const ShapeSection = () => {
  return (
    <section className="relative bg-[hsl(0_0%_3%)] text-[hsl(30_15%_92%)] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Image side — full bleed */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[3/4] md:aspect-auto overflow-hidden"
        >
          <img
            src={model01}
            alt="O Shape que esculpe — caimento perfeito"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(0_0%_3%)] hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_3%)] to-transparent md:hidden" />
        </motion.div>

        {/* Text side */}
        <div className="flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-body text-[10px] tracking-[0.5em] uppercase text-primary mb-5"
            >
              O Diferencial
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-8"
            >
              O Shape
              <br />
              que{" "}
              <span className="italic text-gold-gradient">Esculpe</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-xs md:text-sm text-[hsl(30_8%_55%)] leading-relaxed mb-6"
            >
              Cada peça é projetada para acompanhar e valorizar as curvas do corpo feminino. 
              Modelagem ergonômica, tecidos com elasticidade controlada e recortes que criam 
              linhas de silhueta impecáveis.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-xs md:text-sm text-[hsl(30_8%_55%)] leading-relaxed mb-10"
            >
              O caimento perfeito não é acidente — é engenharia de moda com alma brasileira.
            </motion.p>

            {/* Decorative stitch line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-10"
            >
              <svg width="120" height="2" viewBox="0 0 120 2" className="text-primary/30">
                {[0, 12, 24, 36, 48, 60, 72, 84, 96, 108].map((x) => (
                  <rect key={x} x={x} y="0" width="8" height="1" fill="currentColor" />
                ))}
              </svg>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              href="#"
              className="inline-block font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-300 hover:shadow-gold"
            >
              Explorar Peças Shape
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapeSection;
