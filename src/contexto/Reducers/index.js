import sesionCarritoCompraReducer from "./sesionCarritoCompraReducer";
import SesionUsuarioReducer from "./SesionUsuarioReducer";


export const mainReducer = ( {sesionUsuario, sesionCarritoCompra}, action) => {// aqui se van agregando los reducers
  return {
    sesionUsuario: SesionUsuarioReducer(sesionUsuario, action),
    sesionCarritoCompra: sesionCarritoCompraReducer(sesionCarritoCompra, action)
  }
};