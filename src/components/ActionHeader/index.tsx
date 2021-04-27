import React from "react";

import { ContainerAction } from "./styles";

interface INewCompanyModal {
  onNewCompanyModalOpen: () => void;
}

const ActionHeader: React.FC<INewCompanyModal> = ({
  onNewCompanyModalOpen,
}: INewCompanyModal) => {
  return (
    <ContainerAction>
      <h2 style={{ color: "#192D35" }}>Empresas</h2>
      <button type="button" onClick={onNewCompanyModalOpen}>
        Adicionar
      </button>
    </ContainerAction>
  );
};

export default ActionHeader;
