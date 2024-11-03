import { AppBar, Container, Icon, Toolbar, Typography, Button, IconButton, Drawer, ListItem, ListItemIcon, List, ListItemText } from "@material-ui/core";
import React, { useState } from "react";
import useStyle from "../../theme/useStyle";
import {Link} from 'react-router-dom';
import MenuCliente from "./Desktop/MenuCliente";
import MenuAdmin from "./Desktop/MenuAdmin";
import MenuMovil from "./movil/MenuMovil";

const MenuAppBar = () => {
    const [open, setOpen] = useState(false);
    const clases =useStyle();

    const openTogle = () =>{
        setOpen(true);
    }
    const closeTogle = () =>{
        setOpen(false);
    }

    return (
        <AppBar position="static" className={clases.appBar}>
            <Container>
                <Toolbar>
                    <div className={clases.sectionMovil}>
                        <IconButton color="inherit" onClick={openTogle}>
                            <Icon fontSize="large">menu</Icon>
                        </IconButton>
                    </div>
                    <Drawer
                    open={open}
                    onClose={closeTogle}
                    >
                        <div className={clases.list}>
                            <List>
                            {/*    <ListItem  button className={clases.listItem} onClick={closeTogle}>
                                    <Link to="/login" className={clases.linkAppBarMovil} color="inherit" underline="none">
                                    <ListItemIcon className={clases.listItemIcon}>
                                        <Icon>person</Icon>
                                    </ListItemIcon>
                                    <ListItemText>Login</ListItemText>
                                    </Link>
                                </ListItem> */}

                                <MenuMovil clickHandler={closeTogle} />
                            </List>
                        </div>

                    </Drawer>
                    <div className={clases.grow}> 
                        <Link to="/" className={clases.linkbar}
                        color="inherit"
                        underline="none">

                            <Icon className={clases.mr} fontSize="large" >store</Icon>
                            <Typography variant="h5">Tienda Online</Typography>

                        </Link>

                    </div>

                    <div className={clases.sectionDesktop}>
                       {/*  <Button color="inherit" className={clases.buttonIcon}>
                            <Link to="/login" className={clases.linkDesktop} color="inherit" underline="none">
                            <Icon className={clases.mr}>person</Icon>
                            Inicia sesión
                            </Link>
                        </Button> */}
                        <MenuCliente/>
                        <MenuAdmin/>

                    </div>
                </Toolbar>
            </Container>
        </AppBar>

    )

}
export default MenuAppBar;