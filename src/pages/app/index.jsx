import { ChakraProvider } from '@chakra-ui/react';
import PageRouter from '../../routes';

function App() {
  return (
    <ChakraProvider>
      <PageRouter />
    </ChakraProvider>
  );
}

export default App;
