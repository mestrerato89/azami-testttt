import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, Heart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import azamiLogo from "@/assets/azami-logo.png";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Todos", href: "/produtos" },
  { label: "Night Out", href: "/produtos?cat=night" },
  { label: "Beach Chic", href: "/produtos?cat=beach" },
  { label: "Best Sellers", href: "/produtos?cat=bestseller" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[hsl(0_0%_4%)/95] backdrop-blur-md border-b border-[hsl(0_0%_15%)]"
          : "bg-transparent"
      }`}
    >
      {/* Announcement bar */}
      <div
        className={`text-center transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 py-0" : "max-h-10 py-1.5"
        } bg-primary/10`}
      >
        <p className="text-[9px] md:text-[10px] font-body tracking-[0.2em] uppercase text-primary whitespace-nowrap">
          Frete grátis acima de R$299
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-1"
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-body text-[10px] tracking-[0.25em] uppercase text-[hsl(30_15%_70%)] hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo — centered */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={azamiLogo}
              alt="AZAMI MODAS"
              className="h-7 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className="text-[hsl(30_15%_70%)] hover:text-primary transition-colors"
              aria-label="Buscar"
            >
              <Search size={16} />
            </button>
            <Link
              to="/conta"
              className="hidden md:block text-[hsl(30_15%_70%)] hover:text-primary transition-colors"
              aria-label="Minha Conta"
            >
              <User size={16} />
            </Link>
            <button
              className="hidden md:block text-[hsl(30_15%_70%)] hover:text-primary transition-colors"
              aria-label="Favoritos"
            >
              <Heart size={16} />
            </button>
            <button
              onClick={openCart}
              className="text-[hsl(30_15%_70%)] hover:text-primary transition-colors relative"
              aria-label="Sacola"
            >
              <ShoppingBag size={16} />
              <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[8px] font-body font-semibold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(0_0%_4%)] border-b border-[hsl(0_0%_12%)] overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-body text-xs tracking-[0.25em] uppercase text-[hsl(30_15%_70%)] hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/conta"
                className="font-body text-xs tracking-[0.25em] uppercase text-[hsl(30_15%_70%)] hover:text-primary transition-colors flex items-center gap-2"
              >
                <User size={14} />
                Minha Conta
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
