"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-mest-blue-6 hover:bg-mest-blue-7 shadow-xl rounded-full px-6 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5 mr-2" />
        Call Now
      </Button>
    </div>
  );
}
