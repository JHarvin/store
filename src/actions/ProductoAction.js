import HttpCliente from '../componentes/servicios/HttpCliente';

export const getProductos = (requestProductos) => {
     return new Promise((resolve,eject)=>{
        HttpCliente.get(`/api/producto?pageIndex=${requestProductos.pageIndex}&pageSize=${requestProductos.pageSize}&search=${requestProductos.search}`).then(response => {
            resolve(response);
        }).catch(error => {
            eject(error);
        })  
     })
};