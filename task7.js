function Auto(marca, modelo, año, color, puertas, kilometraje, motor) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.puertas = puertas;
    this.kilometraje = kilometraje;
    this.motor = motor;
}

const miAuto = new Auto(
    "Toyota",
    "Corolla",
    2022,
    "Rojo",
    4,
    35000,
    "Combustión"
);

console.log(miAuto);
