"use client";

import Image from "next/image";

export default function HeroSectionPromotion() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero2Bc.png"
          alt="Background gradient"
          width={1200}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src="/images/hero2people.png"
          alt="People base"
          width={1200}
          height={400}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="flex-shrink-0 w-[140px] sm:w-auto">
          <Image
            src="/images/person2.png"
            alt="Person 2"
            width={300}
            height={400}
            className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-[140px] sm:w-auto">
          <Image
            src="/images/person1.png"
            alt="Person 1"
            width={300}
            height={400}
            className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] object-contain"
          />
        </div>
      </div>
      {/* Mobile Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-32 z-10 px-2 md:hidden">
        <div
          className="text-center text-white flex items-center gap-2 w-full mb-6"
          style={{ transform: "rotate(-3.7deg)" }}
        >
          <Image
            src="/icons/twitch.png"
            alt="Twitch"
            width={60}
            height={60}
            className="w-[100px] h-[70px] object-contain flex-shrink-0"
          />
          <div
            className="w-[1px] h-[50px]"
            style={{ backgroundColor: "rgba(59, 59, 59, 1)" }}
          ></div>
          <div className="text-center flex-1 min-w-0">
            <h2
              className="font-light leading-[89%] mb-2"
              style={{
                fontFamily:
                  '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                fontWeight: "300",
                fontSize: "32px",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              HER HAFTA
            </h2>
            <h3
              className="font-bold leading-[89%]"
              style={{
                fontFamily:
                  '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                fontWeight: "700",
                fontSize: "32px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "rgba(240, 231, 77, 1)",
              }}
            >
              CANLIDAYIZ!
            </h3>
            <p
              className="font-bold leading-[104%] mt-4"
              style={{
                fontFamily:
                  'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                fontWeight: "700",
                fontSize: "10px",
                letterSpacing: "1.5%",
                textAlign: "left",
              }}
            >
              Bizi Takip Edin!
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="flex gap-2"
            style={{
              border: "1.17px solid rgba(42, 42, 42, 1)",
              borderRadius: "18.75px",
              padding: "8px 12px",
              backgroundColor: "transparent",
              transform: "rotate(-4deg)",
            }}
          >
            <button
              className="flex items-center text-white font-medium text-sm"
              style={{
                width: "106.25px",
                height: "37.09px",
                borderRadius: "7.03px",
                paddingTop: "10.55px",
                paddingRight: "14.06px",
                paddingBottom: "10.55px",
                paddingLeft: "14.06px",
                gap: "8.2px",
                background: "rgba(134, 76, 246, 1)",
              }}
            >
              <Image
                src="/icons/likeIcon.png"
                alt="Like"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              Takip Et
            </button>
            <button
              className="flex items-center text-white font-medium text-sm"
              style={{
                width: "134.29px",
                height: "37.09px",
                borderRadius: "7.03px",
                paddingTop: "10.55px",
                paddingRight: "14.06px",
                paddingBottom: "10.55px",
                paddingLeft: "14.06px",
                gap: "8.2px",
                background: "rgba(34, 33, 35, 1)",
              }}
            >
              <Image
                src="/icons/starIcon.png"
                alt="Star"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Abone Ol</span>
              <div
                className="w-2.5 h-2.5 self-center"
                style={{
                  borderBottom: "1.5px solid white",
                  borderRight: "1.5px solid white",
                  transform: "rotate(45deg)",
                  marginLeft: "3px",
                }}
              ></div>
            </button>
          </div>
        </div>
      </div>

      {/* Web Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 z-10 hidden md:flex">
        <div
          className="text-center text-white flex items-center gap-4 mb-8"
          style={{ transform: "rotate(-3.7deg)" }}
        >
          <Image
            src="/icons/twitch.png"
            alt="Twitch"
            width={60}
            height={60}
            className="w-[158px] h-[98px] object-contain"
          />

          <div
            className="w-[1px] h-[80px]"
            style={{ backgroundColor: "rgba(59, 59, 59, 1)" }}
          ></div>

          <div className="text-center">
            <h2
              className="font-light leading-[89%] mb-2"
              style={{
                fontFamily:
                  '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                fontWeight: "300",
                fontSize: "68.24px",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              HER HAFTA
            </h2>
            <h3
              className="font-bold leading-[89%]"
              style={{
                fontFamily:
                  '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                fontWeight: "700",
                fontSize: "68.24px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "rgba(240, 231, 77, 1)",
              }}
            >
              CANLIDAYIZ!
            </h3>
            <p
              className="font-bold leading-[104%] mt-4"
              style={{
                fontFamily:
                  'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                fontWeight: "700",
                fontSize: "16px",
                letterSpacing: "1.5%",
                textAlign: "left",
              }}
            >
              Bizi Takip Edin!
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="flex gap-4"
            style={{
              border: "1.17px solid rgba(42, 42, 42, 1)",
              borderRadius: "18.75px",
              padding: "12px 16px",
              transform: "rotate(-4deg)",
            }}
          >
            <button
              className="flex items-center text-white font-medium text-base cursor-pointer"
              style={{
                borderRadius: "7.03px",
                paddingTop: "10.55px",
                paddingRight: "14.06px",
                paddingBottom: "10.55px",
                paddingLeft: "14.06px",
                gap: "8.2px",
                background: "rgba(134, 76, 246, 1)",
              }}
            >
              <Image
                src="/icons/likeIcon.png"
                alt="Like"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Takip Et
            </button>
            <button
              className="flex items-center text-white font-medium text-base cursor-pointer"
              style={{
                borderRadius: "7.03px",
                paddingTop: "10.55px",
                paddingRight: "14.06px",
                paddingBottom: "10.55px",
                paddingLeft: "14.06px",
                gap: "8.2px",
                background: "rgba(34, 33, 35, 1)",
              }}
            >
              <Image
                src="/icons/starIcon.png"
                alt="Star"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Abone Ol</span>
              <div
                className="w-3 h-3 self-center"
                style={{
                  borderBottom: "2px solid white",
                  borderRight: "2px solid white",
                  transform: "rotate(45deg)",
                  marginLeft: "4px",
                }}
              ></div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 h-20">
        <Image
          src="/images/vektor.png"
          alt="Vector frame"
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
    </div>
  );
}
