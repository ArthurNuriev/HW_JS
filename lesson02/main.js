// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [100, true, 'string', 4445, false, 'str2', 3.14, 355.55, 'vasya', 'petya'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Jane Eyre', pageCount: 50, genre: 'novel'};
let book2 = {title: 'Head First', pageCount: 600, genre: 'programming'};
let book3 = {title: 'Kobzar', pageCount: 350, genre: 'poetry'};

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {title: 'Jane Eyre', pageCount: 50, genre: 'novel',
    authors: ['Charlotte Bronte', 22]};
let book5 = {title: 'Head First', pageCount: 600, genre: 'programming',
    authors: ['Bert Bates', 35]};
let book6 = {title: 'Kobzar', pageCount: 350, genre: 'poetry',
    authors: ['Taras Shevchenko', 55]};

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let arrayUsers = [
    {name: 'Vasya', username: "vano", password: '12345'},
    {name: 'Petya', username: "pet", password: '100000'},
    {name: 'Vasya', username: "vas", password: 'vv444'},
    {name: 'Anna', username: "Ann", password: 'ann333'},
    {name: 'Max', username: "Mx", password: 'MxMx'},
    {name: 'Jana', username: "jan01", password: 'rrrr01'},
    {name: 'Vlad', username: "vl", password: 'vl4jf'},
    {name: 'Jan', username: "jn", password: 'fefedd'},
    {name: 'Bob', username: "bb", password: 'bobobo'},
    {name: 'Tven', username: "tv", password: 'ttttt'}
];
console.log(arrayUsers[0].password);
console.log(arrayUsers[1]['password']);
console.log(arrayUsers[2].password);
console.log(arrayUsers[3].password);
console.log(arrayUsers[4]['password']);
console.log(arrayUsers[5].password);
console.log(arrayUsers[6].password);
console.log(arrayUsers[7]['password']);
console.log(arrayUsers[8].password);
console.log(arrayUsers[9].password);

//     Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
    if(x!==0){
        console.log('Вірно');
    }else {
        console.log('Невірно');
    }

// Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 60;
    if(time < 15){
        console.log('перша четверть');
    }else if(time >= 15 && time <= 29){
        console.log('друга четверть');
    }else if(time >= 30 && time <= 44){
        console.log('третя четверть');
    }else if(time >= 45 && time <=59){
        console.log('четверта четверть');
    }else {
        console.log('введіть коректне значення');
    }

// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 32;
    if(day > 0 && day <= 10){
        console.log('перша декада');
    }else if(day > 10 && day <=20){
        console.log('друга декада');
    }else if(day > 20 && day <=31){
        console.log('третя декада');
    }else {
        console.log('введіть коректне значення');
    }

// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let planOfTheDay = 1;
    switch (planOfTheDay) {
        case 1:
            console.log("go to gym")
            break;
        case 2:
            console.log("go to work")
            break;
        case 3:
            console.log("go to swim")
            break;
        case 4:
            console.log("go to dance")
            break;
        case 5:
            console.log("go to work")
            break;
        case 6:
            console.log("meeting")
            break;
        case 7:
            console.log("go to gum")
            break;
        default:
            console.log('enter the correct value');

    }
//  Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
    let var1 = 32;
    let var2 = 4232.434;
    if(var1 > var2){
        console.log('var1 > var2:', `${var1}`);
    }else if (var2 > var1){
        console.log('var2 > var1:', `${var2}`);
    }else if(var1 === var2){
        console.log('var1 = var2:', `${var1} ${var2}`);
    }

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
/**??????????????????**/
let x1 = '';
    if(x1 == '' || x1 == undefined || x1 ==null){
        console.log('default');
    }else {
        console.log(x1);
    }
// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
    if(coursesAndDurationArray[0].monthDuration > 5){
        console.log("Супер");
    }
    if(coursesAndDurationArray[1].monthDuration > 5){
    console.log("Супер");
    }
    if(coursesAndDurationArray[2].monthDuration > 5){
        console.log("Супер");
    }
    if(coursesAndDurationArray[3].monthDuration > 5){
        console.log("Супер");
    }
    if(coursesAndDurationArray[4].monthDuration > 5){
        console.log("Супер");
    }
    if(coursesAndDurationArray[5].monthDuration > 5){
        console.log("Супер");
    }

















