import {Button, Avatar, Card, Container, Grid, Icon, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyle from '../../theme/useStyle';
import {Link} from 'react-router-dom';
import { registrarUsuario } from '../../actions/UsuarioAction';
import toastr from '../../theme/notification.js/toastrConfig';


const clearUser ={
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    username:''
}

const RegistrarUsuario =(props) =>{
    const [usuario, setUsuario] = useState({
        nombre:'',
        apellido:'',
        email:'',
        password:'',
        username:''

    });
    const handleChange =(e) =>{
        const {name, value} = e.target;
        setUsuario(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const guardarUsuario = () =>{
         registrarUsuario(usuario).then(response=>{
             console.log("Usuario registrado: ", response);
             toastr.success('Registrado con éxito', 'Éxito');
             window.localStorage.setItem('token',response.data.token);
             setUsuario(clearUser);
             props.history.push('/');
         })

        /*console.log("Usuario: ", usuario);
        setUsuario(clearUser);*/
    }
    const clases =useStyle();
    return (
    <Container className={clases.containermt}>
        <Grid container justify='center'>
            <Grid ite lg={6} md={8}>
                <Card className={clases.card} align='center'>
                   <Avatar className={clases.avatar}>
                    <Icon className={clases.icon}>person_add</Icon>
                   </Avatar>
                   <Typography variant='h5' color='primary' >Registro de usuario</Typography>
                   <form className={clases.form} onSubmit={(e) =>e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs = {12} className={clases.gridmd}>
                            <TextField
                            label="Nombre"
                            variant='outlined'
                            fullWidth
                            name='nombre'
                            value={usuario.nombre}
                            onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs = {12} className={clases.gridmd}>
                            <TextField
                            label="Apellido"
                            variant='outlined'
                            fullWidth
                            name='apellido'
                            value={usuario.apellido}
                            onChange={handleChange}
                            />
                        </Grid>

                        <Grid item md={12} xs = {12} className={clases.gridmd}>
                            <TextField
                            label="Nombre de usuario"
                            variant='outlined'
                            fullWidth
                            name='username'
                            value={usuario.username}
                            onChange={handleChange}
                            />
                        </Grid>

                        <Grid item md={12} xs = {12} className={clases.gridmd}>
                            <TextField
                            label="Email"
                            variant='outlined'
                            fullWidth
                            type='email'
                            name='email'
                            value={usuario.email}
                            onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={12} xs = {12} className={clases.gridmd}>
                            <TextField
                            label="Contraseña"
                            variant='outlined'
                            fullWidth
                            type='password'
                            name='password'
                            value={usuario.password}
                            onChange={handleChange}
                            />
                        </Grid>

                        <Grid item md={12} xs = {12} className={clases.gridmd}>
                           <Button
                           variant='contained'
                           fullWidth
                           color='primary'
                           onClick={guardarUsuario}
                           type='submit'
                           >Registrar</Button>
                        </Grid>
                    </Grid>

                    <Link
                    to='/login'
                    variant='body1'
                    className={clases.link}
                    >Inicia sesión sí ya posees una cuenta</Link>
                </form>
                </Card>
               
              
            </Grid>
        </Grid>

    </Container>
    )
    
}
export default RegistrarUsuario;