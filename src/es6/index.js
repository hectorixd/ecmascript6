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

newFunction2(); 
newFunction2('Ricardo', '23', 'CO'); 

// TEMPLATE LITERALS
// Anteriormente
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);