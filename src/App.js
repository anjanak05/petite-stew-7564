import React from 'react';
import { ChakraProvider,  theme } from '@chakra-ui/react';
import Navbar from './Component/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </ChakraProvider>
  );
}

export default App;
