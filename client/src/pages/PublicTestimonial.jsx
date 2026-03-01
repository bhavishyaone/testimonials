import React from "react";
import { Video, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PublicTestimonial({ spaceName = "Bhavishya's Product" }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
      
      <div className="absolute top-[8%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="absolute top-8 left-8">
        <h1 className="text-white text-2xl font-bold tracking-tight">Proof</h1>
      </div>

      <div className="w-full max-w-2xl bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-12 flex flex-col items-center text-center relative z-10 shadow-2xl">
        
        <div className="w-20 h-20 rounded-full bg-[#2A2A2A] text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-inner border border-[#3A3A3A]">
          BP
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          {spaceName}
        </h2>
        <p className="text-[#888888] text-base md:text-lg mb-10 max-w-md leading-relaxed">
          Would you like to give a shoutout? Your feedback helps us grow.
        </p>

        <div className="w-full bg-[#111111] border border-[#222222] rounded-xl p-6 mb-10 text-left">
          <p className="text-[#666666] text-xs font-black tracking-[0.2em] uppercase mb-4">Questions</p>
          <ul className="space-y-4 text-[#CCCCCC] text-sm font-medium">
            <li className="flex items-start gap-3">
              <span className="text-[#444444] text-lg leading-none mt-0.5">•</span> 
              Who are you / what are you working on?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#444444] text-lg leading-none mt-0.5">•</span> 
              How has our product helped you?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#444444] text-lg leading-none mt-0.5">•</span> 
              What is the best thing about our product?
            </li>
          </ul>
        </div>

        <div className="w-full space-y-3">
          <Button 
            className="w-full bg-white hover:bg-gray-100 text-black text-base font-bold py-6 rounded-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-3"
          >
            <Video className="w-5 h-5" /> Record a video
          </Button>
          <Button 
            variant="outline"
            className="w-full bg-[#151515] hover:bg-[#222222] border-[#333333] text-white hover:text-white text-base font-bold py-6 rounded-lg transition-colors flex items-center justify-center gap-3"
          >
            <Edit3 className="w-5 h-5 text-[#888]" /> Send in text
          </Button>
        </div>
        
      </div>

      <div className="absolute bottom-8 flex gap-1 items-center text-[10px] tracking-widest text-[#666666] font-medium uppercase mt-8 z-10">
        POWERED BY <span className="text-white font-bold ml-1">PROOF</span>
      </div>

    </div>
  );
}
