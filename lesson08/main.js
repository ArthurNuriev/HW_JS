// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrUsers = [];
arrUsers.push(new User(2, 'Kolya', 'Petrov', 'petya@gmail.com', '068965650737'));
arrUsers.push(new User(1, 'Max', 'Ivanov', 'vano@gmail.com', '0689450737'));
arrUsers.push(new User(3, 'Kokos', 'Abrikosov', 'kokos@gmail.com', '06895650737'));
arrUsers.push(new User(4, 'Anna', 'Jamaika', 'jah@gmail.com', '06565737'));
arrUsers.push(new User(5, 'Inna', 'Yarovaya', 'inna@gmail.com', '06845450737'));
arrUsers.push(new User(6, 'Jenay', 'Jennnaa', 'jjj@gmail.com', '0645456737'));
arrUsers.push(new User(7, 'Zina', 'Vasvas', 'vasvas@gmail.com', '0677670737'));
arrUsers.push(new User(8, 'Masha', 'Jiji', 'jjjj@gmail.com', '068777737'));
arrUsers.push(new User(9, 'Nino', 'Kino', 'nino@gmail.com', '034545737'));
arrUsers.push(new User(10, 'David', 'Marmont', 'david@gmail.com', '022322737'));
console.log(arrUsers);
console.log('*********************************');

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = arrUsers.filter(value => value.id % 2 === 0);
console.log(filteredUsers);
console.log('*********************************');

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedFilteredUsers = [...filteredUsers].sort((a, b) => b.id - a.id);
console.log(sortedFilteredUsers);
console.log('*********************************');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrClients = [];
arrClients.push(new Client(1, 'Max', 'Ivanov', 'vano@gmail.com', '0689450737', ['apple', 'jam']));
arrClients.push(new Client(2, 'Kolya', 'Petrov', 'petya@gmail.com', '068965650737', ['tea', 'juice', 'laptop']));
arrClients.push(new Client(3, 'Kokos', 'Abrikosov', 'kokos@gmail.com', '06895650737', ['Smartphone', 'Laptop', 'Television', 'Refrigerator', 'Washing machine']));
arrClients.push(new Client(4, 'Anna', 'Jamaika', 'jah@gmail.com', '06565737', ['Smartphone', 'Laptop', 'Coffee machine', 'Vacuum cleaner', 'Refrigerator', 'Microwave oven']));
arrClients.push(new Client(5, 'Inna', 'Yarovaya', 'inna@gmail.com', '06845450737', ['Iron', 'Hairdryer', 'Blender', 'Vacuum cleaner']));
arrClients.push(new Client(6, 'Jenay', 'Jennnaa', 'jjj@gmail.com', '0645456737', ['Dishwasher', 'Hairdryer']));
arrClients.push(new Client(7, 'Zina', 'Vasvas', 'vasvas@gmail.com', '0677670737', ['Camera', 'Printer', 'Computer mouse', 'Keyboard', 'Headset']));
arrClients.push(new Client(8, 'Masha', 'Jiji', 'jjjj@gmail.com', '068777737', ['Portable speaker', 'Bicycle']));
arrClients.push(new Client(9, 'Nino', 'Kino', 'nino@gmail.com', '034545737', ['Tennis racket']));
arrClients.push(new Client(10, 'David', 'Marmont', 'david@gmail.com', '022322737', ['Baseball bat']));
console.log(arrClients);
console.log('*********************************');

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = [...arrClients].sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);
console.log('*********************************');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, max speed: ${this.maxSpeed}, engine volume: ${this.engineVolume}`);
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }
}

let car1 = new Car('231-i', 'bmw', 2020, 320, 3.0);
let car2 = new Car('Passat', 'Volkswagen', 2015, 240, 2.5);
let driver1 = {name: 'Tom', age:32}
let driver2 = {name: 'Max', age:22}
car1.drive();
car1.info();
car1.increaseMaxSpeed(450);
car1.changeYear(2023);
car1.addDriver(driver1);
car2.addDriver(driver2);
console.log(car1);
console.log(car2);
console.log('*********************************');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(modell, manufacturerr, yearr, maxSpeedd, engineVolumee) {
        this.modell = modell;
        this.manufacturerr = manufacturerr;
        this.yearr = yearr;
        this.maxSpeedd = maxSpeedd;
        this.engineVolumee = engineVolumee;

        this.drivee = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeedd} на годину`);
        }
        this.infoo = function () {
            console.log(`model: ${this.modell}, manufacturer: ${this.manufacturerr}, year: ${this.yearr}, max speed: ${this.maxSpeedd}, engine volume: ${this.engineVolumee}`);
        }
        this.increaseMaxSpeedd = function (newSpeed){
            this.maxSpeedd = newSpeed;
        }
        this.changeYearr = function (newValue){
            this.yearr = newValue;
        }
        this.addDriverr = function (driver){
            this.driverr = driver;
        }
    }
}
let car3 = new CarClass('amg', 'mercedes', 2022, 380, 4.0);
let car4 = new CarClass('Polo', 'Volkswagen', 2010, 180, 1.6);
let driver3 = {name: 'Vasya', age:44};
let driver4 = {name: 'Anna', age:16};
car3.drivee();
car3.infoo();
car3.increaseMaxSpeedd(450);
car3.changeYearr(2023);
car3.addDriverr(driver3);
car4.addDriverr(driver4);
console.log(car3);
console.log(car4);
console.log('*********************************');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Cinderella (name, age, footSize){
    this.name = name;
    this.age = age;
    this.footsize = footSize;
}

let arrCinderella = [new Cinderella('Emma', 18, 28),
                                new Cinderella('Grace', 20, 29),
                                new Cinderella('Lily', 21, 27),
                                new Cinderella('Charlotte', 23, 32),
                                new Cinderella('Amelia', 30, 38),
                                new Cinderella('Harper', 25, 30),
                                new Cinderella('Mia', 23, 36),
                                new Cinderella('Sophia', 27, 39),
                                new Cinderella('Ava', 26, 40),
                                new Cinderella('Olivia', 19, 26),]

function Prince (name, age, footSize){
    this.name = name;
    this.age = age;
    this.footsize = footSize;
    this.findCinderella = function (arr) {
        for (const item of arr) {
            if(this.footsize === item.footsize){
                console.log(`this is ${item.name}`);
            }
        }
    }
    this.findCinderella2 = function (arr){
        return arr.find(value => value.footsize === this.footsize);
    }
}

let prince1 = new Prince('Jonathan', 32, 26);
let prince2 = new Prince('Vasya', 28, 40);

prince1.findCinderella(arrCinderella);

console.log(prince2.findCinderella2(arrCinderella));;














