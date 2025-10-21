// Clase Estudiante
class Estudiante {
  constructor(nombre, apellido, edad, carrera, estado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.carrera = carrera;
    this.estado = estado; // 'Activo' o 'Inactivo'
  }

  // Método
  imprimir() {
    return `${this.nombre} ${this.apellido}, su carrera es ${this.carrera}. Tiene ${this.edad} años y su estado es ${this.estado}.`;
  }
}

// Crear un objeto de tipo Estudiante
const estudiante1 = new Estudiante("Ana", "Martinez", 20, "Ingeniería", "Activo");

// Mostrar en consola
console.log(estudiante1.imprimir());

// Mostrar en el DOM
document.addEventListener("DOMContentLoaded", () => {
  const resultado = document.createElement("p");
  resultado.textContent = estudiante1.imprimir();
  document.body.appendChild(resultado);
});
