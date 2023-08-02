import { ShopLayout } from "@/components/layouts"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Box, Link, Typography } from "@mui/material"
import NextLink from 'next/link';



 const emptyPage = () => {
  return (
    <ShopLayout title={"Carrito vacío"} pageDescription={"No hay productos en el carrito de compras"}>
        <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'calc(100vh - 200px)'}
        sx={{flexDirection: {xs:'column',sm:'row'}}}>
           <RemoveShoppingCartOutlined sx={{fontSize: 80}}/>
           <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{ml:2}}>
            <Typography>Su carrito está vacío</Typography>
            <NextLink href={'/'} passHref legacyBehavior>
                <Link typography={'h5'} color={'secondary'}>
                Regresar
                </Link>
            </NextLink>
            </Box> 

            
            
        </Box>
    </ShopLayout>
  )
}

 export default emptyPage;
