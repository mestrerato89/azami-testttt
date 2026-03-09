import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import model01 from "@/assets/model-01.jpg";
import model06 from "@/assets/model-06.jpg";
import model07 from "@/assets/model-07.jpg";
import model08 from "@/assets/model-08.jpg";
import model09 from "@/assets/model-09.jpg";

const bestSellers = [
  { name: "Vestido Glow Dourado", price: "R$ 399,90", image: model01 },
  { name: "Conjunto Praia Luxe", price: "R$ 279,90", image: model06 },
  { name: "Body Recorte Minimal", price: "R$ 189,90", image: model07 },
  { name: "Saia Brilho Noturno", price: "R$ 259,90", image: model08 },
  { name: "Top Crochê Dourado", price: "R$ 159,90", image: model09 },
];

const BestSellers = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % bestSellers.length);
  const prev = () => setCurrent((c) => (c - 1 + bestSellers.length) % bestSellers.length);

  return (
    <section id="bestsellers" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Header with nav arrows */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-3">
              Mais Desejadas
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Best Sellers
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${current * (100 / 3)}%` }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex gap-4 md:gap-6"
          >
            {bestSellers.map((product, i) => (
              <div
                key={product.name}
                className="min-w-[70vw] sm:min-w-[45vw] md:min-w-[calc(33.333%-16px)] flex-shrink-0 group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Rank badge */}
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1">
                    <span className="font-display text-lg text-primary">#{i + 1}</span>
                  </div>
                  <div className="absolute inset-0 border border-border/50 group-hover:border-primary/20 transition-colors" />
                </div>
                <h3 className="font-body text-sm text-foreground font-light mb-1">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-foreground font-medium">
                  {product.price}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {bestSellers.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-4 bg-border"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
