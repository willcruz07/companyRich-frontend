import React from "react";
import Modal from "react-modal";
import CloseImg from "../../assets/cancel.svg";
import { useCompany } from "../../hooks/company";
import { IBillingAnnual } from "../../model/BillingAnnual";
import * as BillingAnnual from "../../services/billingAnnual";
import { useToasts } from "react-toast-notifications";
import { formattedCNPJ, removeMask } from "../../utils/Lib";

import { Container, ContainerTitle } from "./styles";

interface INewCompanyModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

const NewCompanyModal: React.FC<INewCompanyModal> = ({
  isOpen,
  onRequestClose,
}: INewCompanyModal) => {
  const [name, setName] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [demand, setDemand] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [idBillingAnnual, setIdBillingAnnual] = React.useState("");
  const [listBillingAnnual, setListBillingAnnual] = React.useState([]);

  const { addToast } = useToasts();

  const company = useCompany();

  React.useEffect(() => {
    if (isOpen) loadBillingAnnual();
  }, [isOpen]);

  const loadBillingAnnual = async () => {
    const response = await BillingAnnual.get();
    setListBillingAnnual(response.data);
  };

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await company.createCompany({
      name,
      cnpj: Number(removeMask(cnpj)),
      demand: Number(demand),
      idBillingAnnual,
      bio,
    });
    if (response.status === 201) {
      setName("");
      setCnpj("");
      setDemand("");
      onRequestClose();
      addToast(<h3>Empresa cadastrada</h3>, {
        appearance: "success",
        autoDismiss: true,
      });
    }

    if (response.status === 400) {
      addToast(<h3>{response.data.message}</h3>, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Container onSubmit={handleSubmitForm}>
        <ContainerTitle>
          <h2>Cadastro empresa</h2>
          <button type="button" onClick={onRequestClose}>
            <img src={CloseImg} alt="Close" />
          </button>
        </ContainerTitle>

        <input
          type="text"
          placeholder="Nome da empresa"
          required
          onChange={e => setName(e.target.value)}
        />

        <input
          type="number"
          name="CNPJ"
          id="cnpj"
          value={cnpj}
          required
          placeholder="Cnpj da empresa"
          onChange={e => setCnpj(e.target.value)}
        />

        <input
          type="number"
          name="Demanda"
          id="demand"
          value={demand}
          required
          placeholder="Demanda"
          onChange={e => setDemand(e.target.value)}
        />

        {/* <textarea
          name="Bio"
          id="bio"
          value={bio}
          placeholder="Bio da empresa"
          onChange={e => setBio(e.target.value)}
        /> */}

        <input
          type="textarea"
          name="bio"
          id="bio"
          value={bio}
          placeholder="Bio empresa"
          onChange={e => setBio(e.target.value)}
        />

        <select
          name="BillingAnnual"
          placeholder="Demanda da empresa"
          onChange={e => setIdBillingAnnual(e.target.value)}
        >
          {listBillingAnnual.map((item: IBillingAnnual) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewCompanyModal;
