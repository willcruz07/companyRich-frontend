export interface ICompany {
  id: string;
  name: string;
  cnpj: number;
  demand: number;
  idBillingAnnual: string;
  bio: string;
  created_at: Date;
  updated_at: Date;
}

export type ICreateCompany = Omit<ICompany, "id" | "created_at" | "updated_at">;
