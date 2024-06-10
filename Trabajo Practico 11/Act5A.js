function sumar(){
    var n1,n2;
    n1 = prompt("valor 1", 0);
    n2 = prompt("valor 2", 0);
    var suma,salida;
    suma=parseInt(n1)+parseInt(n2);
    salida=document.getElementById("salida");
    salida.value+=n1+'+'+n2+'='+suma+'\n';
}
function resta(){
    var resta,salida;
    var n1,n2;
    n1 = prompt("valor 1", 0);
    n2 = prompt("valor 2", 0);
    resta=parseInt(n1)-parseInt(n2);
    salida=document.getElementById("salida");
    salida.value+=n1+'-'+n2+'='+resta+'\n';
}
function division(){
    var division,salida;
    var n1,n2;
    n1 = prompt("valor 1", 0);
    n2 = prompt("valor 2", 0);
    division=parseInt(n1)-parseInt(n2);
    salida=document.getElementById("salida");
    salida.value+=n1+'-'+n2+'='+division+'\n';
}
function multiplicacion(){
    var n1,n2;
    n1 = prompt("valor 1", 0);
    n2 = prompt("valor 2", 0);
    var multiplicacion,salida;
    multiplicacion=parseInt(n1)*parseInt(n2);
    salida=document.getElementById("salida");
    salida.value+=n1+'x'+n2+'='+multiplicacion+'\n';
}
function potencia(){
    var potencia,salida;
    var n1,n2;
    n1 = prompt("valor 1", 0);
    n2 = prompt("valor 2", 0);
    potencia= Math.pow(n1, n2);
    salida=document.getElementById("salida");
    salida.value+=n1+' potencia '+n2+' = '+potencia+'\n';
}
function cuadrado(){
    var cuadrado,salida;
    var n1;
    n1 = prompt("valor 1", 0);
    cuadrado=Math.sqrt(n1)
    salida=document.getElementById("salida");
    salida.value+=n1+'+'+n2+'='+cuadrado+'\n';
}