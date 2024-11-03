/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from '../../theme/useStyle';
import { productoArray } from '../data/dataPrueba';

const productos = (props) => {
    const miArray = productoArray;
    const verProducto =(id)=>{
        props.history.push("/detalleProducto/"+id);
    }
    const clases = useStyle();
    return (
        <Container className={clases.containermt} >
          <Typography variant='h4' className={clases.text_title} >Productos</Typography>
           <Grid container spacing={4} >
           {miArray.map(data=> (
             <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
               

                


                <Card>
                    <CardMedia className={clases.media}
                    image='https://www.motocenter.com.mx/wp-content/uploads/2019/09/CITIZEN-GRIS.png'
                    title = 'Productos'
                    >
                        <Avatar variant='square' className={clases.price}>
                            ${data.precio}
                        </Avatar>
                        </CardMedia>
                        <CardContent  >
                            <Typography variant='h6' className={clases.text_card} > {data.titulo} </Typography>
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