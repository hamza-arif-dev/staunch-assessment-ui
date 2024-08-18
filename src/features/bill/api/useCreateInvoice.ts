import { gql, useMutation } from "@apollo/client";
import { BillingPayload } from "../types";

const CREATE_INVOICE = gql`
  mutation CreateInvoice($input: CreateInvoiceInput!) {
    createInvoice(input: $input) {
      id
    }
  }
`;

export function useCreateInvoice() {
  const [createInvoice] = useMutation(CREATE_INVOICE);

  function onSave(input: BillingPayload) {
    return createInvoice({ variables: { input } });
  }

  return { onSave };
}
