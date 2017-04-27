function ingreseTarea(){
    var input = document.getElementById("tarea");

   var contenedor = document.getElementsByClassName("i-list");

   contenedor[0].innerHTML += "<li>"+ input.value + "<br>";

   input.value = " ";

}