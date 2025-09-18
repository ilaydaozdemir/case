"use client";
import FavFrame from "@/ui/favFrame";
import Image from "next/image";
import React, { useState } from "react";

export default function FavSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 3;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // Mouse wheel handler
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (isTransitioning) return;

    if (e.deltaY > 0) {
      // Scroll down - next slide
      nextSlide();
    } else if (e.deltaY < 0) {
      // Scroll up - prev slide
      prevSlide();
    }
  };

  // Touch handlers for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTransitioning]);

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: "rgba(18,18,18,1)",
        paddingTop: "72px",
        minHeight: "400px",
      }}
    >
      {/* Mobil görünüm */}
      <div
        className="absolute top-0 left-0 z-10 flex items-center justify-center gap-2 md:hidden"
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          clipPath: "polygon(0 0, 100% 0, 94% 70%, 0 99%)",
          WebkitClipPath: "polygon(0 0, 100% 0, 94% 70%, 0 99%)",
          width: "90vw",
          height: "60px",
          marginTop: "72px",
        }}
      >
        <Image
          src="/images/YoutubeLogo.png"
          alt="YouTube"
          width={162}
          height={36}
          className="w-[70px] h-[16px] object-contain"
        />
        <Image
          src="/images/SpotifyLogo.png"
          alt="Spotify"
          width={162}
          height={36}
          className="w-[70px] h-[16px] object-contain"
        />
      </div>

      {/* Desktop görünüm */}
      <div
        className="absolute top-0 left-0 z-10 hidden md:flex items-center justify-center gap-8 mb-16"
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          clipPath: "polygon(0 0, 100% 0, 94% 70%, 0 99%)",
          WebkitClipPath: "polygon(0 0, 100% 0, 94% 70%, 0 99%)",
          width: "602px",
          height: "126px",
          marginTop: "72px",
        }}
      >
        <Image
          src="/images/YoutubeLogo.png"
          alt="YouTube"
          width={162}
          height={36}
          className="w-[162px] h-[36px] object-contain"
        />
        <Image
          src="/images/SpotifyLogo.png"
          alt="Spotify"
          width={162}
          height={36}
          className="w-[162px] h-[36px] object-contain"
        />
      </div>

      {/* İçerik alanı */}
      <div className="px-4 md:px-8 lg:px-16 mt-16 md:mt-50 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex-shrink-0">
            <h2
              className="text-white font-bold text-[40px] mt-4 md:text-[60px] text-center md:text-left"
              style={{
                fontFamily:
                  '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                fontWeight: "700",
                lineHeight: "89%",
                letterSpacing: "0%",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              <span className="block">AYIN</span>
              <span className="block">FAVORİLERİ</span>
            </h2>
          </div>

          <div className="flex-1 relative">
            {/* Custom Smooth Slider Container */}
            <div
              className="slider-container relative w-full overflow-hidden select-none"
              style={{ height: "400px" }}
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex items-center justify-center h-full relative">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      transform: `translateX(${
                        (index - currentSlide) * 300
                      }px)`,
                      opacity:
                        Math.abs(index - currentSlide) <= 1
                          ? index === currentSlide
                            ? 1
                            : 0.4
                          : 0,
                      zIndex: index === currentSlide ? 10 : 1,
                      pointerEvents:
                        Math.abs(index - currentSlide) <= 1 ? "auto" : "none",
                    }}
                    onClick={() => {
                      if (!isTransitioning && index !== currentSlide) {
                        setCurrentSlide(index);
                        setIsTransitioning(true);
                        setTimeout(() => setIsTransitioning(false), 700);
                      }
                    }}
                  >
                    <FavFrame />
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar Pagination */}
            <div className="flex justify-center -mt-8">
              <div className="w-100 h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                    backgroundColor: "rgba(240, 231, 77, 1)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
