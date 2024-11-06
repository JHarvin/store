import React from "react";
import useStyle from "../../../theme/useStyle";
import { Button, Icon } from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom";

const MenuPublico = () => {
  const clases = useStyle();
  return (
    <>
    <Button color="inherit" className={clases.buttonIcon}>
        <Link
          to="/carrito"
          className={clases.linkDesktop}
         
        >
          <Icon className={clases.mr}>shopping_cart</Icon>
          Mis pedidos
        </Link>
      </Button>

      <Button color="inherit" className={clases.buttonIcon}>
        <Link
          to="/login"
          className={clases.linkDesktop}
         
        >
          <Icon className={clases.mr}>person</Icon>
          Inicia sesión
        </Link>
      </Button>
    </>
  );
};

export default MenuPublico;
