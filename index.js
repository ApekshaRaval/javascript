// // Array Sort
// // String sort
//  let arr = ["c","a","v"];
// //  ascending
//  arr.sort();
//  console.log(arr);
// //  descending
//  arr.reverse();
//  console.log(arr)

// Numeric
// let a = [5,9,3,200,4,1000];
// // sorting by alphabetically
// a.sort();
// console.log(a);
// // sort numerically
// // ascending sort
// function sorting(a,b){
//     return a-b;
// }
// a.sort(sorting);
// console.log(a);
// // descending sort
// function sorting(a,b){
//     return b-a;
// }
// a.sort(sorting);
// console.log(a);

// find max element in array
// console.log(maxf(a));
// function maxf(arr){
//     return Math.max.apply(null,arr)
// }
// // find min element in array
// console.log(minf(a))
// function minf(arr){
//     return Math.min.apply(null,arr)

// }

// sorting objects array
//  const a = [
//     {Name:"apexx",age:23},
//     {Name:"nehu",age:22}

// ];
// a.sort(function(a,b){return a.Name- b.Name})
// console.log(a)

// array iteration
// for each fun
// const num = [45, 4, 9, 16, 25];const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// const num = [45, 4, 9, 16, 25];
// num.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;
// function myFunction(value) {
//   txt += value + "<br>"; 
// }

// num.forEach(myfun);
// function myfun(value) {
//     console.log(value)
// }

// map function
// const num=[45,6,4,9];
// const num1=num.map(myfunction);
// console.log(num1)
// function myfunction (value,index,array){
//     return value * value;
// }
// filter function
// const num=[45,6,4,9];
// const num1=num.filter(myfunction);
// console.log(num1)
// function myfunction (value,index,array){
//     return value > 18;
// }

// // map function
// const num=[45,6,4,9];
// const num1=num.map(myfunction);
// console.log(num1)
// function myfunction (value,index,array){
//     return value * value;
// }

// // keys() method:return keys of the array
// const fruit=['apple', 'orange','mango'];
// const f = fruit.keys();
// for(let x of f){
//     console.log(x);
// }
// // entries() method:return the keys with items
// const fruit1=['apple', 'orange','mango'];
// const f1 = fruit.entries();
// for(let x of f1){
//     console.log(x);
// }


// Array operations
// const a=[1,2,3];
// a[0]=4;
// a.push(9)
// a.pop();
// a.shift();
// a.unshift(9)
// console.log(a);

// use of modules
//  const message=()=>{   
//      const name = "heyuu";   
//     const age = 23;   
//    return name + '  is  ' + age + '   years old';

// };
//     document.getElementById('demo').innerHTML=message();
//   export default message;

// // use of the class with constructor
// class car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year
//     }
//     age(x){
//         let date = new Date();
//         return date.getFullYear() - this.year;

//     }
// }
// const mycar = new car("audi",2014);

// arrow function
// let myfunction=(a,b)=>{
//     return a * b ;
// }
// hello=()=> "hey apeksha";
// document.getElementById('demo').innerHTML=myfunction(4,6);
// document.getElementById('demo1').innerHTML=hello();

// use of this keyword

// const obj={
//     "name": "apxx",
//     "lst":"Raval",
//     "fullName": function(){
//         return this.name + "  " + this.lst;
//     }
// }
// document.getElementById('demo1').innerHTML=obj.fullName();


// by using call() method The call() method takes arguments separately.
// const obj={
//     "fullName": function(){
//         return this.name + "  " + this.lst;
//     }
// }
// const obj2={
//     "name": "apxx",
//     "lst":"Raval",
// }
// document.getElementById('demo1').innerHTML=obj.fullName.call(obj2);

// by using apply() method :you can write a method that can be used on different objects.The apply() method takes arguments as an array.
// const obj={
//     "fullName": function(){
//         return this.name + "  " + this.lst;
//     }
// }
// const obj2={
//     "name": "apxx",
//     "lst":"Raval",
// }
// document.getElementById('demo1').innerHTML=obj.fullName.apply(obj2);


// by using bind ()With the bind() method, an object can borrow a method from another object.
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
//   let fullName = person.fullName.bind(member);
//   document.getElementById("demo").innerHTML = fullName();

// regular expression

// search method returns first index of the string
// let string = "hey how are you  i am how hey How it is ";
// let n = string.search("how");
// document.getElementById("demo").innerHTML=n;


// // replace method
// let string1 = "hey how are you  i am how hey How it is ";
// let n1 = string1.replace(/how/gi , "Fine");
// document.getElementById("demo1").innerHTML=n1;

// match method

//match string
// let string1 = "hey how are you  i am how hey How it is ";
// let n1 = string1.match(/[a-z]/gi);
// document.getElementById("demo1").innerHTML=n1;

//match number
// let num = "hey23fhdjfnelki45465jtdn.dn/jgfbgkdfgd";
// let n = num.match(/[0-9]/g);
// document.getElementById("demo1").innerHTML=n;

// let word= "hey23fhdjfnelki45465jtdn.dn/jgfbgkdfgd";
// let n1 = num.match(/\d/g);
// document.getElementById("demo").innerHTML=n1;


//match  pattern
// let string = "hey how are you  i am how hey How it is ";
// let n2 = string.match(/(how|hey)/gi);
// document.getElementById("demo").innerHTML=n2;

//test  pattern :searches a string for a pattern, and returns true or false, depending on the result.
let string = "hey how are you  i am how hey How it is ";
let pattern=/h/;

document.getElementById("demo").innerHTML=pattern.test(string);






