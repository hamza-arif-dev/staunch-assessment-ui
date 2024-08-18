import { AppProvider, Box, Center } from "./components";
import { Logo } from "./assets";
import { Bill } from "./features";

export default function App() {
  return (
    <AppProvider>
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        bg="white"
        p={4}
        zIndex="1000"
        boxShadow="none"
        borderBottom="1px solid"
        borderBottomColor="gray.250"
      >
        <Center>
          <Logo />
        </Center>
      </Box>
      <Box w="full" h="full" p={6} pt={90}>
        <Bill />
      </Box>
    </AppProvider>
  );
}
