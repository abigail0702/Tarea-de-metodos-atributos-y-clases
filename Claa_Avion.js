// Clase Avion
class Avion {
  constructor(marca, tipo, color) {
    this.marca = marca;
    this.tipo = tipo;
    this.color = color;
  }

  // Método
  imprimir() {
    return `El avión es un ${this.marca} tipo ${this.tipo} de color ${this.color}`;
  }
}

// Crear un objeto de tipo Avion
const avion1 = new Avion("Boeing", "747", "Blanco y azul");

// Mostrar en consola
console.log(avion1.imprimir());

// Mostrar en HTML con el DOM
document.addEventListener("DOMContentLoaded", () => {
  const resultado = document.createElement("p");
  resultado.textContent = avion1.imprimir();
  document.body.appendChild(resultado);
});
