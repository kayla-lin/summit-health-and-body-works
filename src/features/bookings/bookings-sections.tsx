import { SectionHeader } from "@/components/section-header";
import React from "react";
import { BookingCardProps } from "./components/booking-card";
import BookingSection from "./components/booking-section";

const GROUP_LESSONS: BookingCardProps[] = [
  {
    title: "1X/WK Group Training",
    desc: [
      "$25.00 deposit required upon booking for new clients",
      "4-5 people",
      "$80 per person for 60 min",
    ],
  },
  {
    title: "2X/WK Group Training",
    desc: [
      "$25.00 deposit required upon booking for new clients",
      "4-5 people",
      "$140 per person for 60 min",
    ],
  },
];

const PRIVATE_LESSONS: BookingCardProps[] = [
  {
    title: "Single Session (New Clients Only)",
    desc: [
      "$45.00 deposit required upon booking for new clients",
      "$100 per person for 45 min",
    ],
  },
  {
    title: "Single Session",
    desc: [
      "$45.00 deposit required upon booking for new clients",
      "$135 per person for 60 min",
    ],
  },
  {
    title: "2X Week Session",
    desc: ["8 sessions included", "$1000.00 for 60 min"],
  },
  {
    title: "3X Week Session",
    desc: ["9 sessions included", "$1000.00 for 60 min"],
  },
  {
    title: "Kids Single Session",
    desc: [
      "$25.00 deposit required upon booking for new clients",
      "$90.00 for 60 min",
    ],
  },
];

const MASSAGES: BookingCardProps[] = [
  {
    title: "Massage Session",
    desc: [
      "Neural muscular, Swedish, deep tissue, prenatal therapy, and more",
      "Prices may vary, call to book",
    ],
    buttonText: "Call (908) 219-4435 to Book",
    linkProps: {
      href: "tel:908-219-4435",
    },
  },
];

export const BookingsSection = () => {
  return (
    <section className="max-w-7xl mx-auto space-y-10 px-8" id="bookings">
      <SectionHeader
        subTitle="Tailor your exercise program"
        title="Bookings"
        desc="We offer a wide variety of options tailored to keeping you and your body safe. Individual personal training, small group (up to 4 people) personal training, and more!"
      />
      <BookingSection title="Group Lesson" bookings={GROUP_LESSONS} />
      <BookingSection
        title="Personal Training Lesson"
        bookings={PRIVATE_LESSONS}
      />
      <BookingSection title="Massages" bookings={MASSAGES} />
    </section>
  );
};
