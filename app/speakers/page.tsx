const speakers = [
  { name: "Dr. Elena Rostova", topic: "The Future of Artificial Empathy", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", time: "10:30 AM" },
  { name: "Marcus Chen", topic: "Digital Detox in a Hyperconnected World", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80", time: "11:45 AM" },
  { name: "Sarah Jenkins", topic: "Redefining Community via AI", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80", time: "02:00 PM" },
];

export default function Speakers() {
  return (
    <div className="flex-1 w-full bg-black relative">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-black to-black opacity-60 z-0 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <h1 className="text-5xl md:text-7xl font-black mb-20 text-center">
          Featured <span className="text-[#E62B1E]">Speakers</span>
        </h1>
        
        <div className="flex flex-col gap-16">
          {speakers.map((speaker, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center md:items-start group">
              <div className="w-full md:w-1/3 aspect-square md:aspect-[4/5] relative overflow-hidden rounded-xl border-2 border-white/10 transition-colors group-hover:border-[#E62B1E]/50 bg-zinc-900">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center py-6">
                <p className="text-[#E62B1E] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">{speaker.time}</p>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">{speaker.name}</h2>
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 italic mb-8 border-l-4 border-[#E62B1E] pl-6 py-2">"{speaker.topic}"</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                  Join {speaker.name.split(" ")[0]} as they explore the profound impacts of technology on human connection. This talk will challenge your perspective on how we interact with both machines and each other in the modern era.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
