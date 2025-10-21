// objeto: Estudiante//
const Estudiante = {
    //Atributos
    Nombre: "Ana",
    Apellido: "Martinez",
    Edad: 20,
    carrera: "Ingeniería",
    Estado: "Activo", // 'Activo' o 'Inactivo'
    /*Metodos*/
    imprimir: function() {
        console.log(`${this.Nombre} ${this.Apellido}, su carrera es ${this.carrera}. Tiene ${this.Edad} años y su estado es ${this.Estado}`);
    }
};

// Llamada de prueba
Estudiante.imprimir();