import React from 'react';
import useStyle from '../../../theme/useStyle';
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const ListaPedidos = (props) => {
    const clases = useStyle();
    const verDetalle =()=>{
        const id="e3c500a1-05f6-4a7c-9d62-f992c2ba6e0f";
        props.history.push("/ordenCompra/"+id);

    }
    return (
        <Container className={clases.containermt} >
            <Typography variant='h4' className={clases.text_title} >Pedidos</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Pagado</TableCell>
                            <TableCell>Entregado</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                            <TableCell>1234567890</TableCell>
                            <TableCell>Nestor Arcila</TableCell>
                            <TableCell>05/11/2024</TableCell>
                            <TableCell>$60.00</TableCell>
                            <TableCell>05/11/2024</TableCell>
                            <TableCell>
                                <Icon className={clases.iconDelivered} >check</Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant='contained' color='inherit' onClick={verDetalle} >
                                    Detalles
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>0987654321</TableCell>
                            <TableCell>Nestor Arcila</TableCell>
                            <TableCell>05/10/2024</TableCell>
                            <TableCell>$160.00</TableCell>
                            <TableCell>05/11/2024</TableCell>
                            <TableCell>
                                <Icon className={clases.iconNotDelivered} >clear</Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant='contained' color='inherit' onClick={verDetalle} >
                                    Detalles
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListaPedidos;