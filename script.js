// console.log("Yazdirma kodu");
// console.log(123);
// console.log(true);
// console.error("bir hata meydana geldi");
// console.warn("uyari mesaji");

// //tek satirlik yorum satiri


// /*
// coklu yorum satiri
// */


//Degiskenler


// var age = 21;            //var keywordu degisken tanimlamak icin kullaniliyor. 



// console.log(age);

// var fullname = "Baris Seckin";
// console.log(fullname);



// const userName = "Baris";       // degismesini istemedigimiz bir degeri const keywordu ile tanimlamaliyiz.

// let password = "root";         // let keywordu var ile ayni 

//Degisken Turleri: 


// // Primitive Types

//     // String
//     let firstName = "Baris";
    
//     // Number
//     let age = 20;
//     let money = 100.5

//     // Boolean
//     let isActivite = true;

//     // null
//     let job = null;

//     // undefined
//     let car;



//     console.log(typeof money)

// // Reference Types - Objects

// // Array

// let names = ["Baris","Koray"];


// // Object

// let adress = {
//     city: "Balikesir",
//     country: "Turkiye"
// }

// // Function

// var calculateAge = function(){
//     return 0 ;
// };


// Tur Donusumleri:

/*

let num1 = Number("5");
let num2 = Number("10");    // String turundeki veriyi number veri tipine donsuturduk

let total = (num1 + num2);

console.log(total);

console.log(typeof num2);
console.log(typeof num1);

*/

let val;

// number to String 
val = String(10);

// bool to String

val = String(true);

// date to String 
val = String(new Date().getHours());

// array to String

val = String([1,2,3,4]);

// toString

val = (10).toString();
val = (false).toString();

// String to number

val = Number('10');
val = Number(true);
val = Number(false);
val = Number(null);

// parseInt
// parseFloat

val = parseInt('10');
val = parseInt('10.5');
val = parseFloat('10.5');


console.log(val);
console.log(typeof val);
console.log(val);