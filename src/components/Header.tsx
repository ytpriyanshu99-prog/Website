import React, { useState } from "react";
import { Globe, Search, User, Compass, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenPlanner: () => void;
  onSearch: (term: string) => void;
}

export default function Header({ onOpenPlanner, onSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [lang, setLang] = useState("EN");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchVal);
    setSearchOpen(false);
  };

  const navLinks = [
    { name: "Destinations", href: "#destinations" },
    { name: "Culture", href: "#culture" },
    { name: "Festivals", href: "#festivals" },
    { name: "Hidden Gems", href: "#wonders" },
    { name: "Experts", href: "#experts" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm h-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center h-full">
        {/* Left Side: Brand & Links */}
        <div className="flex items-center gap-12">
          <a
            href="#"
            className="font-serif text-2xl font-bold tracking-tight text-primary flex items-center gap-2"
          >
            BharatVoyage
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Language, Search, Profile & Buttons */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-on-surface-variant">
            {/* Language Selector */}
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
              <span className="text-xs font-semibold">{lang}</span>
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-100 shadow-lg rounded-md hidden group-hover:block w-24 overflow-hidden">
                {["EN", "FR", "DE", "HI"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-orange-50 hover:text-primary transition-colors font-medium"
                  >
                    {l === "EN" ? "English" : l === "FR" ? "Français" : l === "DE" ? "Deutsch" : "हिन्दी"}
                  </button>
                ))}
              </div>
            </div>

            {/* Inline Search Toggle */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:text-primary transition-all p-1"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.form
                    initial={{ opacity: 0, scale: 0.9, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -5 }}
                    onSubmit={handleSearchSubmit}
                    className="absolute right-0 top-full mt-2 bg-white border border-gray-100 p-2 shadow-xl rounded-md flex items-center gap-2 w-72"
                  >
                    <input
                      type="text"
                      placeholder="Type destination, state..."
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      className="text-xs px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary flex-1 rounded"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white text-xs px-3 py-2 rounded font-medium hover:bg-orange-800 transition-colors"
                    >
                      Search
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile Info */}
            <button
              onClick={onOpenPlanner}
              className="hover:text-primary transition-all p-1 flex items-center gap-1.5"
              title="My Itineraries"
            >
              <User className="w-5 h-5" />
              <span className="text-xs font-semibold hidden xl:inline">My Trips</span>
            </button>
          </div>

          <button
            onClick={onOpenPlanner}
            className="hidden sm:flex items-center gap-1.5 text-royal-indigo font-medium text-xs border border-royal-indigo/20 px-4 py-2 hover:bg-royal-indigo/5 transition-all"
          >
            <Compass className="w-4 h-4 text-deep-saffron" />
            Itineraries
          </button>

          <button
            onClick={onOpenPlanner}
            className="bg-deep-saffron text-white text-xs font-medium px-6 py-2.5 shadow-sm hover:bg-orange-600 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Plan Your Trip
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-on-surface"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-on-surface-variant hover:text-primary font-medium text-sm py-1 border-b border-gray-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPlanner();
                  }}
                  className="text-royal-indigo font-medium text-xs flex items-center gap-1.5"
                >
                  <Compass className="w-4 h-4 text-deep-saffron" />
                  My Planned Trips
                </button>
                <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                  <Globe className="w-4 h-4 text-primary" />
                  Language: {lang}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
