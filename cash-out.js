document.addEventListener("DOMContentLoaded", function () {
  updateBalanceDisplay();
  document.getElementById("cashOutBtn").addEventListener("click", cashOut);
});

function updateBalanceDisplay() {
  if (!localStorage.getItem("balance")) {
    localStorage.setItem("balance", "1000");
  }
  document.getElementById("balance").innerText = `Total Balance: ${localStorage.getItem("balance")} TK`;
}

function cashOut() {
  const amount = parseFloat(document.getElementById("amount").value);
  const pin = document.getElementById("pin").value;

  if (pin.length !== 4) {
    alert("PIN must be exactly 4 digits.");
    return;
  }

  let balance = parseFloat(localStorage.getItem("balance"));
  if (isNaN(amount) || amount <= 0 || amount > balance) {
    alert("Invalid amount or insufficient balance.");
    return;
  }

  balance -= amount;
  localStorage.setItem("balance", balance.toString());

  updateBalanceDisplay();
  alert("Cash out successful!");
}
