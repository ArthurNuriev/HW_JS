// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let num1 = document.body.getElementsByClassName('num')[0];
let newVar = JSON.parse(localStorage.getItem('countNum') || 0);
newVar = newVar + 1;
localStorage.setItem('countNum', newVar);
num1.innerHTML = newVar;

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let p1 = document.getElementById('p1');
p1.addEventListener('click', function (ev) {
    let arrSessions = JSON.parse(localStorage.getItem('sessions')) || [];
    let date = new Date().toLocaleString();
    arrSessions.push(date);
    localStorage.setItem('sessions', JSON.stringify(arrSessions));
});

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const users = [
    {
        id: 1,
        name: 'User 1',
        email: 'user1@example.com',
        age: 25,
        city: 'City 1',
        country: 'Country 1'
    },
    {
        id: 2,
        name: 'User 2',
        email: 'user2@example.com',
        age: 30,
        city: 'City 2',
        country: 'Country 2'
    },
    {
        id: 3,
        name: 'User 3',
        email: 'user3@example.com',
        age: 28,
        city: 'City 3',
        country: 'Country 3'
    },
    {
        id: 4,
        name: 'User 4',
        email: 'user4@example.com',
        age: 32,
        city: 'City 4',
        country: 'Country 4'
    },
    {
        id: 5,
        name: 'User 5',
        email: 'user5@example.com',
        age: 27,
        city: 'City 5',
        country: 'Country 5'
    },
    {
        id: 6,
        name: 'User 6',
        email: 'user6@example.com',
        age: 33,
        city: 'City 6',
        country: 'Country 6'
    },
    {
        id: 7,
        name: 'User 7',
        email: 'user7@example.com',
        age: 29,
        city: 'City 7',
        country: 'Country 7'
    },
    {
        id: 8,
        name: 'User 8',
        email: 'user8@example.com',
        age: 31,
        city: 'City 8',
        country: 'Country 8'
    },
    {
        id: 9,
        name: 'User 9',
        email: 'user9@example.com',
        age: 26,
        city: 'City 9',
        country: 'Country 9'
    },
    {
        id: 10,
        name: 'User 10',
        email: 'user10@example.com',
        age: 34,
        city: 'City 10',
        country: 'Country 10'
    },
    {
        id: 11,
        name: 'User 11',
        email: 'user11@example.com',
        age: 27,
        city: 'City 11',
        country: 'Country 11'
    },
    {
        id: 12,
        name: 'User 12',
        email: 'user12@example.com',
        age: 32,
        city: 'City 12',
        country: 'Country 12'
    },
    {
        id: 13,
        name: 'User 13',
        email: 'user13@example.com',
        age: 29,
        city: 'City 13',
        country: 'Country 13'
    },
    {
        id: 14,
        name: 'User 14',
        email: 'user14@example.com',
        age: 30,
        city: 'City 14',
        country: 'Country 14'
    },
    {
        id: 15,
        name: 'User 15',
        email: 'user15@example.com',
        age: 28,
        city: 'City 15',
        country: 'Country 15'
    },
    {
        id: 16,
        name: 'User 16',
        email: 'user16@example.com',
        age: 33,
        city: 'City 16',
        country: 'Country 16'
    },
    {
        id: 17,
        name: 'User 17',
        email: 'user17@example.com',
        age: 31,
        city: 'City 17',
        country: 'Country 17'
    },
    {
        id: 18,
        name: 'User 18',
        email: 'user18@example.com',
        age: 26,
        city: 'City 18',
        country: 'Country 18'
    },
    {
        id: 19,
        name: 'User 19',
        email: 'user19@example.com',
        age: 34,
        city: 'City 19',
        country: 'Country 19'
    },
    {
        id: 20,
        name: 'User 20',
        email: 'user20@example.com',
        age: 27,
        city: 'City 20',
        country: 'Country 20'
    },
    {
        id: 21,
        name: 'User 21',
        email: 'user21@example.com',
        age: 32,
        city: 'City 21',
        country: 'Country 21'
    },
    {
        id: 22,
        name: 'User 22',
        email: 'user22@example.com',
        age: 29,
        city: 'City 22',
        country: 'Country 22'
    },
    {
        id: 23,
        name: 'User 23',
        email: 'user23@example.com',
        age: 30,
        city: 'City 23',
        country: 'Country 23'
    },
    {
        id: 24,
        name: 'User 24',
        email: 'user24@example.com',
        age: 28,
        city: 'City 24',
        country: 'Country 24'
    },
    {
        id: 25,
        name: 'User 25',
        email: 'user25@example.com',
        age: 33,
        city: 'City 25',
        country: 'Country 25'
    },
    {
        id: 26,
        name: 'User 26',
        email: 'user26@example.com',
        age: 31,
        city: 'City 26',
        country: 'Country 26'
    },
    {
        id: 27,
        name: 'User 27',
        email: 'user27@example.com',
        age: 26,
        city: 'City 27',
        country: 'Country 27'
    },
    {
        id: 28,
        name: 'User 28',
        email: 'user28@example.com',
        age: 34,
        city: 'City 28',
        country: 'Country 28'
    },
    {
        id: 29,
        name: 'User 29',
        email: 'user29@example.com',
        age: 27,
        city: 'City 29',
        country: 'Country 29'
    },
    {
        id: 30,
        name: 'User 30',
        email: 'user30@example.com',
        age: 32,
        city: 'City 30',
        country: 'Country 30'
    },
    {
        id: 31,
        name: 'User 31',
        email: 'user31@example.com',
        age: 29,
        city: 'City 31',
        country: 'Country 31'
    },
    {
        id: 32,
        name: 'User 32',
        email: 'user32@example.com',
        age: 30,
        city: 'City 32',
        country: 'Country 32'
    },
    {
        id: 33,
        name: 'User 33',
        email: 'user33@example.com',
        age: 28,
        city: 'City 33',
        country: 'Country 33'
    },
    {
        id: 34,
        name: 'User 34',
        email: 'user34@example.com',
        age: 33,
        city: 'City 34',
        country: 'Country 34'
    },
    {
        id: 35,
        name: 'User 35',
        email: 'user35@example.com',
        age: 31,
        city: 'City 35',
        country: 'Country 35'
    },
    {
        id: 36,
        name: 'User 36',
        email: 'user36@example.com',
        age: 26,
        city: 'City 36',
        country: 'Country 36'
    },
    {
        id: 37,
        name: 'User 37',
        email: 'user37@example.com',
        age: 34,
        city: 'City 37',
        country: 'Country 37'
    },
    {
        id: 38,
        name: 'User 38',
        email: 'user38@example.com',
        age: 27,
        city: 'City 38',
        country: 'Country 38'
    },
    {
        id: 39,
        name: 'User 39',
        email: 'user39@example.com',
        age: 32,
        city: 'City 39',
        country: 'Country 39'
    },
    {
        id: 40,
        name: 'User 40',
        email: 'user40@example.com',
        age: 29,
        city: 'City 40',
        country: 'Country 40'
    },
    {
        id: 41,
        name: 'User 41',
        email: 'user41@example.com',
        age: 30,
        city: 'City 41',
        country: 'Country 41'
    },
    {
        id: 42,
        name: 'User 42',
        email: 'user42@example.com',
        age: 28,
        city: 'City 42',
        country: 'Country 42'
    },
    {
        id: 43,
        name: 'User 43',
        email: 'user43@example.com',
        age: 33,
        city: 'City 43',
        country: 'Country 43'
    },
    {
        id: 44,
        name: 'User 44',
        email: 'user44@example.com',
        age: 31,
        city: 'City 44',
        country: 'Country 44'
    },
    {
        id: 45,
        name: 'User 45',
        email: 'user45@example.com',
        age: 26,
        city: 'City 45',
        country: 'Country 45'
    },
    {
        id: 46,
        name: 'User 46',
        email: 'user46@example.com',
        age: 34,
        city: 'City 46',
        country: 'Country 46'
    },
    {
        id: 47,
        name: 'User 47',
        email: 'user47@example.com',
        age: 27,
        city: 'City 47',
        country: 'Country 47'
    },
    {
        id: 48,
        name: 'User 48',
        email: 'user48@example.com',
        age: 32,
        city: 'City 48',
        country: 'Country 48'
    },
    {
        id: 49,
        name: 'User 49',
        email: 'user49@example.com',
        age: 29,
        city: 'City 49',
        country: 'Country 49'
    },
    {
        id: 50,
        name: 'User 50',
        email: 'user50@example.com',
        age: 30,
        city: 'City 50',
        country: 'Country 50'
    },
    {
        id: 51,
        name: 'User 51',
        email: 'user51@example.com',
        age: 28,
        city: 'City 51',
        country: 'Country 51'
    },
    {
        id: 52,
        name: 'User 52',
        email: 'user52@example.com',
        age: 33,
        city: 'City 52',
        country: 'Country 52'
    },
    {
        id: 53,
        name: 'User 53',
        email: 'user53@example.com',
        age: 31,
        city: 'City 53',
        country: 'Country 53'
    },
    {
        id: 54,
        name: 'User 54',
        email: 'user54@example.com',
        age: 26,
        city: 'City 54',
        country: 'Country 54'
    },
    {
        id: 55,
        name: 'User 55',
        email: 'user55@example.com',
        age: 34,
        city: 'City 55',
        country: 'Country 55'
    },
    {
        id: 56,
        name: 'User 56',
        email: 'user56@example.com',
        age: 27,
        city: 'City 56',
        country: 'Country 56'
    },
    {
        id: 57,
        name: 'User 57',
        email: 'user57@example.com',
        age: 32,
        city: 'City 57',
        country: 'Country 57'
    },
    {
        id: 58,
        name: 'User 58',
        email: 'user58@example.com',
        age: 29,
        city: 'City 58',
        country: 'Country 58'
    },
    {
        id: 59,
        name: 'User 59',
        email: 'user59@example.com',
        age: 30,
        city: 'City 59',
        country: 'Country 59'
    },
    {
        id: 60,
        name: 'User 60',
        email: 'user60@example.com',
        age: 28,
        city: 'City 60',
        country: 'Country 60'
    },
    {
        id: 61,
        name: 'User 61',
        email: 'user61@example.com',
        age: 33,
        city: 'City 61',
        country: 'Country 61'
    },
    {
        id: 62,
        name: 'User 62',
        email: 'user62@example.com',
        age: 31,
        city: 'City 62',
        country: 'Country 62'
    },
    {
        id: 63,
        name: 'User 63',
        email: 'user63@example.com',
        age: 26,
        city: 'City 63',
        country: 'Country 63'
    },
    {
        id: 64,
        name: 'User 64',
        email: 'user64@example.com',
        age: 34,
        city: 'City 64',
        country: 'Country 64'
    },
    {
        id: 65,
        name: 'User 65',
        email: 'user65@example.com',
        age: 27,
        city: 'City 65',
        country: 'Country 65'
    },
    {
        id: 66,
        name: 'User 66',
        email: 'user66@example.com',
        age: 32,
        city: 'City 66',
        country: 'Country 66'
    },
    {
        id: 67,
        name: 'User 67',
        email: 'user67@example.com',
        age: 29,
        city: 'City 67',
        country: 'Country 67'
    },
    {
        id: 68,
        name: 'User 68',
        email: 'user68@example.com',
        age: 30,
        city: 'City 68',
        country: 'Country 68'
    },
    {
        id: 69,
        name: 'User 69',
        email: 'user69@example.com',
        age: 28,
        city: 'City 69',
        country: 'Country 69'
    },
    {
        id: 70,
        name: 'User 70',
        email: 'user70@example.com',
        age: 33,
        city: 'City 70',
        country: 'Country 70'
    },
    {
        id: 71,
        name: 'User 71',
        email: 'user71@example.com',
        age: 31,
        city: 'City 71',
        country: 'Country 71'
    },
    {
        id: 72,
        name: 'User 72',
        email: 'user72@example.com',
        age: 26,
        city: 'City 72',
        country: 'Country 72'
    },
    {
        id: 73,
        name: 'User 73',
        email: 'user73@example.com',
        age: 34,
        city: 'City 73',
        country: 'Country 73'
    },
    {
        id: 74,
        name: 'User 74',
        email: 'user74@example.com',
        age: 27,
        city: 'City 74',
        country: 'Country 74'
    },
    {
        id: 75,
        name: 'User 75',
        email: 'user75@example.com',
        age: 32,
        city: 'City 75',
        country: 'Country 75'
    },
    {
        id: 76,
        name: 'User 76',
        email: 'user76@example.com',
        age: 29,
        city: 'City 76',
        country: 'Country 76'
    },
    {
        id: 77,
        name: 'User 77',
        email: 'user77@example.com',
        age: 30,
        city: 'City 77',
        country: 'Country 77'
    },
    {
        id: 78,
        name: 'User 78',
        email: 'user78@example.com',
        age: 28,
        city: 'City 78',
        country: 'Country 78'
    },
    {
        id: 79,
        name: 'User 79',
        email: 'user79@example.com',
        age: 33,
        city: 'City 79',
        country: 'Country 79'
    },
    {
        id: 80,
        name: 'User 80',
        email: 'user80@example.com',
        age: 31,
        city: 'City 80',
        country: 'Country 80'
    },
    {
        id: 81,
        name: 'User 81',
        email: 'user81@example.com',
        age: 26,
        city: 'City 81',
        country: 'Country 81'
    },
    {
        id: 82,
        name: 'User 82',
        email: 'user82@example.com',
        age: 34,
        city: 'City 82',
        country: 'Country 82'
    },
    {
        id: 83,
        name: 'User 83',
        email: 'user83@example.com',
        age: 27,
        city: 'City 83',
        country: 'Country 83'
    },
    {
        id: 84,
        name: 'User 84',
        email: 'user84@example.com',
        age: 32,
        city: 'City 84',
        country: 'Country 84'
    },
    {
        id: 85,
        name: 'User 85',
        email: 'user85@example.com',
        age: 29,
        city: 'City 85',
        country: 'Country 85'
    },
    {
        id: 86,
        name: 'User 86',
        email: 'user86@example.com',
        age: 30,
        city: 'City 86',
        country: 'Country 86'
    },
    {
        id: 87,
        name: 'User 87',
        email: 'user87@example.com',
        age: 28,
        city: 'City 87',
        country: 'Country 87'
    },
    {
        id: 88,
        name: 'User 88',
        email: 'user88@example.com',
        age: 33,
        city: 'City 88',
        country: 'Country 88'
    },
    {
        id: 89,
        name: 'User 89',
        email: 'user89@example.com',
        age: 31,
        city: 'City 89',
        country: 'Country 89'
    },
    {
        id: 90,
        name: 'User 90',
        email: 'user90@example.com',
        age: 26,
        city: 'City 90',
        country: 'Country 90'
    },
    {
        id: 91,
        name: 'User 91',
        email: 'user91@example.com',
        age: 34,
        city: 'City 91',
        country: 'Country 91'
    },
    {
        id: 92,
        name: 'User 92',
        email: 'user92@example.com',
        age: 27,
        city: 'City 92',
        country: 'Country 92'
    },
    {
        id: 93,
        name: 'User 93',
        email: 'user93@example.com',
        age: 32,
        city: 'City 93',
        country: 'Country 93'
    },
    {
        id: 94,
        name: 'User 94',
        email: 'user94@example.com',
        age: 29,
        city: 'City 94',
        country: 'Country 94'
    },
    {
        id: 95,
        name: 'User 95',
        email: 'user95@example.com',
        age: 30,
        city: 'City 95',
        country: 'Country 95'
    },
    {
        id: 96,
        name: 'User 96',
        email: 'user96@example.com',
        age: 28,
        city: 'City 96',
        country: 'Country 96'
    },
    {
        id: 97,
        name: 'User 97',
        email: 'user97@example.com',
        age: 33,
        city: 'City 97',
        country: 'Country 97'
    },
    {
        id: 98,
        name: 'User 98',
        email: 'user98@example.com',
        age: 31,
        city: 'City 98',
        country: 'Country 98'
    },
    {
        id: 99,
        name: 'User 99',
        email: 'user99@example.com',
        age: 26,
        city: 'City 99',
        country: 'Country 99'
    },
    {
        id: 100,
        name: 'User 100',
        email: 'user100@example.com',
        age: 34,
        city: 'City 100',
        country: 'Country 100'
    }
];

