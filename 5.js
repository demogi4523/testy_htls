// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах 
// в каждом из массивов (= в двух и более, причем в каждом). 
// На вход подаются два массива. На выходе массив с необходимыми совпадениями.
// Пример:
// [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// На выходе [1, 17]

export default function getDouble(arr, otherArr, copy = true) {
  /**
  * @param {Array[int]}      arr        массив с числами
  * @param {Array[int]}      otherArr   другой массив с числами
  * @param {Boolean}         copy       нужно ли защитить входные массивы от изменений
  * - скопировать?
  * @return {Array[int]}                возвращает массив, 
  * в котором каждое число встречается минимум 2 раза в каждом исходном массиве
  */

  if (arr.length > otherArr.length) {
    return getDouble(otherArr, arr, copy);
  }

  if (arr.length < 2 || otherArr.length < 2) {
    return [];
  }

  if (copy) {
    const identity = (x) => x;
    arr = arr.map(identity);
    otherArr = otherArr.map(identity);
  }

  const onceNumberFromArr = new Set();
  const candidates = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    const el = arr[i];
    if (onceNumberFromArr.has(el)) {
      candidates.add(el); // не удаляем элемент из onceNumberFromArr,
      // чтобы не менять структуры множества - критично на больших объемах данных
    } else {
      onceNumberFromArr.add(el);
    }
  }

  const onceNumberFromOtherArr = new Set();
  const res = new Set();

  for (let i = 0; i < otherArr.length; i++) {
    const el = otherArr[i];
    if (candidates.has(el)) {
      if (onceNumberFromOtherArr.has(el)) {
        res.add(el)
      } else {
        onceNumberFromOtherArr.add(el);
      }
    }
  }

  return Array.from(res);
}