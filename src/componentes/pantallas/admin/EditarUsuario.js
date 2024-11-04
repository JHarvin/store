import React from 'react';
import useStyle from '../../../theme/useStyle';
import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';

const EditarUsuario = () => {
    const clases = useStyle();
    return (
       <Container className={clases.containermt} >
        <Grid container justify='center' >
            <Grid item lg={6} sm={12} >
                <Typography variant='h4' className={clases.text_title} >Editar usuario</Typography>
                <form onSubmit={(e)=>{e.preventDefault()}} className={clases.form} >
                    <TextField 
                    label="Nombre"
                    variant='filled'
                    value="John Conor"
                    fullWidth
                    disabled
                    className={clases.gridmd}
                    ></TextField>

                    <TextField 
                    label="Email"
                    variant='filled'
                    value="John@gmail.com"
                    fullWidth
                    disabled
                    
                    ></TextField>
                    <FormControl className={clases.checkbox} >
                        <FormControlLabel 
                        control={<Checkbox  color="primary" />}
                        label="Es administrador"
                        ></FormControlLabel>
                    </FormControl>
                    <Button variant='contained' color='primary' type='submit' className={clases.gridmd} > Actualizar </Button>
                    
                </form>
            </Grid>
        </Grid>

       </Container>
    );
};

export default EditarUsuario;