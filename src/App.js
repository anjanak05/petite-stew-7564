import React from 'react';
import {  ChakraProvider,Box,  theme, } from '@chakra-ui/react';
import Crou from './Crou';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bg="black">
       
      </Box>
    </ChakraProvider>
  );
}

export default App;
