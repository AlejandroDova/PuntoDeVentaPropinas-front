
import { Box, Divider, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import Header from './components/Header'
import MainPropinas from './components/MainPropinas'
import MainNunPad from './components/MainNunPad'
import Footer from './components/Footer'
import MainPagos from './components/MainPagos'

function App() {
  return (
    <>
      <Grid
        templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'100px 1fr 17 0px'}
        gridTemplateColumns={'50px 1fr'}
        h='100vh'
        w='100'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' area={'header'}>
          <Header />
          <Divider />
        </GridItem>
        <GridItem area={'nav'}>
          
        </GridItem>
        <GridItem mt='4' pl='2' area={'main'}>
          <SimpleGrid columns={3} spacing={5}>
            <Box h='max-content'  >
              <MainPropinas />
            </Box>
            <Box>
              <MainNunPad />
            </Box>
            <Box height='80px'>
              <MainPagos />
            </Box>
          </SimpleGrid>
        </GridItem>
        <GridItem area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
