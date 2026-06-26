import React, { useState } from "react";
import { DESTINATIONS_DATA } from "../data";
import { Destination } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Calendar, ArrowRight, X, Sparkles, Check, Heart } from "lucide-react";

interface FeaturedDestinationsProps {
  onPlanTrip: (destinationName: string) => void;
}

export default function FeaturedDestinations({ onPlanTrip }: FeaturedDestinationsProps) {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "inquire">("overview");
  
  // Dynamic Inquiry Options
  const [numTravelers, setNumTravelers] = useState(2);
  const [tier, setTier] = useState<"standard" | "royal">("standard");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Favorites/Wishlist list
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("bharat_dest_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = (destId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = favorites.includes(destId)
      ? favorites.filter((id) => id !== destId)
      : [...favorites, destId];
    setFavorites(next);
    localStorage.setItem("bharat_dest_favorites", JSON.stringify(next));
  };

  const handleOpenDetails = (dest: Destination) => {
    setSelectedDest(dest);
    setActiveTab("overview");
    setIsSubmitted(false);
  };

  const calculateTotalPrice = (basePrice: number) => {
    const tierMultiplier = tier === "royal" ? 1.4 : 1.0;
    return Math.round(basePrice * numTravelers * tierMultiplier);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;

    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close or reset after some seconds
    }, 4000);
  };

  return (
    <section id="destinations" className="bg-warm-sand py-24 relative overflow-hidden">
      <div className="jali-overlay absolute inset-0"></div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-deep-saffron font-bold text-xs tracking-widest uppercase mb-4 block">
            Featured Destinations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-royal-indigo font-bold mb-4">
            Curated Journeys
          </h2>
          <p className="text-on-surface-variant font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Handpicked journeys that define the essence of modern heritage travel across the Indian subcontinent.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS_DATA.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleOpenDetails(dest)}
              className="bg-white border border-royal-indigo/10 group rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between"
            >
              <div className="h-72 md:h-80 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={dest.imageUrl}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-deep-saffron text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow">
                  {dest.category}
                </div>
                <button
                  onClick={(e) => toggleFavorite(dest.id, e)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-primary p-1.5 rounded-full shadow transition-all duration-200 cursor-pointer"
                  aria-label="Favorite"
                >
                  <Heart
                    className={`w-4 h-4 ${favorites.includes(dest.id) ? "fill-primary text-primary" : "text-gray-600"}`}
                  />
                </button>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl md:text-2xl text-royal-indigo font-bold mb-2 group-hover:text-primary transition-colors">
                    {dest.name}
                  </h4>
                  <p className="text-on-surface-variant font-sans text-xs md:text-sm mb-6 leading-relaxed">
                    {dest.tagline}. Discover magnificent heritage, authentic experiences, and curated leisure.
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Starting From</span>
                    <span className="text-primary font-bold text-lg">${dest.price.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => handleOpenDetails(dest)}
                    className="flex items-center text-royal-indigo font-bold text-xs group-hover:text-deep-saffron transition-colors gap-1.5 cursor-pointer"
                  >
                    DETAILS <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail & Booking Modal */}
      <AnimatePresence>
        {selectedDest && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
            >
              {/* Left Column: Image and Summary */}
              <div className="md:w-5/12 bg-royal-indigo text-white relative flex flex-col">
                <div className="h-64 md:h-80 lg:h-96 relative">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedDest.imageUrl}
                    alt={selectedDest.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-indigo via-royal-indigo/35 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-deep-saffron text-white text-[10px] font-bold px-2.5 py-1 uppercase rounded-sm mb-2 inline-block">
                      {selectedDest.category}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
                      {selectedDest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-royal-indigo">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-orange-300" />
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase font-semibold">Duration</p>
                        <p className="text-sm font-semibold">{selectedDest.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-orange-300" />
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase font-semibold">Best Time To Visit</p>
                        <p className="text-sm font-semibold">{selectedDest.bestTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-semibold">Base Price</p>
                      <p className="text-xl font-bold text-orange-300">${selectedDest.price.toLocaleString()} <span className="text-xs text-white/70">/ person</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Tabbed Content */}
              <div className="md:w-7/12 p-6 md:p-8 flex flex-col relative justify-between bg-white max-h-[85vh] md:max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setSelectedDest(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-black p-2 rounded-full cursor-pointer z-10"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>

                <div>
                  {/* Tabs Selector */}
                  <div className="flex border-b border-gray-100 mb-6 gap-6 pt-2">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`pb-3 text-xs md:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
                        activeTab === "overview"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      OVERVIEW
                    </button>
                    <button
                      onClick={() => setActiveTab("itinerary")}
                      className={`pb-3 text-xs md:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
                        activeTab === "itinerary"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      ITINERARY
                    </button>
                    <button
                      onClick={() => setActiveTab("inquire")}
                      className={`pb-3 text-xs md:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
                        activeTab === "inquire"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      BOOKING ESTIMATE
                    </button>
                  </div>

                  {/* Tab 1: Overview */}
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                        {selectedDest.description}
                      </p>

                      <div>
                        <h4 className="text-royal-indigo font-bold text-sm uppercase tracking-wider mb-3">
                          Signature Experiences Included:
                        </h4>
                        <ul className="space-y-3">
                          {selectedDest.activities.map((act, idx) => (
                            <li key={idx} className="flex gap-2.5 items-start text-xs md:text-sm text-on-surface-variant font-medium">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Itinerary */}
                  {activeTab === "itinerary" && (
                    <div className="space-y-6">
                      {selectedDest.itineraryDays.map((day) => (
                        <div key={day.day} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <span className="bg-primary text-white font-mono text-xs w-8 h-8 rounded-full flex items-center justify-center font-bold">
                              D{day.day}
                            </span>
                            <div className="w-0.5 bg-amber-100 flex-1 mt-2"></div>
                          </div>
                          <div className="pb-4">
                            <h5 className="font-serif text-base text-royal-indigo font-bold mb-1">
                              {day.title}
                            </h5>
                            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                              {day.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tab 3: Custom Inquiry / Price Calculator */}
                  {activeTab === "inquire" && (
                    <div className="space-y-6">
                      {!isSubmitted ? (
                        <form onSubmit={handleInquirySubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 bg-amber-50/50 p-4 rounded border border-amber-100">
                            <div>
                              <label className="text-[10px] text-gray-400 uppercase font-bold tracking-wide block mb-1">
                                Guests
                              </label>
                              <select
                                value={numTravelers}
                                onChange={(e) => setNumTravelers(Number(e.target.value))}
                                className="w-full text-xs px-2 py-1.5 border border-amber-100 rounded focus:outline-none focus:border-primary text-gray-800 bg-white"
                              >
                                {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                                  <option key={num} value={num}>
                                    {num} {num === 1 ? "Traveler" : "Travelers"}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="text-[10px] text-gray-400 uppercase font-bold tracking-wide block mb-1">
                                Service Tier
                              </label>
                              <select
                                value={tier}
                                onChange={(e) => setTier(e.target.value as "standard" | "royal")}
                                className="w-full text-xs px-2 py-1.5 border border-amber-100 rounded focus:outline-none focus:border-primary text-gray-800 bg-white"
                              >
                                <option value="standard">Standard Heritage</option>
                                <option value="royal">Royal Palace Upgrade (+40%)</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-100">
                            <span className="text-xs font-semibold text-gray-600">Estimated Total:</span>
                            <span className="text-primary font-bold text-lg">
                              ${calculateTotalPrice(selectedDest.price).toLocaleString()}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">
                                Full Name
                              </label>
                              <input
                                type="text"
                                required
                                placeholder="Your full name"
                                value={inquiryName}
                                onChange={(e) => setInquiryName(e.target.value)}
                                className="w-full text-xs px-3 py-2.5 border border-gray-200 focus:outline-none focus:border-primary rounded"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">
                                Email Address
                              </label>
                              <input
                                type="email"
                                required
                                placeholder="name@domain.com"
                                value={inquiryEmail}
                                onChange={(e) => setInquiryEmail(e.target.value)}
                                className="w-full text-xs px-3 py-2.5 border border-gray-200 focus:outline-none focus:border-primary rounded"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-primary hover:bg-orange-800 text-white text-xs font-bold py-3 uppercase tracking-wider rounded transition-colors cursor-pointer"
                          >
                            Send Luxury Inquiry
                          </button>
                        </form>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-emerald-50 border border-emerald-100 p-6 rounded text-center space-y-3"
                        >
                          <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                            <Check className="w-6 h-6" />
                          </div>
                          <h4 className="font-serif text-lg text-emerald-800 font-bold">
                            Inquiry Transmitted
                          </h4>
                          <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                            Thank you, <strong>{inquiryName}</strong>. Our royal concierge desk has registered your requested parameters and will compile a bespoke travel dossier for you within 4 hours.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Permanent Actions in Modal */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex gap-4">
                  <button
                    onClick={() => {
                      onPlanTrip(selectedDest.name);
                      setSelectedDest(null);
                    }}
                    className="flex-1 bg-royal-indigo hover:bg-primary text-white text-xs font-bold py-3 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-orange-300" />
                    Customize & Add to Trip Planner
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
