/* eslint-disable no-unused-vars */
import React from 'react';
import useStyle from '../../theme/useStyle';
import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';

const DetalleProducto = (props) => {
    const agregarCarrito = () =>{
        props.history.push("/carrito");
    }
    const clases = useStyle();

    return (
      <Container className={clases.containermt}>
        <Typography variant='h4' className={clases.text_title} >Chamarra</Typography>
        <Grid container spacing={4} >
            <Grid item lg={8} md={8} xs={12} >
                <Paper variant='outlined' square className={clases.PaperImg}>
                    <CardMedia className={clases.mediaDetalle}
                    image='https://www.motocenter.com.mx/wp-content/uploads/2019/09/CITIZEN-GRIS.png'
                    title='Chamarra test'
                    >

                    </CardMedia>

                </Paper>

            </Grid>
            <Grid item lg={4} md={4} xs={12} >
                <TableContainer component={Paper} variant='outlined'>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant='subtitle2' >Precio</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='subtitle2' >$25.99</Typography>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Typography variant='subtitle2' >Cantidad</Typography>
                                </TableCell>
                                <TableCell>
                                    <TextField 
                                    size='small'
                                    select
                                    variant='outlined'
                                    >
                                        <MenuItem value={1} >
                                        1
                                        </MenuItem>
                                        <MenuItem value={2} >
                                        2
                                        </MenuItem>
                                        <MenuItem value={3} >
                                        3
                                        </MenuItem>

                                    </TextField>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2} >
                                    <Button variant='contained'
                                    color='primary'
                                    size='large'
                                    onClick={agregarCarrito}
                                    >Agregar a carrito</Button>
                                </TableCell>
                            </TableRow>



                        </TableBody>
                    </Table>
                    
                </TableContainer>

            </Grid>
            <Grid item lg={8} md={8} xs={12} >
                <Grid container spacing={2}>
                    <Grid item md={6} >
                        <Typography className={clases.text_detalle}>
                            Precio: $25.99
                        </Typography>
                        <Typography className={clases.text_detalle}>
                            Unidades disponibles: 15
                        </Typography>
                        <Typography className={clases.text_detalle}>
                            Marca: Axxis
                        </Typography>
                        <Typography className={clases.text_detalle}>
                           Temporada: Invierno
                        </Typography>

                    </Grid>
                    <Grid item md={6} >
                    <Typography className={clases.text_detalle}>
                           Descripción:
                        </Typography>
                        <Typography className={clases.text_detalle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

      </Container>
    );
};

export default DetalleProducto;