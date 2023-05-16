// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sq = (a, b) => a * b;
console.log(sq(10, 12));
console.log('**********************************');

// створити функцію яка обчислює та повертає площу кола з радіусом r
let sqCircle = (r) => Math.PI * r * r;
console.log(sqCircle(9));
console.log('**********************************');

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S = 2 π R (R + h)
let sqCylinder = (h, r) => 2 * Math.PI * r * (r + h);
console.log(sqCylinder(2, 3));
console.log('**********************************');

// створити функцію яка приймає масив та виводить кожен його елемент
let arr = [11, 33, 44, 66, 'go', true];
let f = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}
f(arr);
console.log('**********************************');

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraphCreator = p => document.write(`<p> ${p} </p>`);
paragraphCreator('some text...');
console.log('**********************************');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
liCreator2 = text => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
liCreator2('hello...');
console.log('**********************************');

// створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
liCreator = (text, amountOfLi) => {
    document.write('<ul>')
    for (let i = 0; i < amountOfLi; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write('</ul>')
}
liCreator('text...', 5);
console.log('**********************************');

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr2 = [99, false, 322, 575, 'go', true];
listCreator = arr => {
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li> ${item} </li>`);
    }
    document.write('</ul>');
}
listCreator(arr2);
console.log('**********************************');

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arr3 = [{id: 1, name: 'Max', age: 22},
    {id: 2, name: 'Anna', age: 34},
    {id: 3, name: 'Tom', age: 12},
    {id: 4, name: 'Jonathan', age: 32},
    {id: 5, name: 'David', age: 15}];
userCreator = arr => {
    for (const arrElement of arr) {
        document.write('<p>');
        for (const arrElementKey in arrElement) {
            document.write(`${arrElementKey}: ${arrElement[arrElementKey]} <br>`);
        }
        document.write('</p>');
    }
}
userCreator(arr3);
console.log('**********************************');

// створити функцію яка повертає найменьше число з масиву
let arr4 = [-99, 11, 322, -575, 1, 0, -888];
minValueOfArray = arr => {
    let result = arr[0];
    for (const item of arr) {
        if (item < result) {
            result = item;
        }
    }
    return result;
}
console.log(minValueOfArray(arr4));
console.log('**********************************');

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let arr5 = [99, 11, -322, 575, 1, 0, 888];
sum = arr => {
    let result = 0;
    for (const item of arr) {
        result = item + result;
    }
    return result;
}
console.log(sum(arr5));
console.log('**********************************');

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arr6 = [99, 11, -322, 575, 1, 0, 888];
swap = (arr, index1, index2) => {
    let save = 0;
    save = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = save;
    return arr;
}
console.log(swap(arr6, 0, 1));
console.log('**********************************');

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let arrayCurrency = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'GBP', value: 46.5}];
exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency === currencyValues[i].currency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}
console.log(exchange(10500, arrayCurrency, 'EUR'));
