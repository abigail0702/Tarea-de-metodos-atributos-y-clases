/* objeto: Avión */
const Avion = {
    //Atributos
    Marca: "Boeing",
    tipo: "747",
    color: "Blanco y azul",
    /*Metodos*/
    imprimir : function() {
        console.log(`El avión es un ${this.Marca} tipo ${this.tipo} de color ${this.color}`);
    }

};

/*llamada de prueba*/
Avion.imprimir();  