import Link from "next/link";
import React, { AnchorHTMLAttributes, FC, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const MainNavLink = ({ children, ...rest }: Props) => {
  return (
    <Link
      className="cursor-pointer hover:underline"
      href="#about"
      scroll={true}
      {...rest}
    >
      {children}
    </Link>
  );
};
