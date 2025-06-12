function calcular() {
   
    //entrada
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;


    //processamento
    const resultado = (peso / (altura * altura) );


    //saida
    document.getElementById("resultado").textContent = "valor mmc é: " + resultado;


     if (resultado < 17 ){
        document.getElementById("parametro").textContent = "Voce esta magro, precisa ganhar peso";
        
     }if (resultado >18.5 && resultado < 25) {
        document.getElementById("parametro").textContent = "voce esta saudavel";
        
     }if (resultado > 25) {
        document.getElementById("parametro").textContent = "voce esta gordo, precisa emagrecer obeso";
        
     }



}

