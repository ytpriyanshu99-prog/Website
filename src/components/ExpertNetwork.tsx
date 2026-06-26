import React, { useState, useEffect, useRef } from "react";
import { EXPERTS_DATA } from "../data";
import { Expert } from "../types";
import { CheckCircle2, MessageSquare, Send, X, Smile, Sparkles, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ExpertNetwork() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [messages, setMessages] = useState<{ sender: "user" | "expert"; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Handle preset queries for each expert
  const expertPresets: Record<string, { q: string; a: string }[]> = {
    vikram: [
      {
        q: "How do I secure private access to restricted palace chambers?",
        a: "As a descendant of Jaipur's court nobles, I coordinate private keyholders. We can arrange a closed-door twilight tour of the Sukh Niwas (Hall of Pleasure) or the private royal terrace overlooking the pink city, complete with saffron tea served in silver flutes."
      },
      {
        q: "What is the most historic fortress route in Rajasthan?",
        a: "I highly recommend starting with Mehrangarh at Jodhpur before dawn to hear the temple drums echo over the blue city, followed by the living fort of Jaisalmer, where families have resided in medieval sandstone walls for over 800 years."
      }
    ],
    priya: [
      {
        q: "What is the secret behind real Rajasthani Laal Maas (Smoked Lamb)?",
        a: "The secret is the 'Mathania' chili, a rare pod native to a single desert village that yields deep crimson color and smoke without abrasive heat. We prepare it over wood embers using 'dhungar' (a hot charcoal cup infused with ghee and cloves placed inside the covered pot)."
      },
      {
        q: "How can we experience authentic home-cooked meals in India?",
        a: "We steer away from restaurants. I open doors to old family kitchens—from Kashmiri Pandit households preparing pristine turnip broths, to Chettiar mansions serving complex black-pepper crab on fresh banana leaves."
      }
    ],
    ananda: [
      {
        q: "What is the true morning routine of a yogi in Rishikesh?",
        a: "We begin at 4:30 AM (Brahma Muhurta) with Jala Neti (nasal cleansing), followed by silent contemplation on the cold granite ghats of the Ganges, breathing with the rhythmic sound of rushing glacier water, followed by subtle Pranayama to oxygenate the physical body."
      },
      {
        q: "How do you tailor Ayurvedic wellness pathways for travelers?",
        a: "We begin with Nadi Pariksha (ancient pulse diagnosis) to identify your underlying dosha imbalances (Vata, Pitta, or Kapha). We then customize cold-pressed herbal oils, custom organic meals, and lifestyle rhythms to reset your internal clock during travel."
      }
    ],
    rohan: [
      {
        q: "How do we track wild tigers at dawn without disturbing them?",
        a: "We read the jungle's network of alarm signals. Sambar deer bells, langur monkey chatter, and peacock warning calls tell us exactly where a big cat is cruising. We keep our vehicles silent, keeping a respectful distance to preserve the tiger's natural path."
      },
      {
        q: "What is the best time for bird photography in the Himalayas?",
        a: "The spring migration (March to May) is spectacular. Deep in Nagaland and Sikkim, we track fire-tailed myzornis, hornbills, and the elusive satyr tragopan. We use custom camouflaged hides placed close to native feeding berries."
      }
    ]
  };

  const handleOpenConsultation = (expert: Expert) => {
    setSelectedExpert(expert);
    setMessages([
      {
        sender: "expert",
        text: `Pranam. I am ${expert.name}, your dedicated ${expert.role}. Ask me any question regarding custom itineraries, exclusive accesses, or local heritage insights!`
      }
    ]);
    setCustomInput("");
  };

  const handlePresetClick = (preset: { q: string; a: string }) => {
    // Add user question
    setMessages((prev) => [...prev, { sender: "user", text: preset.q }]);
    setIsTyping(true);

    // Simulate typing and response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "expert", text: preset.a }]);
    }, 1800);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim() || !selectedExpert) return;

    const userText = customInput;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setCustomInput("");
    setIsTyping(true);

    // Generate expert reply based on keywords or general hospitality
    setTimeout(() => {
      setIsTyping(false);
      let reply = "That is an exquisite query. To curate this bespoke detail, I will consult our local archival networks. Let's include this custom planning during your private travel coordination.";
      
      const lower = userText.toLowerCase();
      if (lower.includes("price") || lower.includes("cost") || lower.includes("pay")) {
        reply = "Bespoke guiding rates are fully integrated within our custom BharatVoyage itineraries. For custom multi-day expeditions, our desk handles everything, ensuring seamless luxury.";
      } else if (lower.includes("best time") || lower.includes("season") || lower.includes("when")) {
        reply = "Timing is everything. We schedule tours around specific local conditions—such as the soft crisp light of the winter desert, or the vibrant spring harvests when local flowers are in full bloom.";
      }

      setMessages((prev) => [...prev, { sender: "expert", text: reply }]);
    }, 1500);
  };

  return (
    <section id="experts" className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-deep-saffron font-bold text-xs tracking-widest uppercase mb-4 block">
          Trusted Companions
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-royal-indigo font-bold">
          Our Expert Network
        </h2>
        <p className="text-on-surface-variant text-sm md:text-base font-sans max-w-xl mx-auto mt-2">
          Interact directly with legendary historians, culinary anthologists, master healers, and veteran naturalists.
        </p>
      </div>

      {/* Grid of Expert Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {EXPERTS_DATA.map((expert) => (
          <div
            key={expert.id}
            onClick={() => handleOpenConsultation(expert)}
            className="text-center group bg-white border border-gray-100 p-6 rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative w-40 h-40 md:w-44 md:h-44 mx-auto mb-6">
                <img
                  className="w-full h-full object-cover rounded-full border-4 border-amber-50 group-hover:border-primary transition-all duration-300"
                  src={expert.imageUrl}
                  alt={expert.name}
                  referrerPolicy="no-referrer"
                />
                {expert.verified && (
                  <div className="absolute bottom-2 right-2 bg-emerald-green text-white p-1 rounded-full border-2 border-white shadow flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-green text-white" />
                  </div>
                )}
              </div>
              <h5 className="font-serif text-lg md:text-xl text-royal-indigo font-bold group-hover:text-primary transition-colors">
                {expert.name}
              </h5>
              <p className="text-deep-saffron font-bold text-[10px] uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" /> {expert.role}
              </p>
              <p className="text-on-surface-variant font-sans text-xs mt-4 px-2 leading-relaxed">
                {expert.bio}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-semibold uppercase flex items-center gap-1">
                <Languages className="w-3.5 h-3.5 text-gray-300" /> {expert.languages.join(", ")}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenConsultation(expert);
                }}
                className="text-royal-indigo group-hover:text-primary text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Consult
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide-out Interactive Chat Panel */}
      <AnimatePresence>
        {selectedExpert && (
          <div className="fixed bottom-6 right-6 z-50 w-full max-w-md p-4 md:p-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[520px] max-h-[85vh]"
            >
              {/* Chat Header */}
              <div className="bg-royal-indigo text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                    src={selectedExpert.imageUrl}
                    alt={selectedExpert.name}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold">{selectedExpert.name}</h4>
                    <p className="text-[9px] text-orange-200 uppercase tracking-widest font-semibold">
                      {selectedExpert.role} • Online
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedExpert(null)}
                  className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-warm-sand/40">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg p-3 text-xs md:text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-white text-on-surface border border-gray-100"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-100 rounded-lg p-3 text-xs text-gray-400 italic flex items-center gap-1.5 shadow-sm">
                      <span className="animate-pulse">●</span>
                      <span className="animate-pulse delay-150">●</span>
                      <span className="animate-pulse delay-300">●</span>
                      <span>Storyteller is typing...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Interactive Presets */}
              <div className="p-3 bg-white border-t border-gray-100">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-2">
                  Tap Preset Inquiry:
                </p>
                <div className="flex flex-col gap-1.5 max-h-24 overflow-y-auto pr-1">
                  {expertPresets[selectedExpert.id]?.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => handlePresetClick(preset)}
                      disabled={isTyping}
                      className="text-left text-[10px] md:text-xs text-royal-indigo bg-orange-50 hover:bg-orange-100 font-semibold px-2.5 py-1.5 rounded transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      {preset.q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Input form */}
              <form
                onSubmit={handleCustomSend}
                className="p-3 border-t border-gray-100 flex gap-2 bg-gray-50 items-center"
              >
                <input
                  type="text"
                  placeholder="Ask a custom question..."
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="text-xs px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary flex-1 rounded bg-white"
                />
                <button
                  type="submit"
                  className="bg-royal-indigo hover:bg-primary text-white p-2 rounded transition-colors cursor-pointer"
                  aria-label="Send"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
