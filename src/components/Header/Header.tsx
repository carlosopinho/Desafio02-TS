import {
  Box,
  Flex,
  Avatar,
  Heading
} from '@chakra-ui/react'


export const Header  = () => {
  return (
    <Box bg="#9413dc" py={4} px={8} color="white">
      <Flex justify="space-between" alignItems="center">
        <Heading as="h1" size="lg" fontFamily="monospace" fontWeight="bold" letterSpacing="wide">
          Dio Bank
        </Heading>
        <Avatar
          src="/caminho/para/sua/foto.jpg"
          name="Nome do Usuário"
          size="md"
          borderWidth="2px"
          borderColor="white"
        />
      </Flex>
    </Box>
  );
}