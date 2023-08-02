import { ShopLayout } from "@/components/layouts"
import { FormControl, Grid, TextField, Typography ,InputLabel, Select, MenuItem, Box, Button} from "@mui/material"


const addressPage = () => {
  return (
    <ShopLayout title={"Dirección"} pageDescription={"Confirmar dirección de destino"}>
        <Typography variant="h1" component={"h1"}>Dirección</Typography>
        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={12} sm={6}>
                <TextField label ='Nombre' variant="filled" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label ='Apellido' variant="filled" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label ='Dirección' variant="filled" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label ='Dirección 2 (opcional)' variant="filled" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label ='Codigo Postal' variant="filled" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label ='Ciudad' variant="filled" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <Select variant="filled" label= 'País' value={1}>
                        <MenuItem value = {1}>México</MenuItem>
                        <MenuItem value = {2}>Estados Unidos</MenuItem>
                        <MenuItem value = {3}>Canada</MenuItem>
                        <MenuItem value = {4}>Costa Rica</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label ='Teléfono' variant="filled" fullWidth></TextField>
            </Grid>
        </Grid>

        <Box sx = {{mt:4}} display={'flex'} justifyContent={'center'}>
            <Button color="secondary" className="circular-btn" size="large">
                Revisar pedido
            </Button>
        </Box>
    </ShopLayout>
  )
}

export default addressPage