import TrendFrame from "@/ui/trendFrame";
import Image from "next/image";

export default function TrendSection() {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "rgba(18, 18, 18, 1)",
        height: "854px",
      }}
    >
      <div className="flex items-center pt-[83px] pl-4 md:pl-8 lg:pl-16">
        <h2
          className="text-white font-bold"
          style={{
            fontFamily:
              '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
            fontWeight: "700",
            fontSize: "45px",
            lineHeight: "89%",
            letterSpacing: "0%",
          }}
        >
          TRENDLER
        </h2>
        <div className="ml-4">
          <Image
            src="/icons/trendIcon.png"
            alt="Trend"
            width={45}
            height={45}
            className="w-[45px] h-[45px] object-contain"
          />
        </div>
      </div>
      <TrendFrame />

      <button
        className="text-black border-0 cursor-pointer flex items-center justify-center mx-auto"
        style={{
          width: "136px",
          height: "39px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          clipPath: "polygon(0 0, 100% 0, 94% 100%, 4% 88%)",
          WebkitClipPath: "polygon(0 0, 100% 0, 94% 100%, 4% 88%)",
          fontFamily:
            "var(--font-saira), ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
          fontWeight: "700",
          fontSize: "14px",
          lineHeight: "1",
          letterSpacing: "0%",
          textAlign: "center",
          color: "black",
          marginTop: "80px",
        }}
      >
        Tümünü Gör
      </button>
    </div>
  );
}
