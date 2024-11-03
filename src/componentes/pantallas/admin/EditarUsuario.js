import React from 'react';
import useStyle from '../../../theme/useStyle';
import { Container, Grid, Typography } from '@material-ui/core';

const EditarUsuario = () => {
    const clases = useStyle();
    return (
       <Container className={clases.containermt} >
        <Grid container justify='center' >
            <Grid item lg={6} sm={12} >
                <Typography variant='h4' className={clases.text_title} >Editar usuario</Typography>
            </Grid>
        </Grid>

       </Container>
    );
};

export default EditarUsuario;