/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyle from '../../theme/useStyle';
import { productoArray } from '../data/dataPrueba';
import { getProductos } from '../../actions/ProductoAction';

const productos = (props) => {
    
    const [paginadorProductos, setPaginadorProductos] = useState({
        count:0,
        pageIndex:0,
        pageSize:0,
        pageCount:0,
        data:[]
    }); 

    useEffect(() => {
        const getListaProductos = async () => {
           const respuesta = await getProductos();
           setPaginadorProductos(respuesta.data); //se le agregad data para obtener los datos de la api, sino se le pone da undefined
        }
         getListaProductos();
    },[]); // se ejecuta una vez al renderizar igual que ngOnInit de angular (useEffect es similar que ngOnInit)

    const miArray = productoArray;
    const verProducto =(id)=>{
        props.history.push("/detalleProducto/"+id);
    }
    const clases = useStyle();

    if(!paginadorProductos.data){
        return null;
    }
    return (
        <Container className={clases.containermt} >
          <Typography variant='h4' className={clases.text_title} >Productos</Typography>
           <Grid container spacing={4} >
           {paginadorProductos.data.map(data=> (
             <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
               

                


                <Card>
                    <CardMedia className={clases.media}
                    image='https://www.motocenter.com.mx/wp-content/uploads/2019/09/CITIZEN-GRIS.png'
                    title = {data.nombre}
                    >
                        <Avatar variant='square' className={clases.price}>
                            ${data.precio}
                        </Avatar>
                        </CardMedia>
                        <CardContent  >
                            <Typography variant='h6' className={clases.text_card} > {data.nombre} </Typography>
                            <Button variant='contained' 
                            color='primary'
                            fullWidth
                            onClick={()=>verProducto(data.key)}
                            >Más detalles</Button>
                        </CardContent>

                

                   
                </Card>
                
             </Grid>

            ) )}  
           </Grid>


        </Container>
    );
};

export default productos;