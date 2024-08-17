import { AppProvider, Box, Center } from "./components";
import { Logo } from "./assets";

export default function App() {
  return (
    <AppProvider>
      <Center>
        <Logo />
      </Center>
      <Box w="full" h="full" p={6}>
        Bill Component  
      </Box>
    </AppProvider>
  );
}
