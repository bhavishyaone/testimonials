import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Inbox, Heart, Edit, Share2, Copy, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmbedCode() {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const layout = location.state?.layout || "animated";

  const spaceSlug = "my-brand";
  const embedCode = `<script type="text/javascript" src="https://testimonialproof.io/widget.js"></script>
<iframe
  id="testimonial-wall-of-love"
  src="https://testimonialproof.io/w/${spaceSlug}"
  frameborder="0"
  scrolling="no"
  width="100%"
></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="flex h-screen bg-[#0A0A0A] font-sans text-white overflow-hidden">

      <aside className="w-64 bg-[#0A0A0A] flex flex-col h-full flex-shrink-0 hidden md:flex border-r border-[#1F1F1F]">
        <div className="p-6">
          <h1 className="text-2xl font-extrabold tracking-tight mb-8">Proof</h1>

          <Link to="/dashboard" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>

          <div className="flex items-center gap-3 mb-8 px-3 py-2.5 bg-[#1F1F1F] rounded-xl border border-[#2A2A2A]">
            <div className="w-8 h-8 rounded-lg bg-[#333333] flex items-center justify-center text-sm font-bold font-serif text-white">
              B
            </div>
            <span className="text-[15px] font-bold text-white tracking-wide truncate">Bhavishya's Pro...</span>
          </div>

          <nav className="space-y-1">
            <Link to="/inbox" className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#1A1A1A] rounded-xl text-[15px] font-semibold transition-colors">
              <Inbox className="w-[18px] h-[18px]" /> Inbox
            </Link>
            <Link to="/wall-of-love" className="w-full flex items-center gap-3 px-4 py-3 bg-[#1A1A1A] text-white rounded-xl text-[15px] font-semibold transition-colors">
              <Heart className="w-[18px] h-[18px]" /> Wall of Love
            </Link>
          </nav>

          <nav className="space-y-1 mt-8">
            <Link to="/edit-space" className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#1A1A1A] rounded-xl text-[15px] font-semibold transition-colors">
              <Edit className="w-[18px] h-[18px]" /> Edit Space
            </Link>
            <Link to="/share" className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#1A1A1A] rounded-xl text-[15px] font-semibold transition-colors">
              <Share2 className="w-[18px] h-[18px]" /> Share Link
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full bg-[#0A0A0A] overflow-hidden">

        <header className="flex items-center justify-center px-8 py-4 border-b border-[#1F1F1F] relative shrink-0">
          <Link to="/wall-configuration" state={{ layout }} className="absolute left-8 text-[10px] text-gray-500 font-bold tracking-widest uppercase hover:text-white transition-colors">
            Page 15
          </Link>
          <h2 className="text-[12px] font-bold text-white uppercase tracking-widest">Embed Code Modal</h2>
          <span className="absolute right-8 text-[11px] text-gray-500 font-semibold">
            → Page 17: Space Settings
          </span>
        </header>

        <div className="flex-1 flex items-center justify-center bg-black/60 p-8 overflow-y-auto">

          <div className="bg-[#111] border border-[#222] rounded-3xl p-8 w-full max-w-lg shadow-2xl relative">

            <button
              onClick={() => navigate("/wall-of-love")}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1E1E1E] hover:bg-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">
                Your Wall of Love is Ready! 🎉
              </h1>
              <p className="text-sm text-gray-400">
                Copy the code below and paste it on any website.
              </p>
            </div>

            <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-4 mb-6 relative group">
              <pre className="text-xs font-mono text-gray-300 leading-relaxed whitespace-pre-wrap overflow-hidden">
                <span className="text-[#E36EE7]">{"<script"}</span>
                <span className="text-[#79C0FF]">{" type"}</span>
                <span className="text-white">{"="}</span>
                <span className="text-[#A5D6FF]">{"'text/javascript'"}</span>
                <span className="text-[#79C0FF]">{" src"}</span>
                <span className="text-white">{"="}</span>
                <span className="text-[#A5D6FF]">{"'https://testimonialproof.io/widget.js'"}</span>
                <span className="text-[#E36EE7]">{"></script>"}</span>
                {"\n"}
                <span className="text-[#E36EE7]">{"<iframe"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#79C0FF]">{"id"}</span>
                <span className="text-white">{"="}</span>
                <span className="text-[#A5D6FF]">{'"testimonial-wall-of-love"'}</span>
                {"\n"}
                {"  "}
                <span className="text-[#79C0FF]">{"src"}</span>
                <span className="text-white">{"="}</span>
                <span className="text-[#A5D6FF]">{`"https://testimonialproof.io/w/${spaceSlug}"`}</span>
                {"\n"}
                {"  "}
                <span className="text-[#79C0FF]">{"frameborder"}</span>
                <span className="text-white">{"="}</span>
                <span className="text-[#A5D6FF]">{'"0"'}</span>
                {"\n"}
                {"  "}
                <span className="text-[#79C0FF]">{"scrolling"}</span>
                <span className="text-white">{"="}</span>
                <span className="text-[#A5D6FF]">{'"no"'}</span>
                {"\n"}
                {"  "}
                <span className="text-[#79C0FF]">{"width"}</span>
                <span className="text-white">{"="}</span>
                <span className="text-[#A5D6FF]">{'"100%"'}</span>
                {"\n"}
                <span className="text-[#E36EE7]">{">"}</span>
                <span className="text-[#E36EE7]">{"</iframe>"}</span>
              </pre>

              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-1.5 rounded-md bg-[#1E1E1E] hover:bg-[#2A2A2A] text-gray-500 hover:text-gray-200 transition-all opacity-0 group-hover:opacity-100"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="mb-6">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Preview</p>
              <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-4">
                {layout === "carousel" ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex-shrink-0 bg-[#1A1A1A] rounded-xl p-3 w-40 border border-[#2A2A2A]">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-4 h-4 rounded-full bg-[#2A2A2A]" />
                            <div className="flex gap-px">{Array(3).fill(0).map((_, s) => <span key={s} className="text-[8px] text-yellow-400">★</span>)}</div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-1.5 w-full bg-[#2A2A2A] rounded-full" />
                            <div className="h-1.5 w-3/4 bg-[#2A2A2A] rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <div className="flex-1 space-y-2">
                      <div className="bg-[#1A1A1A] rounded-xl p-3 border border-[#2A2A2A]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-4 h-4 rounded-full bg-[#2A2A2A]" />
                          <div className="flex gap-px">{Array(3).fill(0).map((_, s) => <span key={s} className="text-[8px] text-yellow-400">★</span>)}</div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-full bg-[#2A2A2A] rounded-full" />
                          <div className="h-1.5 w-5/6 bg-[#2A2A2A] rounded-full" />
                          <div className="h-1.5 w-4/6 bg-[#2A2A2A] rounded-full" />
                        </div>
                      </div>
                      <div className="bg-[#1A1A1A] rounded-xl p-3 border border-[#2A2A2A]">
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-full bg-[#2A2A2A] rounded-full" />
                          <div className="h-1.5 w-3/5 bg-[#2A2A2A] rounded-full" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2 mt-4">
                      <div className="bg-[#1A1A1A] rounded-xl p-3 border border-[#2A2A2A]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-4 h-4 rounded-full bg-[#2A2A2A]" />
                          <div className="flex gap-px">{Array(2).fill(0).map((_, s) => <span key={s} className="text-[8px] text-yellow-400">★</span>)}</div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-full bg-[#2A2A2A] rounded-full" />
                          <div className="h-1.5 w-4/5 bg-[#2A2A2A] rounded-full" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="bg-[#1A1A1A] rounded-xl p-3 border border-[#2A2A2A]">
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-full bg-[#2A2A2A] rounded-full" />
                          <div className="h-1.5 w-5/6 bg-[#2A2A2A] rounded-full" />
                          <div className="h-1.5 w-3/6 bg-[#2A2A2A] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => navigate("/wall-of-love")}
                variant="outline"
                className="flex-1 border-[#2A2A2A] bg-transparent text-white hover:bg-[#1A1A1A] hover:text-white py-6 rounded-xl font-bold text-[15px]"
              >
                Done
              </Button>
              <Button
                onClick={handleCopy}
                className="flex-1 bg-white text-black hover:bg-gray-200 py-6 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
