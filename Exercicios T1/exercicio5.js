let peso= parseFloat(prompt("Digite seu peso: "));
let altura=parseFloat(prompt("Digite sua altura"));

let imc=peso/(altura*altura);
if(imc<18.5){
    console.log("Abaixo do peso");
}else if(imc<25){
    console.log("Peso normal");
}else if(imc<30){
    console.log("Sobrepeso");
}else{
    console.log("Obesidade");
}