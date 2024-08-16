let displayValue = '';
let currentOperator = null;

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue === '') return;
  displayValue += ` ${operator} `;
  currentOperator = operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.trim();
  if (displayValue.length > 0) {
    displayValue = displayValue.slice(0, -1);
  }
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  const displayElement = document.getElementById('display');
  displayElement.value = displayValue;
}