"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const horizontalScrollRef = useRef(null);
  
  // Track vertical scroll ONLY for the horizontal section wrapper (300vh)
  const { scrollYProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start start", "end end"]
  });

  // The horizontal track is 200vw wide.
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Crossfade between horizontal sections to blend the effect smoothly
  const section2AOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  const section2BOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  // Kinetic typography
  const lonelinessX = useTransform(scrollYProgress, [0.5, 0.7], [0, -100]); // Reduced for mobile, looks fine on desktop too
  const lonelinessOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0.1]);
  
  // AI becomes bigger initially, then explodes in size at the very end of the horizontal track
  // to serve as a massive transition piece into the final section.
  const aiScale = useTransform(scrollYProgress, [0.5, 0.7, 0.85, 1], [1, 1.8, 1.8, 30]);
  const aiColor = useTransform(scrollYProgress, [0.5, 0.7], ["#ffffff", "#E62B1E"]);

  return (
    <div className="bg-black text-white selection:bg-[#E62B1E] selection:text-white">
      
      {/* 1. VERTICAL: Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 relative z-10 bg-black"
      >
        <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-center">
          Ideas<br />Worth<br />
          <span className="text-[#E62B1E]">Spreading</span>
        </h1>
      </motion.section>

      {/* 2. HORIZONTAL: Track Wrapper (300vh tall to allow scrolling) */}
      <section ref={horizontalScrollRef} className="h-[300vh] relative bg-black z-10">
        
        {/* Sticky viewport that stays on screen while we scroll the 300vh */}
        <div className="h-screen w-screen sticky top-0 overflow-hidden flex items-center">
          
          {/* The wide track that moves left */}
          <motion.div 
            style={{ x: xTransform }} 
            className="h-full w-[200vw] flex flex-row relative will-change-transform"
          >
            
            {/* SECTION 2A: What is TEDx (100vw) */}
            <motion.div style={{ opacity: section2AOpacity }} className="h-full w-screen flex items-center justify-center relative px-6 md:px-12">
              <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
                <div className="md:col-span-5 flex items-center justify-center md:justify-start">
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-center md:text-left">
                    The<br className="hidden md:block" />Local<br className="hidden md:block" /><span className="text-[#E62B1E] inline-block md:block ml-2 md:ml-0">Global</span>
                  </h2>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center space-y-6 md:space-y-12 text-lg md:text-2xl lg:text-4xl font-light text-gray-400 leading-tight text-center md:text-left">
                  <p>
                    TED is a global phenomenon. <strong className="text-white font-medium">TEDx</strong> is the local spark. 
                  </p>
                  <p>
                    We are <strong className="text-white font-medium">TEDxIEM Salt Lake</strong>. Independently organized. Ferociously local. Unapologetically global in our vision.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SECTION 2B: The Theme (100vw) */}
            <motion.div style={{ opacity: section2BOpacity }} className="h-full w-screen flex flex-col items-center justify-center relative px-6 md:px-12">
              <div className="text-center w-full max-w-6xl">
                <h3 className="text-[#E62B1E] text-base md:text-xl lg:text-2xl font-bold uppercase tracking-[0.4em] mb-8 md:mb-16 relative z-20">
                  Theme 2026
                </h3>

                {/* Kinetic Typography Lockup */}
                <div className="text-4xl md:text-6xl lg:text-[8vw] font-black uppercase tracking-tighter leading-none flex flex-col items-center justify-center gap-4 md:gap-6 relative z-10">
                  
                  <div className="flex items-center gap-2 md:gap-4 text-xl md:text-4xl lg:text-5xl font-mono text-gray-500 lowercase tracking-tight mb-2 md:mb-4">
                    <span className="text-[#E62B1E]">{">"}</span> 
                    ctrl+u:
                    <motion.span 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} 
                      className="w-3 md:w-5 lg:w-6 h-6 md:h-8 lg:h-10 bg-[#E62B1E] inline-block ml-1 md:ml-2"
                    />
                  </div>

                  <motion.div style={{ x: lonelinessX, opacity: lonelinessOpacity }} className="will-change-transform">
                    Loneliness
                  </motion.div>
                  
                  <div className="text-gray-800 text-xl md:text-4xl lg:text-5xl font-light lowercase italic tracking-normal">
                    in the era of
                  </div>
                  
                  <motion.div style={{ scale: aiScale, color: aiColor }} className="will-change-transform">
                    AI
                  </motion.div>
                </div>
                
                <p className="mt-12 md:mt-24 lg:mt-32 text-base md:text-2xl lg:text-3xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed relative z-20">
                  As machines learn to understand us better than we understand ourselves, are we growing closer together... or drifting infinitely apart?
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 3. VERTICAL: Vision / Connection (Black Background) */}
      <section className="min-h-screen flex items-center justify-center py-24 md:py-40 relative z-20 bg-black shadow-[0_-20px_50px_rgba(0,0,0,1)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[8vw] font-black uppercase tracking-tighter mb-12 md:mb-16 leading-[0.9]"
          >
            The Need to <br className="hidden md:block" /><span className="text-[#E62B1E] inline-block md:block ml-2 md:ml-0">Connect</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-12 text-lg md:text-2xl lg:text-4xl font-light leading-tight max-w-4xl mx-auto text-gray-400"
          >
            <p>
              Located in Kolkata's IT hub, IEM Salt Lake has always driven technical innovation. 
            </p>
            <p>
              But innovation without humanity is empty. We are bringing the brightest minds together not just to share ideas, but to remind us what it means to be <strong className="text-white font-medium">human</strong>.
            </p>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
