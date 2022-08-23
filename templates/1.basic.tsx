import React from "react";
import { Mjml, MjmlBody, MjmlColumn, MjmlSection, MjmlText } from "mjml-react";

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
