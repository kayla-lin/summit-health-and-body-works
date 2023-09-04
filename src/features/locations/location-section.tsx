"use client";
import { SectionHeader } from "@/components/section-header";
import React from "react";
import { Carousel, CarouselItem } from "../../components/ui/carousel";
import Image from "next-image-export-optimizer";
import { ImageWithCaption } from "@/components/image-caption";

const STUDIO_IMAGES = [
  {
    alt: "Exercise chair with dumb bell weights in background",
    src: "/livingston/chair.JPG",
  },
  {
    alt: "Photo of Summit Health and Body Works logo on wall",
    src: "/livingston/logo.JPG",
  },
  { alt: "Photo of Livingston dumb bell rack", src: "/livingston/weights.JPG" },
  { src: "/summit/bells.JPG", alt: "Photo of Summit dumb bell rack" },
  { src: "/summit/main.JPG", alt: "Photo of main gym area of Summit location" },
  {
    src: "/summit/moving-ropes.JPG",
    alt: "Neil moving exercise ropes at the Summit location",
  },
  {
    src: "/summit/pullup.JPG",
    alt: "Neil doing a pull up at the Summit location",
  },
];

export const LocationSection = () => {
  return (
    <section className="space-y-32" id="locations">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-10">
        <SectionHeader
          subTitle="Where are we?"
          title="Locations"
          desc=" Summit Health and Body Works has locations in Summit and Livingston
            New Jersey. Livingston is our newest location, opening in 2022."
        />
        <div className="flex gap-10 flex-wrap items-center justify-center">
          <ImageWithCaption
            desc="447 SpringField Ave, Summit, NJ 07901"
            title="Summit Gym"
            img="/summit/store-front.jpg"
            alt="Summit location store front"
          />
          <ImageWithCaption
            desc="25 W NorthField Road Livingston, NJ 07039"
            title="Livingston Gym"
            img="/livingston/store-front.png"
            alt="Livingston location store front"
          />
        </div>
      </div>
      <div>
        <Carousel
          items={STUDIO_IMAGES}
          renderItem={({ item, isSnapPoint }) => (
            <CarouselItem key={item.alt} isSnapPoint={isSnapPoint}>
              <Image src={item.src} width={250} height={100} alt={item.alt} />
            </CarouselItem>
          )}
        />
      </div>
    </section>
  );
};
