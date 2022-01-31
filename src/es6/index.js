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

// MULTILÍNEA
// Antes
let lorem = "I'd like you to meet my good friend George McFly. \n"
+ "The storm. Bear with me, Marty, all of your questions will be answered. \n" 
+ "Roll tape, we'll proceed. What? Great good, good, Lorraine, I had a feeling about you two.";

// es6
let lorem2 = `I'd like you to meet my good friend George McFly. 
The storm. Bear with me, Marty, all of your questions will be answered. 
Roll tape, we'll proceed. What? Great good, good, Lorraine, I had a feeling about you two.`;

console.log(lorem);
console.log(lorem2);

// DESTRUCTURACIÓN DE ELEMENTOS
// Antes
let person = {
    'name': "hector",
    'age': 36,
    'country': "MX"
};
console.log(person.name, person.age);

// es6
let { name, age, country } = person;
console.log(name, age, country);

// OPERADOR SPREAD
// Antes
let team1 = ['Hector', 'Julia', 'Ricardo'];
let team2 = ['Valeria', 'Camila', 'Juan'];

let education = ['David', ...team1, ...team2];
console.log(education);

// PROPIEDADES DE OBJETOS
let name = 'Hector';
let age = '37';

// Antes
obj = { name: name, age: age }; 

// es6
obj2 = { name, age };
console.log(obj2);
