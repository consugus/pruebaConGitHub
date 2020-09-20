//Funciones anónimas autoinvocadas

;

alert("Hola que tal?"); 
alert("que hacé, cómo andá");

// function(){
//     console.log("")
// }

//Classical
(function(){
    console.log("classical");
})();

//Crockford
((function(){
    console.log("crockford");
})());
//Unaria
+function(){
    console.log("unaria");
}();

//Facebook
!function(){
    console.log("facebook");
}();

//Crazy
!1%-+~function(){
    console.log("crazy");
}();