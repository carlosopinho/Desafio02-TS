import { 
  ChakraProvider,
  Box
} from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh'>
      <Header />
        <Card />
        <Footer />
      </Box>

    </ChakraProvider>
  );
}

export default App;
