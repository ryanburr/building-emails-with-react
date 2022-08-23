import { MjmlButton } from "mjml-react";
import React from "react";
import { theme } from "../styles/theme";

export interface ButtonProps extends React.PropsWithChildren {
  href: string;
  backgroundColor?: string;
}

export const Button = (props: ButtonProps) => {
  const { children, href, backgroundColor = theme.palette.secondary } = props;

  return (
    <MjmlButton
      href={href}
      backgroundColor={backgroundColor}
      color={theme.palette.common.white}
    >
      {children}
    </MjmlButton>
  );
};
