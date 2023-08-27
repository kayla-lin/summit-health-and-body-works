import { Button } from "@/components/ui/button";
import { BOOKINGS } from "@/lib/consts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video
          className="min-w-full min-h-full absolute object-cover brightness-50"
          src="/workout.mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="z-20 w-full h-full flex flex-col justify-end items-start space-y-8 pb-10 px-5">
        <Image
          src="/logo.png"
          width={100}
          height={500}
          alt="Summit Health and Body Works logo"
          className="hidden sm:block"
        />
        <h1 className="font-black text-7xl uppercase text-left max-w-xl">
          Take Health into Your Own Hands.
        </h1>
        <div className="flex gap-3">
          <Link href={`#${BOOKINGS.section}`} scroll={true}>
            <Button variant="outline">Book Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
