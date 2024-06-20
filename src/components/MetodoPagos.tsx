import { AbsoluteCenter, Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { useStorePropinas } from "../store";
import { useEffect, useState } from "react";

export default function MetodoPagos() {

    const [pagos, setPagos] = useState([{id:0,nombre:'',numero:0}])
    
    // async function loaddata() {
    //     const response = await fetch('http://localhost:3000/tipoPago');
    //     tipospagos = await response.json();

    //     tipospagos.map((p) => {
    //         console.log(p.nombre)
    //     })

    //     console.log(tipospagos)
    // }


    const { metodoPago, editMetodoPago } = useStorePropinas()

    useEffect(() => {
        fetch("http://localhost:3000/tipoPago")
            .then((response) => response.json())
            .then((json) => setPagos(json));
    }, [])

    return (
        <Box mt='10'>
            <Center>
                <Text fontSize='2xl'>Elegir metodo de pago</Text>
            </Center>

            <Center>

                <Box>
                    <SimpleGrid columns={2} spacing={8}>
                        {pagos.map((p) => (
                            <Box cursor='pointer' onClick={() => editMetodoPago(p.id)} background={metodoPago === p.id ? 'orange.200' : ' '} position='relative' h='75' w='200px' borderWidth='1px' borderRadius='lg' shadow='md'>
                                <AbsoluteCenter>
                                    <Text hidden={p.numero === 0 ? true : false} fontSize='2xl'>{p.nombre} {p.numero}</Text>
                                    <Text hidden={p.numero === 0 ? false : true} fontSize='2xl'>{p.nombre}</Text>
                                </AbsoluteCenter>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

            </Center>
        </Box>
    )
}
