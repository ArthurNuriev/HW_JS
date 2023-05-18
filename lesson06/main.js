// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
console.log('*************************************');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
console.log('*************************************');

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
console.log('*************************************');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';
console.log(dirtyStr.substring(1, 13));
console.log('*************************************');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
stringToArray = str => str.split(' ');
console.log(stringToArray(str));
console.log('*************************************');

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map = arr.map(value => '' + value);
console.log(map);
console.log('*************************************');

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let arr1 = [44, 1, 32, 15, 39, 0, -3, 77];
sortNums = (nums, direction) => {
    if (direction === 'direction') {
        return nums.sort((a, b) => a - b);
    }
    if (direction === 'ascending') {
        return nums.sort((a, b) => b - a);
    }
}
console.log(sortNums(arr1, 'direction'));
console.log(sortNums(arr1, 'ascending'));
console.log('*************************************');

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);
let map2 = coursesAndDurationArray.map((value, index) => {
    let course = {...value}
    course.id = index + 1;
    return course;
})
console.log(map2);
console.log('*************************************');

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
cards = [
    // cardSuit: '' // 'spade', 'diamond','heart', 'clubs'
    // value: '' // '6'-'10', 'ace','jack','queen','king','joker'
    // color:'' // 'red','black'
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    },
    /////
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    },
    ////
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    },
    ////
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    }
];

let spadeAce = cards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(spadeAce);

let allSix = cards.filter(value => value.value === '6');
console.log(allSix);

let allRed = cards.filter(value => value.color === 'red');
console.log(allRed);

let allDiamond = cards.filter(value => value.cardSuit === 'diamond');
console.log(allDiamond);

let allClubsFrom9 = cards.filter(value => value.cardSuit === 'clubs' && value.value > 9
    || value.cardSuit === 'clubs' && value.value === 'jack'
    || value.cardSuit === 'clubs' && value.value === 'queen'
    || value.cardSuit === 'clubs' && value.value === 'king'
    || value.cardSuit === 'clubs' && value.value === 'ace');
console.log(allClubsFrom9);
console.log('*************************************');

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card);
    }
    if (card.cardSuit === 'heart'){
        accumulator.hearts.push(card);
    }
    if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card);
    }
    return accumulator;

}, {spades:[], diamonds:[], hearts:[], clubs:[]} )

console.log(reduce);
console.log('*************************************');

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let filterSass = coursesArray.filter(value => value.modules.includes('sass'));
let filterDocker = coursesArray.filter(value => value.modules.includes('docker'));
console.log(filterSass);
console.log(filterDocker);
























