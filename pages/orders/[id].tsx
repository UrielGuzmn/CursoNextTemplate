import { ShopLayout } from '@/components/layouts'
import React from 'react'
import { Typography, Grid, Card, Divider, Box, Button, Link, Chip } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import NextLink from 'next/link';
import { CreditCardOffOutlined, CreditCardOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title={'Resumen de orden 1232321'} pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component='h1'>Orden:3216dsfg6465</Typography>

        {/* <Chip
            sx={{my:2}}
            label = 'Pendiente de pago'
            variant='outlined'
            color='error'
            icon={<CreditCardOffOutlined/>}
        ></Chip> */}

        <Chip
            sx={{my:2}}
            label = 'Orden pagada'
            variant='outlined'
            color='success'
            icon={<CreditCardOutlined/>}
        ></Chip>

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
                        <Typography variant='h2'>Pagar</Typography>
                        <Chip
                            sx={{my:2}}
                            label = 'Orden pagada'
                            variant='outlined'
                            color='success'
                            icon={<CreditCardOutlined/>}
                        ></Chip>

                    </Box>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrderPage