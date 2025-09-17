import Image from "next/image";

export default function FavSection(){
    return(
        <div className="w-full relative" style={{backgroundColor:"rgba(18,18,18,1)", paddingTop:"72px", minHeight:"400px"}}>
            {/* Mobil görünüm */}
            <div 
                className="absolute top-0 left-0 z-10 flex items-center justify-center gap-2 md:hidden"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    clipPath: "polygon(0 0, 100% 0, 94% 70%, 0 99%)",
                    WebkitClipPath: "polygon(0 0, 100% 0, 94% 70%, 0 99%)",
                    width: "90vw",
                    height: "60px",
                    marginTop:"72px"
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
                    marginTop:"72px"
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
            <div className="px-4 md:px-8 lg:px-16 mt-16 md:mt-50">
                <div className="flex flex-col md:flex-row gap-8">
                  
                    <div className="flex-1">
                        <h2 
                            className="text-white font-bold text-[40px] md:text-[60px] text-center md:text-left"
                            style={{
                                fontFamily: '"Saira Condensed", var(--font-saira), ui-sans-serif, system-ui, -apple-system, "Segoe UI"',
                                fontWeight: "700",
                                lineHeight: "89%",
                                letterSpacing: "0%",
                                color: "rgba(255, 255, 255, 1)"
                            }}
                        >
                            <span className="block">AYIN</span>
                            <span className="block">FAVORİLERİ</span>
                        </h2>
                    </div>
                    
                    <div className="flex-1">
                        <div className="text-white">
                            <p>İçerik burada görünecek</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}