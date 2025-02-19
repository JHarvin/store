import React, { useEffect, useState } from 'react';
import useStyle from '../../../theme/useStyle';
import { Avatar, Button, Container, Grid, MenuItem, TextField, Typography, Select, FormControl, InputLabel } from '@material-ui/core';
import ImageUploader from "react-images-upload";
import { getProducto, updateProducto } from '../../../actions/ProductoAction';
import {v4 as uuidv4} from 'uuid';  
const EditarProducto = (props) => {

  const [producto, setProducto] = useState({
    nombre: "",
    precio: 0.0,
    imagen: "",
    marcaNombre: "",
    categoriaNombre: "",
    stock: 0,
    descripcion: "",
    categoriaId: 0,
    marcaId: 0,
    foto: ""
  });

  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleMarcaChange = (event) => {
    setMarca(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(()=>{
    const id = props.match.params.id;
    const getProductoAsync = async ()=>{
      const respuesta = await getProducto(id);
      console.log("producto respuesta",respuesta.data); 
      setProducto(respuesta.data);
      setCategoria(respuesta.data.categoriaId);
      setMarca(respuesta.data.marcaId);
    }
    getProductoAsync();
  },[]);

  const guardarProducto = async ()=>{
    producto.categoriaId = categoria;
    producto.marcaId = marca;
    producto.id= props.match.params.id; // id del producto a actualizar
    const resultado = await updateProducto(producto);
    console.log("Resultado de actualizar producto:-> ", resultado);
    props.history.push("/admin/listaProductos");
  }

  const keyImage = uuidv4();

  const subirImagen = (imagen) => {
    const foto = imagen[0];
    setProducto((prev) => ({
      ...prev,
      foto: foto,
    }));
  };

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
           <FormControl className={clases.formControl}>
              <InputLabel id="categoria-select-label">Categoria</InputLabel>
              <Select
                labelId="categoria-select-label"
                id="categoria-select"
                value={categoria}
                onChange={handleCategoriaChange}
                label="Categoria"
                className={clases.gridmd}
              >
                  <MenuItem value={1002}>Prueba</MenuItem>
                  <MenuItem value={1003}>test</MenuItem>
                  <MenuItem value={1004}>Celulares</MenuItem>

              </Select>
            </FormControl>

            <FormControl className={clases.formControl}>
              <InputLabel id="marca-select-label">Marca</InputLabel>
              <Select
                labelId="marca-select-label"
                id="marca-select"
                value={marca}
                onChange={handleMarcaChange}
                label="Marca"
                className={clases.gridmd}
              >
                  <MenuItem value={1003}>Xiaomi</MenuItem>
                  <MenuItem value={1004}>Samsung</MenuItem>
                  <MenuItem value={1005}>Motorola</MenuItem>

              </Select>
            </FormControl>

            <TextField
              label="Nombre"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
              fullWidth
              value={producto.nombre}
              className={clases.gridmd}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Precio"
              
              variant="outlined"
              fullWidth
              value={"$"+producto.precio}
              className={clases.gridmd}
              InputLabelProps={{
                shrink: true,
              }}
              name="precio"
              onChange={handleChange}
            />
           
            <TextField
              label="Stock"
              variant="outlined"
              fullWidth
              value={producto.stock}
              className={clases.gridmd}
              InputLabelProps={{
                shrink: true,
              }}
              name="stock"
              onChange={handleChange}
            />
            <TextField
              label="Descripción"
              variant="outlined"
              fullWidth
              multiline
              value={producto.descripcion}
              rows={4}
              className={clases.gridmd}
              InputLabelProps={{
                shrink: true,
              }}
              name="descripcion"
              onChange={handleChange}
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
                key={keyImage}
                withPreview={true}
                onChange={subirImagen}
                />
                
              </Grid>
              <Grid item  sm={6} xs={12} >
                <Avatar
                variant="square"
                className={clases.avatarProducto}
                src={`${process.env.REACT_APP_API_URL}${producto.imagen.replace(/\\/g, "/")}`}
                />
              </Grid>

            </Grid>
             <Button variant='contained' color='primary'  
             onClick={guardarProducto}
             >
                Actualizar
            </Button>
          </form>



                 </Grid>
             </Grid>
        </Container>
    );
};

export default EditarProducto;