// Lets discuss about events and event listeners of js as shown below:

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

console.log(view);
console.log(div);
console.log(h2);

//Syntax of event listeners is given below:

// addEventListeners("event", function, useCapture);

// Example for event listener is shown below:

const doSomething = () => {
  alert("doing something");
};

h2.addEventListener("click", doSomething, false); //example for adding event

h2.removeEventListener("click", doSomething, false); //example for removing event

h2.addEventListener("click", function (event) {
  console.log(event.target);
  event.target.textContent = "Do Good!";
}); //example for changing the content using event listener

//Lets see about another event as folloows:

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("complete");
    initApp();
  }
}); //An event listener to check weather a website loads every data completely from the server and became ready!

// The following initApp() function is written below for execution

const initApp = () => {
  const view = document.querySelector("#view2");

  const div = view.querySelector("div");

  const h2 = div.querySelector("h2");

  view.addEventListener("click", (event) => {
    view.style.backgroundColor = "purple";
  });

  div.addEventListener("click", (event) => {
    view.style.backgroundColor = "blue";
  });

  h2.addEventListener("click", (event) => {
    event.target.textContent = "Hola!";
  });
};


// Below piece of code from line 64 to 67 is about adding and removing class of an element using event listener by using "classList" property, "add" and "remove" methods!

// view.addEventListener("click", (event) => {
//   view.classList.add("purple");
//   view.classList.remove("darkblue");
// })

// Note: In the place of add or remove in the above piece of code, if we put "toggle" then the color will change between the two mentioned colors for evetytime we click the event!

// The code snippet from line 56 to 58 can be exchanged by the code snippet from the line 73 to 76. So that if we click the event it will change the content from be good to hola and again if we click the event thewn it will change back from hola to be good. Its like toggling. by using ternary operator in the event AudioListener, we could change the textcontent for everytime we click it!

// h2.addEventListener("click", (event) => {
//   const myText = event.target.textContent;
//   myText === "Be Good!" ? (event.target.textContent = "Hola!") : (event.target.textContent = "Be Good!");
// })

