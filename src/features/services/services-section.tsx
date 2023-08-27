import React from "react";
import { ImageWithCaption } from "../../components/image-caption";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BOOKINGS } from "@/lib/consts";

export const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center px-10" id="about">
      <SectionHeader
        subTitle="Why Summit Health and Body Works?"
        title="Target your body's needs"
        desc="Our world-class training staff offer personalized, tailored, structured training programs based on your individual fitness goals and needs. We believe fitness is important, but should not feel like a chore, so we offer fun, unique workouts to keep you on track."
      >
        <Link href={`#${BOOKINGS.section}`} scroll={true}>
          <Button size="lg">Start Booking Now</Button>
        </Link>
      </SectionHeader>
      <div className="flex justify-center gap-10 flex-wrap">
        <ImageWithCaption
          title="Group Lessons"
          desc="Workout with a small group of people (5 - 6 people), with the guide of a
        professional trainer."
          img="/group-classes.jpeg"
          alt="Group exercise class outside of Summit Health and Body Works"
        />
        <ImageWithCaption
          title="Personal Training Lessons"
          desc="Exercise with our world-class training staff to guide you through your personalized training program."
          img="/personal-training.jpeg"
          alt="Personal training encouraging client to continue with reps"
        />
        <ImageWithCaption
          title="Massages"
          desc="Relax with massage therapy: neural muscular, Swedish, deep tissue, prenatal therapy, and more."
          img="/massage.jpg"
          alt="Massage therapist massaging"
        />
      </div>
    </section>
  );
};
