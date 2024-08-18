import { Card, Divider, HStack, Text, VStack } from "../../../components";
import { TextWithLabel } from "../../../components/text-with-label/TextWIhtLabel";
import { useBill } from "../context";

export function BillPreview() {
  const { billForm, subTotal, taxRate, totalAmount } = useBill();
  const {
    billingFrom,
    billingTo,
    invoiceDate,
    paymentTerms,
    projectDescription,
    items,
  } = billForm;

  return (
    <Card
      w="full"
      h="full"
      background="gray.150"
      border="1px solid"
      borderColor="gray.150"
      borderRadius="3xl"
      boxShadow="none"
      p={6}
    >
      <VStack spacing={6} align="flex-start">
        <Text fontSize="2xl" fontWeight={600}>
          Preview
        </Text>
        <Card w="full" h="full" borderRadius="3xl" boxShadow="none" p={6}>
          <VStack spacing={6} align="flex-start">
            <Text fontSize="xl" fontWeight={600}>
              New Invoice
            </Text>
            <Divider borderColor="gray.250" />
            <HStack w="full" spacing={4}>
              <TextWithLabel label="Invoice Date" text={invoiceDate} />
              <TextWithLabel label="Payment Terms" text={paymentTerms} />
            </HStack>
            <HStack w="full" spacing={4}>
              <VStack w="full" align="flex-start" spacing={2}>
                <Text color="gray.550" fontWeight={400}>
                  Billed From
                </Text>
                <Text fontWeight={500}>{billingFrom.companyName}</Text>
                <Text fontWeight={500}>{billingFrom.companyEmail}</Text>
                <Text fontWeight={500}>
                  {billingFrom.billingFromAddress.streetAddress}
                </Text>
                <Text fontWeight={500}>
                  {billingFrom.billingFromAddress.city},{" "}
                  {billingFrom.billingFromAddress.postalCode}
                </Text>
                <Text fontWeight={500}>
                  {billingFrom.billingFromAddress.country}
                </Text>
              </VStack>
              <VStack w="full" align="flex-start" spacing={2}>
                <Text color="gray.550" fontWeight={400}>
                  Billed To
                </Text>
                <Text fontWeight={500}>{billingTo.clientName}</Text>
                <Text fontWeight={500}>{billingTo.clientEmail}</Text>
                <Text fontWeight={500}>
                  {billingTo.billingToAddress.streetAddress}
                </Text>
                <Text fontWeight={500}>
                  {billingTo.billingToAddress.city},{" "}
                  {billingTo.billingToAddress.postalCode}
                </Text>
                <Text fontWeight={500}>
                  {billingTo.billingToAddress.country}
                </Text>
              </VStack>
            </HStack>
            <TextWithLabel
              label="Project Description"
              text={projectDescription}
            />
            <VStack w="full" spacing={4}>
              <HStack
                w="full"
                background="gray.150"
                spacing={4}
                align="flex-start"
              >
                <Text w="full" color="gray.550" fontWeight={400}>
                  Item
                </Text>
                <Text w="full" color="gray.550" fontWeight={400}>
                  Qty.
                </Text>
                <Text w="full" color="gray.550" fontWeight={400}>
                  Price
                </Text>
                <Text w="full" color="gray.550" fontWeight={400} align="end">
                  Total Amount
                </Text>
              </HStack>
              {items.map((item, index) => (
                <HStack
                  key={`${item.name}-${index}`}
                  w="full"
                  spacing={4}
                  align="flex-start"
                >
                  <Text w="full" fontWeight={600}>
                    {item.name}
                  </Text>
                  <Text w="full" fontWeight={600}>
                    {item.quantity}
                  </Text>
                  <Text w="full" fontWeight={600}>
                    {item.price ? `$ ${item.price}` : null}
                  </Text>
                  <Text w="full" fontWeight={600} align="end">
                    {item.totalPrice ? `$ ${item.totalPrice}` : null}
                  </Text>
                </HStack>
              ))}
            </VStack>
            <Divider borderColor="gray.250" />
            <VStack w="full" spacing={4} align="flex-end">
              <HStack w="full">
                <Text w="full" flex={4} align="end" fontWeight={600}>
                  Subtotal
                </Text>
                <Text w="full" flex={2} align="end" fontWeight={600}>
                  {subTotal}
                </Text>
              </HStack>
              <HStack w="full">
                <Text w="full" flex={4} align="end" fontWeight={600}>
                  Tax
                </Text>
                <Text
                  w="full"
                  flex={2}
                  align="end"
                  fontWeight={600}
                >{`${taxRate}%`}</Text>
              </HStack>
              <HStack w="full">
                <Text
                  w="full"
                  flex={4}
                  align="end"
                  fontSize="xl"
                  fontWeight={600}
                >
                  Total
                </Text>
                <Text
                  w="full"
                  flex={2}
                  align="end"
                  fontSize="xl"
                  fontWeight={600}
                >
                  {totalAmount}
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </Card>
      </VStack>
    </Card>
  );
}
