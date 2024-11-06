import React from 'react';
import useStyle from '../../../theme/useStyle';
import { Button, Container, Grid, Icon, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { productoArray } from '../../data/dataPrueba';

const ListaProductos = (props) => {
    const clases = useStyle();
    const productos = productoArray;
    const agregarProducto =()=>{
        props.history.push("/admin/agregarProducto");
    }
    const editarProducto = (id)=>{
        props.history.push(`/admin/editarProducto/${id}`);
    }
    return (
        <Container className={clases.containermt} >
            <Grid container>
                <Grid item lg={6} sm={6} xs={12} >
                    <Typography variant='h4' className={clases.text_title} >Productos</Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={12} >
                    
                    <Button variant='contained' color='inherit' className={clases.buttonAgregar} onClick={agregarProducto}>
                    <Icon>add</Icon>
                         Agregar producto </Button>
                </Grid>
            </Grid>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> ID </TableCell>
                        <TableCell> Nombre </TableCell>
                        <TableCell> Precio </TableCell>
                        <TableCell> Marca </TableCell>
                        <TableCell> Categoría </TableCell>
                        <TableCell> Acciones </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productos.map((producto) => (
                            <TableRow key={producto.key}>
                                <TableCell>{producto.id}</TableCell>
                                <TableCell>{producto.titulo}</TableCell>
                                <TableCell>${producto.precio}</TableCell>
                                <TableCell>{producto.marca}</TableCell>
                                <TableCell>{producto.categoria}</TableCell>
                                <TableCell>
                                    <Button variant='contained' color='primary' onClick={()=>editarProducto(producto.key)} >
                                    <Icon>edit</Icon>
                                    </Button>
                                    <Button variant='contained' color='secondary'  >
                                    <Icon>delete</Icon>
                                    </Button>
                                    
                                </TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        
        </Container>
    );
};

export default ListaProductos;
