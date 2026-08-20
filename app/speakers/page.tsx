"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Speaker {
  id: string;
  name: string;
  title: string;
  track: string;
  topic: string;
  time: string;
  image: string;
  abstract: string;
  takeaways: string[];
  quote: string;
}

const tracks = ["ALL", "AI & HUMANITY", "DIGITAL DETOX", "FUTURE SOCIETY"];

const speakersData: Speaker[] = [
  {
    id: "rostova",
    name: "Dr. Elena Rostova",
    title: "AI Ethics Researcher & Neuroscientist",
    track: "AI & HUMANITY",
    topic: "The Architecture of Artificial Empathy",
    time: "10:30 AM",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    abstract: "As neural networks begin simulating emotional intelligence, we face a crucial dilemma: are we building machines that truly understand human pain, or merely sophisticated mirrors reflecting our desire for connection?",
    takeaways: [
      "The boundary between simulated and authentic human emotion",
      "Why emotional AI might worsen digital isolation before fixing it",
      "Designing empathetic tech without replacing genuine human presence"
    ],
    quote: "A machine can predict your tears down to the millisecond, but it will never know why you weep."
  },
  {
    id: "marcus",
    name: "Marcus Chen",
    title: "Technologist & Author",
    track: "DIGITAL DETOX",
    topic: "Reclaiming Silence in a Hyper-Connected Void",
    time: "11:45 AM",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    abstract: "Constant connectivity has obliterated quiet reflection. Marcus breaks down how micro-doses of deliberate disconnect can restore cognitive autonomy and rebuild deep interpersonal intimacy.",
    takeaways: [
      "The neuroscience of constant push-notifications on empathy",
      "Practical protocols for intentional digital solitude",
      "How friction-filled communication strengthens human bonds"
    ],
    quote: "We traded quiet solitude for constant presence, and ended up lonelier than ever."
  },
  {
    id: "sarah",
    name: "Sarah Jenkins",
    title: "Sociologist & Synthetic Media Strategist",
    track: "FUTURE SOCIETY",
    topic: "Synthetic Companions: The New Social Order",
    time: "02:00 PM",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    abstract: "Millions of individuals now maintain daily conversations with AI avatars. Sarah explores the societal consequences of customized artificial companions replacing real-world relationships.",
    takeaways: [
      "The rise of algorithmically curated parasocial intimacy",
      "Impact on youth socialization and conflict resolution skills",
      "Blueprint for building real-world community spaces in 2026"
    ],
    quote: "When your ideal friend is written in code, real people start to feel inconvenient."
  },
  {
    id: "kael",
    name: "Kaelen Vance",
    title: "Cyber-Philosopher & VR Architect",
    track: "FUTURE SOCIETY",
    topic: "The Geometry of Digital Loneliness",
    time: "03:15 PM",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    abstract: "Virtual reality promised infinite worlds of co-presence, yet users report unprecedented feelings of detachment. Kaelen dissects the visual syntax of spatial isolation in virtual spaces.",
    takeaways: [
      "Why infinite virtual space can amplify real-world claustrophobia",
      "Spatial design principles for meaningful online gathering",
      "Re-anchoring human identity in physical community hubs"
    ],
    quote: "In a world where you can be anywhere with anyone, being somewhere with someone becomes a lost art."
  },
  {
    id: "maya",
    name: "Maya Lin-Torres",
    title: "Cognitive Scientist & Human Factors Lead",
    track: "AI & HUMANITY",
    topic: "Algorithmic Solitude & The Echo of Self",
    time: "04:30 PM",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    abstract: "Personalized feeds ensure we only ever hear echoes of our own thoughts. Maya unveils research on how algorithmic hyper-customization erodes our collective capacity for shared truth.",
    takeaways: [
      "The feedback loops of personalized AI recommendation engines",
      "How isolation from opposing views degrades social cohesion",
      "Engineering randomness into algorithmic feeds"
    ],
    quote: "When algorithms give us only what we ask for, we forget how to discover what we need."
  }
];

