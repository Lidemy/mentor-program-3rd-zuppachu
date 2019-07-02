const display = document.querySelector('.display');
const buttonArea = document.querySelector('.buttonArea');
let firstNum;
let secondNum;
let operator;
let hasOperator = false; // 代表還沒按過 operators

// 設定：加減乘除
function count(n1, oper, n2) {
  switch (oper) {
    case '+':
      display.innerText = Number(n1) + Number(n2);
      break;
    case '-':
      display.innerText = Number(n1) - Number(n2);
      break;
    case 'x':
      display.innerText = Number(n1) * Number(n2);
      break;
    case '÷':
      display.innerText = Number(n1) / Number(n2);
      break;
    default:
      break;
  }
  return display.innerText;
}

function numKey(e) {
  if (e.target.classList.contains('key_items')) {
    const key = e.target.innerText;
    switch (key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (display.textContent === '0') {
          display.textContent = '';
        }
        display.textContent += e.target.innerText;
        break;
      case 'AC':
        display.innerText = '0';
        hasOperator = false;
        firstNum = '';
        secondNum = '';
        operator = '';
        break;
      case '.':
        if (display.textContent.includes('.') === false) {
          display.textContent += e.target.innerText;
        }
        break;
      default:
        break;
    }

    // 按下運算子後賦值給 firstNum and secondNum
    if (e.target.classList.contains('operators') && hasOperator === false) {
      firstNum = display.textContent;
      operator = e.target.innerText;
      hasOperator = true;
      display.textContent = '0';
    } else if (key === '=' && hasOperator === true) {
      secondNum = display.textContent;
      hasOperator = false;
      display.textContent = count(firstNum, operator, secondNum);
    }
  }
}

buttonArea.addEventListener('click', numKey, false);
