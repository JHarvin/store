import React from 'react';
import useStyle from '../../../theme/useStyle';
import { Avatar, Button, Container, Grid, MenuItem, TextField, Typography } from '@material-ui/core';
import ImageUploader from "react-images-upload";
const EditarProducto = () => {
    const clases = useStyle();
    return (
        <Container className={clases.containermt} >
             <Grid container justify="center">
                 <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={clases.text_title}>
                        Editar producto
                    </Typography>
                     
                    <form
            className={clases.form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <TextField fullWidth size="small" select variant="outlined" label="Categoría" className={clases.gridmd} >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </TextField>

            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              value="chamarra"
              className={clases.gridmd}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Precio"
              variant="outlined"
              fullWidth
              value="$10"
              className={clases.gridmd}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Marca"
              variant="outlined"
              fullWidth
              value="adidas"
              className={clases.gridmd}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Stock"
              variant="outlined"
              fullWidth
              value="10"
              className={clases.gridmd}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Descripción"
              variant="outlined"
              fullWidth
              multiline
              value="Esto es una descripcion"
              rows={4}
              className={clases.gridmd}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Grid container spacing={2} >
              <Grid item  sm={6} xs={12} >
                <ImageUploader
                withIcon={true}
                buttonText='Subir imagen'
               
                imgExtension={['.jpg', '.png', '.gif', '.jpeg']}
                maxFileSize={5242880}
                label="Subir imagen"
                singleImage={true}
                withPreview={true}
                />
                
              </Grid>
              <Grid item  sm={6} xs={12} >
                <Avatar
                variant="square"
                className={clases.avatarProducto}
                src='https://www.motocenter.com.mx/wp-content/uploads/2019/09/CITIZEN-GRIS.png'
                />
              </Grid>

            </Grid>
             <Button variant='contained' color='primary'  >
                Actualizar
            </Button>
          </form>



                 </Grid>
             </Grid>
        </Container>
    );
};

export default EditarProducto;