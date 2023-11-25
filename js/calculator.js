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

      expression.textContent = setStringLength(calculatePercentage(+tmp));
      console.log(expression.textContent);

      changeFontSize(expression.textContent);
      updateExpression();
      result.textContent = expression.textContent;
      return;
    }
    if (op.dataset.value === "=" && !result.hidden) {
      root.style.setProperty("--transition-sec", "0.3s");
      expression.style.fontSize = " 1.5625rem";
      result.style.fontSize = " 2.5rem";
      result.classList.add("active");
      setTimeout(() => {
        root.style.setProperty("--transition-sec", "none");
      }, 400);
    }
  });
});

numbers.forEach((num) => {
  num.addEventListener("click", function (e) {
    if (result.classList.contains("active")) result.classList.remove("active");

    const text = num.textContent;
    if (text === ",") {
      if (expression.textContent.includes(",") || expression.textContent.length >= 22) return;
      expression.textContent += text;
      result.hidden = false;
      result.textContent = `= ${(+removeLastLetter()).toLocaleString()}`;
      expression.textContent = setStringLength(expression.textContent);
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

function changeResetButtonName() {
  return (resetButton.textContent = result.hidden ? "AC" : "C");
}
function removeLastLetter() {
  return expression.textContent.slice(0, expression.textContent.length - 1);
}
function updateExpression() {
  let tmpStr = expression.textContent.replace(",", ".").replace(/\s/g, "");
  let integerNumber = setStringLength(tmpStr);
  console.log(integerNumber);
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
