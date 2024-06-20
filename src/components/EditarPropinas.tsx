import { EditIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, IconButton, Input, Text } from '@chakra-ui/react'
import { useStorePropinas } from '../store'
import { useEffect } from 'react'

export default function EditarPropinas() {
    const { totalPropinas, editNumberFocus } = useStorePropinas()

    useEffect(() => { }, [totalPropinas])

    return (
        <Center mt='10'>

            <Box onClick={() => editNumberFocus(1)}>
                <Text textColor='orange.400' fontSize='sm'>Total de propinas</Text>
                <Flex>
                    <Box rounded='md'>
                        <Center>
                            <Input value={totalPropinas} focusBorderColor='orange.400' bg='orange.200' h='80px' w='150px' fontSize='4xl' textColor='orange.400' placeholder='$$$$' />
                        </Center>
                    </Box>
                    <Center pl='2'>
                        <IconButton
                            isRound={true}
                            variant='solid'
                            aria-label='Done'
                            fontSize='20px'
                            icon={<EditIcon />}
                        />
                    </Center>
                </Flex>
            </Box>
        </Center>
    )
}
