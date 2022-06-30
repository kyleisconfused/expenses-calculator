//Grabbing elements
const btn = document.getElementById("btn");

//Function and Event Listener
const calculate = function () {
  const rent = document.getElementById("rent").value;
  const power = document.getElementById("power").value;
  const internet = document.getElementById("internet").value;
  const food = document.getElementById("food").value;
  const result = (rent / 2 + power / 2 + internet / 2 + food / 2).toFixed(2);
  document.getElementById("result").innerHTML = `$${result}`;
};

btn.addEventListener("click", calculate);
