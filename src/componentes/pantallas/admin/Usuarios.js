import React from 'react';
import useStyle from '../../../theme/useStyle';
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const Usuarios = (props) => {
    const clases = useStyle();
    const editaUsuario = () =>{
        const id ="456457835";
        props.history.push("/admin/usuario/"+id);
    }
    return (
      <Container className={clases.containermt} >
        <Typography variant='h4' className={clases.text_title} >
            Usuarios
        </Typography>
        <TableContainer  >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> ID </TableCell>
                        <TableCell> Usuario </TableCell>
                        <TableCell> Email </TableCell>
                        <TableCell> Admin </TableCell>
                        <TableCell>  </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                        <TableCell> 123456789 </TableCell>
                        <TableCell> John Conor </TableCell>
                        <TableCell> conr@gmail.com </TableCell>
                        <TableCell> 
                            <Icon className={clases.iconDelivered} >
                                check
                            </Icon>
                             </TableCell>
                        <TableCell> 
                            <Button variant='contained' color='primary' onClick={editaUsuario} > <Icon>edit</Icon>  </Button>
                            <Button variant='contained' color='secondary' > <Icon>delete</Icon>  </Button>
                            
                             </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell> 987456321 </TableCell>
                        <TableCell> John Conor2 </TableCell>
                        <TableCell> conr2@gmail.com </TableCell>
                        <TableCell> 
                            <Icon className={clases.iconNotDelivered} >
                                clear
                            </Icon>
                             </TableCell>
                        <TableCell> 
                            <Button variant='contained' color='primary' onClick={editaUsuario} > <Icon>edit</Icon>  </Button>
                            <Button variant='contained' color='secondary' > <Icon>delete</Icon>  </Button>
                            
                             </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

      </Container>
    );
};

export default Usuarios;