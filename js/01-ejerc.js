const meses = ["enero", "febrero" , "marzo" , "abril" , "mayo" , "junio" , "julio" , "agosto" , "septiembre" , "octubre" , "noviembre" , "diciembre"]

document.write(`<h2> Lista de Meses </h2>`)
document.write(`<ul>`)
for(let posicion=0; posicion < meses.length; posicion++){
document.write(`<li>${meses[posicion]}</li>`)
}
document.write(`</ul>`)