import { Success } from "../../../assets";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Text,
  TextWithSupportingText,
  useToast,
  VStack,
} from "../../../components";
import { useCreateInvoice } from "../api";
import { useBill } from "../context";
import { BillForm } from "../form";
import { BillPreview } from "../preview";

export function BillLayout() {
  const { billForm, onReset } = useBill();
  const { onSave } = useCreateInvoice();
  const toast = useToast();

  function onClickSave() {
    onSave({
      createInvoiceAttributes: {
        billingFromAttributes: {
          companyName: billForm.billingFrom.companyName,
          companyEmail: billForm.billingFrom.companyEmail,
          billingFromAddressAttributes: {
            ...billForm.billingFrom.billingFromAddress,
          },
        },
        billingToAttributes: {
          clientName: billForm.billingTo.clientName,
          clientEmail: billForm.billingTo.clientEmail,
          billingToAddressAttributes: {
            ...billForm.billingTo.billingToAddress,
          },
        },
        invoiceDate: billForm.invoiceDate,
        paymentTerms: billForm.paymentTerms,
        projectDescription: billForm.projectDescription,
        itemAttributes: billForm.items.map((item) => ({
          name: item.name,
          price: Number(item.price),
          quantity: Number(item.quantity),
        })),
      },
    }).then(() => {
      toast({
        position: "top-right",
        render: () => (
          <Box w="sm" bg="white" borderRadius="md" px={6} py={4} boxShadow="lg">
            <HStack w="full" align="stretch" spacing={4}>
              <Success />
              <VStack align="flex-start" spacing={4}>
                <Text color="gray.750" fontWeight={500}>
                  Invoice created successfully!
                </Text>
                <Text color="gray.650" fontWeight={400}>
                  Your invoice has been created.
                </Text>
              </VStack>
            </HStack>
          </Box>
        ),
      });
      onReset();
    });
  }

  return (
    <Box>
      <HStack justifyContent="space-between">
        <TextWithSupportingText
          text="New Invoice"
          supportingText="Create new invoice for your customers"
        />
        <ButtonGroup>
          <Button variant="secondary" onClick={onReset}>
            Reset
          </Button>
          <Button variant="primary" onClick={onClickSave}>
            Save
          </Button>
        </ButtonGroup>
      </HStack>
      <HStack align="stretch " mt={6} spacing={6}>
        <Box flex={1}>
          <BillForm />
        </Box>
        <Box flex={1}>
          <BillPreview />
        </Box>
      </HStack>
    </Box>
  );
}
