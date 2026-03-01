import React, { useState } from "react";
import { Video, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoRecordingModal from "./VideoRecordingModal.jsx";

export default function PublicTestimonial({ spaceName = "Bhavishya's Product", theme = "dark" }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden transition-colors duration-300 ${theme === "dark" ? "bg-[#0A0A0A]" : "bg-gray-50"}`}>
      
      <div className={`absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`} />
      <div className={`absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`} />

      <div className="absolute top-8 left-8">
        <h1 className={`text-2xl font-bold tracking-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Proof</h1>
      </div>

      <div className={`w-full max-w-2xl border rounded-2xl p-8 md:p-12 flex flex-col items-center text-center relative z-10 shadow-2xl transition-colors duration-300 ${theme === "dark" ? "bg-[#1A1A1A] border-[#2A2A2A]" : "bg-white border-gray-100"}`}>
        
        <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-inner border transition-colors duration-300 ${theme === "dark" ? "bg-[#2A2A2A] text-white border-[#3A3A3A]" : "bg-gray-100 text-gray-900 border-gray-200"}`}>
          BP
        </div>
        
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          {spaceName}
        </h2>
        <p className={`text-base md:text-lg mb-10 max-w-md leading-relaxed ${theme === "dark" ? "text-[#888888]" : "text-gray-500"}`}>
          Would you like to give a shoutout? Your feedback helps us grow.
        </p>

        <div className={`w-full border rounded-xl p-6 mb-10 text-left transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] border-[#222222]" : "bg-gray-50 border-gray-100"}`}>
          <p className={`text-xs font-black tracking-[0.2em] uppercase mb-4 ${theme === "dark" ? "text-[#666666]" : "text-gray-400"}`}>Questions</p>
          <ul className={`space-y-4 text-sm font-medium ${theme === "dark" ? "text-[#CCCCCC]" : "text-gray-600"}`}>
            <li className="flex items-start gap-3">
              <span className={`text-lg leading-none mt-0.5 ${theme === "dark" ? "text-[#444444]" : "text-gray-300"}`}>•</span> 
              Who are you / what are you working on?
            </li>
            <li className="flex items-start gap-3">
              <span className={`text-lg leading-none mt-0.5 ${theme === "dark" ? "text-[#444444]" : "text-gray-300"}`}>•</span> 
              How has our product helped you?
            </li>
            <li className="flex items-start gap-3">
              <span className={`text-lg leading-none mt-0.5 ${theme === "dark" ? "text-[#444444]" : "text-gray-300"}`}>•</span> 
              What is the best thing about our product?
            </li>
          </ul>
        </div>

        <div className="w-full space-y-3">
          <Button 
            onClick={() => setIsVideoModalOpen(true)}
            className={`w-full text-base font-bold py-6 rounded-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-3 ${theme === "dark" ? "bg-white hover:bg-gray-100 text-black" : "bg-[#5D5FEF] hover:bg-[#4F51D6] text-white"}`}
          >
            <Video className="w-5 h-5" /> Record a video
          </Button>
          <Button 
            variant="outline"
            className={`w-full border text-base font-bold py-6 rounded-lg transition-colors flex items-center justify-center gap-3 ${theme === "dark" ? "bg-[#151515] hover:bg-[#222222] border-[#333333] text-white hover:text-white" : "bg-white hover:bg-gray-50 border-gray-200 text-gray-900 hover:text-gray-900"}`}
          >
            <Edit3 className={`w-5 h-5 ${theme === "dark" ? "text-[#888]" : "text-gray-500"}`} /> Send in text
          </Button>
        </div>
        
      </div>

      <div className={`absolute bottom-8 flex gap-1 items-center text-[10px] tracking-widest font-medium uppercase mt-8 z-10 ${theme === "dark" ? "text-[#666666]" : "text-gray-400"}`}>
        POWERED BY <span className={`font-bold ml-1 ${theme === "dark" ? "text-white" : "text-gray-600"}`}>PROOF</span>
      </div>

      {isVideoModalOpen && (
        <VideoRecordingModal onClose={() => setIsVideoModalOpen(false)} />
      )}

    </div>
  );
}
