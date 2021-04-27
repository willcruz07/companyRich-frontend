import React from "react";

import PanelCard from "../PanelCard";
import { Container } from "./styles";

const Content: React.FC = ({ children }) => {
  return (
    <Container>
      <PanelCard />
    </Container>
  );
};

export default Content;
