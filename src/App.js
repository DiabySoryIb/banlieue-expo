import React from "react";
import { ChakraProvider, Divider } from '@chakra-ui/react'
import Hero from "./components/Hero";
import WithSubnavigation from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <WithSubnavigation />
      <Hero />
      <Divider />
    </ChakraProvider>
  );
}

export default App;