let next = document.getElementById('next');
let prev = document.getElementById('prev');

let firstIndex = 1;
let amountElement = 10;
let lastIndex = Math.ceil(users.length / amountElement);

// if (firstIndex < 2){
//     firstIndex = 5;
// }
// // // if (firstIndex > lastI){
// // //     firstIndex = lastI;
// // // }

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

handler = (firstI, lastI) => {

    let firstIndex = (firstI - 1) * lastI;
    let lastIndex = firstI * lastI;

    let children = [];
    for (let i = firstIndex; i < lastIndex; i++) {

        let box = document.createElement('div');
        box.classList.add('box');

        box.innerHTML = `<p>id: ${users[i].id}<br>name: ${users[i].name}<br>email: ${users[i].email}<br>
        age: ${users[i].age}<br>city: ${users[i].city}<br>country: ${users[i].country}</p>`
        children.push(box);
        container.replaceChildren(...children);
    }


}

handler(firstIndex, lastIndex);
next.addEventListener("click", ev => {
    console.log(firstIndex)
    console.log(lastIndex)
    if (firstIndex > amountElement-1){
        handler(amountElement, lastIndex)
    }else {
        handler(firstIndex += 1, lastIndex)
    }


});
prev.addEventListener("click", ev => {

    if (firstIndex === 1){
        handler(1, lastIndex)
    }else {
        handler(firstIndex -= 1, lastIndex)
    }
});




