/* objeto: Persona */
const Persona = {
    //Atributos
    Nombre:"Adriana",
    Apellido:"Martinez",
    Edad:18,
    Genero: 'F', // 'F' para femenino, 'M' para masculino, otros para neutro

    /*Metodos*/
    imprimir: function() {
        // seleccionar pronombre según el atributo Genero
        let pronombre;
        if (this.Genero === 'M') pronombre = 'Él';
        else if (this.Genero === 'F') pronombre = 'Ella';
        else pronombre = 'Persona';

        console.log(`${pronombre} es ${this.Nombre} ${this.Apellido}, tiene ${this.Edad} años`);
    }

};

// Llamada de prueba
Persona.imprimir();