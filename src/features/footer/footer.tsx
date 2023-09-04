import { MobileIcon } from "@radix-ui/react-icons";
import React from "react";
import { FooterDetail } from "./FooterDetail";
import Link from "next/link";
import Image from "next-image-export-optimizer";
import { SHBW_TITLE } from "@/lib/consts";

export const Footer = () => {
  return (
    <div className="w-full bg-primary flex items-start md:items-center flex-col md:flex-row md:justify-between p-10 text-primary-foreground gap-1">
      <div className="space-y-1">
        <Image
          src="/logo.png"
          width={50}
          height={500}
          alt="Summit Health and Body Works logo"
        />
        <h3 className="text-sm font-medium">{SHBW_TITLE}</h3>
        <FooterDetail>
          <Link
            href="https://github.com/kayla-lin"
            target="_blank"
            className="text-gray-300"
          >
            Site by Kayla Lin
          </Link>
        </FooterDetail>
      </div>
      <div className="space-y-1">
        <FooterDetail>447 SpringField Ave, Summit, NJ 07901</FooterDetail>
        <FooterDetail>25 W NorthField Road Livingston, NJ 07039</FooterDetail>
        <FooterDetail Icon={MobileIcon}>(908) 219-4435</FooterDetail>
      </div>
    </div>
  );
};
