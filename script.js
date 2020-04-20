// const darkModeButton = document.querySelector("#dark-mode")

// darkModeButton.addEventListener("click", function(){
//     // console.log("you clicked the dark mode button")
//     //select the form element
//     const formElement = document.querySelector("form");
//     //add a class of dark-mode to the form
//     formElement.classList.toggle("dark-mode")
//     //toggle makes the button turn off dark-mode when you press it again.  add just keeps it turned on no matter how many times you press it.
// })


// Add a button that says "Jordan Mode"
// In your JavaScript file, write an click event listener that increases the font size on your form to 3 em when you click it so Jordan can see it
// When you click the button again, the font should go back to a normal size

// const jordanModeButton = document.querySelector("#jordan-mode")

// document.querySelector("#jordan-mode").addEventListener("click", function(){
//     // console.log("you clicked the jordan button")
//     document.querySelector("form").classList.toggle("jordan-mode")
// })

// document.querySelector("#submit-btn").addEventListener("click", function(){
    // console.log("you clicked the submit button")//test

    //get the values of the name and email input
    // const nameInput = document.querySelector("#name-input")
    // const emailInput = document.querySelector("#email-input")
    // console.log("this should be the name input", nameInput)
    // console.log("this should be the email input", emailInput)

//     const nameValue = nameInput.value
//     const emailValue = emailInput.value 
// input", nameValue)
//     console.log("this should be the email     console.log("this should be the name input", emailValue)
//     //print those values to the DOM
//     document.querySelector("#output-container").innerHTML += `<section>
//     <h3>${nameValue}</h3>
//     <p>${emailValue}</p>
//     </section>`
// }

// Practice: Mirror, Mirror in the Code
// The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

// Create an input field in your DOM. Give it an id of message.
//done
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.

document.querySelector("#message").addEventListener("keyup", function(){
 
const messageInput = document.querySelector("#message");
const messageValue = messageInput.value;
   document.querySelector("#input-article1").textContent = messageValue;
   console.log(messageValue)
   document.querySelector("#input-article2").textContent = messageValue;
})

// The event handler function should update the textContent property of both sections.