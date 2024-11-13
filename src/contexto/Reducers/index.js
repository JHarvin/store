import SesionUsuarioReducer from "./SesionUsuarioReducer";


export const mainReducer = ( {sesionUsuario}, action) => {// aqui se van agregando los reducers
  return {
    sesionUsuario: SesionUsuarioReducer(sesionUsuario, action)
  }
};