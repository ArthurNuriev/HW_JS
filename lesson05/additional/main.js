// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
min = (a, b, c) => {
    let result = 0;
    if (a < b && a < c) {
        result = a;
    } else if (b < a && b < c) {
        result = b;
    } else if (c < b && c < a) {
        result = c;
    }
    return result;
}
console.log(min(88, -5, 755));
console.log('******************************')

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
max = (a, b, c) => {
    let result = 0;
    if (a > b && a > c) {
        result = a;
    } else if (b > a && b > c) {
        result = b;
    } else if (c > b && c > a) {
        result = c;
    }
    return result;
}
console.log(max(-322, 0, 755));
console.log('******************************')

// створити функцію яка повертає найбільше число з масиву
let arr = [-33, 355, -6767, 0, -77, -44.4, -654, -777];
maxNumOfArray = arr => {
    let result = arr[0];
    for (const item of arr) {
        if (item > result) {
            result = item;
        }
    }
    return result;
}
console.log(maxNumOfArray(arr));
console.log('******************************')

// створити функцію яка повертає найменьше число з масиву
let arr2 = [33, 355, 0, 888, -222, 44.4, 654, 777];
minNumOfArray = arr => {
    let result = arr[0];
    for (const item of arr) {
        if (item < result) {
            result = item;
        }
    }
    return result;
}
console.log(minNumOfArray(arr2));
console.log('******************************')

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr3 = [1, 4, 3, 23, 545, -100, 444, -35];
sumNumOfArray = arr => {
    let result = 0;
    for (const item of arr) {
        result = result + item;
    }
    return result;
}
console.log(sumNumOfArray(arr3));
console.log('******************************')

// Дано натуральное число n. Выведите все числа от 1 до n.
foo = n => {
    let result = [];
    for (let i = 0; i < n; i++) {
        result[result.length] = n - i;
    }
    return result.reverse();
}
console.log(foo(8));


















