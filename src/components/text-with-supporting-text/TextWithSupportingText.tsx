import { Text, VStack } from "@chakra-ui/react";

export type TextWithSupportingTextProps = {
  text: string;
  supportingText: string;
};

export function TextWithSupportingText(props: TextWithSupportingTextProps) {
  const { text, supportingText } = props;

  return (
    <VStack align="flex-start" spacing={1}>
      <Text fontSize="2xl" fontWeight={500}>
        {text}
      </Text>
      <Text color="gray.450" fontSize="xs" fontWeight={400}>
        {supportingText}
      </Text>
    </VStack>
  );
}
