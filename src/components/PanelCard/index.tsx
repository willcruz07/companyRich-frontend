import React from "react";

import LogoCompany from "../../assets/image.svg";
import {
  Container,
  ContainerGrid,
  ContainerPagination,
  ContainerModal,
} from "./styles";
import Pagination from "@material-ui/lab/Pagination";
import { CardActionArea, CardContent, Card, Divider } from "@material-ui/core";
import { useCompany } from "../../hooks/company";
import { formattedCNPJ } from "../../utils/Lib";
import { ICompany } from "../../model/Company";
import Modal from "react-modal";

const PanelCard: React.FC = ({ children }) => {
  const [openModalCompany, setOpenModalCompany] = React.useState(false);
  const [companyActive, setCompanyActive] = React.useState<ICompany | null>(
    null,
  );
  const { totalCompany, company, loadCompany } = useCompany();

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    loadCompany(value);
  };

  const CardCompany = (company: ICompany) => {
    return (
      <Card style={{ backgroundColor: "#EAEDF2", margin: 8 }}>
        <CardActionArea
          onClick={() => {
            setOpenModalCompany(true), setCompanyActive(company);
          }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <img
                src={LogoCompany}
                alt="Company"
                style={{ height: 64, width: 64 }}
              />
            </div>
            <h2 style={{ color: "#009b72", fontSize: 24 }}>{company.name}</h2>
            <h3 style={{ color: "#555A64" }}>
              {formattedCNPJ(company?.cnpj.toString())}
            </h3>
            <h5 style={{ color: "#555A64" }}>{company?.bio}</h5>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <Container>
      <Modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        isOpen={openModalCompany}
        onRequestClose={() => setOpenModalCompany(false)}
      >
        <ContainerModal>
          <h2>Empresa</h2>
          <Divider />
          <h4>Empresa: {companyActive?.name}</h4>
          <Divider />
          <h4>CNPJ: {formattedCNPJ(companyActive?.cnpj.toString())}</h4>
          <Divider />
          <h4>Bio: {companyActive?.bio}</h4>
        </ContainerModal>
      </Modal>

      <ContainerGrid>
        {company.map(item => (
          <CardCompany
            key={item.id}
            id={item.id}
            name={item.name}
            cnpj={item.cnpj}
            bio={item?.bio}
            demand={item.demand}
            idBillingAnnual={item.idBillingAnnual}
            created_at={item.created_at}
            updated_at={item.updated_at}
          />
        ))}
      </ContainerGrid>
      {Math.ceil(totalCompany / 5) > 1 && (
        <ContainerPagination>
          <Pagination
            style={{ color: "blue" }}
            count={Math.ceil(totalCompany / 5)}
            variant="outlined"
            onChange={handleChangePage}
          />
        </ContainerPagination>
      )}
    </Container>
  );
};

export default PanelCard;
