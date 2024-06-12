 // Aquí tu código

 const button = document.getElementById("agregar");


 button.addEventListener("click", function(){
    const lista = document.getElementById("lista")
    const element = prompt("Añade un elemento a la lista");
    lista.innerHTML += "<li>" + element + "</li>";
 })

 function añadirElementoArray(){
    
 }