import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 px-8 lg:px-16 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
            <Image
              src="/logo.png"
              alt="TEDx IEM Salt Lake"
              width={200}
              height={52}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-gray-500 mt-2 max-w-md">
            This independent TEDx event is operated under license from TED. 
          </p>
        </div>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
