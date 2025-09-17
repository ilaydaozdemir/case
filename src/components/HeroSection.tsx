"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideContent = [
    {
      title: ["DÜNYA RAP", "TRENDLERİNİ", "KONUŞUYORUZ."],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
    },
    {
      title: ["TÜRKÇE RAP VE", "DÜNYA MÜZİK", "HABERLERİNİ TAKİP ET"],
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
    }
  ];

  return (
    <div className="relative">
      {/* Mobile text section - above slider */}
      <div className="block md:hidden px-4 pt-24 pb-8 bg-black">
        <div
          className="text-center"
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontFamily:
              '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
          }}
        >
          <h2
            className="font-bold text-[30px] leading-[110%]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {slideContent[currentSlide].title.map((line, index) => (
              <span key={index} className="block">{line}</span>
            ))}
          </h2>
          <p
            className="mt-2 text-[14px] leading-[120%] font-normal tracking-[0.015em] max-w-[320px] mx-auto"
            style={{
              fontFamily:
                'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
            }}
          >
            {slideContent[currentSlide].description}
          </p>
          <div className="mt-4" style={{ filter: "drop-shadow(5.55px 5.55px 0px rgba(0, 0, 0, 1))" }}>
            <button
              className="text-black border-0 cursor-pointer flex items-center justify-center mx-auto"
              style={{
                width: "136px",
                height: "39px",
                backgroundColor: "rgba(240, 231, 77, 1)",
                clipPath: "polygon(0 0, 100% 0, 95% 88%, 4% 73%);",
                WebkitClipPath: "polygon(0 0, 100% 0, 95% 88%, 4% 73%);;",
                fontFamily: "var(--font-saira), ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "1",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              Devamını Oku
            </button>
          </div>
        </div>
      </div>

      <Swiper
        cssMode={true}
        navigation={{
          enabled: true,
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        allowTouchMove={true}
        touchRatio={1}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ height: "623px" }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        <SwiperSlide>
          <div className="w-full h-full  flex items-center justify-center translate-y-[25px] relative overflow-hidden">
            <div
              className="hidden md:block absolute md:right-20 md:top-[87px] xl:right-40 z-10 md:text-left"
              style={{
                color: "rgba(18, 18, 18, 1)",
                fontFamily:
                  '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
              }}
            >
              <h2
                className="font-bold text-[30px] md:text-[60.1px] leading-[110%]"
                style={{ letterSpacing: "-0.02em" }}
              >
{slideContent[0].title.map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </h2>
              <p
                className="mt-2 text-[14px] md:text-[16px] leading-[120%] font-normal tracking-[0.015em] max-w-[320px] md:max-w-[560px]"
                style={{
                  fontFamily:
                    'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi.
              </p>
              <div
                className="mt-4"
                style={{
                  filter: "drop-shadow(5.55px 5.55px 0px rgba(0, 0, 0, 1))",
                }}
              >
                <button
                  className="text-black border-0 cursor-pointer flex items-center justify-center"
                  style={{
                    width: "136px",
                    height: "39px",
                    backgroundColor: "rgba(240, 231, 77, 1)",
                    clipPath: "polygon(0 0, 100% 0, 95% 97%, 5% 83%);",
                    WebkitClipPath: "polygon(0 0, 100% 0, 95% 97%, 5% 83%);",
                    fontFamily:
                      "var(--font-saira), ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "1",
                    letterSpacing: "0%",
                    textAlign: "center",
                  }}
                >
                  Devamını Oku
                </button>
              </div>
            </div>
            <Image
              src="/images/hero1.png"
              alt="Hero 1"
              width={1200}
              height={623}
              className="block h-full w-auto"
              priority
            />
            <Image
              src="/images/texture.png"
              alt="Texture overlay"
              width={1200}
              height={623}
              className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-start translate-y-[25px] relative overflow-hidden">
            <div
              className="hidden md:block absolute md:right-20 md:top-[87px] xl:right-40 z-10 md:text-left"
              style={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily:
                  '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
              }}
            >
              <h2
                className="font-bold text-[30px] md:text-[60.1px] leading-[110%]"
                style={{ letterSpacing: "-0.02em" }}
              >
                {slideContent[1].title.map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </h2>
              <p
                className="mt-2 text-[14px] md:text-[16px] leading-[120%] font-normal tracking-[0.015em] max-w-[320px] md:max-w-[560px]"
                style={{
                  fontFamily:
                    'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi.
              </p>
              <div
                className="mt-4"
                style={{
                  filter: "drop-shadow(5.55px 5.55px 0px rgba(0, 0, 0, 1))",
                }}
              >
                <button
                  className="text-black border-0 cursor-pointer flex items-center justify-center"
                  style={{
                    width: "136px",
                    height: "39px",
                    backgroundColor: "rgba(240, 231, 77, 1)",
                    clipPath: "polygon(0 0, 100% 0, 95% 97%, 5% 83%);",
                    WebkitClipPath: "polygon(0 0, 100% 0, 95% 97%, 5% 83%);",
                    fontFamily:
                      "var(--font-saira), ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "1",
                    letterSpacing: "0%",
                    textAlign: "center",
                  }}
                >
                  Devamını Oku
                </button>
              </div>
            </div>
            <Image
              src="/images/hero2.png"
              alt="Hero 2"
              width={1200}
              height={623}
              className="block h-full w-auto"
            />
            <Image
              src="/images/texture.png"
              alt="Texture overlay"
              width={1200}
              height={623}
              className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Vector effect as frame at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 h-20">
        <Image
          src="/images/vektor.png"
          alt="Vector effect"
          width={1200}
          height={80}
          className="w-full h-full object-cover"
          style={{
            filter:
              "hue-rotate(0deg) saturate(0%) brightness(0%) contrast(1000%)",
            opacity: 1,
          }}
        />
      </div>

      <button
        className="hero-prev hidden md:inline-flex absolute left-4 md:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-10 select-none transition-transform hover:scale-105 cursor-pointer"
        aria-label="Önceki"
      >
        <Image src="/icons/arrowLeft.png" alt="Önceki" width="36" height="36" />
      </button>
      <button
        className="hero-next hidden md:inline-flex absolute right-4 md:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-10 select-none transition-transform hover:scale-105 cursor-pointer"
        aria-label="Sonraki"
      >
        <Image
          src="/icons/arrowRight.png"
          alt="Sonraki"
          width="36"
          height="36"
        />
      </button>
      <style jsx global>{`
        .mySwiper .swiper-pagination-bullet {
          background: #000000;
          opacity: 1;
        }
        .mySwiper .swiper-pagination-bullet-active {
          background: rgba(240, 231, 77, 1);
        }

        .mySwiper .swiper-pagination {
          left: 1rem !important;
          right: auto !important;
          bottom: auto !important;
          top: 480px !important;
          width: auto !important;
          text-align: left !important;
        }
        @media (min-width: 768px) {
          .mySwiper .swiper-pagination {
            left: auto !important;
            right: 5rem !important;
            top: 280px !important;
          }
        }
        @media (min-width: 1280px) {
          .mySwiper .swiper-pagination {
            right: 43rem !important;
            top: 480px !important;
          }
        }
        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
          display: none;
        }
      `}</style>
    </div>
  );
}
