import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
const Boxes = () => {
  return (
    <Grid
    templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
    gridTemplateRows={'150px'}
    gridTemplateColumns={'50px 50px 50px'}
    h='200px'
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'
  >
    <GridItem pl='2' bg='orange.300' area={'header'}>
      Header
    </GridItem>
    <GridItem pl='2' bg='orange.300' area={'header'}>
    dashboard
    </GridItem>
    <GridItem pl='2' bg='orange.300' area={'header'}>
      cartitem
    </GridItem>
    
  </Grid>
  )
}

export default Boxes