import { SectionHeader } from "@/components/section-header";
import Image from "next-image-export-optimizer";
import React from "react";

const CertificationSection = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-8 mb-32">
      <SectionHeader subTitle="Certified By" hideMB />
      <div className={`flex`}>
        <Image
          src="/aced-logo.svg"
          alt="ACED certified logo"
          width={150}
          height={100}
        />
        <Image
          src="/afaa.png"
          alt="AFAA certified logo"
          width={150}
          height={100}
        />
      </div>
    </section>
  );
};

export default CertificationSection;
