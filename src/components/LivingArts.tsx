import React, { useState } from "react";
import { Brush, Landmark, Compass, Clock, Check, X, Sparkles } from "lucide-react";
import { LIVING_ARTS_DATA } from "../data";
import { LivingArt } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function LivingArts() {
  const [selectedArt, setSelectedArt] = useState<LivingArt | null>(null);
  const [enrollConfirmed, setEnrollConfirmed] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setEnrollConfirmed(true);
  };

  return (
    <section id="culture" className="bg-royal-indigo text-white py-24 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Asymmetric Image Frame with Borders */}
          <div className="relative">
            <img
              className="w-full aspect-[4/5] object-cover relative z-10 border border-white/10 shadow-2xl rounded"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDelojtjoGzVV4raA0-prZ7pbUpiAmdd8_5tVWQgRK7cGysmPPoUYvawGj8Hf4tAGfvakoQ6ZpdMc-4l7sN8sn21sadiSSWNKH5c9flSeOwUT5l-VEbM4SeElK_6qn5seQbd3aFSejUowMGWSQF1b9jwTwnfaxmSY5nSDob1FXpD5KoklNWEjK-EOhNM1D0I3D5M4kFe0YCv9B9VyPhab7_BNDdWfhhJ3GS2mXe9WS4kAvVSzARWfKEiLSefXHxuo_edtnaoJgg7Q"
              alt="Lucknow Chikankari embroidery craftsman hands"
              referrerPolicy="no-referrer"
            />
            {/* Elegant corner accents */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-deep-saffron z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-deep-saffron z-0"></div>
          </div>

          {/* Right Side: Informative Text & Interactive List */}
          <div>
            <span className="text-deep-saffron font-bold text-xs tracking-widest uppercase mb-6 block">
              The Living Arts
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight font-bold">
              Preserving the Soul of Craftsmanship
            </h2>
            <p className="font-sans text-sm md:text-base text-white/80 mb-10 leading-relaxed">
              India’s heritage isn’t just preserved in silent monuments, but in the living hands of its artisans. From Lucknow's courts to the dry riverbeds of Bagru, we invite you to sit with native masters, hear ancient folklore, and learn the precision behind the stitches.
            </p>

            {/* List of Crafts Tours */}
            <div className="space-y-8">
              {LIVING_ARTS_DATA.map((art) => (
                <div
                  key={art.id}
                  onClick={() => {
                    setSelectedArt(art);
                    setEnrollConfirmed(false);
                  }}
                  className="flex gap-6 group cursor-pointer hover:bg-white/5 p-4 rounded transition-all duration-300"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-white/10 flex items-center justify-center group-hover:bg-deep-saffron transition-colors duration-300 rounded">
                    {art.iconName === "brush" ? (
                      <Brush className="w-6 h-6 text-orange-200 group-hover:text-white" />
                    ) : (
                      <Landmark className="w-6 h-6 text-orange-200 group-hover:text-white" />
                    )}
                  </div>
                  <div>
                    <h5 className="font-serif text-lg font-bold group-hover:text-orange-300 transition-colors">
                      {art.title}: {art.subtitle}
                    </h5>
                    <p className="text-white/60 font-sans text-xs md:text-sm mt-1 leading-relaxed">
                      {art.description.substring(0, 120)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setSelectedArt(LIVING_ARTS_DATA[0]);
                setEnrollConfirmed(false);
              }}
              className="mt-12 border border-white/30 px-10 py-4 font-bold text-xs tracking-wider uppercase hover:bg-white hover:text-royal-indigo transition-all cursor-pointer"
            >
              EXPLORE CULTURAL TOURS
            </button>
          </div>
        </div>
      </div>

      {/* Living Arts Enrollment Modal */}
      <AnimatePresence>
        {selectedArt && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-on-surface">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-lg shadow-2xl max-w-lg w-full overflow-hidden"
            >
              <div className="relative h-48 bg-royal-indigo">
                <img
                  className="w-full h-full object-cover opacity-60"
                  src={selectedArt.imageUrl}
                  alt={selectedArt.title}
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedArt(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 cursor-pointer bg-black/40 rounded-full p-1.5"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-orange-300 text-[10px] font-bold uppercase tracking-wider">
                    {selectedArt.title}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-white leading-tight">
                    {selectedArt.subtitle}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {!enrollConfirmed ? (
                  <form onSubmit={handleEnrollSubmit} className="space-y-4">
                    <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {selectedArt.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 bg-amber-50 p-3 rounded border border-amber-100 text-xs">
                      <div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase block">Duration</span>
                        <span className="font-bold flex items-center gap-1 mt-0.5 text-royal-indigo">
                          <Clock className="w-3.5 h-3.5 text-primary" /> {selectedArt.duration}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase block">Price Guide</span>
                        <span className="font-bold text-primary mt-0.5 inline-block">
                          ${selectedArt.price} / seat
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Ex: Alexander Wright"
                          className="w-full text-xs px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary rounded"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold block mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@domain.com"
                          className="w-full text-xs px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary rounded"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-orange-800 text-white text-xs font-bold py-3 uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Reserve Masterclass Seat
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
                      Seat Reserved Successfully
                    </h4>
                    <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong>{fullName}</strong>. Your luxury pass for the <strong>{selectedArt.subtitle}</strong> experience is reserved.
                    </p>
                    <p className="text-[10px] text-emerald-600 bg-white inline-block px-3 py-1 rounded font-bold border border-emerald-100 mt-2 flex items-center gap-1 justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" /> A concierge representative will email your pass credentials.
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
