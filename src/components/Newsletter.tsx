import React, { useState } from "react";
import { Send, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-24">
      <div className="bg-surface-container-high p-12 md:p-20 text-center relative overflow-hidden rounded-lg border border-orange-100">
        <div className="jali-overlay absolute inset-0 opacity-10"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex justify-center mb-2">
                  <span className="p-2 bg-primary/10 rounded-full inline-block">
                    <Mail className="w-6 h-6 text-primary" />
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl text-royal-indigo font-bold">
                  Stories from the Subcontinent
                </h2>
                <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-lg mx-auto leading-relaxed">
                  Join 50,000+ travelers receiving our curated monthly guide to India’s most evocative experiences, hidden stays, and seasonal festivals.
                </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3 border border-orange-200 focus:border-primary focus:ring-0 bg-white text-sm focus:outline-none placeholder:text-gray-400 rounded shadow-inner"
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="bg-royal-indigo hover:bg-primary text-white px-8 py-3.5 font-bold text-xs tracking-wider uppercase transition-colors rounded shadow cursor-pointer flex items-center justify-center gap-2"
                  >
                    SUBSCRIBE <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4 py-4"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-emerald-800 font-bold">
                  Welcome to the Voyage
                </h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed font-medium">
                  An email has been dispatched to <strong>{email}</strong>. Prepare to receive our exclusive handpicked archives, starting with next month's solstice calendar.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold text-emerald-600 bg-white/65 border border-emerald-100 px-3 py-1 rounded">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Premium Travel Log Activated
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
