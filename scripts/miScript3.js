//Closure (cierre)

//Es una función que se retorna sin ejecutar, interna,
//desde otra función a la cual se llama (externa).
//La función interna tiene acceso a al menos una variable
//del scope de la función externa, y esa es la que se
//guarda como contexto de creación de la variable


//Modo1
function pepe1 (){
    var i = 0;
    var incrementar = function(){
        return i++;
    }
    return incrementar;
}

//Modo2
function pepe2(){
    var i = 10;
    return function(){
        return i++;
    }
}



var unaJuana = pepe1();
console.log("i = " + unaJuana());
console.log("i = " + unaJuana());
console.log("i = " + unaJuana());
console.log("i = " + unaJuana());
console.log("i = " + unaJuana());

//console.log("i+ " + i); //no anda porque "i" esta dentro
                        //del scope de pepe1


var otraJuana = pepe2();
console.log("i = " + otraJuana());
console.log("i = " + otraJuana());
console.log("i = " + otraJuana());
console.log("i = " + otraJuana());
console.log("i = " + otraJuana());

console.log("i = " + unaJuana());













/*
function operacion(){
    var miVariable = 0;
    var incrementar = function(){
        return miVariable += 3;
    }
    return incrementar;
}


//var miVariable = 1;


var ejecutar = operacion();


document.write(ejecutar() + "</br>");
//document.write(miVariable + "</br>");
document.write(ejecutar() + "</br>");
document.write(ejecutar() + "</br>");
document.write(ejecutar() + "</br>");
*/


// for(var i = 0 ; i < 5 ; i++){
//     document.write("Ejecución # " + i + ": " + ejecutar() + "<br>" );
// }