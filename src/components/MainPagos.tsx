import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import { useStorePropinas } from "../store";

export default function MainPagos() {
    const { pagos } = useStorePropinas()

    return (
        <Box>
            {pagos.map((p) => (
                <Card m='5'>
                    <CardBody>
                        <Text>{p.tipoPago}</Text>
                        <Text>${p.monto.toString()}</Text>
                    </CardBody>
                </Card>
            ))}

        </Box>
    )
}
