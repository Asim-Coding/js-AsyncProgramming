// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// console.log("synchronous programming");
// function myfunc(){
//   console.log("inside function");
// }
// console.log("new function");
// myfunc();
// console.log("my function");


// console.log("Anychronous programming");

// console.log("Start")
// setTimeout(()=>{
//    console.log("set time out")
// },3000)
// console.log("end");

// console.log("start");
// var arr = [1,2,3,4,5,6,7,8,9]
//  arr.forEach(r=>{
//     console.log(r);
// })
// console.log("end")


function getname(name,callback){
  setTimeout(()=>{
    console.log("inside function");
    callback(name);
  },4000)
}



function getHobbies(name,callback){
  setTimeout(()=>{
    console.log("inside hobbies funcation");
    callback(['ball','cricket','batman']);
  },2000)
}
const nm = getname('ali',(nm)=>{console.log(nm)});
getHobbies(nm,(hobby)=>{console.log(hobby)})
console.log("end");


