//Questão 1
function soma(){        

    var x = Number(document.getElementById("n1").value) +  Number(document.getElementById("n2").value);
    document.getElementById("valor").innerHTML = "Resultado: A soma dos 2 valores é " + x +".";

}
function limpar1(){

    document.getElementById("n1").value = "";
    document.getElementById("n2").value= "";
       
 }
//Questão 2
 function salário(){

    var nomef = document.getElementById("nomefuncionario").value;
    var sal = Number(document.getElementById("valorhora").value)  *  Number(document.getElementById("horastrabalho").value);
    document.getElementById("salário").innerHTML = "Resultado: O funcionario " +  nomef  + " vai receber  R$" + " " + sal + ".";

}
 function limpar2(){

    document.getElementById("nomefuncionario").value = "";
    document.getElementById("valorhora").value= "";
    document.getElementById("horastrabalho").value= "";

 }
//Questão 3
function consumomédio(){

    var consumo = Number(document.getElementById("distancia").value)  /  Number(document.getElementById("combustivel").value); 
    document.getElementById("consumo").innerHTML = "Resultado: O automóvel fez o consumo médio de " + consumo.toFixed(3) +".";

}
function limpar3() {

    document.getElementById("distancia").value = "";
    document.getElementById("combustivel").value= "";

}

 