import { Box, Heading, Input, Button,Flex } from "@chakra-ui/react";
import { login } from '../../Services/Login'

export const Card = () => {
  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="#9413dc"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box flex="1" />
      <Box
        backgroundColor="rgba(255, 255, 255, 0.7)" 
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        width="90%"
        maxWidth="400px"
        alignSelf="center"
        boxShadow="lg"
      >
        <Heading as="h2" size="md" mb={4} color="black" textAlign="center">
          Faça o seu Login
        </Heading>
        <Input placeholder="E-mail" mb={4} />
        <Input type="password" placeholder="Senha" mb={6} />
        <Button onClick={login} colorScheme="blue" width="100%">
          Entrar
        </Button>
      </Box>
      <Box flex="1" />
    </Flex>
  );
}