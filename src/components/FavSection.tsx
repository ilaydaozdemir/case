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
                className="absolute top-0 left-0 z-10 hidden md:flex items-center justify-center gap-8"
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
            <div className="px-4 md:px-8 lg:px-16">
                <h2 className="text-white text-2xl font-bold">Favoriler</h2>
            </div>
        </div>
    )
}