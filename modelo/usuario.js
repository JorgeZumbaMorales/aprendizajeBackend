class Usuario {
    constructor({ id, nombre, email, fecha_creacion }) {
      this.id = id; // Opcional para actualizaciones o búsquedas
      this.nombre = nombre;
      this.email = email;
      this.fecha_creacion = fecha_creacion || new Date();
    }
  
    // Validar que los datos del usuario son correctos
    static validar(datos) {
      const errores = [];
      if (!datos.nombre || datos.nombre.trim().length === 0) {
        errores.push('El nombre es obligatorio.');
      }
      if (!datos.email || !/\S+@\S+\.\S+/.test(datos.email)) {
        errores.push('El email no es válido.');
      }
      return errores;
    }
  }
  
  export default Usuario;
  