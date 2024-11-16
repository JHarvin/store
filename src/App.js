import React, { useEffect } from "react";
import Login from "./componentes/seguridad/Login";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import MenuAppBar from "./componentes/Navegacion.js/MenuAppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import productos from "./componentes/pantallas/productos";
import DetalleProducto from "./componentes/pantallas/detalleProducto";
import CarritoCompras from "./componentes/pantallas/CarritoCompras";
import ProcesoCompra from "./componentes/pantallas/ProcesoCompra";
import OrdenCompra from "./componentes/pantallas/OrdenCompra";
import Perfil from "./componentes/seguridad/Perfil";
import Usuarios from "./componentes/pantallas/admin/Usuarios";
import EditarUsuario from "./componentes/pantallas/admin/EditarUsuario";
import ListaProductos from "./componentes/pantallas/admin/ListaProductos";
import AgregarProducto from "./componentes/pantallas/admin/AgregarProducto";
import EditarProducto from "./componentes/pantallas/admin/EditarProducto";
import ListaPedidos from "./componentes/pantallas/admin/ListaPedidos";
import { useState } from "react";
import { getUsuario } from "./actions/UsuarioAction";
import { useStateValue } from "./contexto/store";
import { getCarritoCompra } from "./actions/CarritoCompraAction";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [sesionUsuario, dispatch] = useStateValue();
  const [servidorRespuesta, setServidorRespuesta] = useState(false);


  useEffect(() => {
    if (!servidorRespuesta) {
      let idCarrito = localStorage.getItem("carrito");
      if(!idCarrito){
        idCarrito = uuidv4();
        window.localStorage.setItem("carrito",idCarrito);
      }
      //solo cuando sea falase se ejecutara
      getUsuario(dispatch).then((response) => {
        
     
      });


      getCarritoCompra(dispatch,idCarrito).then((response) => {
        
     
      });
      setServidorRespuesta(true);
    }
  }, [servidorRespuesta]); // solo cuando sea true se ejecutara

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrar" component={RegistrarUsuario} />
          <Route exact path="/" component={productos} />
          <Route
            exact
            path="/detalleProducto/:id"
            component={DetalleProducto}
          />
          <Route exact path="/carrito" component={CarritoCompras} />
          <Route exact path="/procesoCompra" component={ProcesoCompra} />
          <Route exact path="/ordenCompra/:id" component={OrdenCompra} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/admin/usuarios" component={Usuarios} />
          <Route exact path="/admin/usuario/:id" component={EditarUsuario} />
          <Route
            exact
            path="/admin/listaProductos"
            component={ListaProductos}
          />
          <Route
            exact
            path="/admin/agregarProducto"
            component={AgregarProducto}
          />
          <Route
            exact
            path="/admin/editarProducto/:id"
            component={EditarProducto}
          />
          <Route exact path="/admin/listaPedidos" component={ListaPedidos} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
