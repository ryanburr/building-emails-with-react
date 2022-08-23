import React from "react";
import { Mjml, MjmlBody, MjmlColumn, MjmlSection } from "mjml-react";
import { Button } from "../components/Button";
import { theme } from "../styles/theme";

export const CustomComponent = () => (
  <Mjml>
    <MjmlBody>
      <MjmlSection>
        <MjmlColumn>
          <Button color={theme.palette.error} href={"https://github.com"}>
            Howdy!
          </Button>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);
