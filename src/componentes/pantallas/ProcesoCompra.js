import React from 'react';
import useStyle from '../../theme/useStyle';
import { Button, CardMedia, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

const ProcesoCompra = (props) => {
    const [activeStep, setActiveStep] = useState(1);
    const continuarProceso = () =>{
        setActiveStep((prevActiveStep)=> prevActiveStep +1 );
    }
    const retrocederProceso = () =>{
        setActiveStep((prevActiveStep)=> prevActiveStep -1 );
    }
    const realizarPedido = () =>{
        const idCompra ="e3c500a1-05f6-4a7c-9d62-f992c2ba6e0f";
        props.history.push("/ordenCompra/"+idCompra);

    }
    const clases = useStyle();
    return (
       <Container className={clases.containermt}>
         <Stepper activeStep={activeStep} alternativeLabel >
            <Step>
                <StepLabel>Registrarse</StepLabel>
            </Step>
            <Step>
                <StepLabel>Envio</StepLabel>
            </Step>
            <Step>
                <StepLabel>Metodo de pago</StepLabel>
            </Step>
            <Step>
                <StepLabel>Realizar pedido</StepLabel>
            </Step>

         </Stepper>
        {activeStep === 1 ? (
            <Grid md={6} xs={12} className={clases.gridPC} > 
             <Typography variant='h6' className={clases.text_title} > 
                ENVIO DEL PRODUCTO
             </Typography>
             <form onSubmit={(e)=>e.preventDefault() } className={clases.form}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField 
                         label='Dirección'
                         fullWidth
                         InputLabelProps={{
                            shrink:true
                         }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                         label='Distrito'
                         fullWidth
                         InputLabelProps={{
                            shrink:true
                         }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                         label='Departamento'
                         fullWidth
                         InputLabelProps={{
                            shrink:true
                         }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                         label='Teléfono'
                         fullWidth
                         InputLabelProps={{
                            shrink:true
                         }}
                         
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button 
                        variant='contained'
                        color='primary'
                        onClick={continuarProceso}
                        >CONTINUAR</Button>
                    </Grid>

                </Grid>

             </form>

            </Grid>

        ) : activeStep === 2 ? (
            <Grid md={3} xs={12} className={clases.gridPC} > 
                <Typography 
                variant='h6'
                className={clases.text_title}
                >METODO DE PAGO</Typography>
                <Grid container spacing={2} >
                    <Grid itemxs={12} >
                        <FormControl className={clases.formControl}>
                            <FormLabel>
                                Seleccione metodo de pago
                            </FormLabel>
                            <RadioGroup>
                                <FormControlLabel 
                                value='Paypal'
                                control={<Radio color='primary' />}
                                label='Tarjeta Debito/Credito'
                                />

                                
                            </RadioGroup>

                        </FormControl>

                    </Grid>
                    <Grid itemxs={12} >
                        <Button
                        variant='contained'
                        color='primary'
                        className={clases.buttonAnterior}
                        onClick={retrocederProceso}
                        >ANTERIOR</Button>

                        <Button
                        variant='contained'
                        color='primary'
                        
                        onClick={continuarProceso}
                        >CONTINUAR</Button>

                    </Grid>
                </Grid>

            </Grid>

        ) : activeStep === 3 ? (
            <Grid container className={clases.gridPC} >
                <Grid item md={8} xs={12} className={clases.gridLR} >
                    
                    <Typography variant='h6' className={clases.text_title}>ENVIO</Typography>
                    
                    <Typography>Dirección: calle san antonio abad san salvador el salvador casa 42</Typography>
                    
                    <Divider className={clases.divider} />
                    
                    <Typography variant='h6' className={clases.text_title}>METODO DE PAGO</Typography>
                    
                    <Typography>METODO: Tarjeta Debito/Credito</Typography>
                    
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
                    <Button
                    variant='contained'
                    color='primary'
                    onClick={retrocederProceso}
                    >
                        ANTERIOR
                    </Button>



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
                                    <TableCell >
                                       <Button variant='contained' color='primary' size='large' onClick={realizarPedido}>
                                        REALIZAR PEDIDO
                                       </Button>

                                    </TableCell>

                                   
                                </TableRow>
                            </TableBody>
                        </Table>
                        
                    </TableContainer>

                </Grid>

            </Grid>
            
        ) : null}
         </Container>
    );
};

export default ProcesoCompra;