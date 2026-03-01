import React from "react";
import { X, Video, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoRecordingModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 font-sans">
      
      <div className="w-full max-w-[500px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 relative flex flex-col items-center">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-4">
          <Video className="w-6 h-6 text-white" />
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-xl font-bold text-white mb-2 tracking-tight">
          Check Your Camera & Microphone
        </h2>
        <p className="text-[#888888] text-sm mb-6 text-center">
          You have up to 120 seconds. You can review before submitting.
        </p>

        {/* Camera Preview Area (Static for now) */}
        <div className="w-full aspect-video bg-[#111111] rounded-xl border border-[#2A2A2A] mb-8 relative flex flex-col items-center justify-center overflow-hidden">
          
          {/* Live Indicator */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-white text-[10px] font-bold tracking-widest">LIVE</span>
          </div>

          {/* Placeholder Avatar */}
          <User className="w-16 h-16 text-[#2A2A2A]" />
        </div>

        {/* Device Settings Section */}
        <div className="w-full text-left mb-8">
          <p className="text-[#666666] text-[10px] font-bold tracking-[0.15em] uppercase mb-4">
            Device Settings
          </p>

          {/* Camera Select Placeholder */}
          <div className="mb-4">
            <label className="block text-[#888888] text-xs mb-1.5 pl-1">Camera</label>
            <div className="w-full bg-[#111111] border border-[#2A2A2A] text-white px-4 py-2.5 rounded-lg flex items-center justify-between cursor-pointer">
              <span className="text-sm">FaceTime HD Camera</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
          </div>

          {/* Microphone Select Placeholder */}
          <div className="mb-6">
            <label className="block text-[#888888] text-xs mb-1.5 pl-1">Microphone</label>
            <div className="w-full bg-[#111111] border border-[#2A2A2A] text-white px-4 py-2.5 rounded-lg flex items-center justify-between cursor-pointer">
              <span className="text-sm">Built-in Microphone</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
          </div>

          {/* Video Effects Placeholder */}
          <div>
            <p className="text-[#666666] text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Video Effects
            </p>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded-full border border-[#444444] group-hover:border-white transition-colors flex items-center justify-center" />
                <span className="text-sm text-white">Background blur</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded-full border border-[#444444] group-hover:border-white transition-colors flex items-center justify-center" />
                <span className="text-sm text-white">Background image</span>
              </label>
            </div>
          </div>
        </div>

        {/* Record Button */}
        <Button className="w-full bg-white hover:bg-gray-100 text-black font-bold py-6 rounded-lg text-base mb-4">
          Record My Video
        </Button>

        {/* Upload File Link */}
        <button className="text-[#888888] text-xs hover:text-white transition-colors font-medium">
          Choose a File to Submit
        </button>

      </div>
    </div>
  );
}
