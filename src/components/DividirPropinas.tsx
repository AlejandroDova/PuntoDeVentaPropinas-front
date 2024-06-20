import { AbsoluteCenter, Box, Center, Flex, Input, Spacer, Text } from '@chakra-ui/react'
import { useStorePropinas } from '../store'
import { useEffect } from 'react'

export default function DividirPropinas() {
    const { personasPropina, editNumberFocus, totalPorPersona} = useStorePropinas()

    useEffect(() => {}, [personasPropina])

    return (
        <Center mt='10'>
            <Box>
                <Text fontSize='2xl'>
                    Entre cúantos quieres dividir las Propinas?
                </Text>
                <Box onClick={() => editNumberFocus(2)}>
                    <Flex>
                        <Box>
                            <Input value={personasPropina} h='70' w='80px' variant='outline' placeholder='#' />
                        </Box>
                        <Spacer />
                        <Box position='relative'>
                            <AbsoluteCenter>
                                <Text textColor='orange.400' fontSize='xl'>${totalPorPersona} x Persona</Text>
                            </AbsoluteCenter>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Center>
    )
}
