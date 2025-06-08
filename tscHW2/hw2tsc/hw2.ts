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






//    if( ageInput.value !== ""){
//        if(+ageInput.value >= 18){
//            userMsg.innerText= 'valid age'
//        }
//        if(+ageInput.value < 18){
//            userMsg.innerText= 'invalid age'
//        }
//
//    }
//    if(!ageInput.value){
//        userMsg.innerText= 'no age'
//
//     }
// })




































