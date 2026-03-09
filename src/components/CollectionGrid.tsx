import { motion } from "framer-motion";
import model02 from "@/assets/model-02.jpg";
import model03 from "@/assets/model-03.jpg";
import model04 from "@/assets/model-04.jpg";
import model05 from "@/assets/model-05.jpg";
import model06 from "@/assets/model-06.jpg";
import model07 from "@/assets/model-07.jpg";

const collections = [
  {
    title: "Beach Luxe",
    subtitle: "Crochê & Praia",
    image: model03,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Night Glow",
    subtitle: "Brilho & Eventos",
    image: model05,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Street Chic",
    subtitle: "Urbano & Ousado",
    image: model04,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Cut-Outs",
    subtitle: "Recortes Estratégicos",
    image: model06,
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Shape & Form",
    subtitle: "Caimento Perfeito",
    image: model02,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Golden Hour",
    subtitle: "Edição Limitada",
    image: model07,
    span: "md:col-span-1 md:row-span-1",
  },
];

const CollectionGrid = () => {
  return (
    <section id="colecoes" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-3">
            Curadoria
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Coleções
          </h2>
          {/* Gold line accent */}
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[280px] md:auto-rows-[320px]">
          {collections.map((col, i) => (
            <motion.a
              key={col.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${col.span}`}
            >
              {/* Image */}
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500" />

              {/* Bottom gradient for text */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent" />

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-primary/80 mb-1">
                  {col.subtitle}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground font-light">
                  {col.title}
                </h3>

                {/* Hover reveal line */}
                <div className="w-0 group-hover:w-8 h-px bg-primary mt-3 transition-all duration-500" />
              </div>

              {/* Subtle border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 transition-colors duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
