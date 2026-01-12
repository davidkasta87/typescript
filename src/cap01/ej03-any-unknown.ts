let apellido1:any; //no es recomendable usar any
apellido1="Castaneda";
console.log("Apellido=",apellido1.toUpperCase());
console.log("longitud apellido=",apellido1.length);

let apellido2:unknown;
apellido2="Castaneda";
if (typeof apellido2 === "string"){
    console.log("Apellido=",apellido2.toUpperCase());
    console.log("longitud apellido=",apellido2.length);
}
else{
    console.log("apellido2 no es una cadena de texto");
}