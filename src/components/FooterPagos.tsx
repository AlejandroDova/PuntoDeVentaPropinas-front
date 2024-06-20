import { Box, Text } from '@chakra-ui/react'
import { useStorePropinas } from '../store'


export default function FooterPagos() {
    const { totalPagado, restantePagar } = useStorePropinas()

    return (
        <Box>
            <Text fontSize='3xl'>Total Pagado ${totalPagado}</Text>
            <Text fontSize='3xl'>Restante Por Pagar ${restantePagar}</Text>
        </Box>
    )
}
