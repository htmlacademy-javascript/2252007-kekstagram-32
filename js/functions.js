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


// !!! Оптимизированная функция. Не работает:
// let checkStringLength = (string, maxLength) => string.length <= maxLength;

// проверить строку длиной 27, макс длина 20  - false
checkStringLength('длинная строка для проверки', 20);

// проверить строку длиной 33, макс длина 20  - false
checkStringLength('очень длинная строка для проверки', 20);

// проверить строку длиной 19, макс длина 20  - true
checkStringLength('строка для проверки', 20);

// проверить строку длиной 20, макс длина 20  - true
checkStringLength('строка для проверки ', 20);

// проверить строку длиной 8, макс длина 20  - true
checkStringLength('проверка', 20);

// проверить строку длиной 16, макс длина 15  - false
checkStringLength('проверить строку', 15);

// Task 2
// !!! Не оптимизированная функция
// function isPalindrom(string) {
//   string = string.toLowerCase();
//   string = string.replaceAll(' ', '');

//   let reversed = '';

//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed = reversed + string[i];
//   }
//   console.log(string === reversed);
//   return string === reversed;
// }

// !!! Оптимизированная функция
const isPalindrom = (string) => {
  const cleaned = string.toLowerCase().replaceAll(' ', '');
  const reversed = cleaned.split('').reverse().join('');

  console.log(cleaned === reversed);
  return cleaned === reversed;
};

// 1. сделать все буквы прописными
// 2. убрать все пробелы
// 3. создать пустую строку и записать в переменную, в эту строку будет добавляться буква после каждого цикла
/* 4. Создать цикл for, переменная-счётчик которого отсчитывает порядковые номера (индексы) символов
в «нормализованной» строке с конца к началу, то есть:
  - изначально счётчик равен индексу последнего символа (он на 1 меньше длины строки),
  - цикл останавливается при достижении начала строки (нулевого индекса),
  - на каждой итерации счётчик уменьшается на 1.
*/

// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false
// Palindrom
isPalindrom('nurses run'); // true
// Palindrom
isPalindrom('Redivider'); // true
// Это не палиндром
isPalindrom('Academy'); // false
// Palindrom
isPalindrom('racecar'); // true
// Это палиндром
isPalindrom('Лёша на полке клопа нашёл '); // true
