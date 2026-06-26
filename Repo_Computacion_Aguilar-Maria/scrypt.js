// =======================
// FUNCIONES CALCULADORA
// =======================



function obtenerNumeros(){

let n1 =
Number(document.getElementById("numero1").value);


let n2 =
Number(document.getElementById("numero2").value);


return [n1,n2];

}



// SUMA

function sumar(){


let [a,b]=obtenerNumeros();


mostrarResultado(
a+b,
`${a} + ${b} = ${a+b}`
);


}



// RESTA

function restar(){


let [a,b]=obtenerNumeros();


mostrarResultado(
a-b,
`${a} - ${b} = ${a-b}`
);


}



// MULTIPLICACION

function multiplicar(){


let [a,b]=obtenerNumeros();


mostrarResultado(
a*b,
`${a} * ${b} = ${a*b}`
);


}



// DIVISION

function dividir(){


let [a,b]=obtenerNumeros();



if(b===0){


mostrarResultado(
"Error",
"No se puede dividir entre cero"
);



}else{


mostrarResultado(
a/b,
`${a} / ${b} = ${a/b}`
);


}


}



// RAIZ CUADRADA

function raizCuadrada(){


let [a]=obtenerNumeros();


let resultado=Math.sqrt(a);


mostrarResultado(

resultado,

`√${a} = ${resultado}`

);


}



// NUMERO AL CUADRADO

function cuadrado(){


let [a]=obtenerNumeros();


let resultado=a*a;


mostrarResultado(

resultado,

`${a}² = ${resultado}`

);


}



// PORCENTAJE

function porcentaje(){


let [a,b]=obtenerNumeros();


let resultado=(a*b)/100;


mostrarResultado(

resultado,

`${b}% de ${a} = ${resultado}`

);


}



// =======================
// LOCAL STORAGE
// =======================



function mostrarResultado(valor,operacion){


document.getElementById("resultado")
.innerHTML=valor;


guardarHistorial(operacion);


}




function guardarHistorial(texto){


let historial =

JSON.parse(

localStorage.getItem("historial")

) || [];



historial.unshift(texto);



if(historial.length > 10){


historial.pop();


}



localStorage.setItem(

"historial",

JSON.stringify(historial)

);



mostrarHistorial();


}




function mostrarHistorial(){


let lista =
document.getElementById("historial");


lista.innerHTML="";



let historial =

JSON.parse(

localStorage.getItem("historial")

) || [];



historial.forEach(item=>{


let li =
document.createElement("li");


li.textContent=item;


lista.appendChild(li);


});


}




function borrarHistorial(){


localStorage.removeItem("historial");


mostrarHistorial();


}





window.onload=function(){

mostrarHistorial();

}