import { useContext } from "react";
import { BillContext } from "./BillContext";

export function useBill() {
  const context = useContext(BillContext);

  if (context === undefined) {
    throw new Error("useBill should be within BillProvider");
  }

  return context;
}
