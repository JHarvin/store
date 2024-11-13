import HttpCliente from '../componentes/servicios/HttpCliente';
import axios from 'axios';
//reiniciando axios para peticiones sin tokens
const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

 export const registrarUsuario = (requestUsuario,dispatch) => {
    return new Promise((resolve,eject)=>{
        instancia.post(`/api/usuario/registrar`,requestUsuario).then(response => {
            dispatch({
                type:"INICIAR_SESION",
                sesion: response.data,
                autenticado:true
            });
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        })  
    })
};

export const loginUsuario = (requestUsuario,dispatch) => {
    return new Promise((resolve,eject)=>{
        instancia.post(`/api/usuario/login`,requestUsuario).then(response => {
            dispatch({
                type:"INICIAR_SESION",
                sesion: response.data,
                autenticado:true
            });
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        })  
    })
};

export const getUsuario =(dispatch)=>{
    return new Promise((resolve,reject)=>{
        HttpCliente.get(`/api/usuario/getUsuario`).then(response => {

            dispatch({
                type:"INICIAR_SESION",
                sesion: response.data,
                autenticado:true
            });

            resolve(response);
        }).catch(error => {
            reject(error.response);
        })  
    })
}