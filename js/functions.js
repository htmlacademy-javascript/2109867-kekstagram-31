//Задание 1
// eslint-disable-next-line no-unused-vars
const checkStringLength = (string, lenght) => string.length <= lenght ;

// Строка короче 20 символов

checkStringLength('проверяемая строка', 20);
// Длина строки ровно 18 символов

checkStringLength('проверяемая строка', 18);
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10);

//Задание 2
// eslint-disable-next-line no-unused-vars
const chackPalindrome = (string) => {
  // eslint-disable-next-line no-unused-vars
  const compareString = string.toLowerCase().replaceAll(' ','');
  // eslint-disable-next-line no-unused-vars
  const reverseString = compareString.split('').reverse().join('');

  return compareString === reverseString;
// eslint-disable-next-line semi
}
// Строка является палиндромом

chackPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
chackPalindrome('ДовОд'); // true
// Это не палиндром
chackPalindrome('Кекс'); // false
// Это палиндром
chackPalindrome('Лёша на полке клопа нашёл '); // true
