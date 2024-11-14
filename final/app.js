// select input fields, result display, and buttons
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const resultValue = document.querySelector("#result-value");
const buttons = document.querySelectorAll(".btn");

// Function to update the value of an input field
function updateValue(input, operation) {
  let currentValue = parseFloat(input.value);
  if (operation === "increase") {
    input.value = currentValue + 1;
  } else if (operation === "decrease") {
    input.value = currentValue - 1;
  } else if (operation === "reset") {
    input.value = 0;
  }
}

// Add event listeners for each button
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const operation = e.currentTarget.getAttribute("data-operation");
    const target = e.currentTarget.getAttribute("data-target");

    if (target) {
      // For increase and decrease buttons targeting num1 or num2
      const input = document.querySelector(`#${target}`);
      updateValue(input, e.currentTarget.classList.contains("increase") ? "increase" : "decrease");
    } else if (operation) {
      // Perform calculation based on the selected operation
      const number1 = parseFloat(num1.value);
      const number2 = parseFloat(num2.value);
      let result;

      if (isNaN(number1) || isNaN(number2)) {
        result = "Please enter valid numbers";
      } else {
        switch (operation) {
          case "add":
            result = number1 + number2;
            break;
          case "subtract":
            result = number1 - number2;
            break;
          case "multiply":
            result = number1 * number2;
            break;
          case "divide":
            result = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
            break;
        }
      }
      resultValue.textContent = result;
    } else if (button.classList.contains("reset")) {
      // Reset values of both inputs and the result
      num1.value = 0;
      num2.value = 0;
      resultValue.textContent = 0;
    }
  });
});
