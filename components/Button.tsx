import React from "react";
import { MjmlButton } from "mjml-react";

export interface ButtonProps extends React.PropsWithChildren {}

export const Button = ({ children }: ButtonProps) => {
  return <MjmlButton href="https://github.com">{children}</MjmlButton>;
};
