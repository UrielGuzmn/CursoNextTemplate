import { ShopLayout } from "@/components/layouts"
import { Typography, Grid, Chip, Link, Button } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import NextLink from 'next/link';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID',width:100},
    {field: 'fullname', headerName: 'Nombre completo',width:300},
    {field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra información si la orden está pagada o no.',
    width: 200,
    renderCell: (params:GridRenderCellParams) =>{
        return(
            params.row.paid
            ? <Chip color="success" label='Pagada' variant="outlined"/>
            : <Chip color="error" label='No pagada' variant="outlined"/>
        )}},
    {field: 'action',
    headerName: 'Acción',
    description: 'Te redirige a la informacion de la orden',
    sortable: false,
    width: 200,
    renderCell: (params:GridRenderCellParams) =>{
        return(
            <NextLink href={`/orders/${params.row.id}`} legacyBehavior>
                <Link underline="always">
                    <Button color="secondary">Ver orden</Button>
                </Link>
            </NextLink>
        )}}
];

const rows = [
    {id:1, paid: true, fullname: 'Uriel Guzman'},
    {id:2, paid: false,  fullname: 'Diego Guzman'},
    {id:3, paid: false,  fullname: 'Hector Guzman'},
    {id:4, paid: true,  fullname: 'Andrea Guzman'},
    {id:5, paid: true,  fullname: 'Maria Guzman'}
]
const HistoryPage = () => {
  return (
    
    <ShopLayout title={"Historial"} pageDescription={"Historial de ordenes"}>
        <Typography variant="h1" component={'h1'} >Historial de ordenes</Typography>

        <Grid container>
            <Grid item xs={12} sx={{height:650 , width: '100%'}}>
                <DataGrid rows={rows}
                    columns={columns}
                />

            </Grid>

        </Grid>

    </ShopLayout>
  )
}

export default HistoryPage