import { ReactNode } from "react";
import { Header } from "../../components/Header/Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="Layout">
      {" "}
      <Header /> {children}
    </div>
  );
};
