import { ShopLayout } from '@/components/layouts'
import { Box, Typography } from '@mui/material';
import React from 'react'

const Curstom404 = () => {
  return (
    <ShopLayout title={'Page not found'} pageDescription={'No hay nada para mostrar.'}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'calc(100vh - 200px)'}
          sx={{flexDirection: {xs:'column',sm:'row'}}}>
            <Typography variant='h1' component={'h1'} fontSize={50} fontWeight={200} >404 |</Typography>
            <Typography marginLeft={2} >No hay nada para mostrar.</Typography>
            
        </Box>

    </ShopLayout>
  )
}

export default Curstom404