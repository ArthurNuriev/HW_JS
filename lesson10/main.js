// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms.form1;
form1.onsubmit = function (e) {
    e.preventDefault();
    let divForm1 = document.createElement('div');
    divForm1.classList.add('divForm1');
    document.body.appendChild(divForm1);
    divForm1.innerHTML = (`first name: ${this.firstname.value}<br> 
                           last name: ${this.lastname.value}<br> age: ${this.age.value}`);
}

// є сторінка, на якій є блок, в якому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let divNum = document.body.getElementsByClassName('number')[0];
let i = JSON.parse(localStorage.getItem('key'));
if (isNaN(i)) {
    i = 0;
}
window.onload = function (e) {
    i++;
    localStorage.setItem('key', JSON.stringify(i));
    divNum.innerText = i;
}
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let p1 = document.getElementById('page1');
let arrDate = [];
p1.addEventListener('click', function (ev) {
    let jItem = localStorage.getItem('sessions');
    let item = JSON.parse(jItem);
    let date = new Date();
    if (item !== null){
        arrDate.push(date.getTime());
        localStorage.setItem('sessions', JSON.stringify(arrDate.concat(item)));
    }else {
        localStorage.setItem('sessions', JSON.stringify(new Date().getTime()));
    }
})





























