"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IComponentsData {
  setShowModalTy: Dispatch<SetStateAction<boolean>>;
  showModalTy: boolean;
  setShowCheckout: Dispatch<SetStateAction<boolean>>;
  showCheckout: boolean;
}

interface ICihldrenReact {
  children: ReactNode;
}

export const ComponentsContext = createContext<IComponentsData>(
  {} as IComponentsData
);

export const ComponentsProvider = ({ children }: ICihldrenReact) => {
  const [showModalTy, setShowModalTy] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <ComponentsContext.Provider
      value={{
        setShowCheckout,
        showCheckout,
        setShowModalTy,
        showModalTy,
      }}
    >
      {children}
    </ComponentsContext.Provider>
  );
};
