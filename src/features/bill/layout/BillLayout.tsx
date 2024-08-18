import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  TextWithSupportingText,
} from "../../../components";
import { BillForm } from "../form";
import { BillPreview } from "../preview";

export function BillLayout() {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <TextWithSupportingText
          text="New Invoice"
          supportingText="Create new invoice for your customers"
        />
        <ButtonGroup>
          <Button variant="secondary">Reset</Button>
          <Button variant="primary">Save</Button>
        </ButtonGroup>
      </HStack>
      <HStack mt={6} justifyContent="space-between">
        <BillForm />
        <BillPreview />
      </HStack>
    </Box>
  );
}
