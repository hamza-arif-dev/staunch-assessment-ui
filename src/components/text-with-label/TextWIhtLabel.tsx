import { Text, VStack } from "@chakra-ui/react";

export type TextWithLabelProps = {
  label: string;
  text: string;
};

export function TextWithLabel(props: TextWithLabelProps) {
  const { label, text } = props;

  return (
    <VStack w="full" align="flex-start" spacing={2}>
      <Text color="gray.550" fontSize="md" fontWeight={400}>
        {label}
      </Text>
      <Text fontSize="md" fontWeight={500}>
        {text}
      </Text>
    </VStack>
  );
}
