function parOuImpar(){
  var valor = document.getElementById("numero");
  if((valor.value % 2)==0){
    alert("Número "+valor.value+" é par!");
  } else {
    alert("Número "+valor.value+" é ímpar!");
  }
}
