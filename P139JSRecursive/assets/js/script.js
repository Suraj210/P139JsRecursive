"use strict";

let student1 = {
  name: "Suraj",
  surname: "Ismayilov",
  age: 23,
  email: "si@mail.ru",
};

let student2 = {
  name: "Mahmud",
  surname: "Mahmudov",
  age: 28,
  email: "mm@mail.ru",
};

let student3 = {
  name: "Vuqar",
  surname: "Jalilov",
  age: 33,
  email: "vc@mail.ru",
};

let student4 = {
  name: "Emin",
  surname: "Mammadov",
  age: 21,
  email: "em@mail.ru",
};

let students = [student1, student2, student3, student4];

function sortByAge() {
  let count = 0;
  for (const student of students) {
    if (student.age >= 18 && student.age <= 25) {
      count++;
    }
  }

  console.log(`Yasi 18-25 arasi olan ${count} telebe var`);
}

sortByAge();

function sortByEmail() {
  let count = 0;
  for (const student of students) {
    for (let i = 0; i < student.email.length; i++) {
      if (student.email[i] === "c") {
        count++;
        break;
      }
    }
  }

  console.log(`Emailinde c herfi olan ${count} telebe var`);
}

sortByEmail();

// Repeat

// function showNums(num) {
//     for (let i = 0; i <= num; i++) {

//         console.log(i);
//     }
// }

// showNums(5);

// function showNums(num) {
//    let number = num - 1;

//     console.log(num);

//     if (number > 0) {
//         showNums(number)
//     }

// }

// showNums(5);

// function sumOfNums(m){
//     let sum = 0;
//     for (let i = 0; i < m; i++) {
//         sum+=i;

//     }

//     console.log(sum);
// }

// function sumOfNums(m){

//     if (m == 0) {
//         return m;
//     }else{
//         return m + sumOfNums(m - 1);
//     }
// }

// console.log(sumOfNums(4));

// let num = 5 + test(2,4);

// function test(a,b){
//     return a + b + test2()
// }

// function test2(){
//     return 50;
// }

// let names = ["Fidan", "Kubra", "Cahangir", "Ismayil",];

// for (const item of names) {
//     console.log(item);
// }

// let student = {
//     name:"Xeyyam",
//     surname:"Isgenderov",
//     age:29,
//     address:"Yasamal"
// }

// for (const key in object) {
//     if(key == "age"){
//         console.log("yes");
//         break;
//     }
// }

// let stu1 = {
//   name:"Xeyyam",
//   age:29,
// }

// let stu2 = {
//   name:"Pervin",
//   age:30,
// }

// let stu3 = {
//   name:"Fidan",
//   age:22,
// }

// let stu4 = {
//   name:"Kubra",
//   age:25,
// }

// let stu5 = {
//   name:"Surac",
//   age:23,
// }

// let students = [stu1, stu2, stu3, stu4, stu5];

// for (const student of students) {
//   if (student.age > 18) {
//       for (const key in student) {
//         console.log(key + "--" + student[key]);
//       }

//   }
// }
