import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlHero,
  MjmlImage,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";
import React from "react";
import { theme } from "../styles/theme";

export const FullTemplate = () => (
  <Mjml>
    <MjmlBody>
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
      <MjmlWrapper padding="6px 0">
        <MjmlSection padding="6px 0">
          <MjmlColumn>
            <MjmlText fontSize="24px" lineHeight="32px">
              Building Emails with React!
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="6px 0">
          <MjmlColumn>
            <MjmlText>Wow look at all this cool stuff!</MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="6px 0">
          <MjmlColumn>
            <MjmlText>
              Signing off,
              <br />
              <br />
              Ryan Burr
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
