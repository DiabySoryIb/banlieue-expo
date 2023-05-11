import React from "react";
import { ChakraProvider, Divider } from '@chakra-ui/react'
import Hero from "./components/Hero";
import WithSubnavigation from "./components/Header";
import Temoignages from "./components/Temoignage.tsx";

function App() {
  return (
    <ChakraProvider>
      <WithSubnavigation />
      <Hero />
      <Divider />
      <Temoignages />
    </ChakraProvider>
  );
}

export default App;

