"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const teamData = [
  {
    category: "Leadership",
    members: [
      { id: "satyajit", name: "Prof. Dr. Satyajit Chakrabarti", role: "Patron", linkedin: "#", about: "Guiding the vision and strategic direction of TEDxIEM Salt Lake." },
      { id: "prabir", name: "Prof. Dr. Prabir Kumar Das", role: "Curator", linkedin: "#", about: "Curating ideas that spark profound local and global conversations." },
      { id: "samapika", name: "Prof. Dr. Samapika Das Biswas", role: "Curator", linkedin: "#", about: "Shaping the narrative and curating transformative ideas." },
      { id: "anubhab", name: "Prof. Dr. Anubhab Ray", role: "Faculty Coordinator", linkedin: "#", about: "Bridging the gap between institutional support and student execution." },
      { id: "riya", name: "Prof. Riya Barui", role: "Faculty Coordinator", linkedin: "#", about: "Overseeing operations and ensuring a seamless organizational workflow." },
    ]
  },
  {
    category: "Student Core",
    members: [
      { id: "anurag", name: "Anurag Deb", role: "Student Head", linkedin: "#", about: "Leading the student body to execute a flawless and unforgettable event." },
      { id: "simpan", name: "Simpan Talukdar", role: "Student Coordinator", linkedin: "#", about: "Coordinating inter-departmental workflows and core operations." },
    ]
  },
  {
    category: "Collaborations & PR",
    members: [
      { id: "dipayan", name: "Dipayan Dhar", role: "Head", linkedin: "#", about: "Driving partnerships and amplifying the TEDxIEM Salt Lake voice." },
      { id: "prajukta", name: "Prajukta Ghosh", role: "Team", linkedin: "#", about: "Building public relations and managing external communications." },
      { id: "ivanjana", name: "Ivanjana Mukherjee", role: "Team", linkedin: "#", about: "Fostering strategic collaborations with sponsors and partners." },
    ]
  },
  {
    category: "Hospitality",
    members: [
      { id: "barenyo", name: "Barenyo Roy", role: "Head", linkedin: "#", about: "Ensuring an exceptional and seamless experience for all attendees." },
      { id: "aruneema", name: "Aruneema Mukherjee", role: "Team", linkedin: "#", about: "Managing guest relations and speaker hospitality operations." },
      { id: "kaustav", name: "Kaustav Ghosh", role: "Team", img: "/team/kaustav.png", linkedin: "#", about: "Coordinating logistics for attendee comfort and event flow." },
    ]
  },
  {
    category: "Creatives",
    members: [
      { id: "saraswata", name: "Saraswata Chatterjee", role: "Head", linkedin: "#", about: "Directing the visual identity and artistic experience of the event." },
      { id: "ankit", name: "Ankit Kumar Prasad", role: "Team", linkedin: "#", about: "Designing impactful digital and physical assets for the stage." },
      { id: "shreyasi", name: "Shreyasi Ghosh", role: "Team", linkedin: "#", about: "Crafting the aesthetic narrative and brand cohesion across all media." },
    ]
  },
  {
    category: "Logistics & Treasury",
    members: [
      { id: "krisna", name: "Krisna Kumar Choudhary", role: "Head", linkedin: "#", about: "Managing resources, infrastructure, and financial operations securely." },
      { id: "prasoon", name: "Prasoon Bhardwaj", role: "Team", linkedin: "#", about: "Executing ground-level logistics and technical infrastructure." },
      { id: "aman", name: "Aman Kumar", role: "Team", linkedin: "#", about: "Ensuring smooth financial tracking and operational deployment." },
    ]
  }
];

