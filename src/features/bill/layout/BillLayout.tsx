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
