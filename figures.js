// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// const AREA = areaTriangulo(3,5);
// console.log("El área del triángulo es: " + areaTriangulo + " cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const value = document.getElementById("InputCuadrado").value;
  // const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
//calculo area de triangulo isosceles
function alturaIsosceles(){
  const valueA = parseInt(document.getElementById("ladoA").value);
  const valueB = parseInt(document.getElementById("ladoB").value);
  const valueBase = parseInt(document.getElementById("baseIso").value);

  const baseIso = valueBase/2;
  if (valueA != valueB) {
    alert('no es un triangulo isosceles')
  } else {
    const altura = Math.sqrt((baseIso**2) - (valueA**2))
    return altura
  }
}

function calcularAreaIsosceles() {
  const valueBase = parseInt(document.getElementById("baseIso").value);
  const altura = alturaIsosceles();
  const area = ((valueBase/2) * altura) ;
  alert('El area del triangulo isosceles es: ' + area);
}

function calcularPerimetroTriangulo(){
  const valueA = parseInt(document.getElementById("ladoA").value);
  const valueB = parseInt(document.getElementById("ladoB").value);
  const valueBase = parseInt(document.getElementById("baseIso").value);
  const perimetro = valueA + valueB + valueBase;
  alert('El perimetro es: ' + perimetro)
}

