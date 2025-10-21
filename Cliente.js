/* objeto: Cliente */
const Cliente = {
    //Atributos
    Nombre: "Matthew",
    Apellido: "Rodriguez",
    Edad: 30,
    telefono: "555-1234",
    /*Metodos*/
    imprimir: function() {
        console.log(`${this.Nombre} ${this.Apellido}, su número es ${this.telefono}. Tiene ${this.Edad} años`);
    }
};

// Llamada de prueba
Cliente.imprimir();