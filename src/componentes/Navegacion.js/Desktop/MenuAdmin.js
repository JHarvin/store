import React, { useState } from 'react';
import useStyle from '../../../theme/useStyle';
import { Avatar, Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const MenuAdmin = () => {
    const clases = useStyle();
    const [anchorEl, setAnchorEl ] = useState(null);
    const abrirMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const cerrarMenu = ()=>{
        setAnchorEl(null);
    }

    return (
        <>
            
            
            <Button color='inherit' className={clases.buttonIcon} onClick={abrirMenu}>
                <div className={clases.linkDesktop}>
                <Icon className={clases.mr} >admin_panel_settings</Icon>
                    ADMIN
                    <Icon>keyboard_arrow_down</Icon>
                </div>

            </Button>
             <Menu 
                elevation={2}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical:"bottom",
                    horizontal:"center"
                }}
                transformOrigin={{
                     vertical:"top",
                    horizontal:"center"
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={cerrarMenu}
             >
                <MenuItem className={clases.listItem} onClick={cerrarMenu}>
                    <Link className={clases.linkAppBarMovil} to="/admin/usuarios" > 
                        <ListItemIcon className={clases.listItemIcon} > <Icon>group</Icon> </ListItemIcon>
                        <ListItemText>Usuarios</ListItemText>
                    </Link>

                </MenuItem>
                
                <MenuItem className={clases.listItem} onClick={cerrarMenu}>
                    <Link className={clases.linkAppBarMovil} to="/admin/listaProductos" > 
                        <ListItemIcon className={clases.listItemIcon} > <Icon>storefront</Icon> </ListItemIcon>
                        <ListItemText>Productos</ListItemText>
                    </Link>

                </MenuItem>

                <MenuItem className={clases.listItem} onClick={cerrarMenu}>
                    <Link className={clases.linkAppBarMovil} to="/admin/listaPedidos" > 
                        <ListItemIcon className={clases.listItemIcon} > <Icon>shopping_cart</Icon> </ListItemIcon>
                        <ListItemText>Pedidos</ListItemText>
                    </Link>

                </MenuItem>

             </Menu>
            
        </>
    );
};

export default MenuAdmin;