import React from 'react';
import { Avatar, Button, Container, Divider, Grid, TextField, Typography, Icon, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ImageUploader from 'react-images-upload';

import useStyle from '../../theme/useStyle';

const Perfil = (props) => {
    //subir imagenes con imageuploaderimage, las valida tambien
    const clases = useStyle();
    const verDetalles =()=>{
        const id="E3C500A1-05F6-4A7C-9D62-F992C2BA6E0F";
        props.history.push("ordenCompra/"+id);

    }
    return (
        <Container className={clases.containermt} >
            <Grid container spacing={2} >
                <Grid item md={3} xs={12} >
                    <Typography variant="h5" className={clases.text_title} >
                        PERFIL DE USUARIO
                    </Typography>
                    <form onSubmit={(e)=>e.preventDefault()} className={clases.form}>
                        <ImageUploader
                          withIcon={false}
                          buttonStyles={{ borderRadius: "50%", padding:10,margin:0,position:"absolute", bottom:15, left:15 }
                        }
                        className={clases.upImg}
                        buttonText={<Icon>add_a_photo</Icon>}
                        label={<Avatar alt='mi perfil' className={clases.avatarPerfil} />}
                        src="https://zaytandzaatar.com.au/wp-content/uploads/2022/08/Deafult-Profile-Pitcher.png"
                        imgExtension={['.jpg','.gif','.png','.jpeg']}
                        maxFileSize={5242880}/>
                        <TextField 
                          label="Nombre"
                          variant='outlined'
                          fullWidth
                          className={clases.gridmd}
                          value='John'
                        />
                        <TextField 
                          label="Apellido"
                          variant='outlined'
                          fullWidth
                          className={clases.gridmd}
                          value='Conor'
                        />
                        <TextField 
                          label="Correo electrónico"
                          variant='outlined'
                          fullWidth
                          className={clases.gridmd}
                          value='John@correo.com'
                        />
                        <Divider className={clases.divider} />
                        <TextField 
                          label="Contraseña"
                          variant='outlined'
                          fullWidth
                          className={clases.gridmd}
                          
                        />
                        <TextField 
                          label="Confirmar contraseña"
                          variant='outlined'
                          fullWidth
                          className={clases.gridmd}
                          
                        />
                        <Button variant='contained'
                        color='primary'
                        >ACTUALIZAR </Button>
                    </form>

                </Grid>
                <Grid item md={9} xs={12} >
                    <Typography variant='h5' className={clases.text_title} >MIS PEDIDOS</Typography>
                    <TableContainer className={clases.form}>
                        <Table className={clases.table} >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Fecha</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Pagado</TableCell>
                                    <TableCell>Entregado</TableCell>
                                    <TableCell>Acciones</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell>E3C500A1-05F6-4A7C-9D62-F992C2BA6E0F</TableCell>
                                    <TableCell>20/09/2024</TableCell>
                                    <TableCell>$65.00</TableCell>
                                    <TableCell>20/09/2024</TableCell>
                                    
                                    <TableCell>
                                        <Icon className={clases.iconDelivered} >check</Icon>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant='contained' onClick={verDetalles} >
                                            DETALLES
                                        </Button>
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
export default Perfil;


