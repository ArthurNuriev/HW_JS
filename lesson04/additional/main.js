// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a, b, c) {
    if (a < b && a < c){
        console.log(a);
    }else if(b < a && b < c){
        console.log(b);
    }else {
        console.log(c);
    }
}
min(33,565, 111)
console.log('*****************************');

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(a, b, c) {
    if (a > b && a > c){
        console.log(a);
    }else if(b > a && b > c){
        console.log(b);
    }else {
        console.log(c);
    }
}
max(433, 2222, 33);
console.log('*****************************');

// створити функцію яка повертає найбільше число з масиву
function maxNumOfArray(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > num) num = arr[i];
    }
    return num;
}
let arrElement = [23, 545, 545, 656, 767,33, 4000, 6, 300];
console.log(maxNumOfArray(arrElement));
console.log('*****************************');

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function midNumOfArray(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = num + arr[i];
    }
    return num / 2;
}
let arrElement2 = [23, 545, 545, 656, 767,33, 4000, 6, 300];
console.log(midNumOfArray(arrElement2));
console.log('*****************************');

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

function f(...num) {
    let min = num[0];
    let max = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] < min) min = num[i];
        if(num[i] > max){
            max = num[i];
        }
    }
    console.log(max);
    return min;
}
console.log(f(22, 4, 0, -1, 300, 5, 7));
console.log('*****************************');

// створити функцію яка заповнює масив рандомними числами
function createRandomArray(arrayLength) {
    let arr= [];
    for (let i = 0; i < arrayLength; i++) {
       arr[arr.length] = Math.round( Math.random() * 100);
    }
    return arr;
}
console.log(createRandomArray(9));
console.log('*****************************');

// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrElement3 = [10, 22, 545, 767, 4000, 6, 300, 44];
function reversArray(arr) {
    let arrInner = [];
    for (let i = 0; i < arr.length; i++) {
          arrInner[i] = arr[(arr.length - i) - 1];
    }
    return arrInner;
}
console.log(reversArray(arrElement3));
console.log('*****************************');

// створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.
function f1() {
    if (arguments.length === 1){
        return arguments[0];
    }else {
        return arguments[0] + arguments[1];
    }

}
console.log(f1(33,22));
console.log('*****************************');

// створити функцію  яка приймає два масиви
// та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
let ar1 = [1,2,3,7,3];
let ar2 = [2,3,5,2,3,2,2];
function sumArrays(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length || i < arr2.length; i++) {
            if (arr1[i] === undefined){
                result[result.length] = arr2[i];
            } else if(arr2[i] === undefined){
                result[result.length] = arr1[i];
            }else {
                result[result.length] = arr1[i] + arr2[i];
            }
    }
    return result;
}
console.log(sumArrays(ar1, ar2));
console.log('*****************************');

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let arr3 = [{name: 'Dima', age: 13}, {model: 'Camry'},{model: 'BMW', V: '2,5'}]
function getArrayKeys(arr) {
    let result = [];
    for (const item of arr) {
        for (const itemKey in item) {
            result[result.length] = itemKey;
        }
    }
    return result;
}
console.log(getArrayKeys(arr3));
console.log('*****************************');

// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let arr4 = [{name: 'Dima', age: 13}, {model: 'Camry'},{model: 'BMW', V: '2,5'}]
function getArrayValue(arr) {
    let result = [];
    for (const item of arr) {
        for (const itemKey in item) {
            result[result.length] = item[itemKey];
        }
    }
    return result;
}
console.log(getArrayValue(arr4));






























