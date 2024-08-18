export type Item = {
  name: string;
  price: string;
  quantity: string;
  totalPrice: string;
};

export type Address = {
  city: string;
  country: string;
  postalCode: string;
  streetAddress: string;
};

export type BillingFrom = {
  companyName: string;
  companyEmail: string;
  billingFromAddress: Address;
};

export type BillingTo = {
  clientEmail: string;
  clientName: string;
  billingToAddress: Address;
};

export type Billing = {
  billingFrom: BillingFrom;
  billingTo: BillingTo;
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  items: Item[];
};

export type BillingPayload = {
  createInvoiceAttributes: {
    invoiceDate: string;
    paymentTerms: string;
    projectDescription: string;
    billingToAttributes: {
      clientName: string;
      clientEmail: string;
      billingToAddressAttributes: {
        streetAddress: string;
        city: string;
        country: string;
        postalCode: string;
      };
    };
    billingFromAttributes: {
      companyName: string;
      companyEmail: string;
      billingFromAddressAttributes: {
        streetAddress: string;
        city: string;
        country: string;
        postalCode: string;
      };
    };
    itemAttributes: {
      name: string;
      quantity: number;
      price: number;
    }[];
  };
};

export type BillingFromOrTo = "billingFrom" | "billingTo";

export type BillingFromOrToAddress = "billingFromAddress" | "billingToAddress";
