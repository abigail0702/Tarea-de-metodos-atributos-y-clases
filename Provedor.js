/* objeto: Proveedor */
const Proveedor = {
    //Atributos
    Nombre: "Carlos",
    Apellido: "Gomez", 
    correo_electronico: "correodeprueba@ejemplo.com",
    /*Metodos*/
    imprimir: function() {
        console.log(`${this.Nombre} ${this.Apellido}, su correo es ${this.correo_electronico}.`);
    }
};
// Llamada de prueba 
Proveedor.imprimir();