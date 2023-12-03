const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const resetButton = document.querySelector(".reset");
const removeButton = document.querySelector(".remove");
const functions = document.querySelectorAll(".function");
const root = document.documentElement;
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operationsArr = ["/", "Backspace", "*", "+", "-", "%", "Enter", "Escape"];

[...functions, ...operations, ...numbers].forEach((el) => {
  el.onselectstart = function () {
    return false;
  };
});

operations.forEach((op) => {
  op.addEventListener("click", function (e) {
    operationHandle(op);
  });
});

numbersArr.forEach(function (num) {
  document.addEventListener("keydown", function (e) {
    if (e.key === num) {
      handleInput(num);
    }
  });
});
operationsArr.forEach(function (op) {
  document.addEventListener("keydown", function (e) {
    if (e.key === op) {
      if (op === "Backspace" && e.shiftKey) {
        return;
      }
      switch (op) {
        case "/":
          handleDivideClick("÷");
          break;
        case "Backspace":
          removeHandler();
          break;
        case "*":
          handleMultiplyClick("×");
          break;
        case "+":
          handleAdditionClick("+");
          break;
        case "-":
          handleSubtractionClick("-");
          break;
        case "%":
          expression.textContent = calculatePercentage(expression.textContent);
          break;
        case "Enter":
          onEqualClick();
          break;
        case "Escape":
          resetHandler();
          break;
        default:
          break;
      }
    }
  });
});

numbers.forEach((num) => {
  const text = num.textContent;

  num.addEventListener("click", function (e) {
    handleInput(text);
  });
});

resetButton.addEventListener("click", function (e) {
  resetHandler();
});

removeButton.addEventListener("click", function (e) {
  removeHandler();
});

function calculate(value) {
  if (value.endsWith(",")) value = value.slice(0, -1);
  if (/÷0[+\-÷×]/.test(value) || value.endsWith("÷0")) {
    return "Разделить на ноль нельзя";
  }
  const operatorsRegExp = /[×÷+-]/g;

  let args = value
    .replace(/\s/g, "")
    .replaceAll(",", ".")
    .split(operatorsRegExp)
    .join(" ")
    .trim()
    .split(" ");
  const operators = value
    .match(/[×÷+-]/g)
    .join("")
    .replaceAll("÷", "/")
    .replaceAll("×", "*")
    .split("");
  args = args.map(Number);
  if (args.length === operators.length) {
    operators.pop();
  }
  const stack = [];
  let currValue = args[0];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "/" || operators[i] === "*") {
      if (operators[i] === "/") {
        currValue /= args[i + 1];
      }
      if (operators[i] === "*") {
        currValue *= args[i + 1];
      }
    } else {
      if (currValue <= 0.000000005) currValue = 0;
      stack.push(currValue, operators[i]);
      currValue = args[i + 1];
    }
  }
  stack.push(currValue);
  let total = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
    if (stack[i] === "+") {
      total += stack[i + 1];
    }
    if (stack[i] === "-") {
      total -= stack[i + 1];
    }
  }
  const result = parseFloat(total.toFixed(10));

  return isNaN(result) || !isFinite(result)
    ? "Разделить на ноль нельзя"
    : parseFloat(total.toFixed(10));
}

