
console.log("======MENU======");
console.log("1- Dizer Olá");
console.log("2- Verificar pares");
console.log("3- Sair");

let opcao=parseInt(prompt("Escolha uma opção"));

switch(opcao){
    case 1:
        console.log("Olá mundo!");
        break;
    case 2:    
        let numero=parseInt(prompt("Digite um numero: "));

        if(numero%2==0){
            console.log("Numero par");
        }else{
            console.log("Numero impar");
        }
        break;
    case 3:
        console.log("Saindo...");
        break;
    default:
        console.log("Opção invalida");    
}
