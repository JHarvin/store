/* eslint-disable no-unused-vars */
import HttpCliente from '../componentes/servicios/HttpCliente';
import axios from 'axios';
//reiniciando axios para peticiones sin tokens
const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const getProductos = (requestProductos) => {
     return new Promise((resolve,eject)=>{
        instancia.get(`/api/producto?pageIndex=${requestProductos.pageIndex}&pageSize=${requestProductos.pageSize}&search=${requestProductos.search}`).then(response => {
            resolve(response);
        }).catch(error => {
            eject(error.response);
        })  
     })
};

export const getProducto = (id) => {
    return new Promise((resolve,eject)=>{
        instancia.get(`/api/producto/${id}`).then(response => {
            resolve(response);
        }).catch(error => {
            eject(error.response);
        })  
    })
};