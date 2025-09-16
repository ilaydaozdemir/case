"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg
 border-b border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-3 px-4 h-[80px]">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={225}
              height={60}
              className="h-[60px] w-auto"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-[30px]" aria-label="Ana menü">
          <Link href="/haberler" className={`text-white no-underline text-[14px] font-normal hover:text-[#F0E74D] ${isActive("/haberler") ? "text-[#F0E74D]" : ""}`}>HABERLER</Link>
          <Link href="/etkinlikler" className={`text-white no-underline text-[14px] font-normal hover:text-[#F0E74D] ${isActive("/etkinlikler") ? "text-[#F0E74D]" : ""}`}>ETKİNLİKLER</Link>
          <Link href="/muzikler" className={`text-white no-underline text-[14px] font-normal hover:text-[#F0E74D] ${isActive("/muzikler") ? "text-[#F0E74D]" : ""}`}>MÜZİKLER</Link>
          <Link href="/videolar" className={`text-white no-underline text-[14px] font-normal hover:text-[#F0E74D] ${isActive("/videolar") ? "text-[#F0E74D]" : ""}`}>VİDEOLAR</Link>
          <Link href="/iletisim" className={`text-white no-underline text-[14px] font-normal hover:text-[#F0E74D] ${isActive("/iletisim") ? "text-[#F0E74D]" : ""}`}>İLETİŞİM</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center justify-center bg-transparent border border-black/10 rounded-lg p-1.5 cursor-pointer" aria-label="Ara">
            <Image
              src="/icons/searchIcon.png"
              alt="Ara"
              width={20}
              height={20}
            />
          </button>
          <Link href="/giris" className="w-[120px] h-[40px] bg-[rgba(255,255,255,1)] text-[rgba(18,18,18,1)] font-bold hover:bg-white/90 no-underline inline-flex items-center justify-center">GİRİŞ YAP</Link>
        </div>
        <button
          className="inline-flex md:hidden items-center justify-center bg-transparent border-0 w-9 h-9 cursor-pointer"
          aria-label="Menüyü Aç/Kapat"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          <Image
            src="/icons/hamburgerMenu.png"
            alt="Menü"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`${isMobileMenuOpen ? "flex" : "hidden"} md:!hidden flex-col gap-2 px-4 pb-3 border-b border-black/5`}>
        <Link href="/haberler" className={`no-underline py-2 text-[var(--foreground)] hover:text-[#F0E74D] ${isActive("/haberler") ? "text-[#F0E74D]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>HABERLER</Link>
        <Link href="/etkinlikler" className={`no-underline py-2 text-[var(--foreground)] hover:text-[#F0E74D] ${isActive("/etkinlikler") ? "text-[#F0E74D]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>ETKİNLİKLER</Link>
        <Link href="/muzikler" className={`no-underline py-2 text-[var(--foreground)] hover:text-[#F0E74D] ${isActive("/muzikler") ? "text-[#F0E74D]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>MÜZİKLER</Link>
        <Link href="/videolar" className={`no-underline py-2 text-[var(--foreground)] hover:text-[#F0E74D] ${isActive("/videolar") ? "text-[#F0E74D]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>VİDEOLAR</Link>
        <Link href="/iletisim" className={`no-underline py-2 text-[var(--foreground)] hover:text-[#F0E74D] ${isActive("/iletisim") ? "text-[#F0E74D]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>İLETİŞİM</Link>
        <div className="flex items-center gap-3 pt-1">
          <button className="inline-flex items-center justify-center bg-transparent border border-black/10 rounded-lg p-1.5 cursor-pointer" aria-label="Ara">
            <Image
              src="/icons/searchIcon.png"
              alt="Ara"
              width={20}
              height={20}
            />
          </button>
          <Link href="/giris" className="w-[120px] h-[40px] bg-[rgba(255,255,255,1)] text-[rgba(18,18,18,1)] font-bold no-underline rounded-lg inline-flex items-center justify-center">GİRİŞ YAP</Link>
        </div>
      </div>
    </header>
  );
}


