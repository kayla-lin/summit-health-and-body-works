import React from "react";
import { BookingCard, BookingCardProps } from "./booking-card";

interface Props {
  title: string;
  bookings: BookingCardProps[];
}

const BookingSection = ({ title, bookings }: Props) => {
  return (
    <>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
        {bookings.map((lesson, idx) => (
          <BookingCard key={idx} {...lesson} />
        ))}
      </div>
    </>
  );
};

export default BookingSection;
