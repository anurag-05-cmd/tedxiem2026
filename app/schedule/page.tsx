const scheduleItems = [
  { time: "09:00 AM", title: "Registration & Breakfast", type: "break" },
  { time: "10:00 AM", title: "Opening Ceremony", type: "session" },
  { time: "10:30 AM", title: "Dr. Elena Rostova - Artificial Empathy", type: "talk" },
  { time: "11:45 AM", title: "Marcus Chen - Digital Detox", type: "talk" },
  { time: "01:00 PM", title: "Lunch Break", type: "break" },
  { time: "02:00 PM", title: "Sarah Jenkins - Redefining Community", type: "talk" },
  { time: "03:15 PM", title: "Panel Discussion", type: "session" },
  { time: "04:30 PM", title: "Networking Session", type: "break" },
  { time: "05:30 PM", title: "Closing Remarks", type: "session" },
];

export default function Schedule() {
  return (
    <div className="flex-1 w-full bg-black relative">
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E62B1E]/10 via-black to-black opacity-80 z-0 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 lg:py-32">
        <h1 className="text-5xl md:text-7xl font-black mb-20 text-center">
          Event <span className="text-[#E62B1E]">Schedule</span>
        </h1>
        
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pb-12">
          {scheduleItems.map((item, i) => (
            <div key={i} className="mb-12 relative pl-8 md:pl-16">
              {/* Timeline dot */}
              <div className={`absolute -left-[11px] top-2 h-5 w-5 rounded-full border-4 border-black ${
                item.type === 'talk' ? 'bg-[#E62B1E]' : item.type === 'break' ? 'bg-gray-500' : 'bg-white'
              }`} />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <time className="text-[#E62B1E] font-bold text-xl md:text-2xl min-w-[130px] pt-1">
                  {item.time}
                </time>
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 md:p-8 w-full hover:bg-zinc-800/80 transition-colors">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">{item.title}</h3>
                  {item.type === 'talk' && (
                    <span className="inline-block mt-4 px-3 py-1 bg-[#E62B1E]/20 text-[#E62B1E] text-xs font-bold uppercase tracking-wider rounded">
                      Speaker Session
                    </span>
                  )}
                  {item.type === 'break' && (
                    <span className="inline-block mt-4 px-3 py-1 bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider rounded">
                      Networking / Break
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
