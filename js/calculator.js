const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const resetButton = document.querySelector(".reset");
const removeButton = document.querySelector(".remove");

function changeResetButtonName() {
  return (resetButton.textContent = result.hidden ? "AC" : "C");
}
function removeLastLetter() {
  return expression.textContent.slice(0, expression.textContent.length - 1);
}
function updateExpression() {
  let tmpStr = expression.textContent.replace(/\s/g, "");

  if (+setStringLength(tmpStr) < Number.MAX_SAFE_INTEGER && !expression.textContent.includes(".")) {
    expression.textContent = (+setStringLength(tmpStr)).toLocaleString().replace(".", ",");
  } else if (!expression.textContent.includes(".") && !expression.textContent.includes(",")) {
    expression.textContent = BigInt(setStringLength(tmpStr)).toLocaleString();
  } else {
    expression.textContent = setStringLength(tmpStr).replace(".", ",");
  }
}
function updateResult() {
  let tmp = expression.textContent.replace(",", ".");
  tmp = tmp.replace(/\s/g, "");
  let int = parseFloat(tmp);
  if (expression.textContent.length > 9) {
    if (int < Number.MAX_SAFE_INTEGER && !tmp.includes(".")) {
      result.textContent = `= ${int.toExponential().toLocaleString()}`;
    } else {
      result.textContent = `= ${int.toExponential().replace(".", ",")}`;
    }
  } else {
    if (int < Number.MAX_SAFE_INTEGER && !tmp.includes(".")) {
      result.textContent = `= ${int.toLocaleString()}`;
    } else {
      result.textContent = `= ${tmp.replace(".", ",")}`;
    }
  }
}
function calculatePercentage(num) {
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
operations.forEach((op) => {
  op.addEventListener("click", function (e) {
    if (op.dataset.value === "%") {
      let tmp = expression.textContent.replace(",", ".").replace(/\s/g, "");
      expression.textContent = setStringLength(calculatePercentage(+tmp));
      changeFontSize(expression.textContent);
      updateExpression();
      updateResult();
    }
  });
});

numbers.forEach((num) => {
  num.addEventListener("click", function (e) {
    const text = num.textContent;
    if (text === ",") {
      if (expression.textContent.includes(",") || expression.textContent.length >= 20) return;
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

    updateExpression();
    changeResetButtonName();
    updateResult();
    changeFontSize(expression.textContent);
  });
});

resetButton.addEventListener("click", function (e) {
  if (resetButton.textContent === "C") {
    expression.textContent = "0";
    result.textContent = "0";
    result.hidden = !result.hidden;
    changeResetButtonName();
    changeFontSize(expression.textContent);
  }
});
removeButton.addEventListener("click", function (e) {
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
});
