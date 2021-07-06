// function testWebP(callback) {
//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     }
//     webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
// }

// testWebP(function (support) {
//     if (support == true) {
//         document.querySelector('body').classList.add('webp');
//     }
// });

// "use strict";
// let numbers = ["one", "two", "trhee"];


// let outRender = (tagN) => {
//     let liOut = document.createElement("li");
//     let nodeOut = document.createTextNode(tagN);
//     liOut.appendChild(nodeOut);

//     document.getElementById('main').append(liOut);
// }

// document.write("<h1>Die!</h1>");

// let newNumbers = numbers.map(
//     (el) => {
//         return el ? outRender(el) : "error"
//         }
//     );

// console.log(navigator);

// const funcOne = (text) => {
//     if (text){
//         text = text;
//     }else{
//         text = "nonono";
//     }
//     console.log(text);

// }

// funcOne(0);


// let i = 4;
// while(i<9){
//     console.log(i);
//     i++;
// }

// for ( i=i; i<20;i++){
//     console.log(i);
// }

// second("hello");
// second();

let helloFunc = (name) => {
    if (name) {
        let rootElement = document.getElementById("main");
        rootElement.textContent = `hello ${name}!`;
    } else {
        alert(`hello guest!`);
    }
}

console.log(helloFunc);