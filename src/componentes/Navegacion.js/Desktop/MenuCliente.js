import React, { useState } from 'react';
import useStyle from '../../../theme/useStyle';
import { Avatar, Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from '../../../contexto/store';

const MenuCliente = () => {
    // eslint-disable-next-line no-unused-vars
    const [{sesionUsuario},dispatch ] = useStateValue();
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
            <Button color='inherit' className={clases.buttonIcon}>
                <Link className={clases.linkDesktop} to="/carrito">
                    <Icon className={clases.mr} >shopping_cart</Icon>
                    MIS PEDIDOS
                </Link>
                

            </Button>
            <div>
            <Button color='inherit' className={clases.buttonIcon} onClick={abrirMenu}>
                <div className={clases.linkDesktop}>
                    <Avatar 
                        alt='mi imagen'
                        className={clases.avatarPerfilAppBar}
                        src='https://zaytandzaatar.com.au/wp-content/uploads/2022/08/Deafult-Profile-Pitcher.png'

                    />
                    { sesionUsuario ? (sesionUsuario.autenticado ? sesionUsuario.usuario.nombre:'No esta en sesión')  
                     : 'No esta en sesión'}{
                        console.log("sesion usuario: ", sesionUsuario)
                     }
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
                    <Link className={clases.linkAppBarMovil} to="/perfil" > 
                        <ListItemIcon className={clases.listItemIcon} > <Icon>person</Icon> </ListItemIcon>
                        <ListItemText>Mi perfil</ListItemText>
                    </Link>

                </MenuItem>
                
                <MenuItem className={clases.listItem} onClick={cerrarMenu}>
                    <Link className={clases.linkAppBarMovil} to="/" > 
                        <ListItemIcon className={clases.listItemIcon} > <Icon>exit_to_app</Icon> </ListItemIcon>
                        <ListItemText>Cerrar sesión</ListItemText>
                    </Link>

                </MenuItem>

             </Menu>
            </div>
        </>
    );
};

export default MenuCliente;