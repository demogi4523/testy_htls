// Написать метод/функцию, который/которая на вход принимает число (float), 
// а на выходе получает число, округленное до пятерок.
// Пример:
// 27 => 25, 27.8 => 30, 41.7 => 40.

export default function (float_num, default_up = true) {
  /**
  * @param {float}   float_num   Число с плавающей точкой
  * @param {boolean} default_up  При абсолютном равенстве округлять вверх
  * @return {int}                Возвращает округленное до 5 целое число
  */

  const int_num = Math.trunc(float_num);
  let min_val = int_num;
  let max_val = int_num;

  while (min_val % 5 != 0) {
    min_val -= 1;
  }

  while (max_val % 5 != 0) {
    max_val += 1;
  }

  res = (float_num - min_val) < (max_val - float_num) ? min_val : max_val;
  return res
}