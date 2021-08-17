function inputValue(inpuId) {
    const inputValueString = document.getElementById(inpuId).value;
    const inputAmount = parseFloat(inputValueString);
    document.getElementById(inpuId).value = "";
    return inputAmount;
}
function totalTransact(transactSystemId, willBeAdd) {
    const initialValueText = document.getElementById(transactSystemId).innerText;
    const initialAmount = parseFloat(initialValueText);
    document.getElementById(transactSystemId).innerText = initialAmount + willBeAdd;
}
function haveBalance() {
    const initialBalanceSheet = document.getElementById("balance-total").innerText;
    const initialBalanceAmount = parseFloat(initialBalanceSheet);
    return initialBalanceAmount;
}
function balance(willBeAdd) {
    const initialBalanceAmount = haveBalance();
    document.getElementById("balance-total").innerText = initialBalanceAmount + willBeAdd;
}
// click function 
document.getElementById("deposit-button").addEventListener("click", function () {
    const newInputAmount = inputValue("deposit-input");
    if (newInputAmount > 0) {
        const totalDeposit = totalTransact("deposit-total", newInputAmount);
        const totalBalance = balance(newInputAmount);
    }
})
document.getElementById("withdraw-button").addEventListener("click", function () {
    const newInputAmount = inputValue("withdraw-input");
    const totalBalance = haveBalance();
    if (newInputAmount > 0 && newInputAmount < totalBalance) {
        const totalWithdraw = totalTransact("withdraw-total", newInputAmount);
        const totalBalance = balance(- newInputAmount);
    }
})