if (!localStorage.getItem("balance")) {
    localStorage.setItem("balance", "1000");
  }
  
  function updateBalanceDisplay() {
    document.getElementById("balance").innerText = `Total Balance: ${localStorage.getItem("balance")} TK`;
  }
  
  function transferMoney() {
    const amount = parseFloat(document.getElementById("amount").value);
    const pin = document.getElementById("pin").value;
    const accountNumber = document.getElementById("accountNumber").value;
  
    if (pin.length !== 4) {
      alert("PIN must be exactly 4 digits.");
      return;
    }
    if (accountNumber.length !== 11) {
      alert("Account Number must be exactly 11 digits.");
      return;
    }
  
    let balance = parseFloat(localStorage.getItem("balance"));
    if (isNaN(amount) || amount <= 0) {
      alert("Enter a valid amount.");
      return;
    }
    if (amount > balance) {
      alert("Insufficient balance.");
      return;
    }
  
    balance -= amount;
    localStorage.setItem("balance", balance.toString());
  
    updateBalanceDisplay();
    alert("Transfer successful!");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    updateBalanceDisplay();
    document.getElementById("transferBtn").addEventListener("click", transferMoney);
  });
  