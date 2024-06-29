/* eslint-disable no-console */
// Task 1
/* -принимает строку, которую нужно проверить, и максимальную длину и возвращает
      true, если строка меньше или равна указанной длине,
   -принимает строку, которую нужно проверить, и максимальную длину и возвращает
      false, если строка длиннее.
  */
// !!! Не оптимизированная функция. Работает:
const checkStringLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
