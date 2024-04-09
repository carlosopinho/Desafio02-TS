import { Box, Text, Link, Center } from "@chakra-ui/react";

export const Footer  = () => {
  return (
    <Box bg="#9413dc" py={4} px={8} color="white" position="absolute" bottom={0} width="100%">
      <Center>
        <Text>
          Desenvolvido por{" "}
          <Link href="https://github.com/seuusuario" isExternal color="white">
            Carlos Eduardo 
          </Link>
        </Text>
      </Center>
    </Box>
  );
}
