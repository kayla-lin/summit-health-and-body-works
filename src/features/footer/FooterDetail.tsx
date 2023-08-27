import React, { ReactNode } from "react";

interface Props {
  Icon?: React.ElementType;
  children: ReactNode;
}

export const FooterDetail = ({ Icon, children }: Props) => {
  return (
    <h4 className="font-light text-sm flex items-center gap-2">
      {Icon && <Icon />}
      {children}
    </h4>
  );
};
