// Clase Proveedor
class Proveedor {
  constructor(nombre, apellido, correo_electronico) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo_electronico = correo_electronico;
  }

  // Método
  imprimir() {
    return `${this.nombre} ${this.apellido}, su correo es ${this.correo_electronico}.`;
  }
}

// Crear un objeto de tipo Proveedor
const proveedor1 = new Proveedor("Carlos", "Gomez", "correodeprueba@ejemplo.com");

// Mostrar en consola
console.log(proveedor1.imprimir());

// Mostrar en el DOM
document.addEventListener("DOMContentLoaded", () => {
  const resultado = document.createElement("p");
  resultado.textContent = proveedor1.imprimir();
  document.body.appendChild(resultado);
});
