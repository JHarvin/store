import {
  Avatar,
  Collapse,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import useStyle from "../../../theme/useStyle";

const MenuMovil = (props) => {

    const [openCliente, setOpenCliente] = useState(false);
    const [openAdmin, setOpenAdmin]= useState(false);
    const clickCliente = () => {
        setOpenCliente((prevOpen)=> !prevOpen );
    }
    const clickAdmin =() =>{
      setOpenAdmin((prevOpen) =>!prevOpen);
    }

  const clases = useStyle();


  return (
    <>
      <ListItem onClick={clickCliente} button className={clases.listItem}>
        <div className={clases.linkAppBarMovil}>
          <Avatar
            alt="mi imagen"
            className={clases.avatarPerfilAppBar}
            src="https://zaytandzaatar.com.au/wp-content/uploads/2022/08/Deafult-Profile-Pitcher.png"
          />
          <ListItemText>John Conor</ListItemText>
          <Icon>keyboard_arrow_down</Icon>
        </div>
      </ListItem>
      <Collapse component="li" in={openCliente} timeout="auto" unmountOnExit>
        <List disablePadding>  
          
          <ListItem button className={clases.listSubItem} onClick={props.clickHandler} >
          <Link  className={clases.linkAppBarMovil} to="/perfil" >
              <ListItemIcon className={clases.listItemIcon} >
                <Icon>person</Icon>
              </ListItemIcon>
              <ListItemText>Mi perfil</ListItemText> 
            </Link>
         </ListItem>

          <ListItem button className={clases.listSubItem} onClick={props.clickHandler}>
            <Link className={clases.linkAppBarMovil} to="/" color="inherit" underline="none">
              <ListItemIcon className={clases.listItemIcon}>
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText>Cerrar sesión</ListItemText>
            </Link>
          </ListItem>
          <Divider/>
        </List> 
      </Collapse>
{/** Admin */}
      <ListItem onClick={clickAdmin} button className={clases.listItem}>
        <div className={clases.linkAppBarMovil}>
         
         <ListItemIcon 
          className={clases.listItemIcon}
         >
          <Icon>admin_panel_settings</Icon>
         </ListItemIcon>
         <ListItemText>Admin</ListItemText>
         <Icon>keyboard_arrow_down</Icon>
        </div>
      </ListItem>
      <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
        <List disablePadding>  
          
          <ListItem button className={clases.listSubItem} onClick={props.clickHandler} >
          <Link  className={clases.linkAppBarMovil} to="/admin/usuarios" >
              <ListItemIcon className={clases.listItemIcon} >
                <Icon>group</Icon>
              </ListItemIcon>
              <ListItemText>Usuarios</ListItemText> 
            </Link>
         </ListItem>

          <ListItem button className={clases.listSubItem} onClick={props.clickHandler}>
            <Link className={clases.linkAppBarMovil} to="/admin/listaProductos" color="inherit" underline="none">
              <ListItemIcon className={clases.listItemIcon}>
                <Icon>storefront</Icon>
              </ListItemIcon>
              <ListItemText>Productos</ListItemText>
            </Link>
          </ListItem>

          <ListItem button className={clases.listSubItem} onClick={props.clickHandler}>
            <Link className={clases.linkAppBarMovil} to="/" color="inherit" underline="none">
              <ListItemIcon className={clases.listItemIcon}>
                <Icon>shopping_cart</Icon>
              </ListItemIcon>
              <ListItemText>Pedidos</ListItemText>
            </Link>
          </ListItem>
          <Divider/>
          
        </List> 
      </Collapse>
  {/** Fin admin */}

      <Divider />
      <ListItem button className={clases.listItem} onClick={props.clickHandler}>
        <Link className={clases.linkAppBarMovil} to="/carrito" >
          <ListItemIcon className={clases.listItemIcon}>
            <Icon>shopping_cart</Icon>
          </ListItemIcon>
          <ListItemText>Mis pedidos</ListItemText>
        </Link>
      </ListItem>
    </>
  );
};

export default MenuMovil;
