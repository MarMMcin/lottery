const buttonRandom = document.querySelector("button");
const form = document.querySelector("form");

const task = document.createElement("li");
let arr = [];
ticketPrice = 3;
let yourNumbArr = [];
const result = document.getElementById("result");

const input = document.querySelector("input");
const deleteNumbers = document.getElementById("deletYourNumbers");
const xButton = document.getElementById("close");
const price = document.getElementById("price");
const winMoneyAll = document.getElementById("winMoneyAll");
const winMoney = [1000];
const money = (winMoneyAll.innerHTML = ` all your money ${winMoney}  PLN`);
const closed = () => {
  document.getElementById("rules").remove();
};

const deleteArr = () => {
  removeTask();
  yourNumbArr.splice(0, 6);
  result2.innerHTML = "";
};
const addTask = e => {
  e.preventDefault();

  const numberInInput = input.value;

  for (let i = 0; i < yourNumbArr.length; i++) {
    if (numberInInput * 1 === yourNumbArr[i]) {
      return;
    }
  }

  if (yourNumbArr.length > 5) {
    return;
  } else if (numberInInput !== "") {
    yourNumbArr.push(numberInInput * 1);
  }

  result2.innerHTML = ` your numbers: ${yourNumbArr.sort(function(a, b) {
    return a - b;
  })}`;

  input.value = "";
};

const removeTask = () => {
  document.querySelectorAll(".circle").forEach(e => e.remove());
  result.innerHTML = "";

  arr.splice(0, 6);
  document.querySelectorAll(".task").forEach(e => e.remove());
  winNumbers.innerHTML = "";
  price.innerHTML = "";
};
const addElement = () => {
  if (yourNumbArr.length < 6) return alert("PLEASE ENTER YOUR LUCKY NUMBERS");
  if (yourNumbArr.length > 5) {
    if (arr.length > 5 || winMoney.reduce((x, y) => x + y) < 20) {
      return;
    } else {
      let number = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
      for (let i = 0; i < arr.length; i++) {
        if (number === arr[i]) {
          return;
        }
      }

      const div = document.createElement("div");

      document.getElementById("nav").appendChild(div);
      div.className = "circle";
      div.setAttribute("id", "circle");
      div.textContent = number;

      console.log(div);
      arr.push(number);
    }

    if (arr.length > 5) {
      start();

      document.getElementById("delButton").appendChild(task);
      task.className = "task";
      task.setAttribute("id", "task");

      task.innerHTML = "<button>draw again</button>";

      task.querySelector("button").addEventListener("click", removeTask);
      // tutaj

      // }

      result.innerHTML = ` lottery numbers: ${arr.sort(function(a, b) {
        return a - b;
      })}`;
    }

    if (task.classList.contains("task")) {
      return;
    }
  }
};

// if ((arr.length = yourNumbArr.length)) {
//   const intersection = arr.filter(element => yourNumbArr.includes(element));
// }

start = () => {
  const nu = () => {
    if (arr2.length > 1) {
      return "numbers: ";
    } else if (arr2.length == 1) {
      return "number: ";
    } else return "";
  };

  const newPrice = () => {
    if (arr2.length < 3) {
      winMoney.push(-ticketPrice);
      return 0;
    } else if (arr2.length == 3) {
      winMoney.push(24);
      winMoney.push(-ticketPrice);
      return 24;
    } else if (arr2.length == 4) {
      winMoney.push(175);
      winMoney.push(-ticketPrice);
      return 175;
    } else if (arr2.length == 5) {
      winMoney.push(8000);
      winMoney.push(-ticketPrice);
      return 8000;
    } else {
      winMoney.push(1000000);
      winMoney.push(-ticketPrice);
      return 1000000;
    }
  };
  const AllMoney = () => {
    return winMoney.reduce((x, y) => x + y);
  };
  const arr2 = arr.filter(element => yourNumbArr.includes(element));
  console.log(arr2);
  if (arr.length > 5) {
    winNumbers.innerHTML = ` You roll ${arr2.length} ${nu()} ${arr2.sort(
      function(a, b) {
        return a - b;
      }
    )}`;

    price.innerHTML = ` you win  ${newPrice()} PLN`;
    winMoneyAll.innerHTML = ` all your money ${AllMoney()}  PLN`;
  }
};

buttonRandom.addEventListener("click", addElement);
deleteNumbers.addEventListener("click", deleteArr);
form.addEventListener("submit", addTask);
xButton.addEventListener("click", closed);
