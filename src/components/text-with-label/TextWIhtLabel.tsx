import { Text, VStack } from "@chakra-ui/react";

export type TextWithLabelProps = {
  label: string;
  text: string;
};

export function TextWithLabel(props: TextWithLabelProps) {
  const { label, text } = props;

  return (
    <VStack align="flex-start" spacing={1}>
      <Text fontSize="2xl" fontWeight={400}>
        {label}
      </Text>
      <Text color="gray.450" fontSize="xs" fontWeight={400}>
        {text}
      </Text>
    </VStack>
  );
}