function operationHandle(op) {
  if (result.classList.contains("active")) result.classList.remove("active");

  if (op.dataset.value === "%") {
    let tmp = expression.textContent.replace(",", ".").replace(/\s/g, "");
    if ((!stringHasOperators(tmp) || tmp.includes("e")) && tmp !== "0") {
      expression.textContent = setStringLength(calculatePercentage(+tmp));
      changeFontSize(expression.textContent);
      updateExpression();
      result.textContent = expression.textContent;
      return;
    }
  }
  if (op.dataset.value === "=" && !result.hidden) {
    onEqualClick();
  }

  if (op.dataset.value === "/") {
    handleDivideClick(op);
  }
  if (op.dataset.value === "*") {
    handleMultiplyClick(op);
  }
  if (op.dataset.value === "-") {
    handleSubtractionClick(op);
  }
  if (op.dataset.value === "+") {
    handleAdditionClick(op);
  }
}
function handleInput(text) {
  const operatorsRegExp = /[×÷+-]/g;

  if (result.classList.contains("active")) {
    if (text === ",") {
      expression.textContent = "0,";
      result.textContent = `= 0`;
      handleEqualOutClick();
      result.classList.remove("active");
      changeResetButtonName();
      return;
    }
    result.textContent = `= ${text}`;
    expression.textContent = text;
    handleEqualOutClick();
    result.classList.remove("active");
    changeResetButtonName();
    return;
  }

  if (expression.textContent === "0" && text === "0") return;
  if (text === ",") {
    const operatorsRegExp = /[×÷+-]/g;

    let args = expression.textContent
      .replaceAll(",", ".")
      .split(operatorsRegExp)
      .join(" ")
      .trim()
      .split(" ");

    if (args.at(-1).includes(".") || expression.textContent.length >= 20) return;
    expression.textContent += text;
    result.hidden = false;
    result.textContent = `= ${(+removeLastLetter()).toLocaleString()}`;
    expression.textContent = setStringLength(expression.textContent);
    if (stringHasOperators(expression.textContent)) {
      result.textContent = `= ${calculate(expression.textContent).toString().replaceAll(".", ",")}`;
    }
    changeResetButtonName();
    return;
  }
  if (expression.textContent === "NaN") {
    expression.textContent = text;
  }
  if (expression.textContent === "0") {
    expression.textContent = text;
    result.hidden = !result.hidden;
  } else {
    if (expression.textContent.length <= 20) {
      const args = expression.textContent
        .replace(/\s/g, "")
        .replaceAll(",", ".")
        .split(operatorsRegExp)
        .join(" ")
        .trim()
        .split(" ");
      const lastNum = args.at(-1);
      if (
        lastNum.length === 1 &&
        lastNum[0] == "0" &&
        !/[.\+\-÷×]/.test(text) &&
        !/[.\+\-÷×]/.test(expression.textContent.slice(-1))
      ) {
        return;
      }
      if (lastNum.length > 1 && lastNum[0] == "0" && lastNum[1] != ".") {
        return;
      }
      expression.textContent += text;
    }
  }
  if (stringHasOperators(expression.textContent)) {
    if (expression.textContent != "0÷0") {
      result.textContent = `= ${calculate(expression.textContent).toString().replaceAll(".", ",")}`;
    } else {
      result.textContent = "= Разделить на ноль нельзя";
    }
  }
  changeResetButtonName();
  updateExpression();
  updateResult();
  changeFontSize(expression.textContent);
}
function onEqualClick() {
  const value = expression.textContent;
  root.style.setProperty("--transition-sec", "0.3s");
  expression.style.fontSize = "1.565rem";
  changeResultFontSize(result);
  result.classList.add("active");
  if (stringHasOperators(value) && !value.includes("e")) {
    if (expression.textContent === "0÷0") {
      result.textContent = "= Разделить на ноль нельзя";
    } else {
      result.textContent = `= ${calculate(value).toString().replaceAll(".", ",")}`;
    }
  }

  setTimeout(() => {
    root.style.setProperty("--transition-sec", "none");
  }, 400);
}

