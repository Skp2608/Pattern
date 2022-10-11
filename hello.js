// Ways to print in javascript
        // 1. console.log("Hello World");
        // 2. alert("Hey, I am Shekhar");
        // 3. document.write("Hello World");

        // Javascript console API
        // 1. console.log("Hello World");
        // 2. console.warn("This is Warning");
        // 3. console.error("This is Error");

// Variable in Javascript
var number1=45; 
var number2=5;
// console.log(number1+number2);

// Data types in Javascript
// Number
var num1=34;
var num2=38.54;

// String
var str1="This is String";
var str2='This is String';

// Object
var marks={
    Rahul: 75,
    Shekhar:100,
}
// console.log(marks);

// Boolean
var a=true;
var b=false;

// Undefined and null
var a;                           //  undefined
var b=undefined;                 //  undefined
var c=null;                      //  Null

// At a very high level, there are 2 types of data types in JavaScript
// 1. Primitive datatypes: undefined, null, number, String, Boolean, Symbol
// 2. Reference data types: Arrays and Objects

var arr1=[1, 56.24, "Shekhar", true, null]
// console.log(arr1)

// Assignment Operators         ->   +, -, *, /, +=
// Comparison Operators         ->   ==, >=, <=, <, <
// Logical Operators            ->   &&, ||, !=

// Function in Javascript
function sum(a,b,c){
    return a+b+c;
}
c=sum(1,2,3);
// console.log(c);

// if-else statement

// age=43
// if(age>32){
//     console.log("You are not a kid");
    
// }
// else if(age>18){
//     console.log("You are a kid");
// }
// else{
//     console.log("You are older");
// }

// loop in Javascript => all same as C language
arr=[1,2,3,4,5];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// forEach in javascript

// arr.forEach(function(element){
//     console.log(element);
// });

// arr1.forEach(i => {
//     console.log(i);
// });


// break and continue is same as C language

// Array Method in Javascript
let myArr=[]
// myArr.length;           return size of array

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);        // used to merge 2 or more array

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 50);    output: 130
// const found1 = array1.findIndex(element => element == 8);       // find the element in javascript

// console.log(found);
// console.log(found1);

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// // expected output: 1

// // start from index 2
// console.log(beasts.indexOf('bison', 2));
// // expected output: 4

// myArr.pop();     // Removes the last element from an array and returns that element.

// myArr.push("Shekhar");   // Adds one or more elements to the end of an array
// myArr.shift("Shekhar");  // Removes the first element from an array
// console.log(myArr);


// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]


// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // expected output: Array [1, 100000, 21, 30, 4]

// myArr.unshift("Shekhar")    // add element in the array


// String Method in Javascript

// let str="Shekhar is a good boy";
// console.log(str.length);
// console.log(str.indexOf("good"));
// console.log(str.indexOf("godd"));
// console.log(str.slice(1,10));
// console.log(str.replace("Shekhar","Aman"));


// Date in Javascript
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());


// DOM Manipulation
// var p = document.getElementById('html1');
// console.log(p.innerHTML);
// console.log(p.innerText);
// p.style.backgroundColor= "blue";
let d=document.getElementsByClassName("cl1")
// console.log(d);
// d[1].style.margin="50px";
// d[0].classList.add("shekhar");
// console.log(d[0].innerHTML);
// console.log(d[0].innerText);

// How to add HTML tag through javascript

tn=document.getElementsByTagName('div');
// console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText="Hello, I am JavaScript";
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="Hello, I am JavaScript and This is bold";
tn[0].replaceChild(createdElement2,createdElement);

// removeChild(element);  ----> removes an element

// Selecting using Query
// sel = document.querySelector('.cl1')
// console.log(sel);
// sel = document.querySelectorAll('.cl1')
// console.log(sel);
// sel = document.querySelector('#html1')
// console.log(sel);


// Event in Javascript

function clickme() {
    console.log("The button was clicked");
}

// d[0].addEventListener('click',function(){
//     document.querySelector('#html1').innerHTML="<b> We have clicked </b>";
//     console.log("Hello Lalu jada");
// })

// d[0].addEventListener('click',function(){
//     document.querySelectorAll('.cl1')[1].innerHTML="<b> We have clicked </b>";
//     console.log("Hello Lalu jada");
// })

// window.onload = function () {
//     console.log("The document was loaded");
// }

// d[0].addEventListener('click',function(){
//     console.log("Hello Lalu jada");
// })

// d[0].addEventListener('mouseover',function(){
//     console.log("Mouse on Hello World");
// })

// d[0].addEventListener('mouseout',function(){
//     console.log("Mouse out of Hello World");
// })

// d[0].addEventListener('mouseup',function(){
//     console.log("Mouse up when clicked on Hello World");
// })

// d[0].addEventListener('mousedown',function(){
//     console.log("Mouse down when clicked on Hello World");
// })


// let prevHTML=document.querySelectorAll(".cl1")[1].innerHTML;
// d[0].addEventListener('mouseup',function(){
//     document.querySelectorAll(".cl1")[1].innerHTML=prevHTML;
//     console.log("Mouse up when clicked on Hello World");
// })

// d[0].addEventListener('mousedown',function(){
//     document.querySelectorAll(".cl1")[1].innerHTML="<b> We have clicked</b>";
//     console.log("Mouse down when clicked on Hello World");
// })

// Arrow Function
// function summ(a,b) {
//     return a+b;
// }

summ = (a,b) => {
    return a+b;
}

// SetTimeout and Setinterval
funtion1 = ()=>{
    console.log("I am your log");
}
// setTimeout(funtion1,2000);
// setInterval(funtion1,2000);
// var clr=setInterval(funtion1,2000);
// --> Use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// localStorage in JavaScript
// localStorage.setItem("name","Shekhar");
// localStorage.getItem("name","Shekhar");
// localStorage.clear();
// localStorage.removeItem(name);


// obj = {name:"Shekhar",length:3,a:{this:"that"}};
// jso = JSON.stringify(obj);
// console.log(typeof obj)
// console.log(typeof jso)
// console.log(jso)
// parsad = JSON.parse(jso);
// console.log(parsad);
