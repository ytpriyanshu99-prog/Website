import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, X, Check, Users } from "lucide-react";
import { FESTIVALS_DATA, EXPERTS_DATA } from "../data";
import { Festival } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface FestivalsCarouselProps {
  onPlanTrip: (festName: string) => void;
}

export default function FestivalsCarousel({ onPlanTrip }: FestivalsCarouselProps) {
  const [activeBookFest, setActiveBookFest] = useState<Festival | null>(null);
  const [selectedExpertId, setSelectedExpertId] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  const handleBookGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExpertId) return;
    setBookingConfirmed(true);
  };

  // Map each festival to a matching expert recommendation
  const getExpertForFestival = (festId: string) => {
    if (festId === "pushkar") return EXPERTS_DATA[0]; // Vikram
    if (festId === "holi-mathura") return EXPERTS_DATA[1]; // Priya
    return EXPERTS_DATA[3]; // Rohan (Hornbill)
  };

  return (
    <section id="festivals" className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <span className="text-deep-saffron font-bold text-xs tracking-widest uppercase mb-4 block">
            Upcoming Festivals
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-royal-indigo font-bold">
            Subcontinent Festivities
          </h2>
        </div>
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="w-11 h-11 border border-gray-200 flex items-center justify-center rounded-full hover:bg-royal-indigo hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-11 h-11 border border-gray-200 flex items-center justify-center rounded-full hover:bg-royal-indigo hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroller Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 scroll-smooth"
      >
        {FESTIVALS_DATA.map((fest) => {
          const recommendedExpert = getExpertForFestival(fest.id);
          return (
            <div
              key={fest.id}
              className="min-w-[340px] md:min-w-[420px] max-w-[420px] bg-amber-50/40 border border-amber-100 rounded-lg overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="h-60 md:h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover"
                    src={fest.imageUrl}
                    alt={fest.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 text-royal-indigo text-[10px] font-bold px-3 py-1 uppercase rounded tracking-wide shadow flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-primary" /> {fest.location}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-wider mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{fest.date}</span>
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-royal-indigo font-bold mb-3">
                    {fest.name}
                  </h4>
                  <p className="text-on-surface-variant font-sans text-xs md:text-sm leading-relaxed mb-6">
                    {fest.description}
                  </p>

                  <div className="bg-white/80 p-3 rounded border border-orange-100 mb-2">
                    <p className="text-[10px] text-orange-800 font-bold uppercase tracking-wide mb-1">
                      Insider Travel Tip:
                    </p>
                    <p className="text-xs text-on-surface-variant font-medium italic">
                      "{fest.tips[0]}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex gap-3">
                <button
                  onClick={() => {
                    setActiveBookFest(fest);
                    setSelectedExpertId(recommendedExpert.id);
                    setBookingConfirmed(false);
                  }}
                  className="flex-1 bg-royal-indigo hover:bg-primary text-white text-xs font-bold py-3 uppercase tracking-wider rounded transition-colors text-center cursor-pointer"
                >
                  BOOK GUIDE
                </button>
                <button
                  onClick={() => onPlanTrip(fest.name)}
                  className="px-4 bg-amber-100 hover:bg-amber-200 text-primary font-bold text-xs rounded transition-colors"
                  title="Add to itinerary planner"
                >
                  + Add
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Book Guide Overlay Modal */}
      <AnimatePresence>
        {activeBookFest && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-lg shadow-2xl max-w-lg w-full overflow-hidden"
            >
              <div className="bg-royal-indigo text-white p-6 relative">
                <button
                  onClick={() => setActiveBookFest(null)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-[10px] uppercase text-orange-300 font-bold tracking-widest block mb-1">
                  Bespoke Guiding Reservation
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold">
                  {activeBookFest.name}
                </h3>
                <p className="text-xs text-white/85 mt-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {activeBookFest.date} | {activeBookFest.location}
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {!bookingConfirmed ? (
                  <form onSubmit={handleBookGuideSubmit} className="space-y-4">
                    {/* Select Expert Area */}
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-2">
                        Assigned Heritage Storyteller
                      </label>
                      <div className="space-y-3">
                        {EXPERTS_DATA.map((expert) => (
                          <label
                            key={expert.id}
                            className={`flex items-center gap-4 p-3 rounded-lg border cursor-pointer transition-all ${
                              selectedExpertId === expert.id
                                ? "bg-amber-50/50 border-primary"
                                : "border-gray-100 hover:bg-gray-50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="expert_select"
                              value={expert.id}
                              checked={selectedExpertId === expert.id}
                              onChange={() => setSelectedExpertId(expert.id)}
                              className="text-primary focus:ring-primary h-4 w-4"
                            />
                            <img
                              className="w-12 h-12 rounded-full object-cover"
                              src={expert.imageUrl}
                              alt={expert.name}
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <p className="text-xs font-bold text-royal-indigo">
                                {expert.name}
                              </p>
                              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                                {expert.role}
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Guest Selection */}
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-2 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> Group Size
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full text-xs px-2 py-2 border border-gray-100 rounded bg-white text-gray-800 focus:outline-none focus:border-primary font-medium"
                      >
                        {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"} (Private Tour)
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-orange-800 text-white text-xs font-bold py-3 uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Confirm Guide Booking
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
                      Reservation Secured
                    </h4>
                    <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                      Excellent! Your booking of <strong>{EXPERTS_DATA.find((e) => e.id === selectedExpertId)?.name}</strong> for the <strong>{activeBookFest.name}</strong> has been secured for <strong>{guestCount} guests</strong>.
                    </p>
                    <p className="text-[10px] text-emerald-600 bg-white inline-block px-3 py-1 rounded font-bold border border-emerald-100 mt-2">
                      Check your email for confirmation and preparation guidelines.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
