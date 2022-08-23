import { Mjml, MjmlBody, MjmlColumn, MjmlSection } from "mjml-react";
import React from "react";
import { Button } from "../components/Button";
import { theme } from "../styles/theme";

export const CustomComponent = () => (
  <Mjml>
    <MjmlBody>
      <MjmlSection>
        <MjmlColumn>
          <Button
            href="https://github.com"
            backgroundColor={theme.palette.error}
          >
            Howdy!
          </Button>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);
