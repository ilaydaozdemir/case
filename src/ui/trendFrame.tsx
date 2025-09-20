import Image from "next/image";
import posts from "@/data/posts.json";
import { Post } from "@/types/post";

export default function TrendFrame() {
  // Sadece trends: true olan postları filtrele
  const trendPosts = (posts as Post[]).filter(
    (post) => post.attributes.trends === true
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 mt-8">
      <div className="space-y-4 lg:space-y-0 w-full max-w-[413px] mx-auto lg:max-w-none lg:mx-0">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
        {trendPosts.map((post, index) => (
          <div key={post._id} className="space-y-2 md:space-y-4 md:max-w-none mb-8 lg:mb-0">
            <div className="flex items-start gap-3 md:gap-6 hover:transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
              <div
                className="flex items-center justify-center text-white font-bold text-4xl md:text-5xl lg:text-[60px]"
                style={{
                  fontFamily:
                    '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                  fontWeight: "700",
                  lineHeight: "89%",
                  letterSpacing: "0%",
                  flexShrink: 0,
                  color: "rgba(42, 42, 42, 1)",
                  paddingRight: "15px",
                }}
              >
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div
                  className="flex items-center gap-2 md:gap-4"
                  style={{ marginBottom: "15px" }}
                >
                  <Image
                    src={post.attributes.img}
                    alt={post.attributes.title}
                    width={32.74}
                    height={32.74}
                    className="rounded-[4px] object-cover"
                  />
                  <p
                    className="text-white text-lg md:text-xl lg:text-[25px]"
                    style={{
                      fontFamily:
                        'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                      fontWeight: "700",
                      lineHeight: "120%",
                      letterSpacing: "1.5%",
                    }}
                  >
                    {post.attributes.authors.join(", ")}
                  </p>
                </div>

                <h3
                  className="text-white font-bold uppercase text-sm md:text-base"
                  style={{
                    fontFamily:
                      '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                    fontWeight: "700",
                    lineHeight: "104%",
                    letterSpacing: "0%",
                    textTransform: "uppercase",
                  }}
                >
                  {post.attributes.title}
                </h3>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6">
              <div className="w-[50px] md:w-[80px]"></div>
              <div
                className="w-[280px] md:w-[301px] h-[1px] "
                style={{ backgroundColor: "rgba(59, 59, 59, 1)" }}
              ></div>
            </div>
            <div className="flex gap-2 md:gap-6 ">
              <div className="w-[50px] md:w-[80px]"></div>
              <div className="w-[280px] md:w-auto text-white text-xs md:text-base hover:text-[#F0E74D] cursor-pointer">
                Daha Fazla Oku
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {trendPosts.length === 0 && (
        <div className="text-center text-gray-400 py-12">
          <p className="text-lg">Henüz trend içerik bulunmuyor.</p>
        </div>
      )}
    </div>
  );
}
