//valorarPositivos(dia,mes,anio) valorar si los parametros son numeros y mayores a 0
function valoresPositivos(dia,mes,anio) {
    var salida= false;
    if (Number.isInteger(dia) && Number.isInteger(mes) && Number.isInteger(anio) &&
        dia > 0 && mes > 0 && mes <= 12 && anio > 0) {
        salida= true;
    }
    return salida;
}
// esBisiesto(anio) verifica si el anio es bisiesto o no
function esBisiesto(anio) {
    var salida = false;
    if((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)){
        salida = true;
    }
    return salida;
}
//fechaValida(dia, mes, anio) verifica si la fecha es valida usando las funciones valoresPositivos(dia,mes,anio) y esBisiesto(anio)
function fechaValida(){
    var dia = Number(document.getElementById("dia").value);
    var mes = Number(document.getElementById("mes").value);
    var anio = Number(document.getElementById("anio").value);
    var salida = false;
    if(valoresPositivos(dia,mes,anio)){
        if(mes>0 && mes<=12){
            if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
                if(dia>0 && dia<=31){
                    salida = true;
                }
            }else if(mes==4 || mes==6 || mes==9 || mes==11){
                if(dia > 0 && dia <= 30){
                    salida = true;
                }
            }else{
                if(esBisiesto(anio)){
                    if(dia > 0 && dia <= 29){
                        salida = true;
                    }
                } else {
                    if(dia > 0 && dia <= 28){
                        salida = true;
                    }
                }
            }
        }
    }
    aplicarEstilo(salida,"dia");
    aplicarEstilo(salida,"mes");
    aplicarEstilo(salida,"anio");
    return salida;
} 
//validarTexto(id) comprobar si los input Text de nombre y apellido son solo texto 
function validarTexto(id){
    var valor = document.getElementById(id).value;
    var salida = false;
    if( valor != "" && !(/^\s+$/.test(valor)) && isNaN(valor)) {
        salida = true;
    }
    aplicarEstilo(salida,id);
    return salida;
}
//validarMail() comprobar si el input text es un email
function validarEmail(){
    var valor = document.getElementById("email").value;
    var salida = true;
    if(!(/\S+@\S+\.\S+/.test(valor))) {
        salida = false;
    }
    aplicarEstilo(salida,"email");
    return salida;
}
//validarOpciones() verifica que la opcion elegida sea correcta 
function validarOpciones(){
    var indice = document.getElementById("obras_sociales").selectedIndex;
    var salida = true;
    if( indice == null || indice == 0 ) {
        salida = false;
    }
    aplicarEstilo(salida,"obras_sociales");
    return salida;
}
//aplicara el estilo depenpiendo si el valor es true o false y lo aplicara al elemento que se le pida
function aplicarEstilo(valor,id){
    var elemento = document.getElementById(id);
    if (valor) {
        elemento.style.borderColor = "green";
        elemento.style.borderWidth = "3px";
        elemento.style.background = "#90ee90";
    }else{
        elemento.style.borderColor = "red";
        elemento.style.borderWidth = "3px";
        elemento.style.background = "#ffcccc";
    }
}
//validarCampos() si todos los campos son correctos, devolvera un true si es correcto 
function valirdarCampos(){
    var salida = false;
    var nombreValido = validarTexto("nombre");
    var apellidoValido = validarTexto("apellido");
    var mail = validarEmail();
    var opciones = validarOpciones();
    var fecha = fechaValida()
    if(nombreValido && apellidoValido && mail && opciones && fecha){
        salida = true;
    }
    return salida;
}
//ve cada campo si alguno esta vacio el borde es de color rojo
function camposVacios(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var mail = document.getElementById("email");
    var selec = document.getElementById("obras_sociales");
    var dia = document.getElementById("dia");
    var mes = document.getElementById("mes");
    var anio = document.getElementById("anio");
    if (!nombre.value.trim()) {
        nombre.style.borderColor = "red";
        nombre.placeholder = "No se ingreso un valor";
    }
    if(!apellido.value.trim()){
        apellido.style.borderColor = "red";
        apellido.placeholder = "No se ingreso un valor";
    }
    if(!mail.value.trim()) {
        mail.style.borderColor = "red";
        mail.placeholder = "No se ingreso un valor";
    }
    if(!selec.value.trim()) {
        selec.style.borderColor = "red";
    }
    if(!dia.value.trim()) {
        dia.style.borderColor = "red";
    }
    if(!mes.value.trim()) {
        mes.style.borderColor = "red";
    }
    if(!anio.value.trim()) {
        anio.style.borderColor = "red";
    }
}
//validar() comprueba todo el formulario si esta bien saldra la alerta
function validar() {
    camposVacios()
    if (valirdarCampos()) {
        alert("Funciona");
    }
}


