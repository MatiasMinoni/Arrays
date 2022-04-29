
// class producto {
//     constructor(nombre, precio, stock, cantidad, vendido){
//         this.nombre = nombre;
//         this.precio = parseFloat(precio);
//         this.stock = true;
//         this.cantidad = parseFloat(cantidad);
//         this.vendido = false;
//     }
//      iva() {this.precio = this.precio * 1.21;
// }
// vender(){this.vendido= true;
// if (this.vendido == true){
//     this.cantidad = this.cantidad - 1;
// }
// }
// }

// const p1 = new producto( "Nike", 1000, true, 5, false);
// const p2 = new producto("Adidas", 900, true, 5, false);
// const p3 = new producto("Puma", 900, true, 5, false);
// const p4 = new producto("Rebook", 700, true, 5, false);
// const p5 = new producto("Fila", 800, true, 8, false);
// const p6 = new producto("Rift", 600, false , 9, false);
// const p7 = new producto("Pony", 600, false, 10, false);
// p1.iva();
// p2.iva();
// p3.iva();
// p4.iva();
// p5.iva();
// p6.iva();
// p7.iva();
// p7.vender();
// // Si se agrega un p(num).vender, se activa el metodo vender y se resta uno a la cantidad de productos.
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);
// console.log(p5);
// console.log(p6);
// console.log(p7);

// console.log("perdon por matar un gatito")


// ------------------------------------------------------------------
// Calcular horas
// var total=0;

// do{
//     var Semana= prompt("Cuantas horas trabajaste?");
// if (Number(Semana)== Semana){
//   total= total + Number(Semana);
// }

// else{
// if (Semana!=undefined){
//     alert(Semana + "No es un valor numerico");

// }
// }
// }
// while(Semana !=undefined);

// alert(`La suma es ${total}`);


// ------------------------------------------------------------------


let champ = [ "illaoi", "ezreal", "ahri"];
// // Cuantos campeones hay
// console.log(champ.length);

// // Agregar Zed al final
// champ.push({campeon: "zed"})
// // Agregar Soraka al inicio
// champ.unshift({campeon: "nunu"})
// // Eliminar el ultimo campeon
// champ.pop({campeon: "zed"});
// // Eliminar varios campeones
// champ.splice(0,2);
// // Agregar un caracter entre cada campeon
// console.log(champ.join("-"));




let stats = [
    {salud:100},
    {mana:50},
    {ataque:10},
    {defensa:10},
    {velocidad:10},
]

let ataques = [
    {skill0:"basico"},
    {skill1:"Q"},
    {skill2:"W"},
    {skill3:"E"},
    {skill4:"R"},
]
console.log(champ.indexOf("illaoi"));
const champprueba= champ.concat(stats)
const champ1= champ.slice(0, 1).concat(stats);

console.log(champ1)