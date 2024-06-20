import { AbsoluteCenter, Box, Text } from "@chakra-ui/react";
import { useStorePropinas } from "../store";

export default function NumeroBoton(prop: { num: Number }) {
    const { agregarNumPad } = useStorePropinas()

    return (
        <Box onClick={() => agregarNumPad(prop.num.toString())} position='relative' h='80px' background={"white"} >
            <Text fontSize='3xl'>
                <AbsoluteCenter>
                    {prop.num.toString()}
                </AbsoluteCenter>
            </Text>
        </Box>
    )
}
