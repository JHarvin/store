import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

toastr.options = {
  positionClass: 'toast-top-center', // Configura la posición: superior derecha
  hideDuration: 300,
  timeOut: 5000, // Duración de la notificación en ms
  closeButton: true, // Muestra un botón para cerrar
  progressBar: true, // Muestra una barra de progreso
  preventDuplicates: true, // Evita notificaciones duplicadas
};

export default toastr;
