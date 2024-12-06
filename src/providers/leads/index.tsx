"use client";

import { api } from "@/service/api";
import { createContext, ReactNode } from "react";
import { toast } from "sonner";

interface CreateLeadProps {
  name: string;
  email: string;
  document_type: "CNPJ" | "CPF";
  document_number: string;
  company_name?: string;
  phone: string;
  userCode: string;
}

interface Response {
  name: string;
  email: string;
  company_name?: string;
  document_type: string;
  phone: string;
  document_number: string;
  created_at: Date;
  updated_at: Date;
  id: string;
  step: string;
  isLimbus: boolean;
}

interface ILeadsData {
  CreateLeadMkt(data: CreateLeadProps): Promise<Response>;
}

interface ICihldrenReact {
  children: ReactNode;
}

export const LeadsContext = createContext<ILeadsData>({} as ILeadsData);

export const LeadsProvider = ({ children }: ICihldrenReact) => {
  const CreateLeadMkt = async (data: CreateLeadProps): Promise<Response> => {
    const response = await api
      .post("/lead-mkt", data)
      .then(() => {})
      .catch((err) => {
        toast.error(`Link invalido ou ${err.response.data.message} `);
        return err;
      });

    return response;
  };

  return (
    <LeadsContext.Provider
      value={{
        CreateLeadMkt,
      }}
    >
      {children}
    </LeadsContext.Provider>
  );
};
