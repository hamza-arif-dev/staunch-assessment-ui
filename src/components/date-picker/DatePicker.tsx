import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { Calendar } from "../../assets/Calendar";

export type DatePickerProps = Omit<InputProps, "type">;

export function DatePicker(props: DatePickerProps) {
  return (
    <InputGroup>
      <Input
        type="date"
        css={{
          "&::-webkit-calendar-picker-indicator": {
            display: "none",
          },
        }}
        {...props}
      />
      <InputRightElement>
        <Calendar />
      </InputRightElement>
    </InputGroup>
  );
}