function resetHandler() {
  if (resetButton.textContent === "C") {
    root.style.setProperty("--transition-sec", "none");
    expression.textContent = "0";
    result.textContent = "0";
    result.hidden = !result.hidden;
    changeResetButtonName();
    changeFontSize(expression.textContent);
  }
}
function removeHandler() {
  if (!result.classList.contains("active")) {
    if (expression.textContent !== "0") {
      if (expression.textContent.length === 1) {
        expression.textContent = "0";
        result.hidden = !result.hidden;
        changeResetButtonName();
        return;
      }
      expression.textContent = removeLastLetter();
      changeFontSize(expression.textContent);
      updateExpression();
      updateResult();
      if (stringHasOperators(expression.textContent))
        result.textContent = `= ${calculate(expression.textContent)}`;
    }
  }
}
function handleDivideClick(operation) {
  let lastValue = expression.textContent[expression.textContent.length - 1];
  if (lastValue != "÷") {
    if (lastValue === "×" || lastValue === "+" || lastValue === "-" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent +=
      typeof operation === "string" ? operation : operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
  changeResetButtonName();
}
function handleMultiplyClick(operation) {
  let lastValue = expression.textContent[expression.textContent.length - 1];
  if (lastValue != "×") {
    if (lastValue === "÷" || lastValue === "+" || lastValue === "-" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent +=
      typeof operation === "string" ? operation : operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
  changeResetButtonName();
}
function handleSubtractionClick(operation) {
  let lastValue = expression.textContent[expression.textContent.length - 1];
  if (lastValue != "-") {
    if (lastValue === "×" || lastValue === "+" || lastValue === "÷" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent +=
      typeof operation === "string" ? operation : operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
  changeResetButtonName();
}
function handleAdditionClick(operation) {
  let lastValue = expression.textContent[expression.textContent.length - 1];
  if (lastValue != "+") {
    if (lastValue === "×" || lastValue === "÷" || lastValue === "-" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent +=
      typeof operation === "string" ? operation : operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
  changeResetButtonName();
}
function handleEqualOutClick(operation) {
  if (result.classList.contains("active")) {
    result.style.fontSize = "1.5625rem";
    expression.style.fontSize = "2.5rem";
    result.hidden = false;

    if (operation) {
      expression.textContent = result.textContent.slice(2) + operation.textContent.trim();
    }
  }
}
function changeResetButtonName() {
  return (resetButton.textContent =
    expression.textContent.length > 1 ||
    (expression.textContent.length === 1 && expression.textContent != "0") ||
    !result.hidden
      ? "C"
      : "AC");
}
function removeLastLetter() {
  return expression.textContent.slice(0, -1);
}
function updateExpression() {
  let tmpStr = expression.textContent.replace(",", ".").replace(/\s/g, "");
  let integerNumber = setStringLength(tmpStr);
  if (integerNumber.includes(".")) {
    expression.textContent = integerNumber.replace(".", ",");
  } else {
    expression.textContent =
      integerNumber > 0.001
        ? (+integerNumber).toLocaleString().toString()
        : (expression.textContent = integerNumber.toString());
  }
}

function updateResult() {
  let numberStr = expression.textContent.replace(",", ".").replace(/\s/g, "");

  if (!stringHasOperators(numberStr)) {
    let resultText;
    if (+numberStr === 0) {
      result.textContent = "= 0";
      return;
    }
    if (numberStr.includes(".")) {
      let floatNumber = parseFloat(numberStr);

      if (floatNumber < Number.MAX_SAFE_INTEGER && floatNumber > 0.001) {
        resultText = `= ${floatNumber.toString().replace(".", ",")}`;
      } else {
        resultText = `= ${floatNumber.toExponential()}`;
      }
    } else if (numberStr.includes("e")) {
      resultText = numberStr;
    } else {
      let integerNumber = BigInt(setStringLength(numberStr));

      if (integerNumber <= Number.MAX_SAFE_INTEGER) {
        resultText = `= ${integerNumber.toLocaleString()}`;
      } else {
        resultText = `= ${integerNumber.toString()}`;
      }
    }

    result.textContent = resultText;
  }
}
function stringHasOperators(str) {
  const operationsArr = ["÷", "×", "-", "+"];
  let hasOperators;
  operationsArr.forEach(function (op) {
    if (str.includes(op)) {
      hasOperators = true;
      return hasOperators;
    }
  });
  return hasOperators;
}
function calculatePercentage(num) {
  if (typeof num === "string") {
    if (/[+\-÷×]/.test(num.slice(-1))) return num;
  }

  return num / 100;
}
function setStringLength(str) {
  return str.length > 20 ? str.slice(0, 20) : str;
}

function changeFontSize(str) {
  if (str.length <= 10) {
    expression.style.fontSize = "2.5rem";
    result.style.fontSize = "1.5625rem";
  }
  if (str.length > 10) {
    expression.style.fontSize = "2rem";
    result.style.fontSize = "1.3rem";
  }
  if (str.length > 12) {
    expression.style.fontSize = "1.75rem";
    result.style.fontSize = "1.15rem";
  }
  if (str.length > 15) {
    expression.style.fontSize = "1.55rem";
    result.style.fontSize = "1rem";
  }
  if (str.length > 17) {
    expression.style.fontSize = "1.2rem";
    result.style.fontSize = "1rem";
  }
}

function changeResultFontSize(result) {
  if (result.textContent.length <= 10) {
    result.style.fontSize = "2.5rem";
  }
  if (result.textContent.length > 10) {
    result.style.fontSize = "2rem";
  }
  if (result.textContent.length > 12) {
    result.style.fontSize = "1.75rem";
  }
  if (result.textContent.length > 15) {
    result.style.fontSize = "1.55rem";
  }
  if (result.textContent.length > 17) {
    result.style.fontSize = "1.15rem";
  }
}
