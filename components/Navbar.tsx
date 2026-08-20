"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Speakers", path: "/speakers" },
    { name: "Schedule", path: "/schedule" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="flex flex-col lg:flex-row items-center justify-between py-6 px-8 lg:px-16 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex flex-col mb-4 lg:mb-0 w-full lg:w-auto hover:opacity-80 transition-opacity">
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none">
            <span className="text-[#E62B1E]">TED</span><span className="text-[#E62B1E]">x</span>
          </h1>
          <h2 className="text-lg md:text-xl tracking-wide mt-1 font-light text-gray-200 uppercase">
            IEM SALT LAKE
          </h2>
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap justify-center lg:justify-end items-center gap-6 lg:gap-10 text-sm md:text-base text-gray-300 font-medium w-full lg:w-auto">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors ${
                pathname === link.path ? "text-white" : "hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="text-[#E62B1E] border-b-2 border-[#E62B1E] pb-1 hover:text-red-400 transition-colors"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
