import model01 from "@/assets/model-01.jpg";
import model02 from "@/assets/model-02.jpg";
import model03 from "@/assets/model-03.jpg";
import model04 from "@/assets/model-04.jpg";
import model05 from "@/assets/model-05.jpg";
import model06 from "@/assets/model-06.jpg";
import model07 from "@/assets/model-07.jpg";
import model08 from "@/assets/model-08.jpg";
import model09 from "@/assets/model-09.jpg";

export type ProductCategory = "night" | "beach" | "bestseller";
export type ProductSize = "P" | "M" | "G" | "GG";
export type ProductColor = "Preto" | "Branco" | "Champagne" | "Estampado";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory[];
  sizes: ProductSize[];
  colors: ProductColor[];
  image: string;
  imageHover: string;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Corset Brilho Noturno",
    price: 289,
    category: ["night", "bestseller"],
    sizes: ["P", "M", "G"],
    colors: ["Preto"],
    image: model01,
    imageHover: model02,
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Vestido Champagne Glow",
    price: 459,
    category: ["night"],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Champagne"],
    image: model03,
    imageHover: model04,
  },
  {
    id: "3",
    name: "Conjunto Crochê Areia",
    price: 349,
    category: ["beach", "bestseller"],
    sizes: ["P", "M", "G"],
    colors: ["Branco"],
    image: model05,
    imageHover: model06,
    isBestSeller: true,
  },
  {
    id: "4",
    name: "Saída de Praia Rendada",
    price: 199,
    category: ["beach"],
    sizes: ["M", "G", "GG"],
    colors: ["Branco", "Champagne"],
    image: model07,
    imageHover: model08,
  },
  {
    id: "5",
    name: "Top Corset Estruturado",
    price: 259,
    category: ["night", "bestseller"],
    sizes: ["P", "M", "G"],
    colors: ["Preto"],
    image: model09,
    imageHover: model01,
    isBestSeller: true,
  },
  {
    id: "6",
    name: "Vestido Midi Noite",
    price: 389,
    category: ["night"],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Champagne"],
    image: model02,
    imageHover: model03,
  },
  {
    id: "7",
    name: "Biquíni Crochê Pérola",
    price: 189,
    category: ["beach"],
    sizes: ["P", "M", "G"],
    colors: ["Branco", "Champagne"],
    image: model04,
    imageHover: model05,
  },
  {
    id: "8",
    name: "Saia Brilho Champagne",
    price: 279,
    category: ["night"],
    sizes: ["P", "M", "G"],
    colors: ["Champagne"],
    image: model06,
    imageHover: model07,
  },
  {
    id: "9",
    name: "Conjunto Beach Sunset",
    price: 319,
    category: ["beach", "bestseller"],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Estampado"],
    image: model08,
    imageHover: model09,
    isBestSeller: true,
  },
  {
    id: "10",
    name: "Body Corset Luxo",
    price: 329,
    category: ["night"],
    sizes: ["P", "M", "G"],
    colors: ["Preto"],
    image: model01,
    imageHover: model04,
  },
  {
    id: "11",
    name: "Vestido Longo Praia",
    price: 299,
    category: ["beach"],
    sizes: ["M", "G", "GG"],
    colors: ["Branco"],
    image: model05,
    imageHover: model02,
  },
  {
    id: "12",
    name: "Corset Pedrarias",
    price: 419,
    category: ["night", "bestseller"],
    sizes: ["P", "M"],
    colors: ["Preto", "Champagne"],
    image: model03,
    imageHover: model06,
    isBestSeller: true,
  },
];

export const formatPrice = (price: number) =>
  `R$ ${price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
