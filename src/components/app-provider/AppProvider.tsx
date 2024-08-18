import { ChakraProvider, VStack } from "@chakra-ui/react";
import { theme } from "./theme";

export type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return (
    <ChakraProvider theme={theme}>
      <VStack w="full" h="full">
        {children}
      </VStack>
    </ChakraProvider>
  );
}
