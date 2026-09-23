function FriendsList(cantidad, nombres) {
    this.nombres = nombres;
}

const cantidad = Number(process.argv[2]);

const nombres = process.argv.slice(3, 3 + cantidad);

const lista = new FriendsList(cantidad, nombres);

console.log(lista.nombres);