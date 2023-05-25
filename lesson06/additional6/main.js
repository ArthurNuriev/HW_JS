// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//
//
//
//     return result;
// }
// document.writeln(`<p>${cutString('наслаждение',3)}</p>`);
// console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str = 'Каждый охотник желает знать';
let delete_characters = (str, length) => {
    let arr = str.split(' ');
    let result =[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === length){
            result.push(arr[i]);
        }
    }
    return result.toString();
}
console.log(delete_characters(str, 5));
console.log('*****************************************');

// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str1 = "  HTML JavaScript PHP   ";

insert_dash = str => str.trim().replaceAll(' ', '-').toUpperCase();
console.log(insert_dash(str1));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomArr = () => {
    let result =[];
    for (let i = 0; i < 100; i++) {
        result.push(Math.round(Math.random() * 100));
    }
    return result;
}
console.log(randomArr());
console.log('*****************************************');
console.log(randomArr().sort((a, b) => a - b));
console.log('*****************************************');

// створити (або згенерувати, за допомоги попередньої функції)
// масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter,
// залишивши тільки парні числа (без 0!)
console.log(randomArr().filter(value => value % 2 === 0));
















