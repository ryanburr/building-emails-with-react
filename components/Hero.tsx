import { MjmlHero, MjmlImage } from "mjml-react";
import React from "react";
import { theme } from "../styles/theme";

export const Hero = () => (
  <MjmlHero
    backgroundUrl="https://cdn.signalapis.com/images/email/signal_email_header_large_2.png"
    backgroundWidth="600px"
    backgroundColor={theme.palette.primary}
    backgroundPosition="top left"
  >
    <MjmlImage
      src="https://cdn.signalapis.com/images/email/email_header_logo.png"
      width={50}
      align="left"
      padding={"24px"}
    />
  </MjmlHero>
);
