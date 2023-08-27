import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  desc: string;
  img: string;
  alt: string;
}

export const ImageWithCaption = ({ title, desc, img, alt }: Props) => {
  return (
    <div className="flex flex-col items-center max-w-sm text-center space-y-5">
      <div className="w-full md:w-80 relative aspect-video">
        <Image
          src={img}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg border border-gray-300 shadow"
        />
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-gray-500 text-md font-medium max-w-2xl">{desc}</p>
    </div>
  );
};
