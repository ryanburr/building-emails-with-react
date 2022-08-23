import { Mjml, MjmlBody, MjmlText, MjmlWrapper } from "mjml-react";
import React from "react";
import { Content } from "../components/Content";
import { Hero } from "../components/Hero";

export const FullTemplate = () => (
  <Mjml>
    <MjmlBody>
      <Hero />
      <MjmlWrapper padding="6px 0">
        <Content>
          <MjmlText fontSize="24px" lineHeight="32px">
            Building Emails with React!
          </MjmlText>
        </Content>
        <Content>
          <MjmlText>Wow look at all this cool stuff!</MjmlText>
        </Content>
        <Content>
          <MjmlText>
            Signing off,
            <br />
            <br />
            Ryan Burr
          </MjmlText>
        </Content>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
