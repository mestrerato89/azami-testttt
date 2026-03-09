import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import model02 from "@/assets/model-02.jpg";
import model03 from "@/assets/model-03.jpg";
import model05 from "@/assets/model-05.jpg";
import model09 from "@/assets/model-09.jpg";

const products = [
  {
    name: "Vestido Crochet Sunset",
    category: "Beach Luxe",
    price: "R$ 289,90",
    image: model03,
  },
  {
    name: "Conjunto Cut-Out Obsidian",
    category: "Night Glow",
    price: "R$ 349,90",
    image: model05,
  },
  {
    name: "Top Brilho Dourado",
    category: "Golden Hour",
    price: "R$ 179,90",
    image: model09,
  },
  {
    name: "Saia Shape Midi",
    category: "Street Chic",
    price: "R$ 229,90",
    image: model02,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="novidades" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-3">
              Em Destaque
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Novidades
            </h2>
          </div>
          <a
            href="#"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors border-b border-muted-foreground/30 hover:border-primary pb-0.5"
          >
            Ver tudo
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick actions on hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="w-8 h-8 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Favoritar"
                  >
                    <Heart size={14} />
                  </button>
                </div>

                {/* Add to bag bar */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <button className="w-full bg-primary text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase py-3 hover:bg-primary/90 transition-colors">
                    Adicionar à Sacola
                  </button>
                </div>

                {/* Thin border */}
                <div className="absolute inset-0 border border-border/50 group-hover:border-primary/20 transition-colors duration-300" />
              </div>

              {/* Product info */}
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-primary/70 mb-1">
                {product.category}
              </p>
              <h3 className="font-body text-sm text-foreground font-light leading-snug mb-1.5">
                {product.name}
              </h3>
              <p className="font-body text-sm text-foreground font-medium">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
