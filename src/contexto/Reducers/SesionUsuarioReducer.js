export const initialState = {
 usuario:{
    id:"",
    nombre:"",
    apellido:"",
    email:"",
    username:"",
    imagen:""
 },
 autenticado:false

};

//llevar los datos de la sesion
const SesionUsuarioReducer = (state=initialState, action) => {
    
  switch (action.type) {
    case "INICIAR_SESION":
    
      return {
        ...state,
        usuario: action.sesion,
        autenticado: action.autenticado
      };
    case "SALIR_SESION":
      return {
        ...state,
        usuario:action.nuevoUsuario,
        autenticado:action.autenticado

      };
      case 'ACTUALIZAR_USUARIO':
        return {
          ...state,
          usuario:action.nuevoUsuario,
          autenticado:action.autenticado
        }
    default:
      return state;
  }
}
export default SesionUsuarioReducer;