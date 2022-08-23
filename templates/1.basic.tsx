import { Mjml, MjmlBody, MjmlColumn, MjmlSection, MjmlText } from "mjml-react";
import React from "react";

export const Basic = () => (
  <Mjml>
    <MjmlBody>
      <MjmlSection>
        <MjmlColumn>
          <MjmlText>Howdy!</MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);
