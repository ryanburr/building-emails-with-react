import React from "react";
import { MjmlButton } from "mjml-react";
import { theme } from "../styles/theme";

export interface ButtonProps extends React.PropsWithChildren {
  href: string;
  color?: string;
}

export const Button = ({
  children,
  href,
  color = theme.palette.secondary,
}: ButtonProps) => {
  return (
    <MjmlButton
      href={href}
      backgroundColor={color}
      color={theme.palette.common.white}
    >
      {children}
    </MjmlButton>
  );
};
