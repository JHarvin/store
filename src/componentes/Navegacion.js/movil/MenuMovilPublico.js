import {
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import useStyle from "../../../theme/useStyle";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MenuMovilPublico = (props) => {
    const clases = useStyle();
  return (
    <>
      <ListItem button className={clases.listItem} onClick={props.clickHandler}>
        <Link
          to="/login"
          className={clases.linkAppBarMovil}
          
        >
          <ListItemIcon className={clases.listItemIcon}>
            <Icon>person</Icon>
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </Link>
      </ListItem>

      <ListItem button className={clases.listItem} onClick={props.clickHandler}>
        <Link
          to="/carrito"
          className={clases.linkAppBarMovil}
          
        >
          <ListItemIcon className={clases.listItemIcon}>
            <Icon>shopping_cart</Icon>
          </ListItemIcon>
          <ListItemText>Mis pedidos</ListItemText>
        </Link>
      </ListItem>
    </>
  );
};

export default MenuMovilPublico;
