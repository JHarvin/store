/* eslint-disable no-unused-vars */
import React from 'react';
import useStyle from '../../theme/useStyle';
import { Button, CardMedia, Container, Divider, Grid, Icon, IconButton, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import { productoArray } from '../data/dataPrueba';
import { useStateValue } from '../../contexto/store';

const CarritoCompras = (props) => {
    const [{sesionCarritoCompra},dispatch] = useStateValue();
    //[{sesionCarritoCompra},dispatch] = useStateValue();
    console.log('sesioncarrito: ->',sesionCarritoCompra);
    const miArray = productoArray;
    const realizarCompra = () =>{
        props.history.push("/procesoCompra");
    }
    const clases = useStyle();
    return (
       <Container className={clases.containermt} >
          <Typography variant='h4' className={clases.text_title} >Carrito de compras</Typography>
            <Grid container spacing={2}>
                <Grid item lg={9} md={8} sm={12} xs={12} >
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {miArray.map(producto=>(
                                    <TableRow key={producto.key}>
                                        <TableCell>
                                            <CardMedia 
                                            className={clases.imgProductoCC}
                                            image='https://www.motocenter.com.mx/wp-content/uploads/2019/09/CITIZEN-GRIS.png'
                                            title='Imagen en carrito'
                                            >

                                            </CardMedia>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={clases.text_detalle}>
                                                {producto.titulo}

                                            </Typography>
                                        </TableCell>

                                        <TableCell>
                                            <Typography className={clases.text_detalle}>
                                                ${producto.precio}

                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <TextField 
                                            select
                                            variant='outlined'
                                            size='small'
                                            >
                                                <MenuItem value={1} >1 </MenuItem>
                                                <MenuItem value={2} >2 </MenuItem>
                                                <MenuItem value={3} >3 </MenuItem>
                                                <MenuItem value={4} >4 </MenuItem>
                                                <MenuItem value={5} >5 </MenuItem>


                                            </TextField>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <Icon>delete</Icon>
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                ))}

                            </TableBody>

                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Paper variant='outlined' square className={clases.paperPadding}>
                        <Typography variant='h6' className={clases.text_title} >SubTotal ({miArray.length}) Productos </Typography>
                        <Typography className={clases.text_title} > 
                            $146.99
                        </Typography>
                        <Divider className={clases.gridmd} />
                        <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        onClick={realizarCompra}
                        > Realizar compra</Button>

                    </Paper>

                </Grid>
            </Grid>
       </Container>
    );
};

export default CarritoCompras;