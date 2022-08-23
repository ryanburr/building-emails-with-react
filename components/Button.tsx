import React from "react";
import { MjmlButton } from "mjml-react";

export interface ButtonProps extends React.PropsWithChildren {
  href: string;
}

export const Button = ({ children, href }: ButtonProps) => {
  return <MjmlButton href={href}>{children}</MjmlButton>;
};
