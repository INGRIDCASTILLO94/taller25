let peso = prompt("Ingresa Peso (kg): ");
let altura = prompt("Ingresa Altura (m): ");

function IMC (peso , altura){
    let resultado = peso / (altura^2);

    console.log("Indice De Masa Corporal Es: " + resultado);
    document.write("Indice De Masa Corporal Es: " + resultado);
    alert("Indice De Masa Corporal Es: " + resultado);
}

IMC(peso , altura)