export default function Speakers() {
  const [activeTrack, setActiveTrack] = useState<string>("ALL");
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const filteredSpeakers = activeTrack === "ALL" 
    ? speakersData 
    : speakersData.filter(s => s.track === activeTrack);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#E62B1E] selection:text-white pb-32">
      
      {/* Hero Header Section */}
      <section className="pt-36 pb-16 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4 text-[#E62B1E] font-mono tracking-widest text-xs md:text-sm uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-ping inline-block" />
            <span>Signal Transmission // 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6">
            Featured <span className="text-[#E62B1E]">Speakers</span>
          </h1>

          <p className="text-gray-400 font-light text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Explorers, thinkers, and provocators dissecting <strong className="text-white font-medium">`ctrl + u: Loneliness in the Era of AI`</strong>.
          </p>
        </motion.div>

        {/* Frequency Track Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-12"
        >
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs md:text-sm tracking-wider uppercase transition-all duration-300 border ${
                activeTrack === track
                  ? "bg-[#E62B1E] border-[#E62B1E] text-white shadow-[0_0_20px_rgba(230,43,30,0.4)]"
                  : "bg-zinc-950 border-zinc-800 text-gray-400 hover:border-gray-600 hover:text-white"
              }`}
            >
              [ {track} ]
            </button>
          ))}
        </motion.div>
      </section>

      {/* Speakers Interactive Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedSpeaker(speaker)}
                className="group relative bg-zinc-950 border border-zinc-800 hover:border-[#E62B1E]/60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_rgba(230,43,30,0.15)] flex flex-col justify-between"
              >
                {/* Top Bar with Time & Track */}
                <div className="p-6 flex items-center justify-between border-b border-zinc-900 bg-zinc-950/80 relative z-10">
                  <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E] inline-block" />
                    {speaker.time}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500 border border-zinc-800 px-2 py-0.5 rounded uppercase tracking-wider">
                    {speaker.track}
                  </span>
                </div>

                {/* Speaker Portrait Frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                  {/* Audio Wave Frequency Overlay on Hover */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-end gap-1 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[40, 70, 30, 90, 50, 80, 60, 100, 45, 75, 35, 85].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 bg-[#E62B1E] rounded-full animate-pulse"
                        style={{
                          height: `${h}%`,
                          animationDuration: `${0.4 + (i % 5) * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Speaker Details */}
                <div className="p-6 relative z-10 flex-1 flex flex-col justify-between bg-zinc-950">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#E62B1E] transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-mono text-gray-400 mb-4">{speaker.title}</p>
                    <h4 className="text-lg font-semibold text-gray-200 leading-snug mb-4 italic">
                      "{speaker.topic}"
                    </h4>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-xs text-[#E62B1E] group-hover:text-white transition-colors">
                    <span>{">"} ACCESS DOSSIER</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Speaker Dossier Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpeaker(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6 md:p-10 shadow-[0_0_80px_rgba(230,43,30,0.2)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#E62B1E] transition-colors font-mono text-sm"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Modal Left Image Column */}
                <div className="md:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-zinc-900/90 backdrop-blur border border-zinc-800 rounded-xl font-mono text-xs text-[#E62B1E] flex items-center justify-between">
                    <span>TIME // {selectedSpeaker.time}</span>
                    <span>{selectedSpeaker.track}</span>
                  </div>
                </div>

                {/* Modal Right Info Column */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#E62B1E] uppercase tracking-widest">
                      {">"} SPEECH DOSSIER // {selectedSpeaker.id}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mt-1 mb-2">
                      {selectedSpeaker.name}
                    </h2>
                    <p className="text-sm font-mono text-gray-400">{selectedSpeaker.title}</p>
                  </div>

                  <div className="p-4 bg-zinc-900/50 border-l-4 border-[#E62B1E] rounded-r-xl">
                    <h3 className="text-xl md:text-2xl font-bold text-white italic">
                      "{selectedSpeaker.topic}"
                    </h3>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase text-gray-500 tracking-wider mb-2">
                      Abstract
                    </h4>
                    <p className="text-gray-300 leading-relaxed font-light text-base md:text-lg">
                      {selectedSpeaker.abstract}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase text-gray-500 tracking-wider mb-3">
                      Key Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {selectedSpeaker.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                          <span className="text-[#E62B1E] font-mono font-bold">0{idx + 1}.</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-zinc-900">
                    <p className="text-xs font-mono italic text-gray-400 border-l-2 border-zinc-800 pl-3">
                      "{selectedSpeaker.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
