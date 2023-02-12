// Написать метод/функцию, который/которая на вход принимает число (float), 
// а на выходе получает число, округленное до пятерок.
// Пример:
// 27 => 25, 27.8 => 30, 41.7 => 40.

import trunc_by_five from "../tasks/2.js";

console.log("trunc_by_five(27): " + trunc_by_five(27));
console.log("trunc_by_five(27.8): " + trunc_by_five(27.8));
console.log("trunc_by_five(41.7): " + trunc_by_five(41.7));
console.log("trunc_by_five(27.5): " + trunc_by_five(27.5));
console.log("trunc_by_five(27.5, false): " + trunc_by_five(27.5, false));
console.log("trunc_by_five(33): " + trunc_by_five(33));
