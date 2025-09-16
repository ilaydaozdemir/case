"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function HeroSection() {
  return (
    <div className="relative">
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
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ height: "623px" }}
      >
        <SwiperSlide>
          <div className="w-full h-full  flex items-center justify-center translate-y-[25px] relative overflow-hidden">
            <img src="/images/hero1.png" alt="Hero 1" />
            <img
              src="/images/texture.png"
              alt="Texture overlay"
              className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-start translate-y-[25px] relative overflow-hidden">
            <img
              src="/images/hero2.png"
              alt="Hero 2"
              className="block h-full w-auto"
            />
            <img
              src="/images/texture.png"
              alt="Texture overlay"
              className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Custom navigation buttons */}
      <button
        className="hero-prev absolute left-4 md:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-10 select-none transition-transform hover:scale-105 cursor-pointer"
        aria-label="Önceki"
      >
        <img src="/icons/arrowLeft.png" alt="Önceki" width="36" height="36" />
      </button>
      <button
        className="hero-next absolute right-4 md:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-10 select-none transition-transform hover:scale-105 cursor-pointer"
        aria-label="Sonraki"
      >
        <img src="/icons/arrowRight.png" alt="Sonraki" width="36" height="36" />
      </button>
      <style jsx global>{`
        .mySwiper .swiper-pagination-bullet {
          background: #000000;
          opacity: 1;
        }
        .mySwiper .swiper-pagination-bullet-active {
          background: rgba(240, 231, 77, 1);
        }
        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
          display: none;
        }
      `}</style>
    </div>
  );
}
