import { useState } from "react";
import { MapPin, X, Star, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { STATES_DATA } from "../data";
import { StateWonder } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface RegionalWondersProps {
  onPlanTrip: (destinationName: string) => void;
}

export default function RegionalWonders({ onPlanTrip }: RegionalWondersProps) {
  const [selectedState, setSelectedState] = useState<StateWonder | null>(null);
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("bharat_state_wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleWishlist = (stateId: string) => {
    const next = wishlist.includes(stateId)
      ? wishlist.filter((id) => id !== stateId)
      : [...wishlist, stateId];
    setWishlist(next);
    localStorage.setItem("bharat_state_wishlist", JSON.stringify(next));
  };

  const statesMap = STATES_DATA.reduce((acc, s) => {
    acc[s.id] = s;
    return acc;
  }, {} as Record<string, StateWonder>);

  return (
    <section id="wonders" className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-deep-saffron font-bold text-xs tracking-widest uppercase mb-4 block">
            Regional Wonders
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-royal-indigo font-bold">
            Explore by State
          </h2>
        </div>
        <button
          onClick={() => setSelectedState(STATES_DATA[0])}
          className="text-royal-indigo border-b border-royal-indigo font-semibold text-xs md:text-sm pb-1 hover:text-deep-saffron hover:border-deep-saffron transition-all cursor-pointer"
        >
          VIEW FEATURED STATE
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px]">
        {/* Rajasthan - Large Card (8 Cols) */}
        <div
          onClick={() => setSelectedState(statesMap.rajasthan)}
          className="lg:col-span-8 group relative overflow-hidden cursor-pointer h-[400px] lg:h-full rounded-lg shadow-md hover:shadow-2xl transition-all"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={statesMap.rajasthan.imageUrl}
            alt="Vibrant street scene of Hawa Mahal in Jaipur"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10"></div>
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <span className="bg-white/25 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 tracking-widest mb-3 inline-block rounded">
              {statesMap.rajasthan.region}
            </span>
            <h3 className="text-white font-serif text-3xl md:text-4xl mb-2 font-semibold flex items-center gap-2">
              {statesMap.rajasthan.name}
              {wishlist.includes(statesMap.rajasthan.id) && (
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              )}
            </h3>
            <p className="text-white/85 font-sans text-sm md:text-base max-w-lg leading-relaxed">
              {statesMap.rajasthan.description}
            </p>
          </div>
        </div>

        {/* Column of 2 Cards for Kerala and Himachal (4 Cols) */}
        <div className="lg:col-span-4 grid grid-rows-1 lg:grid-rows-2 gap-6 h-auto lg:h-full">
          {/* Kerala */}
          <div
            onClick={() => setSelectedState(statesMap.kerala)}
            className="group relative overflow-hidden cursor-pointer h-[300px] lg:h-full rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={statesMap.kerala.imageUrl}
              alt="Serene houseboat in Alleppey backwaters"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10"></div>
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 tracking-widest mb-2 inline-block rounded">
                {statesMap.kerala.region}
              </span>
              <h3 className="text-white font-serif text-2xl font-semibold flex items-center gap-2">
                {statesMap.kerala.name}
                {wishlist.includes(statesMap.kerala.id) && (
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                )}
              </h3>
            </div>
          </div>

          {/* Himachal */}
          <div
            onClick={() => setSelectedState(statesMap.himachal)}
            className="group relative overflow-hidden cursor-pointer h-[300px] lg:h-full rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={statesMap.himachal.imageUrl}
              alt="Buddhist monastery perched on cliff in Himalayas"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10"></div>
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 tracking-widest mb-2 inline-block rounded">
                {statesMap.himachal.region}
              </span>
              <h3 className="text-white font-serif text-2xl font-semibold flex items-center gap-2">
                {statesMap.himachal.name}
                {wishlist.includes(statesMap.himachal.id) && (
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                )}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal for Selected State */}
      <AnimatePresence>
        {selectedState && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64 md:h-80">
                <img
                  className="w-full h-full object-cover"
                  src={selectedState.imageUrl}
                  alt={selectedState.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <button
                  onClick={() => setSelectedState(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 md:left-8">
                  <span className="bg-orange-600 text-white text-xs font-semibold px-2.5 py-1 uppercase tracking-widest rounded mb-2 inline-block">
                    {selectedState.region}
                  </span>
                  <h3 className="text-white font-serif text-3xl md:text-4xl font-bold">
                    {selectedState.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-on-surface-variant leading-relaxed text-sm md:text-base mb-8">
                  {selectedState.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Cities List */}
                  <div>
                    <h4 className="font-serif text-lg text-royal-indigo font-bold border-b border-amber-100 pb-2 mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" /> Key Hubs & Cities
                    </h4>
                    <ul className="space-y-2">
                      {selectedState.cities.map((city) => (
                        <li key={city} className="flex items-center gap-2 text-sm font-semibold text-on-surface">
                          <CheckCircle2 className="w-4 h-4 text-emerald-green" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights List */}
                  <div>
                    <h4 className="font-serif text-lg text-royal-indigo font-bold border-b border-amber-100 pb-2 mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" /> Core Experiences
                    </h4>
                    <ul className="space-y-2">
                      {selectedState.highlights.map((highlight) => (
                        <li key={highlight} className="text-xs md:text-sm text-on-surface-variant font-medium flex items-start gap-2">
                          <span className="text-orange-500 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
                  <button
                    onClick={() => toggleWishlist(selectedState.id)}
                    className={`px-5 py-2.5 rounded text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                      wishlist.includes(selectedState.id)
                        ? "bg-amber-50 text-orange-600 border-orange-200"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        wishlist.includes(selectedState.id) ? "fill-orange-500 text-orange-500" : ""
                      }`}
                    />
                    {wishlist.includes(selectedState.id) ? "In Wishlist" : "Save to Wishlist"}
                  </button>

                  <button
                    onClick={() => {
                      onPlanTrip(selectedState.name);
                      setSelectedState(null);
                    }}
                    className="bg-royal-indigo hover:bg-primary text-white text-xs font-bold px-6 py-2.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    Design Itinerary
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
