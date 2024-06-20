import { Box, Center, Flex } from "@chakra-ui/react";
import FooterPagos from "./FooterPagos";
import FooterBoton from "./FooterBoton";

export default function Footer() {
  return (
    <Box>
      <Center>
        <Flex>
          <FooterPagos />
          <FooterBoton />
        </Flex>

      </Center>

    </Box>
  )
}
