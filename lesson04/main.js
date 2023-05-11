// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б?
function square(a, b) {
    return a * b;
}
console.log(square(3, 4));

// створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(radius) {
    let number = Math.PI * Math.pow(radius, 2);
    return `area of a circle = ${number}, radius = ${radius}`;
}
console.log(areaOfCircle(3));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S = 2 π R (R + h)
function cylinderArea(h, r) {
    return 2 * Math.PI * r * (r + h);
}
console.log(cylinderArea(3, 2));

// створити функцію яка приймає масив та виводить кожен його елемент
function arrBuilder(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
let arr = [11, 44, 456, true, 'jazz'];
arrBuilder(arr);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(str) {
    document.write(`<p>${str}</p>`);
}
createParagraph("some text");

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(str) {
    document.write(`<ul><li>${str}</li><li>${str}</li><li>${str}</li></ul>`);
}
createUl("some Li)");

// створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createElement(str, num) {
    document.write('<ul>')
    for (let i = 0; i < num; i++) {
        document.write(`<li>${str}</li>`);
    }
    document.write('</ul>')
}
createElement('vasya', 4);

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/** ? какой список) **/
function createList(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
let arr2 = ['go', 44, 99, 'fast', false];
createList(arr2);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr3 = [
    {id: 1, name: 'Vasya', age: 22},
    {id: 2, name: 'Anna', age: 33},
    {id: 3, name: 'Kolya', age: 13},
    {id: 4, name: 'Ivan', age: 18},
    {id: 5, name: 'Max', age: 16},
];
function getUsers(arr) {
    document.write('<ul>')
    for (const item of arr) {
        document.write(`<li>${item.id} - ${item.name} - ${item.age}</li>`);
    }
    document.write('</ul>')
}
getUsers(arr3);
console.log('****************************');
// створити функцію яка повертає найменьше число з масиву
let arr4 = [11, 55, 854, 3, 44, 99, 77];
    function getSmallestNumber(arr) {
        let minimum = arr[0];
        for (const item of arr) {
            if(item < minimum){
                minimum = item;
            }
        }
        return minimum;
    }
    console.log(getSmallestNumber(arr4));

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let arr5 = [11, 1, 4, 3, 2, 5];
function sum(arr) {
    let s = 0;
    for (const item of arr) {
        s = item + s;
    }
    return s;
}
console.log(sum(arr5));

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arr6 = [11, true, 4, 'go', 2, 5];
function swap(arr, index1, index2) {
        let save = 0;
        save = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = save;
    return arr;
}
console.log(swap(arr6, 1 , 5));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let arrayCurrency = [{currency:'USD',value:40},{currency:'EUR',value:42},{currency:'GBP',value:46.5} ];
function exchange(sumUAH,currencyValues,exchangeCurrency){

    for (let i = 0; i < currencyValues.length; i++) {

       if (exchangeCurrency === currencyValues[i].currency){
           return sumUAH / currencyValues[i].value;
       }
    }

}
console.log(exchange(10500, arrayCurrency, 'USD'));

