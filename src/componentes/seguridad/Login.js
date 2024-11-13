import {Grid, Card, Container, Typography, Avatar, Icon, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import useStyle from "../../theme/useStyle";
import {Link} from 'react-router-dom';
import { loginUsuario } from "../../actions/UsuarioAction";
import toastr from "../../theme/notification.js/toastrConfig";
import { useStateValue } from "../../contexto/store";
// alt*62, 60 < >

const Login =(props)  =>{
    // eslint-disable-next-line no-unused-vars
    const [{sesionUsuario},dispatch ] = useStateValue();
    const clases=useStyle();
    const clearUser ={
       
        email:'',
        password:''
    }
    const [usuario,setUsuario]=useState({
        email:'',
        password:''
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUsuario({
            ...usuario,
            [name]:value
        })
    }

    const login=  ()=>{
        
          loginUsuario(usuario,dispatch).then(respuesta=>{
            if(respuesta.status===200){
                setUsuario(clearUser); 
             
                window.localStorage.setItem('token',respuesta.data.token);
                props.history.push('/');
                toastr.success('Bienvenido ' + usuario.email, 'Éxito');
             
            }else{
              
                toastr.error('Email o contraseña incorrectos', 'Error');
               setUsuario(clearUser);
            }
               
        });
       
        

    }

    return (
       <Container className={clases.containermt}>
        <Grid container justify="center">
            <Grid item lg={5} md={6}>
                <Card className={clases.card} align="center">
                    <Avatar className={clases.avatar}>
                        <Icon className={clases.icon}>
                          account_circle
                        </Icon>
                    </Avatar>
                    <Typography varian="h5" color="primary">Ingrese su usuario</Typography>
                    <form className={clases.form} onSubmit={(e) =>e.preventDefault()}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={clases.gridmd}>
                                <TextField label="Email"
                                variant="outlined"
                                fullWidth
                                type="email"
                                name="email"                                
                                value={usuario.email}
                                onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} className={clases.gridmd}>
                                <TextField label="contraseña"
                                variant="outlined"
                                fullWidth
                                type="password"
                                name="password"
                                value={usuario.password}
                                onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} className={clases.gridmd}>
                             <Button 
                             variant="contained"
                             fullWidth
                             color="primary"
                             type="submit"
                             onClick={login}
                             >
                                Ingresar
                             </Button>
                            </Grid>
                        </Grid>
                        <Link className={clases.link}
                        to="/registrar"
                        variant="body1"> 
                        Crear cuenta
                        </Link>
                    </form>
                </Card>
            </Grid>
        </Grid>
       </Container>
    )
};
export default Login;

