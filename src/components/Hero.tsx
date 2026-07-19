import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Logo = () => (
  <div
    className="absolute top-6 left-6 select-none z-10 cursor-pointer"
    onClick={() => window.location.replace(window.location.pathname + window.location.search)}
    title="Refresh page"
    role="button"
    tabIndex={0}
    onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') window.location.replace(window.location.pathname + window.location.search); }}
  >
    <span className="text-4xl font-serif font-bold tracking-tight text-gray-900 bg-white/80 px-4 py-2" style={{ fontFamily: 'Playfair Display, serif' }}>
      RA
    </span>
  </div>
);

// Removed the Hero component content to fit the new layout requirements.
