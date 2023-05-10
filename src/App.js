import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Hero from "./components/Hero";

function App() {
  return (
    <ChakraProvider>
      <Hero />
    </ChakraProvider>
  );
}

export default App;