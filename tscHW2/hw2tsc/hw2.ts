// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.



// let div:HTMLDivElement= document.createElement('div');
// div.classList.add('wrap','collapse', 'alpha', 'beta');
// div.style.background='lightpink';
// div.innerText='lorem Ipsum';
// div.style.color='darkgreen';
// div.style.fontSize='40px';
//
// let div2:HTMLDivElement=div.cloneNode(true) as HTMLDivElement;
// document.body.append(div, div2);


// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let array:string[] =['Main','Products','About us','Contacts'];
// let ul:HTMLUListElement=document.createElement('ul');
// for(let arr of array){
//     let li:HTMLLIElement=document.createElement('li');
//     li.innerText=arr;
//     ul.appendChild(li);
// }
// document.body.appendChild(ul);

//#jeBqHV525U5
// - Є масив  coursesAndDurationArray
//
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// type TypeCoursesAndDurationArray={
//     title:string, monthDuration:number
// }
//     let coursesAndDurationArrayQQ:TypeCoursesAndDurationArray[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let div:HTMLDivElement = document.createElement('div');
// for (let course of coursesAndDurationArrayQQ) {
//    let p:HTMLParagraphElement=document.createElement('p')
//     p.innerText = course.title + " " + course.monthDuration + "month";
//     div.appendChild(p);
// }
//
// document.body.appendChild(div);

// #Kx1xgoKy8

// Є масив coursesAndDurationArray
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//     в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// type TypeCoursesAndDurationArray={
//     title:string, monthDuration:number
// }
//
//     let coursesAndDurationArrayQW:TypeCoursesAndDurationArray[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let course of coursesAndDurationArrayQW) {
//
//     let div:HTMLDivElement = document.createElement('div');
//     div.classList.add('item');
//
//   let h1:HTMLHeadingElement =document.createElement("h1");
//   h1.classList.add('heading');
//   h1.innerText = course.title;
//
//   let p:HTMLParagraphElement = document.createElement("p");
//   p.classList.add('description');
//   p.innerText = `${course.monthDuration}`;
//
//   div.append(h1, p);
//     document.body.appendChild(div);
// }

// ======================================HW10=============================================================
// ===================================================================================================
// ===================================================================================================

// #sH8c4er

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
//     зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let h1:HTMLHeadingElement=document.getElementById('text222') as HTMLHeadingElement
let button:HTMLButtonElement=document.getElementById('button222') as HTMLButtonElement
button.onclick = function():void {
    h1.style.display = 'none';
};

// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageInput: HTMLInputElement = document.getElementById("userAge") as HTMLInputElement;
let button11:HTMLButtonElement = document.getElementById("ageButton") as HTMLButtonElement;
let userMsg:HTMLParagraphElement=document.getElementById("message") as HTMLParagraphElement;
button11.addEventListener("click", function():void{

    let age=parseInt(ageInput.value)

if (isNaN(age)){
    userMsg.innerText= 'no age'
}
else if (age<18){
    userMsg.innerText= 'invalid age'
}
else {
    userMsg.innerText = 'valid age'}
})

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.' +
// ' Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let inputs:HTMLCollectionOf<HTMLInputElement>=document.getElementsByClassName('inputs') as HTMLCollectionOf<HTMLInputElement>
let result:HTMLDivElement=document.getElementById ('resultDiv222') as HTMLDivElement
let form:HTMLFormElement=document.getElementById('form') as HTMLFormElement

form.onsubmit = function(ev:Event):void{
    ev.preventDefault()
    let resultText:string=''
  for(let input of inputs){
      resultText += input.value + ' '
  }
    result.innerHTML = resultText

}
result.addEventListener('mousemove', (ev: MouseEvent): void => {
    const r: number = ev.clientY;
    const g: number = ev.clientX;
    const b: number = ev.clientY;

    result.style.background = `rgb(${r},${g},${b})`;
    result.style.color = 'purple';
});



// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const div: HTMLDivElement | null = document.getElementById("onePlus") as HTMLDivElement;

if (div) {
    let countStr: string | null = localStorage.getItem('key');
    let count: number = countStr ? Number(countStr) : 0;
    count += 1;
    localStorage.setItem('key', count.toString());
    div.innerText = count.toString();
}

// =====================================================================
// Є сторінка index.html (назва довільна),
// при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
//     Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
//     Інфу НЕ виводити в консоль, а малювати в DOM
const getOrCreateSessionsList = (): Date[] => {
    const saved = localStorage.getItem('sessionsList');
    return saved ? JSON.parse(saved) : [];
};
const sessionsList: Date[] = getOrCreateSessionsList();
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// #Jg0gPO00
// створити конвертор ваги з кг в фунти.
// ---данні заповнюються через інпут.
//--- При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


let result6:HTMLSpanElement=document.getElementById("result") as HTMLSpanElement;
let input:HTMLInputElement = document.getElementById("input")as HTMLInputElement;
input.addEventListener("input", function (): void {
    const kg: number = parseFloat(input.value);


    if (!isNaN(kg)) {
        const pounds: number = kg * 2.20462;
        result6.innerText = pounds.toFixed(2);
    } else {
        result6.innerText = "";
    }
});

// В localStorage зберігаються масиви.
//     -Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
//   - сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void


function addToLocalStorage(arrayName:string,objToAdd:any):void {


}
//     const arraysName:string=localStorage.getItem(arrayName) as string;
//     if(!arraysName){
//         document.write('name does not exist');
//     }
//     let arraysParse=JSON.parse(arraysName);
//
//     if(typeof objToAdd === 'object'){
//         arraysParse.push(objToAdd);
//     }
// localStorage.setItem(arrayName, JSON.stringify(objToAdd));
// }
//
// addToLocalStorage('name','Ann65');

































