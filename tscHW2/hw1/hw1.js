"use strict";
// 2.1
//     let arr:any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, "sd"];
// console.log(arr[1]);
//     console.log(arr[2]);
//     console.log(arr[3]);
// 2.2
// type Book={
//     title:string,
//     pageCount:number
//     genre:string
// }
// let book1:Book={title:'Bla', pageCount:300, genre:'horror'};
// let book2:Book={title:'Bla-Bla', pageCount:370, genre:'horror'};
// let book3:Book={title:'Bla-blah', pageCount:340, genre:'horror'};
// 2.3
// type Author={name:string,age:number}
// type Book1={
//     title:string,
//     pageCount:number,
//     genre:string,
//     authors: Author[]
// }
//
// let book1:Book1={title:'Bla', pageCount:'300', genre:'horror', authors:[{name:'Bla', age:45},{name:'Bla', age:47}]};
// let book2:Book1={title:'Bla-Bla', pageCount:'370', genre:'horror', authors:[{name:'Bla', age:45},{name:'Bla', age:47}]};
// let book3:Book1={title:'Bla-blah', pageCount:'340', genre:'horror', authors:[{name:'Bla', age:45},{name:'Bla', age:47}]};
// 2.4
// type User1={name:string, username:string,password:string}
// let users:User1[]=[
//     {name:'vasya', username:'dd',password:'222'},
//     {name:'fanya', username:'ss',password:'5520'},
//     {name:'xanya', username:'ss',password:'533'},
//     {name:'wanya', username:'ss',password:'5512'},
//     {name:'zanya', username:'ss',password:'552'},
//     {name:'canya', username:'ss',password:'567'},
//     {name:'qanya', username:'ss',password:'552'},
//     {name:'hanya', username:'ss',password:'567'},
//     {name:'janya', username:'ss',password:'543'},
//     {name:'banya', username:'ss',password:'533'},
// ]
// 2.5
//
//
// type Weektemp1={ morning:number,
//     afternoon:number,
//     evening:number}
//
// let monday:Weektemp1={
//     morning:+3,
//     afternoon:+3,
//     evening:+3,
// }
// let tuesday:Weektemp1={
//     morning:+32,
//     afternoon:+34,
//     evening:+3,
// }
// let wednesday:Weektemp1={
//     morning:+5,
//     afternoon:+5,
//     evening:+5,
// }
// let thursday:Weektemp1={
//     morning:+6,
//     afternoon:+6,
//     evening:+6,
// }
// let friday:Weektemp1={
//     morning:+7,
//     afternoon:+7,
//     evening:+7,
// }
// let saturday:Weektemp1={
//     morning:+8,
//     afternoon:+8,
//     evening:+8,
// }
// let sunday:Weektemp1={
//     morning:+9,
//     afternoon:+9,
//     evening:+9,
// }
// 2.6
// let strValue:string| null=prompt("Enter a number 1, 0, -3");
// if(strValue !== null){
//    let numValue = +strValue
//     if(numValue !== 0){console.log('true')}
//     else {console.log('false')}
// }
// 2.7
// let strtime:string|null=prompt("Enter time");
// if (strtime !== null) {
//     let time = +strtime
//
//     if (time >= 0 && time < 15) {
//         console.log("first");
//     } else if (time >= 15 && time < 30) {
//         console.log("second");
//     } else if (time >= 30 && time < 45) {
//         console.log("third");
//     } else if (time >= 45 && time < 60) {
//         console.log("fourth");
//     }
// }
// 2.8
//
// let strmonth:string|null=prompt("Enter today date");
// if (strmonth !== null) {
//     let month = +strmonth
//
//     if (month >= 1 && month <= 10) {
//         console.log("one-third")
//     } else if (month > 10 && month <= 20) {
//         console.log("two-thirds")
//     } else if (month > 20 && month <= 31) {
//         console.log("three-thirds")
//     }
// }
// 2.9
// let key : string | null=prompt("Enter number");
// if (key !== null) {
//    let  x:number = +key
//
//     switch (x) {
//
//         case 1:
//             console.log("1")
//             break;
//
//         case 2:
//             console.log("2")
//             break;
//
//
//         case 3:
//             console.log("3")
//             break;
//
//         case 4:
//             console.log("4")
//             break;
//
//         case 5:
//             console.log("5")
//             break;
//
//         case 6:
//             console.log("6")
//             break;
//
//         case 7:
//             console.log("7")
//             break;
//
//         default:
//             console.log("up to 7")
//
//     }
// }
// 2.10
// Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let b:number=0
// let aStr:string|null =prompt("Enter a number")
// if (aStr !==null) {
// let a:number = +aStr
//
//     if (a > b) {
//         console.log("a won")
//     } else if (a < b) {
//         console.log("b won")
//     } else if (a === b) {
//         console.log("peace")
//     }
// }
// 2.11
// <!--є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//  Напишіть код який,буде присвоювати змінній х значення "default"
//   якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//   тобто ті, які приводиться до false, а це 0 null undefined і тд).-->
// let x:string | number | null | undefined = 0;
// if(!x){
//     x="default"
//     console.log(x);
// }
// 2.12
// <!--За допомоги іф перевірити кожен його елемент на тривалість навчання.-->
// <!--У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".-->
// type Course={ title:string,monthDuration:number }
//     let coursesAndDurationArray:Course[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[1].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[2].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[3].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[4].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[5].monthDuration > 5){
//     console.log("super")}
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
//
// --------------------hw3.3--------------------
//     За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i:number=0;
// while(i<20){
//     document.write('<h1> AAAAAAAAAAA</h1>');
//     i++;
// }
// / ---------------------hw3.4---------------------
//     - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i:number=0;
// while (i < 20) {
//     document.write(`<h1>sdfsdfsdfsdf ${i}</h1>`);
//     i++;
// }
// --------------------hw3.5-------------------------
//     - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
// for( let item of listOfItems){
//
//     document.write(` <li> ${item} </li> `);
//
//
// }
// document.write(`</ul>`);
// ------------------hw3.6-------------------
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// type Product={
//     title: string,
//         price:number,
//         image: string
// }
//
//     let products: Product= [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for(let product of products){
//     document.write(`
//         <div class="product-card">
//             <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//             <img src="${product.image}" alt="" class="product-image"/>
//         </div>
//     `)
//
//
// }
// / --------------------hw3.7------------------------
// //     за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
//
// type User={
//     name:string,
//     age: number,
//     status: boolean
// }
//     let users:User[] = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================
//     hw 4.1
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function upright(a:number,b:number){
//     return a*b;
// }
// створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(radius:number) {
//     return 3.14*radius*radius;
// }
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function  cylinder(radius:number, height:number) {
//     return 2*3.14*radius*(radius+height);
// }
// console.log(cylinder(10,15));
// створити функцію яка приймає масив та виводить кожен його елемент
// function printer<T>(arrays:T[]) {
//     for( let array of arrays ) {
//         console.log(array);
//     }
// }
// створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function writeParagraph(text: string):void {
//     document.write(`
//         <p>
//         ${text}
//         </p>`
//     )
//
// }
// створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
// function triLi(textLi:string):void {
//     document.write(
//         `
//        <ul>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//
//        </ul>
//         `
//     )
// }
// triLi("sobaka")
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function somename(textLi:string, print:number):void {
//
//     document.write("<ul>")
//
// for( let i = 0; i < print; i++){
//
//     document.write(`<li>${textLi}</li>`)
// }
//
//     document.write("</ul>")
// }
// somename('gusi', 5);
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
//
// function createList(array:(string | number | boolean)[]):void{
//     document.write("<ul>")
//
//     for(let item of array){
//         document.write(`<li>${String(item)}</li>`)
//     }
//     document.write("</ul>")
//
// }
// createList([12, true, 'pompa',13, 31])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,' +
// ' та виводить їх в документ. Для кожного об'єкту окремий блок.
// type User={
//     id:number,
//     name:string,
//     age:number
// }
// function usercount(users:User[]):void {
//     for (let user of users) {
//         document.write(
//             `
//         <div>
//         <p>${user.id}</p>
//         <p>${user.name}</p>
//         <p>${user.age}</p>
//        </div>
//         `)
//     }
// }
// const usersArray:User[] = [
//     { id: 1, name: "Анна", age: 25 },
//     { id: 2, name: "Иван", age: 30 },
//     { id: 3, name: "Олег", age: 22 }
// ];
// usercount(usersArray);
// // / - створити функцію яка повертає найменьше число з масиву
// function minValue(numbers:number[]):number{
//     let min=numbers[0];
//     for (let number of numbers){
//         if(number<min){min=number;}
//     }
//     return min;
// }
// console.log(minValue([80,2,3,4,5,6]));
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
// function sum(arrays:number[]):number {
//     let suma:number = 0;
//     for (let array of arrays) {
//         suma=suma+array;
//     }
//     return suma;
// }
// console.log(sum([1,2,10]));
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// function swap(arr:(number|string|boolean)[], index1:number, index2:number):(number|string|boolean)[]{
// let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
// }
// console.log(swap([11, 22, 33, 44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// type CurVal={
//     currency:string,
//     value:number
// }
// function exchange(sumUAH:number,currencyValues:CurVal[],exchangeCurrency:string):number |string{
//     for(let cheker of currencyValues){
//         if(cheker.currency === exchangeCurrency){
//             return sumUAH/cheker.value;
//         }
//     }
//     return 'currency not found';
// }
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
// ===========================================================================
// ============================================================================
//     =========================================================================
// ========================================================================
// hw 5.1
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const upright=(a:number, b:number):number => a*b;
// console.log(upright(11,22));
// 5.2
// створити функцію яка обчислює та повертає площу кола з радіусом r
// const circle=(radius:number):number=>Math.PI*radius*radius;
// 5.3
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// const cylinder=(radius:number, height:number):number=>2*3.14*radius*(radius+height)
// console.log(cylinder(10,15))
// 5.4
// // створити функцію яка приймає масив та виводить кожен його елемент
// const printer = (array:(string |number | boolean )[]):void => {
//     array.forEach(element => console.log(element));
// };
// printer([1, 22, 33, 42]);
// 5.5
// / створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
//
// const writeParagraph=(text:string):void=>{
//
//     document.write(`
//         <p>
//         ${text}
//         </p>`
//     )
//
// }
// writeParagraph('Hello World!')
// 5.6
// створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
// const triLi=(textLi:string):void=>{document.write(
//     `
//          <ul>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//        </ul>
//
//     `)
// }
// triLi("sobaka")
// 5.7
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//  const somename=(textLi:string, print:number):void=>{
//      document.write("<ul>")
//
//      for (let i = 0; i < print; i++) {
//          document.write(`<li>${textLi}</li>`);
//      }
//
//      document.write("</ul>")
//
//  }
// somename('gusi', 5);
// 5.8
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
// const createList=(array:(string|number|boolean)[]):void=>{
//     document.write("<ul>")
//     array.forEach(element => {
//         document.write(`<li>${String(element)}</li>`)
//     })
//
//     document.write("</ul>")
//
// }
// createList([12, true, 'pompa',13, 31])
// 5.9
// type User={
//     id:number,
//     name:string,
//     age:number
// }
// const usercount=(users:User[]):void=>{
//     users.forEach(user=>{
//         document.write(
//             `
//         <div>
//         <p>${user.id}</p>
//         <p>${user.name}</p>
//         <p>${user.age}</p>
//        </div>`)})
// }
//
// const usersArray:User[] = [
//     { id: 1, name: "Анна", age: 25 },
//     { id: 2, name: "Иван", age: 30 },
//     { id: 3, name: "Олег", age: 22 }
// ];
// usercount(usersArray);
// 5.10
// - створити функцію яка повертає найменьше число з масиву
// const minValue=(numbers:number[]): number=>{
//     let min=numbers[0];
//     numbers.forEach(number=>{
//         if(number<min){
//             min=number;
//         }
//     })
//     return min;
// }
// console.log(minValue([80,50,38,4,5,6]));
// 5.11
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
// const sum=(arrays:number[]):number=>{
//     let suma = 0;
//     arrays.forEach(array=>{
//         suma=suma+array;
//     })
//     return suma;
// }
// console.log(sum([1,2,10]));
// 5.12
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// const swap=(arr:number[], index1:number, index2:number):number[]=>{
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
//
// }
// console.log(swap([11, 22, 33, 44], 0, 1));
// 5.13
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// type CurVal={
//     currency: string,
//     value: number
// }
// const exchange = (sumUAH:number, currencyValues:CurVal[], exchangeCurrency:string):'currency not found'|number => {
//     for (let cheker of currencyValues) {
//         if (cheker.currency === exchangeCurrency) {
//             return sumUAH / cheker.value;
//         }
//     }
//     return 'currency not found';
// };
//
// console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================
// hw6.1
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const z = 'hello world';
const x = 'lorem ipsum';
const v = 'javascript is cool';
const strings = [z, x, v];
for (const string of strings) {
    console.log(string.length);
}
// 6.2
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const a = 'HELLO WORLD';
const b = 'LOREM IPSUM';
const c = 'JAVASCRIPT IS COOL';
const abc = [a, b, c];
const lowerCase = abc.map(item => item.toLowerCase());
console.log(lowerCase);
// 6.3
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   ';
console.log(str1.trim());
// 6.4
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
const stringToArray = (item) => item.split(' ');
let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str);
console.log(arr);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// 6.5
const num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const fix = num.map(i => i + '');
console.log(fix);
// 6.6
// / - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
const sortNums = (array, direction) => {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
    return [...array];
};
console.log(sortNums([1, 2, 3, 4], 'descending'));
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const LmonthDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(LmonthDuration);
const Fivemonth = coursesAndDurationArray.filter(x => x.monthDuration >= 5);
console.log(Fivemonth);
const idAdd = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration,
}));
console.log(idAdd);
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
const sas = coursesArray.filter(item => item.modules.includes('sass'));
console.log(sas);
const docker = coursesArray.filter(item => item.modules.includes('docker'));
console.log(docker);
// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================
// 7.1
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
const arrUsers = [];
arrUsers.push(new User(1, 'ss', 'sa', 'ss@mail', +972));
arrUsers.push(new User(2, 'sgfs', 'sda', 'vbs@mail', +9572));
arrUsers.push(new User(3, 'sd', 'sa', 'ads@mail', +9721));
arrUsers.push(new User(4, 'kks', 'sa', 'ks@mail', +97223));
arrUsers.push(new User(5, 'hh', 'sha', 'hs@mail', +97322));
arrUsers.push(new User(6, 'rrs', 'rr', 'sr@mail', +9732));
arrUsers.push(new User(7, 'gg', 'sa', 'ggs@mail', +9722));
arrUsers.push(new User(8, 'ddd', 'da', 'dds@mail', +9723));
arrUsers.push(new User(9, 'aa', 'sa', 'aaa@mail', +9722));
arrUsers.push(new User(10, 'ww', 'sa', 'sww@mail', +9721));
console.log(arrUsers);
// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filtr = arrUsers.filter(user => user.id % 2 === 0);
console.log(filtr);
// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let sortedUsers = arrUsers.sort((a, b) => a.id - b.id);
console.log(sortedUsers);
// 7.2
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class ClientClass {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
const clients = [
    new ClientClass(1, 'Анна', 'Иванова', 'anna@example.com', '+380971234567', ['Laptop', 'Mouse']),
    new ClientClass(2, 'Олег', 'Петров', 'oleg@example.com', '+380976543210', ['Phone']),
    new ClientClass(3, 'Мария', 'Сидорова', 'maria@example.com', '+380965432109', ['Tablet', 'Keyboard', 'Headphones']),
    new ClientClass(4, 'Иван', 'Коваленко', 'ivan@example.com', '+380954321098', ['TV']),
    new ClientClass(5, 'Татьяна', 'Лебедева', 'tatiana@example.com', '+380943210987', ['Monitor', 'USB Hub']),
    new ClientClass(6, 'Алексей', 'Морозов', 'alex@example.com', '+380932109876', ['Printer']),
    new ClientClass(7, 'Юлия', 'Григорьева', 'yulia@example.com', '+380921098765', ['SSD', 'RAM']),
    new ClientClass(8, 'Сергей', 'Бондаренко', 'sergey@example.com', '+380910987654', ['Smartwatch']),
    new ClientClass(9, 'Екатерина', 'Семенова', 'ekaterina@example.com', '+380909876543', ['Game Console', 'Controller']),
    new ClientClass(10, 'Николай', 'Кузнецов', 'nikolay@example.com', '+380898765432', ['Router'])
];
// 7.3
// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
console.log(clients.sort((a, b) => a.order.length - b.order.length));
function Car1(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== "function") {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newYear) {
        if (newYear > this.year) {
            this.year = newYear;
        }
        else
            (console.log('time machine not found'));
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
const myCar = new Car1("Tesla", "Model S", 2023, 250, 3.0);
myCar.drive();
myCar.info();
myCar.newSpeed(30);
myCar.drive();
myCar.renewYear(2025);
myCar.info();
myCar.addDriver({ name: "Олексій", age: 30, experience: "10 років" });
myCar.info();
console.log(myCar.driver);
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume, driver) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = driver;
    }
    info() {
        console.log(`model - ${this.model}`);
        console.log(`manufacturer - ${this.manufacturer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineVolume - ${this.engineVolume}`);
        if (this.driver) {
            console.log(`driver - ${this.driver.name}, ${this.driver.age} років`);
        }
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newYear) {
        if (newYear > this.year) {
            this.year = newYear;
        }
        else
            (console.log('time machine not found'));
    }
    addDrive(driver) {
        this.driver = driver;
    }
    ;
}
// 7.6
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, ShoeSize) {
        this.name = name;
        this.age = age;
        this.ShoeSize = ShoeSize;
    }
}
class Creep {
    constructor(name, age, intertest) {
        this.name = name;
        this.age = age;
        this.intertest = intertest;
    }
}
const Cinderellas = [
    new Cinderella('girl', 18, 38),
    new Cinderella('giarl', 18, 39),
    new Cinderella('gisdrl', 18, 48),
    new Cinderella('girlsd', 18, 38),
    new Cinderella('girl', 18, 34),
    new Cinderella('giaarl', 18, 38),
    new Cinderella('gidrl', 18, 38),
    new Cinderella('theItgirl', 27, 37),
    new Cinderella('girl', 18, 38),
    new Cinderella('giddrl', 18, 38),
];
const prince = new Creep('prince', 27, 37);
for (const girl of Cinderellas) {
    if (girl.ShoeSize === prince.intertest) {
        console.log(girl.name);
    }
}
const search = Cinderellas.find(girl => girl.ShoeSize === prince.intertest);
if (search) {
    console.log(search.name);
}
else {
    console.log('not found');
}
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
[11, 22, 33].myForEach((x, i) => { console.log(`index ${i}`, x); });
function cloner(obj) {
    if (obj) {
        let functions = [];
        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({ functionClone, key });
            }
        }
        const cloneObg = JSON.parse(JSON.stringify(obj));
        for (let func of functions) {
            cloneObg[func.key] = func.functionClone;
        }
        return cloneObg;
    }
    throw new Error('10101010');
}
const clone = cloner({ id: 123, name: "John", greeting() { console.log("Greeting"); }, beliberda() { console.log("Beliberda"); } });
console.log(clone);
let coursesAndDurationArray1 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const fod = coursesAndDurationArray1.map((course, index) => ({ ...course, id: index + 1 }));
