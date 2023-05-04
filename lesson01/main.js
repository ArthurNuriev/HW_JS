// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let j = 3.14;
let i = 2.7;
let n = 16;
let m = true;
let s = false;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(j);
console.log(i);
console.log(n);
console.log(m);
console.log(s);


// Створити 3 змінних firstName, middleName,   lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Arthur';
let middleName = 'AN';
let lastName = 'Nuriev';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof a1);
console.log(typeof b1);
console.log(typeof c1);

/* - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
 По-Батькові та роками. та вивести в консоль*/
let name = prompt('first name:');
let lastN = prompt('last name:');
let age = +prompt('your age:');
console.log(name);
console.log(lastN);
console.log(age);

