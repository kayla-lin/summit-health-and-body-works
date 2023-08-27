import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";
import React, { AnchorHTMLAttributes } from "react";

export interface BookingCardProps {
  title: string;
  desc: string[];
  buttonText?: string;
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

export const BookingCard = ({
  title,
  desc,
  buttonText = "Book Here",
  linkProps = {
    href: "https://summithealth.glossgenius.com/services",
    target: "_blank",
  },
}: BookingCardProps) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-medium">{title}</h2>
      </CardHeader>
      <CardContent className="space-y-2">
        <ul className="text-sm">
          {desc.map((bullet, idx) => (
            <span key={idx} className="flex items-start">
              <CheckIcon className="mr-2 text-gray-500" />
              <li>{bullet}</li>
            </span>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a className="w-full" {...linkProps}>
          <Button className="w-full">{buttonText}</Button>
        </a>
      </CardFooter>
    </Card>
  );
};
