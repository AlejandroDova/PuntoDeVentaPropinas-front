import { CloseIcon } from '@chakra-ui/icons'
import { AbsoluteCenter, Box, Flex, IconButton, Input } from '@chakra-ui/react'
import { useStorePropinas } from '../store'
import { useEffect } from 'react'

export default function InputNumpad() {
    const { numpad } = useStorePropinas()
    const { eliminarNumPad } = useStorePropinas()
    useEffect(() => { }, [numpad])



    return (
        <Flex>
            <Input value={numpad} w='500px' m='5' variant='flushed' placeholder='cantidad' />

            <Box position='relative'>
                <AbsoluteCenter>
                    <IconButton onClick={() => eliminarNumPad()} aria-label='Search database' icon={<CloseIcon />} />
                </AbsoluteCenter>
            </Box>
        </Flex>
    )
}
