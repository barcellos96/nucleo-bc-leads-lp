"use client";

import { api } from "@/service/api";
import { createContext, ReactNode } from "react";

interface ILogsData {
  AccessLog(): Promise<void>;
}

interface ICihldrenReact {
  children: ReactNode;
}

export const LogsContext = createContext<ILogsData>({} as ILogsData);

export const LogsProvider = ({ children }: ICihldrenReact) => {
  const AccessLog = async () => {
    const accessedUrl = window.location.href; // URL completa da página acessada
    const referrer = document.referrer || "Direto"; // URL de onde o usuário veio
    const userAgent = navigator.userAgent; // Informações do dispositivo

    const data = {
      accessedUrl,
      referrer,
      userAgent,
      userCode: new URLSearchParams(window.location.search).get("bc"), // Captura o parâmetro 'bc' se existir
    };

    const response = await api
      .post("/tracking-access", data)
      .then((res) => {
        console.log("res", res.data.response);
      })
      .catch((err) => {
        console.log("err", err);
        return err;
      });

    return response;
  };

  return (
    <LogsContext.Provider
      value={{
        AccessLog,
      }}
    >
      {children}
    </LogsContext.Provider>
  );
};
