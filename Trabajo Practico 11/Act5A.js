var n1,n2;
n1 = prompt("valor x", 0);
n2 = prompt("valor x", 0);
function sumar(n1,n2){
    var suma,salida;
    suma=parseInt(n1)+parseInt(n2);
    salida=document.getElementById("salida");
    salida.value+=n1+'+'+n2+'='+suma+'\n';
}
function resta(n1,n2){
    var resta,salida;
    resta=parseInt(n1)-parseInt(n2);
    salida=document.getElementById("salida");
    salida.value+=n1+'-'+n2+'='+resta+'\n';
}
function division(n1,n2){
    var division,salida;
    division=parseInt(n1)-parseInt(n2);
    salida=document.getElementById("salida");
    salida.value+=n1+'-'+n2+'='+division+'\n';
}
function multiplicacion(n1,n2){
    var multiplicacion,salida;
    multiplicacion=parseInt(n1)*parseInt(n2);
    salida=document.getElementById("salida");
    salida.value+=n1+'x'+n2+'='+multiplicacion+'\n';
}
function potencia(n1,n2){
    var potencia,salida;
    potencia= Math.pow(n1, n2);
    salida=document.getElementById("salida");
    salida.value+=n1+'potencia '+n2+'='+potencia+'\n';
}
function cuadrado(n1){
    var cuadrado,salida;
    cuadrado=Math.sqrt(n1)
    salida=document.getElementById("salida");
    salida.value+=n1+'+'+n2+'='+cuadrado+'\n';
}