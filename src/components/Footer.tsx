import { Compass, Award, Shield, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-royal-indigo text-white/95 border-t border-white/5 py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <h4 className="font-serif text-2xl font-bold text-orange-300">BharatVoyage</h4>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-sans">
            Crafting raw, transformative heritage travel experiences across India’s most sacred terrains, royal remnants, and living communities.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-deep-saffron transition-colors cursor-pointer">
              <Compass className="w-4 h-4 text-orange-200" />
            </span>
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-deep-saffron transition-colors cursor-pointer">
              <Award className="w-4 h-4 text-orange-200" />
            </span>
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-deep-saffron transition-colors cursor-pointer">
              <Shield className="w-4 h-4 text-orange-200" />
            </span>
          </div>
        </div>

        {/* Curated Portals */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-deep-saffron font-sans">Curated Portals</h5>
          <ul className="space-y-2 text-xs md:text-sm text-white/70">
            <li>
              <a href="#destinations" className="hover:text-white transition-colors">Featured Journeys</a>
            </li>
            <li>
              <a href="#culture" className="hover:text-white transition-colors">Living Craftsmanship</a>
            </li>
            <li>
              <a href="#festivals" className="hover:text-white transition-colors">Subcontinent Festivals</a>
            </li>
            <li>
              <a href="#wonders" className="hover:text-white transition-colors">Regional Map Guides</a>
            </li>
          </ul>
        </div>

        {/* Foundations */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-deep-saffron font-sans">Our Foundation</h5>
          <ul className="space-y-2 text-xs md:text-sm text-white/70">
            <li>
              <span className="hover:text-white transition-colors cursor-pointer">Native Storyteller Alliance</span>
            </li>
            <li>
              <span className="hover:text-white transition-colors cursor-pointer">Sustainable Village Grants</span>
            </li>
            <li>
              <span className="hover:text-white transition-colors cursor-pointer">Luxury Low-Impact Camps</span>
            </li>
            <li>
              <span className="hover:text-white transition-colors cursor-pointer">Ecological Conservation Trails</span>
            </li>
          </ul>
        </div>

        {/* Concierge Desk */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-deep-saffron font-sans">Concierge Desk</h5>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-mono">
            Rambagh Palace Wing B,<br />
            Jaipur, Rajasthan 302005
          </p>
          <p className="text-xs text-white/70 font-mono">
            Direct Phone: +91 141 238 5200<br />
            Email: desk@bharatvoyage.com
          </p>
        </div>

      </div>

      {/* Bottom Copyright and compliance lines */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 relative z-10">
        <p className="font-sans flex items-center gap-1.5 justify-center sm:justify-start">
          © {new Date().getFullYear()} BharatVoyage. Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> in the spirit of heritage.
        </p>
        <div className="flex gap-6 mt-4 sm:mt-0 font-mono text-[10px]">
          <span className="hover:text-white cursor-pointer transition-colors">PRIVACY DOSSIER</span>
          <span className="hover:text-white cursor-pointer transition-colors">CHARTER COVENANT</span>
        </div>
      </div>
    </footer>
  );
}
