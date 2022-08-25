import React from 'react';
import { ChakraProvider,  theme } from '@chakra-ui/react';
import Navbar from './Component/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Component/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <AllRoutes/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
