import { MjmlColumn, MjmlSection } from "mjml-react";
import React from "react";

export const Content = (props: React.PropsWithChildren) => (
  <MjmlSection padding="6px 0">
    <MjmlColumn>{props.children}</MjmlColumn>
  </MjmlSection>
);
