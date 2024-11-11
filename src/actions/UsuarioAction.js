import HttpCliente from '../componentes/servicios/HttpCliente';

 export const registrarUsuario = (requestUsuario) => {
    return new Promise((resolve,eject)=>{
        HttpCliente.post(`/api/usuario/registrar`,requestUsuario).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error);
        })  
    })
};