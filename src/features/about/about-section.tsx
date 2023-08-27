import { SectionHeader } from "@/components/section-header";
import Image from "next/image";
import React from "react";

export const AboutSection = () => {
  return (
    <section
      className="max-w-7xl mx-auto flex flex-col justify-center items-center px-10"
      id="team"
    >
      <SectionHeader
        subTitle="Who we are"
        title="Meet our Trainers"
        desc="Summit Health and Body Works has a wide variety of certified instructors passionate about helping you healthy and holistic exercise routine especially for you."
      />
      <div className="flex-col flex items-center gap-8 justify-center lg:flex-row ">
        <div className="space-y-3 max-w-3xl">
          <h3 className="font-black text-2xl">
            Cornelius &quot;Neil&quot; Wilson
          </h3>
          <p className="font-medium text-gray-600">
            Cornelius Wilson is the founder of Summit Health and Body Works,
            offering personal training, massage therapy, and life coaching. With
            over twenty years experience, Neil holds AFAA and ACE
            certifications.
          </p>
          <p className="font-medium text-gray-600">
            He partners with his clients to create customized workouts,
            promoting overall health and increasing power and flexibility
            through development of proper alignment, balance, and posture. With
            highly effective results, neil employs a holistic program of weight
            training, stretching, and movement to increase his clients’
            mind-body connection. Additionally he is a licensed massage
            therapist, who specializes in trigger point and deep tissue massage
          </p>
        </div>
        <div className="lg:w-[32rem] lg:relative">
          <Image
            src="/neil.jpg"
            alt="Cornelius Wilson"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-lg border border-gray-300 shadow"
          />
        </div>
      </div>
    </section>
  );
};
