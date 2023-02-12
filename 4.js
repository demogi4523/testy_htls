// Написать метод/функцию, который/которая на вход принимает целое число, 
// а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).

export default function (num) {
  /**
* @param {int}      num   Число с плавающей точкой
* @return {bool}          Возвращает true, усли num - простое, иначе false
*/
  let res = true;
  let cur = 2;
  while (cur * cur <= num) {
    if (num % cur == 0) {
      return false;
    }
    cur += 1;
  }
  return res;
}