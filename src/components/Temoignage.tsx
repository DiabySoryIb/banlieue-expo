import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const testimonials = [
  {
    name: 'Brandon P.',
    role: 'Chief Marketing Officer',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    avatar:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Ib Sory Diaby',
    role: 'Entrepreneur',
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar:
      'data:image/jpeg;base64,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',
  },
  {
    name: 'Darcy L.',
    role: 'Movie star',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Daniel T.',
    role: 'Musician',
    content:
      'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}>
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.p
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={'gray.500'}>
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  );
}

export default function Temoignages() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'purple.400'}>
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          You're in good company
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}>
          See why over{' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            150,000+
          </chakra.strong>{' '}
          influencers use EEZY to manage their social media content!
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={'20'}
        mt={16}
        mb={16}
        mx={'auto'}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box>
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
          <path
            fill={'currentColor'}
            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
          />
        </Icon>
      </Box>
    </Flex>
  );
}