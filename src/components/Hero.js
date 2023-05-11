import React from "react";
import { Box, Button, Center, Heading, LightMode, SimpleGrid, Text, ChakraProvider } from '@chakra-ui/react'

function Hero () {
  return (
    <ChakraProvider>
      <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h={{ base: '560px', md: '640px' }}
      bgImage="url(https://images.unsplash.com/photo-1533542632746-8e3f6f06bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)"
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: 'block',
        w: 'full',
        h: 'full',
        bg: 'blackAlpha.800',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    >
        <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center flexDirection="column" textAlign="center" color="white" h="full">
          <Heading size="2xl" fontWeight="extrabold" color={"#a75a1a"}>
          Bienvenue à Banlieue Expo
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="4">
          17 jours pour vos meilleures ventes, achats et divertissements.
          </Text>
          <Text fontSize="lg" fontWeight="semibold" mt="3" color={"white"}>
          Plongez dans l'excitation de la Foire de la Banlieue.
          </Text>
          <LightMode>
            <Button colorScheme="blue" size="lg" mt="6" fontWeight="bold" fontSize="md" >
            Réservez votre stand dès maintenant.
            </Button>
          </LightMode>
        </Center>
      </Box>
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        zIndex={2}
        w="full"
        bottom="0"
        py="5"
        bg="blackAlpha.400"
      >
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto">
          <SimpleGrid columns={{ base: 1, md: 3 }}>
            <Box textAlign="center" color="white">
              <Text>Ouvert </Text>
              <Text fontSize="3xl">24h/24h</Text>
            </Box>
            <Box textAlign="center" color="white">
              <Text>Capacite d'acceuil</Text>
              <Text fontSize="3xl">15 000 personnes </Text>
            </Box>
            <Box textAlign="center" color="white">
              <Text>Nos pavillons</Text>
              <Text fontSize="3xl">8 disponibles</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
    </ChakraProvider>
  );
}

export default Hero;