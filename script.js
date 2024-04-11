function pedirNome(x) {
    // Usando o prompt para pedir o nome
    var nome = prompt("Digite seu nome:");
  
    // Exibindo o nome em um alert
    alert("Olá, " + nome + "!");
    
    var div = document.createElement("div");
    div.className = "nome";
    div.textContent = nome;
    
    
  if (x == true) {
    document.getElementById('sobre-colA').appendChild(div);
  }
  else {
    document.getElementById('sobre-colP').appendChild(div);
  }
  
  }

function mostrar(x) {
  var elementA = document.getElementById('sobresA');
  var elementP = document.getElementById('sobresP');
  if(x == true) {
    elementA.style.display = "flex";
    elementP.style.display = "none";
  }
  else{elementP.style.display = "flex"
  elementA.style.display = "none";};
    
} 

