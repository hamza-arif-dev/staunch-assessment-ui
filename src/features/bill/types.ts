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

export type BillingPayload = Billing & {
  subTotal: string;
  totalAmount: string;
};

export type BillingFromOrTo = "billingFrom" | "billingTo";

export type BillingFromOrToAddress = "billingFromAddress" | "billingToAddress";
