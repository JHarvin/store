/* eslint-disable no-unused-vars */
import HttpCliente from '../componentes/servicios/HttpCliente';
import axios from 'axios';
//reiniciando axios para peticiones sin tokens
const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const updateProducto = async (requestProducto) => {
    return new Promise((resolve,eject)=>{
        const formData = new FormData();
        
        for (const key in requestProducto) {
            formData.append(key, requestProducto[key]);
        }

        HttpCliente.put(`/api/producto/updateproducto`,formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
            resolve(response);
        }).catch(error => {
            eject(error.response);
        })  
    })
}

export const addProducto = async (requestProducto) => {    
    return new Promise((resolve,eject)=>{
        const formData = new FormData();
        
        for (const key in requestProducto) {
            formData.append(key, requestProducto[key]);
        }

        HttpCliente.post(`/api/producto/addproducto`,formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
            resolve(response);
        }).catch(error => {
            eject(error.response);
        })  
    })
}

export const getProductos =async (requestProductos) => {
     return new Promise((resolve,eject)=>{
        instancia.get(`/api/producto?pageIndex=${requestProductos.pageIndex}&pageSize=${requestProductos.pageSize}&search=${requestProductos.search}`).then(response => {
            resolve(response);
        }).catch(error => {
            eject(error.response);
        })  
     })
};

export const getProducto = async(id) => {
    return new Promise((resolve,eject)=>{
        instancia.get(`/api/producto/${id}`).then(response => {
            resolve(response);
        }).catch(error => {
            eject(error.response);
        })  
    })
};