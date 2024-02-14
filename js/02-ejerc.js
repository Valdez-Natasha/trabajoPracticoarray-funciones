const ciudades = [];
function agregarCiudad(){ 
    const ciudad = prompt("Ingrese el nombre de una ciudad:");
    if (ciudad !== null) {
        ciudades.push(ciudad);
        agregarCiudad();
    } else {
        mostrarArreglo();
        acciones();
    }
}

function mostrarArreglo() {
    console.log ("Arreglo de ciudades:", ciudades)
}
function acciones() { 
    console.log ("Longitud del arreglo:", ciudades.length)
    document.write("<p>Primera posicion: "+ ciudades[0]+"</p>")
    document.write("<p>Tercera posicion: "+ ciudades[2]+"</p>")
    document.write("<p>Ultima posicion: "+ ciudades[ciudades.length - 1]+"</p>")
    ciudades.push("paris")
    console.log("elemento en la segunda posicion:" , ciudades[1])
    ciudades[1] = "Barcelona"
    console.log("arreglo actualizado:" , ciudades)
}
agregarCiudad();