import { ShopLayout } from '@/components/layouts'
import React from 'react'
import { Typography, Grid, Card, Divider, Box, Button, Link } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import NextLink from 'next/link';

const SummaryPage = () => {
  return (
    <ShopLayout title={'Resumen de orden'} pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component='h1'>Resumen de la orden</Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList ></CartList>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card sx={{px:2 ,py:2}}>
                    <Typography variant='h2'>Resumen (3 productos)</Typography>
                    <Divider sx={{my:1}}/>

                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant='subtitle1'>Dirección de entrega</Typography>
                        <NextLink href={'/checkout/address'} passHref legacyBehavior>
                            <Link underline='always'>
                                Editar
                            </Link>
                        </NextLink>
                    </Box>

                    
                    <Typography>Uriel Guzman</Typography>
                    <Typography>Bahia de huatulco #12354</Typography>
                    <Typography>Parques de Santa María, Tlaquepaque</Typography>
                    <Typography>México</Typography>
                    <Typography>3366995522</Typography>
                    
                    <Divider sx={{my:1}}/>

                    <Box display={'flex'} justifyContent={'end'}>
                        <NextLink href={'/checkout/address'} passHref legacyBehavior>
                            <Link underline='always'>
                                Editar
                            </Link>
                        </NextLink>
                    </Box>

                    <OrderSummary></OrderSummary>

                    <Box sx={{mt:3}}>
                        <Button color='secondary' className='circular-btn' fullWidth>
                            Confirmar orden
                        </Button>

                    </Box>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage