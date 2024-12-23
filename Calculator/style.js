const inputValue = document.getElementById("userinput");

let calcHistory = [];

const calculate = document.querySelectorAll(".bodmas").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let lastValue = inputValue.innerText.substring(
      inputValue.innerText.length,
      inputValue.innerText.length - 1
    );

    if (!isNaN(lastValue) && e.target.innerText === "=") {
      inputValue.innerText = eval(inputValue.innerText);

      calcHistory.push(inputValue.innerText);

      localStorage.setItem("key", calcHistory);
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
    } else if (e.target.innerText === "h") {
      inputValue.innerText = localStorage.getItem("key");
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
  });
});
