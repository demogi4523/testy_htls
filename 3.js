// Написать метод/функцию, который/которая на вход принимает число (int), 
// а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. 
// Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

export default function (computer_amount) {
  if (computer_amount < 0) {
    throw new Error("Компьютеров не может быть меньше 0:)");
  }
  let res;
  const reminder = computer_amount % 10;
  switch (reminder) {
    case 1:
      {
        res = "1 компьютер";
        break;
      }
    case 2:
    case 3:
    case 4:
      {
        res = computer_amount + " компьютера";
        break;
      }
    default:
      {
        res = computer_amount + " компьютеров";
        break;
      }
  }

  return res;
}
