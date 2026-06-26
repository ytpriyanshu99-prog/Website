import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RegionalWonders from "./components/RegionalWonders";
import FeaturedDestinations from "./components/FeaturedDestinations";
import FestivalsCarousel from "./components/FestivalsCarousel";
import LivingArts from "./components/LivingArts";
import ExpertNetwork from "./components/ExpertNetwork";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import TripPlanner from "./components/TripPlanner";
import { Sparkles, RefreshCw, Star, Info, Compass } from "lucide-react";
import { DESTINATIONS_DATA } from "./data";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [preSelectedDest, setPreSelectedDest] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMonth, setSearchMonth] = useState("");

  const handleOpenPlannerWithDest = (destName?: string) => {
    setPreSelectedDest(destName);
    setPlannerOpen(true);
  };

  const handleSearchTrigger = (term: string, month?: string) => {
    setSearchQuery(term);
    if (month) setSearchMonth(month);
  };

  const handleResetSearch = () => {
    setSearchQuery("");
    setSearchMonth("");
  };

  // Filter logic for showcased results if they search
  const filteredDestinations = DESTINATIONS_DATA.filter((dest) => {
    const matchesTerm =
      !searchQuery ||
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMonth =
      !searchMonth ||
      searchMonth === "all" ||
      dest.bestTime.toLowerCase().includes(searchMonth.toLowerCase());

    return matchesTerm && matchesMonth;
  });

  return (
    <div className="min-h-screen bg-warm-sand/20 font-sans text-on-surface antialiased overflow-x-hidden">
      {/* High-fidelity Navigation Header */}
      <Header
        onOpenPlanner={() => handleOpenPlannerWithDest()}
        onSearch={(term) => handleSearchTrigger(term)}
      />

      {/* Hero Cinematic Section */}
      <Hero onSearch={handleSearchTrigger} />

      {/* Dynamic Search / Filtering Feedback Strip */}
      <AnimatePresence>
        {(searchQuery || (searchMonth && searchMonth !== "all")) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-amber-50 border-b border-amber-100 py-4 px-6 relative z-30"
          >
            <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-royal-indigo">
                <Compass className="w-5 h-5 text-primary animate-spin-slow" />
                <span>
                  Filtering custom expeditions matching:{" "}
                  {searchQuery && (
                    <span className="bg-white px-2.5 py-1 rounded border border-amber-100 text-primary">
                      "{searchQuery}"
                    </span>
                  )}
                  {searchMonth && searchMonth !== "all" && (
                    <span className="bg-white px-2.5 py-1 rounded border border-amber-100 text-primary ml-2">
                      Month: {searchMonth}
                    </span>
                  )}
                </span>
                <span className="text-gray-400 font-normal">
                  ({filteredDestinations.length} found)
                </span>
              </div>
              <button
                onClick={handleResetSearch}
                className="text-xs font-bold text-primary hover:text-royal-indigo flex items-center gap-1 cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Clear Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional Filtered Results Area (replaces standard Featured if filtered) */}
      {searchQuery || (searchMonth && searchMonth !== "all") ? (
        <section className="bg-warm-sand py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-[1440px] mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-royal-indigo mb-8">
              Search Results
            </h3>
            {filteredDestinations.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-lg border border-gray-100 max-w-2xl mx-auto space-y-4">
                <Info className="w-12 h-12 mx-auto text-amber-500" />
                <h4 className="font-serif text-xl font-bold text-royal-indigo">
                  No Direct Curated Match
                </h4>
                <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  While we don't have a pre-curated catalog matching "{searchQuery}" at this exact second, you can plan and customize a bespoke route instantly in our custom planner!
                </p>
                <button
                  onClick={() => handleOpenPlannerWithDest(searchQuery)}
                  className="bg-primary text-white text-xs font-bold px-6 py-3 rounded uppercase tracking-wider hover:bg-orange-800 transition-colors cursor-pointer"
                >
                  Create Custom "{searchQuery}" Route
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => handleOpenPlannerWithDest(dest.name)}
                    className="bg-white border border-royal-indigo/10 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div className="h-64 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={dest.imageUrl}
                        alt={dest.name}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-deep-saffron text-white text-[10px] font-bold px-3 py-1 uppercase rounded-sm">
                        {dest.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-serif text-lg font-bold text-royal-indigo mb-1">
                        {dest.name}
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                        {dest.tagline}
                      </p>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                        <span className="text-primary font-bold text-sm">
                          ${dest.price} <span className="text-[10px] font-normal text-gray-400">/ traveler</span>
                        </span>
                        <span className="text-xs font-bold text-royal-indigo hover:text-primary flex items-center gap-1">
                          Plan Journey ★
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : null}

      {/* Featured Curated Journeys Section */}
      <FeaturedDestinations onPlanTrip={handleOpenPlannerWithDest} />

      {/* Regional Wonders State Map Bento Grid */}
      <RegionalWonders onPlanTrip={handleOpenPlannerWithDest} />

      {/* Subcontinent Festivities Horizontal Carousel */}
      <FestivalsCarousel onPlanTrip={handleOpenPlannerWithDest} />

      {/* The Living Arts & Craft Preservation Showcase */}
      <LivingArts />

      {/* Expert Networks list with simulated Consulting Live Chat console */}
      <ExpertNetwork />

      {/* Stories subscription newsletter block */}
      <Newsletter />

      {/* Global Brand Footer */}
      <Footer />

      {/* Slide-out Offline-first Itinerary Drawer Planner */}
      <TripPlanner
        isOpen={plannerOpen}
        onClose={() => setPlannerOpen(false)}
        defaultDestinationName={preSelectedDest}
      />
    </div>
  );
}
