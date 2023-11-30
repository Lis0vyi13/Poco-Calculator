const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const resetButton = document.querySelector(".reset");
const removeButton = document.querySelector(".remove");
const functions = document.querySelectorAll(".function");
const root = document.documentElement;
functions.forEach((func) => {
  func.onselectstart = function () {
    return false;
  };
});
operations.forEach((op) => {
  op.onselectstart = function () {
    return false;
  };
});
numbers.forEach((num) => {
  num.onselectstart = function () {
    return false;
  };
});
operations.forEach((op) => {
  op.addEventListener("click", function (e) {
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
      const value = expression.textContent;
      console.log(value);
      root.style.setProperty("--transition-sec", "0.3s");
      expression.style.fontSize = " 1.5625rem";
      result.style.fontSize = " 2.5rem";
      result.classList.add("active");
      if (stringHasOperators(value) && !value.includes("e")) {
        result.textContent = `= ${calculate(value).toString().replaceAll(".", ",")}`;
      }

      setTimeout(() => {
        root.style.setProperty("--transition-sec", "none");
      }, 400);
    }
    let lastValue = expression.textContent[expression.textContent.length - 1];

    if (op.dataset.value === "/") {
      handleDivideClick(op, lastValue);
    }
    if (op.dataset.value === "*") {
      handleMultiplyClick(op, lastValue);
    }
    if (op.dataset.value === "-") {
      handleSubtractionClick(op, lastValue);
    }
    if (op.dataset.value === "+") {
      handleAdditionClick(op, lastValue);
    }
    changeResetButtonName();
  });
});

numbers.forEach((num) => {
  const text = num.textContent;

  num.addEventListener("click", function (e) {
    if (result.classList.contains("active")) {
      result.classList.remove("active");
      if (text === ",") {
        expression.textContent = "0,";
        result.textContent = `= 0`;
        handleEqualOutClick();
        return;
      }
      result.textContent = `= ${text}`;
    }

    if (result.style.fontSize === "2.5rem") {
      expression.textContent = text;
      handleEqualOutClick();
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

      if (args.at(-1).includes(".") || expression.textContent.length >= 22) return;
      expression.textContent += text;
      result.hidden = false;
      result.textContent = `= ${(+removeLastLetter()).toLocaleString()}`;

      expression.textContent = setStringLength(expression.textContent);
      if (stringHasOperators(expression.textContent)) {
        result.textContent = `= ${calculate(expression.textContent)
          .toString()
          .replaceAll(".", ",")}`;
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
      expression.textContent += text;
    }
    if (stringHasOperators(expression.textContent)) {
      result.textContent = `= ${calculate(expression.textContent).toString().replaceAll(".", ",")}`;
    }

    changeResetButtonName();
    updateExpression();
    updateResult();
    changeFontSize(expression.textContent);
  });
});

resetButton.addEventListener("click", function (e) {
  if (resetButton.textContent === "C") {
    root.style.setProperty("--transition-sec", "none");
    expression.textContent = "0";
    result.textContent = "0";
    result.hidden = !result.hidden;
    changeResetButtonName();
    changeFontSize(expression.textContent);
  }
});

removeButton.addEventListener("click", function (e) {
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
    }
  }
});

function calculate(value) {
  if (value.endsWith(",")) value = value.slice(0, value.length - 1);
  console.log(value);
  const operatorsRegExp = /[×÷+-]/g;

  let args = value.replaceAll(",", ".").split(operatorsRegExp).join(" ").trim().split(" ");
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
  let result = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
    if (stack[i] === "+") {
      result += stack[i + 1];
    }
    if (stack[i] === "-") {
      result -= stack[i + 1];
    }
  }
  return result;
}

function handleDivideClick(operation, lastValue) {
  if (lastValue != "÷") {
    if (lastValue === "×" || lastValue === "+" || lastValue === "-" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent += operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
}
function handleMultiplyClick(operation, lastValue) {
  if (lastValue != "×") {
    if (lastValue === "÷" || lastValue === "+" || lastValue === "-" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent += operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
}
function handleSubtractionClick(operation, lastValue) {
  if (lastValue != "-") {
    if (lastValue === "×" || lastValue === "+" || lastValue === "÷" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent += operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
}
function handleAdditionClick(operation, lastValue) {
  if (lastValue != "+") {
    if (lastValue === "×" || lastValue === "÷" || lastValue === "-" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent += operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
}
function handleEqualOutClick(operation) {
  if (result.style.fontSize === "2.5rem") {
    result.style.fontSize = "1.5625rem";
    expression.style.fontSize = "2.5rem";
    if (operation) {
      expression.textContent = result.textContent.slice(2) + operation.textContent.trim();
    }
  }
}
function changeResetButtonName() {
  return (resetButton.textContent =
    expression.textContent.length > 1 || !result.hidden ? "C" : "AC");
}
function removeLastLetter() {
  return expression.textContent.slice(0, expression.textContent.length - 1);
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
  return num / 100;
}
function setStringLength(str) {
  return str.length > 22 ? str.slice(0, 22) : str;
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
