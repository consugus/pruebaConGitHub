//Patrón Módulo

//El patrón módulo permite proteger las variables ubicándolas
//dentro del scope de una función. Las variables (locales)
//ahora solo pueden accederse mediante los métodos get y set.

//Todo lo que retorno es de acceso global. Lo que no retorno
//queda dentro del scope de la función


var saludo = "hola que tal";

function crearPersona(){
        var nombre = "Gustavo";
        var apellido = "Ríos";
        var edad = 20;
        
        
        var obj = {
        // nombre:"Gustavo",
        // "apellido":"Ríos",
        // edad:20,
        getNombre: function (){
            var pirulo = 1;
            return nombre;
        },
        getApellido: function (){
            return apellido;        
        },
        setApellido: function(name){
            apellido = name;
        }
        

    }
    return obj;
};

var persona = crearPersona();
var per1 = crearPersona;
var ejecucion = per1();









// var persona = {
//     nombre:"Gustavo",
//     "apellido":"Ríos",
//     edad:20,
//     getNombre: function (){
//         return this.nombre;
//     },
//     getApellido: function (){
//         return this.apellido;        
//     }

// }

//function hola (){};





/*
function crearPersona(){
        var nombre = "Gustavo";
        var apellido=  "Ríos";
        
        var obj = {
        // nombre: "Gustavo",
        // apellido: "Ríos",
        getNombre: function(){
            return nombre;
        },
        getApellido: function(){
            return apellido;
        },       
        setNombre: function(name){
            nombre = name;
        }
    }
    return obj;
};

var persona = crearPersona();

//console.log (saludo + ", soy " + persona.getNombre());
*/
