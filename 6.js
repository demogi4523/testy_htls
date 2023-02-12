// Написать метод, который в консоль выводит таблицу умножения.
// На вход метод получает число, до которого выводит таблицу умножения. 
// В консоли должна появиться таблица.Например, если на вход пришло число 5, то получим:
// 
//   1  2  3  4  5
// 1 1  2  3  4  5
// 2 2  4  6  8 10
// 3 3  6  9 12 15
// 4 4  8 12 16 20
// 5 5 10 15 20 25
// 
// Важно:
// -	В последней строке между числами ровно по одному пробелу должно выводиться. 
// - В каждом столбце числа должны быть выровнены по правому краю.

export default function mult(n = 5) {
  const mult_table = [];
  let cur = '';
  for (let i = 1; i <= n + 1; i += 1) {
    mult_table.push(String(cur));

    if (cur == '') {
      for (let j = 1; j <= n; j += 1) {
        mult_table.push(String(j));
      }
      cur = 1;
      continue;
    }

    for (let j = 1; j <= n; j += 1) {
      mult_table.push(String((i - 1) * j));
    }

    cur = i;
  }
  print_table(mult_table, n);
}

function copy_arr(arr) {
  const identity = (x) => x;
  const newArr = arr.map(identity)
  return newArr;
}

function getMaxLength(arrOfStr) {
  const lens = arrOfStr.map((item) => item.length);
  return Math.max.apply(null, lens);
}

function padding(str, len) {
  const pads = ' ';
  const res = [];
  const rem = len - str.length;
  for (let i = 0; i < rem; i += 1) {
    res.push(pads);
  }
  res.push(str);
  return res.join('');
}

function print_table(mult_table, size) {
  const rows = [];
  for (let i = 0; i < size + 1; i += 1) {
    rows.push([]);
  }
  for (let i = 0; i < mult_table.length; i += 1) {
    const cur_ind = i % (size + 1);
    rows[cur_ind].push(mult_table[i]);
  }

  for (let i = 0; i < rows.length; i += 1) {
    const cur_row = rows[i];
    const cmr = getMaxLength(cur_row);
    for (let j = 0; j < cur_row.length; j += 1) {
      cur_row[j] = padding(cur_row[j], cmr);
    }
  }

  const res = [];
  for (let i = 0; i < size + 1; i += 1) {
    const cur_line = [];
    for (let j = 0; j < size + 1; j += 1) {
      cur_line.push(rows[j][i])
    }
    res.push(cur_line.join(' '));
  }

  console.log(res.join("\n"));
}
