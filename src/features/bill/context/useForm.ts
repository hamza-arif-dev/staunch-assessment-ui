import { useMemo, useState } from "react";
import {
  Billing,
  BillingFromOrTo,
  BillingFromOrToAddress,
  Item,
} from "../types";

const initBillForm: Billing = {
  billingFrom: {
    companyName: "",
    companyEmail: "",
    billingFromAddress: {
      city: "",
      country: "",
      postalCode: "",
      streetAddress: "",
    },
  },
  billingTo: {
    clientEmail: "",
    clientName: "",
    billingToAddress: {
      city: "",
      country: "",
      postalCode: "",
      streetAddress: "",
    },
  },
  invoiceDate: "",
  paymentTerms: "",
  projectDescription: "",
  items: [
    {
      name: "",
      price: "",
      quantity: "",
      totalPrice: "",
    },
  ],
};

export function useForm() {
  const [billForm, setBillForm] = useState<Billing>(initBillForm);

  const taxRate = "10";

  const billTotalInfo = useMemo(() => {
    const { items } = billForm;
    const subTotal = items.reduce(
      (previous, current) => previous + Number(current.totalPrice),
      0
    );
    const tax = subTotal / Number(taxRate);
    const totalAmount = subTotal + tax;

    return {
      subTotal: subTotal.toFixed(2),
      tax: tax.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  }, [billForm]);

  function onReset() {
    setBillForm(() => ({ ...initBillForm }));
  }

  function onChange(
    keyValue: {
      key: string;
      value: string;
    },
    parentKey?: BillingFromOrTo,
    addressKey?: BillingFromOrToAddress
  ) {
    const { key, value } = keyValue;
    if (parentKey === "billingFrom" && addressKey === "billingFromAddress") {
      setBillForm((previousState) => ({
        ...previousState,
        [parentKey]: {
          ...previousState[parentKey],
          billingFromAddress: {
            ...previousState[parentKey].billingFromAddress,
            [key]: value,
          },
        },
      }));
    } else if (parentKey === "billingTo" && addressKey === "billingToAddress") {
      setBillForm((previousState) => ({
        ...previousState,
        [parentKey]: {
          ...previousState[parentKey],
          billingToAddress: {
            ...previousState[parentKey].billingToAddress,
            [key]: value,
          },
        },
      }));
    } else if (parentKey) {
      setBillForm((previousState) => ({
        ...previousState,
        [parentKey]: {
          ...previousState[parentKey],
          [key]: value,
        },
      }));
    } else {
      setBillForm((previousState) => ({ ...previousState, [key]: value }));
    }
  }

  function addItem() {
    setBillForm((previousState) => ({
      ...previousState,
      items: [
        ...previousState.items,
        {
          name: "",
          price: "",
          quantity: "",
          totalPrice: "",
        },
      ],
    }));
  }

  function removeItem(index: number) {
    if (billForm.items.length === 1) return;

    setBillForm((previousState) => ({
      ...previousState,
      items: previousState.items.filter((_, i) => index !== i),
    }));
  }

  function onItemChange(key: keyof Item, value: string, index: number) {
    setBillForm((previousState) => {
      const newState = { ...previousState };
      newState.items[index][key] = value;
      if (newState.items[index].price && newState.items[index].quantity) {
        newState.items[index].totalPrice = (
          Number(newState.items[index].price) *
          Number(newState.items[index].quantity)
        ).toFixed(2);
      }
      return newState;
    });
  }

  return {
    billForm,
    billTotalInfo: {
      ...billTotalInfo,
      taxRate,
    },
    onReset,
    onChange,
    addItem,
    removeItem,
    onItemChange,
  };
}
