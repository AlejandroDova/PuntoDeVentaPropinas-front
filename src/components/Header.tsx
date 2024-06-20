import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react'
export default function Header() {
    return (
        <div>
            <Flex>
                <Box m='10'>
                    <Center>
                        <Text fontSize='xl'>Pago de propinas</Text>
                    </Center>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Box>
                        <Text textColor='orange.400' fontSize='sm'>Efectivo en caja</Text>
                    </Box>
                    <Box bg='orange.200' rounded='md'>
                        <Center>
                            <Text textColor='orange.400' fontSize='4xl'>5500</Text>
                        </Center>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}
