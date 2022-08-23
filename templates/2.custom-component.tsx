import React from "react";
import { Mjml, MjmlBody, MjmlColumn, MjmlSection } from "mjml-react";
import { Button } from "../components/Button";

export const CustomComponent = () => (
  <Mjml>
    <MjmlBody>
      <MjmlSection>
        <MjmlColumn>
          <Button href={"https://github.com"}>Howdy!</Button>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);
