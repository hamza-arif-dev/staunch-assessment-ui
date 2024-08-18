import { createContext } from "react";
import {
  Billing,
  BillingFromOrTo,
  BillingFromOrToAddress,
  Item,
} from "../types";

type BillContextValue = {
  billForm: Billing;
  billTotalInfo: {
    subTotal: string;
    tax: string;
    taxRate: string;
    totalAmount: string;
  };
  onReset: () => void;
  onChange: (
    keyValue: { key: string; value: string },
    parentKey?: BillingFromOrTo,
    addressKey?: BillingFromOrToAddress
  ) => void;
  addItem: () => void;
  removeItem: (index: number) => void;
  onItemChange: (key: keyof Item, value: string, index: number) => void;
};

export const BillContext = createContext<BillContextValue | undefined>(
  undefined
);
