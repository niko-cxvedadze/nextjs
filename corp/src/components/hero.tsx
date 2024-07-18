import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgAlt: string;
  imgData: StaticImageData;
  title: string;
}

export default function Hero({ imgAlt, imgData, title }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="inset-0 absolute -z-10">
        <Image fill alt={imgAlt} src={imgData} style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
}
