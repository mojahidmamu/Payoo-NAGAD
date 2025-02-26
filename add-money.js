document.addEventListener("DOMContentLoaded", function () {
  updateBalanceDisplay();
  document.getElementById("addMoneyBtn").addEventListener("click", addMoney);
});

function updateBalanceDisplay() {
  if (!localStorage.getItem("balance")) {
    localStorage.setItem("balance", "1000");
  }
  document.getElementById("balance").innerText = `Total Balance: ${localStorage.getItem("balance")} TK`;
}

function addMoney() {
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount.");
    return;
  }

  let balance = parseFloat(localStorage.getItem("balance"));
  balance += amount;
  localStorage.setItem("balance", balance.toString());

  updateBalanceDisplay();
  alert("Money added successfully!");
}
