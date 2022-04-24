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

// perimetro y cuadrado del cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

// perimetro y area del triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputTrianguloLado1")
    const lado2 = document.getElementById("inputTrianguloLado2")
    const base = document.getElementById("inputTrianguloBase")
    const value1 = parseInt(lado1.value) 
    const value2 = parseInt(lado2.value)
    const value3 = parseInt(base.value)
    const perimetro = perimetroTriangulo(value1, value2, value3)
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputTrianguloBase")
    const altura = document.getElementById("inputTrianguloAltura")
    const value1 = base.value
    const value2 = altura.value
    const area = areaTriangulo(value1, value2)
    alert(area)
}

// perimetro y area del circulo
function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculoRadio")
    const value = radio.value
    const area = perimetroCirculo(value)
    alert(area)
}
function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculoRadio")
    const value = radio.value
    const area = areaCirculo(value)
    alert(area)
}