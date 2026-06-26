import React, { useState, useEffect } from "react";
import { X, Calendar, Users, FileText, Trash2, CheckCircle, HelpCircle, Compass, Sparkles, AlertCircle } from "lucide-react";
import { DESTINATIONS_DATA } from "../data";
import { ItineraryItem } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface TripPlannerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestinationName?: string;
}

export default function TripPlanner({ isOpen, onClose, defaultDestinationName }: TripPlannerProps) {
  const [trips, setTrips] = useState<ItineraryItem[]>([]);
  const [selectedDestId, setSelectedDestId] = useState("");
  const [customDestName, setCustomDestName] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [guestsCount, setGuestsCount] = useState(2);
  const [notes, setNotes] = useState("");
  const [bookedSuccess, setBookedSuccess] = useState(false);

  // Load planned trips
  useEffect(() => {
    try {
      const saved = localStorage.getItem("bharat_itineraries");
      if (saved) setTrips(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }, [isOpen]);

  // Handle default destination parameter when opened from outside
  useEffect(() => {
    if (defaultDestinationName) {
      const match = DESTINATIONS_DATA.find(
        (d) => d.name.toLowerCase().includes(defaultDestinationName.toLowerCase())
      );
      if (match) {
        setSelectedDestId(match.id);
        setCustomDestName("");
      } else {
        setSelectedDestId("custom");
        setCustomDestName(defaultDestinationName);
      }
    }
  }, [defaultDestinationName, isOpen]);

  const handleSaveTrip = (e: React.FormEvent) => {
    e.preventDefault();

    let destName = "";
    if (selectedDestId === "custom") {
      destName = customDestName || "Custom Expedition";
    } else {
      const match = DESTINATIONS_DATA.find((d) => d.id === selectedDestId);
      destName = match ? match.name : "Curated Expedition";
    }

    if (!travelDate) return;

    const newTrip: ItineraryItem = {
      id: "trip_" + Date.now(),
      destinationId: selectedDestId,
      destinationName: destName,
      date: travelDate,
      notes: notes,
      travelersCount: guestsCount,
    };

    const nextTrips = [newTrip, ...trips];
    setTrips(nextTrips);
    localStorage.setItem("bharat_itineraries", JSON.stringify(nextTrips));

    // Reset inputs
    setTravelDate("");
    setNotes("");
    setCustomDestName("");
  };

  const handleDeleteTrip = (id: string) => {
    const nextTrips = trips.filter((t) => t.id !== id);
    setTrips(nextTrips);
    localStorage.setItem("bharat_itineraries", JSON.stringify(nextTrips));
  };

  const getEstimatedPrice = (trip: ItineraryItem) => {
    const match = DESTINATIONS_DATA.find((d) => d.id === trip.destinationId);
    const base = match ? match.price : 1500; // default base price for custom
    return base * trip.travelersCount;
  };

  const handleSimulateCheckout = () => {
    setBookedSuccess(true);
    setTimeout(() => {
      setBookedSuccess(false);
      setTrips([]);
      localStorage.removeItem("bharat_itineraries");
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black cursor-pointer"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-full max-w-lg bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="bg-royal-indigo text-white p-6 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-orange-300 animate-spin-slow" />
                <div>
                  <h3 className="font-serif text-lg font-bold">Heritage Trip Planner</h3>
                  <p className="text-[10px] text-orange-200 uppercase tracking-widest font-semibold">
                    Curate your custom subcontinent itinerary
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inner Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {bookedSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 p-8 rounded text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl text-emerald-800 font-bold">
                    Itinerary Dispatched!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                    Splendid! Your structured heritage schedule has been compiled into a high-end diplomatic travel proposal and transmitted to our elite local naturalists.
                  </p>
                  <p className="text-[10px] text-emerald-600 bg-white inline-block px-3 py-1.5 rounded font-bold border border-emerald-100 mt-2">
                    Check your inbox within 2 hours for boarding credentials.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Part 1: Add/Schedule a Trip Form */}
                  <form onSubmit={handleSaveTrip} className="space-y-4 bg-orange-50/30 p-4 rounded-lg border border-orange-100">
                    <h4 className="text-xs font-bold uppercase text-primary tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Schedule New Itinerary
                    </h4>

                    {/* Destination Selection */}
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">
                        Select Destination
                      </label>
                      <select
                        value={selectedDestId}
                        onChange={(e) => setSelectedDestId(e.target.value)}
                        className="w-full text-xs px-2.5 py-2 border border-gray-200 focus:outline-none focus:border-primary rounded bg-white text-gray-800"
                        required
                      >
                        <option value="" disabled>-- Choose Curated Voyage --</option>
                        {DESTINATIONS_DATA.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name} (${d.price.toLocaleString()}/person)
                          </option>
                        ))}
                        <option value="custom">-- Custom Private Location --</option>
                      </select>
                    </div>

                    {selectedDestId === "custom" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-1"
                      >
                        <label className="text-[10px] text-gray-500 uppercase font-bold block">
                          Custom Location Name
                        </label>
                        <input
                          type="text"
                          value={customDestName}
                          onChange={(e) => setCustomDestName(e.target.value)}
                          placeholder="Ex: Leh Palace, Ladakh"
                          required
                          className="w-full text-xs px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary rounded"
                        />
                      </motion.div>
                    )}

                    {/* Date and Guests */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          value={travelDate}
                          onChange={(e) => setTravelDate(e.target.value)}
                          required
                          className="w-full text-xs px-3 py-1.5 border border-gray-200 focus:outline-none focus:border-primary rounded text-gray-800"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">
                          Guests
                        </label>
                        <select
                          value={guestsCount}
                          onChange={(e) => setGuestsCount(Number(e.target.value))}
                          className="w-full text-xs px-2 py-2 border border-gray-200 focus:outline-none focus:border-primary rounded bg-white text-gray-800"
                        >
                          {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "Traveler" : "Travelers"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Custom Notes */}
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">
                        Bespoke Notes / Requests
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ex: Private dining, special anniversary setups, wheelchair assistance..."
                        rows={2}
                        className="w-full text-xs px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary rounded resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-orange-800 text-white text-xs font-bold py-2.5 uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Add To My Itinerary
                    </button>
                  </form>

                  {/* Part 2: Active Planned Itineraries */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase text-royal-indigo tracking-wider border-b border-gray-100 pb-2">
                      My Scheduled Expeditions ({trips.length})
                    </h4>

                    {trips.length === 0 ? (
                      <div className="text-center py-12 text-gray-400 space-y-2">
                        <Compass className="w-10 h-10 mx-auto text-gray-300 stroke-1" />
                        <p className="text-xs font-medium">No custom routes planned yet.</p>
                        <p className="text-[10px] text-gray-400">Add curated destinations or custom locations above to begin.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {trips.map((trip) => (
                          <div
                            key={trip.id}
                            className="bg-white border border-gray-100 rounded p-4 shadow-sm relative group hover:border-orange-200 transition-colors"
                          >
                            <button
                              onClick={() => handleDeleteTrip(trip.id)}
                              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-gray-50 cursor-pointer"
                              title="Remove schedule"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>

                            <h5 className="font-serif text-sm font-bold text-royal-indigo pr-6">
                              {trip.destinationName}
                            </h5>

                            <div className="mt-3 grid grid-cols-2 gap-y-2 text-xs text-on-surface-variant font-medium">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-primary" /> {trip.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5 text-primary" /> {trip.travelersCount} Travelers
                              </span>
                            </div>

                            {trip.notes && (
                              <div className="mt-2 bg-gray-50 p-2 rounded text-[10px] text-on-surface-variant flex gap-1 items-start">
                                <FileText className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                                <span className="italic">"{trip.notes}"</span>
                              </div>
                            )}

                            <div className="mt-3 pt-3 border-t border-dashed border-gray-100 flex justify-between items-center">
                              <span className="text-[10px] text-gray-400 font-bold uppercase">Estimated Premium Price</span>
                              <span className="text-xs font-bold text-primary">
                                ${getEstimatedPrice(trip).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Sticky Bottom Summary & simulated Checkout */}
            {trips.length > 0 && !bookedSuccess && (
              <div className="bg-gray-50 p-6 border-t border-gray-100 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-royal-indigo">Dossier Estimate ({trips.length} Routes)</span>
                  <span className="font-serif text-lg font-bold text-primary">
                    ${trips.reduce((acc, t) => acc + getEstimatedPrice(t), 0).toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleSimulateCheckout}
                  className="w-full bg-royal-indigo hover:bg-primary text-white text-xs font-bold py-3.5 uppercase tracking-widest rounded transition-colors text-center shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-orange-200 animate-pulse" /> Confirm Curated Journey
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
