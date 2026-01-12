let frutas:string[] =["Manzana","Pera","Naranja"];

console.log(frutas[0]);//salida "Manzana" (el primer elemento del array frutas)
console.log(frutas[1]);//salida "Pera" (el segundo elemento del array frutas)
console.log(frutas[2]);//salida "Naranja" (el tercer elemento del array frutas)

let calificaciones:number[] =[10,8,9,7];
//let calificaciones:Array<number> =[10,8,9,7]; otra forma de definir un array de números

calificaciones.forEach(calificacion => {
    console.log(calificacion);
})
/*console.log(calificaciones[0]);//salida 10 (el primer elemento del array calificaciones)
console.log(calificaciones[1]);//salida 8 (el segundo elemento del array calificaciones)
console.log(calificaciones[2]);//salida 9 (el tercer elemento del array calificaciones)
console.log(calificaciones[3]);//salida 7 (el cuarto elemento del array calificaciones)*/
