import Image from "next/image";

export default function FavFrame() {
  return (
    <div
      className="flex overflow-hidden mb-[94px] relative"
      style={{
        width: "272px",
        height: "266px",
        background: "rgba(42, 42, 42, 1)",
      }}
    >
      <div
        className="flex-shrink-0 relative overflow-hidden z-10"
        style={{ width: "50%" }}
      >
        <Image
          src="/images/Cover.png"
          alt="Cover"
          width={136}
          height={266}
          className="w-full h-full object-cover pb-8"
          style={{ transform: "translateX(-40px)" }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center  relative z-10">
        <p
          className="text-white mb-4 whitespace-nowrap"
          style={{
            fontFamily:
              "var(--font-saira), ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "104%",
            letterSpacing: "1.5%",
            textAlign: "center",
          }}
        >
          Top 10 <span className="font-bold">(2. Sıra)</span>
        </p>

        <p
          className="text-white mb-1 whitespace-nowrap"
          style={{
            fontFamily:
              "var(--font-saira), ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "104%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          50 CENT
        </p>

        <p
          className="text-white whitespace-nowrap"
          style={{
            fontFamily:
              "var(--font-saira), ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "104%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          CURTIS
        </p>
      </div>
      <Image
        src="/images/frameVektor.png"
        alt="Frame Vector"
        width={272}
        height={100}
        className="absolute left-0 w-full h-16 object-cover pointer-events-none z-30"
        style={{ bottom: "-25px" }}
      />
    </div>
  );
}
