import HttpCliente from '../componentes/servicios/HttpCliente';

export const getProductos = () => {
     return new Promise((resolve,eject)=>{
        HttpCliente.get('/api/producto').then(response => {
            resolve(response);
        }).catch(error => {
            eject(error);
        })  
     })
};