import { Box } from "@chakra-ui/react";


import InputNumpad from "./InputNumpad";
import GridNumpad from "./GridNumpad";

export default function MainNunPad() {
    return (
        <div>
            <Box background='#f2f2f2f2' rounded='xl'>
                <InputNumpad />
                <GridNumpad />
            </Box>
        </div>
    )
}
