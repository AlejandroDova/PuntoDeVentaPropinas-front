import { AbsoluteCenter, Box, SimpleGrid, Text } from '@chakra-ui/react'
import NumeroBoton from './NumeroBoton'
import { useStorePropinas } from '../store'

export default function GridNumpad() {
    const { editfocus,editarPropinas, editarPersonasPropinas, eliminarNumPad, actualizarTotalPorPersona  } = useStorePropinas()

    function onclickAceptar() {
        if(editfocus === 1){
            editarPropinas()
            eliminarNumPad()
            actualizarTotalPorPersona()
        } else if(editfocus === 2){
            editarPersonasPropinas()
            eliminarNumPad()
            actualizarTotalPorPersona()
        }
    }

    return (
        <SimpleGrid m='5' minChildWidth='120px' spacing='40px'>
            <NumeroBoton num={1} />
            <NumeroBoton num={2} />
            <NumeroBoton num={3} />
            <NumeroBoton num={4} />
            <NumeroBoton num={5} />
            <NumeroBoton num={6} />
            <NumeroBoton num={7} />
            <NumeroBoton num={8} />
            <NumeroBoton num={9} />
            <Box></Box>
            <NumeroBoton num={0} />
            <Box mb='5' onClick={() => onclickAceptar()} cursor='pointer' position='relative' h='80px' background={"white"} >
                <Text fontSize='3xl'>
                    <AbsoluteCenter>
                        Aceptar
                    </AbsoluteCenter>
                </Text>
            </Box>
        </SimpleGrid>
    )
}
