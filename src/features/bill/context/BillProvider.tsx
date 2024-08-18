import { ReactNode } from "react";
import { BillContext } from "./BillContext";
import { useForm } from "./useForm";

type BillProviderProps = {
  children: ReactNode;
};

export function BillProvider(props: BillProviderProps) {
  const { children } = props;

  const value = useForm();

  return <BillContext.Provider value={value}>{children}</BillContext.Provider>;
}
