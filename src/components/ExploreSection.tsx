"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import posts from "@/data/posts.json";
import { Post } from "@/types/post";

export default function ExploreSection() {
  const [selectedButton, setSelectedButton] = useState<string | null>(
    "Türk Rap"
  );

  const buttons = [
    "Türk Rap",
    "Yabancı Rap",
    "Rap Haberleri",
    "Haftanın Klipleri",
    "Ayın Klipleri",
    "Rap Sohbetleri",
    "Rap Müsabakaları",
  ];

  // Seçili butona göre filtrelenmiş post'ları getir
  const filteredPost = useMemo(() => {
    if (!selectedButton) return null;

    const tagMapping: { [key: string]: string[] } = {
      "Türk Rap": ["Türk Rap"],
      "Yabancı Rap": ["Yabancı Rap"],
      "Rap Haberleri": ["Rap Haberleri"],
      "Haftanın Klipleri": ["Haftanın Videoları", "Haftanın Klipleri"],
      "Ayın Klipleri": ["Ayın Videoları", "Ayın Klipleri"],
      "Rap Sohbetleri": ["Rap Sohbetleri"],
      "Rap Müsabakaları": ["Rap Müsabakaları"],
    };

    const relevantTags = tagMapping[selectedButton] || [];

    const filteredPosts = (posts as Post[]).filter((post) =>
      relevantTags.some((tag) => post.attributes.tags?.includes(tag))
    );

    return filteredPosts.length > 0 ? filteredPosts[0] : null;
  }, [selectedButton]);
  return (
    <div
      className="pt-[52px] w-full"
      style={{
        backgroundColor: "rgba(18, 18, 18, 1)",
        overflowX: "hidden",
        maxWidth: "100vw",
        width: "100%",
      }}
    >
      <div className="lg:hidden px-4 md:px-8 lg:px-16">
        <h2
          className="text-white font-bold mb-8 text-[28px] md:text-[40px]"
          style={{
            fontFamily:
              '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
            fontWeight: "700",
            fontStyle: "Bold",
            lineHeight: "104%",
            letterSpacing: "0%",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          NE GÖRMEK İSTERSİN?
        </h2>

        <div
          className="flex gap-4 mb-8 overflow-x-auto scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => setSelectedButton(button)}
              className="transition-all duration-300 flex-shrink-0"
              style={{
                border:
                  selectedButton === button
                    ? "1px solid rgba(18, 18, 18, 1)"
                    : "1px solid rgba(255, 255, 255, 1)",
                backgroundColor:
                  selectedButton === button
                    ? "rgba(240, 231, 77, 1)"
                    : "transparent",
                color: selectedButton === button ? "black" : "white",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontFamily:
                  'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                fontWeight: "500",
                fontSize: "16px",
                cursor: "pointer",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              {button}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div
            className="px-4 md:px-8 lg:px-16 w-full"
            style={{
              maxWidth: "100vw",
              overflowX: "hidden",
              boxSizing: "border-box",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h2
                  className="text-white font-bold text-[40px] md:text-[60px]"
                  style={{
                    fontFamily:
                      '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                    fontWeight: "700",
                    lineHeight: "89%",
                    letterSpacing: "0%",
                  }}
                >
                  KEŞFET
                </h2>
                <div className="ml-4">
                  <Image
                    src="/icons/exploreIcon.png"
                    alt="Explore"
                    width={45}
                    height={45}
                    className="w-[45px] h-[45px] object-contain"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/icons/searchIcon.png"
                  alt="Search"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain cursor-pointer"
                  style={{ touchAction: "manipulation" }}
                />
                <Image
                  src="/icons/tabIcon.png"
                  alt="Tab 1"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain cursor-pointer"
                  style={{ touchAction: "manipulation" }}
                />
                <Image
                  src="/icons/tabIcon2.png"
                  alt="Tab 2"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain cursor-pointer"
                  style={{ touchAction: "manipulation" }}
                />
              </div>
            </div>

            <div
              className="mt-8"
              style={{ overflowX: "hidden", width: "100%" }}
            >
              <div
                className="flex flex-col md:flex-row gap-5"
                style={{
                  width: "100%",
                  maxWidth: "min(733px, calc(100vw - 32px))",
                  height: "auto",
                  minHeight: "245px",
                  overflowX: "hidden",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="flex flex-col w-full md:w-[300px]"
                  style={{ minWidth: 0 }}
                >
                  <div
                    className="relative w-full md:w-[300px]"
                    style={{
                      height: "196px",
                      minWidth: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <Image
                      src={filteredPost?.attributes.img || "/images/hero1.png"}
                      alt={filteredPost?.attributes.title || "Explore Content"}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="mt-[30px]">
                    <p
                      style={{
                        fontFamily:
                          'Saira, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                        fontWeight: "400",
                        fontStyle: "Regular",
                        fontSize: "16px",
                        lineHeight: "120%",
                        letterSpacing: "1.5%",
                        color: "rgba(59, 59, 59, 1)",
                        touchAction: "manipulation",
                      }}
                    >
                      {filteredPost?.createdAt
                        ? new Date(filteredPost.createdAt).toLocaleDateString(
                            "tr-TR",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )
                        : "15 Aralık 2024"}
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-[413px]" style={{ minWidth: 0 }}>
                  <div
                    className="space-y-4 w-full"
                    style={{
                      height: "auto",
                      minHeight: "226px",
                      minWidth: 0,
                      maxWidth: "100%",
                      overflowX: "hidden",
                    }}
                  >
                    {filteredPost ? (
                      <>
                        <div
                          className="flex items-start gap-6 cursor-pointer"
                          style={{
                            touchAction: "manipulation",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            MozUserSelect: "none",
                            msUserSelect: "none",
                            minWidth: 0,
                            maxWidth: "100%",
                            overflowX: "hidden",
                          }}
                        >
                          <div className="flex flex-col gap-2 flex-1">
                            <div
                              className="flex items-center gap-4"
                              style={{ marginBottom: "15px" }}
                            >
                              <Image
                                src={filteredPost.attributes.img}
                                alt={
                                  filteredPost.attributes.authors?.[0] ||
                                  "Author"
                                }
                                width={32.74}
                                height={32.74}
                                className="rounded-[4px] object-cover"
                              />
                              <p
                                className="text-white"
                                style={{
                                  fontFamily:
                                    'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI", ',
                                  fontWeight: "700",
                                  fontSize: "25px",
                                  lineHeight: "120%",
                                  letterSpacing: "1.5%",
                                }}
                              >
                                {filteredPost.attributes.authors?.[0]}
                              </p>
                            </div>

                            <h3
                              className="text-white font-bold uppercase"
                              style={{
                                fontFamily:
                                  '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                                fontWeight: "700",
                                fontSize: "16px",
                                lineHeight: "104%",
                                letterSpacing: "0%",
                                textTransform: "uppercase",
                              }}
                            >
                              {filteredPost.attributes.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex ">
                          <div className="w-0 flex-shrink-0"></div>
                          <div
                            className="h-[1px] flex-1"
                            style={{
                              backgroundColor: "rgba(59, 59, 59, 1)",
                              maxWidth: "320px",
                            }}
                          ></div>
                        </div>

                        <div className="flex ">
                          <div className="w-0 flex-shrink-0"></div>
                          <div
                            className="text-white text-base cursor-pointer flex-1"
                            style={{
                              touchAction: "manipulation",
                              userSelect: "none",
                              WebkitUserSelect: "none",
                              MozUserSelect: "none",
                              msUserSelect: "none",
                              maxWidth: "320px",
                            }}
                          >
                            Daha Fazla Oku
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="mb-4">
                            <div
                              className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                              style={{
                                backgroundColor: "rgba(59, 59, 59, 0.3)",
                              }}
                            >
                              <span className="text-2xl">🎵</span>
                            </div>
                          </div>
                          <h3
                            className="text-white font-bold mb-2"
                            style={{
                              fontFamily:
                                '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                              fontWeight: "700",
                              fontSize: "18px",
                              lineHeight: "120%",
                              letterSpacing: "0%",
                            }}
                          >
                            İÇERİK BULUNAMADI
                          </h3>
                          <p
                            className="text-gray-400 text-sm"
                            style={{
                              fontFamily:
                                'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                              fontWeight: "400",
                              fontSize: "14px",
                              lineHeight: "120%",
                            }}
                          >
                            Bu kategoride henüz içerik yok.
                            <br />
                            Yakında yeni içerikler eklenecek!
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden lg:block">
          {/* Content 2 - Desktop only */}
          <div className="px-4 md:px-8 lg:px-16">
            {/* Title */}
            <h2
              className="text-white font-bold mb-8 text-[28px] md:text-[40px]"
              style={{
                fontFamily:
                  '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                fontWeight: "700",
                fontStyle: "Bold",
                lineHeight: "104%",
                letterSpacing: "0%",
                color: "white",
                whiteSpace: "nowrap",
              }}
            >
              NE GÖRMEK İSTERSİN?
            </h2>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedButton(button)}
                  className="transition-all duration-300"
                  style={{
                    border:
                      selectedButton === button
                        ? "1px solid rgba(18, 18, 18, 1)"
                        : "1px solid rgba(255, 255, 255, 1)",
                    backgroundColor:
                      selectedButton === button
                        ? "rgba(240, 231, 77, 1)"
                        : "transparent",
                    color: selectedButton === button ? "black" : "white",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontFamily:
                      'var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                    fontWeight: "500",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
