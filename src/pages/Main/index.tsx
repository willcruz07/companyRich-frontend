import React from "react";
import Header from "../../components/Header";
import Content from "../../components/Content";
import NewCompanyModal from "../../components/NewCompanyModal";

import { Container } from "./styles";
import ActionHeader from "../../components/ActionHeader";

export const Main: React.FC = ({ children }) => {
  const [isNewCompanyModal, setIsNewCompanyModal] = React.useState(false);

  const handleOpenNewCompanyModal = () => {
    setIsNewCompanyModal(true);
  };

  const handleCloseNewCompanyModal = () => {
    setIsNewCompanyModal(false);
  };

  return (
    <Container>
      <Header />
      <ActionHeader onNewCompanyModalOpen={handleOpenNewCompanyModal} />
      <Content />

      <NewCompanyModal
        isOpen={isNewCompanyModal}
        onRequestClose={handleCloseNewCompanyModal}
      />
    </Container>
  );
};
