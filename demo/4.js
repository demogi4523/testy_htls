// Написать метод/функцию, который/которая на вход принимает целое число, 
// а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).

import isSimple from "../tasks/4.js";

console.log("Число 1 простое?: " + isSimple(1));
console.log("Число 2 простое?: " + isSimple(2));
console.log("Число 3 простое?: " + isSimple(3));
console.log("Число 7 простое?: " + isSimple(7));
console.log("Число 213 простое?: " + isSimple(213));
console.log("Число 49013 простое?: " + isSimple(49013));
console.log("Число 49019 простое?: " + isSimple(49019));
