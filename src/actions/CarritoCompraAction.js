import HttpCliente from '../componentes/servicios/HttpCliente';
import axios from 'axios';
//reiniciando axios para peticiones sin tokens
const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const getCarritoCompra = (dispatch,id) => {
    return new Promise((resolve,reject)=>{
        instancia.get(`/api/carritocompra/GetCarritoById?id=${id}`).then(response => {
            dispatch({
                type:"CARRITO_SESION",
                id: response.data.id,
                items: response.data.items
            });
            resolve(response);
        }).catch(error => {
            reject(error.response);
        })  
    })
}

export const setCarritoCompra = (dispatch,requestCarrito) => {
    return new Promise((resolve,reject)=>{
        instancia.post(`/api/carritocompra/updateCarritoCompra`,requestCarrito).then(response => {
            dispatch({
                type:"CARRITO_SESION",
                id: response.data.id,
                items: response.data.items
            });
            resolve(response);
        }).catch(error => {
            reject(error.response);
        })  
    })
}

export const addItemsCarrito = (requestCarrito, items, dispatch) => {
    
            if(!requestCarrito){
                requestCarrito.items=[];
            }
            //hacer un bucle para ver si el item ya existe
            const indice = requestCarrito.items.findIndex(item => item.id === items.id);
            //si existe se actualiza
            if(indice!==-1){
                requestCarrito.items[indice].cantidad+=items.cantidad;
                //si no existe se agrega
            }else{
                requestCarrito.items.push(items);
            }

           setCarritoCompra(dispatch,requestCarrito);
          
}