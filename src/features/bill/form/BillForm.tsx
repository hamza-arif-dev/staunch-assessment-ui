import { ChangeEvent } from "react";
import { Delete, Plus } from "../../../assets";
import {
  Button,
  Card,
  DatePicker,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  NumberInput,
  NumberInputField,
  Section,
  Select,
  VStack,
} from "../../../components";
import { useBill } from "../context";
import { countries, paymentTerms } from "./data";
import { BillingFromOrTo, BillingFromOrToAddress, Item } from "../types";

export function BillForm() {
  const { billForm, onChange, addItem, removeItem, onItemChange } = useBill();

  function onInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    parentKey?: BillingFromOrTo,
    addressKey?: BillingFromOrToAddress
  ) {
    const { target } = event;
    const { name, value } = target;
    onChange({ key: name, value }, parentKey, addressKey);
  }

  function onSelectInputChange(
    keyValue: { key: string; value: string },
    parentKey?: BillingFromOrTo,
    addressKey?: BillingFromOrToAddress
  ) {
    onChange(keyValue, parentKey, addressKey);
  }

  function onNumberInputChange(
    keyValue: { key: string; value: string },
    parentKey?: BillingFromOrTo,
    addressKey?: BillingFromOrToAddress
  ) {
    onChange(keyValue, parentKey, addressKey);
  }

  function onItemInputChange(
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const { target } = event;
    const { name, value } = target;
    onItemChange(name as keyof Item, value, index);
  }

  function onItemNumberInputChange(
    key: keyof Item,
    value: string,
    index: number
  ) {
    onItemChange(key, value, index);
  }

  return (
    <Card
      w="full"
      h="full"
      border="1px solid"
      borderColor="gray.250"
      borderRadius="3xl"
      boxShadow="none"
      p={6}
    >
      <form>
        <VStack spacing={8}>
          <Section title="Bill Form">
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Input
                  name="companyName"
                  value={billForm.billingFrom.companyName}
                  onChange={(event) => onInputChange(event, "billingFrom")}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Company Email</FormLabel>
                <Input
                  type="email"
                  name="companyEmail"
                  value={billForm.billingFrom.companyEmail}
                  onChange={(event) => onInputChange(event, "billingFrom")}
                />
              </FormControl>
            </HStack>
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select
                  value={billForm.billingFrom.billingFromAddress.country}
                  onChange={(value) =>
                    onSelectInputChange(
                      { key: "country", value: value ?? "" },
                      "billingFrom",
                      "billingFromAddress"
                    )
                  }
                  options={countries.map((country) => ({
                    label: country,
                    value: country,
                  }))}
                />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input
                  name="city"
                  value={billForm.billingFrom.billingFromAddress.city}
                  onChange={(event) =>
                    onInputChange(event, "billingFrom", "billingFromAddress")
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Postal Code</FormLabel>
                <NumberInput
                  name="postalCode"
                  value={billForm.billingFrom.billingFromAddress.postalCode}
                  onChange={(value) =>
                    onNumberInputChange(
                      { key: "postalCode", value },
                      "billingFrom",
                      "billingFromAddress"
                    )
                  }
                >
                  <NumberInputField />
                </NumberInput>
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Street Address</FormLabel>
              <Input
                name="streetAddress"
                value={billForm.billingFrom.billingFromAddress.streetAddress}
                onChange={(event) =>
                  onInputChange(event, "billingFrom", "billingFromAddress")
                }
              />
            </FormControl>
          </Section>

          <Section title="Bill To">
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Client's Name</FormLabel>
                <Input
                  name="clientName"
                  value={billForm.billingTo.clientName}
                  onChange={(event) => onInputChange(event, "billingTo")}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Client's Email</FormLabel>
                <Input
                  type="email"
                  name="clientEmail"
                  value={billForm.billingTo.clientEmail}
                  onChange={(event) => onInputChange(event, "billingTo")}
                />
              </FormControl>
            </HStack>
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select
                  value={billForm.billingTo.billingToAddress.country}
                  onChange={(value) =>
                    onSelectInputChange(
                      { key: "country", value: value ?? "" },
                      "billingTo",
                      "billingToAddress"
                    )
                  }
                  options={countries.map((country) => ({
                    label: country,
                    value: country,
                  }))}
                />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input
                  name="city"
                  value={billForm.billingTo.billingToAddress.city}
                  onChange={(event) =>
                    onInputChange(event, "billingTo", "billingToAddress")
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Postal Code</FormLabel>
                <NumberInput
                  name="postalCode"
                  value={billForm.billingTo.billingToAddress.postalCode}
                  onChange={(value) =>
                    onNumberInputChange(
                      { key: "postalCode", value },
                      "billingTo",
                      "billingToAddress"
                    )
                  }
                >
                  <NumberInputField />
                </NumberInput>
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Street Address</FormLabel>
              <Input
                name="streetAddress"
                value={billForm.billingTo.billingToAddress.streetAddress}
                onChange={(event) =>
                  onInputChange(event, "billingTo", "billingToAddress")
                }
              />
            </FormControl>
          </Section>

          <Section>
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Invoice Date</FormLabel>
                <DatePicker
                  name="invoiceDate"
                  value={billForm.invoiceDate}
                  onChange={onInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>payment Terms</FormLabel>
                <Select
                  value={billForm.paymentTerms}
                  onChange={(value) =>
                    onSelectInputChange({
                      key: "paymentTerms",
                      value: value ?? "",
                    })
                  }
                  options={paymentTerms.map((paymentTerm) => ({
                    label: paymentTerm,
                    value: paymentTerm,
                  }))}
                />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Project Description</FormLabel>
              <Input
                name="projectDescription"
                value={billForm.projectDescription}
                onChange={onInputChange}
              />
            </FormControl>
          </Section>

          <Section title="Items List">
            <VStack spacing={4}>
              {billForm.items.map((item, index) => (
                <HStack key={`${item.name}-${index}`} spacing={4}>
                  <FormControl>
                    <FormLabel>Item Name</FormLabel>
                    <Input
                      name="name"
                      value={item.name}
                      onChange={(event) => onItemInputChange(event, index)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Qty.</FormLabel>
                    <NumberInput
                      name="quantity"
                      value={item.quantity}
                      onChange={(value) =>
                        onItemNumberInputChange("quantity", value, index)
                      }
                    >
                      <NumberInputField />
                    </NumberInput>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Price</FormLabel>
                    <NumberInput
                      name="price"
                      value={item.price}
                      onChange={(value) =>
                        onItemNumberInputChange("price", value, index)
                      }
                    >
                      <NumberInputField />
                    </NumberInput>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Total</FormLabel>
                    <Input name="totalPrice" value={item.totalPrice} readOnly />
                  </FormControl>
                  <IconButton
                    type="button"
                    variant="unstyled"
                    aria-label="delete"
                    icon={<Delete />}
                    onClick={() => removeItem(index)}
                  />
                </HStack>
              ))}
              <Button
                w="full"
                type="button"
                variant="primary"
                onClick={() => addItem()}
              >
                <Plus />
                Add New Item
              </Button>
            </VStack>
          </Section>
        </VStack>
      </form>
    </Card>
  );
}
