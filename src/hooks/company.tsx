import React from "react";
import { AxiosResponse } from "axios";

import * as Company from "../services/company";
import { ICompany, ICreateCompany } from "../model/Company";
import { useAuth } from "./auth";

interface ICompanyContext {
  totalCompany: number;
  company: ICompany[];
  createCompany: (company: ICreateCompany) => Promise<AxiosResponse<any>>;
  loadCompany: (page: number) => Promise<void>;
}
const CompanyContext = React.createContext<ICompanyContext>(
  {} as ICompanyContext,
);

export const CompanyProvider: React.FC = ({ children }) => {
  const [pageActive, setPageActive] = React.useState(1);
  const [company, setCompany] = React.useState<ICompany[]>([]);
  const [totalCompany, setTotalCompany] = React.useState(1);

  const { logged } = useAuth();

  React.useEffect(() => {
    if (logged) loadCompany(pageActive);
  }, [logged]);

  const loadCompany = async (page: number) => {
    setPageActive(page);
    const response = await Company.get(page);

    setTotalCompany(response.total);
    setCompany(response.data);
  };

  const createCompany = async (company: ICreateCompany) => {
    const response = await Company.post(company);
    loadCompany(pageActive);
    return response;
  };

  return (
    <CompanyContext.Provider
      value={{
        company,
        createCompany,
        totalCompany,
        loadCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => {
  const context = React.useContext(CompanyContext);

  return context;
};
