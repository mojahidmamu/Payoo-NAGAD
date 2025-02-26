document.addEventListener("DOMContentLoaded", function () {
  updateBalanceDisplay();
  document.getElementById("transferBtn").addEventListener("click", transferMoney);
});

function updateBalanceDisplay() {
  if (!localStorage.getItem("balance")) {
    localStorage.setItem("balance", "1000");
  }
  document.getElementById("balance").innerText = `Total Balance: ${localStorage.getItem("balance")} TK`;
}

function transferMoney() {
  const amount = parseFloat(document.getElementById("amount").value);
  const pin = document.getElementById("pin").value;
  const accountNumber = document.getElementById("accountNumber").value;

  if (pin.length !== 4 || accountNumber.length !== 11) {
    alert("PIN must be 4 digits and Account Number must be 11 digits.");
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
  alert("Transfer successful!");
}
