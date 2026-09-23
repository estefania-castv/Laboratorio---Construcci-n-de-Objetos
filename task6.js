function ListaCompras() {
    this.articulos = [];
    
    this.agregarArticulo = function(nombre, cantidad, precio) {
        this.articulos.push({
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        });
    };
}

const compras = new ListaCompras();

compras.agregarArticulo("Leche", 2, 4000);
compras.agregarArticulo("Huevos", 12, 700);
compras.agregarArticulo("Pan", 1, 5000);

console.log(compras.articulos);