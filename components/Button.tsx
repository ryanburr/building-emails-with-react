import React from "react";
import { MjmlButton } from "mjml-react";
import { theme } from "../styles/theme";

export interface ButtonProps extends React.PropsWithChildren {
  href: string;
}

export const Button = ({ children, href }: ButtonProps) => {
  return (
    <MjmlButton
      href={href}
      backgroundColor={theme.palette.secondary}
      color={theme.palette.common.white}
    >
      {children}
    </MjmlButton>
  );
};
