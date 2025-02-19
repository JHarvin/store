import React, { useEffect, useState } from 'react';
import useStyle from '../../../theme/useStyle';
import { Button, Container, Grid, Icon, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

import { getProductos } from '../../../actions/ProductoAction';
import { Pagination } from '@material-ui/lab';

const ListaProductos = (props) => {

    const [requestProductos, setRequestProductos] = useState({
        pageIndex:1,
        pageSize:5,
        search:''
    });

    const [paginadorProductos, setPaginadorProductos] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        items: [],
    });

    const handleChange = (event, value) => {
        setRequestProductos({
            ...requestProductos,
            pageIndex: value,
        });
    };

    useEffect(()=>{
        const getListaProductos = async ()=>{
           const respuesta = await getProductos(requestProductos);
           console.log("lista productos respuesta",respuesta.data); 
           setPaginadorProductos(respuesta.data);
        }
        getListaProductos();
    },[requestProductos]);

    const clases = useStyle();
 
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
                    {paginadorProductos.items.map((producto) => (
                            <TableRow key={producto.id}>
                                <TableCell>{producto.id}</TableCell>
                                <TableCell>{producto.nombre}</TableCell>
                                <TableCell>${producto.precio}</TableCell>
                                <TableCell>{producto.marcaNombre}</TableCell>
                                <TableCell>{producto.categoriaNombre}</TableCell>
                             
                                <TableCell>
                                    <Button variant='contained' color='primary' onClick={()=>editarProducto(producto.id)} >
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
        <Pagination count={paginadorProductos.pageCount} 
        page={paginadorProductos.pageIndex}
        onChange={handleChange} 
        />
        </Container>
    );
};

export default ListaProductos;
