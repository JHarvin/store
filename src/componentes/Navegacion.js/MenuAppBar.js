import { AppBar, Container, Icon, Toolbar, Typography, Button, IconButton, Drawer, ListItem, ListItemIcon, List, ListItemText } from "@material-ui/core";
import React, { useState } from "react";
import useStyle from "../../theme/useStyle";
import {Link} from 'react-router-dom';
import MenuCliente from "./Desktop/MenuCliente";
import MenuAdmin from "./Desktop/MenuAdmin";
import MenuMovil from "./movil/MenuMovil";
import MenuMovilPublico from "./movil/MenuMovilPublico";
import MenuPublico from "./Desktop/MenuPublico";

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
                           
                               {/** <MenuMovilPublico clickHandler={closeTogle} />*/}
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
                       
                        {/*/**  <MenuPublico/> */}
                        <MenuCliente/>
                        <MenuAdmin/>

                    </div>
                </Toolbar>
            </Container>
        </AppBar>

    )

}
export default MenuAppBar;