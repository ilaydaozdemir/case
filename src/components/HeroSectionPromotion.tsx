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
      <div className="absolute inset-0 flex items-start justify-center pt-32 z-10 px-2 md:hidden">
        <div
          className="text-center text-white flex items-center gap-2 w-full"
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
      </div>

      {/* Web Content */}
      <div className="absolute inset-0 flex items-start justify-center pt-16 z-10 hidden md:flex">
        <div
          className="text-center text-white flex items-center gap-4"
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
