import { ChakraProvider, VStack } from "@chakra-ui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { theme } from "./theme";

export type AppProviderProps = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  uri: "https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <VStack w="full" h="full">
          {children}
        </VStack>
      </ChakraProvider>
    </ApolloProvider>
  );
}
