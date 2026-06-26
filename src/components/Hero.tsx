import React, { useState } from "react";
import { Search, Calendar, Compass, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onSearch: (term: string, month?: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [travelMonth, setTravelMonth] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, travelMonth);
    // Smooth scroll down to destinations
    const destSection = document.getElementById("destinations");
    if (destSection) {
      destSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTrendingClick = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
    const destSection = document.getElementById("destinations");
    if (destSection) {
      destSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[800px] md:h-[921px] flex items-center justify-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/45 z-10"></div>
        <img
          className="w-full h-full object-cover select-none transform scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKlDQ5bOxlZOQHNuevz22VfLKPnOvXljXs6dAzoPd-1BZwhH52w_6a75_F_CTflHN46of0Xmv0ind8Tqk8SKle-en3Gs6KKnIfUcaCJkjAuevlCjLHbrih-RcFpaRpRa4thfpSWqc6MEqW-rrQ51NLeRRWvQiEtZBCXzep2CDTERNsEQaF0gPsoDVV-7ldp5r4Xziv-RJO-FNtiB2R4bD-_siLQXHUa7qfZahp3VQ37TGAAOc0XX4bUq0YvwT5Qr9ThXNywkn9yA"
          alt="Taj Mahal under golden dawn mist"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl px-6 md:px-12 w-full">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs md:text-sm font-semibold text-orange-200 tracking-widest uppercase mb-4 block"
        >
          ★ Experience the Extraordinary ★
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-white text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight text-shadow-hero font-semibold"
        >
          Where in India do you want to go?
        </motion.h1>

        {/* Floating Interactive Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white p-3 md:p-4 rounded-lg shadow-2xl max-w-3xl mx-auto border border-amber-100"
        >
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
              <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-none focus:ring-0 text-sm md:text-base text-on-surface bg-transparent focus:outline-none placeholder:text-gray-400 font-medium"
                placeholder="Search by destination or state..."
              />
            </div>

            {/* Travel Month Input */}
            <div className="flex-1 flex items-center px-4 py-2">
              <Calendar className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <select
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                className="w-full border-none focus:ring-0 text-sm md:text-base text-on-surface bg-transparent focus:outline-none placeholder:text-gray-400 font-medium cursor-pointer"
              >
                <option value="" disabled hidden>Month of travel</option>
                <option value="all" className="text-gray-800">Any Month</option>
                <option value="Oct" className="text-gray-800">October</option>
                <option value="Nov" className="text-gray-800">November</option>
                <option value="Dec" className="text-gray-800">December</option>
                <option value="Jan" className="text-gray-800">January</option>
                <option value="Feb" className="text-gray-800">February</option>
                <option value="Mar" className="text-gray-800">March</option>
                <option value="Apr" className="text-gray-800">April</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-royal-indigo hover:bg-primary text-white font-semibold text-sm tracking-wider px-8 py-4 transition-all duration-300 rounded flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              EXPLORE
            </button>
          </form>
        </motion.div>

        {/* Trending Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-white/80 font-medium text-xs md:text-sm"
        >
          <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-orange-300 fill-orange-300" /> Trending:</span>
          <button
            onClick={() => handleTrendingClick("Varanasi")}
            className="hover:text-deep-saffron underline underline-offset-4 cursor-pointer transition-colors"
          >
            Varanasi Ghats
          </button>
          <button
            onClick={() => handleTrendingClick("Himachal")}
            className="hover:text-deep-saffron underline underline-offset-4 cursor-pointer transition-colors"
          >
            Ladakh Treks
          </button>
          <button
            onClick={() => handleTrendingClick("Ranthambore")}
            className="hover:text-deep-saffron underline underline-offset-4 cursor-pointer transition-colors"
          >
            Kerala Backwaters
          </button>
        </motion.div>
      </div>
    </section>
  );
}
