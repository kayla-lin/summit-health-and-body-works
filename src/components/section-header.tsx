import React, { ReactNode } from "react";

interface Props {
  title?: string;
  desc?: string;
  subTitle?: string;
  children?: ReactNode;
  hideMB?: boolean;
}

export const SectionHeader = ({
  title,
  desc,
  subTitle,
  children,
  hideMB = false,
}: Props) => {
  return (
    <div
      className={`space-y-10 text-center mt-32 ${
        !hideMB && "mb-32"
      }  flex flex-col items-center justify-center`}
    >
      {subTitle && (
        <h3 className="text-md font-medium text-gray-500 uppercase">
          {subTitle}
        </h3>
      )}
      {title && <h2 className="text-4xl font-black uppercase">{title}</h2>}
      {desc && <p className="text-gray-500 text-lg max-w-3xl">{desc}</p>}
      {children}
    </div>
  );
};