// let page = 1;
//
// function foo(page, limit) {
//     let box = document.getElementById('box');
//
//     let startIndex = (page - 1) * limit;
//     let endIndex = page * limit;
//
//     if(endIndex > users.length){
//         endIndex = users.length
//     }
//
//     let children = [];
//     for (let i = startIndex; i < endIndex; i++) {
//          let item = users[i];
//         let wrapper = document.createElement('div');
//         let name = document.createElement('div');
//         let email = document.createElement('div');
//
//         name.innerText = `${item.name}`;
//         email.innerText = `${item.email}`;
//         wrapper.append(name,email);
//         children.push(wrapper);
//     }
//     box.replaceChildren(...children);
//
// }
//
// foo(page,10);
//
// next.addEventListener("click", ev => foo(page +=1,10));
// prev.addEventListener("click", ev => foo(page -=1, 10));



// setTimeout(() => {console.log('44')
//
//     setTimeout(()=>{
//         console.log('ffsddsds')}, 2000);
//
//     }, 2000)

// Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let btn = document.getElementById('btn');
let div2 = document.getElementById('text');

btn.addEventListener("click", ev => {
    div2.remove();
})


// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


let age = document.forms.form2;

age.addEventListener('submit',ev => {
    ev.preventDefault();
    let value = document.getElementsByName('age')[0].value;
    console.log(value)

    if (value < 18 && value > 0){

        let div3 = document.createElement('div');
        div3.innerText =`Вам меньше 18: ${value}`;
        document.body.appendChild(div3);


    }else if(value > 18){
        let div3 = document.createElement('div');
        div3.innerText =`Вам больше 18: ${value}`;
        document.body.appendChild(div3);
    }else {
        let div3 = document.createElement('div');
        div3.innerText =`Введите коректное значение`;
        document.body.appendChild(div3);
    }

});

new Promise(resolve => {
    setTimeout(()=> {
        let i = 10;
        resolve('ddd');
        console.log(i)
    },2000)
})
    .then(value => {
        return new Promise(resolve => {
            setTimeout(() => {
                i = value + 10;
                console.log(i)
            }, 3000)
        });

    });

