export default function Team() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // 3D Entrance Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, rotateX: 45, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#E62B1E] selection:text-white pb-32">

      {/* Hero Header */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h4 className="text-[#E62B1E] font-mono tracking-widest uppercase mb-4 text-sm md:text-base">
            {">"} The Minds Behind The Spark
          </h4>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Team</span>
          </h1>
        </motion.div>
      </section>

      {/* Team Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-40">
        {teamData.map((section) => (
          <section key={section.category} className="relative">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-6 mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                {(() => {
                  const words = section.category.split(" ");
                  if (words.length > 1) {
                    return (
                      <>
                        <span className="text-white">{words[0]}</span>{" "}
                        <span className="text-[#E62B1E]">{words.slice(1).join(" ")}</span>
                      </>
                    );
                  } else {
                    const mid = Math.ceil(section.category.length / 2);
                    return (
                      <>
                        <span className="text-white">{section.category.slice(0, mid)}</span>
                        <span className="text-[#E62B1E]">{section.category.slice(mid)}</span>
                      </>
                    );
                  }
                })()}
              </h2>
              <div className="flex-1 h-[1px] bg-gray-800 hidden md:block"></div>
            </motion.div>

            {/* Flat Grid with 3D Perspective */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              style={{ perspective: 1000 }}
            >
              {section.members.map((member, i) => {
                // Spotlight logic
                const isHovered = hoveredId === member.id;
                const isAnotherHovered = hoveredId !== null && hoveredId !== member.id;

                return (
                  <motion.div
                    key={member.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    // Apply spotlight dimming effect dynamically via styles
                    className={`relative w-full aspect-[3/4] transition-all duration-500 ease-out cursor-pointer ${isAnotherHovered ? "opacity-30 blur-[2px] scale-95 z-0" : isHovered ? "scale-105 z-20" : "opacity-100 scale-100 z-10"
                      }`}
                  >

                    {/* The Card (Clipped) */}
                    <div className={`absolute inset-0 overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 transition-shadow duration-500 ${isHovered ? "shadow-2xl shadow-red-900/20" : ""}`}>
                      {/* Fallback pattern in case image is missing */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400 via-black to-black transition-opacity duration-700"></div>

                      {/* The Image (automatically tries .jpg, .png, .jpeg, .webp) */}
                      <img
                        src={`/team/${member.id}.jpg`}
                        alt={member.name}
                        onError={(e) => {
                          const target = e.currentTarget;
                          const currentSrc = target.src;
                          const basePath = `/team/${member.id}`;

                          if (currentSrc.endsWith(".jpg")) {
                            target.src = `${basePath}.png`;
                          } else if (currentSrc.endsWith(".png")) {
                            target.src = `${basePath}.jpeg`;
                          } else if (currentSrc.endsWith(".jpeg")) {
                            target.src = `${basePath}.webp`;
                          } else {
                            target.style.display = "none";
                          }
                        }}
                        className={`absolute inset-0 object-cover w-full h-full transition-all duration-700 ${isHovered ? "grayscale-0 opacity-100 scale-105" : "grayscale opacity-50 scale-100"
                          }`}
                      />

                      {/* Cinematic Overlay */}
                      <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" : "bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"
                        }`}></div>

                      {/* Name and Role */}
                      <div className={`absolute bottom-0 left-0 w-full p-6 md:p-8 transition-transform duration-500 ease-out ${isHovered ? "translate-y-0" : "translate-y-2"
                        }`}>
                        <div className={`w-8 h-1 bg-[#E62B1E] mb-4 transform transition-transform duration-500 origin-left ease-out ${isHovered ? "scale-x-100" : "scale-x-0"
                          }`}></div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight leading-tight">
                          {member.name}
                        </h4>
                        <p className={`text-xs md:text-sm font-mono uppercase tracking-widest transition-colors ${isHovered ? "text-gray-200" : "text-gray-400"
                          }`}>
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Hover Pop-out Box (Tech Theme) */}
                    {/* Rendered outside the overflow-hidden card so it pops out completely */}
                    <div className={`hidden lg:block absolute top-8 w-64 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl p-6 shadow-2xl transition-all duration-300 ease-out z-30 ${i % 3 === 2 ? "right-[105%] origin-right" : "left-[105%] origin-left" // 3rd column pops left, others pop right
                      } ${isHovered ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                      }`}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse"></div>
                        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Profile_Data</span>
                      </div>

                      <p className="text-sm text-gray-300 font-mono mb-6 leading-relaxed">
                        {member.about}
                      </p>

                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-mono font-bold text-[#E62B1E] hover:text-white transition-colors"
                      >
                        {">"} LINKEDIN_
                      </a>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </section>
        ))}
      </div>

    </div>
  );
}
