// Ensure balance is stored in localStorage
if (!localStorage.getItem("balance")) {
    localStorage.setItem("balance", "1000"); // Initial balance
  }
  
  // Function to update balance display
  function updateBalanceDisplay() {
    document.getElementById("balance").innerText = `Total Balance: ${localStorage.getItem("balance")} TK`;
  }
  
  // Function to add money
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
  
  // Load balance and add event listener
  document.addEventListener("DOMContentLoaded", function () {
    updateBalanceDisplay();
    document.getElementById("addMoneyBtn").addEventListener("click", addMoney);
  });
  