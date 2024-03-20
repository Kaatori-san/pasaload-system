var balance = 0; // Initial balance

window.onload = function() {
    updateBalanceDisplay();

    document.getElementById("amount").addEventListener("keypress", function(event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            transferLoad();
            event.preventDefault();
        }
    });
    
    document.getElementById("addBalanceInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            addCurrentBalance();
            event.preventDefault();
        }
    });
};

function addCurrentBalance() {
    var addBalanceInput = parseFloat(document.getElementById("addBalanceInput").value);
    if (!isNaN(addBalanceInput) && addBalanceInput > 0) {
        balance += addBalanceInput;
        updateBalanceDisplay();
    } else {
        alert("Please enter a valid amount to add.");
    }

    updateBalanceDisplay();
    if (addBalanceInput > 0) {
        document.getElementById("result").innerHTML = "Successfully added " + addBalanceInput.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Current balance unchanged.";
    }
}

function updateBalanceDisplay() {
    document.getElementById("balanceAmount").innerHTML = "Current Balance: " + balance.toFixed(2);
    document.getElementById("result").innerHTML = "";
    document.getElementById("deduction").innerHTML = "";
}

function transferLoad() {
    var sender = document.getElementById("sender").value;
    var receiver = document.getElementById("receiver").value;
    var amount = parseFloat(document.getElementById("amount").value);

    if (balance < amount) {
        updateBalanceDisplay();
        document.getElementById("result").innerHTML = "Transaction failed: Insufficient balance.";
        return;
    }

    balance -= amount;

    updateBalanceDisplay();
    document.getElementById("result").innerHTML = "Successfully transferred " + amount.toFixed(2) + " load from " + sender + " to " + receiver + ".";
    document.getElementById("deduction").innerHTML = "Deducted " + amount.toFixed(2) + " to Current Balance";
}


