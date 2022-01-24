// PARÁMETROS POR DEFECTO
// Anteriormente:
function newFunction(name, age, country) {
    var name = name || "hector";
    var age = age || 36;
    var country = country || "MX";
    console.log(name, age, country);
};

// es6
function newFunction2(name = "hector", age = 36, country = "MX") {
    console.log(name, age, country);
};

// Llamado a la función
newFunction2(); //si no hay argumentos se imprimen los valores por defecto
newFunction2('Ricardo', '23', 'CO'); //se modifican los parámetros por defecto