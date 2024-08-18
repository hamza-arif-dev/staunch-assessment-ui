import { Box, BoxProps, Text } from "@chakra-ui/react";

export type SectionProps = BoxProps & {
  title?: string;
  children: React.ReactNode;
};

export function Section(props: SectionProps) {
  const { title, children, w = "full", ...boxProps } = props;

  return (
    <Box w={w} {...boxProps}>
      {title ? (
        <Text fontSize="2xl" fontWeight={600}>
          {title}
        </Text>
      ) : null}
      <Box mt={4}>{children}</Box>
    </Box>
  );
}
