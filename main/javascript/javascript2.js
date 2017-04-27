function ingreseTarea(){
    var input = document.getElementById("tarea");

   var contRut = document.getElementsByClassName("i-list");

   contRut[0].innerHTML += input.value +"<br>";

   input.value = "";
}