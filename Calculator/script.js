function updateDisplay(input) {
  document.querySelector("#display").innerText += input;
  // Same as document.querySelector("#display").innerText + input
  //   function calculate() {
  //     const displayValue = document.querySelector("#display").innerText; // "34+92"

  //     const result = eval(displayValue);

  //     document.querySelector("#display").innerText = result;
  //   }
  //   calculate();
}

function clearDisplay() {
  document.querySelector("#display").innerText = "";
}

function calculate() {
  const numbers = document.querySelector("#display").innerText;

  const result = eval(numbers);

  document.querySelector("#display").innerText += "=" + result;
}
// let count = 0;
// const number = document.querySelector("#display");
// number.innerText = count;
