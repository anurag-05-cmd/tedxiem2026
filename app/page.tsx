import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex-1 bg-black text-white overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.png"
          alt="Auditorium Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient overlays to match the dark dramatic lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-7xl mx-auto h-[calc(100vh-100px)]">
        {/* Hero Content */}
        <main className="flex-1 flex flex-col justify-center px-8 lg:px-16 max-w-[900px]">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-9xl lg:text-[150px] font-black leading-none tracking-tighter drop-shadow-2xl">
              <span className="text-[#E62B1E]">CTRL</span> <span className="text-white">+</span> <span className="text-[#E62B1E]">U</span>
            </h1>
            
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide mt-4 drop-shadow-lg">
              Loneliness in the era of <span className="text-[#E62B1E]">AI.</span>
            </p>

            <div className="flex flex-col gap-4 mt-12 pt-8 text-lg text-gray-300 font-light">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>October 1, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>Godrej Genesis, IEM Kolkata</span>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/register" className="inline-flex items-center gap-4 bg-[#E62B1E] hover:bg-red-700 text-white font-semibold py-4 px-8 text-lg transition-colors group">
                Reserve Your Seat
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
