/* eslint-disable react-hooks/rules-of-hooks */

import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Icon,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyle from "../../theme/useStyle";
import { productoArray } from "../data/dataPrueba";
import { getProductos } from "../../actions/ProductoAction";
import { Pagination } from "@material-ui/lab";
import { addItemsCarrito } from "../../actions/CarritoCompraAction";
import { useStateValue } from "../../contexto/store";

const productos = (props) => {

  const [{sesionCarritoCompra},dispatch] = useStateValue();

    const [requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
         pageSize: 2,
         search:'',

    });

  const [paginadorProductos, setPaginadorProductos] = useState({
    count: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,
    items: [],
  });

  const navegacionPagina = (event, page) => {
    setRequestProductos({
      ...requestProductos,
      pageIndex: page,
    });
  };
  useEffect(() => {
    const getListaProductos = async () => {
      const respuesta = await getProductos(requestProductos);
      
      setPaginadorProductos(respuesta.data); //se le agregad data para obtener los datos de la api, sino se le pone da undefined
    };
    getListaProductos();
  }, [requestProductos]); // se ejecuta una vez al renderizar igual que ngOnInit de angular (useEffect es similar que ngOnInit)
  // se ejecuta cuando cambia el estado de requestProductos

  // eslint-disable-next-line no-unused-vars
  const miArray = productoArray;// no se usa
  //agregar producto al carrito
  const  agregarProductoCarrito = async (item) => {
   await addItemsCarrito(sesionCarritoCompra,item,dispatch);
  };
  const verProducto = (id) => {
    props.history.push("/detalleProducto/" + id);
  };
  const clases = useStyle();

  if (!paginadorProductos.items) {
    console.log("No hay productos");
    return null;
  }
  return (
    <Container className={clases.containermt}>
      <Typography variant="h4" className={clases.text_title}>
        Productos
      </Typography>
      <Grid container spacing={4}>
        {paginadorProductos.items.map((data) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={data.id}>
            <Card>
              <CardMedia
                className={clases.media}
                image="https://www.motocenter.com.mx/wp-content/uploads/2019/09/CITIZEN-GRIS.png"
                title={data.nombre}
              >
                <Avatar variant="square" className={clases.price}>
                  ${data.precio}
                </Avatar>
              </CardMedia>
              <CardContent>
                <Typography variant="h6" className={clases.text_card}>
               
                  {data.nombre}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => verProducto(data.id)}
                >
                  Más detalles
                </Button>

                <Button
                  variant="contained"
                  color="#FFB079"
                  fullWidth
                  onClick={() => agregarProductoCarrito(data)}
                >
                  <Icon>add_shopping_cart</Icon>
                  Agregar al carrito
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={navegacionPagina} />
    </Container>
  );
};

export default productos;
