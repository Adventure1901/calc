const inputValue = document.getElementById("userinput");

let calcHistory = [];

const calculate = document.querySelectorAll(".bodmas").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let lastValue = inputValue.innerText.substring(
      inputValue.innerText.length,
      inputValue.innerText.length - 1
    );

    if (!isNaN(lastValue) && e.target.innerText === "=") {
      let output = inputValue.innerText;

      inputValue.innerText = eval(inputValue.innerText);
      // console.log({ Text: inputValue.innerText, inputValue, output });
      let oldHistory = JSON.parse(localStorage.getItem("history")) || [];
      // console.log(oldHistory);
      let history = [
        ...oldHistory,
        { calculation: output, ans: inputValue.innerText },
      ];

      // show only last 4 calculations
      if (history.length > 4) {
        history = history.slice(-4);
      }

      localStorage.setItem("history", JSON.stringify(history));
    } else if (e.target.innerText === "AC") {
      inputValue.innerText = "0";
    } else if (e.target.innerText === "DEL") {
      inputValue.innerText = inputValue.innerText.substring(
        0,
        inputValue.innerText.length - 1
      );

      if (inputValue.innerText.length == 0) {
        inputValue.innerText = "0";
      }
    } else {
      if (!isNaN(lastValue)) {
        inputValue.innerText += e.target.innerText;
      }
    }
  });
});

const number = document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerText.trim();
    // calcHistory.push(inputValue.innerText);

    // localStorage.setItem("key", calcHistory);
  });
});

// in popup calc history showed
let historyfun = document.getElementById("histo");

function openPopup() {
  historyfun.innerText = localStorage.getItem("history");
}

// popup showed
const open = document.querySelector(".historybtn");
const popup = document.querySelector(".popupjs");
const close1 = document.querySelector(".closesign");
const close2 = document.querySelector(".cancelbtn");

open.addEventListener("click", () => {
  popup.classList.add("show");
});

close1.addEventListener("click", () => {
  popup.classList.remove("show");
});

close2.addEventListener("click", () => {
  popup.classList.remove("show");
});

// import {} from "./expo.js";
