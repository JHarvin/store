import { Button, CardMedia, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from '../../theme/useStyle';

const OrdenCompra = (props) => {
    //recuperar parametro de url
    const {id} = props.match.params;
    const mensajeEnvio = 'No se realizó el envio';
    const mensajePago = 'Se realizó la compra';
    const clases = useStyle();
    return (
      <Container className={clases.containermt}>
        <Typography variant='h5' className={clases.text_title} >
            ORDEN DE COMPRA: {id.toUpperCase()}

        </Typography>
        <Grid container spacing={2} className={clases.paperPadding}>
        <Grid item md={8} xs={12}  >
                    
                    <Typography variant='h6' className={clases.text_title}>ENVIO</Typography>

                    <Typography variant='body2' className={clases.text_envio} >Nombres: Harvin Ramos</Typography>

                    <Typography variant='body2' className={clases.text_envio} >Email: har9802@gmail.com</Typography>

                    <Typography variant='body2' className={clases.text_envio} >Dirección: calle san antonio abad san salvador el salvador casa 42</Typography>

                    <div className={clases.alertNotDelivered} >

                      <Typography variant='body2' className={clases.text_title}>
                        {mensajeEnvio}
                      </Typography>

                    </div>


                    
                    <Divider className={clases.divider} />
                    
                    <Typography variant='h6' className={clases.text_title}>METODO DE PAGO</Typography>
                    
                    <Typography>METODO: Tarjeta Debito/Credito</Typography>
                    
                    <div className={clases.alertDelivered} >

                      <Typography variant='body2' className={clases.text_title}>
                        {mensajePago}
                      </Typography>

                      </div>
                    
                    <Divider className={clases.divider} />

                    <Typography variant='h6' className={clases.text_title}>PRODUCTOS</Typography>

                    <TableContainer className={clases.gridmd}>
                        <Table>
                            <TableBody>
                             <TableRow>
                                 <TableCell>
                                    <CardMedia
                                    className={clases.imgProductoPC}
                                    image='https://www.motocenter.com.mx/wp-content/uploads/2019/09/CITIZEN-GRIS.png'
                                    tile="Imagen en proceso compra"
                                    >

                                    </CardMedia>
                                </TableCell>
                                <TableCell>
                                    <Typography className={clases.text_detalle}>
                                        chamarra para motociclista
                                    </Typography>
                                   
                                </TableCell>
                                <TableCell>
                                   <Typography className={clases.text_detalle}>
                                        2 x $25.00 = $50.00
                                    </Typography>
                                </TableCell>
                             </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
               
                </Grid> 
                <Grid item md={4} xs={12} >
                    <TableContainer component={Paper} square >
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Typography className={clases.text_title} variant='h6'>
                                            RESUMEN DEL PEDIDO
                                        </Typography>

                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >
                                        <Typography className={clases.text_title}>
                                            PRODUCTOS
                                        </Typography>

                                    </TableCell>

                                    <TableCell >
                                        <Typography className={clases.text_title}>
                                            $50.00
                                        </Typography>

                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >
                                        <Typography className={clases.text_title}>
                                            ENVIO
                                        </Typography>

                                    </TableCell>

                                    <TableCell >
                                        <Typography className={clases.text_title}>
                                            $2.00
                                        </Typography>

                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >
                                        <Typography className={clases.text_title}>
                                            TOTAL
                                        </Typography>

                                    </TableCell>

                                    <TableCell >
                                        <Typography className={clases.text_title}>
                                            $52.00
                                        </Typography>

                                    </TableCell>
                                </TableRow>


                                <TableRow>
                                    
                                    <TableCell colSpan={2}  >
                                        {/**Boton para el cliente */}
                                        {/**
                                     
                                      <Button variant='contained' color='primary' size='large' fullWidth className={clases.gridmd}>
                                        Chivo wallet
                                       </Button>

                                       <Button variant='contained'  size='large' fullWidth>
                                        Tarjeta Debito/Credito
                                       </Button>
                                     */}
                                      {/**Boton para el admin */}
                                         <Button variant='contained' color="primary" size='large' fullWidth>Marcar como entregado</Button>
                                    </TableCell>

                                   
                                </TableRow>
                            </TableBody>
                        </Table>
                        
                    </TableContainer>

                </Grid>

        </Grid>

      </Container>
    );
};

export default OrdenCompra;