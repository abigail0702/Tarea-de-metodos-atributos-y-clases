// Clase Cliente
class Cliente {
  constructor(nombre, apellido, edad, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
  }

  // Método
  imprimir() {
    return `${this.nombre} ${this.apellido}, su número es ${this.telefono}. Tiene ${this.edad} años.`;
  }
}

// Crear un objeto de tipo Cliente
const cliente1 = new Cliente("Matthew", "Rodriguez", 30, "555-1234");

// Mostrar en consola
console.log(cliente1.imprimir());

// Mostrar en el DOM
document.addEventListener("DOMContentLoaded", () => {
  const resultado = document.createElement("p");
  resultado.textContent = cliente1.imprimir();
  document.body.appendChild(resultado);
});
