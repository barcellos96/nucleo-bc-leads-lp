import { ReactNode } from "react";
import { ComponentsProvider } from "./components";
import { LeadsProvider } from "./leads";
import { LogsProvider } from "./logs";

interface IChildrenReact {
  children: ReactNode;
}

export function Providers({ children }: IChildrenReact) {
  return (
    <ComponentsProvider>
      <LogsProvider>
        <LeadsProvider>{children}</LeadsProvider>
      </LogsProvider>
    </ComponentsProvider>
  );
}
