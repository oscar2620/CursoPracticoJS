// codigo cuadrado
console.group("Cuadrado")

function perimetroCuadrado(lado){
  return lado * 4;  
} 

function areaCuadrado(lado){
    return  lado ** 2;
}
console.groupEnd()

// codigo triangulo
console.group("triangulo")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2
} 

console.groupEnd()


// codigo circulo
console.group("Circulo")
const pi = Math.PI

function perimetroCirculo(radio){
    return (2 * pi) * radio;
}


function areaCirculo(radio){
    return pi * (radio ** 2);
}

console.groupEnd()

