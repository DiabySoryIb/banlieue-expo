import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
  LinkProps
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';
import imageexpo from '../assets/BExpo.png';

const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box maxW="300px">
          <Link href="https://notifybrand.com" isExternal>
            <Image w="150px"  src={imageexpo} alt="Banlieue Expo Logo" />
          </Link>
          <Text mt={2} color="gray.500" fontSize="md">
          Rencontrez des experts, explorez de nouveaux produits et plongez-vous dans l'effervescence de Banlieue Expo.
          </Text>
        </Box>
        <HStack
          spacing={4}
          d={{ base: 'none', sm: 'flex' }}
          justifyContent={{ sm: 'space-between', md: 'normal' }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Contrinute</CustomLink>
              <CustomLink>Media assets</CustomLink>
              <CustomLink>Changelog</CustomLink>
              <CustomLink>Releases</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Community
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Chat on Discord</CustomLink>
              <CustomLink>Follow on Twitter</CustomLink>
              <CustomLink>Follow on Github</CustomLink>
              <CustomLink>Github discussions</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Project
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>TemplatesKart</CustomLink>
              <CustomLink>Documentation</CustomLink>
              <CustomLink>Github organization</CustomLink>
              <CustomLink>npm organization</CustomLink>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Divider my={4} />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
        <Text fontSize="md">
          Built by{' '}
          <Link
            href="https://www.notifybrand.com"
            textDecoration="underline"
            _hover={{ textDecoration: 'underline' }}
            isExternal
          >
            Notify Brand
          </Link>
        </Text>
        <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
          <Button leftIcon={<FaGithub />} as={Link} href="#" rounded="md" colorScheme="gray">
            Github Discussions
          </Button>
          <Button
            leftIcon={<BsDiscord />}
            as={Link}
            href="#"
            rounded="md"
            color="white"
            bg="purple.500"
            _hover={{ bg: 'purple.600' }}
          >
            Discord community
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;