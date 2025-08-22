let display = document.getElementById("display"); // Get the display element
let buttons = document.querySelectorAll("#buttons button"); // Get all buttons inside the buttons container

buttons.forEach(button => { 
  button.addEventListener("click", () => { // Add click event listener to each button
    let value = button.textContent; // Get the text content of the button

    if (value === "C") {
      display.value = ""; // If we press C, clear the display
    } else if (value === "=") {
      display.value = eval(display.value); // If we press =, evaluate the expression
    } else {
      display.value += value; // If we press any other button, append its value to the display
    }
  });
});
