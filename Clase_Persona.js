// Clase Persona
class Persona {
  constructor(nombre, apellido, edad, genero) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero; // 'F' para femenino, 'M' para masculino, otros para neutro
  }

  // Método
  imprimir() {
    let pronombre;
    if (this.genero === 'M') pronombre = 'Él';
    else if (this.genero === 'F') pronombre = 'Ella';
    else pronombre = 'La persona';

    return `${pronombre} es ${this.nombre} ${this.apellido}, tiene ${this.edad} años.`;
  }
}

// Crear un objeto de tipo Persona
const persona1 = new Persona("Adriana", "Martinez", 18, "F");

// Mostrar en consola
console.log(persona1.imprimir());

// Mostrar en el DOM
document.addEventListener("DOMContentLoaded", () => {
  const resultado = document.createElement("p");
  resultado.textContent = persona1.imprimir();
  document.body.appendChild(resultado);
});
