/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useStyle from '../../theme/useStyle';
import { Button, CardMedia, Container, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import { getProducto } from '../../actions/ProductoAction';
import { addItemsCarrito } from '../../actions/CarritoCompraAction';
import { useStateValue } from '../../contexto/store';

const DetalleProducto = (props) => {
    const [{sesionCarritoCompra},dispatch] = useStateValue();
    const [cantidad, setCantidad] = useState(1);
    const [productoSeleccionado, setProductoSeleccionado] = useState({
            id: 0,
            nombre: "",
            descripcion: "",
            stock: 0,
            marcaId: 0,
            marcaNombre: "",
            categoriaId: 0,
            categoriaNombre: "",
            precio: 0.0,
            imagen:"",
            cantidad: 0
    });

    useEffect(() => {
        const id = props.match.params.id;
      const getProductoAsync= async () => {
        
        const response = await getProducto(id);
        setProductoSeleccionado(response.data);
      }
      getProductoAsync();

    }, [productoSeleccionado]);


    const agregarCarrito = async () =>{
        console.log(productoSeleccionado);
        const item ={
            id: productoSeleccionado.id,
            producto: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            cantidad: cantidad,
            imagen: productoSeleccionado.imagen,
            marca: productoSeleccionado.marcaNombre,
            categoria: productoSeleccionado.categoriaNombre
        };
        await addItemsCarrito(sesionCarritoCompra,item,dispatch);
        props.history.push("/carrito");
    }
    const clases = useStyle();

    return (
      <Container className={clases.containermt}>
        <Typography variant='h4' className={clases.text_title} >{productoSeleccionado.nombre}</Typography>
        <Grid container spacing={4} >
            <Grid item lg={8} md={8} xs={12} >
                <Paper variant='outlined' square className={clases.PaperImg}>
                    <CardMedia className={clases.mediaDetalle}
                    image='https://www.motocenter.com.mx/wp-content/uploads/2019/09/CITIZEN-GRIS.png'
                    title={productoSeleccionado.descripcion}
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
                                    <Typography variant='subtitle2' >$ {productoSeleccionado.precio}</Typography>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Typography variant='subtitle2' >Cantidad</Typography>
                                </TableCell>
                                <TableCell>
                                <TextField 
                                id='cantidad_producto'
                                label=''
                                value={cantidad}
                                onChange={event => setCantidad(event.target.value)}
                                defaultValue={1}
                                type='number'
                                InputLabelProps={
                                    {
                                        shrink: true
                                    }
                                }
                                />
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
                            Precio: ${productoSeleccionado.precio}
                        </Typography>
                        <Typography className={clases.text_detalle}>
                            Unidades disponibles: {productoSeleccionado.stock}
                        </Typography>
                        <Typography className={clases.text_detalle}>
                            Marca: {productoSeleccionado.marcaNombre}
                        </Typography>
                        <Typography className={clases.text_detalle}>
                           Categoría: {productoSeleccionado.categoriaNombre}
                        </Typography>

                    </Grid>
                    <Grid item md={6} >
                    <Typography className={clases.text_detalle}>
                           Descripción:
                        </Typography>
                        <Typography className={clases.text_detalle}>
                            {productoSeleccionado.descripcion}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

      </Container>
    );
};

export default DetalleProducto;