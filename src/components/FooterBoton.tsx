import { AbsoluteCenter, Box, Button, Text } from "@chakra-ui/react";
import { Pago, useStorePropinas } from "../store";

export default function FooterBoton() {
    const { metodoPago, totalPorPersona, totalPagado, totalPropinas, agregarPago, agregarTotalPagado, actualizarRestantePagar } = useStorePropinas()

    async function postPago() {
        const pago = { monto: totalPorPersona, tipopago: metodoPago }
        console.log(pago)
        const response = await fetch('http://localhost:3000/recibosPropinas', {
            method: 'POST',
            body: JSON.stringify(pago),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseText = await response.text();
        console.log(responseText);
    }

    function pagarPropina() {
        if (metodoPago != 0 && totalPorPersona != 0 && totalPagado < totalPropinas) {
            agregarPago(
                {
                    monto: totalPorPersona,
                    tipoPago: metodoPago
                } as Pago
            )
            agregarTotalPagado(totalPorPersona)
            actualizarRestantePagar()
            postPago()
        }
    }

    return (
        <Box position='relative' ml='40'>
            <AbsoluteCenter>
                <Button onClick={() => pagarPropina()} h='70px' colorScheme='orange' variant='solid'>
                    <Text fontSize='2xl'>Pagar ${totalPorPersona} en Propinas</Text>
                </Button>
            </AbsoluteCenter>
        </Box>
    )
}
