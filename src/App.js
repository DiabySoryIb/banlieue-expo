import React from "react";
import { ChakraProvider, Divider } from '@chakra-ui/react'
import Hero from "./components/Hero";
import WithSubnavigation from "./components/Header";
import Temoignages from "./components/Temoignage.tsx";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <WithSubnavigation />
      <Hero />
      <Divider />
      <Temoignages />
      <Footer/>
      </ChakraProvider>
  );
}

export default App;

